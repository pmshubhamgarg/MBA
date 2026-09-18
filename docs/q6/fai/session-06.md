---
sidebar_position: 7
title: "Session 6: When Machines Read — From Words to Vectors to Memory"
---

# Session 6: When Machines Read — From Words to Vectors to Memory

*Why the trick that made pixels usable does not quite work for language -- and how word embeddings and recurrent networks bridge the gap*

---

## Housekeeping First

The professor opened by confirming the **mid-course quiz**: 15 MCQs, 2 marks each, 30 marks total, 30 minutes, held right after the class session on the 12th. The syllabus covers Sessions 1 through 5 -- ANN fundamentals, gradient descent, activation functions, CNN operations. The mode of preparation he recommended: the uploaded slides plus the recordings, with special attention to the case discussed earlier (the Facebook workshop case) and the conceptual definitions -- weight, bias, neural network, convolution, pooling.

> **Professor Mojumder:** "The questions will be testing your conceptual understanding rather than something very very specific written in some document. If you have a clear understanding of the concepts, it will not be much of a difficulty."

Then, quick warm-up on CNN operations from Session 5 -- students correctly recalled **convolution**, **max pooling**, and **flattening**. Priyanshu explained flattening: "we collect all the digits of the matrix into a single vector." Anuj added the useful term: max pooling is a **down-sampling** operation.

With CNN fresh, the professor pivoted:

> **Professor Mojumder:** "Today we talk about text data. If a picture became pixels, a sentence has to become... what?"

---

## The Problem: Words Are Not Numbers

He wrote four words on the whiteboard:

- **New Delhi**
- **New York**
- **Mumbai**
- **Nagpur**

All cities. All text. And AI, as we have established across five sessions, only understands numbers. So the very first question: **how do we convert these words into numbers?**

The class threw out ideas, and the professor let each one live long enough to expose its limitation:

### Attempt 1: Latitude and Longitude

Raghav proposed encoding each city as its GPS coordinates. Cute for cities, but a word can be **anything** -- a tree, a color, an abstract noun. You cannot geo-locate the word "justice."

### Attempt 2: ASCII Codes

Pankaj suggested using each letter's ASCII code -- 'N' is 78, 'e' is 101, and so on. Every character has a standard numeric representation.

The professor accepted the idea and then asked what could go wrong. Prasoon pointed to the ceiling: **for a long paragraph, the size explodes**. High-dimensionality problem all over again -- the same curse we hit with raw pixels in Session 5.

### Attempt 3: A-Z as 1 to 26

Prasoon then floated a lighter version: just number the alphabet 1-26. Twenty-six letters, twenty-six numbers, no big five-digit ASCII codes. That helps with size but does not fix the deeper problem.

### Attempt 4: Dictionary Method (Indexing)

Nihar suggested what turns out to be the classical starting point: **tokenize the text and give each unique token an index**. Build a dictionary of all words in the vocabulary. "New Delhi" is token 125. "New York" is token 26. "Mumbai" is token 735.

This is closer. But it has two fatal problems the class dug up:

**Problem 1 -- Out-of-vocabulary words.** The professor brought up the recent Nepal disaster. What caused it? A **GLOF** -- Glacial Lake Outburst Flood. "GLOF" is not in the standard English dictionary. If your vocabulary is fixed, every new word breaks the model.

**Problem 2 -- The numbers are meaningless.** 125 for New Delhi and 735 for Mumbai are just index positions. They do not capture the fact that both are big Indian cities, both are financial hubs, both are far from small towns like Nagpur. In the image analogy from Session 5, a pixel value of 255 **meant** something -- it meant "bright white." Here, 125 means nothing about New Delhi.

> **Professor Mojumder:** "In images, the pixel had a meaning. In this case, all these words -- New Delhi, New York, Mumbai, Nagpur -- do they have a meaning? The numbers I am assigning based on the dictionary method are just any random numbers. The cityness of these cities is not captured by my numbers."

