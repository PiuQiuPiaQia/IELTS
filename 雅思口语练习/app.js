"use strict";

const PAGES = new Set(["part1", "part2", "part3", "toolkit"]);
const UI_STORAGE_KEY = "ielts-speaking-ui-state-v1";
const PART2_MATERIAL_ORDER = [
  "people-tips",
  "place-tips",
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
  const techniqueHtml = tips.techniques?.length ? `<div class="note">
    <strong>Part 2 通用技巧</strong><br>
    ${tips.techniques.map((technique) => `${escapeHtml(technique.title)}：${technique.steps.map(escapeHtml).join(" → ")}`).join("<br>")}
    ${tips.reasonIdeas?.length ? `<br>地点类套三原因：${tips.reasonIdeas.map(escapeHtml).join(" → ")}` : ""}
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
  const groups = state.data.part3;
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
