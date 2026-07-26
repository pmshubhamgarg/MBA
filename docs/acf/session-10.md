---
sidebar_position: 11
title: "Session 10: Futures Pricing, Forward Contracts & Introduction to Options"
---

# Session 10: Futures Pricing, Forward Contracts & Introduction to Options

*Dividends, storage costs, five corporate hedging stories, and the birth of "the right but no obligation"*

---

## Quick Recap: Where We Are

We are at the **midpoint** of the course (Session 10 of 20). The last two sessions introduced risk management and futures contracts. Today we complete futures pricing (with dividends and storage costs), cover forward contracts, walk through five corporate hedging case studies, and begin options. No quiz today -- but there will be one next session.

---

## Part 1: Futures Pricing -- The Complete Picture

### The Base Formula (Recap)

From last session, the continuously compounding futures pricing formula is:

> **F = S x e^(r x t)**

where S is the spot price, r is the risk-free rate (continuously compounded), and t is time to expiry in years. This is the formula to use for **all exchange-traded contracts** in exams.

### Hedging Example: Crude Oil Exploration Company

Before adding complexity, the professor reinforced the concept with a clean hedging example.

**Setup:** In April 2005, a crude oil exploration company will deliver **1 lakh barrels** in December to a refiner at the then-prevailing spot price. The company fears crude prices will **fall** (bad for the seller).

**Action:** The company **sells** 1,000 futures contracts (each 100 barrels) on MCX at **2,000 rupees per barrel**. Only 5% margin is deposited.

**Scenario A: Price falls to 1,900 per barrel**

| Line Item | Amount |
|-----------|--------|
| Revenue from refiner (physical market, at spot) | 1,900 per barrel |
| Gain on futures contract | +100 per barrel (sold at 2,000, bought back at 1,900) |
| **Net revenue per barrel** | **2,000** |

**Scenario B: Price rises to 2,100 per barrel**

| Line Item | Amount |
|-----------|--------|
| Revenue from refiner (physical market, at spot) | 2,100 per barrel |
| Loss on futures contract | -100 per barrel (sold at 2,000, but now must square off by buying at 2,100) |
| **Net revenue per barrel** | **2,000** |

> **Professor:** "If you enter into a futures contract properly -- a perfect hedge -- you are protected from any downside risk, but you do not get the upside."

**How it is shown in the P&L:** Sales revenue (from physical market) and gain/loss on futures (from exchange) are shown as **separate line items** within operating income -- not under "other income."

---

### Stock Futures: Adjusting for Dividends

When you buy a **stock futures** contract instead of the actual stock, you lose something important: **dividends**. The physical stock owner receives all dividends during the contract period. The futures holder gets nothing.

This means the futures price must be **lower** (relative to the base formula) to compensate for this lost income. You deduct the present value of expected dividends from the spot price before compounding.

**The Reliance Example:**

| Given | Value |
|-------|-------|
| Spot price (S) | 50 rupees |
| Time to maturity | 10 months |
| Risk-free rate (CC) | 8% per annum |
| Expected dividends | 0.75 rupees per share after 3, 6, and 9 months |

**Step 1:** Calculate the present value of each dividend using continuous discounting:

- PV of dividend at 3 months: 0.75 x e^(-0.08 x 3/12)
- PV of dividend at 6 months: 0.75 x e^(-0.08 x 6/12)
- PV of dividend at 9 months: 0.75 x e^(-0.08 x 9/12)
- Sum these to get total PV of dividends = I

**Step 2:** Apply the formula:

> **F = (S - I) x e^(r x t)**

The answer: **F = 51.135 rupees**

> **Professor:** "The difference between owning a stock and owning stock futures is that if I own the stock, all dividends I will receive. If I own stock futures, I lose those dividends. Hence, it is a penalty for waiting -- that is why you deduct the present value of those lost dividends."

**Why is futures price still higher than spot (51.135 vs 50)?** Because even after deducting dividends, there is a **carrying cost advantage** -- the futures buyer only puts down 5% margin money. The remaining 95% can earn interest. To prevent arbitrage, the futures price must be higher than spot.

**When dividend is given as yield (not value):**

If the company announces a **dividend yield** of Q% instead of a rupee amount:

> **F = S x e^((r - Q) x t)**

You simply subtract the yield from the risk-free rate in the exponent.

---

### Commodity Futures: Adding Storage Costs

When you buy physical gold instead of gold futures, you face **storage costs** (bank locker rent). The futures buyer saves this cost. To prevent arbitrage, storage costs must be **added** to the futures price.