### Attempt 5: One-Hot Encoding

Anoj mentioned one-hot vectors: each word becomes a very long vector of zeros with a single "1" at the word's position. If your vocabulary has 10,000 words, every word is a 10,000-dimensional vector.

Still no meaning. And now the dimensionality is huge. There has to be a better way.

---

## Word Embeddings: Numbers That Carry Meaning

Here is the shift. Instead of assigning a single arbitrary number to each word, we assign a **vector of numbers**, and we design each dimension of that vector to capture some meaningful property of the word.

The professor walked through it interactively. The whiteboard now had four cities in rows and three columns:

| City | Size (1-10) | Cultural Diversity (1-10) | Closeness to Ocean (0-10) |
|------|-------------|--------------------------|--------------------------|
| **New Delhi** | 8 | 7 | 0 |
| **New York** | 10 | 10 | 10 |
| **Mumbai** | 9 | 9 | 10 |
| **Nagpur** | 5 | 4 | 3 |

Now every city is a 3-dimensional vector. And look what happened:

- New York (10, 10, 10) and Mumbai (9, 9, 10) live close to each other in this space -- both big, diverse, coastal.
- New Delhi (8, 7, 0) is in the neighborhood too -- big, diverse, but inland.
- Nagpur (5, 4, 3) sits noticeably farther away -- smaller, less diverse, inland.

**Similar words got similar vectors. Different words got different vectors.** That is the entire point of an embedding.

> **Professor Mojumder:** "If I draw it on an XY plane, my vector for New York, my vector for Mumbai, and my vector for New Delhi are all more or less in the same region. Whereas my vector for Nagpur is somewhere different. That is how the numbers work -- similar words get similar vectors."

### Extending to All Words, and to Many More Dimensions

Gaurav asked: what about countries, animals, trees, verbs? Just keep adding dimensions. If three dimensions are not enough to distinguish everything, add x4, x5, x100, x300.

Kaushik asked how many dimensions are typical. The professor gave the industry ranges:

| Dimension Count | Typical Use |
|-----------------|------------|
| 50 | Lightweight models, quick lookups |
| 100-200 | General-purpose word models |
| 300 | GloVe / Word2Vec defaults, most production NLP |
| 500-1000 | Deep semantic models |

The designer picks the dimension count. More dimensions = richer meaning but bigger network. Fewer = cheaper but blunter.

### These Dimensions Are Not Human-Named

Sagarika asked whether some human sits down and labels each dimension "size," "diversity," etc. **No.** The professor was explicit:

> **Professor Mojumder:** "This is not a manual process. This is done using a neural network itself. The weights of the neural network become the dimensions of the words. I explained it by saying that it was size, population, nearness to the ocean -- that was just my explanation. In reality, an 8-dimensional or 50-dimensional vector captures lots of information, but these dimensions may not be explainable."

Same explainability trade-off we hit with CNN filters in Session 5. The vectors work. Nobody can tell you what dimension #37 "means."

---

## How Embeddings Are Actually Learned

The professor showed the training trick. You take a corpus -- Wikipedia, Twitter, books, news articles -- and for each word in a sentence, you build a **context window**.

Take the sentence: **"Udaipur receives heavy rain."**

Focus on the word **"receives."** Its context (say, one word on each side) is **"Udaipur"** and **"heavy."** Build a small neural network that tries to **predict the middle word from its neighbors**, or the neighbors from the middle word. The weights the network learns become the **word embedding**.

- Sagarika asked whether this is supervised or unsupervised. The professor clarified: it's **self-supervised** -- the "labels" are just other words from the same sentence. The middle word's vector is the target; the neighbors' vectors are the inputs. Supervision comes from the corpus itself.

