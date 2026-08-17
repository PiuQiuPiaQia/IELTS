import type { Metadata } from "next";
import PartOneLibrary from "./part-one-library";

export const metadata: Metadata = {
  title: "雅思口语练习｜Part 1 已练题库",
  description: "Part 1 已练问题与 Band 6 简洁答案。",
};

export default function PartOnePage() {
  return <PartOneLibrary />;
}
