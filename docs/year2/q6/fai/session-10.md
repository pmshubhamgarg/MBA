---
sidebar_position: 11
title: "Session 10: When the Black Box Meets the Real World — AI Ethics, Bias, and Responsibility"
---

# Session 10: When the Black Box Meets the Real World — AI Ethics, Bias, and Responsibility

*The final session. What Amazon's resume screener, Robert Williams's wrongful arrest, and the Equifax breach share in common -- and what a business leader has to do about it*

---

:::info[Priority Map — What to Focus On]
**Must know (exam-critical):** The six bias types (data, sampling, algorithmic, representation, confirmation, automation) with an example each; explainable AI (XAI) vs interpretable models; human-in-the-loop as a design principle; the key regulations (GDPR Article 22, EU AI Act, India DPDP Act).

**Important (supporting):** The four components of informed consent; the flagship real cases (Amazon resume screener, Robert Williams / Detroit facial recognition, COMPAS); the business leader's deployment checklist.

**Context (background/color):** Tim Hortons location tracking; the Equifax breach; Google Duplex; the automation / future-of-work numbers.
:::

## Where We Are, and Why This Session Exists

Nine sessions in, we can now sketch a neural network on a napkin, explain a self-attention layer to a non-technical colleague, and price out a training run. What we have not done is confront the fact that **every architecture choice we have discussed lands, eventually, on a real human being.**

The Amazon recruiter who never got to see a woman's CV because the AI screened it out. The Black man in Detroit who was arrested on a Sunday afternoon because a facial-recognition system misidentified him from a grainy security video. The 143 million Americans whose social security numbers left Equifax's servers in 2017 and have not come back. Each of these has an AI or ML or big-data root cause. Each of these has a real name and a real consequence.

Professor Mojumder used this session to force a shift of altitude. For the first nine sessions we sat at the desk of the model builder. In Session 10 we stood in the shoes of the people the model acts upon.

> **Professor Mojumder:** "Thinking about the ethical aspects of AI is a form of safety engineering, where precautionary steps in AI's advancement can prevent major issues from arising. It doesn't take someone with a technical expertise to understand the ethical implications that AI could have."

---

## The Ethics Frame: Why Even Have This Conversation?

A student pushed back early: *if the model is measurably more accurate than the human it replaces, isn't the ethics debate just noise?*

The professor's answer had three parts.

**First**, accuracy is not the only measure. A model that is 90% accurate overall but 60% accurate for one demographic and 99% accurate for another is systemically discriminatory even if its average is impressive.

**Second**, AI decisions scale in a way human decisions never did. A biased recruiter affects the hundreds of CVs they screen in a year. A biased screening algorithm affects millions in a week.

**Third**, when the black box makes a decision, the person on the receiving end usually has **no way to contest it**. Article 22 of the GDPR was written precisely because that asymmetry is intolerable.

---

## The Taxonomy of Bias

The class built out the vocabulary. Bias has several colours, and they compound.

:::danger[Must Know — Exam Critical]
Memorise the **six bias types with one example each**: data, sampling, algorithmic, representation, confirmation, and automation bias. "Name and give an example of each bias type" is one of the most predictable questions on the end-term, and these six recur from the Triage Case in Session 9.
:::

| Type of Bias | What It Means | Textbook Example |
|--------------|--------------|------------------|
| **Data Bias** | Training data does not represent the real-world population it will be used on | Amazon's resume screener was trained on ten years of successful hires -- mostly men |
| **Sampling Bias** | The way you collected data over-represents some groups and under-represents others | COVID-19 SOS messages only from urban Twitter users; rural India was invisible in the corpus |
| **Algorithmic Bias** | The model's design amplifies bias that was small in the data | Facial recognition systems trained on lighter-skinned faces perform worse on darker-skinned faces even when both are in the training set |
| **Representation Bias** | The features you chose to feed the model encode historical inequality | Using ZIP code as a proxy for creditworthiness in a country with a history of redlining |
| **Confirmation Bias (Human-in-loop)** | Human reviewers accept AI outputs that confirm their priors and question outputs that don't | A hiring manager rubber-stamps AI recommendations of candidates who "look like" past hires |
| **Automation Bias** | People over-trust an automated system, even when its confidence is unwarranted | Doctors accepting AI diagnoses without a second look; drivers surrendering to lane-assist on icy roads |

---

## Real Cases the Class Walked Through

