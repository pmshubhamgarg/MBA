---
sidebar_position: 18
title: "Session 17: Structural Default Models, CAMELS, and the Foundations of DCF Valuation"
---

# Session 17: Structural Default Models, CAMELS, and the Foundations of DCF Valuation

*Closing the book on financial distress — and opening the book on what a company is actually worth*

---

## The Big Picture: Where We Are in the Course

The professor opened by placing this session on the map. Advanced Corporate Finance has three remaining destinations:

1. **Finish financial distress** — specifically, wrap up probability of default (PD) measurement
2. **Valuation** — just a glimpse, because valuation alone could be a 30-hour course; here it gets two sessions
3. **Mergers & Acquisitions** — two sessions, and the course ends

He also gave the class its scorecard:

| Component | Weight |
|-----------|--------|
| Quizzes (best 5 of 7 total) | 50% |
| Group project | 10% |
| Class participation | 10% |
| End-term exam | Remainder (~30%) |

> **Professor:** "We have taken six quizzes. One more quiz will happen, not today, but on the next Saturday — that will be the final quiz."

The end-term exam is scheduled for 16th August. Next class, the course moves into a Harvard case study called **Interco**, but before that case can make sense, the class needed the theory of valuation — which is what this session builds.

Think of this session like the final stretch of a road trip: you finish the last item on the "risk" checklist (can this company survive?), and then you turn to a completely different question (what is this company worth?).

---

## Quick Recap: Two Models for Probability of Default (From Session 16)

Before moving to new material, the professor recapped the two "deterministic" or accounting/market-based PD models covered in the previous session.

| Model | Basis | Output | Works for Banks? |
|-------|-------|--------|-------------------|
| **Altman Z-Score** (1968) | Mostly accounting variables | A **score**, not a probability | No — Altman himself said his variables don't apply to banks |
| **Campbell-Hilscher-Szilagyi (CHS) type model** | Accounting **and** market variables | A true **probability** (PFD) | **Yes** — works for both banks and non-finance companies |

> **Professor:** "This model is applicable equally for non-finance companies like a manufacturing company as well as for financial institutions — same model you can apply. This is a generic model, whereas Altman's model was developed based on non-finance companies, and Altman clearly said you cannot apply my model to estimate probability of default of a bank."

Why does the CHS-type model work for banks when Altman doesn't? Because its variables are things every listed entity has — net income, liabilities relative to assets, market return performance, and market-based ratios — none of which assume a "typical manufacturer" balance sheet.

**The mechanism:** you plug in company-specific numbers (net income/market value of assets, liabilities/market value of assets, 12-month excess stock return, idiosyncratic volatility, log relative size, cash/market value of assets, market-to-book ratio, price) into a formula to get a value called **L**. Then you feed L into:

> **PFD = 1 / (1 + e to the power of negative L)**

Higher L means lower PFD. This is a **logistic function** — the same shape used in logistic regression everywhere.

### The Idiosyncratic Risk Digression: A Class Q&A

One input — **idiosyncratic volatility (sigma)** — needed unpacking, and the professor turned it into a proper Socratic exchange.

A student named Ashokumar correctly said there are two types of risk: systematic and unsystematic (idiosyncratic). But when asked *how do you measure* idiosyncratic risk, several students guessed wrong — "average of standard deviations," or just "standard deviation."

> **Professor:** "No, no. Standard deviation is total risk — systematic plus unsystematic. So how will you find out idiosyncratic volatility?"

A student named Suham got close: compare the stock to the overall market index, and see what part of its movement is not explained by the market. The professor built the full logic from there:

**Step 1:** Calculate the stock's **total variance** (standard deviation squared) from its historical returns.

**Step 2:** Total risk = Systematic risk + Unsystematic risk, where:

> **Total Variance = (Beta squared x Market Variance) + Idiosyncratic Variance**

Why square the beta? Because you are working in variance (squared) terms, not standard deviation terms — you cannot mix a squared measure with an unsquared one.

**Step 3:** Rearranged, idiosyncratic variance is just the leftover:

> **Idiosyncratic Variance = Total Variance − (Beta squared x Market Variance)**

**Step 4 — the practical shortcut:** Run a market model regression over (say) the last 60 months:

> **Return of stock i = Alpha + (Beta x Market Return) + Epsilon**

