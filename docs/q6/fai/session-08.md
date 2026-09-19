---
sidebar_position: 9
title: "Session 8: The Price of Intelligence — Economics of LLMs, RAG, Mixture-of-Experts, and the Agentic Turn"
---

# Session 8: The Price of Intelligence — Economics of LLMs, RAG, Mixture-of-Experts, and the Agentic Turn

*What it actually costs to train a modern AI, why the frontier keeps getting more expensive even as everything else gets cheaper, and the architectural moves -- RAG, CoT, MoE, SLMs, multimodal, agents -- that let managers pick the right tool without paying frontier prices*

---

:::info[Priority Map — What to Focus On]
**Must know (exam-critical):** RAG (retrieve from a vector DB, append chunks to the prompt, ground the answer, reduce hallucination); MoE (many specialised experts + a router firing only a few per query); SLM (below 10B parameters); Agentic AI (LLM "brain" + software "body" that takes actions).

**Important (supporting):** The LLM cost stack (data, compute, cooling, water, labour, licensing, guardrails); cheaper-per-token ≠ cheaper-per-task; Chain-of-Thought prompting; multimodal LLMs (each modality encoded into a shared embedding space); human-in-the-loop and KYA.

**Context (background/color):** Circular financing; the bicycle-vs-luxury-car analogy; Sarang's Opus-to-Sonnet cost experiment.
:::

## A Reverse Classroom

Session 8 was different by design. Two quizzes back-to-back, three sessions left in the course, and one big idea the professor wanted the class to feel in their bones: **AI is not something you learn about only from teachers anymore -- you learn about it with the AI sitting next to you.**

So the format flipped. Six topics, roughly fifteen minutes each, cold calls encouraged, cameras on, and every student was invited to open Claude, ChatGPT, or Gemini in a side window and interrogate it in real time.

> **Professor Mojumder:** "We'll do reverse classroom with AI-assisted reverse classroom. There's something to learn from the AI also -- not just what I am expressing in a lecture format."

The six topics: **Economics of LLMs, RAG, Chain-of-Thought prompting, Mixture-of-Experts, Small Language Models, Multimodal LLMs, and Agentic AI.** All of them are technical. All of them have direct P&L consequences.

---

## Topic 1: The Economics of LLMs

The prompt to the class: *what does it actually cost to build and run one of these models?*

Sarang went first. He had personally led AI training projects.

> **Sarang:** "First cost is infrastructure -- high-end GPUs, either on-prem or cloud. Second, trained professionals -- ML engineers. Third, deployment and running cost. And then there's a continuous cost of retraining, because over time the model picks up garbage or drifts in the wrong direction and needs correction."

Shubham added the dimension Sarang had left implicit: **the cost of the training data itself.**

> **Shubham:** "If I'm training an image-generation model, I need brand-safe data. Images have to be licensed, moderated, rights-cleared, annotated. Sometimes you need human labellers. Clean, well-labelled data is a very expensive business."

Yogita reframed the whole discussion from a business-case perspective:

> **Yogita:** "The way we evaluate AI investment is by breaking a job into its constituent tasks, calculating the human cost per task, then asking: if AI does that task, what percentage of the human cost can I equate as my AI budget? Recently we replaced a shipment-delivery voice-calling team with a voice-AI. We priced it as a share of AOV per shipment. That became the ceiling on what we would spend."

Gaurav went even more granular into infrastructure. As a telecom engineer, he described what actually sits behind "the cloud":

> **Gaurav:** "Data centres need capex on high-capacity fibre, high-density hardware, GPU interconnects. Plus electricity. Plus cooling -- these racks dissipate so much heat you need to hold ambient temperatures near zero degrees. Plus multi-region carriers to route requests. Every one of these is a separate cost line."

Senthil pointed at the **environmental cost** flagged in recent news -- fresh-water consumption for cooling, since sea water can't be used for that job. Kaushik added an angle from his agentic-AI work: **before you can even build an AI agent, you have to instrument human agents to capture their SOPs**, which is itself an expensive human-hours investment.

