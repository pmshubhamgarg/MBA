---
sidebar_position: 9
title: "Session 8: Farming vs. Hunting — Spending $10 Million with a Metric, Not a Hunch"
---

# Session 8: Farming vs. Hunting — Spending $10 Million with a Metric, Not a Hunch

*How a product team decides whether the next marketing dollar should chase strangers online or send a salesperson to knock on a CIO's door — and the one ratio that keeps the decision honest*

---

:::info[Priority Map — What to Focus On]
**Must know (exam-critical):** The **LTV / CAC ratio** and how to build it (blended churn → estimated customer life → lifetime value → customer acquisition cost); the **inbound vs. outbound (farming vs. hunting)** allocation decision.

**Important (supporting):** **Blended churn rate** calculation; the **metric-structure decision process** (populate each option fully, equalize, question assumptions, fine-tune with live data); the four **promotion tools**.

**Context (background/color):** EMOB (early-month-on-board); the half-life / factor-of-safety idea for fast-moving technology; CAC payback period and its bias.
:::

This session continues the **Dropbox** go-to-market (GTM) case from the previous class. The product is essentially ready; the open questions sit under the other three P's — **price, place, and promotion**. Pricing was settled as **software-as-a-service (SaaS)** using value-based pricing. Place came down to two channels: **inbound** and **outbound**. Session 8 is where the class did the hands-on math on the last big decision: **how should Dropbox split $10 million between the two channels?**

The protagonists are **Paul Jun**, head of strategic finance, and **Melwani**, a member of his strategic finance team, preparing for a quarterly meeting. The case tells us plainly: with the pressures of growth in a competitive market, the company needs a combination of **self-serve / inbound sales** (which requires more online advertising) and **outbound sales** (which requires more sales staff), and the team has **$10 million left to allocate this quarter**.

---

## The Four Promotion Tools

Before allocating a rupee, Professor Banerjee re-anchored the class in the classic promotion toolkit, because "online advertising" and "sales staff" are just two of the levers:

| Promotion Tool | What It Is |
|----------------|-----------|
| **Advertising** | Broadcast promotion — historically TV and newspapers, today primarily the online medium. Costs money per exposure. |
| **Sales Promotion** | Short-term discounts to pull demand forward (e.g., **EMOB — early-month-on-board**, where users who subscribe early in the month pay, keeping cash flows running; used by credit-card companies too). |
| **PR & Publicity** | Press reports, launch programmes, sponsored events — earned rather than paid visibility. |
| **Direct Marketing** | Outbound selling — you call, you meet, you break the account in. Online lead-gen also feeds this. |

:::note[Good to Know]
EMOB (early-month-on-board) is a small piece of jargon, not a universal law. It is a scheme a few SaaS firms run to nudge subscribers to commit early in the month so revenue and cash flow arrive predictably. Worth recognising, unlikely to be a headline exam answer.
:::

---

## Why SaaS Changes the Math

The pricing decision — software-as-a-service — is not just a billing choice; it reshapes the economics that the rest of the session depends on. A late student question from **Vikas** teased out the deeper point. Some vendors sell a **full licence** (the software sits on your machine — *not* SaaS). Others sell only **access — a login** — and charge monthly or annually; that is SaaS, even if the vendor is itself running the software on a **third party's hardware**. The customer never touches the infrastructure; that arrangement, and its cost, is baked into the vendor's price.

The professor drew out two consequences that matter for the whole GTM decision:

- **SaaS variabilizes a fixed expense.** Instead of a large up-front capital outlay, the customer incurs a recurring **variable cost**. This lowers the barrier to adoption — and, as we will see in Session 9, low cost speeds diffusion.
- **Software assets depreciate fast.** Like plant and machinery, software can be depreciated for accounting — but because **technology turns over quickly**, the depreciation rate is high. The trigger is not physical wear but "how quickly an upgraded product arrives."

This is also why the **90% gross margin** holds: for a digital product the marginal cost of one more login is a few cents, so almost every incremental rupee of revenue is contribution.

---

## Farming vs. Hunting: Two Very Different Channels

The professor gave the class a vocabulary that reframes the whole decision:

- **Inbound = farming.** You deepen and expand what you do with *existing* customers who discovered you online, signed up themselves, and onboarded without ever speaking to a human.
- **Outbound = hunting.** Salespeople go *looking* for new clients, break them in, and bring them into the user base.

