const MAX_DRAFT_LENGTH = 2000;

const SYSTEM_PROMPT =
  "Você é um tutor da disciplina Qualidade de Software. Responda em português do Brasil, em 2 a 4 frases curtas. Baseie-se APENAS no gabarito oficial e no enunciado fornecidos. Não invente normas, números ou conceitos que não estejam nesse material. Comente a resposta do estudante: se a questão for objetiva, diga se acertou e por que a alternativa marcada está certa ou errada; se for discursiva, diga o que cobriu e o que faltou em relação ao gabarito. Se não houver resposta escrita, explique o gabarito e diga que o estudante não escreveu. Tom: caderno de estudo, direto, sem emojis.";

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
