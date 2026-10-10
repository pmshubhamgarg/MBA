---
sidebar_position: 16
title: "Session 15: International Capital Budgeting — Global CAPM and Country Risk Premium"
---

# Session 15: International Capital Budgeting — Global CAPM and Country Risk Premium

*The NPV rule never changes. What changes is how honestly you price the risk of doing business somewhere else.*

---

## The Big Picture: Same NPV Rule, New Currency Problem

Imagine you are a Swiss company, and someone slides a cross-border investment proposal across the table. Your gut instinct is: "This is complicated, it's in a foreign currency, it needs some entirely new rulebook."

It does not. The professor opened the session by nailing this down immediately:

> **Professor:** "The basic principle remains same that you have to estimate the NPV of the investment. If the NPV is positive you go ahead, otherwise you don't go ahead. That remains same. The only problem is that you are dealing with a different currency. But ultimately your decision should be based on NPV in your own currency."

Think of it like judging a cricket score reported in a different scoring system — you still need to know who won, but you must first convert everything into the same units before you compare. An Indian company investing in South Africa still needs an INR NPV to decide. A US company investing in South Africa needs a dollar NPV. The currency of the *investment* and the currency of the *decision* are two different things, and mixing them up is where everything goes wrong.

The real question the whole session answers:

> **Professor:** "If I convert foreign currency NPV into domestic currency NPV by using a spot exchange rate, does it really represent the risk-adjusted NPV of that investment?"

Spoiler: not fully. It gets you most of the way, but it silently drops one entire category of risk — **country risk** — unless you go looking for it.

---

## Quick Recap: Where We Left Off

This session builds directly on the two prior sessions on international finance:

- **Three types of exposure**: transaction, translation, and economic. Only **transaction exposure** can be hedged with derivatives (forwards, futures, options). The other two need natural hedging or strategic alternatives.
- **Interest Rate Parity (IRP)** and **Purchasing Power Parity (PPP)**: these explain how exchange rates move — IRP through the interest rate differential between two countries, PPP through the inflation differential. Both are used to generate **forward rates** or **expected future spot rates**.
- Currency **forwards, futures, and options** were used to hedge specific foreign-currency transactions.

Today's session takes all of that and applies it to a much bigger decision: **should you invest in a cross-border project at all**, and if so, **what discount rate do you use**?

---

## The Roche Example: Setting Up the Cross-Border NPV Question

**The story:** Roche, the famous Swiss pharmaceutical company, is evaluating a proposal to build a new plant in the United States. Why would a Swiss company build a *factory* in the US rather than just export to it?

> **Professor:** "Why is a Swiss company thinking of not only selling in the US market but also investing in the US market, setting up a new factory? Because of Trump. Trump said unless you have a factory here, I will charge huge tariff. So to survive, they decided to invest in the United States."

**The setup:**

