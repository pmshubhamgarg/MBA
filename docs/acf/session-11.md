---
sidebar_position: 12
title: "Session 11: Options - The Insurance Contracts of Finance"
---

# Session 11: Options - The Insurance Contracts of Finance

*From hedging bank portfolios to the elegant logic of put-call parity*

---

## Quick Recap: Bank Hedging with Interest Rate Futures

Before we jump into options, let's close the loop on the bank hedging problem from last session.

### The Setup

A bank holds a **100 million USD bond portfolio** with a **duration of 6 years**. The fear? Interest rates rise, and bond prices fall. That inverse relationship between interest rates and bond prices is the enemy here.

The bank decides to hedge using **interest rate futures** — each contract is worth **120,000 USD** with an **8-year duration**.

### Calculating the Hedge

If interest rates rise by **50 basis points** (0.50%):

- **Portfolio loss** = 100M x 6 (duration) x 0.005 = **3 million USD**
- **Each futures contract gains/loses** = 120,000 x 8 (duration) x 0.005 = **4,800 USD**

How many contracts does the bank need?

> **Hedge Ratio (H) = Portfolio Loss / Per Contract Change = 3,000,000 / 4,800 = 625 contracts**

The bank **shorts 625 futures contracts**. If rates rise by 50 bps, the portfolio loses 3 million USD, but the 625 short futures positions gain exactly 3 million USD. Perfect offset.

This is called the **duration-based hedge ratio** because the sensitivity of both the portfolio and the futures contract is measured through duration. Duration tells you how much a bond's price moves for a given change in interest rates — and the hedge ratio uses both durations to find the right number of contracts.

---

## FRA 3+9: Fixing Your Borrowing Rate in Advance

### The Story

