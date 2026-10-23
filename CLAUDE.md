# CLAUDE.md

Static PoE2 campaign tracker. Plain HTML/CSS/JS, no build step, deployed with GitHub Pages.
Forked from domistae/poe2-leveling (MIT) — keep the attribution in the footer, README and LICENSE.

- `data.js` — all route content (`window.ROUTE`, `window.TIPS`). Syntax documented at the top of the file.
- `app.js` — parses `data.js`, renders, stores state in localStorage key `poe2route:v1`.
- `style.css` — color tokens on `:root`, light theme via `[data-theme="light"]` / `prefers-color-scheme`.

Writing style for steps: terse, no filler. "WP next to Mud Burrow", not "A waypoint sits right next to Mud Burrow".
Don't copy text verbatim from the upstream guide.
