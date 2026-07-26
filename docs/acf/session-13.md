---
sidebar_position: 14
title: "Session 13: Interest Rate Swaps and Introduction to International Finance"
---

# Session 13: Interest Rate Swaps and Introduction to International Finance

*From converting cash flows to crossing borders -- completing the derivatives toolkit and stepping into currency risk*

---

## Recap: What Is an Interest Rate Swap?

Before diving deeper, let's anchor the key ideas from last session.

An **Interest Rate Swap (IRS)** is an OTC contract where two parties exchange interest payments on a notional principal. One pays fixed, the other pays floating. The principal itself never changes hands -- only the net interest difference is settled each period.

Two core objectives of IRS:

1. **Convert one type of rate to another** (floating to fixed, or vice versa)
2. **Reduce borrowing cost** through comparative advantage

### How Swap Quotes Work

A swap dealer (market maker) provides two-way quotes:

| Quote | Rate | Meaning |
|-------|------|---------|
| **Bid** | 6.02% | Rate at which the dealer pays fixed |
| **Offer** | 6.08% | Rate at which the dealer receives fixed |
| **Swap Rate** (midpoint) | 6.05% | The "fair" swap rate |

The dealer earns the **spread** (6.08% - 6.02% = 6 basis points). This is their compensation for standing in the middle. The tighter the spread, the cheaper it is for companies to enter swaps.

---

## Fixed vs Floating: Why Pay More?

This is a question students keep asking -- and the professor addressed it head-on.

When you enter a fixed rate contract, **on that day, the fixed rate IS higher than the floating rate**. So why would anyone choose fixed?

> **Professor's answer:** "When you enter into a fixed rate contract, on that day fixed rate IS higher than floating rate. But you enter fixed because over the 10-year period, floating will change -- it may go above your fixed rate."

The purpose of choosing fixed is **not** to pay less. It is to **fix** the payment. You are buying certainty. You know exactly how much goes out every period -- no surprises, no sleepless nights when the RBI announces a rate hike.

Think of it like a fixed EMI on your home loan. You might pay slightly more than the teaser floating rate today, but you sleep well for 20 years knowing the payment won't jump.

---

## Converting Floating to Fixed Using IRS

### The Problem

You have a floating rate loan from your bank. Your fear? Interest rates go **up**. Every time rates rise, your interest payment increases. Your cash flow becomes unpredictable.

### The Solution

Enter a **pay-fixed-receive-floating** IRS.

Here is how the cash flows work:

1. You **pay fixed** to the swap counterparty
2. You **receive floating** from the swap counterparty
3. You **pay floating** to your actual bank (your original loan)

The floating you receive from the swap and the floating you pay to your bank **cancel each other out**. What remains? Just the fixed payment to the swap counterparty.

> **Floating Rate Debt + IRS (pay fixed, receive floating) = Fixed Rate Debt (synthetically)**

You have not refinanced your loan. You have not gone back to your bank. You have simply layered a swap on top and converted your floating exposure to fixed -- synthetically.

---

## The Risk Depends on Which Side You Are On

This is subtle but important. The risk from interest rate changes is **different** depending on whether you hold an asset or a liability, and whether the rate is fixed or floating.

### Liability Side (You Owe Money)

| Type | Your Fear | Why |
|------|-----------|-----|
| **Floating rate liability** | Interest rates go **UP** | You pay more each period |
| **Fixed rate liability** | No direct cash flow risk | Payment is locked (but opportunity cost if rates fall) |

### Asset Side (You Are Owed Money)

| Type | Your Fear | Why |
|------|-----------|-----|
| **Floating rate asset** | Interest rates go **DOWN** | You receive less income |
| **Fixed rate asset** | Interest rates go **UP** | Present value of the asset drops (mark-to-market loss hits P&L) |

A bank that has given a floating rate loan fears falling interest rates -- its income shrinks. A bank holding a fixed rate bond fears rising interest rates -- the bond's market value drops.

