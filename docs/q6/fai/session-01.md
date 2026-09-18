---
sidebar_position: 2
title: "Session 1: The River of Dark Data and the Black Box That Drinks From It"
---

# Session 1: The River of Dark Data and the Black Box That Drinks From It

*Why 93% of the world's data used to just sit there -- and how AI quietly turned that garbage pile into gold*

---

## Setting the Stage: What This Course Is Actually About

Fundamentals of AI is a 10-session, 2-credit course taught by **Professor Probal Mojumder**, faculty at IIM Udaipur for over five years and an active researcher in the AI space, especially AI ethics. He teaches AI across the 2-year MBA, the 1-year MBA, and the EMBA program, plus outside IIMU.

The professor was clear about what the course is -- and is not:

> **Professor Mojumder:** "It's a fundamentals course. It's not going too deep into AI, but even in that small space that we have -- just two credits, equivalent to 10 sessions, 15 hours of lecture -- we will try to build some basic concepts."

The course arc looks like this:

| Sessions | Focus |
|----------|-------|
| 1-2 | Introduction, applications, why AI matters (the mood-setting sessions) |
| 3-4 | Mechanics of AI -- how neural networks actually work (the two most critical sessions) |
| 5-7 | AI models on numerical, image, and text data |
| 8-9 | Large language models (LLMs), advanced concepts |
| 10 | Case on applied AI + AI ethics |

**Important:** This is not a computer science class. Nobody has to write Python or derive gradient descent. But it is also not a "how to use ChatGPT" course. It is the middle path -- a bridge from technical foundations to business judgment, palatable to an MBA audience.

### The Grading Structure

