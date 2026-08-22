"use strict";

const STORAGE_KEY = "ielts-writing-static-reviews-v1";
const state = {
  page: location.hash.slice(1) || "reviews",
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
    .sort((a, b) => b.length - a.length);
  if (!matches.length) return safeText;
  const pattern = new RegExp(`(${matches.map(escapeRegExp).join("|")})`, "gi");
  return safeText.replace(pattern, "<mark>$1</mark>");
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

function hero(kicker, title, description, count, label) {
  return `<header class="hero"><div><span class="eyebrow">${escapeHtml(kicker)}</span><h1>${escapeHtml(title)}</h1><p>${escapeHtml(description)}</p></div><div class="hero-stat"><strong>${escapeHtml(count)}</strong><span>${escapeHtml(label)}</span></div></header>`;
}

function setPage(page) {
  if (!(["reviews", "letters", "task2", "materials"].includes(page))) page = "reviews";
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
  window.scrollTo({ top: 0, behavior: "smooth" });
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
  const seeds = seedLines.filter((record) => !record._meta);
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (Array.isArray(saved) && saved.length) return saved;
  } catch (error) {
    console.warn("Unable to parse local review history", error);
  }
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seeds));
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
  review[key] = sanitizeReviewHtml(editor.innerHTML);
  review.updatedAt = new Date().toISOString();
  persistReviews();
}

function reviewSidebar(records, selectedId) {
  return `<aside class="sidebar" aria-label="作文记录"><span class="sidebar-label">历史作文</span>${records.map((review) => `<button class="sidebar-button ${review.id === selectedId ? "active" : ""}" type="button" data-review-id="${escapeHtml(review.id)}"><strong>${escapeHtml(review.title)}</strong><small>${escapeHtml(review.taskType)} · ${escapeHtml(formatDate(review.updatedAt || review.createdAt))}</small></button>`).join("")}<div class="sidebar-actions"><button class="button secondary small" type="button" data-import>导入</button><button class="button secondary small" type="button" data-export>导出</button></div></aside>`;
}

function renderReviews() {
  const review = currentReview();
  if (!review) {
    main.innerHTML = `${hero("IELTS WRITING", "作文批改记录", "记录为空，可从 JSONL 备份恢复。", 0, "篇作文")}<div class="empty-state"><div><p>当前没有作文记录。</p><button class="button" type="button" data-import>导入 JSONL</button></div></div>`;
    bindImportExport();
    return;
  }
  state.selectedReviewId = review.id;
  const content = state.reviewMode === "review" ? review.reviewHtml : review.cleanHtml;
  main.innerHTML = `
    ${hero("IELTS WRITING · LOCAL REVIEW", "作文批改记录", "编辑内容保存在当前浏览器；可随时导出 JSONL 备份或在其他浏览器导入。", state.reviews.length, "篇作文")}
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
    state.selectedReviewId = button.dataset.reviewId;
    renderReviews();
  }));
  document.querySelectorAll("[data-mode]").forEach((button) => button.addEventListener("click", () => {
    saveEditor();
    state.reviewMode = button.dataset.mode;
    renderReviews();
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
    const index = state.reviews.findIndex((item) => item.id === state.selectedReviewId);
    state.lastDeleted = { record: state.reviews[index], index };
    state.reviews.splice(index, 1);
    state.selectedReviewId = state.reviews[Math.min(index, state.reviews.length - 1)]?.id || "";
    persistReviews();
    renderReviews();
  });
  document.querySelector("[data-undo]")?.addEventListener("click", () => {
    if (!state.lastDeleted) return;
    state.reviews.splice(state.lastDeleted.index, 0, state.lastDeleted.record);
    state.selectedReviewId = state.lastDeleted.record.id;
    state.lastDeleted = null;
    persistReviews();
    renderReviews();
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
    state.reviews = records.map((record) => ({ ...record, reviewHtml: sanitizeReviewHtml(record.reviewHtml), cleanHtml: sanitizeReviewHtml(record.cleanHtml) }));
    state.selectedReviewId = state.reviews[0].id;
    persistReviews();
    renderReviews();
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
    ${hero("GENERAL TRAINING · TASK 1", "书信通用框架", "按写信目的选择模板，再根据题目替换方括号内容。", templates.length, "类书信模板")}
    <div class="content-grid">
      <aside class="sidebar" aria-label="书信类型"><span class="sidebar-label">选择类型</span>${templates.map((item) => `<button class="sidebar-button ${item.id === template.id ? "active" : ""}" type="button" data-letter-id="${escapeHtml(item.id)}"><strong>${escapeHtml(item.name)}</strong><small>${escapeHtml(item.tone)}</small></button>`).join("")}</aside>
      <article class="panel">
        <header class="panel-header"><span class="eyebrow">${escapeHtml(template.tone)} · ${escapeHtml(template.targetWords)}</span><h2>${escapeHtml(template.name)}</h2><p>${escapeHtml(template.goal)}</p></header>
        <div class="panel-body">
          <div class="note"><strong>题目识别：</strong>${escapeHtml(template.prompt)}</div>
          <div class="section-heading"><h2>从题目提取信息</h2></div><ol class="numbered-list">${template.copyFromQuestion.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ol>
          <div class="section-heading"><h2>逐段模板</h2><p>推荐连接词：${template.connectors.map(escapeHtml).join(" · ")}</p></div>
          <div class="card-list">${template.paragraphs.map((paragraph) => `<article class="card"><span class="badge">${escapeHtml(paragraph.name)} · ${escapeHtml(paragraph.target)}</span><h3>${escapeHtml(paragraph.function)}</h3><div class="answer template-block">${escapeHtml(paragraph.template)}</div></article>`).join("")}</div>
          <div class="section-heading"><h2>最后检查</h2></div><ul class="numbered-list">${template.checks.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
          <div class="action-row" style="margin-top:22px"><button class="button" type="button" data-copy-letter>复制完整模板</button></div>
        </div>
      </article>
    </div>`;
  document.querySelectorAll("[data-letter-id]").forEach((button) => button.addEventListener("click", () => { state.letterId = button.dataset.letterId; renderLetters(); }));
  document.querySelector("[data-copy-letter]")?.addEventListener("click", () => copyText(template.paragraphs.map((paragraph) => paragraph.template).join("\n\n")));
}