Nirja described two live projects -- one in SAP, one in airlines -- where the team had licensed an existing LLM, then poured supervised data (company SOPs, coding guides, restful-application conventions) on top. Ten developers were assigned to constantly review the LLM's output, flag hallucinations, and feed corrections back. Three months in, hallucinations were down, token count was down, and the plan was to reduce the developer headcount by 50% after six months. That is not the picture of a free AI; that is human labour continuously buying accuracy at the margin.

Ashoke offered a back-of-envelope formula for the compute cost of training:

> **Ashoke:** "Total compute needed = model parameters × tokens (roughly). Then take total compute divided by GPU utilization, multiply by per-GPU-hour cost. That gives you a rough estimate. For LLaMA-2 70B, this comes to roughly 6,000 GPUs running for 12 days."

An Nvidia GPU costs around ₹2 lakh apiece. A data centre may hold thousands. The professor's takeaway from the discussion:

| Cost Line | What It Includes |
|-----------|------------------|
| **Data** | Licensed corpora, image rights, human annotation, cleaning, moderation, brand-safety review |
| **Compute (training)** | GPU installation, thousands of GPU-hours, utilisation rate, retraining cycles |
| **Compute (inference)** | Per-token cost when the model is serving users |
| **Infrastructure** | Data-centre real estate, high-density hardware, fibre, interconnect, cooling, water |
| **Electricity** | Continuous power for GPUs and cooling |
| **Human labour** | ML engineers, prompt engineers, red-teamers, data labellers, human-in-the-loop reviewers |
| **Licensing** | If you buy models rather than train them |
| **Guardrails and security** | Smaller LLMs to policy the main LLM, jailbreak testing |

Radhika contributed a systems-view observation about **circular financing**:

> **Radhika:** "Nvidia invests capital in OpenAI. OpenAI commits to a compute provider like CoreWeave or Oracle. The compute provider buys Nvidia chips. The money is going around in a circle. If we don't get real productivity returns downstream, this whole loop is exposed."

---

## Cost Optimization on the User Side

Sarang shared a real experiment from his company. To reduce token costs, his team restricted engineers from using Claude Opus and forced them to use Sonnet for a 30-day trial.

> **Sarang:** "What we observed was the opposite of what we hoped. Token consumption went up. People reported: with Opus, a task took thirty minutes and they were satisfied 80% of the time. With Sonnet, sometimes it took six hours and they were spending double the tokens because the model didn't understand what they meant. After 30 days, cost reduction hadn't happened at all."

The point landed hard. **Cheaper per-token does not mean cheaper per-task.** A less capable model may consume more tokens overall, take more back-and-forth iterations, and produce lower-quality output that requires human rework.

:::note[Good to Know]
Sarang's 30-day experiment (forcing Sonnet over Opus) is a memorable exam anecdote: token consumption went *up*, not down, because the weaker model needed more iterations. The lesson to cite: optimise cost per completed task, not cost per token.
:::

Raghav pointed out something clever built into Claude itself:

> **Raghav:** "When I use Claude, it sometimes gives me a hint -- 'use Sonnet for everyday tasks.' The system is telling me not to burn Opus tokens on things Sonnet can handle. That's a form of automatic cost routing at the prompt level."

---

## The Frontier Cost Debate

The professor threw a live question at the class: **for the frontier models -- GPT-4 to GPT-5 to GPT-6, or the Claude and Gemini equivalents -- is the training cost going up or down over successive generations?**

The chat split. Most students said up. A few argued down. The professor let the debate run.

**The case for rising costs (Jagat, Nirja):** Each new version has to cover every capability of the previous one plus new ones. Cybersecurity concerns keep growing. Every new version needs more parameters, more data, more RLHF, more safety review. Since we've never seen computer prices decrease across versions historically, the same pattern will hold.

**The case for falling costs (Shubham, Nirja, Priyanshu):** In the current phase, licensed data and clean data have become expensive, so costs are rising. But over time, GPU costs will fall, architectural innovations like mixture-of-experts will let smaller models reach frontier accuracy, and open-source models like Deepseek and Mistral are already delivering competitive performance at a fraction of the training cost. So costs may keep rising for the exact same version-1 architecture, but the cost of a *given capability* will fall.

Priyanshu pointed at the mathematics of scaling:

> **Priyanshu:** "The cost doesn't scale linearly with parameters -- it scales exponentially. So models will keep getting more expensive until we reach a point where adding parameters becomes counterproductive to the output."

The professor closed the debate with a strategic reframe:

> **Professor Mojumder:** "The right question isn't up or down. The question is: **for your use case, do you need a frontier model at all?** Maybe you don't need a 70-billion-parameter monster. Maybe you need a small language model of 7 billion parameters, tuned for your domain. That's the mindset we want to build."

He drew an analogy the class remembered: **you don't need an air-conditioned luxury car to drive from your campus dorm to your campus office. A bicycle will do. Reserve the air-conditioned car for the drive from one end of the city to the other.**

---

## Topic 2: Retrieval-Augmented Generation (RAG)

The next topic was RAG. Isaac defined it cleanly:

> **Isaac:** "Retrieval-augmented generation is where the LLM has access to external data while generating content. A regular LLM only uses its trained parameters. A RAG system pairs the LLM with an external database it can query at runtime."

Anish added the mechanics:

> **Anish:** "It uses a vector database. The prompt is converted to embeddings, a semantic search matches the closest chunks in the vector store, and those chunks are appended to the prompt. This reduces hallucination by grounding the answer in factual data."

Aditya explained why it matters in a company context:

> **Aditya:** "It's the connection between an external LLM and your company's private data. Your internal SOPs, contracts, policies -- none of that is in the training data. RAG lets the LLM use it at query time without retraining."

Purba tied the whole loop together:

> **Purba:** "The LLM only knows what it was trained on. If we ask it something outside that, it hallucinates. RAG intercepts and injects the most relevant external information into the prompt so the model has actual facts to work with."

The architecture in words: **User prompt → semantic search over external documents → top-N relevant chunks retrieved → chunks appended to the prompt → LLM generates a response grounded in the retrieved content.** The LLM itself is not modified. The prompt is enriched.

:::danger[Must Know — Exam Critical]
**RAG (Retrieval-Augmented Generation):** the prompt is converted to embeddings, a semantic search over a vector database pulls the most relevant chunks, and those chunks are appended to the prompt so the LLM answers from real, up-to-date, or private data. The model is never retrained -- only the prompt is enriched. This grounds answers and cuts hallucination, and it is one of the highest-yield concepts in the whole course.
:::

---

## Topic 3: Chain-of-Thought (CoT) Prompting

Anoj kicked off:

> **Anoj:** "Chain-of-thought is a prompting technique where you give the model step-by-step instructions. You break the task into ordered sub-tasks, sometimes with examples, and the model reveals its reasoning at each step."

Kaushik added the "setting the context" angle:

> **Kaushik:** "Along with step-by-step, chain-of-thought is about setting the context. You have a conversation with the AI, one prompt at a time, so the model builds a holistic view of the task."

Shivangi described how her team applied it operationally:

> **Shivangi:** "First we ask the model to summarize how something works. Once it gives us the summary, we ask the specific question. That way we can see where its reasoning is going. If the summary is off, we correct it before we ask for the answer."

The classic textbook example the professor showed:

> *"Roger has 5 tennis balls. He buys 2 more cans, each can has 3 balls. How many balls does he have?"*

Without CoT the model may just say **11**. With CoT it says: *"Roger started with 5. He bought 2 cans of 3 balls each = 6. 5 + 6 = 11."* On easy problems the answer is the same; on harder problems the reasoning trace catches errors the raw guess would have missed.

Monika flagged the cost:

> **Monika:** "The cost of CoT is more tokens. Both on the user side (longer prompts with examples) and on the infrastructure side (longer completions to walk through the reasoning). You trade tokens for accuracy."

---

## Topic 4: Mixture of Experts (MoE)

Sayan defined MoE:

> **Sayan:** "Instead of one giant model doing every task, MoE has multiple specialised expert sub-models inside it. A router decides which expert or experts handle a given question -- one for math, one for coding, one for language, and so on."

