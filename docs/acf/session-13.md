---
sidebar_position: 14
title: "Session 13: Interest Rate Swaps and Introduction to International Finance"
---

# Session 13: Interest Rate Swaps and Introduction to International Finance

*Converting the uncontrollable into the predictable — and stepping into the world of cross-border exposure*

---

## The Big Picture: Why Swaps Exist

Imagine you run a textile company. You went to a bank and took a working capital loan at a floating rate because that is what was available. Everything was fine until you heard that the RBI monetary policy committee is about to sit down and hike the repo rate. Suddenly, your comfortable loan becomes a ticking time bomb — every rate hike means you pay more interest, and you have zero control over it.

You go back to your bank and say, "Can you convert my floating rate loan into a fixed rate?" The bank says no. Now what?

You go to the **swap market** and **synthetically** convert your floating obligation into a fixed one. That is the entire reason interest rate swaps exist — not to save money on interest, but to give you **certainty over your cash flows**.

> **Professor's key point:** "Please remember, interest rate swap is not to reduce interest rate. It is to convert floating to fixed because of fear of fluctuation in the interest rate."

---

## Quick Recap: How IRS Works (From Session 12)

An **Interest Rate Swap (IRS)** is an OTC contract where two parties exchange interest payments on a notional principal. One pays fixed, the other pays floating. The principal itself never changes hands — only the net interest difference is settled each period.

Two core objectives of IRS:

1. **Convert one type of rate to another** (floating to fixed, or vice versa)
2. **Reduce borrowing cost** through comparative advantage

| Feature | Detail |
|---------|--------|
| **Market type** | OTC (not exchange-traded) |
| **Contract type** | Bipartite (two parties — you and the counterparty) |
| **Settlement** | Net (only the difference is exchanged) |
| **Frequency** | Typically semi-annual |
| **Principal** | Notional only — never exchanged |

---

## The Market Maker's Quote: Bid, Ask, and Swap Rate

When you approach a bank (market maker) for a swap contract, they give you **two rates** — a bid and an offer:

| Quote | Rate | Meaning |
|-------|------|---------|
| **Bid** | 6.02% | Rate at which the dealer pays fixed |
| **Offer/Ask** | 6.08% | Rate at which the dealer receives fixed |
| **Swap Rate** (midpoint) | 6.05% | The "best" price for you to enter |
| **Bid-Ask Spread** | 6 basis points | Where the bank makes money |

> **Professor:** "6.05 is the true or the best swap rate whether you receive it or you pay it. But when you actually go to market, you don't get 6.05."

If you are **paying fixed**, you pay at 6.08% (the offer rate). If you are **receiving fixed**, you get 6.02% (the bid rate). The bank always wins the spread.

---

## Fixed vs. Floating: What Is Your Real Fear?

A student asked whether fixed rate is always lower than floating. The professor corrected this important misconception:

> **Professor:** "When you enter into a fixed rate contract, on that day fixed rate is higher than the floating rate. But still you enter into fixed because as the time passes, floating rate will change. It may go up above your fixed rate."

And the critical follow-up:

> "It is not that if you enter into a fixed contract your objective is to pay less. No. Your objective is to fix the payment."

Think of it like a fixed EMI on your home loan. You might pay slightly more than the teaser floating rate today, but you sleep well for 20 years knowing the payment will not jump.

---

## Which Side Are You On? Liability vs. Asset

The professor walked through a careful exchange with a student named Mukund to establish this:

**If you have a floating rate loan (liability side):**

> **Professor:** "You have a floating rate loan. What is your fear?"

The fear is **rising interest rates** — you have to pay more. So you hedge by entering an IRS where you pay fixed and receive floating. The floating legs cancel, and you are left paying a fixed amount.

**If you have a floating rate asset (asset side, e.g., a bank that gave a floating rate loan):**

> **Professor:** "If I have a floating interest rate asset, my fear is if the interest goes down."

If rates fall, the bank receives less income on its floating-rate loan portfolio.

**If you have a fixed rate asset:**

