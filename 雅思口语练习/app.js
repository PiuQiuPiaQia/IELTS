"use strict";

const PAGES = new Set(["part1", "part2", "part3", "chunks", "toolkit"]);
const UI_STORAGE_KEY = "ielts-speaking-ui-state-v1";
const PART2_MATERIAL_ORDER = [
  "people-tips",
  "place-tips",
  "object-tips",
  "event-tips",
  "alex",
  "shanghai",
  "gardening-grandma",
  "phone-detox",
  "movie-night",
  "standalone-topics"
];
const PART2_PRIMARY_MATERIALS = new Set(["alex", "shanghai", "gardening-grandma", "movie-night"]);

const state = {
  page: PAGES.has(location.hash.slice(1)) ? location.hash.slice(1) : "part2",
  data: {},
  part1Query: "",
  part2MaterialId: "alex",
  part2TopicId: "helpful-person",
  part3GroupId: "",
  part3View: "topics",
};

let readingPositions = {};
let scrollSaveTimer = 0;
let suspendScrollSave = false;

const main = document.querySelector("main");
const navButtons = [...document.querySelectorAll("[data-page]")];
const toast = document.querySelector("#toast");
const PART3_COMPARISON_PHRASES = [
  "By contrast",
  "Compared with",
  "while",
  "whereas",
  "Older people",
  "older people",
  "Older adults",
  "older adults",
  "Young adults",
  "young adults",
  "Younger adults",
  "younger adults",
  "Older children",
  "older children",
  "Younger children",
  "younger children",
  "Young children",
  "young children",
  "Older students",
  "older students",
  "Younger students",
  "younger students",
  "Young viewers",
  "young viewers",
  "Older viewers",
  "older viewers",
  "Young job seekers",
  "young job seekers",
  "Older workers",
  "older workers",
  "Young visitors",
  "young visitors",
  "Older visitors",
  "older visitors",
  "Teenagers",
  "teenagers",
  "a child",
  "an adult",
  "Young people",
  "young people",
  "Children",
  "children",
  "Adults",
  "adults",
  "Introverts",
  "introverts",
  "Extroverts",
  "extroverts",
  "In rural areas",
  "Rural areas",
  "rural areas",
  "Rural children",
  "rural children",
  "City children",
  "city children",
  "Rural parents",
  "rural parents",
  "City parents",
  "city parents",
  "Rural residents",
  "rural residents",
  "City residents",
  "city residents",
  "Cities",
  "cities",
];
const PART3_MATERIAL_PHRASES = {
  M1: ["unwind", "release pressure", "calm the mind", "calm children", "peaceful moment", "feel calm", "help students relax", "help them relax", "helps them relax", "ease anxiety", "eases mild anxiety", "lift their mood", "lifts their mood", "lift people", "lifts the crowd", "lift children", "lifts my mood", "relaxing experience", "relax"],
  M2: ["time-saving", "save time", "saves time", "efficient", "convenient", "convenience", "simplifies", "simplify", "reduce waiting", "reduces waiting", "less preparation", "no restrictions on time or location"],
  M3: ["practical", "cost-effective", "affordable", "budget-friendly", "value for money", "fits real needs", "fit their real needs", "fits their real needs", "fits my daily needs", "fits daily needs"],
  M4: ["broaden their horizons", "broadens their horizons", "broaden the helper", "broaden my horizons", "enrich their life experience", "life experience", "gain new knowledge", "gives them new knowledge", "new knowledge", "learn new skills", "learn new language skills", "learn useful skills", "useful skills", "explore new ideas", "explore different things", "open-minded", "personal growth", "helped me grow", "helps them grow"],
  M5: ["spend quality time", "quality time", "quality family time", "emotional bond", "face-to-face communication", "face-to-face interaction", "build trust", "builds trust", "closer relationships", "close relationships", "relationship closer", "relationships closer", "feel closer", "stay connected", "shared experience"],
  M6: ["physical and mental health", "physical health", "mental health", "keeps them active", "keep them active", "healthy lifestyle", "stay energetic", "more energy", "good condition", "active and healthy"],
  M7: ["moderate and rational way", "moderate", "moderately", "rational way", "rational choice", "rational check", "excessive", "too much", "overuse", "distraction", "addiction", "waste time", "wastes time", "waste of time", "balanced", "avoid using", "avoid buying", "depend on it too much", "only what they need", "unnecessary spending", "unnecessary things", "unnecessary downloads", "false needs"],
  M8: ["traditions", "local customs", "old customs and culture", "culture alive", "local culture", "another culture", "different culture", "other cultures", "Japanese culture", "cultural", "local life and culture"],
  M9: ["not really my cup of tea", "time-consuming and boring", "relaxation or pleasure", "distracts me from", "tend to avoid", "difficult to use", "take too much time"],
};

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
  const pattern = new RegExp(`(${matches.map((phrase) => escapeRegExp(escapeHtml(phrase))).join("|")})`, "gi");
  return safeText.replace(pattern, "<mark>$1</mark>");
}

function partThreeHighlightPhrases(item) {
  const phrases = item.comparison ? [...PART3_COMPARISON_PHRASES] : [];
  for (const code of item.materials || []) phrases.push(...(PART3_MATERIAL_PHRASES[code] || []));
  return phrases;
}

// answers-p3.js 里的重写版答案优先于 data.js 的原答案（键是 题组id||英文题目原文）。
// 该文件若加载失败或语法出错，window.P3_ANSWERS 就是 undefined，这里自动退回原答案，页面不会白屏。
function p3Override(groupId, question) {
  const table = typeof window !== "undefined" && window.P3_ANSWERS;
  if (!table || !groupId) return null;
  return table[groupId + "||" + question] || null;
}

function partThreeAnswerHtml(item, groupId) {
  const override = p3Override(groupId, item.question);
  // 只要覆盖表里有这道题，就一律渲染中文 PREC 版，不管 data.js 原答案是中文还是英文。
  // 新题组的英文原答案在 7 分上下，对 5.5 考生没用，所以不渲染（字段仍留在 data.js 里）。
  if (override || item.answerLanguage === "zh") {
    const answerText = (override && override.a) || item.translation?.answer || "";
    const phrases = override && override.p?.length ? override.p : (item.chunkPhrases?.length ? item.chunkPhrases : []);
    const answerHtml = phrases.length
      ? highlight(answerText, phrases)
      : escapeHtml(answerText || "答案整理中");
    // 方括号里是「顺口提示」：不用背的普通英文，只为让人知道那句中文怎么说。
    // 渲染成弱化样式，跟圆括号里高亮的核心词块区分开。没有方括号时这一步什么都不做。
    const answerWithHints = answerHtml.replace(/\[([^\[\]]+)\]/g, '<span class="answer-hint">$1</span>');
    const chunks = phrases.length
      ? `<div class="answer-keywords"><span>核心词块</span>${phrases.map((phrase) => `<code>${escapeHtml(phrase)}</code>`).join("")}</div>`
      : "";
    // g = 这道题该挑的角度（钱 / 关系 / 情绪 / 规矩 / 目标）。覆盖表里没有这个字段就不渲染，不报错。
    const angle = override && typeof override.g === "string"
      ? override.g
      : (typeof item.angle === "string" ? item.angle : "");
    const angleTag = angle
      ? `<span class="answer-angle" data-angle="${escapeHtml(angle)}">角度 · ${escapeHtml(angle)}</span>`
      : "";
    return `<div class="answer chinese-only-answer">${angleTag}<strong>中文答案：</strong><p class="plain-chinese-answer">${answerWithHints}</p>${chunks}</div>`;
  }
  if (item.answer) {
    return `<div class="answer">${highlight(item.answer, partThreeHighlightPhrases(item))}</div>${item.translation?.answer ? `<p class="translation"><strong>翻译：</strong>${escapeHtml(item.translation.answer)}</p>` : ""}`;
  }
  return '<div class="note">这道题的答案暂时留空。</div>';
}

