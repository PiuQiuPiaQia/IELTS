# speaking-test — 口语录音批改

本目录用于本地处理 IELTS 口语录音：转写 → 停顿/语速统计 → 四项 Band 评分。
**这个目录是「一份录音一份报告」的作业区，不是知识库。** 只有用户明确要求时才做跨录音汇总。

## 目录里的东西

| 路径 | 用途 |
|---|---|
| `analyze.py` | 流水线脚本：MLX Whisper 转写 + ffmpeg 静音检测，产出统计。**不打分** |
| `recordings/` | 用户存的录音（gitignore） |
| `output/<录音名>/` | 每次分析的产物（gitignore）：`report.md`、`transcript.txt`、`transcript.json`、`metrics.json` |
| `错题本.md` | 累计错题与替换表（2026-09-12 建，覆盖 7 份录音）。**默认不动** |
| `README.md` | 面向人的使用说明；本文件面向 agent |

## 进 git 的边界

只有**工具本身**进仓库：`.gitignore`、`README.md`、`AGENTS.md`、`analyze.py`。

录音、分析结果、`错题本.md` 都是个人数据/派生产物，已全部忽略，**不要提交也不要 `git add -f`**：

```
recordings/  output/  __pycache__/  *.pyc
错题本.md
*.m4a  *.mp3  *.wav  *.mp4  *.aiff   ← 安全网，音频落在哪都不进仓库
```

根 `.gitignore` 另有一条全局 `*.m4a`，防止录音被存到仓库其他位置后误提交。
验证：`git status --porcelain --ignored speaking-test/`，`!!` 开头的才是被忽略的。

## 完整流程

### 1. 先把录音落到稳定路径（最容易翻车）

从「语音备忘录」分享出来的路径形如
`~/Library/Containers/com.apple.VoiceMemos/Data/tmp/.com.apple.uikit.itemprovider.temporary.XXXX/`
**几分钟后就被系统回收**，且该容器整体 `Operation not permitted`，翻不回来。

拿到路径先立刻复制：

```bash
cp "<用户给的路径>" /Users/zhangao/Documents/IELTS/speaking-test/recordings/
```

若已失效，直接让用户重新导出：语音备忘录 → 长按 → 分享 → 「存储到文件」→ 存到 `recordings/` 或桌面。
不要去容器里翻找。

### 2. 跑流水线

`mlx_whisper` 装在隔离 venv，**不在系统 PATH**：

```bash
PATH="/Users/zhangao/.workbuddy-ai/binaries/python/envs/default/bin:$PATH" \
  /Users/zhangao/.workbuddy-ai/binaries/python/envs/default/bin/python \
  /Users/zhangao/Documents/IELTS/speaking-test/analyze.py \
  "<录音路径>" \
  --model mlx-community/whisper-large-v3-turbo \
  --language English
```

- **必须指定 `large-v3-turbo`**，默认 `whisper-small-mlx` 质量差，直接影响词汇和语法判分。
- 2 分钟录音约 12 秒；长录音放后台。已有 `transcript.json` 只想重算报告时加 `--reuse-transcript`。
- `--silence-db` 默认 **-40**（手机录音适用）。**跨录音对比必须固定同一阈值**，否则没有可比性。

### 3. 评分（脚本不出分，由 agent 判）

标准见 `../调研资料/口语评分标准_参考.md`，四项各 .5 分档，用户目标 **5.5**：

1. **FC** — 停顿数据 + 连接词 + 是否说满时长
2. **LR** — 话题词汇覆盖、重复率（看 `type_token_ratio`）、搭配
3. **GRA** — 句型多样性、时态、从句
4. **P** — **必须回听录音**，转写只能提供低置信度线索

Overall = 四项平均，四舍五入到 .5。

## 读数据的口径

**停顿**（官方 band descriptor 不设秒数，只看「偶发 vs 频繁」和「组织内容 vs 找词」）：

| 时长 | 判定 |
|---|---|
| 0–1s | 正常断句换气，**不计问题** |
| 1–2s | 犹豫。偶发 = 6 分可接受；频繁 = 掉分 |
| 2–3s | 明显扣分 |
| ≥3s | 严重，接近 Band 4 的 "noticeable pauses" |

- **别拿「≥1s 共 N 次」当主要指标**（用户因此质疑过），会把正常断句算进去、严重高估问题。报 ≥2s / ≥3s。
- **停顿位置比时长更重要**：在意群/句子边界停 = 组织内容；一句话中间停或在找词 = 扣分。
  按起始时间排序，找出最长 2–3 个停顿卡在哪两句之间 —— 这个结论比「你停顿太多」有用得多。
- 该用户多份录音 **≥3s 为 0**，长停顿不是他的问题，别反复提。

**语速**：只看 `net_words_per_minute`（去掉静音），`whole_recording_words_per_minute` 含静音和考官提问，会严重低估。
五篇 -40dB 统一口径实测净语速 **84.2 / 84.6 / 89.4 / 89.6 / 107.0**（下限 84，不是 90）。
超出 90–130 先怀疑阈值错了，不是考生太快。

