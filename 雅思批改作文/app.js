"use strict";

const STORAGE_KEY = "ielts-writing-static-reviews-v1";
const REVIEW_DATA_VERSION_KEY = "ielts-writing-static-reviews-data-version";
const UI_STORAGE_KEY = "ielts-writing-ui-state-v1";
const PAGES = new Set(["reviews", "letters", "task2", "materials"]);
const state = {
  page: PAGES.has(location.hash.slice(1)) ? location.hash.slice(1) : "reviews",
  data: {},
  reviews: [],
  selectedReviewId: "",
  reviewMode: "review",
  letterId: "",
  essayCategoryId: "",
  essayId: "",
  materialCategoryId: "",
  lastDeleted: null,
};

let readingPositions = {};
let scrollSaveTimer = 0;
let suspendScrollSave = false;

const main = document.querySelector("main");
const navButtons = [...document.querySelectorAll("[data-page]")];
const toast = document.querySelector("#toast");
const importFile = document.querySelector("#import-file");

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function highlight(text, phrases = []) {
  const safeText = escapeHtml(text);
  const matches = phrases
    .filter(Boolean)
    .filter((phrase) => text.toLowerCase().includes(phrase.toLowerCase()))
    .map((phrase) => ({ raw: phrase, safe: escapeHtml(phrase) }))
    .sort((a, b) => b.raw.length - a.raw.length);
  if (!matches.length) return safeText;
  const pattern = new RegExp(
    `(${matches.map(({ safe }) => escapeRegExp(safe)).join("|")})`,
    "gi",
  );
  return safeText.replace(pattern, "<mark>$1</mark>");
}

