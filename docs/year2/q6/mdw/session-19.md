---
sidebar_position: 20
title: "Session 19: Enter a Website, Let the Agent Do the Rest — Vibe-Coding Your Own AI Sales Machine"
---

# Session 19: Enter a Website, Let the Agent Do the Rest — Vibe-Coding Your Own AI Sales Machine

*How a marketer with zero coding background built two working AI agents in plain English — one that hunts prospects and messages them on LinkedIn, one that writes a four-email nurture campaign and loads it into your tool — and the one rule that keeps AI a servant, not a spammer.*

---

:::info[Priority Map — What to Focus On]
**Must know (exam-critical):** What vibe coding is; the two AI-agent workflows (prospect-to-outreach, research-to-nurture) and their step order; the data-enrichment layer; the CPM → CPC → CPL funnel math; "automate the grunt work, keep the judgment."

**Important (supporting):** MQL vs SQL; lead indicators for a long B2B sales cycle; why LinkedIn targeting beats Google/Meta and costs more; email deliverability (warm-up + exclusive IP); legal-not-ethical framing for scraped data.

**Context (background/color):** The Optra CES account-based campaign; the "stop spending first" feedback theme; tool brand names and free-trial tactics.
:::

## Setting the Stage: From "How to Decide" to "How to Do"

Session 19 sits deep in **Module 2 — AI Tools & Practice**, taught by the industry faculty. The session ran in two back-to-back halves with a dinner break, and had three agenda items:

1. **Finish the group presentations** — the US go-to-market plans for a B2B SaaS company that spilled over from last week.
2. **A live demo** — the professor shows AI automation workflows he personally built using vibe coding.
3. **Hands-on build** — students split into their 18 study groups and build their own AI agents in breakout rooms, then present.

The spirit of the whole session is one line from the professor: get your hands dirty and build something yourself.

---

## The Feedback That Reframed Every Pitch: Stop Spending First

Group after group pitched the same instinct — LinkedIn ads, Google ads, webinars, events, influencers. The professor kept pushing back on the *shape* of the thinking, not the tactics.

> **Professor:** "All of you are still thinking paid marketing first. When you think of marketing the first thought we have is 'let's go spend money.' If we can shift that thinking and focus more on organic growth, earned media, owned media — that is a slow process, but it helps you build a more profitable business."

He admitted he should have capped the budget in the case to force the harder, more creative answer. One group (Freshworks) got a sharp persona correction too: a CRM/marketing-automation seller targets **CMOs and sales heads, not CIOs**.

:::tip[Important]
Split your marketing mind into two buckets with **different time horizons and different metrics**: **brand-building** (long-term — measure follower growth, brand keyword search volume, earned-media coverage, sales-cycle speed) vs **lead-gen / "short-term danda"** (measure MQLs, SQLs, cost of customer acquisition).
:::

---

## Reading the Tea Leaves: Lead Indicators for a Long Sales Cycle

A student asked the right question: if enterprise sales cycles run six months, how do you know one month in whether a new-market launch is working? You cannot wait for bookings. You watch **lead indicators**.

The professor illustrated with **Optra** — an omnichannel distribution company (founded by a Flipkart co-founder) that helps global brands like Lego or Sony launch across Asia. Going into the **CES** electronics trade show in Germany, the team ran an account-based LinkedIn campaign:

1. **Scraped** the CES website for the full speaker and attendee list.
2. **Uploaded** it as an audience list into LinkedIn.
3. LinkedIn **matched** those people by email to their profiles.
4. Added **AND filters** — job seniority (CXO, VP, partner), 8+ years experience, geography (US, EU) — so targeting stayed razor-sharp.
5. **Boosted the CEO's personal posts**, not the unknown company page, because the ex-Amazon CEO already had a global follower base.

| Lead indicator they tracked | Why it signals progress |
|---|---|
| Follower growth from US / Germany | Brand is becoming known in the target geography (went from ~99% India-only) |
| Brand keyword search volume | Interest is rising (climbed from near-zero to ~50 searches a week) |
| Website traffic from target geography | People are actively looking you up |
| MQLs and SQLs generated | Pipeline is forming (got ~15–20 MQLs, a couple of SQLs, one deal a year later) |
| Anecdotal "I saw your ads" at the booth | Qualitative proof the campaign registered |

:::note[Good to Know]
A pure internal-efficiency metric like "how fast we react to a lead" is **not** a market lead indicator — it tells you about your ops, not whether the US launch is working. Also measure from the **target geography only**; India traffic will flatter your numbers.
:::

---

## MQL vs SQL: Where a Lead Stops Being a Guess

