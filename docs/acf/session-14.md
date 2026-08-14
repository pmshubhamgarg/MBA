---
sidebar_position: 15
title: "Session 14: International Financial Management — Currency Exposure and Parity Conditions"
---

# Session 14: International Financial Management — Currency Exposure and Parity Conditions

*Same old NPV game, new playing field — now with multiple currencies, multiple inflation rates, and a government that can lock your money in.*

---

## The Big Picture: Why International Finance Needs Its Own Chapter

Think about what you have been doing the whole course: find positive NPV projects, raise money at the lowest possible cost. That objective does not change one bit when you cross a border. What changes is the **plumbing**.

> **Professor:** "Whole objective is same except positive NPV projects, raise money at the lowest possible cost. That is true for any market, any geography. But the problem happens when there are cross-border transactions."

Three things make cross-border finance genuinely harder:

1. **Multiple currencies, and your own currency is volatile.** The rupee was around 45 to a dollar in 2011. Today it is around 95-96. That is a massive move over 15 years, and it changes every cash flow you have promised or been promised in a foreign currency.
2. **Different inflation and interest rates across countries.** This is not just noise — it systematically drives how currencies move relative to each other (this is the whole engine behind parity conditions, coming up).
3. **Political risk.** Governments can restrict your ability to take money out of the country (**capital control**), or seize your assets outright (**expropriation risk**), or simply default (Greece is the professor's go-to example). This is why investors demand a **country risk premium**.

> **Professor's example:** An Indian telecom company investing domestically might expect a 12% IRR/WACC. The same company investing in Africa might demand 15-16% IRR because of political risk. But if it invests in the UK, there is essentially no extra political risk — so it might even accept a return lower than its 12% domestic hurdle. The country premium can be positive or negative.

---

## Recap: The Three Types of Currency Exposure (From Session 13)

Before diving into mechanics, the professor recapped the three exposures introduced at the end of the previous session, because this entire session builds on them.

| Exposure Type | What It Is | How It Is Managed |
|---|---|---|
| **Transaction Exposure** | You have an actual foreign-currency transaction (a receivable or payable). | Natural hedging first, then derivatives (forwards, futures, options, swaps) for the leftover. |
| **Translation Exposure** | You have a foreign subsidiary/branch, and you must translate its accounts into your home currency for consolidated reporting. | **Not hedged with derivatives.** Managed by creating a provision/reserve — it is an accounting exposure. |
| **Economic Exposure** | Broad exposure to a geography or currency zone (e.g., 70% of revenue from the US). | **Not hedged with derivatives either.** Managed strategically — diversify your revenue/customer/geography mix. |

> **Professor:** "It is only the transaction exposure for which you can use derivative contracts or financial instruments to manage those risks."

**The golden rule on transaction exposure — hedge naturally first:**

> **Professor:** "Suppose I sell abroad and I also buy raw material from abroad and my export revenue is 100 million dollars and my import, that I have to pay to my supplier, is 80 million dollars. Because both are priced in dollar terms, I can use the receivable to pay off the payable and I'll have net exposure of only 20 million. Whatever I cannot hedge naturally, that only I do through financial instruments."

Only the leftover, un-netted 20 million goes to derivatives. This "hedge what you can naturally, derivative-hedge the rest" logic is the backbone of the whole session.

---

## The Forex Market: Size and Players

Think of the forex market as the biggest, most liquid market on the planet — bigger than any stock exchange by a mile.

> **Professor:** "As per BIS survey, the average daily turnover is close to 10 trillion dollars — not rupees, dollars — daily volume of foreign currency transacted globally."

Who trades in it?

- **Bank-to-bank / dealer-to-dealer** — the bulk of the volume
- **Corporate-to-bank** — a corporate hedging its exposure, bank on the other side
- **Institutional investors** — multi-country investment funds, asset management companies
- **Central banks** — buying/selling currency to manage forex reserves

### Spot Rate: "Spot" Does Not Mean "Instant"

In everyday English, "spot" means right now. In forex, it means something subtly different.

> **Professor:** "In forex market, spot meaning delivery will happen 2 days from now — which means you are buying or selling a foreign currency today, you are fixing the rate, but actual delivery — you'll be paying INR, you'll be receiving dollar — that happens T+2."

So the rate is locked today, but settlement (money actually changing hands) happens two working days later.

---

## Base Currency vs. Quoted Currency, and Cross Rates

When you see USD/INR = 83, the currency written **first** is the **base currency** (1 unit of it), and the currency written **second** is the **quoted currency** (how much of it per unit of base).

> **Professor:** "USD/INR 83 means one USD equal to 83 INR. The currency which is put first is the base — that is per unit."

Normally USD is the base currency worldwide, **except** for a handful of currencies that are historically "more expensive" than the dollar — **EUR, GBP, AUD, NZD**. For these, the quote is reversed: EUR/USD (how many dollars per euro), not USD/EUR.

For India specifically, because the rupee is the weaker currency, you always see USD/INR (direct quote).

### Cross Rates: When There Is No Direct Quote

> **Professor:** "If you want to give INR, receive pound... you think there's a direct quote. Actually there is no direct quote — the bank prices the two-leg transaction."

The bank actually computes:

- GBP with respect to USD (direct quote in London)
- USD with respect to INR (direct quote in India)

Multiply these two direct quotes together and you get the **cross rate**, e.g., GBP/INR at roughly 105 rupees per pound.

> **Professor:** "Please remember, if you want the commission will be higher — because of the two-leg deal, two transactions to be done by the dealer. They have to trade through the US dollar, so two deals will happen — but for you it looks like one."

This is exactly why converting South African rand to INR, or any two "exotic" currencies to each other, usually goes **via the US dollar**, and costs more (commission on both legs).

---

## Spot vs. Forward vs. Swap — Quick Positioning

| Instrument | Typical Tenor |
|---|---|
| **Spot** | Immediate (T+2 settlement) |
| **Swap** (currency swap, short leg) | Short-term |
| **Forward** | Longer than a swap — 1 month, 2 months, 3 months, etc. |

### Worked Example: Brazilian Real

Suppose you need Brazilian real 1 million in 3 months (say, to pay a Brazilian supplier).

- **Spot** USD/BRL = 5.11 (1 dollar buys 5.11 real)
- **3-month forward** USD/BRL = 5.1273 (1 dollar buys 5.1273 real)

> **Professor:** "After 3 months, the forward rate — I give the same 1 dollar, but I get more Brazilian currency. When is it possible? When there is a depreciation of the Brazilian currency. So Brazilian currency is at a discount... roughly 1.34% discount."

**Key insight:** you get *more* real per dollar in the future than today — that means the real is expected to weaken (depreciate), so it trades at a **forward discount**.

> **Professor:** "This is not true only for Brazilian currency. It is true for our currency also. High inflation, high interest rate currency systematically trade at a discount."

The rupee, being a high-inflation, high-interest-rate currency relative to the US dollar, systematically trades at a **forward discount** too.

---

## Interest Rate Parity (IRP): Connecting Spot to Forward

This is the first of two "parity conditions" that let you move between spot rates and forward (future expected spot) rates.

> **Professor:** "The way you move from one to the other — given the spot, I can find out forward. Given the forward, I can find a spot. How does it work? Because it moves through a condition called interest rate parity."

> **Formula (Interest Rate Parity):** Forward Rate = Spot Rate x (1 + Domestic Interest Rate) / (1 + Foreign Interest Rate)

The rates used here are **risk-free government bond yields** (sovereign rates), **not** corporate bond or FD rates, and you use the rate matching your **time horizon** (3-month forward, use 3-month rate; 1-year forward, use 1-year rate).

> **Professor:** "If the interest rate of two countries are same, there will be no difference in the spot and forward. It is because of difference in the interest rate."

### Worked Example: India/US, 1-Year Forward

- Spot: 1 USD = 88 INR
- India's risk-free rate: 7.5%
- US risk-free rate: 3%

Forward Rate = 88 x (1.075 / 1.03) = **91.84**

> **Professor:** "India's interest rate is higher, so therefore our rupee will depreciate... roughly 4.4% discount to the current price."

**Rule of thumb:** whichever country has the **higher** interest rate, its currency is expected to **depreciate** against the other, and trades at a **forward discount**.

A student, **Shivangi**, asked whether the forward could ever be *lower* than spot.

> **Professor:** "Yeah, if the rupee is going to appreciate it could be lower — then there's a premium. If macroeconomic conditions are better, rupee has started appreciating, and market feels it is going to appreciate in the future, there will be forward premium — not discount."

---

## The Fisher Effect (International Fisher Relation)

The professor then peeled back one more layer: *why* do two countries have different interest rates in the first place?

> **Formula:** i(India) - i(US) = [Real Rate Differential: r(India) - r(US)] + [Expected Inflation Differential: pi(India, expected) - pi(US, expected)]

The interest rate differential = real interest rate differential + expected inflation differential.

### How Do You Get the Real Rate?

The professor cold-called **Anish**, who first guessed "repo rate" (wrong). The correct idea:

> **Real Rate = Nominal Rate - Inflation Rate**

> **Professor:** "Suppose FD gives you 7% interest. You have to pay tax — 35% tax — which means you are getting post-tax 7% into 65%, around 4.5%. If the inflation is 5%, your real return is minus 0.5%. That's why people are not putting money in FD. They're putting in arbitrage funds and other wealth funds, because real return from FD is negative."

In India, real rate is calculated as government bond yield minus (wholesale) inflation, because India has no direct instrument for it. The US has an advantage — **TIPS** (Treasury Inflation-Protected Securities) — bonds specifically designed so the difference between a normal bond and a TIPS bond directly reveals the market's real return expectation.

**Why this matters for parity:** today's interest rate differential reflects today's conditions, but the **expected future** differential can widen or narrow the parity-implied forward rate even further — a subtlety captured by the Fisher/IFE framework, as opposed to the simpler IRP formula which just uses today's rates.

### Applying IRP Across Multiple Years: The German Subsidiary Example

A US company has a German subsidiary generating cash flows in euros (89 million euro-ish free cash flow mentioned in class). To convert these into dollars for NPV purposes:

- Spot: EUR/USD = 1.31 (1 euro = 1.31 dollars)
- US interest rate is expected to be **higher** than the German rate

> **Professor:** "Given this and the interest rate differential, you can calculate the forward rates from the IRP condition... spot rate into 1 + interest rate to the power of time... divide by 1 + interest rate to the power of time."

You compound the IRP formula out for Year 1, Year 2, Year 3, Year 4, etc. (using cumulative rates like 4.82% and 3.89% raised to the power of the relevant year), and each year gives you a *different* implied forward/expected spot rate to convert that year's euro cash flow into dollars.

> **Professor:** "If you don't enter into a forward contract, then how do you get the forward rates? Use interest rate parity — which is looking at what rate US government is borrowing money, and at what rate German government is borrowing money."

---

## Covered Interest Arbitrage: Proving IRP Must Hold

If the market-quoted forward rate deviates from the IRP-implied "fair" forward rate, there is a **risk-free arbitrage** opportunity. This mirrors exactly the gold futures arbitrage logic from earlier in the course.

### The Setup

- Spot: 1 USD = 83 INR
- India risk-free rate: 7%
- US risk-free rate: 3%
- **IRP-fair 1-year forward** = 83 x (1.07/1.03) = **86.22**
- **Bank's actual quoted forward** = **86.80** (higher than fair — the dollar is overpriced forward)

### The Arbitrage Steps

> **Professor:** "You have nothing. You have no money, nothing. You can make money. How?"

1. **Borrow** 83 million INR at 7% for one year. You will owe principal + interest = 83 x 1.07 = **88.81 million INR** at year-end.
2. **Convert** the 83 million INR to dollars at spot (83): you get **1 million USD**.
3. **Invest** the 1 million USD in a US bank FD at 3% for one year: grows to **1.03 million USD**.
4. **Sell forward today** the 1.03 million USD you will have, locking in the (overpriced) forward rate of 86.80: you will receive 1.03 x 86.80 = **89.40 million INR** in one year.
5. **Repay** your INR loan of 88.81 million INR.
6. **Pocket the difference:** 89.40 - 88.81 = **0.594 million INR = 5,94,000 rupees**, risk-free, on zero capital of your own.

> **Professor:** "It does not depend on what happens to the actual spot rate one year from now. It may go anywhere... You have logged in that profit on day one."

> "If you look at ROI, return on investment, it is infinite — because there's no investment from your side. It's lender's money."

**Why this can't persist:** if everyone does this, everyone borrows INR and buys USD, demand for USD rises, and the mispricing self-corrects until the quoted forward converges back to the IRP-fair forward.

### Covered vs. Naked Arbitrage

A student asked whether such arbitrage really exists in practice.

> **Professor:** "In India, if you are a bank... it is happening. But if you are a company, then if you want to hedge your position through a forward contract, you must have an underlying loan already... This is called covered interest arbitrage — 'covered' because I have a borrowing first in local currency and I'm covering it up with a foreign currency investment."

> "There is also **naked interest arbitrage**, which is without having a loan — you first sell the forward contract. That is **not allowed in India**. You have to borrow, or you must have a borrowing already with you, when you can go and buy and sell the forward."

---

## Purchasing Power Parity (PPP): The Second Parity Condition

IRP uses interest rate differentials. **PPP uses inflation differentials.** The underlying logic — currency should adjust to equalize purchasing power across countries.

### Absolute PPP: The Big Mac Example

> **Professor:** "The famous example of PPP is the value or price of a Mac burger. If a Mac vegetarian burger is available at 220 rupees in India and 5 dollars in New York."

- Implied "fair" exchange rate = 220 / 5 = **44 rupees per dollar**
- Actual market rate = **87.20 rupees per dollar**

> "At 87.20 I can perhaps buy two burgers, whereas the US guy can buy only one. Which means rupee is deeply undervalued as per the absolute PPP."

**But is the government deliberately keeping the rupee cheap?** No.

> **Professor:** "Answer is no, because Mac is just one product. It is very difficult to find an exactly identical product to compare their prices."

The counter-example: haircuts. A haircut costs 70 rupees (less than a dollar) in India versus 10 dollars in the US. Using this "index" the rupee would look *even more* undervalued.

> "That is incorrect because haircut is a **non-tradable good**. You can't take that barber from here to the US."

**Why Absolute PPP fails:** it assumes a perfectly identical, freely tradable good exists across countries — an assumption that almost never holds (tradability, quality, taxes, and local costs all differ).

### Relative PPP: The Practical Version

Relative PPP doesn't try to find one "true" price ratio — it just uses **inflation differentials** to project how the exchange rate should move.

> **Formula (Relative PPP):** Expected Future Spot Rate = Current Spot Rate x (1 + Domestic Inflation) / (1 + Foreign Inflation)

### Worked Example

- Spot: 1 USD = 88 INR
- India expected inflation: 8%
- US expected inflation: 1%

Expected 1-year spot = 88 x (1.08/1.01) = **94 rupees per dollar**

> **Professor:** "Currently it is 88, it is expected to become 94 — which means rupee is going to depreciate by roughly 7%. Why should it depreciate? Because to offset the gap in the inflation... that differential inflation gap you're offsetting by depreciating the rupee."

### Worked Example: South African Subsidiary (Using PPP Instead of IRP)

A US company has a subsidiary in South Africa, whose currency is the **rand**. All revenue, cost, and cash flow of the subsidiary is in rand.

- Inflation: South Africa 8%, US 3%
- Spot: 1 USD = 4.55 rand

Year-1 implied rate = 4.55 x (1.08/1.03) = **4.77 rand per dollar** (and the calculation compounds further for Year 2, Year 3, etc.)

> **Professor:** "So for the same dollar you'll get more rand — 4.77 next year, then 5 the next year, and so on. You can use interest rate parity, you can use purchasing power parity, to convert one currency to the other... same thing, both should be almost close to each other."

**Takeaway:** IRP and PPP are two different roads to (approximately) the same destination — a projected future spot/forward rate. IRP uses interest rate gaps; PPP uses inflation gaps. Since inflation and interest rates are linked (Fisher effect), the two should broadly agree.

---

## A Strategic Detour: Why Iran Stopped Accepting Rupee Invoicing

The professor used a live geopolitical example to test whether students could think strategically, not just mechanically.

**Setup:** India was buying crude oil from Iran and paying in INR (to avoid rupee-dollar fluctuation risk). What is the problem for Iran?

A student, **Anujas**, first gave a "technical" answer about foreign currency gains, which the professor rejected:

> **Professor:** "Don't give a technical answer, you have to give a strategy concern."

Another student, **Manisha**, nailed it:

> **Manisha:** "They will be locked with INR. So they will have to transact with India only."

> **Professor:** "Very good. Because with INR, what do you do? You can't spend in your local currency [elsewhere]... So you are selling crude to me, and if I pay you in INR, you have to buy something from me. It's like a barter. So you are stuck."

Since Iran cannot freely convert or spend INR outside India, they end up "locked in," effectively forced into a barter-like arrangement. This is exactly why, eventually, Iran stopped accepting rupee invoicing and demanded USD — forcing India's exporters into transaction exposure they had previously avoided.

**Follow-up (Jagat):** wouldn't INR-based trade be safer for a sanctioned country like Iran (or a wartime economy like Ukraine/Turkey) since it bypasses SWIFT?

> **Professor:** "They will get the money directly without depending on SWIFT... that is fine, but what will they do with this money? ...If they put INR as part of their country's forex reserve — INR is not a great [reserve] currency — so either they have to convert it into their own currency again (a loss), or to US dollar (a translation loss), or they have to buy something from India as a natural hedge."

**Follow-up (Koshik):** if India, wanting to strengthen the rupee's global standing, offered to absorb the depreciation risk itself (pay Iran extra to compensate for rupee weakness), would that be better for Iran?

> **Professor:** "No... if India says, okay, I take the risk — if rupee depreciates against dollar I'll pay you additional — then I'm taking transaction exposure on me, which means it is the same as invoicing in dollar. So question is: who bears the risk?"

**The core lesson:** transaction exposure doesn't disappear when you switch invoicing currency — it just moves from one party to the other. Whoever holds the currency that isn't freely convertible/usable bears the real risk.

---

## Hedging Transaction Exposure Instrument 1: Forward Contracts

> **Professor:** "Many people think that if you do a forward contract to hedge the fluctuations, then the cost of hedge is the forward rate versus today's rate. That's not correct. Your cost of hedging is what could be the spot rate one year from now and this forward rate — that difference is your cost of hedging."

### Worked Example: Export Receivable, USD 10 Million, 3 Months

- Today's spot: 1 USD = 85 INR
- Market's expected future spot (house view): rupee will **appreciate** to 80.75 in 3 months (bad news for an exporter — you get fewer rupees per dollar)
- India money-market (T-bill) rate: 8% annualized (2% for the quarter)
- US money-market rate: 4% annualized (1% for the quarter)

**Forward rate** = 85 x (1.02 / 1.01) = **85.84**

**Revenue booking (Day 1):** When you raise the invoice, you must book revenue in INR at today's spot rate: 10 million USD x 85 = **850 million INR**. This is the "today" benchmark you are protecting.

**Scenario A — Unhedged:** After 3 months, rupee appreciates to 80.75 as feared. Collection = 10 million x 80.75 = **807.5 million INR**.

> **Professor:** "There'll be a loss. I showed on the first day at 850, collection is only 807.5... I lose 42.5 million as a loss due to currency fluctuation."

**Scenario B — Hedged with a forward at 85.84:** Come what may, you deliver your dollars and receive 10 million x 85.84 = **858.4 million INR**.

> **Professor:** "So you are shown your revenue on first day at 850, when you collect you get 858.4 — which means 8.4 million rupees, 84 lakhs extra you get. It increases your profit."

> "Please remember, in a forward contract you are fixing the cash flow. Even if the exchange rate depreciates, you'll get only this much — nothing more. You don't get the upside, but you are protected from the downside."

**Key philosophical point:**

> **Professor:** "Please remember, if you hedge, you are not hedging for the upside — you are hedging for the downside."

---

## Hedging Transaction Exposure Instrument 2: Currency Futures (and Basis Risk)

Futures are exchange-traded and **standardized** — fixed contract sizes and fixed delivery months. This creates a problem forwards don't have: **basis risk**.

> **Professor:** "In forward there is no basis risk, because your contract can match exactly with your payment days. There will be no period when your contract is unhedged and protected. But when you go for futures... your actual underlying may have a different date of delivery — that creates a basis risk."

### Worked Example: US Company Expecting 50 Million Yen

- **Today:** March 1
- **Exposure date:** End of July (a US company will receive 50 million yen, e.g., from a Japanese buyer)
- **Available futures delivery months:** March, June, September, December — **no July contract exists**

**Rule: choose the delivery month immediately AFTER your exposure date.** If you bought the June contract, you'd be unhedged for the month between June expiry and end-July delivery. So you buy the **September** contract.

- **Contract size:** 12.5 million yen per contract
- **Number of contracts needed:** 50 million / 12.5 million = **4 contracts**
- **Direction:** You will be receiving (holding) yen and want to convert to dollars, so you **short** (sell) 4 September yen futures contracts on March 1.
- **Futures price locked on March 1 (September contract):** 1.08 cents per yen

**At end of July (your actual delivery/exposure date):**

- Spot rate: 1.02 cents per yen
- September futures price (contract has NOT expired yet): 1.025 cents per yen

> **Professor:** "Normally, if your futures contract expires at the same time as the spot delivery, they will march — no difference in the spot price and the futures price. Here you see there's a difference at end of July... because the futures contract is not expiring today. This difference is called **basis risk**."

**Closing out the position:** you shorted (sold) at 1.08; now you buy back (close out) at 1.025 — a gain of 1.08 - 1.025 = **0.055 cents per yen** on the futures market.

**Effective realized rate** = spot (1.02) + futures gain (0.055) = **1.075 cents per yen**

Compare to the original locked futures price of 1.08 — you lost **0.005 cents per yen** to basis risk (because the contract you used doesn't expire exactly on your delivery date).

**Total dollar proceeds:** 1.075 cents/yen x 50 million yen = **USD 537,500** (approximately, small basis risk deducted).

> **Professor:** "So in a futures contract... if the basis risk is high, don't go for futures. Go and sign a forward contract."

---

## Hedging Transaction Exposure Instrument 3: Currency Options

Options give you the **upside** that forwards and futures take away — at the cost of an upfront premium.

### Worked Example: Indian Exporter, USD 500,000 Receivable in 90 Days

- Spot: 1 USD = 83 INR
- 90-day forward: 83.90
- The exporter will **receive dollars in 90 days** and worries the rupee might strengthen (appreciate) — bad news, since they'd get fewer rupees for their dollars.

**Which option to buy?** A **USD put option** — the right (not obligation) to *sell* dollars at a fixed rate.

> **Professor:** "You want to have the right to sell US dollar and get a fixed amount of rupees — that's why you have to buy a put contract."

- **Strike price:** 83.5
- **Premium:** 0.60 rupees (60 paise) per dollar
- **Total premium:** 500,000 x 0.60 = **3,00,000 rupees (3 lakh)** — paid upfront

**Minimum guaranteed proceeds (if exercised):** 500,000 x 83.5 = **41.75 million INR gross**, minus the 3-lakh premium already paid = **41.45 million INR net** — this is your worst-case floor. The best case (if you let the option lapse and sell in the open market) is unlimited upside.

### Scenario A — Rupee Appreciates to 80 (worse than strike)

> **Professor:** "We'll exercise because I will get 83.5 from the options market."

- **Exercise the put:** net proceeds = **41.45 million INR** (4.145 crore)
- **Had you used a forward instead** (locked at 83.90): 500,000 x 83.90 = **41.95 million INR** (4.195 crore)
- **Had you done nothing (unhedged):** 500,000 x 80 = **40 million INR** (4 crore)

> **Professor:** "Look at this range. If I don't do hedging, I get only 4 crore. Whereas if I do hedging through options, I get 4.145 crore. If I do forward, I get even more — 4.195 crore."

### Scenario B — Rupee Weakens to 84.5 (better than strike, the breakeven zone)

> **Professor:** "Shall I exercise? I'll let it lapse because the market is available at 84.5."

- Sell at spot: 500,000 x 84.5 = **42.25 million INR gross**, minus premium (3 lakh) = **41.95 million INR net** — **exactly the same as the forward outcome.** This is the breakeven point between options and forwards.

### Scenario C — Rupee Weakens Further Still

> **Professor:** "If rupee actually weakens more, there's a break-even point where forward and options are same... but suppose rupee further weakens, then I gain. If I do options, I'm getting 42.7 [million]. In forward, same forward — you don't get anything more, no upside, 41.95."

- Options keep gaining as the rupee weakens further (unlimited upside minus the fixed premium already sunk)
- Forward stays capped at 41.95 million forever

**The cost of optionality, quantified:** even in the best case, unhedged (43 million, say) beats options (42.7 million) by exactly **3 lakh — the premium.**

> **Professor:** "This 3 lakh is the premium you pay for protection."

### The Decision Rule

> **Professor:** "Should I use a forward, a futures, or an option contract? Depends on what is the market view. If the rupee is going to depreciate fast/farther, go for an options contract. But if the market is ambivalent — they don't know, really confused — then go for forwards."

---

## Translation Exposure: The Accounting-Only Risk

Translation exposure arises purely from consolidating a foreign subsidiary/branch's financials into the parent's home currency for reporting purposes — it has **no direct cash flow impact**, but it does hit reported profit.

### The Socratic Setup

The professor asked: if you convert **every single item** on a foreign branch's balance sheet using **one constant exchange rate** (the closing/spot rate on the balance sheet date), will the translated balance sheet still balance (tie out, assets = liabilities + equity)?

Several students (including one referenced as Rakkesh Kumar and Jagat) guessed "no." The professor corrected them:

> **Professor:** "It will tell you — by default, by the design. If I convert all the items of the balance sheet at a spot rate, a constant rate — every item we're multiplying by a factor — asset side also multiply by [the rate], liability side also multiply by [the rate]... it should tell you."

**But that is not how it's actually done in practice.** Two methods exist:

| Method | Assets & Liabilities | Equity |
|---|---|---|
| **Current Rate Method** | All translated at the closing (current/spot) rate | Translated at **historical** rate |
| **Monetary/Non-Monetary Method** (actual current practice) | **Monetary items** (cash, receivables, inventory) at closing/current rate; **Non-monetary items** (fixed assets, property, plant) at **historical** rate | Translated at historical rate |

> **Professor:** "What is the actual current practice is you look at your assets, divide them into two parts. One is called monetary items. Other assets are called non-monetary items... Monetary items — receivables, cash, inventories — you convert at today's rate. Non-monetary items — property, plant, building — you convert at historical rate."

**Example given:** if you bought office space for your US branch 3 years ago, you translate that asset using the exchange rate **from 3 years ago**, not today's rate.

**Why the balance sheet won't tie out:** because you're using **different rates for different items**, not one constant rate.

> **Professor:** "If you're using different rates, the balance sheet will not tell you. So what happens to the difference? It may be positive, it may be negative, depending on which side is greater than the other side in INR terms."

**What happens to this gap?**

> **Professor:** "All translation gains and losses flow through the income statement, and hence earnings — translation gain or loss will come to the P&L of the holding/parent company as a P&L item. Only impact is in your bottom line. If it's a gain, your profit goes up. If it's a loss, your profit goes down."

**Why it's not hedged:**

> **Professor:** "This is temporary. 3 months from now, if I prepare a balance sheet, this figure will change. One month from now, figure will change. So this is a temporary, unrealized, non-cash profit or loss. Hence, don't make any adjustments."

---

## Economic Exposure: The One You Can't Hedge, Only Diversify

Economic exposure is about **concentration risk** to a currency/geography, and it hits your operating margin, not just an accounting line.

### The Infosys/TCS Example

> **Professor:** "Take the example of TCS or Infosys, where 60 to 70% of the revenue is coming from the US market — huge concentration risk. If you find that for every 1% INR appreciation, it shaves off 30 to 40 basis points from your operating margin — remember why: your revenue is in dollar, but your costs are in rupees."

The mismatch: **revenue in USD, costs in INR** (salaries, rent, electricity, most opex). There is **no natural hedge** on the cost side, so any rupee appreciation directly compresses margin.

### Worked Example: Pharma Exporter

- USD revenue: 10 million dollars
- Base exchange rate: 1 USD = 83 INR → Revenue = 10 x 83 = **830 million INR**
- Cost (fixed in INR, unaffected by currency): **450 million INR**
- **Base profit** = 830 - 450 = **380 million INR**

**Rupee appreciates to 76:**

- New revenue = 10 x 76 = **760 million INR**
- Cost unchanged: 450 million INR
- **New profit** = 760 - 450 = **310 million INR**
- **Profit fall** = (380 - 310) / 380 = **18.4% drop** — purely from currency movement, with zero change in the underlying business.

### Can You Just Raise Prices to Compensate?

The professor showed this is not automatically the fix — it depends on **price elasticity of demand**.

> **Professor:** "So what you tell your US customer — that look, you pay me 5% more. But you see the revenue — it is not more than 10 million. Because at the top you see elasticity minus 1.5."

**Setup:** You want to raise price by 5% to offset the currency loss. But demand is elastic — **elasticity = -1.5**, meaning a 5% price hike reduces volume by 1.5 x 5% = **7.5%**.

- Remaining volume factor = 1 - 0.075 = **92.5%**
- **New dollar revenue** = 10 million x 1.05 (price effect) x 0.925 (volume effect) = **9.71 million dollars**

> **Professor:** "So by passing on the price, you don't gain. 9.71 million multiplied by the exchange rate — your cost is 450 [million] — you have further dampened your operating margin. If your product is highly elastic, increasing price will lead to further pressure on your margin."

**The nuance:**

> **Professor:** "But if your product is inelastic, then it is a good idea — because the customer has no other choice. Whether you'll be able to pass on the cost... depends on what is the elasticity of the product — which in real life means whether the customer has choice. If they have choice, they'll buy less from you, go to the next guy."

**How economic exposure IS actually managed** — not through derivatives, but strategically:

> **Professor:** "Managing economic exposure — don't just hedge, hedging is not possible here... For Infosys, if you reduce your exposure to the US, you take care of these economic exposure risks."

A student asked whether, for companies with a 1-2 year cash flow horizon, futures/options/swaps might still be used for economic exposure.

> **Professor:** "They don't do it, because they do short-term. If they think that in the future the rupee is going to appreciate/depreciate, but currently, in the next 3 months, then you do a swap for the short term [for transaction exposure only]... For economic exposure, they diversify — change the mix. Earlier, suppose they are putting 20% in India and 10% in Vietnam, they can move to Vietnam."

**Applicable beyond IT/pharma:** the professor noted this dynamic hits **any exporter with rupee-denominated costs** — IT services (Infosys, TCS), pharma exporters (Sun Pharma-type companies), and oil marketing/refining companies (like Reliance) that export refined products while paying domestic opex in rupees.

---

## Summary Table: All Three Exposures, One More Time

| Exposure | Trigger | Hedgeable via Derivatives? | Method of Management |
|---|---|---|---|
| **Transaction** | An actual foreign-currency payable/receivable | **Yes** | Natural hedging first (netting), then forwards/futures/options for the residual |
| **Translation** | Consolidating a foreign subsidiary/branch into home-currency financials | No (partially, via balance sheet hedging/provisioning) | Create a provision; treat as temporary, unrealized, non-cash P&L impact |
| **Economic** | Revenue/customer/geography concentration in one currency zone | No | Strategic diversification (geography mix, customer mix, pricing decisions weighed against elasticity) |

---

## Key Formulae

| Formula | Expression |
|---|---|
| **Interest Rate Parity (IRP)** | Forward Rate = Spot Rate x (1 + Domestic Interest Rate) / (1 + Foreign Interest Rate) |
| **International Fisher Effect** | Interest Rate Differential = Real Rate Differential + Expected Inflation Differential |
| **Real Interest Rate** | Real Rate = Nominal Rate - Inflation Rate |
| **Relative Purchasing Power Parity (PPP)** | Expected Future Spot = Current Spot x (1 + Domestic Inflation) / (1 + Foreign Inflation) |
| **Absolute PPP (implied "fair" rate check)** | Implied Rate = Price of Good in Domestic Currency / Price of Good in Foreign Currency |
| **Cross Rate** | Cross Rate = Direct Quote 1 x Direct Quote 2 (via the common currency, usually USD) |
| **Covered Interest Arbitrage Profit** | Profit = (Quoted Forward - IRP-Fair Forward) x Foreign-Currency Amount Invested |
| **Basis Risk (Futures Hedge)** | Basis = Futures Price (unexpired contract, at exposure date) - Spot Price (at exposure date) |
| **Currency Put Option: Minimum Guaranteed Proceeds** | Minimum Net Proceeds = (Notional x Strike Price) - Total Premium Paid |
| **Elasticity-Adjusted Revenue Effect** | New Revenue = Base Revenue x (1 + Price Change %) x (1 + Elasticity x Price Change %) |
| **Cost of Hedging (Forward)** | Hedging Cost = Actual Future Spot Rate - Locked Forward Rate (not forward-versus-today's-spot) |

---

## The Recipe Chain

**Sessions 1-4** (EVA, NOPAT adjustments, capital structure) --> **Sessions 5-9** (Distribution decisions, risk management foundations, futures, forwards) --> **Sessions 11-12** (Options pricing, binomial trees, Black-Scholes) --> **Session 13** (Interest Rate Swaps, cash flow vs. fair value hedge, swap valuation, introduction to the three exposures) --> **Session 14** (International financial management deep dive: forex market structure, base/quote currencies, cross rates, spot-forward relationship, Interest Rate Parity, Fisher effect, covered interest arbitrage, Purchasing Power Parity, hedging transaction exposure with forwards/futures/options and basis risk, translation exposure via the monetary/non-monetary method, economic exposure and elasticity) --> **Next: Session 15** — Cross-border investment appraisal: calculating NPV for an overseas project, incorporating country risk premium

---

## What's Next

- **Next session (Session 15):** International financial management continues — how to calculate **NPV of a cross-border/overseas investment**, folding in country risk premium, translation, and forecasted currency movements
- **Key connection:** All four derivative instruments from earlier sessions (forwards, futures, options, swaps) now get applied specifically to **currency risk**, not just interest rate risk
- **Remember for the exam:** Be able to rework the covered interest arbitrage numbers, the IRP and PPP forward-rate calculations, the yen futures basis-risk example, and the currency put option payoff table across different spot scenarios
- **Quiz note:** This was the sixth of 7-8 total quizzes; best 5 count toward 50 marks, with the remaining 50 marks from other components plus the end-term exam

---

## The Real-World Takeaway

Here's the one-sentence version of this entire class: **money doesn't just move, it moves at a price, and that price is set by how much cheaper it is to borrow somewhere else.** Every forward rate, every "why is the rupee weak" headline, every multinational's currency headache traces back to that one idea — capital flows to where it's treated best, and currencies adjust to stop people from getting a free lunch.

Think of it like a family with two kids who get different weekly allowances and different prices at their local shops. If one kid's allowance keeps rising faster and their local prices keep rising faster too, eventually you'd expect them to need more of their currency (their allowance) to buy the same toy their sibling buys. Nobody is being punished — it's just arithmetic catching up with reality. That's a country's currency depreciating because its inflation and interest rates are higher: not a moral failing, just a rebalancing.

And the "who's watching your money" story (Iran and the rupee-invoicing episode) is really a story about **leverage and being stuck holding an asset nobody else wants.** That happens in office life constantly — not just in forex. If your team accepts payment in "story points" or "internal credits" instead of something universally exchangeable, you're now locked into a system where you can only spend what you earned inside that one relationship. Whoever holds the less-liquid currency (literal or figurative) bears the real risk, even if the deal looked fine on day one.

The economic-exposure lesson — that raising your price doesn't always fix a margin problem if your customer can walk away — is really a lesson about elasticity of any kind, not just currency. Passing your cost increase onto someone who has options usually backfires.

Use this when:
- You're negotiating a contract in a foreign currency and deciding whether to hedge, or you're advising a small business owner who just started invoicing overseas clients — the "hedge what you can naturally, only derivative-hedge the leftover" rule applies directly.
- You're evaluating why a multinational's quarterly earnings "beat" or "missed" purely because of currency — you'll now know to separate the real operating story from the translation noise.
- You're in any negotiation (salary, vendor contract, service pricing) where you're tempted to just raise your price to cover a cost increase — check the other side's elasticity first, because they might just leave.
- You're advising on expanding into a new market or country, and someone assumes "if the currency is cheap, so is everything" — that's the Big Mac Index trap, and you can now explain why non-tradable goods (haircuts, rent, labor) break that logic.

One line to remember it all by: **exchange rates aren't random — they're just interest rates and inflation, translated into a different alphabet.**