**The Gold Storage Example:**

| Given | Value |
|-------|-------|
| Spot price (S) | 4,500 rupees per gram |
| Storage cost | 20 rupees per unit (paid after 1 year) |
| Risk-free rate | 7% per annum |
| Time | 1 year |

**Step 1:** Find the present value of storage cost (continuous discounting):

> **PV of storage = 20 x e^(-0.07 x 1) = 18.647 rupees**

**Important:** You must present-value the storage cost before adding. You cannot add today's spot price (a present value) with a future storage cost (a future value). Everything must be on the same time basis.

> **Professor:** "You are finding out the futures price today, not after one year. So everything has to be brought to today."

**Step 2:** Apply the formula:

> **F = (S + U) x e^(r x t) = (4,500 + 18.647) x e^(0.07 x 1) = 4,846.29 rupees**

**When storage cost is given as a percentage:**

> **F = S x e^((r + u) x t)**

where u is the storage cost rate. You add it to the risk-free rate (opposite of dividend, which you subtract).

**Summary of adjustments:**

| Factor | Effect on Futures Price | Formula Adjustment |
|--------|------------------------|-------------------|
| **Dividends (value)** | Reduces futures price | F = (S - I) x e^(rt) |
| **Dividends (yield)** | Reduces futures price | F = S x e^((r-Q)t) |
| **Storage cost (value)** | Increases futures price | F = (S + U) x e^(rt) |
| **Storage cost (rate)** | Increases futures price | F = S x e^((r+u)t) |

---

## Part 2: Forward Contracts

### How Forwards Differ from Futures

Forwards are **feature-wise very similar** to futures, but with a few critical differences:

| Feature | Futures | Forwards |
|---------|---------|----------|
| **Traded where** | Exchange | OTC (bilateral, typically with a bank) |
| **Standardization** | Fixed contract sizes, monthly expiry | **Customizable** -- any amount, any period (45 days, 73 days, etc.) |
| **Settlement** | Daily cash settlement (mark-to-market) | **No daily settlement** -- settled at maturity |
| **Credit risk** | Minimal (exchange guarantees) | **High** (either party can walk out) |
| **Cost to enter** | Margin deposit (refundable) | **Premium** (non-refundable, paid upfront) |
| **Can you walk out?** | Through daily settlement, effectively yes | Yes -- just do not show up. Bank keeps the premium. |

**The FX Forward Example:**

You are an Indian importer. You need to pay your US supplier in 45 days. Today, the rupee-dollar rate is 96. You fear the rupee will depreciate (say to 98), making your dollar purchase costlier.

- You go to your bank: "Fix the rate for 45 days."
- Bank says: "97 rupees per dollar." (The extra 1 rupee is the **forward premium**)
- If after 45 days, the actual rate is 98 -- you are happy, you saved 1 rupee per dollar
- If the actual rate is 95 -- the market is cheaper, you just do not go to the bank (you lose only the premium)

**Futures cannot do this** because futures contracts come in **monthly** increments (30 days, 60 days). There is no 45-day futures contract.

### Forward Contract Pricing: Capital F vs. Small f

This distinction is crucial:

| Symbol | Name | What it is | Does it change? |
|--------|------|-----------|----------------|
| **F** (capital) | Forward price | The price at which you can enter a forward contract today for future delivery | Changes every day (as time passes and spot moves) |
| **K** | Delivery price | The price you agreed to pay/receive when you signed the contract | **Never changes** -- locked on day one |
| **f** (small) | Value of the forward contract | The premium or discount = difference between current forward price and your locked delivery price | Changes every day |

**On day one:** F = K, so f = 0 (no premium or discount yet).

**Over time:** F keeps changing (because spot price and time-to-maturity change), but K stays fixed. The growing gap between F and K creates the value **f** -- either a premium (you are in the money) or a discount (you are out of the money).

### Numerical Example: Forward Contract Valuation

| Given | Value |
|-------|-------|
| Spot price (S) today | 250 |
| Delivery price (K) | 240 |
| Risk-free rate | 10% per annum |
| Time to maturity | 6 months |
| Dividends | None |

**Step 1: Find the forward price (capital F)**

> **F = S x e^(r x t) = 250 x e^(0.10 x 0.5) = 262.82**

**Step 2: Find the value of the forward contract (small f)**

> **f = (F - K) x e^(-r x t) = (262.82 - 240) x e^(-0.10 x 0.5) = 21.70**

The value of 21.70 means this forward contract is worth 21.70 to the holder today -- it is "in the money."