The professor pulled specific case studies from the Ivey reading and built each into a discussion.

### Amazon's Resume Screener (2018)

Amazon built an internal AI to rank incoming resumes. It was trained on ten years of hiring data. The model learned that successful applicants at Amazon had historically been men -- and it started penalising resumes that included the word *women's* (as in "women's chess club captain") and downgrading graduates of two all-women's colleges.

Amazon tried to patch the model. They could not guarantee the sorting would stay unbiased. **They scrapped the project.**

The lesson is not "AI is racist." The lesson is that **historical data encodes historical discrimination**, and any model trained on that data will inherit the discrimination unless you deliberately intervene. The word "women's" wasn't in the training data as a slur. It was in the training data as a correlate of "did not get hired" -- because Amazon's past hiring had a gender problem.

### Robert Julian-Borchak Williams (Detroit, 2020)

Facial recognition supplied to the Detroit Police Department by DataWorks Plus misidentified Mr. Williams as a larceny suspect. He was arrested at his home, in front of his wife and two young daughters, and held for thirty hours. When police finally showed him the surveillance photo, he held it up to his face and said, *"No. This is not me. Do you think all Black men look alike?"*

The system was known to be less accurate on darker-skinned faces. That fact was in the academic literature. It just was not in the procurement paperwork.

Amazon, IBM, and Google all publicly paused their facial-recognition offerings to law enforcement in June 2020 -- but as the reading notes, most facial-recognition software is sold by small vendors nobody has heard of.

### The COMPAS Recidivism Algorithm

The COMPAS tool, used by US courts to predict recidivism risk, was audited by ProPublica and found to falsely flag Black defendants as future criminals at nearly twice the rate of white defendants -- while falsely labelling white defendants as low-risk when they went on to reoffend. The vendor disputed the methodology. The audit stood.

The COMPAS case is instructive because the developers could reasonably claim the model was not "using race" as a feature. It didn't have to. Proxies -- ZIP code, prior arrest history, socioeconomic markers -- did the work.

### Mortgage Interest Rate Discrimination

Berkeley research showed both face-to-face and algorithmic lenders charge higher mortgage rates to Black and Latino borrowers than to white borrowers with comparable credit scores. Finance professor Adair Morse called it *"algorithmic strategic planning"* -- the algorithm exploits the fact that minority borrowers in "financial deserts" have fewer alternatives and are more likely to accept the first offer.

The algorithm never sees race. It sees geography, shopping behaviour, prior offer acceptance -- all correlated with race in a segregated country.

### Tim Hortons and Consent

Journalist James McLeod filed a PIPEDA request to see what the Tim Hortons app had recorded about him. The answer: his geographical location was tracked **2,700 times in under five months** -- 18 times per day on average. The app noted whether he was home. It flagged when he entered a competitor's store. It knew when he went to Starbucks.

Tim Hortons had a privacy policy. McLeod had "consented" to it. Neither of those facts made the tracking ethical.

### The Equifax Breach (2017)

A single unpatched vulnerability. 143 million Americans' social security numbers, dates of birth, driver's licences, and in some cases credit-card numbers taken. Once that data is on the dark web, it cannot be recalled. Nothing about this was AI, strictly. But it is a preview of what happens when data-hungry AI training pipelines are compromised.

### Google Duplex (2018)

At Google I/O, Duplex called a hair salon and booked an appointment while sounding indistinguishable from a human. The demo drew applause -- and immediate ethical concern. Was it ethical to make a real person think they were talking to a human? Should the law mandate disclosure? Could Duplex be abused for scams?

Google eventually added an audible disclosure that the caller was an AI. That patch was reactive. The principle -- **that people deserve to know when they are talking to a machine** -- was not.

---

## Consent: What "I Agree" Actually Requires

The reading laid out four components of informed consent that most terms-of-service clicks violate:

| Component | What It Demands |
|-----------|----------------|
| **Information** | You must be given all relevant facts about what you are consenting to |
| **Understanding** | You must actually comprehend those facts (not just have them shown to you in 34 pages of legalese) |
| **Volunteering** | You must genuinely choose -- no coercion, no dark patterns, no "agree or you can't use the app you already paid for" |
| **Decision-making capacity** | You must be able to weigh the risks and benefits and reason about them |

Ask that standard against the last privacy policy you clicked through. Most fail on Understanding. Many fail on Volunteering. Almost none disclose what the model behind the scenes will actually do with the data.

