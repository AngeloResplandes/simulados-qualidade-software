const { findQuestion, buildMessages, MAX_DRAFT_LENGTH } = require("./explainPrompt");

const RATE_LIMIT = 30;
const WINDOW_MS = 60 * 60 * 1000;
const OPENAI_URL = "https://api.openai.com/v1/chat/completions";

function clientIp(req) {
  const forwarded = req.headers && req.headers["x-forwarded-for"];
  const first = String(forwarded || "")
    .split(",")[0]
    .trim();
  return first || (req.socket && req.socket.remoteAddress) || "unknown";
}

function allowRequest(ip, buckets, now, windowMs, limit) {
  const hits = (buckets.get(ip) || []).filter((stamp) => now - stamp < windowMs);
  if (hits.length >= limit) {
    buckets.set(ip, hits);
    return false;
  }
  hits.push(now);
  buckets.set(ip, hits);
  return true;
}

async function readJsonBody(req) {
  if (req.body && typeof req.body === "object" && !Buffer.isBuffer(req.body)) {
    return req.body;
  }
  const raw =
    typeof req.body === "string"
      ? req.body
      : await readStream(req);
  if (!raw) return {};
  return JSON.parse(raw);
}

async function readStream(req) {
  if (!req || typeof req[Symbol.asyncIterator] !== "function") return "";
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  return Buffer.concat(chunks.map((part) => Buffer.from(part))).toString("utf8");
}

function send(res, status, body) {
  res.status(status).json(body);
}

function createHandler(options) {
  const simulados = options.simulados;
  const fetchImpl = options.fetchImpl;
  const getApiKey = options.getApiKey;
  const getModel = options.getModel || (() => "gpt-4o-mini");
  const now = options.now || (() => Date.now());
  const buckets = options.buckets || new Map();
  const limit = options.limit || RATE_LIMIT;
  const windowMs = options.windowMs || WINDOW_MS;

  return async function handler(req, res) {
    if (req.method !== "POST") {
      send(res, 405, { error: "method_not_allowed" });
      return;
    }

    if (!allowRequest(clientIp(req), buckets, now(), windowMs, limit)) {
      send(res, 429, { error: "rate_limited" });
      return;
    }

    let body;
    try {
      body = await readJsonBody(req);
    } catch (err) {
      send(res, 400, { error: "invalid_request" });
      return;
    }

    const questionId = body && typeof body.questionId === "string" ? body.questionId.trim() : "";
    const selected = body && body.selected != null ? String(body.selected) : "";
    const draft = body && body.draft != null ? String(body.draft) : "";

    if (!questionId) {
      send(res, 400, { error: "invalid_request" });
      return;
    }
    if (draft.length > MAX_DRAFT_LENGTH) {
      send(res, 400, { error: "draft_too_long" });
      return;
    }

    const found = findQuestion(simulados, questionId);
    if (!found) {
      send(res, 404, { error: "question_not_found" });
      return;
    }

    const apiKey = String(getApiKey() || "").trim();
    if (!apiKey) {
      send(res, 503, { error: "unavailable" });
      return;
    }

    const messages = buildMessages(found, { selected, draft });
    try {
      const response = await fetchImpl(OPENAI_URL, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + apiKey,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: getModel() || "gpt-4o-mini",
          temperature: 0.3,
          max_tokens: 220,
          messages
        })
      });
      const data = await response.json().catch(() => ({}));
      const explanation = String(
        (data && data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) ||
          ""
      ).trim();
      if (!response.ok || !explanation) {
        send(res, 502, { error: "upstream_error" });
        return;
      }
      send(res, 200, { explanation });
    } catch (err) {
      send(res, 502, { error: "upstream_error" });
    }
  };
}

module.exports = {
  RATE_LIMIT,
  WINDOW_MS,
  createHandler
};