function taskTwoHighlights(essay) {
  const seen = new Set();
  return [
    ...(essay.reasonPhrases || []).slice(0, 2),
    ...(essay.introPhrases || []).slice(0, 2),
    ...(essay.keyPhrases || []).slice(0, 4),
  ].filter((phrase) => {
    const key = phrase.text.trim().toLowerCase();
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function taskTwoSentences(paragraph = "") {
  return paragraph
    .match(/[^.!?]+(?:[.!?]+|$)/g)
    ?.map((sentence) => sentence.trim())
    .filter(Boolean) || [];
}

function taskTwoMemoryLines(essay) {
  const [intro = "", bodyOne = "", bodyTwo = "", conclusion = ""] = essay.paragraphs;
  const introSentences = taskTwoSentences(intro);
  const conclusionSentences = taskTwoSentences(conclusion);
  const directAnswerPattern = /\b(I (?:do not )?(?:agree|disagree|believe|think|consider)|In my view|Regarding the first question|As for the second question)\b/i;
  const directAnswer = introSentences.filter((sentence) => directAnswerPattern.test(sentence)).join(" ")
    || introSentences[introSentences.length - 1]
    || intro;
  const pickSupport = (paragraph, number) => {
    const sentences = taskTwoSentences(paragraph);
    const example = sentences.find((sentence) => /^For example\b/i.test(sentence));
    return {
      label: example ? `例子 ${number}` : `展开 ${number}`,
      text: example || sentences[1] || sentences[0] || "",
    };
  };
  return [
    { label: "立场 / 答案", text: directAnswer },
    { label: "主体 1", text: taskTwoSentences(bodyOne)[0] || bodyOne },
    pickSupport(bodyOne, 1),
    { label: "主体 2", text: taskTwoSentences(bodyTwo)[0] || bodyTwo },
    pickSupport(bodyTwo, 2),
    { label: "结论", text: conclusionSentences[conclusionSentences.length - 1] || conclusion },
  ].filter((line) => line.text);
}

function taskTwoTranslationHighlights(paragraph, phrases) {
  const source = paragraph.toLowerCase();
  const seen = new Set();
  return phrases
    .filter((phrase) => phrase.text && phrase.translation && source.includes(phrase.text.toLowerCase()))
    .map((phrase) => phrase.translation)
    .filter((translation) => {
      const key = translation.trim();
      if (!key || seen.has(key)) return false;
      seen.add(key);
      return true;
    });
}

function loadUiState() {
  try {
    const saved = JSON.parse(localStorage.getItem(UI_STORAGE_KEY) || "null");
    if (!saved || typeof saved !== "object") return;
    if (!PAGES.has(location.hash.slice(1)) && PAGES.has(saved.page)) state.page = saved.page;
    if (typeof saved.selectedReviewId === "string") state.selectedReviewId = saved.selectedReviewId;
    if (["review", "clean"].includes(saved.reviewMode)) state.reviewMode = saved.reviewMode;
    if (typeof saved.letterId === "string") state.letterId = saved.letterId;
    if (typeof saved.essayCategoryId === "string") state.essayCategoryId = saved.essayCategoryId;
    if (typeof saved.essayId === "string") state.essayId = saved.essayId;
    if (typeof saved.materialCategoryId === "string") state.materialCategoryId = saved.materialCategoryId;
    if (saved.readingPositions && typeof saved.readingPositions === "object" && !Array.isArray(saved.readingPositions)) readingPositions = saved.readingPositions;
  } catch (error) {
    console.warn("Unable to restore writing UI state", error);
  }
}

function persistUiState() {
  try {
    localStorage.setItem(UI_STORAGE_KEY, JSON.stringify({
      page: state.page,
      selectedReviewId: state.selectedReviewId,
      reviewMode: state.reviewMode,
      letterId: state.letterId,
      essayCategoryId: state.essayCategoryId,
      essayId: state.essayId,
      materialCategoryId: state.materialCategoryId,
      readingPositions,
    }));
  } catch (error) {
    console.warn("Unable to save writing UI state", error);
  }
}

function currentViewKey() {
  if (state.page === "reviews") return `reviews:${state.selectedReviewId}:${state.reviewMode}`;
  if (state.page === "letters") return `letters:${state.letterId}`;
  if (state.page === "task2") return `task2:${state.essayCategoryId}:${state.essayId}`;
  if (state.page === "materials") return `materials:${state.materialCategoryId}`;
  return state.page;
}

function markReadingAnchors() {
  main.querySelectorAll(".card, .criterion, .editor-shell, .essay-paragraph, .answer-line, .dimension").forEach((element, index) => {
    element.dataset.readingAnchor = `item-${index}`;
  });
}

function revealActiveTabs() {
  requestAnimationFrame(() => {
    main.querySelectorAll(".sidebar").forEach((sidebar) => {
      const activeItems = [...sidebar.querySelectorAll(".active")];
      const active = activeItems[activeItems.length - 1];
      if (!active) return;
      const sidebarRect = sidebar.getBoundingClientRect();
      const activeRect = active.getBoundingClientRect();
      if (activeRect.top < sidebarRect.top || activeRect.bottom > sidebarRect.bottom) {
        sidebar.scrollTop += activeRect.top - sidebarRect.top - ((sidebar.clientHeight - activeRect.height) / 2);
      }
    });
  });
}

function trimReadingPositions() {
  const entries = Object.entries(readingPositions);
  if (entries.length <= 120) return;
  entries.sort(([, left], [, right]) => (right?.updatedAt || 0) - (left?.updatedAt || 0));
  readingPositions = Object.fromEntries(entries.slice(0, 120));
}

function saveReadingPosition() {
  if (suspendScrollSave || !Object.keys(state.data).length) return;
  const anchors = [...main.querySelectorAll("[data-reading-anchor]")];
  let anchor = null;
  for (const candidate of anchors) {
    const rect = candidate.getBoundingClientRect();
    if (rect.top <= 112 && rect.bottom > 0) anchor = candidate;
    if (rect.top > 112) break;
  }
  if (!anchor) anchor = anchors.find((candidate) => candidate.getBoundingClientRect().top > 0) || null;
  const position = {
    y: Math.max(0, Math.round(window.scrollY)),
    updatedAt: Date.now(),
  };
  if (anchor) {
    position.anchor = anchor.dataset.readingAnchor;
    position.offset = Math.round(anchor.getBoundingClientRect().top);
  }
  readingPositions[currentViewKey()] = position;
  trimReadingPositions();
  persistUiState();
}

function scheduleReadingSave() {
  if (suspendScrollSave) return;
  clearTimeout(scrollSaveTimer);
  scrollSaveTimer = setTimeout(saveReadingPosition, 120);
}

function restoreReadingPosition(fallbackY = 0) {
  const viewKey = currentViewKey();
  const saved = readingPositions[viewKey];
  suspendScrollSave = true;
  clearTimeout(scrollSaveTimer);
  requestAnimationFrame(() => requestAnimationFrame(() => {
    if (viewKey !== currentViewKey()) {
      suspendScrollSave = false;
      return;
    }
    let targetY = Number.isFinite(fallbackY) ? fallbackY : 0;
    if (saved) {
      const anchor = saved.anchor
        ? [...main.querySelectorAll("[data-reading-anchor]")].find((element) => element.dataset.readingAnchor === saved.anchor)
        : null;
      targetY = anchor
        ? window.scrollY + anchor.getBoundingClientRect().top - (saved.offset || 0)
        : saved.y;
    }
    const maxY = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    const previousScrollBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo({ top: Math.min(Math.max(0, targetY || 0), maxY), left: 0, behavior: "auto" });
    document.documentElement.style.scrollBehavior = previousScrollBehavior;
    setTimeout(() => { suspendScrollSave = false; }, 160);
  }));
}

function changeView(update) {
  saveReadingPosition();
  const fallbackY = window.scrollY;
  update();
  render();
  restoreReadingPosition(fallbackY);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 1600);
}

async function copyText(text) {
  try {
    if (!navigator.clipboard?.writeText) throw new Error("Clipboard API unavailable");
    await navigator.clipboard.writeText(text);
  } catch {
    const input = document.createElement("textarea");
    input.value = text;
    input.style.position = "fixed";
    input.style.opacity = "0";
    document.body.append(input);
    input.select();
    document.execCommand("copy");
    input.remove();
  }
  showToast("已复制到剪贴板");
}

function setPage(page, { saveCurrent = true } = {}) {
  if (!PAGES.has(page)) page = "reviews";
  if (saveCurrent) {
    if (state.page === "reviews") saveEditor();
    saveReadingPosition();
  }
  state.page = page;
  if (location.hash !== `#${page}`) {
    try {
      history.replaceState(null, "", `#${page}`);
    } catch {
      location.hash = page;
    }
  }
  navButtons.forEach((button) => {
    const active = button.dataset.page === page;
    button.classList.toggle("active", active);
    button.setAttribute("aria-current", active ? "page" : "false");
  });
  render();
  restoreReadingPosition(0);
}

function persistReviews() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.reviews));
    const status = document.querySelector("#save-state");
    if (status) status.textContent = "已保存在此浏览器";
  } catch (error) {
    console.error(error);
    const status = document.querySelector("#save-state");
    if (status) status.textContent = "保存失败，请先导出备份";
  }
}

