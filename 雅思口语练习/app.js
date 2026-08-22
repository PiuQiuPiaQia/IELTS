"use strict";

const PAGES = new Set(["part1", "part2", "part3", "toolkit"]);

const state = {
  page: location.hash.slice(1) || "part2",
  data: {},
  part2MaterialId: "alex",
  part2TopicId: "helpful-person",
  part3GroupId: "",
};

const main = document.querySelector("main");
const navButtons = [...document.querySelectorAll("[data-page]")];
const toast = document.querySelector("#toast");

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

function setPage(page) {
  if (!PAGES.has(page)) page = "part2";
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

function hero(kicker, title, description, count, label) {
  return `
    <header class="hero">
      <div>
        <span class="eyebrow">${escapeHtml(kicker)}</span>
        <h1>${escapeHtml(title)}</h1>
        <p>${escapeHtml(description)}</p>
      </div>
      <div class="hero-stat"><strong>${escapeHtml(count)}</strong><span>${escapeHtml(label)}</span></div>
    </header>`;
}

function renderPartOne() {
  const groups = state.data.part1;
  const total = groups.reduce((sum, group) => sum + group.items.length, 0);
  main.innerHTML = `
    ${hero("IELTS SPEAKING · PART 1", "已练题目与答案", "按题组整理最终练习版本，支持即时搜索英文问题、答案和中文翻译。", total, "已练答案")}
    <div class="toolbar">
      <label class="search"><span aria-hidden="true">⌕</span><input id="part1-search" type="search" placeholder="搜索题目、答案或中文…" autocomplete="off"></label>
      <span class="count" id="part1-count">显示 ${total} 题</span>
    </div>
    <div id="part1-results">${partOneGroupsHtml(groups)}</div>`;
  document.querySelector("#part1-search").addEventListener("input", (event) => {
    const query = event.target.value.trim().toLowerCase();
    const filtered = groups
      .map((group) => ({ ...group, items: group.items.filter((item) => JSON.stringify(item).toLowerCase().includes(query)) }))
      .filter((group) => group.items.length);
    const count = filtered.reduce((sum, group) => sum + group.items.length, 0);
    document.querySelector("#part1-results").innerHTML = filtered.length
      ? partOneGroupsHtml(filtered)
      : '<div class="empty-state">没有找到匹配的题目。</div>';
    document.querySelector("#part1-count").textContent = `显示 ${count} 题`;
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
  const materials = state.data.part2;
  let material = materials.find((item) => item.id === state.part2MaterialId) || materials[0];
  state.part2MaterialId = material.id;
  let topic = material.topics.find((item) => item.id === state.part2TopicId) || material.topics[0];
  state.part2TopicId = topic.id;
  const topicCount = materials.reduce((sum, item) => sum + item.topics.length, 0);
  main.innerHTML = `
    ${hero("IELTS SPEAKING · PART 2", "通用素材与原题适配", "先选一组熟悉素材，再查看每道题的扣题重点、答题框架和完整 Band 6 答案。", topicCount, "适配题目")}
    <div class="content-grid">
      <aside class="sidebar" aria-label="通用素材">
        <span class="sidebar-label">选择素材</span>
        ${materials.map((item) => `<button class="sidebar-button ${item.id === material.id ? "active" : ""}" type="button" data-material-id="${escapeHtml(item.id)}"><strong>${escapeHtml(materialLabel(item))}</strong><small>${item.topics.length} 道适配题</small></button>`).join("")}
      </aside>
      <section class="panel">
        <header class="panel-header">
          <span class="eyebrow">${escapeHtml(material.tagline || material.description || "通用素材")}</span>
          <h2>${escapeHtml(material.title)}</h2>
          <p>${escapeHtml(material.description || material.storyline || "")}</p>
        </header>
        <div class="panel-body">
          ${material.storyline ? `<div class="note">故事线：${escapeHtml(material.storyline)}</div>` : ""}
          <div class="section-heading"><h2>选择原题</h2><p>切换题目后，下方答案与扣题重点会同步更新。</p></div>
          <div class="chip-row">${material.topics.map((item) => `<button class="chip ${item.id === topic.id ? "active" : ""}" type="button" data-topic-id="${escapeHtml(item.id)}">${escapeHtml(item.code || "")} ${escapeHtml(item.name || item.question)}</button>`).join("")}</div>
          ${partTwoTopicHtml(topic)}
          ${material.modules ? sourceModulesHtml(material.modules) : ""}
          ${material.story ? sourceModulesHtml(material.story) : ""}
          ${material.expressions ? expressionsHtml(material.expressions) : ""}
          ${material.rules?.length ? `<div class="section-heading"><h2>使用提醒</h2></div><ul class="numbered-list">${material.rules.map((rule) => `<li>${escapeHtml(rule)}</li>`).join("")}</ul>` : ""}
        </div>
      </section>
    </div>`;
  document.querySelectorAll("[data-material-id]").forEach((button) => button.addEventListener("click", () => {
    state.part2MaterialId = button.dataset.materialId;
    state.part2TopicId = "";
    renderPartTwo();
  }));
  document.querySelectorAll("[data-topic-id]").forEach((button) => button.addEventListener("click", () => {
    state.part2TopicId = button.dataset.topicId;
    renderPartTwo();
  }));
  document.querySelector("[data-copy-answer]")?.addEventListener("click", () => copyText(topic.answer.map((line) => line.text).join(" ")));
}

function partTwoTopicHtml(topic) {
  return `
    <div class="section-heading"><h2>${escapeHtml(topic.name || "参考答案")}</h2><p class="question">${escapeHtml(topic.question)}</p></div>
    ${topic.fit ? `<span class="badge">${escapeHtml(topic.fit)}</span>` : ""}
    ${(topic.focus || topic.modules || topic.omit) ? `<div class="meta-grid">
      ${topic.focus ? `<div class="meta-box"><span>扣题重点</span><strong>${escapeHtml(topic.focus)}</strong></div>` : ""}
      ${topic.modules ? `<div class="meta-box"><span>模块顺序</span><strong>${escapeHtml(topic.modules)}</strong></div>` : ""}
      ${topic.omit ? `<div class="meta-box"><span>可以省略</span><strong>${escapeHtml(topic.omit)}</strong></div>` : ""}
    </div>` : ""}
    ${topic.framework?.length ? `<h3>答题框架</h3><ol class="numbered-list">${topic.framework.map((line) => `<li>${escapeHtml(line)}</li>`).join("")}</ol>` : ""}
    <div class="group-title section-heading"><div><h2>完整参考答案</h2><p>“特殊”句负责贴合当前题目，其余句可重复使用。</p></div><button class="copy-button" type="button" data-copy-answer>复制答案</button></div>
    <div class="answer-list">${(topic.answer || []).map((line) => `<div class="answer-line"><span class="badge ${line.kind === "特殊" ? "warm" : ""}">${escapeHtml(line.kind)}</span>${escapeHtml(line.text)}</div>`).join("") || '<p class="empty-state">这道题暂时没有完整答案。</p>'}</div>
    ${topic.keys?.length ? `<h3>关键英文句</h3><div class="key-list">${topic.keys.map((line) => `<code>${escapeHtml(line)}</code>`).join("")}</div>` : ""}`;
}

function sourceModulesHtml(modules) {
  return `<div class="section-heading"><h2>素材模块</h2><p>按题目选择相关段落，不需要全部使用。</p></div><div class="card-list">${modules.map((item) => `<article class="card"><span class="badge">${escapeHtml(item.label)}</span><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.detail)}</p><div class="answer">${escapeHtml(item.sentence)}</div></article>`).join("")}</div>`;
}

function expressionsHtml(items) {
  return `<div class="section-heading"><h2>可复用表达</h2></div><div class="card-list">${items.map((item) => `<article class="card"><span class="badge">${escapeHtml(item.stage)}</span><p>${escapeHtml(item.use)}</p><div class="answer">${escapeHtml(item.line)}</div></article>`).join("")}</div>`;
}

function renderPartThree() {
  const groups = state.data.part3;
  const selected = groups.find((group) => group.id === state.part3GroupId) || groups[0];
  state.part3GroupId = selected.id;
  const total = groups.reduce((sum, group) => sum + group.items.length, 0);
  main.innerHTML = `
    ${hero("IELTS SPEAKING · PART 3", "观点题库", "按 Part 2 主题关联整理，答案保持简洁、明确，并附中文理解。", total, "观点问题")}
    <div class="content-grid">
      <aside class="sidebar" aria-label="观点分类"><span class="sidebar-label">选择主题</span>${groups.map((group) => `<button class="sidebar-button ${group.id === selected.id ? "active" : ""}" type="button" data-part3-id="${escapeHtml(group.id)}"><strong>${escapeHtml(group.title)}</strong><small>${escapeHtml(group.category)} · ${group.items.length} 题</small></button>`).join("")}</aside>
      <section class="panel">
        <header class="panel-header"><span class="eyebrow">${escapeHtml(selected.category)} · 对应 Part 2：${escapeHtml(selected.partTwo)}</span><h2>${escapeHtml(selected.title)}</h2></header>
        <div class="panel-body card-list">${selected.items.map((item, index) => `<article class="card"><span class="badge warm">${String(index + 1).padStart(2, "0")}</span><p class="question">${escapeHtml(item.question)}</p><div class="answer">${escapeHtml(item.answer)}</div>${item.translation ? `<p class="translation"><strong>${escapeHtml(item.translation.question)}</strong><br>${escapeHtml(item.translation.answer)}</p>` : ""}</article>`).join("")}</div>
      </section>
    </div>`;
  document.querySelectorAll("[data-part3-id]").forEach((button) => button.addEventListener("click", () => {
    state.part3GroupId = button.dataset.part3Id;
    renderPartThree();
  }));
}

function renderToolkit() {
  const comparisonRecord = state.data.toolkit.find((item) => item.type === "comparisons");
  const materialRecord = state.data.toolkit.find((item) => item.type === "materials");
  const comparisons = comparisonRecord?.items || [];
  const materials = materialRecord?.items || [];
  main.innerHTML = `
    ${hero("IELTS SPEAKING · TOOLKIT", "万能素材工具箱", "用少量对比维度和完整段落覆盖常见 Part 3 观点题。", comparisons.length + materials.length, "组核心素材")}
    <section class="panel">
      <header class="panel-header"><span class="eyebrow">COMPARISON</span><h2>三类高频对比</h2><p>从生活经验、习惯、成本、效率等维度快速组织答案。</p></header>
      <div class="panel-body stack">${comparisons.map((comparison) => `<section><div class="group-title"><h2>${escapeHtml(comparison.code)} · ${escapeHtml(comparison.title)}</h2></div><div class="comparison-grid">${comparison.dimensions.map((dimension) => `<article class="dimension"><h3>${escapeHtml(dimension.title)}</h3>${dimension.entries.map((entry) => `<strong>${escapeHtml(entry.label)}</strong><blockquote>${escapeHtml(entry.text)}</blockquote>`).join("")}</article>`).join("")}</div></section>`).join("")}</div>
    </section>
    <section class="panel" style="margin-top:24px">
      <header class="panel-header"><span class="eyebrow">UNIVERSAL MATERIALS</span><h2>完整背诵段落</h2><p>绿色标记是迁移到其他题目时最值得优先调用的表达。</p></header>
      <div class="panel-body card-list">${materials.map((material) => `<article class="card"><span class="badge">${escapeHtml(material.code)}</span><h3>${escapeHtml(material.title)}</h3><p>${escapeHtml(material.chineseIdea)}</p><div class="answer">${highlight(material.paragraph, material.highlights)}</div></article>`).join("")}</div>
    </section>`;
}

function render() {
  if (!state.data[state.page]) return;
  if (state.page === "part1") renderPartOne();
  if (state.page === "part2") renderPartTwo();
  if (state.page === "part3") renderPartThree();
  if (state.page === "toolkit") renderToolkit();
}

navButtons.forEach((button) => button.addEventListener("click", () => setPage(button.dataset.page)));
window.addEventListener("hashchange", () => setPage(location.hash.slice(1)));

try {
  if (!window.IELTS_DATA?.part1 || !window.IELTS_DATA?.part2) {
    throw new Error("Missing embedded speaking data");
  }
  state.data = window.IELTS_DATA;
  setPage(state.page);
} catch (error) {
  console.error(error);
  main.innerHTML = '<div class="error-state"><div><h1>无法读取本地素材</h1><p>请确认 data.js 与 index.html 位于同一目录。</p></div></div>';
}
