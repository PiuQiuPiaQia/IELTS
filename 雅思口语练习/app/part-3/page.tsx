import type { Metadata } from "next";
import PartThreeLibrary from "./part-three-library";

export const metadata: Metadata = {
  title: "雅思口语练习｜Part 3 押题观点库",
  description: "Part 3留存旧题与必考题的Band 5.5简洁参考答案。",
};

export default function PartThreePage() {
  return <PartThreeLibrary />;
}
