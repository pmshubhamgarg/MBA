---
sidebar_position: 4
title: "Session 3: Capital Structure Theories and Real-World Evidence"
---

# Session 3: Capital Structure Theories and Real-World Evidence

*From Modigliani-Miller's perfect world to the messy reality of how companies actually raise money*

---

## Quick Recap: Where We Left Off

In Session 2, you covered the foundational capital structure theories:

- **MM Proposition 1** (no tax world): Capital structure doesn't matter. Value of the firm stays the same regardless of how you split debt and equity.
- **MM Proposition 2** (with taxes): Value of the levered firm goes up by the **tax shield** on debt. More debt = more tax shield = higher firm value. But there is no optimal point -- it just keeps rising linearly.
- **Trade-off Theory**: There *is* an optimal point. The value of the firm rises with debt (tax shield benefit) up to a point, then starts declining (distress cost overwhelms the tax shield). The sweet spot is the **trade-off** between tax shield and distress cost.

This session picks up right there -- with a warm-up on whether a no-tax world really exists, an MM numerical example, then moves to **Pecking Order Theory**, **Market Timing**, **Debt Overhang**, and five real-world case studies that show how capital structure theory plays out in practice.

---

## Does a No-Tax World Actually Exist?

MM Proposition 1 assumes a world with no corporate tax. The professor opens with a simple question: is that purely hypothetical?

Not quite. Students jump in:
- **Cayman Islands** -- historically no corporate tax (structured as offshore vehicles)
- **Dubai / UAE** -- for a long time had zero direct corporate tax, though recently introduced a small rate (5% VAT since 2018, and some corporate tax above a threshold)

> **Professor's quip:** "Dubai -- your clothes are at home. Why go to Cayman Island?"

The point: a no-tax world is rare but not impossible. Even in countries with taxes, creative structuring (e.g., a mutual fund vehicle) can simulate a no-tax environment.

---

## Solving an MM Problem: The Chicken-and-Egg Trick

Imagine you are asked: "What is the WACC of this firm?" You know WACC needs weights (proportion of debt and equity in total value). But to find weights, you need the **total value of the firm**. And to find total value, you need WACC. Chicken and egg.

Here is how MM helps you break the loop.

### The Setup

| Given | Value |
|-------|-------|
| Operating profit before tax | 40 million |
| Company pays out all income as dividend | Yes |
| Unlevered cost of equity (Ku) | 15% |
| Debt capital | 100 million |
| Interest rate on debt | 10% |
| Corporate tax rate | 40% |

### Step 1: Find the Unlevered Firm Value

You do not need capital structure to find the unlevered firm value. In a world with corporate tax:

> **Value of Unlevered Firm = Operating Profit x (1 - Tax Rate) / Ku**

> **= 40M x (1 - 0.40) / 0.15 = 24M / 0.15 = 160 million**

Important: 160 million is **not** the value of the levered firm. It is what the firm would be worth if it had zero debt. But this firm has debt. So you need to add the tax shield.

> **Professor's warning:** "You can't say 160 million is the value of the unlevered firm, 100 million is debt, so debt is 100 by 260. You can't say that. Because 160 is not the value of the levered firm. It is the value of the firm when there is no debt."

### Step 2: Find the Tax Shield and Levered Firm Value

> **Tax Shield = Debt x Tax Rate = 100M x 40% = 40 million**

> **Value of Levered Firm = Unlevered Value + Tax Shield = 160 + 40 = 200 million**

### Step 3: Find the Capital Structure

Total firm value is 200 million. Debt is 100 million. So equity must be 100 million.

| Component | Value | Weight |
|-----------|-------|--------|
| Debt | 100M | 50% |
| Equity | 100M | 50% |
| **Total** | **200M** | **100%** |

### Step 4: Find Cost of Equity and WACC

With 50% debt, the cost of equity rises (because equity holders bear more risk):

> **Ke = Ku + (Ku - Kd) x (1 - T) x (D/E)**

> **Ke = 15% + (15% - 10%) x (1 - 0.40) x (100/100) = 15% + 3% = 18%**

Now WACC:

> **WACC = (Weight of Debt x Cost of Debt x (1 - Tax)) + (Weight of Equity x Cost of Equity)**