function loadSavedReviews(seedLines) {
  const metadata = seedLines.find((record) => record._meta)?._meta || {};
  const seeds = seedLines.filter((record) => !record._meta);
  let saved = null;
  try {
    saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
  } catch (error) {
    console.warn("Unable to parse local review history", error);
  }
  if (Array.isArray(saved) && saved.length) {
    let migrated = saved;
    try {
      const savedVersion = Number(localStorage.getItem(REVIEW_DATA_VERSION_KEY)) || 0;
      const currentVersion = Number(metadata.version) || savedVersion;
      if (currentVersion > savedVersion) {
        const pendingSeeds = seeds.filter((record) => Number(record.seedVersion) > savedVersion);
        const pendingById = new Map(pendingSeeds.map((record) => [record.id, record]));
        const existingIds = new Set(saved.map((record) => record.id));
        migrated = saved.map((record) => {
          const seed = pendingById.get(record.id);
          return seed && !record.userEdited ? seed : record;
        });
        const additions = pendingSeeds.filter((record) => (
          !existingIds.has(record.id)
          && Number(record.introducedVersion || record.seedVersion) > savedVersion
        ));
        migrated = [...additions, ...migrated];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(migrated));
        localStorage.setItem(REVIEW_DATA_VERSION_KEY, String(currentVersion));
      }
    } catch (error) {
      console.warn("Unable to migrate local review history", error);
    }
    return migrated;
  }
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seeds));
    if (metadata.version) localStorage.setItem(REVIEW_DATA_VERSION_KEY, String(metadata.version));
  } catch (error) {
    console.warn("Browser storage is unavailable; export changes before closing", error);
  }
  return seeds;
}

function sanitizeReviewHtml(source) {
  const allowed = new Set(["P", "BR", "SPAN", "DEL", "STRONG", "EM", "B", "UL", "OL", "LI", "BLOCKQUOTE"]);
  const template = document.createElement("template");
  template.innerHTML = String(source || "");
  template.content.querySelectorAll("*").forEach((element) => {
    if (!allowed.has(element.tagName)) {
      element.replaceWith(...element.childNodes);
      return;
    }
    [...element.attributes].forEach((attribute) => {
      const keepClass = attribute.name === "class" && element.tagName === "SPAN" && attribute.value.split(/\s+/).includes("change");
      const keepNote = attribute.name === "data-note" && element.tagName === "SPAN";
      if (!keepClass && !keepNote) element.removeAttribute(attribute.name);
    });
  });
  return template.innerHTML;
}

function formatDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.valueOf())) return "未记录日期";
  return new Intl.DateTimeFormat("zh-CN", { year: "numeric", month: "short", day: "numeric" }).format(date);
}

