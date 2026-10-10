---
sidebar_position: 3
title: "Session 2: From Data to Delight — How Product Managers Find What Customers Actually Value"
---

# Session 2: From Data to Delight — How Product Managers Find What Customers Actually Value

*Why the customers who visit your site but never buy are the most important ones to understand — and how a transistor-shaped music box became a bestseller by selling nostalgia*

---

:::info[Priority Map — What to Focus On]
**Must know (exam-critical):** Funnel analysis (spotting where drop-off is *drastic*); the RICE framework formula; Customer Perceived Value (CPV = TCB − TCC); the B2C and B2B value pyramids.

**Important (supporting):** Hypothesis testing; the Agile Scrum cycle; alternative prioritization (Kano, Value vs. Complexity, Weighted Scoring); Internal Reference Price; linking problem-space activities to desired outcomes (the redBus critique).

**Context (background/color):** The Saregama Carvaan nostalgia example; Tata vs. Maruti safety rating (B2B vs. B2C); Frore Systems and the Bajaj-Orbital hardware R&D story.
:::

## Quick Recap: The Two Spaces

Session 1 established two fundamental spaces every product manager lives in:

- **Problem Space** — Understanding the customer's world, their pain points, what is not working
- **Solution Space** — Designing, building, and iterating on the product

This session picks up right where we left off: now that we know these two spaces exist, how do we actually move between them? How do we use real user data to improve products, and how do we understand what "value" even means to a customer?

---

## Part 1: Using User Data for Product Improvement

New product ideas are great, but a massive chunk of product management work is not about building something brand new. It is about **making your existing product better**. And the way you do that is by listening to what the data is telling you.

### Funnel Analysis — Your Most Important Diagnostic Tool

Think of your product as a series of doors the customer walks through. At each door, some people continue forward and some walk away. Funnel analysis is simply the act of measuring how many people pass through each door.

For an e-commerce site, the funnel might look like:

| Stage | What Happens |
|-------|-------------|
| **Landing page** | User arrives at your site |
| **Product page** | User looks at a specific product |
| **Add to cart** | User puts something in the cart |
| **Checkout** | User starts the payment process |
| **Purchase** | User completes the transaction |

> **Professor Banerjee:** "The funnel represents user flow and reduction in visitor traffic through various stages of their interaction with the product to complete a transaction. Write that down. This is one very good way of getting ideas while we are iterating our existing products, and it forms a big chunk of work in product management."

The key insight is not that people drop off — of course they do. The key insight is **where the drop is drastic**. Wherever visitor traffic falls sharply between two stages, something is going wrong at that specific transition. That is your clue. That is your opportunity.

:::tip[Important]
**Funnel analysis** breaks the user journey into stages and measures drop-off between each. The exam point is not that users drop off (they always do) — it is spotting the transition where the drop is *drastically* larger, because that non-uniform fall pinpoints the problem worth solving.
:::

### How to Actually Do Funnel Analysis

1. **Define the funnel** — Create distinct stages for your product
2. **Collect data** at each stage using tools like Google Analytics
3. **Analyze** the conversion rates between stages
4. **Conduct user surveys or interviews** to understand the "why" behind the numbers
5. **Make changes** based on what you learn
6. **Monitor and iterate** — use A/B testing to validate improvements

### Hypothesis Testing — Making Educated Guesses

Once you spot a problem in the funnel, you need to form hypotheses about what is causing it. Hypothesis testing in product management means:

- Making assumptions about users or markets
- Designing experiments to test those assumptions
- Analyzing results to validate or invalidate

This can be used for understanding **willingness to pay** for a feature, identifying the right **feature level** (how much of a feature do users want?), **prioritizing features**, and **reducing risk** before committing resources.

---

## The RICE Framework — How to Decide What to Build Next

When your product backlog has fifty items and you can only build three this sprint, how do you pick? The professor recommends the **RICE framework** for feature prioritization:

| Factor | What It Measures | Higher Score When... |
|--------|-----------------|---------------------|
| **R** — Reach | Number of users impacted by this feature | More users affected |
| **I** — Impact | Degree of positive impact on user experience | Bigger improvement |
| **C** — Confidence | How sure you are it will work as expected | More certainty |
| **E** — Effort | Amount of work to build and launch | Less effort needed |

**RICE Score = (Reach x Impact x Confidence) / Effort**

Features with the highest RICE score get built first.

:::tip[Important]
Memorize the **RICE** formula and each letter: Reach, Impact, and Confidence in the numerator, Effort in the denominator. The professor's caution is testable too — use RICE for **feature prioritization only**, not for strategy evaluation.
:::

> **Professor Banerjee:** "Many people use RICE for strategy evaluation, but there are better, maybe different ways of doing strategy evaluation. I would recommend that kindly use RICE only for feature prioritization."

### Alternative Prioritization Models

| Model | How It Works |
|-------|-------------|
| **Kano Model** | Categorizes features into Basic (must-have), Performance (the more the better), and Excitement (unexpected delights) based on customer satisfaction scores |
| **Value vs. Complexity** | Plots features on two axes — value to users and complexity of development. Build high-value, low-complexity first |
| **Weighted Scoring** | Assigns weights to predefined criteria and scores each feature. Highest weighted scores win |

The professor's advice: pick a tool and be consistent. Or use two or three tools and check whether the results agree.

---

## Agile Scrum — The Engine of Product Iteration

When you know what to build, Agile Scrum is the process for actually building it. Here is the cycle:

1. **Product Backlog** — A prioritized list of features, bugs, and improvements. The product owner maintains this based on customer and business needs
2. **Sprint Planning** — The development team picks items from the backlog and commits to completing them in a time-boxed period (1-4 weeks)
3. **Daily Standups** — Short daily meetings to discuss progress, obstacles, and plans
4. **Sprint Review** — The team presents what was built, gathers feedback, and updates the backlog
5. **Sprint Retrospective** — The team reflects on the process itself and identifies improvements

### Does Agile Only Apply to Software?

A student named Anish asked whether Agile Scrum applies only to digital products. The professor used the example of a **voice-enabled air conditioner** to show that even hardware products with software components can use this process. You would break it into parts — voice recognition, device driver, middleware — assign teams, and run sprints.

But the professor was honest about the limits: hardware R&D often takes much longer than a sprint. When Bajaj Auto was trying to create a motorcycle with both high power and good mileage, they partnered with a firm called Orbital to work on fuel injection technology. That kind of R&D cannot happen in six weeks.

> **Professor Banerjee:** "When it comes to the digital platform where it is a matter of putting a certain set of libraries together, Agile works better. In hardware or automobiles, improvements take a very long time — it involves R&D."

The professor also shared an example of **Frore Systems** (FRORE), a US startup founded by two engineers of Indian origin. They developed MEMS technology — tiny strips that cool microprocessors without a fan, replacing the dated fan-based cooling in laptops and phones. Even this cutting-edge hardware company iterates using similar principles. They are now in Series D funding and being considered as suppliers for major device manufacturers.

### Waterfall vs. Agile

People traditionally used the **Waterfall model** (sequential steps, each completed before the next begins), but Agile Scrum is now preferred for product improvements because of its flexibility, collaboration, faster time to market, and built-in assumption that iterations will keep happening.

---

## Part 2: The Concept of Value — What Are Customers Actually Buying?

Here is where the session takes a philosophical turn, and it is arguably the most important part.

> **Professor Banerjee:** "This concept of value is applicable for brick-and-mortar products like automobiles and consumer durables as well as for online digital products. The concepts are applicable — the way they are applied may be slightly different."

He used a wonderful analogy: a hockey stick and a golf club are both J-shaped tools used to hit a ball. One puts it in a goal, the other puts it in a hole. But you cannot play hockey with a golf club. Conceptually similar, practically very different.

