---
sidebar_position: 13
title: "Session 12: Option Pricing and the Hidden Options in Every Balance Sheet"
---

# Session 12: Option Pricing and the Hidden Options in Every Balance Sheet

*From binomial trees to Black-Scholes, and why your company's balance sheet is secretly a portfolio of options*

---

## The Story So Far

Last session, you learned what options are, how their payoffs work, and the elegant equilibrium of put-call parity. You saw that if parity breaks, arbitrage brings it back. But a student asked a sharp question: "How is the call price itself determined?"

That newspaper quotation showed you a call premium and a put premium. But where did those numbers come from? Today, the professor answers that question with two pricing models, then flips the entire balance sheet on its head using option theory. And as a bonus, we get our first taste of swaps -- the last derivative instrument of the course.

> **Professor's opening:** "Today is our 12th session and we have to finish discussing options and then the last instrument which is swap. Good news is there is no quiz today."

---

## Part 1: Option Pricing -- How Do You Calculate the Premium?

When we say "pricing" an option, we mean estimating the **premium** -- the price you pay to buy a call or the price you receive if you sell one. There are two main approaches:

1. **Binomial Option Pricing Model** (also called the risk-neutral probability model)
2. **Black-Scholes Model** (the famous closed-form formula)

Both give you the same answer. They just take different routes to get there.

---

## The Binomial Model: Building Intuition with a Simple Tree

### Setting Up the Problem

Imagine a stock worth **25 today**. In one year, it will either:
- Go **up by 15%** to **28.75**, or
- Go **down by 15%** to **21.25**

(The professor noted the change need not be symmetric -- it could be +10% / -15% or any combination. This example just uses equal percentages for simplicity.)

The risk-free rate is **5%**. The question: what is the premium for an **at-the-money call option** on this stock?

Since the option is at the money, the **exercise price (strike price) is 25** -- equal to the current stock price.

A student asked the natural question: "If the market price is 25 and you are also asking me to pay 25 to buy the share, why should I pay any premium at all? It could be zero."

> **Professor's response:** "There is no intrinsic value but there is time value because you can exercise it one period ahead. If the actual price goes up -- because it can go up -- then it becomes in the money. That's why there is a value."

### The Payoffs at Expiry

At the end of Year 1, there is no time value left. All value is intrinsic:

| Scenario | Stock Price | Call Payoff (max of S - E, or 0) |
|----------|-------------|----------------------------------|
| **Up** | 28.75 | 28.75 - 25 = **3.75** |
| **Down** | 21.25 | Walk away = **0** |

> **Professor:** "On the downside I will not exercise because in the market it is available at 21.25. Why should I pay 25? I will just walk out. Option gives me right but no obligation to buy."

We know the call value at Year 1 (C1). But we need the call value **today** (C0). That is the premium a buyer must pay right now.

---

### Method 1: The Replicating Portfolio

Instead of buying the call option, you create a **levered portfolio** -- borrow money and buy the stock directly. This is called a **replicating portfolio** because its payoffs mirror the option's payoffs.

**The key constraint:** Borrow only as much as you can repay even in the worst case, so you never default.

**Step 1: How much to borrow?**

In the worst case, the stock drops to 21.25. You need to sell the stock and repay the loan. So the loan amount plus interest must not exceed 21.25.

A student initially suggested borrowing 25 (the full stock price). The professor walked through why that fails:

> **"If you borrow 25 at 5% interest, at the end of the year your borrowed amount will be 25 x 1.05 = 26.25. Now suppose the stock price goes down to 21.25 -- will you be able to repay the loan? You'll get 21.25 but have to pay 26 something. You'll default."**

Another student (Abhishek) got it right:

> **Loan amount today = 21.25 / 1.05 = 20.24**

This ensures that at the end of Year 1, your loan obligation (20.24 x 1.05 = 21.25) exactly equals the worst-case stock price. No default.

A student (Jagat) then asked: "If the stock costs 25 and you are borrowing only 20.24, where does the remaining come from?"

> **Professor:** "That money you are putting from your pocket. You borrow 20.24 and you have some cash in your pocket. Both put together, you buy the stock."

**Step 2: Portfolio payoffs at Year 1**

| Scenario | Stock Value | Loan Repayment | Net Payoff |
|----------|-------------|----------------|------------|
| **Up** | 28.75 | 21.25 | **7.50** |
| **Down** | 21.25 | 21.25 | **0** |

**Step 3: Compare portfolio to call option**

| | Replicating Portfolio | Call Option |
|---|---|---|
| Up payoff | 7.50 | 3.75 |
| Down payoff | 0 | 0 |

The replicating portfolio is **twice** the value of the call option (7.50 is double 3.75). So the call is worth **half** the portfolio.

