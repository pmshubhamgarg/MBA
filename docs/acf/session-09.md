---
sidebar_position: 10
title: "Session 9: Futures Contracts — Mechanics, Margins & Arbitrage Pricing"
---

# Session 9: Futures Contracts -- Mechanics, Margins & Arbitrage Pricing

*Understanding the workhorse of derivatives markets through gold, crude oil, and the magic of making money from nothing*

---

## Quick Recap: Finishing the Three Financial Risks

Before jumping into derivatives, the professor spent the first part of the session reinforcing the three financial risks introduced last time: **market**, **credit**, and **liquidity**. Each got a real-world stress test.

### Credit Risk: The Shopper Stop Question

> **Professor:** "Everybody faces market risk. But credit risk arises only when you sell something on credit. And if you want to minimize credit risk, you have to incur some cost."

Take **oil refineries in India**. They sell petrol, diesel, LPG to dealers against **advance payment** -- money comes first, product goes after. The only exception is sales to airline companies, which demand credit. So for most of their sales, refineries have essentially zero credit risk.

Now the professor turned to **Shopper Stop** -- the large-format retail chain. He asked the class: does Shopper Stop have credit risk?

The class got confused. Several students said "no risk at all." The professor kept pushing: "Yes, there is no risk. But to ensure there is no risk, **is there a cost**?"

The answer is subtle. When customers pay by **card** (which most do in urban stores), Shopper Stop does not receive the full 100 rupees. The bank charges a **merchant discount rate** -- say 1-2%. So if you pay Rs 100, Shopper Stop receives maybe Rs 97-98. That processing fee **is the cost of minimizing credit risk**.

> **Professor:** "There is no free lunch. Even in a cash-only model, there is a cost to run that cash-only model."

### Liquidity Risk: The Cash Puzzle Across Industries

This produced the most heated classroom guessing game. The professor asked: how much cash (as a percentage of total assets) do these three types of companies hold?

1. **Automobile** companies (Maruti, Honda)
2. **IT / Software** companies (TCS, Infosys)
3. **FMCG** companies (HUL, P&G, Dabur)

Students guessed wildly -- 5%, 15%, 20%, 25%. One student nailed it: **software companies hold about 50%**.

Here is the reality:

| Industry | Cash as % of Assets | Why |
|----------|-------------------|-----|
| **IT / Software** (TCS, Infosys, Microsoft) | **45-50%** | Asset-light, short working capital cycle, no large capex. Cash accumulates organically with nowhere to deploy. |
| **Automobile** (Maruti, Honda) | **10-15%** | Dealers make advance payments when new models launch (e.g., every alternate year, dealers pre-pay for inventory). Plus normal working capital buffers. |
| **FMCG** (HUL, P&G, Dabur) | **Less than 5%** | Most money is locked in the working capital cycle. Supplier credit and customer credit roughly cancel out. |

**The Bill Gates Story:**

> **Professor:** "Once Bill Gates was asked why Microsoft holds so much cash. He said: 'I keep three years of salary bill. Not six months -- three years. Because if the staff goes home, my assets go home. It is not plant and machinery. Employees are the assets. They should always feel comfortable that their job is protected.'"

But eventually Microsoft's cash balance hit **4 billion USD** (in the early 2000s), and they could not justify holding that much. That is when **Microsoft paid its first-ever dividend**.

**For automobiles**, the cash comes partly from a clever business model. When Maruti Suzuki announces a new Swift model in October, dealers rush to make **advance payments** to secure inventory. Before the first car rolls off the assembly line, Suzuki already has cash. These deposits make up about 10% of the cash balance; the rest is working capital.

**For FMCG**, cash is scarce because the working capital cycle eats it all up. Unless you are a "big daddy" with enormous bargaining power, the credit you give to customers and the credit you get from suppliers roughly cancel out.

> **Professor:** "Liquidity risk management is not a simple thing. It is a function of the business model. You cannot say if this automobile company holds 15% cash, I should also hold 15%."

**What does "managing liquidity risk" actually mean?** It does not mean hoarding cash in a bank account. It means having **available cash sources** -- like the undrawn credit lines BP maintains (as discussed in Session 8) -- so that you never fail to meet your commitments. Future capex needs can be covered by credit facilities; you do not need to sit on idle cash for that.

