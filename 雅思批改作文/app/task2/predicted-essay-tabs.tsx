"use client";

import { useState } from "react";
import {
  predictedEssayCategories,
  type PredictedEssay,
} from "./predicted-essay-data";

function countWords(essay: PredictedEssay) {
  return essay.paragraphs.join(" ").trim().split(/\s+/).length;
}

function essayCopyText(essay: PredictedEssay) {
  return [
    essay.title,
    essay.prompt,
    `立场：${essay.position}`,
    `素材：${essay.materials.join(" · ")}`,
    `快速框架：\n${essay.frameworkPoints
      .map((point, index) => {
        const reasonPhrase = essay.reasonPhrases?.[index];
        return `${point.label}：${point.text}${
          reasonPhrase
            ? `\n原因短语：${reasonPhrase.text}｜${reasonPhrase.translation}`
            : ""
        }`;
      })
      .join("\n")}`,
    `重点短语：\n${essay.keyPhrases
      .map((phrase) => `${phrase.text}｜${phrase.translation}`)
      .join("\n")}`,
    essay.introPhrases?.length
      ? `开头段关键短语：\n${essay.introPhrases
          .map((phrase) => `${phrase.text}｜${phrase.translation}`)
          .join("\n")}`
      : "",
    essay.paragraphs.join("\n\n"),
  ].join("\n\n");
}

function highlightMaterialPhrases(text: string, phrases: string[]) {
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
      <mark className="prediction-material-highlight" key={`${part}-${index}`}>
        {part}
      </mark>
    ) : (
      part
    );
  });
}

function highlightBodyPhrases(
  text: string,
  reasonPhrases: string[],
  examplePhrases: string[],
) {
  const exampleStart = text.indexOf("For example,");
  if (exampleStart === -1) {
    return highlightMaterialPhrases(text, reasonPhrases);
  }

  const examplePeriod = text.indexOf(".", exampleStart);
  const exampleEnd = examplePeriod === -1 ? text.length : examplePeriod + 1;

  return (
    <>
      {highlightMaterialPhrases(text.slice(0, exampleStart), reasonPhrases)}
      {highlightMaterialPhrases(
        text.slice(exampleStart, exampleEnd),
        [...reasonPhrases, ...examplePhrases],
      )}
      {highlightMaterialPhrases(text.slice(exampleEnd), reasonPhrases)}
    </>
  );
}

function keyPhrasesUsedInExample(essay: PredictedEssay, paragraphIndex: number) {
  const paragraph = essay.paragraphs[paragraphIndex] ?? "";
  const exampleStart = paragraph.indexOf("For example,");
  if (exampleStart === -1) return [];

  const examplePeriod = paragraph.indexOf(".", exampleStart);
  const example = paragraph.slice(
    exampleStart,
    examplePeriod === -1 ? paragraph.length : examplePeriod + 1,
  );

  return essay.keyPhrases.filter((phrase) =>
    example.toLowerCase().includes(phrase.text.toLowerCase()),
  );
}

