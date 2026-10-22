Outcome and affected screens: A página ganhou ficha com borda e virada 3D, lâmpada quente no fundo, entrada ao trocar de item, hover nos botões e layout para telefone (≤767), tablet (768–1023) e desktop (≥1024). `prefers-reduced-motion` troca a virada por um corte seco.

How to run/review: Abrir `index.html` no navegador, ou usar o preview local `http://127.0.0.1:56247/` enquanto o processo 57763 estiver no ar. Não há build.

Decisions and rationale: Direção Caderno noturno (dark, serif de prova, numeral grande) delegada pelo pedido de dark mode minimalista. Conteúdo copiado dos markdowns: 8+7+8+8 questões e 7+12+12+12 flashcards. A frase final do Módulo 1 pedindo mais questões geradas ficou de fora porque não é questão nem flashcard.

Evidence paths and tested revision: `docs/design/estudo-simulados/evidence.json` (revisão com ficha/motion). Histórico anterior em `evidence-revision-caderno-1.json`. Git indisponível; hashes em `projectRevision.files`. Capturas correntes: `desktop-flash-r2.png`, `tablet-flash.png`, `mobile-flash-r2.png`, `mobile-question-r2.png`.

Checks actually completed: visual (idle, conferida, flash, mobile 390), contraste calculado, fluxo de clique (selecionar, conferir, erro sem escolha, virar ficha, trocar módulo).

Open defects and pending checks: teclado nativo não observado; 320 CSS px/zoom não capturados. `desktop-idle.png` 3824×2160 não vale como viewport.

Material dependencies/risks: fontes do sistema (`Iowan Old Style` / Palatino / Georgia). Sem CDN.

Next action if a check could not run: Tab real no Chrome/Safari a partir do skip link; conferir foco visível brass e ordem módulos → abas → alternativas → Conferir.