A student (Monica) asked: "Why did we divide by two?"

> **Professor:** "Look at the box. What is the value of my replicating portfolio? 7.5 or 0 max. But what is the value of my call? 3.75 or 0 max. Which is half of the replicating portfolio. 3.75 is half of 7.5."

Monica followed up: "Will it always be half?"

> **Professor:** "No, not always half. You have to see the value of the portfolio and value of call at the end of the expiry and then find out the present value."

**Step 4: Calculate C0 today**

> **Portfolio value today = Stock price - PV of loan = 25 - 20.24 = 4.76**

> **Call value today = Half of portfolio value = 4.76 / 2 = 2.38**

So the at-the-money call premium is **2.38**.

Jagat immediately connected the dots: "That should be the premium!"

> **Professor confirmed:** "That is the premium. To make it risk neutral, meaning arbitrage-free. So instead of buying a call, if I create a similar portfolio, I make no money. This is the same."

---

### Method 2: Risk-Neutral Probability

Instead of constructing a replicating portfolio, you directly calculate the probability of the stock going up or down and use it to price the call.

**Define Q** as the risk-neutral probability of an up-move. The formula (derived by rearranging the spot price equation):

> **Q = (1 + Rf - D) / (U - D)**

Where:
- **Rf** = risk-free rate (0.05)
- **U** = up factor (28.75 / 25 = 1.15)
- **D** = down factor (21.25 / 25 = 0.85)

> **Q = (1.05 - 0.85) / (1.15 - 0.85) = 0.20 / 0.30 = 2/3 (about 67%)**

So there is a **67% risk-neutral probability** the stock goes up and a **33% probability** it goes down.

**Now price the call using the risk-neutral valuation formula:**

> **C0 = (Q x Payoff_up + (1-Q) x Payoff_down) / (1 + Rf)**

> **C0 = (2/3 x 3.75 + 1/3 x 0) / 1.05 = 2.50 / 1.05 = 2.38**

Same answer: **2.38**. Two methods, one result. The risk-neutral method is more direct -- no need to build a replicating portfolio.

### Where Does Q Come From in Real Life?

The professor explained two sources:

1. **Market consensus** -- Institutional traders, hedge funds, and big players form views on whether stock prices will rise or fall. From their collective behavior, you can extract a consensus Q.

2. **Back it out from traded prices** -- You know the call premium from the market. You know the stock price, exercise price, and risk-free rate. The only unknown is Q. Solve for it.

> **Professor's caution:** "Only problem in backing out is you are assuming the traded price to be the risk-neutral price, which may not be the case. The traded price may have noise -- it may be a price to make arbitrage gains. The risk-neutral price is noise-free."

If the risk-neutral price (arbitrage-free) and the traded price of the option differ, that gap is an arbitrage opportunity. Traders will exploit it, and in the long run the traded price converges to the equilibrium level.

---

## The Black-Scholes Model: The Most Famous Formula in Finance

The binomial model works for simple one-period problems. For continuous price movements, there is the **Black-Scholes model** -- a closed-form solution and the most widely used option pricing formula in the stock market.

> **Professor:** "This is the most popular one and most widely used one in the stock market."

The professor made clear: "We are not deriving the formula. It is given. You can use the expression."

### The Formula (European Options Only)

> **C0 = S x N(D1) - E x e^(-rT) x N(D2)**

This is for a **European option** -- one that can only be exercised at expiry, not anytime in between.

Where:

| Symbol | Meaning |
|--------|---------|
| **C0** | Call option value today |
| **S** | Current stock price (spot price) |
| **E** | Exercise (strike) price |
| **r** | Risk-free rate (continuously compounded) |
| **T** | Time to expiry (in years; 6 months = 0.5) |
| **sigma** | Volatility (standard deviation of returns) |
| **N(D1), N(D2)** | Cumulative normal distribution values |

> **D1 = [ln(S/E) + (r + sigma^2 / 2) x T] / (sigma x sqrt(T))**

> **D2 = D1 - sigma x sqrt(T)**

### Breaking Down the Intuition

Do not memorize the formula blindly. Understand what each piece does.

**S/E -- The Intrinsic Value Indicator**

The professor asked: "What does S by E indicate?" After some back and forth, a student (Anish) answered: "If S/E is greater than 1, it is in the money." The professor confirmed: "This is the intrinsic value."

- Higher S (given fixed E) --> higher D1 --> higher C0
- Higher E (given fixed S) --> lower D1 --> lower C0 (costlier to exercise, less attractive)

**The Drift Parameter -- The Heart of D1**

The term **(r + sigma^2/2) x T** in the numerator is called the **drift**. It captures how much the stock price can deviate over time.

Sigma appears **twice** in D1, and this confused a student who asked why they seem to have opposite effects:

