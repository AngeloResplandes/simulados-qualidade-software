Decision status: delegated
Decision source: Pedido inicial de dark mode minimalista; em 22/10/2026 o usuário pediu fichas com borda e virada, animações em todo o projeto e responsividade em mobile, tablet e PC.

Chosen direction and reason: Caderno noturno com ficha viva. Mantém tinta, serif e numeral. O gesto memorável passa a ser a virada 3D da ficha (papel no tampo), não um glow genérico. O resto do movimento responde à ação: seleção, conferir, troca de item.

Alternatives and trade-offs, for new products/redesigns:
- Caderno noturno (escolhida): leitura contínua, opções a) b) c) alinhadas à esquerda, conferência in-place. Troca: menos “app de flashcard”.
- Fichário de aço: palco central, uma ficha por vez, paleta fria. Troca: discursivas longas quebram o card e o conjunto parece um quiz genérico.

Colors: 4–6 named hex values
- ink `#161513` — fundo da página
- panel `#1F1D1A` — superfície da alternativa e da ficha
- rule `#2F2C27` — filetes
- bone `#D8D2C6` — texto principal
- mute `#9A9388` — meta, números de módulo em descanso
- brass `#C4A574` — seleção, foco, numeral ativo
- pass `#8AA37A` — alternativa certa após conferir
- fail `#C4887A` — alternativa errada após conferir

Typefaces, roles, fallback and scale:
- Questão e alternativas: `"Iowan Old Style", "Palatino Linotype", Palatino, Georgia, serif` — cara de prova.
- Interface: `"Avenir Next", "Segoe UI", system-ui, sans-serif`.
- Escala: brand 0.8125rem; numeral 4.5rem/3rem mobile; enunciado 1.25rem/1.5; alternativa 1.0625rem/1.5; chrome 0.875rem. Sem webfont remota.

Layout concept, alignment and ASCII wireframe:
Coluna esquerda, máximo ~40rem, alinhamento à esquerda. Cabeçalho em filete, sem cartões empilhados.

```
Qualidade de Software              Questões   Flashcards
Fundamentos   Normas   Métricas   CMMI

03
   Questão 3 (Múltipla escolha)
   enunciado…

   a) …
   b) …   ← selecionada (filete brass)
   c) …

   Conferir              Próxima
```

Distinctive principles:
- Numeral de prova + ficha com filete brass e virada em Y.
- Opções como linha de prova, não como chips.
- Movimento só quando algo muda (virar, marcar, conferir, avançar).
- Sem barra de progresso, streak ou cartões idênticos nas questões.
- Lampada quente no fundo, lenta; some com prefers-reduced-motion.

Specificity review: generic choice found, revision and reason
Um quiz genérico usaria cards iguais, Inter, barra de progresso e verde ácido no preto. Troca: serif de caderno, tinta quente, numeral impresso, filete brass no lugar de glow.

Existing identity preserved: não havia identidade visual.

Asset/font dependencies: só fontes do sistema; sem CDN de tipo ou imagem gerada.
