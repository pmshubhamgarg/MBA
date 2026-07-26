---
sidebar_position: 13
title: "Session 12: Option Pricing and the Option Lens on Corporate Finance"
---

# Session 12: Option Pricing and the Option Lens on Corporate Finance

*Pricing options from first principles, then using that lens to see the entire balance sheet differently*

---

## The Big Picture: Why Options Need Pricing

In the last session, we introduced options -- calls, puts, payoff diagrams, and the intuition behind them. But knowing what an option does is different from knowing what it is **worth**. Today we answer: how do you price an option so that neither the buyer nor the writer can make free money?

We build three models -- from the simplest (binomial) to the most powerful (Black-Scholes) -- and then flip the entire framework on its head to see corporate finance through the option lens.

---

## Part 1: Binomial Option Pricing -- The Replicating Portfolio Method

### The Setup

A stock is currently worth **25 USD**. Over the next year, it can either:

- Go **up 15%** to **28.75**, or
- Go **down 15%** to **21.25**

The **risk-free rate** is **5%**. You hold an **at-the-money call option** with exercise price = **25** (same as the current stock price).

**Why would you pay a premium for an at-the-money option?** Because of **time value**. The stock can go up in the future. That possibility has value.

### Step 1: Call Value at Expiry

At expiry, two things can happen:

| Scenario | Stock Price | Call Value (C1) | Logic |
|----------|------------|-----------------|-------|
| **Up** | 28.75 | 3.75 | Exercise: 28.75 - 25 = 3.75 (in the money) |
| **Down** | 21.25 | 0 | Walk out: would lose money exercising (out of the money) |

### Step 2: Build the Replicating Portfolio

The idea is clever: can we create a **levered portfolio** (stock + loan) that gives the exact same payoffs as the call option?

**The portfolio:** Buy the stock, borrow money.

How much to borrow? The rule is: borrow such that you **never default**, even in the worst case. In the worst case (year 1), the stock is worth 21.25, and you need to repay the loan. So the loan repayment at year 1 must not exceed 21.25.

> **Loan amount today = 21.25 / 1.05 = 20.24**

### Step 3: Compare Payoffs at Year 1

| Scenario | Stock Value | Loan Repayment | Portfolio Payoff | Call Payoff |
|----------|------------|----------------|------------------|-------------|
| **Up** | 28.75 | 21.25 | 7.50 | 3.75 |
| **Down** | 21.25 | 21.25 | 0 | 0 |

Look at that. The replicating portfolio payoff is **exactly 2x** the call option payoff in both scenarios. The portfolio and the call are **proportional twins**.

### Step 4: Price the Call

If the replicating portfolio is 2x the call, then the call is worth **half** the portfolio value today.

> **Portfolio value today = Stock (25) - Loan (20.24) = 4.76**

> **C0 = 4.76 / 2 = 2.38**

The call premium is **2.38 USD**. This is the price that makes the market **arbitrage-free** -- neither the buyer nor the writer can make riskless profit.

> **Professor's insight:** "If the call premium is zero, I make money immediately... the writer of the call will not allow me to get that because he's taking the risk."

---

## Part 2: Risk-Neutral Probability Method

### Same Answer, Different Route

Instead of building a replicating portfolio, we find a **probability Q** that makes the expected return on the stock equal to the risk-free rate. This is called the **risk-neutral probability**.

> **Q = (S0 x (1 + Rf) - SD) / (SU - SD)**

Where S0 = current stock price, SU = up price, SD = down price.

Plugging in:

> **Q = (25 x 1.05 - 21.25) / (28.75 - 21.25) = 5.00 / 7.50 = 2/3 (67%)**

> **1 - Q = 1/3 (33%)**

Now price the call as the expected value of payoffs, discounted at the risk-free rate:

> **C0 = (Q x CU + (1 - Q) x CD) / (1 + Rf)**

> **C0 = (2/3 x 3.75 + 1/3 x 0) / 1.05 = 2.50 / 1.05 = 2.38**

**Same answer: 2.38 USD.** Both methods converge because they are mathematically equivalent.

### Where Does Q Come From in Real Life?

Three sources:

1. **Market consensus** -- institutional traders and hedge funds collectively set the Q through their trading activity
2. **Back it out from traded option prices** -- but be careful, the traded price may include noise or arbitrage opportunities
3. **The risk-neutral Q is the arbitrage-free probability** -- the traded price in the market might differ from the theoretical price

---

