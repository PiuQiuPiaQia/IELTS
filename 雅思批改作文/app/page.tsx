import type { Metadata } from "next";
import RichTextEditor from "./rich-text-editor";

export const metadata: Metadata = {
  title: "雅思批改作文",
  description: "在本机查看和管理雅思作文批改记录。",
};

export default function Home() {
  return <RichTextEditor />;
}