---

## B2C Value: Customer Perceived Value (CPV)

For long-term sustainability, businesses need to build customer satisfaction. And customer satisfaction comes from delivering **Customer Perceived Value (CPV)**.

The core idea: **Buyers buy from the company they perceive offers the highest CPV.**

### The CPV Equation

**CPV = Total Customer Benefits (TCB) - Total Customer Costs (TCC)**

Or alternatively: **CPV = TCB / TCC**

The key word is "perceive." This is about what the customer *believes* they are getting, not necessarily what they are objectively getting.

:::danger[Must Know — Exam Critical]
**Customer Perceived Value (CPV) = Total Customer Benefits (TCB) − Total Customer Costs (TCC)** — and the load-bearing word is *perceived*. TCB spans product, service, personnel, and image value; TCC spans monetary, time, energy, and psychological cost (price is only one of four). Buyers buy from whoever they believe offers the highest CPV, so know both the equation and its four-plus-four components.
:::

### What Makes Up Total Customer Benefits (TCB)?

| Benefit Type | Components |
|-------------|-----------|
| **Product Value** | Performance, durability, reliability, style, design |
| **Service Value** | Delivery, maintenance, responsiveness |
| **Personnel Value** | Knowledge, handling, courtesy |
| **Image Value** | Customer perception of the product/company brand |

### What Makes Up Total Customer Costs (TCC)?

| Cost Type | What It Means |
|-----------|-------------|
| **Monetary Cost** | The price tag |
| **Time Cost** | How long it takes to evaluate, purchase, and start using |
| **Energy Cost** | Physical and mental effort required |
| **Psychological Cost** | Stress, anxiety, uncertainty involved in the decision |

Notice that price is just one of four costs. A product could be cheap but if it takes forever to set up, requires constant attention, and makes you anxious about whether it will work — the total cost is high.

---

## The B2C Value Elements Pyramid

:::tip[Important]
The **value pyramids** are highly testable. B2C has four levels — Functional, Emotional, Life-Changing, Social Impact (objective at the base, subjective at the top). B2B has five — Table Stakes, Functional, Ease of Doing Business, Individual, Inspirational. Higher elements differentiate and build loyalty; know the ordering and be ready to classify a given benefit.
:::

The professor introduced a more modern framework, currently used by consulting firms like Bain, that organizes value elements into a pyramid with four levels:

### Level 1: Functional (Base)

These are the practical, tangible things a product does:

| Element | What It Means |
|---------|-------------|
| Saves time | Does the same thing faster |
| Simplifies | Makes complicated things easier |
| Makes money | Helps the user earn or save |
| Reduces risk | Lowers financial or physical exposure |
| Organizes | Brings order to chaos |
| Integrates | Connects things that were separate |
| Connects | Links people together |
| Reduces effort | Less work required |
| Avoids hassles | Removes friction and annoyance |
| Reduces cost | Cheaper than alternatives |
| Quality | Better materials, construction, reliability |
| Variety | More options and choices |
| Informs | Provides useful knowledge |

### Level 2: Emotional

| Element | What It Means |
|---------|-------------|
| Reduces anxiety | Makes you feel safer about your choice |
| Rewards me | Gives a sense of achievement or satisfaction |
| Nostalgia | Connects to cherished memories |
| Design/Aesthetics | Looks and feels beautiful |
| Badge value | Signals status or identity to others |
| Wellness | Contributes to physical or mental health |
| Therapeutic value | Provides comfort or healing |
| Fun/Entertainment | Makes life more enjoyable |
| Attractiveness | Makes the user feel more appealing |

### Level 3: Life-Changing

| Element | What It Means |
|---------|-------------|
| Provides hope | Creates optimism about the future |
| Self-actualization | Helps become a better version of yourself |
| Motivation | Drives you to act and achieve |
| Heirloom | Worth passing to the next generation |
| Affiliation/Belonging | Makes you part of a group |

