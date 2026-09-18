---
sidebar_position: 8
title: "Session 7: The Tree Beside the River — How Machines Learn the Meaning of Words"
---

# Session 7: The Tree Beside the River — How Machines Learn the Meaning of Words

*Why the same word can mean two different things -- and how that single observation blew up an entire generation of language models and gave birth to the transformer*

---

## Where We Left Off: Text as Numbers

The previous session ended with a puzzle. A neural network only understands numbers. But language is words. So how do we translate one into the other?

The class had walked through three attempts:

1. **Dictionary indexing** -- assign each word a single integer. Simple, but a number has no meaning; "king" and "queen" end up as unrelated as "king" and "banana."
2. **One-hot vectors** -- represent each word as a sparse vector with a single 1 in the position of the word. Fixes the arithmetic problem but explodes in size and still carries no meaning.
3. **Word embeddings** -- give each word a dense vector of ~300 real numbers, learned from a huge corpus of text, such that similar words end up with similar vectors.

The professor had opened Stanford GloVe -- a public word-embedding table with **1.2 million words**, each represented by a 300-dimensional vector -- and shown that "king", "man", "queen", and "brother" cluster together in that space, while "river" and "jungle" cluster elsewhere.

> **Professor Mojumder:** "Think about word embedding as a unique signature of a word. It's not just a number. It captures the meaning."

Session 7 begins by pulling on the loose thread in this story.

---

## The Two Trees

The professor drew two sentences on the whiteboard:

> **Sentence 1:** *A small tree grew beside the river.*
>
> **Sentence 2:** *The old oak tree stands in the middle of the jungle.*

Then he circled the word **tree** in each sentence.

"Same word, same embedding," he said. "GloVe gives me a single vector for tree -- say `[7, 11, 27]`. So both these trees are represented by the exact same numbers. Are they the same tree?"

A wave of "no"s came across the video call. Chiraag pointed out that one tree is next to a river; the other is in a jungle. Prasoon added that one is small and growing, the other is old and specifically an **oak**. Anish flagged another wrinkle: the river could itself be running through the jungle, so "location" alone was ambiguous.

The class had arrived, without meaning to, at the central problem of natural language:

> **A word's meaning is not fixed. It shifts with the words around it.**

If a static embedding gives every "tree" the same vector, the model is blind to that shift. The small riverside sapling and the ancient oak in the forest look identical to it.

### Fixing It by Hand

The professor demonstrated what it would look like to nudge the vector for each context. The dictionary vector is `[7, 11, 27]`. For the riverside tree, the class agreed something like `[7.2, 11.8, 27.5]` -- slightly shifted, still recognizably a "tree", but tugged toward the neighbouring words "small" and "river". For the oak, `[6.9, 10.8, 27.3]` -- shifted in a different direction, toward "old" and "jungle".

That small mental exercise is the seed of everything that follows in this session: **contextual word embeddings**.

> **Professor Mojumder:** "The word can have a meaning by itself, but the word has a much clearer meaning when you know the sentence in which the word lies."

### The Combinatorial Explosion

Sanchita asked the obvious follow-up: if GloVe has 1.2 million words, that gives us 1.2 million embeddings. How many do we need if every occurrence of a word gets its own vector?

The class did the math out loud. If every tree in every sentence has its own embedding, we are no longer talking about 1.2 million vectors. We are talking about **billions**. Every "tree" in a park, every "tree" in a fairy tale, every "tree" in a corporate report -- each becomes a distinct point in the vector space.

That is the price of context. It is also, as we will see, the reason large language models are so large.

---

## Sequence Models: When Order Matters

Before diving deeper into context, the professor recapped the second thread from the previous session: **sequential data**.

A sentence is not a bag of words. It is an ordered sequence. "Dog bites man" and "Man bites dog" contain the same words in different orders and mean very different things. A regular feed-forward neural network flattens the input and loses that order.

Enter the **Recurrent Neural Network (RNN)**. Each word enters the network one at a time. The hidden layer that processes word 1 passes its output not only forward as an answer but also sideways as memory into the hidden layer that processes word 2. Word by word, the network builds up a running representation of the sentence.

### The Architecture Zoo

The class then mapped out the four families of RNN architectures by input and output shape. The professor asked the students to volunteer use cases, and the room was faster than the slides:

| Architecture | Inputs | Outputs | Classic Use Cases (student contributions) |
|--------------|--------|---------|-------------------------------------------|
| **Many-to-one** | A sequence | A single label | Sentiment analysis (Amazon reviews, Zomato reviews), stock-price prediction, news-vs-novel classification |
| **One-to-many** | A single input | A sequence | Image captioning, text generation from a prompt, music generation from a seed note |
| **Many-to-many (sequential)** | A full sequence in, then a full sequence out | Sequences | Language translation (Hindi to English, English to German), voice-to-text |
| **Many-to-many (simultaneous)** | A sequence in, output emitted at each step | Sequences | Live captioning, Named Entity Recognition (NER), video-activity recognition, handwriting-to-text |

