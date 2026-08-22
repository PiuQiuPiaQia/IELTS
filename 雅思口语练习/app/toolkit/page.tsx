import type { Metadata } from "next";
import SpeakingToolkit from "./speaking-toolkit";

export const metadata: Metadata = {
  title: "雅思口语练习｜万能素材工具箱",
  description: "三类对比、九类完整万能素材和一个 Part 3 答题结构。",
};

export default function ToolkitPage() {
  return <SpeakingToolkit />;
}
