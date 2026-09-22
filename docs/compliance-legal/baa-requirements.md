# Business Associate Agreement (BAA) Requirements

## Overview

Business Associate Agreements are the contracts HIPAA requires whenever a vendor creates, receives, maintains or transmits Protected Health Information (PHI) *on your behalf*. They are not required for disclosures to another clinician for treatment, for mere conduits such as the postal service, or for disclosures the patient directs. Understanding when you need a BAA—and what it must contain—protects your practice from compliance violations.

> [!CAUTION]
> **Review BAAs with Legal Counsel:** While this guide explains BAA requirements, these are legal contracts with significant implications. Have a healthcare attorney review any BAA before signing, especially if a vendor provides their own template. Ensure the terms adequately protect your practice and meet current HIPAA requirements.

## Prerequisites

- Understanding of HIPAA basics (see [HIPAA Compliance Basics](hipaa-compliance-basics.md))
- List of vendors you use or plan to use
- Basic understanding of your data flows

---

## What Is a Business Associate?

### Definition

A Business Associate (BA) is any person or entity that:
- Performs functions on your behalf involving PHI, OR
- Provides services that require access to PHI

### Are You the Covered Entity?

HIPAA makes you a "Covered Entity" only if you, or a vendor for you, send HIPAA standard electronic transactions such as insurance claims or eligibility checks ([45 CFR 160.103](https://www.ecfr.gov/current/title-45/section-160.103)). A cash-only DPC practice that never does is not one; see [Are You a Covered Entity?](hipaa-compliance-basics.md#are-you-a-covered-entity) for the test and CMS's decision tool.

If you are a covered entity, you must have a BAA in place before sharing PHI with a Business Associate ([164.502(e)](https://www.ecfr.gov/current/title-45/section-164.502)). If you are not, HIPAA does not require BAAs—but they are the practical standard every healthcare vendor expects, the simplest way to bind a vendor to protect your patients' data, and the habit that keeps you ready for the day a single electronic claim makes you a covered entity. This guide assumes you will sign them either way.

---

## When You Need a BAA

### Common Business Associates in DPC

| Vendor Type | Example Services | BAA Required? |
|-------------|------------------|---------------|
| **EMR/EHR provider** | Elation, Atlas, Practice Fusion | Yes |
| **Billing service** | If outsourcing billing | Yes |
| **Cloud storage** | Google Workspace, Dropbox | Yes (if storing PHI) |
| **Email service** | Gmail, Outlook | Yes (if sending PHI) |
| **Scheduling software** | If contains patient info | Yes |
| **Telehealth platform** | Doxy.me, Zoom for Healthcare | Yes |
| **Answering service** | If takes patient messages | Yes |
| **IT support** | If accessing systems with PHI | Yes |
| **Shredding company** | Document destruction | Yes |
| **Lab company** | Quest, Labcorp | No. A lab that runs the tests you order is a covered entity in its own right, and your order is a treatment disclosure ([45 CFR 160.103](https://www.ecfr.gov/current/title-45/section-160.103), business associate definition, paragraph (4)(i)). HHS: "A physician is not required to have a business associate contract with a laboratory as a condition of disclosing protected health information for the treatment of an individual." |
| **Consultant** | If accessing PHI | Yes |
| **Attorney** | If accessing PHI | Yes |
| **Accountant** | Bookkeeping, tax | Usually no; yes if they receive patient-level records (ledgers that name patients and services) |
| **Mail, couriers, ISPs, phone carriers** | USPS, UPS, internet and phone service | No (conduit exception: they transport PHI without routinely accessing it) |

### When You DON'T Need a BAA

**Treatment relationships:**
- Specialists you refer to (they're covered entities themselves)
- Hospitals, pharmacies (covered entities)

**Non-PHI services:**
- Janitorial services (unless accessing PHI)
- General IT that doesn't access patient data
- Office supplies
- Utilities

**Patient-directed disclosures:**
- When patient requests you send records somewhere

---

## Starting Lean: BAA by Stage

### Stage 1: Just Starting (0-25 Patients)

**Priority BAAs:**
- EMR/EHR (if using one)
- Email provider (if sending PHI)
- Cloud storage (if storing PHI)
- Telehealth platform (if using)

**Reality:** Many DPC-focused and HIPAA-compliant services have BAAs ready to sign. Don't overcomplicate.

---

### Stage 2: Growing (25-75 Patients)

**Add:**
- Any new technology vendors (not the lab itself—see the table above)
- Answering service (if applicable)
- IT support (if applicable)

---

### Stage 3: Established (75+ Patients)

**Systematize:**
- BAA tracking system
- Annual vendor review
- Renewal management
- Compliance verification

---

## Required BAA Elements

### What Must Be in a BAA

HIPAA requires specific provisions ([45 CFR 164.504(e)(2)](https://www.ecfr.gov/current/title-45/section-164.504)):

**1. Permitted Uses and Disclosures**
- What the BA can do with PHI
- Must specify purposes

**2. Prohibited Uses**
- BA cannot use PHI except as permitted
- Cannot disclose except as permitted

**3. Safeguards, Including the Security Rule**
- BA must implement appropriate safeguards
- BA must comply with the Security Rule for any electronic PHI it handles
- Prevent unauthorized use or disclosure

**4. Reporting and Breach Notification**
- BA must report unauthorized uses/disclosures and security incidents
- BA must report breaches of unsecured PHI to you, with a stated timeline (see [Sample BAA Provisions](#sample-baa-provisions) for the legal maximum)

**5. Subcontractor Requirements**
- BA must get BAAs with their subcontractors
- Ensure same protections flow down

**6. Access to Information**
- BA must make PHI available to you
- Support patient access rights

**7. Amendment Support**
- BA must support amendments to PHI
- Incorporate changes when required

**8. Accounting of Disclosures**
- BA must provide disclosure information
- Support your accounting obligations

**9. Privacy Rule Compliance for Delegated Duties**
- When the BA carries out one of your Privacy Rule obligations (for example, answering patient access requests), it must comply with the Privacy Rule as you would

**10. HHS Access**
- BA must make practices available to HHS
- Allow compliance audits

**11. Return or Destruction**
- When relationship ends: return or destroy PHI
- If not feasible: continue protections

**12. Termination for Material Violation**
- You may terminate the agreement if the BA violates a material term

---

## Getting BAAs

### From Major Vendors

**Most established vendors have BAAs ready:**
- Usually found on website
- May be part of service agreement
- May need to request specifically
- Sometimes in account settings

**Where to look:**
- "Legal" or "Terms" section of website
- "HIPAA" or "Compliance" page
- Account settings or admin panel
- Customer support

### Common Vendor BAA Availability

| Vendor | BAA Availability |
|--------|------------------|
| Google Workspace (paid plans only) | Available; accept in the admin console. Consumer Gmail has no BAA |
| Microsoft 365 (business/enterprise plans only) | Part of the online services terms |
| Zoom | Eligible paid plans only; you must request and execute the BAA. Not automatic |
| Doxy.me | Accept under Settings → BAA; the free plan covers one physician |
| Elation Health | Part of service agreement |
| Atlas.md | Confirm at signup |
| Practice Fusion (now Veradigm) | Part of service agreement |
| Hint Health | Part of service agreement |

### If No BAA Available

**Options:**
1. Request they provide one
2. Provide your own BAA for them to sign
3. Choose a different vendor
4. Don't use for PHI

**Red flag:** If a vendor won't sign a BAA and you need to share PHI with them, don't use them.

---

## Sample BAA Provisions

### Key Sections

**Permitted Uses:**
> Business Associate may use or disclose Protected Health Information only as necessary to perform the services described in [Service Agreement], or as Required by Law.

**Security Requirements:**
> Business Associate shall implement appropriate administrative, physical, and technical safeguards to prevent unauthorized use or disclosure of Protected Health Information.

**Breach Notification:**
> Business Associate shall notify Covered Entity of any Breach of Unsecured Protected Health Information without unreasonable delay, and in no case later than 30 days after discovery of the Breach.

*The legal maximum for a business associate to notify you is 60 calendar days after discovery ([45 CFR 164.410(b)](https://www.ecfr.gov/current/title-45/section-164.410)). Many practices negotiate 5 to 30 days, as in this sample, so they have time to meet their own 60-day patient deadline.*

**Termination:**
> Upon termination of this Agreement, Business Associate shall return or destroy all Protected Health Information received from Covered Entity, or created or received by Business Associate on behalf of Covered Entity.

---

## Managing BAAs

### Tracking System

**Simple tracking (spreadsheet):**
- Vendor name
- Service provided
- BAA signed date
- BAA expiration (if applicable)
- Location of signed BAA
- Review date

### What to Track

| Field | Purpose |
|-------|---------|
| Vendor Name | Identification |
| Service | What they do |
| PHI Access | What PHI they access |
| BAA Date | When signed |
| Expires | When to renew |
| File Location | Where to find signed copy |
| Contact | Who to contact |
| Last Reviewed | Ongoing monitoring |

### Annual Review

**Annually:**
- Confirm all current vendors have BAAs
- Check for any BAA expirations
- Review if vendors still need PHI access
- Update tracking system
- Terminate unused vendors properly

---

## When Vendors Change

### New Vendor Onboarding

1. Determine if PHI will be shared
2. If yes, obtain BAA before sharing any PHI
3. Sign BAA
4. Add to tracking system
5. Then begin service

### Vendor Termination

1. Notify vendor of termination
2. Request return or destruction of PHI
3. Get confirmation
4. Update tracking system
5. Keep BAA on file for 6 years from the later of its creation or the date it was last in effect ([45 CFR 164.530(j)](https://www.ecfr.gov/current/title-45/section-164.530))

---

## Common BAA Mistakes

### Mistake 1: Assuming You Have One

**Problem:** Using service without checking for BAA.
**Solution:** Verify BAA is in place before sharing PHI.

### Mistake 2: Using Consumer Versions

**Problem:** Using consumer Gmail, Dropbox, etc. instead of business versions with BAA.
**Solution:** Use business/enterprise versions that offer BAAs.

### Mistake 3: Not Reading the BAA

**Problem:** Signing without understanding terms.
**Solution:** Review key provisions, especially breach notification timelines.

### Mistake 4: Forgetting Subcontractors

**Problem:** BA uses subcontractors without your knowledge.
**Solution:** BAA should require BA to get BAAs with subcontractors.

### Mistake 5: No Tracking System

**Problem:** Losing track of which vendors have BAAs.
**Solution:** Maintain simple tracking spreadsheet.

---

## Your Responsibilities

### Before Sharing PHI

- Confirm BAA is in place
- Verify vendor's security practices (at least generally)
- Share only minimum necessary PHI

### Ongoing

- Monitor for vendor security issues
- Address any reported incidents
- Annual vendor review
- Update as relationships change

### If Vendor Reports Breach

- Respond promptly
- Investigate
- Determine if breach notification required
- Document everything

---

## Checklist: BAA Management

### Initial Setup
- [ ] List all vendors with PHI access
- [ ] Verify BAA status for each
- [ ] Obtain missing BAAs
- [ ] Create tracking system
- [ ] Store signed BAAs securely

### For Each New Vendor
- [ ] Determine if PHI access needed
- [ ] Request BAA before sharing any PHI
- [ ] Review BAA provisions
- [ ] Sign BAA
- [ ] Add to tracking system
- [ ] Begin service

### Ongoing
- [ ] Annual vendor review
- [ ] Check BAA expirations
- [ ] Monitor for new vendors
- [ ] Respond to any vendor incidents
- [ ] Update tracking as needed

### Vendor Termination
- [ ] Request PHI return/destruction
- [ ] Get confirmation
- [ ] Update tracking
- [ ] Retain BAA for 6 years from the later of creation or last effective date

---

## Resources

- [HIPAA Compliance Basics](hipaa-compliance-basics.md) - Foundation
- [Privacy Practices Guide](privacy-practices-guide.md) - Overall privacy
- [HHS Sample Business Associate Agreement Provisions](https://www.hhs.gov/hipaa/for-professionals/covered-entities/sample-business-associate-agreement-provisions/index.html) - Template language
- Your attorney - Custom BAA review

*Sources checked against primary law and agency guidance on 2026-09-22.*

---

## Next Steps

After establishing BAA processes:
- [Incident Response Plan](incident-response-plan.md) - Handling breaches
- [Required Documentation](required-documentation.md) - Documentation requirements
