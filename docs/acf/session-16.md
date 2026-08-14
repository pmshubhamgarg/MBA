---
sidebar_position: 17
title: "Session 16: Financial Distress, IBC Resolution, and Predicting Default"
---

# Session 16: Financial Distress, IBC Resolution, and Predicting Default

*Distress is never an accident — it leaves footprints. This session is about reading those footprints, understanding what India's insolvency machinery does once a company falls off the cliff, and learning the models that try to warn you before it happens.*

---

## The Big Picture: Distress Is a Process, Not an Event

Imagine a company slowly running out of breath. It doesn't collapse overnight — salaries get delayed, then the auditor starts hesitating to sign off, then a key manager quietly resigns, then the working capital line from the bank is maxed out. Nobody wakes up one morning and discovers a company has "gone bankrupt." It accumulates.

> **Professor:** "Financial distress is not an event which happens suddenly. It accumulates. So one can find traces of financial trouble well in advance. And one should take early action. If you take early action, the pain for getting out of the financial distress is less. If you take late action, then you have a greater pain."

Some companies even treat distress as a **strategic alternative** — a deliberate restructuring decision — rather than waiting for it to become a crisis. That single idea (early signal, early action, less pain) is the thread running through the whole session: from the definition of distress, to the IBC machinery, to three real cases, to the models that try to score default risk before it actually happens.

**Definition:** A company is in financial distress when its **operating cash flows are insufficient to satisfy current obligations** — obligations meaning payments due in the next 12 months: salaries, interest, loan repayments, statutory dues, and so on. If you can't pay these from operating cash flow and you're forced to borrow just to cover regular expenses, that is a sign of distress.

---

## Why This Matters: The Trade-off Theory Connection

This ties directly back to capital structure theory covered earlier in the course:

> **Value of Firm = Value of Unlevered Firm + PV(Tax Shield on Debt) − PV(Cost of Financial Distress)**

Financial distress has a direct, negative claim on firm value. It also raises the **cost of capital**: a distressed firm's borrowing options shrink, and even where credit is available, it comes at a much higher interest rate.

---

## Reading the Footprints: Early Warning Signals

Building on signals introduced in the previous session, the professor listed both **internal** and **external** signals of distress:

**Internal signals:**
- Delayed payment of statutory dues and salaries
- Layoff plans, shutdown announcements
- Key management personnel leaving the organization
- Auditors refusing to sign off / declining to continue as auditor
- **Funding stress** — for example, a company with a 100-crore working capital line of credit that has already drawn the full 100 crore has maxed out its funding channel. If operating cash still can't meet expenses at that point, distress has set in.

**External signals (consequences that ripple outward):**
- **Rating downgrades** (e.g., AA to single A)
- Stock price falls for listed companies
- Borrowing cost rises
- Suppliers stop extending credit
- Customers move to competitors

---

## Three Words People Confuse: Distress, Insolvency, Bankruptcy

These get used interchangeably in casual conversation, but they are **not the same thing**:

| Term | What It Means |
|------|---------------|
| **Distress** | A *condition* — inability to pay regular obligations. Not yet a legal process. |
| **Insolvency** | Happens only when, after prolonged distress, an application is filed with the IBC (Insolvency and Bankruptcy Code) for a **company**. Outcome is either **resolution** (restructuring/revival) or **liquidation**. |
| **Bankruptcy** | Applies to **individuals** or partnership firms — not companies. There is no "resolution" option; it goes to the **Debt Recovery Tribunal (DRT)** purely for **recovery**. |

> **Professor:** "A company insolvency happens only when after distress somebody files an application to IBC... Bankruptcy on the other hand happens with individual. There is no bankruptcy for a company but there is bankruptcy for individual or partnership firms, and there is a recovery tribunal."

Once an IBC application is filed, a **moratorium** kicks in — the company doesn't have to pay creditors while a resolution is being worked out. In the DRT process for individuals, there is no such protective pause — it is a straight recovery exercise; the lender may not recover the full amount owed.

---

## Who Can File? Financial Creditor vs. Operating Creditor

The professor tested the class on this distinction, and both student answers offered were wrong:

> **Anoj's guess:** Financial creditors give long-term loans (banking sector); operating creditors help with working capital / short-term loans.
>
> **Professor's correction:** "That is wrong, both of you are wrong. Financial creditor: anybody who is giving finance. Doesn't matter short-term, long-term. If somebody is giving you money — whether it is for working capital purposes or for long-term project purposes — they are financial creditors. Operating creditors are suppliers. Those who give you goods, services — they don't give you money."