:::note[Good to Know]
Keep the **four components of informed consent** handy -- Information, Understanding, Volunteering, Decision-making capacity -- in case the exam asks you to draft a consent protocol for an AI tool. Most terms-of-service clicks fail on Understanding and Volunteering.
:::

---

## The Explainability Problem

Every neural network we have studied has a black-box property. You know the input. You know the output. You do not know, layer by layer, why *this* input produced *that* output.

Cynthia Rudin, a computer science professor at Duke, argues that in high-stakes settings -- criminal justice, healthcare, credit -- we should not settle for **explainable AI (XAI)**, which offers post-hoc rationalisations of a black box. We should insist on **interpretable models** from the start, whose logic is human-readable by construction (decision trees, CART, sparse linear models).

:::tip[Important]
Know the distinction cold: **explainable AI (XAI)** gives a *post-hoc* rationalisation of a black box; an **interpretable model** is transparent *by construction* (decision trees, CART, sparse regression). Cynthia Rudin's argument -- prefer interpretable models for high-stakes decisions -- is a likely short-answer question.
:::

Rudin's argument, applied to the Triage Case from Session 9: it is not enough that our LLM triaged a patient. If the score determines who gets an ICU bed, we need a model whose reasoning we can actually read -- or a hybrid design in which a transparent scoring rule wraps the black-box classifier.

Article 22 of the GDPR gives EU citizens a legal **right to explanation** of automated decisions. Whether that right can be delivered by current LLM stacks is an open engineering question.

---

## Automation and the Future of Work

The reading offered concrete numbers. In the US:

- ~5 million manufacturing jobs lost between 2000 and 2016; some to trade, some to automation.
- 3.5 million truck drivers in 2016 -- one of the country's largest occupations. Self-driving trucks are being road-tested by Tesla and others.
- For every 100 jobs lost in transportation and warehousing, an estimated 276 additional jobs are indirectly affected in the local economy.
- Job losses have been associated in some regions with increases in opioid use.

White-collar work is next. Jobs with analytical and technical roles face the highest exposure. Jobs with strong interpersonal components -- education, healthcare, care work -- face less.

The class raised the counter-argument: **AI creates jobs too.** Every earlier general-purpose technology (electricity, combustion, computing) destroyed some jobs and created others. Universal Basic Income has been proposed. Retraining programmes have been tried, with mixed evidence of success.

The professor did not offer a policy answer. He offered a management framing:

> **Professor Mojumder:** "Jobs may change, and new jobs will be required to fill roles that we do not yet know even exist. We need to plan for when some jobs do become obsolete and try to mitigate the negative aspects of job loss."

The takeaway for business leaders is not "should we automate?" -- that decision is already being made by competitive pressure. The takeaway is: **when you automate, what do you owe the people you displace?**

---

## The Regulatory Landscape

Regulation of AI is now real, uneven, and moving. The most important pieces the class discussed:

| Regulation / Body | Scope | Key Idea |
|-------------------|-------|----------|
| **GDPR (EU)** | Personal data protection | Rights of data subjects; right to erasure (Article 17); right to explanation (Article 22) |
| **PIPEDA (Canada)** | Personal data protection | Similar to GDPR; lets citizens see what data companies hold on them |
| **IEEE Global Initiative** | Professional / voluntary | Ethical standards for autonomous and intelligent systems; transparency, data governance, algorithmic bias limits |
| **EU AI Act** | Risk-tiered AI regulation | Bans some uses (social scoring); heavily regulates high-risk uses (hiring, credit, biometrics) |
| **India DPDP Act (2023)** | Personal data | Consent-based data processing; data fiduciary obligations |
| **KYA (Mastercard / Visa)** | Financial AI agents | "Know Your Agent" -- authenticate the operator behind autonomous agents |

The regulatory pattern is that jurisdictions **converge on principles** (transparency, consent, non-discrimination, right to explanation) but **diverge on implementation and enforcement**. For an Indian executive selling into Europe, GDPR compliance is the binding constraint; for the same executive selling into California, CCPA is; and for both, sooner or later, the EU AI Act will be.

:::tip[Important]
Match the regulation to the use case: **GDPR Article 22** = right to human review of automated decisions (EU); **EU AI Act** = risk-tiered rules (bans social scoring, heavily regulates hiring/credit/biometrics); **India DPDP Act (2023)** = consent-based data protection. "Which regulation applies to which use case?" is a standard exam angle.
:::

