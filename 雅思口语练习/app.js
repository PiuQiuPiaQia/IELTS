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
  "movie-night",
  "phone-detox",
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
  const pattern = new RegExp(`(${matches.map(escapeRegExp).join("|")})`, "gi");
  return safeText.replace(pattern, "<mark>$1</mark>");
}

function partThreeHighlightPhrases(item) {
  const phrases = item.comparison ? [...PART3_COMPARISON_PHRASES] : [];
  for (const code of item.materials || []) phrases.push(...(PART3_MATERIAL_PHRASES[code] || []));
  return phrases;
}

function partThreeAnswerHtml(item) {
  if (item.answerLanguage === "zh") {
    const keywords = item.keywords?.length ? `<div class="answer-keywords"><span>英文关键词</span>${item.keywords.map((keyword) => `<code>${escapeHtml(keyword)}</code>`).join("")}</div>` : "";
    return `<div class="answer chinese-only-answer"><strong>中文答案：</strong><p class="plain-chinese-answer">${escapeHtml(item.translation?.answer || "答案整理中")}</p>${keywords}</div>`;
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
      readingPositions,
    }));
  } catch (error) {
    console.warn("Unable to save speaking UI state", error);
  }
}

function currentViewKey() {
  if (state.page === "part1") return `part1:${encodeURIComponent(state.part1Query)}`;
  if (state.page === "part2") return `part2:${state.part2MaterialId}:${state.part2TopicId}`;
  if (state.page === "part3") return `part3:${state.part3GroupId}`;
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
  const groups = state.data.part1;
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
      <div class="group-title"><div><span class="eyebrow">${escapeHtml(group.tab)}</span><h2>${escapeHtml(group.title)}</h2></div><span class="badge">${group.items.length} 题</span></div>
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
        ${materials.map((item) => `<button class="sidebar-button ${item.id === material.id ? "active" : ""}" type="button" data-material-id="${escapeHtml(item.id)}"><strong>${escapeHtml(materialLabel(item))}</strong><small>${item.tips ? escapeHtml(item.tipLabel || "通用框架") : `${PART2_PRIMARY_MATERIALS.has(item.id) ? "首要素材 · " : ""}${item.topics.length} 道${item.standalone ? "独立题" : "适配题"}`}</small></button>`).join("")}
      </aside>
      <section class="panel">
        <header class="panel-header">
          <span class="eyebrow">${escapeHtml(material.tagline || material.description || "通用素材")}</span>
          <h2>${escapeHtml(material.title)}</h2>
          <p>${escapeHtml(material.description || material.storyline || "")}</p>
        </header>
        <div class="panel-body">
          ${material.tips
            ? partTwoTipsHtml(material.tips, state.data.toolkit?.find((item) => item.type === "materials")?.items || [])
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

function partTwoTipsHtml(tips, universalMaterials = []) {
  const section = tips.section;
  const topicGuideItems = (tips.topicGroups || [])
    .flatMap((group, groupIndex) => group.items.map((item, itemIndex) => ({
      group,
      item,
      order: Number.isFinite(item.sourceOrder) ? item.sourceOrder : groupIndex * 100 + itemIndex
    })))
    .sort((a, b) => a.order - b.order);
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
  const topicGroupsHtml = topicGuideItems.length ? `
    <div class="section-heading">
      <h2>题目草稿与展开</h2>
      <p>核心草稿负责恢复故事顺序；前面主体覆盖题卡信息；最后一问再展开 3 点。</p>
    </div>
    <div class="topic-guide-groups">
      ${topicGuideItems.map(({ group, item }) => `<article class="card topic-guide-group">
        <h3>${escapeHtml(group.title)}</h3>
        ${group.note ? `<p class="translation">${escapeHtml(group.note)}</p>` : ""}
        <section class="simple-master-section topic-guide-item">
          <p class="question">${escapeHtml(item.question)}</p>
          ${item.draftCues?.length ? `<p class="simple-master-cues"><strong>核心草稿：</strong>${item.draftCues.map(escapeHtml).join(" · ")}</p>` : ""}
          ${item.body?.text ? `<p class="topic-guide-body"><strong>前面主体：</strong>${highlight(item.body.text, item.body.highlights)}</p>` : ""}
          <p class="reason-label"><strong>${escapeHtml(item.pointsLabel || "最后一问 3 点")}：</strong></p>
          <ol class="numbered-list topic-reason-list">
            ${item.reasons.map((reason) => `<li>${highlight(reason.text, reason.highlights)}</li>`).join("")}
          </ol>
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
    <div class="section-heading"><h2>${escapeHtml(topic.name || "参考答案")}</h2><p class="question">${escapeHtml(topic.question)}</p></div>
    ${topic.cuePoints?.length ? `<ul class="numbered-list">${topic.cuePoints.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}</ul>` : ""}
    ${topic.draftCues?.length ? `<div class="draft-cues"><strong>一分钟草稿</strong>${topic.draftCues.map((cue) => `<span>${escapeHtml(cue)}</span>`).join("")}</div>` : ""}
    ${topic.fit ? `<span class="badge">${escapeHtml(topic.fit)}</span>` : ""}
    ${(topic.focus || topic.modules || topic.omit) ? `<div class="meta-grid">
      ${topic.focus ? `<div class="meta-box"><span>扣题重点</span><strong>${escapeHtml(topic.focus)}</strong></div>` : ""}
      ${topic.modules ? `<div class="meta-box"><span>模块顺序</span><strong>${escapeHtml(topic.modules)}</strong></div>` : ""}
      ${topic.omit ? `<div class="meta-box"><span>可以省略</span><strong>${escapeHtml(topic.omit)}</strong></div>` : ""}
    </div>` : ""}
    ${showFramework && topic.framework?.length ? `<h3>答题框架</h3><ol class="numbered-list">${topic.framework.map((line) => `<li>${escapeHtml(line)}</li>`).join("")}</ol>` : ""}
    <div class="group-title section-heading"><div><h2>完整参考答案</h2><p>${escapeHtml(topic.answerNote || "“特殊”句负责贴合当前题目，其余句可重复使用。")}</p></div><button class="copy-button" type="button" data-copy-answer="${escapeHtml(topic.id || "")}">复制答案</button></div>
    <div class="answer-list">${(topic.answer || []).map((line) => `<div class="answer-line"><span class="badge ${line.kind === "特殊" ? "warm" : ""}">${escapeHtml(line.kind)}</span>${escapeHtml(line.text)}${line.translation ? `<p class="translation"><strong>中文：</strong>${escapeHtml(line.translation)}</p>` : ""}</div>`).join("") || '<p class="empty-state">这道题暂时没有完整答案。</p>'}</div>
    ${topic.keys?.length ? `<h3>关键英文句</h3><div class="key-list">${topic.keys.map((line) => `<code>${escapeHtml(line)}</code>`).join("")}</div>` : ""}`;
}

function renderPartThree() {
  const groups = state.data.part3.filter((group) => group.isNew);
  const selected = groups.find((group) => group.id === state.part3GroupId) || groups[0];
  state.part3GroupId = selected.id;
  main.innerHTML = `
    <div class="content-grid">
      <aside class="sidebar" aria-label="观点分类"><span class="sidebar-label">选择主题</span>${groups.map((group) => `<button class="sidebar-button ${group.id === selected.id ? "active" : ""}" type="button" data-part3-id="${escapeHtml(group.id)}"><strong>${escapeHtml(group.title)}${group.isNew ? '<span class="new-tag">新题</span>' : ""}</strong><small>${escapeHtml(group.category)} · ${group.items.length} 题</small></button>`).join("")}</aside>
      <section class="panel">
        <header class="panel-header"><span class="eyebrow">${selected.isNew ? "新题 · 中文答案 · " : ""}${escapeHtml(selected.category)} · 对应 Part 2：${escapeHtml(selected.partTwo)}</span><h2>${escapeHtml(selected.title)}</h2></header>
        <div class="panel-body card-list">${selected.items.map((item, index) => `<article class="card">
          <span class="badge warm">${String(index + 1).padStart(2, "0")}</span>
          <p class="question">${escapeHtml(item.question)}</p>
          ${item.translation?.question ? `<p class="translation"><strong>题目：</strong>${escapeHtml(item.translation.question)}</p>` : ""}
          ${item.answerLanguage === "zh" ? (item.structure ? `<div class="chip-row"><span class="chip structure">结构 · ${escapeHtml(item.structure)}</span></div>` : "") : ((item.structure || item.materials?.length) ? `<div class="chip-row">${item.structure ? `<span class="chip structure">结构 · ${escapeHtml(item.structure)}</span>` : ""}${item.materials?.map((code) => `<span class="chip">${escapeHtml(toolkitMaterialLabel(code))}</span>`).join("") || ""}</div>` : "")}
          ${item.comparison ? `<p class="note"><strong>高频对比：</strong>${escapeHtml(item.comparison)}</p>` : ""}
          ${partThreeAnswerHtml(item)}
        </article>`).join("")}</div>
      </section>
    </div>`;
  document.querySelectorAll("[data-part3-id]").forEach((button) => button.addEventListener("click", () => {
    changeSidebarView(() => { state.part3GroupId = button.dataset.part3Id; });
  }));
}

function chunkLibrary() {
  return state.data.chunks || { structures: [], functionChunks: [], families: [] };
}

// 考前 2-3 小时速记版：每条链只渲染 3 个词块，连接词块只渲染 12 个，Set 里一共 69 个（12 连接 + 19 链 × 3）。
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

// 每条链的「串句」：把这条链的 3 个词块串成一句能直接说出口的话。
// 背的时候背这一句，不要背 3 个碎片——19 句 = 57 个内容词块，而且每句本身就是现成的 P1 答案。
const CHAIN_SENTENCES = {
  C01: "Something went wrong with my laptop, so I turned to a friend for help, and it was just a small problem.",
  C03: "We each do what we're good at, and I'm responsible for one part of the project, so it's much faster than working alone.",
  C04: "It gives you a stable income and a real sense of achievement, and you can make a difference to other people.",
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

// 三轮背诵顺序。第一轮是覆盖题目最多的 8 条，第二轮是话题绑得死、抽到才用得上的 11 条。
const REVIEW_ROUNDS = [
  {
    title: "第一轮 · 60 分钟",
    lead: "先花 15 分钟把第一部分的 PREC 骨架和第二部分的 12 个连接词块念熟（当一个四句模板背，不要当 12 个词背），再按下面的顺序背 8 条链，每条 5 分钟。背完 Part 3 一半以上的题能开口。",
    chains: ["定目标与执行", "职业与压力", "改变想法", "城市好与无聊", "值得去的地方", "在家放松", "团队协作", "系统出故障"]
  },
  {
    title: "第二轮 · 70 分钟",
    lead: "这 11 条频率低一些，但话题绑得死——抽到守规矩、广告、送礼这类题，没有它就是空的，一条都别跳。每条 6 分钟。",
    chains: ["作息与效率", "堵车通勤", "吃饭与做饭", "走路与户外", "送礼与人情", "养宠物", "保护环境", "法律与规定", "广告与代言", "联系与回应", "新闻与 AI"]
  },
  {
    title: "第三轮 · 50 分钟",
    lead: "绝对不要再通读一遍。读第三遍只会产生「我记住了」的错觉，但考场是从中文往英文调，通读练不到这个方向。改成：① 25 分钟盖住英文，只看链标题把串句说出来，卡超过两秒的抄在纸上；② 15 分钟只念抄下来的那十几个，不要又从头过一遍；③ 10 分钟去 Part 3 页随机点五道题，硬套 PREC 说完——真正的瓶颈是「听到题想起哪条链」，不是词块本身。",
    chains: []
  }
];

function chunkChainHtml(chain) {
  if (!chain) return "";
  const sentence = CHAIN_SENTENCES[chain.code];
  return `
    <article class="card chunk-card">
      <h3 class="chunk-head">${escapeHtml(chain.title)}</h3>
      ${chunkItemsHtml(chain.chunks)}
      ${sentence ? `<p class="chunk-sentence">${escapeHtml(sentence)}</p>` : ""}
    </article>`;
}

// 考前精简版：只渲染这 19 条链，每条 3 个词块（由 CHUNK_KEEP 控制），共 57 个内容词块。
// 选链标准是 Part 1 的 16 个话题组 + Part 3 的 41 道新题组，Part 2 有自己的母版页，不在这里管。
// C31/C32/C33 是为 Part 1 的食物、步行、礼物三组新写的，原来的 30 条链都是从 Part 2 母版长出来的，接不住这几组。
// 最后一组 C19/C26/C02/C25 是为补 Part 3 的法律规则、广告商业、人际沟通、媒体新闻四个缺口加回来的。
// data.js 里 33 条链全部保留，把某条链的编号加回下面即可恢复。
const CORE_CHAIN_GROUPS = [
  { title: "工作与协作", codes: ["C01", "C03", "C04"] },
  { title: "目标 · 作息 · 改变", codes: ["C06", "C08", "C10"] },
  { title: "城市与出行", codes: ["C13", "C14", "C15"] },
  { title: "吃饭 · 走路 · 放松", codes: ["C31", "C32", "C20"] },
  { title: "送礼 · 宠物 · 环保", codes: ["C33", "C30", "C18"] },
  { title: "规则 · 广告 · 沟通 · 信息", codes: ["C19", "C26", "C02", "C25"] }
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
          ${chainGroups.map((group) => `
          <div class="chunk-family">
            <div class="group-title"><div><h3>${escapeHtml(group.title)}</h3></div></div>
            <div class="card-list">${group.chains.map(chunkChainHtml).join("")}</div>
          </div>`).join("")}
        </section>
        <section class="group-section">
          <div class="group-title"><div><span class="eyebrow">PLAN</span><h2>四、三轮背诵顺序</h2></div></div>
          <p class="note">不要一条一条背词块，背每条链下面那句串句——19 句就是 57 个内容词块，而且每句本身就是能直接说出口的 Part 1 答案。</p>
          <div class="card-list">${REVIEW_ROUNDS.map((round) => `
          <article class="card chunk-card">
            <h3 class="chunk-head">${escapeHtml(round.title)}</h3>
            <p class="round-lead">${escapeHtml(round.lead)}</p>
            ${round.chains.length ? `<div class="round-chains">${round.chains.map((name, index) => `<span><b>${index + 1}</b>${escapeHtml(name)}</span>`).join("")}</div>` : ""}
          </article>`).join("")}</div>
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