> **WACC = (50% x 10% x 0.60) + (50% x 18%) = 3% + 9% = 12%**

### Why WACC is 12%, Not 14%

A student asks: debt is 10%, equity is 18%, both are 50-50 -- so why is the average not 14% (the simple midpoint)?

> **Professor:** "Your effective debt cost is not 10%. It is actually 6% after the tax shield. So half of 6% is 3%, and half of 18% is 9%. 3 + 9 = 12. That is what you got."

The tax shield makes debt cheaper than it appears on paper. That is the whole magic of leverage in a world with taxes.

---

## Pecking Order Theory: There Is No Optimal -- Just an Order

After MM and Trade-off, a new theory arrived in 1984 from **Stewart Myers and Nicholas Majluf**. Myers is an emeritus professor at MIT Sloan -- one of the most influential finance academics, still working and well past 80.

The theory says something very different from trade-off:

**There is no optimal capital structure. There is only a sequence you should follow when raising money.**

### The Pecking Order

| Priority | Source | Why This Order |
|----------|--------|---------------|
| 1st | **Retained Earnings** | Zero information asymmetry -- you are using your own money |
| 2nd | **Simple Debt** (bank loan) | Low information asymmetry -- fixed rate, fixed tenure, collateral-backed |
| 3rd | **Complex/Hybrid Debt** (convertible bonds) | Higher information asymmetry -- has an equity-like component |
| 4th (last resort) | **External Equity** (issue shares) | Highest information asymmetry -- sends a negative signal to the market |

> **Professor's clarification:** "This is for an existing company, not a startup. Mature companies avoid issuing equity. That is the last option, not the first option."

### The Engine Behind Pecking Order: Information Asymmetry

Why this order? Because of the **information gap** between managers (insiders) and outside investors.

Managers have inside information that investors don't. They know the real health of the company, the pipeline, the risks. External shareholders only have publicly available information.

> **Student (Senthil):** "It's a matter of information asymmetry, sir. Insiders might have better knowledge as to how the company is performing."

> **Professor:** "Very good. There is an information asymmetry between the manager and external shareholders."

### Where Is Information Asymmetry Higher? A Surprising Answer

The professor poses an interesting comparison: **Adani Cement vs. Hindustan Unilever**. Several students guess Adani Cement has higher asymmetry -- it is capital heavy, complex, harder to understand. The answer is the opposite.

**Hindustan Unilever has higher information asymmetry.** Why?

- Cement is a **single-product, commoditized** business. You can predict market size, pricing, and capacity easily from publicly available data.
- Hindustan Unilever has **hundreds of brands, intangible assets, knowledge capital** -- much of which sits **off the balance sheet**. It is far harder for an outsider to assess the true value.

> **Professor:** "Intangibles. Many assets of Unilever are not on the balance sheet. As a company has more brands, more intangible, more knowledge capital, information asymmetry widens. But if you are a heavy capital-intensive single-product commoditized business, information asymmetry is less."

**Memory trick:** Tangible assets = easy to verify from outside = low asymmetry. Intangible assets (brands, IP, talent) = hard to verify = high asymmetry.

---

## The Adverse Selection Problem: Why Equity is the Last Resort

This is the heart of pecking order theory. The professor walked through it with a beautifully simple numerical example that makes the concept click.

### Setup: Company X

- Company X can be one of two types:
  - **H-type** (high value, good news): worth **150**
  - **L-type** (low value, bad news): worth **50**
- Each scenario has a **50% probability**
- **Expected value = (50% x 150) + (50% x 50) = 100**
- Current market price = **100** (the market does not know the true type -- it assigns 50% probability to each)

Now, the company has a **new project** that needs an investment of **20** and has an **NPV of 10**. The gross value of the project is therefore 30 (investment + NPV). They decide to fund it by issuing shares.

### Scenario 1: Managers Know the Company is H-Type (Undervalued)

The managers know the real value is 150, but the market price is only 100.

- To raise 20 at market price 100, existing shareholders must **dilute 20%** (20 out of 100)
- They are giving up 20% of the real value: **20% x 150 = 30**
- They receive: NPV of 10 + cash raised of 20 = **30**

