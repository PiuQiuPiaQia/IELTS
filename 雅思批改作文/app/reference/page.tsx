import type { Metadata } from "next";
import LetterReferenceTabs from "./letter-reference-tabs";
import SiteHeader from "../site-header";

export const metadata: Metadata = {
  title: "G 类书信快速框架｜雅思批改作文",
  description:
    "面向雅思 5.5—6 分的 G 类 Task 1 书信语气判断和七组分类填空框架。",
};

export default function WritingReferencePage() {
  return (
    <main className="reference-shell">
      <SiteHeader active="reference" />
      <LetterReferenceTabs />
    </main>
  );
}
