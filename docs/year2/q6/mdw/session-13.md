---
sidebar_position: 14
title: "Session 13: The Leaky Bucket — How Hubble Learned to Grow Profitably"
---

# Session 13: The Leaky Bucket — How Hubble Learned to Grow Profitably

*Why "growth" and "profitable growth" are two very different goals — and how one ratio, LTV/CAC, tells a D2C contact-lens startup whether it is building a business or just running on a treadmill*

---

:::info[Priority Map — What to Focus On]
**Must know (exam-critical):** The goal is **profitable growth**, not growth. The master metric is **LTV/CAC** (healthy ≈ 3). Know the **LTV formula** and how to compute it for Hubble (answer ≈ 1.86). Know the **real decision criterion**: does your LTV/CAC ratio improve *over time*?

**Important (supporting):** How retention lifts LTV (churn 4% → 3%); how brand marketing lowers CAC; why expansion/scaling must wait until the ratio is healthy; the "leaky bucket" diagnosis.

**Context (background/color):** The Hubble case facts, the eyewear-vs-new-lens expansion debate, optometrist/grocery distribution, cohort/heterogeneity caveat on LTV.
:::

## Picking Up From Last Time

In the brand-marketing and performance-marketing sessions we learned two things: a brand matures in stages (acquire and fine-tune → build credibility → scale), and performance marketing has **three** jobs — **attraction, conversion, retention**. This session puts all of it to work on a single messy, real decision.

This was also the professor's **last class** of Module 1, so he used one case to tie the whole course together: how do you *grow without going broke*?

> **Professor:** "All this case is a context for communicating the principles of how to grow profitably."

---

## The Case: Hubble Contact Lenses

Hubble is a data-driven **D2C** brand selling daily disposable contact lenses. The case is set in **April 2018**, 18 months after launch by founders Jesse and Ben, with ~USD 60M raised and ~USD 20M in annual sales.

The hook is price. Competitors (J&J, Alcon, CooperVision, Bausch — ~70% of a USD 4B market) charge about USD 1 per lens. Hubble sells at **USD 1 per day = 50 cents per lens** — half the price. That is the entire value proposition: cheapest product, colourful Instagrammable packaging.

| Hubble fact | Number |
|---|---|
| Subscription | USD 33 per box of 30 lenses + USD 3 shipping |
| First box | **Free** → ~90% then subscribe |
| Gross margin | ~40% (industry norm ~80%) |
| NPS / satisfaction | ~60 / ~60% |
| Monthly churn | ~4% |
| Average subscription | ~8 months out of 12 |
| Ad spend | Started 95% on Facebook, later Google, Instagram, Snapchat, podcasts, TV |

How do they stay cheap? They cut out every intermediary, kept **one** medium-quality lens type (economies of scale), and sell direct. The flip side: product quality is *medium*, not premium, and almost nobody knows the brand.

---

## Step 1 — Nail the Goal Before Touching Any Decision

Hubble faces three decisions: how to split **ad spend vs loyalty spend** (acquisition vs retention), **brand vs performance** marketing (TV vs social), and whether/how to **expand** (new product, retail distribution, geography).

The class first asked: if they get these right, what happens? Retention rises → revenue rises (**growth**) and margins rise (**profitability**). Put those two words together and you get the session's whole point.

> **Professor:** "If the goal was just growth, it wasn't that difficult. Whichever gets you more customers... do it. But the goal is not just growth. The goal is growing profitably."

:::danger[Must Know — Exam Critical]
The goal is **profitable growth** = growth *and* profitability, together. Every decision in this case is judged against that single goal. Growth alone is easy and dangerous; the discipline is making growth *pay for itself*.
:::

---

## Step 2 — The Master Metric: LTV/CAC

To judge the acquisition-vs-retention balance, you need one number that captures both sides:

- **CAC (Customer Acquisition Cost)** — total acquisition spend ÷ customers acquired. The **efficiency of acquisition**.
- **LTV (Lifetime Value)** — the total profit a customer gives you over their whole life with you. The **effectiveness of retention**.

Divide one by the other and you get a profitability compass:

| LTV/CAC | What it means |
|---|---|
| ≈ 1 | Treadmill — the customer barely returns what you paid to get them |
| 1 – 2 | Positive but **vulnerable** — one shock (CAC up or retention down) drops you back to 1 |
| 2 – 3+ | **Healthy** — room to absorb shocks and scale |

> **Professor:** "If it is around one... you are at the same place where you are, you are just running on a treadmill."

:::tip[Memory Hook — "Three to be free"]
LTV/CAC around **3** is the comfort zone. Below ~2 you are not profitable, you are *fragile*.
:::

---

## Step 3 — Actually Compute It for Hubble

This is the part exams love, because every number is in the case.

