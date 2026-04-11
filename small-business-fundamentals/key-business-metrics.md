# Key Business Metrics for a DPC Practice

> **You can't manage what you don't measure — but tracking everything is worse than tracking nothing.** This guide covers the handful of numbers that actually matter for a DPC practice.

---

## The Philosophy

Most "metrics guides" throw 30 KPIs at you. Nobody tracks 30 metrics. You track the 5 or 6 that drive real decisions, and you look at them regularly.

For a DPC practice, the numbers that drive decisions are:

1. **Monthly Recurring Revenue (MRR)**
2. **Patient panel size**
3. **Churn rate**
4. **Average Revenue Per Member (ARPM)**
5. **Gross and net margin**
6. **Months of runway** (from [Cash Flow Management](cash-flow-management.md))

Master these before you chase more exotic measures.

---

## 1. Monthly Recurring Revenue (MRR)

### Definition

The predictable monthly revenue from ongoing memberships, normalized to a monthly figure regardless of how often members actually pay.

### Why it matters

MRR is your practice's heartbeat. It smooths out the lumpiness of annual prepayments and tells you the **sustainable** monthly revenue baseline.

### How to calculate

For each member, normalize their payment to a monthly amount:

- Monthly payer at $100/mo → $100 MRR
- Quarterly payer at $285/quarter → $95 MRR
- Annual payer at $1,080/year → $90 MRR

Sum MRR across all active members.

### What's a good MRR?

Depends entirely on your stage, pricing, and goals. A more useful question:

> **Is MRR growing month over month?**

Aim for consistent growth. A plateau is a signal to investigate — are you losing members as fast as you add them?

### Related: ARR (Annual Recurring Revenue)

Some owners track ARR = MRR × 12. Same idea, bigger number. Useful for annual planning and valuation conversations.

---

## 2. Patient Panel Size

### Definition

The number of active members at a given time. "Active" means currently paying and receiving care.

### Why it matters

DPC is fundamentally a panel-based business. Your panel size, combined with your pricing, determines your revenue ceiling. And panel size is physically constrained — one physician cannot meaningfully serve 5,000 patients, no matter what insurance-based primary care pretends.

### What's a target panel?

Industry rule-of-thumb numbers for a solo DPC physician:

- **0–150 members:** starting phase; you have capacity for anyone
- **150–400 members:** sustainable solo practice for most physicians
- **400–600 members:** high end of solo capacity; service level may strain
- **600+ members:** usually requires staff or multiple providers

Your number depends on patient mix, acuity, scope, and workflow.

### Key question

> **At my current panel, can I provide the care I promised to provide?**

If the answer is no, you have to either change your model, add capacity, or stop growing the panel.

---

## 3. Churn Rate

### Definition

The percentage of members who cancel in a given month.

### Why it matters

Churn is the silent killer of recurring-revenue businesses. A practice adding 5 new members and losing 5 is not growing — it's running in place. And because dues are low and trust builds slowly, *reducing* churn is often more valuable than *increasing* acquisition.

### How to calculate

```
Monthly churn rate = (Members lost in month ÷ Members at start of month) × 100
```

**Example:** You start the month with 200 members and 4 cancel. Churn = 4 ÷ 200 = 2%.

### Annual churn

Roughly: annual churn ≈ monthly churn × 12 (not exactly, but close enough for small numbers).

### What's a healthy DPC churn rate?

- **Under 1%/month (under ~12%/year):** healthy
- **1–2%/month:** acceptable, worth investigating
- **2–4%/month:** problem — dig into why
- **Over 4%/month:** serious issue requiring urgent attention

Most DPC practices, once established, see annual churn in the 10–20% range. Some reasons are unavoidable (moves, job changes, death). Others reflect service issues, pricing mismatches, or unmet expectations.

### Track *why* members leave

As valuable as the rate itself. When a member cancels, record the reason in a simple spreadsheet or your EMR. Look for patterns. Three members leaving in a row because "I couldn't get an appointment" is a signal. Three leaving for "moved out of state" is just life.

---

## 4. Average Revenue Per Member (ARPM)

### Definition

Total monthly revenue divided by the number of active members.

### Why it matters

ARPM tells you how much revenue each relationship generates, blending membership dues with any ancillary services (dispensing, procedures, employer allocations). Over time, it reveals whether your pricing and service mix are working.

### How to calculate

```
ARPM = Monthly revenue ÷ Number of active members
```