> **Professor's explanation:** "These two terms are different. The denominator sigma represents general uncertainty. The numerator sigma-squared represents drift. Drift can be upside or downside."

Here is the key insight about why drift has a **positive** relationship with call value:

> **"Consider a situation where the price can drift by 20%. It can go up by 20% also go down by 20%. Now if it is 20% plus -- that is good news for call because I can buy the same asset at a lower price. But if it is 20% minus, I just walk out. So the negative part of the drift does not affect me. But the positive part of drift gives me benefit. That is why the drift has a positive relationship over time."**

In plain language: volatility is symmetric (equal chance of up or down), but the option payoff is asymmetric (you capture the upside, you ignore the downside). That asymmetry makes volatility your friend when you hold a call.

**Time (T)** -- longer time to expiry means more time for favorable price movements. Higher T means higher C0.

**N(D1) -- The Option Delta (Hedge Ratio)**

N(D1) is the cumulative normal distribution of D1. Physically, it measures how much the option price changes for a 1-unit change in the stock price. The professor compared it to **duration** in bonds -- it is the sensitivity measure for options.

> **"For every one rupee or one dollar change in the share price, how much will be the change in the option premium? It is the sensitivity of option price for a change in the underlying."**

**E x e^(-rT) -- Present Value of the Exercise Price**

Since this is a European option (exercise only at expiry), you will pay E only at maturity. So you discount it back to today using continuous compounding.

**The Overall Physical Meaning**

> **Professor's summary:** "C-not is the expected benefit from buying the stock minus the cost of paying the strike price. The difference is the profit today -- that is the maximum amount of call premium that the seller can charge from me."

Think of the call premium as the **cost of insurance** -- the price of protecting yourself from missing out on the upside.

---

### Black-Scholes Numerical Example: Microsoft Call Option

**Given:**
- Current Microsoft share price (S) = **160**
- Exercise price (E) = **150**
- Time to expiry (T) = **6 months = 0.5 years**
- Risk-free rate (r) = **5%**

The option is **in the money** today (160 > 150), so intrinsic value alone is 10.

**Pop quiz from the professor:** "Will the premium be more than 10, less than 10, or equal to 10?"

Shivangi said "less than 10." Another student said "more than 10." The professor settled it:

> **"It should always be more than 10 because 10 is only the intrinsic value difference. What about the time value? I told you call option premium is composed of two items -- intrinsic value and time value. In the money itself is 10. So if the premium writer sells me at 10, I will gain because I am only paying intrinsic value difference. I am not paying for protection for the next 6 months. So the call premium has to be more than 10."**

And if the call were available at 8? "A lot of people will go and buy the call because by paying 8, you are getting a protection of more than 10 -- an assured return. So everybody will go and buy the call. The demand for call will increase. As demand increases, the price will go up." Arbitrage pushes the price to its equilibrium.

**Scenario 1: Volatility = 30%**

| Input | Value |
|-------|-------|
| Risk-free rate | 5% |
| Time | 0.5 years |
| S | 160 |
| E | 150 |
| Sigma | 30% |
| **D1** | **0.53** |
| **D2** | **0.32** |
| **N(D1)** | **0.70** |
| **N(D2)** | **0.62** |
| **Call Premium** | **~21** |

The premium is **21, not 10**. The extra 11 is time value. Why so much? Because with 30% volatility over 6 months, the stock could rise by roughly 48 more (30% of 160). The downside does not matter -- you walk away. But the upside potential is enormous.

> **Professor:** "So 160 price can go up by 30% which means 48 additional. It can also go down. But going down is not a problem. I will walk out. But going up has a benefit."

**Scenario 2: Volatility = 40%**

Keeping everything else the same but increasing volatility to 40%:

| | 30% Volatility | 40% Volatility |
|---|---|---|
| **Call Premium** | ~21 | **~24.92** |

Higher uncertainty means higher premium. Yes, the downside risk is higher too (40% fall is possible), but you are **protected** -- your maximum loss is the premium you already paid. The upside, however, is now even larger.

### The Three Drivers of Call Premium

| Driver | Effect on Premium | Why |
|--------|-------------------|-----|
| **Intrinsic Value** (S - E) | Higher = Higher premium | More in-the-money means more guaranteed value |
| **Volatility (sigma)** | Higher = Higher premium | More upside potential, downside capped at zero |
| **Time (T)** | Longer = Higher premium | More time for favorable price movement |

> **Critical reminder:** These Black-Scholes values are the **risk-free, arbitrage-free** values -- not necessarily the traded prices. If the market price differs, there is an arbitrage opportunity. "In the long run, the call price will go down to the equilibrium level. In the short run, you may have money to make."

---

## Historical vs. Implied Volatility