function loadUiState() {
  try {
    const saved = JSON.parse(localStorage.getItem(UI_STORAGE_KEY) || "null");
    if (!saved || typeof saved !== "object") return;
    if (!PAGES.has(location.hash.slice(1)) && PAGES.has(saved.page)) state.page = saved.page;
    if (typeof saved.part1Query === "string") state.part1Query = saved.part1Query;
    if (typeof saved.part2MaterialId === "string") state.part2MaterialId = saved.part2MaterialId;
    if (typeof saved.part2TopicId === "string") state.part2TopicId = saved.part2TopicId;
    if (typeof saved.part3GroupId === "string") state.part3GroupId = saved.part3GroupId;
    if (saved.part3View === "topics" || saved.part3View === "list" || saved.part3View === "library") state.part3View = saved.part3View;
    if (saved.readingPositions && typeof saved.readingPositions === "object" && !Array.isArray(saved.readingPositions)) readingPositions = saved.readingPositions;
  } catch (error) {
    console.warn("Unable to restore speaking UI state", error);
  }
}

function persistUiState() {
  try {
    localStorage.setItem(UI_STORAGE_KEY, JSON.stringify({
      page: state.page,
      part1Query: state.part1Query,
      part2MaterialId: state.part2MaterialId,
      part2TopicId: state.part2TopicId,
      part3GroupId: state.part3GroupId,
      part3View: state.part3View,
      readingPositions,
    }));
  } catch (error) {
    console.warn("Unable to save speaking UI state", error);
  }
}

function currentViewKey() {
  if (state.page === "part1") return `part1:${encodeURIComponent(state.part1Query)}`;
  if (state.page === "part2") return `part2:${state.part2MaterialId}:${state.part2TopicId}`;
  if (state.page === "part3") {
    if (state.part3View === "list") return "part3:list";
    if (state.part3View === "library") return "part3:library";
    return `part3:topics:${state.part3GroupId}`;
  }
  return state.page;
}