When interest rates rise, the **present value** (mark-to-market value) of a fixed rate bond falls. This hits the P&L adversely. But this is a **value risk**, not a cash flow risk — and IRS cannot help here.

| Your Position | Your Fear | Hedge Action |
|---------------|-----------|-------------|
| Floating rate **liability** | Rates go **up** | Pay fixed IRS, receive floating |
| Floating rate **asset** | Rates go **down** | Pay floating IRS, receive fixed |
| Fixed rate **asset** | Rates go **up** (value drops) | Use futures/options (IRS cannot help) |

> **Professor's summary:** "On the liability side, my risk is if interest rate goes up. On the asset side, if the asset is in floating interest rate, my risk is if the interest goes down."

A student asked for an example of a floating rate asset. The professor used the student's own home loan:

> "Have you ever taken a bank loan for buying a flat? At floating rate? Then you already have an example. For the bank, that loan is a floating rate asset."

---

## Converting Floating to Fixed: The Mechanics

**Step 1:** You have a floating rate loan with your bank. You cannot change it.

**Step 2:** You enter an IRS where you **pay fixed** to the swap counterparty and **receive floating** from them.

**Step 3:** The floating you receive from the swap counterparty, you use to pay your actual bank.

**Step 4:** The floating legs cancel out. Net effect — you are paying fixed.

> **The equation:** Floating Rate Debt + IRS (pay fixed, receive floating) = Fixed Rate Debt (synthetically)

Of course, there is a cost — instead of getting the swap rate at 6.05%, you might pay 6.08% (the offer rate). But you know exactly what you are paying.

---

## Numerical Example 1: Company A and Bank B (LIBOR Swap)

**Setup:**
- Company A enters IRS with Bank B on **1st April 2005**
- **A pays:** 5% fixed, semi-annually
- **B pays:** 6-month LIBOR (floating)
- **Notional principal:** 100 million (never exchanged)
- **Duration:** 2.5 years (5 semi-annual payments)

### Critical Rule: Rate Set in Advance, Paid in Arrears

> **Professor:** "First time when they are paying after 6 months of entering into contract, they are paying at a rate which was prevalent on 1st April. They are not paying at a LIBOR rate which is on the day of payment."

The floating rate is **locked** at the start of each 6-month period and **applied** at the end.

### Period 1 (1st October 2005) — LIBOR on April 1 was 4.8%:

| Item | Amount (millions) |
|------|-------------------|
| A pays B (fixed): 5% / 2 on 100M | 2.5 |
| B pays A (floating): 4.8% / 2 on 100M | 2.4 |
| **Net settlement:** A pays B | 0.1 |
| A also pays its physical bank (floating loan) | 2.4 |
| **Total A pays:** 2.4 + 0.1 | **2.5** |

### A Later Period (1st October 2006) — LIBOR on April 2006 was 5.2%:

| Item | Amount (millions) |
|------|-------------------|
| A pays B (fixed) | 2.5 |
| B pays A (floating): 5.2% / 2 on 100M | 2.6 |
| **Net settlement:** A receives from B | 0.1 |
| A pays its physical bank (floating loan) | 2.6 |
| **Total A pays:** 2.6 - 0.1 | **2.5** |

> **Professor:** "If you look at the net settlement column, add them — you are always paying 2.5 overall. And that is what Company A wanted — to convert a floating loan into a fixed loan."

Whether LIBOR is 4.8% or 5.2% or anything else — Company A always pays **2.5 million**. The swap has perfectly converted the floating obligation into a fixed one.

---

## Using IRS to Lower Borrowing Cost: The Comparative Advantage Story

This is the second major use of swaps — not just to convert rates, but to actually **reduce** your borrowing cost through comparative advantage.

### The Setup

| Company | Credit Rating | Fixed Rate Available | Floating Rate Available | What They Want |
|---------|--------------|---------------------|------------------------|----------------|
| **A** | AAA | 8.0% | LIBOR + 0.50% | Floating |
| **B** | Single A | 9.5% | LIBOR + 1.20% | Fixed |

