import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("uses the local product name and JSONL file storage", async () => {
  const [layout, page, editor, header, storage, jsonl] = await Promise.all([
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/rich-text-editor.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/site-header.tsx", import.meta.url), "utf8"),
    readFile(new URL("../local-review-storage.ts", import.meta.url), "utf8"),
    readFile(new URL("../data/reviews.jsonl", import.meta.url), "utf8"),
  ]);

  assert.match(layout, /雅思批改作文/);
  assert.match(page, /雅思批改作文/);
  assert.match(header, /雅思批改作文/);
  assert.match(editor, /\/api\/local-reviews/);
  assert.match(editor, /LEGACY_STORAGE_KEY/);
  assert.match(storage, /data\/reviews\.jsonl/);
  assert.match(storage, /rename\(temporaryPath, storagePath\)/);

  const lines = jsonl.trim().split("\n").map((line) => JSON.parse(line));
  assert.equal(lines[0]._meta.version, 15);
  assert.equal(typeof lines[0]._meta.browserStorageMigrated, "boolean");
  assert.ok(lines.length > 1);
  assert.ok(lines.slice(1).some((record) => record.id === "chinese-new-year-project-letter"));
  assert.ok(lines.slice(1).some((record) => record.id === "weekend-camping-invitation"));
  assert.ok(lines.slice(1).some((record) => record.id === "large-versus-small-company"));
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
  assert.match(launcher, /--hostname 127\.0\.0\.1/);
  assert.doesNotMatch(launcher, /-- --host/);
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
  assert.equal([...reviews.matchAll(/criteria:\s*\[/g)].length, 12);
  assert.equal([...reviews.matchAll(/code: "TA",/g)].length, 10);
  assert.equal([...reviews.matchAll(/code: "TR",/g)].length, 2);
  assert.equal([...reviews.matchAll(/code: "CC",/g)].length, 12);
  assert.equal([...reviews.matchAll(/code: "LR",/g)].length, 12);
  assert.equal([...reviews.matchAll(/code: "GRA",/g)].length, 12);
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

test("keeps the neighbourhood dog safety letter in scored review history", async () => {
  const [editor, reviews] = await Promise.all([
    readFile(new URL("../app/rich-text-editor.tsx", import.meta.url), "utf8"),
    readFile(new URL("../lib/reviews.ts", import.meta.url), "utf8"),
  ]);

  assert.match(editor, /CURRENT_SEED_VERSION = 15/);
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

test("keeps the international school reference letter in scored review history", async () => {
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

test("adds the weekend camping invitation as the newest scored review", async () => {
  const [editor, reviews] = await Promise.all([
    readFile(new URL("../app/rich-text-editor.tsx", import.meta.url), "utf8"),
    readFile(new URL("../lib/reviews.ts", import.meta.url), "utf8"),
  ]);

  assert.match(editor, /CURRENT_SEED_VERSION = 15/);
  assert.match(editor, /\["weekend-camping-invitation", 10\]/);
  assert.match(reviews, /id: "weekend-camping-invitation"/);
  assert.match(reviews, /哥哥受伤后的周末露营邀请信/);
  assert.match(reviews, /wordCount: 160/);
  assert.match(reviews, /score: "5\.5"/);
  assert.match(reviews, /<del>me and my brother<\/del><strong>my brother and I<\/strong>/);
  assert.match(reviews, /<del>have rent<\/del><strong>have rented<\/strong>/);
  assert.match(reviews, /<del>sleepbags<\/del><strong>sleeping bags<\/strong>/);
  assert.match(reviews, /<del>Yours sincerely,<\/del><strong>Best wishes,<\/strong>/);
});

test("adds the Chinese New Year project letter as the newest scored review", async () => {
  const [editor, reviews] = await Promise.all([
    readFile(new URL("../app/rich-text-editor.tsx", import.meta.url), "utf8"),
    readFile(new URL("../lib/reviews.ts", import.meta.url), "utf8"),
  ]);

  assert.match(editor, /CURRENT_SEED_VERSION = 15/);
  assert.match(editor, /\["chinese-new-year-project-letter", 11\]/);
  assert.match(reviews, /id: "chinese-new-year-project-letter"/);
  assert.match(reviews, /向朋友介绍中国新年庆祝方式/);
  assert.match(reviews, /wordCount: 164/);
  assert.match(reviews, /score: "5\.0"/);
  assert.match(reviews, /<del>of shpping malls<\/del><strong>shopping malls<\/strong>/);
  assert.match(reviews, /<del>will be most execting<\/del><strong>will be the most excited<\/strong>/);
  assert.match(reviews, /<del>celecrate<\/del><strong>celebrate<\/strong>/);
  assert.match(reviews, /<del>those are<\/del><strong>this information is<\/strong>/);
});

test("refreshes the revised large-company essay in the review history", async () => {
  const [editor, reviews] = await Promise.all([
    readFile(new URL("../app/rich-text-editor.tsx", import.meta.url), "utf8"),
    readFile(new URL("../lib/reviews.ts", import.meta.url), "utf8"),
  ]);

  assert.match(editor, /CURRENT_SEED_VERSION = 15/);
  assert.match(editor, /\["large-versus-small-company", 13\]/);
  assert.match(reviews, /id: "large-versus-small-company"/);
  assert.match(reviews, /wordCount: 268/);
  assert.match(reviews, /score: "5\.5"/);
  assert.match(reviews, /<del>diffetent<\/del><strong>different<\/strong>/);
  assert.match(reviews, /<del>have<\/del><strong>has<\/strong>/);
  assert.match(reviews, /<del>abale<\/del><strong>able<\/strong>/);
  assert.match(
    reviews,
    /<del>learn experiences from<\/del><strong>learn from the experience of<\/strong>/,
  );
});

test("adds the internal department transfer request as the newest scored review", async () => {
  const [editor, reviews] = await Promise.all([
    readFile(new URL("../app/rich-text-editor.tsx", import.meta.url), "utf8"),
    readFile(new URL("../lib/reviews.ts", import.meta.url), "utf8"),
  ]);

  assert.match(editor, /CURRENT_SEED_VERSION = 15/);
  assert.match(editor, /\["internal-department-transfer-request", 14\]/);
  assert.match(editor, /\["internal-department-transfer-request", 15\]/);
  assert.match(reviews, /id: "internal-department-transfer-request"/);
  assert.match(reviews, /公司内部调岗申请信/);
  assert.match(reviews, /wordCount: 164/);
  assert.match(reviews, /score: "5\.0"/);
  assert.match(reviews, /<del>works<\/del><strong>tasks<\/strong>/);
  assert.match(reviews, /<del>Your<\/del><strong>Yours<\/strong>/);
  assert.match(reviews, /<del>professional skills<\/del><strong>knowledge of the company and communication skills<\/strong>/);
  assert.match(reviews, /valuable training and support from my colleagues/);
});

test("keeps each corrected review aligned with its clean version", async () => {
  const reviews = await readFile(
    new URL("../lib/reviews.ts", import.meta.url),
    "utf8",
  );
  const blocks = [
    ...reviews.matchAll(
      /\n {2}\{\n {4}id: "([^"]+)"([\s\S]*?)(?=\n {2}\{\n {4}id:|\n\];)/g,
    ),
  ];
  const normalize = (html) =>
    html
      .replace(/<del>[\s\S]*?<\/del>/g, "")
      .replace(/<\/?(?:span|strong)[^>]*>/g, "")
      .replace(/\s+/g, " ")
      .trim();

  assert.equal(blocks.length, 12);
  for (const [, id, block] of blocks) {
    const marked = block.match(/reviewHtml: `([\s\S]*?)`,\n {4}cleanHtml:/)?.[1];
    const clean = block.match(/cleanHtml: `([\s\S]*?)`,\n {2}}/)?.[1];
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

test("provides fast fill-in frameworks and predicted essays for Task 2", async () => {
  const [header, page, tabs, predictedTabs, predictedData] = await Promise.all([
    readFile(new URL("../app/site-header.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/task2/page.tsx", import.meta.url), "utf8"),
    readFile(
      new URL("../app/task2/task-two-reference-tabs.tsx", import.meta.url),
      "utf8",
    ),
    readFile(
      new URL("../app/task2/predicted-essay-tabs.tsx", import.meta.url),
      "utf8",
    ),
    readFile(
      new URL("../app/task2/predicted-essay-data.ts", import.meta.url),
      "utf8",
    ),
  ]);

  assert.match(header, /href="\/task2"/);
  assert.match(header, /大作文参考/);
  assert.match(page, /TaskTwoReferenceTabs/);
  assert.match(tabs, /大作文 1 套通用框架/);
  assert.match(tabs, /四段结构只记一套；主体段根据任务选择“解释／论证”或“措施”逻辑/);
  assert.match(tabs, /所有题型都用这四段/);
  assert.match(tabs, /同侧论证/);
  assert.doesNotMatch(tabs, /partly agree|部分同意/);
  assert.match(tabs, /双面比较/);
  assert.match(tabs, /两问回答/);
  assert.doesNotMatch(tabs, /第一步|先识别这 5 类常见问法/);
  assert.doesNotMatch(tabs, /真正需要背的框架|选择 3 套框架之一/);
  assert.match(tabs, /主体段两种展开逻辑/);
  assert.match(tabs, /只在这里不同/);
  assert.match(tabs, /两段关系/);
  assert.match(tabs, /paragraph\.logic\.join\(" → "\)/);
  assert.doesNotMatch(tabs, /所有题型共用的加长主体段/);
  assert.doesNotMatch(tabs, /复制主体段/);
  assert.doesNotMatch(tabs, /bodyParagraphTemplate/);
  assert.doesNotMatch(tabs, /paragraphFlow/);
  assert.doesNotMatch(tabs, /先从题干提取这些内容|copyFromQuestion/);
  assert.match(tabs, /navigator\.clipboard\.writeText/);
  assert.doesNotMatch(tabs, /role="tablist"/);
  assert.doesNotMatch(tabs, /role="tabpanel"/);
  assert.match(tabs, /复制通用框架/);
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
  assert.doesNotMatch(tabs, /特殊题目只改这些地方/);
  assert.match(tabs, /原因影响 · 任意两个直接问题/);
  assert.doesNotMatch(tabs, /套用时必须检查|正确的背法|fast-final-check/);
  assert.doesNotMatch(tabs, /supporters of/);
  assert.doesNotMatch(tabs, /understandable reasons/);
  assert.equal([...tabs.matchAll(/const explanationBodyLogic = \[/g)].length, 1);
  assert.equal([...tabs.matchAll(/const solutionBodyLogic = \[/g)].length, 1);
  assert.equal([...tabs.matchAll(/This is mainly because/g)].length, 1);
  assert.match(tabs, /"本段中心答案"/);
  assert.match(tabs, /"回扣本段任务"/);
  assert.match(tabs, /People have different views about whether \[题干核心观点\]\./);
  assert.match(tabs, /People have different views about \[讨论主题\]\. Some people believe that/);
  assert.match(tabs, /\[题干背景\] has become increasingly common in recent years/);
  assert.match(tabs, /行动者.*具体措施.*怎样实施.*直接效果.*长期结果/s);
  assert.match(tabs, /solutionBodyLogic\.join\(" → "\)/);
  assert.match(tabs, /To what extent/);
  assert.match(tabs, /How important/);
  assert.match(tabs, /影响的重要性、范围或持续时间/);
  assert.match(tabs, /普通利弊题没有要求 opinion 时不强加判断/);
  assert.match(tabs, /PredictedEssayTabs/);
  assert.match(predictedTabs, /预测题 Band 5\.5 范文/);
  assert.match(predictedTabs, /G 类优先/);
  assert.match(predictedTabs, /G 类备考相关性排序/);
  assert.match(predictedTabs, /prediction-material-highlight/);
  assert.match(predictedTabs, /绿色高亮/);
  assert.match(predictedTabs, /高亮素材短语/);
  assert.match(predictedTabs, /keyPhrasesUsedInExample/);
  assert.match(predictedTabs, /highlightBodyPhrases/);
  assert.match(predictedTabs, /reasonPhrases/);
  assert.match(predictedTabs, /开头段｜立场/);
  assert.match(predictedTabs, /introPhrases/);
  assert.doesNotMatch(predictedTabs, /keyPhrasesPerBody/);
  assert.match(predictedTabs, /phrase\.translation/);
  assert.match(predictedTabs, /本题套快速框架/);
  assert.match(predictedTabs, /frameworkPoints/);
  assert.match(predictedTabs, /role="tablist"/);
  assert.match(predictedTabs, /role="tabpanel"/);
  assert.match(predictedTabs, /复制题目与范文/);
  assert.equal([...predictedData.matchAll(/title: "/g)].length, 24);
  assert.equal(
    [...predictedData.matchAll(/\n {8}keyPhrases: \[\n {10}\{ text/g)].length,
    24,
  );
  assert.match(predictedData, /additionalKeyPhrasesByEssayId/);
  assert.match(predictedData, /reasonPhrasesByEssayId/);
  assert.match(predictedData, /introPhrasesByEssayId/);
  assert.match(predictedData, /simpleFrameworkPointsByEssayId/);
  assert.match(predictedData, /simpleBodyReasonSentencesByEssayId/);
  assert.match(predictedData, /singleSidePositionByEssayId/);
  assert.match(predictedData, /simplifiedEssayContentByEssayId/);
  assert.match(predictedData, /generalTrainingEssayOrderByCategory/);
  assert.match(predictedData, /"move-companies": "同意"/);
  assert.doesNotMatch(predictedData, /"move-companies": "不同意"/);
  assert.match(predictedData, /搬迁工作地点可以减少进入城市的日常通勤/);
  assert.match(predictedData, /moving workplaces can reduce traffic congestion/);
  assert.match(predictedData, /relocation can lower the demand for urban housing/);
  assert.match(predictedData, /create regional jobs/);
  assert.match(predictedData, /support local businesses/);
  assert.equal(
    [...predictedData.matchAll(/frameworkPoints: \[/g)].length,
    24,
  );

  for (const match of predictedData.matchAll(
    /title: "([^"]+)"[\s\S]*?keyPhrases: \[([^\]]*)\],[\s\S]*?paragraphs: \[([\s\S]*?)\n\s*\],/g,
  )) {
    const phrases = [
      ...match[2].matchAll(
        /text: "([^"]+)", translation: "([^"]+)"/g,
      ),
    ].map((phrase) => ({ text: phrase[1], translation: phrase[2] }));
    const paragraphs = [...match[3].matchAll(/`([^`]*)`/g)].map(
      (paragraph) => paragraph[1],
    );
    const fullEssay = paragraphs.join(" ");
    const wordCount = fullEssay.trim().split(/\s+/).length;
    assert.ok(
      wordCount >= 250 && wordCount <= 280,
      `${match[1]} should contain 250—280 words, received ${wordCount}`,
    );
    for (const phrase of phrases) {
      assert.ok(
        paragraphs
          .slice(1, 3)
          .some((body) =>
            body.toLowerCase().includes(phrase.text.toLowerCase()),
          ),
        `${match[1]} should use ${phrase.text} in a body paragraph`,
      );
      assert.ok(phrase.translation.length > 0);
    }
  }
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
  assert.match(materials, /大作文 G 类主题素材/);
  assert.match(materials, /完整保留原 PDF 的 8 类/);
  assert.match(materials, /已按 G 类常见题优先呈现/);
  assert.match(materials, /★ 表示应先掌握的高频主题/);
  assert.doesNotMatch(materials, /每个话题精选 5 条，共 40 条/);
  assert.doesNotMatch(materials, /HOW TO USE|一条素材，只记 3 个部分|TOPIC LIBRARY|备考顺序/);
  assert.doesNotMatch(materials, /PDF 核心思路/);
  assert.match(materials, /可直接使用的逻辑链/);
  assert.match(materials, /Band 6 通用英文/);
  assert.match(materials, /中文翻译/);
  assert.match(materials, /可用观点/);
  assert.match(materials, /G类补充表达/);
  assert.match(materials, /material-english-additional-hint/);
  assert.match(materials, /material-english-additional/);
  assert.match(materials, /material-translation-additional/);
  assert.match(materials, /G 类补充短语/);
  assert.doesNotMatch(materials, /material-general-focus/);
  assert.match(materials, /generalCategoryOrder/);
  assert.match(materials, /highlightEnglish\(material\.paragraph, material\.phrases\)/);
  assert.match(materials, /核心词汇 \/ 短语/);
  assert.match(materials, /const orderedMaterials = \[\.\.\.activeCategory\.materials\]\.sort/);
  assert.match(materials, /Number\(Boolean\(second\.priority\)\)/);
  assert.match(materials, /orderedMaterials\.map\(\(material, index\)/);
  assert.match(materials, /aria-label="G类优先背诵"/);
  assert.match(materials, /title="G类优先背诵主题"/);
  assert.equal([...data.matchAll(/priority: true/g)].length, 12);
  assert.match(data, /Population changes/);
  assert.match(data, /Religion and belief/);
  assert.match(data, /Transport and communication/);
  assert.match(data, /Law and human rights/);
  assert.match(data, /Investment and savings/);
  assert.match(data, /Vaccination and health education/);
  assert.equal([...data.matchAll(/generalFocus:/g)].length, 12);
  assert.equal([...data.matchAll(/generalFocus: \{[\s\S]*?translation:/g)].length, 12);
  assert.match(data, /父母帮助作业/);
  assert.match(data, /维生素补充剂/);
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