---

## Exchange-Traded vs. OTC Derivatives: The Four Advantages

Now the session pivoted to the main event: **derivatives for managing market risk**. The professor reminded the class that derivatives come in two flavors:

- **Exchange-traded:** Futures and Options
- **Over-the-counter (OTC):** Forwards and Swaps

Why do exchange-traded products dominate? Four reasons:

### Advantage 1: Minimal Credit Risk

In an OTC contract, it is a deal between two parties -- two corporates, a corporate and a bank, etc. If one side refuses to honor the deal, the other is stuck (go to court, waste time and money). So managing market risk through OTC instruments can **introduce credit risk** -- which defeats the purpose.

On an exchange, **the exchange itself is your counterparty**. If you are a buyer, the exchange is your seller. If you are a seller, the exchange is your buyer. You never need to know who the actual person on the other side is. And exchanges **never default** (barring extreme operational failures).

> **Professor:** "If you are managing your market risk but while managing market risk you enter into a credit risk, there is a problem."

### Advantage 2: Standardized Contracts

**The Basmati Rice Story:**

Imagine you run a rice mill and need to fix the price of Dehradun basmati rice for three months. On an exchange, the futures contract will specify **everything**: the variety (basmati), the location (Dehradun), the grain type (long grain), the moisture content -- you know exactly what you are buying.

In an OTC contract? Suppose the location is not mentioned. Everything else matches -- basmati, Dehradun, all specifications. But when delivery day comes, the seller delivers from a warehouse in a remote corner that technically has a Dehradun pin code. Your transport cost skyrockets.

> **Professor:** "In exchange-traded contracts, everything is well specified. You know what you are buying, when you are buying, and from where you have to pick."

### Advantage 3: Non-Discriminatory Pricing

In a physical market, big buyers get volume discounts. If you buy 1 million tons of coal, the mining company gives you a special price. The small buyer who wants 10,000 tons pays list price.

On an exchange? **Same price per unit** whether you buy 10 contracts or 1,000 contracts. No favoritism.

### Advantage 4: Fair Price Discovery

Because exchanges offer all three protections above, **many more participants** are attracted to trade there. High liquidity (large number of buyers and sellers) produces **fair prices** through competition. In OTC markets, low liquidity means prices can be skewed to favor one side, depending on whether it is a buyer's market or seller's market.

**A staggering number:** Globally, the total volume of crude oil futures contracts represents at least **100 times** the actual physical oil available in the world. That enormous liquidity is why everyone who needs to manage oil price risk comes to the exchange.

---

## Futures Contracts: The Core Mechanics

### What Is a Futures Contract?

> **Professor:** "Although the contracts are called futures contracts, everything is decided today."

It is an agreement to buy or sell:
- A **specified asset** (gold, crude oil, shares, currency)
- For a **certain price** (fixed today)
- At a **certain time** (expiry month)
- At a **certain place** (delivery location specified)

Nothing is left open. The word "futures" is the technical term -- do **not** call it "future" (singular). And yes, the name is ironic: a "futures" contract where every detail is settled in the present.

### Why Fix the Price?

Simple:
- If you are a **buyer** (need to purchase raw material later), you fear the price will **go up** --> you **buy** futures to lock in today's price
- If you are a **seller** (need to sell your output later), you fear the price will **go down** --> you **sell** futures to lock in today's price

> **Professor:** "If you are concerned about price going up, you buy. If you are concerned about price going down, you sell."

Both sides need protection. The student who said "mostly we are concerned about increase" forgot that the seller has the exact opposite fear.

**Terminology:** Buying a contract is called going **long**. Selling a contract is called going **short** (shorting).

### Correlation Matters

The protection works best when the futures contract **matches your actual product**. If you use **Brent crude** and there is a Brent crude futures contract, you get nearly **100% correlation** -- perfect hedge.

But Indian refineries use a **basket of crudes** (Middle East, Russia, Brent, US). There is no futures contract for this mix. So if 40% of the basket is Brent and 40% is Russian crude, you hedge those 80% with available contracts. The remaining 20% stays unhedged. Your correlation drops below one -- not perfect, but still significant protection.

### Futures Are NOT Insurance

This is a critical distinction the professor drove home. Several students guessed that futures are like insurance. **They are not.**

