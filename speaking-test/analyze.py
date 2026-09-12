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
    parser.add_argument(
        "--silence-db",
        type=float,
        default=-40.0,
        help="Silence threshold in dB (default: -40). Phone recordings are usually "
        "quiet; -35 over-counts silence and inflates the net speaking rate.",
    )
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
        # Without this, a long trailing silence makes Whisper loop the same phrase
        # hundreds of times (seen once as "the things that are" x 300+).
        "--condition-on-previous-text",
        "False",
    ]
    subprocess.run(command, check=True)
    transcript = output_dir / "transcript.json"
    if not transcript.exists():
        raise SystemExit(f"Whisper finished but did not create {transcript}")
    return transcript


def detect_silences(
    ffmpeg: str, audio: Path, threshold_db: float = -40.0
) -> list[dict[str, float]]:
    result = subprocess.run(
        [
            ffmpeg,
            "-hide_banner",
            "-i",
            str(audio),
            "-af",
            f"silencedetect=noise={threshold_db}dB:d=0.5",
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


def analyse(
    transcript_data: dict,
    duration: float,
    silences: list[dict],
    threshold_db: float = -40.0,
) -> dict:
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
    durations = [silence["duration"] for silence in silences]
    silence_total = sum(durations)
    speaking_seconds = max(duration - silence_total, 0)
    unique_words = {
        re.sub(r"[^a-z']", "", str(word.get("word", "")).lower())
        for word in recognised_words
    }
    unique_words.discard("")
    longest = max(durations, default=0)
    longest_at = next(
        (silence["start"] for silence in silences if silence["duration"] == longest), 0
    )

    return {
        "duration_seconds": duration,
        "recognised_word_count": len(recognised_words),
        "unique_word_count": len(unique_words),
        "type_token_ratio": (
            len(unique_words) / len(recognised_words) if recognised_words else 0
        ),
        "whole_recording_words_per_minute": (
            len(recognised_words) / duration * 60 if duration else 0
        ),
        # The rate that matters: pauses removed. If this falls outside 90-130 wpm,
        # the silence threshold is probably wrong for this recording.
        "net_words_per_minute": (
            len(recognised_words) / speaking_seconds * 60 if speaking_seconds else 0
        ),
        "silence_threshold_db": threshold_db,
        "silence_total_seconds": silence_total,
        "silence_ratio": silence_total / duration if duration else 0,
        "speaking_seconds": speaking_seconds,
        "silences_at_least_0_5_seconds": len(silences),
        "silences_at_least_0_7_seconds": sum(1 for value in durations if value >= 0.7),
        "silences_at_least_1_0_seconds": sum(1 for value in durations if value >= 1.0),
        "silences_at_least_2_0_seconds": sum(1 for value in durations if value >= 2.0),
        "silences_at_least_3_0_seconds": sum(1 for value in durations if value >= 3.0),
        "longest_silence_seconds": longest,
        "longest_silence_at": longest_at,
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

    report = f"""# 录音分析：{source.name}

## 关键指标

| 项目 | 数值 |
|---|---|
| 时长 | {format_time(metrics['duration_seconds'])} |
| 词数 | {metrics['recognised_word_count']}（不重复 {metrics['unique_word_count']}，占 {metrics['type_token_ratio'] * 100:.0f}%） |
| **净语速（去掉停顿）** | **{metrics['net_words_per_minute']:.1f} wpm** |
| 整体语速（含停顿） | {metrics['whole_recording_words_per_minute']:.1f} wpm |
| 静音占比 | {metrics['silence_ratio'] * 100:.1f}%（{metrics['silence_total_seconds']:.1f}s / {metrics['duration_seconds']:.1f}s） |
| 最长停顿 | {metrics['longest_silence_seconds']:.2f}s（{metrics['longest_silence_at']:.1f}s 处） |

## 停顿分布（阈值 {metrics['silence_threshold_db']}dB）

| 档位 | 次数 |
|---|---|
| ≥0.5s | {metrics['silences_at_least_0_5_seconds']} |
| ≥0.7s | {metrics['silences_at_least_0_7_seconds']} |
| ≥1.0s | {metrics['silences_at_least_1_0_seconds']} |
| ≥2.0s | {metrics['silences_at_least_2_0_seconds']} |
| **≥3.0s** | **{metrics['silences_at_least_3_0_seconds']}** |

怎么读这张表（雅思官方 band descriptor 不设秒数，只看「偶发 vs 频繁」和「是否在找词」）：

- **0–1s** 是正常断句换气，不算问题，不用看
- **1–2s** 算犹豫：偶发可接受（6 分），频繁则扣分
- **2–3s** 明显扣分
- **≥3s** 严重，接近 Band 4 的 "noticeable pauses"

所以判断流利度时**优先看 ≥2s 和 ≥3s 的次数**，≥1s 只是参考 —— 它会把正常断句也数进去，容易高估问题。

## 低置信度词（需回听确认）

这些词可能来自发音、录音质量或 ASR 误识别，**只是复查线索，不等于错误**。

{uncertain_rows}

## 说明

- 净语速合理区间 90–130 wpm。若算出值超出这个范围，多半是静音阈值不适用于本录音，
  换 `--silence-db` 重试（手机录音常用 -40）。**跨录音对比必须固定同一阈值**。
- 整体语速含考官提问与静音，会严重低估，不要拿它判断流利度。
- 本报告只做统计，**不给出 IELTS 分数**。四项打分需要结合转写人工判定。
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
    silences = detect_silences(ffmpeg, audio, args.silence_db)
    metrics = analyse(transcript_data, duration, silences, args.silence_db)

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