## Part 3: Black-Scholes Option Pricing Model

### The Elegant Closed-Form Solution

The Black-Scholes model is the most widely used option pricing formula. It gives you a single equation -- no trees, no steps, just plug in and calculate.

> **C0 = S0 x N(D1) - E x e^(-rT) x N(D2)**

This is a **European option** formula (exercise only at expiry, not before).

Where:

> **D1 = [ln(S/E) + (r + sigma^2 / 2) x T] / (sigma x sqrt(T))**

> **D2 = D1 - sigma x sqrt(T)**

- **S0** = current stock price
- **E** = exercise (strike) price
- **r** = risk-free rate (continuously compounded)
- **T** = time to expiry (in years)
- **sigma** = volatility (standard deviation of returns)
- **N(D1), N(D2)** = cumulative normal distribution values (look up from z-table)
- **e^(-rT)** = continuous discounting factor
- **ln** = natural logarithm

### What the Formula Actually Means

Think of it in two parts:

| Component | Meaning |
|-----------|---------|
| **S0 x N(D1)** | Expected benefit of buying the stock |
| **E x e^(-rT) x N(D2)** | Cost of paying the strike price (present value) |
| **C0** | Benefit minus cost = option value |

**N(D1)** has a special name: the **option delta** (also called the **hedge ratio**). It tells you how much the option price changes for a 1-unit change in the stock price.

### How Each Variable Affects Option Value

| Variable | Relationship with C0 | Intuition |
|----------|---------------------|-----------|
| **S0 (stock price)** | Higher S -> Higher C0 | More in the money |
| **E (exercise price)** | Higher E -> Lower C0 | Costlier to exercise |
| **T (time)** | Higher T -> Higher C0 | More time = more chance to go up |
| **r (risk-free rate)** | Higher r -> Higher C0 | PV of strike price falls |
| **sigma (volatility)** | Higher sigma -> Higher C0 | See below -- this is the interesting one |

### Why Volatility Has a Positive Relationship with Option Value

This is counterintuitive. Usually, more risk = bad. But for options:

- **Downside is capped at zero** (you walk out, lose only the premium)
- **Upside is unlimited** (you exercise and keep everything above the strike)

So a 20% volatility (drift) means: the stock could go up 20% (you benefit) or down 20% (you walk out, zero loss beyond the premium). The upside matters, the downside does not. Therefore, **more volatility = more option value**.

Sigma appears in two places in D1:
- **In the denominator** (sigma x sqrt(T)): general uncertainty, inverse relationship
- **In the numerator** (sigma^2 / 2, the drift parameter): positive relationship

The net effect is **positive** -- higher volatility increases the call premium.

### Numerical Example: Microsoft Call Option

**Setup:** 6-month call (T = 0.5), strike price E = 150 USD, current stock S0 = 160 USD (in the money by 10).

| Parameter | Scenario 1 | Scenario 2 |
|-----------|-----------|-----------|
| Volatility (sigma) | 30% | 40% |
| D1 | 0.53 | -- |
| D2 | 0.32 | -- |
| N(D1) | 0.70 | -- |
| N(D2) | 0.62 | -- |
| **C0** | **~21 USD** | **~24.92 USD** |

Two things to notice:

1. **Premium (21) is greater than intrinsic value (10)** -- the extra 11 is **time value**. With 6 months left, the stock can climb higher.

2. **Higher volatility (40%) gives higher premium (24.92 vs 21)** -- confirms our earlier logic. More volatility = more upside potential = pricier option.

**Why can the premium never be less than 10 (the intrinsic value)?** If it were, say 8, then everyone would buy the call at 8 and immediately exercise to pocket 10 -- making 2 in riskless profit. That buying pressure pushes the premium up until arbitrage disappears.

---

## Part 4: Implied Volatility and VIX

### The Missing Input

Look at the Black-Scholes formula. Every input is observable in the market -- stock price, strike price, time to expiry, risk-free rate. Every input **except one**: **sigma (volatility)**.

### Two Ways to Get Sigma

| Method | How | Limitation |
|--------|-----|-----------|
| **Historical Volatility** | Calculate standard deviation from past stock returns (simple SD, GARCH model, etc.) | Past may not predict future |
| **Implied Volatility** | Observe the traded call premium, plug everything else into Black-Scholes, solve backwards for sigma | Depends on traded price being "correct" |

**Key constraint:** You cannot estimate **both** sigma and the call premium simultaneously. You must know one to find the other.