> **Net payoff to existing shareholders = NPV + Cash Raised - Dilution Sacrifice**

> **= 10 + 20 - 30 = 0**

Zero value addition. The existing shareholders break even at best. And if the information gap were wider (say true value is 160 instead of 150), the payoff becomes **negative**. The existing shareholders actually lose money.

> **Professor:** "So what the existing shareholders will do? They will say never issue shares. Go for debt or use your internal cash. Because if you issue shares, I will lose and the new shareholders will gain."

Think about it from the long-term shareholder's perspective:

> **Professor:** "Suppose I have been there for 5 years. My investment has grown today to 150 internally. I toiled hard. I stayed with the company, reposed faith. And new guys coming today, entering at 100, and in one year's time getting 150 benefit. I should not allow."

### Scenario 2: Managers Know the Company is L-Type (Overvalued)

The managers know the real value is only 50, but the market still thinks it is 100.

- Same dilution: 20% of shares given up
- But sacrifice is only: **20% x 50 = 10** (because the real value is much lower)
- Payoff: NPV of 10 + cash of 20 - sacrifice of 10 = **+20**

Positive payoff. Existing shareholders **love** issuing shares here because the market is overvaluing them. New investors are buying in at an inflated price.

### The Signal Problem

Here is the catch: **outside investors are not stupid.** They have done the math too.

They know that if existing shareholders approve a share issuance, it probably means the company is an L-type (overvalued). If it were an H-type, the board would have blocked it.

So the moment a company announces a share issue to fund a new project, the market reads the signal:

> "There must be bad news coming. They are trying to cash out at a high price."

This is called **adverse selection** -- a concept from economics where the market assumes the worst. Investors either refuse to invest or demand a heavy discount.

> **Professor:** "External shareholders have done the maths. They know whenever a company comes up with the issue of shares, it is an L-type company. Otherwise why should it issue shares? Existing shareholders should deny it. So if they get an approval from their board to issue shares, outsiders read the signal -- oh, there must be an L-type, that means some bad news is coming."

### Why Retained Earnings Come First

A student asks: we understand why equity is last, but why should retained earnings be the **first** option?

> **Professor:** "Because information asymmetry is zero. Retained earnings are inside the company. The management knows the real picture. There is no information cost. If there is no information cost, it is the cheapest source of funding your new project."

No outside party is involved. No signal is sent. No adverse selection. The cheapest option, by definition.

### Why Simple Debt Comes Before Equity

Both debt and equity involve going to the outside market. So why is debt less prone to adverse selection?

> **Professor:** "Simple debt -- you take the loan, you pay fixed rate of interest, and repay the loan over time in a fixed tenure. The bank need not process information for the life of the company because there is a contractual agreement. Plus the bank is taking collateral -- your building, plant, machinery. So if it is collateralized, fixed tenure, fixed rate of interest, the information cost is not high."

With equity, there is no guaranteed payment. It is a promise. "I can promise many good things, but you invest and then you find a shallow hole of the company." The information cost is far higher.

### Why Complex Debt is Third

Complex debt like **convertible bonds** has a "quasi-share angle" -- it can be converted into equity. That means the information asymmetry is higher than plain debt but lower than pure equity. Hence it sits third in the order.

> **Professor:** "Convertibles -- I give debt which can be converted into shares. That has a quasi-share angle, and hence information asymmetry increases. That is why it is third, and equity is last."

### A Student's Smart Question: QIP vs. FPO

A student named Raab asks: within equity issuance, does the adverse selection differ between a **QIP** (Qualified Institutional Placement, where you sell to big institutions) and an **FPO** (Follow-on Public Offer, where you sell to the general public)?

> **Professor:** "The information asymmetry would be lower for QIPs. Why? Because institutions can have an army of employees to track the performance of a particular company. Talk to the CFO. So the gap between real worth and market price will be lower, which means the adverse selection problem will be lower. They might invest."

QIPs face **less** adverse selection than FPOs because institutional investors can do deep due diligence, narrowing the information gap.

---

## Debt Overhang: When Even Debt Cannot Save You

Seven years before pecking order, the same Stewart Myers wrote another important paper (1977). He identified a related but distinct problem:

**If a company already has very high debt, it will let good projects pass -- even NPV-positive ones.**