> **Professor:** "First find the big F, then plug in the big F to get the small f. Two steps. Cannot do it directly."

---

## Part 3: Corporate Hedging -- Five Real-World Examples

The professor walked through five situations showing how companies use futures and forwards to hedge. Three are **operating companies**, two are **banks**.

### Example 1: Skyways Airlines (Long Futures -- Cross Hedge)

| Item | Detail |
|------|--------|
| **Exposure** | 4.2 million gallons of jet fuel needed in 3 months |
| **Fuel as % of opex** | 30% |
| **Problem** | No jet fuel futures contract exists |
| **Solution** | Buy **heating oil futures** (a substitute product with highly correlated price movement) |
| **Contracts needed** | 4.2M gallons / 42,000 per contract = **100 contracts** |
| **Futures price** | 2.50 USD per gallon |
| **Spot price in 3 months** | 2.80 USD per gallon |
| **Saving** | 0.30 x 4.2M = **1.26 million USD** saved through hedging |

This is called a **cross hedge** -- hedging with a substitute product. The correlation may not be 100% (maybe 90-95%), so there is some residual **basis risk**.

**Alternative without futures:** Buy 4.2 million gallons today and store them. Problem: massive upfront investment + storage costs. Futures achieve the same protection with just 5% margin.

### Example 2: Jaipur Textile Exporter (Short Forward -- FX Hedge)

| Item | Detail |
|------|--------|
| **Exposure** | Receivable of 2 million USD from US buyer in 6 months |
| **Risk** | Rupee appreciation (fewer rupees per dollar) |
| **Action** | Sell USD forward to bank at **85.2 rupees per dollar** |
| **Spot rate today** | 84 rupees |
| **Spot rate at maturity** | 82.5 rupees |

**Without hedge:** Revenue = 2M x 82.5 = **16.50 crore rupees**

**With hedge:** Revenue = 2M x 85.2 = **17.04 crore rupees**

**Gain from hedging:** 0.54 crore (54 lakh rupees extra)

**Who loses?** The bank -- it committed to buying dollars at 85.2, but the market rate is only 82.5. However, the bank also hedges its position by netting exposures from multiple clients (importers who need dollars offset exporters who sell dollars).

> **Professor:** "Normally, 90 out of 100 cases, the bank will be correct and the exporter will be wrong -- because banks trade currency professionally. But here I set it up the other way to show the concept."

### Example 3: Golden Crust Foods (Long Futures -- Commodity Hedge)

| Item | Detail |
|------|--------|
| **Exposure** | 50,000 bushels of wheat needed in 4 months for biscuit production |
| **Problem** | Retail prices are fixed with supermarkets in advance -- cannot pass on a wheat price spike |
| **Action** | Buy wheat futures: 50,000 / 5,000 per contract = **10 contracts** |
| **Futures price** | 6 USD per bushel |
| **Spot price in 4 months** | 6.70 USD per bushel |
| **Saving** | 0.70 x 50,000 = **35,000 USD** saved |

Net raw material cost = 6.70 (paid to physical supplier) - 0.70 (gained on futures) = **6.00 per bushel** -- exactly the locked-in price.

### Example 4: Meridian Bank (Short Futures -- Bond Portfolio Hedge)

| Item | Detail |
|------|--------|
| **Exposure** | 100 million USD government bond portfolio |
| **Duration** | 6 years (weighted average time to get money back) |
| **Fear** | Interest rates rise --> bond prices fall (inverse relationship) |
| **Action** | Sell bond futures contracts |
| **Futures price per contract** | 120,000 USD |
| **Futures duration** | 8 years |
| **Number of contracts** | 625 (adjusted for duration mismatch, not just dividing portfolio by contract size) |

**Why 625 and not 100M/120K = 833?** Because of the **duration mismatch**. The futures contract has 8 years duration while the portfolio has 6 years. Since the futures respond more strongly to interest rate changes (longer duration = more sensitive), you need **fewer** contracts.

**Duration Concept (Quick Primer):**

| Bond Type | Duration vs. Maturity |
|-----------|-----------------------|
| **Zero coupon bond** (no intermediate payments) | Duration = Maturity (you wait the entire period for any cash) |
| **Coupon-paying bond** (periodic interest) | Duration is LESS than Maturity (you get some cash back before maturity) |

> **Professor:** "In a zero coupon bond, I invest 600 rupees, next 10 years I get nothing -- not a single penny. I have to wait the entire 10 years. That is why duration equals maturity. But in a coupon-paying bond, I am getting 100 rupees every year. 55% of my money matures in the 10th year, but 45% matures before. So the average maturity -- the duration -- must be less than 10 years."