The **residual (Epsilon)** from this regression is the idiosyncratic component. Take the variance (or standard deviation) of the residuals across all 60 months — that is your idiosyncratic risk. No separate formula is needed once you have run the regression; the leftover noise the market cannot explain **is** the answer.

> **Professor:** "Co-founder leaving, legal case — those are examples of idiosyncratic risk. But here you have to estimate — you're plugging in the number. There's a value."

---

## Structural Models: Merton, KMV, and Distance to Default

With the two "deterministic/accounting" models recapped, the professor introduced a completely different family: **structural models**, which are **stochastic (probability-based)**, not accounting-based. Three names matter here — **Distance to Default**, **Merton**, and **KMV** — and they are all variations on one idea.

> **Professor:** "If you understand distance to default, which is the mother of the models, then Merton and KMV are two variations of it. Merton model is a theoretical model, and KMV is a practical model. KMV was developed by Moody's, so industry uses KMV a lot."

The idea itself comes from **option pricing (Black-Scholes)** — the same lens used earlier in the course.

### The Core Story

Imagine a company standing on a road. Somewhere ahead of it is a cliff — the **default point**. As long as the company has a healthy cushion of distance before that cliff, it is safe. The less cushion it has (or the more it wobbles from side to side, i.e., the more volatile its value), the higher its chance of falling off.

> **Professor:** "The whole idea here is that if the distance to default of a company is way — I am much away from the point of default — the probability of default will be lower. So higher the distance to default, lower is the probability of default."

### Step 1: Find the Default Point (DP)

The **default point** is whether a company can meet its **immediate obligations**.

> **DP = Total Short-Term Debt (financial + operating) + 0.5 x Long-Term Debt**

Why include operating liabilities and not just financial debt? Because — echoing the IBC discussions from earlier sessions — both financial creditors and operating creditors can push a company into insolvency proceedings. And why only **half** of long-term debt?

> **Professor:** "If a long-term [loan] has a 5-year life and it is uniformly repaid, then you know the average life will be the midpoint of the five years. So similar — the value of the loan is the midpoint of the loan value."

### Step 2: Find the Distance to Default (DD) — Simplified Formula

> **DD (simplified) = ln(VA / DP) / (sigma_A x square root of t)**

Where:
- **VA** = market value of the firm's assets (not the balance sheet value!)
- **DP** = default point (from Step 1)
- **sigma_A** = volatility of the asset value
- **t** = time to the obligation (e.g., 1 year)

**Numerator intuition:** VA/DP shows your cushion. If the firm's assets are worth 100 and the default point is 80, you have room — you could sell assets and pay off the debt. The **log transformation** is applied for two reasons:

> **Professor:** "You do log when the numbers are large, to reduce the dimensionality... think about a company like SpaceX or Tesla — their asset value would be trillions of dollars, debt will be in billions. If you divide asset by debt the entire figure could be 10, 20, 30; for another company it could be one or two because size is different. If you take a log transformation... it compresses the dimension. Second — a statistical reason — it makes the series stationary."

**Denominator intuition:** you divide the cushion by the **uncertainty** of the asset value. A high cushion means little if the asset value is highly volatile — it could swing below the default point very quickly.

> **Professor:** "So the default probability is very high... that's why you're dividing by the uncertainty of the asset value."

And why **sigma multiplied by the square root of time**? Because volatility is usually measured over a shorter period (say, monthly), and you need to scale it up (or down) to match the actual time horizon (t) of the obligation — since variance scales linearly with time, standard deviation scales with the square root of time.

> **Professor:** "This month's SD that you get from the monthly return is a monthly standard deviation... from monthly you're doing annual... multiply by the period... 12... So here my t is not annual — t is the time to expiry... the time till which your loan will carry in the balance sheet. So time to default."

### Step 3: Merton's Full Formula — Adding Drift

Merton's model refines the simplified DD by adding a **drift term**:

> **DD (Merton) = [ln(VA / DP) + (mu − 0.5 x sigma_A squared) x t] / (sigma_A x square root of t)**

> **Professor:** "Drift meaning — volatility is a short-term thing, things are going up and down, up and down. Drift is a parallel shift. Suppose a market structure has changed — an industry is growing... from 5% growth to 8% growth. So everybody will grow towards 8%. But some firm within 8% will have volatility. So uncertainty in your denominator is a short-term phenomenon. Drift is a long-term phenomenon."

### Step 4: The Tricky Part — Where Does VA Come From?

