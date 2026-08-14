"use client";

import { useState } from "react";
import {
  categories,
  totalTopicCount,
  type MaterialCategory,
  type TopicMaterial,
} from "./task-two-material-data";

const generalCategoryOrder = [
  "education",
  "health",
  "economy",
  "society",
  "technology",
  "environment",
  "culture",
  "government",
];

function materialCopyText(category: MaterialCategory, material: TopicMaterial) {
  const lines = [
    `${category.name}｜${material.title} (${material.titleEn})`,
    `可用观点：${material.ideas.join("；")}`,
    `中文逻辑链：${material.logic.join(" → ")}`,
    material.generalFocus
      ? `G类常见题：${material.generalFocus.promptHints.join("、")}\nG类补充表达：${material.generalFocus.sentence}\nG类翻译：${material.generalFocus.translation}\nG类核心短语：${material.generalFocus.phrases.join(" · ")}`
      : null,
    `Band 6 英文：${material.paragraph}`,
    `中文翻译：${material.translation}`,
    `核心短语：${material.phrases.join(" · ")}`,
  ].filter((line): line is string => Boolean(line));

  return lines.join("\n\n");
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
  const orderedCategories = [...categories].sort(
    (first, second) =>
      generalCategoryOrder.indexOf(first.id) - generalCategoryOrder.indexOf(second.id),
  );
  const [activeId, setActiveId] = useState(orderedCategories[0].id);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const activeIndex = orderedCategories.findIndex((category) => category.id === activeId);
  const activeCategory = orderedCategories[activeIndex] ?? orderedCategories[0];
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
    const nextIndex = (activeIndex + direction + orderedCategories.length) % orderedCategories.length;
    setActiveId(orderedCategories[nextIndex].id);
    document.getElementById(`material-tab-${orderedCategories[nextIndex].id}`)?.focus();
  };

  return (
    <div className="material-reference">
      <header className="material-title">
        <h1>大作文 G 类主题素材</h1>
        <p>
          完整保留原 PDF 的 8 类、{totalTopicCount} 个主题；已按 G 类常见题优先呈现，★ 表示应先掌握的高频主题。
        </p>
      </header>

      <section className="material-library" aria-labelledby="material-library-title">
        <div className="material-section-heading">
          <h2 id="material-library-title">选择分类，查看完整主题</h2>
          <p>先看可用观点和中文逻辑链；带 ★ 的主题另附 G 类常见题与补充表达。</p>
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
          {orderedCategories.map((category) => (
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
            {orderedMaterials.map((material, index) => (
              <article className="material-card material-topic-card" key={material.id}>
                <header>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h4>
                      {material.priority ? (
                        <span
                          className="material-priority-star"
                          aria-label="G类优先背诵"
                          title="G类优先背诵主题"
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

                <div className="material-ideas">
                  <strong>可用观点</strong>
                  <ul>
                    {material.ideas.map((idea) => <li key={idea}>{idea}</li>)}
                  </ul>
                </div>

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
                  {material.generalFocus ? (
                    <div className="material-english-additional">
                      <span className="material-english-additional-hint">
                        G 类常见题：{material.generalFocus.promptHints.join(" · ")}
                      </span>
                      <p>{highlightEnglish(material.generalFocus.sentence, material.generalFocus.phrases)}</p>
                    </div>
                  ) : null}
                </div>

                <div className="material-translation">
                  <strong>中文翻译</strong>
                  <p>{material.translation}</p>
                  {material.generalFocus ? (
                    <p className="material-translation-additional">
                      <span>G 类补充翻译：</span>{material.generalFocus.translation}
                    </p>
                  ) : null}
                </div>

                <div className="material-keywords">
                  <strong>核心短语</strong>
                  <div>{material.phrases.map((phrase) => <code key={phrase}>{phrase}</code>)}</div>
                  {material.generalFocus ? (
                    <>
                      <strong className="material-keywords-additional-label">G 类补充短语</strong>
                      <div>{material.generalFocus.phrases.map((phrase) => <code key={phrase}>{phrase}</code>)}</div>
                    </>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
