---
sidebar_position: 12
title: "Exam Guide: Everything You Need Before the FAI Exam"
---

# Exam Guide: Everything You Need Before the FAI Exam

*The single document to open the morning of the exam. Everything the professor said about the exam, plus a compressed pass over every session, every framework, every model, and every case — in the order you should revise them.*

---

:::tip[How to use this guide]
Priority is colour-coded throughout the session notes. Red **Must Know — Exam Critical** boxes are your top priority: memorise these first. Green **Important** boxes are supporting concepts that round out a full-marks answer. Grey **Good to Know** boxes are background and colour. If you are short on time, revise **Part 1** (exam format and rules), **Part 3** (session-by-session rapid recall), and **Part 9** (the last-night checklist) first.
:::

## Part 1 — The Exam at a Glance

### Evaluation Breakdown (from course outline + Session 1)

| Component | Weightage | Notes |
|-----------|-----------|-------|
| **Class Participation (CP)** | 30% | Across 10 sessions; best 7 counted |
| **Announced Quiz** | 30% | One quiz, MCQ, covers Sessions 1-5 |
| **End-Term Examination** | 40% | Conducted after Session 9, weekend |

### CP Grading — How Marks Are Given Each Session

| Mark | Behaviour |
|------|-----------|
| **0** | Camera off AND no participation |
| **1** | Video on OR virtual hand raise |
| **2** | Active participation (chat comment OR speaking) |
| **3** | Outstanding substantive contribution (professor writes name in notebook) |
| **-1** | Speaking terribly / gaming CP for the sake of scoring |

> **Professor Mojumder (Session 1):** "In any session maximum you can score is a three marks in CP and we have 10 sessions. So 10 into three equivalents to 30 marks. But nobody will be scoring 30 because I don't think every comment will be very outstanding. So mostly it will be ranging between 10 to 20 marks. Best of seven sessions will be counted."

### Quiz Pattern (confirmed from Sessions 5, 7, and 8)

| Attribute | Detail |
|-----------|--------|
| **Format** | MCQ |
| **Weightage** | 30 marks total (professor initially said 10 or 20 in Session 5) |
| **Portion** | Session 1 to Session 5 only |
| **Timing** | Weekend (Saturday), before Session 8 |
| **Duration** | ~30 minutes |
| **Camera** | Must be on for the entire duration |
| **AI use** | Explicitly forbidden — "Don't use AI for the quiz" |

### End-Term Exam Pattern

| Attribute | Detail |
|-----------|--------|
| **Weightage** | 40 marks |
| **Timing** | Saturday after Session 9 |
| **Coverage** | Full course (Sessions 1-10) |
| **AI use** | Forbidden — "Don't use AI for the exam" |

> **Professor Mojumder (Session 9):** "Don't use AI for the exam. Because it's a chance to test yourself. If you use AI you will miss out on the chance to know how well you understood the concepts. The only competitive advantage in the future is your learning, not your grades."

### Triage Case Grading (Session 9 in-class exercise, if applicable)

> **Professor Mojumder (Session 9):** "We'll be grading you mostly on whether we get a negative slope. Not on absolute values."

The Triage Case is graded on **the slope of your MSE curve across three prompts** — a negative slope (errors decreasing with better prompt engineering) is what gets rewarded, not the absolute error values.

---

## Part 2 — The Whole Course in One Page

### The 10-Session Skeleton

| # | Session Title | The One Idea | Case / Exercise |
|---|--------------|--------------|-----------------|
| 1 | Dark Data & the Black Box | AI is a general-purpose technology; ML learns from data instead of hard-coded rules | HBR: *The Business of AI* (Brynjolfsson & McAfee) |
| 2 | Wizards Don't Scale — Factories Do | 3 Horizons of AI workflow; move from artisanal to industrial ML | HBR: *Inside Facebook's AI Workshop* |
| 3 | Opening the Black Box | Single neuron = weight × input + bias; a network is just stacked neurons | Excel salary-prediction exercise |
| 4 | Climbing the Error Mountain | Cost function + gradient descent = how networks learn | Excel U-curve exercise |
| 5 | Teaching Machines to See | ANN collapses on HD images → convolution + pooling saves the day | MNIST Fashion; 8×5 zero-image walkthrough |
| 6 | When Machines Read | Words → vectors → embeddings; RNN adds memory | GloVe / New Delhi vs New York example |
| 7 | The Tree Beside the River | Contextual embeddings; transformers replaced RNNs via attention | BERT vs GPT; zero-shot / few-shot prompting |
| 8 | The Price of Intelligence | LLM economics; RAG, CoT, MoE, SLMs, multimodal, agentic AI | Cost stack discussion |
| 9 | The Triage Case | Prompt engineering as a business skill; bias in the pipeline | Triage Case (15 COVID SOS messages) |
| 10 | When the Black Box Meets the Real World | Bias types, ethical AI, regulation, responsible deployment | Amazon resume screener, COMPAS, Detroit facial recognition |