| Feature | Insurance | Futures |
|---------|-----------|---------|
| **Downside protected?** | Yes -- fire destroys your property, insurance compensates you | Yes -- price moves against you, futures protect you |
| **Upside retained?** | **Yes** -- property value doubles, you can sell it. Insurance company cannot stop you. | **No** -- price moves in your favor, you cannot benefit. You are locked in. |
| **Premium required?** | **Yes** -- because you keep the upside, you pay a cost for the protection | **No premium** -- because you give up both upside and downside |

> **Professor:** "In futures, you are protected from downside but you do not get the upside. So it is not insurance. That is why in a futures contract you do not pay any premium."

Think about it this way: insurance lets you have your cake and eat it too (protection + upside), so naturally you pay for that luxury. Futures make you give up the cake entirely (locked price regardless of what happens), so there is nothing to pay.

---

## The Margin System: How Exchanges Prevent Default

This is the mechanism that makes exchange-traded derivatives virtually default-free. Think of it as a **deposit** system.

### The Alternative: Why Not Just Buy Physical Gold?

Before explaining margins, the professor posed a comparison. Suppose you need 200 ounces of gold in 6 months and the spot price is 400 USD per ounce. One option: buy the gold today and store it.

| Approach | Upfront Cost | Hidden Costs |
|----------|-------------|-------------|
| **Buy physical gold** | 200 x 400 = **80,000 USD** | Opportunity cost (80,000 x 7% x 0.5 = 2,800 USD) + locker rent/carrying cost |
| **Buy futures contract** | Only margin deposit: **4,000 USD** (5% of 80,000) | No carrying cost for gold |

With the same 80,000 USD, you could protect **20 times** the quantity in the futures market (80,000 / 4,000 = 20 sets of 200 ounces = 4,000 ounces). That is the **leverage** of futures -- small deposit, same protection.

> **Professor:** "That is the beauty of the futures market. You put a small amount, get the same benefit."

### The Gold Futures Example: Daily Settlement in Action

**Setup:** On **June 5**, an investor buys **2 December gold futures contracts**. Each contract = 100 ounces. Total exposure = 200 ounces.

**Critical reading lesson:** The professor spent several minutes on this because students kept misreading "2 December gold futures" as "2nd December." The correct reading:

- **2** = number of contracts (two)
- **December** = expiry month (last week of December, not a specific date)
- **June 5** = the date the contract is entered

> **Professor:** "If I write two before the month and five after June, you cannot read both as dates. Two is the number of contracts, not 2nd December."

**Futures contracts specify expiry by month, not by date.** The convention (varies by market) is typically the last Thursday or Friday of the expiry month.

**The numbers:**

| Parameter | Value |
|-----------|-------|
| Futures price | 400 USD per ounce |
| Initial margin | 2,000 USD per contract = **4,000 USD** total |
| Maintenance margin | 1,500 USD per contract = **3,000 USD** total |

**How daily settlement works:**

| Date | What Happens | Margin Balance |
|------|-------------|----------------|
| **June 5** (entry) | Buy 2 contracts at 400. Deposit margin. | 4,000 |
| **June 5** (close) | Price falls to 397. Loss = 3 x 200 oz = 600. Debited from your account, paid to counterparty. | 3,400 |
| **... prices keep falling ...** | | |
| **June 13** | Balance erodes to 2,660 -- **below maintenance margin of 3,000** | 2,660 |
| **Margin call!** | You must top up to the **original** level (4,000), not just to 3,000. Pay 1,340. | 4,000 |
| **... falls again ...** | | |
| **June 19** | Balance again drops below 3,000 | Below 3,000 |
| **2nd margin call** | Top up again to 4,000 | 4,000 |
| **June 26** | Prices finally rise. Balance reaches 5,060. | 5,060 |

On June 26, you have **1,060 excess** above the required 4,000. You *could* withdraw it, but **nobody does** -- another margin call could come within a week. You leave the excess with the exchange as a buffer.

> **Professor:** "In inventory, you have a reorder level. Margin has a maintenance level. The moment it hits maintenance, you get a call from your broker. Many people default -- if the gap is too much, they will not pick up the call."

### Why Default Happens

