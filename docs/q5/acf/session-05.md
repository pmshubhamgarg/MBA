---
sidebar_position: 6
title: "Session 5: Hybrid Instruments & Asset Monetization"
---

# Session 5: Hybrid Instruments & Asset Monetization

*Convertibles, zero coupon bonds, perpetual bonds, and the InvIT structure — when straight debt and equity are not enough*

---

## Quick Recap: The Financing Decision Framework

Before diving into hybrid instruments, the professor did a rapid-fire Q&A to lock in the decision framework from the previous sessions on long-term financing. Think of it as a **decision tree** — you ask a question about your situation, the answer tells you which financing route to take.

| Question | If Yes | If No |
|----------|--------|-------|
| Are cash flows predictable, contracted, or regulated? | Traditional balance sheet financing (bank loans, NCDs) | Equity financing (no lender will touch you) |
| Are assets core (value-driving) and long-lived? | Long-term **fixed rate** debt (bonds, NCDs) | **Floating rate** debt (refinance as assets mature) |
| Is there a need to reduce downside risk? | **SPV structure** — transfer risk to those who can bear it | Traditional balance sheet financing |
| Will the asset mature and stabilize over time? | Initially fund with available sources, then **refinance** (InvIT, REIT) once cash flows stabilize | Standard financing based on other criteria |

> **Professor's key point on asset-liability matching:** "The life of asset and life of liability — if you can match, you will have no financing problem."

The mall example drives this home: you are building a commercial complex. Right now, zero revenue. Even after opening, occupancy grows slowly. No lender will fund you when assets are at 20% capacity. So you fund the construction against the land, then once the asset matures and generates steady rental income, you **refinance** through structures like InvIT or REIT.

---

## Convertible Bonds: The Hybrid with a Sweetener

### What Makes a Bond "Convertible"?

Imagine you lend money to a company by buying their bond. Normally, you get interest every year and your principal back at maturity. But what if the bond comes with an **option** — at some point, you can trade your bond for equity shares of the company?

That option to convert is the "sweetener" that makes the bond a **hybrid instrument** — part debt, part equity.

**Three flavors of convertibility:**

| Type | What it means | Example |
|------|--------------|---------|
| **Non-Convertible Debt (NCD)** | No conversion option. Pure debt. Borrow, pay interest, repay principal. | Torrent Power NCDs (discussed in Session 4) |
| **Optionally Convertible Bond (OCB)** | Conversion is a choice — investor, issuer, or both can trigger it | Reliance Industries bonds |
| **Compulsorily Convertible Bond (CCB)** | Conversion is mandatory at a predetermined date | Common in venture/PE deals |

### The IFCI Story: A Cautionary Tale

The first Indian entity to issue optionally convertible bonds was **IFCI** (Industrial Finance Corporation of India). They raised thousands of crores with a 21-year bond that could be converted at year 5, 9, 13, 18, and 21.

But here is the critical detail: the **option to convert was given only to the investor**, not retained by IFCI.

The board actually pushed back on conversion to equity. So instead, they gave investors an **option to exit** — surrender the bond and get cash back. You invest 5,000 rupees today, exit after 5 years and get 9,000 rupees.

**What went wrong:** The bond carried a low interest rate (around 10%) because of the conversion sweetener. After 5 years, if market interest rates went **up**, investors would dump the bond (why hold a 10% bond when the market offers more?). IFCI would then have to borrow fresh at the higher rate to pay them back. The cost of borrowing spiraled.

> **Professor's assessment:** "This was a big mistake they learned from."

### The Reliance Fix: Both-Side Options

Learning from IFCI, the next major convertible bond — issued by **Reliance Industries** — gave the option to **both parties**:

- If the **investor** exercises first → bond converts to equity (investor gets shares)
- If the **issuer** exercises first → bond is called back for cash (investor gets money)

This creates a healthy tension. The investor wants shares if the price is rising. The company wants to call it back before too much dilution happens.

---

## Convertible Bond Valuation: A Worked Example

Here is the problem the professor walked through in class.

**The Setup:**