export default function PredictedEssayTabs() {
  const [activeCategoryId, setActiveCategoryId] = useState(
    predictedEssayCategories[0].id,
  );
  const [activeEssayId, setActiveEssayId] = useState(
    predictedEssayCategories[0].essays[0].id,
  );
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const activeCategory =
    predictedEssayCategories.find(
      (category) => category.id === activeCategoryId,
    ) ?? predictedEssayCategories[0];
  const activeEssay =
    activeCategory.essays.find((essay) => essay.id === activeEssayId) ??
    activeCategory.essays[0];

  const selectCategory = (categoryId: string) => {
    const category = predictedEssayCategories.find(
      (item) => item.id === categoryId,
    );
    if (!category) return;

    setActiveCategoryId(category.id);
    setActiveEssayId(category.essays[0].id);
  };

  const copyEssay = async () => {
    try {
      await navigator.clipboard.writeText(essayCopyText(activeEssay));
      setCopiedId(activeEssay.id);
      window.setTimeout(() => setCopiedId(null), 1600);
    } catch {
      setCopiedId(null);
    }
  };

  return (
    <section
      className="prediction-essay-library"
      aria-labelledby="prediction-essay-heading"
    >
      <header className="prediction-essay-heading">
        <span>8 月预测 · 24 题 · G 类优先 · 5.5 分目标</span>
        <h2 id="prediction-essay-heading">预测题 Band 5.5 范文</h2>
        <p>
          同题型内按 G 类备考相关性排序；每篇 250—280 词，开头段高亮立场与核心方向，主体段高亮对应原因和例句素材。
        </p>
      </header>

      <div
        className="prediction-type-tabs"
        role="tablist"
        aria-label="预测题题型"
      >
        {predictedEssayCategories.map((category) => (
          <button
            id={`prediction-type-tab-${category.id}`}
            key={category.id}
            type="button"
            role="tab"
            aria-selected={category.id === activeCategory.id}
            aria-controls={`prediction-type-panel-${category.id}`}
            tabIndex={category.id === activeCategory.id ? 0 : -1}
            className={category.id === activeCategory.id ? "active" : ""}
            onClick={() => selectCategory(category.id)}
          >
            <strong>{category.name}</strong>
            <small>{category.essays.length} 题</small>
          </button>
        ))}
      </div>

      <div
        id={`prediction-type-panel-${activeCategory.id}`}
        className="prediction-type-panel"
        role="tabpanel"
        aria-labelledby={`prediction-type-tab-${activeCategory.id}`}
      >
        <p className="prediction-type-description">
          {activeCategory.description}
        </p>

        <div
          className="prediction-topic-tabs"
          role="tablist"
          aria-label={`${activeCategory.name}预测题`}
        >
          {activeCategory.essays.map((essay, index) => (
            <button
              id={`prediction-topic-tab-${essay.id}`}
              key={essay.id}
              type="button"
              role="tab"
              aria-selected={essay.id === activeEssay.id}
              aria-controls={`prediction-topic-panel-${essay.id}`}
              tabIndex={essay.id === activeEssay.id ? 0 : -1}
              className={essay.id === activeEssay.id ? "active" : ""}
              onClick={() => setActiveEssayId(essay.id)}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              {essay.title}
            </button>
          ))}
        </div>

        <article
          id={`prediction-topic-panel-${activeEssay.id}`}
          className="prediction-essay-card"
          role="tabpanel"
          aria-labelledby={`prediction-topic-tab-${activeEssay.id}`}
        >
          <header>
            <div>
              <span>{activeCategory.name}</span>
              <h3>{activeEssay.title}</h3>
              <div className="prediction-essay-meta">
                <b>{countWords(activeEssay)} words</b>
                <em>{activeEssay.position}</em>
              </div>
            </div>
            <button type="button" onClick={() => void copyEssay()}>
              {copiedId === activeEssay.id ? "已复制" : "复制题目与范文"}
            </button>
          </header>

          <div className="prediction-question">
            <strong>Question</strong>
            <p>{activeEssay.prompt}</p>
          </div>

          <section className="prediction-framework-fit">
            <header>
              <strong>本题套快速框架</strong>
              <span>{activeEssay.position}</span>
            </header>
            <div>
              {activeEssay.frameworkPoints.map((point, index) => (
                <article key={point.label}>
                  <b>{index === 0 ? "任务 A" : "任务 B"}</b>
                  <div>
                    <strong>{point.label}</strong>
                    <p>{point.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <div className="prediction-materials">
            <strong>使用素材</strong>
            <div>
              {activeEssay.materials.map((material) => (
                <span key={material}>{material}</span>
              ))}
            </div>
            <small>
              <i />正文绿色高亮＝可直接复用的素材短语
            </small>
          </div>

          <div className="prediction-essay-copy">
            {activeEssay.paragraphs.map((paragraph, index) => (
              <p key={`${activeEssay.id}-${index}`}>
                {index === 0
                  ? highlightMaterialPhrases(
                      paragraph,
                      activeEssay.introPhrases?.map(
                        (phrase) => phrase.text,
                      ) ?? [],
                    )
                  : highlightBodyPhrases(
                      paragraph,
                      index === 1 || index === 2
                        ? activeEssay.reasonPhrases
                            ?.slice(index - 1, index)
                            .map((phrase) => phrase.text) ?? []
                        : [],
                      index === 1 || index === 2
                        ? keyPhrasesUsedInExample(activeEssay, index).map(
                            (phrase) => phrase.text,
                          )
                        : [],
                    )}
              </p>
            ))}
          </div>

          <section
            className="prediction-key-phrases"
            aria-labelledby={`prediction-key-phrases-${activeEssay.id}`}
          >
            <header>
              <strong id={`prediction-key-phrases-${activeEssay.id}`}>
                高亮素材短语
              </strong>
              <span>只记这些可跨题复用的词组</span>
            </header>
            <div className="prediction-key-phrase-groups">
              {activeEssay.introPhrases?.length ? (
                <section>
                  <b>开头段｜立场</b>
                  <dl>
                    {activeEssay.introPhrases.map((phrase) => (
                      <div key={phrase.text}>
                        <dt>{phrase.text}</dt>
                        <dd>{phrase.translation}</dd>
                      </div>
                    ))}
                  </dl>
                </section>
              ) : null}
              {activeEssay.frameworkPoints.map((point, pointIndex) => (
                <section key={point.label}>
                  <b>{point.label}</b>
                  <dl>
                    {[
                      ...(activeEssay.reasonPhrases?.slice(
                        pointIndex,
                        pointIndex + 1,
                      ) ?? []),
                      ...keyPhrasesUsedInExample(
                        activeEssay,
                        pointIndex + 1,
                      ),
                    ].map((phrase) => (
                        <div key={phrase.text}>
                          <dt>{phrase.text}</dt>
                          <dd>{phrase.translation}</dd>
                        </div>
                      ))}
                  </dl>
                </section>
              ))}
            </div>
          </section>
        </article>
      </div>
    </section>
  );
}
