#!/usr/bin/env python3
"""Create a local transcript and fluency report for a speaking-test recording."""

from __future__ import annotations

import argparse
import json
import re
import shutil
import subprocess
import sys
from pathlib import Path

DEFAULT_MODEL = "mlx-community/whisper-small-mlx"


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Transcribe an IELTS speaking recording locally and analyse timing."
    )
    parser.add_argument("audio", type=Path, help="Path to an audio recording")
    parser.add_argument(
        "--output-dir",
        type=Path,
        help="Output directory (default: speaking-test/output/<recording-name>)",
    )
    parser.add_argument("--model", default=DEFAULT_MODEL, help="MLX Whisper model")
    parser.add_argument("--language", default="English", help="Recording language")
    parser.add_argument(
        "--reuse-transcript",
        action="store_true",
        help="Reuse output/transcript.json instead of running Whisper again",
    )
    return parser.parse_args()


def require_command(name: str, install_hint: str) -> str:
    command = shutil.which(name)
    if command:
        return command
    raise SystemExit(f"Missing command: {name}. {install_hint}")


def run(command: list[str]) -> subprocess.CompletedProcess[str]:
    return subprocess.run(command, check=True, text=True, capture_output=True)


def audio_duration(ffprobe: str, audio: Path) -> float:
    result = run(
        [
            ffprobe,
            "-v",
            "error",
            "-show_entries",
            "format=duration",
            "-of",
            "default=noprint_wrappers=1:nokey=1",
            str(audio),
        ]
    )
    return float(result.stdout.strip())


def transcribe(
    whisper: str, audio: Path, output_dir: Path, model: str, language: str
) -> Path:
    command = [
        whisper,
        str(audio),
        "--model",
        model,
        "--language",
        language,
        "--task",
        "transcribe",
        "--output-name",
        "transcript",
        "--output-dir",
        str(output_dir),
        "--output-format",
        "json",
        "--word-timestamps",
        "True",
        "--verbose",
        "False",
    ]
    subprocess.run(command, check=True)
    transcript = output_dir / "transcript.json"
    if not transcript.exists():
        raise SystemExit(f"Whisper finished but did not create {transcript}")
    return transcript


def detect_silences(ffmpeg: str, audio: Path) -> list[dict[str, float]]:
    result = subprocess.run(
        [
            ffmpeg,
            "-hide_banner",
            "-i",
            str(audio),
            "-af",
            "silencedetect=noise=-35dB:d=0.5",
            "-f",
            "null",
            "-",
        ],
        text=True,
        capture_output=True,
    )
    if result.returncode != 0:
        raise SystemExit(result.stderr.strip() or "ffmpeg silence detection failed")

    starts = [
        float(value)
        for value in re.findall(r"silence_start: ([0-9.]+)", result.stderr)
    ]
    ends = [
        (float(end), float(duration))
        for end, duration in re.findall(
            r"silence_end: ([0-9.]+) \| silence_duration: ([0-9.]+)",
            result.stderr,
        )
    ]
    return [
        {"start": start, "end": end, "duration": duration}
        for start, (end, duration) in zip(starts, ends)
    ]


def format_time(seconds: float) -> str:
    minutes, remainder = divmod(seconds, 60)
    return f"{int(minutes):02d}:{remainder:04.1f}"


def analyse(transcript_data: dict, duration: float, silences: list[dict]) -> dict:
    segments = transcript_data.get("segments", [])
    words = [word for segment in segments for word in segment.get("words", [])]
    recognised_words = [
        word for word in words if re.search(r"[A-Za-z]", str(word.get("word", "")))
    ]
    low_confidence = [
        {
            "word": str(word.get("word", "")).strip(),
            "start": float(word.get("start", 0)),
            "end": float(word.get("end", 0)),
            "probability": float(word.get("probability", 0)),
        }
        for word in recognised_words
        if float(word.get("probability", 0)) < 0.5
    ]
    material_silences = [silence for silence in silences if silence["duration"] >= 0.7]

    return {
        "duration_seconds": duration,
        "recognised_word_count": len(recognised_words),
        "whole_recording_words_per_minute": (
            len(recognised_words) / duration * 60 if duration else 0
        ),
        "silence_threshold_db": -35,
        "silences_at_least_0_5_seconds": len(silences),
        "silences_at_least_0_7_seconds": len(material_silences),
        "longest_silence_seconds": max(
            (silence["duration"] for silence in silences), default=0
        ),
        "low_confidence_words": low_confidence,
    }


