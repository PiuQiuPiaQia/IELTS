import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']development["'])[^>]*>/i;

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the IELTS speaking material library", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>雅思口语练习｜Part 2 通用素材库<\/title>/i);
  assert.match(html, /Part 2 通用素材练习/);
  assert.match(html, /素材 01｜Alex 工作故事/);
  assert.match(html, /素材 02｜家附近的公园/);
  assert.match(html, /素材 03｜上海城市旅行/);
  assert.match(html, /素材 04｜种菜的奶奶/);
  assert.match(html, /素材 05｜戒断手机瘾/);
  assert.match(html, /素材 06｜家庭电影之夜/);
  assert.match(html, /素材 07｜喜欢的歌手与音乐活动/);
  assert.doesNotMatch(html, /素材 04｜职业规划|素材 16｜常用应用/);
  assert.match(html, /核心通用素材库/);
  assert.match(html, /适配本题的完整范文/);
  assert.doesNotMatch(html, developmentPreviewMeta);
  assert.doesNotMatch(html, /Your site is taking shape|Building your site/);
});

test("keeps the finished site free of starter preview code", async () => {
  const [page, layout, speakingLibrary, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/speaking-library.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /<SpeakingLibrary \/>/);
  assert.match(layout, /title:\s*"雅思口语练习"/);
  assert.match(speakingLibrary, /Part 2 通用素材练习/);
  assert.match(speakingLibrary, /additionalMaterials/);
  assert.match(speakingLibrary, /expandAnswer/);
  assert.doesNotMatch(speakingLibrary, /remainingMaterials/);
  assert.doesNotMatch(page, /codex-preview|_sites-preview|SkeletonPreview/);
  assert.doesNotMatch(layout, /codex-preview|_sites-preview|SkeletonPreview/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});

test("includes the Part 3 prediction library", async () => {
  const data = await readFile(new URL("../app/part-3/part-three-data.ts", import.meta.url), "utf8");
  const translations = await readFile(new URL("../app/part-3/part-three-translations.ts", import.meta.url), "utf8");
  const page = await readFile(new URL("../app/part-3/part-three-library.tsx", import.meta.url), "utf8");
  assert.match(page, /Part 3 押题问题与简洁答案/);
  assert.match(page, /partThreeGroups/);
  assert.match(page, /partThreeTranslations/);
  assert.match(page, /观点.*原因.*例子\/\u7ed3果/s);
  assert.match(page, /logic-connector/);
  assert.match(page, /logic-key-info/);
  assert.doesNotMatch(page, /<strong>\{highlightLogic\(sentence\)\}<\/strong>/);
  assert.equal((data.match(/^\s*\{ question:/gm) ?? []).length, 162);
  assert.equal((translations.match(/^ {2}".+": \{$/gm) ?? []).length, 162);
});

test("includes the universal speaking toolkit tab", async () => {
  const response = await render("/toolkit");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /<title>雅思口语练习｜万能素材工具箱<\/title>/i);
  assert.match(html, /Part 3 统一答题结构/);
  assert.match(html, /三类对比/);
  assert.match(html, /九类万能素材/);
  assert.match(html, /老人 vs 年轻人/);
  assert.match(html, /内向和外向/);
  assert.match(html, /城市 VS 乡村/);
  assert.match(html, /more life experience and know more about the world/i);
  assert.match(html, /get their energy back by spending time alone/i);
  assert.match(html, /better public services, including public transport/i);
  assert.match(html, /表达提醒/);
  assert.match(html, /易背对比结构/);
  assert.match(html, /Generally speaking, there are several differences between A and B/i);
  assert.doesNotMatch(html, /wealth of life experiences|fragmented|invigorated|pesticide runoff|deforestation|traffic congestion/i);
  assert.doesNotMatch(html, /Generally, A tends to/);
  assert.match(html, /完整背诵段落/);
  assert.match(html, /中文思路/);
  assert.match(html, /<mark>unwind and release daily pressure<\/mark>/i);
  assert.match(html, /<mark>broaden my horizons<\/mark>/i);
  assert.match(html, /<mark>makes me feel less tired<\/mark>/i);
  assert.match(html, /<mark>feeling low on energy<\/mark>/i);
  assert.match(html, /<mark>avoid using it too much<\/mark>/i);
  assert.match(html, /<mark>not really my cup of tea<\/mark>/i);
  assert.match(html, /做这件事能让我放松身心、释放压力/);
  assert.match(html, /我很少做这件事，因为它不是我的喜好/);
  assert.doesNotMatch(html, /九类简化素材|适用：/);
  assert.doesNotMatch(html, /sluggish|relieves tiredness|over-indulgence/i);
  assert.match(html, /The main reason is that/i);
});
