"use client";

import { useEffect, useRef, useState } from "react";
import {
  DEFAULT_REVIEW_SEEDS,
  type ReviewRecord,
} from "../lib/reviews";
import SiteHeader from "./site-header";

type ViewMode = "review" | "clean";
type SyncState = "loading" | "synced" | "error";
type DeletedReview = { review: ReviewRecord; index: number };

const STORAGE_KEY = "ielts-writing-review-history-v1";
const SEED_VERSION_KEY = "ielts-writing-review-seed-version";
const CURRENT_SEED_VERSION = 8;
const SEED_INTRODUCED_VERSION = new Map<string, number>([
  ["reception-area-improvements", 2],
  ["home-work-laptop-problem", 4],
  ["cancelled-flight-insurance-claim", 5],
  ["neighbourhood-dog-safety-complaint", 6],
]);
const SEED_CONTENT_UPDATED_VERSION = new Map<string, number>([
  ["neighbourhood-dog-safety-complaint", 8],
  ["cancelled-flight-insurance-claim", 8],
  ["home-work-laptop-problem", 8],
  ["reception-area-improvements", 8],
  ["head-office-request", 8],
  ["hotel-lunch-feedback", 8],
  ["children-free-time", 8],
]);
const defaultRecords: ReviewRecord[] = DEFAULT_REVIEW_SEEDS.map((review) => ({
  ...review,
  updatedAt: review.createdAt,
}));

const toolbarActions = [
  { command: "undo", label: "↶", title: "撤销" },
  { command: "redo", label: "↷", title: "重做" },
  { command: "bold", label: "B", title: "加粗" },
  { command: "italic", label: "I", title: "斜体" },
  { command: "underline", label: "U", title: "下划线" },
];

function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("zh-CN", {
    month: "numeric",
    day: "numeric",
  }).format(date);
}

function getOverallScore(review: ReviewRecord) {
  if (!Array.isArray(review.criteria) || review.criteria.length !== 4) {
    return review.score;
  }

  const average =
    review.criteria.reduce((total, criterion) => total + criterion.score, 0) /
    review.criteria.length;
  return (Math.round(average * 2) / 2).toFixed(1);
}

function prepareReviewHtml(html: string) {
  const template = document.createElement("template");
  template.innerHTML = html;

  template.content
    .querySelectorAll<HTMLElement>(".change")
    .forEach((change) => {
      const issues = (change.dataset.note ?? "此处表达不够准确")
        .split(/[；;\n]+/)
        .map((issue) => issue.trim())
        .filter(Boolean);
      const original = change.querySelector("del")?.textContent?.trim();
      const correction = change.querySelector("strong")?.textContent?.trim();
      const issueLines = issues.map(
        (issue, index) => `问题 ${index + 1}：${issue}`,
      );
      const advice = correction
        ? original
          ? `改进意见：将“${original}”改为“${correction}”。`
          : `改进意见：在此处补充“${correction}”。`
        : "改进意见：根据以上问题重新组织这处表达。";
      const tooltip = [...issueLines, advice].join("\n");

      change.dataset.tooltip = tooltip;
      change.tabIndex = 0;
      change.setAttribute("aria-label", tooltip.replaceAll("\n", "；"));
    });

  return template.innerHTML;
}