Rahul contributed stock-price prediction. Aviral suggested text generation ("like what ChatGPT does"). Someone mentioned live captioning during video playback. Raghav suggested voice-to-text translation. The professor kept writing them down.

> **Professor Mojumder:** "You get to see now the use cases that we use regularly are coming from these neural network models. It's not that these models are very very outside our regular use."

---

## The Predictive Word Problem

The professor then wrote two more sentences on the board:

> **Sentence A:** *Had I said that the movie was good, I would have been a lone numskull.*
>
> **Sentence B:** *Had I said that the movie was good, everyone would have agreed with me.*

Both sentences share the same opening seven words. Yet one is negative and the other is positive. The class agreed instantly.

Now feed these two sentences one word at a time into an RNN doing sentiment classification. After seven hidden layers, the network has processed *"Had I said that the movie was good..."* -- and it has no idea which way the sentiment will land. The **predictive word** -- "numskull" in A, "agreed" in B -- is far down the sentence.

This is not just an inconvenience. It is a structural weakness. The RNN has burned seven hidden layers of computation on words that carry no signal. And in a long sentence, the predictive word might sit at position 99. All the information from word 1 has to survive being squeezed through 98 layers of non-linear transformations before it meets the label.

### Bidirectional RNNs

The fix, at least partial, is to read the sentence from **both** directions at once. A **bidirectional RNN** runs one sequence of hidden layers left-to-right and another right-to-left, then combines the two outputs.

If the predictive word is near the end, the reverse pass finds it first. If it is near the beginning, the forward pass gets there quickly. The network no longer has to guess which direction to prioritize.

> **Professor Mojumder:** "The faster you find the predictive word, the better it is. Otherwise you are just wasting lots of weights and biases in no man's land."

### The Class Activity

To make the architecture stick, the professor set a challenge: on paper, draw a bidirectional RNN doing sentiment classification for a four-word sentence. No Google, no ChatGPT. Three difficulty levels: many-to-one, many-to-many, or the hardest -- simultaneous many-to-many.

The chat filled with sketches. Priyanshu got a clean many-to-one drawing. Prasoon posted a nearly-correct many-to-many. Several students accidentally connected the forward hidden layers to the backward hidden layers -- a common trap the professor called "cross-pollination" -- which defeats the whole point. The two directions must run in parallel and only meet at the output.

The correct picture: for a sentence with words `x0, x1, ..., x6`, one row of hidden states runs left to right, another runs right to left, and each output `yi` is a function of both. A softmax on top gives the final classification.

---

## Why RNNs Ran Out of Runway

Despite the improvements -- bidirectionality, gating, LSTMs, GRUs -- RNNs never became the backbone of modern AI. The professor listed the reasons:

1. **Sequential computation is slow.** Word 2 can't be processed until word 1 is done. There is no way to parallelize across the sequence.
2. **Long-term memory fades.** Information from the first word must survive dozens or hundreds of hidden layers to influence a later prediction. Vanishing gradients kill the signal.
3. **Complexity balloons.** A seven-word sentence in a bidirectional RNN already needs fourteen hidden layers. Scale that to a paragraph and the model becomes unwieldy.

The industry needed something that could look at all the words at once, learn which words mattered to which other words, and train in parallel. That something is the **transformer**.

---

## The Recent News: Millennium Prize by AI

Before pivoting to transformers, the professor paused for a piece of news the class was buzzing about. Senthil summarized it:

> **Senthil:** "The Navier–Stokes equation is a millennium math problem, highly complicated, takes years and enormous compute to make progress. GPT-6 Astra just solved a version of it -- ten thousand agents working for eighty-four hours."

The professor added the context: this was one of the Clay Institute's seven Millennium Prize problems, each carrying a one-million-dollar bounty. Controversy aside, it was a live demonstration of what modern LLMs can do when the architecture is right and the compute is enormous.

> **Professor Mojumder:** "We are at the brink of really losing our human capacity if AI does all the intellectual work. So identifying our true capacity is very important now."

---

## Transformers: The Architecture That Ate the World

Every model whose name the class already knew -- **GPT, Claude, Gemini, Llama, Copilot, Grok, Granite** -- is built on the same architecture: the transformer. Introduced in the 2017 paper "Attention Is All You Need", it did two revolutionary things:

1. **It let every word see every other word simultaneously**, rather than one at a time.
2. **It replaced sequential recurrence with a mechanism called self-attention**, which explicitly learns which words matter to which other words.

### Self-Attention in Plain Language

Self-attention is exactly the exercise the class had already done with the two trees. For each word in a sentence, the model asks: *what are the other words around me, and how much attention should I pay to each of them when updating my own representation?*