---

## Part 3 — Session-by-Session Rapid Recall

:::danger[Must Know — Exam Critical]
If you learn nothing else, learn these six highest-yield concepts across the whole course:

- **3 Horizons of AI workflow** — H3 research → H2 applied ML → H1 product; ~50% H2 failure rate; "factory, not wizard"
- **Activation function → problem type** — linear for regression, sigmoid for binary, softmax for multiclass
- **CNN vs RNN vs Transformer** — images → CNN; sequences → RNN (legacy); long-range/parallel → Transformer with self-attention
- **The six bias types** — data, sampling, algorithmic, representation, confirmation, automation
- **RAG** — retrieve from a vector DB, append chunks to the prompt, ground the answer, cut hallucination
- **Zero-shot / few-shot / chain-of-thought** prompting — and when to use each
:::

### Session 1: Dark Data & the Black Box

**Must-remember concepts:**
- **Dark data**: unstructured data (~93% of all data) — images, video, text, emails, PDFs — that traditional databases cannot process
- **Three Vs of data**: Volume, Velocity, Variety
- **AI as a General Purpose Technology (GPT)** — like electricity or the steam engine; will transform every industry (per Brynjolfsson & McAfee)
- **Polanyi's Paradox**: "We know more than we can tell" — humans cannot explain their tacit knowledge; ML sometimes *inverts* this by finding patterns humans can't articulate
- **Rule-based systems** vs **Neural networks**: rules are hand-written (deterministic, explainable, brittle); neural nets are learned (probabilistic, powerful, opaque)
- **Chihuahua-vs-cupcake** analogy: neural nets classify by learning weights, not writing rules
- **The neuron as amplifier or dampener**: weights amplify or suppress signals

**Likely exam angles:**
- Given a business problem, is it better solved by rules or ML? (Answer: complex, high-dimensional pattern → ML; simple, well-understood logic → rules)
- Name 3 characteristics of AI as a GPT (pervasive, improves over time, spawns complementary innovation)
- What makes data "dark"?

### Session 2: Three Horizons & the AI Factory

