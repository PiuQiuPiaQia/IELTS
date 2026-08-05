import type { Metadata } from "next";
import SpeakingLibrary from "./speaking-library";

export const metadata: Metadata = {
  title: "雅思口语练习｜Part 2 通用素材库",
  description: "按通用素材、原题框架和 Band 6 关键句整理的雅思口语练习库。",
};

export default function Home() {
  return <SpeakingLibrary />;
}