Take "tree" in "the old oak tree stands in the middle of the jungle". The word "tree" attends to "oak" (strongly -- it tells us the species), to "old" (medium -- age), to "jungle" (strongly -- location), to "the" (weakly -- filler). The vector for tree gets pulled in the direction of those signals, producing a new, contextual vector that is different from the vector for tree in "a small tree grew beside the river".

Every word in the sentence does this simultaneously. The result is a set of context-aware embeddings, one per word, computed in parallel.

### Multi-Headed Self-Attention

Now here is the twist. A single word can be described in multiple ways at once. The riverside tree is *small*, and it is also *next to water*. Those are two different attributes -- size and location. Why should a single attention vector capture both?

It shouldn't. A transformer runs **multiple attention heads in parallel**, each learning to focus on a different aspect of the word. One head might learn size, another might learn location, another might learn agent-versus-object grammatical role. Each head produces its own updated vector; the model then combines them.

> **Professor Mojumder:** "A single word can have multiple vector representations or word embeddings -- each for each characteristic of the word in the sentence. That's why it's called multi-headed self-attention."

### The Context Window

How far around a word does self-attention look? That is the **context window** -- a design choice. A small window (only immediate neighbours) captures local grammar. A large window (thousands of tokens) lets the model see the whole document. Modern LLMs like GPT-4 and Claude routinely operate with context windows of 100K+ tokens.

If a portion of the window is hidden from the model -- typically the words to the right of the current position -- it is called **masked self-attention**, and it's what forces a model to generate text one word at a time rather than seeing the future.

---

## Encoders, Decoders, and Their Descendants

A full transformer has two halves:

| Component | What It Does | Made Of |
|-----------|--------------|---------|
| **Encoder** | Reads the entire input at once, understands the meaning holistically | Self-attention (unmasked) + feed-forward layers |
| **Decoder** | Generates output one token at a time, conditioned on the encoder's understanding | Masked self-attention + encoder-decoder attention + feed-forward layers |

Depending on which halves are kept, you get very different models:

| Type | Example | What It's Good At |
|------|---------|-------------------|
| **Encoder only** | BERT | Understanding an entire text at once -- sentiment classification, summarization, semantic search |
| **Decoder only** | GPT, Claude, Gemini | Generating new text one word at a time -- chatbots, code generation, creative writing |
| **Encoder-decoder** | Original transformer, T5 | Sequence-to-sequence tasks -- translation, structured summarization |

When Gaurav asked whether a decoder-only model like GPT still has the encoder-decoder attention layer, the class worked out the answer together: no. Without an encoder, there is nothing for that layer to attend to. A decoder-only model has only **masked self-attention** and a feed-forward network per layer.

---

## Prompting and the New Grammar of Talking to AI

Because a decoder-only LLM is fundamentally a **next-word predictor**, everything you type into the prompt becomes the starting sequence. It reads the prompt, uses masked self-attention to understand the context, and predicts the most probable next word. That word is appended to the sequence, and the process repeats.

This has two profound consequences.

### Zero-Shot vs Few-Shot Prompting

Yash defined **zero-shot prompting** cleanly: just ask the question, no examples. **Few-shot prompting** means giving the model one or more solved examples before asking your question. The examples enter the context window and reshape the self-attention, making the model much better at matching the style, format, and reasoning of the examples.

### The Architect Trick

Pratik shared a hands-on observation from six months of using AI at work. If he simply pastes a problem statement, the AI misses key design considerations. But if he prefixes the prompt with *"You are a senior technical architect..."*, the same underlying model suddenly reverse-engineers the codebase, checks library versions, and produces a far better design.

The professor explained why. LLMs are trained on structured, formal text -- books, articles, well-documented code. When a prompt is casual and unstructured, self-attention has trouble anchoring the request. When the prompt looks like the opening paragraph of a technical book -- with a role, a task, and a well-defined scope -- self-attention lights up along the exact patterns the model learned from millions of similar documents.

> **Professor Mojumder:** "The AI is trained on structured, well-formatted data. So if you write a prompt which is very humanly-casual, self-attention is not able to capture the meaning. When you upgrade the prompt to be more formal, more accurate, well-written like a book -- then it gives you a better result."

---

## Hallucination and Bias

The session closed by naming two failure modes.

**Hallucination** is when the next-word predictor produces a coherent, grammatical sentence that is factually wrong. Anoj framed it precisely: these models are probabilistic, not deterministic. A temperature setting controls how creative the sampling is. Higher temperature, more invention. Sometimes the model, unable to recall the actual answer, samples a plausible-looking fabrication -- "the capital of Mars is Muskland."

**Bias** is different. The model isn't making things up; the *training data itself* carries biases -- gender, race, geography, class -- and the model faithfully reproduces them.

