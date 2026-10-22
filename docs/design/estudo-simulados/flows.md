Main flow: entry → action → feedback → success → recovery
Abrir a página (Módulo 1, Questões, item 1) → ler enunciado e marcar alternativa ou escrever → Conferir → gabarito original visível; objetivas marcam certo/errado → Próxima até o fim → resumo das objetivas e Recomeçar. Flashcards: Frente → Virar → Verso → Próxima. Troca de módulo ou modo reseta o índice daquele modo e guarda o rascunho local.

State matrix: component | loading | empty | error | success | disabled
- Página | n/a (conteúdo local) | n/a (sempre há módulo) | n/a (sem rede) | conteúdo renderizado | n/a
- Alternativas | n/a | n/a | n/a | selecionada / certa / errada após conferir | não clicáveis após conferir
- Conferir | n/a | n/a | “Escolha uma alternativa.” se objetiva sem escolha | gabarito aberto | inativo depois de conferir
- Textarea discursiva | n/a | rascunho vazio permitido | n/a | texto preservado ao revelar | somente leitura após conferir
- Flashcard | n/a | n/a | n/a | frente ou verso (classe is-flipped, sem recriar o DOM) | n/a
- Anterior | n/a | n/a | n/a | n/a | no primeiro item
- Próxima | n/a | n/a | n/a | n/a | n/a (no último item some em favor do resumo)

Keyboard order, focus and restoration:
1. pular para o conteúdo 2. módulos 3. Questões/Flashcards 4. alternativas ou textarea 5. Conferir/Virar 6. Anterior 7. Próxima. `a`–`e` marcam alternativas fora de campo de texto. Espaço vira a ficha. Escape não abre overlay (não há modal). Foco visível em filete brass.

Narrow-screen behavior and content priority:
- ≤479px: numeral acima, botões em coluna, ficha full-bleed da coluna, padding com safe-area.
- 480–767px: botões em linha que quebram, ficha com min-height menor.
- 768–1023px: numeral ao lado do enunciado, coluna ~42rem.
- ≥1024px: coluna 44–48rem, ficha com min-height de palco.
Sem esconder enunciado. Virada 3D vira fade se prefers-reduced-motion.

Component purpose, variants and API:
- ModuleNav: quatro botões, `aria-current="page"` no ativo.
- ModeTabs: abas Questões e Flashcards.
- Prompt: numeral + tipo + enunciado.
- OptionList: fieldset de rádios a–e ou Verdadeiro/Falso.
- AnswerBox: textarea para discursiva e para a justificativa da Q3 do Módulo 1.
- KeyReveal: bloco de gabarito com o texto do markdown.
- FlashStage: palco 3D com duas faces (frente/verso) e borda; Virar ou clique na ficha alterna `is-flipped`.

Action vocabulary and microcopy:
Conferir, Gabarito, Anterior, Próxima, Virar, Frente, Verso, Recomeçar, Escolha uma alternativa., Objetivas: N de M.