A student, Senel, asked why it is harder to get direct feedback in inbound sales. Anoj answered it well: in inbound there is no face-to-face interaction — customers discover the service online, read the plans, and self-onboard, so there is no ready feedback loop. Support channels exist, but people only use them when something breaks.

> **Professor Banerjee:** "The human touch is missing. Perfect answer. Absolutely right."

He sharpened it with a soap analogy. Imagine Unilever selling Lux in two channels: a **retail store** where the consumer walks in (B2C), and a **sales team pushing aggressively into hotels** (B2B). Where is feedback richer and more actionable? From the hotel — because an experienced outbound salesperson has been through several cycles and gives high-quality, valued product-improvement feedback. Compare collecting feedback from **300 million** self-serve Dropbox users as a diffuse group versus **3,000 business users** whose needs an outbound rep can articulate precisely.

:::tip[Important]
**Farming (inbound)** grows existing accounts and scales cheaply but gives weak, indirect feedback. **Hunting (outbound)** is expensive per deal but lands large, strategic accounts and produces mature, high-signal feedback. The strategic bonus of outbound: land one big company and *everyone* inside it starts using Dropbox — including for personal use — locking out competitors.
:::

---

## Building the Metric Structure

Rather than hand over a formula, the professor built the model live and put the class into breakout rooms — odd groups computing **inbound**, even groups **outbound**. The goal for both: arrive at a single comparable number, the **LTV / CAC ratio** (lifetime value divided by customer acquisition cost).

The chain of logic he insisted the class build cell by cell:

| Step | What You Compute | Why It Matters |
|------|------------------|----------------|
| **Blended churn rate** | Weighted average of annual-plan and monthly-plan churn | Monthly payers churn more than annual payers; the mix changes the blend |
| **Value per customer** | List price × seats per deal, net of any discount | Gives the average deal size |
| **Estimated customer life** | 1 ÷ churn rate | How many years the customer stays |
| **Lifetime value (LTV)** | Deal size × gross margin × customer life | Total gross profit the customer generates |
| **Customer acquisition cost (CAC)** | Cost to win one customer through the channel | The price of growth in that channel |
| **LTV / CAC** | LTV ÷ CAC | The single comparable efficiency metric |

### The Gross Margin Trap

A student confused gross margin with net profit. The professor was firm:

> **Professor Banerjee:** "No, net profit is 10%. If gross margin is 10% the company will make a loss. Net profit is between 8% to 14%."

For a digital product like Dropbox the **marginal cost of one more user is almost nothing** — a login, a few cents of storage — so the **gross margin is ~90%**. That is exactly why SaaS businesses need seed funding and a Y-Combinator-style runway: the model only works once volume covers the fixed costs. (He tied this back to the **Parle-G** example from Session 1, where *net* profit falling from 14% to 9% was the crisis — not gross margin.)

---

## The Base-Case Workout

With his shared assumptions, the two channels came out almost identical — by design, so the class could see the *structure* before the *answer*.

:::danger[Must Know — Exam Critical]
The **LTV / CAC ratio** is the metric the professor recommends for choosing between distribution/promotion channels. Be able to reproduce this entire calculation.

**Inbound (self-serve):**
- Blended churn = (0.80 × 10%) + (0.20 × 30%) = **14%**
- Deal size = $150 × 10 seats = $1,500; customer life = 1 ÷ 0.14 = **7.14 years**
- LTV = $1,500 × 0.90 × 7.14 ≈ **$9,643**
- CAC = CPC $8 ÷ 1% conversion = **$800** (100 clicks buy 1 customer)
- **LTV / CAC = 9,643 ÷ 800 ≈ 12.1x**

**Outbound (personal selling):**
- Churn = 10% (100% annual, no monthly); deal size = $150 × (1 − 20% discount) × 250 seats = **$30,000**; customer life = **10 years**
- LTV = $30,000 × 0.90 × 10 = **$270,000**
- Deals per rep = quota $400,000 ÷ $30,000 ≈ 13.3; CAC = rep cost $300,000 ÷ 13.3 ≈ **$22,500**
- **LTV / CAC = 270,000 ÷ 22,500 ≈ 12x**
:::

