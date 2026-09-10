# Speaking Test

本地分析 IELTS 口语录音：使用 MLX Whisper 生成带时间戳和置信度的转写，并通过 FFmpeg 统计停顿。

## 隐私与边界

- 音频在本机处理，不上传到语音识别服务。
- 首次运行时会从 Hugging Face 下载模型，之后使用本机缓存。
- `output/` 和 `recordings/` 已被忽略，不会提交个人录音和分析结果。
- Whisper 只负责转写，不会自动给出可靠的 IELTS 分数。最终评分仍需结合上下文分析四项标准。

## 环境

适用于 Apple Silicon Mac，需要：

```bash
python3 -m pip install mlx-whisper
brew install ffmpeg
```

如果已经能运行 `mlx_whisper`、`ffmpeg` 和 `ffprobe`，无需重复安装。

## 使用

可将录音放进本目录下的 `recordings/`，也可以直接传入任意本地路径：

```bash
python3 speaking-test/analyze.py "/path/to/recording.m4a"
```

默认使用 `mlx-community/whisper-small-mlx`。可切换模型：

```bash
python3 speaking-test/analyze.py recording.m4a \
  --model mlx-community/whisper-large-v3-turbo
```

如果转写已生成，只重新计算报告：

```bash
python3 speaking-test/analyze.py recording.m4a --reuse-transcript
```

结果写入 `speaking-test/output/<录音文件名>/`：

- `report.md`：可读分析摘要
- `transcript.txt`：带时间戳的转写
- `transcript.json`：词级时间戳和置信度
- `metrics.json`：机器可读的统计数据

低置信度词只是复查线索，可能来自发音、录音质量或模型误识别，不能直接视为发音错误。