Now here is where the entire class got confused. Student after student said A should borrow floating (since that is what A wants). The professor pushed back firmly:

> **Professor:** "So the answer is they will borrow fixed. Why fixed? Because of comparative advantage."

### The Comparative Advantage Logic

Company A is AAA-rated, so it borrows cheaper than B in **both** markets. But **how much** cheaper?

| Market | A's Rate | B's Rate | A's Advantage |
|--------|----------|----------|---------------|
| **Fixed** | 8.0% | 9.5% | **150 basis points** |
| **Floating** | L + 0.50% | L + 1.20% | **70 basis points** |

A has a **bigger advantage in fixed** (150 bps vs. 70 bps). So A should borrow where its advantage is greatest — **fixed** — even though A actually wants floating. Similarly, B should borrow **floating** (where its disadvantage is smallest), even though B wants fixed.

**Result:** Both borrow at the "wrong" type from the physical market, then use a swap to convert to what they actually want.

### How the Swap Works (With a Financial Intermediary)

Both approach a financial institution (FI). A and B **do not know each other**. The FI handles both sides independently.

**Company A's flows:**
- Borrowed at **8% fixed** from the physical market
- Swap: Pays **LIBOR** to FI, receives **7.8%** from FI
- Pays its lender: 8%. Receives from swap: 7.8%. Gap: 0.2%
- **Net cost = LIBOR + 0.2%**
- Had A borrowed floating directly: LIBOR + 0.50%
- **Saving for A: 30 basis points**

**Company B's flows:**
- Borrowed at **LIBOR + 1.20%** from the physical market
- Swap: Pays **8% fixed** to FI, receives **LIBOR** from FI
- L received from FI cancels L paid to lender. Extra: 1.20%
- **Net cost = 8% + 1.20% = 9.20% fixed**
- Had B borrowed fixed directly: 9.50%
- **Saving for B: 30 basis points**

**The Financial Institution earns:**
- Receives 8% from B, pays 7.8% to A = **20 basis points**
- On the floating side, LIBOR in = LIBOR out = net zero

> **Professor:** "For the financial institution which is an intermediary, there is a huge return because without any investment they are making 20 bips."

### Total Gains Check

Total gain available = difference in comparative advantages = 150 - 70 = **80 basis points**, split:
- A: 30 bps
- B: 30 bps
- FI: 20 bps
- Total: 80 bps (the entire comparative advantage differential is captured)

The FI's risk? If one party defaults, the FI must still honor its contract with the other.

> **Professor:** "On a notional amount of 100 crore, 20 basis points is not bad — 20 lakh rupees every 6 months you are getting, to take care of your overhead plus any credit risk."

### Key Clarifications from Class Q&A

**Q: Is this a tripartite agreement?**
> **Professor:** "Bipartite. You don't know who is on the other side. These are customized contracts that the institution signs with one guy and separately with another guy. They don't match, and they don't need to know each other."

**Q: Is the financial institution the same bank that gave the original loan?**
> **Professor:** "No. Think about this example. A has borrowed not from a bank. It has issued a bond. Now A, after raising money from the bond market, goes to a bank for swap."

**Q: Are both A and B borrowing the same notional amount?**
> **Professor:** "Yeah, swap is done on the same notional value."

**Q: Do the bid-ask rates change based on counterparty credit rating?**
> **Professor:** "Of course. If there's a higher credit risk, they will offer a lower rate. So that means they will charge more commission. But these are individual two different contracts."

---

## What Does the IRS Spread Tell You About the Economy?

The bid-ask spread in the swap market is not just a transaction cost — it is an **economic indicator**.

When the professor asked what a widening spread implies, a student named Anish nailed it:

> **Anish:** "That could be when the volatility or the uncertainty is high in the market."

> **Professor:** "Very good. If you see company ratings are falling... you'll find swap rate going up because ultimately the default risk is with the intermediary. Widening the spread meaning liquidity is lowered — swap contracts are not available."