A student (Sundep) asked a sharp question: "This Black-Scholes model does not consider current positive or negative news for the stock. The binomial model considers expected future values which perhaps factor in market news. Is Black-Scholes really useful?"

The professor turned the question into a teaching moment by asking a counter-question: **"Is volatility observable?"**

The answer: **No.** In the market, you observe **prices**. From prices, you can calculate **returns**. But volatility? You never directly observe it. You must **estimate** it, and any estimation has bias.

### Two Approaches to Volatility

| Approach | How It Works | What You Get |
|----------|-------------|-------------|
| **Historical volatility** | Use past price data -- simple standard deviation, GARCH models, moving averages | An estimate of sigma to plug into Black-Scholes to find the call premium |
| **Implied volatility** | Take the market's traded call premium, plug in everything else you know (S, E, r, T), solve backwards for sigma | What the market "thinks" volatility will be |

> **Professor's key distinction:** "If your question is to find out call premium, you have to use historical SD. But if your question is -- given the call premium, what is the market thinking about volatility of the stock -- that is implied volatility. You cannot estimate both together in the formula. Only one missing value you can solve for."

On whether news matters: "If market is efficient, price already captures the news. If you say market is inefficient, it takes time to incorporate news in the price -- then you add news to get the volatility. Either way, it is an estimate. It has error."

The professor also mentioned that more sophisticated approaches exist beyond simple standard deviation -- like the **GARCH model** (Generalized Auto-Regressive Conditional Heteroskedasticity), a robust statistical model for estimating volatility. But all of them are fundamentally historical and therefore estimates.

### What Is VIX?

A student (Raab) asked about the VIX index he had read about in the news.

> **Professor:** "VIX is the implied volatility of the market as a whole, not of a single stock. It is a volatility index -- also called a fear index. If the value goes up, it means the market in general is more volatile. It is found using nifty at-the-money options."

---

## Part 2: The Balance Sheet as a Portfolio of Options

This is where option theory transforms from a trading concept into a **corporate finance lens**. The professor asked the class to see the balance sheet in a completely new way.

> **"Now you have a different way of looking at the balance sheet. Earlier you saw balance sheet is a statement of asset and liability and equity. Now you are saying balance sheet is a statement of options."**

### The Big Idea

> **Equity is a call option on firm assets. Debt is a put option.**

Every shareholder is secretly holding a call. Every lender is secretly writing a put. The exercise price in both cases is the value of debt.

### Understanding Through Two Scenarios

Write this down on pen and paper, as the professor instructed:

**Scenario 1:** Asset value (V) = 100, Debt (F) = 80

- Equity = V - F = 100 - 80 = **20** (positive -- shareholders exercise)

**Scenario 2:** Asset value (V) = 100, Debt (F) = 130

- Equity = V - F = 100 - 130 = **-30** ... but shareholders just walk away
- Equity value = **0** (not -30)

A student got this instantly: "20 and zero." The professor responded: "Very good. Rather spot on."

> **Value of Equity = max(V - F, 0)**

This is exactly the payoff of a **call option** where V is the underlying asset price and F is the exercise price.

### Why the Exercise Price Is the Value of Debt

A student struggled with this. The professor used a vivid gate metaphor:

> **"To gain access to the asset, the call option holder has to first clear the gate. What is the gate? The lender is standing there. The lender says: first clear my loan. In situation one, what is the loan amount? 80. It is only after you pay 80 that you can get the remaining 20. So the exercise price is the value of debt."**

In Scenario 2: "Value of the asset is 100. At the gate, the lender is standing with 130 due. Should I exercise? I pay 130 to get a 100 asset. No. What do I do? I just walk out. I leave the asset with the lender."

### What Happens to the Lender?

Now look at the other side:

**Scenario 1:** Lender gets their full 80 back. But do they get any upside? **No.** Their maximum is 80.

**Scenario 2:** Asset is only worth 100, but they are owed 130. They get **100** (the asset value), not 130. They take a loss of 30.

> **Lender's payoff = min(V, F)**

The lender gets the **lower** of asset value or loan amount. They have the downside risk but no upside. This is the profile of someone who has **written a put option** on the firm's assets with an exercise price of F.

The professor asked: "What does writing a put mean?"

A student answered correctly: **"Obligation to buy."**

> **Professor elaborated:** "If shareholders exercise their call -- meaning the value of the asset is higher than F -- they will exercise. The lender has to sell the asset at F. They cannot charge 100 because they took the premium. I have to oblige."

### The Balance Sheet Identity -- Option Version

| Traditional View | Option View |
|-----------------|-------------|
| Assets = Debt + Equity | Assets = Written Put + Long Call |
| Equity is the residual claim | Equity = Call option on assets (strike = F) |
| Debt is the fixed claim | Debt = Risk-free bond minus written put on assets (strike = F) |

