---
sidebar_position: 11
title: "Session 10: Futures Pricing, Forwards & Introduction to Options"
---

# Session 10: Futures Pricing, Forwards & Introduction to Options

*From dividends you lose and storage costs you save, to the contract where you can simply walk away*

---

## The Midpoint Check-In

Session 10 marks the **halfway point** of the ACF course. The professor opened by noting there would be no quiz today (Thursday sessions get a pass), but warned that the next two sessions -- Saturday and the following Thursday -- would each have quizzes. Futures and forwards in the first quiz, options in the second.

The agenda: finish the futures pricing discussion from Session 9, cover forward contracts (their close cousin), walk through five real-world corporate hedging examples, and start the introduction to options.

---

## Futures Pricing: The Continuously Compounded Formula

### Quick Recap from Session 9

Last session established the arbitrage-free pricing logic for futures using the gold example. The simple formula was:

> **F = S x (1 + r)^t**

But in real financial markets, trading happens **continuously** -- not in discrete annual intervals. So the formula used for exchange-traded futures contracts is the continuously compounded version:

> **F = S x e^(r x t)**

Where:
- **F** = futures price today
- **S** = spot price today
- **r** = risk-free rate (annualized, continuously compounded)
- **t** = time to maturity (in years, e.g., 10 months = 10/12)
- **e** = Euler's number (approximately 2.71828)

> **Professor's exam tip:** "In the exam if I ask you to find out the value of a futures contract, because futures contracts are exchange traded, you have to use this formula -- the continuously compounding formula."

Any price other than this F leads to arbitrage, which we proved with the gold example in Session 9. Arbitrageurs would pile in, prices would converge, and equilibrium would be restored.

---

## Hedging with Futures: The Crude Oil Example

### The Setup

An **oil exploration company** must deliver **1 lakh barrels** of crude oil to a refiner in December 2005 (9 months from April 2005) at the **then-prevailing spot price**.

The fear: crude oil prices will **fall** by December. Who bears this risk?

> **Professor:** "The refiner will be happy if prices fall -- they'll buy cheaper. So this is the risk for the explorer."

### The Hedge

To protect against the downside, the exploration company **sells** 1,000 futures contracts on the MCX platform (each contract = 100 barrels, so 1,000 x 100 = 1 lakh barrels). The December futures price is locked at **Rs 2,000 per barrel**. The company deposits only **5% margin** of the total contract value.

Remember: crude oil futures on MCX are **cash settled only** -- no physical delivery through the exchange.

### Scenario 1: Price Falls to Rs 1,900 (Fear Materializes)

A student named Anish nailed this one:

> **Anish:** "There will not be any impact. The actual crude that it will sell will be at 1,900, and their MCX contracts -- there will be a gain of 100. So effective, it nets out."

> **Professor:** "Very good. Anish got it spot on."

Here is how it works:

| Item | Amount per barrel |
|------|-------------------|
| Revenue from refiner (physical market, spot price) | Rs 1,900 |
| Gain on futures contract (sold at 2,000, buy back at 1,900) | Rs 100 |
| **Total effective revenue** | **Rs 2,000** |

In the P&L, it is shown as two line items: **Sales Revenue: Rs 1,900** and **Gain on Futures Contract: Rs 100**. The futures gain is part of **operating income**, not "other income."

Without the hedge, the company would have received only Rs 1,900 per barrel. The futures contract protected the downside.

### Scenario 2: Price Rises to Rs 2,100 (Market Goes the Other Way)

| Item | Amount per barrel |
|------|-------------------|
| Revenue from refiner (physical market, spot price) | Rs 2,100 |
| Loss on futures contract (sold at 2,000, buy back at 2,100) | Rs -100 |
| **Total effective revenue** | **Rs 2,000** |

The exploration company **sold** at 2,000 in the futures market. To square the position (cash settlement), it must **buy** at 2,100. That is a loss of 100 per barrel.

### The Key Takeaway

> **Professor:** "If you enter into a futures contract properly -- a perfect hedge -- you are protected from any downside risk, but you don't get upside."

If the company had stayed unhedged and prices rose to 2,100, it would have pocketed the full 2,100 per barrel. But with the hedge, it is locked at 2,000. **No upside, no downside. That is the nature of futures hedging.**

