#!/usr/bin/env python3
"""Compute fluency metrics for the candidate's speech only.

A full mock recording also contains the examiner's questions and the one-minute
prep silence, so the whole-file numbers in ``metrics.json`` are useless
(net rate came out at 295 wpm once). This script takes the time ranges where
the candidate is actually speaking and recomputes everything from the word
timestamps in ``transcript.json``.

Usage:
    python3 candidate_metrics.py 第一次考试 P1:5-55 P1:62-102 P2:306-435 P3:452-497

Ranges are ``LABEL:START-END`` in seconds. Labels may repeat (e.g. several
``P1`` chunks); per-chunk rows are printed and a total is given at the end.
"""

from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path


def load_words(transcript: Path) -> list[tuple[float, float, str]]:
    data = json.loads(transcript.read_text(encoding="utf-8"))
    segments = data["segments"] if isinstance(data, dict) else data
    words: list[tuple[float, float, str]] = []
    for segment in segments:
        for word in segment.get("words", []):
            words.append((word["start"], word["end"], word["word"].strip()))
    words.sort()
    return words


def parse_range(spec: str) -> tuple[str, float, float]:
    match = re.fullmatch(r"([A-Za-z0-9_-]+):([0-9.]+)-([0-9.]+)", spec)
    if not match:
        raise SystemExit(f"Bad range {spec!r}; expected LABEL:START-END (e.g. P2:306-435)")
    return match.group(1), float(match.group(2)), float(match.group(3))


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("name", help="Recording name, i.e. output/<name>")
    parser.add_argument("ranges", nargs="+", help="LABEL:START-END in seconds")
    parser.add_argument(
        "--output-dir",
        type=Path,
        default=Path(__file__).resolve().parent / "output",
        help="Base output directory (default: speaking-test/output)",
    )
    args = parser.parse_args()

    transcript = args.output_dir / args.name / "transcript.json"
    if not transcript.exists():
        raise SystemExit(f"Missing {transcript}")
    words = load_words(transcript)

    total_words = 0
    total_duration = 0.0
    total_gaps = {1.0: 0, 2.0: 0, 3.0: 0}
    bag: list[str] = []

    print(f"===== {args.name}")
    for spec in args.ranges:
        label, start, end = parse_range(spec)
        chunk = [w for w in words if start <= w[0] <= end]
        if not chunk:
            print(f"  {label}: (no words in {start}-{end}s)")
            continue

        span = chunk[-1][1] - chunk[0][0]
        gaps = [chunk[i + 1][0] - chunk[i][1] for i in range(len(chunk) - 1)]
        speaking = max(span - sum(g for g in gaps if g > 0), 0.1)
        counts = {t: sum(1 for g in gaps if g >= t) for t in total_gaps}

        print(
            f"  {label}: {len(chunk):3d} words  {span:5.1f}s  "
            f"{len(chunk) / speaking * 60:5.1f} wpm  "
            f">=1s {counts[1.0]}  >=2s {counts[2.0]}  >=3s {counts[3.0]}"
        )

        total_words += len(chunk)
        total_duration += span
        bag += [w[2].lower() for w in chunk]
        for threshold in total_gaps:
            total_gaps[threshold] += counts[threshold]

    if not total_words:
        return 1
    unique = len({re.sub(r"[^a-z']", "", w) for w in bag} - {""})
    print(
        f"  --- total: {total_words} words  unique {unique} "
        f"({unique / total_words * 100:.0f}%)  {total_duration:.1f}s  "
        f">=1s {total_gaps[1.0]}  >=2s {total_gaps[2.0]}  >=3s {total_gaps[3.0]}"
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())
