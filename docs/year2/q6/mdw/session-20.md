---
sidebar_position: 21
title: "Session 20: The Last Build — AI Outreach Agents, the App Store Game, and What Only a Human Can Do"
---

# Session 20: The Last Build — AI Outreach Agents, the App Store Game, and What Only a Human Can Do

*The final class turns theory into a live workshop: students ship their own AI sales-outreach agents, the professor asks the hardest question of the course — "if AI can do all this, why hire a marketer?" — and then hands over one last playbook, App Store Optimization, before saying goodbye.*

---

:::info[Priority Map — What to Focus On]
**Must know (exam-critical):** The three-step AI outreach pipeline (Research → Enrich → Reach); why LinkedIn outreach beats cold email; the two conditions under which cold email works; **ASO = metadata (visibility) + creative (conversion)**; how AB testing works (control/champion vs. challengers, equal traffic, let data decide).

**Important (supporting):** LinkedIn automation safety caps; iOS vs. Android ASO differences; mobile attribution vs. engagement analytics; the real secret sauce humans bring (business context, judgment, accountability).

**Context (background/colour):** The tool stack (Lovable, Hunter, HeyReach, Brevo); the Healthify ASO cases; why consulting firms are thriving despite AI; the Branch.io negotiation story.

**Exam format:** The professor confirmed the end-term is **all MCQs**, "fairly straightforward," drawn entirely from what was discussed in class. The hands-on projects do **not** need to be submitted — but keep them handy.
:::

## Picking Up the Thread: From the Whiteboard to the Builder's Chair

The whole second module has been building toward this. Sessions covered personas, journeys, search, channels, and AI tools — and the last brief was simple: **build a working AI agent that finds prospects and reaches out to them.** This session opens with students demoing exactly that, screen by screen.

The pattern was the same across every team. Someone would open Lovable (or an alternative like Antigravity, Claude, GitHub Copilot, even Google Apps Script), describe a sales workflow in plain English, and watch it assemble a small web app that researches a company, pulls decision-makers, and drafts outreach. Almost everyone hit the same wall: **free-tier tokens ran out** right before the final send. The professor's repeated fix — top up with a small credit (roughly 500 rupees / USD 5) and let it finish. The point was never a polished deliverable: the projects don't need to be submitted, but keep them handy.

## The Build: An AI Sales Agent in One Prompt

Every student project, stripped down, was the same three-stage machine. The professor kept re-drawing it for each team.

| Stage | What it does | Tools students used |
|-------|-------------|--------------------|
| **1. Research** | Give it a company website URL; it studies the business, its themes, and its ideal customer profile (ICP) | Lovable / Antigravity / Claude / GitHub Copilot |
| **2. Enrich** | Generate a list of senior decision-makers and find/verify their emails and LinkedIn profiles | Hunter.io, Clay connector |
| **3. Reach** | Push those leads into an outreach tool and send personalized messages | HeyReach / Expandi (LinkedIn), Brevo (email) |

The key workflow lesson: **spend your scarce credits only on the marketing piece.** Don't ask the AI to build a website from scratch — that burns credits fast and isn't a marketing use case. Point it at an existing site, let it define the ICP, enrich the list, and then hand the leads to the outreach platform.

A clean example came from one team: enter a brand's domain → the agent extracts the brand's offerings → builds personas → finds partner brands and stakeholders → drafts subject lines and email bodies you can edit in a chat box → approve → send. End-to-end in about ninety minutes of prompting and bug-fixing.

### What the Demos Revealed

No two teams built the same thing, which is the point — the same pipeline flexed to very different jobs. A few representative builds:

| Student build | Job it did | Technique worth stealing |
|--------------|-----------|-------------------------|
| Trade-fair lead finder | Enter an exhibition name + website, get Indian companies that might buy a sponsorship booth | Added a **manual review** step to approve/reject each company before enrichment |
| Partner-brand matcher (freelance marketer) | Enter a brand's domain → personas → *collaboration* partner brands + the angle + stakeholders | Used AI to find **collaboration opportunities**, not just direct prospects |
| Persona-led prospector | Pulled real decision-makers and labelled them ("regional growth leader," "procurement gatekeeper") | Built on an existing **Claude project** already loaded with company context |
| Apps Script + Gemini agent | A G-Sheet that pulls Hunter data, drafts a personalized email per person, and reads replies to schedule calls | Deliberate **human-in-the-loop** approval before any send |

Two recurring "gotchas" the professor flagged: a request that is never accepted on LinkedIn is a dead end, and asking the agent to *build a website* (rather than reuse one) silently drains your credits.

:::note[Good to Know]
**The free-trial / credits gotcha.** Almost every tool here (Hunter, HeyReach, Brevo) works on a free trial — only Lovable usually needed a small top-up to finish the send. If you sign up for a tool "just to try it," **remove your card afterwards** so a free trial doesn't quietly convert into a paid charge. And never burn tokens on infrastructure the web already gives you free.
:::

:::danger[Must Know — Exam Critical]
Every AI outreach agent follows the same pipeline: **Research the company → Enrich the lead data (find and verify contacts) → Reach out via LinkedIn or email.** The AI handles the mechanics; your job is to point it at the right target, the right ICP, and the right channel. Credits (and effort) should go to the *communication* step, not to rebuilding infrastructure the web already gives you for free.
:::

## Why LinkedIn Beats Cold Email — Almost Every Time

The single most repeated piece of advice all session: for B2B, **choose LinkedIn outreach over cold email.**

> **Professor:** "Nothing beats sending a LinkedIn request. On LinkedIn I can see the profile, the company they've worked in, where they studied — the pedigree. A cold email feels spammy, nameless and faceless. I'd recommend LinkedIn outreach any day over email."

The LinkedIn sequence is a mini-workflow in itself: send a **connection request first** (ideally with a short, contextual note), wait for them to accept, add a delay, then send the first message, wait, and send one polite follow-up. The moment they reply, the automation ends. If a request is never accepted, it's a dead end — there's nothing more you can do.

Cold email isn't banned outright, but it only works under two hard conditions:

> **Professor:** "Cold emails work only if two conditions are met. One, the scale needs to be enormous — millions of emails — because the open and click rates are so low. Two, you need a really amazing, jaw-dropping offer."

He gave the example of a Thursday flash sale at a travel-tech company — rooms normally 1,000 rupees a night sold at 99 rupees for just four hours — blasted to 10 million addresses. That clickbait-level offer at that scale is what makes cold email pay. A blast to 50–60 people will not.

One more pro detail: serious brands never send cold email from their **own domain**. Flipkart's "Big Billion Days" mails don't come from flipkart.com — they come from a throwaway domain — precisely to protect the main domain's **deliverability and domain authority** from spam complaints.

:::tip[Important]
**LinkedIn automation has safety caps — respect them.** LinkedIn doesn't officially endorse these tools, so an aggressive account can get blocked or blacklisted. The official ceiling is ~100 connection requests per week, but the professor advised staying conservative: around **10 a day, and 50–70 a week**. Unblocking a flagged account is a real pain.
:::

:::tip[Memory Hook — "Research → Enrich → Reach"]
Three words are the whole outreach agent. **R-E-R.** Everything else — Lovable, Hunter, HeyReach, Brevo — is just plumbing underneath those three verbs.
:::

## The Hardest Question of the Course: If AI Does It All, Why Hire a Marketer?

Mid-session, the professor paused the demos and asked the philosophical question the whole module had been circling:

> "With everything being so relatively easy now with AI, what is the real role of marketers? What is the secret sauce a human marketer brings to the table?"

Students offered creativity, understanding human sentiment, building trust, final judgment, and the "wow factor" that AI — sticking rigidly to prompts — rarely produces. All valid. But the professor sharpened it into one answer by reframing the question as a hiring decision.