This is called the **debt overhang problem**.

Why would rational managers walk away from value-creating projects? Because the equity shareholders believe that any improvement in firm value will flow to the **bondholders first**, not to them. The existing debt holders are the first claimants on any upside.

> **Professor:** "Equity shareholders believe that if there is a betterment of value because of the positive NPV project, that will go to the bond holders, not to me. So why allow it?"

Think of it like this: you owe your landlord so much back-rent that any extra money you earn goes straight to him. Why bother earning more?

**Connection to Pecking Order:**

| Theory | When do firms pass on good projects? | Mechanism |
|--------|--------------------------------------|-----------|
| **Pecking Order** (1984) | When they would have to issue equity | Adverse selection -- market assumes overvaluation |
| **Debt Overhang** (1977) | When existing debt is already too high | Benefits of new investment flow to bondholders, not shareholders |

These are complementary theories. Together, they explain why companies sometimes leave money on the table.

---

## Market Timing Theory: Just Grab Whatever is Cheap

In 2002 -- almost 20 years after pecking order -- **Baker and Wurgler** proposed a completely different view:

**There is no order. Managers simply time the market.**

- When debt is available cheap (low interest rates), they issue debt
- When the stock market is booming and equity is cheap (high valuations), they issue shares
- Whatever instrument the market is offering at a bargain, they grab it

> **Professor on SpaceX:** "Elon Musk is coming up with the world's largest IPO -- 75 billion. It is timing the market because the US stock market is at its highest level over decades. And not only that, the growth is driven by five or six AI and deep-tech companies, and SpaceX belongs to that sector. This is not that it needs 75 billion immediately. It says I will set up data centers in Mars. That is a moonshot. You cannot invest 75 billion today but it is raising money today because of market timing."

A student asks: "The recent flood of IPOs in India -- was that market timing?"

> **Professor:** "Yeah. Flood of IPOs is market timing."

---

## Signaling Theory: Actions Speak Louder Than Balance Sheets

Between pecking order and market timing, around 1977, there is also a **signaling theory** of capital structure. The idea:

- If a company **reduces its debt**, it is sending a signal to the market: "We are putting our house in order. We will be able to invest for growth in the future."
- If a company has high debt and reduces it, it is saying: "We are addressing the debt overhang. We can grow now."

This becomes very important in the Bharti Airtel case study below.

---

## The Timeline of Capital Structure Theories

| Year | Theory | Key Idea | Optimal Structure? |
|------|--------|----------|-------------------|
| 1958 | **MM Proposition 1** (no tax) | Capital structure irrelevant | No optimum |
| 1963 | **MM Proposition 2** (with tax) | More debt = higher value (tax shield) | No optimum -- keep adding debt |
| ~1970s | **Trade-off Theory** | Balance tax shield vs. distress cost | **Yes -- there is an optimum** |
| 1977 | **Debt Overhang** (Myers) | Too much debt makes firms pass on good projects | No optimum, but a constraint |
| ~1977 | **Signaling Theory** | Capital structure changes send signals | No optimum, behavioral |
| 1984 | **Pecking Order** (Myers and Majluf) | Follow the sequence: retained earnings, debt, equity | No optimum -- follow the order |
| 2002 | **Market Timing** (Baker and Wurgler) | Grab whatever is cheapest right now | No optimum -- be opportunistic |

> **Professor's observation:** "From 1958 to 2002, people are still grappling -- is there any one particular theory of capital structure that companies can follow? No such theory. It clearly depends on market conditions, on your needs. It varies."

---

## Multiple Choice Theory Check (From Class)

The professor walked through three quiz-style questions. These test conceptual clarity -- exactly the type that appears on actual quizzes.

### Question 1: Increase Debt, Keep Total Capital Same -- How?

**Q:** A company increases the amount of debt in its capital structure while keeping total capital employed the same. How is this possible?

**A:** Issue debt and **buy back shares**. That way, total capital stays constant while the mix shifts toward more debt.

In a **perfect capital market with no tax** (MM Proposition 1 world), what happens to WACC? **Remains the same.** Capital structure doesn't matter in a no-tax world.

### Question 2: Zero Debt to Higher Debt -- Value Impact?

