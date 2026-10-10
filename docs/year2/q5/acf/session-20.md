---
sidebar_position: 21
title: "Session 20: M&A Valuation Finale — Illiquidity Discounts and the Monmouth Corporation Case"
---

# Session 20: M&A Valuation Finale — Illiquidity Discounts and the Monmouth Corporation Case

*The last piece of the deal-value puzzle, a five-question test to know which way a deal will swing, and one final case that ties DCF, control, synergy, and deal structuring into a single story*

---

## The Big Picture: Closing the Loop on Deal Value

Recall the deal-value equation built up over the last two sessions:

> **Deal Value = Standalone Value + Control Premium + Synergy Value - Illiquidity Discount**

Standalone value, control premium, and synergy have all been covered. Today closes the loop with the last adjustment — **illiquidity discount** — and then applies everything learned across the entire course to one final, comprehensive case: **Monmouth Corporation**. This is also literally the last session of the course, so the professor treats it as the capstone.

> **Professor's opening:** "Today is our final session for the ACF course and we have our last case study to be discussed — Monmouth Corporation."

---

## Illiquidity Discount: When Does It Actually Apply?

The general rule: if the target company is **privately held**, an acquirer will typically **deduct** some percentage from the price because private shares cannot be easily sold — there is no ready market to exit from. But the professor was careful to stress this is the *general* case, not a universal law.

> **Professor:** "It is not true that for all privately held companies, if you are trying to acquire, the adjustment for illiquidity discount is required. Generally required — that is the normal situation. But there are exceptions."

### The Class Brainstorm: When Is No Illiquidity Discount Needed?

The professor opened the floor and let students guess. Several wrong turns happened before the right answers emerged:

- A student guessed "companies without many assets" — wrong. The professor used this to introduce a **different** concept: the **acqui-hire**. If a company has no revenue and no real assets (say, a startup with two founders and 15 great engineers who built a great product but never found customers), DCF simply does not apply — there is no cash flow to discount. Such companies are valued using the **replacement cost method** instead — essentially, what would it cost to hire and assemble that same team from scratch. This is a distinct valuation situation, not the topic for today, but worth remembering as an exception to "DCF is always used."
- A student guessed the target was heading for an **IPO very soon** — correct as one situation. If a private company is a year or less away from listing (or the acquirer plans to list it soon), it behaves like a listed company, so the discount should be very low.

The professor then filled in the other two exceptions himself:

1. **Cash-rich balance sheet.** If 50% or more of a company's assets are cash and marketable securities, the asset side is already highly liquid — no discount needed even though the equity itself is private.
2. **Size ("too big to fail").** Empirical evidence shows an **inverse relationship** between firm size and liquidity premium. Very large private companies need minimal illiquidity adjustment.

| When Illiquidity Discount Applies | When It Does NOT Apply |
|---|---|
| Small, privately held, no IPO plans | Company is planning an imminent IPO |
| Illiquid balance sheet (few liquid assets) | Cash-rich balance sheet (50%+ in cash/marketable securities) |
| Small size | Very large ("too big to fail") — inverse size-to-premium relationship |

> **Professor's summary:** "Companies which are smaller in size, which don't have cash on the balance sheet, which also is not planning for an IPO — but you are interested in that company — then you need to make adjustment for illiquidity premium."

---

## Measuring Illiquidity: The Silber Model

Once you know a discount is needed, **how much**? The professor introduced a 1991 study (by Silber, "almost 35 years ago") that regressed a liquidity ratio against firm characteristics.

### The Dependent Variable

Some US companies issue **two classes of shares** (like Google/Alphabet) — one freely tradable, one restricted (e.g., anchor investors in an IPO cannot sell for 90 days, or 30 days in India, depending on rules). Silber compared the price of the restricted class to the price of the common (unrestricted) class:

> **Y = Price of Restricted Stock / Price of Unrestricted Stock (RP/RS)**

The professor tested the class's intuition with a direct question: *if this ratio equals 1, what does that mean for illiquidity?* Several students guessed wrong (saying higher illiquidity), until the professor corrected it:

> **Professor:** "If the ratio is one, there is **no** illiquidity. When can the ratio be one? When the price of restricted stock and unrestricted stock are equal — that means there is no restriction, no problem of liquidity."

> **Illiquidity Discount = 1 - (RP/RS)**

If the ratio is 90%, illiquidity discount is 10%. If the ratio is 100%, discount is zero.

### The Independent Variables (What Drives Illiquidity)

