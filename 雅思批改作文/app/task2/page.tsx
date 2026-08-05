import type { Metadata } from "next";
import SiteHeader from "../site-header";
import TaskTwoReferenceTabs from "./task-two-reference-tabs";

export const metadata: Metadata = {
  title: "大作文快速框架｜雅思批改作文",
  description: "面向雅思 G 类 Writing Task 2 的通用四段式与题型填空框架。",
};

export default function TaskTwoReferencePage() {
  return (
    <main className="reference-shell">
      <SiteHeader active="task2" />
      <TaskTwoReferenceTabs />
    </main>
  );
}