| Parameter | Value |
|-----------|-------|
| Bond face value | 1,000 rupees |
| Coupon rate (convertible) | 10.5% |
| Coupon rate (straight bond, no conversion) | 12% |
| Bond tenure | 20 years |
| Conversion ratio | 40 shares per bond |
| Current share price (P0) | 20 rupees |
| Share price growth rate | 8% per annum |
| Call protection | First 5 years (company cannot call back) |
| Call price (after year 5) | 1,100 rupees (10% premium) |
| Call trigger | Conversion value exceeds 1,200 rupees |

### Question 1: What is the Conversion Price Built into the Bond?

> **Conversion Price = Face Value / Conversion Ratio = 1,000 / 40 = 25 rupees**

Current share price is 20 rupees. Conversion price is 25 rupees. So on day one, **nobody converts** — you would sacrifice a 1,000 rupee bond to get shares worth only 800 rupees (40 shares x 20 rupees).

The investor will only convert when the **conversion value** (number of shares x current market price) exceeds the bond value.

### Question 2: What is the Straight Debt Value?

This is where the hybrid gets split. The company raised 1,000 rupees by issuing a convertible bond. But in the balance sheet, you cannot show the full 1,000 as debt — it is a hybrid (part debt, part equity).

**To find the pure debt component:** Calculate what the bond would be worth if there were **no conversion option** — a straight bond paying 10.5% coupon, discounted at 12% (the rate for equivalent straight debt).

Using NPV of all cash flows (105 rupees annual coupon for 20 years + 1,000 rupees principal at maturity, discounted at 12%):

> **Straight debt value = 887.96 rupees**

So the split is:

| Component | Value | Where it sits in the balance sheet |
|-----------|-------|-----------------------------------|
| **Debt component** | 887.96 rupees | Shown as a loan/liability |
| **Equity component** (conversion option value) | 112.04 rupees | Shown as quasi-equity |
| **Total** | 1,000 rupees | — |

The implied value of the convertibility feature is **112 rupees** — that is what the investor is paying for the option to convert.

### The Call Provision Dynamics

As time passes and the share price grows at 8%, the conversion value rises. After about 10 years, conversion value reaches roughly 1,700 rupees — well above the 1,000 rupee bond value. The investor would love to convert.

But after year 5, the **company can call the bond back** (pay 1,100 rupees in cash) if the conversion value crosses 1,200 rupees. This forces a race: investors who want to convert should do it **before the company calls**.

### The Effective Cost Trap

Here is the surprise. Compare the two coupon rates:

- Convertible bond: 10.5%
- Straight bond: 12%

Looks like the convertible is cheaper, right? **Wrong.** If the company has to call back the bond after 5 years and pay a 10% premium (1,100 rupees instead of 1,000), the effective cost is actually **more than 12%**.

> **Professor's warning:** "Please don't compare a plain bond coupon with a convertible bond coupon based on the nominal coupon rate. If you have the call option with a premium, your effective cost can be higher."

### Why Issue Convertibles At All?

If the effective cost can be higher, why would any company choose convertibles?

The professor set up a comparison: Company A issues convertibles, Company B sticks with straight bonds. Same terms. What is the difference?

**Company A is confident its share price will grow fast.** If the share price rises, investors will convert to equity voluntarily. The company never needs to call the bond back or repay principal — it becomes "free money" (just 10.5% interest until conversion, then the principal obligation vanishes).

**Company B is skeptical about its share price.** If the price stagnates or drops, nobody converts. Investors hold the bond for 20 years and demand full principal repayment. The conversion sweetener was wasted.

> **Key insight:** "Companies whose share price is high — mature companies, not startups — would prefer convertible over straight bond to save that 1.5% coupon, because they know they don't need to pay a call price. It sends a signal of future rise in the share price."

A student asked: why not just issue shares later at a higher price instead of giving away the upside through convertibles? The professor clarified that in practice, the conversion ratio is often not fixed — it adjusts based on the market price at conversion, so the dilution is minimal (maybe 2-3% for a large company). The interest savings more than compensate.

---

## Zero Coupon Bonds (ZCB): Deep Discounts for Cash-Strapped Companies

