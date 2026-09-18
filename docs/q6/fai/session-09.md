---
sidebar_position: 10
title: "Session 9: The Triage Case — What Prompt Engineering Really Costs and Why It Matters"
---

# Session 9: The Triage Case — What Prompt Engineering Really Costs and Why It Matters

*How three prompts of increasing sophistication changed the score an AI gave to a dying patient's SOS message -- and what that reveals about the economics, ethics, and mechanics of Large Language Models*

---

## Where We Are in the Course

Sessions 3 through 8 built the AI machinery brick by brick: ANNs, gradient descent, CNNs for images, RNNs for sequences, and word embeddings. By this point we could sketch a many-to-many bidirectional RNN and explain what a self-attention layer does. But knowing how the engine works is not the same as knowing what it costs to run, when it fails, or how to talk to it.

Session 9 was a joint session anchored by the authors of the **Triage Case** -- Professor Sanchita Bhattacharya and Professor Pranto Banerjee -- who walked the class through the ethical, economic, and pragmatic layers of using AI in a real disaster scenario. The case: SOS messages posted online during the second wave of COVID-19 in India, when hospital beds and oxygen cylinders were scarcer than the requests for them.

The session had three arcs, and they built on each other:

| Arc | What We Covered |
|-----|----------------|
| **Economics of LLMs** | What training and running a large language model actually costs -- compute, GPUs, cooling, water, licensed data, guard rails |
| **Architectures Revisited** | Bidirectional RNNs, encoder-decoder transformers, self-attention, multi-head attention, Mixture-of-Experts, multimodal LLMs |
| **The Triage Case + Prompting** | Zero-shot, few-shot, chain-of-thought prompting on 15 real SOS messages, scored against a critical-care doctor's ground truth |

---

## The Economics of LLMs: Why a "Free" Chatbot Isn't Free

Professor Bhattacharya opened with a question that hides the entire discussion: **what does it actually cost to train and run these models?** Students volunteered the answer in layers, and each layer added a new cost that most users never see.

### The Cost Stack

| Cost Component | What It Includes |
|----------------|-----------------|
| **Infrastructure / GPUs** | The Nvidia H100-class chips that do the training. A single top-end GPU costs around Rs 18 lakh; an average Nvidia GPU costs around Rs 2 lakh. A data centre needs thousands of them |
| **Electricity + Cooling** | GPUs dissipate huge heat. Data centres run at -5 to -10 degrees C ambient cooling. This is a permanent, high-voltage utility bill |
| **Water** | Cooling towers consume fresh (not saline) water at scale -- an environmental concern already in the news |
| **Data acquisition** | Licensed images (like the ones behind "Nano Banana"), clean labelled text, moderated content. Raw scraped data is cheap; brand-safe, licensed, human-labelled data is not |
| **Annotators** | Humans who label the data. For a project like image generation, this is a workforce cost |
| **ML Engineers** | Trained professionals who actually build and fine-tune the models |
| **Guardrail / Red-team SLMs** | Additional smaller models that jailbreak-test and moderate the main LLM's outputs |
| **Deployment + Retraining** | Cost to serve inference in production, plus periodic retraining because models drift and pick up garbage over time |

Professor Bhattacharya walked through a rough cost calculation: for Llama 2 70B, roughly **6,000 GPUs running for 12 days**. Multiply GPU count by hourly cost, adjust for utilization, and you can approximate any model's training bill.

> **Professor Bhattacharya:** "Anything that we allocate capital on should one day give us some return -- productivity gains, a predictable cash flow. This is where I'm not very sure how it's going to happen with AI, because a lot of money has already been spent. The ROI is much lower given the amount that has gone into the model-building process and the hype."

A student named Arunava raised the sharpest counterpoint: **capital allocation buys you the best compute, and best compute trains the best model.** Nvidia funds OpenAI. OpenAI commits to buying Oracle or CoreWeave capacity. Those providers buy Nvidia chips. The money loop is real -- but so is the question of whether the compounding investment maps to real economic value.

### Is the Cost Going Up or Down?

The class split roughly 50-50. Both sides had a point.