### VIX: The Fear Index

The **VIX** (Volatility Index) is the **implied volatility of the market** as a whole, calculated from at-the-money options on the index (Nifty in India, S&P 500 in the US).

- **High VIX** = market expects large swings = fear and uncertainty
- **Low VIX** = market expects calm waters = complacency

That is why VIX is called the **"fear index."**

### Does Black-Scholes Capture News?

A student asked whether the model considers current news events.

> **Professor's response:** "Price already captures news if market is efficient. If market is inefficient, you add news. Either way, you ESTIMATE volatility -- there will be error."

The model is only as good as the sigma you feed it. And sigma is always an estimate, never a certainty.

---

## Part 5: The Balance Sheet Through the Option Lens

This is where the session takes a sharp turn. Everything we learned about options now gets applied to **corporate finance**.

### Equity = Call Option on the Firm's Assets

Think about it:

- The **underlying asset** is the firm's total asset value (V)
- The **exercise price** is the face value of debt (F)
- Equity holders must **first pay off debt** before they can access the assets

| Scenario | Asset Value (V) | Debt (F) | Equity Value | Logic |
|----------|----------------|----------|-------------|-------|
| **Good times** | 100 | 80 | max(100 - 80, 0) = **20** | Exercise the call, pay off debt, keep the rest |
| **Bad times** | 100 | 130 | max(100 - 130, 0) = **0** | Walk out! Assets cannot cover debt. Equity = zero |

> **Professor's analogy:** "To gain access to the asset, the call option holder has to first clear the gate. The lender is standing at the gate."

The exercise price is the value of debt (F) because you must pay off the lender first before you can claim anything. Just like a call option holder must pay the strike price before owning the stock.

### Debt = Written Put Option on the Firm's Assets

Now look at it from the lender's side:

- Debt holders receive **min(V, F)** -- they get the lesser of asset value or face value
- If V &gt; F: they get F (full repayment, but no upside beyond F)
- If V &lt; F: they get V (whatever is left, taking a loss of F - V)

This is the payoff of a **written (sold) put option**. The debt holder has:
- **Limited upside** (maximum = F, the face value)
- **Full downside** (can lose everything if assets go to zero)

| Stakeholder | Payoff Structure | Upside | Downside |
|-------------|-----------------|--------|----------|
| **Equity holders** | Call option on assets | Unlimited | Zero (walk out) |
| **Debt holders** | Written put on assets | Capped at F | Full (can lose principal) |

---

## Part 6: Financial Distress -- Why Shareholders Love Risky Bets

This is one of the most important insights in corporate finance. It explains why companies in trouble often make things worse.

### Original Scenario (Moderate Risk)

A company has:
- **Assets today:** 100M
- **Zero-coupon debt (F):** 80M, due in 1 year
- **Risk-free rate:** 5%

At year 1:
- **Up market:** Assets = 130M
- **Down market:** Assets = 70M

| Scenario | Assets | Equity Payoff | Debt Gets |
|----------|--------|--------------|-----------|
| **Up** (P = 0.5833) | 130M | max(130 - 80, 0) = **50M** | 80M (full) |
| **Down** (1 - P = 0.4167) | 70M | max(70 - 80, 0) = **0** | 70M (default, loses 10M) |

> **Equity value today = (0.5833 x 50) / 1.05 = 27.78M**

> **Debt value today = 100 - 27.78 = 72.22M**

If a bond investor buys this debt at 72.22M, the potential return is 80 / 72.22 - 1 = **10.8%** -- but only if the company does not default.

### The Risky Bet Scenario (High Volatility)

Now suppose the same company takes on **risky projects**. Same expected value, but much wider range:

- **Up market:** Assets = 160M
- **Down market:** Assets = 40M

| Scenario | Assets | Equity Payoff | Debt Gets |
|----------|--------|--------------|-----------|
| **Up** (P = 0.5417) | 160M | max(160 - 80, 0) = **80M** | 80M (full) |
| **Down** (1 - P = 0.4583) | 40M | max(40 - 80, 0) = **0** | 40M (default, loses 40M) |

> **Equity value today = (0.5417 x 80) / 1.05 = 41.27M**

### The Zero-Sum Revelation

| Metric | Original | Risky Bet | Change |
|--------|----------|-----------|--------|
| Equity value | 27.78M | 41.27M | **+13.49M** |
| Debt value | 72.22M | 58.73M | **-13.49M** |
| Total firm value | 100M | 100M | **0** |