function currentReview() {
  return state.reviews.find((review) => review.id === state.selectedReviewId) || state.reviews[0];
}

function saveEditor() {
  const editor = document.querySelector("[data-editor]");
  const review = currentReview();
  if (!editor || !review) return;
  const key = state.reviewMode === "review" ? "reviewHtml" : "cleanHtml";
  const nextHtml = sanitizeReviewHtml(editor.innerHTML);
  if (sanitizeReviewHtml(review[key]) === nextHtml) return;
  review[key] = nextHtml;
  review.userEdited = true;
  review.updatedAt = new Date().toISOString();
  persistReviews();
}

function reviewSidebar(records, selectedId) {
  return `<aside class="sidebar" aria-label="作文记录"><span class="sidebar-label">历史作文</span>${records.map((review) => `<button class="sidebar-button ${review.id === selectedId ? "active" : ""}" type="button" data-review-id="${escapeHtml(review.id)}"><strong>${escapeHtml(review.title)}</strong><small>${escapeHtml(review.taskType)} · ${escapeHtml(formatDate(review.updatedAt || review.createdAt))}</small></button>`).join("")}<div class="sidebar-actions"><button class="button secondary small" type="button" data-import>导入</button><button class="button secondary small" type="button" data-export>导出</button></div></aside>`;
}

function renderReviews() {
  const review = currentReview();
  if (!review) {
    main.innerHTML = '<div class="empty-state"><div><p>当前没有作文记录。</p><button class="button" type="button" data-import>导入 JSONL</button></div></div>';
    bindImportExport();
    return;
  }
  state.selectedReviewId = review.id;
  const content = state.reviewMode === "review" ? review.reviewHtml : review.cleanHtml;
  main.innerHTML = `
    <div class="content-grid">
      ${reviewSidebar(state.reviews, review.id)}
      <article class="panel">
        <header class="panel-header">
          <div class="review-title"><div><span class="eyebrow">${escapeHtml(review.taskType)}</span><h2>${escapeHtml(review.title)}</h2></div><div class="score" title="总分"><strong>${escapeHtml(review.score)}</strong></div></div>
          <div class="prompt"><p>${escapeHtml(review.question)}</p>${review.instruction ? `<p><strong>${escapeHtml(review.instruction)}</strong></p>` : ""}${review.points?.length ? `<ul>${review.points.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}</ul>` : ""}</div>
          <div class="meta-row"><span class="badge">${escapeHtml(review.paperLabel)}</span><span class="badge gold">${escapeHtml(review.wordCount)} words</span><span class="badge">重点：${escapeHtml(review.focus)}</span></div>
        </header>
        <div class="panel-body">
          <div class="criteria-grid">${(review.criteria || []).map((criterion) => `<article class="criterion"><header><h3>${escapeHtml(criterion.code)} · ${escapeHtml(criterion.nameZh)}</h3><span class="badge gold">${escapeHtml(criterion.score)}</span></header><p>${escapeHtml(criterion.feedback)}</p></article>`).join("")}</div>
          <div class="editor-shell">
            <div class="editor-toolbar">
              <div class="mode-group"><button class="button small ${state.reviewMode === "review" ? "" : "secondary"}" type="button" data-mode="review">批改版</button><button class="button small ${state.reviewMode === "clean" ? "" : "secondary"}" type="button" data-mode="clean">净稿</button></div>
              <span class="save-state" id="save-state">已保存在此浏览器</span>
              <button class="button secondary small" type="button" data-command="bold" aria-label="加粗">加粗</button>
              <button class="button secondary small" type="button" data-command="italic" aria-label="斜体">斜体</button>
              <button class="button secondary small" type="button" data-command="insertUnorderedList" aria-label="项目符号">列表</button>
            </div>
            <div class="editor" data-editor contenteditable="true" spellcheck="true" aria-label="作文内容编辑器">${sanitizeReviewHtml(content)}</div>
          </div>
          <div class="action-row" style="margin-top:14px">
            <button class="button" type="button" data-copy-review>复制当前版本</button>
            <button class="button secondary" type="button" data-import>导入 JSONL</button>
            <button class="button secondary" type="button" data-export>导出 JSONL</button>
            ${state.lastDeleted ? '<button class="button secondary" type="button" data-undo>撤销删除</button>' : ""}
            <button class="button danger" type="button" data-delete>删除这篇</button>
          </div>
        </div>
      </article>
    </div>`;
  bindReviewEvents();
}