- **Going up:** Each generation (GPT-4 → 5 → 6) uses vastly more parameters and tokens. Data-cleaning cost is rising because clean licensed data is scarce. Cybersecurity and guardrail costs pile on with every release.
- **Going down:** Open-source models like DeepSeek are hitting frontier-model quality at a fraction of the cost using **Mixture-of-Experts** (MoE) and better architectures. Small Language Models (SLMs) below 10 billion parameters can run on a laptop for domain-specific tasks.

The synthesis Professor Bhattacharya offered: **the frontier keeps getting more expensive; the median use case keeps getting cheaper.** As a business leader, your job is not to buy the frontier -- it is to pick the right size of model for your use case.

---

## Architectures Recap: From RNN to Transformer

The professor sketched the family tree once more, this time with the cost lens attached.

### Bidirectional RNN

A regular RNN reads a sentence left to right. A **bidirectional RNN** reads it both directions and combines the two hidden states. Why does this help? Consider the sentence:

> *"Had I said the movie was good, I would have been a lone numskull."*

Read left to right, the RNN reaches "good" and starts leaning positive. The predictive word -- "numskull" -- sits at the very end. A left-to-right pass has to hold on to six words of neutral-looking evidence before the twist arrives. A right-to-left pass, on the other hand, meets "numskull" almost immediately and flips the sentiment negative from the start. Combining both directions lets the model catch the sarcasm without burning hidden layers on no-man's-land. Predictive words often sit at the end of the sentence.

### The Transformer

The transformer replaced the RNN as the backbone of modern AI. Its innards are three big ideas:

| Component | What It Does |
|-----------|-------------|
| **Self-attention** | Each word looks at every other word in the sentence and updates its own embedding based on that context. The word "tree" in "a small tree beside the river" gets a different embedding than "tree" in "the old oak stands in the middle of the jungle" |
| **Multi-head attention** | Multiple self-attention layers run in parallel, each attending to a different aspect (size, location, species). A single word ends up with several vector representations, one per head |
| **Feed-forward layer** | A standard ANN after the attention layer, which does the actual transformation |

Transformers come in three flavours:

- **Encoder-only** (e.g., BERT) -- reads a paragraph and returns a single representation. Good for classification, summarisation.
- **Decoder-only** (e.g., GPT, Claude, Gemini) -- next-word prediction with masked self-attention. Good for generation.
- **Encoder-decoder** -- reads one sequence, writes another. Good for translation.

### Mixture of Experts

Instead of one giant model, MoE stitches together many small specialist LLMs. **DeepSeek uses roughly 150 experts. Mistral uses 8.** A router (or "gating network") looks at the input prompt and decides which two or three experts should handle it. The full 80-billion-parameter capacity is there, but on any given query only a slice is activated -- so training and inference costs drop dramatically.

> **Professor Bhattacharya:** "Mixture of experts is very useful if you are clear on your outcomes. If your use case is very specific, you don't even need experts. You just need one SLM."

### Multimodal LLMs

Modern frontier models take in image, video, audio, and text simultaneously. Each modality gets its own encoder, produces its own tokens, and all tokens are fed together into the LLM. That is why GPT can look at a photo and describe it, or take voice input and answer in voice.

---

## The Triage Case: Scoring COVID SOS Messages

This was the heart of the session. The class was handed 15 real SOS messages -- collected by the case authors from Twitter, WhatsApp forwards, and other social media during the second wave of COVID-19 in India. Each message was a request for help: oxygen cylinders, ICU beds, Remdesivir, ventilators.

### The Setup

Every SOS message contained some subset of:

- Patient name
- Age
- SpO2 level, CT score, or other vitals
- Presence of comorbidities
- Location (mostly Delhi NCR, Mumbai, other urban centres)
- Attendant phone number
- Free-text description of severity

The class's job: **score each message on urgency, 1 to 5**, where 1 is least urgent and 5 is most urgent. Then compare that score to what a critical-care doctor -- the ground-truth expert -- would score.

Three prompts of increasing sophistication were given, and the class ran each through their AI of choice (Gemini, ChatGPT, Claude, DeepSeek).

### The Three Prompts

