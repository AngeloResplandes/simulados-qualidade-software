const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
loadEnv(path.join(root, ".env"));
loadEnv(path.join(root, ".env.local"));

const handler = require("../api/explain");

const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon"
};

function loadEnv(file) {
  if (!fs.existsSync(file)) return;
  for (const line of fs.readFileSync(file, "utf8").split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq < 1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (process.env[key] == null || process.env[key] === "") {
      process.env[key] = value;
    }
  }
}

function adaptRes(res) {
  return {
    status(code) {
      res.statusCode = code;
      return this;
    },
    json(body) {
      if (!res.headersSent) {
        res.setHeader("Content-Type", "application/json; charset=utf-8");
      }
      res.end(JSON.stringify(body));
      return this;
    }
  };
}

function serveFile(req, res) {
  const url = new URL(req.url, "http://127.0.0.1");
  const filePath = url.pathname === "/" ? "/index.html" : url.pathname;
  const full = path.normalize(path.join(root, filePath));
  if (!full.startsWith(root + path.sep) && full !== root) {
    res.statusCode = 403;
    res.end("Forbidden");
    return;
  }
  fs.readFile(full, (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.end("Not found");
      return;
    }
    res.setHeader("Content-Type", mime[path.extname(full)] || "application/octet-stream");
    res.end(req.method === "HEAD" ? undefined : data);
  });
}

const port = Number(process.env.PORT) || 3000;
const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, "http://127.0.0.1");
  if (url.pathname === "/api/explain") {
    await handler(req, adaptRes(res));
    return;
  }
  if (req.method !== "GET" && req.method !== "HEAD") {
    res.statusCode = 405;
    res.end();
    return;
  }
  serveFile(req, res);
});

server.listen(port, "127.0.0.1", () => {
  const hasKey = Boolean(String(process.env.OPENAI_API_KEY || "").trim());
  process.stdout.write(
    JSON.stringify({
      url: `http://127.0.0.1:${port}/`,
      explain: `http://127.0.0.1:${port}/api/explain`,
      openai: hasKey
    }) + "\n"
  );
  if (!hasKey) {
    process.stderr.write("OPENAI_API_KEY ausente. Coloque a chave em .env na raiz do projeto.\n");
  }
});