The direction of risk is **opposite** for assets and liabilities. This matters when you decide which side of the swap to take.

---

## Detailed IRS Example: Company A and Bank B

Let's walk through a complete numerical example.

### The Setup

- **Company A** pays Bank B **5% fixed** (semiannual) for **2.5 years**
- **Bank B** pays Company A **6-month LIBOR** (floating)
- **Notional principal:** 100 million USD
- Contract signed on **1st April 2005**, LIBOR on that day = **4.8%**

### Critical Rule About Floating Rates

The floating rate for any period is set at the **beginning** of that period, not at the end. So the LIBOR observed on the contract signing date determines the first floating payment.

### Period 1: April 2005 to October 2005

LIBOR at start of period (1st April 2005) = 4.8%

| Payment | Calculation | Amount |
|---------|-------------|--------|
| Fixed (A pays) | 100M x 5% / 2 | 2.5M |
| Floating (A receives) | 100M x 4.8% / 2 | 2.4M |
| **Net** | A pays the difference | **0.1M** |

Company A's total interest cost:
- Pays 2.4M to its physical bank (floating rate on actual loan)
- Pays 0.1M net to swap counterparty
- **Total = 2.5M**

### Period 3: April 2006 to October 2006

Now LIBOR has risen to 5.2% (set on 1st April 2006).

| Payment | Calculation | Amount |
|---------|-------------|--------|
| Fixed (A pays) | 100M x 5% / 2 | 2.5M |
| Floating (A receives) | 100M x 5.2% / 2 | 2.6M |
| **Net** | A receives the difference | **0.1M** |

Company A's total interest cost:
- Pays 2.6M to its physical bank (floating rate has increased)
- Receives 0.1M from swap counterparty
- **Total = 2.6M - 0.1M = 2.5M**

### The Key Insight

In **every single period**, regardless of where LIBOR goes, Company A always pays a total of **2.5M**. The swap has perfectly converted a floating rate liability into a fixed rate liability.

When rates are low, the swap costs A a little extra. When rates are high, the swap saves A money. But the total is always the same -- and that predictability is exactly the point.

---

## Using IRS to Lower Borrowing Cost: Comparative Advantage

