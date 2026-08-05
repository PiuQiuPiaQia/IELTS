"use client";

import { useState } from "react";
import {
  categories,
  totalTopicCount,
  type MaterialCategory,
  type TopicMaterial,
} from "./task-two-material-data";

function materialCopyText(category: MaterialCategory, material: TopicMaterial) {
  return [
    `${category.name}｜${material.title} (${material.titleEn})`,
    `中文逻辑链：${material.logic.join(" → ")}`,
    `Band 6 英文：${material.paragraph}`,
    `中文翻译：${material.translation}`,
    `核心短语：${material.phrases.join(" · ")}`,
  ].join("\n\n");
}

function highlightEnglish(text: string, phrases: string[]) {
  const matches = phrases
    .filter((phrase) => text.toLowerCase().includes(phrase.toLowerCase()))
    .sort((first, second) => second.length - first.length);

  if (matches.length === 0) return text;

  const pattern = matches
    .map((phrase) => phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|");
  const parts = text.split(new RegExp(`(${pattern})`, "gi"));

  return parts.map((part, index) => {
    const isMatch = matches.some(
      (phrase) => phrase.toLowerCase() === part.toLowerCase(),
    );

    return isMatch ? (
      <mark className="material-highlight" key={`${part}-${index}`}>
        {part}
      </mark>
    ) : part;
  });
}

export default function TaskTwoMaterialTabs() {
  const [activeId, setActiveId] = useState(categories[0].id);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const activeIndex = categories.findIndex((category) => category.id === activeId);
  const activeCategory = categories[activeIndex] ?? categories[0];
  const orderedMaterials = [...activeCategory.materials].sort(
    (first, second) =>
      Number(Boolean(second.priority)) - Number(Boolean(first.priority)) ||
      first.sourceOrder - second.sourceOrder,
  );

  const copyMaterial = async (material: TopicMaterial) => {
    await navigator.clipboard.writeText(materialCopyText(activeCategory, material));
    setCopiedId(material.id);
    window.setTimeout(() => setCopiedId(null), 1600);
  };

  const moveTab = (direction: number) => {
    const nextIndex = (activeIndex + direction + categories.length) % categories.length;
    setActiveId(categories[nextIndex].id);
    document.getElementById(`material-tab-${categories[nextIndex].id}`)?.focus();
  };

  return (
    <div className="material-reference">
      <header className="material-title">
        <h1>大作文 PDF 主题素材</h1>
        <p>
          完整保留原 PDF 的 8 类、{totalTopicCount} 个主题；同一主题的小素材已适当合并，并改写成适合 5.5—6 分的简单表达。
        </p>
      </header>

      <section className="material-library" aria-labelledby="material-library-title">
        <div className="material-section-heading">
          <h2 id="material-library-title">选择分类，查看完整主题</h2>
          <p>先理解中文逻辑链，再模仿 Band 6 英文段落和核心短语。</p>
        </div>

        <div
          className="material-tabs"
          role="tablist"
          aria-label="大作文素材分类"
          onKeyDown={(event) => {
            if (event.key === "ArrowRight") moveTab(1);
            if (event.key === "ArrowLeft") moveTab(-1);
          }}
        >
          {categories.map((category) => (
            <button
              id={`material-tab-${category.id}`}
              key={category.id}
              type="button"
              role="tab"
              aria-selected={activeId === category.id}
              aria-controls={`material-panel-${category.id}`}
              tabIndex={activeId === category.id ? 0 : -1}
              className={activeId === category.id ? "active" : ""}
              onClick={() => setActiveId(category.id)}
            >
              <strong>{category.name}</strong>
              <small>{category.nameEn}</small>
            </button>
          ))}
        </div>

        <div
          id={`material-panel-${activeCategory.id}`}
          className="material-panel"
          role="tabpanel"
          aria-labelledby={`material-tab-${activeCategory.id}`}
        >
          <header className="material-panel-heading">
            <div>
              <span>{activeCategory.nameEn.toUpperCase()}</span>
              <h3>{activeCategory.name}类 · {activeCategory.materials.length} 个主题</h3>
            </div>
            <p>{activeCategory.summary}</p>
          </header>

          <div className="material-grid">
            {orderedMaterials.map((material) => (
              <article className="material-card material-topic-card" key={material.id}>
                <header>
                  <span>{String(material.sourceOrder).padStart(2, "0")}</span>
                  <div>
                    <h4>
                      {material.priority ? (
                        <span
                          className="material-priority-star"
                          aria-label="优先背诵"
                          title="优先背诵主题"
                        >
                          ★
                        </span>
                      ) : null}
                      {material.title}
                    </h4>
                    <p>{material.titleEn}</p>
                  </div>
                  <button type="button" onClick={() => void copyMaterial(material)}>
                    {copiedId === material.id ? "已复制" : "复制主题"}
                  </button>
                </header>

                <div className="material-logic">
                  <strong>可直接使用的逻辑链</strong>
                  <ol>
                    {material.logic.map((step) => <li key={step}>{step}</li>)}
                  </ol>
                </div>

                <div className="material-english">
                  <div className="material-english-heading">
                    <strong>Band 6 通用英文</strong>
                    <span className="material-highlight-legend" aria-label="颜色说明">
                      <span>核心词汇 / 短语</span>
                    </span>
                  </div>
                  <p>{highlightEnglish(material.paragraph, material.phrases)}</p>
                </div>

                <div className="material-translation">
                  <strong>中文翻译</strong>
                  <p>{material.translation}</p>
                </div>

                <div className="material-keywords">
                  <strong>核心短语</strong>
                  <div>{material.phrases.map((phrase) => <code key={phrase}>{phrase}</code>)}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