A bank has promised a corporate client a loan of **50 million USD**. The client will draw the money **3 months from now** and repay it **6 months later** (that's 9 months from today). The bank itself needs to borrow this money from the interbank market at month 3.

The problem? The bank doesn't know what interest rates will be 3 months from now. If rates spike, the bank's borrowing cost goes up, and the loan becomes unprofitable.

### The Solution: A Forward Rate Agreement

The bank buys a **3+9 FRA at 5%** for 50 million USD.

What does "3+9" mean?

- **3** = the agreement kicks in 3 months from now
- **9** = the underlying loan matures 9 months from now
- So the borrowing period is **6 months** (from month 3 to month 9)

The FRA locks in the borrowing rate at **5% per annum** today.

### What Happens at Month 3?

Suppose the market rate has risen to **6%**.

**Without the FRA:**
- Interest on 50M at 6% for 6 months = 50M x 0.06 x 0.5 = **1.5 million USD**

**With the FRA (locked at 5%):**
- Interest at the locked rate = 50M x 0.05 x 0.5 = **1.25 million USD**
- **Saving = 250,000 USD**

### The Settlement Mechanism

The counter-bank doesn't wait until month 9 to pay the 250,000. It pays the **present value** at month 3:

> **PV of Saving = 250,000 / (1 + 0.06 x 0.5) = 250,000 / 1.03 = 242,718 USD**

The bank receives **242,718 USD** at month 3. It puts this amount in a fixed deposit at the prevailing 6% market rate. By month 9:

> **242,718 x (1 + 0.06 x 0.5) = 242,718 x 1.03 = 250,000 USD**

The money grows to exactly 250,000 — perfectly compensating for the higher borrowing cost.

### Key Points About FRAs

- The **50 million USD is notional principal** — it is never exchanged between the parties. Only the interest difference is settled.
- FRAs are **OTC instruments** — customized between two banks, not traded on an exchange.
- Settlement happens at the **start** of the borrowing period (month 3), not at the end (month 9).

---

## Options: A New Way to Manage Risk

### From Futures to Options

In futures and forwards, both parties are **obligated** — if you enter a futures contract, you *must* follow through. In options, one party has a **right** and the other has an **obligation**. This asymmetry is what makes options special.

Think of options like **insurance contracts**. You pay a premium upfront. If nothing bad happens, you lose the premium. If something bad happens, the insurance pays out. The premium is the price of protection.

> **In futures, you pay margin — a deposit that gets returned. In options, you pay premium — it's gone forever, like an insurance premium.**

### The Two Types

| Type | What It Gives You | Analogy |
|------|-------------------|---------|
| **Call Option** | Right to **buy** at a fixed price | "I want the right to buy this house at 50 lakh anytime in the next 3 months" |
| **Put Option** | Right to **sell** at a fixed price | "I want the right to sell my shares at 500 anytime in the next month" |

### The Two Players

| Player | Also Called | Position | Role |
|--------|------------|----------|------|
| **Buyer** | Holder | **Long** | Pays premium, gets the **right** |
| **Seller** | Writer | **Short** | Receives premium, takes the **obligation** |

### The Four Combinations

| Position | What It Means |
|----------|---------------|
| **Long Call** | Right to buy — you benefit if price goes UP |
| **Short Call** | Obligation to sell — you benefit if price stays DOWN or flat |
| **Long Put** | Right to sell — you benefit if price goes DOWN |
| **Short Put** | Obligation to buy — you benefit if price stays UP or flat |

> **Professor's insight:** "The short guy always has a better understanding of the market movement. If you are not a seasoned informed trader, never ever go on the short side."

---

## The Broker's Office: A Real Story

The professor once visited a large brokerage firm in Mumbai. He walked into a room with about 20 people, all writing (selling) call options. The boss of the desk was sitting calmly. Instead of watching market data on his screen, he had switched to **World Cup cricket highlights**.

Why? Because when you're writing calls, you're betting the market won't go up much. These were seasoned traders so confident in their market view that they didn't even need to watch the ticker. They had already placed their bets and were collecting premiums.

That's the writer's world — **supreme confidence in market direction**.

### Naked Calls: The Danger Zone

A **naked call** means writing a call option **without holding the underlying shares**. If the stock rockets up, you have to buy it at market price and sell it at the lower exercise price. Your loss is theoretically **unlimited**.

This is so dangerous that **naked calls are banned in India**. You can only write covered calls — where you already own the shares.

> **Professor's warning on Cat 3 funds:** "Mutual funds can only go long... only alternative investment fund CAT 3 can short."

### The Asymmetry of Options

| | **Buyer (Long)** | **Writer (Short)** |
|---|---|---|
| **Maximum Loss** | Premium paid (limited) | Unlimited |
| **Maximum Gain** | Unlimited | Premium received (limited) |
| **When profitable** | Big market moves in their direction | Market stays flat or moves slightly against the buyer |

---

## Payoff Diagrams: Seeing the Logic

### Long Call Payoff

Imagine you buy a call option with an exercise price of **100** and pay a premium of **10**.

- If the stock ends at 90: you don't exercise. Loss = **10** (premium only).
- If the stock ends at 100: still don't exercise. Loss = **10**.
- If the stock ends at 110: exercise, buy at 100, stock worth 110. Gain = 10. Net = **0** (breakeven).
- If the stock ends at 130: exercise, buy at 100, stock worth 130. Gain = 30. Net = **20** profit.

> **Long Call Payoff = max(ST - E, 0)**
>
> **Long Call Profit = max(ST - E, 0) - C**

Where **ST** is the spot price at expiry, **E** is the exercise price, and **C** is the premium paid.

The payoff line is flat at zero below the exercise price (you just walk away), then slopes upward at 45 degrees above it.

### Long Put Payoff

Now imagine you buy a put option with exercise price **100** and premium **8**.

- If the stock ends at 120: you don't exercise. Loss = **8** (premium).
- If the stock ends at 100: don't exercise. Loss = **8**.
- If the stock ends at 92: exercise, sell at 100, stock only worth 92. Gain = 8. Net = **0** (breakeven).
- If the stock ends at 70: exercise, sell at 100, stock worth 70. Gain = 30. Net = **22** profit.

> **Long Put Payoff = max(E - ST, 0)**
>
> **Long Put Profit = max(E - ST, 0) - P**

### Short Call and Short Put

The writer's payoff is the **mirror image** of the buyer's — literally flip the buyer's diagram upside down.

- **Short Call:** Maximum gain = premium received. If the stock skyrockets, the writer faces unlimited losses.
- **Short Put:** Maximum gain = premium received. If the stock crashes to zero, the writer must buy at the exercise price — maximum loss = exercise price minus premium.

| Position | Max Gain | Max Loss | Breakeven |
|----------|----------|----------|-----------|
| **Long Call** | Unlimited | Premium (C) | E + C |
| **Short Call** | Premium (C) | Unlimited | E + C |
| **Long Put** | E - P (if stock goes to 0) | Premium (P) | E - P |
| **Short Put** | Premium (P) | E - P (if stock goes to 0) | E - P |

---

## Moneyness: Is Your Option Worth Exercising?

**Moneyness** tells you whether an option has intrinsic value right now — whether exercising it today would make money.

### For a Call Option (Right to Buy)

| Condition | Moneyness | What Happens |
|-----------|-----------|-------------|
| Spot Price **&gt;** Exercise Price | **In the Money (ITM)** | You exercise — buy cheap, stock is worth more |
| Spot Price **=** Exercise Price | **At the Money (ATM)** | Indifferent — no gain from exercising |
| Spot Price **&lt;** Exercise Price | **Out of the Money (OTM)** | You walk away — why buy at a higher price? |

### For a Put Option (Right to Sell)

| Condition | Moneyness | What Happens |
|-----------|-----------|-------------|
| Spot Price **&lt;** Exercise Price | **In the Money (ITM)** | You exercise — sell at a price higher than market |
| Spot Price **=** Exercise Price | **At the Money (ATM)** | Indifferent |
| Spot Price **&gt;** Exercise Price | **Out of the Money (OTM)** | You walk away — why sell at a lower price? |

Think of it simply: **"In the money" means the option is currently profitable to exercise. "Out of the money" means it's worthless right now.**

---

## Premium = Intrinsic Value + Time Value

The premium you pay for an option has two components:

> **Premium = Intrinsic Value (IV) + Time Value (TV)**

### Intrinsic Value

This is the option's **moneyness** — how much it would be worth if exercised right now.

- For a call: **IV = max(Spot Price - Exercise Price, 0)**
- For a put: **IV = max(Exercise Price - Spot Price, 0)**
- An out-of-the-money option has **zero intrinsic value**.

### Time Value

This is the **extra amount** the market charges because there's still time for the stock to move favorably. The more time until expiry, the higher the time value.

> **Time Value = Premium - Intrinsic Value**

Time value reflects **hope** — the possibility that an out-of-the-money option could become in-the-money before expiry, or that an in-the-money option could become even more profitable.

---

## Reading Option Quotations: The IBM Example

Let's look at real option prices to see these concepts in action. IBM shares are trading at **138.25**.

### October Expiry Options (Strike Price: 130)

| | Premium | Intrinsic Value | Time Value |
|---|---|---|---|
| **Call** (right to buy at 130) | 15.25 | 8.25 (138.25 - 130) | **7.00** |
| **Put** (right to sell at 130) | 5.25 | 0 (out of the money) | **5.25** |

The call is **in the money** — the stock (138.25) is above the strike (130). Its intrinsic value is 8.25. But the premium is 15.25 — that extra 7.00 is pure time value.

The put is **out of the money** — why would you sell at 130 when the stock is worth 138.25? So its intrinsic value is zero. The entire 5.25 premium is time value.

### January Expiry Call (Same Strike: 130)

| | Premium | Intrinsic Value | Time Value |
|---|---|---|---|
| **Call** (January) | 19.50 | 8.25 | **11.25** |
| **Call** (October) | 15.25 | 8.25 | **7.00** |

Same intrinsic value (the stock price and strike haven't changed), but the January call costs **4.25 more**. Why? Three extra months of time value. More time = more possibility for the stock to move further up = more value.

### What Option Prices Tell You About Market Sentiment

Here's a subtle but powerful insight:

> **If call premium &gt; put premium for the same strike and expiry: the market expects the price to go UP.**
>
> **If put premium &gt; call premium: the market expects the price to go DOWN.**

In the IBM example, the call premium (15.25) is much higher than the put premium (5.25). The market is bullish on IBM.

---

## Put-Call Parity: The Elegant Equation

### The Core Idea

Put-call parity says that two different portfolios should give you the **exact same payoff** at expiry. If they don't, there's free money on the table — an arbitrage opportunity.

### The Two Portfolios

**Portfolio A: Stock + Long Put**
- You own the stock and buy a put option (insurance against the stock falling)

**Portfolio B: Cash + Long Call**
- You hold cash equal to the present value of the exercise price and buy a call option

At expiry, both portfolios are worth the same regardless of where the stock ends up. Let's prove it:

**If stock goes UP (ST &gt; E):**
- Portfolio A: Stock is worth ST + Put expires worthless = **ST**
- Portfolio B: Cash grows to E + Call exercised for (ST - E) = **ST**

**If stock goes DOWN (ST &lt; E):**
- Portfolio A: Stock is worth ST + Put exercised for (E - ST) = **E**
- Portfolio B: Cash grows to E + Call expires worthless = **E**

Same payoff in both scenarios. Therefore:

> **Put-Call Parity: P + S = C + PV(E)**
>
> Where **P** = put premium, **S** = stock price, **C** = call premium, **PV(E)** = present value of exercise price

If this equation doesn't hold, you can make risk-free profit.

---

## Put-Call Parity Arbitrage: A Numerical Example

### The Given Data

- Call premium (C) = **3**
- Stock price (S0) = **31**
- Time to expiry (T) = **0.25 years** (3 months)
- Risk-free rate (r) = **10%**
- Exercise price (E) = **30**
- Put premium (P) = **2.25**

### Step 1: Check if Parity Holds

**Left side (Portfolio A):** S + P = 31 + 2.25 = **33.25** (cost to build)

But we need to think about the net investment. To go long Portfolio A, you buy the stock (pay 31) and buy the put (pay 2.25). Total outflow = **33.25**.

**Right side (Portfolio B):** C + PV(E) = 3 + 30 x e^(-0.10 x 0.25)

> **PV(E) = 30 x e^(-0.025) = 30 x 0.9753 = 29.26**

So Portfolio B = 3 + 29.26 = **32.26**

The two sides are **not equal** (33.25 vs 32.26). Parity is violated. Arbitrage exists!

### Step 2: The Strategy

The rule is simple: **sell (short) the overvalued portfolio, buy (go long) the undervalued portfolio**.

Portfolio A costs 33.25 — it's **overvalued**.
Portfolio B costs 32.26 — it's **undervalued**.

**Short Portfolio A:**
- Write a put option: receive **+2.25**
- Short sell the stock: receive **+31.00**
- Total inflow: **+33.25**

**Long Portfolio B:**
- Buy a call option: pay **-3.00**
- Set aside cash for the exercise: need 29.26 conceptually

Net cash available = 33.25 - 3.00 = **30.25**

Put this **30.25** in a government bond at 10% for 3 months.

### Step 3: What Happens at Expiry?

The bond grows to:

> **30.25 x e^(0.10 x 0.25) = 30.25 x 1.0253 = 31.01**

Now consider two scenarios:

**Scenario 1: Stock price rises to 35**

| Action | Cash Flow |
|--------|-----------|
| Bond matures | +31.01 |
| Put expires worthless (OTM) | 0 |
| Exercise call: buy stock at 30 | -30.00 |
| Return stock to close short sale | Stock returned |
| **Net profit** | **1.01** |

**Scenario 2: Stock price falls to 25**

| Action | Cash Flow |
|--------|-----------|
| Bond matures | +31.01 |
| Call expires worthless (OTM) | 0 |
| Put exercised against you: must buy stock at 30 | -30.00 |
| Return stock to close short sale | Stock returned |
| **Net profit** | **1.01** |

### The Magic

In **both scenarios** — whether the stock goes up or down — you earn approximately **1 USD risk-free profit**. You don't care where the market goes. That's the definition of arbitrage.

> **Professor's key line:** "These are called market neutral portfolios."

This is a **market neutral strategy** — you've stripped out all market risk and locked in a guaranteed profit. It's like earning a fixed deposit return while being exposed to the market on paper. The profit comes not from predicting the market, but from exploiting a pricing inconsistency between the put, call, stock, and the interest rate.

---

## Class Discussion Highlights

### Why Writers Are Dangerous Players

A student asked why anyone would write (sell) options if the loss is unlimited. The professor explained that writers are typically **institutional players** with deep pockets and sophisticated models. They write hundreds of contracts, and on average, most expire worthless — the premiums collected across all contracts more than compensate for the occasional big payout.

Retail investors writing options is like a regular person trying to run an insurance company from their living room — the math might work on average, but one catastrophic event wipes you out.

### Why Is the Settlement at PV in the FRA?

A student questioned why the counter-bank pays the present value (242,718) rather than the full 250,000 in the FRA example. The professor clarified: the saving of 250,000 is realized at month 9, but the settlement happens at month 3. Paying 250,000 at month 3 would be overpaying — because the bank can invest that money for 6 months and earn interest. The present value adjustment ensures **economic fairness** — the bank ends up with exactly 250,000 at month 9 either way.

### Reading Market Sentiment from Option Prices

The professor emphasized that option premiums contain valuable **market intelligence**. If call premiums are systematically higher than put premiums across strikes, the market is bullish. Professional traders and portfolio managers watch these patterns closely — it's the market voting with real money on where prices are headed.

---

## Key Formulae

| Formula | Expression |
|---------|-----------|
| **Duration-Based Hedge Ratio** | Portfolio Loss / Per Contract Change |
| **FRA Settlement** | PV of interest rate difference on notional principal |
| **Long Call Payoff** | max(ST - E, 0) |
| **Long Put Payoff** | max(E - ST, 0) |
| **Long Call Profit** | max(ST - E, 0) - C |
| **Long Put Profit** | max(E - ST, 0) - P |
| **Premium** | Intrinsic Value + Time Value |
| **Call IV** | max(Spot - Exercise, 0) |
| **Put IV** | max(Exercise - Spot, 0) |
| **Time Value** | Premium - Intrinsic Value |
| **Put-Call Parity** | P + S = C + PV(E) |

---

## The Recipe Chain

**Futures Hedging** (duration-based contracts to offset portfolio risk) → **FRA** (fixing future borrowing rates, notional settlement) → **Options** (asymmetric payoff — right vs. obligation, premium as insurance) → **Moneyness** (ITM / ATM / OTM determines exercise decision) → **Premium Components** (IV + TV, time adds value) → **Put-Call Parity** (stock + put = call + cash, violation = arbitrage) → **Market Neutral Strategies** (profit from mispricing, not from market direction)

---

## What's Next

- **Options pricing models** — how do you actually calculate what a call or put should be worth? (Black-Scholes awaits)
- **Greeks** — delta, gamma, theta, vega: the sensitivities that tell you how option prices change with market movements
- **Options strategies** — combining calls and puts to create payoffs tailored to specific market views (straddles, strangles, spreads)
- **Keep in mind:** Put-call parity is the foundation. Every pricing model builds on this equilibrium. If you understand why the two portfolios must be equal, you understand the DNA of options pricing.