function bindReviewEvents() {
  document.querySelectorAll("[data-review-id]").forEach((button) => button.addEventListener("click", () => {
    saveEditor();
    changeView(() => { state.selectedReviewId = button.dataset.reviewId; });
  }));
  document.querySelectorAll("[data-mode]").forEach((button) => button.addEventListener("click", () => {
    saveEditor();
    changeView(() => { state.reviewMode = button.dataset.mode; });
  }));
  document.querySelectorAll("[data-command]").forEach((button) => button.addEventListener("click", () => {
    document.querySelector("[data-editor]")?.focus();
    document.execCommand(button.dataset.command, false);
    saveEditor();
  }));
  const editor = document.querySelector("[data-editor]");
  editor?.addEventListener("input", () => {
    const status = document.querySelector("#save-state");
    if (status) status.textContent = "正在保存…";
    clearTimeout(bindReviewEvents.saveTimer);
    bindReviewEvents.saveTimer = setTimeout(saveEditor, 350);
  });
  editor?.addEventListener("paste", (event) => {
    event.preventDefault();
    document.execCommand("insertText", false, event.clipboardData.getData("text/plain"));
  });
  document.querySelector("[data-copy-review]")?.addEventListener("click", () => copyText(editor?.innerText || ""));
  document.querySelector("[data-delete]")?.addEventListener("click", () => {
    if (!confirm(`确定删除“${reviewTitle(currentReview())}”吗？`)) return;
    changeView(() => {
      const index = state.reviews.findIndex((item) => item.id === state.selectedReviewId);
      state.lastDeleted = { record: state.reviews[index], index };
      state.reviews.splice(index, 1);
      state.selectedReviewId = state.reviews[Math.min(index, state.reviews.length - 1)]?.id || "";
      persistReviews();
    });
  });
  document.querySelector("[data-undo]")?.addEventListener("click", () => {
    if (!state.lastDeleted) return;
    changeView(() => {
      state.reviews.splice(state.lastDeleted.index, 0, state.lastDeleted.record);
      state.selectedReviewId = state.lastDeleted.record.id;
      state.lastDeleted = null;
      persistReviews();
    });
  });
  bindImportExport();
}

function reviewTitle(review) {
  return review?.title || "这篇作文";
}

function exportReviews() {
  saveEditor();
  const lines = [{ _meta: { version: 1, exportedAt: new Date().toISOString() } }, ...state.reviews]
    .map((record) => JSON.stringify(record)).join("\n") + "\n";
  const link = document.createElement("a");
  link.href = URL.createObjectURL(new Blob([lines], { type: "application/x-ndjson" }));
  link.download = `ielts-writing-reviews-${new Date().toISOString().slice(0, 10)}.jsonl`;
  link.click();
  URL.revokeObjectURL(link.href);
  showToast("JSONL 备份已导出");
}

function bindImportExport() {
  document.querySelectorAll("[data-import]").forEach((button) => button.addEventListener("click", () => importFile.click()));
  document.querySelectorAll("[data-export]").forEach((button) => button.addEventListener("click", exportReviews));
}

importFile.addEventListener("change", async () => {
  const file = importFile.files?.[0];
  importFile.value = "";
  if (!file) return;
  try {
    const records = (await file.text()).split(/\r?\n/).filter((line) => line.trim()).map((line) => JSON.parse(line)).filter((record) => !record._meta);
    if (!records.length || records.some((record) => !record.id || !record.title || typeof record.reviewHtml !== "string")) throw new Error("invalid records");
    if (!confirm(`将用 ${records.length} 篇导入记录替换当前浏览器中的记录，是否继续？`)) return;
    changeView(() => {
      state.reviews = records.map((record) => ({ ...record, reviewHtml: sanitizeReviewHtml(record.reviewHtml), cleanHtml: sanitizeReviewHtml(record.cleanHtml) }));
      state.selectedReviewId = state.reviews[0].id;
      persistReviews();
    });
    showToast("导入完成");
  } catch (error) {
    console.error(error);
    alert("无法导入：文件不是有效的作文 JSONL 备份。");
  }
});