---

## Pricing Stock Futures: The Dividend Adjustment

### Why Stock Futures Are Different

When you buy a **stock** in the spot market, you receive **all dividends** paid during the holding period. When you hold a **stock futures contract**, you receive **nothing** -- no dividends, no corporate actions. You only own a contract, not the share.

But the futures holder has an **advantage**: they only pay 5% margin money. The remaining 95% can sit in a bank earning interest (the risk-free rate). The spot buyer pays the full price and loses that opportunity.

So there are two forces at play:

| Factor | Effect on futures price |
|--------|------------------------|
| **Opportunity cost saved** (money not blocked) | Pushes futures price **higher** than spot |
| **Dividends lost** (no income from holding the contract) | Pushes futures price **lower** |

> **Professor:** "The difference between owning a stock and owning stock futures is that if I own stock, all dividends I'll receive. If I own stock futures, I lose those dividends. Hence, it's a penalty for waiting."

### The Formula with Dividend (Value-Based)

When dividends are given in **absolute value** (e.g., Rs 0.75 per share):

> **F = (S - I) x e^(r x t)**

Where **I** = present value of all dividends expected during the contract period, discounted using continuous discounting.

### Worked Example: 10-Month Stock Futures

**Given:**
- Spot price (S) = Rs 50
- Risk-free rate (r) = 8% per annum, continuously compounded
- Expected dividends: Rs 0.75 per share after 3 months, 6 months, and 9 months
- Time to maturity (t) = 10 months = 10/12

**Step 1:** Calculate the present value of each dividend using continuous discounting:

| Dividend | Timing | PV Calculation | PV |
|----------|--------|----------------|-----|
| Rs 0.75 | 3 months | 0.75 x e^(-0.08 x 3/12) | Discounted value |
| Rs 0.75 | 6 months | 0.75 x e^(-0.08 x 6/12) | Discounted value |
| Rs 0.75 | 9 months | 0.75 x e^(-0.08 x 9/12) | Discounted value |

Sum of PV of dividends = I

**Step 2:** Apply the formula:

> **F = (50 - I) x e^(0.08 x 10/12)**

The answer: approximately **Rs 51.14**

**Why is futures price higher than spot?** Even after deducting the dividend loss, the opportunity cost advantage (earning risk-free return on unblocked capital) dominates. Futures price will generally be **above** spot price.

> **Professor (scolding a student who used ChatGPT):** "Why do you give it to ChatGPT? You have to do it yourself -- otherwise you don't learn. I'm not asking for a correct answer. I'm asking for your understanding through these examples. Open Excel sheet and do it, not through GPTs."

### The Formula with Dividend Yield

When dividends are expressed as a **percentage yield** (e.g., 2% dividend yield) rather than an absolute number:

> **F = S x e^((r - q) x t)**

Where **q** = dividend yield. You simply subtract the yield from the risk-free rate.

### Why Risk-Free Rate?

A student asked why the formula uses the risk-free rate and not a bank lending rate or some other rate.

> **Professor (getting frustrated):** "We discussed in the last class the concept of risk-free arbitrage. That's why you use risk-free rate. This is the price you get -- F -- which is an arbitrage-free price. If the actual F in the market is more or less than this price, there is an arbitrage opportunity."

The entire pricing logic is built on the **no-arbitrage principle**. The risk-free rate is the benchmark because any deviation from this price creates risk-free profit opportunities.

---

## Commodity Futures: The Storage Cost Factor

### The Gold Problem

A commodity like gold **does not pay dividends**. So there is no "income loss" from holding futures instead of the physical asset. But there is a **different twist**: if you own physical gold, you need to **store it** (bank locker, vault, insurance). That is a real cost.

If you hold gold futures, you **save** that storage cost. So to prevent arbitrage between the physical gold holder and the futures holder, the futures price must be **higher** than the spot price by the amount of the storage cost.

> **Professor:** "To make both the price equivalent, you have to add storage cost to the spot price."

### The Formula with Storage Cost (Value-Based)

> **F = (S + U) x e^(r x t)**

Where **U** = present value of storage costs during the contract period.

Important: You must bring the storage cost to **present value** before adding it to the spot price.

### The Formula with Storage Cost (Percentage-Based)

