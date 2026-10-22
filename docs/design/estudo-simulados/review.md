Task and scope: Página estática dark/minimalista para responder as questões e revisar os flashcards dos quatro simulados, sem conteúdo extra de estudo.

Project revision: `/Users/angeloresplandes/Documents/Qualidade de Software/Exercicios` | actor controller | `git -C <project-root> rev-parse --show-toplevel` → `fatal: not a git repository` | source SHA-256: index.html `ddd52bca3dc6b161940d6adb5a1da0e4f9b84b334708a2d7fb60edf15a7ce39f`; styles.css `1d8bb06b55f0a0e0b82055c085e567ec73b5d73f61ad45c7f6f1471a26e88824`; app.js `4abbced07c316d512e69daaf41b7de23485cfe4695739fb7e8ede3331734e88a`; content.js `c0ebc653e7af0f3aaa4b3c368a1ed19750613167dc70d71845a3ff49983a662a`.

Findings:
| id | severity | criterion | observed issue | evidence | repair | status |
| V1 | major | feedback after Conferir | Letter of the right option was almost the same color as mute keys | desktop-checked.png | pass `#B8C992`, fail border on wrong | fixed |
| V2 | major | sticky overlap | After focusing gabarito, the stem hid under the sticky mast (`correta:` leaked) | desktop-checked-r2.png | mast no longer sticky | fixed |
| A1 | minor | heading structure | No h1 on first paint | snapshot before repair | h1 on brand, h2 on kicker | fixed |
| A2 | pending | native keyboard | Tab via browser_press_key left focus on BODY; skip link sits off-screen and was not click-reachable | Runtime.evaluate activeElement BODY | — | pending |
| V3 | minor | 320/zoom | Not captured | — | — | pending |

Checks:
| actor/tool | command/action | actual result | recordedAt | limitation |
| preview.mjs | `node .../preview.mjs <project-root>` | `{url: http://127.0.0.1:56247/, root: project, pid: 57763}` | 2026-10-22T12:00:58Z | session-owned loopback |
| git | `git -C project rev-parse HEAD` | fatal: not a git repository | 2026-10-22T12:01:10Z | hashes used instead |
| browser_take_screenshot | 1440x900 dpr 1 requested | PNG 3824×2160 | 2026-10-22T12:02:00Z | dimension mismatch; one alternate used |
| Page.captureScreenshot | 1440×900 / 390×844 dpr 1 | matching encoded dimensions | see evidence.json capturedAt | documented alternate after screenshot API mismatch |
| click b then Conferir | Módulo 1 Q1 | gabarito `b`; radios disabled | 2026-10-22T12:03:18Z | |
| click Flashcards then Virar | M1 F1 | verso IEEE chain visible | 2026-10-22T12:03:47Z | |
| click Conferir with no choice | Módulo 2 Q1 | role=alert “Escolha uma alternativa.” | 2026-10-22T12:05:30Z | |
| computed contrast | Runtime.evaluate getComputedStyle | bone 12.13, mute 6.00, brass 7.80, pass 10.26 against ink | 2026-10-22T12:06:49Z | solid backgrounds only |
| browser_press_key Tab | DOM key event | activeElement remained BODY | 2026-10-22T12:08:18Z | not native keyboard evidence |

Preview: `node /Users/angeloresplandes/.cursor/plugins/local/design/scripts/preview.mjs <project-root>` | root `/Users/angeloresplandes/Documents/Qualidade de Software/Exercicios` | URL `http://127.0.0.1:56247/` | PID 57763 | owner this session.

Capture calibration: requested 1440×900 and 390×844, dpr 1. browser_take_screenshot measured 3824×2160. Alternate Page.captureScreenshot matched 1440×900 and 390×844. Images inspected without patching.

Keyboard calibration: native action not obtained. Observable change absent after Tab. One alternative (skip-link click) failed because the target is off-screen. Limitation recorded; check pending.

Timing: Conferir, Virar, module switch and empty-selection alert were observed in the live DOM without timer patching. Transient loading does not exist (local content).

Repair rounds: 1) pass color + headings + meta-count removal. 2) unstick header after overlap. Budget exhausted.

Remaining issues: native keyboard pending; 320/zoom pending; flash captures slightly predating the mast CSS change.
