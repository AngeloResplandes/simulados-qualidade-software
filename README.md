# Simulados — Qualidade de Software

Página para estudar os simulados dos módulos 1 a 4 (questões e flashcards).

- Fontes: `docs/simulados/`

## Explicação da IA ao conferir

Ao clicar em **Conferir**, o gabarito oficial aparece na hora. Em paralelo, `POST /api/explain` pede à OpenAI um comentário curto sobre a resposta do aluno. A chave fica só no servidor (variável de ambiente da Vercel).

### Deploy na Vercel

1. Importe este repositório na Vercel (framework: Other; raiz do projeto: a pasta do `index.html`).
2. Em Settings → Environment Variables, defina:
   - `OPENAI_API_KEY` — chave da OpenAI (obrigatória)
   - `OPENAI_MODEL` — opcional; padrão `gpt-4o-mini`
3. Publique e estude pela URL `*.vercel.app` (ou pelo domínio apontado).

Não coloque a chave em `app.js`, `index.html` nem no Git.

### Teste local com `.env`

1. Copie `.env.example` para `.env` e preencha `OPENAI_API_KEY`.
2. Rode `npm run dev`.
3. Abra `http://127.0.0.1:3000/`, responda uma questão e clique em **Conferir**.

O arquivo `.env` não vai para o Git.

### Testes

```bash
npm test
```