Equity **gained** exactly what debt **lost**. The balance sheet is a **zero-sum game**.

> **Professor's exact words:** "Balance sheet is a zero sum game. If equity gains, debt loses."

### Why This Happens

Shareholders hold a **call option**. Higher volatility increases option value. So shareholders **benefit** from riskier bets:
- Upside goes up (160 vs 130), and they capture all of it
- Downside goes down (40 vs 70), but they don't care -- they walk out at zero either way

Debt holders are on the other side. They hold a **written put**. Higher volatility increases their losses:
- They still get capped at 80M in the good scenario
- But they lose much more (40M vs 70M) in the bad scenario

> **Professor's insight:** "Shareholders take risky bets because they hold a call option -- upside unlimited, downside zero."

### Why Lenders Use Covenants

This is exactly why lenders put **covenants** (restrictive clauses) in term sheets:
- "Without my consent, no major investment"
- "Maintain minimum asset coverage ratio"
- "No additional borrowing beyond a threshold"

Covenants exist because lenders know that once the money is lent, shareholders have every incentive to gamble with it. Covenants are the lender's defense against the option-holder's natural instinct.

> **Professor's words:** "That's why lenders put covenants in term sheets -- 'without my consent, no major investment.'"

---

## Part 7: M&A as a Real Option (Pharma/Biotech Example)

### The Setup

A pharmaceutical company wants to acquire a biotech startup. The biotech company has a drug in **Phase 3 clinical trials** (the final stage before FDA approval).

| Outcome | Probability | Biotech Value |
|---------|------------|---------------|
| **Trial succeeds** | 40% | 200M |
| **Trial fails** | 60% | 40M |

**Expected value today = 0.40 x 200 + 0.60 x 40 = 100M**

### Strategy 1: Buy Today at 100M

If you buy at 100M (the expected value), your NPV = 0. You are paying fair value. No value created.

### Strategy 2: Buy the Option Instead

Instead of buying the entire company today, pay **20M now** for an **exclusivity clause** (a "no-talk" agreement -- the biotech cannot negotiate with anyone else while you hold the option).

- If the trial **succeeds**: exercise the option, pay 100M, get a company worth 200M
- If the trial **fails**: walk away, lose only the 20M premium

**Exercise price = 100M** (the acquisition price if you proceed).

**Option valuation:**

Risk-neutral probability of success (P) = 0.4063.

> **Option value = (0.4063 x 100) / 1.05 = 38.69M**

> **Net value = 38.69 - 20 (premium paid) = 18.69M positive NPV**

That 18.69M is the **value of flexibility** -- the value of being able to wait and see before committing the full 100M.

### What Makes This a "Real" Option?

In financial options, the underlying asset is a stock or bond. In **real options**, the underlying is a **real asset** -- an R&D lab, a factory, a company, a mining lease. The math is the same; the asset is different.

| Feature | Financial Option | Real Option (M&A) |
|---------|-----------------|-------------------|
| Underlying | Stock price | Biotech company value |
| Strike price | Exercise price | Acquisition price (100M) |
| Premium | Option premium | Exclusivity fee (20M) |
| Expiry | Contract expiry | Trial results date |
| Decision | Exercise or walk out | Acquire or walk away |

---

## Part 8: Credit Support / Bank Guarantee as a Put Option

### The Guarantee Changes Everything

Go back to our distressed company: assets 100M, debt 80M, bond value 72.22M (return 10.8%).

Now suppose the **government guarantees** the 80M debt. If the company defaults, the government pays the shortfall.

**Without guarantee:**
- Bond value = 72.22M
- Required return = 10.8% (includes default risk premium)

**With guarantee:**
- Bond value = 80 / 1.05 = **76.19M**
- Required return = ~5% (near risk-free, because guarantee removes default risk)

### The Guarantee is a Written Put

The guarantor (government or bank) is essentially writing a **put option** on the firm's assets:

> **Guarantee payoff = max(F - V, 0)**

- If V >= F: guarantee is not triggered, payoff = 0
- If V &lt; F: guarantor pays the shortfall (F - V)

This is exactly the payoff of a put option with strike price = F. The guarantee "puts" the default risk onto the guarantor, allowing the bond to trade at near risk-free rates.

The value of the guarantee = 76.19 - 72.22 = **3.97M** -- this is the "put premium" that the guarantor is implicitly bearing.

---

## Part 9: Introduction to Interest Rate Swaps

### What is an Interest Rate Swap?