If storage cost is given as a percentage of the commodity price:

> **F = S x e^((r + u) x t)**

Where **u** = storage cost as a percentage per annum.

### Worked Example: Gold Futures with Storage Cost

**Given:**
- Spot price of gold (S) = Rs 4,500 per gram
- Risk-free rate (r) = 7% per annum, continuously compounded
- Storage cost = Rs 20 per unit, payable after 1 year
- Time to maturity = 1 year

**Step 1:** Find the present value of storage cost using continuous discounting:

> **PV of storage cost = 20 x e^(-0.07 x 1) = 18.647**

A student initially tried discrete discounting (20 / 1.07 = 18.69). The professor corrected:

> **Professor:** "You have to use continuous discounting, not discrete discounting. You have done 1 + r to the power one. No, e to the power minus 0.07."

**Step 2:** Calculate the futures price:

> **F = (4,500 + 18.647) x e^(0.07 x 1) = 4,846.29**

The professor emphasized precision: in futures markets, even the third decimal place matters because trading volumes are enormous.

---

## Forward Contracts: The Customizable Cousin

### How Forwards Differ from Futures

Forward contracts are **conceptually identical** to futures but differ in important structural ways:

| Feature | Futures | Forwards |
|---------|---------|----------|
| **Where traded** | Exchange (e.g., MCX, NSE) | Over-the-counter (OTC), typically with a bank |
| **Standardization** | Standardized (contract size, expiry dates) | Fully customizable (any amount, any date) |
| **Settlement** | Daily mark-to-market + final settlement | Settlement only at maturity |
| **Counterparty risk** | Exchange guarantees (virtually zero) | Bilateral -- either party can walk out |
| **Premium/discount** | No premium; only margin money | Premium must be paid upfront |
| **Governance** | Exchange regulator (SEBI in India) | Contract law; disputes go to court |

> **Professor:** "Futures contracts are 30 days or 60 days. You don't have exactly 45. But in forwards it is possible. That is the first difference."

### The Walk-Out Option

In a forward contract, because there is no exchange guaranteeing performance, **either party can simply not show up**. This creates credit risk, and that is exactly why a **premium** is charged upfront.

> **Professor:** "Suppose I enter into a 45-day forward contract. At the end of the 45th day, if I don't show up, the bank cannot put me in jail. Either I show up or I don't. But the bank has already pocketed the premium."

Think of it this way: if the market moves in your favor, you go to the bank and honor the contract. If it moves against you, you simply walk away and transact in the spot market instead. The bank keeps your premium as compensation.

---

## Forward Contract Pricing: Big F vs. Small f

### Two Key Variables

There are **two different F's** in forward contract math, and confusing them is a common exam mistake:

| Symbol | Name | What it is |
|--------|------|------------|
| **F** (capital) | Forward price | The price at which the forward contract is currently trading |
| **f** (small) | Value of the forward contract | The premium or discount -- the cost of entering the contract |
| **K** | Delivery price | The price you actually pay/receive when the contract is settled |

### Day One: F = K

On the first day you enter a forward contract, the forward price (F) and the delivery price (K) are **the same**. If a bank says "I'll sell you dollars at Rs 97," then both F and K are 97 on day one.

### After Day One: F Changes, K Stays

As time passes, the **forward price (F) changes** every day based on market conditions and the compounding/discounting formula. But **K never changes** -- it is locked in at the contract inception.

The **value of the contract (small f)** emerges from the gap between the current forward price and the locked-in delivery price:

> **f = (F - K) x e^(-r x t)**

This is the premium (if positive) or discount (if negative).

### Worked Example: Forward Contract on a Non-Dividend Stock

**Given:**
- The contract has **6 months** remaining to maturity
- Current spot price (S) = Rs 250
- Delivery price (K) = Rs 240
- Risk-free rate (r) = 10% per annum
- No dividends

**Step 1:** Find the forward price (capital F) -- same formula as futures:

> **F = S x e^(r x t) = 250 x e^(0.10 x 0.5) = 262.82**

**Step 2:** Find the value of the forward contract (small f):

> **f = (F - K) x e^(-r x t) = (262.82 - 240) x e^(-0.10 x 0.5) = 21.70**

