const { test } = require("node:test");
const assert = require("node:assert/strict");

test("content.js exports simulados array for Node", () => {
  const data = require("../content.js");
  assert.ok(Array.isArray(data));
  assert.equal(data.length, 4);
  assert.equal(data[0].id, "m1");
  assert.ok(Array.isArray(data[0].questions));
  assert.equal(data[0].questions[0].id, "m1-q1");
});
