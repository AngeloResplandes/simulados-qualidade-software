# Simulados — Qualidade de Software

Página para estudar os simulados dos módulos 1 a 4 (questões e flashcards).

- Site estático: https://angeloresplandes.github.io/simulados-qualidade-software/
- Fontes: `docs/simulados/`

## Explicação da IA ao conferir

Ao clicar em **Conferir**, o gabarito oficial aparece na hora. Em paralelo, `POST /api/explain` pede à OpenAI um comentário curto sobre a resposta do aluno. A chave fica só no servidor (variável de ambiente da Vercel). Quem abre o GitHub Pages não passa pela função: a IA funciona na URL da Vercel.

### Deploy na Vercel

1. Importe este repositório na Vercel (framework: Other; raiz do projeto: a pasta do `index.html`).
2. Em Settings → Environment Variables, defina:
   - `OPENAI_API_KEY` — chave da OpenAI (obrigatória)
   - `OPENAI_MODEL` — opcional; padrão `gpt-4o-mini`
3. Publique e estude pela URL `*.vercel.app` (ou pelo domínio apontado).

Não coloque a chave em `app.js`, `index.html` nem no Git.

### Testes

```bash
npm test
```