def write_transcript(path: Path, transcript_data: dict) -> None:
    lines = [
        f"[{format_time(float(segment['start']))}–{format_time(float(segment['end']))}] "
        f"{str(segment['text']).strip()}"
        for segment in transcript_data.get("segments", [])
    ]
    path.write_text("\n".join(lines) + "\n", encoding="utf-8")


def write_report(path: Path, source: Path, metrics: dict) -> None:
    uncertain = metrics["low_confidence_words"]
    uncertain_rows = "\n".join(
        f"- `{item['word']}` at {format_time(item['start'])} "
        f"(confidence {item['probability']:.2f})"
        for item in uncertain
    ) or "- None"

    report = f"""# Speaking recording analysis

## Recording

- Source: `{source.name}`
- Duration: {format_time(metrics['duration_seconds'])}
- Recognised words: {metrics['recognised_word_count']}
- Whole-recording rate: {metrics['whole_recording_words_per_minute']:.1f} words/minute
- Silences ≥0.7 seconds: {metrics['silences_at_least_0_7_seconds']}
- Longest silence: {metrics['longest_silence_seconds']:.1f} seconds

The whole-recording rate includes both examiner questions and candidate answers. It is
not an IELTS score. Use the timestamped transcript to separate answers before making
answer-level fluency judgements.

## Low-confidence recognition

These words may reflect unclear pronunciation, recording quality, or an ASR mistake;
they are prompts for review, not confirmed pronunciation errors.

{uncertain_rows}

## Files

- `transcript.txt`: readable timestamped transcript
- `transcript.json`: Whisper output with word timestamps and confidence
- `metrics.json`: machine-readable timing summary

IELTS band scores still require a contextual assessment of fluency and coherence,
lexical resource, grammar, and pronunciation. Whisper does not assign IELTS scores.
"""
    path.write_text(report, encoding="utf-8")


def main() -> int:
    args = parse_args()
    audio = args.audio.expanduser().resolve()
    if not audio.is_file():
        raise SystemExit(f"Audio file not found: {audio}")

    project_dir = Path(__file__).resolve().parent
    output_dir = (
        args.output_dir.expanduser().resolve()
        if args.output_dir
        else project_dir / "output" / audio.stem
    )
    output_dir.mkdir(parents=True, exist_ok=True)

    ffmpeg = require_command("ffmpeg", "Install ffmpeg and try again.")
    ffprobe = require_command("ffprobe", "Install ffmpeg and try again.")
    transcript_path = output_dir / "transcript.json"

    if args.reuse_transcript:
        if not transcript_path.exists():
            raise SystemExit(f"Cannot reuse missing transcript: {transcript_path}")
    else:
        whisper = require_command(
            "mlx_whisper", "Install it with: python3 -m pip install mlx-whisper"
        )
        transcript_path = transcribe(
            whisper, audio, output_dir, args.model, args.language
        )

    transcript_data = json.loads(transcript_path.read_text(encoding="utf-8"))
    duration = audio_duration(ffprobe, audio)
    silences = detect_silences(ffmpeg, audio)
    metrics = analyse(transcript_data, duration, silences)

    write_transcript(output_dir / "transcript.txt", transcript_data)
    (output_dir / "metrics.json").write_text(
        json.dumps(metrics, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    write_report(output_dir / "report.md", audio, metrics)

    print(f"Analysis written to: {output_dir}")
    print(f"Report: {output_dir / 'report.md'}")
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except subprocess.CalledProcessError as error:
        if error.stderr:
            print(error.stderr.strip(), file=sys.stderr)
        raise SystemExit(error.returncode) from error