| Spread | What It Means | Implication |
|--------|--------------|-------------|
| **Tight** (e.g., 2 bps) | Low risk, healthy economy | Best time to enter swaps — cheapest |
| **Wide** (e.g., 10 bps) | High risk, economic stress | Expensive — decide whether to wait |

> **Professor:** "IRS spread also talks about short-term expected economic growth rate or conditions."

---

## Fair Value Hedge vs. Cash Flow Hedge

This distinction came up multiple times and the professor stressed it heavily:

| Hedge Type | What You Protect | Example | Instruments Used |
|------------|-----------------|---------|-----------------|
| **Fair Value Hedge** | The **value** (present value) of your asset on the balance sheet | Mutual fund NAV dropping because share prices fell | Futures, options, forwards |
| **Cash Flow Hedge** | The **predictability** of future cash flows | Floating rate loan payments changing unpredictably | **IRS (swaps)** |

> **Professor:** "IRS helps you only in managing cash flows or cash flow risk. For the value risk, you have to go to futures contracts or forward contracts."

**Critical implication:** If you already have a fixed rate loan from the market, you have **no cash flow risk** (payments are known). But you may still have **fair value risk** if interest rates change (the present value of your fixed-rate obligation changes). For that, IRS cannot help you.

> **Professor:** "IRS is to take care of my cash flow risk. It is a cash flow hedge contract, not a value hedge contract."

---

## The Indian Context: MIBOR OIS

In India, swaps do not use LIBOR. They use **MIBOR OIS** (Mumbai Interbank Offered Rate — Overnight Index Swap):

| Feature | LIBOR (London) | MIBOR OIS (India) |
|---------|---------------|-------------------|
| **Rate setting** | Polled every 6 months from bankers | Daily overnight rates compounded |
| **Flexibility** | Fixed 6-month periods | Can compound for any period (3 months, 4 months, etc.) |
| **Basis** | Survey-based (expected rates) | **Actual realized rates** |
| **Published by** | ICE (formerly BBA) | FBIL (arm of RBI) |

> **Professor:** "In MIBOR OIS, every day the swap rate is compounded. If you want to enter into a swap contract for 3 months, you compound for 3 months. You want to do it for 4 months, you compound for 4 months because you have the rates on a daily basis."

India is also moving toward **SOFR** (Secured Overnight Financing Rate), which uses actual realized rates instead of polling bankers — more transparent and harder to manipulate.

---

## Numerical Example 2: Print Fabrics (Indian IRS with MIBOR OIS)

### The Setup

**Print Fabrics** has a working capital loan (short-term) at a floating rate. They fear RBI will hike the interest rate. So they enter a **1-year MIBOR OIS** as a **fixed payer at 6.5%**.

| Parameter | Value |
|-----------|-------|
| Notional amount | 100 crore (matched to the actual loan) |
| Fixed leg | 6.5% per annum |
| Floating leg | Daily compounded overnight MIBOR |
| Day count convention | Actual / 365 |
| Period 1 | 182 days |
| Period 2 | 183 days (one extra day, but total = 365) |
| Floating rate Period 1 | 6.1% |
| Floating rate Period 2 | 6.9% (RBI hiked!) |

> **Professor on day count:** "For short-term loans, the convention is actual by 365. If your first month is February, you count 28 days. If it is a leap year, you count 29 days. You don't consider 30 days a month."

### Period 1 (Floating = 6.1%, BELOW the 6.5% fixed):

| Item | Calculation | Amount (Crore) |
|------|-------------|----------------|
| Fixed leg payment | 100 x 6.5% x (182/365) | 3.241 |
| Floating leg receipt | 100 x 6.1% x (182/365) | 3.042 |
| **Net IRS settlement** | Print Fabrics **pays** | **0.199 (19.9 lakhs)** |
| Payment to actual bank (floating loan) | | 3.042 |
| **Total cash outflow** | 3.042 + 0.199 | **3.241** |
| **All-in rate** | | **6.5% per annum** |

Print Fabrics paid **more** than the floating rate (6.5% vs 6.1%). But certainty was the objective, not savings.

### Period 2 (Floating = 6.9%, ABOVE the 6.5% fixed — the feared hike happened!):

