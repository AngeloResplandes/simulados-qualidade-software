const { test } = require("node:test");
const assert = require("node:assert/strict");
const simulados = require("../content.js");
const { findQuestion, buildMessages, SYSTEM_PROMPT, MAX_DRAFT_LENGTH } =
  require("../lib/explainPrompt");

test("findQuestion returns official question and module for a known id", () => {
  const found = findQuestion(simulados, "m1-q1");
  assert.equal(found.module.id, "m1");
  assert.equal(found.question.id, "m1-q1");
  assert.equal(found.question.answer, "b");
  assert.equal(found.question.kind, "mc");
});

test("findQuestion returns null for unknown id", () => {
  assert.equal(findQuestion(simulados, "nao-existe"), null);
});

test("findQuestion does not treat flashcards as questions", () => {
  assert.equal(findQuestion(simulados, "m1-f1"), null);
});

test("SYSTEM_PROMPT asks for short Portuguese tutoring grounded in the gabarito", () => {
  assert.match(SYSTEM_PROMPT, /portugu[eê]s/i);
  assert.match(SYSTEM_PROMPT, /2.{0,6}4 frases/i);
  assert.match(SYSTEM_PROMPT, /gabarito/i);
  assert.match(SYSTEM_PROMPT, /n[aã]o invente/i);
  assert.match(SYSTEM_PROMPT, /s[oó] a letra/i);
});

test("buildMessages for a wrong objective answer includes prompt, options, official key and student pick", () => {
  const found = findQuestion(simulados, "m1-q1");
  const messages = buildMessages(found, { selected: "a", draft: "" });
  assert.equal(messages[0].role, "system");
  assert.equal(messages[0].content, SYSTEM_PROMPT);
  assert.equal(messages[1].role, "user");
  const user = messages[1].content;
  assert.match(user, /Módulo 1: Fundamentos/);
  assert.match(user, /Tipo: mc/);
  assert.match(user, /emissão de boletos/);
  assert.match(user, /a\) Alta, porque a funcionalidade/);
  assert.match(user, /b\) Baixa, pois qualidade depende/);
  assert.match(user, /Gabarito oficial: b/);
  assert.match(user, /Resposta do estudante: alternativa a/);
  assert.match(user, /gabarito oficial é só a chave/i);
});

test("buildMessages for a correct objective answer still states the official key", () => {
  const found = findQuestion(simulados, "m1-q1");
  const user = buildMessages(found, { selected: "b", draft: "" })[1].content;
  assert.match(user, /Gabarito oficial: b/);
  assert.match(user, /Resposta do estudante: alternativa b/);
});

test("buildMessages for true\/false includes the student mark", () => {
  const found = findQuestion(simulados, "m1-q4");
  const user = buildMessages(found, { selected: "f", draft: "acho falso" })[1].content;
  assert.match(user, /Tipo: vf/);
  assert.match(user, /v\) Verdadeiro/);
  assert.match(user, /Gabarito oficial: v/);
  assert.match(user, /Resposta do estudante: alternativa f/);
  assert.match(user, /Justificativa do estudante: acho falso/);
});

test("buildMessages for discursive with text comments on the draft", () => {
  const found = findQuestion(simulados, "m1-q2");
  const user = buildMessages(found, {
    selected: "",
    draft: "Erro é o if errado."
  })[1].content;
  assert.match(user, /Tipo: discursive/);
  assert.match(user, /IEEE 610\.12/);
  assert.match(user, /Texto do gabarito: Erro = engano humano/);
  assert.match(user, /Resposta do estudante: Erro é o if errado\./);
  assert.doesNotMatch(user, /alternativa /);
  assert.doesNotMatch(user, /gabarito oficial é só a chave/i);
});

test("buildMessages for empty discursive draft says there was no written answer", () => {
  const found = findQuestion(simulados, "m1-q2");
  const user = buildMessages(found, { selected: "", draft: "   " })[1].content;
  assert.match(user, /Resposta do estudante: \(sem resposta escrita\)/);
});

test("MAX_DRAFT_LENGTH is 2000", () => {
  assert.equal(MAX_DRAFT_LENGTH, 2000);
});