This is where the class got stuck. If VA is the **market** value of the firm's assets — not book value — how do you actually estimate it? Several students guessed wrong (balance sheet value, equity price plus debt). Finally, a student named Sashank landed close to the answer, and the professor completed the logic:

> **Professor:** "Value of equity — let us call it VE — is a call option on the value of the asset, where the strike price is the value of debt. Equity value actually is a call value."

This callback to the option-pricing material from earlier sessions (equity as a call option on firm assets, with debt as the strike price) is the key. Since the market gives you the **equity price** directly (for a listed company), and you know the **value of debt** (the strike price — fixed, no optionality there), you can use the **Black-Scholes formula in reverse**: plug in the known equity value and back out the implied **VA** (and its volatility) that would be consistent with that option price.

> **Professor:** "Given the equity price you have the call option value. VA is to be backed out... value of debt — there's no option in the value of debt. It's an exercise price, a fixed amount."

This VA is fundamentally different from a naive "market cap plus debt" figure because it also captures the **volatility of the market value**, not just a single point-in-time number.

### Step 5: Converting DD into a Probability of Default

> **PD = 1 − N(DD)**

Where N(DD) is the **cumulative normal distribution function** evaluated at DD (assuming DD follows a normal distribution). Higher DD means higher N(DD), which means lower (1 − N(DD)) — lower probability of default.

### Worked Numerical Example (Three Scenarios)

**Scenario 1 — the base case:**

| Input | Value |
|-------|-------|
| Asset Value (VA) | 100 million |
| Default Point (DP) | 80 million |
| Sigma (volatility) | 30% |
| Time (t) | 1 year |

> DD = ln(100/80) / (0.30 x square root of 1) = ln(1.25) / 0.30 ≈ **0.74**

> 1 − N(0.74) ≈ **23% probability of default**

> **Professor:** "23% probability of default is very high. No lender will lend with a 23% PD. You need 2%, 1% PD. 23% is very high."

**Scenario 2 — same cushion in absolute terms, but lower uncertainty:**

Both VA and DP move up by the same amount (e.g., VA to 120, DP to 100 — the numerical gap stays the same), **but volatility is lower this time**.

> DD rises to roughly **0.91**, and PD falls to **18%**

> **Professor:** "Because in the second example uncertainty is low, which means you're more certain that the value of asset will be greater than the default point by X amount of money. That's why your distance to default is higher... and PD is lower."

**Scenario 3 — Merton's model, adding a positive drift to Scenario 1's numbers:**

> DD rises to **0.86** (versus 0.74 without drift), and PD falls to **19.5%** (between the 23% and 18% figures above)

> **Professor:** "Positive drift raises the DD... so from 0.74, DD goes up to 0.86, and lowers the probability of default."

### KMV: The Commercial, Calibrated Cousin