**Lifetime (in months).** Churn follows a geometric distribution, so lifetime = **1 ÷ churn rate** = 1 ÷ 0.04 = **25 months**. (A customer stays ~25 months on average; if you *stopped* acquiring, you'd be at zero customers in 25 months.)

**Monthly margin.** Margin per box = USD 33 × 40% = USD 13.2. But customers buy only **8 boxes a year**, so monthly margin = 13.2 × (8 ÷ 12) ≈ **USD 8.8**.

**Unadjusted LTV** = 8.8 × 25 ≈ **USD 220**.

**Adjust for the free box.** Only 90% convert, and the free box costs money (lens cost ~USD 13, offset by ~USD 1.2 shipping margin):

- 220 × 0.90 ≈ 198
- 198 − (13 − 1.2) ≈ 198 − 11.8 ≈ **USD 186.2** (adjusted LTV)

**CAC** is given in the exhibits: **USD 100**.

So **LTV/CAC = 186.2 ÷ 100 ≈ 1.86**.

:::danger[Must Know — Exam Critical]
**LTV = monthly margin × lifetime**, where **lifetime = 1 ÷ churn rate**. For Hubble: lifetime 25 months, monthly margin ≈ USD 8.8, adjusted LTV ≈ USD 186, CAC = USD 100, so **LTV/CAC ≈ 1.86** — positive but *not* healthy.
:::

:::note[Good to Know]
The professor flagged a caveat: averaging one LTV across all customers hides **heterogeneity**. Real bases split into heavy (~2–5%), moderate (~10–15%) and light (~70–80%) users, whose LTVs differ wildly — you should segment into cohorts and compute LTV per cohort. Retaining a *heavy* cohort lifts LTV far more than retaining a light one. He kept it as a single average here only to teach the mechanics simply.
:::

---

## Step 4 — The Real Criterion Is the *Slope*, Not the Number

A ratio of 1.86 is a snapshot. The sharper question: if Hubble changes **nothing**, where does the line go?

- **CAC** keeps *rising* — Exhibit 8 shows performance-marketing fatigue; every extra ad costs more per new customer.
- **LTV** keeps *falling* — the heaviest, most price-sensitive early adopters get used up, and high churn keeps leaking the base.

So "do nothing" walks the ratio **down** past 1 — the treadmill, then a loss. That reframes the whole decision rule.

> **Professor:** "Whatever decision that you take, your LTV/CAC ratio should improve over time. If that is happening, then you are growing profitably."

:::danger[Must Know — Exam Critical]
**Profitable growth is a time-dependent goal, not a static one.** The test for any decision is not "is the ratio good today?" but "does this decision push the LTV/CAC ratio *upward over time*?" You may accept a short-term dip if there is a clear path back up.
:::

---

## Step 5 — The Two Easy Fixes (Retention, Then Brand)

**Fix 1 — Retention lifts LTV.** Drop churn from 4% to **3%** and lifetime jumps from 25 → **33 months**. Rework the maths: LTV ≈ 8.8 × 33 ≈ 290, adjusted ≈ **250**, so **LTV/CAC ≈ 2.5** (≈ 2.2–2.3 after retention costs). A *one-point* churn improvement moved Hubble from fragile to healthy.

**Fix 2 — Brand marketing lowers CAC.** Hubble spends ~95% on performance and only ~5–6% on brand. Push brand to ~20% and performance marketing gets more efficient — CAC falls and the ratio climbs toward **3**.

> **Professor:** "As your brand marketing improves, your performance marketing efficiency also improves — your customer acquisition cost goes down."

:::tip[Important]
Both fixes are **cheap and fast** (months, not years): loyalty programs, well-timed emails and nudges, tenure incentives for retention; a modest brand budget to make performance ads convert better. Together they take Hubble from **1.86 → ~3** without changing the business model.
:::

---

## Step 6 — Why Expansion Must Wait

The class pushed hard for growth *now*: launch eyewear, add premium/speciality lenses, stock optometrists and grocery chains, open own stores, go to new geographies. The professor's answer was a sequencing lesson.

Every one of those is **scaling**, and scaling *always* dents profitability short-term: a new channel means **sharing your margin** (LTV down) and convincing new buyers (CAC up). With no brand, there is **no pull** — sitting on an optometrist's shelf as an unknown, medium-quality product just blocks inventory or forces deeper discounts. As the professor put it, Hubble lacks the deep pockets of established players, so it *cannot* afford to cut margins further and win a shelf war.

And premium/eyewear ideas contradict Hubble's identity: it is a **volume, cost-conscious** player, not a value/premium one. Chasing high-margin lenses would mean changing the whole business model.

:::tip[Important]
Get the ratio to ~3 **first** (retention + brand). *Then* you have the margin headroom to absorb the hit from expansion and still trend upward. Expand before fixing the ratio and you accelerate the slide, not the growth.
:::

### The Expansion Options, Side by Side

The class debated four scaling routes. Judge each by the same slope test — does it move LTV/CAC *up over time*?

| Option | Class argument *for* | Professor's caution |
|---|---|---|
| **New product — eyewear** | One-time sale, cheaper CAC, easy to retail | One-time revenue vs 25-month subscription; no brand, so you must re-acquire buyers separately — CAC rises |
| **New product — premium/speciality lenses** | Higher margin, builds trust, "own the category" | Contradicts the volume/cost-conscious model; chasing premium means rebuilding the whole business |
| **Retail — optometrists / grocery** | Trust, credibility, where the volume is | No brand pull yet; sharing margins kills LTV; you'd pay channels *more* than rivals just to be stocked |
| **Own stores / geography** | Control, presence | Pointless with a single product and no assortment; pure cost until the ratio is healthy |

:::note[Good to Know]
One student (Manish) offered a neat margin lever that *keeps* the digital model: project the subscription as "**4 weeks**" and ship **28 lenses** instead of 30. Customers barely notice, but over a year you sell **13 boxes instead of 12** — higher consumption, higher monthly margin, higher LTV, no model change. A small, creative way to nudge the ratio up.
:::

:::note[Good to Know]
Lurking under the whole case is Hubble's **media attribution problem** — multiple channels (Facebook, Google, Snapchat, TV...) all touch a customer, and they can't cleanly credit which one earned the sale. Because TV isn't neatly measurable, they avoided it — the same measurement fixation that starved their brand spend.
:::

---

## The Diagnosis: A Leaky Bucket

Why is Hubble stuck at 1.86? Two fundamental, fixable mistakes.

1. **They only did attraction and conversion — never retention.** Two years in, no loyalty program, no email marketing, nothing to keep subscribers.
2. **They were fixated on measurement.** Because they couldn't neatly attribute TV the way they attribute a Facebook click, they under-invested in brand — missing that brand *feeds* performance marketing.

> **Professor:** "Their bucket is a leaky bucket. They're filling the bucket again and again and again, but it is leaking — and they've done nothing about it."

Note: the model itself **works** — a 90% free-box conversion and 25-month lifetime prove the product and offer are fine. It just needs fine-tuning, not reinvention.

:::tip[Memory Hook — "Plug the leak before you widen the tap"]
Fix retention and brand (plug the leak) before pouring more money into acquisition or new channels (widening the tap). Otherwise you just leak faster.
:::

---

## Recipe Chain

**Session 13 turns the course's frameworks into one decision rule.** Earlier sessions taught the digital value shift, personas, brand stages (acquire → credibility → scale) and performance marketing's three jobs (attraction, conversion, **retention**). This session asks the CEO's question — *how do we grow without bleeding money?* — and answers it with **LTV/CAC over time**: diagnose the ratio, fix retention and brand first (the easy, fast levers), and only then scale into new products, channels and geographies.

**Next session:** the professor promised to continue into **retention strategies** — how to actually plug the leak (loyalty, email, nudges, tenure incentives) in the final Module 1 class.

---

## Key Terms to Remember

| Term | One-Line Definition |
|---|---|
| **Profitable growth** | Growing revenue *and* margin together — the real goal, not growth alone |
| **LTV (Lifetime Value)** | Total profit from a customer over their life with you; measures retention effectiveness |
| **CAC (Customer Acquisition Cost)** | Acquisition spend ÷ customers acquired; measures acquisition efficiency |
| **LTV/CAC ratio** | Profitability compass; ≈1 treadmill, 1–2 fragile, ~3 healthy |
| **Lifetime = 1 ÷ churn rate** | Converts monthly churn into expected months a customer stays (geometric distribution) |
| **Monthly margin** | Per-box margin × actual purchase frequency (Hubble: 13.2 × 8/12 ≈ 8.8) |
| **The slope criterion** | Judge a decision by whether LTV/CAC *improves over time*, not by today's snapshot |
| **Leaky bucket** | Pouring spend into acquisition while ignoring retention — the core Hubble mistake |
| **Brand → performance link** | Brand marketing raises performance-marketing efficiency and lowers CAC |
| **Scaling cost** | Expansion (product/retail/geography) dips profitability short-term; needs ratio headroom first |

---

## The Real-World Takeaway

Imagine you run Hubble and the board wants a growth plan by Friday. The tempting answer is a long list: launch eyewear, add premium lenses, flood the optometrist chains, enter Europe. Every one of those *looks* like growth. Every one of them, done now, would quietly push the company toward a loss — because you'd be sharing margins and buying unfamiliar customers while your existing bucket is still leaking out the bottom at 4% a month.

The discipline this session teaches is to resist the list and look at one line on a chart: the LTV/CAC ratio, and which way it is heading. At 1.86, Hubble isn't a failing business — it's an un-tuned one. The product works, the offer converts at 90%, customers stay two years. What's missing is the unglamorous back half of marketing: keeping the people you already paid to win, and building enough brand that your ads convert cheaper. Fix those two things — months of work, not years — and the ratio climbs to 3. *Then* the growth list becomes safe, because you finally have the margin to pay for it.

**Growth that lowers your LTV/CAC isn't success — it's a faster treadmill. Plug the leak, earn the headroom, then scale.**
