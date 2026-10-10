---
sidebar_position: 3
title: "Session 2: Wizards Don't Scale — Factories Do"
---

# Session 2: Wizards Don't Scale -- Factories Do

*Why Facebook stopped hunting for the perfect algorithm and started building an AI factory instead -- and what that means for every organization trying to actually ship AI*

---

:::info[Priority Map — What to Focus On]
**Must know (exam-critical):** AI as a factory, not a wizard ("wizards don't scale"); the Three Horizons framework (H1 product / H2 applied ML / H3 research, with ~50% H2 failure normal); Push-then-Pull adoption; traditional software (data + rules → answers) vs machine learning (data + answers → rules).

**Important (supporting):** Supervised learning setup (feature / label / prediction); the Soyuz analogy and its three levers; the loading-dock metaphor; ANI / AGI / ASI.

**Context (background/color):** The opening round of how each student's org builds AI; the Kavya "wizard vs factory" story.
:::

## The Big Question for the Day

Session 1 gave us the ingredients: dark data, neural networks, the black box. Session 2 asks a harder, more organizational question: **how does a company actually build and deploy AI at scale?**

Professor Mojumder opened by pointing at the HBR case assigned for the day -- **"Inside Facebook's AI Workshop"** by Scott Berinato, an interview with Joaquin Quinonero Candela, then head of Facebook's Applied Machine Learning (AML) group. The case is dated 2016-2017. But the professor's argument was that its central metaphor -- **AI as a factory, not a wizard** -- has aged remarkably well.

> **Professor Mojumder:** "We always talk about use cases of AI. But this case also says how an organization builds AI, and how they should decide where to plug in -- which role to play, whether in horizon 3, horizon 2 or horizon 1, how to distribute the knowledge, who initiates the knowledge, and how to break away from the fluff or the wizardry of AI and focus on AI as a factory that scales and gets work done."

---

## Opening Round: How Does *Your* Organization Build AI?

Before touching the case, the professor did something clever: he asked the class how their own organizations were doing this. The answers exposed the whole spectrum of approaches.

| Student / Company | Build vs Rent | Structure |
|-------------------|---------------|-----------|
| **Prasoon** (Software services) | Uses external models, trains internal "forward-deployed engineers" to embed at clients | Distributed |
| **Chaitan** (HR at large org) | Built in-house AI for recruitment after evaluating vendors | In-house team |
| **Gaurav** (Product tech) | Rents Claude, Gemini via Windsurf; company data stays in-house | Rented models + in-house data |
| **Raghav** (Real estate research) | Uses rented models over government + in-house data (AI Impact Barometer) | Small data engineering team |
| **Manish** (Marine/offshore) | Shared internal AI portal with 80+ models on Amazon Bedrock | Central AI platform |
| **Harshita** (Adani) | Adani Digital Lab -- separate group entity for the whole group's AI | Dedicated AI subsidiary |
| **Shubham** (Adobe) | AI Center of Excellence sits with Business Units to co-build | Hybrid, business-driven |
| **Maitri** (Infosys Consulting) | Anyone can build a prototype on internal fabric (Topaz); R&D productizes winners | Democratized |
| **Sarang** (Agoda) | AI infused in all three horizons -- everyone is a developer, code review is AI-driven | Fully embedded |
| **Anoj** (Microsoft) | Central AI platform wrapping Copilot-like agents; tasks auto-assigned to agents | Central platform |
| **Shivangi** (Paychex) | Rotating AI/ML team; each business unit initiates its own use cases | Rotating champions |
| **Jagat** (BCG) | Push model for clients; pull model for internal teams -- word-of-mouth spread | Consulting hybrid |
| **Neeraj** (TCS Australia) | 400+ AI solutions delivered by CoE, architect maps them to client problems | Solution architect model |
| **Vikas** (Electronics R&D) | R&D people are all H3/H2/H1 combined -- early transitional stage | Undifferentiated |

The variety was itself the lesson. No two organizations are doing it the same way. But every single one had to answer the same questions Candela answered at Facebook.

---

## The Case: AI as a Factory, Not a Wizard

The core rhetorical move in the Berinato case is a metaphor swap.

:::danger[Must Know — Exam Critical]
**AI is a factory, not a wizard.** Wizards (bespoke, hand-crafted models tied to one brilliant individual) don't scale; factories (standardized, reusable infrastructure any team can pull from) do. This is the case's headline argument — expect to explain or apply it.
:::