| Prompt | Style | What It Contained |
|--------|-------|------------------|
| **Prompt 1** | Zero-shot | "You are an emergency triage specialist. Analyse the urgency and give a score between 1 to 5." That's it -- a two-line prompt |
| **Prompt 2** | Zero-shot, elaborated | Definitions of non-urgent, low-urgent, moderate-urgent, high-urgent, critically-urgent. Factors to consider: SpO2 threshold, age brackets, presence of comorbidities |
| **Prompt 3** | Few-shot, chain-of-thought | Same context as Prompt 2, plus three worked examples showing an SOS message, a target score, and the reasoning that got there |

### What Happened

Most students found that as prompt sophistication increased, **the Mean Squared Error against the doctor's ground truth went down** -- a negative slope in the MSE plot. Not everyone got a clean downward slope, and that itself was instructive.

- Prompt 1 tended to score everything as 5. With no criteria, the AI played it safe: "Everyone is urgent."
- Prompt 2 introduced calibration -- the AI started separating 2s, 3s, and 4s.
- Prompt 3 pulled scores closest to the expert, because the worked examples anchored the model's reasoning.

Some students (Kunwar, Pankaj, Sakshi) saw a fall from Prompt 1 to Prompt 2 but a plateau after that. That is a real-world signal -- for their AI-of-choice on this data, few-shot examples added little over a well-written zero-shot prompt. Model choice matters. DeepSeek behaved differently from Gemini, which behaved differently from GPT.

### The Doctor's Bias, the AI's Bias, and the Student's Bias

The most valuable part of the exercise was not the numbers -- it was the **realisation that even the "ground truth" was one doctor's judgment, made under time pressure, with his own priors.**

The consulted expert was a critical-care specialist. Students noticed patterns in his scoring:

- **Case 14** was a patient over 80 years old with 80% lung damage. The doctor scored it a **1**, not a 5. Reasoning: chances of saving this patient with a scarce ventilator are low; better to allocate the resource to someone with higher survival probability.
- Patients above age 60 but below 80, with better SpO2, scored higher urgency.
- The scoring embedded an **implicit utilitarian calculus** -- Quality-Adjusted Life Years (QALYs) -- that most students had never explicitly considered.

> **Professor Bhattacharya:** "Even if a human does it, the human may come up with some biases. So it's very difficult to think about only the AI's bias -- we have to think about the whole system, doctor plus AI plus the person writing the SOS message."

Because Case 14 had already been *marked* by the expert as a 1, the AI (which recognises no such upper bound in the plain prompt) confidently scored it 4 or 5. That gap is not the AI hallucinating. It is the AI faithfully applying "high urgency = save this person," while the doctor is applying a triage rule the prompt never taught it.

The pedagogical lesson: **AI bias is not just about training data. It is also about which decision framework you forgot to encode in the prompt.**

---

## Prompt Engineering: The Three Patterns

The class formalised what they had just practised.

| Pattern | Description | When to Use |
|---------|-------------|-------------|
| **Zero-shot** | Just ask the question, no examples | Simple, well-known tasks (translation, summarisation) |
| **Few-shot** | Include N worked examples in the prompt | Tasks where the desired output format or reasoning style is non-obvious |
| **Chain-of-thought** | Ask the model to reason step by step, or give it examples that reason step by step | Multi-step logic, math, triage-style judgment |

Chain-of-thought comes at a token-cost premium. A student named Monica shared her firsthand experience: when her company restricted Opus and encouraged users toward Sonnet, token consumption actually **increased**, because users needed longer conversations to get the same answer out of the smaller model. Sometimes environmental savings from a smaller model are illusory.

> **Professor Bhattacharya:** "The architecture is where the cost lies. If you don't know what is the architecture, you will never be able to juggle with the cost part -- this let's remove hidden layers, this let's remove activation functions. You can even come up with your own homemade AI now."

---

## Hallucination, RAG, and Guardrails

Three related failure modes came up in the exercise:

**Hallucination.** The model confidently produces a next word that is grammatically correct but factually wrong -- inventing a name, a citation, a symptom. This happens because generation is probabilistic. Temperature is a knob: lower temperature = more deterministic; higher = more creative and more prone to invention.