| Creditor Type | Who They Are | Example |
|---------------|-------------|---------|
| **Financial Creditor** | Anyone who lends **money** (short-term or long-term) | Banks, bondholders |
| **Operating Creditor** | Anyone who supplies **goods or services** (not money) | Raw material suppliers, vendors |

Both financial and operating creditors — and even the company (debtor) itself — can file an application with the National Company Law Tribunal (NCLT) to trigger insolvency resolution.

---

## How the IBC Resolution Process Actually Works

### The Four Institutional Pillars

IBC is a *code*, not a court — it needs agencies to actually execute it:

| Pillar | Role |
|--------|------|
| **IBBI** (Insolvency and Bankruptcy Board of India) | Regulator — ensures the rules of IBC are followed |
| **NCLT** (National Company Law Tribunal) | Adjudicator for **corporates** — approves or rejects resolution/liquidation |
| **DRT** (Debt Recovery Tribunal) | Handles **individual** bankruptcy — pure recovery, no resolution |
| **Insolvency Professionals (IPs)** | Hired by the Committee of Creditors; identify buyers, structure the resolution plan, or help liquidate if resolution fails |

### The Step-by-Step Process

1. **Filing:** Financial creditor, operating creditor, or the debtor itself files an application with the NCLT.
2. **Moratorium:** The moment it's filed, the company need not pay any dues. The board is suspended and resolution professionals take over day-to-day management.
3. **Committee of Creditors (CoC) formed:** All creditors — financial and operating — form a committee.
4. **Resolution plan proposed:** IPs identify a prospective buyer/investor and structure a plan.
5. **Voting:** The plan needs **2/3 majority (67%) by value** of the CoC to pass. (Earlier, under the old regime, 90% consent was required — the threshold was lowered to 67% to make resolutions actually achievable.)
6. **NCLT approval:** Once approved, the plan is **binding on all stakeholders**, including the dissenting 33% who voted against it.
7. **Timeline:** Normally **180 days**, extendable by a 90-day extension (270 days) and then a further 60-day extension (330 days total). If no resolution is found within that window, the company goes to **liquidation**. (Exceptions can be granted — see the SR Steel case below, which took 840 days via Supreme Court intervention.)
8. **If liquidation:** Assets are sold, a receiver is appointed, and proceeds are distributed per a strict **waterfall** (Section 53 of the IBC):

> **Liquidation Waterfall:** Secured Creditors → Workmen/Employees → Unsecured Creditors → Government Dues → **Equity (last, often nothing)**

### Section 29A — Closing the Promoter Loophole

Under the old regime, a defaulting promoter could let the bank seize and auction their own company's assets, then **participate in the same auction and buy the asset back cheaply**. This created a **moral hazard** — reckless borrowing, knowing you could reclaim your asset at a distressed price later.

> **Professor:** "Suppose my loan was 100, I couldn't repay, goes to SARFAESI. They take my asset, they want to sell the asset in the market at 30 rupees, 40 rupees. I come back as a bidder, I buy at the same asset at 40 at a heavily discounted price."

**Section 29A** now bars any **defaulting promoter** from bidding to buy back their own company through the resolution process.

### Why IBC Replaced the Old Regime

Before IBC (introduced 2016-17), tools like SARFAESI and DRT laws existed but were purely **recovery-focused** — they protected the lender's right to seize and sell, with no mechanism for reviving the company. Result: companies simply didn't survive.

This also created the **Twin Balance Sheet Problem**: if a company underperforms and the bank has lent to it, both the company's and the bank's balance sheets turn bad. Banks tried to hide this by "evergreening" — extending credit periods and restructuring loans so they wouldn't need to be classified as Non-Performing Assets (NPAs).

> **Professor:** "When Raghuram Rajan was the RBI governor, he said nothing doing, each bank has to submit Asset Quality Review to check how many deals they have restructured... if you restructure, it is [still to be classified as] a bad asset."

Where SARFAESI and IBC conflict, **IBC prevails** — once the Corporate Insolvency Resolution Process (CIRP) begins, it **freezes SARFAESI enforcement**.

---

## Case Study 1: Essar/SR Steel → ArcelorMittal — Resolution Done Right

This is the textbook example of resolution working as intended.