function markReadingAnchors() {
  main.querySelectorAll(".group-section, .card, .answer-line, .dimension, .essay-paragraph").forEach((element, index) => {
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

function sidebarScrollPositions() {
  return [...main.querySelectorAll(".sidebar")].map((sidebar) => sidebar.scrollTop);
}

function restoreSidebarScrollPositions(positions) {
  main.querySelectorAll(".sidebar").forEach((sidebar, index) => {
    const scrollTop = positions[index];
    if (Number.isFinite(scrollTop)) sidebar.scrollTop = scrollTop;
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

function changeTopicTab(update) {
  clearTimeout(scrollSaveTimer);
  suspendScrollSave = true;
  update();
  render();
  persistUiState();
  requestAnimationFrame(() => requestAnimationFrame(() => {
    suspendScrollSave = false;
  }));
}

function changeSidebarView(update) {
  const positions = sidebarScrollPositions();
  saveReadingPosition();
  clearTimeout(scrollSaveTimer);
  update();
  render({ revealActive: false });
  restoreSidebarScrollPositions(positions);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 1500);
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
  if (!PAGES.has(page)) page = "part2";
  if (saveCurrent) saveReadingPosition();
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

function renderPartOne() {
  const groups = [...state.data.part1].sort((a, b) => {
    if (Boolean(a.isNew) !== Boolean(b.isNew)) return a.isNew ? -1 : 1;
    return (a.newOrder ?? Number.POSITIVE_INFINITY) - (b.newOrder ?? Number.POSITIVE_INFINITY);
  });
  const query = state.part1Query.trim().toLowerCase();
  const visibleGroups = groups
    .map((group) => ({ ...group, items: group.items.filter((item) => JSON.stringify(item).toLowerCase().includes(query)) }))
    .filter((group) => group.items.length);
  const visibleTotal = visibleGroups.reduce((sum, group) => sum + group.items.length, 0);
  main.innerHTML = `
    <div class="toolbar">
      <label class="search"><span aria-hidden="true">⌕</span><input id="part1-search" type="search" value="${escapeHtml(state.part1Query)}" placeholder="搜索题目、答案或中文…" autocomplete="off"></label>
      <span class="count" id="part1-count">显示 ${visibleTotal} 题</span>
    </div>
    <div id="part1-results">${visibleGroups.length ? partOneGroupsHtml(visibleGroups) : '<div class="empty-state">没有找到匹配的题目。</div>'}</div>`;
  document.querySelector("#part1-search").addEventListener("input", (event) => {
    state.part1Query = event.target.value;
    const query = state.part1Query.trim().toLowerCase();
    const filtered = groups
      .map((group) => ({ ...group, items: group.items.filter((item) => JSON.stringify(item).toLowerCase().includes(query)) }))
      .filter((group) => group.items.length);
    const count = filtered.reduce((sum, group) => sum + group.items.length, 0);
    document.querySelector("#part1-results").innerHTML = filtered.length
      ? partOneGroupsHtml(filtered)
      : '<div class="empty-state">没有找到匹配的题目。</div>';
    document.querySelector("#part1-count").textContent = `显示 ${count} 题`;
    markReadingAnchors();
    persistUiState();
  });
}

function partOneGroupsHtml(groups) {
  return groups.map((group) => `
    <section class="group-section">
      <div class="group-title"><div><span class="eyebrow">${escapeHtml(group.tab)}</span><h2>${escapeHtml(group.title)}${group.isNew ? '<span class="new-tag">新题</span>' : ""}</h2></div><span class="badge">${group.items.length} 题</span></div>
      <div class="card-list">
        ${group.items.map((item, index) => `
          <article class="card">
            <span class="badge warm">${String(index + 1).padStart(2, "0")}</span>
            <p class="question">${escapeHtml(item.question)}</p>
            <div class="answer">${highlight(item.answer, group.keyPhrases)}</div>
            ${item.translation ? `<p class="translation">中文：${escapeHtml(item.translation)}</p>` : ""}
            ${item.note ? `<p class="note">提示：${escapeHtml(item.note)}</p>` : ""}
          </article>`).join("")}
      </div>
    </section>`).join("");
}

function materialLabel(material) {
  return material.tab || material.title || material.id;
}

function reviewFrequencyClass(frequency) {
  if (frequency === "超高频") return "frequency-ultra";
  if (frequency === "高频") return "frequency-high";
  if (frequency === "中高频") return "frequency-medium";
  return "frequency-unlisted";
}

function reviewFrequencyTag(meta, { showUnlisted = false } = {}) {
  if (!meta && !showUnlisted) return "";
  const frequency = meta?.frequency || "PDF 未收录";
  return `<span class="review-frequency-tag ${reviewFrequencyClass(meta?.frequency)}">${escapeHtml(frequency)}</span>`;
}

function reviewOrder(meta) {
  return Number.isFinite(meta?.order) ? meta.order : Number.POSITIVE_INFINITY;
}

function compareReviewEntries(aMeta, bMeta, aFallback = 0, bFallback = 0) {
  return reviewOrder(aMeta) - reviewOrder(bMeta) || aFallback - bFallback;
}

function partThreeReviewMeta(groupId) {
  return (state.data.reviewGuide?.part3 || []).find((item) => item.groupId === groupId) || null;
}

function partTwoMaterialHasNewTopics(material) {
  return Boolean(
    material.topics?.some((topic) => topic.isNew) ||
    material.tips?.topicGroups?.some((group) => group.items?.some((item) => item.isNew))
  );
}

function renderPartTwo() {
  const materialOrder = new Map(PART2_MATERIAL_ORDER.map((id, index) => [id, index]));
  const materials = [...state.data.part2].sort((a, b) =>
    (materialOrder.get(a.id) ?? PART2_MATERIAL_ORDER.length) -
    (materialOrder.get(b.id) ?? PART2_MATERIAL_ORDER.length)
  );
  let material = materials.find((item) => item.id === state.part2MaterialId) || materials[0];
  state.part2MaterialId = material.id;
  const isTips = Boolean(material.tips);
  let topic = isTips ? null : material.topics.find((item) => item.id === state.part2TopicId) || material.topics[0];
  state.part2TopicId = topic?.id || "";
  main.innerHTML = `
    <div class="content-grid">
      <aside class="sidebar" aria-label="通用素材">
        <span class="sidebar-label">选择素材</span>
        ${materials.map((item) => `<button class="sidebar-button ${item.id === material.id ? "active" : ""}" type="button" data-material-id="${escapeHtml(item.id)}"><strong>${escapeHtml(materialLabel(item))}${partTwoMaterialHasNewTopics(item) ? '<span class="new-tag">新题</span>' : ""}</strong><small>${item.tips ? escapeHtml(item.tipLabel || "通用框架") : `${PART2_PRIMARY_MATERIALS.has(item.id) ? "首要素材 · " : ""}${item.topics.length} 道${item.standalone ? "独立题" : "适配题"}`}</small></button>`).join("")}
      </aside>
      <section class="panel">
        <header class="panel-header">
          <span class="eyebrow">${escapeHtml(material.tagline || material.description || "通用素材")}</span>
          <h2>${escapeHtml(material.title)}</h2>
          <p>${escapeHtml(material.description || material.storyline || "")}</p>
        </header>
        <div class="panel-body">
          ${material.tips
            ? partTwoTipsHtml(material.tips, state.data.toolkit?.find((item) => item.type === "materials")?.items || [], material.id)
            : material.standalone
            ? `<div class="standalone-topic-list">${material.topics.map((item) => `<section class="standalone-topic-block">${partTwoTopicHtml(item, { showFramework: false })}</section>`).join("")}</div>`
            : `${partTwoMasterHtml(material)}
              <div class="section-heading"><h2>选择原题</h2><p>切换题目后，下方答案与扣题重点会同步更新。</p></div>
              <div class="chip-row">${material.topics.map((item) => `<button class="chip ${item.id === topic.id ? "active" : ""}" type="button" data-topic-id="${escapeHtml(item.id)}">${escapeHtml(item.code || "")} ${escapeHtml(item.name || item.question)}</button>`).join("")}</div>
              ${partTwoTopicHtml(topic)}
              ${material.rules?.length ? `<div class="section-heading"><h2>使用提醒</h2></div><ul class="numbered-list">${material.rules.map((rule) => `<li>${escapeHtml(rule)}</li>`).join("")}</ul>` : ""}`}
        </div>
      </section>
    </div>`;
  document.querySelectorAll("[data-material-id]").forEach((button) => button.addEventListener("click", () => {
    changeSidebarView(() => {
      state.part2MaterialId = button.dataset.materialId;
      state.part2TopicId = "";
    });
  }));
  document.querySelectorAll("[data-topic-id]").forEach((button) => button.addEventListener("click", () => {
    changeTopicTab(() => { state.part2TopicId = button.dataset.topicId; });
  }));
  document.querySelectorAll("[data-copy-answer]").forEach((button) => button.addEventListener("click", () => {
    const answerTopic = material.topics.find((item) => item.id === button.dataset.copyAnswer) || topic;
    copyText(answerTopic.answer.map((line) => line.text).join(" "));
  }));
}

function partTwoAnswerAsStoryHtml(item) {
  const lines = (item.answer || [])
    .map((line) => typeof line === "string" ? { text: line } : line)
    .filter((line) => line?.text);
  if (!lines.length) return "";
  const english = lines.map((line) => line.text).join(" ");
  const translation = lines.map((line) => line.translation).filter(Boolean).join("");
  return `
    ${item.answerNote ? `<p class="translation">${escapeHtml(item.answerNote)}</p>` : ""}
    <p class="topic-guide-body"><strong>这个素材的故事：</strong>${highlight(english, item.keys || [])}</p>
    ${translation ? `<p class="memory-chain story-memory-chain"><strong>中文参考</strong>${escapeHtml(translation)}</p>` : ""}`;
}

function partTwoTipsHtml(tips, universalMaterials = [], materialId = "") {
  const section = tips.section;
  const reviewEntries = state.data.reviewGuide?.part2 || [];
  const reviewByQuestion = new Map(reviewEntries.map((item) => [item.question, item]));
  const nativeTopicGuideItems = (tips.topicGroups || [])
    .flatMap((group, groupIndex) => group.items.map((item, itemIndex) => ({
      group,
      item,
      order: Number.isFinite(item.sourceOrder) ? item.sourceOrder : groupIndex * 100 + itemIndex,
      review: reviewByQuestion.get(item.question) || null
    })));
  const nativeQuestions = new Set(nativeTopicGuideItems.map(({ item }) => item.question));
  const referencedQuestions = (tips.mergedStories || []).flatMap((story) =>
    (story.questions || []).map((entry) => typeof entry === "string" ? entry : entry.question)
  );
  const seenSupplementalQuestions = new Set();
  const supplementalRequests = [
    ...reviewEntries
      .filter((entry) => entry.targetMaterialId === materialId)
      .map((review) => ({ question: review.question, review })),
    ...referencedQuestions.map((question) => ({
      question,
      review: reviewByQuestion.get(question) || null
    }))
  ].filter(({ question }) => {
    if (!question || nativeQuestions.has(question) || seenSupplementalQuestions.has(question)) return false;
    seenSupplementalQuestions.add(question);
    return true;
  });
  const supplementalTopicItems = supplementalRequests
    .map(({ question, review }, index) => {
      let sourceMaterial = null;
      let item = null;
      for (const candidate of state.data.part2) {
        const candidateItems = [
          ...(candidate.topics || []),
          ...((candidate.tips?.topicGroups || []).flatMap((group) => group.items || []))
        ];
        const match = candidateItems.find((candidateItem) => candidateItem.question === question);
        if (!match) continue;
        sourceMaterial = candidate;
        item = match;
        break;
      }
      if (!sourceMaterial || !item) return null;
      return {
        group: { title: `复习顺序补充｜${materialLabel(sourceMaterial)}` },
        item,
        order: Number.isFinite(item.sourceOrder) ? item.sourceOrder : 10000 + index,
        review
      };
    })
    .filter(Boolean);
  const topicGuideItems = [...nativeTopicGuideItems, ...supplementalTopicItems];
  const topicGuideItemMap = new Map(topicGuideItems.map((entry) => [entry.item.question, entry]));
  const mergedQuestionSet = new Set();
  const mergedStoryCards = (tips.mergedStories || []).map((story) => {
    const questionEntries = (story.questions || []).map((questionEntry) => {
      const questionMeta = typeof questionEntry === "string" ? { question: questionEntry } : questionEntry;
      const entry = topicGuideItemMap.get(questionMeta.question);
      if (!entry) return null;
      mergedQuestionSet.add(entry.item.question);
      return { entry, questionMeta };
    }).filter(Boolean).sort((a, b) => {
      if (Boolean(a.entry.item.isLatest) !== Boolean(b.entry.item.isLatest)) {
        return a.entry.item.isLatest ? -1 : 1;
      }
      return compareReviewEntries(a.entry.review, b.entry.review, a.entry.order, b.entry.order);
    });
    if (!questionEntries.length) return null;
    const baseEntry = topicGuideItemMap.get(story.baseQuestion) || questionEntries[0].entry;
    const latestEntries = questionEntries.filter(({ entry }) => entry.item.isLatest);
    return {
      order: Number.isFinite(story.sourceOrder) ? story.sourceOrder : baseEntry.order,
      reviewOrder: Math.min(...questionEntries.map(({ entry }) => reviewOrder(entry.review))),
      isLatest: latestEntries.length > 0,
      latestOrder: latestEntries.length
        ? Math.min(...latestEntries.map(({ entry }) => entry.order))
        : Number.POSITIVE_INFINITY,
      title: story.title || baseEntry.group.title,
      questions: questionEntries.map(({ entry, questionMeta }) => ({
        text: entry.item.question,
        special: questionMeta.special || "",
        isNew: Boolean(entry.item.isNew),
        isLatest: Boolean(entry.item.isLatest),
        review: entry.review
      })),
      item: {
        ...baseEntry.item,
        draftCues: story.draftCues || baseEntry.item.draftCues,
        focus: story.focus || baseEntry.item.focus,
        omit: story.omit || baseEntry.item.omit,
        body: story.body || baseEntry.item.body,
        memoryChain: story.memoryChain || baseEntry.item.memoryChain,
        reasons: story.reasons || baseEntry.item.reasons,
        pointsLabel: story.pointsLabel || "可选理由 / 结尾点",
        reasonHint: story.reasonHint ?? baseEntry.item.reasonHint
      },
      merged: true
    };
  }).filter(Boolean);
  const singleStoryCards = topicGuideItems
    .filter(({ item }) => !mergedQuestionSet.has(item.question))
    .map(({ group, item, order, review }) => ({
      order,
      reviewOrder: reviewOrder(review),
      isLatest: Boolean(item.isLatest),
      latestOrder: item.isLatest ? order : Number.POSITIVE_INFINITY,
      title: item.storyTitle || item.name || group.title,
      questions: [{
        text: item.question,
        special: "",
        isNew: Boolean(item.isNew),
        isLatest: Boolean(item.isLatest),
        review
      }],
      item,
      merged: false
    }));
  const storyCards = [...mergedStoryCards, ...singleStoryCards].sort((a, b) => {
    if (Boolean(a.isLatest) !== Boolean(b.isLatest)) return a.isLatest ? -1 : 1;
    if (a.isLatest && b.isLatest) return a.latestOrder - b.latestOrder;
    return a.reviewOrder - b.reviewOrder || a.order - b.order;
  });
  const reviewGuideHtml = reviewEntries.some((item) => item.targetMaterialId === materialId) ? `<div class="note review-guide-note">
    <strong>${escapeHtml(state.data.reviewGuide.source)}：</strong>素材卡原则上按文档题目顺序排列；共用或强关联素材的题目会相邻展示，其他“PDF 未收录”题目接在后面。
  </div>` : "";
  const techniqueHtml = tips.techniques?.length ? `<div class="note">
    <strong>Part 2 · 最后一问技巧</strong><br>
    前面先正常覆盖题卡信息；最后一问用 <strong>As for...</strong> 扣题，再按问法选择一种：<br>
    ${tips.techniques.map((technique) => `${escapeHtml(technique.title)}（${escapeHtml(technique.when)}）：${technique.steps.map(escapeHtml).join(" → ")}`).join("<br>")}
    ${tips.reasonIdeas?.length ? `<br>地点类使用三原因：${tips.reasonIdeas.map(escapeHtml).join(" → ")}` : ""}
  </div>` : "";
  const sectionHtml = section?.answerSections?.length ? `
    <div class="section-heading">
      <h2>母版</h2>
    </div>
    <article class="card simple-master">
      <p class="translation">${escapeHtml(section.answerTitle || "按固定套路展开")}</p>
      ${section.answerSections.map((answerSection, index) => {
        const draftCues = answerSection.draftCues?.length ? answerSection.draftCues : answerSection.keywords || [];
        return `<section class="simple-master-section">
          <h3>${String(index + 1).padStart(2, "0")} · ${escapeHtml(answerSection.title)}</h3>
          ${draftCues.length ? `<p class="simple-master-cues"><strong>草稿：</strong>${draftCues.map(escapeHtml).join(" · ")}</p>` : ""}
          ${answerSection.lead ? `<p class="simple-master-english">${escapeHtml(answerSection.lead)}</p>` : ""}
          <p class="simple-master-english">${highlight(answerSection.english, answerSection.keywords)}</p>
          <p class="translation"><strong>中文：</strong>${escapeHtml(answerSection.translation)}</p>
        </section>`;
      }).join("")}
    </article>` : "";
  const topicGroupsHtml = storyCards.length ? `
    <div class="section-heading">
      <h2>素材卡片</h2>
      <p>一张卡只背一条故事。先看可套题目和对应特殊点，再从理由库选择最贴题的 3 条，不需要全部讲。</p>
    </div>
    <div class="topic-guide-groups">
      ${storyCards.map(({ title, questions, item, merged }) => `<article class="card topic-guide-group story-material-card">
        <h3>${escapeHtml(title)}</h3>
        <p class="story-card-label">这些题目可以用这个素材</p>
        <ol class="story-question-list">
          ${questions.map((question) => `<li><span class="story-question-text">${escapeHtml(question.text)}${reviewFrequencyTag(question.review, { showUnlisted: true })}${question.isNew ? '<span class="new-tag">新题</span>' : ""}</span>${question.special ? `<span class="story-question-special"><strong>只改：</strong>${escapeHtml(question.special)}</span>` : ""}</li>`).join("")}
        </ol>
        <section class="simple-master-section topic-guide-item">
          ${item.cuePoints?.length ? `<ul class="numbered-list">${item.cuePoints.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}</ul>` : ""}
          ${item.draftCues?.length ? `<p class="simple-master-cues"><strong>${merged ? "公共草稿" : "核心草稿"}：</strong>${item.draftCues.map(escapeHtml).join(" · ")}</p>` : ""}
          ${(item.focus || item.omit) ? `<div class="meta-grid">
            ${item.focus ? `<div class="meta-box"><span>扣题重点</span><strong>${escapeHtml(item.focus)}</strong></div>` : ""}
            ${item.omit ? `<div class="meta-box"><span>可以省略</span><strong>${escapeHtml(item.omit)}</strong></div>` : ""}
          </div>` : ""}
          ${item.body?.text ? `
            <p class="topic-guide-body"><strong>这个素材的故事：</strong>${highlight(item.body.text, item.body.highlights)}</p>
            ${item.memoryChain?.story ? `<p class="memory-chain story-memory-chain"><strong>故事中文链</strong>${escapeHtml(item.memoryChain.story)}</p>` : ""}
            ${item.reasons?.length ? `<p class="reason-label"><strong>${escapeHtml(item.pointsLabel || "可选理由 / 结尾点")}${merged && item.reasonHint !== false ? "（按题目选 3 条）" : ""}：</strong></p>
              <ol class="numbered-list topic-reason-list">
                ${item.reasons.map((reason, reasonIndex) => {
                  const reasonMemory = reason.memory || item.memoryChain?.reasons?.[reasonIndex];
                  return `<li>${highlight(reason.text, reason.highlights)}${reasonMemory ? `<span class="memory-chain reason-memory-chain"><strong>理由中文链</strong>${escapeHtml(reasonMemory)}</span>` : ""}</li>`;
                }).join("")}
              </ol>` : ""}
          ` : (item.answer?.length ? partTwoAnswerAsStoryHtml(item) : "")}
        </section>
      </article>`).join("")}
    </div>` : "";
  const universalMaterialMap = new Map(universalMaterials.map((item) => [item.code, item]));
  const materialsHtml = tips.materialUses?.length ? `
    <div class="section-heading">
      <h2>最后一问</h2>
    </div>
    <article class="card simple-master">
      <p class="translation">只保留自然适配的素材，每道题选择一组即可。</p>
      ${tips.materialUses.map((usage) => {
        const item = universalMaterialMap.get(usage.code);
        if (!item) return "";
        return `<section class="simple-master-section">
          <h3>${escapeHtml(item.code)} · ${escapeHtml(item.title)}</h3>
          <p class="simple-master-cues"><strong>适用：</strong>${escapeHtml(usage.reason)}</p>
          <p><strong>${escapeHtml(tips.usageLabel || "怎么套")}：</strong>${escapeHtml(usage.use)}</p>
          <p class="simple-master-english">${highlight(item.paragraph, item.highlights)}</p>
          <p class="translation"><strong>中文逻辑：</strong>${escapeHtml(item.chineseIdea)}</p>
        </section>`;
      }).join("")}
    </article>` : "";
  return `
    <div class="card-list">
      ${reviewGuideHtml}
      ${techniqueHtml}
      ${sectionHtml}
      ${topicGroupsHtml}
      ${materialsHtml}
      ${tips.reminder ? `<div class="note"><strong>提醒：</strong>${escapeHtml(tips.reminder)}</div>` : ""}
    </div>`;
}

function partTwoMasterHtml(material) {
  return `
    <section aria-labelledby="part-two-master-title">
      <div class="section-heading">
        <span class="eyebrow">PART 2 · CORE MATERIAL</span>
        <h2 id="part-two-master-title">素材母版</h2>
        <p>一分钟草稿：每段只写 2 个情节锚点，用来恢复整段内容。</p>
      </div>
      ${material.storyline ? `<div class="note">故事线：${escapeHtml(material.storyline)}</div>` : ""}
      ${partTwoMasterAnswerHtml(material)}
    </section>`;
}

function partTwoMasterAnswerHtml(material) {
  const sections = material.baseAnswerSections?.length
    ? material.baseAnswerSections
    : material.baseAnswer && material.modules?.length
      ? material.modules.map((module) => ({
          title: module.title,
          english: module.sentence,
          translation: module.translation || module.detail,
          keywords: module.keywords
        }))
      : [];
  if (sections.length) {
    return `<div class="master-section-list">${sections.map((section, index) => `
      <article class="card">
        <span class="badge warm">${String(index + 1).padStart(2, "0")} · ${escapeHtml(section.title)}</span>
        ${section.keywords?.length ? `<div class="draft-cues"><strong>草稿锚点</strong>${section.keywords.map((keyword) => `<span>${escapeHtml(keyword)}</span>`).join("")}</div>` : ""}
        <div class="answer">${highlight(section.english, section.keywords)}</div>
        <p class="translation"><strong>中文：</strong>${escapeHtml(section.translation)}</p>
      </article>`).join("")}</div>`;
  }
  return material.baseAnswer ? `<article class="card master-answer-card"><span class="badge warm">完整母版</span><div class="answer">${escapeHtml(material.baseAnswer)}</div></article>` : "";
}

function partTwoTopicHtml(topic, { showFramework = true } = {}) {
  return `
    <div class="section-heading"><h2>${escapeHtml(topic.name || "参考答案")}${topic.isNew ? '<span class="new-tag">新题</span>' : ""}</h2><p class="question">${escapeHtml(topic.question)}</p></div>
    ${topic.cuePoints?.length ? `<ul class="numbered-list">${topic.cuePoints.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}</ul>` : ""}
    ${topic.draftCues?.length ? `<div class="draft-cues"><strong>一分钟草稿</strong>${topic.draftCues.map((cue) => `<span>${escapeHtml(cue)}</span>`).join("")}</div>` : ""}
    ${topic.fit ? `<span class="badge">${escapeHtml(topic.fit)}</span>` : ""}
    ${(topic.focus || topic.omit) ? `<div class="meta-grid">
      ${topic.focus ? `<div class="meta-box"><span>扣题重点</span><strong>${escapeHtml(topic.focus)}</strong></div>` : ""}
      ${topic.omit ? `<div class="meta-box"><span>可以省略</span><strong>${escapeHtml(topic.omit)}</strong></div>` : ""}
    </div>` : ""}
    ${showFramework && topic.framework?.length ? `<h3>答题框架</h3><ol class="numbered-list">${topic.framework.map((line) => `<li>${escapeHtml(line)}</li>`).join("")}</ol>` : ""}
    ${topic.body?.text ? `
    <div class="group-title section-heading"><div><h2>完整参考答案</h2><p>先背整段故事，再用「故事中文链」恢复；结尾理由按题目选 3 条即可。</p></div></div>
    <p class="topic-guide-body">${highlight(topic.body.text, topic.body.highlights)}</p>
    ${topic.memoryChain?.story ? `<p class="memory-chain story-memory-chain"><strong>故事中文链</strong>${escapeHtml(topic.memoryChain.story)}</p>` : ""}
    ${topic.reasons?.length ? `<p class="reason-label"><strong>${escapeHtml(topic.pointsLabel || "可选理由 / 结尾点")}：</strong></p>
      <ol class="numbered-list topic-reason-list">
        ${topic.reasons.map((reason, reasonIndex) => {
          const reasonMemory = reason.memory || topic.memoryChain?.reasons?.[reasonIndex];
          return `<li>${highlight(reason.text, reason.highlights)}${reasonMemory ? `<span class="memory-chain reason-memory-chain"><strong>理由中文链</strong>${escapeHtml(reasonMemory)}</span>` : ""}</li>`;
        }).join("")}
      </ol>` : ""}
    ` : `
    <div class="group-title section-heading"><div><h2>完整参考答案</h2><p>${escapeHtml(topic.answerNote || "“特殊”句负责贴合当前题目，其余句可重复使用。")}</p></div><button class="copy-button" type="button" data-copy-answer="${escapeHtml(topic.id || "")}">复制答案</button></div>
    <div class="answer-list">${(topic.answer || []).map((line) => `<div class="answer-line"><span class="badge ${line.kind === "特殊" ? "warm" : ""}">${escapeHtml(line.kind)}</span>${escapeHtml(line.text)}${line.translation ? `<p class="translation"><strong>中文：</strong>${escapeHtml(line.translation)}</p>` : ""}</div>`).join("") || '<p class="empty-state">这道题暂时没有完整答案。</p>'}</div>`}
    ${topic.keys?.length ? `<h3>关键英文句</h3><div class="key-list">${topic.keys.map((line) => `<code>${escapeHtml(line)}</code>`).join("")}</div>` : ""}`;
}

function partThreeViewTabsHtml(questionCount, libraryCount) {
  return `<div class="part3-view-tabs" role="tablist" aria-label="Part 3 查看方式">
    <button class="part3-view-tab ${state.part3View === "topics" ? "active" : ""}" type="button" role="tab" aria-selected="${state.part3View === "topics"}" data-part3-view="topics">分主题练习</button>
    <button class="part3-view-tab ${state.part3View === "list" ? "active" : ""}" type="button" role="tab" aria-selected="${state.part3View === "list"}" data-part3-view="list">本季新题清单 <span>${questionCount}</span></button>
    <button class="part3-view-tab ${state.part3View === "library" ? "active" : ""}" type="button" role="tab" aria-selected="${state.part3View === "library"}" data-part3-view="library">理由 + 例子库 <span>${libraryCount}</span></button>
  </div>`;
}

function partThreeQuestionPreviewHtml(group, item) {
  if (!group || !item) return '<p class="empty-state">暂无可预览的答案。</p>';
  return `<div class="p3-answer-preview-heading">
      <div class="p3-preview-topic-tags"><span class="badge">${escapeHtml(group.title)}</span>${reviewFrequencyTag(partThreeReviewMeta(group.id), { showUnlisted: true })}</div>
      <span>悬浮左侧题目可切换</span>
    </div>
    <p class="question">${escapeHtml(item.question)}</p>
    ${item.translation?.question ? `<p class="translation"><strong>题目：</strong>${escapeHtml(item.translation.question)}</p>` : ""}
    ${partThreeAnswerHtml(item, group.id)}`;
}

// 从「五句式」中文答案里抽出「理由」句（因为…）和「例子」句（比如…），拆成中文 + 英文提示。
// 全角（）里是核心词块，半角[]里是顺口英文；这里把连接词滤掉，留下有信息量的英文。
const P3_LIB_CONNECTORS = new Set(["I think…", "Yes, definitely.", "Not really.", "It depends, but usually…", "because…", "mainly because…", "For example,…", "Also,…", "So…"]);
function p3ReasonExample(text) {
  const sentences = String(text || "").split("。").filter(Boolean);
  const pick = (kw) => sentences.find((s) => s.includes(kw)) || "";
  const cnOf = (s) => s.replace(/（[^）]*）/g, "").replace(/\[[^\]]*\]/g, "").replace(/^\s*(主要是)?(因为|而且|比如|所以|我觉得)，?/, "").trim();
  const enOf = (s) => {
    const hints = [...s.matchAll(/\[([^\]]*)\]/g)].map((m) => m[1]);
    const chunks = [...s.matchAll(/（([^）]*)）/g)].map((m) => m[1]).filter((c) => !P3_LIB_CONNECTORS.has(c));
    let en = hints.join(" ").trim();
    if (!en) en = chunks.join(", ").trim();
    else if (chunks.length) en = `${chunks.join(", ")} — ${en}`;
    return en;
  };
  const r = pick("因为");
  const e = pick("比如");
  return { reasonCn: cnOf(r), reasonEn: enOf(r), exCn: cnOf(e), exEn: enOf(e) };
}

function partThreeLibraryHtml(groups) {
  const catOf = (category) => (category || "").replace(/类$/, "");
  const sections = groups.filter((group) => group.isLatest).map((group) => {
    const rows = group.items.map((item) => {
      const override = p3Override(group.id, item.question);
      const answer = (override && override.a) || item.translation?.answer || "";
      const { reasonCn, reasonEn, exCn, exEn } = p3ReasonExample(answer);
      if (!reasonCn && !exCn) return "";
      return `<div class="p3-lib-qrow">
        <p class="p3-lib-q">${escapeHtml(item.question)}</p>
        <div class="p3-lib-pair"><span class="p3-lib-lbl reason">理由</span><div><p class="p3-lib-cn">${escapeHtml(reasonCn || "—")}</p>${reasonEn ? `<p class="p3-lib-en">${escapeHtml(reasonEn)}</p>` : ""}</div></div>
        <div class="p3-lib-pair"><span class="p3-lib-lbl example">例子</span><div><p class="p3-lib-cn">${escapeHtml(exCn || "—")}</p>${exEn ? `<p class="p3-lib-en">${escapeHtml(exEn)}</p>` : ""}</div></div>
      </div>`;
    }).join("");
    if (!rows) return "";
    return `<section class="p3-lib-topic group-section">
      <div class="p3-lib-topic-header"><span class="badge">${escapeHtml(catOf(group.category))}</span><h3>${escapeHtml(group.title)}</h3><span class="p3-lib-topic-meta">${group.items.length} 题</span></div>
      ${rows}
    </section>`;
  }).join("");
  return `<section class="panel p3-question-index">
    <header class="panel-header">
      <span class="eyebrow">PART 3 · REASONS &amp; EXAMPLES</span>
      <h2>理由 + 例子库</h2>
      <p>每道新题抽出它的<strong>理由</strong>和<strong>例子</strong>，中英对照。橙色是理由、蓝色是例子，下面浅色是要背的英文。</p>
    </header>
    <div class="panel-body p3-lib-body">${sections || '<p class="empty-state">暂无可展示的理由与例子。</p>'}</div>
  </section>`;
}

function partThreeQuestionListHtml(groups) {
  const questionCount = groups.reduce((total, group) => total + group.items.length, 0);
  const firstGroup = groups.find((group) => group.items.length);
  const firstItem = firstGroup?.items[0];
  return `<section class="panel p3-question-index">
    <header class="panel-header">
      <span class="eyebrow">PART 3 · NEW QUESTIONS</span>
      <h2>本季新题清单</h2>
      <p>共 ${groups.length} 个话题、${questionCount} 道题。PDF 收录题组按 9 月复习顺序排列，其余题组接在后面。</p>
    </header>
    <div class="panel-body p3-index-layout">
      <div class="p3-index-list">
        ${groups.map((group, groupIndex) => `<section class="p3-index-topic group-section">
          <div class="p3-index-topic-header">
            <div><span class="badge warm">${String(groupIndex + 1).padStart(2, "0")}</span><h3>${escapeHtml(group.title)}${reviewFrequencyTag(partThreeReviewMeta(group.id), { showUnlisted: true })}${group.isLatest ? '<span class="new-tag">本次新增</span>' : ""}</h3></div>
            <span class="p3-index-topic-meta">${escapeHtml(group.category)} · ${group.items.length} 题</span>
          </div>
          <ol class="p3-index-questions">
            ${group.items.map((item, itemIndex) => `<li class="p3-index-item ${group === firstGroup && itemIndex === 0 ? "active" : ""}" tabindex="0" data-p3-preview-group="${escapeHtml(group.id)}" data-p3-preview-index="${itemIndex}">
              <p class="p3-index-question">${escapeHtml(item.question)}</p>
              <p class="p3-index-translation">${escapeHtml(item.translation?.question || "翻译整理中")}</p>
            </li>`).join("")}
          </ol>
        </section>`).join("")}
      </div>
      <aside class="p3-answer-preview" data-p3-answer-preview aria-live="polite" aria-label="题目答案预览">
        ${partThreeQuestionPreviewHtml(firstGroup, firstItem)}
      </aside>
    </div>
  </section>`;
}

function renderPartThree() {
  const newGroups = state.data.part3.filter((group) => group.isNew);
  const sourceOrder = new Map(state.data.part3.map((group, index) => [group.id, index]));
  const groups = [...newGroups]
    .sort((a, b) => {
      if (Boolean(a.isLatest) !== Boolean(b.isLatest)) return a.isLatest ? -1 : 1;
      if (a.isLatest && b.isLatest) {
        const latestOrderA = Number.isFinite(a.latestOrder) ? a.latestOrder : Number.POSITIVE_INFINITY;
        const latestOrderB = Number.isFinite(b.latestOrder) ? b.latestOrder : Number.POSITIVE_INFINITY;
        if (latestOrderA !== latestOrderB) return latestOrderA - latestOrderB;
      }
      return compareReviewEntries(
        partThreeReviewMeta(a.id),
        partThreeReviewMeta(b.id),
        sourceOrder.get(a.id),
        sourceOrder.get(b.id)
      );
    });
  const listGroups = groups;
  const listQuestionCount = listGroups.reduce((total, group) => total + group.items.length, 0);
  const libraryQuestionCount = listGroups.reduce((total, group) => total + (group.isLatest ? group.items.length : 0), 0);
  const selected = groups.find((group) => group.id === state.part3GroupId) || groups[0];
  const answerModeLabel = selected.items.some((item) => item.answerLanguage !== "zh") ? "中英答案" : "中文答案";
  state.part3GroupId = selected.id;
  main.innerHTML = `
    ${partThreeViewTabsHtml(listQuestionCount, libraryQuestionCount)}
    ${state.part3View === "list" ? partThreeQuestionListHtml(listGroups) : state.part3View === "library" ? partThreeLibraryHtml(listGroups) : `<div class="content-grid">
      <aside class="sidebar" aria-label="观点分类"><span class="sidebar-label">选择主题</span>${groups.map((group) => `<button class="sidebar-button ${group.id === selected.id ? "active" : ""}" type="button" data-part3-id="${escapeHtml(group.id)}"><strong>${escapeHtml(group.title)}${reviewFrequencyTag(partThreeReviewMeta(group.id), { showUnlisted: true })}${group.isNew ? `<span class="new-tag">${group.isLatest ? "本次新增" : "新题"}</span>` : ""}</strong><small>${escapeHtml(group.category)} · ${group.items.length} 题</small></button>`).join("")}</aside>
      <section class="panel">
        <header class="panel-header"><span class="eyebrow">${selected.isNew ? `${selected.isLatest ? "本次新增" : "新题"} · ${answerModeLabel} · ` : ""}${escapeHtml(selected.category)} · 对应 Part 2：${escapeHtml(selected.partTwo)}</span><h2>${escapeHtml(selected.title)}${reviewFrequencyTag(partThreeReviewMeta(selected.id), { showUnlisted: true })}</h2></header>
        <div class="panel-body card-list">${selected.items.map((item, index) => `<article class="card">
          <span class="badge warm">${String(index + 1).padStart(2, "0")}</span>
          <p class="question">${escapeHtml(item.question)}</p>
          ${item.translation?.question ? `<p class="translation"><strong>题目：</strong>${escapeHtml(item.translation.question)}</p>` : ""}
          ${item.answerLanguage === "zh" ? (item.structure ? `<div class="chip-row"><span class="chip structure">结构 · ${escapeHtml(item.structure)}</span></div>` : "") : ((item.structure || item.materials?.length) ? `<div class="chip-row">${item.structure ? `<span class="chip structure">结构 · ${escapeHtml(item.structure)}</span>` : ""}${item.materials?.map((code) => `<span class="chip">${escapeHtml(toolkitMaterialLabel(code))}</span>`).join("") || ""}</div>` : "")}
          ${item.comparison ? `<p class="note"><strong>高频对比：</strong>${escapeHtml(item.comparison)}</p>` : ""}
          ${partThreeAnswerHtml(item, selected.id)}
        </article>`).join("")}</div>
      </section>
    </div>`}`;
  document.querySelectorAll("[data-part3-view]").forEach((button) => button.addEventListener("click", () => {
    if (button.dataset.part3View === state.part3View) return;
    saveReadingPosition();
    state.part3View = button.dataset.part3View;
    render();
    restoreReadingPosition(0);
  }));
  document.querySelectorAll("[data-part3-id]").forEach((button) => button.addEventListener("click", () => {
    changeSidebarView(() => { state.part3GroupId = button.dataset.part3Id; });
  }));
  const answerPreview = document.querySelector("[data-p3-answer-preview]");
  const previewItems = [...document.querySelectorAll("[data-p3-preview-group]")];
  const showQuestionPreview = (element) => {
    const group = groups.find((candidate) => candidate.id === element.dataset.p3PreviewGroup);
    const item = group?.items[Number(element.dataset.p3PreviewIndex)];
    if (!answerPreview || !group || !item) return;
    answerPreview.innerHTML = partThreeQuestionPreviewHtml(group, item);
    previewItems.forEach((candidate) => candidate.classList.toggle("active", candidate === element));
  };
  previewItems.forEach((element) => {
    element.addEventListener("mouseenter", () => showQuestionPreview(element));
    element.addEventListener("focus", () => showQuestionPreview(element));
    element.addEventListener("click", () => showQuestionPreview(element));
  });
}

function chunkLibrary() {
  return state.data.chunks || { structures: [], functionChunks: [], families: [] };
}

// 考前 2-3 小时速记版：每条链只渲染 3 个词块（C05 例外，4 个），连接词块只渲染 12 个，Set 里一共 73 个（12 连接 + 19 链 × 3 + C05 的 4 个）。
// 挑选标准：短、不绑死在某一个具体故事上、中文一看就懂。data.js 里 7 个一条的完整链全部保留。
// 想看回完整版，把下面这行改成 const CHUNK_KEEP = null; 即可，数据一行都不用动。
const CHUNK_KEEP = new Set([
  // 二、万能连接词块（12）
  "Yes, definitely.", "Not really.", "It depends, but usually…",
  "mainly because…", "The main reason is that…",
  "For example,…", "Take my own case,…",
  "As a result,…", "That's why…",
  "it has both good and bad sides",
  "By contrast,…", "Compared with…",
  // C01 系统出故障
  "something went wrong with…", "turn to… for help", "it was just a small problem",
  // C03 团队协作
  "be responsible for one part of…", "each do what we're good at", "it's much faster than working alone",
  // C04 职业与压力
  "a stable income", "a real sense of achievement", "make a difference to other people",
  // C05 经营生意（补 P3 最大的缺口：创业、公司成败、顾客、政府拨款，共 14 道题。唯一一条留 4 个的链）
  "run my own business", "listen to what customers say", "keep the costs down", "the government should support…",
  // C06 定目标与执行
  "set myself a clear goal", "break it down into small steps", "see real progress",
  // C08 改变想法
  "I used to think…", "now I think…", "keep an open mind",
  // C10 作息与效率
  "be a morning person", "I work best before…", "stick to a routine",
  // C13 值得去的地方
  "really worth visiting", "there's a lot to see and do", "I'd recommend it to anyone who…",
  // C14 城市好与无聊
  "public transport is convenient", "many more job opportunities", "a slower pace of life",
  // C15 堵车与通勤
  "get stuck in traffic", "at rush hour", "take the subway instead",
  // C18 保护环境
  "cut down on…", "it's everyone's responsibility", "small changes add up",
  // C20 在家放松
  "relax after a long day", "easy to follow", "it helps me forget about…",
  // C30 养宠物
  "it's a big responsibility", "treat them as part of the family", "it teaches you to think about others",
  // C31 吃饭与做饭
  "cook something simple at home", "eat out with friends", "there's a lot more choice now",
  // C32 走路与户外
  "go for a walk after dinner", "get some fresh air", "we used to walk everywhere",
  // C33 送礼与人情
  "it's the thought that counts", "pick something they'll actually use", "I'd rather give than receive",
  // C19 法律与规定（补 P3 法律/校规/职场规定/惩罚）
  "stick to the rules", "keep people safe", "it's there for a reason",
  // C26 广告与代言（补 P3 广告/名人代言/公司）
  "it catches your attention", "you remember it easily", "some ads are not honest",
  // C02 联系与回应（补 P3 延迟回复/社交媒体/童年朋友）
  "get back to… as soon as I can", "everyone gets busy sometimes", "there's usually a good reason for it",
  // C25 新闻与 AI（补 P3 新闻渠道/AI 优缺点/节目）
  "I usually see… on my phone", "it saves me a lot of time, but…", "I don't believe everything I read"
]);

function chunkItemsHtml(items) {
  const kept = CHUNK_KEEP ? items.filter((item) => CHUNK_KEEP.has(item.en)) : items;
  return `<div class="chunk-list">${kept.map((item) => `<div class="chunk-item${item.star ? " star" : ""}"><code>${escapeHtml(item.en)}</code><span>${escapeHtml(item.zh)}</span></div>`).join("")}</div>`;
}

function chunkStructureHtml(structure) {
  return `
    <article class="card">
      <div class="group-title"><div><span class="badge">${escapeHtml(structure.part)}</span><h3>${escapeHtml(structure.title)}</h3></div></div>
      <p class="note">${escapeHtml(structure.note)}</p>
      <div class="chunk-steps">${structure.steps.map((step) => `<div class="chunk-step"><strong>${escapeHtml(step.label)}</strong><code>${escapeHtml(step.en)}</code><span>${escapeHtml(step.zh)}</span></div>`).join("")}</div>
    </article>`;
}

// 每条链的「串句」：把这条链的词块串成一句能直接说出口的话。
// 背的时候背这一句，不要背 3 个碎片——20 句 = 61 个内容词块，而且每句本身就是现成的 P1 答案。
const CHAIN_SENTENCES = {
  C01: "Something went wrong with my laptop, so I turned to a friend for help, and it was just a small problem.",
  C03: "We each do what we're good at, and I'm responsible for one part of the project, so it's much faster than working alone.",
  C04: "It gives you a stable income and a real sense of achievement, and you can make a difference to other people.",
  C05: "If you run your own business, you have to listen to what customers say and keep the costs down — and I think the government should support small companies too.",
  C06: "I set myself a clear goal, break it down into small steps, and then I can see real progress.",
  C08: "I used to think money mattered most, but now I think health does — you have to keep an open mind.",
  C10: "I'm a morning person — I work best before lunch, so I stick to a routine.",
  C13: "It's really worth visiting because there's a lot to see and do — I'd recommend it to anyone who likes history.",
  C14: "Public transport is convenient and there are many more job opportunities, but the countryside has a slower pace of life.",
  C15: "I always get stuck in traffic at rush hour, so now I take the subway instead.",
  C18: "We all need to cut down on plastic, because small changes add up — it's everyone's responsibility.",
  C20: "I watch it to relax after a long day; it's easy to follow and it helps me forget about work.",
  C30: "It's a big responsibility, but we treat them as part of the family, and it teaches you to think about others.",
  C31: "I usually cook something simple at home, but I also eat out with friends — there's a lot more choice now.",
  C32: "I go for a walk after dinner just to get some fresh air; we used to walk everywhere when I was young.",
  C33: "It's the thought that counts, so I pick something they'll actually use — I'd rather give than receive.",
  C19: "You should stick to the rules because they keep people safe — every rule is there for a reason.",
  C26: "A good ad catches your attention and you remember it easily, but some ads are not honest.",
  C02: "I get back to people as soon as I can, but everyone gets busy sometimes, so there's usually a good reason for it.",
  C25: "I usually see the news on my phone. It saves me a lot of time, but I don't believe everything I read."
};

// 三轮背诵顺序。第一轮是覆盖题目最多的 8 条，第二轮是话题绑得死、抽到才用得上的 12 条。
const REVIEW_ROUNDS = [
  {
    title: "第一轮 · 60 分钟",
    lead: "先花 15 分钟把第一部分的 PREC 骨架和第二部分的 12 个连接词块念熟（当一个四句模板背，不要当 12 个词背），再回到上面第三节，按 1 到 8 的顺序背，每条 5 分钟。背完 Part 3 一半以上的题能开口。",
    chains: ["定目标与执行", "职业与压力", "改变想法", "城市好与无聊", "值得去的地方", "在家放松", "团队协作", "系统出故障"]
  },
  {
    title: "第二轮 · 75 分钟",
    lead: "接着背第三节的 9 到 20。这 12 条频率低一些，但话题绑得死——抽到守规矩、广告、送礼这类题，没有它就是空的，一条都别跳。每条 6 分钟。第 9 条「经营生意」是实测下来缺口最大的一条，商业和政府拨款类的题全指望它，别放到最后背。",
    chains: ["经营生意", "作息与效率", "堵车通勤", "吃饭与做饭", "走路与户外", "送礼与人情", "养宠物", "保护环境", "法律与规定", "广告与代言", "联系与回应", "新闻与 AI"]
  },
  {
    title: "第三轮 · 50 分钟",
    lead: "绝对不要再通读一遍。读第三遍只会产生「我记住了」的错觉，但考场是从中文往英文调，通读练不到这个方向。改成：① 25 分钟盖住英文，只看链标题把串句说出来，卡超过两秒的抄在纸上；② 15 分钟只念抄下来的那十几个，不要又从头过一遍；③ 10 分钟去 Part 3 页随机点五道题，硬套 PREC 说完——真正的瓶颈是「听到题想起哪条链」，不是词块本身。",
    chains: []
  }
];

function chunkChainHtml(chain, index) {
  if (!chain) return "";
  const sentence = CHAIN_SENTENCES[chain.code];
  return `
    <article class="card chunk-card">
      <h3 class="chunk-head"><b>${index + 1}</b>${escapeHtml(chain.title)}</h3>
      ${chunkItemsHtml(chain.chunks)}
      ${sentence ? `<p class="chunk-sentence">${escapeHtml(sentence)}</p>` : ""}
    </article>`;
}

// 第三节的链顺序 = 第四节三轮背诵顺序，两处必须一模一样，改了一处就要改另一处。
// 分组不再按话题，而是按背诵轮次：第一轮 8 条是覆盖题目最多的，第二轮 12 条是话题绑得死、抽到才用得上的。
// 每条链渲染 3 个词块（由 CHUNK_KEEP 控制，C05 是唯一留 4 个的），共 61 个内容词块。
// 选链标准是 Part 1 的 16 个话题组 + Part 3 的 41 道新题组，Part 2 有自己的母版页，不在这里管。
// C31/C32/C33 是为 Part 1 的食物、步行、礼物三组新写的，原来的 30 条链都是从 Part 2 母版长出来的，接不住这几组。
// C19/C26/C02/C25 是为补 Part 3 的法律规则、广告商业、人际沟通、媒体新闻四个缺口加回来的。
// C05 是 2026-09-01 逐题实测 213 道 P3 题后加的：创业、公司成败、顾客、政府拨款一共 14 道题原来一条链都挂不上。
// data.js 里 33 条链全部保留，把某条链的编号加回下面即可恢复。
const CORE_CHAIN_GROUPS = [
  { title: "第一轮 · 8 条最高频链", codes: ["C06", "C04", "C08", "C14", "C13", "C20", "C03", "C01"] },
  { title: "第二轮 · 12 条话题链", codes: ["C05", "C10", "C15", "C31", "C32", "C33", "C30", "C18", "C19", "C26", "C02", "C25"] }
];

function coreChainGroups(families) {
  const byCode = new Map();
  families.forEach((family) => (family.chains || []).forEach((chain) => byCode.set(chain.code, chain)));
  return CORE_CHAIN_GROUPS
    .map((group) => ({ title: group.title, chains: group.codes.map((code) => byCode.get(code)).filter(Boolean) }))
    .filter((group) => group.chains.length);
}

function renderChunks() {
  const library = chunkLibrary();
  const chainGroups = coreChainGroups(library.families);
  // 第三节和第四节都用同一套 1–20 连续编号，两处的第 N 条必须是同一条链。
  let chainNo = 0;
  const chainGroupsHtml = chainGroups.map((group) => `
          <div class="chunk-family">
            <div class="group-title"><div><h3>${escapeHtml(group.title)}</h3></div></div>
            <div class="card-list">${group.chains.map((chain) => chunkChainHtml(chain, chainNo++)).join("")}</div>
          </div>`).join("");
  let roundNo = 0;
  const roundsHtml = REVIEW_ROUNDS.map((round) => `
          <article class="card chunk-card">
            <h3 class="chunk-head">${escapeHtml(round.title)}</h3>
            <p class="round-lead">${escapeHtml(round.lead)}</p>
            ${round.chains.length ? `<div class="round-chains">${round.chains.map((name) => `<span><b>${++roundNo}</b>${escapeHtml(name)}</span>`).join("")}</div>` : ""}
          </article>`).join("");
  main.innerHTML = `
    <section class="panel">
      <header class="panel-header"><span class="eyebrow">CORE CHUNKS</span><h2>核心词块库</h2></header>
      <div class="panel-body stack">
        <section class="group-section">
          <div class="group-title"><div><span class="eyebrow">STRUCTURE</span><h2>一、结构模板</h2></div></div>
          <div class="card-list">${library.structures.map(chunkStructureHtml).join("")}</div>
        </section>
        <section class="group-section">
          <div class="group-title"><div><span class="eyebrow">GLUE</span><h2>二、万能连接词块</h2></div></div>
          <div class="card-list">${library.functionChunks.map((group) => `<article class="card"><h3>${escapeHtml(group.title)}</h3>${chunkItemsHtml(group.items)}</article>`).join("")}</div>
        </section>
        <section class="group-section">
          <div class="group-title"><div><span class="eyebrow">CHAINS</span><h2>三、内容词块链</h2></div></div>
          <p class="note">排列顺序就是背诵顺序，从上往下背到底即可，不用跳。每条链下面那句<strong>串句</strong>才是要背的东西，词块列表只是拆开给你看的。</p>
          ${chainGroupsHtml}
        </section>
        <section class="group-section">
          <div class="group-title"><div><span class="eyebrow">PLAN</span><h2>四、三轮背诵顺序</h2></div></div>
          <p class="note">不要一条一条背词块，背每条链下面那句串句——20 句就是 61 个内容词块，而且每句本身就是能直接说出口的 Part 1 答案。下面的编号和第三节一一对应。</p>
          <div class="card-list">${roundsHtml}</div>
        </section>
      </div>
    </section>`;
}

function toolkitMaterialLabel(code) {
  for (const block of state.data.toolkit) {
    const item = block.items.find((entry) => entry.code === code);
    if (item) return `${code} · ${item.title}`;
  }
  return code;
}

function renderToolkit() {
  const comparisonRecord = state.data.toolkit.find((item) => item.type === "comparisons");
  const materialRecord = state.data.toolkit.find((item) => item.type === "materials");
  const comparisons = comparisonRecord?.items || [];
  const materials = materialRecord?.items || [];
  main.innerHTML = `
    <section class="panel">
      <header class="panel-header"><span class="eyebrow">COMPARISON</span><h2>三类高频对比</h2><p>从生活经验、习惯、成本、效率等维度快速组织答案。</p></header>
      <div class="panel-body stack">${comparisons.map((comparison) => `<section><div class="group-title"><h2>${escapeHtml(comparison.code)} · ${escapeHtml(comparison.title)}</h2></div><div class="comparison-grid">${comparison.dimensions.map((dimension) => `<article class="dimension"><h3>${escapeHtml(dimension.title)}</h3>${dimension.entries.map((entry) => `<strong>${escapeHtml(entry.label)}</strong><blockquote>${escapeHtml(entry.text)}</blockquote>`).join("")}</article>`).join("")}</div></section>`).join("")}</div>
    </section>
    <section class="panel" style="margin-top:24px">
      <header class="panel-header"><span class="eyebrow">UNIVERSAL MATERIALS</span><h2>完整背诵段落</h2><p>绿色标记是迁移到其他题目时最值得优先调用的表达。</p></header>
      <div class="panel-body card-list">${materials.map((material) => `<article class="card"><span class="badge">${escapeHtml(material.code)}</span><h3>${escapeHtml(material.title)}</h3><p>${escapeHtml(material.chineseIdea)}</p><div class="answer">${highlight(material.paragraph, material.highlights)}</div></article>`).join("")}</div>
    </section>`;
}

function render({ revealActive = true } = {}) {
  if (!state.data[state.page]) return;
  if (state.page === "part1") renderPartOne();
  if (state.page === "part2") renderPartTwo();
  if (state.page === "part3") renderPartThree();
  if (state.page === "chunks") renderChunks();
  if (state.page === "toolkit") renderToolkit();
  markReadingAnchors();
  if (revealActive) revealActiveTabs();
  persistUiState();
}

navButtons.forEach((button) => button.addEventListener("click", () => setPage(button.dataset.page)));
window.addEventListener("hashchange", () => {
  const page = location.hash.slice(1);
  if (PAGES.has(page)) setPage(page);
});
window.addEventListener("scroll", scheduleReadingSave, { passive: true });
window.addEventListener("pagehide", saveReadingPosition);
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") saveReadingPosition();
});

if ("scrollRestoration" in history) history.scrollRestoration = "manual";

try {
  if (!window.IELTS_DATA?.part1 || !window.IELTS_DATA?.part2) {
    throw new Error("Missing embedded speaking data");
  }
  state.data = window.IELTS_DATA;
  loadUiState();
  setPage(state.page, { saveCurrent: false });
} catch (error) {
  console.error(error);
  main.innerHTML = '<div class="error-state"><div><h1>无法读取本地素材</h1><p>请确认 data.js 与 index.html 位于同一目录。</p></div></div>';
}