The value of 21.70 is the **premium** you would pay today to enter this contract. It represents the present value of the gap between what the contract is currently worth (262.82) and what you are locked in to pay (240).

> **Professor:** "Those of you who got 21.70, you are correct. Please remember this distinction between a capital F and the small f."

---

## Five Corporate Hedging Examples

Having established the theory, the professor walked through **five real-world hedging scenarios** -- three operating companies and two financial institutions.

### Example 1: Skyways Airlines -- Cross-Hedging Jet Fuel (Long Futures)

**The problem:** Skyways Airlines needs **4.2 million gallons** of jet fuel in 3 months. Fuel is **30% of total operating expenses**. Any price spike devastates profitability.

**The complication:** No liquid jet fuel futures contract exists on the exchange. However, **heating oil futures** are available, and heating oil prices move similarly to jet fuel prices.

**The alternative without futures:**

> **Professor to a student:** "What would have been the other alternative? Buy and store. Two problems with this: you have to spend the whole money upfront and you pay storage cost."

**The hedge:**
- Contract size: 42,000 gallons per contract
- Contracts needed: 4,200,000 / 42,000 = **100 contracts**
- Futures price today: 2.50 USD per gallon
- Spot price in 3 months: 2.80 USD per gallon

**Without hedging:** Extra cost = 0.30 x 4,200,000 = **1.26 million USD**

**With hedging:** Gain from futures offsets the higher physical market cost. Net fuel cost stays at approximately 2.50 USD per gallon.

**The catch -- basis risk:** Because this is a **cross hedge** (hedging jet fuel with heating oil contracts), the prices do not move in perfect lockstep. Maybe 90-95% correlation, leaving a small gap. The professor simplified the example assuming a perfect match, but warned:

> **Professor:** "100% match may not happen. There may be a gap of 1 or 2%. Complete hedge is not possible because the way the jet fuel price will change and the heating oil price will change -- not exactly. Maybe 90%, 95% common."

### Example 2: Jaipur Textile Exporter -- Currency Forward (Short Forward)

**The problem:** A Jaipur textile exporter will receive **2 million USD** from a US customer in 6 months. The exporter's costs are all in rupees. If the rupee **appreciates** (strengthens) against the dollar, the exporter gets fewer rupees per dollar.

**Understanding the risk:**

> **Professor to Sida:** "Spot rate today is 84. Spot rate after 6 months is 82.5. Has the rupee depreciated or appreciated?"
>
> **Sida:** "The rupee has appreciated because today it is 84 but after 6 months it is 82.5."
>
> **Professor:** "So rupee appreciation is a good thing or bad thing for this exporter?"
>
> **Jagat:** "Bad news. Because for the same dollar you are now going to receive 1.5 rupees lower."

**The hedge:** The exporter **sells** USD forward to a bank at a forward rate of **Rs 85.2 per dollar**.

| Item | Amount |
|------|--------|
| Forward rate locked | Rs 85.2 per USD |
| Hedged proceeds (2M x 85.2) | Rs 17.04 crore |
| Unhedged proceeds (2M x 82.5 spot) | Rs 16.50 crore |
| **Benefit of hedging** | **Rs 0.54 crore (54 lakh)** |

**Who loses?** Since this is a zero-sum game, the bank loses this time -- it agreed to buy dollars at 85.2 when the market rate is only 82.5. But in practice:

> **Professor:** "Bank also hedges. They get so many buyers and sellers, they club all this, look at their net exposure, and that net exposure they enter into a contract with another bank or some other client."

Banks aggregate exposures from multiple clients (some buying, some selling), net them out, and hedge the residual. They make money on the **bid-ask spread**, not by taking directional bets.

> **Professor on bank accuracy:** "Normally, 90 out of 100 cases, the bank will be correct and the exporter will be wrong, because they trade currencies all the time."

### Example 3: Golden Crust Foods -- Wheat Futures (Long Futures)

**The problem:** A biscuit manufacturer needs **50,000 bushels** of wheat in 4 months for its biscuit lines. Retail prices are already fixed with supermarkets months in advance -- the company **cannot pass on a wheat price spike** to customers.

**The hedge:**
- Contracts needed: 50,000 / 5,000 per contract = **10 contracts**
- Futures price today: 6.00 USD per bushel
- Spot price in 4 months: 6.70 USD per bushel

