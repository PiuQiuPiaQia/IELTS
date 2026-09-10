const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const PORT = process.env.PORT ? Number(process.env.PORT) : 4821;

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".ico": "image/x-icon"
};

function sendDirectoryIndex(res) {
  const links = [
    ["雅思口语练习", "/雅思口语练习/"],
    ["雅思批改作文", "/雅思批改作文/"]
  ];
  const body = links.map(([label, href]) => `<li><a href="${href}">${label}</a></li>`).join("");
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(`<!doctype html><meta charset="utf-8"><title>IELTS 本地预览</title><h1>IELTS 本地预览</h1><ul>${body}</ul>`);
}

http
  .createServer((req, res) => {
    let urlPath;
    try {
      urlPath = decodeURIComponent((req.url || "/").split("?")[0]);
    } catch {
      res.writeHead(400);
      res.end("Bad request");
      return;
    }

    const requestedPath = urlPath === "/" ? "/" : urlPath;
    const filePath = path.resolve(ROOT, `.${requestedPath}`);
    const relativePath = path.relative(ROOT, filePath);
    if (relativePath.startsWith("..") || path.isAbsolute(relativePath)) {
      res.writeHead(403);
      res.end("Forbidden");
      return;
    }

    fs.stat(filePath, (statError, stats) => {
      if (statError) {
        res.writeHead(404);
        res.end("Not found");
        return;
      }
      if (stats.isDirectory()) {
        if (requestedPath === "/") {
          sendDirectoryIndex(res);
          return;
        }
        const indexPath = path.join(filePath, "index.html");
        fs.readFile(indexPath, (indexError, data) => {
          if (indexError) {
            res.writeHead(404);
            res.end("Not found");
            return;
          }
          res.writeHead(200, { "Content-Type": TYPES[".html"] });
          res.end(data);
        });
        return;
      }
      fs.readFile(filePath, (readError, data) => {
        if (readError) {
          res.writeHead(404);
          res.end("Not found");
          return;
        }
        res.writeHead(200, { "Content-Type": TYPES[path.extname(filePath)] || "application/octet-stream" });
        res.end(data);
      });
    });
  })
  .listen(PORT, () => console.log(`serving ${ROOT} on http://localhost:${PORT}`));