| Item | Value |
|------|-------|
| Company | Roche (Swiss, listed in the Euro zone) |
| Project | Build a new plant in the US |
| Cash flow currency | US dollars (the plant is in the US, sells out of the US) |
| Forecast horizon | 5 years |
| Dollar cost of capital | 12% |
| Spot exchange rate | 1.2323 (Swiss Franc is the base currency, USD is quoted — 1 CHF = 1.2323 USD) |
| Final decision currency | Swiss Franc (the parent company's home currency) |

**Task:** find the NPV in dollars, then convert it to Swiss Francs.

### The Class Got the Dollar Number Right, but Fumbled the Conversion

Everyone in class got the same **dollar NPV: 513 million** — straightforward, just discount the dollar cash flows at the 12% dollar cost of capital.

But when converting to Swiss Francs, the class split into two camps — some said **417 million**, others said **631 million**. The professor explained the mistake:

> **Professor:** "Swiss Frank is costlier. So when it says 1.2323, look at the base currency. What is the base currency? Swiss Franc. US dollar is a quote. For every Swiss Franc you get more than 1 dollar. So from dollar to Swiss Frank, when you convert, you have to **divide**. Some of you multiplied it. You should not multiply because Swiss Frank is stronger than dollar."

A student, Bhargav, asked for clarity on the quoting convention:

> **Student:** "Just wanted to understand — when we are reading this spot exchange rate, it's not read as 1.2323 CHF per USD, it's 1.2323 USD per CHF?"
>
> **Professor:** "Yes, the currency which is written first is the unit — the base currency. And the currency which is written second (after the slash) is the quoted currency. So it is 1.2323 dollars quoted for a base which is Swiss Franc."

**Rule of thumb:** Base currency is written first. To go *from the quote currency to the base currency* (here, dollar to Swiss Franc), you **divide** by the rate, because the base currency (CHF) is the stronger, "more expensive" one.

> 513 million dollars / 1.2323 = **~417 million Swiss Francs**

---

## Two Roads to the Same Destination: Spot-Rate Shortcut vs. Full Hedging Route

Here is the deeper question the professor pushed on next: when Roche just discounts dollar cash flows at a dollar cost of capital and converts using the spot rate, what assumption is baked in?

> **Professor:** "It is implicitly assuming that the currency risk is hedged, because ultimately you have to convert that into your own currency. So you are differentiating the investment decision from the financing decision. The investment decision you are doing dollar to dollar, and to hedge against fluctuation — when you convert dollar into Swiss Frank — you said, 'my treasury will do it, my finance guys will do it as a financing decision, to hedge or not to hedge.'"

In other words: **Approach 1 (the quick way)** says "let the investment team evaluate in the project's own currency; let a separate treasury/finance decision handle whether or not to hedge the eventual currency conversion." It's a clean separation of decisions.

But is that shortcut mathematically valid? The professor tested it by building **Approach 2**, the long way, and checking if it gives the same answer.

### Approach 2: Hedge Every Cash Flow With a Forward Contract

If Roche is genuinely hedging its future dollar receipts by *selling* dollars forward (to get Swiss Francs), it needs **forward exchange rates**, not just the spot rate. And to get forward rates without directly observable forward quotes, you invoke **Interest Rate Parity**:

> **Given:** US interest rate = 6% (dollar is more inflationary, hence a weaker currency). Swiss Franc interest rate = 4% (a stronger currency).

> **Forward Rate Formula (IRP):** Forward rate = Spot rate x (1 + Domestic/Quote currency interest rate) / (1 + Base currency interest rate)

Applying it:

- **1-year forward:** 1.2323 x (1.06 / 1.04) = **~1.2537 (≈1.25)**
- **2-year forward:** 1.2323 x (1.06 / 1.04)² = the same logic extended, power 2 for year 2, and so on for every future year

> **Professor:** "What could be the expected spot rate? The same Swiss Frank you are expected to get more dollar, which means dollar is going to be cheaper. Dollar will be an inferior currency to Swiss Frank even going forward."

Using the spot rate for period 0 and the appropriate forward rate for each future year, Roche converts every year's dollar cash flow into Swiss Francs.

### Now You Need a Swiss Franc Cost of Capital Too

You cannot discount Swiss Franc cash flows using the 12% **dollar** cost of capital — that rate was calibrated to dollar risk and dollar inflation.

> **Professor:** "I cannot use 12% cost of capital because 12% was the dollar cost of capital. I have already converted my currency into local currency, my own currency Swiss Frank, so I need a Swiss Franc cost of capital. Again invoke the Fisher equation or interest rate parity condition."

> **Formula:** (1 + Foreign currency cost of capital) = (1 + Domestic currency cost of capital) x (1 + Foreign interest rate) / (1 + Domestic interest rate)

Applying it: (1 + Kchf) = 1.12 x (1.04 / 1.06) = 1.0989 → **Kchf = 9.89%**

> **Professor:** "So any investor there would be expecting 9.89% return in Swiss Frank versus 12% in dollar. Now if I discount these Swiss Frank cash flows with the 9.89%, you see we are getting exactly the same number."

### The Punchline

Both routes — (1) discount in dollars and convert at spot, versus (2) convert every cash flow with IRP-based forward rates and discount in Swiss Francs at an IRP-adjusted cost of capital — give the **identical NPV**. This confirms that **Approach 1's shortcut is mathematically valid, provided the implicit hedge is genuinely available and correctly priced.** The spot-rate shortcut isn't a hack; it's a shortcut that works *because* of interest rate parity.

But — and this is the twist that drives the rest of the session — that 12% dollar cost of capital itself needs scrutiny. Where did it even come from?

---

## Where Did That 12% Come From? Introducing Global CAPM

The professor turned the tables:

> **Professor:** "I have not told you yet how the 12% cost of capital is arrived at. Can you tell me?"

A student guessed "currency fluctuation histories" — wrong, that's not how cost of capital is built. Another (Saanidhi/Sida) correctly recalled the standard CAPM ingredients:

> **Student:** "We need the risk-free rate and the company's beta... and the market risk premium."
>
> **Professor:** "Which country's rate?"
>
> **Student:** "US rate... and we would require the beta of the company."

Here's where it gets interesting. The natural instinct is: use the US risk-free rate (since the project is in the US), a pharma company's beta, and the US market risk premium. But:

> **Professor:** "Remember, Roche doesn't have a US beta. Roche is listed in the Euro zone. So how will you get the US beta?"

A student, Saanidhi, tried "weighted average cost of equity plus weighted average cost of debt" — the professor shot this down immediately ("There's nothing called weighted average cost of equity — I've heard weighted average cost of *capital*, which is the weighted sum of cost of equity and cost of debt").

Another student, Gaurav, correctly said you need historical returns of the company regressed against a benchmark — but suggested using the **Swiss** benchmark, since Roche isn't listed in the US.

> **Professor:** "If you regress the company return, which is in Euro or Swiss Franc, against their market return — that beta is a **local beta** of Switzerland. It's not a dollar beta. But you need a dollar beta. How do you get it?"

### The Solution: Global CAPM, Not Local CAPM

> **Professor:** "There is a solution. It is called **global CAPM**, not a local CAPM. It is CAPM you have to use, but use a global CAPM model. The only change is that the beta is against a **global index**, not against the local index."

You cannot use NYSE, NASDAQ, or even the local Swiss exchange as the benchmark. You need a truly global index:

> **Professor:** "Today US thinks they are global — anything you do against NASDAQ is a global beta, that's not correct. **MSCI Global** is perhaps the only global index available. Regress your returns against the MSCI Global return to get the beta."

**Global CAPM formula:**

> **Cost of capital = Risk-free rate (US, most globally accepted risk-free benchmark) + Beta (global) x Market risk premium (global, based on MSCI World)**

---

## Getting the Global Beta: ADRs vs. the Long Way Round

Now comes the practical problem: to regress a company's returns against MSCI Global (which is in dollars), your company's share price returns must also be **in dollars**. If a company's shares only trade in its home currency, this creates a mismatch.

> **Professor:** "If you regress MSCI return against Roche's return in Swiss Franc, there's a problem — MSCI index is in dollar terms, and the Roche company share price is in Swiss Franc. Different currencies. You need a common denominator."

Two solutions:

### Route 1: Use ADRs (American Depositary Receipts) — the Easy Way

If a foreign company has shares listed in the US market as ADRs, its prices are already in US dollars. No conversion needed — just regress ADR returns against MSCI Global returns directly.

**Example — Infosys:**

> **Professor:** "Infosys is easier to do because it has an ADR listed in US. I don't need to convert Infosys's INR price into dollar price. I have the ADRs listed in the US, so I have the dollar prices, and I also have MSCI Global index which is in dollar. Regress Infosys's ADR returns against MSCI World monthly return — both are in dollar. Global beta for Infosys: **0.85**."

### Route 2: No ADR — Convert the Local Return Series

**Example — Hindustan Unilever (HUL):**

> **Professor:** "HUL doesn't have an ADR. Your share prices are only in India, in INR. So what do you do? Download monthly closing price. Find out exchange rates of USD and rupee for those months. Calculate monthly return in USD using this formula: **1 + Dollar Return = (1 + Rupee Return) x (1 + Exchange Rate change)**. Solve for the dollar return."

Steps:
1. Download HUL's monthly closing prices in INR (say, last 5 years / 60 months).
2. Download the corresponding USD/INR exchange rate for each month.
3. Convert each month's INR return into a dollar return using: **(1 + R_usd) = (1 + R_inr) x (1 + change in exchange rate)**.
4. Download MSCI Global monthly returns for the same period.
5. Regress dollar returns of HUL against MSCI Global dollar returns to get the beta.

Result: **Global beta for HUL = 0.65** (versus Infosys's 0.85).

### Why Is Infosys's Beta Higher Than HUL's?

A student, Anish, guessed "Infosys is more susceptible to market volatility." The professor pushed back — that's not quite it, since neither number is anywhere near a beta of 1.

> **Professor:** "What is the market beta? Market is always one — you are regressing market return against its own benchmark, so it must be one on both sides."

The real answer, nailed by another student:

> **Student:** "Infosys has lots of business in the US. So any changes in US, any tariff changes, will impact Infosys more."
>
> **Professor:** "That's right. If you look at HUL's returns, these are less sensitive to global market fluctuations because HUL is manufacturing in India, selling in India, hardly exporting. Its costs are in rupees, revenue also in rupees. Hence its relationship or sensitivity to global index fluctuation is less. Whereas for Infosys, a large part of customers are outside India — Europe, US, global — and hence currency fluctuation affects them, and they are more sensitive to international/global data. **It's not volatility of the local market. It is the relationship with the global market.** How do you move with the global index? You move better provided you have international trade. If you don't have international trade, you'll be insensitive to global fluctuations."

**Key takeaway:** Global beta measures how much a company's returns co-move with the *global* economy — driven by how much international trade (exports, imports, foreign customers, foreign supply chains) a company actually has, not by how volatile its home stock market is.

---

## Whose NPV Is It Really? The Missing Political Risk

Back to Roche. Using this global-CAPM-derived 12% (calculated by regressing **Roche's own** share returns against MSCI Global — not a random US pharma company's beta), the class got a dollar NPV of 513 million. Now the professor asked the crucial question:

> **Professor:** "This 513 million — is it the NPV of the project from Roche's point of view, or is it the NPV of a project from a US company's point of view? Please remember, I have done beta calculation using Roche's share price with MSCI, not with US S&P 500."

A student, Manish, guessed "US-based pharma company" but couldn't quite explain why. Another student got closer, invoking political risk, and the professor confirmed it with vivid real-world stakes:

> **Professor:** "If Roche wants to bring this money back to Switzerland, there could be political control. Trump might say you cannot repatriate this money. Trump might say if you transfer the money to your parent company, there'll be a 30% tax. In extreme cases, they might say 'we'll take over your company — it will be nationalized.' In many countries — Venezuela, for example, when Chavez was president, he nationalized a lot of oil fields. Shell Oil, Exxon — all the private oil companies, their assets were frozen, nationalized."

So the 513 million NPV, built purely off global CAPM, is really the NPV **as if a US company** were running this project — it captures market/currency risk (since the beta calculation converts everything into dollar terms and correlates against a global index) but it completely misses:

- **Expropriation / nationalization risk**
- **Taxation on cross-border fund transfers**
- **Capital controls restricting repatriation**

> **Professor:** "Global CAPM is a better model than the local CAPM, but it is incomplete because it doesn't capture it — it only captures currency-level market risk. It doesn't take care of political risk. So it is therefore **underestimating** the cost of capital of a Swiss company investing in the US. And if you underestimate your cost of capital, what happens? NPV goes up. You unnecessarily show the project very viable. It may not be viable."

The fix: add a **country risk premium** on top of global CAPM.

---

## Country Risk Premium: Three Ways to Measure the Unmeasurable

> **Professor:** "How do you estimate country risk premium? There are three methods — first and second are actual ways, and the third one is a weighted average of first and second."

### Method 1: Country (Bond) Default Spread

**Idea:** Compare the yield on a country's dollar-denominated sovereign bond against the US Treasury yield of the same maturity. The difference is the country risk premium.

**Example (from Damodaran's data, 1998–2003):** US Treasury bond yield hovered around 5% for five years. A **Brazilian C-bond** (a sovereign bond issued by the Brazilian government but sold/listed in the US market, denominated in dollars) had a yield that was always **above** the US Treasury yield, and fluctuated much more.

> **Professor:** "If both bonds are sold in US, both are traded in US, both issued by government (not by a company), and both are 10-year bonds — everything is the same — why should there be a difference in the yield? Because they believe there could be a situation where the Brazilian government defaults, or says 'I will not pay,' or 'I'll pay late.' There may be unrest, political disturbance in Brazil. This difference is called **country risk premium**."

A student, Manish, asked whether US-specific problems would distort this comparison. The professor clarified:

> **Professor:** "No — both bonds are in US dollars, both exposed to the same US-side factors. That cancels out. The comparison isolates the country-specific difference."

**Two limitations, drawn out through class discussion:**

1. **Not every country has a dollar-denominated sovereign bond listed in the US.** India, for example — aside from recent "green bonds" in the last 2-3 years — has never issued a government bond in the US. All Indian government borrowing has been in INR, domestically. Without a dollar-denominated bond, there's no yield to compare, and this method simply cannot be applied.

2. **Mismatch between bond risk and equity risk.** You're trying to price a premium for **cost of equity**, but the default spread comes from the **bond market**. Bond and equity markets don't necessarily move for the same reasons.

### Method 2: Relative Equity Market Standard Deviation

**Idea:** Instead of bond spreads, look at how volatile the *equity* market of the country is relative to a reference (e.g., US) equity market, and scale the US equity risk premium by that ratio.

> **Country Risk Premium = US Equity Risk Premium x (Standard deviation of country's equity index / Standard deviation of US equity index)**

**Example (Brazil, 2001–2003):** US equity risk premium = 4.53%. Brazil's BOVESPA index volatility = 33.37%. US market volatility = 18.59%.

> Relative standard deviation = 33.37 / 18.59 ≈ **1.8**
>
> Country risk premium ≈ 4.53% x 1.8 ≈ **8.1%** (added on top of the beta-adjusted risk premium)

> **Professor:** "If the standard deviation of country X is greater than the US, then the fraction will be more than one, and multiplying that with the US risk premium will magnify the premium. That extra is the country risk premium."

**Limitation, drawn out through a long class discussion:** In emerging or inefficient markets — thinly traded, less liquid, subject to heavy regulatory intervention — trading volumes are low and regulators often halt trading to stop prices from moving too far. This can make the **measured volatility artificially low**, not because the country is genuinely safer, but because the market barely trades or is actively suppressed.

> **Professor:** "If a market is thinly traded, very little trading happens — volatility will be low. If in a market the regulator intervenes more — more volatility will be low, they don't allow the price to go up beyond a point, they suspend trading for some hours to bring the price back. It does not mean the country is less risky. It is not necessary always you'll get this ratio more than one between US and that emerging country. That's the problem in this method."

A useful side-note that came up: for countries with a **currency peg** to the dollar (e.g., a fixed exchange rate like "6 units = 1 dollar"), there's no need to convert exchange rates monthly — you just divide by the fixed rate, since it never fluctuates. Floating currencies like the rupee require converting at the actual rate each month. This is purely a computational nuance, not a conceptual limitation.

### Method 3: The Blended Method

This method directly answers Method 1's second limitation — the mismatch between bond-market risk and equity-market risk.

> **Country Risk Premium = Country Default Spread x (Country's equity market volatility / Country's bond market volatility)**

**Logic:** If the country's bond market and equity market are equally volatile, the plain default spread is good enough — no adjustment needed. But if the equity market is *more* volatile than the bond market, you need extra compensation.

**Example (Brazil):** Default spread ≈ 6.01%. Brazilian equity market volatility = 33.37%. Brazilian bond market volatility = 26.15%.

> Relative volatility = 33.37 / 26.15 ≈ **1.28**
>
> Country risk premium = 6.01% x 1.28 ≈ **7.67%** (higher than the plain 6.01% default spread)

### Why Blended, and Not Just Default Spread? The Fama-French Digression

The professor justified the blended method by pulling in a classic finance paper (Fama and French, "Common Risk Factors in the Returns of Stocks and Bonds," ~30 years old):

The paper regresses excess returns on two factors:

- **TERM** = Long-term government bond return minus 1-month Treasury bill return. This captures the **time value of money** (holding a longer-maturity bond requires compensation for tying up money longer) — note both legs are *government* bonds, so there's no default risk difference here, only maturity.
- **DEF** = Corporate bond return minus long-term government bond return (same maturity). This captures the **default premium**.

Regressions were run separately on:
- Stock portfolios, bucketed by size (small to big) and book-to-market (undervalued to overvalued)
- Bond portfolios, bucketed by maturity (1-5yr, 6-10yr government) and credit quality (AAA, AA, low-grade/junk)

**Result:**

| Panel | R² Range | Interpretation |
|-------|----------|----------------|
| **Stock returns** | 6% to 21% | TERM and DEF explain very little of stock return variation |
| **Bond returns** | 79% to 97% | TERM and DEF explain almost all of bond return variation |

> **Professor:** "The factors which explain bond market are not necessarily the same as those that explain equity market. If that be the case, then country default spread premium is not good enough to add to the cost of equity."

**Conclusion:** Since bond-market risk factors barely explain equity-market returns, a pure bond default spread understates or mismatches the true equity risk premium for that country. The blended method — scaling the default spread by the ratio of equity-to-bond market volatility *within that country* — is a better proxy.

> **Rule to decide which method to trust:** if the factors driving bond returns and equity returns in a country are largely the same (high overlap), the plain default spread is good enough. If they diverge, use the blended method.

---

## Making Country Risk Premium Company-Specific: Beta Bracket vs. Lambda

One more wrinkle, raised by a sharp student question: country risk premium as calculated above is the **same number for every company** investing in that country — a telecom company, a cement company, and a pharma company would all get the identical add-on. But shouldn't riskier, more exposed businesses get hit harder?

> **Professor:** "The risk profile also depends on the sector. One way to handle country risk premium as a function of the project risk is to include country risk premium within the bracket of beta."

### Option A: Put It Inside the Beta Bracket

> **Cost of equity = Risk-free rate + Beta x (Market risk premium + Country risk premium)**

Here, the *entire* combined premium gets multiplied by the company's beta. If beta is 1.5, the country risk premium effectively gets scaled up by 1.5x too — capturing that a higher-beta (more market-sensitive) business also bears more of the country-level shock.

### Option B: The Lambda Approach (Damodaran)

> **Cost of equity = Risk-free rate + Beta x Market risk premium + Lambda x Country risk premium**

Here, **lambda (λ)** is a separate exposure factor — how much of that specific company's business (revenue, assets, or supply chain) is actually tied to the risky country. It does *not* have to equal beta.

> **Professor:** "Consider two companies in the same sector. Company A gets 80% revenue from the US, Company B only 20%. Both are Indian companies, both have country exposure to the US, but they have quite different asset exposures. For the first company, exposure is 80%; for the second, only 20%. Whatever is the country risk premium, multiply by 0.8 for the first company — almost the entire risk premium. But for the second company, although they have a customer in the US, that's very minor — don't take the full load of country risk premium, don't penalize them with a 100% country risk premium. Take only 20% of that."

**What counts as "exposure" for lambda?**
- **Production facility** in that country → asset exposure
- **Customer base / revenue** from that country → revenue exposure
- **Supply chain network** running through that country → supply-chain exposure

**Lambda = (Revenue, or assets, tied to the risky country) / (Total revenue or assets)**

This lets the same overall country risk premium be applied *differently* to different companies, or even different projects within the same company, based on how exposed each one actually is.

---

## Full Worked Example: AIX Corporation Buys ABSA in South Africa

To bring everything together, the professor walked through a complete numerical case (from a classic textbook case, late 1996).

### The Setup

**AIX Corporation**, a US company, is considering acquiring **ABSA**, a South African auto parts company. AIX will finance the acquisition through the US capital market (borrowing in dollars).

| Item | Value |
|------|-------|
| ABSA's debt ratio (debt / total capital) | 40% |
| ABSA's local beta (vs. South African/Johannesburg stock exchange) | 1.55 |
| Country-level global beta (South African market vs. MSCI global index) | 0.74 |
| Continuing/terminal real growth rate in South Africa (beyond 5 years) | 2% |
| Expected inflation — South Africa | 8% |
| Expected inflation — US | 3% |
| Pre-tax cost of debt (given, borrowed in US) | 9.2% |
| Tax rate | 40% |
| US risk-free rate | 5.79% |
| US equity risk premium | 3.2% |
| Long-term sovereign bond yield spread (country risk premium proxy) | 2.12% |
| Spot exchange rate | 1 US dollar = 4.55 South African Rand |
| Size premium | Included (ABSA is a small company) |

**Task:** Find the dollar cost of capital, then use it to value the investment.

### Step 1: Building the Global Beta for ABSA

ABSA has no beta against MSCI (it isn't globally benchmarked directly), but two pieces can be **chained together**:

> **Local beta** (ABSA vs. South African market) = 1.55
> **Country-level global beta** (South African market vs. MSCI Global) = 0.74

> **Global Beta of ABSA = Local beta x Country-level global beta = 1.55 x 0.74 = 1.14**

> **Professor:** "Country into local gave you the 1.55, and the local into global gave you 0.74. If I multiply both, then you get local company with the global. So the global beta would be that 1.55, which is the local beta, into 0.74, which is country-level global — this will give you the global beta of that particular company."

### Step 2: Cost of Equity Using Global CAPM Plus Adjustments

> Cost of Equity = US Risk-free rate + Global Beta x US Risk Premium + Size Premium
> = 5.79% + 1.14 x 3.2% + Size Premium
> = 5.79% + 3.65% + Size Premium ≈ 9.44% + Size Premium

Note: no country premium is baked into this step yet — it's added once, later, at the overall cost-of-capital level (to avoid double-counting).

### Step 3: Cost of Debt

> After-tax cost of debt = 9.2% x (1 - 0.40) = **5.52%**

No country premium adjustment needed here either — the debt itself is borrowed in the US capital market.

### Step 4: Combine Into Overall (Dollar) WACC — Add Country Premium Once, at the End

> **Professor:** "I add at the end. I find out debt cost, I find out equity cost, sum them up — but to get my overall cost of capital, I now add finally the country premium. **One time. Don't double count.** Don't add it at cost of debt and also add it at cost of equity."

> WACC = (After-tax cost of debt x Debt weight) + (Cost of equity x Equity weight) + Country risk premium
> = (5.52% x 40%) + (Cost of equity x 60%) + 2.12%
> = **11.62%** (as calculated in class)

### Step 5: Convert Dollar Cost of Capital to Rand Cost of Capital (via PPP)

Since ABSA's cash flows are projected in Rand, you cannot discount them with a dollar rate. Use the inflation differential (PPP logic), the same way the Roche example converted cost of capital using the interest rate differential:

> (1 + Rand cost of capital) = (1 + Dollar cost of capital) x (1 + South Africa inflation) / (1 + US inflation)
> = 1.1162 x (1.08 / 1.03)
> = 1.1162 x 1.0485
> ≈ 1.1704 → **Rand cost of capital ≈ 17.04%**

### Step 6: Two Roads to the Same NPV (Again)

**Route A:** Discount the 5-year Rand cash flow projections at the Rand cost of capital (17.04%) to get a Rand NPV, then convert to dollars using the **spot rate** (4.55 Rand per dollar).

**Route B:** Convert each year's Rand cash flow into dollars using **forward rates** (derived from the inflation differential, the same IRP/PPP-style logic used for Roche), then discount the resulting dollar cash flows at the **dollar** cost of capital (11.62%).

> **Professor:** "Both method will give you the same number... approximately 221,960 (in the case's cash flow units)."

Both routes reconcile — confirming, once again, that the shortcut (discount-and-convert-at-spot) is valid *as long as* the cost of capital and forward rates are built consistently using interest rate/inflation parity, and the cost of capital itself properly reflects country risk.

> **Professor's closing line on this topic:** "Whole thing here is you need to understand how to convert one cash flow to the other. First thing. Second is how to get the cost of capital incorporating country risk premium. If these two concepts are clear, then international financial management is also over."

---

## A Quick Look Ahead: Financial Distress (Introduced, Not Yet Covered)

With international finance wrapped up, the professor gave a short preview of the course's final topic — **financial distress** — without going into depth (there wasn't time left in the session). Two parts were flagged for the next class:

**Part 1 — Legal and definitional groundwork:** What triggers financial distress, and what legal routes exist (this is where the distinctions between **stress, insolvency, bankruptcy, and default** will be drawn out).

**Part 2 — Early warning signals and predicting default:** How to estimate the **probability of default well in advance**, rather than waiting for a company to actually default. Two interesting threads were flagged here:

- **Numbers lag; text leaks early.** Management tends to delay bad news showing up in the balance sheet and P&L for as long as legally possible, since lenders and investors watch those numbers closely. But the same management often *does* disclose vulnerabilities in the **text** portions of annual reports — director's statements, management discussion and analysis — because it protects them legally ("we told you, page 33, footnote — you didn't read it, that's your problem, not mine").

- **Concrete early-warning signs the professor named:** salary payments getting delayed (e.g., shifting from the 30th of the month to the 7th of the following month), delayed provident fund (PF) deposits, and delayed TDS/GST deposits. None of these show up in the balance sheet or in a clean audit compliance report — but they are the earliest tremors of trouble.

- **AI and NLP as new tools:** today, sentiment analysis can be run on quarterly earnings call transcripts (which listed companies are required to upload to stock exchange websites), including converting recorded voice calls to text. This lets analysts detect stress signals in *narrative* language — well before the numbers confirm it.

This is only a preview — the full treatment of financial distress will come in a later session.

---

## Key Formulae

| Formula | Expression |
|---------|-----------|
| **Cross-border NPV rule** | Same NPV rule always applies — but final decision must be in your own (home) currency |
| **Currency conversion direction** | To convert quote currency into base currency, divide by the exchange rate; base currency is written first in the quote |
| **Forward rate (Interest Rate Parity)** | Forward rate = Spot rate x (1 + interest rate of quote/domestic currency) / (1 + interest rate of base/foreign currency), raised to the power of the number of years |
| **Cost of capital conversion across currencies (IRP-based)** | (1 + Foreign currency cost of capital) = (1 + Domestic currency cost of capital) x (1 + Foreign interest rate) / (1 + Domestic interest rate) |
| **Global CAPM** | Cost of capital = Risk-free rate (US) + Global Beta x Global Market Risk Premium (based on MSCI World) |
| **Converting local currency stock return to USD return** | (1 + Return in USD) = (1 + Return in local currency) x (1 + change in exchange rate) |
| **Chaining a global beta when no direct global data exists** | Global Beta of company = Local Beta (company vs. local index) x Country-level Global Beta (local index vs. MSCI Global) |
| **Country Risk Premium — Method 1 (Bond Default Spread)** | Country risk premium = Yield on country's dollar-denominated sovereign bond - US Treasury yield (same maturity) |
| **Country Risk Premium — Method 2 (Relative Equity Volatility)** | Country risk premium = US Equity Risk Premium x (Std. deviation of country's equity index / Std. deviation of US equity index) |
| **Country Risk Premium — Method 3 (Blended)** | Country risk premium = Country Default Spread x (Country's equity market volatility / Country's bond market volatility) |
| **Company-specific adjustment — Beta Bracket** | Cost of equity = Risk-free rate + Beta x (Market risk premium + Country risk premium) |
| **Company-specific adjustment — Lambda approach** | Cost of equity = Risk-free rate + Beta x Market risk premium + Lambda x Country risk premium, where Lambda = exposure (revenue or assets) to that country / total |
| **PPP-based cost of capital conversion (used in country cases)** | (1 + Local currency cost of capital) = (1 + Domestic currency cost of capital) x (1 + Local country inflation) / (1 + Domestic country inflation) |
| **Overall WACC with country risk (add once, not twice)** | WACC = (After-tax Cost of Debt x Debt weight) + (Cost of Equity x Equity weight) + Country Risk Premium (added once at the end) |

---

## The Recipe Chain

**Sessions 1-4** (EVA, NOPAT adjustments, capital structure) --> **Sessions 5-9** (Distribution decisions, risk management foundations, futures, forwards) --> **Sessions 11-12** (Options pricing with binomial trees and Black-Scholes) --> **Session 13** (Interest rate swaps — converting rates and reducing borrowing cost, fair value vs. cash flow hedge; introduction to transaction/translation/economic exposure) --> **Session 14** (IRP and PPP explaining exchange rate movement; hedging transaction exposure with currency forwards, futures, and options) --> **Session 15** (Cross-border capital budgeting — converting NPV and cost of capital correctly across currencies using IRP/PPP; Global CAPM to solve the missing-beta problem for cross-listed and non-cross-listed firms; country risk premium via bond default spread, relative equity volatility, and the blended method; lambda-based company-specific exposure adjustment; brief introduction to financial distress) --> **Next:** Financial Distress — legal definitions (stress, insolvency, bankruptcy, default) and early warning signals for predicting default, including modern text/NLP-based approaches

---

## What's Next

- **Next session:** Financial Distress — Part 1 covers definitions and legal routes (insolvency, bankruptcy, default); Part 2 covers early warning signals and estimating probability of default, including AI/NLP-based sentiment analysis of earnings call transcripts and annual report text
- **Key connection:** This session closes out International Financial Management. The professor explicitly said: "If these two concepts are clear — how to convert cash flow across currencies, and how to get cost of capital incorporating country risk premium — then international financial management is also over."
- **Exam focus:** Be ready to work through (1) the spot-vs-forward NPV conversion mechanics (Roche example), (2) building a global beta via ADR or via currency-converted local returns (Infosys vs. HUL), and (3) a full country risk premium + WACC calculation (AIX/ABSA example) — including not double-counting the country premium across debt and equity
- **Watch for:** Questions that test whether you know *why* global CAPM is incomplete (it captures market/currency risk but not political/expropriation risk) and *when* to prefer the blended country risk premium method over the plain default spread (depends on whether bond-market and equity-market risk factors overlap in that country)

---

## The Real-World Takeaway

Here's the plain-English version of this whole session: whenever you're comparing something "over there" to something "over here," you have to make sure you're translating fairly on **every dimension** — not just currency, but also time value, and not just the obvious risks, but the risks that don't show up in a spreadsheet at all.

Think about it like this: if a colleague pitches you a "great deal" from another city or another country — a job offer, a vendor contract, a partnership — your first instinct might be to just convert the number into your own currency or your own terms and compare. That's Roche discounting in dollars and dividing by the exchange rate. It's a fine first pass. But the session's real lesson is that the *easy* conversion often quietly assumes away the parts of the risk that are hardest to model: political risk, "will they actually let me take my money out" risk, "will the rules change on me" risk. Global CAPM was the smart, rigorous tool — and it still missed Trump's tariffs and Chavez's nationalizations, because no beta regression can capture "a government might just take your factory."

The bigger idea underneath all of this: **your model is only as good as the risk you remembered to include.** A number that looks precise (513 million! 11.62%! two decimal places!) can still be dangerously incomplete if it silently ignores the one risk that actually matters in that specific context.

Where this shows up outside of finance:

- **Use this when evaluating a "great opportunity" in an unfamiliar market or team** — a new country, a new business unit, a new client industry. Ask explicitly: "what's the equivalent of country risk premium here — the risk that's specific to this unfamiliar territory that my normal playbook doesn't price in?"
- **Use this when someone hands you a benchmark from a context that isn't quite yours** — a "typical" growth rate, a "typical" cost, a "typical" timeline from a different market or team — and you're about to reuse it as-is. Ask what's baked into that benchmark that might not transfer.
- **Use this when negotiating anything cross-border or cross-team** — repatriating profits, transferring ownership of a project, moving resources between groups. The "rules can change on you" risk (a tax, a policy, a reorg) is real even when the headline numbers look fine today.
- **Use this when you're the one building the model** — always ask "whose point of view is this number really from?" Roche's 513 million dollar NPV quietly turned out to be a US company's number, not Roche's. The same trap happens whenever you build a plan using someone else's assumptions without checking whose risk they actually reflect.

One-liner to remember it by: **a clean number from a messy world is usually missing a risk premium — go find out whose.**