function renderTaskTwo() {
  const framework = state.data.frameworks[0];
  const categories = state.data.essays;
  const category = categories.find((item) => item.id === state.essayCategoryId) || categories[0];
  state.essayCategoryId = category.id;
  const essay = category.essays.find((item) => item.id === state.essayId) || category.essays[0];
  state.essayId = essay.id;
  const total = categories.reduce((sum, item) => sum + item.essays.length, 0);
  main.innerHTML = `
    ${hero("IELTS WRITING · TASK 2", "通用框架与预测范文", "先确认题型和立场，再用简洁框架组织两个主体段。", total, "篇参考范文")}
    <section class="panel">
      <header class="panel-header"><span class="eyebrow">STRUCTURE FIRST</span><h2>三类主体结构</h2><p>不追求复杂句式，优先保证立场、原因、例子和结果完整。</p></header>
      <div class="panel-body two-column">${framework.modes.map((mode) => `<article class="card"><span class="badge">${escapeHtml(mode.includes)}</span><h3>${escapeHtml(mode.name)}</h3><p>${escapeHtml(mode.goal)}</p><div class="answer">${escapeHtml(mode.intro)}</div><p class="translation">${escapeHtml(mode.opinionRule || mode.relationship)}</p></article>`).join("")}</div>
    </section>
    <div class="content-grid" style="margin-top:24px">
      <aside class="sidebar" aria-label="范文分类"><span class="sidebar-label">选择范文</span>${categories.map((item) => `<div><button class="sidebar-button ${item.id === category.id ? "active" : ""}" type="button" data-essay-category="${escapeHtml(item.id)}"><strong>${escapeHtml(item.name)}</strong><small>${item.essays.length} 篇</small></button>${item.id === category.id ? item.essays.map((entry) => `<button class="sidebar-button ${entry.id === essay.id ? "active" : ""}" type="button" data-essay-id="${escapeHtml(entry.id)}" style="padding-left:22px"><strong>${escapeHtml(entry.title)}</strong><small>${escapeHtml(entry.position)}</small></button>`).join("") : ""}</div>`).join("")}</aside>
      <article class="panel">
        <header class="panel-header"><span class="eyebrow">${escapeHtml(category.name)} · 立场：${escapeHtml(essay.position)}</span><h2>${escapeHtml(essay.title)}</h2><p>${escapeHtml(essay.prompt)}</p><div class="chip-row">${essay.materials.map((item) => `<span class="badge">${escapeHtml(item)}</span>`).join("")}</div></header>
        <div class="panel-body">
          <div class="section-heading"><h2>快速框架</h2></div><div class="two-column">${essay.frameworkPoints.map((point) => `<article class="card"><span class="badge gold">${escapeHtml(point.label)}</span><p>${escapeHtml(point.text)}</p></article>`).join("")}</div>
          <div class="section-heading"><h2>重点短语</h2></div><div class="chip-row">${essay.keyPhrases.map((phrase) => `<span class="chip">${escapeHtml(phrase.text)}｜${escapeHtml(phrase.translation)}</span>`).join("")}</div>
          <div class="section-heading"><h2>完整范文</h2></div><div class="stack">${essay.paragraphs.map((paragraph) => `<div class="essay-paragraph">${highlight(paragraph, essay.keyPhrases.map((phrase) => phrase.text))}</div>`).join("")}</div>
          <div class="action-row" style="margin-top:20px"><button class="button" type="button" data-copy-essay>复制完整范文</button></div>
        </div>
      </article>
    </div>`;
  document.querySelectorAll("[data-essay-category]").forEach((button) => button.addEventListener("click", () => { state.essayCategoryId = button.dataset.essayCategory; state.essayId = ""; renderTaskTwo(); }));
  document.querySelectorAll("[data-essay-id]").forEach((button) => button.addEventListener("click", () => { state.essayId = button.dataset.essayId; renderTaskTwo(); }));
  document.querySelector("[data-copy-essay]")?.addEventListener("click", () => copyText(essay.paragraphs.join("\n\n")));
}

