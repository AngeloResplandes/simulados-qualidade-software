(function () {
  const STORAGE = "qs-estudo-v1";
  const data = window.SIMULADOS;

  const state = {
    moduleId: "m1",
    mode: "questions",
    index: 0,
    flipped: false,
    answers: {},
    done: false,
    notice: ""
  };

  const els = {
    modules: document.getElementById("modules"),
    modes: document.getElementById("modes"),
    main: document.getElementById("conteudo")
  };

  restore();
  renderChrome();
  render();
  document.addEventListener("keydown", onKey);

  function currentModule() {
    return data.find((item) => item.id === state.moduleId) || data[0];
  }

  function items() {
    const mod = currentModule();
    return state.mode === "questions" ? mod.questions : mod.flashcards;
  }

  function answerKey(id) {
    return id;
  }

  function getAnswer(id) {
    return state.answers[answerKey(id)] || { selected: "", draft: "", revealed: false };
  }

  function setAnswer(id, patch) {
    const prev = getAnswer(id);
    state.answers[answerKey(id)] = { ...prev, ...patch };
    persist();
  }

  function persist() {
    try {
      localStorage.setItem(
        STORAGE,
        JSON.stringify({
          moduleId: state.moduleId,
          mode: state.mode,
          index: state.index,
          flipped: state.flipped,
          answers: state.answers,
          done: state.done
        })
      );
    } catch (err) {
      /* ignore quota */
    }
  }

  function restore() {
    try {
      const raw = localStorage.getItem(STORAGE);
      if (!raw) return;
      const saved = JSON.parse(raw);
      if (data.some((item) => item.id === saved.moduleId)) state.moduleId = saved.moduleId;
      if (saved.mode === "questions" || saved.mode === "flashcards") state.mode = saved.mode;
      if (typeof saved.index === "number") state.index = saved.index;
      if (typeof saved.flipped === "boolean") state.flipped = saved.flipped;
      if (saved.answers && typeof saved.answers === "object") state.answers = saved.answers;
      if (typeof saved.done === "boolean") state.done = saved.done;
    } catch (err) {
      /* ignore */
    }
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function decorate(value) {
    return escapeHtml(value)
      .replace(/`([^`]+)`/g, "<code>$1</code>")
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .replace(/\*([^*]+)\*/g, "<em>$1</em>");
  }

  function formatText(value) {
    return decorate(value)
      .split("\n")
      .map((line) => "<p>" + line + "</p>")
      .join("");
  }

  function formatInline(value) {
    return decorate(value).replace(/\n/g, "<br>");
  }

  function pad(number) {
    return String(number).padStart(2, "0");
  }

  function renderChrome() {
    const mod = currentModule();
    els.modules.innerHTML = data
      .map(
        (item) =>
          `<button type="button" data-module="${item.id}"${
            item.id === mod.id ? ' aria-current="page"' : ""
          }>${escapeHtml(item.short)}</button>`
      )
      .join("");

    els.modes.innerHTML = [
      { id: "questions", label: "Questões" },
      { id: "flashcards", label: "Flashcards" }
    ]
      .map(
        (tab) =>
          `<button type="button" role="tab" data-mode="${tab.id}" aria-selected="${
            state.mode === tab.id ? "true" : "false"
          }">${tab.label}</button>`
      )
      .join("");

    els.modules.onclick = (event) => {
      const button = event.target.closest("button[data-module]");
      if (!button) return;
      state.moduleId = button.dataset.module;
      state.index = 0;
      state.flipped = false;
      state.done = false;
      state.notice = "";
      persist();
      renderChrome();
      render({ enter: true });
    };

    els.modes.onclick = (event) => {
      const button = event.target.closest("button[data-mode]");
      if (!button) return;
      state.mode = button.dataset.mode;
      state.index = 0;
      state.flipped = false;
      state.done = false;
      state.notice = "";
      persist();
      renderChrome();
      render({ enter: true });
    };
  }

  function render() {
    const list = items();
    if (state.index >= list.length) state.index = Math.max(0, list.length - 1);
    if (state.done && state.mode === "questions") {
      els.main.innerHTML = renderSummary();
      bindSummary();
      return;
    }
    if (state.mode === "flashcards") {
      els.main.innerHTML = renderFlash(list[state.index], list.length);
      bindFlash();
      return;
    }
    els.main.innerHTML = renderQuestion(list[state.index], list.length);
    bindQuestion(list[state.index]);
  }

  function renderLede() {
    const mod = currentModule();
    if (state.index !== 0) return "";
    const study = mod.study ? `<p>${escapeHtml(mod.study)}</p>` : "";
    return `<div class="lede">${formatText(mod.intro)}${study}</div>`;
  }

  function renderQuestion(question, total) {
    const saved = getAnswer(question.id);
    const needsChoice = question.kind === "mc" || question.kind === "vf";
    const needsDraft = question.kind === "discursive" || question.kind === "vf" || question.justification;
    const options = needsChoice
      ? `<fieldset class="options" role="radiogroup" aria-label="Alternativas"${
          state.notice ? ' aria-describedby="notice"' : ""
        }>
          <legend>Alternativas</legend>
          ${question.options
            .map((option) => {
              const checked = saved.selected === option.key;
              let klass = "option";
              if (saved.revealed && option.key === question.answer) klass += " is-right";
              if (saved.revealed && checked && option.key !== question.answer) klass += " is-wrong";
              return `<button type="button" class="${klass}" role="radio" aria-checked="${
                checked ? "true" : "false"
              }" data-key="${option.key}" ${saved.revealed ? "disabled" : ""}>
                <span class="key">${escapeHtml(option.key)})</span>
                <span>${formatInline(option.text)}</span>
              </button>`;
            })
            .join("")}
        </fieldset>`
      : "";

    const draft = needsDraft
      ? `<div class="draft">
          <label for="draft">Sua resposta</label>
          <textarea id="draft" ${saved.revealed ? "disabled" : ""}>${escapeHtml(
            saved.draft || ""
          )}</textarea>
        </div>`
      : "";

    const gabarito = saved.revealed
      ? `<section class="gabarito" aria-live="polite" tabindex="-1">
          <h2>Gabarito</h2>
          ${formatText(question.gabarito)}
        </section>`
      : "";

    const notice = state.notice
      ? `<p class="notice" id="notice" role="alert" tabindex="-1">${escapeHtml(state.notice)}</p>`
      : "";
    const checkLabel = saved.revealed ? "Conferido" : "Conferir";

    return `${renderLede()}
      <article class="stage">
        <p class="numeral" aria-hidden="true">${pad(question.number)}</p>
        <div>
          <h2 class="kicker">${escapeHtml(question.heading)} · ${question.number} de ${total}</h2>
          <div class="prompt">${formatText(question.prompt)}</div>
          ${options}
          ${draft}
          ${notice}
          <div class="actions">
            <button type="button" class="btn btn-primary" data-act="check" ${
              saved.revealed ? "disabled" : ""
            }>${checkLabel}</button>
            <button type="button" class="btn" data-act="prev" ${state.index === 0 ? "disabled" : ""}>Anterior</button>
            <button type="button" class="btn" data-act="next">${
              state.index === total - 1 ? "Encerrar" : "Próxima"
            }</button>
          </div>
          ${gabarito}
        </div>
      </article>`;
  }

  function renderFlash(card, total) {
    const flipped = state.flipped;
    return `${renderLede()}
      <article class="stage">
        <p class="numeral" aria-hidden="true">${pad(card.number)}</p>
        <div>
          <h2 class="kicker">Flashcard ${card.number} de ${total}</h2>
          <div class="flash-scene">
            <button type="button" class="flash-card${flipped ? " is-flipped" : ""}" data-act="flip" aria-pressed="${
              flipped ? "true" : "false"
            }">
              <span class="flash-face flash-front" ${flipped ? 'aria-hidden="true"' : ""}>
                <span class="flash-side">Frente</span>
                <span class="flash-body">${formatInline(card.front)}</span>
              </span>
              <span class="flash-face flash-back" ${flipped ? "" : 'aria-hidden="true"'}>
                <span class="flash-side">Verso</span>
                <span class="flash-body">${formatInline(card.back)}</span>
              </span>
            </button>
          </div>
          <div class="actions">
            <button type="button" class="btn btn-primary" data-act="flip">Virar</button>
            <button type="button" class="btn" data-act="prev" ${state.index === 0 ? "disabled" : ""}>Anterior</button>
            <button type="button" class="btn" data-act="next" ${
              state.index === total - 1 ? "disabled" : ""
            }>Próxima</button>
          </div>
        </div>
      </article>`;
  }

  function renderSummary() {
    const mod = currentModule();
    const scored = mod.questions.filter((item) => item.kind === "mc" || item.kind === "vf");
    const discursive = mod.questions.filter((item) => item.kind === "discursive");
    const hits = scored.filter((item) => getAnswer(item.id).selected === item.answer && getAnswer(item.id).revealed)
      .length;
    const checked = scored.filter((item) => getAnswer(item.id).revealed).length;
    return `<section class="summary">
      <h1>${escapeHtml(mod.title)}</h1>
      <p>Objetivas: ${hits} de ${scored.length}${checked < scored.length ? ` (${checked} conferidas)` : ""}.</p>
      <p>Discursivas: ${discursive.length} — compare com o gabarito.</p>
      <div class="actions">
        <button type="button" class="btn btn-primary" data-act="restart">Recomeçar</button>
        <button type="button" class="btn" data-act="review">Voltar à primeira</button>
      </div>
    </section>`;
  }

  function bindQuestion(question) {
    els.main.querySelectorAll(".option").forEach((button) => {
      button.addEventListener("click", () => {
        state.notice = "";
        setAnswer(question.id, { selected: button.dataset.key });
        els.main.querySelectorAll(".option").forEach((el) => {
          el.setAttribute("aria-checked", el.dataset.key === button.dataset.key ? "true" : "false");
        });
        const notice = els.main.querySelector("#notice");
        if (notice) notice.remove();
      });
    });
    const draft = els.main.querySelector("#draft");
    if (draft) {
      draft.addEventListener("input", () => {
        setAnswer(question.id, { draft: draft.value });
      });
    }
    bindNav(question);
  }

  function bindFlash() {
    els.main.querySelectorAll("[data-act]").forEach((button) => {
      button.addEventListener("click", () => handleAct(button.dataset.act));
    });
  }

  function bindSummary() {
    els.main.querySelectorAll("[data-act]").forEach((button) => {
      button.addEventListener("click", () => handleAct(button.dataset.act));
    });
  }

  function bindNav(question) {
    els.main.querySelectorAll("[data-act]").forEach((button) => {
      button.addEventListener("click", () => handleAct(button.dataset.act, question));
    });
  }

  function handleAct(act, question) {
    const list = items();
    if (act === "check" && question) {
      const saved = getAnswer(question.id);
      if ((question.kind === "mc" || question.kind === "vf") && !saved.selected) {
        state.notice = "Escolha uma alternativa.";
        render();
        const notice = els.main.querySelector("#notice");
        if (notice) notice.focus();
        return;
      }
      state.notice = "";
      setAnswer(question.id, { revealed: true });
      render();
      const gabarito = els.main.querySelector(".gabarito");
      if (gabarito) gabarito.focus?.();
      return;
    }
    if (act === "flip") {
      state.flipped = !state.flipped;
      persist();
      const card = els.main.querySelector(".flash-card");
      if (card) {
        card.classList.toggle("is-flipped", state.flipped);
        card.setAttribute("aria-pressed", state.flipped ? "true" : "false");
        const front = card.querySelector(".flash-front");
        const back = card.querySelector(".flash-back");
        if (front) front.setAttribute("aria-hidden", state.flipped ? "true" : "false");
        if (back) back.setAttribute("aria-hidden", state.flipped ? "false" : "true");
        return;
      }
      render();
      return;
    }
    if (act === "prev") {
      state.index = Math.max(0, state.index - 1);
      state.flipped = false;
      state.done = false;
      state.notice = "";
      persist();
      render();
      els.main.focus();
      return;
    }
    if (act === "next") {
      if (state.mode === "questions" && state.index === list.length - 1) {
        state.done = true;
        persist();
        render();
        els.main.focus();
        return;
      }
      state.index = Math.min(list.length - 1, state.index + 1);
      state.flipped = false;
      state.notice = "";
      persist();
      render();
      els.main.focus();
      return;
    }
    if (act === "restart") {
      currentModule().questions.forEach((item) => {
        delete state.answers[item.id];
      });
      state.index = 0;
      state.done = false;
      state.notice = "";
      persist();
      render();
      els.main.focus();
      return;
    }
    if (act === "review") {
      state.index = 0;
      state.done = false;
      persist();
      render();
      els.main.focus();
    }
  }

  function onKey(event) {
    const target = event.target;
    const typing =
      target && (target.tagName === "TEXTAREA" || target.tagName === "INPUT");
    if (typing) return;
    if (state.mode === "questions" && !state.done) {
      const question = items()[state.index];
      if (question && (question.kind === "mc" || question.kind === "vf") && !getAnswer(question.id).revealed) {
        const map = { a: "a", b: "b", c: "c", d: "d", e: "e", v: "v", f: "f" };
        const key = event.key.toLowerCase();
        if (map[key] && question.options.some((option) => option.key === map[key])) {
          setAnswer(question.id, { selected: map[key] });
          state.notice = "";
          render();
        }
      }
    }
    if (state.mode === "flashcards" && (event.key === " " || event.key === "Enter")) {
      if (target && target.closest && target.closest("[data-act]")) return;
      event.preventDefault();
      handleAct("flip");
    }
  }
})();