### The Concept

Flip the convertible bond on its head. Instead of having an option on top of a coupon, a **zero coupon bond** has **no coupon at all**. The issuer gets money today, pays nothing during the bond's life, and repays the face value at maturity.

**Example from class:**

| Parameter | Value |
|-----------|-------|
| Face value | 1,000 rupees |
| Tenure | 5 years |
| Market yield for similar bonds | 9% |
| **Issue price** | **~650 rupees** |

The company issues a bond worth 1,000 rupees but receives only 650 rupees today — a **35% discount**. That is why ZCBs are also called **deep discount bonds**.

The investor's return comes entirely from the difference between the discounted purchase price and the face value received at maturity.

### Who Issues ZCBs?

Think about a toll road or a power plant in its early years. Revenue is trickling in — maybe the plant is running at 20% capacity. You can barely cover salaries and operating expenses. On top of that, paying interest to lenders? Impossible.

A ZCB lets you **defer the obligation**. No interest payments during the gestation period. By the time you have to repay (10-20 years later), the project has matured and cash flows are robust.

> **Professor's point:** "Any project which has a long gestation period — in the initial life of the project your cash flow will be lower. Under zero coupon bond, I defer the obligation."

Even though ZCBs may carry a higher effective rate than bank loans (say 9% vs 8.5%), the cash flow relief in the early years makes them worthwhile.

### The Tax Twist

This is where ZCBs get interesting. Every year, the loan amount on the balance sheet grows from 650 toward 1,000 as the implied interest accrues. The annual increase (say ~60 rupees in year 1) is the **implied interest**.

| Party | Tax treatment | Good or bad news? |
|-------|--------------|-------------------|
| **Issuer** (company) | Can show implied interest as expense in P&L, lowering profit and hence tax | Good news — tax benefit without cash outflow |
| **Investor** | Must show implied interest as income and pay tax on it, even though no cash received | Bad news — paying tax on phantom income |

> **Why ZCBs carry a higher yield:** The investor demands compensation for the tax burden on unrealized income. "You have to pay me higher implicit coupon so that it takes care of the tax burden."

A student asked: "If the company has not paid interest in cash, how can they claim a tax benefit?" The professor used a perfect analogy — March salary paid in April. You still claim 12 months of salary expense for tax purposes, not 11. Similarly, raw material purchased on 45-day credit is still a valid expense. **Tax benefit does not require cash outflow.**

---

## Perpetual Bonds: Coupon Forever, Principal Never

### The Opposite of ZCB

| Feature | Zero Coupon Bond | Perpetual Bond |
|---------|-----------------|----------------|
| Coupon during life | None | Yes, regular payments |
| Principal repayment | Yes, at maturity | No, never |
| Life | Finite (5-20 years) | Infinite (theoretically) |

A perpetual bond pays interest forever but never returns the principal. It behaves like equity — when you buy shares, the company never "repays" you, but you receive dividends.

### Who Would Buy This?

The professor tested the class: "I pay you 10% interest forever, but you never get your 1,000 rupees back. Will you invest?"

One student said yes. The professor challenged: "You don't need the principal back?"

The answer: **perpetual bonds only work if there is a secondary market.** If you can sell the bond to another investor (who then sells it to the next), you get your principal from the market, not the company.

> **Professor's framework:** "The only way a perpetual bond can have a buyer is if there is a market for it. I sell it, you buy it, you hold it for five years, then you sell it."

### Banks and Perpetual Bonds: A Regulatory Love Story

**Who issues:** Primarily **banks.** RBI allows banks to issue perpetual bonds as part of their regulatory capital (quasi-equity). If the bank faces stress, equity gets wiped out first, then perpetual bond holders absorb losses — protecting regular depositors and bondholders.

**Who buys:** **Insurance companies, pension funds, and debt mutual funds.** They have long-duration liabilities (20-30 year insurance policies, working-life pension obligations) and do not need the money back soon. A 10% perpetual return vs 7% FD is attractive if there is an exit route.

### The SEBI Controversy