---

## Human-in-the-Loop: The Design Principle That Saves You

Session 9 ended with the question of whether an agentic AI could be built with **no human in the loop**. The technical answer is yes. The ethical answer is: don't.

Human-in-the-loop is a control principle with a very concrete payoff. It is what stops an autonomous procurement agent from placing a Rs 50 lakh order because a supplier's website returned malformed JSON. It is what stops an autonomous hiring agent from rejecting every candidate with a career gap because it learned to correlate gaps with lower retention. It is what stops the triage AI from deprioritising an 83-year-old whose actual clinical outcome, on this Tuesday afternoon, is very much saveable.

Human-in-the-loop is not a lack of ambition. It is a design pattern that treats the AI as **a decision aid, not a decision maker**, in any setting where the cost of being wrong exceeds the cost of a human review.

:::tip[Important]
**Human-in-the-loop** is the professor's fallback answer to almost every ethics question: treat the AI as a decision aid, not a decision maker, wherever the cost of being wrong exceeds the cost of a human review. When in doubt on the exam, invoke it.
:::

> **Professor Mojumder:** "It is possible to build AI agents which are totally free range. But that's not a suggested design -- because then you don't have any control over those agents."

---

## The Business Leader's Checklist

Pulling the reading and the class discussion together, here is what an MBA graduate should actually do when their organisation deploys an AI system:

1. **Ask about the training data.** Whose data? Consented how? Representative of whom?
2. **Ask for the accuracy breakdown by subgroup.** Not just overall accuracy. Race, gender, age, geography.
3. **Insist on a red-team.** Someone whose job is to break the model, including trying jailbreaks and adversarial inputs.
4. **Insist on an interpretable layer.** Even if the core model is a black box, the *decision rule* on top of it should be human-readable.
5. **Define the human-in-the-loop threshold.** At what confidence level does a human take over? At what dollar value? At what risk category?
6. **Log every override.** When a human disagrees with the AI, that disagreement is a training signal. Capture it.
7. **Audit periodically.** Model drift is real. What was fair last quarter may not be fair this quarter.
8. **Publish an appeal path.** If the AI denies a person a loan, a job, or a service, that person deserves a route to a human.
9. **Track your data footprint.** GDPR, PIPEDA, DPDP -- these are not just legal. They are a discipline that keeps your data hygiene honest.
10. **Own the mistakes.** When the model fails, "the algorithm did it" is not a defence.

---

## Course Recap: The Ten-Session Arc

We started with a chihuahua and a cupcake. We end with a wrongful arrest and a hiring algorithm scrapped in shame. In between, we built up the machinery -- and the vocabulary to reason about it.

| Sessions | Topic | Core Idea |
|----------|-------|-----------|
| **1-2** | Introduction to AI, dark data, factories not wizards | AI is analytics that can use unstructured data; the black box has an input, an output, and a hidden middle; AI scales as a factory, not a wizard |
| **3-4** | ANNs, gradient descent, backpropagation | Neurons amplify or dampen signals; training is iterative error correction down the error mountain |
| **5** | Convolutional Neural Networks | How to feed a computer an image; filters, pooling, flattening |
| **6** | Word embeddings and RNNs | Text becomes vectors; sequences flow through recurrent structures that preserve word order |
| **7** | Transformers and self-attention | Self-attention replaced recurrence; encoders, decoders, contextual embeddings; the backbone of every modern LLM |
| **8** | Economics of LLMs, RAG, MoE, SLMs, multimodal, agents | Every architectural pattern is a specific answer to a cost or capability constraint of the base transformer |
| **9** | Prompt engineering and the Triage Case | Zero-shot, few-shot, chain-of-thought; how prompts shape output; where AI, doctor, and user bias all enter the pipeline |
| **10** | AI Ethics | Bias, consent, explainability, regulation, human-in-the-loop |

> **Professor Mojumder:** "Once you figure out how a cake is made -- whether the cake is white or red or black -- doesn't really matter. Once you know what an AI is made of, GPT or Claude or Gemini will not be a big name in your mind. These are just names."

The purpose of a fundamentals course is not to make you an ML engineer. It is to make you a manager who can **read a proposal, question a vendor, audit a deployment, and refuse a bad idea** without hiding behind the excuse that "the technology is complicated."

---

## Key Terms to Remember