**Q:** A company goes from zero debt to successively higher levels of debt. What happens to the value of the company?

| If you believe in... | Answer |
|----------------------|--------|
| **MM Proposition 1** (no tax) | **Remains the same** -- capital structure is irrelevant |
| **MM Proposition 2** (with tax) | **Rises** -- because of the tax shield |
| **Trade-off Theory** | **Rises, then falls** -- optimal point exists |

### Question 3: Oil Discovery + Confidential Information

**Q:** A company discovers its unused land contains huge quantities of crude oil. The information is confidential. How should they raise capital?

**A:** Issue **bonds** (simple debt). This is a pecking order question. The company has private good news, meaning its shares are currently **undervalued**. Issuing equity would be the worst option (adverse selection -- they would be giving away underpriced shares to new investors). Not convertible bonds either (that is complex debt, third in the order). Simple plain bonds.

> **Professor:** "This question is on pecking order theory. Where it says issue bond -- simple, plain, simple. The last option of equity will be true only when there is a restriction or a limit up to which you can issue bond."

---

## Five Real-World Case Studies: Theory Meets Practice

After the quiz break, the professor presented five Indian companies and asked: which theory does each one follow? The conclusion is powerful -- no single theory wins, but theory gives you the factors to think about.

### Case 1: TCS -- The Cash-Rich, Debt-Free IT Giant

| Metric | Value |
|--------|-------|
| Debt | Virtually zero |
| Equity | ~98,000 Cr |
| Cash + Deposits + Investments | ~47,000 Cr |
| Liabilities | Mostly operating (payables, salaries, leases) |

**Almost half** of TCS's equity is sitting in cash. No financial debt at all.

**Why zero debt?** TCS is an asset-light IT services company. No factories, no plant and machinery. Its assets walk out the door every evening.

> **Professor's vivid analogy:** "At the end of the day's work, when the employees of Reliance Industries go home, assets remain in place with Reliance. But when TCS employees go home, assets go out of the company. If next day they don't return, TCS will not survive."

**Why hold so much cash?** TCS and Infosys gave the professor three justifications when he pushed them:

1. **Salary buffer:** Need to pay 500,000+ employees even during lean periods. Hold 2-3 years of salary as a safety net. (The professor tested this math -- "even that math doesn't work" to justify 47,000 Cr.) Microsoft used the same argument during Bill Gates's era.

2. **Opportunity capital for acquisitions:** Keep cash ready to buy companies in new lines of business.
> **Professor's pushback:** "I said okay, how much cash you need? Look at your last 10 years of M&A history. How many companies have you acquired? What was the size of each acquisition? Doesn't add up. Before Sikka came, they hardly acquired companies."

3. **Project cycle cash needs:** IT projects require upfront investment before milestone-based billing kicks in.
> **Professor's response:** "But then their days sales outstanding is not 365 days."

> **Professor's take:** "I am not saying 47,000 is good or bad. I am saying you have to do a hard sell to your investor in the board meeting and the shareholders meeting to justify holding this kind of cash."

**Which theory?** **Pecking Order.** TCS holds massive cash and has no intention of raising debt. If they need to expand, they use internal funds first. They are naturally following the pecking order sequence.

---

### Case 2: Reliance Industries -- High Debt AND High Cash

| Metric | Value |
|--------|-------|
| Gross Debt | ~3,47,000 Cr |
| Cash and Investments | ~2,30,000 Cr |
| **Net Debt** | **~1,17,000 Cr** |
| Net Debt-to-Equity | ~0.4x (moderate leverage) |
| Capex (FY25) | ~1,31,000 Cr |
| Credit Rating | **AAA** |

Mukesh Ambani famously said at an AGM: **"We want to be a zero net debt company."** Not zero debt -- zero **net** debt.

> **Net debt = Gross debt minus cash.** Reliance has both high debt AND high cash.

**The puzzle:** Why keep both debt and cash so high? Why not just pay off the debt with the cash?

A student suggests: "Tax advantage -- you get tax benefit on the interest." The professor challenges this head-on:

> **Professor:** "It is true that you are getting tax benefit on the interest on that 3 lakh crore of debt. But you are also paying tax on the income from that 2 lakh crore of cash -- interest income, dividend income. So purely from a tax angle, it is not a motivation for keeping it gross."

