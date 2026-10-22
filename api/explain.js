const simulados = require("../content.js");
const { createHandler } = require("../lib/explainHandler");

module.exports = createHandler({
  simulados,
  fetchImpl: (...args) => fetch(...args),
  getApiKey: () => process.env.OPENAI_API_KEY,
  getModel: () => process.env.OPENAI_MODEL || "gpt-4o-mini"
});
