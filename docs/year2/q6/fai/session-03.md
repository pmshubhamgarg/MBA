---
sidebar_position: 4
title: "Session 3: Opening the Black Box — Neurons, Weights, and the Anatomy of a Neural Network"
---

# Session 3: Opening the Black Box — Neurons, Weights, and the Anatomy of a Neural Network

*The first drop of the roller coaster: why an "artificial neural network" is really just a very well-organized chain of multiplications and additions -- and why finding the right numbers is a billion-dollar problem*

---

:::info[Priority Map — What to Focus On]
**Must know (exam-critical):** The single-node equation ŷ = w·x + b (weight = multiply, bias = add); feature vs label vs predicted output (ŷ); the three layers (input = #features, hidden = flexible, output = problem-dependent); parameter counting (a 3-2-1 network = 11 parameters).

**Important (supporting):** Why finding the right weights is hard (the Excel experiment); deep learning = many hidden layers; overfitting; backpropagation (name only, detailed in Session 4).

**Context (background/color):** The whirlwind recap of student use cases; the driver / mechanic / passenger analogy; the Kabir "fifty-parameter model" story.
:::

## The Roller Coaster Warning

Professor Mojumder opened this session with a warning wrapped in an analogy. Sessions 1 and 2, he said, were the slow chain-lift at the start of a roller coaster -- being carried gently upward. From Session 3 onward, the ride drops. The concepts get more technical, more mathematical, more unfamiliar for the non-technical students in the room.

> **Professor Mojumder:** "I'm not saying for all of you it might feel like there are going to be a dip, so just don't get affected by it. It's just a natural natural process. And we will be understanding these concepts in more details in the upcoming sessions also."

His advice for the non-technical crowd: pay a little more attention, listen to the recording again if needed, and ask questions freely. This session opens the AI black box -- and once opened, everything else in the course gets easier.

---

## A Whirlwind Recap: Where AI Is Already Working

Before diving in, the class shared real AI applications they had personally encountered. The examples came from every corner of Indian industry:

| Contributor | Use Case |
|-------------|----------|
| Kalyan | AWS Image Recognition used to check in patients at hospitals by scanning their faces -- no need to type name, address, or credentials |
| N. | Facial, iris, fingerprint, and minutiae-point recognition (originally built in MATLAB, now web-based) |
| A student | Plant and garden care app -- takes a picture of a plant leaf and diagnoses its health |
| Vikas | At Secure Meter, defect detection on seven-segment and graphical LCD displays of energy meters -- catching missing pixels and brightness variation |
| Anoj | PM Fasal Bima Yojana: satellite imagery and historical spectral analysis of a farmer's plot to verify drought damage and settle insurance claims digitally |
| Purba | Medical imaging analysis on X-rays and MRIs |
| Priyanshu | A Bengaluru resident using a dashcam to record potholes on his commute, then cross-referencing with government road-construction records to file complaints |
| Kaushik | A startup he built for defect detection on a conveyor belt handling microcontroller components -- trained live with OpenCV |

The point of the exercise was not the examples themselves but a single realisation: the AI "black box" already lives inside airports (DigiYatra), factories, farms, hospitals, and even one person's dashcam. Now the class was about to look inside that box.

---

## What Is Inside a Neuron? The Amplifier/Dampener Story

The professor asked the class to imagine a single neuron that takes in a number -- say 1.5. What comes out the other side?

Some students said 1.5. Others said something slightly different. The professor sided with the second group, and gave the reason cleanly:

> **Professor Mojumder:** "Why does this neuron exist? It exists because it wants to do something to whatever is inputted. It amplifies or dampens a signal. Obviously a neuron will not drastically amplify, drastically dampen a number. It will make it slight change."

So 1.5 might come out as 1.51 or 1.49. Chain many neurons together, and slight amplifications and dampenings compound into a decision.

### From Neuron to Math

If a neuron amplifies or dampens, what are the mathematical operations available? The class quickly landed on multiplication and addition. To turn 1.5 into 1.6, add 0.1. To turn 1.5 into 3.1, multiply by 2 and add 0.1.

The professor wrote the recipe on the board:

**1.5 x 2 + 0.1 = 3.1**

Two ingredients transform the input:
- A **multiplicative term** (the "weight")
- An **additive term** (the "bias")

That is it. That is what one node does.

---

## The Three Words: Artificial, Neural, Network

The professor asked the class to sit with the phrase itself:

- **Neural** -- borrowed from the brain, which is made of billions of neurons connected in networks
- **Artificial** -- these are not real biological neurons; they are mathematical stand-ins that only understand numbers
- **Network** -- one neuron alone does nothing useful; the power comes from chaining them together, where one node's output is the next node's input

Inside the AI black box is not one artificial neuron. It is a collection of nodes, each doing its own tiny multiplication and addition, connected in the form of a network.

---

## Feature and Label: The Two Faces of Data

Data enters the neural network in two roles.

| Component | What It Is | Role |
|-----------|-----------|------|
| **Feature** | The characteristics of a data point (CAT score, age, years of experience for a person; pixels for an image; words for text) | The actual **input** to the neural network |
| **Label** | The supervised answer -- what the correct output should be (salary in rupees; "cat" or "dog"; "defective" or "not") | What the model's prediction is **compared against** |

The professor used the salary prediction dataset he had introduced earlier. For Person 1, the features are CAT score 99, age 24, years of work experience 4. The label is a salary of Rs 9 lakh per annum. For Person 2, features are 95, 21, 2 -- and the label is Rs 4 lakh.

### The Diagram That Cleared the Confusion

Kaushik raised an important question: "Sir, isn't the label also an input to the black box?"

The professor sketched it out. Yes, both feature and label enter the black box -- but they enter through **different doors**. Features flow into the input layer of the neural network. Labels flow to a separate comparison station, where the network's predicted output is checked against the truth.

The network's output is not the label. It is a **predicted label**, called **y-hat**.

> **Professor Mojumder:** "Ideally the output of the neural network should be exactly the label, but that is not happening because the output is generated from the inputs. The model generates a separate output called predicted output. There may be a delta difference between label and output."

This is the entire game of AI training: shrinking the delta between y (label) and y-hat (prediction).

:::tip[Important]
Keep three terms straight: **feature (x)** enters the network, **label (y)** is the true answer it is compared against, and **y-hat (ŷ)** is the network's prediction. Features and labels enter through *different doors* — features into the input layer, labels into a separate comparison step.
:::

---

## The Single-Node Equation (The Only Math in the Course)

The professor promised: this is the only equation you need.

For a single node with one input:

**y-hat = w · x + b**

Where:
- **x** = the input feature
- **w** = the weight (multiplication term)
- **b** = the bias (addition term)
- **y-hat** = the predicted output

For a single node with two inputs:

**y-hat = w1 · x1 + w2 · x2 + b**

The class was asked to type this into the chat. Almost everyone got it right, including the students who had flagged themselves as non-technical. This equation is the atom of AI. Everything else is just millions of these stitched together.

:::danger[Must Know — Exam Critical]
The single-node equation **ŷ = w·x + b** (and ŷ = w₁·x₁ + w₂·x₂ + b for two inputs) is the one piece of math the professor promised you must know. The weight (w) multiplies, the bias (b) adds — every neural network is millions of these stitched together.
:::

---

## Layers: Input, Hidden, Output

A real neural network has structure. Nodes are organised into **layers**:

| Layer | Role | Number of Nodes |
|-------|------|----------------|
| **Input Layer** | Just receives the features -- no transformation happens here | Equal to the number of features (3 in the salary example: CAT score, age, YoE) |
| **Hidden Layer** | Where the actual transformation happens -- multiplication, addition, activation | Flexible -- designer's choice |
| **Output Layer** | Produces the prediction | Depends on the problem (1 for salary; 4 for a 4-class classifier) |

### How the Same Inputs Produce Different Hidden Nodes

If both hidden nodes see x1, x2, and x3, why are they not identical?

The trick is that **each hidden node has its own weights**. So hidden node H1 uses W11, W21, W31 (and bias B1), while H2 uses W12, W22, W32 (and B2). Different weights mean different transformations. Same raw material, different lenses.

For a 3-2-1 network (3 input nodes, 2 hidden nodes, 1 output node):

| Between Layers | Weights | Biases | Parameters |
|----------------|---------|--------|-----------|
| Input to Hidden | 3 x 2 = 6 | 2 | 8 |
| Hidden to Output | 2 x 1 = 2 | 1 | 3 |
| **Total** | **8** | **3** | **11** |

The class walked through this with the Excel sheet the professor had uploaded to Moodle.

:::tip[Important]
Be able to count parameters. Input nodes = number of features; a 3-2-1 network has (3×2 + 2) + (2×1 + 1) = **11 parameters**. Contrast that with GPT-3's 175 billion — the gap between a homework exercise and a foundation model.
:::

### The Scale Comparison That Stopped the Room

The professor asked: how many parameters does ChatGPT have?

Priyanshu guessed billions. The class quickly landed on the answer: **GPT-3 has 175 billion parameters**. Gemini and other frontier models cross a trillion.

> **Professor Mojumder:** "You created a neural network here which has 11 parameters, and GPT and Gemini have brilliant... and do you know there are models which even have trillion parameters right now?"

11 parameters versus 175 billion. That is the difference between a homework exercise and a foundation model.

---

## The Excel Sheet Experiment: Try to Guess the Weights

The professor asked everyone to open the salary prediction Excel sheet on Moodle. For Person 1 (real salary: Rs 9 lakh), the initial random weights produced a y-hat of **Rs 10** -- literally ten rupees. The task: change the 11 parameters manually and see if you can get the prediction closer to 9 lakh.

Students tried. The results were entertaining:
- One student reached Rs 91,000 (not even 1 lakh, let alone 9)
- Another reached around Rs 12 lakh
- Harom got the gap down to Rs 4,190
- Senthil managed an **exact match** on Person 1

Then the professor asked the killer question: switch to Sheet 2, which shows Person 2 (real salary Rs 4 lakh). Does the same set of weights still work?

For most students, the Person 2 gap **exploded** -- Harom's model that was off by Rs 4,190 for Person 1 was now off by Rs 4,10,000 for Person 2.

> **Professor Mojumder:** "See, so the entire task of the AI is to make sure across all possible examples there should not be any gap. Even if you have a choice of weights and biases, this is able to reduce the error for person one -- you're not able to reduce the error for person two. That is why it's very difficult, this whole combination of the right weight and bias."

This is why OpenAI, Google, and Anthropic spend **billions of dollars** on training runs. They are not building fancy architectures for the sake of it. They are searching, across billions of parameters and trillions of data points, for the magical combination of weights and biases that makes predictions close to labels across every conceivable input.

---

## Forward and Backward: A First Glimpse of Learning

Manish asked whether the network is unidirectional or whether there is feedback. The professor gave a preview of what Session 4 would cover in depth.

**Forward pass:** Feature enters, flows through the hidden layers, produces y-hat.

**Backward pass:** Compare y-hat to y. Compute the error. Use the error to **update the weights and biases**, starting from the output layer and moving backward through the hidden layers. This is called **backpropagation** -- the professor asked the class only to remember the name for now.

Every epoch (one full pass through the training data), the network gets slightly better at predicting the labels.

---

## More Layers = Better? A Nuanced Answer

Kaushik asked: does adding more layers and more nodes always improve accuracy?

The professor's answer had two parts:
- Yes, generally deeper models (more hidden layers) capture more patterns -- that is why the field is called "**deep learning**." The word "deep" refers to the depth of hidden layers, nothing more mystical.
- But billions of layers is overkill. Too much depth causes **overfitting** -- the model memorises the training data and fails on new data.

:::tip[Important]
"**Deep learning**" simply means a network with many hidden layers — "deep" refers to layer count, nothing more mystical. More depth generally captures more patterns, but too much causes **overfitting**. There is no formula for the right number of layers; it is trial and error.
:::

There is no formula for the right number of layers or nodes. It is trial-and-error, informed by decades of collective practice in the AI community.

> **Professor Mojumder:** "One of the best things about AI is everything is flexible. Everything is trial and error based. So you decide on number of layers, you decide on number of nodes in each layer... it's like when you drive a car -- you suddenly take certain roads where the traffic is less. You keep driving different roads and you have that intuition. Same with AI."

---

## The Preview: Activation Functions

The professor showed a picture of a more realistic neural network -- one where each node did more than just multiplication and addition. Each node also runs its output through an **activation function** that adds nonlinearity.

Some examples he hinted at (to be covered in Session 4):
- If input is negative, output zero; if positive, keep as-is
- Squash any real number into the range 0 to 1

He deliberately did not go deep. Session 4 would open this door.

---

## The Managerial Discussion: Why This Matters for Business Leaders

The professor asked: where does knowing all this help you as a decision-maker? The discussion that followed was one of the richest of the course so far.

**Anoj:** "Define the rules first. If the logic can be handled by a simple SQL query or Python script, don't use AI. Don't use a sword where a needle can work."

**Anish:** "AI cannot drive the business by itself. The context, the experience, the judgement of the human is the most important thing. AI should be given the repetitive work. Decision-making cannot be outsourced. And the prompt itself biases the answer -- if you tell it to find positives, it finds positives."

**Yogita:** "It is about managing prediction with context. If you are not clear about the overall spectrum of information you need to feed in, you will not devise the correct solution even with AI."

**Ashok:** "There is a two-tier decision. First, which frontier model to use -- and there is a proprietary vs open-source trade-off. Blended usage across GPT ($3-5 per million tokens), Claude ($10 per million tokens), and open-weight models. Second, how to reskill employees and optimise the revenue-cost trajectory."

**Kaushik:** "The flexibility of open-source lets us fine-tune a model like Ollama for our own use case rather than paying Cloud/OpenAI subscription fees indefinitely."

**Nayan:** "Data sensitivity and geography matter. Some clients want data to stay within a country. Sovereign AI vs non-sovereign AI is a real design constraint."

Senthil asked whether quantum computing would eventually enable trillion-node networks trivially. The professor's answer: quantum is a different beast -- parallel by nature -- and today's neural networks are largely sequential in structure, so the paradigms don't transfer cleanly.

---

## The Driver, the Mechanic, and the Passenger

The professor closed with an analogy that framed the whole course:

> **Professor Mojumder:** "Think about three people: someone who knows how to drive a car, someone who always uses a driver, and someone who is an automobile engineer who builds engines. We have to be somewhere in between -- someone who knows how to drive and maybe how to open the hood and change the windshield wiper fluid, rather than someone who doesn't know how to drive and just rides with a driver."

MBA students are being trained to be **drivers**, not engineers, and certainly not passive passengers. Know enough to open the hood. Know enough to say "this problem needs a small model, not a 175-billion-parameter one." Know enough not to be sold a sword when a needle would do.

:::note[Good to Know]
The driver / mechanic / passenger analogy frames the whole course: an MBA should be the *driver* who can open the hood — not the engineer who builds the engine, nor the passenger who just rides along. Memorable, but the mechanics above are what get tested.
:::

---

## Recipe Chain

**Session 3 established the anatomy:**
A neural network is a collection of artificial neurons (nodes) organised into layers -- input, hidden, output. Each node does the same tiny math: multiply input by weight, add bias, pass along. The magic is in choosing the **right** weights and biases so that predictions (y-hat) match reality (y). Doing this by hand for even two people is nearly impossible; doing it for 300,000 people with 175 billion parameters is a billion-dollar training run.

**Next session:** How do the weights and biases actually get learned? What is a cost function? What is gradient descent, and why does the field describe it as "climbing down an error mountain"? Session 4 opens up the training process -- and introduces the activation functions we only glimpsed today.

---

## Key Terms to Remember

| Term | One-Line Definition |
|------|---------------------|
| **Node (Neuron)** | The atomic unit of a neural network -- takes inputs, multiplies by weights, adds a bias, produces an output |
| **Weight (w)** | The multiplicative term that amplifies or dampens an input signal |
| **Bias (b)** | The additive term that shifts a node's output up or down |
| **Feature (x)** | A characteristic of the input data -- the actual thing the neural network processes |
| **Label (y)** | The correct answer, human-supplied, used to check the model's prediction |
| **Predicted Output (y-hat)** | The neural network's guess at the label -- rarely identical to y |
| **Input Layer** | The entry point of the network -- number of nodes equals number of features |
| **Hidden Layer** | Where the transformation math happens -- flexible in size and depth |
| **Output Layer** | Produces the final prediction -- shape depends on the problem |
| **Parameter** | A weight or a bias -- the number the training process is trying to find |
| **ANN (Artificial Neural Network)** | The simplest neural network type -- fully connected layers, used for tabular numeric data |
| **Deep Learning** | Neural networks with many hidden layers -- the word "deep" refers to layer count |
| **Backpropagation** | The feedback mechanism that updates weights and biases based on prediction error (covered in Session 4) |

---

## The Real-World Takeaway

Kabir joined a mid-sized logistics company as the AI transformation lead six weeks after finishing his EMBA. His mandate from the CEO was one sentence: "Figure out where AI can help us, and don't let the vendors bankrupt us."

His first meeting was with a large systems integrator that had come highly recommended. The proposal was a hundred and forty slides. It suggested a bespoke 175-billion-parameter foundation model, fine-tuned on the company's dispatch data, hosted on a fresh Kubernetes cluster with a dedicated team of five engineers. The three-year total came to fourteen crore.

Kabir asked one question. "What is the actual problem we are solving?"

The sales lead pointed to slide 47. Predicting which shipments would miss their SLA windows. Historically, dispatch managers eyeballed a spreadsheet each morning and flagged the risky ones by feel. About 22% of flagged shipments actually failed. About 8% of unflagged shipments failed anyway.

Kabir went back to his hotel that night and sketched something on the back of his boarding pass. Three features per shipment: origin-destination distance, carrier's historical on-time percentage, and the time-of-day the shipment left the warehouse. Label: did it miss the SLA? Yes or no. He counted rows in the company's data warehouse. Two years of history, about 400,000 shipments, cleanly labelled.

The next Monday he ran the numbers with the internal data team. A simple three-input, one-hidden-layer network -- maybe fifty parameters -- trained on a laptop in nineteen minutes. It correctly flagged 68% of the shipments that would eventually fail, at a false-alarm rate of 11%. Six times better than the dispatch manager's gut.

He walked into the CEO's office with a printout and a napkin sketch. "We don't need the fourteen crore proposal. We need a fifty-parameter model, one intern to keep it retrained monthly, and about eleven lakh in cloud credits for the first year."

The CEO stared at the napkin for a long time. "How did you know it would be this simple?"

Kabir remembered the professor sketching a 3-2-1 network on a virtual whiteboard, and the moment the class realised that eleven parameters was all you needed to predict a person's salary reasonably well. He remembered Senthil hitting the exact salary of Person 1 by hand -- and immediately being off by four lakh for Person 2. The whole point of that exercise was to feel, in your bones, how hard finding the right weights was.

But he also remembered the driver analogy. You do not need to be an automobile engineer to open the hood. You need to be curious enough to open it -- and grounded enough to know when a scooter would do the job of a truck.

"I opened the hood," Kabir said. "Then I asked what the trip was."

**The best AI decisions do not come from picking the biggest model. They come from asking, honestly, how small a model would actually do the job -- and having the confidence to walk out of the fourteen-crore meeting.**