**Then why?** Several reasons working together:

1. **Growth war chest:** Reliance incurred 1.31 lakh crore in capex in one year. It needs the cash ready to deploy. "Don't net it off, then you don't have the war chest with you."

2. **No debt overhang:** Despite 3.5 lakh crore of debt, Reliance is NOT shying away from massive investments in O2C and other businesses. The debt has not caused underinvestment.

3. **Low distress cost:** AAA rating means lenders feel safe. Moderate net leverage (0.4x).

4. **Collateral advantage:** As a capital-intensive conglomerate with hard assets (refineries, telecom towers, retail stores), banks lend comfortably.

> **Professor:** "The bank is not giving you money on a brand or intangibles. They are giving you money for hard assets. And hence you can take up more debt without reducing your levered value."

**Which theory?** **Trade-off + Market Timing.** Trade-off because they can carry high debt at low distress cost (AAA, hard assets, moderate net leverage). Market timing because they grab cash when it is available cheap and keep the war chest ready for opportunistic deployment.

---

### Case 3: Bharti Airtel -- Refinancing to Signal Growth

| Metric | Value |
|--------|-------|
| Net Debt-to-EBITDA (after lease) | ~1.6x (down from 2.1x) |
| Business | Telecom (infrastructure-heavy, single business line) |
| Strategy | Prepaid 667 billion of high-cost spectrum liabilities |
| Approach | **Refinancing** -- swapping expensive debt for cheaper debt |

Bharti Airtel is a capital-intensive telecom company in a single line of business. Unlike Reliance, it does not have the diversification cushion of a conglomerate.

**What is it doing?** It is not eliminating debt. It is **swapping expensive old debt for cheaper new debt** -- a strategy called refinancing.

> **Professor:** "This is a very smart strategy where you may not change your debt equity much but yet can reduce your cost of capital by refinancing."

The result: net debt-to-EBITDA dropped from 2.1x to 1.6x without changing the overall capital structure dramatically.

**Two theories at work:**

1. **Trade-off Theory:** By reducing distress cost (lower debt-to-EBITDA), future borrowing becomes cheaper. The company is moving closer to the optimal point.

2. **Signaling Theory:** Reducing debt sends a clear message to the market.
> **Professor:** "You are sending a signal to the market that I am keeping my house in order, trying to improve my housekeeping by reducing distress cost, so that my future borrowing can be at a cheaper rate."

The signaling connects to debt overhang too:
> **Professor:** "If I have too much debt, I may pass some good projects. So if I reduce the debt, I am giving a signal that I will be investing for growth in future. I had too much debt earlier at 2.21 times. If you have a high debt, there is a debt overhang problem. You cannot grow. So I have reduced my debt so that I can grow."

**Which theory?** **Trade-off + Signaling.** Trade-off because it is actively reducing distress cost. Signaling because the debt reduction communicates future growth intent to the market.

---

### Case 4: Tata Steel -- When Low Debt-Equity Hides High Distress

| Metric | Value |
|--------|-------|
| Net Debt-to-EBITDA | **3.2x** (very high) |
| Net Debt | ~82,000 Cr |
| Debt-to-Equity | **0.9x** (looks moderate!) |

Here is a trap that catches many analysts. Tata Steel's debt-to-equity ratio looks fine at 0.9 -- less than 1. But its **debt-to-EBITDA is 3.2 times**.

How can both be true?

A student correctly identified the issue: **profitability is very low.** The debt amount is not outrageous relative to equity. But relative to **earnings**, it is enormous. Tata Steel is earning too little to service its debt comfortably.

**The implication is devastating for future borrowing:**

> **Professor:** "You might say traditionally 0.9-to-1 is low debt, I can take more. No. Because if the banker says my benchmark debt-to-EBITDA is two and you are having three, you will not get a loan."

So even though the balance sheet looks okay, bankers look at debt-to-EBITDA as a **covenant** (a lending condition). If you breach it, the loan door shuts.

> **Professor:** "You will win on one side, you will lose on the other covenants meaning other restrictions which is debt-to-EBITDA. You may not get the loan. So you might have hit the distress point that you will not get additional debt."