| Item | Calculation | Amount (Crore) |
|------|-------------|----------------|
| Fixed leg payment | 100 x 6.5% x (183/365) | 3.259 |
| Floating leg receipt | 100 x 6.9% x (183/365) | 3.459 |
| **Net IRS settlement** | Print Fabrics **receives** | **0.201 (20.1 lakhs)** |
| Payment to actual bank (floating loan) | | 3.459 |
| **Total cash outflow** | 3.459 - 0.201 | **3.259** |
| **All-in rate** | | **6.5% per annum** |

Even though the floating rate jumped to 6.9%, Print Fabrics still paid only the equivalent of 6.5%.

> **Professor:** "Whatever happens to the interest rate, if your loan is in floating rate, you are not bothered because you have swept it at a fixed rate."

### A Sharp Student Question

A student named Koshik asked: what if RBI does **not** raise rates? Then Print Fabrics overpays in both periods. Would it be better to do shorter contracts?

> **Professor:** "Very good question. That's why I said swap contracts are short-term. A better idea for Print Fabrics would be instead of entering into a one-year contract, they can enter into 3-month contract and roll over."

But the professor added a crucial nuance:

> "What is the intention of Print Fabrics? That matters. Not what is the interest going to go up and down. Intention is to convert floating into fixed. If that is the intention, then it does not matter... You are saying come what may, I want to pay at 6.5%."

> "IRS is to take care of my cash flow risk. If the purpose is saving money, then I'll not enter into IRS."

---

## Valuing a Swap Contract: The Bank's Perspective

So far we looked at swaps from the company's viewpoint. But the **bank (intermediary)** needs to value its swap book for its balance sheet — they have exposure on both sides (contracts where they pay fixed, and contracts where they receive fixed).

> **Professor:** "After this class, if you have time, look at the balance sheet of any bank, open the annual report, type IRS — you will see they have exposure of hundreds of crores of rupees."

### The Framework

> **Value of Swap (for a pay-fixed party) = BFL (value of floating leg) - BFX (value of fixed leg)**

Where "B" represents the notional bond value.

### Valuing the Fixed Leg (BFX) — Full Lifetime

This is standard bond valuation — present value of all future cash flows:

> **BFX = PV(Coupon 1) + PV(Coupon 2) + ... + PV(Final Coupon + Principal)**

Each cash flow is discounted at the appropriate **zero rate** (spot rate for that maturity).

**Important warning from the professor:** Do NOT discount a 6% coupon bond at 6%.

> "If you discount 6% coupon with a 6% rate, your value always will be 100 — always you'll get face value. That's not the bond value. If the interest rate changes, bond value will change in the opposite direction."

### Valuing the Floating Leg (BFL) — The Clever Trick

For a floating rate bond, you only know the interest rate for the **next period**. After that, rates are unknown. So how do you value it?

> **Professor:** "You assume the bond is going to die or expire on the first payment date."

Just take the face value plus the next known interest payment, and discount it for just one period. That is your BFL.

**Special case — on the exact date of coupon payment:** BFL = Face Value (e.g., 100). Why? Because there is zero accrued interest. A floating rate bond always returns to **par** on payment dates.

> **Professor:** "A bond, a floating rate bond, is always fair valued on the date of payment of interest because there's no accrued interest."

Between payment dates, BFL will differ from face value because of the "dirty price" (clean price + accrued interest).

### Numerical Example

A financial institution **pays 6% fixed** (semi-annual) and **receives floating** on a notional of **100 million**. Remaining payment dates are **3 months, 9 months, and 15 months** from today.

**Given:**
- Fixed coupon (K): 3 million per period (6% / 2 x 100M)
- Floating coupon (K*): 2.6 million (LIBOR was 5.2% at the last reset, so 5.2% / 2 = 2.6%)
- Notional (L): 100 million
- Zero rates: 6% (3-month), 6.5% (9-month), 7% (15-month)

**Key observation:** The next payment is 3 months away, not 6 months. We are in the **middle** of a payment cycle — 3 months have already elapsed since the last reset date.

