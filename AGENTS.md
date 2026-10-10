# AGENTS.md

## Project summary

This repo is a Docusaurus site for MBA notes and revision material. Published content lives in `docs/` (organized by quarter/subject/session), UI shell lives in `src/`, and deployment runs via GitHub Actions to GitHub Pages.

## Build / run / test

- Install deps: `npm install`
- Run local dev server: `npm run start`
- Build production site: `npm run build`
- Serve built output: `npm run serve`
- Test/lint: no dedicated `test` or `lint` scripts are currently defined in `package.json`

## Key conventions

- Keep docs structure aligned with sidebar autogeneration (`sidebars.js` uses filesystem-based docs navigation).
- Use Docusaurus frontmatter (`title`, `sidebar_position`) consistently in session docs.
- Preserve quarter-first organization (`docs/q5/*`, `docs/q6/*`) unless intentionally redesigning nav.
- Keep transcript/source artifacts local-only unless explicitly approved for tracking.
- After content or routing changes, run `npm run build` to catch MDX/link issues early.
- Follow existing note style: clear, practical, transcript-grounded explanations with stable section patterns.

## Mandatory startup rule

Before starting any task, read docs/ai-context/PROJECT_OVERVIEW.md, DECISIONS.md, GOTCHAS.md and OPEN_TASKS.md.
