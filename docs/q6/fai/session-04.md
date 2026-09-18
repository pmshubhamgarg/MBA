---
sidebar_position: 5
title: "Session 4: Climbing Down the Error Mountain — Activation Functions, Cost Functions, and Gradient Descent"
---

# Session 4: Climbing Down the Error Mountain — Activation Functions, Cost Functions, and Gradient Descent

*Why a neural network is not really "learning" -- it is descending a mountain of errors, one small step at a time, trying not to fall off a cliff or get stuck in the wrong valley*

---

## The Warning: This Is the Hardest Session

Professor Mojumder opened by lowering expectations honestly.

> **Professor Mojumder:** "This might be the toughest session of the entire course. So if you are able to understand these concepts, you are on the other side of it. Most of the next sessions will be much more easier compared to today's session. Please ask questions."

Session 3 ended with a promise -- that Session 4 would explain how weights and biases actually get learned. This session pays that debt. But to get there, we first need one more concept: **activation functions**, which shape what the network's outputs look like.

---

## A Probability Warm-Up

The professor started with a deceptively simple question: what do we call a number that lies between 0 and 1?

A student answered "decimal." The professor gently redirected -- 1.8 is also a decimal. The right answer is **probability**. A probability is the chance of something happening. A probability of 0.77 means a 77% chance. A probability of 1 means certainty; 0 means impossibility.

Why does this matter? Because in many AI problems, the neural network's output is not a real number like a salary. It is a **probability**, or a **vector of probabilities**. And a raw neuron -- doing only multiplication and addition -- can only produce a real number.

We need a way to convert. That is what activation functions are for.

---

## Three Kinds of Output Problems

The professor walked through three fundamentally different tasks a neural network might be asked to do:

| Problem Type | Example | Output Layer Nodes | What Each Node Produces |
|--------------|---------|--------------------|-----------------------|
| **Regression** | Predict salary | 1 node | A real number (e.g. Rs 9,00,000) |
| **Binary Classification** | Classify sentence as positive or negative | 1 node | A probability between 0 and 1; threshold of 0.5 decides the class |
| **Multiclass Classification** | Classify image as dog, cat, horse, or rabbit | 1 node per class (4 total) | A **vector of probabilities** that must sum to 1 |

### Anish's Sharp Question

Anish pushed on the multiclass case. What if the AI is trained on four animals -- dog, cat, horse, rabbit -- and someone feeds it an image of a human? The four output probabilities might come out as 0.1, 0.3, 0.4, 0.2. They still sum to 1. So the model will confidently classify a human as a horse (0.4 being the highest).

> **Professor Mojumder:** "Exactly right. If you have four animal images and that is the restricted data you have, then you can have four nodes. In case you have others -- a fifth animal, or any other case you care about -- you need to have a fifth node in the model which will take care of those cases which don't match those four animals."

This is a design decision made **before** training. Your output layer must anticipate the categories the world will throw at you, or explicitly include a "none of the above" catch-all.

---

## Activation Functions: The Fourth Operation Inside a Node

Recall the Session 3 formula for a single neuron: multiply input by weight, add bias, done. In reality, each node does **one more thing** after that -- it passes the result through an **activation function**.

The intermediate value (before activation) is now called **z**. The activation function transforms z into y-hat (or into the input for the next layer).

Why bother? Because pure multiplication and addition are **linear**. Stack a hundred linear operations, and you still have a linear operation -- no matter how deep the network. Adding a nonlinear activation function is what lets the network learn curves, boundaries, and patterns.

### The Four Activation Functions the Class Met