| Variable | Meaning | Sign | Interpretation |
|---|---|---|---|
| **Revenue** | Size of the company | Positive (+0.03) | Bigger revenue = higher Y = **lower** illiquidity |
| **RBRT** | % of total shares that are restricted | Negative | More restricted shares = **more** illiquidity |
| **Profit-making dummy** | Is the firm profitable? | Positive | Profitable firms need a **smaller** discount |
| **Customer relationship dummy** | Does bidder already have a relationship with target (as buyer/supplier)? | Positive | Existing relationship = **less** discount needed |

### The Empirical Evidence: Size and Profitability Both Matter

The professor showed a chart of illiquidity discount against firm revenue (in millions of dollars), split between profit-making (red bars) and loss-making (yellow bars) firms:

| Revenue | Profit-Making Firm Discount | Loss-Making Firm Discount |
|---|---|---|
| 5 million (small) | ~25% | ~35% |
| 1 billion (large) | ~15% | ~25% |

> **Professor:** "Size matters — the size is big, illiquidity premium falls. But within that size, profit-making companies require lesser discount compared to loss-making companies."

A separate survey (by a magazine called *CFO Digest*, covering 2007-2010, asking CFOs directly about illiquidity discounts by **deal size**, not revenue) showed the same size effect:

| Deal Size | Illiquidity Discount |
|---|---|
| 1 billion dollars or more | 9% to 11% |
| ~50 million dollars | 17% to 20% |

---

## The India Problem: No Restricted Shares, So What Do You Use?

A sharp observation: Indian listed companies generally do **not** issue two classes of shares (one restricted, one free). So the RP/RS ratio simply cannot be computed for Indian firms.

**The alternative measure of illiquidity for a listed stock:** the **bid-ask spread**.

> **Professor:** "If the bid-ask spread is wide, the stock is illiquid or less liquid. If the spread is narrow, the stock is more liquid."

So the model is re-run with **spread** as the dependent variable instead of RP/RS:

> **Spread (Y) = f(Revenue, Profit-making dummy, Cash/Total Assets ratio, Monthly trading volume)**

For an **unlisted** target where you cannot observe a spread directly: use the other three variables (revenue, profitability, cash-to-assets liquidity ratio) from **listed comparable-size companies** to estimate what the spread *would* be, and infer the discount from there. You don't strictly need the fourth variable (trading volume) if it isn't available.

### The Practical Shortcut Used in India

> **Professor:** "Typically in Indian market a standard rate that is used when you are valuing an illiquid company — meaning privately held company — is 20 to 25% of the deal value."

So the practitioner's version of the deal-value formula becomes:

> **Deal Value = Standalone Value + Control Premium + Synergy - (20% to 25% flat Illiquidity Discount)**

The regression-based model above is for when you want to be precise, company by company, instead of applying a blanket 20-25%.

---

## The Five-Question Framework: Does Discount or Premium Dominate?

The professor now gave a decision framework to answer a bigger question: given the three adjustments (control, synergy, illiquidity), which one will **dominate** the final deal value in a given situation? He applied it to two real deals already introduced in the prior session — **Reliance acquiring Metro Cash & Carry India**, and **Tata Motors acquiring Iveco** (a European commercial vehicle maker, referred to phonetically in class as "Ioko"/"Evokco").

**The Five Questions:**

1. **Is the target listed with enough liquidity?**
2. **Are there competitive bidders?**
3. **Is the seller forced, or is this a strategic exit?**
4. **Is there real estate/real assets that are separable from the core business?**
5. **Is synergy measurable and achievable?**

### Applying the Framework