---

## Application 1: Valuing Equity and Debt with Option Theory

### The Vertex Retail Example

**Setup:**
- Vertex Retail has assets worth **100 million** today
- Zero-coupon debt of **80 million** due in one year (no interest during the year, to keep it simple)
- The firm is **near distress** -- 80% of asset value is debt
- After one year, asset value goes to either **130 million** (good state) or **70 million** (bad state)
- Risk-free rate: **5%**

**The professor asked:** "At what price will this bond be sold today -- at 80, above 80, or below 80?"

After some back and forth (one student said "at 80," another said "above 80"), the professor walked them through it:

> **"Suppose you are investing in this bond which will pay you 80 after one year. Will you pay 80 or above 80 today to buy the bond? It is zero coupon -- during this one year period you will not receive any interest."**

The answer: **Below 80**. You need a discount to earn a return.

**Step 1: Find the risk-neutral probability**

Using the formula P = (1 + Rf - D) / (U - D):

Where U = 130/100 = 1.30, D = 70/100 = 0.70:

> **P = (1.05 - 0.70) / (1.30 - 0.70) = 0.35 / 0.60 = 0.5833 (about 58%)**

There is a **58% chance** assets go up and a **42% chance** they go down.

**Step 2: Value the equity (call option)**

| Scenario | Equity Payoff |
|----------|---------------|
| Up (assets = 130) | 130 - 80 = **50 million** |
| Down (assets = 70) | Walk away = **0** |

> **Equity value today = (0.5833 x 50 + 0.4167 x 0) / 1.05 = 29.17 / 1.05 = 27.78 million**

**Step 3: Value the debt**

> **Debt value today = Total asset value - Equity value = 100 - 27.78 = 72.22 million**

### The Redrawn Balance Sheet

| | Traditional | Option-Based |
|---|---|---|
| Assets | 100M | 100M |
| Equity | 20M (book value) | 27.78M |
| Debt | 80M (face value) | 72.22M |

> **Professor:** "Your balance sheet is not 100 = 80 + 20. Your balance sheet is 100 = 27.78 equity + 72.22 debt."

**What does this mean for the bond investor?**

They pay **72.22 today** to receive **80 after one year** -- but only if the company survives.

If the company does well (58% chance): Return = (80 - 72.22) / 72.22 = **10.8%**, which is 580 basis points above the risk-free rate.

> **Professor:** "This 10.8% return is an optimistic return provided it goes up. But there is a big if."

If the company fails (42% chance): The lender gets only 70 million back on a 72.22 investment -- a **loss of 2.22 million**. Forget about 5% return -- it is negative.

The risk premium (580 bps above risk-free) compensates for the very real chance of default.

---

## Application 2: Why Distressed Shareholders Love Risky Bets

This is one of the most powerful insights from option theory applied to corporate finance.

### The Setup

Same Vertex Retail company. Assets = 100 million. Debt = 80 million due in one year.

Management can choose between two strategies:

| | Safe Strategy | Risky Strategy |
|---|---|---|
| Good outcome | Assets = 130M | Assets = **160M** |
| Bad outcome | Assets = 70M | Assets = **40M** |

### The Class Debate

The professor asked: "Will distressed shareholders take safer projects or riskier projects?"

This triggered a lively class discussion. Some students said "safer" (to avoid making things worse). Others said "riskier" (to try to escape the hole). The professor pushed back on both sides:

> **Student:** "They will take more risk because anyway if it is going down, they do not have to pay -- the lender has to bear it. And if they gain, they will gain some portion after reducing the debt."

> **Professor:** "They will gain upside -- complete unlimited upside. Because I told you equity shareholders hold a call option on the assets. If it goes up, they gain. If it goes down, they do not lose -- they have lost already. So they just walk out."

### The Numbers Prove It

**Risky strategy calculations:**

P (up) = (1.05 - 0.40) / (1.60 - 0.40) = 0.65 / 1.20 = 0.5417 (54%)

| Scenario | Equity Payoff |
|----------|---------------|
| Up (assets = 160) | 160 - 80 = **80 million** |
| Down (assets = 40) | Walk away = **0** |

> **Equity value today = (0.5417 x 80) / 1.05 = 43.33 / 1.05 = 41.27 million**

**Comparing the two strategies:**

| | Safe Strategy | Risky Strategy | Change |
|---|---|---|---|
| Equity value today | 27.78M | 41.27M | **+13.49M** |
| Debt value today | 72.22M | 58.73M | **-13.49M** |
| Total asset value | 100M | 100M | **0** |

The balance sheet is a **zero-sum game**. Equity gained exactly 13.49 million. Debt lost exactly 13.49 million.