The professor explained the psychology. You bought futures at 400 because your analyst said gold prices would rise. But prices are falling. You are losing money daily. The futures market still says you owe 400 per ounce, but the actual market price has dropped to 350. At some point, you think: "Why not just go buy in the open market at 350 and ignore the futures contract?"

That temptation to walk away -- to not pick up the margin call -- is exactly what the daily settlement mechanism is designed to prevent. By settling the difference **every single day**, the exchange keeps the "gap" small. You never accumulate a massive loss overnight.

---

## Delivery: The Trap You Must Avoid

### Crude Oil: Always Cash Settled

> **Professor:** "Globally, crude oil futures are always cash settled. There is no physical delivery of oil by the seller to the buyer."

On the final day of a crude oil futures contract, the spot price and futures price **converge** (they are forced to converge). The only settlement is the **cash difference** between yesterday's futures price and today's spot price. No barrels of oil change hands.

This is why the futures market can have 100x more volume than physical oil exists -- nobody is actually delivering anything. It is purely a **price risk management mechanism**.

### How Physical Delivery Works in the Real World

For crude oil, the physical delivery happens through a separate arrangement with your **supplier** (a long-term supply contract). The supplier fixes the **quantity** but not the price. The price is determined on the day of loading.

**The VLCC Story:**

> **Professor:** "The vessels that carry crude are called VLCC -- Very Large Crude Carriers. It takes four to five days to load crude on that vessel. The price is the average price of those four days. That is called the spot price."

So your supplier invoices you at the spot price on the loading date. You use the futures market **only** to fix the price, not to take delivery.

### The Delivery Period Trap

Suppose your gold supplier delivers on **December 7**. You need to hedge. Which month's futures contract should you buy?

Many students said **November** -- "so it settles before my December delivery." This is a **trap**.

Here is what happens if you hold a November futures contract until expiry: you enter the **delivery period** (last 3-4 days before expiry). During this period, **the seller has the right to deliver**. If the seller decides to deliver (perhaps because the market price is below the futures price, making delivery more profitable than selling in the open market), you **must accept and pay**. You cannot refuse.

Now you would have **400 ounces** of gold (200 from the futures delivery + 200 from your actual supplier on December 7) when you only needed 200. The exchange will auction the unwanted gold -- likely at a loss. The difference comes out of your margin account.

> **Professor:** "Please remember, if you hold onto the contract till the expiry date, there is a concept called delivery period. If you enter into delivery period as a buyer, the right to deliver is with the seller."

And the minor risk: even if you avoid the delivery trap, the November contract expires a week before your December 7 delivery. Those seven days are **unhedged** -- you have no price protection.

**The Solution:** Always buy the **next month's** contract.

December 7 delivery? Buy a **January** contract.

- Your supplier delivers on December 7. Your January contract is still alive -- delivery period has not started.
- On December 8 or 9, you **close** (reverse) the January futures position. No risk of forced delivery.
- You got your physical gold from the supplier, paid the spot price, and the futures gain/loss offsets the price difference. Hedge complete.

**Important RBI rule (India-specific):** Once your physical delivery is received and paid for, you **must** close the futures position. If you continue holding, you become a **speculator** -- you are betting on price movement without an underlying business need. The Reserve Bank of India prohibits operating companies from speculating in derivatives.

> **Professor:** "In the futures market, I am not going for delivery. I am going for price discovery and fixing the price. Physical market is where I get the delivery."

---

## Open Interest: Reading the Market's Mind

When you buy a futures contract and hold it (without closing or selling), that position is called **open interest**. It is the count of contracts that remain active.

Since every buyer must have a seller, **long open interest always equals short open interest** -- they are mirror images.

**What does growing open interest mean?**

The professor gave an example: suppose the London Metal Exchange shows that open interest for October aluminium futures is growing -- 5 million tons, then 10 million tons, then more. What is the market telling you?

Participants are **holding onto their positions**. They believe the price has **momentum** -- typically upward. They do not want to close because they expect further gains.

> **Professor:** "If you see for any product -- Reliance shares, gold, aluminium -- open interest is increasing, which means people believe price is going to go up in future. They are holding on to gain from the price rise."

If prices start falling, holders will close their contracts (because holding is loss-making), and open interest will **shrink**. So shrinking open interest often signals the momentum is fading or reversing.

---