**Example with numbers:** A 1,000 rupee, 10-year, 10% coupon bond pays 100 per year + 1,000 at maturity = 2,000 total. But only 1,100 (55%) comes in year 10. The rest comes earlier. So the weighted average time = duration is less than 10 years.

When rates rise by 50 basis points: portfolio loses value, but futures gain offsets it -- **perfect hedge**.

### Example 5: Crescent Bank (Forward Rate Agreement -- FRA)

This is the most complex example and was left partly as homework.

| Item | Detail |
|------|--------|
| **Situation** | Bank committed a 50M fixed-rate loan that draws down (is disbursed) over 3 months |
| **Bank's funding** | 6-month wholesale borrowing |
| **Risk** | If money market rates rise before draw-down, the bank's lending margin is squeezed |
| **Instrument** | FRA (Forward Rate Agreement) -- a **3 + 9** contract |

**What does "3 + 9" mean?**

- Total coverage period: 9 months from today
- The rate is fixed **3 months from now** (not today)
- The contract runs for the remaining **6 months** (from month 3 to month 9)

**Why not fix the rate today?** Because the bank expects rates to rise. It wants to wait 3 months, see the rate increase, then fix the lending rate at the higher level to protect its margin.

**The bank's margin problem:**

The bank pays **fixed 5%** on its borrowing but receives a **floating rate** from its lending. If the floating rate stays above 5%, margin is positive. If it drops below 5%, the bank loses. The floating rate resets every 6 months.

FRA and swaps (covered in the next session) are the two instruments to manage this interest rate mismatch.

---

## Part 4: Introduction to Options

### How Options Differ from Futures

In a futures contract, both parties are **obligated**. In an options contract, the buyer (holder) has a **right but no obligation**.

> **Professor:** "Option gives the holder the right but no obligation. I can walk out. But if I exercise, the other side must respond."

**Definition:** An option is a contract that gives the holder the right (but not the obligation) to buy or sell a given quantity of a given asset, on or before a given date, at a price agreed upon today.

Everything is decided today (just like futures) -- what, how much, at what price, and when. The key difference: the "on or before" part and the "right but no obligation" part.

### European vs. American Options

| Type | When can you exercise? | Where used |
|------|----------------------|------------|
| **European** | **Only** on the expiry date | Named "European" but used globally |
| **American** | **Any day** on or before the expiry date | All stock options in India are American |

### Moneyness: ATM, ITM, OTM

Think of it as: "If I exercise right now, do I make money?"

**Reliance Share Example:**

You buy a Reliance call option expiring on **August 27, 2026**. Exercise price: **1,000 rupees**.

| Date | Spot Price | Exercise Price | Status | What happens? |
|------|-----------|---------------|--------|---------------|
| July 9 (entry) | 1,000 | 1,000 | **ATM** (At The Money) | No profit, no loss. I wait. |
| July 20 | 1,200 | 1,000 | **ITM** (In The Money) | Exercise: buy at 1,000, sell at 1,200 = **200 profit**. High probability of exercise. |
| July 29 | 950 | 1,000 | **OTM** (Out of The Money) | Why pay 1,000 when market is 950? Walk out. Buy from market instead. |

> **Professor:** "Moneyness shows when I am going to exercise my right -- or if at all I am going to exercise. ITM = high probability of exercise. OTM = walk out. ATM = you may exercise, you may not, you may wait."

### Call and Put: The Four Positions

Options come in two flavors: **Call** (right to buy) and **Put** (right to sell). For each, you can be the buyer (**long**) or the seller/writer (**short**).

| Position | Right or Obligation? | What it means |
|----------|---------------------|---------------|
| **Long Call** | Right to **buy** | "I want to buy this asset at the exercise price" |
| **Short Call** | Obligation to **sell** | "If the long call holder exercises, I must deliver the asset" |
| **Long Put** | Right to **sell** | "I want to sell this asset at the exercise price" |
| **Short Put** | Obligation to **buy** | "If the long put holder exercises, I must accept delivery" |

**The Golden Rule:**

> **Long = All the rights, no obligation. Short = All the obligation, no rights.**

Long guys **initiate**. Short guys **respond**. If the long guy does not exercise, the short guy does nothing.

**When does each position exercise?**

- **Long call** exercises when price is **going up** (buy cheap, sell at market)
- **Long put** exercises when price is **going down** (sell at fixed price, market is lower)
- In **unfavorable** conditions, long guys simply **do not exercise** -- they walk out

### The Premium: Cost for Long, Gain for Short