> **Professor:** "Balance sheet is a zero-sum game. If the equity gains, somebody has to lose. Who is losing? The bond holder is losing."

### Why This Is Rational (Not Reckless)

It might **appear** irrational -- why gamble when you are already in trouble? But option theory shows it is perfectly rational:

- Shareholders hold a **call option**. Higher volatility **increases** option value.
- If the risky bet pays off: equity payoff goes from 50M to **80M** in the up state. Massive gain.
- If the risky bet fails: equity is **0** in both cases (safe: assets at 70, risky: assets at 40). The shareholder's loss is the same -- zero.

Heads I win big, tails I lose nothing extra.

> **Professor:** "It might appear irrational but actually is not irrational. They understand the option theory. They behave that way to maximize the value of the option."

### Why Lenders Put Covenants in Loan Agreements

This is precisely why loan agreements contain **covenants** -- restrictive clauses on what borrowers can do:

> **Professor:** "That is why lenders, on their term sheet when they lend money, they sign terms and conditions. In that they mention: without my consent, if my loan is not yet repaid, if you want to make any major investment, my consent is required. Because I know that if you take a risky bet, I will lose -- you will get at my cost."

Covenants exist because lenders understand that once the money is lent, shareholders have every incentive to gamble with it.

---

## Application 3: M&A as a Real Option (The Pharma Example)

### The Setup

A pharmaceutical company wants to acquire a biotech company whose value depends on a **Phase 3 clinical trial**:
- If the trial **succeeds**: company value = **200 million**
- If the trial **fails**: company value = **40 million**
- Current asking price: **100 million**

**Option A: Buy now at 100 million**

NPV = 100 million (asset value) - 100 million (price) = **Zero NPV**. Not exciting.

**Option B: Stage the acquisition**

The pharma company pays **20 million now** for an exclusivity clause -- a **no-talk agreement** (the biotech cannot negotiate with anyone else). If the trial succeeds, the pharma pays an additional **100 million** to complete the acquisition.

> **Professor:** "I will wait but I will pay you a token amount so that you do not talk to anybody else. This is for exclusive. This is also called a no-talk clause."

This is a **call option** on the biotech company:
- **Premium paid today:** 20 million (the exclusivity fee)
- **Exercise price:** 100 million (the additional payment if the trial succeeds)
- **Underlying asset:** The biotech company's post-trial value

### Valuing the Option

Using risk-neutral pricing:

P (up) = 0.4063 (about 40% chance of trial success)

If the trial succeeds, the payoff = 200 - 100 = **100 million** (you pay 100 to access a 200-value company).
If it fails, the payoff = **0** (walk away, losing only the 20 million already paid).

> **Option value today = (0.4063 x 100) / 1.05 = 40.63 / 1.05 = 38.69 million**

> **Net value = Option value - Premium paid = 38.69 - 20 = 18.69 million**

### The Value of Flexibility

| Approach | Total Paid | NPV |
|----------|-----------|-----|
| Buy today at 100M | 100M | **0** (zero NPV) |
| Stage: 20M now + 100M later | 120M total | **+18.69 million** |

Notice something remarkable: you actually pay **more in total** (120 vs. 100), yet the NPV is **positive at 18.69 million**. How? Because you have the **option to walk away** if the trial fails. That flexibility has value.

> **Professor:** "This 18.69 is called the value of flexibility. The flexibility that I can wait for one year -- that has a value. If you wait, your investment becomes a positive NPV project. If you do not wait, zero NPV."

### What Are Real Options?

When the underlying asset is a **real asset** (a company, a drug pipeline, a coal mine, an R&D lab) rather than a financial asset (a stock), the options are called **real options**.

> **Professor:** "Real option meaning the underlying is a real asset. It may be a coal mine. It may be an R&D lab of a pharma company. It may be an actual operating company I am buying. You can apply the same option theory but then it is called a real option, not a financial option. But conceptually they are the same."

---

## Application 4: Government Guarantee as a Put Option

### The Setup

Same Vertex Retail. Assets = 100 million. Debt = 80 million due in one year.

Now suppose a **government or parent company** guarantees the debt: "If Vertex cannot repay the full 80 million, we will cover the shortfall."

- Good state (assets = 130): Vertex repays 80 in full. Guarantor pays **nothing**.
- Bad state (assets = 70): Vertex can only pay 70. Guarantor pays the **10 million shortfall**.

> **Guarantor's payoff = max(F - V, 0) = max(80 - 70, 0) = 10 million**

This is exactly the payoff of a **put option** on the firm's assets with an exercise price of 80 million. The guarantor has **written** this put.

### Impact on Bond Pricing

| | Without Guarantee | With Guarantee |
|---|---|---|
| Bond price today | 72.22M | **76.19M** |
| Return if good state | 10.8% | ~5% (near risk-free) |