| **Wizard AI** | **Factory AI** |
|---------------|---------------|
| Individual data scientists producing bespoke, hand-crafted models | Standardized, reusable AI infrastructure that any team can pull from |
| Impressive, mysterious, one-off | Boring, predictable, industrial |
| Depends on the wizard staying and staying inspired | Depends on the process, not the individual |
| Slow to reproduce, brittle at scale | Fast to reproduce, robust at scale |
| **Doesn't scale** | **Scales** |

> "Wizards don't scale."

That was the phrase that landed. **Prasoon** captured Candela's approach cleanly: "They are systematizing the data. They are standardizing the processes and making them reusable."

**Senthil** added the crucial detail: "They weren't trying to develop new algorithms for applied machine learning. They wanted to train the *existing* algorithms with the data they had available, increasing the velocity and the datasets. Basically, scaling."

That single decision -- *use existing algorithms, get better data, iterate faster* -- is what turned Facebook's AI story from a research effort into a business engine.

---

## The Three Horizons Framework

The case introduces a horizon model that maps roughly onto **how far a technology is from the market**. The professor treated this as one of the core takeaways of the session.

:::danger[Must Know — Exam Critical]
The **Three Horizons**: H3 = research (invents algorithms, ~3 years out), H1 = product/business (ships to users, owns the P&L), H2 = applied ML, the bridge that turns algorithms into products. Know that ~50% of H2 projects failing is *healthy*, and that the course's goal is to move you from H1 toward H2.
:::

| Horizon | Role | Typical Team | Distance from Market |
|---------|------|--------------|----------------------|
| **H3 -- Research** | Invent new algorithms, publish papers, explore what is *technologically possible* | Researchers, data scientists, PhDs | ~3 years out |
| **H2 -- Applied ML (AML)** | Translate research into working products; own the platform; apply existing algorithms to real data | Applied ML engineers, ML platform teams | Middle bridge |
| **H1 -- Product & Business** | Ship features to users; own the P&L; know the customer | Product managers, engineers, sales, marketing | At the market |

**Anoj** gave the cleanest description of H3: "They are looking into research, what is technologically possible. They are not looking into finally deploying a product."

**Shubham** nailed H2: "It is a bridge between H1 and H3. All the learnings and research from H3 is being translated to H1."

The Facebook AML group Candela ran is a classic H2 operation. They don't invent new deep learning architectures (that's H3, the FAIR research group). They don't own the News Feed or Messenger (that's H1, the product teams). They own the **factory floor between them.**

### Why H2 Is Where the Interesting Work Happens

**Manish** flagged the failure rate mentioned in the case: **roughly 50% of Horizon 2 projects fail.** That is not a bug -- it is exactly what H2 is supposed to look like. If it were succeeding every time, you would be doing pure engineering; if it were failing every time, you would be doing pure research. Fifty percent is the healthy signature of applied experimentation.

**Anish** contributed the infrastructure point: H2's other job is to build the reusable engines -- **FBLearner Flow**, Facebook's internal ML platform being the flagship example -- that make everything else in the factory possible.

**Gaurav's** insight cut to the heart of the case: "As a scientist or AI developer, they think from the use case, like how can we develop the best model. But H2 was thinking from the product point of view -- how can this help the business grow."

---

## The Soyuz Analogy

The case draws an unexpected analogy to the **Soyuz spacecraft** -- the old, ugly, reliable Russian rocket that has been flying since the 1960s.

**Manish** unpacked it: "It is old but reliable."

Candela's point: don't fetishize the newest, shiniest algorithm. If a proven model gets 80% of the job done, use it. Spend the marginal effort on **more data and faster iteration**, not on rebuilding the engine.

:::note[Good to Know]
The Soyuz ("old but reliable") analogy is memorable color, but the testable substance is its three levers: improve the algorithm (slow), feed more data (cheaper), run more experiments (cheapest). Facebook's factory picks the last two.
:::

**Shubham** identified the three practical levers this implies:

1. Improve the algorithm (expensive, slow)
2. Feed it more data (cheaper, faster)
3. Run more experiments (cheapest, fastest)

Facebook's factory picks levers 2 and 3 almost every time.

---

## Push vs Pull: How Horizon 2 Reaches the Rest of the Company

The case's other big organizational insight is a **two-stage adoption model**.

### Stage 1: Push

In the early days of AML, product teams didn't know what to do with AI. **Anoj** described the pattern:

> "Initially teams did not know how AI can deliver value for them. So AML had to work directly with the team. Candela hand-picked a couple of teams -- for example, the News Feed team -- and made sure the product team understood the value AI was adding."