function renderLetters() {
  const templates = state.data.letters;
  const template = templates.find((item) => item.id === state.letterId) || templates[0];
  state.letterId = template.id;
  main.innerHTML = `
    <div class="content-grid">
      <aside class="sidebar" aria-label="书信类型"><span class="sidebar-label">选择类型</span>${templates.map((item) => `<button class="sidebar-button ${item.id === template.id ? "active" : ""}" type="button" data-letter-id="${escapeHtml(item.id)}"><strong>${escapeHtml(item.name)}</strong><small>${escapeHtml(item.tone)}</small></button>`).join("")}</aside>
      <article class="panel">
        <header class="panel-header"><span class="eyebrow">${escapeHtml(template.tone)} · ${escapeHtml(template.targetWords)}</span><h2>${escapeHtml(template.name)}</h2><p>${escapeHtml(template.goal)}</p></header>
        <div class="panel-body">
          <div class="note"><strong>题目识别：</strong>${escapeHtml(template.prompt)}</div>
          <div class="section-heading"><h2>${escapeHtml(template.extractHeading || "从题目提取信息")}</h2></div><ol class="numbered-list">${template.copyFromQuestion.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ol>
          <div class="section-heading"><h2>${escapeHtml(template.contentHeading || "逐段模板")}</h2><p>${escapeHtml(template.connectorLabel || "推荐连接词：")}${template.connectors.map(escapeHtml).join(" · ")}</p></div>
          <div class="card-list">${template.paragraphs.map((paragraph) => `<article class="card"><span class="badge">${escapeHtml(paragraph.name)} · ${escapeHtml(paragraph.target)}</span><h3>${escapeHtml(paragraph.function)}</h3><div class="answer template-block">${escapeHtml(paragraph.template)}</div></article>`).join("")}</div>
          <div class="section-heading"><h2>${escapeHtml(template.checkHeading || "最后检查")}</h2></div><ul class="numbered-list">${template.checks.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
          <div class="action-row" style="margin-top:22px"><button class="button" type="button" data-copy-letter>${escapeHtml(template.copyLabel || "复制完整模板")}</button></div>
        </div>
      </article>
    </div>`;
  document.querySelectorAll("[data-letter-id]").forEach((button) => button.addEventListener("click", () => {
    changeView(() => { state.letterId = button.dataset.letterId; });
  }));
  document.querySelector("[data-copy-letter]")?.addEventListener("click", () => copyText(template.paragraphs.map((paragraph) => paragraph.template).join("\n\n")));
}