**BFX (Fixed Leg) — lifetime PV of all payments:**

| Cash Flow | Timing |
|-----------|--------|
| 3 million coupon | 3 months (0.25 years) |
| 3 million coupon | 9 months (0.75 years) |
| 103 million (coupon + principal) | 15 months (1.25 years) |
| **Total BFX** | **100.16 million** |

Why is BFX more than 100 million? Because a buyer today gets the **full** 6-month coupon (3 million) in just 3 months, even though they held the bond for only 3 months. The seller charges for the 3 months of accrued interest.

> **Professor:** "I am holding it for 3 months, I'm getting benefit for 6 months. So the guy who will sell me today will charge that interest for the first 3 months."

**BFL (Floating Leg) — just one period:**

| Cash Flow | Timing |
|-----------|--------|
| 102.6 million (100 + 2.6) | 3 months (0.25 years) |
| **Total BFL** | **101.07 million** |

**Swap Value = BFL - BFX = 101.07 - 100.16 = 0.91 million (positive)**

This means the bank has a **net asset of 0.91 million** on its balance sheet from this swap. The floating leg it receives is worth more than the fixed leg it pays.

### What Kind of Risk Is This for the Bank?

A student guessed "cash flow risk." The professor corrected:

> "No, it is a fair value risk. You have valued these bonds. Difference is a fair value risk. If it is a fair value risk, they cannot hedge it using IRS. They have to do it through options contracts, futures contracts."

---

## The Four Derivative Instruments: Complete Summary

With IRS covered, all four types of derivative contracts are now complete:

| Instrument | Market | Primary Hedge Type |
|------------|--------|--------------------|
| **Futures** | Exchange-traded | Fair Value Hedge |
| **Forwards** | OTC (customized) | Fair Value Hedge |
| **Options** | Exchange-traded | Fair Value Hedge |
| **Swaps (IRS)** | OTC (customized) | **Cash Flow Hedge** |

> **Professor:** "These instruments are used to manage essentially market risk. Credit risk is managed organically. Operational risk you cannot manage — you have to provide for it."

The two fundamental types of market risk hedges:
1. **Fair value hedge** — protect the balance sheet value (NAV, bond value, etc.)
2. **Cash flow hedge** — protect the predictability of future cash flows

---

## Introduction to International Financial Management

With derivatives wrapped up, the course shifts to its final major topic. The professor opened with a thought experiment:

**Can a purely domestic company — buying local raw materials, selling to local customers — have any forex risk?**

No direct forex risk. But even a "domestic" company may have:
- **Imported machinery** funded through external borrowing or supplier credit
- **Overseas subsidiaries** operating in foreign currencies
- **Exposure to macroeconomic policies** (tariffs, sanctions) affecting its competitive position

### Three Types of Forex Exposure

#### 1. Transaction Exposure — The Direct Hit

**What:** You have an actual transaction denominated in foreign currency — a payable or receivable.

**Example:** An Indian company buys a machine from a US supplier and agrees to pay in USD installments over 2 years. Between the deal date and each payment date, the INR/USD rate can move. If the rupee weakens, each installment costs more in rupee terms.

This is straightforward — real cash flow is at risk.

#### 2. Translation Exposure — The Accounting Surprise

This one stumped several students in class. The professor built it through Socratic questioning.

**Setup:** An Indian company has a subsidiary in the US. The subsidiary buys in dollars, sells in dollars, collects in dollars. The Indian HQ does **no transaction** in foreign currency. No money is repatriated.

So where is the risk? Students guessed "country risk," "currency risk when repatriating," and "company value risk." The professor kept saying no.

Finally, a student got it:

> **Student:** "Their profit and loss or their fluctuation in international currencies will be reflected in my balance sheet."

> **Professor:** "At the end of every year, I — meaning the Indian arm — has to prepare a consolidated balance sheet where they have to show in INR the performance of the subsidiary."

Every asset, liability, revenue, and expense of the US subsidiary must be **translated** from USD to INR for consolidated reporting. If the exchange rate moves between two reporting dates:

- Last year, the subsidiary investment was worth INR 200 crore
- This year, because the rupee depreciated, the same investment translates to INR 150 crore
- **Translation loss: 50 crore** — not because the subsidiary performed badly, but because the exchange rate moved

> **Professor:** "Not because you have recovered your 50 crore of investment, but because rupee has depreciated. So you have a translational loss of 50 crore."

#### 3. Economic Exposure — The Unhedgeable One

This is the broadest and most dangerous type:

> **Professor:** "Economic exposure is much wider than specific to a company. Someone puts tariff and I have customer or supplier from US — I get affected not because of action of the supplier but because of macroeconomic policy."

You **cannot** hedge economic exposure with derivatives. No futures contract or swap can protect you from a tariff announcement or a trade war.

> **Professor:** "Economic exposure can only be managed organically by diversifying. So you could say, okay, I'll reduce my exposure in US because of Trump and try to go to European market or African market or Middle East market."

### Summary of the Three Exposures

| Exposure Type | What It Is | Hedgeable with Derivatives? | Covered in Course? |
|---------------|-----------|----------------------------|-------------------|
| **Transaction** | Actual foreign currency payable/receivable | Yes (forwards, futures, options) | Yes |
| **Translation** | Consolidating foreign subsidiary financials into home currency | Partially | Yes |
| **Economic** | Macro policy changes (tariffs, sanctions, trade wars) | No — only organic diversification | No |

A student named Koshik asked why translation is a risk when you know the exchange rate on any given date. The professor clarified:

> "Converting is not difficult. But translation risk is you are translating their revenue, expenses into Indian currency — each item, asset, liability — everything. Between two balance sheet dates, what is the net exposure? Your investment. Last year it was INR 200 crore, this year 150 crore. Not because you recovered 50 crore, but because rupee has depreciated."

---

## Key Formulae

| Formula | Expression |
|---------|-----------|
| **Synthetic Fixed Rate** | Floating Rate Debt + Pay-Fixed IRS = Fixed Rate Debt |
| **Synthetic Floating Rate** | Fixed Rate Debt + Pay-Floating IRS = Floating Rate Debt |
| **Total Gain from Comparative Advantage Swap** | Fixed rate gap - Floating rate gap |
| **Day Count (Indian convention: Actual/365)** | Interest = Principal x Rate x (Actual Days / 365) |
| **Swap Value (pay-fixed party)** | V = BFL - BFX |
| **BFX (Fixed Leg Value)** | PV of all future coupons + PV of principal, each discounted at zero rates |
| **BFL (Floating Leg Value, between dates)** | (Face Value + Next Floating Coupon) / (1 + r1) raised to time fraction |
| **BFL (on coupon payment date)** | = Face Value (par value) |
| **Net Swap Payment** | Fixed Amount - Floating Amount (settled net each period) |

---

## The Recipe Chain

**Sessions 1-4** (EVA, NOPAT adjustments, capital structure) --> **Sessions 5-9** (Distribution decisions, risk management foundations, futures, forwards) --> **Sessions 11-12** (Options pricing with binomial trees and Black-Scholes, the option lens on corporate finance) --> **Session 13** (Interest Rate Swaps — converting rates via pay-fixed/receive-floating mechanics, reducing borrowing cost via comparative advantage, swap valuation with BFL - BFX, fair value vs. cash flow hedge distinction; introduction to three types of international exposure: transaction, translation, economic) --> **Next:** International Financial Management — deep dive into transaction and translation exposure

---

## What's Next

- **Next session:** International Financial Management in detail — measuring and managing **transaction exposure** and **translation exposure**
- **Key connection:** The derivative instruments covered so far (futures, forwards, options, swaps) will now be applied to **currency risk** management
- **Remember:** Swap questions are part of the **end-term exam** — make sure you can work through the comparative advantage example and the BFX/BFL valuation
- **Quiz note:** Best of 5 quizzes (out of 7-8 total), each worth 10 marks, for a total of 50 marks