**Bias.** The model gives systematically skewed outputs because the training data itself was skewed. Sending "Loan namaskar" through a sentiment classifier trained on Indian text may correctly identify the word *loan* as the predictive marker. Trained on a US corpus, the same phrase is nonsense.

**Retrieval-Augmented Generation (RAG).** The professor showed how RAG works: the LLM is paired with an external database. A user query is converted to a vector embedding, matched against the database, and the retrieved documents are added to the prompt. The LLM now answers with grounded context. This reduces hallucination and lets the AI answer questions its training data alone could not.

For the triage use case, a student suggested a natural RAG extension: pair the LLM with a database of past patient records, doctor prescriptions, and disease progression data. The AI would then triage against real historical outcomes, not just its pre-trained language priors.

---

## Agentic AI: Brain + Body

The final concept of the session was **agentic AI**. A student named Priyanshu offered the cleanest analogy: agentic AI delegates tasks the way humans do.

> **Professor Bhattacharya:** "Agentic AI is like a human body using the AI brain. The brain is still an LLM. It's just that it has been wrapped around with software -- APIs, database queries, action-taking modules. That is why it is becoming so useful."

Consider the prompt: *"Book me the cheapest flight to Delhi next Friday."*

A pure LLM cannot do this. But an agentic AI can:

1. **Brain (LLM):** Parses the prompt, plans the steps -- I need to check the user's calendar, hit flight-booking APIs, compare prices, present options.
2. **Body (software wrappers):** Executes each step. Calls the calendar API. Calls the flight API. Fetches the data.
3. **Brain again:** Interprets the results, picks the cheapest option, generates a confirmation prompt.
4. **Body again:** Books the flight, sends the confirmation.
5. **Human-in-the-loop:** Approves the payment before execution.

Agentic AI is not a new kind of AI. It is a software architecture around an LLM. The value -- and the risk -- come from what you let the agent *do*, not from what the LLM knows.

The risk is real. OpenAI's own tests have found agents doing things like hacking into other systems, deleting emails without asking, and taking actions well beyond their scope. Mastercard and Visa have already released a **"Know Your Agent"** framework -- the AI equivalent of KYC -- to authenticate which operator is behind an agent making financial transactions.

> **Professor Bhattacharya:** "Human in the loop is a safety net. Without control, the agent goes rogue. Whether you need it or not depends on your use case -- but no control is not a suggested design."

---

## What the Class Realised About Bias

Even in a straightforward exercise -- 15 messages, 1-to-5 scoring -- the class identified at least six sources of bias in the pipeline:

| Bias Source | How It Enters |
|-------------|--------------|
| **Message-writer bias** | Users who articulate their emergency better get scored higher. Those who write in broken Hindi or half-English get scored lower |
| **Data bias** | Only urban-India social media was scraped. Rural voices, offline voices, non-connected patients were absent from the dataset entirely |
| **Doctor bias** | One critical-care specialist made the ground truth. His triage philosophy (QALYs, upper-age cutoffs) is baked into every score |
| **AI training bias** | The base model was trained on internet text -- overwhelmingly English, Western, and structured. Sentence framings unlike that distribution get worse embeddings |
| **Prompt bias** | Whatever the prompt author forgot to specify (age upper bound, comorbidity weightage) becomes a silent policy choice |
| **Student / User bias** | Whoever scores or reviews the AI's output brings their own priors |

The solution is not to remove bias -- that is impossible. The solution is to **make each layer explicit**, calibrate against ground truth, keep a human in the loop, and be honest that any triage score is a policy choice, not a fact.

---

## Recipe Chain

**Session 9 tied the mechanics to the money and the ethics:**
Large Language Models are transformers -- built of self-attention, multi-head attention, and feed-forward layers, wrapped in either encoder, decoder, or encoder-decoder shapes. They are expensive to train (GPUs, cooling, water, clean data, annotators, guardrails) and the frontier keeps getting more expensive even as the median use case gets cheaper. Prompt engineering -- zero-shot, few-shot, chain-of-thought -- is how a business user without any training budget still shapes model behaviour. And RAG plus agentic wrappers extend the LLM's reach into the real world.