Since the long side has all the rights (upside potential) with no obligation, they must pay for this privilege. This payment is the **option premium**.

| For the Long side | For the Short side |
|-------------------|--------------------|
| Premium is the **cost** (maximum possible loss) | Premium is the **gain** (maximum possible profit) |
| Potential profit is **unlimited** (for calls, price can go to infinity) | Potential loss is **unlimited** (mirror of long's gain) |

**Key distinction from futures:** In futures, there is no premium because both sides are equally obligated (no one has a special right). In options, the asymmetry (right vs. obligation) creates the need for a premium.

### Futures vs. Forwards vs. Options: When to Use What

| Instrument | Best for | Why |
|------------|---------|-----|
| **Futures** | Commodity hedging, stock hedging | Standardized, low cost (just margin), no premium |
| **Forwards** | FX hedging, interest rate hedging | Customizable tenor, customizable amount |
| **Options** | Arbitrage, speculation, directional trades | Right without obligation; for hedging, futures/forwards are preferred |

> **Professor:** "For hedging, people mainly use forwards and futures. Options are for arbitrage and speculation -- directional trades."

### Basis Risk: The Cross-Hedge Gap

When you hedge with a **substitute product** (like heating oil instead of jet fuel), the price movements do not match 100%. This gap is called **basis risk**.

**How to manage it:** If 1% change in heating oil leads to only 0.8% change in jet fuel, you adjust by buying **more contracts** (to cover the gap). The number of contracts is calibrated using the **correlation** between the two products.

This is the same concept as the duration mismatch in the Meridian Bank example -- you bought fewer bond futures contracts because the futures' duration was longer than the portfolio's duration.

> **Professor:** "You take care of basis risk by adjusting the number of contracts that you buy or sell. It is the same logic as the duration hedge -- the response is different, so the quantity must be different."

---

## Key Formulae

| Formula | Expression | Notes |
|---------|-----------|-------|
| **Futures (no income, no storage)** | F = S x e^(rt) | Base case |
| **Futures with dividends (value)** | F = (S - I) x e^(rt) | I = PV of expected dividends |
| **Futures with dividends (yield)** | F = S x e^((r - Q) x t) | Q = dividend yield |
| **Futures with storage (value)** | F = (S + U) x e^(rt) | U = PV of storage cost |
| **Futures with storage (rate)** | F = S x e^((r + u) x t) | u = storage cost rate |
| **Forward price** | F = S x e^(rt) | Same as futures (for non-dividend case) |
| **Forward contract value** | f = (F - K) x e^(-rt) | Two-step: find F first, then f |

---

## Memory Tricks

- **Dividends = you lose income** --> subtract from spot (reduces futures price)
- **Storage = you save cost** --> add to spot (increases futures price)
- **Capital F** = forward/futures **price** (changes daily). **Small f** = forward contract **value** or premium (also changes daily)
- **K** = delivery price (locked on day one, **never changes**)
- **Call** = right to **C**all for delivery (buy). **Put** = right to **P**ut it away (sell)
- **Long = Leverage** (you have the power). **Short = Servitude** (you must obey)
- **ATM / ITM / OTM** = At / In / Out of The Money = Break-even / Profit / Loss

---

## The Recipe Chain

**Session 8** (Risk management intro, three financial risks, derivatives taxonomy) --> **Session 9** (Futures mechanics: margins, daily settlement, arbitrage pricing) --> **Session 10** (Futures with dividends/storage, forwards pricing, 5 corporate hedging cases, options intro) --> **Sessions 11-12** (Options deep-dive, swaps, in-class quizzes)

**The connecting thread:** We started with "why manage risk" (Session 8), then learned the first instrument (futures, Session 9), then expanded to forwards and compared five real-world hedging scenarios (Session 10). Options add a new dimension -- the right without obligation -- which we will explore next.

---

## What's Next

- **Session 11:** Options deep-dive -- payoff diagrams, Black-Scholes intuition, and the first in-class quiz (futures and forwards)
- **Session 12:** Options continued + swaps + second in-class quiz (options)
- **Pre-read:** Background notes for Session 11 (already uploaded on LMS). Read the options material before Saturday's class.
- **Quiz format:** "10 minutes, 10 marks. Best 5 out of 7-8 quizzes will count. You have the option to skip some."

> **Professor's parting wisdom on using ChatGPT for calculations:** "Open your Excel sheet and do it. Not through GPTs. Then you don't learn. In the exam, if I ask a question, you have to show me the steps. I am not asking for a correct answer -- I am asking for your understanding through these examples."