Where Merton assumes DD follows a **normal distribution** to compute PD, **KMV (Moody's commercial model)** does something more empirical:

> **Professor:** "KMV is a commercial model — Moody's have commercialized it. What they do is they map the DD with their actual [default data]... they have historical data of past loans taken by companies and those who defaulted. So they looked at all companies which defaulted and all companies who did not default, calculated their DD, and then mapped them with actual [outcomes]... it's a calibrated PD number, not a distribution. They did not fit a normal distribution — they mapped it with the actual default probabilities."

| Feature | Merton | KMV |
|---------|--------|-----|
| Basis | Theoretical (assumes DD is normally distributed) | Empirical (calibrated against real historical defaults) |
| Type | Theoretical model | Commercial/practical model |
| Developer | Robert Merton (academic) | Moody's |
| Industry use | Foundational, taught | Widely used in practice |

Both structural models (Merton, KMV) are **not typically used for banks** — they are used for non-bank borrowers.

---

## CAMELS: The Qualitative Scoring Model for Banks

For banks and NBFCs specifically, a different — more qualitative — scoring framework applies: **CAMELS** (or **CAMEL** for unlisted institutions).

| Letter | Component | What It Measures |
|--------|-----------|-------------------|
| **C** | Capital Adequacy | Solvency — how much capital you hold against assets |
| **A** | Asset Quality | Quality of the loan portfolio (e.g., % of NPAs) |
| **M** | Management & Governance | Public vs. private ownership, CEO/board salary, meeting frequency |
| **E** | Earnings | Profitability (banks run on thin margins) |
| **L** | Liquidity | Short-term solvency — cash to meet next 30 days' obligations |
| **S** | Sensitivity | Market risk sensitivity, i.e., equity beta (only for **listed** banks) |

> **Professor:** "CAMEL is for unlisted [banks], CAMELS is for listed banks."

### How Ranking Works

Each component is ranked **1 (best) to 5 (worst)** based on historical ranges calibrated from real bank failures. For example:

| Component | Rank 1 (Best) | Rank 3 (Middle) | Rank 5 (Worst) |
|-----------|---------------|------------------|-----------------|
| Capital Adequacy Ratio | Above 11% | 4% to 8% | Below 1% |
| Asset Quality (NPA %) | Below 1.5% | — | 10% |
| Earnings (ROA) | Above 1.5% | — | Below 0.75% |
| Liquidity | Above 100% | — | Below 60% |

> **Professor:** "One indicator [for management] is salary/personal expense divided by total assets. It's a very bad proxy, but the idea is — if you have high quality staff, you'll be paying them more salary... if it goes up beyond a point, that means your profitability will be hurt. If it is high but within 25% you are good; if more than 45%, you are bad."

### Worked Example: Bank Y

| Component | Actual Value | Rank |
|-----------|-------------|------|
| Capital Adequacy | 13% | 1 (excellent) |
| Asset Quality (NPA) | 4.5% | 3 (warning) |
| Management | — | 1 |
| Earnings (ROA) | Less than 1% | 4 (weak) |
| Liquidity | — | 1 |

> **Overall CAMEL score = Sum of ranks / Number of components = 2.3**

Despite Bank Y having a **high capital adequacy** (best-in-class solvency), its overall score of 2.3 signals **vulnerability**, not safety. Why?

> **Professor:** "Weak earnings, high market sensitivity, higher beta, and deteriorating asset quality... this is a warning constellation. Even if this bank has strong capital, these three parameters show the vulnerability of the bank, and hence their overall score is lower."

A student, Manish, asked whether all six components are equally weighted (since the professor simply divided by six). The answer:

> **Professor:** "Weights are the ranks."

### Real-World Callback: The 2015 Asset Quality Review

> **Professor:** "In 2015, when Raghuram Rajan was governor, [the RBI] first did the exercise of asset quality review, and they found that many banks in India suffered from the same kind of situation. They have a high capital adequacy, but they're doing poorly on asset quality, on earnings, and on market sensitivity. So their AQR score was low. AQR is very similar to CAMELS."

This closed the discussion on financial distress. The professor noted he would share a supplementary PDF with more worked examples on distance to default versus Merton versus KMV, but would not spend further class time on it.

---

## Introduction to Valuation: The USV / Well-Being Nutrition Deal

The course now pivots to **valuation** — restricted, for time reasons, to two methods: **Discounted Cash Flow (DCF)** and **Relative Valuation (market multiples)**. Next class brings the Harvard case *Interco*, but this session builds the DCF toolkit through a live, real-world caselet.

### The Deal

**USV** (a healthcare company) acquired a **79% stake** in **Well-Being Nutrition** (a wellness/nutraceutical company) in **February 2026** for **1,260 crore**.

> Implied 100% value of Well-Being Nutrition = 1,260 / 0.79 = **1,583 crore**

That implied value works out to about **9.3 times FY25 revenue** (170 crore, the last full year before the deal).

| Fact | Detail |
|------|--------|
| Stake acquired | 79% |
| Price paid | 1,260 crore |
| Implied 100% enterprise value | 1,583 crore |
| FY25 revenue | ~170 crore |
| Implied revenue multiple | 9.3x |
| Projected FY27 revenue | 450 crore (more than doubling in 2 years) |
| Break-even | Reached March 2025 — not a cash-burning company |
| Business model | Nutraceutical brand, D2C, described as "asset light" |

### The D2C / Asset-Light Debate

The professor challenged the class's assumption that "D2C automatically means asset light." A student (Nirbhay/Vikas) argued that outsourced (contract) manufacturing reduces investment in property, plant, and equipment. True — but incomplete.

> **Professor:** "It is not necessary that D2C is always asset light. You may be light on production property, plant, equipment... because you have outsourced manufacturing, but you may need to carry inventory. You may open stores. Direct to customer does not mean you sell online always... if you sell through a large format store — suppose Shoppers Stop — you have a counter where I'm selling my product... even the receivable would not be immediate, and inventory is your inventory, although the store is keeping it. They are not buying inventory from me — it is your inventory you are managing."

He used two real retail brands to illustrate how asset intensity depends on the **nature of the product**, not the channel label:

| Company | Product Focus | Seasonality Risk | Design/Fashion Risk |
|---------|---------------|-------------------|----------------------|
| **Manyavar** | Party/ceremonial wear (mostly menswear) | High — marriages cluster seasonally, forcing longer inventory holding | Low — designs don't change fast; a wedding sherwani stays relevant |
| **Biba** | Women's everyday + party wear | Lower — sells both types of garments | High — women's fashion is fickle, so SKUs and inventory can balloon, and receivables rise if sold through large-format stores |

> **Professor:** "While in outsourced manufacturing for a D2C business your investment in hard assets is lower, you may have to carry more working capital — receivables, inventories, and so on. And it gets really difficult if your product has seasonality, or has fleeting tastes and preferences of the customer."

Bottom line: Well-Being Nutrition is described as asset-light and in a **growth stage**, but "asset light" needs scrutiny before you assume low working-capital needs.

### The Central Question

> **Professor:** "1,583 crore is the implied value — valuation is done, you know the answer. Is it justifiable using a DCF? Today we're discussing DCF. That is our question."

To answer it, the class first needed to properly **define cash flow**.

---

## The Three Definitions of Cash Flow

The professor went to the whiteboard and built out **three distinct cash flow streams**, each valid for a DCF valuation but each requiring its own matching discount rate.

### 1. Free Cash Flow (FCF)

> **FCF = EBIT − Hypothetical Tax + Depreciation & Amortization (D&A) − Capex − Change in Working Capital**

Where **Hypothetical Tax = EBIT x Tax Rate** (i.e., tax calculated as if there were no interest expense/debt at all).

> **Professor:** "This is EBIT into the tax rate. If the company is under a 25% tax rate, then you'll apply 25% on the EBIT. Then add back depreciation because you are finding out cash flows. Deduct capex because the definition of free cash is — after meeting your growth requirements, how much cash you are left with. And also deduct change in working capital — only the **change** affects cash flow, not the level."

### 2. Capital Cash Flow (CCF)

> **CCF = EBIT − Actual Tax + D&A − Capex − Change in Working Capital**

The only difference from FCF is the tax line. Here, **Actual Tax = (EBIT − Interest) x Tax Rate** — i.e., tax is calculated **after** deducting the real interest expense, the way it actually appears in the tax return.

> **Professor:** "If you are a company with a loan, this tax will be lower than the hypothetical tax. This is called capital cash flow — cash flow for the capital providers."

### 3. Equity Cash Flow (ECF)

> **ECF = CCF − Interest Payments − Net Debt Repayment**

> **Professor:** "Of the total capital cash flow, which is the cash flow for the providers of capital — there are two types of capital, debt and equity. First remove the effect of debt, which is the interest payment and debt repayment. Whatever cash is left is for the equity shareholder — that is ECF."

### The Punchline: All Three Reach the Same Enterprise Value

> **Professor:** "I can use any of the cash flow definitions to arrive at the same enterprise value. I repeat — I can use any of these cash flow definitions, but arrive at the same enterprise value. However, I know that the numbers are different."

This triggered a long class Q&A because it seems paradoxical — different cash flow numbers reaching the same value.

> **Professor's question:** "How is it possible that these three cash flows are independent, individually different cash flows, but yet will give me the same enterprise value?"

Several students guessed wrong (accounting equation, timing, definitions). A student named **Raghab** got the key insight:

> **Raghab:** "Each cash flow will have a different discount rate."

> **Professor:** "Raghab is correct. Look at the denominator. When the numerators are different... but I use the same discount rate to present-value them, will I get the same enterprise value in each case? No. Which means I have to use a different discount rate for each cash flow."

### Matching Cash Flow to Discount Rate

| Cash Flow | Discount Rate | Why |
|-----------|---------------|-----|
| **FCF** | **WACC** (Weighted Average Cost of Capital) | WACC already blends the cost of both equity and debt, and its debt component carries the tax shield benefit implicitly through the after-tax cost of debt |
| **CCF** | **KU (unlevered cost of capital)** — roughly a "pre-tax WACC" | CCF's cash flow definition has already captured the interest tax shield explicitly (via actual tax). Using WACC here would double-count the tax benefit |
| **ECF** | **KE (cost of equity)** | ECF is already a cash flow belonging only to equity holders, after removing all debt effects |

### Why You Cannot Use WACC for CCF: The Double-Counting Trap

A student, **Anoj**, spotted the flaw:

> **Anoj:** "In WACC we already have a tax component, and in capital cash flow we also have our tax. So if we do that, we would be doing it twice."

> **Professor:** "You are right. Which one? ... The tax benefit on interest — the tax shield. You are calculating twice the interest tax shield. In the capital cash flow, I have already captured the tax benefit on interest [via actual tax]. If I discount that cash flow with WACC, I'll be doubly benefiting this company. One, I benefited them with a higher CCF because I gave the tax benefit — their cash flow is higher. Again, I'm discounting at a lower rate because my WACC also is after-tax. Two benefits you cannot give."

The fix: discount CCF using **KU**, the **unlevered cost of capital** — essentially WACC with the tax advantage stripped out ("gross WACC without tax benefit").

---

## When Do You Use Which Cash Flow Method?

This is not a random choice — the professor forced the class to reason it out, even sending students to an LLM mid-class to research and defend the answer.

### FCF — When the Capital Structure Is Stable

> **Professor:** "When you use WACC as a discount rate, there is an underlying assumption — your capital structure is not going to change during the entire projection period. Which means if your debt-equity ratio is say 2:1, it'll continue to remain 2:1. When there is no change in capital structure, it is only then you can use FCF method — not because the cash flow will be different, but because your discount rate has that implicit assumption."

### CCF — When the Capital Structure Is Changing

> **Professor:** "Suppose you have a debt of 3:1 — for every one rupee of equity you have three rupees of debt, very high — and you have a plan that over the next five years I'll reduce it to a target of 1:1. In this five years, I can't use free cash flow method because every year my WACC is changing. Which method do I use? Capital cash flow method. So for a changing capital structure, use capital cash flow method. For a constant or almost constant capital structure, use free cash flow method."

### ECF — Two Specific Contexts

**Context 1: Valuing a minority stake / joint venture.**

> **Professor:** "Suppose I'm invested in a joint venture — I'm a 49% owner, and there are two other partners holding the remaining 51%. At some point in time in my balance sheet I show my investment value in the JV — but that is a historical value. When I'm doing a business valuation on a given day, I ask: what is the worth of that JV? I'm not interested in the enterprise value — I am interested in what is the worth of my 49% stake. There we use equity cash flow."

**Context 2: Valuing banks.**

> **Professor:** "If at all you want to use the cash flow method — because for a bank the cash flow method itself is an inferior method, let's not go there, we don't use it — but if at all you have to, it is the equity cash flow. Why? Because the concept of debt is different in a bank. The main debt item on a bank's balance sheet is deposits, and deposits are like raw material for a bank. It is an operating liability, not a financing liability — bank gets deposit and lends, it's a raw material for manufacturing your product... deposits are not debt. So therefore you see only equity cash flow."

### Special Case: When Debt Is Zero

If a company has **zero debt**, all three cash flow streams (FCF, CCF, ECF) collapse into the **same number** — there is no interest, no tax shield distinction, and no debt repayment to net out. In that case, any one method works and they all agree, because "free cash is for equity shareholders" directly.

### Choosing the Method for USV / Well-Being Nutrition

> **Professor:** "In our case of USV and wellness, I'll be using free cash flow. Why? Because the description of the wellness nutrition company says it is an asset-light company — no debt at all, or very low debt. So when I have no debt or low debt, the capital structure is not going to change, and hence free cash flow is the most appropriate method."

---

## The Worked DCF Exercise: Valuing Well-Being Nutrition

With the method chosen (FCF, discounted at WACC), the class was given inputs and asked to build a 10-year projection (valuing as of end of FY25).

### Given Inputs

| Input | Value |
|-------|-------|
| Base year (Year 0) | FY25 |
| FY25 revenue | 170 crore |
| FY27 revenue (given) | 450 crore |
| Terminal year | 10 years out (FY35) |
| Terminal revenue growth rate | 9.5% |
| Current EBITDA margin | 5% |
| Terminal EBITDA margin (Year 10) | 18% |
| WACC (cost of capital) | 17% |
| Tax rate | 26% |
| D&A, Capex, Working Capital | Kept roughly constant/scaled per case assumptions (limited case information) |

### Building the Projection

**Step 1 — Taper the revenue growth rate.** Revenue grows from 170 crore (FY25) to 450 crore (FY27) — implying a **near-term growth rate around 45%** in the first year or two — then must **taper linearly down to 9.5%** by year 10.

> **Professor:** "You can do a linear estimate: if currently it is growing at 20%, 21%... you are tapering the growth rate from the current high... down to 9.5% in the final year."

**Step 2 — Ramp the EBITDA margin.** The margin rises from 5% (current) to 18% (terminal), presumably also on a linear glide path across the 10 years.

**Step 3 — Apply the FCF formula each year:**

> **EBIT = EBITDA − Depreciation**
> **FCF = EBIT x (1 − Tax Rate) + D&A − Capex − Change in Working Capital**

> **Professor:** "If I take EBITDA of 8.5 [as an example], minus depreciation — that is your EBIT — into (1 − T)... that's your FCF for the first two steps [EBIT minus hypothetical tax]. Then deduct capex, add back depreciation, deduct change in networking capital."

**Result:** Despite revenue growing at ~45% early on, the company's **free cash flow stays negative until around FY27-28** — it is investing heavily in growth even after reaching accounting break-even. It crosses into positive free cash flow only as growth tapers and margins mature.

### Step 4 — The Terminal Value

For year 10 (and beyond), apply the **Gordon Growth / perpetuity formula**:

> **Terminal Value = FCF (Year 10) x (1 + Terminal Growth Rate) / (WACC − Terminal Growth Rate)**

> = FCF₁₀ x 1.095 / (0.17 − 0.095) = FCF₁₀ x 1.095 / 0.075

### Step 5 — Discount Everything Back at 17%

Sum the present values of Years 1 to 10's FCF, plus the present value of the terminal value, all discounted at the 17% WACC.

### The Result: A Huge Valuation Gap

> **Enterprise Value (Professor's own calculation) = 700 crore**
> **Enterprise Value (an outside analyst's calculation, different assumptions) = 815 crore**
> **Implied deal value (what USV actually paid for) = 1,583 crore**

| Base DCF Value | Deal Value Paid | Premium |
|----------------|-------------------|---------|
| 700 crore (professor's estimate) | 1,583 crore | ~100% premium |
| 815 crore (analyst's estimate) | 1,583 crore | ~94% premium (768 crore gap) |

> **Professor:** "Whether you use my 700 number or this 815 number, look at the huge gap — which means USV apparently is paying much higher than the real worth of the firm as per DCF."

### The Homework: Is This a "Reach Deal," or Is the DCF Too Conservative?

The professor left the class with a genuine open question, framed as a **reverse-engineering exercise**. Three assumptions are candidates for being "too conservative":

1. **Terminal revenue growth rate of 9.5%** — is it too low, given the company is currently growing at 45%?
2. **Cost of capital (WACC) of 17%** — is it too high?
3. **Terminal EBITDA margin capped at 18%** — is it too low, given premium wellness products can command 22-25% margins?

> **Professor:** "Change each variable at a time and see the impact... reverse engineer it. If I keep other assumptions constant and just change my terminal growth rate — at what growth rate would I get this 1,583 value? Then, keeping others constant, change the EBITDA margin — what should it be to reach 1,583? Then change the cost of capital. Find out which one is most sensitive — meaning, for a small change, which creates the largest impact on the DCF value."

The final framing question for next class:

> **Professor:** "Is this a reach deal — meaning USV is paying too much — or is our DCF too conservative? Answer this question, and then the question will come: are we really paying more, or is this deal actually justifiable under more realistic assumptions?"

A student, Anish, requested the base numbers be shared as a spreadsheet (rather than students re-typing them mid-class) — the professor agreed to share the Excel file so the class could experiment with different assumption combinations.

---

## Key Formulae

| Formula | Expression |
|---------|-----------|
| **Probability of Default (CHS-type model)** | PFD = 1 / (1 + e to the power of negative L) |
| **Idiosyncratic Variance** | Total Variance − (Beta squared x Market Variance) |
| **Market Model (for idiosyncratic risk)** | Return(i) = Alpha + Beta x Return(market) + Epsilon (residual = idiosyncratic) |
| **Default Point (DP)** | Total Short-Term Debt (financial + operating) + 0.5 x Long-Term Debt |
| **Distance to Default (simplified)** | DD = ln(VA / DP) / (sigma_A x square root of t) |
| **Distance to Default (Merton, with drift)** | DD = [ln(VA / DP) + (mu − 0.5 x sigma_A squared) x t] / (sigma_A x square root of t) |
| **Probability of Default (structural models)** | PD = 1 − N(DD), where N is the cumulative normal distribution |
| **Equity as a Call Option** | Value of Equity = Call Option on Value of Assets, Strike Price = Value of Debt |
| **CAMELS Score** | Sum of component ranks (1-5) / Number of components |
| **Free Cash Flow (FCF)** | EBIT x (1 − Tax Rate) + D&A − Capex − Change in Working Capital |
| **Capital Cash Flow (CCF)** | EBIT − Actual Tax + D&A − Capex − Change in Working Capital, where Actual Tax = (EBIT − Interest) x Tax Rate |
| **Equity Cash Flow (ECF)** | CCF − Interest Payments − Net Debt Repayment |
| **Terminal Value (Gordon Growth)** | FCF(final year) x (1 + Terminal Growth) / (WACC − Terminal Growth) |
| **Enterprise Value (DCF)** | Sum of PV(annual FCF) + PV(Terminal Value), discounted at WACC |

---

## The Recipe Chain

**Sessions 1-4** (EVA, NOPAT adjustments, capital structure) --> **Sessions 5-9** (Distribution decisions, risk management foundations, futures, forwards) --> **Sessions 11-12** (Options pricing, the option lens on corporate finance) --> **Session 13** (Interest rate swaps, introduction to international exposure) --> **Sessions 14-16** (Financial distress: IBC/bankruptcy process, Altman Z-Score, CHS-type probability model) --> **Session 17** (Structural default models — Merton/KMV distance to default, using the option-pricing lens from Sessions 11-12 to back out asset value from equity value; CAMELS scoring for banks; transition into valuation — the three cash flow definitions (FCF, CCF, ECF) and their matching discount rates (WACC, KU, KE); worked DCF on the USV/Well-Being Nutrition acquisition) --> **Next:** Continuing DCF with the Interco case, plus relative valuation (market multiples)

---

## What's Next

- **Next session:** Answer the reverse-engineering homework (which assumption — growth rate, EBITDA margin, or WACC — is most sensitive), then move into the **Interco case study** (Harvard case) alongside continued DCF discussion and **relative valuation / market multiples** method
- **Key connection:** The equity-as-a-call-option idea (from the options sessions) resurfaces directly in structural default models — the same Black-Scholes machinery used to price options is used here to back out a firm's implied asset value
- **Remember:** No quiz in the next class — the final (7th) quiz is on the following Saturday
- **Action item:** Review the shared spreadsheet and PDF on distance-to-default/Merton/KMV before the next session; be ready to defend a number for "at what growth rate / margin / WACC would this deal's 1,583 crore valuation be justified"

---

## The Real-World Takeaway

Here is the one idea worth carrying out of this session, whatever job you end up in: **a single number always hides an assumption, and the assumption matters more than the number.**

Think about what happened with Well-Being Nutrition. The professor didn't just say "this deal is expensive." He built a model, got 700 crore, saw the market said 1,583 crore, and then refused to declare a winner. Instead he asked: which of my assumptions is wrong? Is my growth rate too timid, is my discount rate too harsh, or is the buyer simply overpaying? That instinct — distrust the headline number until you've stress-tested the assumption behind it — is the single most transferable skill in this entire session.

The same instinct applies to CAMELS and distance-to-default. A bank with excellent capital adequacy still got flagged as vulnerable, because one great metric was masking three mediocre ones. A "strong" score in one dimension is not the same as a strong company — you have to look at the whole panel, not the headline metric someone hands you in a slide.

And the idiosyncratic-risk detour is really about the same muscle in miniature: separate what the whole market is doing to you from what is genuinely specific to you. Don't blame "the market" for a problem that's actually your problem, and don't take credit for a win that's actually just the tide coming in.

Use this when:
- Someone hands you a valuation, a forecast, or a KPI dashboard and asks you to sign off — before agreeing, ask "what assumption, if I nudge it slightly, moves this number the most?"
- You're reviewing a team's or a vendor's performance and one number looks great (revenue, uptime, NPS) — check whether other, less flattering numbers are being quietly buried underneath it
- You're deciding whether your own good or bad quarter was actually "you," or just a rising or falling tide that would have lifted or sunk anyone in your seat
- You're negotiating a price (a deal, a salary, a vendor contract) and the other side quotes a number with total confidence — remember someone built that number on assumptions, and assumptions can always be re-examined

One-liner to remember it by: **before you believe the number, go find the assumption hiding behind it.**