**Where does the money come from then?** This is where the **Tata Group's internal capital market** saves the day.

> **Professor:** "TCS -- the only profitable company -- they pay a lot of dividend. Dividend goes to other companies, from there the money comes. They have a very robust internal capital market system."

TCS pays huge dividends to Tata Sons (the holding company), which then funnels capital to Tata Steel, Tata Motors, and other group companies that need it. It is pecking order at the group level -- using internally generated cash before going to external markets.

**Industry comparison matters:**

> **Professor:** "Don't compare Tata Steel with TCS. Capital structure is a function of your business model or the sector you belong to. A 2-to-1 debt-by-EBITDA might be okay for steel. But if TCS had two-to-one, that is a real problem. You have to compare Tata Steel with other steel players."

**Which theory?** Tata Steel has likely hit its distress ceiling. External debt is too costly. It relies on **internal capital markets** (a group-level pecking order) and needs to **improve profitability** before the external market opens up again.

**Key lesson:** Always look at **both** debt-to-equity **and** debt-to-EBITDA. One can mask problems the other reveals.

---

### Case 5: HDFC Bank -- Capital Structure Theory Does Not Apply

For banks, the entire capital structure framework breaks down.

> **Professor:** "For a bank, deposits and borrowings are not debt. They are the raw material of the bank. You can't apply the traditional capital structure theory for banks. There is no concept of debt-to-equity for a bank."

Deposits are to a bank what steel is to a car manufacturer -- the raw material. Banks take deposits, lend them out, and earn a spread. That is the business model. You cannot call that "leverage."

Instead, banks use the **Capital Adequacy Ratio (CAR)** -- a regulatory measure set by the central bank that ensures banks hold enough equity capital against their risk-weighted assets.

**Key takeaway:** When discussing capital structure, keep **banks outside** the analysis. They follow regulatory rules, not MM or pecking order.

---

## The Grand Conclusion: Theory Gives You Factors, Not Formulas

After walking through five companies and six theories, the professor landed on the big takeaway.

A student asks the most practical question of the evening:

> **Student:** "We looked at five organizations and tried to analyze them with the theories we studied. How are these theories applied while making decisions? I have rarely seen them in action."

> **Professor:** "Nobody says 'okay let us apply pecking order.' Not that way. Managers, when they take a decision of a particular capital structure... what the theories tell you are the factors that you should consider before deciding your own capital structure."

### The Six Factors That Drive Capital Structure

| Factor | What It Means | Implication |
|--------|--------------|-------------|
| **Asset Tangibility** | More tangible assets (plant, machinery) | Can safely borrow more -- collateral reduces lender risk |
| **Cash Flow Stability** | Stable, predictable cash flows | Can take on more debt -- reliable repayment ability |
| **Growth and Profitability** | High profit, high growth | Use retained earnings first, then debt (pecking order) |
| **Taxes** | Low corporate tax rate | Debt advantage shrinks -- no meaningful tax shield |
| **Cyclicality** | Boom-bust business cycles | Lenders shorten loan tenures; be cautious with long-term debt |
| **Regulation** | Regulated industries (banks, utilities) | Must follow regulatory capital requirements, limited choice |

> **Professor:** "Theory gives you what are the factors. Your industry tells you -- given the factors -- which should be your first source of raising capital, and the next, and the next."

### Target vs. Actual Capital Structure

One final practical concept the professor emphasized:

> **Professor:** "Please remember, capital structures are targets. You have an expected capital structure which is your desired structure. Your current structure can be away from the desired, and you work towards it."

How do you decide the target? Usually the **industry average** is the benchmark. If your debt-to-equity is 4x but the industry average is 2x, you work toward it through profitability improvement, refinancing, and debt prepayment.

> **Professor:** "Your current structure could be out of a situation, circumstances. But what you work for, work towards, is a target."

---

## Key Formulae

| Formula | Expression |
|---------|-----------|
| **Value of Unlevered Firm** | Operating Profit x (1 - Tax Rate) / Ku |
| **Tax Shield (perpetual debt)** | Debt x Tax Rate |
| **Value of Levered Firm** | Value of Unlevered Firm + Tax Shield |
| **Cost of Equity (levered)** | Ku + (Ku - Kd) x (1 - T) x (D/E) |
| **WACC** | (D/V x Kd x (1-T)) + (E/V x Ke) |
| **Net Debt** | Gross Debt - Cash and Equivalents |
| **Adverse Selection Payoff** | NPV + Cash Raised - (Dilution % x True Firm Value) |