- **Class Participation (30%)** -- Camera-on + engagement = 1 mark, meaningful contribution in chat or voice = 2 marks, an outstanding comment = 3 marks (recorded personally in the professor's notebook). Only best-of-seven counts. Gaming the CP earns a -1.
- **Quiz (30%)** -- Once, on a weekend (confirmed after class request)
- **Endterm (40%)**

> **Professor Mojumder:** "Be yourself. That's the best thing I would suggest. It will help when it comes to CP."

---

## The First Big Idea: Dark Data

Ten years ago, "data" mostly meant tabular, numeric, structured stuff sitting in Excel sheets and enterprise databases. You could query it, aggregate it, plot it, and be done. But that has changed.

Today, an estimated **80% of all data is unstructured** and **93% is dark data** -- data that has been captured but never analyzed.

A student, **Prasoon**, defined it well early in the session:

> "Data which was captured and just stored somewhere -- no one analyzed what is the meaning of it."

**Anish** added the transactional angle: "Many datas that we capture, like very transactional data which is being registered but we see only on a broader perspective -- many meaningful insights can be derived. That is typically dark."

The professor pushed further: what about CCTV footage? Mobile phone videos? Voice recordings of a farmer being interviewed in Hindi in a village? Chat logs, emails, call recordings, DNA sequences, IoT streams from an edge sensor in a supply chain -- **all of it is data**. But historically, we had no way to make sense of it.

### The Three Vs of Dark Data

The professor set up a spectrum:

| Attribute | Active (Structured) Data | Dark (Unstructured) Data |
|-----------|--------------------------|--------------------------|
| **Volume** | Low | Very high |
| **Velocity** | Low (fortnightly reports) | Very high (real-time streams) |
| **Variety** | Uniform (numbers) | Enormous (image, text, video, voice) |
| **Quality** | High (clean) | Low (noisy, duplicated, incomplete) |

**Shubham** flagged the quality point: "Lot of data is duplicated again and again. Ideally, it should have been cleaned before analysis."

The professor made the point vivid with a headcount example. If somebody tells you "there are 91 people in this Zoom call," that's a clean number. But if the AI has to take two screenshots of the Zoom grid and count faces in the images, the number 91 comes out through an enormous amount of noisy computation. Same answer -- but the second version had to eat a mountain of noise to get there. That's dark data at work.

### The Historical Data Question

**Anu** raised a nice edge case: doesn't already-analyzed data become dark again over time?

The professor's clarification was useful: dark data is a **superset of AI-analyzable data**, mostly unstructured, but including any structured data that was previously unused. Later in the session, **Neeraj** brought a real example -- extracting workflow logs (structured but never looked at) to compress a 22-step business process into 7-8 steps. Structured, but dark. It fit the definition.

---

## AI as the Bridge Between Old Analytics and New

If dark data is the ocean, AI is the bridge. Statistics and regression could only analyze tabular data. Neural networks can analyze anything that can be turned into numbers -- images, sound waves, text tokens, sensor readings.

| Old World | New World |
|-----------|-----------|
| Numerical / tabular data | Dark data (images, audio, video, text) |
| Statistics, regression | AI, neural networks, deep learning |
| Aggregate insights (district-level poverty rate) | Granular insights (individual-level predictions) |
| Fortnightly reports | Real-time intelligence |
| Human intuition + report reading | Predictive insights |

> **Professor Mojumder:** "The new type of analytics done by AI -- we are able to analyze dark data of various kinds and come up with new business models."

---

## Where Students Are Already Using AI

Before formalizing anything, the professor did a round of the room. The variety of use cases in one EMBA cohort was itself the lesson.

| Student | Domain | Use Case |
|---------|--------|----------|
| **Anoj** (Microsoft) | Security | AI reads vulnerability logs and telemetry, saves hours of manual analysis |
| **Adita** | Cloud FinOps | AI analyzes cloud utilization metrics, auto-recommends instance right-sizing |
| **Gaurav** | Telecom | Log analysis for issue triage |
| **Sarang** (Agoda) | 360-degree assistant | AI has become his "second brain" -- attends meetings, transcribes, answers Slack DMs on his behalf |
| **Neeraj** | ERP | Multi-agent workflow across ServiceNow, OpenText, and SAP for issue resolution |
| **Gaurav (another)** | Finance | Agentic AI does three-way invoice matching (PO + GRN + Invoice), auto-processes when matched |
| **Ravi Sharma** | Insurance | Auto-adjudication of claims, intent detection from customer conversations |

Sarang's line stuck with the class:

> "Whenever I go into a meeting, there are two Sarangs. One is me. One is my AI assistant."

---

## AI Is a General-Purpose Technology

The professor grounded the excitement in history. AI is not just a fancy tool -- it belongs to a very rare category:

**General-Purpose Technologies (GPTs)** -- the kind that reshape civilizations. Examples from the past: **the wheel, steam engine, combustion engine, electricity, the internet.** These are technologies you don't just use; you build entire economies on top of them.

> **Professor Mojumder:** "AI is one of the most important general-purpose technologies of our era -- a machine's ability to keep improving its performance without humans having to explain exactly how to accomplish all the tasks it is given."

This framing comes directly from the assigned HBR reading, **"The Business of Artificial Intelligence"** by Brynjolfsson and McAfee, which argues that AI (specifically machine learning) is the most important GPT of our time -- and one whose main effects on productivity are still ahead of us, not behind us.

---

## Chihuahua or Cupcake? The Human Brain as the Model

To bring the abstraction back down, the professor showed the classic viral image grid: a mosaic of Chihuahuas and cupcakes that look uncannily alike. He asked the class to look at one tile at a time.

*Cupcake.*
*Chihuahua.*

Effortless. Instant. No conscious calculation.

Then the pivot: **what mechanism inside you actually did that?**

**Divya** offered the answer -- **experience**. Years of seeing images have trained your brain, and stored patterns let you interpret new inputs instantly.

> **Professor Mojumder:** "This general-purpose technology of AI is trying to mimic the human style of thinking. It's mathematical, but it is also very very human -- it's like how the human brain thinks."

### The Neuron -- Biological and Mathematical

The professor drew a rough neuron on the whiteboard: dendrites at the head, axon in the middle, terminals at the tail. Information flows through in one direction as a chemical/electrical signal.

Here's the surprise: **a single neuron does not know what a Chihuahua is.** Just like the nerve endings in your finger don't know an iron is hot -- the signal has to travel up to the spinal cord before "hot" is registered. The individual neuron only does one small thing: it **amplifies or dampens** the signal passing through it.

Multiply that trivial action by billions of neurons wired into a dense network, and out pops recognition, language, memory, consciousness.

An AI neural network mimics exactly this:

| Biological Neural Network | Artificial Neural Network |
|---------------------------|---------------------------|
| Signal (chemical/electrical) enters via dendrites | Number (e.g., 1.7) enters as input |
| Neuron amplifies or dampens the signal | Node applies a weight and activation, output becomes 1.8 |
| Signal passes to next neuron | Value passes to next node |
| Billions of connections produce recognition | Millions/billions of parameters produce prediction |
| No single neuron "knows" the answer | No single node "knows" the answer |

**Anoj** added the missing piece: "Basically neural networks are trained through a feedback loop, with weights and parameters. If we give a labelled dataset -- say images tagged Chihuahua or not-Chihuahua -- it learns through supervised learning."

That is the entire seed of the course.

---

## The Black Box

The professor closed on the single concept he wanted every student to leave with: **the black box.**

Imagine the AI as a box. On the left, you feed in an input -- an image, a text prompt, a voice recording, whatever your dark data is. On the right, an output comes out -- a label, a prediction, a translation, a recommendation.

**In between?** A dense forest of interconnected nodes, each individually amplifying or dampening numbers, collectively producing the final answer. You can inspect it. You can measure it. You can even watch it compute. But you cannot easily explain **why** it said Chihuahua and not cupcake.

That is the black box.

```
Input (Dark Data)  -->  [ AI Black Box ]  -->  Output (Prediction)
Image of a dog                                  "Chihuahua"
Voice recording                                 Transcript
Historical prices                               Buy / Sell signal
Photograph                                      Caption
```

The professor listed use cases along exactly these input-output lines: voice-to-transcript is speech recognition; historical prices to buy/sell is a trading bot; image to caption is object detection; source-language text to target-language text is translation. The mechanism inside every one of these -- deep learning, a neural network -- is fundamentally the same.

> **Professor Mojumder:** "Once you figure out how a cake is made, whether the cake is white in color or red in color or black in color doesn't really matter. So once you figure out what AI is made of -- GPT, or Claude, or Gemini, these will not be big names in your mind. They are just names to what an AI is. All the AIs are actually not very different from each other."

---

## Polanyi's Paradox -- The Reading's Big Idea

**Manish** flagged something from the HBR reading: **Polanyi's Paradox** and its "reverse" version.

**Classical Polanyi's Paradox (about humans):** *"We know more than we can tell."* You know how to drive a car, but you cannot fully write down the steps in a way that lets someone learn to drive from a manual. The knowledge is tacit -- deep in muscle memory and pattern recognition, but not language.

**Sonam** recalled the reverse version from the case: modern AI systems also give correct answers but cannot explain how they got there. The billions of internal weight updates in a deep network are simply not human-interpretable, even when the output is correct. **AI now has its own tacit knowledge.**

This is exactly what makes AI different from every previous piece of business software. Traditional software follows explicit if-then rules -- fully explainable, fully auditable. AI trained on dark data reaches conclusions through opaque internal representations.

That is the deepest reason "black box" is not a slur but a technical property.

---

## Applications of AI: The Room's Working List

The professor mapped applications back to the input-output-black-box structure:

| Application | Input (Dark Data) | Output |
|-------------|-------------------|--------|
| **Autonomous vehicles** | Camera + proximity sensor streams | Steering, brake, acceleration decisions |
| **Medical diagnostics** | X-ray, fMRI, CT scan images | Fracture / tumor detection |
| **Mass customization** | Order history + click stream | Personalized offer per user (Zomato, Myntra) |
| **Language translation** | Text in language A | Text in language B |
| **Object detection** | Image / video | Exam sheet evaluation, attendance from CCTV |
| **Speech recognition** | Audio waveform | Transcript |
| **Agentic AI** | Multi-source query | Autonomous multi-step workflow (invoice matching, claim adjudication) |

**Sushmita** raised the AI ethics thread that will echo across the course: on a hospital visit, she noticed the junior doctor using ChatGPT live during her consultation. Where does helpful augmentation end and unsafe overreliance begin? The professor promised a dedicated Session 10 on AI ethics.

**Senthil** later raised the automation-vs-augmentation question -- can we ever design an agentic system with **no** human in the loop?

> **Professor Mojumder:** "Not being a need [for humans in the loop] is not the right thing to say. It is possible to build AI agents which are totally free-range, but the ethics part is compromised. What if the agent goes rogue and starts hacking into other systems? That's already happening. Human in the loop is a safety net."

---

## Recipe Chain

**Session 1 establishes the ingredients:**
- **Dark data** is the fuel -- unstructured, high volume, high velocity, high variety, low quality. 93% of the world's data was previously untouched by analytics.
- **AI is a general-purpose technology** -- comparable in scale to electricity, the wheel, and the internet.
- **The neural network is the engine** -- a mathematical mimic of the brain, made of nodes that individually amplify or dampen numbers, collectively producing intelligence.
- **The black box is the shape of the output** -- inputs go in, outputs come out, and the internal path is not fully explainable.
- **Polanyi's Paradox now runs both ways** -- humans know more than they can tell, and AI systems also know more than they can explain.

**Next session:** We open the **"Inside Facebook's AI Workshop"** case (Berinato, HBR) and answer the organizational question: *how does a company actually build and deploy AI at scale?* We meet the **three horizons framework**, the wizard-vs-factory metaphor, and the push-vs-pull deployment strategy. We also begin looking inside the black box in preparation for Sessions 3 and 4.

---

## Key Terms to Remember

| Term | One-Line Definition |
|------|--------------------|
| **Dark Data** | Data that has been captured but never analyzed -- roughly 93% of all data, mostly unstructured |
| **Active Data** | Traditional structured tabular data -- clean, low-volume, easy to analyze with statistics |
| **The Three Vs** | Volume, Velocity, Variety -- all high for dark data; data quality is the counter-axis and low for dark data |
| **General-Purpose Technology (GPT)** | A technology so foundational it reshapes economies -- the wheel, electricity, internet, and now AI |
| **Neural Network** | A collection of interconnected artificial neurons/nodes, inspired by the human brain, that transforms inputs into predictions |
| **Node / Neuron** | The smallest unit -- takes a number, amplifies or dampens it, passes it on |
| **Deep Learning** | Machine learning using neural networks with many hidden layers between input and output |
| **Weights & Parameters** | The tunable numbers inside the network that get adjusted during training |
| **Black Box** | An AI system whose input-output behavior is observable but whose internal decision path is not human-interpretable |
| **Polanyi's Paradox** | "We know more than we can tell" -- and, ironically, AI now shares this property |
| **Supervised Learning** | Training on labelled data (feature + known answer), so the model learns to predict labels for new features |
| **Agentic AI** | AI systems that autonomously plan and execute multi-step workflows, often calling other agents or tools |
| **ANI / AGI / ASI** | Narrow (task-specific) / General (human-level across tasks) / Super (beyond human) -- we are still firmly in ANI |

---

## The Real-World Takeaway

Rahul had spent eleven years as an operations manager at a mid-sized life insurance company in Pune. His job was to shepherd claim files from submission to payout. Every morning he opened the same queue of 400-odd active claims, each with roughly the same twelve documents -- FIR copies, hospital bills, discharge summaries, doctor certificates, ID proofs -- and his team of twenty adjudicators would work through them by hand.

The numbers were brutal. Average time to close a claim: 18 days. Fraud detection rate: about 4%. Customer satisfaction: middling at best. Rahul had inherited the process from his predecessor, who had inherited it from his. It ran on Excel, email, and stubbornness.

One Tuesday, the CIO called Rahul in and asked a strange question. "Do you know how much data we have that we've never used?"

Rahul didn't. It turned out the company had eleven years of scanned claim documents sitting on cold storage. Voice recordings from customer care -- hundreds of thousands of them. Photographs submitted with motor claims. FIR PDFs. Doctor's notes written in ballpoint pen on hospital letterhead. All of it collected. None of it analyzed. **Dark data**, all the way down.

The CIO handed Rahul a proposal. Feed the archive into a machine learning system that could read handwritten discharge summaries, cross-reference them with historical FIRs, and flag anomalies. He was skeptical. His adjudicators were experienced. They knew what a suspicious claim looked like. What could a machine possibly see that they couldn't?

Six months later, Rahul was standing in front of a pilot dashboard. The system had processed 8,000 old claims. On 340 of them it had flagged combinations of details that no adjudicator had caught at the time -- a specific hospital with an unusually narrow band of billed amounts, submitted by a specific doctor, always after visits by a specific broker. The pattern was invisible in any single file. Across 8,000, it was almost violent.

Rahul asked the data scientist how the system had found it. She smiled. "Honestly? We can look at the weights, but we can't really tell you which neuron said 'suspicious.' We can only tell you the pattern was there."

That was the moment Rahul understood the black box. It wasn't magic. It wasn't a wizard. It was eleven years of scanned paper, ingested by a network of little mathematical amplifiers, each doing one tiny job. He could not explain **how** it knew. He could only verify **that** it knew.

His team's fraud detection rate went from 4% to 11% inside the year. Average claim closure time dropped to 9 days. Rahul did not become a data scientist. He learned only enough to ask the right questions -- what data are you feeding it, what label are you asking it to predict, how are you measuring whether it's working. That was the whole change.

**The real leverage of AI is not that it does what humans do faster. It is that it finds patterns in data no human ever bothered to open. The manager's job is not to write the algorithm. It is to point the algorithm at the right river of dark data -- and to know what it means when the box says yes.**