**Without hedging:** Pay 6.70 per bushel in the physical market.

**With hedging:** Pay 6.70 in the physical market, gain 0.70 from futures. Net cost = **6.00 USD per bushel**.

And if the price falls to 5.50? The company still pays an effective 6.00 -- gain in physical market, loss in futures. Same principle as the crude oil example: **no downside, no upside**.

### Example 4: Meridian Bank -- Bond Portfolio Hedge (Short Futures)

**The problem:** A bank's treasury holds a **100 million USD government bond portfolio** with a **duration of 6 years**. If interest rates rise, bond prices fall, and the portfolio loses value.

**Duration vs. Maturity -- the professor's mini-lesson:**

When a student confused duration with maturity, the professor built the intuition from scratch:

> **Professor:** "In a zero coupon bond, I invest 600 rupees. Next 10 years I get nothing. Not a single penny. I have to wait for the entire 10 years to get anything. That's why duration is same as maturity."
>
> "But in a coupon-paying bond -- 1,000 rupees face value, 10% coupon, 10 years -- total cash received is 2,000 rupees. But 55% of that (1,100) comes only in the 10th year. The other 45% comes earlier. So the average maturity must be less than 10 years. That is the duration concept."

**Duration = weighted average time to get your money back.** For zero-coupon bonds, duration equals maturity. For coupon-paying bonds, duration is always less than maturity because you get cash flows along the way.

**The hedge:**
- Bond portfolio: 100 million USD, duration 6 years
- Interest rate futures: 120,000 USD per contract, duration 8 years
- Contracts to sell: **625**

Why 625 and not simply 100M / 120,000 = 833? Because you are hedging **duration risk**, not face value. The futures contract has a longer duration (8 years) than the portfolio (6 years), so each futures contract provides **more** interest rate sensitivity per dollar. You need **fewer** contracts.

If rates rise by 50 basis points: the portfolio loses value, but the futures position gains by a matching amount. Perfect hedge.

### Example 5: Crescent Bank -- Forward Rate Agreement (FRA)

**The problem:** A bank has committed a **50 million USD fixed-rate loan** that will be drawn down by the borrower over the next 3 months. The bank funded this by borrowing wholesale for 6 months.

The mismatch: the bank **pays fixed 5%** on its borrowing but **receives floating** from the lending side. If the floating rate falls below 5%, the bank's margin evaporates.

**Draw-down explained:**

> **Professor:** "Draw down meaning the bank has sanctioned a loan of 50 million and the borrower can take the loan over next 3 months. Drawing down meaning taking the loan out from the bank account."

**The hedge:** The bank enters a **3 + 9 Forward Rate Agreement (FRA)**.

What does "3 + 9" mean?
- Total coverage period: **9 months** from today
- The rate is fixed **3 months from now** (not today)
- Effective hedging period: months 3 through 9 (6 months of coverage)

> **Professor:** "3 + 9 meaning total period is 6 months. I'm entering into the contract today, but the price will be fixed 3 months from now."

The logic: the bank does not know what floating rate it will receive until the borrower draws down the full loan. By entering a FRA, the bank locks in the rate it will receive starting 3 months from now, protecting its margin regardless of what happens to short-term interest rates.

The professor flagged the FRA as a homework topic, noting it would be explained in detail alongside **swaps** in the next class.

**Who is on the other side?**

> **Student (Monica):** "Who is the other party in these kinds of contracts?"
>
> **Professor:** "Banks dealing with another bank. No retail investors in this space."
>
> **Student (Anish):** "If one bank is hedging, why would the other bank enter?"
>
> **Professor:** "The other bank may have the opposite situation. Their asset may be at a fixed rate, liability may be at a floating rate. They have a mirror image."

---

## Basis Risk: When the Hedge Is Not Perfect

A student named Manish asked about **basis risk** -- a concept from the pre-reading materials.

> **Professor:** "Basis risk happens in a cross hedge. When what you are willing to hedge -- a commodity or share -- does not have a derivative contract with the exact same nature, then you have basis risk."

Basis risk means the spot price movement of your actual exposure is **not fully correlated** with the movement in the futures contract you are using to hedge.