| Function | Shape / Rule | When to Use |
|----------|--------------|-------------|
| **Linear** | z stays z (a 45-degree line) | Output layer for regression problems -- when y-hat should be a real number (salary prediction) |
| **Sigmoid** | 1 / (1 + e^(-z)) -- squashes any real number to (0, 1) | Output layer for binary classification -- converts real number to probability |
| **ReLU (Rectified Linear Unit)** | If z is negative, output 0. If z is positive, keep z as-is. | Hidden layers -- keeps calculations simple and speeds up learning by killing negatives |
| **Softmax** | Takes a vector of real numbers and produces a vector of probabilities that sum to 1 | Output layer for multiclass classification -- "sigmoid on steroids" |

### Why ReLU in Hidden Layers?

The class was asked to guess the reasoning. Prasun and Anish both landed on it: it reduces complexity. Negative numbers are cut off at zero, so downstream nodes never have to deal with negative signals. Fewer edge cases, faster learning, simpler gradients.

### Softmax by Example

The professor sketched a three-class case (cat, dog, horse). The raw output values from the last hidden layer might be 23, 17.3, and 18 -- three real numbers with no obvious interpretation. Feed them through softmax:

- Cat: 0.5
- Dog: 0.3
- Horse: 0.2

They sum to exactly 1. The highest is cat, so cat is the prediction. This is exactly how ChatGPT decides which word comes next -- softmax over a vocabulary of tens of thousands of possible tokens.

---

## Putting the Full Architecture Together

The salary-prediction network we saw in Session 3, upgraded with activation functions, now looks like this:

| Layer | Nodes | Activation | Rationale |
|-------|-------|-----------|-----------|
| **Input** | 3 (CAT score, age, YoE) | None -- just passes data through | Nodes = number of features |
| **Hidden** | 2 (or more, designer's call) | ReLU | Kills negatives, speeds learning |
| **Output** | 1 | Linear | Salary is a real number |

For binary sentiment classification, swap the output activation to **sigmoid**. For four-class animal classification, use 4 output nodes with **softmax**.

Every architectural choice -- number of layers, nodes per layer, activation function per layer -- is **flexible** and belongs to the designer.

---

## The Second Excel Sheet: Building the Error Curve by Hand

The professor now returned to the salary-prediction Excel sheet, but this time with a twist. He had locked all weights and biases except **W11**. He gave the class a series of values to try -- 0.7, 100, 500, 1000, 2000, 3000, 4500, 5000 -- and asked them to record the **average prediction error** across two people for each value.

The prediction error was defined as:

**Error = (y - y-hat)^2**

Squared, so positive and negative errors don't cancel out.

Each student plotted the errors. Almost everyone got the same shape: a **U-shaped curve**. The error was high at W11 = 0.7, dropped to a minimum somewhere around W11 = 3000, and rose again as W11 approached 5000.

> **Professor Mojumder:** "You can see the error is decreasing and then increasing. Which value of W11 do you think has the least error?"

The class converged on 3000. But the professor pushed further: when you build a real model, you don't get to see the curve. You start blind, at some random value. Which direction do you go?

---

## Gradient Descent: The Intuition

If you started at W11 = 1000, you would be to the left of the minimum. The slope of the error curve at that point is **negative** -- going right (increasing W) makes the error go down. So you increase W.

If you started at W11 = 4800, you would be to the right of the minimum. The slope is **positive** -- going left (decreasing W) makes the error go down. So you decrease W.

The mathematical name for slope is **gradient**. The algorithm that says "look at the gradient, then step in the direction that reduces error" is called **gradient descent**.

Prasun asked: "Don't we need two points to compute a slope?" The professor's answer: not mathematically. Since the error function is a known equation of the weights, you can compute the slope at a single point using **partial differentiation**. The AI does this analytically -- no need to sample two neighbouring values.

### Step by Step

Suppose you start at W11 = 250. The slope is negative. You take a step -- say, jump to W11 = 550. The error drops. The slope is still negative. You keep going: 1500, then 4500. Now the slope has flipped positive, so you step back the other way. Eventually you settle near W11 = 3000, the bottom of the U.

Every time you update, W11 gets closer to its ideal value. And you do this **for every one of the 11 parameters**, simultaneously.

---

## Loss Function vs Cost Function

The professor distinguished two related concepts carefully:

| Concept | Scope | Formula |
|---------|-------|---------|
| **Loss Function** | Error for a single training example (one person) | (y - y-hat)^2, or \|y - y-hat\|, or others |
| **Cost Function** | Average of the loss across the **entire training sample** (all people in the epoch) | Mean of individual losses |

Loss is per-row. Cost is the aggregate. Gradient descent operates on the **cost function** -- it is trying to minimise the total error across the whole training set, not just one lucky row.

---

## Epoch: One Full Pass Through the Data

The professor introduced a new vocabulary word: **epoch**.

An epoch is one complete pass of the entire training data through the network. If you have 700 training examples, running all 700 through the model once = epoch 1. After that pass, you compute the total cost, update all 11 parameters using gradient descent, and start again with epoch 2. And so on.

- Epoch 1: total error = 10,000
- Epoch 2 (with updated weights): total error = 9,000
- Epoch 3: total error = 8,200
- ... and so on, descending the error mountain

You stop when you decide you are close enough.

---

## The Computational Wall

The professor asked: with 300,000 training examples and 50 features each, is running one epoch expensive?

Arunava said yes. Everyone agreed. The professor confirmed -- gradient descent on the full dataset every epoch is **computationally brutal**, especially at frontier-model scale.

That is why practitioners rarely use "vanilla" gradient descent. Instead, they use variants:

| Optimiser | Trick |
|-----------|-------|
| **SGD (Stochastic Gradient Descent)** | Randomly sample a small batch of training examples (say 50 out of 700), compute the gradient on just those, and update. Repeat with a new random batch. Much cheaper per step. |
| **AdaGrad (Adaptive Gradient)** | Take **bigger** steps when far from the minimum, **smaller** steps when close. Adapts the step size automatically. |
| **RMSProp**, **Adam**, **AdaDelta** | Further refinements that combine adaptive step sizes with momentum-like tricks |

The professor deliberately did not go into the math of each. The point is that the field has spent 15 years engineering ever-smarter ways to descend the error mountain without blowing up the compute budget.

---

## Vikas's Question: The Ping-Pong Problem

Vikas raised the key gotcha of step size. If the step is too large, you don't smoothly slide down the valley -- you **overshoot** it, land on the opposite wall, overshoot again coming back, and bounce around the minimum forever.

The professor sketched it. Start at W = 20, slope is negative. Take a step of 5, land at 25 -- good, small step, still descending. Take a step of 35, land at 55 -- you have crossed the valley and now the slope has flipped positive. Take a big step back, cross again, and you are in a ping-pong loop.

Too small a step, on the other hand, means it takes 200 epochs to reach the minimum -- wasting compute.

This step size has a name: the **learning rate**. It is chosen by the designer -- not computed by the model.

> **Professor Mojumder:** "Large step size doesn't always mean a good solution because you may overshoot the minimum. Very small step size means you're learning very slightly. So the optimal step size is also a problem in these problems when they're optimising these errors -- choice of weights."

---

## Manish's Question: Local vs Global Minima

Manish asked what happens if the error curve has **multiple valleys**. Gradient descent, being greedy, will slide into the first valley it finds. But the deeper valley -- the true global minimum -- may lie further along.

The professor was candid:

> **Professor Mojumder:** "It's not guaranteed that you will be reaching the global minimum. So we keep trying different seeding starting points and see what happens. It might reach a local minima and not the global minima."

This is why practitioners run training with **multiple random initialisations** of the weights, and why stochastic gradient descent -- which samples different subsets each step -- naturally explores the error landscape rather than plunging into the first ditch.

---

## Stopping Criteria

Ashok raised the practical question: when do you stop training?

Several answers from the class:
- Stop when the change in error between epochs falls below a threshold
- Stop when the error itself falls below a threshold
- Stop after a fixed number of epochs (say 100 or 200)
- **Early stopping**: track a validation set, and stop when the validation error starts rising even if training error keeps falling (a sign of overfitting)

There is no single right answer. Every training run is a judgement call about accuracy vs compute cost vs overfitting risk.

---

## Training Data vs Test Data

The professor made a distinction the class would come back to repeatedly. The dataset gets split:

- **Training data** -- used to compute the cost function and update weights via gradient descent
- **Test data** -- held back and never seen during training; used only after training is done, to check whether the model generalises to unseen examples

If the model performs well on training data but terribly on test data, you have overfit -- memorised rather than learned.

Arunava asked how a deployed model handles a brand-new input. The professor's answer: if the new input resembles what the model was trained on, it will perform well. If it is way outside the training distribution -- say, a Tesla trained on US highways suddenly driving through Bangalore -- the model breaks. The prediction error becomes very high.

---

## The Trained Model as a Zip Folder

Once training finishes, what have you actually produced?

> **Professor Mojumder:** "It's a small zip folder which has all the information -- weights, biases, activation functions, entire layers, number of hidden layers, number of nodes -- everything is finalised."

That zip file **is** the AI. When you use ChatGPT, Claude, or Gemini, you are hitting a deployed zip file (metaphorically) that has already been trained.

Two flavours exist:
- **Open-weight models** (like Llama, Mistral): the weights are public, so you can fine-tune them for your own use case
- **Proprietary models** (GPT, Claude, Gemini): weights are secret; you use them as-is via API

This is why fine-tuning and transfer learning matter for enterprise AI -- you don't retrain the whole thing, you take an open-weight model and tweak the later hidden layers for your domain.

---

## Senthil's Transcendental Question

At the very end, Senthil asked something the professor called out as thought-provoking: how does AI, trained only on known past data, help doctors discover cures for previously unknown diseases?

The professor's answer, sketched on the virtual whiteboard, was one of the most illuminating moments of the course. Imagine the set of all cat images the AI has ever seen -- fat cats, thin cats, black cats, white cats. These images occupy a **region** in some abstract space. Now show the AI a brand-new cat image it has never seen. If that image lies **inside** the region -- close to images it has learned from -- the AI can classify it correctly, even though it is technically new. This is discovery through **shared characteristics**.

But show it a giraffe, and the AI is lost. The giraffe lies outside the trained region.

> **Professor Mojumder:** "So it depends upon how do you define what is a black cat, white cat, gray cat, big cat, fat cat -- what is your definition of the cat? All the images have created a boundary around possibility. All those possible images in the inside will be discoverable. Those in the outside will not be discoverable."

This is why AI can help find a new drug that is chemically similar to known drugs, but usually cannot invent a wholly novel molecular class. Learning happens inside the boundary of trained experience.

---

## Recipe Chain

**Session 4 completed the mechanics:**
Each node produces a real number via multiplication and addition, then reshapes it with an **activation function** -- linear for regression, sigmoid for binary probability, softmax for multiclass, ReLU inside hidden layers. Training uses a **cost function** (average error across the dataset) and **gradient descent** to update parameters one small step at a time, aiming to reach the bottom of the error mountain. **Learning rate** controls step size. **Epochs** count full passes through the data. **Stochastic gradient descent** and friends make training feasible at scale. Once trained, the model is just a zip file of weights.

**Next session:** So far every example has used **tabular numeric data**. But most business problems involve **images** (defect detection, medical imaging, satellite analysis) or **text** (customer emails, legal documents). Session 5 pivots to computer vision: pixels, filters, convolution, and the specialised neural network -- the CNN -- that powers everything from DigiYatra to Tesla Autopilot.

---

## Key Terms to Remember

| Term | One-Line Definition |
|------|---------------------|
| **Probability** | A number between 0 and 1 representing the chance of an event |
| **Activation Function** | The nonlinear operation applied at each node after multiplication and addition |
| **Linear Activation** | Output = input; used in regression output layers |
| **Sigmoid** | Squashes any real number to (0, 1); used for binary classification output |
| **ReLU** | Negative inputs become 0; positives pass through; standard for hidden layers |
| **Softmax** | Converts a vector of real numbers to a vector of probabilities summing to 1; used for multiclass classification |
| **Loss Function** | The error for a single training example (per-row) |
| **Cost Function** | The average loss across the entire training sample (per-epoch) |
| **Gradient Descent** | Update weights in the direction that reduces cost, guided by the slope of the cost function |
| **Epoch** | One complete pass through the entire training dataset |
| **Learning Rate (Step Size)** | How big each gradient-descent step is; too small = slow, too large = ping-pong overshoot |
| **SGD (Stochastic Gradient Descent)** | Gradient descent using randomly sampled batches instead of the full dataset -- much faster |
| **AdaGrad / Adam / RMSProp** | Adaptive optimisers that adjust step size per parameter to speed convergence |
| **Local Minimum vs Global Minimum** | Gradient descent may settle in a shallow valley (local) instead of the deepest valley (global) |
| **Overfitting** | When a model memorises training data but fails on new data |
| **Training Data vs Test Data** | The split used to train the model vs the held-out set used to check generalisation |
| **Transfer Learning / Fine-Tuning** | Taking a trained open-weight model and adjusting its later layers for a new use case |

---

## The Real-World Takeaway

Meher had spent eight years as a credit-risk analyst at a mid-tier NBFC before she moved into the analytics leadership role. Her first big project was replacing the company's decade-old rule-based loan-approval engine with a neural network. Her team had two data scientists, a data engineer, and a very impatient CFO.

The training data was clean -- 1.2 million historical loan applications, each with 40 features and a label of "defaulted" or "paid in full." The team built a small network. Three hidden layers, ReLU activations, sigmoid output because the problem was binary. They trained it overnight and came back to numbers that looked spectacular. 94% accuracy on the training data.

The CFO wanted to deploy that Friday. Meher said no.

She had the team run the model on a held-out test set of the last three months' applications. The number came back at 71%. There was a 23-point gap between training and test performance. Classic overfitting -- the model had memorised the training rows rather than learning the underlying patterns.

Her team pushed back. "We just need more training epochs. Let's run it for another two days."

Meher pulled up a whiteboard and drew a U-shaped curve. "This is what the cost function looks like as we train. Training error keeps going down. But somewhere along the way, test error stops falling and starts rising again -- because the network is starting to memorise noise. If we run for two more days, the training accuracy might go to 98%, but the test accuracy will drop to 60%."

They implemented early stopping. They introduced dropout in the hidden layers. They reduced the learning rate so the model would take smaller, more careful steps. Test accuracy climbed to 84%. Training accuracy dropped to 87%. The gap was three points, not twenty-three. She shipped it.

Three months into production, one of the data scientists came into her office in a panic. The model was performing badly on applications from a new state the company had just expanded into. Default rates were double what the model predicted.

Meher was not surprised. She pulled up the whiteboard again -- a boundary around a cluster of dots. Inside the boundary, images the model had learned from. Outside, a giraffe pretending to be a cat.

"The training data had no applications from this state," she said. "The economic conditions, the borrower profiles, the collateral norms -- all outside our training distribution. The model isn't wrong. It's honest. It's telling us it doesn't know."

They stopped auto-approving loans in the new state, went back to the rules engine as a fallback, and started collecting labelled data from the new geography. Six months later, they retrained. This time the boundary included the new state.

Meher never celebrated 94% accuracy again. She celebrated the day her team asked, unprompted, "What's the test-set number?"

**The best AI leaders are not the ones who get the highest training accuracy. They are the ones who understand -- viscerally -- that a model is only as good as the mountain it descended, and only as honest as the boundary it was taught to live inside.**