### Level 4: Social Impact (Top)

| Element | What It Means |
|---------|-------------|
| Self-transcendence | Expresses who you are to the world |

> **Professor Banerjee:** "When we are creating a PRD, the product manager has to be conscious that from the MRD, these are where we feel the jobs to be done have emerged. I'm giving you a broad-based checklist. This is currently used by consulting firms."

The pyramid works like Maslow's hierarchy: functional elements are table stakes, but the higher you go, the more emotionally resonant and differentiated your product becomes. A product that only delivers functional value competes on features. A product that delivers emotional or life-changing value creates loyalty.

### The Saregama Carvaan — Nostalgia as a Product

:::note[Good to Know]
The Saregama Carvaan — a vintage-radio-style box preloaded with classic songs, bought by adult children for elderly parents — is the session's memorable illustration of stacking Functional + Emotional (nostalgia) + Life-Changing (heirloom) value. Great for making the pyramid stick; more color than a standalone tested concept.
:::

The professor brought this to life with a brilliant example. Saregama (formerly the Gramophone Company of India) owned the rights to thousands of classic Bollywood songs from the 1960s-80s. The songs were always available, but nobody was paying for them.

Then they created the **Carvaan** — a small device that looks and operates like a vintage transistor radio. You turn a dial (no apps, no tech complexity) and it plays 5,000 pre-loaded songs by artists like Kishore Kumar, Lata Mangeshkar, and Mohammed Rafi. It plays them in jukebox mode — one after another, no ads, no clutter. You can even select moods.

**Who buys it?** The tech-savvy adult child. **Who uses it?** The 75-year-old parent who finds TVs tiring on the eyes, smartphones confusing, but remembers transistor radios fondly.

**What value does it deliver?**

- **Functional**: Plays music simply
- **Emotional**: Nostalgia — makes the elderly person feel young again
- **Life-changing**: Heirloom — strengthens the bond between parent and child, even grandparent and grandchild (it has Bluetooth and USB ports, so they can share music across generations)

At 3,000-5,000 rupees, it became a blockbuster gifting product. The music existed before. The technology existed before. What Saregama *created* was a new value configuration around an emotional need.

> **Professor Banerjee:** "The product of the Carvaan was always available. But the value that it gave in addition was something called nostalgia, and it enhanced the bonding between parent and child."

### Measuring CPV

A student asked how you actually measure these subjective value elements. The professor mentioned several methods:

- **Conjoint Analysis** — The gold standard for measuring CPV. It reveals the trade-offs consumers willingly make between different product attributes
- **Van Westendorp Model** — Helps understand willingness to pay at different price points
- **Likert Scales** — Quantify subjective perceptions (strongly agree to strongly disagree)
- **Semantic Differential Scales** — Rate attributes on opposing pairs (modern-traditional, simple-complex)
- **Stapel Scale** — A simpler variation for quick measurement
- **Laddering Technique** — An exploratory method to uncover deeper associations (a soap's first association is cleanliness, but a deeper one might be good health)

---

## B2B Value: A Different Pyramid

In B2B, the value conversation changes dramatically. You are not selling to individuals making emotional decisions about music players. You are selling to **groups of human beings inside organizations** — and they have different pressures.

The B2B Value Elements Pyramid has five levels:

### Level 1: Table Stakes (The Floor)

Meeting specifications at an acceptable price while complying with regulations and ethical standards. If you cannot do this, you are not even in the conversation.

### Level 2: Functional Value

Addressing companies' economic or product performance needs — cost reduction, scalability, product quality. This is where most B2B companies focus their energy.

### Level 3: Ease of Doing Business

This is where B2B gets interesting:

| Category | Elements |
|----------|---------|
| **Productivity** | Time savings, reduced effort, decreased hassles |
| **Access** | Availability, breadth of offering |
| **Relationship** | Responsiveness, expertise, commitment, stability, cultural fit |
| **Operational** | Organization, simplification, integration |
| **Strategic** | Risk reduction, reach, flexibility |

Some of these are purely objective (time savings). But others involve subjective judgment — like whether the seller has a good cultural fit or genuine commitment to your organization.

### Level 4: Individual Value

Here is where the B2B pyramid reveals something most people miss: **business decisions are made by individual human beings**, and those individuals have personal concerns:

- **Personal**: Reduced anxiety, appealing design and aesthetics
- **Career**: Increased marketability, network expansion

The fear of failure nags at buyers who spend large amounts of money and make decisions that affect revenues or many employees.

### Level 5: Inspirational Value

- Helping a firm anticipate changes in its markets
- Providing hope for the future (e.g., easy migration to next-generation technology)
- Enhancing a company's social responsibility

### The Tata Motors vs. Maruti Example

The professor used this to show how the same attribute (safety rating) plays differently in B2B and B2C:

**The situation:** Tata Motors has a five-star safety rating. Maruti has a four-star safety rating. Maruti has been in the Indian market for 40 years with an excellent track record.

**In B2B (fleet operators):** The fleet buyer who is spending millions on vehicles needs to justify their decision. Choosing the five-star rated product **reduces their personal anxiety** — even if the four-star product has an equally good safety record in practice. At the point of decision, this subjective individual value element becomes a differentiator.

**In B2C (personal buyers):** The individual says, "Four stars is good enough, and the Maruti looks more stylish. I trust my own driving skills." Safety becomes a "good enough" factor, not a differentiator.

> **Professor Banerjee:** "At the point of decision, the subjective element in a B2B may suddenly become important. That is what we need to recognize when we are creating the product."

The takeaway for product managers: when you are building a B2B product and the final decision comes down to two or three equally qualified suppliers, **the subjective elements — anxiety reduction, career safety, trust — may tip the scales**. Build those into your offering.

---

## Part 3: The RedBus Case — Funnel Analysis in Action

With the value concepts established, the class turned to the RedBus case to see funnel analysis and problem-space thinking applied to a real product.

### The Business Problem

RedBus, the online bus ticket booking platform, was in the **maturity stage** of its life cycle. Users were coming to the site, searching for tickets, but **not buying**. The conversion rate needed improvement.

### The Customer Insight That Changed Everything

Using funnel analysis, the product team discovered something specific:

> **Professor Banerjee:** "Users searching for bus tickets for shorter routes seem to drop off significantly just after looking at the available bus options, as compared to those for longer routes. Kindly write this down. This is the trigger for product improvement."

The data was clear: for distances **less than 250 kilometers** (roughly 5 hours of travel), the drop-off rate was much higher than for longer routes. The drops were **not uniform** across all distances. That non-uniformity was the clue.

### Exploring the Problem Space

The product team conducted user research and identified three categories of unmet expectations for short-route travelers:

| Expectation | What Short-Route Users Wanted |
|-------------|------------------------------|
| **Flexibility** | Ability to change plans easily (short trips are less planned) |
| **Information** | Quick, clear, timely information (not too much, not too little) |
| **Cost Effectiveness** | Better value for shorter distances |

This became the **Market Requirements Document (MRD)**, which then needed to be converted into a **Product Requirements Document (PRD)**.

### The Solution That Did Not Work

The team created an MVP called **Open Ticket** — a flexible ticketing option for routes over 250 km. They ran an A/B test with 10% of users.

It flopped. Users were confused. The conversion rate did not improve.

### The Decision Dilemma

The product manager now faced four choices:

1. **Persevere** with open ticket as-is
2. **Fix it** — iterate on the MVP
3. **Drop it** completely
4. **Pivot** to a new idea

### What Went Wrong — The Class Analysis

The class discussion was rich. Here is what students identified:

**Sarang (ESP):** "The product manager rushed too quickly into the solution space. The problem is real, but he has not explored it deeply enough. The 5-second drop-off was because of bad solutioning, not because the problem statement was wrong."

**Manish:** Users visiting the site for short routes were using it as a **reference tool** — checking prices and availability, then going offline to buy tickets directly from bus operators. By showing too many options, RedBus was actually enabling pilferage.

**Manish also noted:** The interstitial screen showed two different prices (one at the top, one at the bottom), which confused customers. And the interface was only in English — a barrier for users who might navigate the app casually but struggle with English for complex booking flows.

**Gourav:** Short-distance customers were anxious about whether they would catch the bus after booking. A **live ETA feature** showing real-time bus status could reduce this anxiety. Also suggested standardizing prices across vendors and providing flexible cancellation.

**Kumar Singh** offered what the professor called a **"brilliant idea"**: a **monthly bus pass** at a fixed price for short-route commuters. This addresses all three pain points at once — flexibility (ride anytime), simplicity (no booking each time), and cost effectiveness (bulk pricing).

> **Professor Banerjee:** "Everybody, kindly give Kumar Singh a big hand. This is very brilliant."

### The Professor's Key Insight: Linkage to Desired Outcomes

The professor's most important critique was not about any specific solution. It was about the **process**:

> **Professor Banerjee:** "When you are defining the problem space, it is not adequate to just talk of the items in the problem space. There has to be a linkage between each of the activities you have identified in the problem space and the desired outcome. I could not find evidence of this in the case."

In plain English: it is not enough to say "users want flexibility." You need to show that **if** you add flexibility, **then** conversion rates will improve by X%. Without that linkage, you are guessing.

He used an analogy every Indian student understood: a student targeting 96% in their 10th standard exams who scores 94% in maths/science but only 60% in languages. The instinct is to push harder on maths (where they are already strong), but the **scope for improvement is massive** in languages. The linkage between effort and desired outcome points clearly to where resources should go.

### The Discount Trap

A student brought up a common real-world scenario: when product and marketing teams sit at the same table, marketing often says "let us throw discounts at it." The professor acknowledged this works in the short run but warned about a dangerous concept:

**Internal Reference Price** — Every customer carries a mental price they consider "fair" for a product. Discounts slowly lower this internal reference price. Getting it back up is, in the professor's words, "oh my god, a very very humongous task."

And there is a second problem: the **equalizing factor**. If competitors match your discounts, you are back to a level playing field — but now everyone is earning less per transaction.

### On Pivoting: The Product Vision Document

When is it okay to pivot? The professor's answer: pivoting needs to be pre-authorized, essentially. A **product vision document** should specify areas where pivoting is acceptable — for example, "wherever we find that consumer behavior differs significantly and our conversion rates are poor, we will explore alternative approaches, even if it means pivoting." Without this, a product manager trying to pivot faces organizational resistance.

---

## When to Stop Adding Features

A student named Jagat asked a practical question: "Product improvements are a never-ending process. Where do we draw the line and just launch?"

The professor broke this into two parts:

**Part A — Product Vision drives versioning.** Before development begins, the product manager must craft a clear positioning statement and product vision. This guides what goes into version 1, version 2, etc. The positioning statement (which the professor would detail in the next session) acts as a compass.

**Part B — Separate customer-facing from internal improvements.** When the development team proposes improvements during building:

- If it is **internal** (faster code, better storage, lower bandwidth) — treat it as continuous improvement. The customer does not notice, and it can happen in the background
- If it is **customer-facing** (new feature, better usability, visible benefit) — use the RICE framework to decide whether it goes into the current version or a future one

---

## Recipe Chain

**Session 2 builds the product manager's diagnostic and analytical toolkit:**
Session 1 gave us the problem/solution space distinction and the product management lifecycle. Session 2 adds the tools: funnel analysis to spot where users drop off, RICE to prioritize what to build, Agile Scrum to build it iteratively, and the value pyramids (B2C and B2B) to understand *what customers are actually paying for*. The RedBus case shows all of these in action.

**Next session:** We move into frameworks for evaluating whether a new product idea will actually win in the market — the Buyer Utility Map (a 6x6 matrix of utility levers and buyer experience stages) and positioning statements. The Zenatix case will put these to practice.

---

## Key Terms to Remember

| Term | One-Line Definition |
|------|-------------------|
| **Funnel Analysis** | Breaking the user journey into stages and measuring drop-offs between each |
| **RICE Framework** | Feature prioritization using Reach, Impact, Confidence, and Effort |
| **Kano Model** | Categorizes features into Basic, Performance, and Excitement based on satisfaction |
| **Customer Perceived Value (CPV)** | The difference (or ratio) between total customer benefits and total customer costs as *perceived* by the customer |
| **Total Customer Benefits (TCB)** | Product value + Service value + Personnel value + Image value |
| **Total Customer Costs (TCC)** | Monetary cost + Time cost + Energy cost + Psychological cost |
| **B2C Value Pyramid** | Functional, Emotional, Life-Changing, Social Impact — from objective at the base to subjective at the top |
| **B2B Value Pyramid** | Table Stakes, Functional, Ease of Doing Business, Individual, Inspirational — captures both organizational and personal buyer motivations |
| **Internal Reference Price** | The mental price a customer considers "fair" — easy to lower with discounts, extremely hard to raise again |
| **Conjoint Analysis** | Research method that reveals trade-offs consumers willingly make between product attributes |
| **Product Vision Document** | A guiding statement that defines the product's direction and pre-authorizes areas where pivoting is acceptable |
| **MRD to PRD** | Market Requirements Document (what the market needs) translated into Product Requirements Document (what the product will deliver) |

---

## The Real-World Takeaway

Neeraj had been running the product team at GoBus for three years, and in all that time the one metric that haunted him was the short-route conversion rate. Long-haul was fine — someone booking a twelve-hour overnight bus to Bangalore planned it days ahead, entered their details patiently, and paid without blinking. But the Jaipur-to-Delhi crowd, the Pune-to-Mumbai crowd, the two-hour-on-a-Tuesday crowd — they came to the app like window shoppers at a mall. They searched, they scrolled, and they vanished.

His first instinct had been the same instinct every product manager has: build something clever. He called it FlexPass, a ticket you could buy without choosing a specific bus. His team pulled two all-nighters prototyping it, ran an A/B test on eight percent of traffic, and watched the numbers come back flat. Worse than flat — some users who saw the FlexPass screen bounced faster than the control group. His VP called it "an expensive way to confuse people."

Neeraj did what he should have done before building anything. He hired a research firm to call two hundred short-route users — people who had searched but not booked. The findings were embarrassingly obvious once he heard them. Most of these users were daily or weekly commuters. They did not want a fancy flexible ticket. They wanted three things: to know the bus would actually show up on time, to not pay more than the guy buying at the counter, and to not have to re-enter their details every single trip. One woman in Pune said something that stuck with him: "I open your app to check if the 7:15 is running. Then I walk to the stop and pay cash. Your app is my timetable, not my ticket counter."

That sentence reframed everything. These users were not failing to convert — they were converting someone else's sale. GoBus was doing the marketing, and the offline bus counter was getting the revenue.

Neeraj killed FlexPass entirely and built three things instead. A commuter pass — one payment, unlimited rides on your chosen route for a month, scanned from your phone at the door. A real-time ETA notification that pinged you ten minutes before your bus arrived at your stop. And a regional-language interface, because forty percent of short-route users dropped off at the payment screen, which was only in English.

Six months later, the short-route conversion rate had tripled. Not because Neeraj had built something sophisticated, but because he had finally done the uncomfortable work of asking why users were leaving — and mapping each answer to a measurable outcome before writing a single line of code.

**The fanciest feature in the world is worthless if you have not first understood what the customer actually values — and sometimes what they value is not a feature at all, but simply being understood.**