| Term | One-Line Definition |
|------|--------------------|
| **Data Bias** | Training data does not represent the population the model will act upon |
| **Algorithmic Bias** | Model design amplifies bias present in the data |
| **Automation Bias** | Human tendency to over-trust automated outputs |
| **Confirmation Bias** | Reviewers accept AI outputs that fit their priors, question ones that don't |
| **QALY** | Quality-Adjusted Life Year -- utilitarian metric that implicitly drives many medical triage decisions |
| **Explainable AI (XAI)** | Post-hoc rationalisation of a black-box model's output |
| **Interpretable Model** | Model whose logic is human-readable by design (e.g., CART, sparse regression) |
| **Article 22 (GDPR)** | Right of EU citizens to a human explanation of automated decisions |
| **PIPEDA** | Canada's personal-data-protection law; grants right to see what a company holds on you |
| **DPDP Act** | India's Digital Personal Data Protection Act, 2023 |
| **EU AI Act** | Risk-tiered regulation of AI systems in the European Union |
| **Human-in-the-loop** | Design pattern where AI supports but does not replace human decision-making |
| **Consent (4 components)** | Information, Understanding, Volunteering, Decision-making capacity |
| **Know Your Agent (KYA)** | Emerging framework for authenticating autonomous AI agents |
| **Fairness** | The property that a model's decisions do not systematically disadvantage protected groups |
| **Accountability** | The organisational obligation to explain, defend, and if necessary reverse an AI decision |

---

## The Real-World Takeaway

Kabir Malhotra was two years into a Head of Talent Acquisition role at a large Indian IT services firm when the CEO forwarded him a demo of an AI resume-screening tool. The pitch was good: 60% reduction in time-to-shortlist, "de-biased" model, 92% accuracy on historical hiring outcomes. The vendor wanted a two-year commitment for eighteen crore rupees. The CEO wanted a decision by Friday.

Kabir did not have an FAI background. But his daughter had just finished her MBA and she had, over Sunday lunch a week earlier, argued that any hiring model trained on a company's own historical hires would learn the company's historical hiring bias. He asked the vendor for three things.

**One:** the breakdown of accuracy by gender, by tier of engineering college, and by first language. The vendor sent back a single-page PDF that reported only overall accuracy. Kabir pushed. The subgroup numbers came a week later. Women were being shortlisted at a rate 14 percentage points lower than men, controlling for years of experience. Graduates of Tier-3 engineering colleges were shortlisted at a rate 22 percentage points lower than graduates of Tier-1 colleges, controlling for the same job-relevant experience.

**Two:** the training data. It was ten years of the firm's own hiring decisions -- exactly what he had suspected. The firm's leadership had been 87% male in that window. Its campus recruiting had been concentrated on eight colleges.

**Three:** an override log. When a human recruiter disagreed with the AI's ranking, could that disagreement be captured, categorised, and fed back into the model? The vendor said this would be a "custom feature" priced separately.

Kabir wrote a two-page memo to the CEO. He did not say "don't buy this tool." He said: *the tool will replicate our historical bias at scale. We can still buy it -- but only if we agree to three conditions. One, we retrain it on a rebalanced dataset before we deploy. Two, we surface every shortlist decision with an interpretable reason code, not a probability. Three, we appoint a human reviewer -- a senior recruiter, not an intern -- on every single AI-rejected candidate for the first six months, and log the overrides. If the vendor won't do any of these, we walk.*

The vendor did not walk. They agreed to conditions one and three. Condition two -- interpretable reason codes -- became a phased delivery over the following quarters. Deployment was pushed by four months. Shortlisted-candidate diversity in the first year went up, not down. Time-to-hire dropped by 41% -- less than the promised 60%, but real, and honest.

At the year-end review, the CEO asked Kabir what he thought had made the difference. Kabir said: *"We didn't buy the AI. We bought the AI with a leash, an audit trail, and an off-switch. And we assumed, from day one, that it was wrong until it proved otherwise."*

**The point of AI ethics is not to slow AI down. It is to make sure that when AI speeds things up, it is speeding up the right things -- and that the humans who bear the consequences still have somewhere to go when it doesn't.**

---

*This concludes the Fundamentals of AI course. From dark data to deep learning, from convolution filters to chain-of-thought prompts, and from the black box to the ethical audit -- the throughline was always the same: the technology is only as good as the humans who scope it, deploy it, and stand behind its outputs. Now go build something worth standing behind.*