Here is a real-world drama. Mutual funds that held perpetual bonds needed to calculate their **NAV** (Net Asset Value). Since these bonds are privately placed (not traded on exchanges), there is no ready market price.

**Round 1:** Mutual funds valued these bonds using a **5-year yield** — the practical horizon at which issuers typically call them back. This gave a higher bond value and hence a healthy NAV.

**Round 2:** SEBI intervened and said: "It is a perpetual bond. Use a **100-year yield** (or at least 30-40 year yield) to value it." A 40-year yield is higher than a 5-year yield. Higher discount rate means lower bond value, which means lower NAV, which means the fund looks like an underperformer. No investor wants to put money in an underperforming fund.

**Round 3:** The mutual fund industry pushed back. The Ministry of Finance intervened. SEBI eventually **withdrew the circular** and allowed the 5-year yield. Otherwise, the perpetual bond market would have died — no buyer means banks cannot issue, and the whole capital structure mechanism collapses.

### Why No Bond Truly Stays Perpetual

Here is a fascinating fact: **globally, no perpetual bond has survived more than 30 years.** The issuer always calls it back. Why?

When interest rates fall, the perpetual bond becomes expensive to service. You are paying 10% coupon when the market rate is 6%. The rational move: borrow fresh at 6%, use the cash to retire the perpetual bond. Net saving: 4% per year.

Conversely, in high-inflation weak economies (think Venezuela, Sri Lanka), interest rates stay high and issuers have **no incentive to refinance** — which means they would keep paying the perpetual coupon forever. But then no one would buy such bonds in the first place because there is no exit.

---

## Asset Monetization: The InvIT Structure

### The Big Idea

Sometimes you already have **operating assets** generating cash. Instead of borrowing against them, you can **monetize** them — essentially "sell" the cash flows to investors and use the upfront proceeds for new capex.

The vehicle for this is an **InvIT** (Infrastructure Investment Trust).

### The Power Grid Example

**Power Grid Corporation** (a public sector national grid company) needed 20,500 crores for capex expansion in 2021-22. Banks said: "We cannot lend you that much."

Solution: Monetize existing grid lines. Transfer operating assets to an InvIT, sell units to investors, use the proceeds for new capex.

### How the InvIT Structure Works

Think of it as a **three-gate system:**

**Gate 1 — SPV Level (where cash is born):**
The operating assets (grid lines, toll roads) sit inside SPVs. They generate revenue, pay their own expenses (O&M, debt service, taxes, reserves), and **upstream the remaining cash** to the InvIT.

**Gate 2 — InvIT Level (the pass-through):**
The InvIT receives cash from all SPVs, pays its own operating expenses (management fees, audit costs) and debt service, and calculates the **NDCF (Net Distributable Cash Flow)**.

SEBI mandates: **minimum 90% of NDCF must be distributed** to unit holders every year. The InvIT pays no tax — it is a pass-through vehicle.

**Gate 3 — Unit Holder Level (where you get paid):**
Investors who bought InvIT units receive distributions. But here is the clever part — the distribution is **split into three buckets** to minimize the investor's tax burden:

| Bucket | Tax treatment | Why it matters |
|--------|--------------|----------------|
| **Return of capital** | Capital gains tax (lower rate) | Part of your original investment being returned |
| **Interest income** | Regular income tax | Mapped to interest received from SPV shareholder loans |
| **Dividend income** | Dividend tax (depends on status) | Pass-through of SPV dividends |

### A Numerical Example

Here is the flow the professor walked through:

**At SPV Level:**

| Item | SPV 1 (Toll Road) | SPV 2 (Power Transmission) |
|------|-------------------|---------------------------|
| Revenue | 200 | 150 |
| Less: O&M, debt service, tax, reserves | (115) | (100) |
| **Net cash available for upstream** | **85** | **50** |

Total upstream to InvIT: **135 crores**

This 135 is split as: Interest on shareholder loan (65) + Repayment of shareholder loan (45) + Dividend (25)

**At InvIT Level:**

| Item | Amount |
|------|--------|
| Cash received from SPVs | 135 |
| Less: Operating expenses (management fee 8, audit/legal 2) | (10) |
| Less: Debt service (interest + principal) | (15) |
| **NDCF** | **110** |