| Stage | What it means | Example |
|---|---|---|
| **MQL** (Marketing-Qualified Lead) | All the firmographic + designation boxes check out | A chief revenue officer at Sony (relevant company + relevant title) signs up |
| **SQL** (Sales-Qualified Lead) | They show **genuine, primary interest** in the first exploratory sales chat | "Your value proposition sounds interesting — here's my SKU list, tell me what you can launch where" |

If the prospect says "we're already sorted, maybe in six months," it stays an MQL. Primacy of interest is the dividing line.

---

## LinkedIn vs Google vs Meta: Why Precision Costs More

A big chunk of Q&A circled the same truth: **LinkedIn is expensive because its targeting is tight.**

| Platform | Targeting power | Relative cost |
|---|---|---|
| **LinkedIn** | Professional identity — target a CRO or a CIO at a Fortune-500 firm directly | Highest (roughly 3x the CPM of Meta/Google) |
| **Google / Meta** | Basic age, gender, interest; no true job-title targeting | About one-third the cost |

So on Google and Meta you fight imprecision with **stacked filters**, not demographics alone. To reach NRIs for SimplyLearn, the team layered: age + works at an IT/consulting company + interest in technology + Indian-hotspot geographies (Dallas, New Jersey, Toronto, London) + interest in Bollywood or cricket. Stack enough signals and the odds you've found the right person jump.

> **Professor:** "The only suggestion I can give you is use multiple filters, not just the demographic filter alone. Even then you'll see error, but you'll reduce your chances of error."

:::note[Good to Know]
With consistent spend, Meta's and Google's AI *learns* your persona. At Healthify it locked onto "older users, hypertension, iPhone, metro cities" and served them beautifully. But when the brand launched a **young-mothers plan**, the trained engine refused to chase the new audience — so they switched to **nano-influencer marketing** instead. The persona you want dictates the strategy.
:::

---

## The Funnel Math: From CPM to Cost-Per-Lead

A student asked how platforms compute cost-per-lead. The professor opened Excel and walked the chain — **CPL is a derived metric**, you build it step by step:

| Step | Formula | Worked example |
|---|---|---|
| Impressions | Spend × 1,000 ÷ CPM | 1M spend × 1,000 ÷ 200 CPM = **5M impressions** |
| Traffic | Impressions × CTR | 5M × 10% = **500,000 clicks** |
| Leads | Traffic × lead-conversion rate | 500,000 × 5% = **25,000 leads** |
| **CPL** | Spend ÷ leads | 1M ÷ 25,000 = **40 per lead** |
| CPC (derived) | Spend ÷ traffic | 1M ÷ 500,000 = **2 per click** |

:::danger[Must Know — Exam Critical]
**CPM is what you're charged; CPC and CPL are derived.** Memorise the chain: *Spend and CPM give impressions → CTR gives traffic → traffic-to-lead rate gives leads → spend ÷ leads = CPL.* You can start from a CPM buy and still report a cost-per-click and cost-per-lead to your CFO.
:::

**How do they even know a click became a lead?** A **tracking pixel** — a snippet of JavaScript on your site that reports the signup back to the ad platform. LinkedIn's newer **Revenue Attribution Reporting (RA)** goes further: it connects LinkedIn to your CRM (e.g., Salesforce) so when sales logs an opportunity or a closed deal, revenue attributes back to the campaign — hard data your CFO cannot dismiss as fluff.

---

## What Is Vibe Coding?

Here the session pivots to the demo — and to the big idea of Module 2.

> **Professor:** "Vibe coding is using plain English. Even if you don't know anything about tech, you're not an engineer — you can still build technology applications, automated workflows and intelligent agents by giving plain-English prompts, just like you use ChatGPT or Claude."

| Vibe-coding platform | Note from class |
|---|---|
| **Lovable** | The professor's personal favourite — what he built both demos on |
| **Claude Code** | "Fantastic platform" |
| **Cursor** | Great for playing with different models |
| **Vercel** | Mentioned by a student |
| **Codex** (ChatGPT) | A student called it a pleasant surprise lately |

:::tip[Memory Hook — "Talk, don't type code"]
Vibe coding = you describe the app or agent in everyday English (the professor even used **voice input**), and the platform writes and wires the software for you.
:::

---

## Agent #1: Prospect Persona Pro — From a URL to a Sent LinkedIn Message

The business use case: the professor consults for **Simon Kucher**, which sells to **CXOs on the commercial side** — CRO, CSO, CMO, chief of pricing, monetisation, loyalty (never the CIO). His vision: *type one website, and the agent does the entire top-of-funnel.*

| Step | What the agent does | Tool layer |
|---|---|---|
| 1. Input | You paste a company website URL | Lovable app front-end |
| 2. Research | AI crawls the site and infers the **Ideal Customer Persona (ICP)** | ChatGPT (via API key) **or** Lovable's own AI |
| 3. Enrichment | Turns the broad persona into real names, titles, companies, LinkedIn profiles, emails | Clay / Apollo / Snov / **Hunter.io** |
| 4. Outreach | Sends a connection request from *your* LinkedIn, then an automated personalised first message on accept | HeyReach / Buzz / **Expandi** |