The intuition: words that appear in similar contexts tend to end up with similar vectors. "King" and "queen" show up in similar sentences ("the ___ ruled the kingdom"). So their vectors converge. This is why king/queen and man/woman famously form parallel vectors in the embedding space -- and why you can do the trick `king - man + woman ~= queen` in vector arithmetic.

---

## Stanford GloVe: You Do Not Have to Train Your Own

Nobody in industry trains their own embeddings from scratch anymore. Stanford's **GloVe** (Global Vectors for Word Representation) publishes free, downloadable pre-trained embeddings from massive corpora:

| Corpus | Tokens | Vocab | Dimensions Available |
|--------|--------|-------|--------------------|
| Twitter (early) | 2 billion tweets, 27 billion tokens | 1.2M | 25, 50, 100, 200 |
| Wikipedia + Gigaword | 6 billion tokens | 400K | 50, 100, 200, 300 |
| Common Crawl (latest) | 220 billion tokens | 1.2M | 300 |

> **Professor Mojumder:** "You just go to Stanford's website, download the folder, and use it for your purpose. You do not need to create word embeddings from scratch."

Note that even as the corpus grew from 27 billion to 220 billion tokens, the **vocabulary stayed at ~1.2 million**. The industry has effectively agreed that 1.2 million words is roughly the size of usable English. Anything beyond that is noise or rare enough to be safely handled by pre-processing.

---

## Pre-Processing: The Unglamorous Foundation

Manish asked about case sensitivity. If "New Delhi" and "new delhi" have different vectors, are we double-counting?

The professor walked through **pre-processing** -- the invisible but critical step before embeddings are even applied:

1. **Lowercase everything** (or uppercase everything). No mixed-case duplication.
2. **Remove punctuation, hyphens, extra whitespace**.
3. **Break sentences into tokens.** "New Delhi" could become one token or two tokens (`new`, `delhi`) depending on the tokenizer.
4. **Handle misspellings.** Different spellings get mapped to the closest word in the fixed vocabulary before the embedding is looked up.

Ashok summarized the operating principle from data science: **Garbage In, Garbage Out.** The professor loved this and repeated it: modern smaller language models are moving toward clean, curated data over sheer volume.

---

## The Bank Problem: Same Word, Different Meaning

Anish asked a subtle question: what about words that look identical but mean different things? "I sat by the river **bank**" versus "I went to the **bank** to withdraw money." Same string. Different concepts.

The professor conceded honestly that the basic embedding method **cannot** distinguish these. The vector for "bank" is a single fixed vector regardless of sentence context. And this is exactly the wall that modern **large language models** (GPT, Claude, Gemini) had to break through with **contextual embeddings** -- vectors that change based on the surrounding sentence.

> **Professor Mojumder:** "GPT and others solved this problem. If you have the word 'bank' in a river bank and in a corporation bank, these two banks have different vectors because they are used differently in different sentences. They did that with a different kind of neural network model -- we will talk about that later."

For now, the working assumption is one vector per word.

---

## Feeding Text into a Neural Network

Now that every word is a vector, we can build a full pipeline. The professor set up a mini example:

**Task:** Sentiment classification. Input: a movie review. Output: **positive**, **negative**, or **neutral**.

**Review:** "Nice movie."

Each word has a 3-dimensional embedding (in reality it would be 50-300):

- "nice" -> `[3, 4, 7]`
- "movie" -> `[7, 0.5, 8]`

We now **flatten** these -- the same operation we used at the end of a CNN -- to produce a single vector of 6 numbers that feeds into the input layer.

**Architecture:**