AML pushed itself into product teams, built one high-visibility win, and let the results speak.

### Stage 2: Pull

Once a few visible wins existed, the dynamic flipped.

> "Slowly the teams started pulling the changes from AML. If AML had already developed some capability, any team could search for it, find it useful, and implement it themselves. AML no longer had to do the handholding."

That is the payoff: **push builds credibility, pull creates scale.**

:::tip[Important]
**Push then Pull** is a two-stage adoption model: H2 first embeds in product teams to prove value (push), then builds a self-serve "loading dock" so teams discover and adopt capabilities on their own (pull). Be ready to name both stages and the loading-dock metaphor.
:::

### The Loading Dock Metaphor

Candela used another building-block image. Imagine a warehouse full of amazing products. If it has no **loading dock**, none of them ever leave. AML's job -- once the algorithms exist -- is to build the loading dock: internal marketplaces, self-serve tools, documented APIs, discoverable models. Without that infrastructure, everything AML builds stays trapped inside AML.

**Anoj** framed it clearly: "It's about distribution of technology. If AML is building small solutions, the other teams should be able to discover them easily and interface with them."

---

## How the Class Compared Back to the Case

Once the framework was in place, the professor pushed the class to compare their organizations to Facebook's model. A few standouts:

- **Harshita (Adani)** -- Adani Digital Lab does both push (group-wide initiatives) and pull (BU-initiated requests). Textbook H2.
- **Shubham (Adobe)** -- Neither pure push nor pure pull. The AI CoE sits **inside** BU meetings to identify friction points before building. Call it *collaborative push*.
- **Sarang (Agoda)** -- AI is embedded in H1, H2, and H3 simultaneously. Any sales or marketing person can prototype and deploy on the AI platform. The company has effectively erased the boundaries.
- **Neeraj (TCS)** -- In a consulting firm, the factory extends **beyond** the company boundary. AI solutions built by the CoE are pushed *through* the account team to the *client*, who then pulls further customization. One extra layer that Facebook (a product company) didn't need.
- **Prasoon** -- In most non-tech companies today, H3 barely exists. It's really H2 + H1, with the CTO/CIO pushing AI adoption top-down.

That last point set up the professor's own aspirational goal for the course:

> **Professor Mojumder:** "Most of you are in Horizon 1 -- business strategy, operations, service delivery, consulting. The purpose of this course is to help you move towards Horizon 2. Not H3 -- you don't need to build the next algorithm. But you need to understand the AI lingo, the neural network, deep learning, CNNs, RNNs, natural language processing -- so you can bridge back to the business you already know."

---

## Interlude: The Privacy Question

**Gaurav** raised a sharp point about the case: it describes AML reading Messenger chats to suggest a nearby restaurant if two friends discussed meeting "in 30 minutes." Where is the user privacy line?

The professor's honest read: at the time the case was written (~2015-2017), the industry was not thinking about privacy the way it is now. Consent was buried in Terms and Conditions. Default settings favored data collection. That entire climate is being reset by regulation and public awareness -- and it will be a running thread in Session 10 (AI Ethics).

> **Professor Mojumder:** "Now it is not that you cannot think without thinking of those things. That's very important."

**Pratik** connected it to a real problem from his organization: **hallucinations** in production LLMs. How do you stop them? Answer: prompt engineering, RAG (retrieval-augmented generation), vector databases -- all Session 8-9 territory.

---

## From the Case to the Mechanics

The second half of the session pivoted from organizational design to the underlying technology. The professor set up the vocabulary for the deep-learning-heavy sessions ahead.

### Two Definitions of Machine Learning

| **Arthur Samuel (1959)** | **Tom Mitchell (1997)** |
|--------------------------|--------------------------|
| "The field of study that gives computers the ability to learn without being explicitly programmed." | "A computer program is said to learn from experience E with respect to some class of tasks T and performance measure P, if its performance at tasks in T, as measured by P, improves with experience E." |

Samuel's is romantic. Mitchell's is engineered -- **the definition that lets you measure whether learning happened.**

### Traditional Software vs Machine Learning

The professor drew the cleanest possible distinction on the whiteboard:

| **Traditional Software** | **Machine Learning** |
|--------------------------|----------------------|
| **Input:** Data + Rules | **Input:** Data + Answers |
| **Output:** Answers | **Output:** Rules |

In a calculator, you supply the price, the quantity, and the rule (multiply). It gives you the bill.

In machine learning, you supply the picture of a Chihuahua *and* the label "Chihuahua" -- across thousands of examples -- and the machine learns the rule for telling Chihuahuas apart from cupcakes.