function renderTaskTwo() {
  const framework = state.data.frameworks[0];
  const categories = state.data.essays;
  const category = categories.find((item) => item.id === state.essayCategoryId) || categories[0];
  state.essayCategoryId = category.id;
  const essay = category.essays.find((item) => item.id === state.essayId) || category.essays[0];
  state.essayId = essay.id;
  const focusPhrases = taskTwoHighlights(essay);
  const memoryLines = taskTwoMemoryLines(essay);
  main.innerHTML = `
    <section class="panel">
      <header class="panel-header"><span class="eyebrow">STRUCTURE FIRST · BAND 5</span><h2>三类主体结构</h2><p>先看题目让你做几件事：<strong>撑一个立场</strong>→同侧论证；<strong>比较两面</strong>→双面比较；<strong>回答两个问题</strong>→两问回答。下方范文全部使用对应的四段框架，以答全、简单和清楚为目标。</p></header>
      <div class="panel-body two-column">${framework.modes.map((mode) => {
        const judgement = mode.judgement;
        const judgementLine = (items) => items?.length ? `<div class="note"><strong>${escapeHtml(judgement.label)}</strong><ul class="numbered-list">${items.map((text) => `<li>${escapeHtml(text)}</li>`).join("")}</ul></div>` : "";
        const bodies = [[mode.bodyOneLead, judgement?.bodyOne], [mode.bodyTwoLead, judgement?.bodyTwo]];
        const identify = mode.identify ? `<div class="note"><strong>看到这些题就选它</strong><p style="margin:6px 0 0" lang="en">${escapeHtml(mode.identify.keywords)}</p><p style="margin:6px 0 0">${escapeHtml(mode.identify.tell)}</p></div>` : "";
        return `<article class="card"><span class="badge">${escapeHtml(mode.includes)}</span><h3>${escapeHtml(mode.name)}</h3><p>${escapeHtml(mode.goal)}</p>${identify}<div class="section-heading" style="margin-top:22px"><h2>引言</h2></div><div class="answer">${escapeHtml(mode.intro)}</div>${judgementLine(judgement?.intro)}<div class="section-heading" style="margin-top:22px"><h2>主体段 1 / 2(连接句)</h2></div><ul class="numbered-list">${bodies.map(([lead, note]) => `<li>${escapeHtml(lead)}${judgementLine(note)}</li>`).join("")}</ul><div class="section-heading" style="margin-top:22px"><h2>结论</h2></div><div class="answer">${escapeHtml(mode.conclusion)}</div>${judgementLine(judgement?.conclusion)}${judgement ? `<div class="chip-row">${judgement.swaps.map((swap) => `<span class="chip">${escapeHtml(swap)}</span>`).join("")}</div><p class="translation">${escapeHtml(judgement.rule)}</p>` : ""}<p class="translation">${escapeHtml(mode.opinionRule || mode.relationship)}</p></article>`;
      }).join("")}</div>
    </section>
    <div class="content-grid" style="margin-top:24px">
      <aside class="sidebar" aria-label="G 类范文分类"><span class="sidebar-label">选择 G 类范文</span>${categories.map((item) => `<div><button class="sidebar-button ${item.id === category.id ? "active" : ""}" type="button" data-essay-category="${escapeHtml(item.id)}"><strong>${escapeHtml(item.name)}</strong><small>${item.essays.length} 篇</small></button>${item.id === category.id ? item.essays.map((entry) => `<button class="sidebar-button ${entry.id === essay.id ? "active" : ""}" type="button" data-essay-id="${escapeHtml(entry.id)}" style="padding-left:22px"><strong>${escapeHtml(entry.title)}</strong><small>${escapeHtml(entry.sourceTag ? `${entry.sourceTag} · ${entry.position}` : entry.position)}</small></button>`).join("") : ""}</div>`).join("")}</aside>
      <article class="panel">
        <header class="panel-header"><span class="eyebrow">${escapeHtml(category.name)} · 立场：${escapeHtml(essay.position)}</span><h2>${escapeHtml(essay.title)}</h2><p>${escapeHtml(essay.prompt)}</p><div class="chip-row">${essay.sourceTag ? `<span class="badge gold">${escapeHtml(`${essay.sourceTag} · ${essay.sourceGid} · ${essay.sourcePeriod} · 目标 ${essay.targetBand} 分`)}</span>` : `<span class="badge gold">G 类相关题 · Band ${escapeHtml(essay.targetBand || "5")} 易记版</span>`}${essay.materials.map((item) => `<span class="badge">${escapeHtml(item)}</span>`).join("")}</div></header>
        <div class="panel-body">
          <div class="section-heading"><h2>快速框架</h2></div><div class="two-column">${essay.frameworkPoints.map((point) => `<article class="card"><span class="badge gold">${escapeHtml(point.label)}</span><p>${escapeHtml(point.text)}</p></article>`).join("")}</div>
          <div class="section-heading"><h2>先背这 6 个句块</h2><p>先记立场、两个原因、两个展开例子和一句结论；其余句子只负责补足解释。</p></div><div class="memory-card">${memoryLines.map((line, index) => `<div class="memory-line"><span class="memory-number">${index + 1}</span><div><strong>${escapeHtml(line.label)}</strong><p lang="en">${highlight(line.text, focusPhrases.map((phrase) => phrase.text))}</p></div></div>`).join("")}</div>
          <div class="section-heading"><h2>只记这些表达</h2><p>每篇最多 8 个，优先重复使用，不另外追求难词。</p></div><div class="chip-row">${focusPhrases.map((phrase) => `<span class="chip">${escapeHtml(phrase.text)}｜${escapeHtml(phrase.translation)}</span>`).join("")}</div>
          <div class="section-heading"><h2>Band 5 易记范文</h2><p>约 250 词；主体段按“观点—原因—展开 / 例子—结果”组织，不故意加入语法错误。</p></div><div class="stack">${essay.paragraphs.map((paragraph, index) => {
            const translation = essay.paragraphTranslations?.[index];
            const paragraphLabel = ["引言", "主体段 1", "主体段 2", "结论"][index] || `第 ${index + 1} 段`;
            return `<div class="essay-pair"><div class="essay-paragraph" lang="en"><span class="paragraph-label">${paragraphLabel}</span>${highlight(paragraph, focusPhrases.map((phrase) => phrase.text))}</div>${translation ? `<div class="essay-translation" lang="zh-CN"><span class="translation-label">中文</span><span>${highlight(translation, taskTwoTranslationHighlights(paragraph, focusPhrases))}</span></div>` : ""}</div>`;
          }).join("")}</div>
          <div class="action-row" style="margin-top:20px"><button class="button secondary" type="button" data-copy-memory>复制 6 个句块</button><button class="button" type="button" data-copy-essay>复制完整范文</button></div>
        </div>
      </article>
    </div>`;
  document.querySelectorAll("[data-essay-category]").forEach((button) => button.addEventListener("click", () => {
    changeView(() => {
      state.essayCategoryId = button.dataset.essayCategory;
      state.essayId = "";
    });
  }));
  document.querySelectorAll("[data-essay-id]").forEach((button) => button.addEventListener("click", () => {
    changeView(() => { state.essayId = button.dataset.essayId; });
  }));
  document.querySelector("[data-copy-memory]")?.addEventListener("click", () => copyText(memoryLines.map((line) => `${line.label}: ${line.text}`).join("\n")));
  document.querySelector("[data-copy-essay]")?.addEventListener("click", () => copyText(essay.paragraphs.join("\n\n")));
}