## Spot vs. Futures Price: Two Patterns, One Destination

During the life of a contract, the relationship between spot price and futures price can follow two patterns:

1. **Futures above spot** (called **contango**) -- the normal situation. Future price is higher because it includes the cost of carrying the asset over time.
2. **Spot above futures** (called **backwardation**) -- less intuitive. This happens when there is a current shortage or high demand for immediate delivery.

But **on the final day of expiry**, both prices **converge**. The futures price equals the spot price. This is enforced by the settlement mechanism.

> **Professor:** "Two different patterns, but ultimately all converge."

Understanding **why** they converge requires understanding how futures are priced -- which is where the session's most important concept arrives.

---

## Futures Pricing: The Gold Arbitrage

This was the centerpiece of the session. The professor built the formula through two brilliant scenarios -- proving it from first principles rather than just handing out the equation.

### The Setup

- **Spot price of gold:** 390 USD per ounce
- **1-year risk-free interest rate:** 5% per annum
- **No storage cost** (assume the bank does not charge locker rent)
- **Your starting position: You have no money and no gold**

The question: **Can you make a riskless profit?**

---

### Scenario 1: Futures Price = 425 USD (Overpriced)

**At t = 0 (today), take three steps:**

| Step | Action | Cash Flow |
|------|--------|-----------|
| 1 | **Borrow 390 USD** at 5% interest for 1 year | +390 |
| 2 | **Buy gold** at the spot price of 390 | -390 |
| 3 | **Sell (short) a 1-year gold futures contract** at 425 | No cash needed (no premium) |

You now have: borrowed money used up, physical gold in hand, and a commitment to sell gold at 425 in one year. Net cash invested: **zero**.

**At t = 1 (one year later), square off everything:**

| Step | Action | Cash Flow |
|------|--------|-----------|
| 1 | **Deliver gold** through the futures contract | +425 (receive sale proceeds) |
| 2 | **Repay the loan** with interest: 390 x 1.05 | -409.50 |
| | **Profit** | **+15.50** |

**The ROI question:** The professor asked students for the return on investment. Several said 3.9% or 4% (dividing 15.50 by 390). One student got it right:

> **Student:** "I believe there was no personal investment. So it is infinite."
>
> **Professor:** "It is infinite. Yes, you are right. There is no investment. Without investing any money, you made a 15.50 USD return. This is arbitrage profit."

**Is this risky?** Not at all. Whether the actual gold price after one year is 300 or 450 or any other number, you still make 15.50. You locked the sale price at 425 through the futures contract. The actual market price is irrelevant.

> **Professor:** "This is riskless profit. There is no risk. You are protected from market fluctuation."

---

### So What Should the Futures Price Be?

If the futures price is 425 but your borrowing cost only brings gold to 409.50 (that is, 390 x 1.05), then the futures market is **overpriced by 15.50 USD**. As long as this mispricing exists, people will keep doing this trade -- borrow, buy spot, sell futures -- pocketing the difference.

> **Professor:** "Anything overpriced, what do you do? You sell. And that is why you sell futures."

The arbitrage-free futures price -- the price at which no free profit exists -- is **409.50 USD**.

---

### Scenario 2: Futures Price = 390 USD (Underpriced, Same as Spot)

The professor changed only the futures price to 390 (equal to spot). Students, including some who were sharp on Scenario 1, said: "No arbitrage opportunity."

**They were wrong.**

The professor guided the class through a completely different set of steps. The key insight: **instead of borrowing cash, borrow gold**.

**At t = 0 (today), take four steps:**

| Step | Action | Cash Flow |
|------|--------|-----------|
| 1 | **Borrow physical gold** from someone who owns it (a gold dealer, a bank) | No cash needed |
| 2 | **Sell the borrowed gold** at the spot price of 390 | +390 |
| 3 | **Put 390 USD in a bank FD** at 5% for 1 year | -390 (into FD) |
| 4 | **Buy (long) a 1-year gold futures contract** at 390 | No cash needed (no premium) |

Net cash invested: **zero**. You have no gold (you sold it), no cash (it is in the FD), and a commitment to buy gold at 390 in one year.

**At t = 1 (one year later), square off everything:**