> **Professor:** "Two or three years ago, hiring a marketing-automation person, I'd look for their technical ability to build workflows and run ads. Now AI does that as well, if not better. What differentiates a human is that they understand the business really well and can bring that business context. These are large language models — they know very little about your business nuance. For that, you need a human being."

So the skill market has flipped: **technical execution is now a nice-to-have; deep business and domain context is the secret sauce.** Two related points landed hard:

- **Prompt engineering is a *declining* skill.** As models get better at understanding messy, imperfect language, "asking the perfect question" matters less. He cited Aravind Srinivas, founder of Perplexity, who trains his model using his mother's grammatically-broken English — the philosophy being *the user is always right; the product must be smart enough to understand even a "dumb" prompt.*
- **Taste and lived experience** keep the human in the loop — carving the signal out of the noise is something a model trained on the whole internet still can't do for *your* specific business.

:::note[Good to Know]
**Why are consulting firms (McKinsey, BCG, Bain, Simon-Kucher) thriving instead of being wiped out by AI?** The "conspiracy theory" is that these firms feed their expertise into enterprise AI subscriptions that will eventually replace them. The professor's counter: a CEO spends a million dollars on a consultant not for the slides, but for **human accountability and validation** — a stamp of approval to show the board.

> **Professor:** "AI won't take legal responsibility for its actions. It will always say 'I'm just a model.' A CEO hires a McKinsey to validate a high-stakes decision — because he's answerable to the board. That's why consulting firms' business is increasing even more."

The memorable framing: **"Where does the buck stop?"** On big, risky, strategic calls, it has to stop with a human.
:::

## App Store Optimization: SEO's Cousin for the App World

With 30 minutes left, the professor opened the last topic he'd deliberately saved for the end — **App Store Optimization (ASO)** — and asked the class *not* to look it up on AI.