**Must-remember concepts:**
- **Three Horizons of AI workflow** (from *Inside Facebook's AI Workshop*):

| Horizon | Focus | Timeframe | Team |
|---------|-------|-----------|------|
| **H3** | Fundamental research (novel algorithms) | 5-10 years | FAIR (Facebook AI Research) |
| **H2** | Applied ML (turn research → deployable capability) | 1-3 years | AML (Applied Machine Learning) |
| **H1** | Product embedding (put AI into products at scale) | 0-1 year | Product engineering |

- **50% H2 failure rate** — half of applied ML projects don't ship
- **Wizard vs Factory**: don't rely on a single genius (wizard); build a repeatable pipeline (factory)
- **Push then Pull**: infra team pushes tools out, product teams pull them in
- **ANI / AGI / ASI**: Narrow AI (today, task-specific) → General AI (human-level, not yet) → Super AI (beyond human)
- **Samuel vs Mitchell definitions of ML**:
  - Samuel (1959): "Field of study that gives computers the ability to learn without being explicitly programmed"
  - Mitchell (1997): "A program learns from experience E w.r.t. task T and performance measure P, if performance on T (as measured by P) improves with experience E"
- **Software vs ML** table: software = logic hardcoded; ML = logic learned from data
- **Salary-prediction dataset**: features (X) → label (Y) → prediction (ŷ)

**Likely exam angles:**
- What are the 3 horizons of AI workflow?
- Why does Facebook separate FAIR from AML?
- Define ANI / AGI / ASI with examples
- Difference between traditional software and ML

### Session 3: Opening the Black Box (Neural Networks Part 1)

**Must-remember concepts:**
- **A single neuron**: `ŷ = w·x + b` — weight amplifies/dampens; bias shifts
- **Feature vs Label**: feature = input, label = correct answer used for training
- **Architecture of an ANN**: Input layer → Hidden layer(s) → Output layer
- **Parameter counting**: For a 3-2-1 network → (3×2 weights + 2 biases) + (2×1 weights + 1 bias) = **11 parameters**
- **Scale reference**: GPT-3 has ~175 billion parameters; a small MNIST net has thousands
- **Sword vs Needle**: pick the right architecture for the problem (a needle is not always better than a sword)
- **Driver vs Mechanic**: as a manager, be a driver (know what car does), not a mechanic (know how engine works) — but understand *enough* to make procurement decisions

**Likely exam angles:**
- Count parameters in a given ANN architecture
- Explain forward propagation with a numerical example
- What is a feature? What is a label? What is a prediction?

### Session 4: How Networks Learn (Neural Networks Part 2)

**Must-remember concepts:**
- **Three output types → three activation functions**:

| Problem type | Output layer activation | Why |
|--------------|------------------------|-----|
| Regression (continuous) | Linear / none | Output can be any real number |
| Binary classification | Sigmoid | Squishes to [0, 1] — probability |
| Multiclass classification | Softmax | Outputs sum to 1 — probability across classes |

- **Hidden layer activations**: ReLU (`max(0, x)`) is the default — cheap and effective
- **Cost / Loss function**: MSE for regression, cross-entropy for classification
- **Gradient descent**: pick a starting point on the error curve, take steps downhill (opposite of the gradient)
- **Learning rate (step size)**: too large → ping-pong past the minimum; too small → takes forever
- **Local vs global minimum**: gradient descent can get stuck in a local dip
- **SGD (Stochastic Gradient Descent)** and adaptive optimizers (Adam, RMSProp) fix simple gradient descent's flaws
- **Epoch**: one full pass over the training data
- **Overfitting**: model memorizes training data but fails on test data — high training accuracy, low test accuracy
- **Early stopping**: stop training when test error starts rising
- **Train / test split**: don't peek at test data during training
- **Trained model as a "zip file"**: the weights compress the learned patterns

**Likely exam angles:**
- Given output type, pick the right activation function
- Explain gradient descent in plain English
- Why is a high training accuracy sometimes bad? (overfitting)
- What is an epoch? What is a learning rate?

### Session 5: Teaching Machines to See (CNN Part 1)

**Must-remember concepts:**
- **Image = 2D grid of pixels**; each pixel is 0-255 (grayscale) or 3 values (RGB)
- **MNIST Fashion**: 28×28 grayscale images → 784 features → softmax over 10 classes
- **Curse of dimensionality**: a 1000×1000 RGB image → 3 million input neurons → billions of weights in a single dense layer → **infeasible**
- **Convolution**: slide a small filter (e.g., 3×3) across the image; compute dot product at each position → feature map
- **Filter (kernel)**: small matrix that detects a specific pattern (edge, corner, texture)
- **Max pooling**: downsample by taking the max of a small window (e.g., 2×2 → 1 value) — reduces size, keeps strong signals
- **Flattening**: convert final feature maps into a 1-D vector to feed into a dense (ANN) layer
- **CNN pipeline**: `Conv → Activation → Pool → (repeat) → Flatten → Dense → Softmax`
- **Learned filters are not human-explainable** — the professor was honest about this

**Likely exam angles:**
- Why can't we use a plain ANN for HD images? (parameter explosion)
- Walk through convolution on a 5×5 image with a 3×3 filter
- What does max pooling do and why?

### Session 6: When Machines Read (NLP Part 1)

**Must-remember concepts:**
- **Text is not directly usable** — needs to become numbers
- **Progression of ideas** (the class brainstormed this):
  - Lat/long? → ASCII? → 1-26 letter index? → dictionary indexing → **one-hot encoding** → **word embeddings**
- **One-hot encoding**: each word = a sparse vector (1 in one position, 0 elsewhere); dimension = vocab size — huge and no semantic meaning
- **Word embeddings**: dense vector (e.g., 300 dimensions) that captures *meaning*
- **GloVe** (Stanford): pre-trained embeddings, 2B → 220B tokens, 1.2M vocabulary
- **Vector arithmetic works**: `king - man + woman ≈ queen`
- **New Delhi ≈ Mumbai ≈ Nagpur** (Indian cities); **New York** lives in a different neighborhood
- **The polysemy problem**: "bank" (river vs financial) gets one static vector — same word, different meaning → context needed
- **Static embeddings + ANN** works for simple sentiment classification but breaks on sequence-dependent meaning
- **Motivation for RNN**: language is *sequential*; order matters — need a model with memory

**Likely exam angles:**
- Why one-hot encoding is inefficient
- Explain what a word embedding is with an example
- What is the polysemy problem?
- Why do we need a model with memory for text?

### Session 7: The Tree Beside the River (NLP Part 2)

**Must-remember concepts:**
- **Contextual embeddings**: same word gets different vectors depending on surrounding words ("small tree beside a river" vs "big tree in a forest")
- **RNN architectures**:

| Type | Example |
|------|---------|
| One-to-one | Vanilla classifier |
| One-to-many | Image → caption |
| Many-to-one | Sentence → sentiment |
| Many-to-many | Translation, video captioning |

- **RNN limitations**: sequential compute (can't parallelize), vanishing gradients (forgets long-range context)
- **Transformer** solves both: parallel compute + self-attention captures long-range dependencies
- **Self-attention**: each token attends to every other token in the sequence
- **Multi-headed attention**: multiple attention "heads" learn different relationships in parallel
- **Encoder vs Decoder**:
  - **BERT** = encoder-only → understanding tasks (classification, extraction)
  - **GPT / Claude / Gemini** = decoder-only → generation
- **Context window**: how many tokens the model can attend to at once (4K, 128K, 1M...)
- **Zero-shot prompting**: ask the task directly, no examples
- **Few-shot prompting**: provide 2-5 example input/output pairs before asking
- **Hallucination**: confidently wrong output — the model generates plausible-sounding but false information
- **Prompt-engineering trick (Pratik's contribution)**: "You are a technical architect specializing in X" — persona priming dramatically improves output quality

**Likely exam angles:**
- Why did transformers replace RNNs?
- What is self-attention (one-sentence answer)?
- Difference between encoder-only (BERT) and decoder-only (GPT) models
- Zero-shot vs few-shot with examples

### Session 8: The Price of Intelligence

**Must-remember concepts:**
- **LLM cost stack**: data licensing + compute (GPU-hours) + cooling + water + human-in-the-loop labeling + fine-tuning
- **Circular financing risk**: cloud provider invests in AI startup → AI startup buys compute from cloud provider → revenue loops back
- **Frontier costs are still rising** (per class debate) — GPT-4, Claude Opus, Gemini Ultra are more expensive to train than their predecessors, not less
- **RAG (Retrieval-Augmented Generation)**: retrieve relevant documents from a vector database first, then feed them to the LLM → grounds answers in real data, reduces hallucination
- **Chain-of-Thought (CoT) prompting**: "Let's think step by step" — model shows reasoning steps; especially good for math/logic (e.g., Roger's tennis balls problem)
- **Mixture of Experts (MoE)**: instead of one huge dense model, route each input to a small subset of "experts" (Mixtral, DeepSeek use this)
- **Small Language Models (SLM)**: under 10B parameters; privacy-preserving, deployable on-device, cheaper
- **Multimodal LLM**: handles text + image + audio + video (GPT-4o, Gemini, Claude 3)
- **Agentic AI**: LLM + tools + memory + goals → can take actions, not just generate text
- **KYA framework** (Know Your Agent, from Mastercard/Visa): identify, verify, monitor AI agents like you would humans/employees
- **Rogue-agent risk**: agents can hack, spam, or act unpredictably → human-in-the-loop is a safety net
- **Automation vs Augmentation**:
  - **Automation** = AI does the task alone (efficient, risky)
  - **Augmentation** = AI + human co-pilot (safer, slower)

**Likely exam angles:**
- What are the components of the total cost of running an LLM?
- Explain RAG in a sentence
- Chain-of-Thought vs standard prompting
- What is agentic AI? Why is human-in-the-loop important?

### Session 9: The Triage Case

**Must-remember concepts:**
- **The Triage Case**: 15 real COVID-19 SOS messages from social media; the task is to score them for severity so a doctor can prioritize
- **Three prompt variants tested in class**:
  1. **Zero-shot**: bare question, no examples
  2. **Few-shot**: provide 3-5 labeled examples
  3. **Chain-of-Thought**: ask the model to reason step by step
- **Ground truth**: severity scores from a critical-care doctor
- **Grading metric**: MSE (mean squared error) between model score and doctor's score
- **Expected result**: MSE should decrease across the three prompts → **negative slope** on the graph
- **Six kinds of bias exposed** in the exercise (data, sampling, algorithmic, representation, confirmation, automation)
- **Business relevance**: hospitals, insurance, HR, credit scoring — all use triage-style ML that can encode bias
- **Doctor-in-the-loop principle**: AI score is a *ranking aid*, not a decision replacement

**Likely exam angles:**
- Explain how prompt engineering can debias LLM outputs
- Why is MSE a good metric here?
- Give an example of each kind of bias in a triage system

### Session 10: When the Black Box Meets the Real World

**Must-remember concepts (bias taxonomy):**

| Bias type | What it is | Example |
|-----------|-----------|---------|
| **Data bias** | Training data doesn't match real world | Facial recognition trained mostly on white faces |
| **Sampling bias** | Some groups underrepresented in data | Amazon resume screener trained on 10 years of mostly-male hires |
| **Algorithmic bias** | Model design amplifies unfairness | Optimizing for accuracy alone can hurt minorities |
| **Representation bias** | Categories or labels themselves are biased | "Good employee" defined narrowly |
| **Confirmation bias** | Model reinforces prior beliefs | Recommendation loops narrowing views |
| **Automation bias** | Humans over-trust the AI | Doctor accepts wrong AI triage without question |

**Real cases to remember:**
- **Amazon resume screener**: penalized resumes containing "women's" (as in "women's chess club captain") — scrapped in 2018
- **Robert Julian-Borchak Williams (Detroit, 2020)**: wrongfully arrested due to facial recognition false match — first known US case
- **COMPAS**: recidivism prediction tool; ProPublica showed racial bias in false-positive rates
- **Mortgage bias**: ML models denied loans to Black applicants more often than to white applicants with similar profiles
- **Tim Hortons / PIPEDA**: covert location tracking → Canadian privacy law violation
- **Equifax breach**: 147M records exposed → why data minimization matters
- **Google Duplex**: AI phone assistant that sounded human — sparked debate on disclosure

**Ethical frameworks:**
- **Four components of informed consent**: (1) disclosure, (2) comprehension, (3) voluntariness, (4) competence
- **Explainable AI (XAI)** vs **Interpretable AI**:
  - Explainable: post-hoc explanation (LIME, SHAP)
  - Interpretable: model is transparent by design (Cynthia Rudin argues we should prefer these for high-stakes decisions)
- **GDPR Article 22**: right to human review of automated decisions
- **EU AI Act**: risk-based classification (unacceptable / high / limited / minimal)
- **India's DPDP Act (2023)**: consent-based data protection
- **IEEE Ethically Aligned Design**: engineering ethics guidelines
- **KYA (Know Your Agent)**: emerging framework for AI agent accountability

**Likely exam angles:**
- Name and give an example of each bias type
- What is the difference between explainable and interpretable AI?
- Which regulation applies to what use case (GDPR for EU users, DPDP for India, etc.)
- Draft an informed consent statement for an AI hiring tool

---

## Part 4 — The 20 Highest-Signal Terms (One-Line Definitions)

| # | Term | One-line definition |
|---|------|-------------------|
| 1 | **Dark data** | Unstructured data (~93% of all data) that traditional databases cannot process |
| 2 | **Feature / Label / Prediction (ŷ)** | Input / correct answer / model's guess |
| 3 | **Weight / Bias** | Amplifier / shifter of a neuron's signal |
| 4 | **Activation function** | Non-linearity applied to a neuron's output (ReLU, sigmoid, softmax) |
| 5 | **Cost function** | Measures how wrong the model is (MSE, cross-entropy) |
| 6 | **Gradient descent** | Iterative algorithm to minimize cost by moving down the error curve |
| 7 | **Epoch** | One full pass through the training data |
| 8 | **Overfitting** | Model memorizes training data, fails on new data |
| 9 | **Train / Test split** | Data partitioned so model isn't graded on what it saw during training |
| 10 | **CNN** | Convolutional Neural Network — for images; uses filters + pooling |
| 11 | **RNN** | Recurrent Neural Network — sequential model with memory; obsolete for most NLP |
| 12 | **Transformer** | Attention-based architecture that replaced RNNs (2017 onward) |
| 13 | **Word embedding** | Dense vector representation of a word capturing meaning |
| 14 | **Self-attention** | Each token weighs its relationship to every other token in the sequence |
| 15 | **LLM** | Large Language Model — trillion-parameter transformer trained on internet-scale text |
| 16 | **Zero-shot / Few-shot / CoT** | Prompt styles: no examples / few examples / step-by-step reasoning |
| 17 | **RAG** | Retrieval-Augmented Generation — LLM + vector database for grounded answers |
| 18 | **Hallucination** | LLM generates confident but false output |
| 19 | **Agentic AI** | AI that plans, uses tools, and takes actions autonomously |
| 20 | **Bias (six types)** | Data, sampling, algorithmic, representation, confirmation, automation |

---

## Part 5 — Frameworks You Can Draw From Memory

### The Three Horizons of AI Workflow
```
H3 (Research) ── H2 (Applied ML) ── H1 (Product)
5-10 years        1-3 years         0-1 year
Novel algos       Deployable        In users' hands
```

### The Model Selection Decision Tree
```
Is the data an image? ────────────── Yes → CNN
                          No
                           │
Is the data a sequence (text/audio/time-series)?
   │
   Yes → Short sequence? → RNN / LSTM (rarely, legacy)
   │      Long / general? → Transformer / LLM
   │
   No (structured tabular)? → Classical ML / ANN
```

### The Neural Network Anatomy
```
Input (features) → Hidden layer(s) with ReLU → Output layer
                                                  │
                                                  ├── Linear (regression)
                                                  ├── Sigmoid (binary)
                                                  └── Softmax (multiclass)

Cost → Gradient descent → Update weights → Repeat for many epochs
```

### The CNN Pipeline
```
Image → Conv + ReLU → Max Pool → Conv + ReLU → Max Pool → Flatten → Dense → Softmax
   ↑                                                              ↑
Feature extraction                                          Classification
```

### The LLM Pipeline (with RAG)
```
User prompt → Retrieve relevant docs from vector DB → Feed docs + prompt to LLM → Output
                          ↑
                    Grounds the answer in real data (reduces hallucination)
```

---

## Part 6 — Cases: What to Say If Asked

### The Business of AI (Brynjolfsson & McAfee)
- Core thesis: AI is a **General Purpose Technology** (like electricity, the steam engine)
- Not just automation — it's **prediction machines** that make everything requiring prediction cheaper
- Complementary innovations (data infrastructure, org design) are what create business value
- Winner-take-most dynamics: firms that master AI first pull ahead exponentially

### Inside Facebook's AI Workshop (Berinato)
- Facebook (Meta) organizes AI in three horizons: **FAIR** (H3 research), **AML** (H2 applied ML), Product teams (H1)
- 50% failure rate at H2 is normal and healthy
- "Push then pull" model: infra teams build tools, product teams adopt them
- The key insight: **industrial-scale ML requires a factory, not a wizard**

### The Triage Case (in-class)
- 15 COVID-19 SOS social media messages
- Three prompts of escalating sophistication: zero-shot → few-shot → chain-of-thought
- MSE against a critical-care doctor's ground truth
- Negative slope = prompt engineering is working
- Lesson: **prompt engineering is a business skill, and bias hides in every layer of the pipeline**

---

## Part 7 — Professor's Recurring Emphases

Things the professor said more than once — these are highest signal for the exam:

1. **"AI is not magic, it is math and data"** — every managerial decision must be grounded in what the model actually does
2. **"Understand enough to be a driver, not necessarily a mechanic"** — managers procure AI, they don't build it, but they need enough intuition to buy well
3. **"There is a horizon, there is a pipeline"** — the 3 Horizons framework is the mental model for organizational AI
4. **"Don't be a wizard, build a factory"** — repeatability > brilliance
5. **"Every model has a cost function; every business decision has a cost function"** — you always optimize something; the question is *what*
6. **"Learning matters more than grades"** — repeated in Session 9 as a plea against using AI on the exam
7. **"The bias is in the pipeline, not in the model alone"** — data, labels, sampling, evaluation, and deployment all inject bias
8. **"Human in the loop"** — the answer to almost every ethics question in this course

---

## Part 8 — Likely Question Formats (Based on Course Design)

Based on the course pedagogy (MCQ quiz, essay-style end-term) and the professor's emphases, expect a mix of:

### MCQ Quiz (Sessions 1-5)
- "Which of the following is NOT a Horizon of AI workflow?"
- "What is the primary use of a softmax activation function?"
- "Which of these is an example of dark data?"
- "In a 4-3-2 neural network, how many parameters are there?" (Answer: 4×3 + 3 + 3×2 + 2 = 23)
- "Which regulation gives EU citizens the right to human review of automated decisions?" (GDPR Article 22 — but this is Session 10 content, so probably in the end-term, not the quiz)

### End-Term (Full Course)
- **Short-answer**: "Define agentic AI. Give a business example."
- **Compare-and-contrast**: "RNN vs Transformer — three key differences."
- **Case application**: "You are the CTO of an insurance company deploying an AI claims-assessment tool. Identify three sources of bias and propose mitigations."
- **Framework application**: "Apply the 3 Horizons framework to how your organization should structure its AI investments."
- **Ethical reasoning**: "A hospital wants to deploy an AI triage system. Draft the informed consent protocol."

---

## Part 9 — Last-Night Checklist

The morning of the exam, check yourself against this list. If you can answer each in one breath, you're ready.

- [ ] Name the 3 Horizons of AI workflow and give a Facebook example of each
- [ ] Draw a neural network with input/hidden/output layers and count parameters
- [ ] Match activation function to problem type (regression → linear; binary → sigmoid; multiclass → softmax)
- [ ] Explain gradient descent in 30 seconds
- [ ] Explain why overfitting happens and how to prevent it
- [ ] Explain the CNN pipeline in one sentence
- [ ] Explain what a word embedding is and why it beats one-hot
- [ ] Explain why transformers replaced RNNs (two reasons)
- [ ] Explain zero-shot / few-shot / chain-of-thought prompting
- [ ] Explain RAG and why it reduces hallucination
- [ ] List the six types of bias with one example each
- [ ] Name three regulations relevant to AI (GDPR, EU AI Act, India DPDP)
- [ ] Name three real ethical failures (Amazon resume, Detroit facial recognition, COMPAS)
- [ ] Explain the difference between explainable and interpretable AI
- [ ] Explain automation vs augmentation with an example

---

## Part 10 — Exam-Room Rules

1. **Camera on** for the entire duration
2. **No AI tools** — no ChatGPT, no Claude, no Gemini, no Copilot
3. **No unauthorized sharing** — the professor takes this seriously
4. **Write in your own words** — memorized definitions are transparent
5. **Cite the professor's frameworks** — "as per the 3 Horizons framework..." earns marks
6. **Use examples** — every conceptual answer should be paired with a concrete example (redBus for problem/solution space, MNIST for classification, Amazon resume for bias, etc.)
7. **When in doubt, invoke "human in the loop"** — this is the professor's fallback answer to almost every ethics question

---

## Part 11 — The Professor's Closing Words (Session 9)

> **Professor Mojumder:** "The only competitive advantage in the future is your learning, not your grades. If you use AI for your quiz and get good grades, you will miss out on a chance to test your learning — which is more important than actually getting some good grades. Think about the effect AI will have. Even in a one-and-a-half-hour period of time, you thought deep into the problem, and therefore you have these comments. That's what will stay with you."

Good luck. Now close this file, and go show them what you've learned.