He demoed it on Razorpay, Nykaa and **Microsoft** — the agent found 10 decision-makers (Brad Smith, the president, among them), and sent connection requests from his own profile via Expandi. Once a prospect accepts, they get a templated-but-personalised opener, and then **the human takes over**.

:::tip[Important]
The AI layer and the enrichment layer are **separate choices you plug in with API keys**. Using your own ChatGPT/Claude key means Lovable doesn't burn its credits on the "thinking"; it just uses the output. Lovable also has a native tie-up with Hunter.io, so a few dollars of Lovable credits can replace a separate enrichment subscription.
:::

### The Enrichment Engine Explained

A **data-enrichment tool** converts a vague lead definition ("senior sales/marketing CXOs at Microsoft") into a complete, contactable profile (name, title, LinkedIn URL, email).

| Enrichment tool | Note from class |
|---|---|
| **Clay (clay.ai)** | Called the world's #1, founded by a couple of Indians |
| **Apollo.io** | "Fantastic platform" |
| **Snov.io** | A tool he'd discovered that same day — natural-language search |
| **Hunter.io** | Solid, and natively integrated into Lovable |
| **Lusha** | The pre-AI classic — a browser toolbar that pulls emails off LinkedIn profiles |

---

## Agent #2: The Nurture Machine — Research to a Four-Email Drip, Untouched by Human Hands

The story: **Prasoon** joins Simon Kucher. His partner says, *research prospects and set up meetings for me.* Prasoon knows nothing about the firm yet — so he lets an agent do it.

| Step | What the agent does | Tool layer |
|---|---|---|
| 1. Research | Studies Simon Kucher using native AI | Lovable AI |
| 2. Create | Writes a **four-step drip nurture email journey** | Lovable → pushes into Brevo via API key |
| 3. Enrich | Pulls a prospect list with emails | Hunter.io |
| 4. Review & send | Prasoon reviews drafts, then switches the drip on | Brevo (marketing-automation platform) |

The punchline: **Prasoon wrote not a single word.** Lovable used his Brevo API key to create four live email templates directly inside Brevo — "Why is growth fragmenting across boardrooms," "Pricing in a tariff-shock world," "Beyond the pilot: GenAI that moves revenue," and a closer, "Book a growth diagnostic," whose button opens a sales-call booking page. Not perfect, but a first draft beats a blank slate.

:::tip[Important]
**Prompt discipline matters.** The agent returned three or four prospects from the same company (Unilever) because the prompt didn't say "no more than one person per company." And he capped it at 10 prospects to conserve free-trial credits. Your output is only as good as the constraints you write.
:::

### Snov.io, Live

To show enrichment by itself, he typed plain English into **Snov.io**: "Find me HR directors in India" → a list from Target and others. Then he refined on the fly — "only companies with annual revenue over 1 billion," "give me CHROs, not HR directors," "company revenue range 1 billion plus." It mostly obeyed, though it once misread "1 billion" as "1 million," so you nudge it.

:::note[Good to Know]
Snov.io's free trial gives **10 natural-language prompts**. Across these tools you'll hit credit caps fast — the professor's standing tip: sign up for free trials, but **remove your card before the trial ends**.
:::

---

## The One Rule: Automate the Grunt Work, Keep the Judgment

A student worried these agents just add to the spam everyone already ignores. The professor's answer ties back to the three broad uses of AI he'd taught earlier — **(1) generative AI, (2) automation of workflows, (3) human-judgment augmentation** — and places these agents firmly in bucket two.

> **Professor:** "What is being outsourced to AI is the research — the grunt work of researching the company, identifying prospects, finding their email and phone, setting up the automation, sending that initial connection request. I'm not outsourcing the sales call, the discovery call. That is not being outsourced."