**Example:** $24,000 monthly revenue ÷ 180 members = $133 ARPM.

### What to look for

- **Increasing over time** → your members are engaging with ancillaries, or you've raised prices
- **Decreasing over time** → price competition, discount creep, or lower-engagement members
- **Stable** → probably fine, but worth a periodic check

### A nuance

If you have employer contracts that cover multiple lives at a discounted per-member price, segment the calculation: compare retail ARPM vs. employer-contract ARPM. Otherwise a large employer deal can mask softening in your retail pricing.

---

## 5. Gross and Net Margin

Both come from your P&L ([see Reading Financial Statements](reading-financial-statements.md)).

### Gross margin

```
Gross margin = (Revenue - Cost of services) ÷ Revenue
```

For a DPC practice, cost of services is usually small (supplies, dispensing cost, lab pass-through). Gross margins should be high — typically 85–95%.

### Operating margin

```
Operating margin = Operating profit ÷ Revenue
```

This shows how efficient your overhead is. Good DPC practices hit 30–60% operating margins once established, though this varies widely with stage and pricing.

### Net margin

```
Net margin = Net profit ÷ Revenue
```

What's left after everything, including owner compensation structure. For sole prop / single-member LLC, "net" can be confusing because owner draws aren't expenses. Work with your CPA on how to read your own statements.

---

## 6. Months of Runway

Already covered in [Cash Flow Management](cash-flow-management.md). Quick reminder:

```
Runway = Cash on hand ÷ Monthly operating expenses
```

Target: at least 2–3 months. Aspire to 6.

---

## Metrics Worth Tracking (Second Tier)

Once the core six are habitual, consider adding:

| Metric | What it tells you |
|--------|-------------------|
| **New members acquired / month** | Top-of-funnel health |
| **Member lifetime value (LTV)** | Average revenue from a member across their whole tenure |
| **Customer acquisition cost (CAC)** | How much you spend to land a member (marketing, outreach) |
| **LTV:CAC ratio** | Aim for > 3:1 — members should return far more than they cost to acquire |
| **Employer contract % of revenue** | Diversification; concentration risk |
| **Visit volume per member per year** | Service intensity; may predict churn |
| **Average days to first visit after signup** | Onboarding speed |

Don't add these until the core six are second nature. And don't track a metric unless you know what decision it informs.

---

## How to Track

### The minimum viable dashboard

A single Google Sheet with one row per month. Columns:

- Month
- Members at start
- Members added
- Members lost
- Members at end
- MRR
- Revenue
- Operating expenses
- Net profit
- Cash balance
- Notes

Update it on the same day each month (say, the 5th). Fifteen minutes. Done.

### More sophisticated options

- Your EMR's reporting module (Atlas, Elation, Hint all have dashboards)
- A dedicated DPC management platform
- A BI tool like Google Looker Studio connected to your accounting software

None of these are required. A spreadsheet is fine.

---

## Acting on the Metrics

Tracking metrics is pointless unless you act on them. Some examples:

- **MRR flat three months in a row** → investigate churn or acquisition
- **Churn above 2%/month** → exit interviews, look for patterns
- **ARPM declining** → pricing review, discount audit
- **Gross margin dropping** → check dispensing costs, supply costs, lab markups
- **Runway below 2 months** → pause non-essential spending, accelerate collections, have a hard cash flow conversation
- **Panel past your target** → close to new members or add capacity

The metrics are a checklist, not a scoreboard. Use them to catch drift before it becomes a crisis.

---

## A Monthly Review Routine

Once a month, 20 minutes:

1. Update your dashboard with the prior month's numbers
2. Compare to the previous month and the same month last year (if applicable)
3. Note one thing that's improving
4. Note one thing that's worsening
5. Decide on one action based on what you saw
6. Write it down

That's it. This one routine, repeated, compounds into a practice that's genuinely managed rather than just run.

---

## Key Takeaways

- Six metrics do 95% of the work: MRR, panel size, churn, ARPM, margin, runway.
- Track *why* members leave as diligently as *how many*.
- A simple spreadsheet beats a complex dashboard you don't update.
- Metrics are prompts for action, not scores. The point is the decision, not the number.
- Track monthly. Compound over years.

---

## Next

- [Cash Flow Management](cash-flow-management.md) — managing the inputs these metrics depend on
- [Reading Financial Statements](reading-financial-statements.md) — where the margin numbers come from
- [Pricing & Membership](../pricing-membership/README.md) — strategic decisions that shape MRR and ARPM
