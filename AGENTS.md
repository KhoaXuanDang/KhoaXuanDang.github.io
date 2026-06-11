# AGENTS.md

## Cursor Cloud specific instructions

This repo is a single-page **React 18 + TypeScript + Vite** portfolio website (no backend, no database, no tests). Tailwind CSS for styling, Framer Motion for animations. Standard scripts are defined in `package.json`.

### Services / commands
- **Dev server:** `npm run dev` (Vite, serves on `http://localhost:5173`). Use `npm run dev -- --host` to expose it on all interfaces. This is the command to use for development.
- **Build / typecheck:** `npm run build` runs `tsc` (typecheck) then `vite build`. There is no separate `lint` or `test` script, so `npm run build` is the de-facto correctness check.
- **Preview production build:** `npm run preview`.

### Notes / gotchas
- The `Projects` section calls the public GitHub API at runtime to list repos. Unauthenticated requests are rate-limited (60/hour); if projects fail to load in the browser it is usually a rate-limit/network issue, not a code bug.
- `npm run deploy` publishes to GitHub Pages via `gh-pages`. Do NOT run it during normal development.
