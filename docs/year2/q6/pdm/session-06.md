---
sidebar_position: 7
title: "Session 6: Letting Data Decide — A/B Testing, Concept Cards, and the LendenClub Case"
---

# Session 6: Letting Data Decide — A/B Testing, Concept Cards, and the LendenClub Case

*How a P2P lender learned to trust a paired t-test over gut instinct — and why a maid borrowing for her child's school fees turned out to be the most bankable customer nobody was serving*

---

:::info[Priority Map — What to Focus On]
**Must know (exam-critical):** The before-after-with-control (difference-in-differences) design and how A/B testing is a manifestation of it; how to analyse A/B / concept-test data with a **paired t-test** and read the p-value.

**Important (supporting):** Concept-card testing on the four dimensions (relevance, believability, differentiation, likability); the feature-categorisation grid (Antes, Drivers, Fool's Gold, Neutral); the LendenClub lender/borrower personas and "jobs to be done."

**Context (background/color):** The six experimental designs, conjoint analysis, the "70% of new products fail" caveat and self-report bias.
:::

## Where This Session Sits

By now the course has moved from *what a product manager does* (Sessions 1–2, redBus) through *positioning* (Session 3, Zenatix) and into **new product development**. Once you have decided *who* you are building for and *how* you are different, a hard question remains: **which features, and how much of each, should actually go into the product?** Guessing is expensive. This session is about answering that question with data, using experimental research and A/B testing, worked through the **LendenClub** case.

> **Professor Banerjee:** "We don't do based on our gut feel. We collect data and see how it works."

---

## Experimental Research: Measuring Cause and Effect

We are always, in a sense, guessing what the customer will want. The customer states many things, but cannot always anticipate the situations they will face while using the product. And if we simply built the technically "best" product, the price would be too high and the customer would walk away.

> **Professor Banerjee:** "A consumer may say: give me the most powerful car, maximum fuel efficiency, very stylish, very comfortable, very safe — but the price I'm willing to pay is only about five lakh rupees. Now this becomes a little bit of wishful thinking."

So we run **experimental research** — the manipulation of one or more variables to measure their effect on other variables. It lets us quantify how much a feature is worth to the customer, which in turn lets the team communicate value precisely ("this is worth so much more than that").

| Term | Meaning |
|------|---------|
| **Independent variable** | The product characteristic or feature we experiment with (the *cause*) |
| **Dependent variable** | Consumer liking, willingness to pay, or purchase / adoption (the *effect*) |
| **Treatment group** | Sample exposed to the change in the independent variable |
| **Control group** | Baseline where the independent variable is unchanged — the benchmark |

The logic is simple: if the baseline product is liked at 68 on a 0–100 scale, and changing one feature lifts liking to 86, the **18-point gap** is the value of that feature change to the target customer. Other variables are held constant through **randomization or matching**.

### The Six Basic Designs

The professor used four shorthand symbols — **MB** (measurement before), **MA** (measurement after), **X** (the treatment), and **R** (random selection) — to lay out six designs:

| Design | Structure | When Used |
|--------|-----------|-----------|
| **After-only** | X → MA | Completely new products (no "before" exists) |
| **Before-after** | MB → X → MA | Simple change measurement |
| **Before-after with control** | R1: MB1 → X → MA1; R2: MB2 → MA2 | The workhorse — isolates the treatment effect |
| **Simulated before-after** | Approximates a "before" | When a true baseline is unavailable |
| **After-only with control** | Two groups, measured only after | New products with a comparison group |
| **Solomon four-group** | Combines before-after-with-control and after-only-with-control | Most rigorous, but needs a much larger sample |

---

## Difference-in-Differences: The Heart of the Method

:::danger[Must Know — Exam Critical]
The **before-after-with-control design** works by *difference-in-differences (DID)*. You measure the change in the **treatment** group *and* the change in the **control** group, then subtract. What is left after removing the control's change is the pure effect of the treatment. **A/B testing is a direct manifestation of this design** — and it is the one used in the LendenClub case.
:::

The professor made it concrete with a hypertension drug — a "brick-and-mortar" example before turning to apps.

Suppose a new blue pill is meant to reduce systolic blood pressure:

- **Treatment group (R1):** initial mean BP (MB1) = 170; after three days on the real pill, MA1 = 130. Drop = **40**. But some of that drop could come from other things patients did.
- **Control group (R2):** given an identical-looking blue pill with no active ingredient — a **placebo**. MB2 = 168, MA2 = 160. Drop = **8**, attributable to "all other reasons."

> **Professor Banerjee:** "The drop in blood pressure due to the medication is 40 minus 8, which is 32. The new product brings down systolic blood pressure by 32."

That subtraction — 40 minus 8 — *is* the difference-in-differences. Now swap the placebo for a **competing product**, and the same arithmetic tells you whether your product beats the alternative. As the professor put it: "They act as controls for each other. This is the concept behind A/B testing — option A versus option B."

---

## A/B Testing in Product Design

A short class video reinforced the idea. A/B testing (or **split testing**) sends two versions of a design to different users to see which meets a goal better. Google famously tested **40 shades of blue** to find the link colour that earned the most clicks.

The video's running example: a **meditation app** whose goal is to lift conversion from the free tier to the paid tier. To do that you might test the **call-to-action button** — its colour, shape, placement, or copy ("Add to cart" vs "Buy now"). But you test *one* element at a time, against a measured baseline, and you keep the goal single. A/B testing thrives precisely when you are hunting **small changes to optimise an existing solution**, not reinventing the product.

Key discipline from the video and discussion:

- **Change one thing at a time.** Testing a call-to-action button? Vary colour *or* shape *or* placement — not all at once. The moment you introduce more than one variable it stops being an A/B test and becomes a **multivariate test**.
- **Gather baseline data first** so you have a benchmark.
- **Randomly assign** visitors to control or experimental groups.
- **Check for statistical significance**, then iterate — keep testing.
- A **25% success rate is very good**; expect around **10%** on average. You will not transform conversion on the first test.
- A/B testing tells you *which* wins, not *why*. To understand the "why," supplement it with **moderated or unmoderated user sessions** — the qualitative layer.

---

## The LendenClub Case: Seeing the Customer Before Seeing the Data

**LenDenClub (LDC)** is an RBI-regulated **peer-to-peer (P2P) lending** platform run by Innofin Solutions, founded in 2014 by Bhavin Patel. It matches individual **lenders** with individual **borrowers** — no bank in the middle — on unsecured loans. India's P2P industry gained legitimacy after the RBI brought it under regulation in 2015 and was projected to grow toward US$10 billion by 2025. LDC had earned the industry's lowest default rate (about **3.95%**) and disburses roughly one loan a minute.

A few facts anchor the scale of the challenge. LDC grew to around **1.5 million registered borrowers and 450,000 lenders**, processing 25,000–30,000 loan applications and disbursing 12,000–15,000 loans a month. Its average loan ticket was about **₹30,000**. The RBI capped a single P2P loan at ₹50,000, a borrower's aggregate borrowing at ₹1 million, and a lender's exposure at ₹5 million across all platforms — and required firms to disclose borrower details, credit methodology, and non-performing-asset percentages. Within these guardrails, LDC set out to serve a segment almost everyone else avoided.

Before touching the spreadsheet, the professor insisted the class **visualise the two customers** — because a P2P platform has two of them.

### The Lender

Students built the profile through discussion. Lenders are not necessarily HNIs; they can be ordinary people with some disposable income who want a better, *consistent* return than a fixed deposit — typically **24%–35% per annum** (2–3% per month), higher than an FD but not so high that default risk explodes.

> **Professor Banerjee:** "As a lender, would you like to make money faster, or make money consistently over a period of time?" — "Consistently."

### The Borrower — and a Persona Worth Remembering

:::tip[Important]
The professor spent most of the case coaxing the class toward a single, vivid **persona** — a demonstration of "jobs to be done" thinking. The borrower is someone a bank will not touch: no salary slip, no CIBIL score, variable cash income. The class narrowed it down from "Gen Z" and "students" to **vegetable sellers, small self-employed workers, and finally household help — a maid.**
:::

The professor stitched the pieces together into a story: a woman in her mid-30s, not highly educated, working as a maid across several houses. Her husband works hard but the household income is not enough. She owns a smartphone. In June she takes a small **educational loan** — ₹5,000 to ₹20,000 — because she wants her child in a slightly better school, or a good tuition class before Class 10, or simply better clothes before Diwali so the child feels confident.

Will she default? The class answered in unison: no.

> **Professor Banerjee:** "One of the best segments to finance is a mother borrowing for her child. The mother will not run away, will not default. In financial terms we call her a subprime customer because she has no credit history — but she is a very solid person. She'll work two houses more, take stitching jobs, generate ₹3,000 extra, and repay a loan of ₹15,000–20,000. The default rates are very low."

The case data backs the intuition: this low-salaried segment (monthly income around ₹12,000, average loan request ~₹8,500, max ₹20,000) represented loan demand worth about ₹1.38 billion, was mostly first-time borrowers who used cash, and — tellingly — had **12% more women than men** needing emergency loans.

### The Business Tension

Serving this segment is genuinely risky and thin-margin: no credit history, tiny loans, high cost to serve. LDC's answer rests on three keys and one hard economic fact:

- **Keys to success:** give small loans to *more* borrowers, while holding the **lowest default rate** — enabled by an internal credit-risk **algorithm** (it fetches the borrower's bank transaction data, with authorisation, to estimate repayment capacity).
- **The economic fact:** customer acquisition cost is high, so LDC only turns a profit when a customer **borrows a second time and onward**. Therefore **repeat business and retention** are everything — which is exactly why the product concept had to be tested carefully.

---

## Step 1 — Concept-Card Testing: Kwik Money vs InstaMoney

LDC prepared two competing **concept cards** — **Kwik Money** and **InstaMoney** (the professor referred to them aloud as "Quick Money" and "Insta Money") — for essentially the same product, differing in the onboarding experience:

| | **Kwik Money** | **InstaMoney** |
|---|---|---|
| **Verification** | Physical: an agent visits the borrower's home for KYC | Fully online and automated |
| **Disbursement time** | ~2 days | Under 2 hours (as little as 10 minutes) |
| **Emphasis** | Trust, credibility, LDC's legitimacy as a regulated business | Hassle-free, no physical documents, authorised auto-fetch of bank data |
| **Pain point addressed** | Banks' failure to approve loans for low-salary earners | Same — plus speed and convenience |

A student, Anoj, summarised the difference crisply: Kwik Money leans on the human **trust factor** (a person shows up), while InstaMoney is instant and automated. Asked which consumers would prefer, one student reasoned "InstaMoney — it's faster." The professor's response set the tone for the whole session:

> **Professor Banerjee:** "You're using your own logic. Now, we don't rely only on our own logic. We rely on data."

### How the Data Was Analysed

Both concepts were rated by the **same** panel of respondents (~287) on four dimensions using a **1–5 Likert scale** (1 = not liked at all, 5 = liked very much):

| Dimension | What It Captures |
|-----------|------------------|
| **Relevance** | Does it address a real need? |
| **Believability** | Do customers believe the promise? |
| **Differentiation** | Is it distinct from alternatives? |
| **Likability** | Overall appeal |

:::tip[Important]
Because every respondent rated **both** concepts, the correct test is a **paired-samples t-test** — not an independent-samples t-test. The class also nailed the rule of thumb: use a **t-test for two groups**, and **ANOVA for three or more**. A p-value **below 0.05** means the two means differ significantly at the 95% confidence level.
:::

Running the paired t-test in Excel (Data → Data Analysis → t-Test: Paired Two Sample for Means), InstaMoney's mean relevance came out at ~**4.19** versus Kwik Money's ~**3.74**, with a t-statistic around **−5.7** and a p-value near **1.8 × 10⁻⁸** — vanishingly small. InstaMoney won on *all four* dimensions, significantly. **Conclusion: carry InstaMoney forward to prototype testing.**

---

## Step 2 — Prototype A/B Testing Across the Customer Journey

With InstaMoney chosen, LDC A/B-tested the *features* of the prototype at each of five stages of the customer journey, measuring conversion at every step:

| Journey Stage | Option A vs Option B | Winning Feature |
|---------------|----------------------|-----------------|
| **Generating prospects** (discovery) | Green-blue-white vs **purple-green-blue-white** colour scheme | Purple-green-blue-white (≈2× the traction) |
| **Onboarding** | Manual upload vs **auto-fetch** of credentials from banks | Auto-fetch |
| **Credit assessment** | Geography-focused vs **income-focused** | Income-focused |
| **Payment reminder** | **Voicebot** vs email/SMS | Voicebot |
| **Query resolution** | Email ticket vs **chatbot** | Chatbot |

Anoj computed conversion percentages and **lift** for each stage (e.g., 17.9% vs 35.3% at one stage; 30.4% vs 44.7% at another) and ran significance tests. The final InstaMoney design therefore locked in: **purple-green-blue-white, auto-fetch, income-focused assessment, voicebot reminders, and chatbot query resolution.**

> **Professor Banerjee:** "This is how we go about designing the features of our new product."

---

## Deciding Which Features Make the Cut

A product can carry many features — but should it? The professor offered a grid that classifies features by **relevance** (importance to the consumer) and **differentiation**:

:::tip[Important]
| Category | Relevance | Differentiation | What to Do |
|----------|-----------|-----------------|------------|
| **Antes** (table stakes) | High | Low | Must provide — everyone offers them, you have no choice |
| **Drivers** | High | High | Invest here — these win customers; you need a few |
| **Fool's Gold** | Low | High | Avoid — distinctive but does not drive loyalty |
| **Neutral** | Low | Low | Drop — irrelevant to consumers |
:::

### A Note on Ranking Features

:::note[Good to Know]
Asked how to rank which feature contributes most, the professor introduced **conjoint analysis**, which yields two things: the **relative importance** of each feature and the **part-worth (utility) values** of each level. For a motorcycle he illustrated weights like power 35%, price 20%, style 20%, mileage 15%, comfort 10%. A full conjoint study takes roughly 4–4.5 hours to run and is not planned for this course — but it is the tool of choice when you must rank-order features rigorously.
:::

---

## The Honest Caveats

Data reduces risk; it does not eliminate it.

- **New products fail a lot.** The professor repeatedly cited that around **70% of new products fail**. Concept and A/B testing improve the odds — they do not guarantee success.
- **Self-report bias is real.** A student pointed out that customers say they will buy during testing, then don't when the real (often cheaper) product arrives. The mitigations: recruit **serious respondents**, probe **willingness to pay**, and use **trade-off analysis** (e.g., power vs mileage on a bike — parameters in conflict) rather than asking customers to rate everything as important.

> **Professor Banerjee:** "It is not a sure-shot method, but at least you have some data — which is better than going blind."

---

## Recipe Chain

**Session 6 completes the "build" half of the product story:**
Experimental research gives us the before-after-with-control (difference-in-differences) design → A/B testing is its practical manifestation → concept cards are screened with a **paired t-test** on relevance, believability, differentiation and likability → the winning concept's features are locked in through **prototype A/B testing** across the customer journey → and features are triaged as Antes, Drivers, Fool's Gold or Neutral. We now know *what* to build and *how much* of each feature to include.

**Next session:** The product is ready — now it has to reach the market. Session 7 turns to **Go-to-Market (GTM) strategy** through the **Dropbox** case: when a GTM strategy is needed, how it differs from a marketing plan, the **SaaS pricing model**, and the choice between **inbound and outbound** distribution.

---

## Key Terms to Remember

| Term | One-Line Definition |
|------|--------------------|
| **Experimental research** | Manipulating independent variables to measure their effect on dependent variables — a cause-and-effect study |
| **Treatment vs Control group** | The group exposed to the change vs the unchanged benchmark group |
| **Difference-in-Differences (DID)** | Effect of the treatment = (change in treatment group) − (change in control group) |
| **Before-after with control** | The core experimental design; A/B testing is its manifestation |
| **A/B testing** | Comparing two versions (A vs B) that act as controls for each other; change one variable at a time |
| **Multivariate test** | What an A/B test becomes when more than one variable is changed at once |
| **Concept card** | A words-and-visuals description of a product concept, evaluated by consumers before building |
| **Paired t-test** | Compares two means measured on the *same* respondents; significant if p < 0.05 |
| **Antes / Drivers / Fool's Gold / Neutral** | Feature grid by relevance × differentiation guiding what to build |
| **Conjoint analysis** | Method yielding the relative importance of features and part-worth utilities of their levels |
| **P2P lending** | A platform matching individual lenders and borrowers directly, without a bank intermediary |

---

## The Real-World Takeaway

Kabir ran product for a small fintech that lent to gig workers — delivery riders, home cooks, part-time electricians. His sales head, a persuasive man named Deven, was certain he knew what the riders wanted: a flashy one-tap loan with a countdown timer, "because these guys live on their phones and love speed." Deven wanted it shipped by month-end. Kabir had a budget for exactly one experiment before that deadline, and he was tempted to just build what Deven asked for. Deven was senior, confident, and usually right about the market.

Instead, Kabir made two concept cards. Card A was Deven's one-tap, countdown-timer version, all urgency and adrenaline. Card B was quieter: it showed the borrower a plain screen that said "we'll check your bank activity, not your credit score," and promised the money in under an hour with no documents. He put both in front of 300 riders and asked them to rate each on relevance, believability, differentiation, and how much they liked it. Same riders, both cards.

The paired t-test was brutal and clear. Card A scored high on likability — people thought it looked cool — but low on *believability*. The countdown timer made riders suspicious; it felt like a trap, the kind of thing that ends with a hidden fee. Card B, the boring one, won on believability and relevance by margins that left no room for argument. The p-value was a string of zeros. What the riders actually wanted was not speed as spectacle; it was speed they could *trust*.

Kabir carried Card B forward and A/B-tested its features across the journey. Auto-fetching bank data beat manual document upload two to one. A calm voicebot reminder collected more repayments than aggressive SMS. A chatbot resolved queries faster than an email ticket that riders never opened. None of it was glamorous. All of it was measured.

When he presented, Deven folded his arms and said the data was "probably biased — people say one thing and do another." It was a fair challenge, and Kabir had expected it. He had recruited serious respondents, asked about willingness to pay, and framed the trade-offs honestly. He also said the quiet part out loud: roughly seven in ten new products fail, and the point of testing was not certainty but better odds. Deven, to his credit, let it go.

The product shipped a week late and quietly. Repeat-borrow rates climbed, which — for a lender who only makes money on the *second* loan — was the whole game. Nobody put Kabir's name on it.

**The best product decisions rarely feel exciting in the room. They feel like a boring screen, a paired t-test, and the discipline to trust the data over the loudest voice — including your own.**