With the guarantee, the bond becomes nearly risk-free. An investor pays **76.19 today** to receive **80 after one year** -- a return close to the 5% risk-free rate.

The professor confirmed this with the class: "I put 76.19 and I get 80 after one year, what is your return?"

A student calculated: "About 5%."

> **Professor:** "Which means you are still getting the risk-free rate -- slightly above risk-free rate. Although not 10% -- because you are paying more premium, 76, to buy the bond which will mature at 80."

The guarantee has eliminated almost all of the credit risk premium. The difference between the two bond prices (76.19 - 72.22 = **3.97 million**) represents the value of the guarantee -- the implicit "put premium."

---

## Part 3: Introduction to Interest Rate Swaps

With options complete, the professor introduced the **last derivative instrument** of the course: the interest rate swap (IRS).

### What Is a Swap?

The English word "swap" means exchange. In an interest rate swap, **two parties exchange interest payments** -- one pays fixed, the other pays floating. The **principal amount is never exchanged**; it is only used to calculate the interest amounts.

> **Professor:** "The principal is called notional principal. The principal is never exchanged. It is used to calculate the interest amount that is exchanged."

### Why Would You Swap?

Imagine you have a floating rate loan, but you want certainty. Your bank says: "You signed up for floating -- deal with it."

What do you do? You go to the **swap market** (an OTC market) and find a counterparty:

- **You pay fixed** to the counterparty
- **You receive floating** from the counterparty
- **You pay floating** to your original lender (this cancels with the floating you received)

**Net effect:** Floating in, floating out -- cancelled. You are now paying a **fixed rate**. You have synthetically converted a floating loan into a fixed loan.

### The Bank Asset-Liability Mismatch

The most common real-world motivation for swaps:

| | Asset Side (Loans Given) | Liability Side (Deposits Taken) |
|---|---|---|
| Interest type | **Fixed** (borrowers pay fixed rate) | **Floating** (deposits reprice every 3-6 months) |
| Problem | If rates rise, deposit costs rise, but loan income stays flat | Margin gets squeezed |

> **Professor:** "For a bank there is a problem that on the asset side, the asset is giving them fixed rate of return. The liabilities are going for floating rate of cost."

The bank cannot go to its existing borrowers and say "from tomorrow, pay floating." Instead, it enters a swap with a **third-party counterparty** to synthetically convert one side. Either convert liabilities to fixed (fixed and fixed) or convert assets to floating (floating and floating).

### How Swap Differs from FRA

A student asked how swaps differ from Forward Rate Agreements (FRAs). The professor drew a clear line:

> **"FRA is: I have to borrow money 3 months from now for 6 months, and I want to fix the rate today for that future period. Swap is different -- it is converting one type of interest to another type, fixed to floating or floating to fixed, starting today."**

Another student pushed: "But sir, in a way it is protection, right?"

> **Professor:** "Swap is not for protection. Swap is converting. I am not protecting a particular interest rate. I am hedging against my other leg of interest."

### Three Objectives of Interest Rate Swaps

| Objective | Explanation |
|-----------|-------------|
| **Asset-liability management** | Match the interest type on both sides of the balance sheet (fixed-fixed or floating-floating) |
| **Lower borrowing cost** | Two parties with different comparative advantages swap to reduce costs for both (covered in next session) |
| **Alter portfolio duration** | Change the interest rate sensitivity of a bond portfolio |

### How Swap Quotes Work

In the OTC swap market, **market makers** quote two fixed rates against a floating benchmark (LIBOR internationally, MIBOR in India):

| | Rate | What It Means |
|---|---|---|
| **Bid rate** | 6.02% | Market maker **pays** you 6.02% fixed and **receives** floating from you |
| **Offer rate** | 6.08% | Market maker **receives** 6.08% fixed from you and **pays** floating to you |
| **Spread** | 0.06% (6 bps) | Market maker's profit margin |
| **Swap rate** | 6.05% | Midpoint of bid and offer |

The floating rate (LIBOR/MIBOR) cancels out between the two legs. The market maker earns **6 basis points** on the notional principal as their margin.

### Swap vs. Loan Buyout

A student asked: "If someone calls me and offers to take over my mortgage loan at a lower interest rate, is that a swap?"

> **Professor:** "No, that is a buy and sell of the loan. In that case you are exchanging the principal. Here principal is notional -- there is no exchange of principal. Only the interest is exchanged. And what happens is a net settlement -- it is not that I pay 100 and you pay me 99. The difference is settled."

---

## Key Formulae