| Question | Reliance – Metro Cash & Carry | Tata Motors – Iveco |
|---|---|---|
| **1. Listed with liquidity?** | **No** — Metro India was privately held (parent Metro AG may be listed, but the Indian arm was not) | **Yes** — listed on Euronext, deep liquidity |
| **2. Competitive bidders?** | **No** — Reliance was the only bidder | **No** other bidder, though Iveco had considered spinning off its Fiat Chrysler automobile division |
| **3. Forced or strategic exit?** | **Strategic exit** — Metro AG (the German parent) had decided to exit India after an earlier failed attempt | **Not an exit** — a partial monetization: major shareholder Exor (holding 23%) wanted to sell at a good price, not exit a business or a country |
| **4. Separable real assets?** | **Yes** — of 31 cash-and-carry stores, most were leased, but 6 were owned outright and could be sold if the business failed (a "floor value") | **No** — sold as a going concern; Tata Motors had no intention of shutting it down |
| **5. Synergy measurable/achievable?** | **Hard, minimal** — no revenue synergy (B2B/wholesale customers need trade licenses; individuals like Kirana shop owners can't be tapped), and cost synergy (procurement economies of scale) needs many more stores than the 31 built in 15 years | **Clear** — Tata Motors already entered European passenger cars via JLR but not commercial vehicles; Iveco gave entry into trucks/lorries — geographic and product-line expansion synergy |

**Conclusion:**

> **Professor:** "Given these five answers... two contexts, one thing is very clear — for this deal [Metro] what dominates is illiquidity, exit, and no synergy. There is no question of paying premium. Whereas in the other case [Iveco], it's a listed company, so no illiquidity discount. You have two positives — synergy and control — so premium dominates."

| Deal | What Dominates | Why |
|---|---|---|
| Reliance – Metro Cash & Carry | **Discount** | Illiquid + urgent/strategic exit + no competitive bidder + minimal synergy |
| Tata Motors – Iveco | **Premium** | Listed/liquid (no discount) + clear synergy + control value |

### A Sharp Student Question on Cause and Effect

A student asked: what if Metro had *not* wanted to exit, but Reliance still wanted to buy — would the discount still be as deep?

> **Professor:** "There will be discount for illiquidity. But if they don't want to sell, you have to convince them with a better price. So it will not be that much of a discount. Here you saw it is a deep discount — you were not even paying one year's revenue."

The scale of the real story: in 2021, Metro AG initially wanted 11,000 crore to exit India. They could not find a buyer at that price. They eventually had to sell for **under 3,000 crore** — a distress-style sale driven by illiquidity **plus** urgency, not illiquidity alone.

---

## Valuing Metro: Three Methods, Three Very Different Answers

Using data available at the time of the deal (treating FY24 revenue of 8,400 crore as forward-looking, since the valuation was being done a year earlier), the professor walked through three valuation approaches for Metro Cash & Carry:

| Assumption | Value |
|---|---|
| Forward revenue | 8,400 crore |
| B2B segment industry growth | 8% year-on-year |
| Margin (retail, low-margin business) | 3.72% (reverse-engineered to match the actual price) |
| Tax rate | 25% |
| Capex | Low — asset-light (only 6 of 31 stores owned; rest leased) |
| Net working capital | 5% of revenue |
| Cost of capital (India retail) | 11% |
| Terminal growth rate | 4.5% (below India's inflation rate — essentially **no real growth**) |

| Method | Implied Enterprise Value | Implied Value per Store |
|---|---|---|
| **DCF** | ~3,300 crore (39% of revenue) | ~107 crore/store |
| **Transaction multiples** (past retail/wholesale deals in India) | ~4,500 crore | ~151 crore/store |
| **Trading multiples** (listed organized-food/hypermarket comps) | ~6,000 crore | — |
| **Actual price paid** | **2,850 crore** | below even the DCF floor |

> **Professor:** "What Reliance did — they went with DCF and paid the minimum. Why could they pay 3,000, meaning 2,850, not 6,000? Because of the two reasons I mentioned — illiquidity. If you use trading multiples, there is no illiquidity — trading multiples are based on market trading price, share price — so it is full liquidity. This price, Reliance will not pay. But they paid solo, half of it or less than half, because of the exit of that firm."

**The takeaway:** trading multiples reflect a fully liquid market price. DCF (with conservative assumptions) already strips some of that away. And when illiquidity + forced exit + no competition are stacked together, the actual price can land **below even the DCF floor**.

---

## The Final Case: Monmouth Corporation

With the theory closed out, the class moved into the final case of the entire course.

### The Cast of Characters

| Entity | Role |
|---|---|
| **Monmouth Corporation** | The acquirer — an oil & gas equipment maker (engines, compressors) diversifying via acquisitions |
| **Robertson Tool Company** | The target — a family-owned tool and file manufacturer with 50% market share |
| **Simons** | A corporate raider attempting a **hostile takeover** of Robertson |
| **NDP** | A friendly acquirer — a **"white knight"** invited in by Robertson's own management |

### Why Monmouth Wanted Robertson

Monmouth's core business (engines and large compressors for the oil & gas industry) was **cyclical** — revenue swung with oil and gas prices, and the market punished the stock for that volatility even when revenue itself looked fine.

> **Professor:** "Their revenue was connected with oil and gas prices, which are very volatile. So although they had revenue, they had high volatility. The market didn't like it. So the stocks were not performing well."

Monmouth's answer was to **diversify through acquisition** (not greenfield projects) and, after some experimentation, they settled on **three strict conditions** for any acquisition target:

1. **Monmouth itself must be able to become a major/leading player in the target's industry** (this is about Monmouth's own ability to integrate and build leadership — related to backward/forward integration synergy).
2. **The target industry must be stable, with broad markets and small-ticket products** (as opposed to volatile, big-ticket, cyclical products like Monmouth's own).
3. **The target itself must already be a market leader** in its segment(s) — a company with genuine competitive strength, not a turnaround project.

The class worked through the distinction between condition 1 and condition 3 (a genuinely confusing pair) before converging on the correct read:

> **Professor's clarification:** Condition 1 is about **Monmouth's** ability to build leadership by integrating the target — Monmouth's management needs to understand the business, so it can't be a totally unrelated field. Condition 3 is about whether the **target company** already holds a leading competitive position in its own market.

**Robertson ticks all three boxes:** it holds 50% market share in its device/tool segment, it operates in tools and files (which Monmouth already understood from prior acquisitions), and it has a large number of products (so the 50% share isn't concentrated in one or two products).

Because of this fit, Monmouth had actually approached the Robertson family **three years earlier**. The family — a family-owned business — refused to sell.

### How the Opportunity Resurfaced

The professor spent significant class time making sure students understood the *actual mechanism* by which Robertson became available this time, rather than accepting vague answers.

**Step 1 — Simons launches a hostile bid.** Simons made a **hostile tender offer** at **42 dollars per share** — a 40% premium over Robertson's then-market price of **30 dollars**. Simons had already quietly accumulated shares (44,000, then another roughly 177,000 — over 200,000 total, out of 584,000 shares outstanding, roughly 35-38%). Even at this premium, Simons could not cross 50% ownership.

**Step 2 — Robertson's management calls in a white knight.** Rather than accept Simons' hostile cash offer, the Robertson family (management) approached **NDP** and asked them to make a counter-offer.

> **Professor:** "NDP in M&A language is called a **white knight** — a friendly acquirer. Simon's offer was a hostile bid because the family was not interested. But NDP's offer is not hostile — the management of Robertson approached NDP and said, can you make an offer, we want to get acquired by you."

NDP's counter-offer: an **all-stock deal, 5 NDP shares for every 1 Robertson share**. Using NDP's pre-offer share price of 10.62 dollars, this implied a value of **5 x 10.62 = ~53 dollars per Robertson share** — headline-better than Simons' 42-dollar cash offer.

**Step 3 — Simons refuses NDP stock, and this is the pivot point.** Simons rejected the NDP deal on three grounds:

1. **Price uncertainty:** NDP's stock had historically traded as low as roughly 4-5 dollars. Using that low instead of the current price, the swap implied a value of only around 23 dollars — far below the 53-dollar headline.
2. **Illiquidity:** NDP shares themselves were thinly traded — hard to sell even if you wanted to.
3. **No dividend:** NDP paid essentially nothing (about 20 cents in one year), while Robertson had reliably paid **1.20 dollars per share every year**, regardless of its 2% growth struggles.

> **Professor:** "So Simon's counter was: if you use the lowest price, don't use the highest price, then the offer is 23. Secondly, liquidity is low — if you want to sell that NDP shares, you will not be able to sell. And thirdly, they didn't pay dividend. So if you invest in the share, you are stuck."

**Step 4 — Simons, now stuck holding a stake it doesn't want to convert into illiquid NDP stock, approaches Monmouth.** Simons effectively said: *offer me a good price, cash or liquid stock, and I'll sell you my stake.* This is the moment the opportunity actually reached Monmouth — **not** because Monmouth feared becoming a target itself (a fear that had earlier kept Monmouth from making an unsolicited counter-bid to Simons), and not because the family suddenly agreed to sell, but because **Simons came to them**.

> **Professor's correction of a common misreading:** "One line answer should have been: Simmons approached Monmouth, rather than Monmouth fearing that Simon will make them a target."

Monmouth realized the opportunity: it already held (via Simons' block, once bought) a path to control, since Simons' 200,000+ shares combined with additional open-market purchases could cross 50% of Robertson's 584,000 shares. All Monmouth had to do was offer a good enough price.

### Why Robertson Was "Too Inviting a Target"

The case explicitly calls Robertson **"too inviting a target."** Why? Because it was **underperforming**, and every bidder believed a change of management could unlock value:

| Indicator | Robertson | Benchmark |
|---|---|---|
| Revenue growth | 2% | Industry average: 6% |
| Cost of goods sold (% of revenue) | 69% | Monmouth believed it could cut to 65% |
| SG&A (% of revenue) | 22% | Monmouth believed it could cut to 19% |
| Inventory | High | — |
| Book value per share | ~53 dollars | Market price only 30 dollars |
| Price-to-book ratio | ~0.57 (below 1) | — |

> **Professor:** "If a company's price-to-book ratio is less than one, it becomes vulnerable for hostile acquisitions — because you are available cheap. No management would like to have their price-to-book ratio less than one, because then you become more vulnerable to hostile takeover."

Even Simons' 42-dollar hostile bid (a 30% premium to market) was still a **discount to book value** — proof that "paying a premium" and "getting a bargain" are not contradictory.

---

## Valuing Robertson: The Class DCF Exercise

The professor then had the class actually build the DCF, live, using the case exhibits: Exhibit 2 (balance sheet), Exhibit 4 (Robertson's 5-year projected P&L, 2003-2007), Exhibit 5 (Monmouth's own standalone projections), Exhibit 6 (comparable firms' betas and leverage), and Exhibit 7 (risk-free rate, market risk premium, and bond yields by credit rating).

### Step 1: Free Cash Flow

> **Free Cash Flow = EBIT x (1 - Tax) + Depreciation - Capex - Change in Net Working Capital**

Several students initially got the FCF wrong by **forgetting the working capital change**. The fix: assume no efficiency gain in working capital — Robertson will keep holding working capital in the **same proportion to revenue** as it did historically.

- 2002 balance sheet: current assets 28 million, current liabilities 4 million → net working capital = **24 million**
- 2002 revenue = **55.3 million**
- Working capital as a percentage of revenue: 24 / 55.3 = **~43%**

So the incremental working capital investment each year = 43% x (change in revenue that year). One elegant consequence: **in 2007, no additional working capital is needed at all**, because by then revenue growth has flattened to zero in the terminal year.

> **Professor:** "By the end of 2002, Robertson was holding 43% of revenue as working capital. If we assume that even after the change of management, working capital requirement will remain the same — 43% of revenue — then can you find out the impact in the free cash flow?"

The resulting FCF pattern: **negative in year 1** (heavy working-capital build for revenue growth), turning positive, and reaching roughly **5 million dollars by 2007**.

### Step 2: The Discount Rate (WACC) — Where Most Students Went Wrong

**Cost of Equity (CAPM):**

- Risk-free rate: **4.1%** (30-year US Treasury bond, Exhibit 7)
- Market risk premium: **6%** (Exhibit 7)
- Beta: take the **asset (unlevered) betas** of the six comparable firms given in Exhibit 6 and average them → **0.73**. A common mistake was averaging the **equity (levered) betas** directly instead — wrong, because leverage differs firm to firm.
- Re-lever using **Robertson's own** debt-to-equity ratio (not the industry average): Exhibit 6 gives Robertson's debt-to-capital as 28% (book value) or **37%** (market value) — always use market value when available. So debt = 37%, equity = 63%, D/E = 0.587.

> **Equity Beta = Asset Beta x (1 + D/E) = 0.73 x 1.587 = ~1.15**

> **Cost of Equity = Risk-free Rate + Equity Beta x Market Risk Premium = 4.1% + (1.15 x 6%) = ~11.0%**

**Cost of Debt — the trickiest part:**

A tempting (but wrong) shortcut: divide Robertson's 2002 interest expense (0.8 million) by its long-term debt (12 million) to get **6.7%**. The professor rejected this:

> **Professor:** "This is historical cost — the rate at which they borrowed money in 2002. But your cash flows are forward-looking, 2003, 2004, 2005. You don't need historical cost of debt. You have to use the **projected** cost of debt."

The correct approach uses **Exhibit 7's bond-yield-by-credit-rating table**. But Robertson has **no bond rating**, because it never issued bonds (its debt is bank loans). One student computed an interest coverage ratio (EBIT/Interest ≈ 3.25x) and mapped that to a **BB (non-investment-grade)** rating, giving a yield of **7.96%**. The professor overruled this too:

> **Professor:** "Robertson rating not there does not mean it's a bad company. It only means they did not issue bonds and hence you don't have their rating. To give them the benefit of the doubt, you have to give them the advantage of being an **investment-grade** company... An investment grade is triple-B — the last investment grade rating, below which is non-investment grade (junk). So I'm using **6.07%**, the yield of a triple-B rated bond."

After-tax cost of debt = 6.07% x (1 - 40% tax) = **~3.64%** (the professor phrased this as "60% of the pre-tax" rate).

**Putting WACC together:**

> **WACC = (Debt Weight x After-Tax Cost of Debt) + (Equity Weight x Cost of Equity)**
> **WACC = (37% x 3.64%) + (63% x 11.0%) = 1.35% + 6.93% = ~8.3%, rounded to 8%**

### Step 3: Terminal Value and Final Answer

The professor applied a **zero-growth perpetuity** to the final year's (2007) free cash flow — no further growth assumed beyond the explicit 5-year window — discounted the full stream (years 1-5 plus terminal value) at 8%, subtracted net debt (12 million), and divided by Robertson's **0.584 million shares outstanding**.

> **Result: DCF value = 63 dollars per share.**

But this 63-dollar figure assumes **everything goes right** — full revenue synergy (growth accelerating from 2% to 6%) **and** full cost synergy (COGS falling from 69% to 65%, SG&A from 22% to 19%). The professor showed that if only the **cost** synergies materialize, with revenue growth staying at the current 2%, the value drops to exactly **50 dollars per share**.

> **Professor:** "This is highly optimistic, and hence you should not pay 63 — pay less, but surely you can pay more than 50."

Simons had asked for a minimum of **50 dollars per share** — and the DCF confirms this is defensible even under the *conservative* (cost-only-synergy) scenario, while 63 dollars is the fully-optimistic ceiling. Monmouth's negotiating room: **between 50 and 63 dollars**.

---

## Structuring the Deal: A Share Swap Without Diluting EPS

Monmouth's next move: offer **shares instead of cash**, since Simons had already shown a willingness to accept stock (from the NDP negotiation) — but only stock that is liquid and dividend-paying, unlike NDP's. Monmouth's own shareholders imposed one hard condition:

> **Professor:** "Shareholders say, look, you can acquire, but there'll be dilution — don't dilute my EPS. If you can maintain the EPS after acquiring Robertson, then you offer shares."

### The Method

1. **Combine profit after tax (PAT).** Take Robertson's projected PAT (Exhibit 4) and add Monmouth's own standalone projected PAT (Exhibit 5) for each year, 2003-2007. Combined PAT starts at about **13 million dollars in 2003** and grows to **19.5 million dollars by 2007**.
2. **Know Monmouth's standalone EPS.** Per Exhibit 5, if Monmouth never acquires Robertson, its own EPS grows from **2.61 dollars (2003) to 3.56 dollars (2007)**.
3. **Find the maximum total share count that preserves EPS.** For each year:
   > **Maximum Total Shares (No Dilution) = Combined PAT / Monmouth's Standalone EPS**
4. **Find how many new shares can be issued.** Monmouth currently has **4.21 million shares outstanding** (Exhibit 5).
   > **Additional Issuable Shares = Maximum Total Shares - Current Shares (4.21 million)**
5. **Convert to a swap ratio.** Robertson has 0.584 million shares outstanding.
   > **Swap Ratio = Additional Issuable Shares / Robertson's Shares Outstanding (0.584 million)**

### The Result

Running this year by year produced a **swap ratio range of roughly 1.72 to 2.36** (lower in year 1, improving in later years as combined PAT grows faster than dilution). Multiplying each ratio by Monmouth's own share price (**24 dollars**, per the case) gives the implied per-share value Monmouth could offer Robertson **without hurting its own EPS**:

> **Implied Value Range = 41 to 56 dollars per share**

> **Professor:** "So more than 50 dollars you can pay without diluting the EPS — maybe immediate EPS will dilute a bit, but forward EPS will not be diluted even if you give 56 dollars, meaning a 2.36 swap ratio, by the third or fourth year."

### How the Actual Deal Closed

Monmouth ultimately won Robertson in a **2-for-1 all-stock deal** (2 Monmouth shares for every 1 Robertson share) — implying roughly **2 x 24 = 48 dollars per share**, just under Simons' 50-dollar ask but well within the no-dilution band. Simons accepted **Monmouth's** offer over NDP's because:

- Monmouth **pays dividends** (Robertson shareholders wanted income, not a bet on growth)
- Monmouth is **listed with real liquidity**
- Monmouth has a **stronger balance sheet** — only 12 million dollars of debt

> **Professor:** "That is how the actual deal happened."

This closes the case, and the course: a target chosen by strict acquisition criteria, a valuation built from FCF + WACC + terminal value, a control/synergy premium band (50 to 63 dollars), and a stock-swap structure engineered to protect the acquirer's own shareholders — all four pillars of M&A valuation used together in one real transaction.

---

## Key Formulae (Course-Wide Summary)

| Formula | Expression |
|---|---|
| **EVA** | Actual Profit (NOPAT) - Capital Charge (Invested Capital x WACC) |
| **WACC (with tax)** | (Weight of Debt x Cost of Debt x (1 - Tax)) + (Weight of Equity x Cost of Equity) |
| **M&M Proposition I (no tax)** | Value of Levered Firm = Value of Unlevered Firm |
| **M&M Proposition II (with tax)** | Value of Levered Firm = Value of Unlevered Firm + Value of Tax Shield |
| **Free Cash Flow** | EBIT x (1 - Tax) + Depreciation - Capex - Change in Net Working Capital |
| **Cost of Equity (CAPM)** | Risk-free Rate + Beta x Market Risk Premium |
| **Relevering Beta** | Equity Beta = Asset Beta x (1 + Debt/Equity) |
| **Put-Call Parity** | Put + Spot = Call + PV(Exercise Price) |
| **Futures Price (continuous)** | Spot x e^(rate x time) |
| **Synthetic Fixed Rate (IRS)** | Floating Rate Debt + Pay-Fixed IRS = Fixed Rate Debt |
| **Swap Value (pay-fixed party)** | Value of Floating Leg - Value of Fixed Leg |
| **Interest Rate Parity** | Forward Rate = Spot Rate x (1 + Domestic Rate) / (1 + Foreign Rate) |
| **Purchasing Power Parity** | Expected Future Spot Rate = Spot Rate x (1 + Domestic Inflation) / (1 + Foreign Inflation) |
| **Altman Z-Score** | Weighted combination of financial ratios; Z above ~2.99 = safe zone, below ~1.81 = distress zone |
| **Control Premium** | Value of Target (New Management Assumptions) - Value of Target (Current Management Assumptions) |
| **Deal Value (Full M&A Formula)** | Standalone Value + Control Premium + Synergy Value - Illiquidity Discount |
| **Illiquidity Discount (Silber Model)** | 1 - (Price of Restricted Stock / Price of Unrestricted Stock) |
| **Illiquidity Proxy (India)** | Bid-Ask Spread as a function of Revenue, Profitability, Cash/Assets ratio, Trading Volume |
| **Standard Indian Practice Discount** | 20% to 25% of deal value for private-company targets |
| **EPS-Neutral Swap Ratio** | (Combined PAT / Acquirer's Standalone EPS - Acquirer's Current Shares) / Target's Shares Outstanding |

---

## Course Recipe Chain

This is the master thread tying all 20 sessions of Advanced Corporate Finance together:

**Sessions 1-4** (EVA as the true measure of value creation beyond accounting profit; capital structure theories — M&M Propositions I and II, trade-off theory, pecking order; long-term financing choices between balance-sheet financing and ring-fenced project finance) --> **Sessions 5-8** (Hybrid instruments and asset monetization for creative financing; corporate payout policy and dividend theories; the FPL Group case showing a real dividend-cut dilemma in practice; share buybacks as an alternative payout channel, opening the door to risk management) --> **Sessions 9-10** (Futures contracts — mechanics, margins, and arbitrage-free pricing; forward contracts; the first steps into options) --> **Sessions 11-12** (Options as insurance contracts — payoffs, put-call parity, binomial tree and Black-Scholes pricing; the "option lens" revealing that equity is a call option on firm assets, debt is a written put, and guarantees are puts in disguise) --> **Session 13** (Interest rate swaps — converting floating to fixed for certainty, not savings; using comparative advantage to lower borrowing cost; valuing a swap book as Floating Leg minus Fixed Leg; the fair-value-hedge vs. cash-flow-hedge distinction; first introduction to transaction, translation, and economic forex exposure) --> **Sessions 14-15** (International financial management in full — interest rate parity and purchasing power parity used to forecast forward and future spot rates; hedging transaction exposure with currency forwards, futures, and options; extending NPV analysis to cross-border investments using parity-adjusted discount rates) --> **Sessions 16-17** (Financial distress — the Altman Z-score and its refinements for estimating probability of default; the NCLT-driven choice between resolution and liquidation for distressed firms; individual bankruptcy and debt recovery) --> **Sessions 18-19** (Corporate valuation — free cash flow, capital cash flow, and equity cash flow methods, distinguishing maintenance capex from growth capex; then M&A valuation specifically — the true difference between a merger and an acquisition, and control premium measured by valuing the same target twice, once under current management and once under a new one) --> **Session 20** (Illiquidity discount — measured via the Silber restricted-stock model or, in India, via bid-ask spread proxies; the five-question framework for deciding whether discount or premium dominates a deal, applied to Reliance-Metro versus Tata Motors-Iveco; and the Monmouth Corporation capstone case, which fuses DCF, WACC construction, control-premium banding, and EPS-protected stock-swap structuring into one complete, real-world M&A story) --> **Course Complete** — all four levers of value (operating performance, financing choices, risk management, and deal-making) now sit in one toolkit for the end-term exam.

---

## Final Exam Prep Checklist

The professor closed the course with direct, practical guidance:

- **End-term exam: 16th August.** ("15th is Independence Day, 16th is freedom" — the professor's own joke about being done with ACF.)
- **Group presentation submission: 15th August**, via a link to be shared (through the course's online submission system).
- **Evaluation structure (recap across the course):** Quizzes 50% (best-of scoring across 7-8 quizzes through the term), Project + Class Participation 20% (10% project, 10% participation), End-term Exam 30%.
- **What to prioritize revising for the exam**, based on what this session and the prior two sessions emphasized as case-based and numerically heavy:
  - The **five-question framework** for discount-vs-premium dominance (be ready to apply it to a new, unseen deal scenario)
  - **Illiquidity discount** — both the conceptual exceptions (IPO-bound, cash-rich, large size) and the Silber-style regression logic
  - **Control premium** calculation (value the target twice — current vs. new management)
  - **Full DCF mechanics** — FCF build (don't forget working capital!), WACC construction (asset beta relevering, forward-looking cost of debt via a synthetic credit rating when the actual rating is unavailable), and terminal value
  - **EPS-neutral swap ratio** logic for stock-financed deals
  - Swap valuation and IRS mechanics from Session 13 (explicitly flagged in earlier sessions as end-term material)

> **Professor's parting words:** "How much mark you get is not that important. What is important is what you have learned in this course. I tried my best. I hope you enjoyed it... I'm sure this learning will help you not only in exam but also in your life, in your professional life."

---

## The Real-World Takeaway

Think about the last time you tried to sell something you owned but nobody else particularly wanted at that moment — a car, an apartment, even a side project you'd built. The price you actually got almost never matched the "fair value" a calculator would spit out. It was lower, because you needed to sell *now*, and the buyer knew it. That gap between fair value and actual price is illiquidity discount, and it is one of the most underrated ideas in this entire course, precisely because it has nothing to do with finance formulas and everything to do with **leverage in a negotiation** — who needs the deal to close more urgently.

The five-question framework from today is really a checklist for reading the room before any negotiation, not just an M&A deal: is there a real market for what's being exchanged (or are you the only option), is someone else competing for the same thing, is the other side desperate to exit or just casually open to offers, is there a fallback asset that puts a floor under the outcome, and is there a genuinely believable reason the combination is worth more than the parts. Anyone who has negotiated a job offer, a vendor contract, or even splitting a shared expense with a roommate has silently run some version of this test.

The Monmouth case is the whole course in miniature: a company set clear rules for what it would buy (know your criteria before you go looking), it had to build a valuation with defensible assumptions rather than one convenient number (the 50-to-63-dollar band, not a single point estimate), and it had to design the actual mechanics of the deal (a stock swap ratio) so that saying "yes" didn't quietly hurt its own people. Good decisions in real jobs work the same way — the analysis is only half the job; the other half is structuring the outcome so nobody important gets hurt by the fine print.

Use this when:
- You are evaluating **any offer with a range of possible outcomes** (a job offer with equity, a business proposal with earn-outs) — build a conservative case and an optimistic case, like the 50-and-63-dollar band, instead of anchoring on one number.
- You are on the selling side of **anything illiquid** — a private company stake, a piece of property, even freelance work with few other clients bidding — and you notice your price is being set low; ask whether it's your negotiating position (urgency, lack of alternatives) rather than the "true value" of what you're offering.
- You are asked to **combine two teams, budgets, or products** and someone claims "synergy" — push for the specific, measurable source (cost savings from combined procurement, or genuine revenue cross-sell) rather than accepting the word at face value.
- You are structuring **any deal involving equity or shares** (a stock-based buyout, a co-founder split, even a promotion tied to stock) — check what happens to existing stakeholders' share of the pie before agreeing to terms, the way Monmouth checked its own EPS before offering stock.

One-liner to remember: fair value is what a spreadsheet says, deal value is what your leverage says — know which one you're actually negotiating.
