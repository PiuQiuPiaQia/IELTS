import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("uses the local product name and local browser storage", async () => {
  const [layout, page, editor, header] = await Promise.all([
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/rich-text-editor.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/site-header.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(layout, /雅思批改作文/);
  assert.match(page, /雅思批改作文/);
  assert.match(header, /雅思批改作文/);
  assert.match(editor, /window\.localStorage/);
  assert.doesNotMatch(editor, /\/api\/reviews/);
});

test("does not contain online hosting configuration", async () => {
  await assert.rejects(access(new URL("../.openai/hosting.json", import.meta.url)));
  const viteConfig = await readFile(new URL("../vite.config.ts", import.meta.url), "utf8");
  assert.doesNotMatch(viteConfig, /hostingConfig|sites\(\)/);
});

test("uses pnpm for reproducible local installs", async () => {
  const [packageJson, readme, launcher] = await Promise.all([
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../README.md", import.meta.url), "utf8"),
    readFile(new URL("../启动雅思批改作文.command", import.meta.url), "utf8"),
    access(new URL("../pnpm-lock.yaml", import.meta.url)),
  ]);

  assert.match(packageJson, /"packageManager": "pnpm@11\.10\.0"/);
  assert.match(readme, /pnpm install/);
  assert.match(launcher, /pnpm install/);
  assert.match(launcher, /pnpm dev/);
  await assert.rejects(access(new URL("../package-lock.json", import.meta.url)));
});

test("shows correction issues and advice on separate tooltip lines", async () => {
  const [editor, styles] = await Promise.all([
    readFile(new URL("../app/rich-text-editor.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.match(editor, /问题 \$\{index \+ 1\}/);
  assert.match(editor, /改进意见：/);
  assert.match(editor, /\.join\("\\n"\)/);
  assert.match(styles, /content: attr\(data-tooltip\)/);
  assert.match(styles, /white-space: pre-line/);
});

test("renders the four official IELTS writing criteria and their scores", async () => {
  const [editor, reviews] = await Promise.all([
    readFile(new URL("../app/rich-text-editor.tsx", import.meta.url), "utf8"),
    readFile(new URL("../lib/reviews.ts", import.meta.url), "utf8"),
  ]);

  assert.match(editor, /IELTS 四项评分/);
  assert.match(editor, /getOverallScore/);
  assert.equal([...reviews.matchAll(/criteria:\s*\[/g)].length, 8);
  assert.equal([...reviews.matchAll(/code: "TA",/g)].length, 7);
  assert.equal([...reviews.matchAll(/code: "TR",/g)].length, 1);
  assert.equal([...reviews.matchAll(/code: "CC",/g)].length, 8);
  assert.equal([...reviews.matchAll(/code: "LR",/g)].length, 8);
  assert.equal([...reviews.matchAll(/code: "GRA",/g)].length, 8);
});

test("adds the newest laptop review without restoring older deleted records", async () => {
  const editor = await readFile(
    new URL("../app/rich-text-editor.tsx", import.meta.url),
    "utf8",
  );
  const reviews = await readFile(
    new URL("../lib/reviews.ts", import.meta.url),
    "utf8",
  );

  assert.match(editor, /\["home-work-laptop-problem", 4\]/);
  assert.match(editor, /introducedInVersion > savedVersion/);
  assert.match(reviews, /id: "home-work-laptop-problem"/);
  assert.match(reviews, /wordCount: 151/);
});

test("keeps the cancelled flight letter in scored review history", async () => {
  const [editor, reviews] = await Promise.all([
    readFile(new URL("../app/rich-text-editor.tsx", import.meta.url), "utf8"),
    readFile(new URL("../lib/reviews.ts", import.meta.url), "utf8"),
  ]);

  assert.match(editor, /\["cancelled-flight-insurance-claim", 5\]/);
  assert.match(reviews, /id: "cancelled-flight-insurance-claim"/);
  assert.match(reviews, /航班取消投诉及保险材料请求信/);
  assert.match(reviews, /wordCount: 157/);
  assert.match(reviews, /score: "5\.5"/);
  assert.match(reviews, /written confirmation of the cancellation/);
  assert.match(reviews, /passengers should be informed earlier/);
});

test("adds the neighbourhood dog safety letter as the newest scored review", async () => {
  const [editor, reviews] = await Promise.all([
    readFile(new URL("../app/rich-text-editor.tsx", import.meta.url), "utf8"),
    readFile(new URL("../lib/reviews.ts", import.meta.url), "utf8"),
  ]);

  assert.match(editor, /CURRENT_SEED_VERSION = 9/);
  assert.match(editor, /\["neighbourhood-dog-safety-complaint", 6\]/);
  assert.match(editor, /\["neighbourhood-dog-safety-complaint", 8\]/);
  assert.match(editor, /contentUpdatedInVersion > savedVersion/);
  assert.match(reviews, /id: "neighbourhood-dog-safety-complaint"/);
  assert.match(reviews, /社区遛狗安全投诉及建议信/);
  assert.match(reviews, /wordCount: 157/);
  assert.match(reviews, /score: "5\.5"/);
  assert.match(reviews, /<del>childrens<\/del><strong>children<\/strong>/);
  assert.match(reviews, /<del>avoid go<\/del><strong>avoid going<\/strong>/);
  assert.match(reviews, /<del>keep a lead with dogs<\/del><strong>keep their dogs on leads<\/strong>/);
  assert.doesNotMatch(
    reviews,
    /<del>I am writing this letter for a dangerous event/,
  );
  assert.doesNotMatch(
    reviews,
    /providing a fenced area where dogs can run safely/,
  );
});

test("uses granular corrections for every stored essay and refreshes local history", async () => {
  const [editor, reviews] = await Promise.all([
    readFile(new URL("../app/rich-text-editor.tsx", import.meta.url), "utf8"),
    readFile(new URL("../lib/reviews.ts", import.meta.url), "utf8"),
  ]);

  for (const id of [
    "neighbourhood-dog-safety-complaint",
    "cancelled-flight-insurance-claim",
    "home-work-laptop-problem",
    "reception-area-improvements",
    "head-office-request",
    "hotel-lunch-feedback",
    "children-free-time",
  ]) {
    assert.match(editor, new RegExp(`\\["${id}", 8\\]`));
  }

  assert.match(reviews, /<del>curstomer<\/del><strong>customer<\/strong>/);
  assert.match(reviews, /<del>expecially<\/del><strong>especially<\/strong>/);
  assert.match(reviews, /<del>feedbacks<\/del><strong>feedback<\/strong>/);
  assert.match(reviews, /<del>alse<\/del><strong>also<\/strong>/);
  assert.match(reviews, /<del>was<\/del><strong>were<\/strong>/);
  assert.match(reviews, /<del>benefitical<\/del><strong>beneficial<\/strong>/);
  assert.doesNotMatch(reviews, /<del>This laptop is only used for my work at home/);
  assert.doesNotMatch(reviews, /<del>And if parents arrange every part of activities/);
});

test("adds the international school reference letter as the newest scored review", async () => {
  const [editor, reviews] = await Promise.all([
    readFile(new URL("../app/rich-text-editor.tsx", import.meta.url), "utf8"),
    readFile(new URL("../lib/reviews.ts", import.meta.url), "utf8"),
  ]);

  assert.match(editor, /\["international-school-reference-letter", 9\]/);
  assert.match(reviews, /id: "international-school-reference-letter"/);
  assert.match(reviews, /国际学校求职推荐信/);
  assert.match(reviews, /wordCount: 150/);
  assert.match(reviews, /score: "5\.5"/);
  assert.match(reviews, /<del>konw<\/del><strong>know<\/strong>/);
  assert.match(reviews, /<del>enjoy communication<\/del><strong>enjoys communicating<\/strong>/);
  assert.match(reviews, /<del>culture background<\/del><strong>cultural backgrounds<\/strong>/);
  assert.match(reviews, /<del>young teenages<\/del><strong>teenagers<\/strong>/);
});

test("keeps each corrected review aligned with its clean version", async () => {
  const reviews = await readFile(
    new URL("../lib/reviews.ts", import.meta.url),
    "utf8",
  );
  const blocks = [
    ...reviews.matchAll(
      /\n  \{\n    id: "([^"]+)"([\s\S]*?)(?=\n  \{\n    id:|\n\];)/g,
    ),
  ];
  const normalize = (html) =>
    html
      .replace(/<del>[\s\S]*?<\/del>/g, "")
      .replace(/<\/?(?:span|strong)[^>]*>/g, "")
      .replace(/\s+/g, " ")
      .trim();

  assert.equal(blocks.length, 8);
  for (const [, id, block] of blocks) {
    const marked = block.match(/reviewHtml: `([\s\S]*?)`,\n    cleanHtml:/)?.[1];
    const clean = block.match(/cleanHtml: `([\s\S]*?)`,\n  }/)?.[1];
    assert.ok(marked, `${id} should contain reviewHtml`);
    assert.ok(clean, `${id} should contain cleanHtml`);
    assert.equal(normalize(marked), normalize(clean), `${id} should stay aligned`);
  }
});

test("keeps the top navigation in the normal page flow", async () => {
  const styles = await readFile(
    new URL("../app/globals.css", import.meta.url),
    "utf8",
  );
  const topbarRule = styles.match(/\.topbar\s*\{[^}]+\}/s)?.[0] ?? "";

  assert.match(topbarRule, /position:\s*static/);
  assert.doesNotMatch(topbarRule, /position:\s*(sticky|fixed)/);
});

test("provides fast fill-in frameworks for General Training letters", async () => {
  const [header, reference, tabs] = await Promise.all([
    readFile(new URL("../app/site-header.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/reference/page.tsx", import.meta.url), "utf8"),
    readFile(
      new URL("../app/reference/letter-reference-tabs.tsx", import.meta.url),
      "utf8",
    ),
  ]);

  assert.match(header, /href="\/reference"/);
  assert.match(header, /G 类书信参考/);
  assert.match(reference, /LetterReferenceTabs/);
  assert.match(tabs, /G 类书信 7 组快速框架/);
  assert.match(tabs, /先判断语气，再选称呼和落款/);
  assert.match(tabs, /现在只按这 7 组常见用途练习/);
  assert.match(tabs, /选择用途，填入三个题目要点/);
  assert.match(tabs, /先从题干提取这些内容/);
  assert.match(tabs, /navigator\.clipboard\.writeText/);
  assert.match(tabs, /role="tablist"/);
  assert.match(tabs, /role="tabpanel"/);
  assert.match(tabs, /Dear Sir or Madam,/);
  assert.match(tabs, /Yours faithfully,/);
  assert.match(tabs, /Yours sincerely,/);
  assert.match(tabs, /Best wishes,/);
  assert.match(tabs, /Task Achievement/);
  assert.match(tabs, /Coherence &amp; Cohesion/);
  assert.match(tabs, /Lexical Resource/);
  assert.match(tabs, /Grammar/);
  assert.doesNotMatch(tabs, /所有题型共用的要点展开方法/);
  assert.doesNotMatch(tabs, /复制通用框架/);
  assert.doesNotMatch(tabs, /universalLetterTemplate/);
  assert.doesNotMatch(tabs, /1\. 常见的思路和素材/);
  assert.doesNotMatch(tabs, /connector\.example/);
  assert.equal(
    [
      ...tabs.matchAll(
        /id: "(complaint|request|application|apology|suggestion-feedback|invitation|personal)"/g,
      ),
    ].length,
    7,
  );
});

test("provides fast fill-in frameworks for the common Task 2 types", async () => {
  const [header, page, tabs] = await Promise.all([
    readFile(new URL("../app/site-header.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/task2/page.tsx", import.meta.url), "utf8"),
    readFile(
      new URL("../app/task2/task-two-reference-tabs.tsx", import.meta.url),
      "utf8",
    ),
  ]);

  assert.match(header, /href="\/task2"/);
  assert.match(header, /大作文参考/);
  assert.match(page, /TaskTwoReferenceTabs/);
  assert.match(tabs, /大作文 3 套快速框架/);
  assert.match(tabs, /观点类用“单一立场”/);
  assert.match(tabs, /两个问题用“两问回答”/);
  assert.doesNotMatch(tabs, /第一步|先识别这 5 类常见问法/);
  assert.doesNotMatch(tabs, /真正需要背的框架|选择 3 套框架之一/);
  assert.match(tabs, /本段逻辑链/);
  assert.match(tabs, /paragraph\.logic\.join\(" → "\)/);
  assert.doesNotMatch(tabs, /所有题型共用的加长主体段/);
  assert.doesNotMatch(tabs, /复制主体段/);
  assert.doesNotMatch(tabs, /bodyParagraphTemplate/);
  assert.doesNotMatch(tabs, /paragraphFlow/);
  assert.doesNotMatch(tabs, /先从题干提取这些内容|copyFromQuestion/);
  assert.match(tabs, /navigator\.clipboard\.writeText/);
  assert.match(tabs, /role="tablist"/);
  assert.match(tabs, /role="tabpanel"/);
  assert.doesNotMatch(tabs, /高频话题思路/);
  assert.doesNotMatch(tabs, /教育与儿童/);
  assert.doesNotMatch(tabs, /3 分钟列提纲/);
  assert.doesNotMatch(tabs, /questionTypes|frameworkId:/);
  assert.equal(
    [...tabs.matchAll(/id: "(stance|comparison|two-question)"/g)].length,
    3,
  );
  assert.doesNotMatch(tabs, /id: "positive-negative"/);
  assert.match(tabs, /Is this a positive or negative development\?/);
  assert.match(tabs, /讨论双方 · 普通利弊 · advantages outweigh disadvantages/);
  assert.match(tabs, /按题目要求替换/);
  assert.match(tabs, /原因影响 · 任意两个直接问题/);
  assert.doesNotMatch(tabs, /套用时必须检查|正确的背法|fast-final-check/);
  assert.doesNotMatch(tabs, /supporters of/);
  assert.doesNotMatch(tabs, /understandable reasons/);
  assert.equal([...tabs.matchAll(/logic:\s*\[/g)].length, 6);
  assert.match(tabs, /"回扣立场"/);
  assert.match(tabs, /"说明第一面的价值"/);
  assert.match(tabs, /"按题目要求作判断"/);
  assert.match(tabs, /"回扣第二问"/);
  assert.equal([...tabs.matchAll(/target: "8[05]—9[05] 词"/g)].length, 6);
});

test("provides a complete PDF-based Band 6 Task 2 material library", async () => {
  const [header, page, materials, data, styles] = await Promise.all([
    readFile(new URL("../app/site-header.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/task2-materials/page.tsx", import.meta.url), "utf8"),
    readFile(
      new URL("../app/task2-materials/task-two-material-tabs.tsx", import.meta.url),
      "utf8",
    ),
    readFile(
      new URL("../app/task2-materials/task-two-material-data.ts", import.meta.url),
      "utf8",
    ),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.match(header, /href="\/task2-materials"/);
  assert.match(header, /大作文素材/);
  assert.match(page, /TaskTwoMaterialTabs/);
  assert.match(materials, /大作文 PDF 主题素材/);
  assert.match(materials, /完整保留原 PDF 的 8 类/);
  assert.match(materials, /同一主题的小素材已适当合并/);
  assert.doesNotMatch(materials, /每个话题精选 5 条，共 40 条/);
  assert.doesNotMatch(materials, /HOW TO USE|一条素材，只记 3 个部分|TOPIC LIBRARY|备考顺序/);
  assert.doesNotMatch(materials, /PDF 核心思路/);
  assert.match(materials, /可直接使用的逻辑链/);
  assert.match(materials, /Band 6 通用英文/);
  assert.match(materials, /中文翻译/);
  assert.match(materials, /highlightEnglish\(material\.paragraph, material\.phrases\)/);
  assert.match(materials, /核心词汇 \/ 短语/);
  assert.match(materials, /const orderedMaterials = \[\.\.\.activeCategory\.materials\]\.sort/);
  assert.match(materials, /Number\(Boolean\(second\.priority\)\)/);
  assert.match(materials, /orderedMaterials\.map\(\(material\)/);
  assert.match(materials, /aria-label="优先背诵"/);
  assert.match(materials, /title="优先背诵主题"/);
  assert.equal([...data.matchAll(/priority: true/g)].length, 12);
  assert.match(data, /Population changes/);
  assert.match(data, /Religion and belief/);
  assert.match(data, /Transport and communication/);
  assert.match(data, /Law and human rights/);
  assert.match(data, /Investment and savings/);
  assert.match(data, /Vaccination and health education/);
  assert.match(materials, /核心短语/);
  assert.match(materials, /navigator\.clipboard\.writeText/);
  assert.match(materials, /role="tablist"/);
  assert.match(materials, /role="tabpanel"/);
  assert.equal(
    [...data.matchAll(/id: "(society|economy|culture|environment|technology|education|government|health)"/g)].length,
    8,
  );
  assert.equal([...data.matchAll(/paragraph: "/g)].length, 42);
  assert.equal([...data.matchAll(/sourceOrder: \d+/g)].length, 42);
  const materialBlocks = [...data.matchAll(
    /paragraph: "([^"]+)",\n\s+translation: "[^"]+",\n\s+phrases: \[([^\]]+)\]/g,
  )];
  assert.equal(materialBlocks.length, 42);
  const weakHighlightFragments = new Set([
    "must be protected",
    "more serious",
    "make changes",
    "different groups",
    "needs of students",
    "government actions",
  ]);
  for (const [, paragraph, phraseSource] of materialBlocks) {
    const phrases = JSON.parse(`[${phraseSource}]`);
    for (const phrase of phrases) {
      assert.ok(
        paragraph.toLowerCase().includes(phrase.toLowerCase()),
        `Highlight phrase is not present in its paragraph: ${phrase}`,
      );
      assert.ok(
        !weakHighlightFragments.has(phrase.toLowerCase()),
        `Highlight phrase is too generic to be useful material: ${phrase}`,
      );
    }
  }
  assert.match(data, /获得教育和培训.*掌握实用知识与技能.*就业机会和收入提高.*个人与社会共同受益/s);
  assert.match(data, /Climate change increases extreme weather/);
  assert.match(data, /A good health-care system should provide affordable/);
  assert.doesNotMatch(
    data,
    /exacerbate|socioeconomic mobility|fiscal deficit|regulatory enforcement|linguistic diversity|necessitating/i,
  );
  assert.match(styles, /\.material-grid/);
  assert.match(styles, /\.material-logic/);
  assert.doesNotMatch(styles, /\.material-panel \.material-source-ideas/);
  assert.match(styles, /\.material-panel \.material-grid\s*\{[\s\S]*?grid-template-columns:\s*1fr/);
  assert.match(styles, /\.material-panel \.material-card > \.material-english,[\s\S]*?display:\s*block/);
  assert.match(styles, /\.material-panel \.material-card > div > strong\s*\{[\s\S]*?white-space:\s*nowrap/);
  assert.match(styles, /\.material-panel \.material-english-heading > strong\s*\{[\s\S]*?font-size:\s*15px/);
  assert.match(styles, /\.material-panel \.material-english p\s*\{[\s\S]*?font-size:\s*20px/);
  assert.match(styles, /\.material-panel \.material-translation p\s*\{[\s\S]*?font-size:\s*15px/);
  assert.match(styles, /\.material-highlight\s*\{[\s\S]*?color:\s*#8c511d;[\s\S]*?background:\s*#fff0d8;/);
  assert.match(styles, /\.material-priority-star\s*\{/);
  assert.doesNotMatch(styles, /\.material-highlight-(word|phrase)\s*\{/);
});
