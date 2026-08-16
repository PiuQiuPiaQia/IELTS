import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']development["'])[^>]*>/i;

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
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
  assert.doesNotMatch(speakingLibrary, /remainingMaterials/);
  assert.doesNotMatch(page, /codex-preview|_sites-preview|SkeletonPreview/);
  assert.doesNotMatch(layout, /codex-preview|_sites-preview|SkeletonPreview/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});