:::danger[Must Know — Exam Critical]
AI here is a **productivity unlock, not a replacement for judgment.** Roughly 80% of the first message is templatised; 20–30% is dynamic (name, industry). LinkedIn caps manual connection requests at ~100/week, so real scale comes from **linking multiple trusted profiles** and sending ~10/day each. At CES, Optra sent requests from the known CEO's and category heads' profiles (not an unknown's) and had meetings booked before landing in Berlin. The AI does the volume; the human does the deal.
:::

---

## Keeping It Out of the Spam Folder

On a deliverability question, the professor gave a mini-playbook:

- **Warm up the domain.** Don't blast 20,000 emails on day zero. Start with 5, then 10, 50, 100, 200 — to real contacts who'll open and click — so your sending domain earns authority.
- **Buy an exclusive IP, not a co-mingled one.** The default on most platforms is a shared IP; if a spammer shares it, *you* get penalised for their behaviour. An exclusive IP means you alone control your reputation.
- **Go text-heavy, avoid images** to land in Primary rather than Promotions/Spam.

---

## "Is It Ethical?" Is the Wrong Question

Asked about the ethics of scraped contact data, the professor reframed it bluntly.

> **Professor:** "Ethics — that's a dangerous question to ask a marketing person. The question you need to ask is: is it legal?"

Enrichment tools scrape **publicly available** information — event directories, listings, public profiles — and operate inside each geography's legal framework, including GDPR-compliance in Europe. What isn't public (your WhatsApp chats, a number you shared privately) is off-limits. Public and legal: fair game. Private: not.

---

## Your Turn: The Hands-On Build

The class then split into 18 study-group breakout rooms to build their own agent in ~20 minutes and present next session. The suggested blueprint mirrors the demo:

**Website URL → AI research → prospect list → either an email flow (Brevo) or a LinkedIn flow (connection requests via an automation tool).**

Pick one path, wire it with free trials, and show something working — creativity on the use case is encouraged.

---

## Recipe Chain

**Where Session 19 sits:** Module 1 taught you *how to decide* — personas, own vs rent, channel strategy. Module 2 teaches you *how to do it* with AI. Session 19 is the pivot from theory to a keyboard: it takes the persona and funnel logic from earlier sessions and shows how **vibe coding** turns them into running agents that research, enrich, and reach out — while you keep the judgment calls.

**Previous → this → next:** persona + channel strategy → *build AI agents that execute the top-of-funnel grunt work* → students present their own agents and the course heads toward wrapping up AI-powered execution.

---

## Key Terms to Remember

| Term | One-line meaning |
|---|---|
| **Vibe coding** | Building apps, workflows, and agents in plain English — no coding background needed |
| **AI agent / workflow** | An automated chain of steps (research → enrich → outreach) you assemble once and run on demand |
| **Data enrichment** | Turning a vague lead definition into complete, contactable profiles (name, title, LinkedIn, email) |
| **ICP** | Ideal Customer Persona — the specific decision-maker a product should sell to |
| **MQL vs SQL** | Marketing-Qualified (firmographics check out) vs Sales-Qualified (shows real interest in the first chat) |
| **CPM / CPC / CPL** | Cost per 1,000 impressions (charged) vs derived cost per click vs derived cost per lead |
| **Tracking pixel** | JavaScript on your site that tells the ad platform a click became a lead |
| **Revenue Attribution (RA)** | LinkedIn feature linking ads to your CRM so revenue attributes back to campaigns |
| **Nurture / drip campaign** | A scheduled sequence of emails that warms a prospect toward a meeting |
| **Exclusive vs co-mingled IP** | A sending IP you alone control vs a shared one where others' spam hurts your reputation |
| **Account-Based Marketing (ABM)** | Targeting a hand-picked list of specific companies and people, not a broad audience |

---

## The Real-World Takeaway

Riya had been a management consultant for exactly nine days when her partner dropped a quiet bomb on her desk: "Find me thirty new enterprise prospects and get meetings on my calendar. I don't have time to chase them — that's why I hired you." She nodded confidently and then spent the evening quietly panicking. She knew nothing about the firm's clients yet, had never written a sales email, and the idea of manually hunting LinkedIn profiles for thirty CROs made her want to lie down.

So she did what the professor had shown. She opened a vibe-coding platform and, in plain English, described what she wanted: read our firm's website, figure out who we sell to, find real people who match, pull their emails, and draft a sequence of emails that sounds like us. She didn't write a line of code. She wrote instructions, the way you'd brief a sharp but literal intern.

Twenty minutes later she had a four-email nurture journey sitting inside the firm's email tool and a list of named decision-makers with verified addresses. It wasn't perfect — the list clumped three people from the same conglomerate because she'd forgotten to say "one per company," and the second email was a little stiff. But it was a *draft*, not a blank page. She fixed the prompt, tightened two subject lines, and sent the sequence to her partner for a glance before switching it on.

Here's what Riya understood that her classmates chasing fancier tools missed: she hadn't outsourced the *thinking*. She still decided who mattered, still judged whether a reply was worth a real call, still owned the actual sales conversation. What she'd handed the machine was the grunt work — the crawling, the enriching, the first-draft writing, the tedious one-at-a-time outreach that used to eat a junior's entire week.

Two weeks in, her partner had four warm meetings he hadn't lifted a finger for. He assumed Riya had worked nights. She'd actually worked smart.

**The future of marketing execution isn't learning to code — it's learning to delegate to machines in plain English, while keeping the one thing they can't do: judgment.**