**Indian Oil example:** Indian refineries buy a **basket** of crude oils (Brent, Gulf crude, etc.). No single futures contract matches this exact basket. So they hedge using Brent futures (the predominant component), knowing there is a gap.

| Correlation | What it means | What you do |
|-------------|---------------|-------------|
| 100% | Perfect hedge, no basis risk | Buy exact matching contracts |
| 80% | 1% move in futures = only 0.8% move in your exposure | Buy fewer contracts (80% of full coverage) |
| 60% | Bigger gap | Need to gross up -- buy more contracts to compensate |

> **Professor:** "You can take care of basis risk by adjusting the number of contracts that you buy or sell."

This is exactly what happened in the bank's bond portfolio hedge: the futures duration (8 years) exceeded the portfolio duration (6 years), so the bank needed **fewer** contracts -- 625 instead of 833.

---

## Introduction to Options: The Right Without Obligation

### What Makes Options Different

An option gives the holder **the right but no obligation** to buy or sell a given quantity of a given asset, on or before a given date, at a price agreed upon today.

Read that again. Nearly everything sounds like a futures contract. But the critical phrase is **"right but no obligation."** In futures, both buyer and seller are locked in. In options, the buyer has a **choice**.

> **Professor:** "Option, as by the word -- the term 'option' itself -- meaning it's a choice I have. I may exercise the choice. I may not exercise the choice."

### Key Terminology

| Term | Definition |
|------|------------|
| **Exercise / Strike price** | The pre-agreed price at which you can buy or sell the underlying |
| **Expiry date** | The last date on which the option can be exercised |
| **Exercising** | The act of using your right to buy or sell the underlying at the strike price |
| **European option** | Can only be exercised **on** the expiry date |
| **American option** | Can be exercised **any day** up to and including the expiry date |

In India, all stock options are **American options** -- you can exercise any day before expiry.

### Moneyness: Is This Option Worth Exercising?

The professor walked through a vivid example using Reliance shares to explain **moneyness**:

**Setup:** You buy a Reliance stock option expiring on 27th August 2026. The exercise price is Rs 1,000.

**On 9th July (today):** Spot price = Rs 1,000. Exercise price = Rs 1,000. If you exercise now, no profit, no loss. This is called **At The Money (ATM)**.

**On 20th July:** Spot price rises to Rs 1,200. Exercise price is still Rs 1,000. If you exercise, you buy at 1,000 and can immediately sell at 1,200 -- profit of Rs 200. This is **In The Money (ITM)**.

> **Professor:** "If I exercise on the 20th, I have to pay 1,000 rupees. Exchange is bound to give me one share of Reliance whose market price is 1,200. Take delivery, sell in spot market -- 200 rupees profit immediately."

**On 29th July:** Something bad happens to Reliance. Spot price drops to Rs 950. Exercise price is still Rs 1,000. Why would you pay 1,000 when you can buy at 950 in the open market? You would not. This is **Out of The Money (OTM)**.

| Moneyness | Condition (for a call) | Exercise probability |
|-----------|----------------------|---------------------|
| **ATM** (At The Money) | Spot price = Exercise price | May or may not exercise; wait and see |
| **ITM** (In The Money) | Spot price > Exercise price | High -- there is immediate profit |
| **OTM** (Out of The Money) | Spot price < Exercise price | Low -- cheaper to buy from the open market |

### Calls and Puts: The Two Types

Options come in two flavors:

| Type | What it gives you |
|------|-------------------|
| **Call option** | Right to **buy** the underlying |
| **Put option** | Right to **sell** the underlying |

Each type has two positions:

| Position | Call Option | Put Option |
|----------|------------|------------|
| **Long** (buyer) | Right to buy | Right to sell |
| **Short** (seller/writer) | Obligation to sell | Obligation to buy |

The critical asymmetry:

> **Professor:** "Long guys have all the right but no obligation. The short guy -- the seller -- has all the obligation but no right."

**Long initiates, Short responds.** Long call holders exercise when prices go **up** (buy cheap, sell high). Long put holders exercise when prices go **down** (sell high to the exchange). Short position holders can only wait and respond.

### When Do Long Holders Exercise?