function renderMaterials() {
  const categories = state.data.materials;
  const category = categories.find((item) => item.id === state.materialCategoryId) || categories[0];
  state.materialCategoryId = category.id;
  const total = categories.reduce((sum, item) => sum + item.materials.length, 0);
  main.innerHTML = `
    ${hero("IELTS WRITING · IDEA BANK", "Task 2 主题素材", "每个主题保留中文逻辑链、Band 6 英文段落和可复用核心短语。", total, "个主题")}
    <div class="content-grid">
      <aside class="sidebar" aria-label="素材分类"><span class="sidebar-label">选择分类</span>${categories.map((item) => `<button class="sidebar-button ${item.id === category.id ? "active" : ""}" type="button" data-material-category="${escapeHtml(item.id)}"><strong>${escapeHtml(item.name)} · ${escapeHtml(item.nameEn)}</strong><small>${item.materials.length} 个主题</small></button>`).join("")}</aside>
      <section class="panel">
        <header class="panel-header"><span class="eyebrow">${escapeHtml(category.nameEn)}</span><h2>${escapeHtml(category.name)}</h2><p>${escapeHtml(category.summary)}</p></header>
        <div class="panel-body card-list">${[...category.materials].sort((a,b) => Number(Boolean(b.priority)) - Number(Boolean(a.priority)) || a.sourceOrder - b.sourceOrder).map((material) => `<article class="card"><div class="action-row"><span class="badge ${material.priority ? "gold" : ""}">${material.priority ? "★ 高频" : `#${material.sourceOrder}`}</span><button class="button secondary small" type="button" data-copy-material="${escapeHtml(material.id)}">复制</button></div><h3>${escapeHtml(material.title)} · ${escapeHtml(material.titleEn)}</h3><p><strong>可用观点：</strong>${material.ideas.map(escapeHtml).join("；")}</p><p class="note"><strong>逻辑链：</strong>${material.logic.map(escapeHtml).join(" → ")}</p><div class="answer">${highlight(material.paragraph, material.phrases)}</div><p class="translation">${escapeHtml(material.translation)}</p><div class="chip-row">${material.phrases.map((phrase) => `<span class="chip">${escapeHtml(phrase)}</span>`).join("")}</div></article>`).join("")}</div>
      </section>
    </div>`;
  document.querySelectorAll("[data-material-category]").forEach((button) => button.addEventListener("click", () => { state.materialCategoryId = button.dataset.materialCategory; renderMaterials(); }));
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
}

navButtons.forEach((button) => button.addEventListener("click", () => setPage(button.dataset.page)));
window.addEventListener("hashchange", () => setPage(location.hash.slice(1)));
window.addEventListener("beforeunload", saveEditor);

try {
  if (!window.IELTS_DATA?.reviews || !window.IELTS_DATA?.letters) {
    throw new Error("Missing embedded writing data");
  }
  state.data = window.IELTS_DATA;
  state.reviews = loadSavedReviews(state.data.reviews);
  state.selectedReviewId = state.reviews[0]?.id || "";
  setPage(state.page);
} catch (error) {
  console.error(error);
  main.innerHTML = '<div class="error-state"><div><h1>无法读取本地资料</h1><p>请确认 data.js 与 index.html 位于同一目录。</p></div></div>';
}