function renderMaterials() {
  const categories = state.data.materials;
  const category = categories.find((item) => item.id === state.materialCategoryId) || categories[0];
  state.materialCategoryId = category.id;
  main.innerHTML = `
    <div class="content-grid">
      <aside class="sidebar" aria-label="素材分类"><span class="sidebar-label">选择分类</span>${categories.map((item) => `<button class="sidebar-button ${item.id === category.id ? "active" : ""}" type="button" data-material-category="${escapeHtml(item.id)}"><strong>${escapeHtml(item.name)} · ${escapeHtml(item.nameEn)}</strong><small>${item.materials.length} 个主题</small></button>`).join("")}</aside>
      <section class="panel">
        <header class="panel-header"><span class="eyebrow">${escapeHtml(category.nameEn)}</span><h2>${escapeHtml(category.name)}</h2><p>${escapeHtml(category.summary)}</p></header>
        <div class="panel-body card-list">${[...category.materials].sort((a,b) => Number(Boolean(b.priority)) - Number(Boolean(a.priority)) || a.sourceOrder - b.sourceOrder).map((material) => `<article class="card"><div class="action-row"><span class="badge ${material.priority ? "gold" : ""}">${material.priority ? "★ 高频" : `#${material.sourceOrder}`}</span><button class="button secondary small" type="button" data-copy-material="${escapeHtml(material.id)}">复制</button></div><h3>${escapeHtml(material.title)} · ${escapeHtml(material.titleEn)}</h3><p><strong>可用观点：</strong>${material.ideas.map(escapeHtml).join("；")}</p><p class="note"><strong>逻辑链：</strong>${material.logic.map(escapeHtml).join(" → ")}</p><div class="answer">${highlight(material.paragraph, material.phrases)}</div><p class="translation">${escapeHtml(material.translation)}</p><div class="chip-row">${material.phrases.map((phrase) => `<span class="chip">${escapeHtml(phrase)}</span>`).join("")}</div></article>`).join("")}</div>
      </section>
    </div>`;
  document.querySelectorAll("[data-material-category]").forEach((button) => button.addEventListener("click", () => {
    changeView(() => { state.materialCategoryId = button.dataset.materialCategory; });
  }));
  document.querySelectorAll("[data-copy-material]").forEach((button) => button.addEventListener("click", () => {
    const material = category.materials.find((item) => item.id === button.dataset.copyMaterial);
    copyText([material.title, material.ideas.join("；"), material.paragraph, material.translation, material.phrases.join(" · ")].join("\n\n"));
  }));
}

function render() {
  if (!state.data.reviews) return;
  if (state.page === "reviews") renderReviews();
  if (state.page === "letters") renderLetters();
  if (state.page === "task2") renderTaskTwo();
  if (state.page === "materials") renderMaterials();
  markReadingAnchors();
  revealActiveTabs();
  persistUiState();
}

navButtons.forEach((button) => button.addEventListener("click", () => setPage(button.dataset.page)));
window.addEventListener("hashchange", () => {
  const page = location.hash.slice(1);
  if (PAGES.has(page)) setPage(page);
});
window.addEventListener("scroll", scheduleReadingSave, { passive: true });
window.addEventListener("pagehide", () => {
  saveEditor();
  saveReadingPosition();
});
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState !== "hidden") return;
  saveEditor();
  saveReadingPosition();
});

if ("scrollRestoration" in history) history.scrollRestoration = "manual";

try {
  if (!window.IELTS_DATA?.reviews || !window.IELTS_DATA?.letters) {
    throw new Error("Missing embedded writing data");
  }
  state.data = window.IELTS_DATA;
  state.reviews = loadSavedReviews(state.data.reviews);
  loadUiState();
  if (!state.reviews.some((review) => review.id === state.selectedReviewId)) state.selectedReviewId = state.reviews[0]?.id || "";
  setPage(state.page, { saveCurrent: false });
} catch (error) {
  console.error(error);
  main.innerHTML = '<div class="error-state"><div><h1>无法读取本地资料</h1><p>请确认 data.js 与 index.html 位于同一目录。</p></div></div>';
}
