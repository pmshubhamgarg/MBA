---
sidebar_position: 5
title: "Session 4: The Product That Pivoted Three Times — Zenatix, WattMan, and the Hunt for Product-Market Fit"
---

# Session 4: The Product That Pivoted Three Times — Zenatix, WattMan, and the Hunt for Product-Market Fit

*How three IIT Delhi friends built a genuinely clever energy product, watched the people it helped refuse to buy it, and rewrote their value proposition twice before it finally scaled*

---

:::info[Priority Map — What to Focus On]
**Must know (exam-critical):** Iteration vs. Pivot (and when a pivot forces a new value proposition), the Value Proposition Canvas / Jobs-to-be-Done applied to a real case (WattMan 1 → 2 → 3).

**Important (supporting):** Product-market fit as "fitting the product into the market," B2B vs. B2C selling, the adoption barrier when your product threatens the humans who must approve it.

**Context (background/color):** The Zenatix funding journey and its acquisition by Schneider Electric; the SaaS "cash-positive from month one" pricing model.
:::

---

## Where We Are in the Story

Session 3 built the positioning toolkit on paper: differentiation, the seven tests, the Buyer Utility Map, the Value Proposition Canvas, and Geoffrey Moore's six-line value proposition statement. Session 4 is where all of that gets stress-tested against a real, messy startup that had to reposition its product not once but twice — because each time it changed *who* it was selling to, everything else had to change with it.

Professor Banerjee opened by tying two concepts forward from the previous class, and he was explicit that these are the two things a product manager must **create and document**:

1. The **Jobs-to-be-Done (JTBD) framework** — the customer profile broken into jobs, pains, and gains.
2. The **value proposition statement** — Moore's six-line template.

> **Professor Banerjee:** "As a product manager we need to create these two and document them. Why? Because we are working in a team. So everybody in the team has to be conscious of this and they should be on the same page as far as the value proposition of the product is concerned."

---

## Product-Market Fit: You Fit the Product *Into* the Market

Before the case, the professor sharpened one phrase everyone throws around loosely: **product-market fit**. His framing reverses the usual instinct.

> **Professor Banerjee:** "The market is there, and we read the market in detail in terms of the jobs to be done, and we try to fit our product into the market."

You do not bend the market to your product. You read the market's jobs, pains, and gains in fine detail, and then you shape a differentiated product that slots into that requirement better than competition does. That "better than competition" is what buys you **sustainability** in the marketplace.

The tool for checking this fit is the **Value Proposition Canvas** — the customer profile (jobs, pains, gains) on one side, the product profile (products/services, pain relievers, gain creators) on the other. Fit exists when the pain relievers actually relieve the stated pains and the gain creators actually create the sought gains.

### Quick Recap: The Six-Line Template

The professor re-displayed Geoffrey Moore's value-proposition template so the class could apply it hands-on. Each line does one job:

| Line | Prompt | What you fill in |
|------|--------|------------------|
| 1 | **FOR** | the target segment or persona |
| 2 | **WHO** | their problem or need |
| 3 | **OUR PRODUCT/SERVICE IS** | the product category (not yet the differentiation) |
| 4 | **THAT PROVIDES** | the key benefit to customers |
| 5 | **UNLIKE** | the real competitive alternative |
| 6 | **OUR PRODUCT/SERVICE** | the key point of differentiation |

For the Zenatix exercise he deliberately reduced this to a **five-line statement, dropping line 5 ("UNLIKE")** — because in this nascent market WattMan had no real competitor, so the alternative "could be almost anything." That is a genuinely useful lesson: the template flexes to the situation.

---

## The Session's Central Idea: Iteration vs. Pivot

This is the concept the whole Zenatix case is built to teach, so it is worth getting crisp.

A student asked the obvious question: if we keep iterating, doesn't the value proposition keep changing? The professor's answer draws a hard line between two very different kinds of change.

:::danger[Must Know — Exam Critical]
**Iteration** keeps the *same* customer group and improves *how well* you do the job for them — the job gets more nuanced, the sensitivity sharper, but the customer stays the same. **A pivot changes the customer group itself** — and the moment you change the customer, you very likely need a *new* Jobs-to-be-Done map and a *new* value proposition statement. Being able to tell an iteration apart from a pivot, and explaining why a pivot demands fresh positioning, is the single most testable idea in this session.
:::