SEBI says distribute minimum 90% of 110 = 99 crores. But suppose the InvIT distributes the full 110.

**At Unit Holder Level:**

| Distribution type | Amount | How derived |
|-------------------|--------|-------------|
| Interest income | 45 | Interest received (65) minus InvIT opex (10) minus InvIT debt interest (10) |
| Dividend income | 25 | Full pass-through of SPV dividends |
| Return of capital | 40 | Shareholder loan repayment (45) minus InvIT borrowing repayment (5) |
| **Total** | **110** | — |

### Power Grid's Actual Numbers (FY 2020)

| Item | Amount (crores) |
|------|----------------|
| Cash from SPVs (interest + dividend) | 5,900 |
| Cash for debt repayment + other income | 1,900 |
| **Total at InvIT level** | **7,800** |
| Less: Management fees, debt repayment | (1,700) |
| **NDCF** | **6,068** |

Unit holders receive their share of 6,068 crores, with SEBI-mandated 90% minimum distribution.

### Why InvIT is Powerful

The advantage for Power Grid: they got **20,500 crores upfront** by monetizing existing assets. This is **not a loan** — there is no obligation to repay. They created new assets by monetizing existing ones. The existing assets continue to operate (Power Grid still manages them), pay their own expenses, service their own debt, and upstream surplus cash.

> **Professor's point:** "Power Grid is not required to repay 20,500 crores. They got the money, created new assets by monetizing existing assets — no repayment. That's the advantage."

Current InvIT returns in India hover between **9% to 12% annualized** — and these are near-guaranteed because 90% of SPV assets must be income-generating.

---

## Equity Issuance: Not Always for Raising Money

### The NSE IPO Story

The professor used a current example — National Stock Exchange filing for a 2 billion USD IPO — to make a critical distinction.

**Fresh Issue vs OFS (Offer for Sale):**

| Type | Money goes to | Number of shares changes? | Purpose |
|------|-------------|--------------------------|---------|
| **Fresh Issue** | The company | Yes, increases | Raise capital for capex/growth |
| **OFS (Offer for Sale)** | Existing shareholders | No, stays same | Provide exit to early investors |

NSE's IPO is 100% OFS. NSE the company gets **zero** cash. Existing shareholders (like SBI) sell part of their holdings to new investors. So not all IPOs are about long-term financing — sometimes they are about providing **liquidity and exit** to early investors.

A student (Rahul) correctly identified this in class. The professor then asked: "If nothing is coming to NSE, why spend money on legal fees and management fees for an IPO?" Answer: the existing shareholders want to **monetize their holdings** at a good market valuation. They have been locked in for years with no trading market.

### Why Retail Investors Matter

SEBI mandates that a significant portion of IPO shares go to retail and HNI investors. The professor explained the non-obvious benefit:

> **It is a governance issue.** If your shareholder base is all institutional investors holding 5-10% each, they will sit on your board, interfere, and tell you what to do. But large numbers of small retail investors are happy with dividends and price appreciation. It becomes easier for promoters to run the company their way.

And SEBI has rationalized allotment — whether you apply for 1 lot or 100 lots, in an oversubscribed IPO, you only get **1 lot**. So families now apply through multiple PAN numbers to maximize allocation.

---

## Key Formulae

| Formula | Expression |
|---------|-----------|
| **Conversion Price** | Face Value of Bond / Conversion Ratio |
| **Conversion Value** | Number of Shares x Current Market Price |
| **Straight Debt Value** | NPV of all coupon payments + principal, discounted at straight bond yield |
| **Equity (Conversion Option) Value** | Total Bond Value - Straight Debt Value |
| **ZCB Issue Price** | Face Value / (1 + yield)^n |
| **ZCB Implied Interest (Year t)** | Issue Price x (1 + yield)^t - Issue Price x (1 + yield)^(t-1) |
| **NDCF (InvIT)** | Cash from SPVs - InvIT operating expenses - InvIT debt service |
| **InvIT Distribution Rule** | Minimum 90% of NDCF must go to unit holders |