The professor drew the math on the board. Suppose you have 10 experts, each an 8-billion-parameter LLM. Total parameter count: **80 billion**. But now consider what it would look like if you joined all ten experts into a single fully-connected 80B model. Because of the additional cross-expert connections in the fully-joined version, that model would have **many more than 80 billion parameters**.

That is the trick. **MoE lets you get 80B worth of coverage with less than 80B worth of interconnections, because inside each expert the network is fully connected, but the experts are not connected to each other.**

:::tip[Important]
**Mixture of Experts:** many specialised sub-models plus a router (gating network) that activates only a few experts per query (typically 2-6). Examples: Mixtral (8 experts), DeepSeek (~150). The router picks whole experts, not fractions -- this is why MoE reaches frontier coverage at a fraction of the inference cost.
:::

Ashoke framed it in OS terms:

> **Ashoke:** "It's like process scheduling in an operating system. There's a supervisory model that does routing and load balancing across the experts based on the context of the input."

Real examples: **Mixtral (French, 8 experts), Deepseek (roughly 150 experts).** At inference, typically only 2 experts are activated per query, plus optionally a shared expert that always fires.

Vikas connected MoE to Small Language Models:

> **Vikas:** "It's essentially a collection of specialised small language models. Each is faster, more specific, requires less bandwidth. The router picks the right one for the task."

Manish asked a sharp question: can the router activate only a portion of one expert, rather than the whole expert? The professor's answer: no. Once the router picks Expert 7, all of Expert 7 fires. What can vary is *how many* experts fire together (typically 2-6 out of the pool).

---

## Topic 5: Small Language Models (SLMs)

The line the professor drew: **anything below 10 billion parameters is a small language model**. Mistral 7B, LLaMA 3.1 8B, Phi-3 -- these are SLMs. Anything above (LLaMA 3 70B, GPT-4, Claude Opus) is a large one.

:::tip[Important]
Remember the threshold: an **SLM is below ~10 billion parameters**. The exam-worthy reason they matter is privacy -- a small model runs on your own infrastructure, so private data never leaves the building -- plus lower cost and latency for narrow domains.
:::

Prasoon flagged the most compelling business use case:

> **Prasoon:** "SLMs matter for privacy. A large model is deployed on someone else's cloud -- your data goes out over the wire. An 8B model, or even a 1B model, can run entirely on your own infrastructure. Small and medium enterprises can keep all their private data on-premise."

The professor summarised the trade space:

| Model Type | Params | Where It Runs | Best For |
|------------|--------|---------------|----------|
| **Frontier LLM** | 100B+ | Cloud, hyperscale | Open-ended reasoning, general-purpose chatbots, complex code |
| **Standard LLM** | 10B–100B | Cloud or beefy on-prem | Most enterprise workloads |
| **SLM** | Below 10B | On-prem, laptop, edge | Privacy-sensitive, narrow domain, latency-sensitive |

The strategic pattern: **start with a large model for prototyping, fine-tune, distil, and eventually deploy a smaller model in production.** Cheaper, faster, private.

---

## Topic 6: Multimodal LLMs

Anoj described these succinctly:

> **Anoj:** "Multimodal LLMs accept different input types -- not just text. Image, audio, video, everything can enter the same model."

The example on the professor's slide was a well-known image: a man ironing clothes while standing on the back of a moving car. Unusual, real image, real caption. Every current frontier model -- GPT-4V, Gemini, Grok, Claude 3.5 -- can interpret it. The mechanism:

1. Each modality has its own **encoder** (image encoder for pictures, audio encoder for sound, text tokenizer for words).
2. Each encoder converts its input into **embeddings** in a shared vector space.
3. The embeddings across modalities are converted into **tokens** and concatenated into one long sequence.
4. That combined token sequence is fed into a large decoder-only LLM.
5. The LLM generates a response, drawing on all the modalities at once.

Senthil connected this back to a real product he had spotted -- the iPhone camera feature that detects whether people in a group are posing or moving, then auto-clicks the picture. That is CNN plus multimodal LLM working together at the edge, in a phone.

The core insight for the manager: **the word-embedding intuition from Session 7 generalises. Anything -- an image, a sound, a video frame, a database row -- can be turned into an embedding and consumed by an LLM.**

---

## Topic 7: Agentic AI