The definition to remember: **ASO is the mirror image of SEO, but inside the app ecosystem** (Google Play Store and Apple's App Store). Everything you do on the browser side to rank your website for relevant searches, you now do to rank — and get installed — inside the stores.

ASO is a function of two things, and the professor deliberately listed them in counter-intuitive order:

1. **Creative + Conversion** — getting the person to actually tap "Install."
2. **Metadata** — the keyword data that makes your app *visible* for relevant searches.

> **Professor:** "No matter what kind of Shakespearean, Oxfordian English you use in your title and description, 90% of your conversion is determined by the creative — the screenshots and videos at the top."

**Visibility** (metadata) is step one: the right keywords so your "Healthy Family" app shows up when someone searches "best calorie counter in India." **Conversion** is step two: the tap-to-install, which is driven overwhelmingly by the **screenshots, feature graphic, video, and ratings/reviews**. Nobody installs an app rated under four stars. And like SEO's bounce-rate signal, fast uninstalls tell the store your app is weak and quietly push your visibility *down*.

:::danger[Must Know — Exam Critical]
**ASO = Metadata (gets you *seen*) + Creative/Conversion (gets you *installed*).** Metadata drives visibility for keyword searches; creative (screenshots, videos, feature graphic) plus ratings/reviews drives the install decision — roughly **90% of conversion is the creative**. Engagement signals (uninstalls, low usage) feed back and lower your ranking, exactly like bounce rate in SEO.
:::

### iOS vs. Android: The Variables Differ

The two stores reward slightly different inputs — a favourite exam distinction.

| Element | Apple App Store (iOS) | Google Play Store (Android) |
|---------|----------------------|----------------------------|
| **Declared keywords** | **Yes** — you explicitly declare a keyword set (plus an expanded pool) | **No** — Google infers your keywords from title, description, screenshots |
| **Text metadata** | Long description, title, subtitle | Long description, title, **short description** |
| **Creative** | Icon, screenshots | Icon, **feature graphic** (top banner), screenshots |
| **AB testing** | Not native — connect via SplitMetrics or StoreMaven (single sign-on) | **Native** — run it directly from the Play Console with your admin account |

## Let Data Decide: AB Testing the Store Listing

You don't change a high-traffic listing on a CEO's whim — the stakes (100,000+ daily impressions) are too high. You **AB test.**

> **Professor:** "The beauty of AB testing is it doesn't have to be my word against someone else's. You let data decide who is right or wrong."

How it works: keep your current design as the **control group (the champion)**, create one or two **challengers (A and B)**, and throttle **equal traffic** to each — 33/33/33 — until the test reaches **statistical significance**. The platform then reports which variant converts best (highest tap-to-install, lowest bounce), and the winner becomes the new champion. On the web you'd use tools like Google Optimize, Mixpanel, or Optimizely; on Android you do it natively; on iOS you route through SplitMetrics or StoreMaven. Supplement the quantitative test with **qualitative user testing** for depth.

The professor's Healthify cases made it concrete:

- **Feature-graphic test:** a "split-screen" design vs. an "iconography" design. Both showed similar *upside*, but the split-screen had a much smaller chance of *decline* — so it won on risk.
- **Screenshot test:** a bold, monochrome "high-impact" design vs. a dumbed-down "1-2-3-4-5" step-by-step version. The oversimplified version won, hitting a **24% click-to-install rate — about 2 points above the control.**

That 2-point gap sounds tiny. It isn't:

That 2-point gap sounds tiny. It isn't. On ~200,000 daily impressions, a 2% lift is roughly 4,000 extra installs a day — over 120,000 incremental installs a month, without a single extra marketing rupee. Hold the downstream conversion rates constant and the professor pegged that at **roughly USD 100,000 in incremental revenue every month**, earned purely by AB testing the creative. Google's engine reported ~75% confidence that the winning design would lift funnel conversion by at least 10% over time.

:::tip[Important]
**ASO is one of the most in-demand — and scarce — marketing skills in India.** Good SEO talent exists; good ASO talent is extremely hard to find, because the best people run their own agencies or are locked inside giants like Flipkart, Myntra, or Amazon. Huge demand, thin supply. If you're choosing a marketing specialisation, ASO is a great bet. (Healthify itself had to hire a London agency, "The ASO Co," to fix its organic rankings — which later held scale steady even when paid budgets dried up.)
:::

## Beyond the Usual: Ad Networks and Mobile Analytics

Two quick landscape notes closed the teaching:

**Ad networks beyond Meta and Google.** For mobile campaigns you often tap specialist networks: **AdMob** (now part of Google), **Leadbolt**, and Google's **UAC/UAP**, which became especially valuable after TikTok's ban in India because it reaches exclusive young (teen–early-20s) inventory TikTok used to own.

**Mobile analytics split into two categories:**

| Category | What it does | Platforms |
|----------|-------------|-----------|
| **Attribution** | Which channel drove each install and the maximum ROI | AppsFlyer, Adjust, Branch.io |
| **Engagement** | In-app behaviour, push notifications, user journeys (marketing automation for apps) | CleverTap, Google Analytics mobile SDK |

Attribution is *hard* because, unlike the web, once a user installs an app the tracking signal "goes into a black hole" — connecting the install back to the ad and then forward to continued usage is genuinely difficult. For years only **AppsFlyer and Adjust** could do it (a Pepsi-vs-Coke duopoly; Adjust so expensive that Nike and Adidas were its clients).

:::note[Good to Know]
**The Branch.io negotiation story.** When Branch.io entered with a simple pitch — "all the features at 20% of the cost" — it swept Southeast Asia and China. Healthify was too deeply integrated with its incumbent to switch, so instead of migrating, it used Branch's quote as a **bargaining chip** and renegotiated its existing contract **down by 50%.** A neat reminder that a competitor you *don't* buy can still save you money — a case study in negotiation tactics, not just analytics.
:::

## Recipe Chain

**Session 20 is where the course lands — and closes.**
Module 1 rebuilt marketing strategy for the digital world (unscaled economy, own vs. rent, micro-segments, personas, journeys). Module 2 turned strategy into tooling — and this final session fused the two: students **built working AI outreach agents** (Research → Enrich → Reach), learned that **channel choice and trust still matter** (LinkedIn over cold email), confronted the course's biggest question — **what humans still own when AI does the execution** (business context, judgment, accountability, taste) — and picked up the last organic-growth lever, **App Store Optimization** (metadata + creative, proven out by AB testing).

The thread from Session 3 holds all the way here: the persona tells you *who* to reach and *what* will convert them; the AI agent and the store listing are just faster, cheaper ways to deliver that tailored message. The tools changed; the foundation didn't.

**There is no next session.** The professor closed the course here — thanking the class, inviting everyone to stay in touch on LinkedIn, and wishing them luck in their careers.

## Key Terms to Remember

| Term | One-Line Definition |
|------|-------------------|
| **AI Outreach Agent** | A prompt-built app that researches a company, enriches lead data, and sends personalized outreach — the Research → Enrich → Reach pipeline |
| **Data Enrichment** | Turning a company/name into usable contacts — verified emails and LinkedIn profiles (via tools like Hunter.io) |
| **Cold Email (two conditions)** | Only works at *enormous scale* AND with a *jaw-dropping offer*; always sent from a throwaway domain to protect deliverability |
| **Domain Authority / Deliverability** | A domain's email reputation; spam complaints degrade it, which is why cold blasts use separate domains |
| **ASO (App Store Optimization)** | SEO's app-ecosystem cousin: metadata for visibility + creative for conversion |
| **Metadata vs. Creative** | Metadata (keywords, title, description) gets the app *seen*; creative (screenshots, video, feature graphic) gets it *installed* — ~90% of conversion |
| **Declared Keywords** | Keyword set you explicitly specify on iOS; Google Play infers keywords itself |
| **AB Testing** | Split equal traffic across a champion (control) and challengers, reach statistical significance, let data pick the winner |
| **Champion / Challenger** | The current design (champion/control) vs. the new variants (challengers) being tested against it |
| **Mobile Attribution** | Identifying which channel drove each install and ROI (AppsFlyer, Adjust, Branch.io) — hard because post-install signal is a "black hole" |
| **Mobile Engagement Analytics** | In-app behaviour, push, and journeys — marketing automation for apps (CleverTap, GA mobile SDK) |

## The Real-World Takeaway

On the last evening of the course, a student named Shashank shared a screen that, two months earlier, he couldn't have built. He typed the name of a trade fair, the number of leads he wanted, and watched a tool he had assembled from an English prompt research the event, discover Indian companies that might sponsor a booth, and find their contacts. He had run out of free credits before the final send — but the machine worked. A year ago, this was a quarter-million-rupee project for an agency. He'd done it between demos.

That is the paradox the professor made the class sit with. The execution — the research, the enrichment, the drafting, the sending — had collapsed to almost nothing. Anyone in the room could now do, in ninety minutes, what used to need a team and a budget. So the obvious fear: if the work is this easy, is the marketer obsolete?

His answer ran the other way. When execution becomes free, the *scarce* thing isn't the ability to run the tool — it's knowing which company is worth chasing, which VP will actually reply, which message will build trust instead of triggering a spam filter, and whether to spend the company's credibility on this campaign at all. The AI can draft a thousand perfect-looking emails. It cannot tell you that cold email will quietly burn your domain, that a LinkedIn request feels human while an email feels like noise, or that the CEO you're tempted to target is too senior to ever accept. That judgment comes from understanding the business — and from being a person willing to put their name on the decision.

The same lesson was hiding in the App Store story. Healthify's biggest wins didn't come from a cleverer tool; they came from *testing a human hunch against real data* — a dumbed-down screenshot beating a beautiful one, a 2% lift compounding into USD 100,000 a month. The tool measured. The human decided what to try, and had the taste to read the result.

So the course ended where it began: with a person, not a platform. The digital world rents you infinitely cheap execution — agents, enrichment, automation, analytics. What it can never rent you is the business context to aim it, the trust to close with it, and the accountability to own the outcome.

**When the machine can do everything, the marketer's job is to be the one thing the machine can't be: the human the buck stops with.**