| Item | Detail |
|------|--------|
| **Filed by** | Financial creditors (State Bank of India, Standard Chartered, and others) |
| **Filed at** | NCLT, Ahmedabad bench |
| **Debt to financial creditors** | ~49,500 crore |
| **Debt to operational creditors** | ~5,000 crore |
| **Total dues** | ~54,500 crore |
| **Resolution timeline** | Should have been 330 days max; took **840 days** — the Supreme Court intervened when NCLT wanted to force liquidation, and granted more time |
| **Winning bidder** | ArcelorMittal, in a joint venture with Nippon Steel (60%-40%) |
| **Total capital committed by buyer** | 50,000 crore |
| **— of which, used to pay off debt** | 42,000 crore |
| **— of which, fresh capex/working capital** | 8,000 crore |

**Payment order (per the waterfall):** small operating/unsecured creditors and MSMEs, and employee dues, were paid first out of the 42,000 crore — not the big secured lenders like SBI and Standard Chartered.

**Recovery outcome:** Secured financial creditors recovered **92%** of admitted dues (an 8% haircut).

> **Professor:** "Secured financial creditors recovered 92% of the admitted dues... equity shareholders will get nothing because there's no surplus left after paying the secured creditor."

Post-resolution, the 10-million-ton Hazira plant returned to full production and profitability, with major expansion investment announced.

**Why this matters as a benchmark:** In general IBC liquidation cases (not resolution), the **average realization is only 32-33%**. Here, secured creditors got 92% via resolution instead. That is why:

> **Professor:** "Creditors always favor a resolution plan over a liquidation plan."

---

## Case Study 2: Reliance Capital — When the Regulator Steps In

A twist: this time the distressed company is **not** a manufacturer — it's a financial services (asset management) company.

**The setup:** Reliance Capital (part of the Anil Ambani group) held most of its assets as **stakes in its own group companies** rather than diversified outside investments — essentially a concentrated bet on the health of the Anil Ambani group (telecom and other loss-making businesses). As those group companies deteriorated, rating agencies progressively downgraded Reliance Capital, eventually all the way to **D — the default rating**.

> **Professor:** "The moment the company's rating went to D, there was a clause in their agreement with the lender: if the rating goes to D, immediate trigger — whatever loan is due has to be repaid now. So debts payable over years became due right away, and the company had to declare a default."

**Who intervened?** Not the financial creditors initially — the **RBI**, because Reliance Capital is a regulated Financial Service Provider (FSP) under RBI supervision. RBI superseded the board and filed under a special **FSP framework** within IBC (normally only financial creditors can file — this framework lets the regulator initiate on their behalf).

**The resolution:**
- NCLT admitted the resolution plan in December 2021
- Buyer found: the **Hinduja Group**
- CoC approval: an overwhelming **99.6%** voted in favor (because the alternative was near-zero recovery)
- Hinduja Group deposited **9,861 crore** to pay off the debt, plus additional fresh capital
- Final resolution completed **March 2025** (roughly six years from the initial D-rating in 2019 — well beyond the normal 330-day cap, extended by NCLT)

**Total dues (approximately, across categories):**

| Creditor Category | Amount Owed | Recovery Rate |
|--------------------|------------|---------------|
| Secured loans | ~22,000 crore | 42% |
| Unsecured loans | ~3,000 crore | 4% |
| Other liabilities and statutory dues (PF, etc.) | ~roughly a few thousand crore | — |
| **Total (rounded)** | **~26,000-27,000 crore** | **~37% average recovery / 63% haircut** |

**Hinduja Group's fresh capital infusion:** 2,500 crore as fresh equity + 4,300 crore of fresh debt, in addition to the 9,861 crore used to settle existing dues.

**Four simultaneous actions in this resolution:**
1. Major haircut on old debt
2. Fresh capital infusion
3. Old equity wiped to zero
4. Control transferred from the Anil Ambani group to the Hinduja Group

---

## The Recompense Clause: Why Creditors Accept Less Than Liquidation Value

Here's where the professor posed a sharp question to the class, built directly on the Reliance Capital numbers:

**The dilemma laid out:**
- Total amount due to all creditors: **26,000 crore**
- Fair (mark-to-market) value of the underlying assets: **~16,700 crore**
- If liquidated: creditors would recover **~13,158 crore**
- Under the resolution plan actually on the table: creditors get **9,861 crore (37%)**
- Equity holders get nothing either way — no loss to them from choosing one path over the other

> **Professor's question:** "Should creditors approve a resolution plan that appears **lower** than the liquidation value?"

Several students tried to answer and were each corrected in turn:

- **Jagat:** "Fair value is higher, so there's more potential if the company revives." → **Professor:** "But they got the cut, 63% gone. If the company recovers, will they get the fair value? No."
- **Nat:** "Liquidation may take longer, legal delays." → **Professor:** "No delay difference — this case also took about four years (2019 to 2025), same timeframe either way."
- **Anoj:** "Prefer immediate payment over waiting years." → **Professor:** "Both are immediate. If they don't accept the resolution plan, the next thing is liquidation — no extra delay."
- **Abhishek:** "Liquidation would involve a lot of intermediaries to sell off everything." → **Professor:** "No — Reliance Capital's app, machinery, land, building will be liquidated to another party on a lump-sum basis, not piecemeal."
- **Gaurav:** "Resolution preserves jobs and human capital." → **Professor:** Partially correct, but not the core financial logic.

**The actual answer: the Recompense Clause.**

Creditors accept a **guaranteed but lower** amount now (9,861 crore, a 63% haircut) instead of the liquidation option (13,158 crore, a "sure" 100% probability but hard cap). Why would that ever make sense? Because embedded in the resolution agreement is a **recompense clause**: if the revived business later hits specific performance criteria (AUM value, profit margin thresholds, and so on), a portion of the written-off debt gets **reinstated and paid back** to the creditors.

> **Professor:** "The choice is between 100% probability that I cannot get more than 13,000 crore, but maybe [with] probability [of upside] I may get much more than 9,861 crore because of my help — it may revive, and I have this recompense clause... That's why you go for this like a game theory kind of thing, behavioral finance. You'll go for resolution although number-wise it doesn't make sense to go for [it] on its own."

So the real trade-off is: a hard-capped certain recovery (liquidation) versus a lower guaranteed floor **plus** a call option on future upside (resolution + recompense clause).

---

## Case Study 3: Go First (Go Air) — When Resolution Fails

Not every resolution attempt succeeds. This is the cautionary counter-example.

**The business context:** Go First had genuine promise — Air India hadn't yet been taken over by Tata, IndiGo was the only major surviving player, and Jet Airways was gone. The market opportunity was real.

**The catastrophe:** Most of Go First's fleet was leased from Pratt & Whitney, and a wave of **engine failures** grounded its **A320 Neo** aircraft (IndiGo had some of the same issue too, but less severely). **25 aircraft — about half the fleet — were grounded.**

> **Professor:** "Grounded aircraft earn no revenue, but it has to be kept, maintained — maintenance has to be there, you need staff, you have to pay lease rent... you have to pay the airports for slots. So what happened is it had no revenue but was incurring huge expenses."

**Filing:** Unlike the previous two cases, here the **company itself** applied to NCLT (not the creditors), since it could no longer operate. NCLT admitted the resolution application on **10 May 2023**.

**What made this uniquely hard to resolve:**
- High committed costs (lease rent, salaries, slot fees) continued regardless of flying
- The aircraft were **leased, not owned** — so there was no distress-sale asset to recover value from
- Cash flow was extremely sensitive to fleet utilization, and utilization was near zero
- Total debt: **6,521 crore** owed to major Indian banks and Deutsche Bank

**The moratorium bought time**, and the hope was the engine issue would get resolved before creditors lost patience. It didn't.

**The bidding failed:** Jehangir (Aj) Singh, in a consortium, offered only **1,600 crore** against debt of 6,521 crore (a competing bidder offered even less). The Committee of Creditors (CoC) **rejected** it.

> **Professor:** "Why? Because in the Reliance Capital case, there is still a chance of recovery. Here, there's no chance of recovery — because the engine failed. They're not replacing the aircraft. If the aircraft cannot be flown, you can't get revenue. As a result, there's no chance you can repay the debt."

Because no bid was accepted, **lessors repossessed the aircraft**. Without aircraft, there was effectively nothing left to run. The CoC voted for **liquidation**, and NCLT approved it.

**What's still going on:** Go First filed an **arbitration case in Singapore** against Pratt & Whitney, seeking damages for the faulty engines that caused the business collapse. Since arbitration is expensive, roughly **167 crore** was arranged just to fund the legal process. The remaining "liquidation value" for creditors is essentially a bet on this arbitration outcome.