| Step | Action | Cash Flow |
|------|--------|-----------|
| 1 | **FD matures** | +409.50 (390 x 1.05) |
| 2 | **Pay for gold futures delivery** (you must buy at the locked price) | -390 |
| 3 | You now have physical gold. **Return it to the gold lender.** | Gold returned |
| | **Profit** | **+19.50 USD** |

But wait -- why would anyone lend you gold for free? They would not. But the lender saves on **carrying costs** (no locker rent for a year) and gets a **guaranteed return** (you offer to share the profit -- say 10 USD out of 19.50). The lender gets their gold back plus cash, risk-free. Both sides win.

> **Professor:** "You borrow gold. You are not buying gold, you are borrowing gold. You sell it, collect 390 cash, put it in FD. Nothing you have now -- got gold, sold gold, got cash, FD."

### The student question that tripped everyone up

A student (Kaushik) asked: "The fourth step -- buying futures -- comes after one year, right?"

> **Professor:** "No no no. All steps today. Everything today. Otherwise how do you fix the price at 390?"

And when asked about needing money for the margin on the futures contract:

> **Professor:** "Futures, you do not need to spend any money upfront. You just buy the contract. There is no premium to be paid. You have to put a margin, but that is a deposit, not a cost."

(The example assumed no margin requirement for simplicity.)

---

### The Arbitrage-Free Price

Both scenarios lead to the same answer. The **fair price** (no-arbitrage price) of the 1-year gold futures contract is:

> **F = S x (1 + r)^t**

Plugging in:

> **F = 390 x (1 + 0.05)^1 = 390 x 1.05 = 409.50 USD**

| If Actual Futures Price Is... | It Is... | You Should... | Profit Source |
|------------------------------|----------|---------------|---------------|
| **Above 409.50** (e.g., 425) | Overpriced | Sell futures, buy spot gold, borrow cash | Futures price too high relative to cost of carry |
| **Below 409.50** (e.g., 390) | Underpriced | Buy futures, sell spot gold, lend cash (FD) | Futures price too low relative to cost of carry |
| **Exactly 409.50** | Fairly priced | No arbitrage possible | Only hedgers participate |

As more arbitrageurs exploit the mispricing, their buying and selling pressure pushes the futures price **toward 409.50**. Once it reaches fair value, only **hedgers** remain in the market -- arbitrageurs have nothing to gain.

> **Professor:** "So long as there is an arbitrage opportunity, there will be buying and selling of gold futures for making money. It is not for hedging. Arbitrageurs take advantage of mispricing. They make money. This will continue until the price converges to its fair price."

---

### Continuous Compounding: The Exam Formula

Because exchange-traded futures can be bought and sold **continuously** (every second, every minute -- not just once a year or once a month), discrete compounding does not capture the reality. The correct formula uses **continuous compounding**:

> **F = S x e^(r x t)**

Where **e** is the mathematical constant (approximately 2.71828).

For our example:

> **F = 390 x e^(0.05 x 1) = 390 x 1.05127 = 409.996 USD**

The discrete answer was 409.50. The continuous answer is 409.996 -- slightly higher because of the compounding effect.

| Formula | Expression | When to Use |
|---------|-----------|-------------|
| **Discrete compounding** | F = S x (1 + r)^t | OTC / bilateral contracts (settled once at expiry) |
| **Continuous compounding** | F = S x e^(r x t) | Exchange-traded contracts (settled continuously) |

> **Professor's exam warning:** "If in the exam you use the discrete formula for exchange-traded products, you will not get marks. You have to use the continuous compounding formula."

**Why risk-free rate?** Because this is an **arbitrage** pricing model. Arbitrage is by definition riskless. Using a risky interest rate (corporate bond rate, loan rate) would be logically inconsistent -- you cannot claim "riskless profit" while using a rate that prices in risk.

---

## Key Formulae

| Formula | Expression | Notes |
|---------|-----------|-------|
| **Futures price (discrete)** | F = S x (1 + r)^t | For OTC contracts; t in years |
| **Futures price (continuous)** | F = S x e^(r x t) | For exchange-traded contracts; **use this in exams** |
| **Number of contracts** | Exposure quantity / Contract size | e.g., 200 oz / 100 oz per contract = 2 contracts |
| **Margin call amount** | Initial margin - Current balance | Triggered when balance falls below maintenance margin |
| **Arbitrage-free condition** | F = S x e^(r x t) | No riskless profit possible at this price |

