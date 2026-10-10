---
name: transcript-to-reading-material
description: >
  Converts raw MBA class transcripts into exam-ready reading material in this repo's style
  (story-first session notes, a protagonist story page, an exam guide, and index wiring).
  Use whenever the user shares a lecture transcript and asks for session notes, reading
  material, revision notes, or study docs.
---

# Transcript → Reading Material (MBA Docs)

> **How to update this skill:** every section marked `✏️ EDIT HERE` is safe to change as your
> style evolves. The rest is background. Keep it short and scannable.

---

## 1. What this skill produces

Claude's proven pattern in this repo turns one subject's transcripts into **four artifacts**:

| # | Artifact | Path example | Purpose |
|---|----------|--------------|---------|
| 1 | **Session notes** (one per class) | `docs/q6/EGS/session-01.md` | Main reading material |
| 2 | **Protagonist story** (one per subject) | `docs/q6/EGS/the-aarav-story.md` | One narrative that embeds every concept for memory |
| 3 | **Exam guide** (one per subject) | `docs/q6/EGS/exam-guide.md` | Single night-before revision doc |
| 4 | **Index + wiring** | `docs/q6/EGS/index.md`, `_category_.json` | Sessions table, links to story + exam guide |

Reference real examples before writing: `docs/q6/pdm/*`, `docs/q6/fai/*`, `docs/q6/EGS/*`.

---

## 2. Golden rules (non-negotiable) ✏️ EDIT HERE

1. **Transcript-first.** Primary source is the transcript. Use outside knowledge only to clarify, never to invent what the professor "said."
2. **Keep transcripts local.** Raw transcript files (e.g. `*_SESSION_*.txt`) are institute-owned. Do not commit/push them. (See `docs/ai-context/DECISIONS.md` #6.)
3. **Simple MBA-student voice.** Clear, natural, conversational. No AI-textbook fluff. No jargon without an instant plain-English gloss.
4. **Exam utility first.** Surface what helps answer the quiz/end-term, not academic completeness.
5. **Faithful to what was taught.** If transcript order differs from the syllabus, follow the transcript and flag the mismatch rather than inventing continuity.
6. **Build after each batch.** Run `npm run build` to catch MDX/link errors early.

---

## 3. Session note template ✏️ EDIT HERE

Copy this skeleton for every `session-NN.md`:

```md
---
sidebar_position: <N+1>
title: "Session <N>: <Story-style hook title>"
---

# Session <N>: <Story-style hook title>

*<Italic one-line subtitle framing the big insight>*

---

:::info[Priority Map — What to Focus On]
**Must know (exam-critical):** <frameworks/definitions most likely tested>

**Important (supporting):** <supporting concepts>

**Context (background/color):** <stories/examples that add flavour>
:::

## Setting the Stage
<Who teaches, what the session is about, course arc table if session 1.>

## <Concept Block 1 — a vivid heading, not "Topic 1">
<Concept → class example → why it matters.>

> **Professor <Name>:** "<high-signal verbatim-ish quote>"

:::danger[Must Know — Exam Critical]
<The core framework, stated exam-ready.>
:::

:::tip[Important]
<Supporting point worth full marks.>
:::

:::note[Good to Know]
<Background colour / memorable anecdote.>
:::

:::tip[Memory Hook — "<short mnemonic>"]
<One-line recall aid. Only when it genuinely helps.>
:::

## Key Terms Table (Quick Revision)

| Term | One-line meaning |
|---|---|
| ... | ... |

## The Recipe Chain (Where this session sits)
<One or two lines linking previous → this → next session.>
```

**Callout vocabulary (use exactly these):**
`:::info[Priority Map …]`, `:::danger[Must Know — Exam Critical]`, `:::tip[Important]`,
`:::note[Good to Know]`, `:::tip[Memory Hook — "…"]`.

---

## 4. Conversion workflow (step by step)

**Step 1 — Mine the transcript.** Pull out: the session thesis; every framework/model; every case/example; student questions that sharpened a concept; 3–6 quotable professor lines. Drop greetings, attendance, timestamps, and transcription noise.

**Step 2 — Build the spine.** Draft a quick outline: thesis → 4–8 concept blocks → example mapped to each → exam-useful definitions/formulas.

**Step 3 — Write story-first.** For each block: open with a relatable scene or analogy, then the concept, then why it matters for business/exam. Short paragraphs (3–4 lines). Tables for any comparison or framework.

**Step 4 — Layer the exam signal.** Add the Priority Map, at least one `Must Know — Exam Critical` callout, inline importance tags, a Key Terms table, and memory hooks where useful.

**Step 5 — Stay faithful.** Where the transcript is unclear, keep wording careful and keep the practical meaning; don't over-claim.

**Step 6 — QA + build.** Run the checklist in §7, then `npm run build`.

---

## 5. The protagonist story page ✏️ EDIT HERE

One `the-<name>-story.md` per subject (examples: Aarav/EGS, Aanya/ACF, Devika/CSS).

- **One protagonist** the student relates to (similar age/background, facing a real challenge).
- **One chapter per session**, in order — each chapter's challenge naturally introduces that session's concepts, shows failure then success.
- **End with a concept → story map:** "When you see [concept] in the exam, remember when [protagonist] [situation]."
- Goal: emotional, memorable, every major concept appears naturally.

---

## 6. Exam guide + index wiring ✏️ EDIT HERE

**`exam-guide.md`** (one per subject) typically contains:
exam format table → whole-course-in-one-page table → session-by-session rapid recall →
"frameworks you can draw from memory" (ASCII diagrams) → cases cheat-sheet → last-night checklist.

**`index.md`** (one per subject): overview blurb, a **Sessions table** linking each `session-NN`,
plus links to the story page and the exam guide. Add a `_category_.json` for the folder label.
Sidebar is autogenerated, so file names/positions drive nav — update the homepage (`src/pages/index.js`)
and `docs/index.md` if you add a subject.

---

## 7. QA checklist (run before "done") ✏️ EDIT HERE

1. Frontmatter present and valid (`sidebar_position`, quoted `title`).
2. Title + callout style consistent with sibling sessions.
3. Every concept traces back to the transcript; nothing fabricated.
4. No AI-generic phrasing; reads like a sharp MBA student wrote it.
5. Tables and callouts render (no stray `<`, `>`, `$`, unescaped braces — common MDX breakers).
6. Links to story/exam guide/sessions resolve.
7. `npm run build` passes.
8. No raw transcript file staged for commit.

---

## 8. What "good" looks like

A finished session note lets a student:
1. skim it in 8–12 minutes,
2. spot exam-critical frameworks in under a minute,
3. recall one concrete example per concept,
4. write a natural, full-marks MBA answer from memory.

---

## 9. Reusable prompt (paste for a new transcript)

> Convert this transcript into `docs/<quarter>/<subject>/session-<NN>.md` in the repo's
> transcript-to-reading style: story-first, transcript-faithful, exam-oriented. Include a
> Priority Map, `Must Know — Exam Critical` callouts, professor quotes, practical class examples,
> memory hooks, a Key Terms table, and a Recipe Chain line. Use simple MBA-student language, not
> AI-textbook language. Keep the raw transcript file local (do not commit it). Then run `npm run build`.