| Formula | Expression |
|---------|-----------|
| **Replicating Portfolio Call Price** | C0 = (Portfolio Value Today) x (Call/Portfolio ratio at expiry) |
| **Risk-Neutral Probability (Q)** | (1 + Rf - D) / (U - D) |
| **Binomial Call Price** | (Q x Payoff_up + (1-Q) x Payoff_down) / (1 + Rf) |
| **Black-Scholes Call** | S x N(D1) - E x e^(-rT) x N(D2) |
| **D1** | [ln(S/E) + (r + sigma^2/2) x T] / (sigma x sqrt(T)) |
| **D2** | D1 - sigma x sqrt(T) |
| **Equity (Option View)** | max(V - F, 0) -- a call option on firm assets |
| **Debt Payoff** | min(V, F) -- written put on firm assets |
| **Guarantee Payoff** | max(F - V, 0) -- a put option |
| **Swap Rate** | (Bid rate + Offer rate) / 2 |

---

## The Recipe Chain

**Futures Hedging** (duration-based contracts to offset portfolio risk) --> **FRA** (fixing future borrowing rates) --> **Options Basics** (asymmetric payoff, premium = IV + TV, put-call parity) --> **Option Pricing** (Binomial tree with replicating portfolio, risk-neutral probability Q, Black-Scholes with sigma and drift) --> **Implied Volatility** (back out sigma from market prices, VIX as fear index) --> **Options in Corporate Finance** (equity = call on assets, debt = written put, exercise price = face value of debt) --> **Financial Distress** (shareholders love volatility because call value rises, zero-sum with bondholders, lender covenants as defense) --> **Real Options** (M&A staging as call option, value of flexibility = premium for waiting) --> **Guarantees** (credit support = written put, removes risk premium from bonds) --> **Interest Rate Swaps** (converting fixed to floating or vice versa, notional principal, bid-offer-swap rate)

---

## What's Next

- **Swap valuation** -- how do you calculate the value of a swap? How does converting fixed to floating actually reduce borrowing costs? The professor promised to complete this in the first 30 minutes of the next session.
- **Quiz on Saturday** -- covering options (the pre-read uploaded to LMS). The professor was explicit: "The quiz will be on the pre-read of options. Swaps -- no quiz. Swap is kept reserved for the end-term." Quiz starts at 5:15 PM.
- **After swaps:** The course pivots to its final major topic -- **International Financial Management** (managing finance across borders, currencies, and exchange rate regimes).

---

## The Real-World Takeaway

Forget the formulas for a second. Here is the one habit worth keeping from this entire session: start noticing the "walk away" clause hiding in every decision you make at work.

Think about a new hire you put on a 90-day probation period instead of a permanent contract. Or a vendor contract with a 30-day exit clause instead of a 3-year lock-in. Or a pilot project with a small team before rolling something out company-wide. None of these look like "options" on paper. But every one of them has the same shape as the call option in this session: you pay a small price upfront (the trouble of running a trial, a slightly higher per-unit cost, some management attention) in exchange for the right, not the obligation, to commit fully later -- only if things go well. If they do not go well, you just walk away, and your loss is capped at that small price you already paid.

The professor's pharma example is the whole lesson in one line: paying 20 million now plus 100 million later (total 120 million) beat paying 100 million upfront today, even though it cost more in total, because the staged version let the buyer walk away if the trial failed. That is counterintuitive the first time you hear it -- more total spend, more value -- but it clicks once you see that flexibility itself is worth something, and it is worth more, not less, when the future is uncertain. A calm, predictable business does not need many escape hatches. A volatile, unpredictable one needs them badly. So the next time someone says "let's just commit fully now, waiting is wasteful," remember that waiting has a price tag, and sometimes it is the smartest money you will spend all year.

Use this lens whenever you are the one designing the deal, not just reacting to it:

- **Hiring or vendor contracts** -- push for a trial period or a shorter renewal cycle instead of a long lock-in, especially when you are unsure how the relationship will play out. You are buying yourself a cheap call option on a much bigger commitment.
- **Staged investments** -- when launching a new product, market, or feature, release a small pilot first and reserve the right to scale up later, rather than betting the full budget on day one.
- **Reading the other side's incentives** -- if you are ever lending money, co-signing, or extending credit to someone under financial pressure (a struggling business unit, a distressed client, even a friend's startup), remember they now have every incentive to swing for the fences, because their downside is already capped and yours is not. That is exactly why contracts have covenants, approval limits, and spending caps -- build those guardrails in before you hand over the money, not after.
- **Negotiating exit clauses** -- whenever you sign anything long-term (a lease, a partnership, a software contract), ask what it costs to add an exit or renegotiation clause. That clause is a put or call option, and in an uncertain world it is almost always worth the extra cost.

**The one-liner to remember:** uncertainty does not just create risk -- it creates the value of being able to change your mind, so always know what it costs you to keep that door open.