Two things to internalise. First, the **estimated customer life = 1 / churn** identity: at 14% annual churn you start with 100 customers and keep 86 at year-end. Second, the **rep cost is a cost-to-company**, not just salary — it bundles support, management, sales operations, IT, and lead generation.

---

## The "Bad Inbound Ratios" Twist

The professor then broke the symmetry to show the model earning its keep. Suppose real-world inbound performance turns out worse than assumed:

- Monthly churn ≈ 4%/month → treat as **50% annualized**; annual churn rises to **15%**
- Mix shifts from 80/20 to **50/50** → blended churn = (0.5 × 15%) + (0.5 × 50%) ≈ **33%**
- Seats per deal drop from 10 to **5**; cost-per-click rises from $8 to **$10**

Rerun the chain: customer life collapses to ~3.08 years, LTV per customer falls to about **$2,079**, CAC rises to **$1,000**, and the inbound ratio crashes from 12.1x to about **2.1x** — while outbound holds at ~12x. The class reacted instantly, and the professor was delighted at how fast they saw it.

Now the decision. Should the split be 80/20? 100% outbound? His answer models how a real GTM allocation is reasoned:

> **Professor Banerjee:** "This is the charm in marketing, all the romance. You never know what is right... there'll be mahagurus who will sit later and say you took the wrong decision. I plead guilty — the decision was not perfect — but I have to give some *logic* for the decision. So I'll do it in the ratio of their LTV-to-CAC ratios."

So if inbound is 2.1x and outbound is 12.1x, you weight the spend roughly in that proportion — not because it is provably optimal, but because it is defensible.

---

## The Decision-Making Process (This Is the Real Lesson)

The professor was emphatic that the *number* matters less than the *method*:

> **Professor Banerjee:** "It is not just getting a calculation right to clear an exam paper. When I'm consulting I'll first set up the structure, get it ratified by the firm — ask them, is there any variable or cost element we've left out? When they say no, then we equalize."

:::tip[Important]
The GTM allocation process, in order:
1. **Set up a metric structure** (a template, not a dashboard) and get it ratified by the firm.
2. **Populate each option in isolation** — all $10M into inbound, then all into outbound — and read the ratio.
3. **Find where the ratios equalize** and ask whether that point is *practically* achievable.
4. **Start with a simple split** (50/50, or by the ratio of the two LTV/CAC ratios) and then **fine-tune using live data** — the first 30 days, the next 30 days. "You are not committed forever to spend in this ratio."
:::

> **Professor Banerjee:** "Setting up that template is very important. Once you launch and go to market with a campaign, you adjust based on the first 30 days' ratios, the next 30 days' ratios. Is it improving when you make a change?"

---

## Two Sharp Student Questions

**Anish** raised the technology-obsolescence problem: assuming a 10-year customer life is dangerous when people change phones every 6–9 months and SaaS tech turns over fast. The professor's answer introduced the idea of **half-life**:

> **Professor Banerjee:** "Instead of customer lifetime value, we do calculations based on half-life. But the problem is not with the *method* — the problem is in how you *populate* it. Put in a factor. A technology-change factor. Conservatism."

He compared it to a structural engineer choosing a **factor of safety** for a load-bearing structure, or designing for an earthquake that is *predicted* once in 25 years even in a zone that has been quiet for 20. The framework is not inadequate; the judgment lies in the assumptions you feed it.

**Varun** asked about the **CAC payback period** as an alternative metric — he was getting 2.5 years for inbound but 8.1 years for outbound, which seemed to contradict the ratios. The professor explained the bias: payback period is **skewed toward the channel with the lower acquisition cost** (inbound's $800 vs. outbound's $22,500), whereas the LTV/CAC ratio does not carry that bias. Payback period is more useful in **brick-and-mortar** contexts where the big investment sits in plant and machinery and marketing is incremental on top. In the technology-enabled world, LTV/CAC is the cleaner comparison.

---

## Where Do the Assumptions Come From?

Two students (Gorav and Anoj) pushed on the obvious weakness of the whole model: it is only as good as the numbers you feed it, and a brand-new product has no history. The professor's answers were candid:

- In an **existing company**, use your own **past historical data**; if the product is new, borrow from **alternate or close products** and adjust.
- Even a startup's founders "would know what kind of churn may happen." When there is genuinely no data, you **beta test** or ship a **basic MVP** to learn — but he nudged the class not to stay purely product-centric: "Why not create a GTM?"
- One truth about SaaS to internalise: **some churn is inevitable and is no fault of yours.** People form an impression, sign up, and discover it is not what they imagined. "You will not have zero churn rate practically, and for no fault of yours."