The professor stacked up iteration examples so the pattern was unmistakable:

| Product | The iterations | Customer group |
|---------|---------------|----------------|
| Hero Honda motorcycle | CD100 → Splendor → Splendor Plus → Super Splendor | Same commuter segment, better product |
| Intel PCs/chips | PC → PC XT → PC AT → 286 → 386 → 486 → Pentium (P2–P6) | Same computing customer, more power |
| Microsoft Excel | Version after version | Same spreadsheet user |
| ChatGPT / any LLM | Planned versions, release after release | Same user, deeper capability |

All of these are iterations — the customer stays put. Contrast that with **Nvidia**, which came out with "a completely different genre of chips" for a different kind of work. That is closer to a pivot in genre, not an iteration on the same path.

> **Professor Banerjee:** "In case we are changing the customer group, we refer to that as a pivot. So when we pivot, we may need to create a new value proposition. We may need to create a new positioning statement."

Crucially, iterating does *not* excuse you from writing the initial value proposition. It is the value proposition that unifies the product team, lets you build a **minimum viable product (MVP)**, and gives you something to improve against — whether you refine it with Kano, AHP, weighted-average scoring, or any other method.

---

## Meet Zenatix — and WattMan

Zenatix is an energy-data-analytics company built on the Internet of Things (IoT), founded by three friends from IIT Delhi's class of 2002 — **Amarjit Singh, Vishal Bansal, and Rahul Bhalla**. The professor played a short founder video so the class could hear the company in its own words.

Their product is **WattMan**, a hardware-based product to monitor the usage and performance of electrical assets — air conditioners, refrigerators, lights, essentially any electrical load. The architecture is elegantly cheap at the edge and smart in the cloud:

- **Off-the-shelf sensors** (bought, not built) capture readings.
- A proprietary **gateway device — the zSmart Controller** — collects data (in one student's telling, every 30 seconds) and pushes it to a **cloud server**.
- **AI/ML** on the cloud turns that data into analytics, and the analytics drive **corrective action** to cut energy consumption and cost.

One vivid capability from the founder video: you walk into your office at 9:00 a.m. and the building is already comfortable because the AC came on earlier. Today most buildings decide *when* to precondition using crude thumb rules. WattMan analyzes the building's cooling rate and the day's weather to say, for example, "switch on at 7:48 to guarantee 24°C by 9:00" — no earlier, no wasted energy.

:::note[Good to Know]
Zenatix sold on a **SaaS (software-as-a-service) subscription** model, and the founders claimed customers became **cash-flow positive from the very first month** — the energy savings exceeded the subscription cost immediately. That is a powerful sales line, which makes what happened next all the more instructive.
:::

The founders were candid about the risks of their friendship, too — that going back eighteen years made them *less* critical of each other than they should be, sometimes deferring with "you run with it and I'll rally behind you." And the line the professor clearly wanted the class to carry home:

> **A Zenatix founder (from the video):** "If you are a software developer, your job is not to write the best code. Your job is to write the best code that can *drive business* for the company."

---

## This Is a B2B Product — and That Changes Everything

The professor asked the class to brainstorm who would care about cutting electrical energy cost. The chat filled fast: hotels, restaurants, commercial buildings, retail chains, IT companies, banks, hospitals, factories, data centers, warehouses, malls, convention halls, clubhouses, carrying-and-forwarding agents, distributors. A very wide swath.

That breadth led to the conclusion:

> **Professor Banerjee:** "Most people in business would be interested in this. So essentially can we conclude that it'll be a B2B marketing proposition."

He contrasted WattMan with **Perfora** — a company selling mouthwash, toothpaste, and toothbrushes to individual consumers (B2C). WattMan's customer is a *business entity*, and selling to a business entity is a different animal: longer cycles, more stakeholders, and — as the class was about to discover — a hidden landmine.

---

## The Adoption Landmine: When Your Product Threatens the Approver

Here is where the case earns its keep. If WattMan is cash-positive from month one, what could possibly stop it from selling itself? The class listed the usual suspects — awareness, trust, cost, installation complexity, value realization, changing existing behavior, customer adoption. All valid. Then the professor pointed at the one nobody had priced in.

Who currently switches on the AC in a building? The **facilities department**. And whom is WattMan trying to make more efficient? The **facilities department**. If your solution turns six humans-in-the-loop into one, the other five are gone — so why on earth would the people who must *approve* and *champion* your product recommend something that eliminates their own jobs?

> **Professor Banerjee:** "Do you think some people in the facilities department, who are to approve this product and its usage, may feel threatened that their jobs may go? ... Do you think they would promote this product? No."

:::tip[Important]
This is one of the most transferable lessons in the course: **a product's biggest adoption barrier is often the person who must say yes to it.** When your value proposition is "we automate away the work these people do," the in-house team becomes a blocker, not a buyer. This near-fatal friction is exactly what pushed Zenatix toward the WattMan 3 design — where control moves to a *central* team and bypasses on-ground staff entirely.
:::

Layered on top were the harder commercial realities: scalability was becoming difficult, the early funds (about 8 crore, raised via a 2015 angel round from investors including Rajan Anandan and the founders of Snapdeal, and a seed round from Blume Ventures) had dried up, recent fundraising had stalled, there was no proven business model in the sector, and investors expected slow B2B growth in India. WattMan 3, with new control features, was the team's bet to survive in the retail-chain market — and they had an investor meeting scheduled for the very next morning.

---

## Three Versions, Three Customers, Three Value Propositions

This is the spine of the case. The three WattMan versions are not just product upgrades — versions 2 and 3 are **pivots**, each aimed at a new customer group and therefore each demanding a fresh JTBD map and value proposition.

| | WattMan 1 | WattMan 2 | WattMan 3 |
|---|-----------|-----------|-----------|
| **Customer (pivot!)** | Large industrial units — heavy machinery, big manufacturing | Large commercial buildings — hotels, hospitals, offices, restaurants, malls | Retail chains with many distributed outlets — banks, fashion brands, restaurants, hospitals |
| **Core pain** | Only one monthly electricity bill; no breakdown by asset or time of day; offline | High energy cost from AC/HVAC, UPS, generators; breakdowns and downtime | No control over wasteful usage or staff behavior across hundreds of outlets; breakdowns hurt footfall |
| **What the product does** | Sensors + energy meters + zSmart gateway → cloud analytics; asset-level, time-of-day consumption breakdown | Adds Wi-Fi temperature-sensing zSmart controller; predicts optimal AC on/off from weather + temperature | Adds **automated remote control** + predictive maintenance + local control on connectivity failure |
| **Headline benefit** | Know *where* and *when* to cut → large absolute savings | Real-time optimization of power → lower energy *and* maintenance cost | 8–30% energy savings, ~90% less downtime, one central team, **no on-site staff needed** |
| **Scalability** | Poor — every industrial site is unique, not repeatable | Better — but each building's facilities team must be sold separately | **Excellent** — one sale to a central operations head covers hundreds of outlets |

The genius of WattMan 3 is that it turns the adoption landmine into a design principle: by centralizing control and removing the need for on-ground staff cooperation, it stops depending on the very people who were most likely to block it.

---

## The Class Builds the Value Propositions

The professor split 84 participants into twelve breakout rooms and assigned each the JTBD framework *and* a six-line value proposition for one WattMan version. (He deliberately dropped line 5, "UNLIKE," because in this early market Zenatix effectively had no direct competitor.) A few of the student outputs were sharp enough to quote.

**WattMan 1 — Group 1 (presented by Jagat):**
> "For industrial units running heavy machinery and large manufacturing setups, who are highly motivated to cut energy consumption but have no idea where or when to act — our WattMan 1 is an IoT energy and analytics product that reveals energy consumption by each individual asset and the time of day, giving a clear-cut idea of where to act."

Group 4 (Shashwat's team) added a nice discipline — scoping the geography to NCR/Delhi — and nailed the core pain that "the only data available is a single electricity bill, with no breakdown of where or how energy was being used." The professor singled this out as a genuinely nuanced pain point.

**WattMan 3 — Group 9 (Sanchita's team):**
> "For large retail chains like banks, fashion brands, and restaurants with hundreds of geographically dispersed outlets, who need centralized visibility and control over energy usage *without depending on on-ground staff compliance* — our WattMan 3 platform is an IoT-based energy-efficiency and automation system that cuts energy cost by 8–30%, reduces asset downtime 80–90% through predictive maintenance, and gives one central team real-time remote control over every outlet with no on-site staff intervention."

> **Professor Banerjee:** "Brilliant. Brilliant. You hit the nail on the head."

One group (Group 3, Ashok's team) went off-script in the best way — reframing WattMan 3 for **AI data centers**, "which face astronomical energy costs, thermal-throttling risk, and strict sustainability targets," proposing dynamic server-rack cooling and quantifying savings at 30–40%. The professor loved the quantification.

He also used Group 2's presentation to coach a small but real point of craft: the line "Our product WattMan 2 is an IoT-based monitoring system" should be split — first *name* the product ("Our product is WattMan 2"), then separately state the category ("is an IoT-based monitoring system"). Precision in the template matters because the template is a shared artifact.

---

## The JTBD Map for WattMan 3 (the Professor's Version)

Because the case ultimately turns on WattMan 3, the professor mapped it out fully so the class could see the two halves of the Value Proposition Canvas connect.

| Customer side (the market) | Product side (the offering) |
|----------------------------|-----------------------------|
| **Job:** save energy cost by minimizing wasteful usage across outlets | **Product:** combination of sensors installed on client site + zSmart control |
| **Gains sought:** minimize cumulative energy expense across all outlets; eliminate reliance on staff to run assets well | **Gain creators:** auto-implementation of analytics-based suggestions; timely preventive-maintenance alerts; 10–30% energy savings |
| **Pains:** no control over wasteful usage at multiple outlets; no control over staff actions despite training; lost footfall and poor experience from untimely breakdowns | **Pain relievers:** automated *remote* control of assets; automated *local* control if connectivity fails; performance monitoring that predicts breakdowns |

> **Professor Banerjee:** "Map the market dimension into the product dimension — the pain relievers to the pain points, the gain creators to the gains sought. This tells us whether, for that customer group, we can reach out with some sensitivity and build regard for the product we are trying to create."

---

## Why This Document Matters More Than It Looks

The professor kept returning to *why* he made the class spend a full session on a JTBD map and a six-line statement. The answer is the recurring theme of the whole course: the product manager has responsibility without authority and must unify people who do not report to them.

> **Professor Banerjee:** "Once this document is ready as part of a product vision, marketing can search for relevant customers, and the product-development team can start translating the MRD into the PRD, break it down, distribute the work, and talk timelines. It serves as a basic blueprint that unites different functional areas — which the product manager is expected to be the orchestra conductor for."

The value proposition statement is not marketing copy written after launch. It is created *during* development and shared internally so that engineering, marketing, and finance are all building toward the same customer, the same pains, the same gains.

---

## How the Story Ended

The professor closed the case with the real epilogue. Zenatix kept running short of funds to keep improving the product, and rather than fight that battle indefinitely, the founders sought an exit.

:::note[Good to Know]
**Zenatix was acquired by Schneider Electric** and today operates as part of the Schneider group. The professor's read: the three founders "found a gap in the market and created a product that fit into the gap — a very neat product — and they pivoted it," from WattMan 1 to 2 to 3. The pivots were not failures; they were the search for product-market fit playing out in real time.
:::

---

## Could WattMan Go B2C? A Lesson in Savings Thresholds

A student (Kumar Pratap Singh) pushed on whether WattMan 3 could venture into the consumer market — housing societies, individual homes with three or four ACs. The professor's answer is a small masterclass in when a value proposition survives a segment change and when it does not.

For an **individual apartment** with a monthly electricity bill of roughly 800 rupees, a 20% saving is about 160 rupees a month — nowhere near enough to justify the cost and effort of a product like WattMan 3. The savings threshold is too low; the value proposition collapses.

But a **gated community with shared high-consumption assets** — a clubhouse, a swimming pool, common lighting, three-phase supply — might run a bill of around 60,000 rupees a month. Now a 20% saving is real money, and the proposition holds. The professor also noted an adjacent opportunity: societies adopting **solar panels** for high-draw loads like geysers, which pairs naturally with smart energy control (though people still hesitate over the DC/battery-backup complexity).

The takeaway echoes the whole session: a pivot to a new segment only works if the *economics* of the customer's job — here, the absolute rupees saved — clear the bar. A clever product with savings too small to matter is not a product-market fit; it is a science project.

---

## Recipe Chain

**Session 4 turns positioning theory into a working product document:**
Product-market fit means fitting your product *into* the market's jobs, pains, and gains. When you improve how you serve the *same* customer, that is **iteration**; when you change *who* the customer is, that is a **pivot** — and a pivot forces a new JTBD map and a new value proposition. The Zenatix/WattMan case shows all of this at once: three customer groups (industrial → commercial buildings → retail chains), three value propositions, one product architecture (sensors + zSmart gateway + cloud AI). The hidden lesson: your fiercest adoption barrier can be the very people who must approve your product, and good design routes around them.

**Next session:** We leave positioning behind and enter **New Product Development (NPD)** proper — the eight-stage **Stage-Gate model** from idea generation to commercialization, the techniques for generating and screening ideas, and how a *product idea* becomes a *product concept*. We also set up **A/B testing** (framed as a "before-after with control" experiment, where A and B act as controls for each other) and the **LenDenClub** peer-to-peer lending case, where we will analyze real A/B test data in Excel — comparing the two small-ticket product concepts, **InstaMoney** and **Kwik Money** (the professor referred to them as "Insta Money" and "Quick Money").

---

## Key Terms to Remember

| Term | One-Line Definition |
|------|-------------------|
| **Product-Market Fit** | Fitting your differentiated product into the market's jobs, pains, and gains better than competition does |
| **Iteration** | Improving how well you serve the *same* customer group; usually only minor changes to the value proposition |
| **Pivot** | Changing the *customer group* itself — which typically demands a brand-new JTBD map and value proposition |
| **Jobs-to-be-Done (JTBD)** | Customer profile broken into jobs, pains, and gains — the "market" half of the Value Proposition Canvas |
| **Value Proposition Canvas** | The framework matching customer jobs/pains/gains to the product's pain relievers and gain creators |
| **MVP** | Minimum Viable Product — the first buildable version the value proposition lets you ship and then improve |
| **Adoption Barrier (Approver Risk)** | When the people who must approve/champion a product are threatened by it and therefore block it |
| **SaaS Subscription Model** | Customer pays a recurring fee to use the product; Zenatix claimed savings exceeded the fee from month one |
| **zSmart Controller** | Zenatix's proprietary IoT gateway that collects sensor data and sends it to the cloud for AI analytics |

---

## The Real-World Takeaway

Kabir ran product for a small SaaS company that had built something genuinely good: an AI scheduler for hospital operating theatres. Feed it the surgery list, the surgeon availability, and the equipment sterilization cycles, and it produced a theatre schedule that squeezed 15% more surgeries into the same day. The math was undeniable. The pilot hospital loved the *outcome*. And yet, eight months in, not a single hospital had signed a paid contract.

Kabir did what he always did when a product stalled: he went back to the JTBD map. He had written it for "hospital administrators who want to maximize theatre utilization." The pains were all about wasted operating-room hours. The gains were all about revenue per theatre per day. The map was correct. The product relieved every pain on it. So why was nobody buying?

The answer was sitting in the room during every demo, and Kabir had been too busy admiring his own value proposition to notice him. The person who actually *scheduled* the theatres was a veteran operations coordinator named Mr. Fernandes, who had run that board with a whiteboard and thirty years of instinct. Kabir's product did Mr. Fernandes's entire job — faster, and without him. Every time Kabir presented the "15% more surgeries" slide, he was, in effect, presenting a slide titled "Why We No Longer Need Mr. Fernandes." And Mr. Fernandes was the one the administrator turned to and asked, "Should we buy this?"

Kabir had built a WattMan 1. Cash-positive from month one, and quietly sabotaged by the person who had to approve it.

So he pivoted — not the technology, but the customer and the framing. He stopped selling "automated scheduling that replaces your coordinator" to hospital administrators. He started selling "a co-pilot that makes your scheduling team look brilliant" — repositioned for the coordinators themselves, with the AI producing draft schedules that Mr. Fernandes could override, tweak, and take credit for. The central promise flipped from *replacement* to *augmentation*. He rewrote the JTBD map: the job was now "help me defend my board against last-minute chaos," the pain was "getting blamed when a surgery slips," the gain was "looking indispensable." Same engine. New customer. New value proposition.

Mr. Fernandes became the product's biggest champion. He demoed it to two other hospitals himself. The contracts followed.

Kabir did not write a smarter algorithm. He noticed that a product changing *who its customer is* is not an upgrade — it is a pivot, and a pivot is a promise to a different person. He read the market again, fit the product into it, and let the man who almost killed the product become the man who sold it.

**A pivot is not a new feature. It is a new promise — to a new person — and it deserves a new value proposition to match.**