- **Long call:** Exercise when the price goes **up** (buy at low exercise price, sell at high market price)
- **Long put:** Exercise when the price goes **down** (sell at high exercise price, market has fallen)
- If the market is **unfavorable**, long holders simply **do not exercise**. They walk away. Their maximum loss is the premium paid.

### Premium: The Cost of Having a Choice

If the long side has all the rights and the short side has all the obligations, why would anyone take the short position? Because the short side receives the **option premium** upfront.

| Player | Premium is... | Maximum gain | Maximum loss |
|--------|--------------|-------------|-------------|
| **Long** (buyer) | A cost | Unlimited (call) or large (put) | Premium paid |
| **Short** (seller) | Income | Premium received | Unlimited (call) or large (put) |

> **Professor:** "For the long guy, the premium is the maximum loss. For the short guy, the premium is the maximum gain."

### Forwards vs. Futures vs. Options: When to Use What

A student asked which instrument is better for hedging. The professor's practical answer:

| Situation | Best instrument |
|-----------|----------------|
| Standardized commodity/stock, standard time period | **Futures** or **Options** (exchange-traded) |
| Non-standard period (e.g., 45 days), non-standard product | **Forwards** (OTC, customizable) |
| Currency hedging, interest rate hedging | Typically **Forwards** |
| Directional trading, speculation, arbitrage | **Options** |
| Pure hedging (lock in price, no upside/downside) | **Futures** or **Forwards** |

> **Professor:** "For hedging, people don't use options. Options are for arbitrage and speculation -- directional trades. Hedging is mainly through forwards and futures."

---

## Key Formulae

| Formula | Expression | When to use |
|---------|-----------|-------------|
| **Futures price (continuous)** | F = S x e^(r x t) | Exchange-traded contracts; exam default |
| **Futures with dividend (value)** | F = (S - I) x e^(r x t) | Stock futures; I = PV of dividends lost |
| **Futures with dividend yield** | F = S x e^((r - q) x t) | When dividend is given as a yield percentage |
| **Futures with storage cost (value)** | F = (S + U) x e^(r x t) | Commodity futures; U = PV of storage costs |
| **Futures with storage cost (%)** | F = S x e^((r + u) x t) | When storage cost is given as a percentage |
| **Forward price (capital F)** | Same as futures formula | First step in forward valuation |
| **Forward contract value (small f)** | f = (F - K) x e^(-r x t) | Premium or discount to enter the contract |
| **Continuous discounting** | PV = FV x e^(-r x t) | Present value with continuous discounting |

---

## Class Discussion Highlights

**On using AI for calculations:**

> **Professor (to a student who used ChatGPT):** "Have you calculated yourself or have you given it to ChatGPT? You would not have used the word 'I' here -- you would have said 'dividend.' Try to understand, I'm not asking for a correct answer, I'm asking for your understanding. In the exam, if I ask a question, you have to show me the steps."

**On forward contracts being bilateral:**

> **Student:** "Forward is governed by whom? Who will be the governing authority?"
>
> **Professor:** "There is a contracts act, sale of goods and services. You file a case. It's a bilateral contract -- governance means court."

**On quiz strategy (from a student in a different city):**

> **Manish:** "I'm based in a different city and many classes have quizzes with heavy weightage. It's difficult to juggle work and class."
>
> **Professor:** "That's why I'm taking more quizzes -- seven or eight. You only attempt five. Best five count. So you won't miss."

---

## The Recipe Chain

**Session 8** (Buyback + Risk Management intro: IQM framework, three financial risks) --> **Session 9** (Futures mechanics: margins, daily settlement, open interest, arbitrage pricing) --> **Session 10** (Futures pricing with dividends and storage costs, Forward contracts, Five corporate hedging examples, Introduction to options) --> **Session 11** (Options in depth: payoff diagrams, Black-Scholes, put-call parity)

---

## What's Next

- **Session 11:** Deep dive into options -- payoff diagrams for calls and puts, pricing mechanics, and likely the start of option pricing models
- **Homework:** Read the pre-read materials on options (uploaded on LMS). Also read about **Forward Rate Agreements (FRAs)** -- the professor will explain them alongside swaps
- **Quiz alert:** Session 11 will have a quiz on **futures and forwards** (10 minutes). Session 12 will have a quiz on **options**. Best 5 out of 7-8 quizzes count toward the final grade.