---

## The Recipe Chain

**ICF** (NPV, WACC) → **EVA** (Session 1: integrating all three decisions) → **Capital Structure** (Sessions 2-3) → **Long-Term Financing** (Sessions 4-5: debt instruments, SPV, hybrids, InvIT) → **Financing Decision Framework** (match instrument to cash flow type, asset type, risk profile, and maturity)

**Memory aid — CZPIE** (the financing instruments covered):
- **C**onvertible bonds (hybrid, when share price is expected to rise)
- **Z**ero coupon bonds (gestation period projects, defer interest)
- **P**erpetual bonds (banks for regulatory capital, insurance/pension as buyers)
- **I**nvIT (monetize operating assets, three-gate cash flow)
- **E**quity (last resort in pecking order, fresh issue vs OFS)

---

## What's Next

- **New topic:** Corporate Payout Policy — how companies decide what to do with surplus cash (dividends, buybacks, bonus shares)
- **Pre-read:** Background note on corporate payout policy (uploaded to LMS)
- **Key question to think about:** If a company is generating profits but also investing heavily for growth, should it pay dividends? What if it has to borrow to maintain dividend payments?
- **Connecting thread:** The distribution decision is the third leg of the corporate finance triangle (Investment → Financing → Distribution), and it is deeply linked to EVA through the "how you share the surplus" question from Session 1

---

## The Real-World Takeaway

Forget the formulas for a second. Picture Power Grid: a company sitting on thousands of kilometers of grid lines that are already built, already working, already earning steady money every month. Yet they needed 20,500 crores for the next big project and banks said no. Instead of panicking, they looked at what they already owned, quietly earning cash in the background, and said: let's package that up and let investors buy into it directly. That is the whole idea of asset monetization in one sentence — do not just sit on a stable, cash-generating asset when you could unlock its value to fund the next thing.

That instinct is useful far outside finance. Think about a consulting team that built a really solid onboarding framework for one client two years ago. It still works great, but it is just sitting in a folder, used occasionally. That is an idle asset. The "InvIT move" in your job might be turning that framework into a repeatable offering, a training module, or a productized service that other teams or clients can pay for — instead of it just gathering dust. Same logic, no bonds involved.

The convertible bond story is really a lesson about optionality and signaling. A mature, confident company offers investors a lower coupon plus "maybe you'll get equity later," because it is confident enough in its own upside that it does not mind sharing a bit of it later. A nervous company does not get away with that. In your career, this shows up as: confident people and teams can often get better terms (more flexible deadlines, more trust, lighter oversight) precisely because they are willing to let the other side share in the upside if things go well. Nervous, unproven teams end up boxed into rigid terms, because nobody will bet on their upside.

Zero coupon bonds and perpetual bonds both boil down to matching the shape of an obligation to the shape of the cash coming in. A new toll road cannot pay interest year one because it has no traffic yet — so you defer the payment until the project matures. A bank needs "forever capital" that never has to be repaid on a fixed date, so it issues something that only works if people can trade it among themselves. The everyday version of this: before committing to a payment plan, a deadline, or a resourcing plan, ask what the cash flow (or effort, or bandwidth) actually looks like over time, and match the plan to that shape instead of forcing a generic one-size-fits-all schedule.

Use this thinking when you spot:
- An asset, tool, dataset, or piece of IP your team built once and now barely touches — ask whether it can be "monetized" (sold, licensed, reused across teams) instead of quietly depreciating.
- A funding or resourcing ask where the standard option (a straight loan, a flat budget ask) does not fit because the payoff is far in the future — consider structuring it to defer the "payback" until the thing actually starts producing value.
- A negotiation where you are confident about future performance — offering the other side some upside later (equity-like sharing) can often get you a better deal today than insisting on the full price up front.
- A recurring commitment (a subscription, a support contract, a standing meeting) that technically never ends — check occasionally whether it is still worth what it costs, the same way issuers eventually call back a perpetual bond once the math stops making sense.

The one-liner to keep in your back pocket: **don't just hold your assets, make your assets work for you — and always match what you owe to when the money (or the value) actually shows up.**