Priyanshu opened:

> **Priyanshu:** "Agentic AI is delegation of tasks -- like you delegate to another human. I prompt the LLM. The LLM has tools, APIs, or Python programs it can call. It decides which tools to invoke on my behalf, invokes them, and orchestrates the sub-tasks until the goal is met."

Arunava added the classic user-facing framing:

> **Arunava:** "Old LLMs give me a list of the best flights. An agent books the flight for me. It plans, executes, and completes the task without me having to run each step."

Senthil added the enterprise dimension:

> **Senthil:** "An agent is a collection of SLMs and databases stitched together, exposed as a workflow, with a human in the loop to oversee correctness."

The professor's mental model, delivered slowly and deliberately:

> **Professor Mojumder:** "AI is the brain. Agentic AI is the body. The brain -- the LLM -- decides what to do. The body -- the software wrapper around the LLM -- executes: API calls, database queries, browser clicks, sending emails, calendar bookings. The brain reasons. The body acts. When we say 'agentic AI' we mean the whole human -- brain plus limbs plus perception plus memory."

:::danger[Must Know — Exam Critical]
**Agentic AI = AI brain + software body.** The LLM reasons and decides; the software wrapper acts -- calling APIs, querying databases, clicking, booking, emailing. It is not a new kind of AI, it is orchestration around an LLM. The exam pairing to remember: agentic AI needs a **human-in-the-loop** (or a guardrail LLM) because a free-range agent has no stop.
:::

He walked through a worked example: *"Book me the cheapest flight to Delhi next Friday."* Break it into pieces:

| Sub-task | Handled By |
|----------|------------|
| Understand the goal, decide sub-tasks | LLM (brain) |
| Query the calendar API for next Friday | Software (body) |
| Query a flight-search API for options | Software (body) |
| Compare prices, pick the cheapest | LLM (brain) |
| Present options and wait for confirmation | Software UI |
| Confirm and execute booking on payment gateway | Software (body) |

The brain is still the LLM. The agentic wrapper is orchestration -- code that calls APIs, keeps memory, and interacts with the environment. The novelty isn't the AI. It is the loop that keeps the AI in continuous contact with tools, memory, and the outside world.

### Know Your Agent (KYA)

Nirja raised a fresh news item that closed the topic:

> **Nirja:** "Mastercard and Visa recently released a Know-Your-Agent framework. If an agent goes rogue -- for example, an autonomous shopping agent buys the wrong ticket -- there needs to be a way to identify which operator is behind the agent, verify trust, and initiate a refund. It's like KYC for agents. Their agents get authenticated, their transactions get traced."

Ashoke added the security dimension:

> **Ashoke:** "There have been cases where OpenAI-tested agents went rogue and started deleting emails or hacking model repositories on Hugging Face. Reward-based learning makes agents greedy for the maximum reward, and that can drive unsafe behaviour."

The professor's caution:

> **Professor Mojumder:** "Where do you put the stop? Not in the brain -- the brain will always want to try things. You put the stop either in the human-in-the-loop, or in a second guardrail LLM that reviews the first one's decisions. And you graduate agency gradually. Start with narrow permissions, watch, expand. Don't hand a fresh agent a credit card."

---

## Recipe Chain

**Session 8 in one line:**
Every architectural pattern in modern AI -- RAG, CoT, MoE, SLMs, multimodal, agents -- is a specific answer to a specific cost or capability constraint of the base transformer. Once you understand the constraints, you can pick the pattern.

**Next session (Session 9):** The **Triage Advisories** case -- a hands-on prompt-engineering exercise built around disaster-response prioritisation. You will actually do prompt engineering in class, using an LLM as your co-worker. Read the case before class. Then Session 10 wraps the course with ethical AI, bias, and responsible deployment.

---

## Key Terms to Remember

