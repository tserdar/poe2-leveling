# CLAUDE.md

Static PoE2 campaign tracker. Plain HTML/CSS/JS, no build step, deployed with GitHub Pages.
Forked from domistae/poe2-leveling (MIT) — keep the attribution in the footer, README and LICENSE.

- `data.js` — all route content (`window.ROUTE`, `window.TIPS`). Syntax documented at the top of the file.
- `app.js` — parses `data.js`, renders, stores state in localStorage key `poe2route:v1`.
- `style.css` — color tokens on `:root`, light theme via `[data-theme="light"]` / `prefers-color-scheme`.

Writing style for steps: terse, no filler. "WP next to Mud Burrow", not "A waypoint sits right next to Mud Burrow".
Don't copy text verbatim from the upstream guide.

## Writing rules

- Sentence case: every step, tip and reward starts with a capital. In-game names keep their in-game capitals (The Hooded One, Uncut Skill Gem, Artificer's Orb, Cold Res, Spirit).
- Generic things stay lowercase: chest, altar, corpse, rare belt, gold chests.
- No trailing periods. Join two clauses with `;`. Questions keep `?`.
- Symbols: `→` then/leads to · `·` or / list · `+` together with · `×2` repeat · `–` ranges · `~` about.
- Abbreviations: WP, XP, AoE, Lvl 28 (character/zone level), Lv5 (gem level), 1st char only. Compass in caps: (N), (SE).
- Boss kills start with "Kill" (or "Zone: kill X").