:::tip[Important]
The crisp exam contrast: **traditional software** takes data + rules → answers; **machine learning** takes data + answers → rules. This one line captures why ML is fundamentally different from a calculator.
:::

### Two Paradigms of AI

| **Logic-Based (Old)** | **Brain-Inspired (Current)** |
|-----------------------|--------------------------|
| Explicit if-then rules | Neural networks / deep learning |
| Symbolic reasoning | Statistical pattern learning |
| Fully explainable | Black box |
| Brittle at scale | Robust at scale, but opaque |

The industry moved decisively from logic-based to brain-inspired around the 2010s deep-learning boom. Almost everything called "AI" today is brain-inspired.

### ANI, AGI, ASI

A useful framing for where we are and where we're going:

| Level | Meaning | Where We Are |
|-------|---------|--------------|
| **ANI -- Artificial Narrow Intelligence** | Task-specific: image classification, translation, speech recognition | This is what we have. Everywhere. |
| **AGI -- Artificial General Intelligence** | Human-level performance across arbitrary tasks | The current frontier goal |
| **ASI -- Artificial Super Intelligence** | Beyond human cognition | Speculative |

**Senthil** offered that we might already be sliding into AGI. The professor's more conservative read: we are still firmly in ANI. Real AGI -- a machine that can do anything a human can -- is not solved yet, though the direction is set.

> **Professor Mojumder:** "This course will focus on ANI. We'll build artificial narrow intelligence algorithms. Mostly based on supervised machine learning."

---

## Supervised Learning: The Setup for Sessions 3-4

The professor introduced the toy dataset that will run through the next several sessions -- an **MBA salary prediction dataset**.

| Person | College Score (x1) | Age (x2) | Years of Experience (x3) | Salary (y) |
|--------|-------------------:|---------:|-------------------------:|-----------:|
| Person 1 | 8.4 | 27 | 5 | 15 LPA |
| Person 2 | 7.9 | 29 | 6 | 18 LPA |
| Person 3 | 9.1 | 26 | 4 | 22 LPA |
| ... | ... | ... | ... | ... |

- **Features (x):** The orange columns -- college score, age, years of experience. Also called the input.
- **Label (y):** The blue column -- salary. Also called the target or ground truth.
- **Prediction (ŷ):** What the neural network outputs when given features it has never seen before.

Supervised learning is exactly this: you show the model many (features, label) pairs; it learns a function; then for a new set of features it produces a prediction.

The image case works the same way. For the Chihuahua dataset:

- Feature = the pixels of the image
- Label = "Chihuahua" (or 1)
- Prediction (ŷ) = what the model says -- ideally matching the label

**Anoj** anchored it nicely: "In supervised learning, there is a dataset with labels, so the model can train based on the data being provided already. It does not have to interpret on its own."

### The Loss Function (Intuitive)

If the label was "Chihuahua" and the model predicts "horse," the model is wrong -- and there is a way to measure *how* wrong, and to adjust the internal weights so it does slightly better next time. That measurement is the **loss**, and the adjustment mechanism is **training**. Both live inside the black box we'll open in Session 3.

---

## The Black Box, Previewed

The professor drew the neural network for the first time:

```
Input Layer          Hidden Layers          Output Layer
   (x1) ---+                                        
   (x2) ---+-->  [ nodes -- nodes -- nodes ]  --> ŷ
   (x3) ---+                                        
```

- **Input nodes** take the features.
- **Hidden nodes** each apply a weight, a bias, and an activation function -- individually amplifying or dampening the numbers flowing through.
- **Output node** produces ŷ, the prediction.

Then you compare ŷ to the true y. If they match, great. If not, the network adjusts its weights and tries again. Millions of times. Across millions of examples.

> **Professor Mojumder:** "The next two sessions are the most critical of the FAI course. If you are able to understand those concepts, you are more or less on the other side of the course."

---

## Recipe Chain

**Session 2 answers the organizational and vocabulary questions:**

- **AI is a factory, not a wizard** -- scale comes from process, not from individual brilliance.
- **The Three Horizons framework** -- H3 does research, H1 owns the product, H2 (Applied ML) is the bridge that turns algorithms into shippable business features.
- **Push then Pull** -- H2 first embeds itself in product teams to prove value, then builds a self-serve loading dock so the rest of the org can help itself.
- **Soyuz over Sputnik** -- reliable existing algorithms + more data + faster experiments beats the pursuit of the perfect new algorithm.
- **Software gives rules from data; machine learning gives rules from data + answers.**
- **Supervised learning** -- feature + label pairs, model learns a function, produces predictions on new features.
- **ANI now, AGI in progress, ASI still speculative.**