export default function RichTextEditor() {
  const editorRef = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<ViewMode>("review");
  const [records, setRecords] = useState<ReviewRecord[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [syncState, setSyncState] = useState<SyncState>("loading");
  const [copied, setCopied] = useState(false);
  const [lastDeleted, setLastDeleted] = useState<DeletedReview | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  const currentReview =
    records.find((record) => record.id === selectedId) ?? null;

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      const savedSeedVersion = window.localStorage.getItem(SEED_VERSION_KEY);
      const parsedSeedVersion = Number.parseInt(savedSeedVersion ?? "0", 10);
      const savedVersion = Number.isNaN(parsedSeedVersion)
        ? 0
        : parsedSeedVersion;
      let loaded =
        saved === null
          ? defaultRecords
          : (JSON.parse(saved) as ReviewRecord[]);

      if (!Array.isArray(loaded)) throw new Error("Invalid local history");

      if (saved !== null && savedVersion < CURRENT_SEED_VERSION) {
        const newSeeds = defaultRecords.filter(
          (record) => {
            const introducedInVersion =
              SEED_INTRODUCED_VERSION.get(record.id) ?? 0;
            return (
              introducedInVersion > savedVersion &&
              !loaded.some((savedRecord) => savedRecord.id === record.id)
            );
          },
        );
        loaded = [...newSeeds, ...loaded];
      }

      if (saved !== null && savedVersion !== CURRENT_SEED_VERSION) {
        const currentSeeds = new Map(
          defaultRecords.map((record) => [record.id, record]),
        );
        loaded = loaded.map((record) => {
          const currentSeed = currentSeeds.get(record.id);
          if (!currentSeed) return record;
          const contentUpdatedInVersion =
            SEED_CONTENT_UPDATED_VERSION.get(record.id) ?? 0;
          return {
            ...record,
            score: currentSeed.score,
            scoreNote: currentSeed.scoreNote,
            criteria: currentSeed.criteria,
            ...(contentUpdatedInVersion > savedVersion
              ? {
                  reviewHtml: currentSeed.reviewHtml,
                  cleanHtml: currentSeed.cleanHtml,
                  wordCount: currentSeed.wordCount,
                  focus: currentSeed.focus,
                }
              : {}),
          };
        });
      }

      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(loaded));
      window.localStorage.setItem(
        SEED_VERSION_KEY,
        String(CURRENT_SEED_VERSION),
      );
      setRecords(loaded);
      setSelectedId(loaded[0]?.id ?? null);
      setSyncState("synced");
    } catch {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(defaultRecords),
      );
      window.localStorage.setItem(
        SEED_VERSION_KEY,
        String(CURRENT_SEED_VERSION),
      );
      setRecords(defaultRecords);
      setSelectedId(defaultRecords[0]?.id ?? null);
      setSyncState("error");
      setNotice("本机历史记录已恢复为默认内容。");
    }
  }, []);

  useEffect(() => {
    if (!editorRef.current || !currentReview) return;
    const html =
      mode === "review" ? currentReview.reviewHtml : currentReview.cleanHtml;
    editorRef.current.innerHTML =
      mode === "review" ? prepareReviewHtml(html) : html;
  }, [currentReview?.id, mode]);

  const runCommand = (command: string) => {
    editorRef.current?.focus();
    document.execCommand(command);
  };

  const copyContent = async () => {
    if (!editorRef.current) return;
    await navigator.clipboard.writeText(editorRef.current.innerText);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  const resetContent = () => {
    if (!editorRef.current || !currentReview) return;
    const html =
      mode === "review" ? currentReview.reviewHtml : currentReview.cleanHtml;
    editorRef.current.innerHTML =
      mode === "review" ? prepareReviewHtml(html) : html;
  };

  const changeMode = (nextMode: ViewMode) => {
    setMode(nextMode);
    setCopied(false);
  };

  const selectReview = (id: string) => {
    setSelectedId(id);
    setMode("review");
    setCopied(false);
  };

  const deleteReview = (id: string) => {
    const index = records.findIndex((record) => record.id === id);
    if (index < 0) return;

    const review = records[index];
    const remaining = records.filter((record) => record.id !== id);
    const nextSelected =
      selectedId === id
        ? (remaining[Math.min(index, remaining.length - 1)]?.id ?? null)
        : selectedId;

    setRecords(remaining);
    setSelectedId(nextSelected);
    setLastDeleted({ review, index });
    setNotice(null);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(remaining));
  };

  const restoreDeletedReview = () => {
    if (!lastDeleted) return;
    const deleted = lastDeleted;
    if (records.some((record) => record.id === deleted.review.id)) return;

    const restored = [...records];
    restored.splice(
      Math.min(deleted.index, restored.length),
      0,
      deleted.review,
    );
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(restored));
    setRecords(restored);
    setSelectedId(deleted.review.id);
    setMode("review");
    setLastDeleted(null);
    setNotice("历史记录已恢复。");
  };

  const syncLabel =
    syncState === "loading"
      ? "正在读取"
      : syncState === "error"
        ? "本地记录已重置"
        : "已保存到本机";

  return (
    <main className="app-shell">
      <SiteHeader
        active="reviews"
        actions={
          <>
            <span className={`saved-state ${syncState}`}>
              <i /> {syncLabel}
            </span>
            <button
              className="copy-button"
              type="button"
              onClick={copyContent}
              disabled={!currentReview}
            >
              <span aria-hidden="true">▣</span>
              {copied ? "已复制" : "复制内容"}
            </button>
          </>
        }
      />

      <section className="workspace">
        <aside className="history-sidebar" aria-label="作文批改历史">
          <div className="history-heading">
            <div>
              <h2>批改历史</h2>
              <p>{syncState === "loading" ? "正在读取…" : `${records.length} 篇作文`}</p>
            </div>
            <span className="history-mark" aria-hidden="true">H</span>
          </div>

          {syncState === "loading" ? (
            <div className="history-loading" aria-label="正在加载历史记录">
              <i />
              <i />
              <i />
            </div>
          ) : records.length > 0 ? (
            <div className="history-list">
              {records.map((record) => (
                <div
                  className={`history-item ${record.id === selectedId ? "active" : ""}`}
                  key={record.id}
                >
                  <button
                    className="history-open"
                    type="button"
                    onClick={() => selectReview(record.id)}
                    aria-current={record.id === selectedId ? "page" : undefined}
                  >
                    <span className="history-meta">
                      <small>{record.taskType.replace("GENERAL TRAINING · ", "")}</small>
                      <time dateTime={record.createdAt}>
                        {formatDate(record.createdAt)}
                      </time>
                    </span>
                    <strong>{record.title}</strong>
                    <span className="history-score">
                      评分 {getOverallScore(record)}
                    </span>
                  </button>
                  <button
                    className="history-delete"
                    type="button"
                    onClick={() => deleteReview(record.id)}
                    aria-label={`删除《${record.title}》`}
                    title="删除"
                  >
                    删除
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="history-empty">
              <span aria-hidden="true">—</span>
              <strong>暂无批改记录</strong>
              <p>新的作文批改会显示在这里。</p>
            </div>
          )}

          <div className="history-footnote">
            <i />
            记录仅保存在这台设备
          </div>
        </aside>

        <div className="main-column">
          {currentReview ? (
            <>
              <div className="document-heading">
                <div className="question-panel">
                  <div className="eyebrow">{currentReview.taskType}</div>
                  <div className="question-label">原题目</div>
                  <h1>{currentReview.question}</h1>
                  <p className="question-instruction">
                    {currentReview.instruction}
                  </p>
                  {currentReview.points.length > 0 && (
                    <ul className="question-points">
                      {currentReview.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="score-card" aria-label="预估分数">
                  <span>综合估分</span>
                  <b>{getOverallScore(currentReview)}</b>
                  <small>{currentReview.scoreNote}</small>
                </div>
              </div>

              <section className="criteria-panel" aria-label="IELTS 写作四项评分">
                <div className="criteria-heading">
                  <div>
                    <span>IELTS 四项评分</span>
                    <small>依据官方评分维度逐项评估</small>
                  </div>
                  <p>四项等权 · 综合分取平均值</p>
                </div>
                <div className="criteria-grid">
                  {(currentReview.criteria ?? []).map((criterion) => (
                    <article className="criterion-card" key={criterion.code}>
                      <div className="criterion-top">
                        <span className="criterion-code">{criterion.code}</span>
                        <div>
                          <strong>{criterion.nameZh}</strong>
                          <small>{criterion.name}</small>
                        </div>
                        <b>{criterion.score.toFixed(1)}</b>
                      </div>
                      <p>{criterion.feedback}</p>
                    </article>
                  ))}
                </div>
              </section>

              <div className="editor-frame">
                <div className="editor-toolbar" aria-label="富文本工具栏">
                  <div className="toolbar-group">
                    {toolbarActions.map((action, index) => (
                      <button
                        className={`tool-button ${index === 2 ? "bold-tool" : ""} ${index === 3 ? "italic-tool" : ""} ${index === 4 ? "underline-tool" : ""}`}
                        key={action.command}
                        onClick={() => runCommand(action.command)}
                        title={action.title}
                        type="button"
                        aria-label={action.title}
                      >
                        {action.label}
                      </button>
                    ))}
                  </div>

                  <div className="view-switch" role="group" aria-label="显示模式">
                    <button
                      type="button"
                      className={mode === "review" ? "active" : ""}
                      onClick={() => changeMode("review")}
                    >
                      批改视图
                    </button>
                    <button
                      type="button"
                      className={mode === "clean" ? "active" : ""}
                      onClick={() => changeMode("clean")}
                    >
                      修改净稿
                    </button>
                  </div>

                  <button
                    className="reset-button"
                    type="button"
                    onClick={resetContent}
                  >
                    重置
                  </button>
                </div>

                <div className="paper-wrap">
                  <div className="paper">
                    <div className="paper-meta">
                      <span>{currentReview.paperLabel}</span>
                      <span>约 {currentReview.wordCount} 词</span>
                    </div>
                    <div
                      ref={editorRef}
                      className={`editor-content ${mode === "clean" ? "clean-view" : ""}`}
                      contentEditable
                      suppressContentEditableWarning
                      spellCheck={false}
                      aria-label="作文富文本编辑区"
                    />
                  </div>
                </div>
              </div>

              <div className="footer-row">
                <div className="legend" aria-label="批改图例">
                  <span><i className="error-swatch" /> 红色删除线：原文错误</span>
                  <span><i className="correct-swatch" /> 绿色加粗：正确修改</span>
                  <span className="hint">悬停后逐行查看问题与改进意见</span>
                </div>
                <div className="focus-note">
                  <span>本次重点</span>
                  <b>{currentReview.focus}</b>
                </div>
              </div>
            </>
          ) : (
            <div className="empty-document">
              <span aria-hidden="true">W</span>
              <h1>还没有作文批改</h1>
              <p>历史记录为空时，新的批改内容会显示在这里。</p>
            </div>
          )}
        </div>
      </section>

      {(lastDeleted || notice) && (
        <div className="notice-toast" role="status">
          <span>
            {lastDeleted
              ? `已删除《${lastDeleted.review.title}》`
              : notice}
          </span>
          {lastDeleted && (
            <button
              type="button"
              onClick={restoreDeletedReview}
            >
              撤销
            </button>
          )}
          <button
            className="notice-close"
            type="button"
            aria-label="关闭提示"
            onClick={() => {
              setLastDeleted(null);
              setNotice(null);
            }}
          >
            ×
          </button>
        </div>
      )}
    </main>
  );
}