| Layer | Nodes |
|-------|-------|
| **Input** | 6 (flattened word embeddings) |
| **Hidden** | 2 (designer's choice) |
| **Output** | 3 (positive, negative, neutral) with softmax |

Feed the vector through, get a prediction. If the prediction is "positive" and the label is "positive," great. If not, backpropagate and update the weights. The **exact same** ANN training loop from Session 4.

> **Professor Mojumder:** "Once you start intuitively getting the course, it starts becoming similar because it is not that different. We did flattening earlier in CNN, we do flattening here also."

Beautiful symmetry:

| Data Type | Raw Form | Feature Extraction | Feed to ANN |
|-----------|----------|-------------------|-------------|
| **Numerical** | Table rows | None needed | Directly |
| **Image** | Pixel matrix | CNN (conv + pool) then flatten | Yes |
| **Text** | Word tokens | Word embeddings, then flatten | Yes |

---

## The Big Problem: ANN Loses the Order of Words

But the story is not over. Arunava spotted the crack.

If we simply flatten `[nice_vec] + [movie_vec]` and dump the six numbers into a fully connected input layer, the network cannot tell which numbers came from which word. All six numbers hit all the hidden nodes simultaneously. The **order** of the words is destroyed.

And in language, order is everything.

- "The dog bit the man" vs. "The man bit the dog."
- "I love you not" vs. "I not love you."

Same words, different order, radically different meaning. A vanilla ANN with a flattened input cannot see the difference. Sadhya and Arunava both flagged this in the chat.

> **Professor Mojumder:** "You are simultaneously entering all the information of all the words into the AI. The first word is no more the first word. The second word is no more the second word. This sequential nature is not captured. But that is an important property of sentences."

Kaushik asked another good question: what if sentences have different lengths? The professor introduced two standard tricks:

- **Truncation** -- if the sentence is too long, cut off the tail beyond a fixed length (say, 100 words).
- **Padding** -- if it is too short, add filler tokens until it hits the fixed length.

Either way, the deeper problem -- order -- still needs a new architecture.

---

## Enter RNN: The Recurrent Neural Network

The fix is to **feed the words one at a time** rather than all at once, and give each hidden layer access to whatever the previous hidden layer computed. This is a **Recurrent Neural Network**.

### Redrawing the Diagram

Before showing the RNN, the professor did a small notation trick. He redrew a standard ANN so that:
- The **hidden layer** is one box (details hidden inside).
- Inputs can enter from **any direction** -- top, bottom, left, right. Direction is cosmetic.
- Outputs can exit from any direction.

With that visual freedom, the RNN looks like this:

```
[Word 1 embedding] --> [Hidden Layer 1] --> [Hidden Layer 2] --> [Hidden Layer 3] --> [Output (y_hat)]
                              ^                    ^                   ^
                              |                    |                   |
                        [Word 1 input]      [Word 2 input]      [Word 3 input]
```

- **Word 1**'s embedding enters Hidden Layer 1.
- The output of Hidden Layer 1 flows into Hidden Layer 2 -- **and Word 2**'s embedding also enters Hidden Layer 2.
- The output of Hidden Layer 2 flows into Hidden Layer 3 -- **and Word 3**'s embedding also enters Hidden Layer 3.
- The final hidden layer's output is the **y_hat** for the entire sentence.

Every hidden layer carries forward the accumulated understanding of everything before it, then combines that with the next new word. **Memory is preserved. Order is preserved.**

### Why It's Called "Recurrent"

Ashok, a student with a CS background, offered the cleanest technical framing:

> **Ashok:** "It is like a recurrence relation -- a Fibonacci series. It takes into account the past computation. The previous ANN was memoryless. This one keeps the previous states into account when computing the next state."

The professor built on it:

> **Professor Mojumder:** "The second word is not analyzed separately. The second word is analyzed after analyzing the entire first word and capturing its information into hidden layer two. So the memory is not lost. That is why the word 'recurrent' is used -- it is a recursive process."

### Weights, Biases, and Training

Sindhu asked whether weights and biases still exist at each node. Yes -- the underlying math is unchanged. Every hidden node still computes `w1*x1 + w2*x2 + ... + b`, still applies an activation, still gets updated by gradient descent. The **only** difference is that inputs to each hidden layer now come from **two places**: the current word's embedding, and the previous hidden layer's output.

Gaurav asked about a feedback loop. The professor clarified: the "feedback" is the final y_hat. Compare it to the sentence's true label (positive/negative/neutral), compute the error, and backpropagate through **all** the hidden layers -- adjusting weights everywhere in the chain. Just like the ANN training we already know.

---

## RNN Was a Stepping Stone

The professor gave a preview that will matter enormously in later sessions:

> **Professor Mojumder:** "RNN was a trial in the direction of making better predictions, but it ended up having lots of problems. So later on we went back to simultaneous input models -- but with **positional encoding** to preserve the positional information. This is a different kind of model -- transformers. But RNN is important because RNN was the classical way of handling text data."

Read carefully: the modern large language models are **not** RNNs. They are **transformers**. They abandoned recurrence but kept the insight that word order matters, by adding explicit position information to each word's vector. Sessions 7 and 8 will get to that.

---

## Handwritten Text: A Bonus OCR Story

Sep asked a smart cross-topic question. In the first slide of Session 6, the professor had shown a handwritten page. If we already know CNNs work for images, but text needs embeddings, how does AI handle a **handwritten page**?

The professor's answer stitched everything together:

> **Professor Mojumder:** "First use CNN or OCR to convert the image of the text into text. Once it is text, use word embeddings to make sense of it. So you use both -- CNN first, then RNN or the text model afterward."

A pipeline: pixels -> characters -> tokens -> embeddings -> sequence model -> prediction. Two architectures, chained.

---

## Garbage In, Garbage Out

Anil asked what happens if the input sentence is grammatically wrong -- jumbled word order, typos. The professor gave a two-layer answer:

1. **Typos** are handled by pre-processing. GloVe and modern tokenizers have fixed vocabularies (~1.2 million words) and misspellings are mapped to the nearest valid token before embedding lookup.
2. **Deliberately jumbled sentences** are outside the training distribution. If nobody trained the model on jumbled English, it will produce nonsense. The training corpus (Wikipedia, news, books) is clean, so the model expects clean input.

The professor emphasized why the trend is toward **smaller, cleaner** models rather than ever-larger ones:

> **Professor Mojumder:** "Nowadays people don't even want to make large language models -- they want small language models. These need more clean data. Very sharp, use-case-specific models. They don't want garbage data. Make sure only clean data enters the model."

---

## Recipe Chain

**Session 6 opens the language toolkit:**

Words become numbers through **embeddings** -- vectors where similar words sit close together in high-dimensional space (New York near Mumbai, king near queen). Embeddings are learned by a small neural network from context windows in a large corpus; Stanford's GloVe distributes pre-trained ones so nobody has to start from scratch. To feed a sentence into a network, we look up each word's embedding, flatten them together, and pass the result into an ANN -- exactly the same flatten-and-classify pattern we used at the end of a CNN. But this loses word order, which matters enormously in language. **RNNs** fix this by feeding words one at a time, with each hidden layer receiving both the current word and the previous hidden layer's output. Memory is preserved, sequence is preserved, and we finally have an architecture that respects the shape of language.

**Next session:** We finish RNNs -- their limitations, why gradients "vanish" or "explode" across long sequences, and why the industry abandoned them for **transformers**. Then we walk into **large language models** -- how GPT and Claude actually work under the hood, positional encoding, self-attention, and why every word gets a **contextual** embedding rather than a fixed one.

---

## Key Terms to Remember

| Term | One-Line Definition |
|------|-------------------|
| **Tokenization** | Breaking a sentence into smallest useful units -- words or sub-words -- before further processing |
| **Dictionary / Indexing Method** | Assigning each unique word a single integer index; simple but captures no meaning and breaks on out-of-vocabulary words |
| **One-Hot Encoding** | Representing each word as a sparse vector with a 1 at its position and 0s elsewhere; huge dimensionality, no semantics |
| **Word Embedding** | A dense real-valued vector (typically 50-300 dimensions) representing a word's meaning; similar words get similar vectors |
| **Word2Vec / GloVe** | Popular pre-trained embedding models; GloVe (Stanford) is downloadable free of cost with vocabularies up to 1.2 million words |
| **Corpus** | The collection of text (Wikipedia, tweets, books) used to train an embedding model |
| **Context Window** | The N words on either side of a target word used during embedding training |
| **Padding** | Filler tokens added to short sentences so all inputs have a fixed length |
| **Truncation** | Cutting off long sentences at a maximum length |
| **Pre-processing** | Cleaning steps before tokenization -- lowercasing, removing punctuation, fixing spellings |
| **RNN (Recurrent Neural Network)** | Sequence model that processes one word at a time, carrying forward the previous hidden state as memory |
| **Flattening** | Reshaping a set of embedding vectors into a single 1D vector (loses word order -- the problem RNNs fix) |
| **Contextual Embedding** | A word's vector that changes based on its surrounding sentence -- the innovation behind modern LLMs |
| **GIGO** | Garbage In, Garbage Out -- clean training data matters more than clever architecture |

---

## The Real-World Takeaway

Neha ran customer service analytics at a mid-sized private bank. Her team drowned in reviews -- Google Play Store ratings, tweets tagging the bank, complaint forms filled out on the website, transcripts of customer-care calls. Twelve thousand pieces of feedback a month. Someone had to sort them into "praise," "complaint," and "neutral chatter," and then route the complaints to the right department. Two analysts did this by hand. It took them ten working days each month, and by day nine the accuracy was creative at best.

Her manager gave her a budget for "AI." The first vendor she talked to promised a "sentiment classifier" and quoted a six-figure setup fee. Neha, who had recently taken an executive AI course, asked to see the architecture. The vendor's slide showed a fully connected neural network. She asked how they represented words. The vendor said "one-hot vectors with 50,000 dimensions." Neha thanked him for his time and closed the meeting.

She hired a junior data scientist named Ravi instead. Ravi's first move was to download the Stanford GloVe 300-dimensional embeddings. His second was to build a tiny pre-processing pipeline: lowercase, strip punctuation, map obvious misspellings, tokenize. Third, he built an RNN -- one hidden layer, feeding each word's embedding in sequence, ending in a three-way softmax output (praise / complaint / neutral).

He trained on 8,000 labeled reviews the analysts had produced over the previous quarter and tested on the remaining 2,000. The RNN hit 89% accuracy on the first pass. After a week of tuning -- adjusting the truncation length, dropping obviously noisy training rows, adding padding -- it hit 93%.

Neha rolled it out for the next month's feedback. The two analysts spent their time on the 7% of borderline cases and on **actually acting** on the complaints instead of sorting them. Response time on complaints dropped from twelve days to two.

Her boss wanted a diagram he could show the CEO. Neha drew three boxes on a napkin. "The text comes in as words. Each word becomes a 300-number vector that captures its meaning -- 'terrible' and 'awful' land close together, 'great' and 'excellent' land close together. That is the embedding. Then the network reads the words in order, one at a time, keeping a running memory of what came before. That is the RNN. Then the last state gets converted into a probability across our three categories. That is the softmax."

Her boss asked why the vendor's proposal was so much more expensive. Neha said the vendor's model would have used sparse vectors and ignored word order, so it would have needed roughly a hundred times more parameters and roughly the same amount more training data -- and still would have missed the difference between "the app is not bad" and "the app is bad."

**"The magic wasn't the AI,"** she said. **"The magic was choosing an architecture that respected what language actually is -- meaningful and sequential. Once you get that right, the rest is engineering."**

**Word embeddings turned words into geometry. RNNs made that geometry sensitive to order. Together, they turned the pile of unread reviews into an actionable stream -- for the price of a downloaded file and a well-chosen network.**