---

## Memory Tricks

- **Pecking Order = Privacy Order:** The more private (internal) the source, the cheaper it is. Retained earnings (fully private) come first. Equity (fully public) comes last.
- **Adverse Selection = The Lemon Problem:** If the seller is eager, the buyer suspects a lemon. If a company eagerly issues shares, the market suspects overvaluation.
- **Debt Overhang = Landlord Problem:** If you owe too much rent, why bother earning more? All the extra goes to the landlord (bondholder).
- **Information Asymmetry = Intangibles Rule:** More intangible assets (brands, IP, talent) = wider information gap. More tangible assets (plants, machines) = narrower gap. Hindustan Unilever has more asymmetry than Adani Cement.
- **Two Ratio Rule:** Always check both D/E and Debt/EBITDA. One ratio can hide what the other reveals. (Tata Steel looked fine on D/E but terrible on Debt/EBITDA.)

---

## The Recipe Chain

**Session 1** (EVA: the integrated metric linking investment, financing, and distribution decisions) --> **Session 2** (MM, Trade-off: the theoretical foundations of capital structure) --> **Session 3** (Pecking Order, Market Timing, Signaling, Debt Overhang: completing the theory toolkit + real-world evidence from TCS, Reliance, Bharti, Tata Steel, HDFC Bank) --> **Grand insight:** Capital structure follows business model, not a single theory. Theory gives you the factors; your industry tells you the answer.

---

## What's Next

- **Next session topic:** Innovative sources of financing ("lockdown financing") -- creative ways companies raise money beyond traditional debt and equity
- **Pre-read:** Go through the pre-read material on innovative/structured financing shared on LMS before the Saturday session
- **Remember:** Quiz questions test conceptual clarity (which theory applies in which scenario, why), not rote memorization. Know the factors, know the signal, know the mechanism.

---

## The Real-World Takeaway

Picture a friend who just took out a huge personal loan and, in the same breath, is sitting on a mountain of cash in a savings account. Your first thought is probably "why don't you just pay it off?" That is exactly the question the class asked about Reliance -- and the honest answer was not one clean theory, it was three or four reasons stacked together: keeping a war chest for the next big bet, not wanting to look weak to lenders, and having assets solid enough that banks do not worry. Years from now, the formulas will fade, but that instinct -- to notice when someone's numbers do not match their story, and to ask "okay, but why really?" -- is the thing worth keeping.

The deeper habit this session teaches is to distrust neat, single-cause explanations for money decisions, whether it is a company or a colleague's budget request. TCS says it holds a mountain of cash "for salaries" or "for acquisitions," but the professor did the math and neither justification actually adds up to the amount sitting there. That is not a finance-only skill. It is the same move as noticing your team lead says "we're hiring slowly to be careful with costs" when the real reason is a frozen budget nobody wants to admit to. The theories in this session are not really about debt and equity -- they are about reading the gap between the reason people give and the reason that is actually true.

The other lasting idea is that there is no single right formula, only a set of factors to weigh given the situation -- and that "what a company should aim for" and "what it currently has" are two different things it is always working to close. A steel company and a software company will never look the same on paper, and that is fine; the mistake is comparing them like they should. At work, this shows up whenever someone benchmarks your team, budget, or project against a completely different kind of team and calls it unfair that you look worse.

Use this when:
- Someone justifies a big cash reserve or a big loan with a one-line reason -- ask what the numbers actually say before accepting the story.
- You are compared against a peer team or company that has a fundamentally different business model -- push back on the comparison itself, not just the number.
- A leader announces a policy change (cutting costs, paying down debt, canceling a project) -- consider what signal it is quietly sending to the people watching, not just the stated reason.
- You are asked to fund something new -- retained earnings, err, "just use what you already have," is almost always cheaper and less politically loaded than asking outsiders for money.

If you remember nothing else: when the stated reason and the math do not add up, trust the math -- and ask what the real reason is.
