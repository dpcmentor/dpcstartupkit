# Payment Processing Options

> **Quick Summary:** Start with a general-purpose processor (Square, Stripe, PayPal or similar) for payment collection, add automated recurring billing as you grow past roughly 25 patients, and consider a DPC-specific membership platform (Hint Health, Atlas.md, Cerbo and others) once established. ACH transfers cost less than cards.

---

## Table of Contents

- [Starting Lean: Payment Processing by Stage](#starting-lean-payment-processing-by-stage)
- [Payment Processing Options](#payment-processing-options)
  - [Square](#square)
  - [Stripe](#stripe)
  - [PayPal Business](#paypal-business)
  - [Hint Health](#hint-health)
  - [ACH / Bank Transfers](#ach--bank-transfers)
  - [Checks](#checks)
- [Recurring Billing Considerations](#recurring-billing-considerations)
- [Fee Comparison](#fee-comparison)
- [Patient Experience](#patient-experience)
- [Accounting Integration](#accounting-integration)
- [Security and Compliance](#security-and-compliance)
- [Checklist](#checklist-payment-processing)

---

## Overview

Collecting membership payments reliably is essential to DPC practice sustainability. The right payment system balances cost, convenience, automation, and patient experience. This guide covers options from simple manual collection to full practice management integration.

!!! note "About the figures on this page"
    Dollar amounts are estimates unless a source is linked next to them. Prices vary by state, vendor and year; treat them as orders of magnitude and confirm before you spend. Processor rates linked below were read from each vendor's pricing page on 2026-09-22; they change without notice.

## Prerequisites

- Pricing structure determined (see [Pricing Your Practice](pricing-your-practice.md))
- Membership agreement completed (see [Membership Agreement Essentials](membership-agreement-essentials.md))
- Business bank account open

---

## Starting Lean: Payment Processing by Stage

### Stage 1: Just Starting (0-25 Patients)

**You don't need:** Sophisticated practice management software or expensive payment platforms.

**You do need:** A way to collect money.

**Common options:**
- [Square](https://squareup.com/) (2.6% + 15¢ in person; 3.3% + 30¢ online and on invoices; [Square fees](https://squareup.com/help/us/en/article/5068-what-are-square-s-fees))
- [Stripe](https://stripe.com/) (2.9% + 30¢ per card transaction; [Stripe pricing](https://stripe.com/pricing))
- [PayPal Business](https://www.paypal.com/us/business) (2.99% + 49¢ per card transaction; [PayPal pricing](https://www.paypal.com/us/business/pricing))
- Checks (no processing fee, more manual work)

!!! tip
    Start with an established payment processor (Square, Stripe, PayPal or a comparable one) from day one. These platforms scale with your practice, offer recurring billing, and present a professional image to patients. The kit does not endorse any vendor; compare current rates before you sign up.

**Manual recurring billing:**
- Set reminders to invoice patients monthly
- Patients pay via link you send
- Works fine for small numbers

### Stage 2: Growing (25-75 Patients)

**Add:** Automated recurring billing

**Options:**
- [Square](https://squareup.com/) subscriptions (built into Square)
- [Stripe](https://stripe.com/) + simple invoicing
- [PayPal](https://www.paypal.com/us/business) recurring payments
- A DPC-specific membership platform such as [Hint Health](https://www.hint.com/), [Atlas.md](https://atlas.md/) or [Cerbo](https://cer.bo/)

**Why automate:** Manual invoicing becomes time-consuming; automation reduces administrative burden and improves cash flow predictability.

### Stage 3: Established (75+ Patients)

**Consider:** Integrated practice management

**Options:**
- DPC-focused membership platforms (Hint Health, Atlas.md, Cerbo, among others)
- EMR with billing integration
- Full practice management platform

---

## Payment Processing Options

### Square

**Website:** [squareup.com](https://squareup.com/)

**What it is:** All-in-one payment platform with card reader, online payments, invoicing, and subscriptions.

**Features:**
- Free card reader for in-person payments
- Online payment links
- Recurring billing (subscriptions)
- Invoicing
- Basic reporting

**Costs** (Square Free plan, from [Square's fee page](https://squareup.com/help/us/en/article/5068-what-are-square-s-fees)):
- In-person (tap, dip, swipe): 2.6% + 15¢
- Online and payment links: 3.3% + 30¢
- Invoices paid by card: 3.3% + 30¢
- Manually keyed or card on file: 3.5% + 15¢
- Invoices paid by ACH: 1%, $1 minimum ($0 when deposited into Square Checking)
- No monthly fee on the Free plan; paid plans lower the in-person rate

**Pros:**
- Easy to start
- No monthly fees
- Subscription feature built-in
- Good for in-person and online

**Cons:**
- Per-transaction fees add up
- Not healthcare-specific
- Limited practice management features

**Best for:** Getting started; may continue to work well for established practices.

---

### Stripe

**Website:** [stripe.com](https://stripe.com/)

**What it is:** Developer-friendly payment processing platform with powerful features and integrations.

**Features:**
- Online payments
- Recurring billing (Stripe Billing)
- Invoicing
- Extensive integrations
- API for custom solutions

**Costs** (from [Stripe's pricing page](https://stripe.com/pricing)):
- Cards: 2.9% + 30¢ per domestic transaction
- ACH Direct Debit: 0.8%, capped at $5
- Stripe Billing (subscriptions): an additional 0.7% of billing volume on pay-as-you-go
- Stripe Invoicing: an additional 0.4% per paid invoice, capped at $2
- No monthly fee

**Pros:**
- Powerful and flexible
- Excellent for recurring billing
- Many integrations available
- Can grow with you

**Cons:**
- More technical to set up
- May need developer help for customization
- Not healthcare-specific

**Best for:** Tech-savvy practices; practices wanting integration with other tools.

---

### PayPal Business

**Website:** [paypal.com/business](https://www.paypal.com/us/business)

**What it is:** Familiar payment platform with business features.

**Features:**
- Invoicing and payment links
- Recurring payments

**Costs** (from [PayPal's pricing page](https://www.paypal.com/us/business/pricing)):
- Cards through standard checkout: 2.99% + 49¢
- Invoices paid with a PayPal or Venmo balance: 3.49% + 49¢; paid by card: 2.99% + 49¢
- In-person QR code: 2.29% + 9¢

**Pros:**
- Many patients already have accounts
- Easy to use
- Familiar interface

**Cons:**
- Limited practice management features
- Not healthcare-specific
- Some patients find it less intuitive than Square

**Best for:** Practices where patients already prefer PayPal.

---

### Hint Health

**Website:** [hint.com](https://www.hint.com/)

**What it is:** DPC-specific practice management platform including membership and billing.

**Features:**
- Membership management
- Automated recurring billing
- Patient enrollment
- Reporting and analytics
- DPC-specific design

**Costs** (from [Hint's pricing page](https://www.hint.com/pricing)):
- Launch plan from $290/month (one clinician, unlimited members); Pro from $320/month; Scale from $770/month
- Payment processing on Launch: cards 3.00% + 30¢ (+1% for American Express); ACH 1.00% + 25¢, capped at $5. Higher plans carry lower rates.
- Comparable DPC platforms (Atlas.md, Cerbo and others) publish their own pricing; compare before choosing

**Pros:**
- Built specifically for DPC
- Comprehensive membership management
- Automated billing and dunning
- Integrates with some EMRs

**Cons:**
- Monthly fee (may not justify at small scale)
- Another system to learn
- May duplicate EMR features

**Best for:** Established practices wanting streamlined DPC-specific management; larger DPC practices.

---

### ACH / Bank Transfers

**What it is:** Direct bank-to-bank transfers.

**Options:**
- Through your bank
- Through payment platforms (Stripe, Square offer ACH)
- Through practice management systems

**Costs:**
- Lower than card processing at membership-sized amounts
- Usually a percentage with a cap or minimum: Stripe 0.8% capped at $5 ([source](https://stripe.com/pricing)); Square 1% with a $1 minimum ([source](https://squareup.com/help/us/en/article/5068-what-are-square-s-fees)); Hint 1% + 25¢ capped at $5 ([source](https://www.hint.com/pricing))
- Square waives the ACH fee when the money is deposited into Square Checking

**Pros:**
- Lower fees than cards
- Direct and reliable
- Good for recurring payments

**Cons:**
- Takes longer to process (2-5 days)
- Failed payments happen (insufficient funds)
- Patients must provide bank info

**Best for:** Cost-conscious practices; patients preferring lower fees.

---

### Checks

**What it is:** Traditional paper checks.

**Pros:**
- No processing fees
- Some patients prefer
- Simple for occasional use

**Cons:**
- Manual processing
- Can bounce
- Must deposit (time and travel)
- Tracking challenges
- Not scalable

**Best for:** Accommodating patient preferences; not primary payment method.

---

## Recurring Billing Considerations

### Why Automate

**Benefits:**
- Predictable cash flow
- Reduced administrative time
- Fewer missed payments
- Better patient experience (set-and-forget)
- Easier accounting

### Setting Up Recurring Billing

**Information needed from patients:**
- Credit card or bank account details
- Billing address
- Authorization for recurring charges
- Payment date preference

**Billing cycles:**
- Fixed date (e.g., 1st of month) - easier to manage
- Anniversary date (day they enrolled) - more complex to track

**Recommendation:** Fixed date is simpler. Move all patients to same billing date once established.

**Pass-through labs and medications:** Bill labs and dispensed medications as separate, itemized charges, never folded into the membership fee, and offer the same pass-through prices to non-members. Under [IRS Notice 2026-05](https://www.irs.gov/pub/irs-drop/n-26-05.pdf) (Q&A-11 and Q&A-12), separately billed items available only to members count as part of the arrangement, and an arrangement that includes non-ambulatory labs or prescription drugs other than vaccines costs members with HSA-qualified high-deductible plans their HSA eligibility.

### Failed Payment Handling

**What happens:**
- Card declines (expired, limit, fraud block)
- ACH fails (insufficient funds)
- Account closed

**Your process:**
- Automatic retry (most platforms do this)
- Patient notification (automated email/text)
- Grace period before membership impact
- Personal outreach if not resolved
- Clear policy in membership agreement

---

## Fee Comparison

### Typical Monthly Scenarios

**Assume:** 100 patients, $89/month average = $8,900/month collected (about the $98.64 national average adult fee). Rates are the published ones linked above as of 2026-09-22.

| Platform | Fee Structure | Monthly Cost |
|----------|---------------|--------------|
| Square (invoices or online, card) | 3.3% + 30¢ | ~$325 |
| Square (ACH on invoices) | 1%, $1 minimum | ~$90 |
| Stripe (cards) | 2.9% + 30¢ | ~$290 (about $350 with Stripe Billing's 0.7%) |
| Stripe (ACH Direct Debit) | 0.8% capped at $5 | ~$70 |
| PayPal (cards) | 2.99% + 49¢ | ~$315 |
| Hint Health Launch (cards) | $290/mo + 3.0% + 30¢ | ~$590 |
| Hint Health Launch (ACH) | $290/mo + 1% + 25¢ | ~$405 |
| Checks (your time) | $0 + time | Time cost |

**Note:** At small patient counts, percentage fees are manageable. As you grow, ACH or negotiated rates become more valuable.

### Reducing Payment Processing Costs

**Options:**
- Encourage ACH (lower fees)
- Offer small discount for annual prepayment (reduces transactions)
- Negotiate rates with volume (Stripe, etc.)
- Pass fees to patients (not recommended for DPC; several states restrict or ban card surcharges, and card networks set rules for them)

---

## Patient Experience

### Making Payment Easy

**Best practices:**
- Multiple payment options
- Clear instructions
- Automated receipts
- Easy to update payment info
- Responsive to payment questions

### Communication About Payments

**At enrollment:**
- Explain payment process
- Collect payment information
- Set up recurring billing
- Confirm first payment

**Ongoing:**
- Receipt for each payment
- Advance notice of failed payments
- Easy way to update payment method
- Clear policies in agreement

---

## Accounting Integration

### Tracking Payments

**What to track:**
- Payment date and amount
- Payment method
- Patient
- Any notes

**Tools:**
- Payment platform reports
- Accounting software (QuickBooks, Wave, etc.)
- Spreadsheet (early stage)

### Bank Reconciliation

- Payment platforms deposit to your bank
- Deposits may batch multiple payments
- Reconcile platform reports with bank statements
- Track processing fees as expenses

**Recommendation:** Connect payment platform to accounting software for easier reconciliation.

---

## Security and Compliance

### PCI Compliance

**What it is:** Payment Card Industry Data Security Standard - requirements for handling card data.

**Your responsibility:**
- Use PCI-compliant processors (Square, Stripe, etc. are compliant)
- Don't store card numbers yourself
- Keep systems secure
- Complete any required PCI questionnaires

**Using major platforms:** Largely handled by the platform; you're responsible for your account security.

### HIPAA and Payment Processing

A cash-only DPC practice that sends no HIPAA standard electronic transaction (such as an insurance claim) is not a HIPAA covered entity, but treat HIPAA as the floor for how you handle patient information (see [HIPAA Compliance Basics](../compliance-legal/hipaa-compliance-basics.md)). Card and ACH processing is not a standard transaction, and a bank or card processor handling payments is not your business associate for that activity (HIPAA section 1179; see [BAA Requirements](../compliance-legal/baa-requirements.md)), so no BAA is needed for the processor itself.

**Payment data is generally not PHI** - but be careful about:
- What information is visible in payment descriptions and receipts (membership fee, not diagnoses or visit reasons)
- How payment issues are communicated
- Keeping payment systems separate from clinical systems

---

## Checklist: Payment Processing

### Setup
- [ ] Choose payment platform(s)
- [ ] Create business account
- [ ] Connect to business bank account
- [ ] Set up recurring billing feature
- [ ] Configure receipts and notifications
- [ ] Test payment process

### For Each Patient
- [ ] Collect payment information at enrollment
- [ ] Set up recurring payment
- [ ] Send welcome/confirmation
- [ ] Provide receipt for first payment

### Ongoing
- [ ] Monitor for failed payments
- [ ] Follow up on payment issues promptly
- [ ] Reconcile payments with bank deposits
- [ ] Track processing fees
- [ ] Review platform annually (rates, features)

---

## Resources

- [Pricing Your Practice](pricing-your-practice.md) - Setting your membership fees
- [Membership Agreement Essentials](membership-agreement-essentials.md) - Payment terms in agreement
- [Handling Cancellations and Refunds](handling-cancellations-refunds.md) - Payment issues
- Current published rates: [Square](https://squareup.com/help/us/en/article/5068-what-are-square-s-fees), [Stripe](https://stripe.com/pricing), [PayPal](https://www.paypal.com/us/business/pricing), [Hint Health](https://www.hint.com/pricing)
- [IRS Notice 2026-05](https://www.irs.gov/pub/irs-drop/n-26-05.pdf) - HSA rules, including separately billed labs and medications

!!! warning "Educational Content Only"
    **This is educational content, not legal or financial advice.**

    - Regulations vary by state and change over time
    - Always consult a healthcare attorney for legal matters
    - Always consult an accountant for tax and financial matters
    - Verify current requirements with official sources

*Read through and figures checked on 2026-09-22.*

---

## Next Steps

After setting up payment processing:
- [Handling Cancellations and Refunds](handling-cancellations-refunds.md)
- [Patient Onboarding Workflow](../operations/patient-onboarding-workflow.md)