**The core lesson:** In Reliance Capital, fresh capital could plausibly fix the underlying problem (a diversification/rating issue) — so resolution made sense. In Go First, the underlying problem (engines that don't work, aircraft that are repossessed) **cannot be fixed by money alone** — so no amount of fresh capital could restore the ability to generate revenue, and resolution failed.

---

## Class Exercise: Cleaning Up a Toxic Balance Sheet

The professor walked through a live spreadsheet exercise (numbers disguised, but based on a real state-government-owned power utility that the government wanted to privatize).

### The Balance Sheet (all figures in crore)

| Item | Amount |
|------|--------|
| Equity capital | 100 |
| Accumulated losses | 2,500 |
| **Net equity** | **−2,400** |
| Debt | 3,500 (35x debt-to-equity) |
| Off-balance-sheet unfunded liability (pension, gratuity, leave encashment) | 1,500 (not even recorded on the books) |

**Is this a healthy balance sheet?** No — for three reasons:
1. Equity is deeply negative (−2,400 crore)
2. The company is highly levered — 35 times debt-to-equity
3. There is a **hidden 1,500 crore unfunded liability** not even on the balance sheet — if it were included, the true loss would be 4,000 crore

> **Professor:** "This company was struggling. It went for the resolution process. Nobody was willing to buy this company. Why? Because huge debt and huge accumulated loss."

**Why the unfunded liability exists:** Since this was a government-owned entity, all pension payments were historically made directly by the state **treasury** — the company itself never provisioned for future pension liability, believing "government will pay." But once privatized, employees become private-company employees, the treasury stops paying, and the new private owner would be on the hook for the accumulated pension obligation.

**Bidders' condition:** No prospective buyer would take over the company unless the balance sheet was cleaned up — meaning: (1) **wipe out the loss**, and (2) **fund the unfunded liability**.

### The Class Brainstorm (mostly wrong answers, but instructive)

- *"Increase equity"* → Rejected: the government explicitly refuses to inject more money; it wants **out** of this business.
- *"Just erase the accumulated loss"* → Rejected: "Removing with an eraser" isn't real — you can't wipe out a loss without someone actually absorbing it.
- *"Convert debt to equity"* → Rejected: no lender will accept equity in a company whose equity is worth **minus 2,400 crore**.
- *"Raise fresh equity or issue bonds"* → Rejected: nobody lends fresh money against a balance sheet like this.
- *"Merge with a profitable government company"* → Rejected: this again asks the government to solve its own problem, which it has already said it won't do.
- *"Add the 1,500 crore liability to both sides as a paper entry"* → Rejected by the professor directly: "Then you are doing all paper entry. It has to be funded. Money, money. That's not funding."
- *"Defer partial repayment as a percentage of future profit"* → Rejected: the bidder wants the balance sheet clean **now**, with no future promises.

### The Actual Solution

**Step 1 — Wipe out the loss (someone has to take the hit):**

The lender agrees to a **massive haircut** — accepting to be repaid only **1,000 crore** out of the 3,500 crore owed. This clears the accumulated loss off the books so the balance sheet balances again (assets = liabilities + equity, with no loss line item).

*Why would the lender agree to such a steep haircut?* Because the alternative — liquidation — is worse and **certain**:

> Liquidation scenario: total assets available = 750 crore (long-term) + 350 crore (short-term) = **1,100 crore**. Even assuming an optimistic 100% recovery on selling those assets, the lender only gets 1,100 crore back out of 3,500 crore owed — a **guaranteed** loss of 2,400 crore (roughly 31-33% recovery, matching real-world liquidation averages seen in the SR Steel discussion).

So the lender's actual choice is: a **certain** ~2,400 crore loss via liquidation, versus a resolution where they accept a **similar-sized** hit up front (down to 1,000 crore recoverable) but the business survives — plus a **recompense clause** tied to future performance (revenue growth, EBITDA margin above 15%, etc.) that can restore some of the written-off amount later.

**Step 2 — Fund the unfunded 1,500 crore pension liability:**

The word that unlocks this puzzle, per the professor, is buried in one sentence on the spreadsheet: **"NOW."** The government says it has no money **now** — not that it has no money, ever.

> **Professor:** "Government issues a 7.5% coupon bond of 1,500 crore to the company, to fund the liability."

The state government issues a **1,500 crore bond, 7.5% coupon, maturing in 7 years**, and gives it to the company as if the company had invested that money. This bond sits on the **asset side** (investment in government bonds), exactly offsetting the 1,500 crore pension liability on the liability side — the balance sheet now balances on both sides.

The **7.5% annual coupon** (roughly 110-120 crore per year in cash) becomes the funding source for actual pension payouts as employees retire each year (since not everyone retires simultaneously, this trickle of coupon income roughly matches the trickle of pension obligations coming due).

> **Professor:** "How did they arrive at 7.5%? They calculated what should be the interest amount to take care of the annual pension bill... For 1,500 crore, I cannot pay now — I'll pay after 7 years. Who knows after 7 years which government will remain — you are just deferring the payment to someone else."

**Outcome:** With a clean balance sheet, a private investor took over, infused fresh capital, and the company went from **loss-making to a 15% EBITDA margin within 3 years**. The lenders who had accepted the steep 1,000-crore-recoverable haircut also benefited from a **recompense clause** — if revenue growth and EBITDA margin (above 15%) targets are hit, some of the written-off debt gets reinstated and repaid.

> **Professor:** "This is very similar to the Reliance Capital case — do you accept liquidation, or do you support from the lender side? That was the dilemma, and in both cases the lender supported the resolution plan. Resolution plans are actually very innovative solutions — it's not easy, a lot of thinking has to go into coming up with a solution acceptable to all the parties."

---

## The IBC Scorecard: Has It Worked?

> **Professor:** "Look at the graph of the NPA ratio of banks. In March 2018, banks had 11% of their loans bad, and by March 2026, it came down to 1.8%, per RBI's report."

Additional statistics shared:
- **13.8 lakh crore** of claims were **settled by debtors before admission** to IBC (a deterrence effect — many debtors settle rather than face the process)
- As of end-2025/early-2026: **8,800+ resolution proposals** admitted
- **4.1 lakh crore** realized through resolution plans
- **4,000+ corporate debtors rescued** (revived/turned around, not liquidated)

The overall conclusion: through resolution plans (like SR Steel and, more painfully, Reliance Capital), banks have been able to recover most of their bad assets, driving the sector-wide NPA ratio down from 11% to 1.8%.

---

## Predicting Default Before It Happens: The Altman Z-Score

If distress leaves footprints, can you build a model to read them **before** the crisis hits? This is the first and most famous attempt.

### Altman Z-Score (1968) — Publicly Listed (US) Companies

> **Z = 1.2X1 + 1.4X2 + 3.3X3 + 0.6X4 + 1.0X5**

| Variable | What It Captures |
|----------|-------------------|
| X1 | **Liquidity** (working capital / total assets) |
| X2 | **Age / accumulated profitability** (retained earnings / total assets) |
| X3 | **Profitability** (EBIT / total assets) |
| X4 | **Leverage** (market value of equity / book value of total liabilities) |
| X5 | **Efficiency** (asset turnover: sales / total assets) |

Built from a sample of only **65 companies** in the original 1968 paper. Thresholds:

| Zone | Z-Score | Meaning |
|------|---------|---------|
| **Safe zone** | Z &gt; 2.99 | No risk of default, no action needed |
| **Gray zone** | 1.81 to 2.99 | The **most important zone** — where corrective, strategic action can still prevent distress |
| **Distress zone** | Z &lt; 1.81 | Default is highly likely — go for insolvency resolution |

> **Professor:** "The gray area is actually the most important area — not the other two."

### Altman Z'-Score (1983) — Private/Unlisted Companies

Same model and same logic, but since unlisted companies have no market value of equity, **X4 (leverage) is calculated using the book value of equity** instead of market value.

### Altman Z''-Score / EM Score (1995) — Emerging Markets

Built using data from **Mexico, Brazil, and India** because the original US-based model didn't perform well in emerging markets. Two key changes:

1. **X5 (asset turnover / efficiency) is dropped entirely** — down to just **4 variables**
2. Leverage still uses **book value** of equity (financial markets in emerging economies weren't mature enough for reliable market values)

**Why was asset turnover dropped?** Because in the 1990s, before GST existed in India, companies were notorious for **over-invoicing** — inflating sales figures with no reliable way to verify them.

> **Professor:** "There was no GST. Indian companies were notorious in over-invoicing. There was no way to verify the sales numbers. Maximum manipulation happened in emerging markets on the sales number. That's why the asset turnover ratio was removed."

This model is applicable to **both listed and unlisted** companies. Its thresholds:

| Zone | Z-Score |
|------|---------|
| **Safe** | Z &gt; 2.6 |
| **Gray zone** | 1.1 to 2.6 |
| **Distress** | Z &lt; 1.1 |

**Real-world use:** This model was very popular through the 1990s. The professor personally recalled Indian banks — ICICI Bank, for example, in the late 1990s — using it to price fresh loan applications:

> **Professor:** "If the score is more than 2.6, very good — suppose you get the loan, full amount, with say 9% interest. If the score is between 1.1 and 2.6, they may give a loan of lesser amount, more collateral, and a higher interest rate."

### Why Altman Models Fell Out of Favor

Three criticisms, all connected:

1. **All variables are accounting ratios** — and accounting numbers **can be managed** (manipulated).
2. **Backward-looking:** The model typically only signals trouble in the **same year as**, or just a few months before, actual default. It doesn't provide true early warning.
3. **Annual-only data:** Since these ratios come from annual financial statements, you have to wait a full year to update the score. But distress is a **continuous process** — a company can turn from good to bad mid-year, and the Altman model simply won't capture that until year-end.

---

## From Score to Probability: The Campbell-Hilscher-Szilagyi (CHS) Model

Banks don't just want a score — they want an actual **probability**. This model (built using roughly 40 years of US data, up to about 2003) converts a Z-like score into a genuine probability of default.

> **Probability of Default (PFD) = 1 / (1 + e^(−L))**

This is a logistic function. **L** plays the same role as Altman's Z, but is built from **8 factors** (versus Altman's 5), and — critically — most of these factors are **market-based**, not purely accounting-based.

**Example factors mentioned:**
- **NIMTA** — net income / market value of total assets (a market-based return-on-assets measure)
- **EXRETAVG** — average 12-month **excess return** (the company's stock return minus the market/Nifty return — how the stock actually performed relative to the market over the past year)

### How the Model Was Built (Explanatory, Not Predictive, at Estimation Stage)

The researchers took 40 years of data on **all listed US companies**, of any size. Since this is historical data, they already knew which companies defaulted in which year. Every company-year was labeled:

- **1** if the company was in the "bad"/default bucket that year
- **0** if it was in the "good" bucket

For every labeled company-year, they had the actual values of all 8 factors. They ran a **logistic regression** of this 0/1 outcome against the 8 factors to estimate the **beta coefficients** (the weight of each factor).

> **Professor:** "This is not a predictive model, please — this is an explanatory model. They had all the data of all the companies... The regression they ran was: L is either zero or one. That's how they found out the beta coefficients."

**Using it going forward:** For a new company today, you plug in its current values for all 8 factors, multiply by the estimated beta coefficients to get L, then plug L into the PFD formula to get its estimated probability of falling into the default bucket.

**Two key advantages over Altman:**
1. Uses **market-based** factors, not just historical accounting ratios
2. Produces an actual **probability**, not just an arbitrary score

The professor noted there are **two or three more default-prediction models** still to be covered — these will be picked up in **Session 17**.

---

## Course Administration Recap (context for exam prep)

- **Quizzes:** Best of 5 (out of a maximum 7-8 total), each worth 10 marks — total 50 marks. There will be **no quiz on financial distress**, but the topic can appear in the **end-term exam**. The **next quiz will be the final one**, on the upcoming topic of business valuation.
- **Course project:** 9 topics assigned across 9 groups (formed by roll number, not city or industry, since this is a core course). Projects cover everything discussed up through financial distress — the remaining sessions (17-20) are excluded since they haven't happened yet. Report format: single PDF with all analysis, a title page with project title and group member names, and a defined 5-section structure. Deadline: **15th August**.

---

## Key Formulae

| Formula | Expression |
|---------|-----------|
| **Trade-off Theory (Firm Value)** | Value of Unlevered Firm + PV(Tax Shield on Debt) − PV(Cost of Financial Distress) |
| **Altman Z-Score (1968, listed)** | Z = 1.2X1 + 1.4X2 + 3.3X3 + 0.6X4 + 1.0X5 |
| **— Zones (1968 model)** | Safe: Z &gt; 2.99  \| Gray: 1.81-2.99  \| Distress: Z &lt; 1.81 |
| **Altman Z'-Score (1983, private)** | Same as 1968 model, but X4 = Book Value of Equity / Book Value of Total Liabilities |
| **Altman Z''/EM-Score (1995, emerging markets)** | Same structure using only X1-X4 (asset turnover X5 dropped); leverage on book value |
| **— Zones (EM model)** | Safe: Z &gt; 2.6  \| Gray: 1.1-2.6  \| Distress: Z &lt; 1.1 |
| **Campbell-Hilscher-Szilagyi Probability of Default** | PFD = 1 / (1 + e to the power of −L), where L is built from 8 mostly market-based factors |
| **Liquidation Waterfall (Section 53, IBC)** | Secured Creditors → Workmen/Employees → Unsecured Creditors → Government Dues → Equity |
| **CoC Voting Threshold** | 67% (2/3 majority by value) required to approve a resolution plan; binding on all creditors once approved |
| **Resolution Timeline** | 180 days + 90-day extension + 60-day extension = 330 days maximum (exceptions possible) |

---

## The Recipe Chain

**Sessions 1-4** (EVA, NOPAT adjustments, capital structure) --> **Sessions 5-9** (Distribution decisions, risk management foundations, futures, forwards) --> **Sessions 11-12** (Options pricing, binomial trees, Black-Scholes) --> **Session 13** (Interest rate swaps, comparative advantage, fair value vs. cash flow hedges, intro to transaction/translation/economic forex exposure) --> **Sessions 14-15** (International financial management deep dive; introduction to financial distress and its signals) --> **Session 16** (Financial distress mechanics, the IBC resolution machinery — CoC, moratorium, liquidation waterfall, Section 29A; three real cases — SR Steel/ArcelorMittal, Reliance Capital, Go First; the recompense clause logic; a live balance-sheet-cleanup exercise; Altman Z-Score family and the Campbell-Hilscher-Szilagyi probability-of-default model) --> **Next: Session 17** (remaining default-prediction models, then transition into Business Valuation)

---

## What's Next

- **Next session (17):** Two or three more default-prediction models to complete this topic, then the course moves into **Business Valuation** — the final major topic, which carries its own (final) quiz.
- **Key connection:** The Altman and CHS frameworks give you quantitative tools to flag distress **before** a company needs to go anywhere near NCLT — this is the "early action, less pain" idea from the top of the session, made numerical.
- **Remember for the exam:** Be able to walk through the SR Steel recovery math (92% vs. 8% haircut), the Reliance Capital resolution-vs-liquidation dilemma (and the recompense clause logic), why Go First's resolution failed where Reliance Capital's succeeded, the full balance-sheet-cleanup exercise (haircut + government bond trick), and the Altman Z-Score threshold tables for all three versions (1968, 1983, 1995).
- **Project reminder:** Financial distress is explicitly in scope for the group project (due 15th August) even though there's no dedicated quiz on it.

---

## The Real-World Takeaway

Strip away the crore-figures and tribunal names, and this whole session is really one idea dressed up in finance clothing: **problems that are ignored don't disappear, they compound — and by the time everyone agrees there's a problem, the cheapest fixes are already off the table.** The manager who quietly resigns, the auditor who hesitates, the maxed-out credit line — these are all just the corporate version of a friend who stops returning your calls before they finally admit something's wrong. If you can read the early signal, you get to choose the response. If you wait, the response gets chosen for you, and it costs more.

The second big idea is the **recompense clause** — accepting a smaller, certain amount now in exchange for a slice of the upside later, instead of holding out for the full amount and risking getting nothing. That's not a finance-only trick. It's the logic behind severance negotiations, vendor settlements, deferred bonuses, and even splitting a lease early with a landlord — take the guaranteed partial win over the uncertain "all or nothing."

And the balance-sheet-cleanup story is really a lesson in **honest accounting of who eats the loss**. You can't fix a broken deal by moving numbers around on paper — someone (a lender, a partner, a government) has to actually absorb the hit before anyone new will step in. But once that's done, you can solve a "no money right now" problem with a **structured, deferred-payment mechanism** (the government bond) instead of pretending the liability doesn't exist.

Use this when:
- You're negotiating a stuck payment dispute with a vendor or contractor — propose a smaller guaranteed payment now plus an upside-sharing clause tied to future performance, instead of an all-or-nothing standoff.
- You notice early signs a project, team, or client relationship is heading south (missed deadlines, quiet departures, budget maxed out) — raise it and act while the fix is still cheap, rather than waiting for a full-blown crisis meeting.
- You're asked to "clean up" a messy handoff, merger, or deal — look for who genuinely needs to absorb a loss before proposing solutions, and don't confuse a paper reshuffle with an actual fix.
- You're structuring any deferred obligation (a payout, a promise, a settlement) — remember that "we have no money" often really means "we have no money **right now**," and a well-designed future-funded instrument can solve today's problem without anyone lying about the numbers.

One line to remember it by: **distress never announces itself, it just gets quieter until someone finally listens — and the fix is always cheaper the earlier you find it.**
