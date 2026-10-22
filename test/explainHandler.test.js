const { test } = require("node:test");
const assert = require("node:assert/strict");
const simulados = require("../content.js");
const { createHandler, RATE_LIMIT } = require("../lib/explainHandler");
const { SYSTEM_PROMPT, MAX_DRAFT_LENGTH } = require("../lib/explainPrompt");

function mockReq(overrides) {
  return {
    method: "POST",
    headers: { "x-forwarded-for": "203.0.113.9", "content-type": "application/json" },
    body: { questionId: "m1-q1", selected: "a", draft: "" },
    ...overrides
  };
}

function mockRes() {
  const res = {
    statusCode: 200,
    body: null,
    headers: {},
    status(code) {
      res.statusCode = code;
      return res;
    },
    json(data) {
      res.body = data;
      return res;
    },
    setHeader(key, value) {
      res.headers[key.toLowerCase()] = value;
    }
  };
  return res;
}

function handlerWith(overrides = {}) {
  const calls = [];
  const fetchImpl = overrides.fetchImpl || (async (url, init) => {
    calls.push({ url, init });
    return {
      ok: true,
      status: 200,
      json: async () => ({
        choices: [{ message: { content: "A alternativa b está certa porque qualidade inclui atributos não funcionais." } }]
      })
    };
  });
  return {
    calls,
    handle: createHandler({
      simulados,
      fetchImpl,
      getApiKey: () => "sk-test",
      getModel: () => "gpt-4o-mini",
      now: () => 1_000_000,
      buckets: new Map(),
      ...overrides
    })
  };
}

test("rejects non-POST methods", async () => {
  const { handle } = handlerWith();
  const res = mockRes();
  await handle(mockReq({ method: "GET" }), res);
  assert.equal(res.statusCode, 405);
  assert.equal(res.body.error, "method_not_allowed");
});

test("rejects missing questionId", async () => {
  const { handle } = handlerWith();
  const res = mockRes();
  await handle(mockReq({ body: { selected: "a" } }), res);
  assert.equal(res.statusCode, 400);
  assert.equal(res.body.error, "invalid_request");
});

test("rejects unknown questionId", async () => {
  const { handle } = handlerWith();
  const res = mockRes();
  await handle(mockReq({ body: { questionId: "m9-q99", selected: "a", draft: "" } }), res);
  assert.equal(res.statusCode, 404);
  assert.equal(res.body.error, "question_not_found");
});

test("rejects oversized draft", async () => {
  const { handle } = handlerWith();
  const res = mockRes();
  await handle(
    mockReq({ body: { questionId: "m1-q2", selected: "", draft: "x".repeat(MAX_DRAFT_LENGTH + 1) } }),
    res
  );
  assert.equal(res.statusCode, 400);
  assert.equal(res.body.error, "draft_too_long");
});

test("returns unavailable when API key is missing", async () => {
  const { handle, calls } = handlerWith({ getApiKey: () => "" });
  const res = mockRes();
  await handle(mockReq(), res);
  assert.equal(res.statusCode, 503);
  assert.equal(res.body.error, "unavailable");
  assert.equal(calls.length, 0);
});

test("rate-limits the same IP after 30 requests in one hour", async () => {
  const buckets = new Map();
  let now = 1_000_000;
  const { handle } = handlerWith({ buckets, now: () => now });
  for (let i = 0; i < RATE_LIMIT; i++) {
    const res = mockRes();
    await handle(mockReq(), res);
    assert.equal(res.statusCode, 200, `request ${i + 1}`);
  }
  const blocked = mockRes();
  await handle(mockReq(), blocked);
  assert.equal(blocked.statusCode, 429);
  assert.equal(blocked.body.error, "rate_limited");
});

test("builds the OpenAI prompt from official content, ignoring client gabarito", async () => {
  const { handle, calls } = handlerWith();
  const res = mockRes();
  await handle(
    mockReq({
      body: {
        questionId: "m1-q1",
        selected: "a",
        draft: "",
        answer: "e",
        gabarito: "inventado",
        prompt: "hack"
      }
    }),
    res
  );
  assert.equal(res.statusCode, 200);
  assert.match(res.body.explanation, /alternativa b está certa/);
  assert.equal(calls.length, 1);
  assert.equal(calls[0].url, "https://api.openai.com/v1/chat/completions");
  const payload = JSON.parse(calls[0].init.body);
  assert.equal(payload.model, "gpt-4o-mini");
  assert.equal(payload.temperature, 0.3);
  assert.equal(payload.max_tokens, 220);
  assert.equal(payload.messages[0].content, SYSTEM_PROMPT);
  assert.match(payload.messages[1].content, /Gabarito oficial: b/);
  assert.doesNotMatch(payload.messages[1].content, /inventado/);
  assert.doesNotMatch(payload.messages[1].content, /\bhack\b/);
  assert.equal(calls[0].init.headers.Authorization, "Bearer sk-test");
});

test("returns 502 when OpenAI fails", async () => {
  const { handle } = handlerWith({
    fetchImpl: async () => ({
      ok: false,
      status: 500,
      json: async () => ({ error: { message: "boom" } })
    })
  });
  const res = mockRes();
  await handle(mockReq(), res);
  assert.equal(res.statusCode, 502);
  assert.equal(res.body.error, "upstream_error");
});

test("returns 502 when OpenAI sends empty text", async () => {
  const { handle } = handlerWith({
    fetchImpl: async () => ({
      ok: true,
      status: 200,
      json: async () => ({ choices: [{ message: { content: "  " } }] })
    })
  });
  const res = mockRes();
  await handle(mockReq(), res);
  assert.equal(res.statusCode, 502);
  assert.equal(res.body.error, "upstream_error");
});