When Manish asked how to translate industry-level secondary data into product forecasts, the professor was honest about scope: "That is data analytics — this is not a data-analytics course." A useful boundary marker: the PM sets up the *decision structure*; specialised analytics fills in the numbers.

---

## Recipe Chain

**Session 8 completes the go-to-market toolkit:**
GTM lives under the marketing plan and answers price, place, and promotion. Pricing → SaaS with value-based pricing. Place/promotion → the inbound (farming) vs. outbound (hunting) choice. The disciplined way to choose is to build a **metric structure** ending in the **LTV / CAC ratio**: blended churn → customer life (1/churn) → LTV (deal size × gross margin × life) → CAC → ratio. Populate each channel fully, equalize, stress the assumptions, then fine-tune with live 30-day data.

**Next session:** We close the course with **adoption and diffusion** — the Product Life Cycle, Everett Rogers' diffusion curve, Geoffrey Moore's chasm, and the Technology Readiness Index — and open the **Nexent Systems** case on product roadmapping.

---

## Key Terms to Remember

| Term | One-Line Definition |
|------|-------------------|
| **LTV / CAC Ratio** | Customer lifetime value divided by customer acquisition cost — the metric for comparing channels |
| **Customer Lifetime Value (LTV)** | Average deal size × gross margin × estimated customer life |
| **Customer Acquisition Cost (CAC)** | The all-in cost to win one customer through a given channel |
| **Blended Churn Rate** | Weighted average of annual-plan and monthly-plan churn, based on the payment mix |
| **Estimated Customer Life** | 1 ÷ churn rate — the number of years an average customer stays |
| **Inbound / Farming** | Growing existing self-serve customers; cheap to scale, weak direct feedback |
| **Outbound / Hunting** | Salespeople winning new (often large) accounts; costly per deal, rich feedback, strategic lock-in |
| **EMOB** | Early-month-on-board — a sales-promotion scheme to pull subscription revenue forward |
| **CAC Payback Period** | Time to recover acquisition cost; biased toward low-CAC channels |
| **Half-Life** | A conservative alternative to full customer life when technology turns over quickly |

---

## The Real-World Takeaway

Kabir ran growth for a two-year-old SaaS startup that sold a scheduling tool to clinics. The board had just wired ₹8 crore for the year and asked one question at the next meeting: where is it going? Kabir's instinct, honed by a decade in performance marketing, was to pour all of it into paid search. The numbers looked gorgeous — cost per click was low, the landing page converted, and every rupee seemed to return three.

His co-founder, a former hospital administrator named Reshma, was uneasy. "The clinics that actually renew," she said, "are the ones a human visited. The ones who sign up from a Google ad churn by month four." Kabir waved it off. Churn was a product problem, not a channel problem.

Then he built the template — the same discipline he had once seen in a product-management class. He put the full budget into inbound and read the ratio: LTV over CAC came to 11. Beautiful. Then he populated the inbound assumptions with *real* numbers instead of hopeful ones — the actual monthly churn Reshma had been quoting, the actual mix of monthly versus annual payers, the true cost per click after the auction heated up. The ratio fell to 2.3. He ran outbound next: expensive to acquire — a field rep cost more than thirty self-serve customers — but the clinics stayed for years and each one dragged in three others by word of mouth. Outbound came in at 9.

Kabir did not go 100% outbound. That would have starved the top of the funnel and ignored the strategic value of a broad base. Instead he split the budget roughly in the ratio of the two efficiencies, launched, and did something he had never done before: he refused to lock the allocation. He read the LTV/CAC every thirty days and moved money toward whichever channel was actually improving.

Six months later the board asked again where the money was going. Kabir did not show them a hunch dressed up as confidence. He showed them a template, the assumptions behind every cell, and a thirty-day trend. One board member — the kind who enjoys being the mahaguru after the fact — asked whether the split was optimal. "Probably not," Kabir said. "But here's the logic, and here's how I'll correct it next month."

**The best product and growth managers are not the ones who guess right. They are the ones who build a structure honest enough to be corrected — and then actually correct it.**