An **Interest Rate Swap (IRS)** is a contract where two parties agree to **exchange interest payments** on a specified principal amount. The principal itself is **never exchanged** -- it is called the **notional principal** and exists only to calculate the interest amounts.

> **Professor's clarification:** "Swap is not for protection. Swap is converting one type of interest to another type."

### Two Basic Structures

| Structure | Party A Pays | Party A Receives |
|-----------|-------------|-----------------|
| **Pay Fixed, Receive Floating** | Fixed rate (e.g., 6%) | Floating rate (e.g., SOFR + spread) |
| **Pay Floating, Receive Fixed** | Floating rate | Fixed rate |

### Purpose 1: Converting Interest Rate Type

A bank's balance sheet often has a **mismatch**:
- **Assets** (loans) earn a **fixed rate** (e.g., home loans at 8.5%)
- **Liabilities** (deposits) pay a **floating rate** (linked to repo rate)

If rates rise, deposit costs go up but loan income stays flat -- the bank gets squeezed. An IRS can **align** the two sides:
- Enter a swap: pay fixed, receive floating
- Now the floating receipts from the swap offset the floating costs on deposits
- The bank's net position is fixed-on-fixed -- matched

### Purpose 2: Reducing Borrowing Cost

Sometimes two companies have different **comparative advantages** in fixed vs floating markets. By swapping, both can end up paying less than they would independently. (This will be explored in detail in the next session.)

### How Swap Quotes Work

A market maker (bank) quotes two rates:

| Quote | Rate | Meaning |
|-------|------|---------|
| **Bid** | 6.02% | Rate the market maker **pays** (fixed) |
| **Offer** | 6.08% | Rate the market maker **receives** (fixed) |
| **Swap Rate** (midpoint) | 6.05% | Reference rate for the market |
| **Spread** | 6 basis points | Market maker's profit margin |

The 6 basis point spread (0.06%) is how the market maker earns revenue -- buying fixed at 6.02% and selling fixed at 6.08%.

### How Swaps Differ from FRAs

> **Professor's distinction:** "FRA is for fixing a future borrowing rate. Swap is for converting existing floating to fixed."

| Feature | FRA (Forward Rate Agreement) | Interest Rate Swap |
|---------|-------|---------------------|
| Purpose | Lock in a **future** borrowing rate | Convert **existing** interest type |
| Duration | Single period | Multiple periods (ongoing) |
| Settlement | One-time payment at start | Periodic net settlements |
| Principal | Notional (never exchanged) | Notional (never exchanged) |

---

## Key Formulae

| Formula | Expression |
|---------|-----------|
| **Replicating Portfolio (Call)** | C0 = (Portfolio Value Today) / Replication Ratio |
| **Risk-Neutral Probability** | Q = (S0 x (1 + Rf) - SD) / (SU - SD) |
| **Call Price (Risk-Neutral)** | C0 = (Q x CU + (1 - Q) x CD) / (1 + Rf) |
| **Black-Scholes Call** | C0 = S0 x N(D1) - E x e^(-rT) x N(D2) |
| **D1** | [ln(S/E) + (r + sigma^2 / 2) x T] / (sigma x sqrt(T)) |
| **D2** | D1 - sigma x sqrt(T) |
| **Equity as Call** | Equity = max(V - F, 0) |
| **Debt Payoff** | Debt gets = min(V, F) |
| **Guarantee Payoff** | Guarantor pays = max(F - V, 0) |

---

## The Recipe Chain

**Binomial Model** (replicating portfolio, risk-neutral Q) -> **Black-Scholes** (closed-form, sigma as key input) -> **Implied Volatility / VIX** (back out sigma from market prices) -> **Option Lens on Balance Sheet** (equity = call, debt = written put) -> **Financial Distress** (shareholders love volatility, zero-sum game) -> **Real Options** (M&A as option, value of flexibility) -> **Guarantees as Put** (credit support = written put) -> **Interest Rate Swaps** (converting interest types, not hedging)

---

## What's Next

- **Next session:** Deep dive into Interest Rate Swaps -- comparative advantage, swap structuring, and numerical examples of how two companies reduce borrowing costs through swapping
- **Key connection:** Swaps complete the risk management toolkit (forwards, futures, options, swaps) -- each tool manages a different type of financial risk
- **Remember:** The option lens is not just theory -- it explains why distressed firms gamble, why covenants exist, and why M&A deals are structured as staged payments rather than upfront purchases
