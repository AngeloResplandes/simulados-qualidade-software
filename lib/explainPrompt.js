const MAX_DRAFT_LENGTH = 2000;

const SYSTEM_PROMPT =
  "Você é um tutor da disciplina Qualidade de Software. Responda em português do Brasil, em 2 a 4 frases curtas, sem emojis. Use o enunciado, as alternativas e o gabarito oficial. Se o texto do gabarito for só a letra, explique mesmo assim: diga se o estudante acertou ou errou, cite a alternativa correta e justifique com o enunciado e a redação dessa alternativa. Não invente normas, números, autores ou conceitos que não apareçam nesse material. Objetiva: comece dizendo se acertou ou errou; se errou, diga por que a marcada falha e por que a oficial é a certa. Discursiva: diga o que a resposta cobriu e o que faltou em relação ao texto do gabarito. Se não houver resposta escrita, explique o gabarito e diga que o estudante não escreveu.";

function findQuestion(simulados, id) {
  if (!id || !Array.isArray(simulados)) return null;
  for (const mod of simulados) {
    const question = (mod.questions || []).find((item) => item.id === id);
    if (question) return { module: mod, question };
  }
  return null;
}

function buildMessages(found, user) {
  const selected = String((user && user.selected) || "").trim();
  const draft = String((user && user.draft) || "").trim();
  const question = found.question;
  const lines = [
    `Módulo: ${found.module.title}`,
    `Tipo: ${question.kind}`,
    `Enunciado: ${question.prompt}`
  ];

  if (Array.isArray(question.options) && question.options.length) {
    lines.push("Alternativas:");
    question.options.forEach((option) => {
      lines.push(`${option.key}) ${option.text}`);
    });
  }

  if (question.answer) {
    lines.push(`Gabarito oficial: ${question.answer}`);
  }

  const gabarito = String(question.gabarito || "").trim();
  if (gabarito) {
    lines.push(`Texto do gabarito: ${gabarito}`);
  }
  const keyHint = gabarito || String(question.answer || "").trim();
  if (question.kind !== "discursive" && /^(v|f|[a-e])$/i.test(keyHint)) {
    lines.push(
      "Nota: o gabarito oficial é só a chave da alternativa. Justifique com o enunciado e o texto da alternativa correta."
    );
  }

  if (question.kind === "discursive") {
    lines.push(`Resposta do estudante: ${draft || "(sem resposta escrita)"}`);
  } else {
    lines.push(`Resposta do estudante: alternativa ${selected || "(não marcada)"}`);
    if (draft) lines.push(`Justificativa do estudante: ${draft}`);
  }

  return [
    { role: "system", content: SYSTEM_PROMPT },
    { role: "user", content: lines.join("\n") }
  ];
}

module.exports = {
  MAX_DRAFT_LENGTH,
  SYSTEM_PROMPT,
  findQuestion,
  buildMessages
};
