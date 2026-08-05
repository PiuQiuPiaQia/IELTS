import type { Metadata } from "next";
import SiteHeader from "../site-header";
import TaskTwoMaterialTabs from "./task-two-material-tabs";

export const metadata: Metadata = {
  title: "大作文素材｜雅思批改作文",
  description: "按照大作文逻辑链 PDF 整理的八类完整主题，并改写为适合雅思 5.5—6 分的简单通用表达。",
};

export default function TaskTwoMaterialsPage() {
  return (
    <main className="reference-shell">
      <SiteHeader active="task2-materials" />
      <TaskTwoMaterialTabs />
    </main>
  );
}