**词数预算**：含停顿的实际产出率平均 **66 词/分钟**，Part 2 两分钟 ≈ 130 词。
分配：开场 ~20 词／**故事 ~50 词（1:05 前必须停）**／两个原因+结尾 ~60 词。
用户实际每份 148–187 词 → 每份超时 20–80 秒，这是 FC 的隐藏扣分项。

## 转写不可全信

低置信度词（probability < 0.5）只是复查线索，**不等于发音错误**。评分前必须交叉验证：

- **置信度高 ≠ 转写对**：`shorten our relationship` p=0.97 实为 `strengthen`；`married` p=0.76 实为 `measured`。
- 反过来，`customers with Japan` 置信度 >0.5 但语义荒谬，实为 `customs/culture of Japan`。
- 判据是**语义荒谬 + 练习站素材库有原句**。存疑的列进「转写存疑（需回听）」，**不计为考生错误**。
- Whisper 不转写 `uh/um`，转写里没填充词 ≠ 没犹豫。
- 尾部静音会让 Whisper 无限重复循环（`--condition-on-previous-text False` 已在脚本里默认关掉）；
  万一 `transcript.txt` 尾部出现同句反复、词级 p 低至 0.0001，**不要把幻觉当考生说的话评分**。

## 报告格式

**默认只产出一份** `output/<录音名>/评分.md`，写完用 present_files 展示即收工。用户嫌长，**必须这个顺序**：

```markdown
# 口语评分：P2「题目」

## 速览
| 项目 | 结果 |
|---|---|
| **综合** | 6.0（目标 5.5） |
| 流利度 FC / 词汇 LR / 语法 GRA / 发音 P | 5.5 / 6.0 / 6.0 / 未判定 |
| **词汇量** | 187 词，不重复 102（占 55%） |
| **长停顿** | ≥2s 1 次 ｜ ≥3s 0 次 |
| 时长 / 静音 | 2:35 ｜ 32% |
| 净语速 | 107 wpm |

## 错误清单        ← 本次全部错误，一行一条
## 反复犯的错      ← 标 🔴仍在犯 / 🟢已改掉；写报告里，别另开文件
## 可统一替换      ← 没错但换成这些更稳
## 下一步（≤3 条，按性价比）
## 附：转写（+ ASR 修正说明）
```

速览表必须在最前面；分析过程能压成表格就压成表格；转写放最后并标注 ASR 修正。

**不要主动做**（用户原话：「其他的我也没让你总结，让你总结的时候再总结」）：
❌ 更新 `错题本.md` ❌ 跨录音汇总/趋势/对照表 ❌ 「进步回顾」段落 ❌ 回复里复述报告内容。
「反复犯的错」基于当次录音 + 已有报告写，报告自包含即可。

**回复要短**：结论（几分）+ 最该改的 1–2 条 + 完。

## 评分校准（已知偏差，要主动修正）

1. **FC 易偏严约 0.5**：机器测的静音占比比人耳苛刻，自然口语本身就有 20–30% 停顿，24% 是正常的。
   判 FC 优先看：有无 ≥3s、是否超 2 分钟、卡顿偶发还是密集 —— 不看静音百分比。
2. **P 没评，Overall 可能偏松**：发音没数据时只能假设 5.5/6.0。要在报告里明说，并给出
   「P=5.0 时 Overall 掉到多少」的敏感性说明。听不了音频就写「未判定」，别瞎给分。
3. **整体局限要交代**：判断基于 ASR + 声学统计，考官听到的是完整语音。分数是**估计值**不是判定值。

## 做跨录音汇总时（仅当用户明确要求）

1. **按错误类型而不是条数汇总**，并画每篇分布（如 `2·0·0·3·0·0·4`）。
   该用户规律：老问题逐个被消灭，灭掉一个下一个浮上来当主力（冠词 5 → 介词 6 → 三单 9 → 时态 9）。
2. **警惕伪归零**：某类型归零可能只是语法环境变了。如第 7 篇改用过去时，三单机会变少 → 三单「归零」，
   但换来时态混用 4 处。要如实说明这个 trade-off，别把好事说满。
3. **算错误密度（错误数 ÷ 词数）**，别只比总数（词数从 217 降到 147 会误导）。
   该用户密度稳定在每 100 词 3–5.4 处，重录那篇 1.07。
   → 最强建议：**同一题录两遍**，实测错误密度降 64%、停顿密度降 31%、Overall 5.5→6.0。
   错误是熟练度问题，不是能力问题。

## 环境速查

| 问题 | 解决 |
|---|---|
| `mlx_whisper not found` | 用上面的 PATH 前缀；重装：`/Users/zhangao/.workbuddy-ai/binaries/python/envs/default/bin/pip install mlx-whisper` |
| `ffmpeg not found` | `/opt/homebrew/bin/ffmpeg` 应已装 |
| 非 Apple Silicon | MLX 跑不了，需换 whisper.cpp 等后端 |
| 解析静音日志 | 正则必须写 `silence_duration: ([0-9.]+)`，宽泛的 `([0-9.]+)` 会抓到时间戳，算出几亿秒 |

验证用临时产物放 `/tmp` 并清理；`output/` 和 `recordings/` 已 gitignore，可留给用户回看。