This is the second powerful use of swaps -- and it relies on the same logic as international trade (Ricardo's comparative advantage).

### The Setup

Two companies want to borrow:

| Company | Credit Rating | Fixed Rate Available | Floating Rate Available | Wants |
|---------|--------------|---------------------|------------------------|-------|
| **A** | AAA | 8.0% | LIBOR + 0.5% | Floating |
| **B** | A | 9.5% | LIBOR + 1.2% | Fixed |

Company A is better in **both** markets (it has absolute advantage everywhere). But look at the **gap** between them:

- Fixed market gap: 9.5% - 8.0% = **150 basis points**
- Floating market gap: (L+1.2%) - (L+0.5%) = **70 basis points**

A's advantage is **much larger** in the fixed market (150 bps vs 70 bps). So A has **comparative advantage** in fixed rate borrowing, and B has comparative advantage in floating rate borrowing.

### The Strategy: Borrow Where You Have Comparative Advantage, Then Swap

- **A wants floating** but borrows **fixed at 8%** (where its advantage is greatest)
- **B wants fixed** but borrows **floating at LIBOR + 1.2%** (where its disadvantage is smallest)
- Both approach a **financial institution (FI)** to arrange a swap

### The Swap Flows

**Company A's flows:**
- Pays 8% to its physical lender (fixed loan)
- Pays LIBOR to the FI (swap: A pays floating)
- Receives 7.8% from the FI (swap: A receives fixed)
- **Net cost = LIBOR + 8% - 7.8% = LIBOR + 0.2%**
- Direct floating would have cost LIBOR + 0.5%
- **A saves 30 basis points**

**Company B's flows:**
- Pays LIBOR + 1.2% to its physical lender (floating loan)
- Pays 8% to the FI (swap: B pays fixed)
- Receives LIBOR from the FI (swap: B receives floating)
- **Net cost = 8% + 1.2% = 9.2% fixed**
- Direct fixed would have cost 9.5%
- **B saves 30 basis points**

**Financial Institution's flows:**
- Receives 8% from B, pays 7.8% to A = **earns 20 basis points**
- Receives LIBOR from A, pays LIBOR to B = net zero on floating

### Why the FI Loves This Business

> **Professor's exact words:** "For the financial institution which is a intermediary there is a huge return because without any investment they are making 20 bips."

The FI has no loan on its books. It has not lent money to anyone. It simply sits in the middle, passing payments through, and earns 20 basis points on the notional principal. On a notional of 100 crore, that is **20 lakh every 6 months** -- for essentially zero capital deployed.

The only risk? **Credit risk** -- if one party defaults on their swap payments. But that is a fraction of the risk of actually lending 100 crore.

### Total Gains

The total savings = 150 bps - 70 bps = **80 basis points**. These are split:
- A gets 30 bps
- B gets 30 bps
- FI gets 20 bps
- Total: 80 bps (the entire comparative advantage differential is captured)

---

## IRS Spread: A Window into the Economy

The spread between bid and offer on swap quotes is not just a transaction cost -- it is an **economic indicator**.

| Spread | What It Means | When It Happens |
|--------|--------------|-----------------|
| **Tight** (e.g., 6 bps) | Swap market is cheap; low default risk | Good economic conditions, stable ratings |
| **Wide** (e.g., 10+ bps) | Swap market is expensive; high default risk | Economy deteriorating, company ratings falling |

When the economy weakens, more companies face potential default. The intermediary charges a wider spread to compensate for the higher credit risk. So if you are watching swap spreads and they start widening, it signals that the market expects **short-term economic trouble**.

Best time to enter a swap? When the spread is **tight** -- you pay the least to the intermediary.

---

## Fair Value Hedge vs Cash Flow Hedge

This distinction matters for understanding what IRS can and cannot do.

| Hedge Type | Protects Against | Instrument |
|------------|-----------------|------------|
| **Fair Value Hedge** | Decline in the **value** (market price) of an asset | Futures, forwards, options |
| **Cash Flow Hedge** | Uncertainty in future **cash flows** | Interest Rate Swaps |

> **Professor's key clarification:** "IRS helps you only in managing cash flows or cash flow risk. For the value risk, you have to go to futures contracts or forward contracts."

If you hold a mutual fund and fear its NAV will drop -- that is a **fair value risk**. Use futures or options.

If you have a floating rate loan and fear your payments will spike -- that is a **cash flow risk**. Use an IRS.

> **Professor:** "IRS is to take care of my cash flow risk. It's a cash flow hedge contract, not a value hedge contract."

This is why IRS is classified differently from the other three derivatives (futures, forwards, options) -- it addresses a fundamentally different type of risk.

---

## MIBOR OIS vs LIBOR: India's Floating Rate

India does not use LIBOR. It uses **MIBOR** -- the Mumbai Interbank Offered Rate.

| Feature | LIBOR | MIBOR OIS |
|---------|-------|-----------|
| **Frequency** | Polled every 6 months | Daily rate (overnight) |
| **Fixed for** | Next 6 months | Compounded daily for the period |
| **Flexibility** | Only 6-month or 12-month periods | Any period (3-month, 4-month, etc.) |
| **Published by** | ICE (international) | FBIL (arm of RBI) |
| **Type** | Polled (survey-based) | Realized (actual transactions) |

The "OIS" in MIBOR OIS stands for **Overnight Index Swap**. The floating rate is the overnight rate, compounded over the contract period. This makes it more **flexible** -- you can structure swaps for any tenor, not just 6-month multiples.

India is also moving toward **SOFR** (Secured Overnight Financing Rate) for international benchmarks, which like MIBOR is based on actual realized rates rather than polls.

---

## Indian IRS Example: Print Fabrics

### The Setup

Print Fabrics is an Indian company with a **working capital loan at a floating rate**. The company fears the RBI will hike interest rates. To protect itself, it enters a **1-year MIBOR OIS** as a **fixed rate payer** at **6.5%**.

- **Notional principal:** 100 crore (matched to the actual loan)
- **Contract period:** 1 year, split into two semiannual periods
- **Day count convention:** Actual/365 (not 30/360 as used internationally)
  - First period: **182 days**
  - Second period: **183 days**

### Period 1: Floating Rate = 6.1% (RBI Has Not Hiked Yet)

| Item | Calculation | Amount |
|------|-------------|--------|
| Fixed payment (Print Fabrics pays) | 100 cr x 6.5% x 182/365 | 3.241 crore |
| Floating receipt (Print Fabrics receives) | 100 cr x 6.1% x 182/365 | 3.042 crore |
| **Net** | Print Fabrics pays | **19.9 lakhs** |

Total interest cost:
- Pays 3.042 crore to its physical bank (floating rate on actual loan)
- Pays 19.9 lakhs net to swap market
- **Total = 3.042 + 0.199 = 3.241 crore**
- **All-in rate: 6.5% per annum** -- exactly the fixed swap rate

### Period 2: Floating Rate Rises to 6.9% (RBI Hiked!)

| Item | Calculation | Amount |
|------|-------------|--------|
| Fixed payment (Print Fabrics pays) | 100 cr x 6.5% x 183/365 | 3.259 crore |
| Floating receipt (Print Fabrics receives) | 100 cr x 6.9% x 183/365 | 3.459 crore |
| **Net** | Print Fabrics receives | **20.1 lakhs** |

Total interest cost:
- Pays 3.459 crore to its physical bank (floating rate is now higher)
- Receives 20.1 lakhs from swap market
- **Total = 3.459 - 0.201 = 3.259 crore**
- **All-in rate: 6.5% per annum** -- still exactly the fixed swap rate

### But What If RBI Does Not Hike?

A student named Koshik asked this exact question. The professor's response was immediate:

> **Professor:** "Purpose is to fix cash flow, not to save money. Come what may, I pay 6.5%."

If rates fall to 5%, Print Fabrics still pays 6.5%. They "lose" relative to not having the swap. But that is the entire point -- you are **buying certainty**, not making a bet. It is insurance. You do not complain about paying your car insurance premium in a year when you had no accidents.

The professor also offered a practical tip: instead of a 1-year contract, it is often **better to do 3-month contracts and roll over**. This gives you more flexibility to adjust as conditions change.

---

## Valuation of Interest Rate Swaps

Once a swap is in place, its market value changes over time as interest rates move. To value a swap, treat it as the difference between two bonds.

### The Framework

For a **pay-fixed, receive-floating** swap:

> **Value of Swap = BFL (value of floating leg) - BFX (value of fixed leg)**

If this is positive, the swap is an **asset** for the fixed payer. If negative, it is a **liability**.

### Valuing the Fixed Leg (BFX)

The fixed leg is like a **fixed coupon bond**. You know all future cash flows (they are fixed). To value it:

1. List all remaining fixed payments (coupons)
2. Add the notional principal to the last payment
3. Discount each cash flow at the appropriate **zero rate** (spot rate for that maturity)

**Important:** You must discount at the zero rate, not the coupon rate. If you discounted at the coupon rate, the bond would always be worth par (face value), which defeats the purpose of valuation.

### Valuing the Floating Leg (BFL)

The floating leg is trickier because you only know the rate for the **next** payment period. Beyond that, rates are unknown.

The insight: a floating rate bond always resets to **par (face value) on each payment date**. So:

- **On a payment date:** BFL = Face Value (e.g., 100)
- **Between payment dates:** BFL = (Face Value + Next Period's Floating Coupon) discounted for the remaining time to the next payment

> **BFL = (Face Value + K*) / (1 + r1)^t**

Where **K*** is the next floating coupon (already known) and **r1** is the zero rate for the period until the next payment.

### Numerical Example

A financial institution **pays 6% fixed semiannual** and **receives floating** on a notional of **100M USD**. We are partway through the contract.

**Given:**
- Remaining payment dates: **3 months, 9 months, 15 months** from now
- Fixed coupon per period: K = 100M x 6% / 2 = **3M**
- Next floating coupon: K* = 100M x 5.2% / 2 = **2.6M** (rate was set at the last payment date)
- Zero rates: **6%** (3 months), **6.5%** (9 months), **7%** (15 months)

**BFX (Fixed Leg):**

> **BFX = 3 / (1.06)^0.25 + 3 / (1.065)^0.75 + 103 / (1.07)^1.25 = 100.16M**

Why is BFX above 100? Because we are between payment dates -- a buyer would need to pay accrued interest, pushing the "dirty price" above par.

**BFL (Floating Leg):**

> **BFL = (100 + 2.6) / (1.06)^0.25 = 101.07M**

Only the next period matters -- after that payment, the floating bond resets to par.

**Value of Swap:**

> **Swap Value = BFL - BFX = 101.07 - 100.16 = 0.91M**

This swap is worth **0.91 million USD** and is an **asset** for the financial institution (because BFL &gt; BFX: the floating payments they receive are worth more than the fixed payments they make).

---

## Market Makers in Swaps

Market makers in the swap market function similarly to **limit order placers** in the Indian stock market. India does not have formal designated market makers in equities -- but the people who place limit orders provide liquidity by offering two-way prices.

In swaps, banks act as market makers by:
- Quoting a bid (rate they will pay fixed at) and an offer (rate they will receive fixed at)
- Earning the spread between bid and offer
- **Not holding the underlying loans** -- they simply intermediate the swap flows

The bank's exposure is **credit risk** (counterparty default), not **market risk** (interest rate movements). This is a high-return-on-capital business because no loan principal is at risk.

---

## Summary of All Four Derivatives

With IRS complete, we have now covered the full derivatives toolkit:

| Instrument | Market | Settlement | Hedge Type | Underlying Risk |
|------------|--------|------------|------------|-----------------|
| **Futures** | Exchange traded | Daily mark-to-market | Fair Value Hedge | Price/value risk |
| **Forwards** | OTC (customized) | At maturity | Fair Value Hedge | Price/value risk |
| **Options** | Exchange traded | At/before expiry | Fair Value Hedge | Price/value risk |
| **Swaps** | OTC (customized) | Periodic net settlement | Cash Flow Hedge | Cash flow risk |

Key observations:

- **Futures and Options** trade on exchanges (standardized, liquid, regulated)
- **Forwards and Swaps** trade OTC (customized, flexible, counterparty risk)
- **Three instruments** (futures, forwards, options) handle **fair value risk**
- **Only swaps** handle **cash flow risk**
- All four manage **market risk** -- none of them address credit risk or operational risk

Two types of hedges exist in the financial world: **fair value hedges** (protecting asset/liability values) and **cash flow hedges** (protecting future cash flow certainty). A complete risk management strategy may use both.

---

## Introduction to International Finance

With derivatives covered, the course now shifts to a new domain: **international finance**. When companies operate across borders, currency fluctuations create entirely new risks.

There are three types of exposure a company faces from international operations:

### 1. Transaction Exposure

This is the most direct and intuitive form.

**What it is:** Risk from actual transactions denominated in a foreign currency.

**Example:** An Indian company buys a machine from a US supplier and agrees to pay in installments in USD. Between the date the deal is signed and the date each payment is made, the USD/INR exchange rate can move. If the rupee weakens (say from 83 to 87 per USD), each installment costs more in rupee terms.

This is a **real cash flow impact** -- the company physically pays more or less depending on currency movements.

### 2. Translation Exposure

This is more subtle and often confuses people.

**What it is:** Risk from consolidating the financial statements of overseas subsidiaries.

**Example:** An Indian parent company has a subsidiary in the US. The subsidiary does all its business in USD -- no direct transaction between the Indian HQ and the subsidiary. But at year-end, the parent must prepare **consolidated financial statements**. Every USD number on the subsidiary's balance sheet must be translated to INR.

Last year, the investment was translated at 200 crore. This year, due to currency movement, the same investment translates to 150 crore. That is a **translational loss of 50 crore** on the balance sheet -- even though no money actually changed hands.

Translation exposure affects the **balance sheet and reported earnings** but does not involve actual cash flows.

### 3. Economic Exposure

This is the broadest and most difficult to manage.

**What it is:** Risk from macroeconomic policy changes that affect a company's competitive position internationally.

**Examples:**
- A government imposes tariffs on imports from a specific country
- Sanctions are placed on trading with certain nations
- Trade policies shift, making exports more or less competitive

> **Professor's insight:** "Economic exposure can only be managed organically by diversifying. You reduce exposure in US because of Trump and try to go to European market or African market."

You **cannot** hedge economic exposure with derivatives. No futures contract or swap can protect you from a tariff announcement. The only response is **strategic diversification** -- spreading your business across multiple markets so that a policy change in one market does not cripple the entire company.

### What Gets Covered Going Forward

| Exposure Type | Can Be Hedged with Derivatives? | Covered in Detail? |
|--------------|-------------------------------|-------------------|
| **Transaction** | Yes (forwards, futures, options) | Yes -- upcoming sessions |
| **Translation** | Partially (complex accounting rules) | Yes -- upcoming sessions |
| **Economic** | No (only organic/strategic response) | No -- beyond scope |

---

## Key Formulae

| Formula | Expression |
|---------|-----------|
| **Floating to Fixed Conversion** | Floating Rate Debt + IRS (pay fixed, receive floating) = Fixed Rate Debt |
| **Comparative Advantage Total Gain** | Fixed rate gap - Floating rate gap |
| **IRS Value (pay-fixed party)** | BFL - BFX |
| **BFX (Fixed Leg)** | Sum of PV of all fixed coupons + PV of notional, discounted at zero rates |
| **BFL (Floating Leg, between dates)** | (Face Value + Next Floating Coupon) / (1 + r1)^t |
| **BFL (on payment date)** | Face Value (par) |
| **Net Swap Payment** | Fixed Amount - Floating Amount (settled as net) |
| **Day Count (Indian convention)** | Notional x Rate x (Actual Days / 365) |
| **Swap Spread** | Offer Rate - Bid Rate |

---

## The Recipe Chain

**Floating Rate Risk** (uncertain cash flows from variable rates) --> **IRS Mechanics** (pay fixed, receive floating to synthetically fix payments) --> **Comparative Advantage** (borrow where your advantage is greatest, then swap to get what you want) --> **Financial Intermediary** (earns the spread with zero capital, only credit risk) --> **MIBOR OIS** (India's daily compounded floating benchmark) --> **Swap Valuation** (BFL - BFX using zero rates) --> **Fair Value vs Cash Flow Hedge** (futures/options for value risk, swaps for cash flow risk) --> **Four Derivatives Complete** (futures, forwards, options, swaps) --> **International Finance** (transaction, translation, economic exposure -- new risks beyond interest rates)

---

## What's Next

- **Transaction exposure management** -- how to use forwards, futures, and options to hedge currency risk on specific foreign currency payables and receivables
- **Translation exposure** -- the accounting mechanics of consolidating foreign subsidiaries and the hedging strategies available
- **Currency forwards and cross-currency swaps** -- extending the derivatives toolkit to the foreign exchange domain
- **Keep in mind:** The four derivatives instruments you have learned (futures, forwards, options, swaps) will now be applied in an international context. The instruments are the same -- the underlying risk just shifts from interest rates and stock prices to exchange rates