**Next session:** We finally open the black box. Session 3 is the deep dive into the neural network -- input nodes, hidden layers, output nodes, weights, biases, activation functions. We start doing the math (gently) and build the vocabulary that unlocks every AI model in the rest of the course.

---

## Key Terms to Remember

| Term | One-Line Definition |
|------|--------------------|
| **AI Factory** | An industrial approach to building AI -- standardized, reusable, scaled -- as opposed to wizardly one-off models |
| **Horizon 1 (H1)** | The product/business layer -- ships features, owns the customer, at market |
| **Horizon 2 (H2)** | The applied ML / bridge layer -- takes algorithms and turns them into products; ~50% failure rate is normal |
| **Horizon 3 (H3)** | The research layer -- invents new algorithms; roughly 3 years from market |
| **AML** | Applied Machine Learning -- Facebook's H2 group that Candela ran |
| **FBLearner Flow** | Facebook's internal ML platform -- the reusable infrastructure H2 built |
| **Push Strategy** | H2 embeds directly in product teams and builds visible wins to prove value |
| **Pull Strategy** | Product teams discover and adopt H2's AI capabilities on their own |
| **Loading Dock** | Candela's metaphor for the internal infrastructure (marketplaces, APIs, self-serve) that lets AI products actually leave H2 |
| **Soyuz Analogy** | Reliable-and-old beats new-and-fragile; scale by using existing algorithms with more data and faster iteration |
| **Feature (x)** | The input variables the model sees |
| **Label (y)** | The ground-truth answer the model is being trained to predict |
| **Prediction (ŷ)** | The model's output on a new input |
| **Supervised Learning** | Training on labelled (feature, label) pairs |
| **ANI / AGI / ASI** | Narrow / General / Super -- three tiers of machine intelligence; we're solidly in ANI |
| **Logic-Based vs Brain-Inspired AI** | Explicit if-then rules vs neural networks; today's AI is overwhelmingly brain-inspired |

---

## The Real-World Takeaway

Kavya joined a mid-sized D2C skincare brand in Bengaluru as their first-ever "AI Lead." She was 29, an engineer by training, and had spent five years at a global consulting firm doing analytics for retail clients. The founder had told her, on day one, that the company wanted to "become an AI-first business." He was not entirely sure what that meant. He hoped she was.

Her first month was disorienting. Every function head wanted something different. The CMO wanted personalization on the app. The head of supply chain wanted demand forecasting. The customer care head wanted a chatbot that "sounds like a person." The COO wanted to know if AI could reduce headcount. Kavya spent three weeks in meetings and produced nothing.

At the end of the month she called her thesis advisor from IIM. He listened for ten minutes and then asked one question: "Are you trying to be their wizard, or are you trying to build them a factory?"

Kavya went back and rewrote her entire plan.

She picked one problem -- product recommendation on the app -- and spent six weeks embedded with the growth team. Not building the AI. Building a *pipeline*. She used an off-the-shelf recommendation model (nothing fancy, no custom research), pointed it at the company's dark data of five years of purchase history, browse logs, and product returns, and shipped a first version in eight weeks. Conversion on the recommended-product carousel went up 22%.

That was her push win. She made sure the growth team took credit publicly. She did not put her name on the internal announcement.

Then she started building the factory. She hired one MLOps engineer and one data engineer. Together they built a small internal platform: a shared model registry, a shared feature store, a self-serve dashboard where any product manager could point a pre-trained model at a new use case. She wrote a two-page playbook, not a 40-page one. She held office hours on Wednesday afternoons.

Six months in, the customer care team came to her *on their own* -- pull, not push -- and asked if they could plug the same platform into their ticket triage. Three months after that, supply chain came asking about demand forecasting. Kavya had not built either. She had built the loading dock. The teams did the rest.

At the one-year review, the founder pulled her aside and asked how many AI models the company was running. She said seventeen. He asked how many of them she personally built. She said one. He looked at her for a long time and finally said: "That's the answer I wanted."

Kavya did not become a data scientist. She never built the perfect algorithm. She used what already existed, pointed it at the right data, and industrialized the process so other people could do the same thing without her. She was, in every important sense, running a Horizon 2.

**The wizard demos beautifully and does not scale. The factory is boring and does not stop. If you are the person your organization is quietly asking to "do AI," the choice between those two is the only choice that actually matters.**