| Term | One-Line Definition |
|------|-------------------|
| **Economics of LLMs** | The full cost stack of building and running an LLM: data, compute, infrastructure, cooling, electricity, labour, licensing, guardrails |
| **Circular Financing** | The pattern where GPU makers invest in AI labs, who buy compute from cloud providers, who buy GPUs -- creating an internal loop of investment |
| **Token Consumption** | Total tokens processed per task; a cheaper per-token model can still be more expensive per completed task if it takes more iterations |
| **RAG (Retrieval-Augmented Generation)** | Adding an external vector-database lookup to the prompt, letting the LLM answer from up-to-date or private data without retraining |
| **Semantic Search** | Vector-similarity search that retrieves conceptually related content rather than exact keyword matches |
| **CoT (Chain-of-Thought) Prompting** | Instructing the model to reason step-by-step, exposing its intermediate logic; improves accuracy at the cost of tokens |
| **MoE (Mixture of Experts)** | An architecture with many specialised sub-models and a router that activates only a few per query |
| **Router / Gating Network** | The component in an MoE model that decides which experts to fire for a given input |
| **SLM (Small Language Model)** | A model with fewer than 10 billion parameters -- cheaper, faster, and often deployable on-prem for privacy |
| **Multimodal LLM** | A model that accepts multiple input modalities (text, image, audio, video) by encoding each into a shared embedding space |
| **Agentic AI** | An LLM wrapped in software that gives it tools, memory, and the ability to take actions in the world |
| **KYA (Know Your Agent)** | Emerging framework (Mastercard/Visa) for identifying and authenticating autonomous agents in financial transactions |
| **Human-in-the-Loop** | A design pattern where a human approves critical actions before an agent executes them |

---

## The Real-World Takeaway

Vikram had built a chatbot for his logistics company that could quote shipping rates, book pickups, and answer 90% of customer queries end-to-end. It ran on GPT-4o. The bill was ₹28 lakh a month. His CEO liked the product but asked a single, uncomfortable question: *"Why is our AI costing more than the customer-support team it replaced?"*

Vikram spent a weekend reading his session-8 class notes. Then he took the bill apart. The most expensive line was inference tokens. The second was that he was calling GPT-4o for every query, including the trivial ones -- "what are your business hours", "do you ship to Coimbatore", "what's your GST number". Ninety percent of the volume was ninety percent of the cost, and it was going toward questions a much smaller model could answer.

He redesigned the stack over the next two months.

First, he built a **RAG layer** on top of his company's SOPs, shipping-rate tables, and FAQ documents. Now the bot could retrieve facts instead of hallucinating them. That alone cut his hallucination rate by an order of magnitude and reduced the average tokens per response, because the model no longer had to reason from vague memory -- it was quoting from retrieved chunks.

Second, he wrote a **router** -- a small classifier that looked at every incoming message and decided which model should handle it. Simple factual questions went to a **7-billion-parameter SLM** running on his own GPU server. Complex multi-turn negotiations went to Claude Sonnet. Only the very hardest cases -- disputed billing, escalations, angry customers -- went to GPT-4o. This was his own home-made Mixture-of-Experts, one built from three separate commercial models rather than one MoE architecture.

Third, he added **chain-of-thought prompting** for the pricing calculator. Instead of asking the model to output a final rate, he asked it to walk through the base rate, the fuel surcharge, the volumetric adjustment, and the discount tier. This let his team spot pricing errors in the wild, and the customers actually liked seeing the math.

Finally, he wrapped the whole thing in an **agentic loop** for pickup bookings. The bot could now query the driver-availability API, check the customer's calendar via an integration, block the slot, and send confirmation emails. But he added a **human-in-the-loop** rule: any booking with a value above ₹50,000 or any refund of any amount routed to a live agent for approval. That single guardrail cost him some latency and saved his career the day an agent tried to refund ₹4 lakh on a phantom complaint.

The monthly AI bill came down to ₹9.4 lakh. Customer satisfaction went up because responses were faster and more accurate. Volume grew 40% without adding headcount.

Vikram did not fine-tune a model. He did not train a model. He did not use any technology his competitors could not also buy. What he did was **look at the transformer as an economic object with a cost function, and design the surrounding architecture -- RAG, router, SLMs, CoT, agents, guardrails -- to buy accuracy where it mattered and save tokens where it didn't**.

**The next decade of enterprise AI will not be won by whoever picks the biggest model. It will be won by whoever composes the right architecture around the model -- and knows exactly where to spend a token and where to save one.**
