import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import type { IncomingMessage, ServerResponse } from "node:http";
import { dirname, resolve } from "node:path";
import type { Plugin } from "vite";

const API_PATH = "/api/local-reviews";
const MAX_REQUEST_BYTES = 16 * 1024 * 1024;

type ReviewFilePayload = {
  version: number;
  browserStorageMigrated: boolean;
  records: unknown[];
};

type ReviewFileMetadata = {
  _meta: {
    version: number;
    browserStorageMigrated: boolean;
  };
};

function isReviewFilePayload(value: unknown): value is ReviewFilePayload {
  if (typeof value !== "object" || value === null) return false;
  const payload = value as Partial<ReviewFilePayload>;
  return (
    Number.isInteger(payload.version) &&
    typeof payload.browserStorageMigrated === "boolean" &&
    Array.isArray(payload.records)
  );
}

function decodeJsonLines(source: string): ReviewFilePayload {
  const lines = source.split(/\r?\n/).filter((line) => line.trim().length > 0);
  if (lines.length === 0) throw new Error("Empty review data file");

  const metadata = JSON.parse(lines[0]) as Partial<ReviewFileMetadata>;
  if (
    typeof metadata._meta !== "object" ||
    metadata._meta === null ||
    !Number.isInteger(metadata._meta.version) ||
    typeof metadata._meta.browserStorageMigrated !== "boolean"
  ) {
    throw new Error("Invalid review data metadata");
  }

  return {
    version: metadata._meta.version,
    browserStorageMigrated: metadata._meta.browserStorageMigrated,
    records: lines.slice(1).map((line) => JSON.parse(line)),
  };
}

function encodeJsonLines(payload: ReviewFilePayload) {
  const metadata: ReviewFileMetadata = {
    _meta: {
      version: payload.version,
      browserStorageMigrated: payload.browserStorageMigrated,
    },
  };
  return [metadata, ...payload.records]
    .map((value) => JSON.stringify(value))
    .join("\n") + "\n";
}

function sendJson(response: ServerResponse, status: number, body: unknown) {
  response.statusCode = status;
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.setHeader("Cache-Control", "no-store");
  response.end(JSON.stringify(body));
}

async function readRequestBody(request: IncomingMessage) {
  const chunks: Buffer[] = [];
  let totalBytes = 0;

  for await (const chunk of request) {
    const buffer = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
    totalBytes += buffer.length;
    if (totalBytes > MAX_REQUEST_BYTES) {
      throw new Error("Review data is too large");
    }
    chunks.push(buffer);
  }

  return Buffer.concat(chunks).toString("utf8");
}

export function localReviewStoragePlugin(): Plugin {
  const storagePath = resolve(process.cwd(), "data/reviews.jsonl");
  let writeQueue = Promise.resolve();

  const readPayload = async () => {
    return decodeJsonLines(await readFile(storagePath, "utf8"));
  };

  const writePayload = async (payload: ReviewFilePayload) => {
    const temporaryPath = `${storagePath}.${process.pid}.${Date.now()}.tmp`;

    await mkdir(dirname(storagePath), { recursive: true });
    await writeFile(temporaryPath, encodeJsonLines(payload), "utf8");
    await rename(temporaryPath, storagePath);
  };

  const installMiddleware = (server: {
    middlewares: {
      use: (
        handler: (
          request: IncomingMessage,
          response: ServerResponse,
          next: () => void,
        ) => void,
      ) => void;
    };
  }) => {
    server.middlewares.use((request, response, next) => {
      const pathname = new URL(
        request.url ?? "/",
        "http://127.0.0.1",
      ).pathname;
      if (pathname !== API_PATH) {
        next();
        return;
      }

      void (async () => {
        try {
          if (request.method === "GET") {
            sendJson(response, 200, await readPayload());
            return;
          }

          if (request.method === "PUT") {
            const payload: unknown = JSON.parse(await readRequestBody(request));
            if (!isReviewFilePayload(payload)) {
              sendJson(response, 400, { error: "Invalid review data" });
              return;
            }

            writeQueue = writeQueue
              .catch(() => undefined)
              .then(() => writePayload(payload));
            await writeQueue;
            sendJson(response, 200, { saved: true });
            return;
          }

          response.setHeader("Allow", "GET, PUT");
          sendJson(response, 405, { error: "Method not allowed" });
        } catch (error) {
          const code = (error as NodeJS.ErrnoException).code;
          if (request.method === "GET" && code === "ENOENT") {
            sendJson(response, 404, { error: "Review data file not found" });
            return;
          }
          sendJson(response, 500, { error: "Unable to access review data" });
        }
      })();
    });
  };

  return {
    name: "local-review-storage",
    apply: "serve",
    configureServer: installMiddleware,
    configurePreviewServer: installMiddleware,
  };
}