---

## Memory Tricks

- **Long = Buy** (you are "long on hope" -- hoping the price goes up)
- **Short = Sell** (you are "cutting it short" -- expecting the price to fall)
- **Margin call** = Like inventory reorder level. When stock hits the minimum, you reorder. When margin hits maintenance, you top up.
- **Overpriced futures?** Sell them. **Underpriced futures?** Buy them. (Buy low, sell high -- the eternal rule.)
- **Delivery trap:** Always buy the month **after** your physical delivery month
- **Futures are not insurance:** No premium = no upside. You sacrifice upside for downside protection.

---

## The Recipe Chain

**Sessions 1-4** (EVA, Capital Structure) --> **Sessions 5-7** (Payout Policy: Dividends, Signaling, Self-Control) --> **Session 8** (Buybacks + Risk Management intro: three financial risks, IQM framework, Hindalco case) --> **Session 9** (Futures mechanics: margin system, daily settlement, delivery traps, open interest, arbitrage pricing formula) --> **Session 10** (Futures with dividends/storage costs, Forward contracts, Corporate hedging examples)

**Connecting thread:** In EVA (Session 1), we measured value creation. In capital structure (Sessions 2-4), we optimized financing. In payout policy (Sessions 5-8), we decided distribution. Now in risk management, we are learning to **protect** all of that from market uncertainty. Futures contracts are the first tool in the toolbox -- they let you fix prices, remove uncertainty, and plan with confidence. But they come with a tradeoff: you give up the upside. The next sessions will explore whether there is a way to keep the upside too (hint: that is what options are for).

---

## What's Next

- **Session 10:** Futures pricing with dividends and storage costs, forward contracts (OTC counterpart of futures), corporate hedging examples (airlines hedging fuel, textile exporters hedging currency), and introduction to options
- **Reading:** Background note on derivatives (already shared on LMS)
- **Quiz alert:** "Thursday there will be a quiz. Come prepared."

---

## The Real-World Takeaway

Forget the margin tables and the e to the power of r times t for a second. Here is the one thing this session is really about: you can pay today to remove tomorrow's uncertainty, and you never have to pay a premium for that if you are willing to give up the upside too. That is it. That is the whole idea, whether you are trading gold or negotiating with a vendor.

Think about a manager renewing a one-year contract with a cloud hosting vendor. The vendor says prices might rise 10 percent next year depending on demand. You have two choices. You can wait and hope, taking whatever price shows up in twelve months. Or you can lock in a fixed rate today, in writing, for the full year. That fixed-rate deal is a futures contract in everything but name. You gave up the chance of a surprise price drop, but you also killed the risk of a surprise price spike, and you did not have to pay an insurance-style fee to get it, just a contract everyone honors.

The arbitrage half of the lesson matters just as much, even outside trading floors. The core idea is: if two paths lead to the exact same outcome, they had better cost the exact same amount, or someone is leaving free money on the table. In gold, that showed up as borrowing cash to buy spot versus just buying futures. In your job, the same logic shows up whenever someone quotes you a "deal" that seems to beat the obvious alternative. If a vendor offers to let you pay monthly instead of annually at a rate that is suspiciously close to what you would earn just parking that cash in a savings account, someone did the math badly, and it is either a bad deal for them or a bad deal for you. Spotting that mismatch is the same instinct that let the professor's students turn 390 dollars of nothing into free profit.

A few concrete moments where this clicks in a non-finance job:
- Locking a fixed price with a supplier or freelancer for a project that will not deliver for six months, instead of leaving the price open to "market rate at time of delivery"
- Reviewing a multi-year lease or subscription quote and checking whether the "discount for prepaying" actually beats what you would earn just investing that cash yourself for the same period
- Explaining to your team why a fixed-price contract means you cannot benefit if costs later fall, so they should not be surprised when they see market prices drop while your locked-in cost stays the same
- Noticing when two ways of structuring a deal (pay now vs. pay later, buy vs. lease) should mathematically converge to the same cost, and treating any gap as a red flag worth questioning, not a bargain

The one-liner to keep forever: **certainty has no price tag, but it always has a cost — you pay for it by walking away from whatever upside you might have gotten instead.**