The professor promised a full session on both. They will return in Session 9.

---

## Recipe Chain

**Session 7 in one line:**
Words are numbers, meaning is context, sequence models handled context poorly, and the transformer -- with self-attention, multi-headed attention, and full parallelism -- solved the problem so completely that it became the substrate of every modern LLM.

**Next session:** We flip from architecture to economics. What does it actually cost to train and run these models? What are GPUs, cooling, water, electricity, labour, and licensing bills doing to the business case? We will also unpack Retrieval-Augmented Generation (RAG), Chain-of-Thought (CoT) prompting, Mixture-of-Experts (MoE), Small Language Models, multimodal LLMs, and Agentic AI.

---

## Key Terms to Remember

| Term | One-Line Definition |
|------|-------------------|
| **Word Embedding** | A dense vector of real numbers (typically 300-dimensional) that represents the meaning of a word |
| **Corpus** | The full collection of text (books, articles, web pages) from which embeddings and models are learned |
| **GloVe** | Stanford's public word-embedding table -- 1.2 million words, 300 dimensions each |
| **RNN (Recurrent Neural Network)** | A sequential model that processes one word at a time, passing hidden state forward |
| **Bidirectional RNN** | Two RNNs, one reading left-to-right and one right-to-left, combined at the output |
| **Predictive Word** | The specific word in a sentence that carries the signal for the model's classification task |
| **Vanishing Gradient** | The problem where information from early words fades as it passes through many layers |
| **Self-Attention** | A mechanism where each word computes how much to attend to every other word in the sequence |
| **Multi-Headed Attention** | Running self-attention several times in parallel, each head learning a different aspect of the word |
| **Context Window** | The span of tokens the model can see at once when computing attention |
| **Masked Self-Attention** | Self-attention where future tokens are hidden -- used in decoder-only models for next-word prediction |
| **Encoder** | Transformer half that reads and understands input; used in BERT for classification and search |
| **Decoder** | Transformer half that generates output one token at a time; used in GPT, Claude, Gemini |
| **Zero-Shot Prompting** | Asking a question directly, with no examples |
| **Few-Shot Prompting** | Including a few solved examples in the prompt to guide the model's output format and reasoning |
| **Hallucination** | When an LLM generates confident-sounding but factually incorrect output |

---

## The Real-World Takeaway

Anaya was three months into her new role as head of customer experience at a mid-sized health-insurance company when her CEO forwarded her an email with a single line: *"Look into this."* Attached was a demo of a generative-AI chatbot that a competitor had launched to handle first-line claims queries.

Her first instinct was to buy the same product. Her second, after ten minutes on a vendor call, was to be dazzled. The salesperson showed her a chatbot that answered policy questions in fluent English and Hindi, handled two-turn follow-ups, and cost roughly half of what her BPO partner charged per query. She almost signed on the spot.

She didn't. Instead she asked to talk to two customers who had used the competitor's bot. It took her three days to find them. Both had a version of the same story. The bot had answered them perfectly for the first three exchanges. Then one of them asked, *"But my mother is a co-holder on the policy -- does that change anything?"* The bot cheerfully replied *"No, co-holders are covered under the same terms."* This was wrong. It cost the family two weeks of hospital bills before the mistake was caught.

Anaya, who had sat through her MBA course on AI six months earlier, recognised the shape of the problem. The chatbot was a decoder-only transformer doing next-word prediction. It was very good at producing grammatical, confident, plausible-sounding text. It was not doing lookups against the actual policy database. When "co-holder" appeared in the prompt, self-attention pulled the model toward the most common continuation in its training data -- which was reassurance, not accuracy. **The model was hallucinating.**

She rewrote the requirements document. The vendor's LLM could stay, but only inside a scaffold: retrieval from the actual policy database, few-shot prompts that anchored the model to real cases, chain-of-thought reasoning that made the bot show its work, and -- crucially -- a rule that any answer touching a co-holder, a claim amount, or a pre-existing condition was routed to a human. The vendor pushed back on the price. She held firm.

Six months later, the bot handled 74% of first-line queries end-to-end, escalated 26% to humans, and produced zero known cases of misinformation on a claim. The BPO contract was renegotiated, not cancelled. The BPO now handled complex claims and pre-authorisations while the bot handled everything else. Cost per query fell 40%, customer satisfaction rose 18 points.

She did not build a transformer. She did not fine-tune a model. She did not write a line of code. What she did was **understand the shape of the technology well enough to design guardrails around its failure modes**. She knew that self-attention finds patterns, not truths; that a decoder-only LLM predicts the next likely word, not the correct one; that context windows can be enriched with retrieved facts to keep the model honest.

**The managers who will win the next decade are not the ones who buy the best AI. They are the ones who understand what the AI is actually doing under the hood -- and design their business around both its powers and its weaknesses.**