**Next session:** We close the course with **AI ethics** -- what happens when biased hiring algorithms, facial-recognition failures, and opaque black-box decisions collide with real people. We will look at Amazon's resume screener, the Robert Julian-Borchak Williams facial-recognition arrest, the Equifax breach, and the regulatory response from GDPR to the IEEE ethical standards. We will also revisit the Triage Case one more time -- this time from the moral hazard side of the ledger.

---

## Key Terms to Remember

| Term | One-Line Definition |
|------|--------------------|
| **Bidirectional RNN** | RNN that reads a sequence in both left-to-right and right-to-left directions, then fuses the hidden states |
| **Transformer** | Sequence-model architecture built on self-attention and feed-forward layers; the backbone of modern LLMs |
| **Self-attention** | Mechanism where each token in a sequence updates its embedding based on all other tokens in the context window |
| **Multi-head attention** | Multiple parallel self-attention layers, each capturing a different aspect (size, location, sentiment) |
| **Encoder-only / Decoder-only** | Transformer variants -- BERT is encoder-only (understand text); GPT is decoder-only (generate text) |
| **Mixture of Experts (MoE)** | Architecture combining many small specialist LLMs with a router deciding which to activate per query |
| **SLM (Small Language Model)** | Model with fewer than ~10 billion parameters, useful for narrow, domain-specific tasks |
| **Zero-shot prompting** | Ask the model with no examples |
| **Few-shot prompting** | Ask with N worked examples included in the prompt |
| **Chain-of-thought** | Prompt style that asks the model to reason step by step |
| **RAG** | Retrieval-Augmented Generation -- LLM paired with an external database that supplies grounding context |
| **Hallucination** | Model produces confident but factually wrong output |
| **Agentic AI** | LLM ("brain") wrapped in software that can execute actions -- API calls, tool use, multi-step tasks |
| **MSE** | Mean Squared Error -- average of squared differences between predicted and actual values; used here to compare AI score to expert score |
| **QALY** | Quality-Adjusted Life Year -- utilitarian metric that showed up in the doctor's triage logic |
| **Know Your Agent (KYA)** | Emerging authentication framework for autonomous AI agents, modelled on KYC |

---

## The Real-World Takeaway

Dr. Anjali Rao had been an emergency-medicine registrar for eleven years when her hospital rolled out an AI triage assistant during the third-wave surge. The tool ingested WhatsApp SOS messages forwarded to the hospital's public line, scored each one 1 to 5 on urgency, and pushed the top 20 to her queue every hour.

For the first two weeks, she loved it. The AI cut through the flood. Cases that would have sat in her inbox for hours were bubbling up in minutes. Her reception team went from drowning to breathing.

Then, on a Thursday afternoon in late August, she pulled a case from the bottom of the queue. Urgency score: 2. Patient: 83-year-old male, SpO2 76%, described by his daughter as "unable to speak." Anjali read the message three times. Then she pulled up the AI's reasoning trail. The model had scored the case low because the age was above the demographic threshold the prompt had used to define "high-urgency-with-good-outcome." It was doing exactly what the prompt asked -- rank by expected saveability, not by immediate severity.

Anjali called the daughter. The father was already unconscious. She dispatched an ambulance, admitted him, and got him on oxygen within forty minutes. He survived. Three weeks later, he was discharged to a rehab facility.

That night, Anjali wrote a two-page memo to the hospital's AI committee. The memo did not ask them to shut down the tool. It asked for three changes: strip age out of the urgency prompt entirely and let clinicians weigh it separately; surface every case with SpO2 below 85% regardless of AI score; and, most importantly, log every case where the AI score and the human clinician's score differed by more than 1, so the model could be audited and retrained.

The committee accepted all three. The AI stayed. But its role changed -- from *decider* to *first-pass filter with a full-transparency audit log*. Six months later, an internal review found that the model's original age-weighted logic would have deprioritised 43 patients who ultimately survived because a clinician overrode the score.

Nobody in that hospital lost their job to the AI. But nobody got saved by the AI alone, either. What saved patients was **a doctor who understood enough about how the model worked to know when to trust it, when to overrule it, and how to make sure the next version knew better.**

**The point of prompt engineering is not to get a better answer. It is to make the machine's judgment visible enough that a human can decide whether to accept it.**
