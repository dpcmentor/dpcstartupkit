# HIPAA Compliance Basics

> **Quick Summary:** HIPAA binds a practice only if it is a "covered entity"—one that sends HIPAA standard electronic transactions such as insurance claims. Many cash-only DPC practices are not, but should treat HIPAA as the floor anyway (see [Are you a covered entity?](#are-you-a-covered-entity)). For solo DPC, focus on: complete a risk assessment, encrypt all devices, sign BAAs with all vendors handling PHI, create basic policies, and provide Notice of Privacy Practices to patients.

!!! warning "Subject to change"
    This page depends on law, regulation or market pricing that changes. Check the "last updated" date at the bottom of the page and the Reviewed date in the [review status file](https://github.com/dpcmentor/dpcstartupkit/blob/main/REVIEW-STATUS.md), and confirm against the cited primary source before acting.

---

## Table of Contents

- [Are You a Covered Entity?](#are-you-a-covered-entity)
- [Starting Lean: Right-Sizing Compliance](#starting-lean-right-sizing-compliance)
- [HIPAA Fundamentals](#hipaa-fundamentals)
- [Practical Compliance Steps](#practical-compliance-steps)
- [Practical Technology Security](#practical-technology-security)
- [Common HIPAA Mistakes](#common-hipaa-mistakes)
- [Patient Rights Under HIPAA](#patient-rights-under-hipaa)
- [HIPAA and DPC-Specific Considerations](#hipaa-and-dpc-specific-considerations)
- [Budget-Friendly Compliance Resources](#budget-friendly-compliance-resources)
- [Checklist](#checklist-hipaa-compliance)

---

## Overview

HIPAA (Health Insurance Portability and Accountability Act) applies to practices that are "covered entities"—a test that turns on electronic insurance transactions, and one that many cash-only DPC practices do not meet (see the next section). Whether or not you are covered, this guide treats HIPAA as the floor for how you protect patient information. The good news: DPC practices are often simpler to secure than traditional practices because you have fewer staff, simpler systems, and no insurance billing infrastructure.

This guide covers what you actually need to do—not theoretical perfection, but practical compliance for a small practice.

!!! warning "Caution"
    **Consult a HIPAA Compliance Expert:** While this guide provides practical orientation, HIPAA regulations are complex and enforcement evolves. Consider consulting a healthcare compliance specialist or HIPAA-focused attorney, especially for your initial risk assessment and policy development. When in doubt, get professional guidance.

## Are You a Covered Entity?

HIPAA does not reach every practice. Under [45 CFR 160.103](https://www.ecfr.gov/current/title-45/section-160.103) a physician or practice is a covered entity only if it, or a vendor acting for it, electronically transmits a HIPAA *standard transaction*: claims, eligibility inquiries, claim status, remittance advice, referral authorizations, coordination of benefits, enrollment, premium payment or claim attachments. E-prescribing, electronic lab orders and card payments are not standard transactions. A cash-only DPC practice that never sends one is not a covered entity. CMS publishes a [covered-entity page and decision tool](https://www.cms.gov/priorities/key-initiatives/burden-reduction/administrative-simplification/hipaa/covered-entities) to walk through the test.

Treat HIPAA as the floor regardless. State privacy law and your medical board's confidentiality rules apply whether or not HIPAA does; labs, EMR vendors and telehealth platforms expect HIPAA-grade practices; and a single electronic claim—a Medicaid vaccine, a one-off insured service—makes you a covered entity from that day forward. Building to the HIPAA standard now costs little and removes the question.

!!! note "What changed recently"
    *Status as of 2026-09-22.*

    - **Security Rule rewrite still pending.** HHS proposed a major Security Rule update at [90 FR 898 (2025-01-06)](https://www.govinfo.gov/content/pkg/FR-2025-01-06/html/2024-30983.htm). It remains a proposal; the current rule is what applies. HHS's regulatory agenda lists final action for July 2027.
    - **Reproductive-health privacy rule vacated.** The 2024 rule (89 FR 32976) was vacated nationwide in *Purl v. HHS*, No. 2:24-cv-00228-Z (N.D. Tex. June 18, 2025); HHS did not appeal. Its Notice of Privacy Practices additions at 164.520(b)(1)(ii)(F)–(H) are void even though eCFR still prints them. See [HHS's reproductive-health page](https://www.hhs.gov/hipaa/for-professionals/special-topics/reproductive-health/index.html).
    - **NPP update deadline has passed.** Since 2026-02-16, covered entities' notices must include the substance-use-disorder (42 CFR Part 2) statements added by the 2024 Part 2 rule. HHS has published [updated model notices](https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/model-notices-privacy-practices/index.html).
    - **2026 penalty amounts.** Civil money penalties were inflation-adjusted at 91 FR 3665 (2026-01-28): tier 1 $145–$73,011 per violation; tier 2 $1,461–$73,011; tier 3 $14,602–$73,011; tier 4 $73,011–$2,190,294; annual cap $2,190,294 per provision ([45 CFR 102.3](https://www.ecfr.gov/current/title-45/section-102.3)).

## Prerequisites

- Knowing whether your practice is a covered entity, and treating HIPAA as the floor either way
- Awareness that non-compliance carries real penalties (for 2026: $145 to $2,190,294 per violation depending on tier, with an annual cap of $2,190,294 per provision, [45 CFR 102.3](https://www.ecfr.gov/current/title-45/section-102.3))
- Commitment to protecting patient information

---

## Starting Lean: Right-Sizing Compliance

### The Reality for Small Practices

For a covered entity, HIPAA is the same law for a solo DPC practice and a 500-physician health system. But how you implement it scales with your size and complexity.

**What the law requires:** Reasonable and appropriate safeguards given your size, complexity, capabilities, and risk.

**What this means for solo/small DPC:** You need real protections, but you don't need enterprise security software or a compliance department.

### Compliance by Practice Stage

| Stage | Focus |
|-------|-------|
| Pre-launch | Basic policies, secure systems, BAAs with vendors |
| 0-50 patients | Operating according to policies, training yourself/staff |
| 50+ patients | Documented risk assessment, refined procedures |
| Growing/hiring | Staff training, access controls, more formal documentation |

---

## HIPAA Fundamentals

### What HIPAA Protects

**Protected Health Information (PHI):** Any individually identifiable health information, including:
- Name, address, phone, email, SSN, DOB
- Medical records and history
- Treatment information
- Payment information
- Any combination that could identify a patient

### The Three Rules

**1. Privacy Rule:** Controls how PHI can be used and disclosed
**2. Security Rule:** Requires safeguards to protect electronic PHI (ePHI)
**3. Breach Notification Rule:** Requires notification if PHI is compromised

### Who Must Comply

- **Covered Entities:** Health plans, clearinghouses, and any physician or practice that transmits HIPAA standard transactions electronically (see [Are You a Covered Entity?](#are-you-a-covered-entity))
- **Business Associates:** Vendors who handle PHI on your behalf (EMR, billing, cloud storage)

---

## Practical Compliance Steps

### Step 1: Designate Responsibility

Someone must be responsible for HIPAA compliance. In a solo practice, that's you.

**Document:**
- Privacy Officer: [Your name]
- Security Officer: [Your name]

These can be the same person. You're acknowledging responsibility.

---

### Step 2: Complete a Risk Assessment

HIPAA requires you to identify risks to PHI and address them.

**Simple Risk Assessment Process:**

1. **Inventory:** List everywhere PHI exists
   - EMR system
   - Email (if any patient communication)
   - Phone/text (if patient communication)
   - Paper files (if any)
   - Laptop/computer
   - Backup systems
   - Any other locations

2. **Identify Risks:** For each location, what could go wrong?
   - Unauthorized access
   - Loss or theft
   - Accidental disclosure
   - Technical failure

3. **Assess Current Protections:** What safeguards exist?
   - Passwords
   - Encryption
   - Physical security
   - Access limits

4. **Identify Gaps:** Where are protections insufficient?

5. **Plan Remediation:** How will you address gaps?

6. **Document:** Write it down, even simply.

**Free Risk Assessment Tools:**
- [ONC/OCR Security Risk Assessment Tool](https://www.healthit.gov/privacy-security/security-risk-assessment-tool/) (free, designed for small practices)
- Many EMRs provide risk assessment templates

---

### Step 3: Implement Safeguards

#### Administrative Safeguards

| Requirement | Practical Implementation |
|-------------|-------------------------|
| Security management | Complete risk assessment; address identified risks |
| Workforce training | Train yourself; train any staff before they access PHI |
| Access management | Only you (and necessary staff) access PHI |
| Contingency plan | Know how you'll recover if systems fail |

#### Physical Safeguards

| Requirement | Practical Implementation |
|-------------|-------------------------|
| Facility access | Lock office; don't leave PHI visible to non-staff |
| Workstation security | Position screens away from patient view; lock computer when stepping away |
| Device security | Encrypt laptops; password-protect phones; enable remote wipe |

#### Technical Safeguards

| Requirement | Practical Implementation |
|-------------|-------------------------|
| Access controls | Unique user IDs; strong passwords; automatic logoff |
| Audit controls | Use EMR audit features; know who accessed what |
| Integrity controls | Ensure PHI isn't improperly altered |
| Transmission security | Encrypt emails with PHI; use secure messaging |

---

### Step 4: Create Required Policies

You need written policies. They don't need to be complex, but they need to exist.

**Essential Policies:**

1. **Privacy Policy:** How you protect PHI; patient rights
2. **Security Policy:** Technical and physical safeguards
3. **Breach Response Policy:** What to do if PHI is compromised
4. **Sanction Policy:** Consequences for violations (even if just you)

**Starting Simple:**

A few pages covering the basics is sufficient initially. You can use templates from:
- Your state medical association
- DPC organizations (DPC Alliance)
- HIPAA compliance vendors
- HHS resources

---

### Step 5: Create Notice of Privacy Practices

**Required:** A covered entity must provide patients a Notice of Privacy Practices explaining how their information is used and their rights. If you are not a covered entity, provide one anyway; it is what patients and vendors expect.

**Must Include** ([45 CFR 164.520(b)(1)](https://www.ecfr.gov/current/title-45/section-164.520)):
- The header sentence, verbatim: "THIS NOTICE DESCRIBES HOW MEDICAL INFORMATION ABOUT YOU MAY BE USED AND DISCLOSED AND HOW YOU CAN GET ACCESS TO THIS INFORMATION. PLEASE REVIEW IT CAREFULLY."
- How you use and disclose PHI for treatment, payment and operations, with at least one example of each, and each other purpose permitted or required without authorization
- A statement that any other use or disclosure will be made only with the patient's written authorization, and that the patient may revoke it
- If you create, receive or maintain substance use disorder treatment records subject to 42 CFR Part 2: the Part 2 statements required since 2026-02-16, including that those records will not be used or disclosed in civil, criminal, administrative or legislative proceedings against the patient without written consent or a court order
- Patient rights: access, amendment, accounting, confidential communications, a paper copy, and the right to restrict—including your duty to agree when a patient has paid in full out of pocket and asks you not to tell their health plan
- Your duties: to protect PHI, to abide by the current notice, and to notify affected patients after a breach of unsecured PHI
- How to file a complaint with you and with HHS, and that there will be no retaliation
- The name or title and telephone number of the person to contact for more information
- Effective date

Start from the [HHS model notices for health care providers (2026)](https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/model-notices-privacy-practices/index.html). Do not copy the reproductive-health statements at 164.520(b)(1)(ii)(F)–(H) that eCFR still prints; that rule was vacated in *Purl v. HHS* (2025) and those paragraphs are void.

**Implementation:**
- Provide to every new patient no later than the date of first service delivery; if that first service is delivered electronically, such as a telehealth visit, send the notice electronically at the same time ([164.520(c)(2)(i)](https://www.ecfr.gov/current/title-45/section-164.520))
- Post in office
- Post on your website if the site describes your services or benefits ([164.520(c)(3)(i)](https://www.ecfr.gov/current/title-45/section-164.520))
- Get acknowledgment of receipt (signature or documentation of offer)

**Templates available:** Many free templates exist. Have an attorney review your version.

---

### Step 6: Execute Business Associate Agreements

**Required:** You must have a BAA with any vendor that handles PHI on your behalf.

**Common Business Associates:**
- EMR vendor
- Cloud storage (if storing PHI)
- Email provider (if PHI in email)
- Answering service
- Billing service (if using one)
- IT support (if they access systems with PHI)
- Shredding company

**Not business associates (the conduit exception):** the postal service, couriers, internet service providers and telephone carriers that merely transport PHI without routinely accessing it. No BAA is needed with them.

**What a BAA Does:**
- Contractually obligates the vendor to protect PHI
- Defines permitted uses
- Requires breach notification to you
- Makes them liable for their violations

**Getting BAAs:**
- Most healthcare-focused vendors provide BAAs readily
- Request before using any service for PHI
- Keep signed copies

!!! warning "Caution"
    If a vendor won't sign a BAA, don't use them for anything involving PHI.

---

### Step 7: Plan for Breach Response

**Breach:** An acquisition, access, use or disclosure of *unsecured* PHI (PHI that is not encrypted or destroyed to HHS's standard) that the Privacy Rule does not permit. It is presumed to be a reportable breach unless a documented four-factor risk assessment shows a low probability that the PHI was compromised ([45 CFR 164.402](https://www.ecfr.gov/current/title-45/section-164.402)).

**You Must:**
1. Investigate promptly
2. Determine if breach notification is required
3. If required, notify:
   - Affected patients (without unreasonable delay, within 60 days)
   - HHS: if 500 or more people are affected, at the same time you notify patients; if fewer than 500, log the breach and report it to HHS within 60 days after the end of the calendar year in which it was discovered ([164.408](https://www.ecfr.gov/current/title-45/section-164.408))
   - Media (if more than 500 residents of a state or jurisdiction are affected, [164.406](https://www.ecfr.gov/current/title-45/section-164.406))
4. Document everything

**Breach Response Basics:**
- Contain the breach immediately
- Document what happened
- Assess what information was involved
- Determine if notification is required (most breaches require it)
- Notify as required
- Implement measures to prevent recurrence

**Low-Cost Preparation:**
- Have a written breach response procedure
- Know who you'd call for help (attorney, IT)
- Consider cyber liability insurance

---

## Practical Technology Security

### For Your Computer/Laptop

- [ ] Strong password (12+ characters)
- [ ] Encryption enabled (BitLocker for Windows, FileVault for Mac)
- [ ] Automatic updates enabled
- [ ] Antivirus/security software
- [ ] Automatic screen lock after inactivity
- [ ] Remote wipe capability if stolen

### For Your Phone/Tablet

- [ ] PIN/password/biometric lock
- [ ] Encryption enabled (default on modern devices)
- [ ] Remote wipe capability
- [ ] Secure apps for any PHI access
- [ ] Avoid storing PHI in notes/photos

### For Your EMR

- [ ] Strong, unique password
- [ ] Two-factor authentication (if available)
- [ ] Understand audit log features
- [ ] Know vendor's security certifications
- [ ] BAA signed

### For Email

**Best:** Don't send PHI via regular email.

**If you must:**
- Use encrypted email (many options available)
- Or use EMR secure messaging instead
- Or, when a patient asks for unencrypted email, warn them of the risk and confirm they still want it. The consent need not be in writing, but document it

### For Communication

**Secure options:**
- EMR patient portal messaging
- Messaging apps whose vendor signs a BAA (Spruce, OhMD, etc.). HIPAA certifies no product; "HIPAA-compliant" is a marketing label, and what matters is the BAA and your own safeguards
- Encrypted email

**Not secure:**
- Regular email
- Regular text messaging
- Consumer messaging apps (WhatsApp, iMessage, etc.)

**Practical note:** Many DPC practices use regular text/phone with patient understanding and consent documented. This is a calculated risk. Best practice is a platform whose vendor signs a BAA.

---

## Common HIPAA Mistakes

### Mistake 1: No Risk Assessment
**Problem:** Required and often the first thing auditors check.
**Solution:** Complete even a simple risk assessment and document it.

### Mistake 2: Missing BAAs
**Problem:** Using vendors without agreements.
**Solution:** Inventory all vendors; get BAAs before using for PHI.

### Mistake 3: Unencrypted Devices
**Problem:** Lost/stolen laptop with unencrypted PHI = reportable breach.
**Solution:** Enable encryption on all devices that may contain PHI.

### Mistake 4: Talking in Public
**Problem:** Discussing patients where others can hear.
**Solution:** Private conversations; awareness of surroundings.

### Mistake 5: No Policies
**Problem:** Policies required even for small practices.
**Solution:** Create basic written policies.

### Mistake 6: Thinking Small Practices Are Exempt
**Problem:** If you are a covered entity, HIPAA applies regardless of practice size; and even if you are not, state privacy law and medical board confidentiality rules still do.
**Solution:** Scale implementation appropriately, but do implement.

---

## Patient Rights Under HIPAA

You must honor these patient rights:

| Right | Your Obligation |
|-------|-----------------|
| Access | Provide copies of records within 30 days of request; one 30-day extension is allowed if you tell the patient in writing why and when ([164.524(b)(2)](https://www.ecfr.gov/current/title-45/section-164.524)) |
| Amendment | Allow patients to request corrections (you can deny with reason) |
| Disclosure accounting | Track certain disclosures; provide accounting on request |
| Restrictions | Consider requests to restrict certain uses/disclosures; you must agree when a patient has paid in full out of pocket and asks you not to disclose that item or service to their health plan ([164.522(a)(1)(vi)](https://www.ecfr.gov/current/title-45/section-164.522)) |
| Confidential communications | Accommodate reasonable requests for alternative communication |
| Notice | Provide Notice of Privacy Practices |

---

## HIPAA and DPC-Specific Considerations

### No Insurance Billing = Simpler Compliance

Without insurance billing infrastructure, you have:
- Fewer systems containing PHI
- Fewer staff accessing PHI
- Fewer business associates
- Simpler data flows

This makes compliance more manageable.

### Patient Communication

DPC often involves more direct communication (calls, texts, messaging). Be thoughtful:
- Use HIPAA-compliant platforms when possible
- If using phone/text, document patient consent
- Be careful what you put in writing
- Don't leave detailed voicemails without patient consent

### Telehealth

Use HIPAA-compliant telehealth platforms (see [Telehealth Platforms](../technology/telehealth-platforms.md)).

---

## What Happens If You're Audited

### Triggers for Audit
- Patient complaint
- Random audit (rare for small practices in our experience; opinion, not a published statistic)
- Breach report

### What Auditors Look For
- Risk assessment documentation
- Policies and procedures
- BAAs with business associates
- Training documentation
- Notice of Privacy Practices

### Being Prepared
- Document what you do
- Keep records organized
- Respond promptly and honestly if contacted

---

## Budget-Friendly Compliance Resources

### Free Resources
- HHS HIPAA guidance: hhs.gov/hipaa
- HHS Security Risk Assessment Tool
- State medical association resources
- DPC community shared templates

### Low-Cost Options
- HIPAA compliance software for small practices ($20-$100/month; typical range, unsourced estimate)
- Online HIPAA training courses ($20-$50; typical range, unsourced estimate)
- Template policy packages ($100-$300; typical range, unsourced estimate)

### When to Invest More
- When hiring employees (training becomes critical)
- After a breach (remediation and prevention)
- If offering complex services
- If anxiety about compliance is affecting you

---

## Checklist: HIPAA Compliance

### Foundation
- [ ] Designate Privacy and Security Officer (yourself)
- [ ] Complete risk assessment
- [ ] Document risk assessment findings

### Policies and Notices
- [ ] Create/adopt privacy policies
- [ ] Create/adopt security policies
- [ ] Create/adopt breach response policy
- [ ] Create Notice of Privacy Practices
- [ ] Process for providing NPP to patients

### Technical
- [ ] Encrypt all devices with PHI
- [ ] Strong passwords on all systems
- [ ] Automatic screen lock enabled
- [ ] Secure communication methods identified
- [ ] BAAs signed with all relevant vendors

### Ongoing
- [ ] Risk assessment review (annual is best practice; the current rule requires periodic review, and HHS's pending Security Rule proposal would make it annual)
- [ ] Policy updates as needed
- [ ] Training when adding staff
- [ ] Breach response procedure ready

---

## Resources

- [HHS HIPAA Information](https://www.hhs.gov/hipaa/index.html)
- [ONC/OCR Security Risk Assessment Tool](https://www.healthit.gov/privacy-security/security-risk-assessment-tool/)
- [HIPAA Journal](https://www.hipaajournal.com/) - News and guidance
- [State Medical Board Requirements](state-dpc-laws-overview.md)

*Sources checked against primary law and agency guidance on 2026-09-22.*

---

## Next Steps

After establishing HIPAA compliance:
- [State DPC Laws Overview](state-dpc-laws-overview.md) - State-specific requirements
- [Required Documentation](required-documentation.md) - Medical records requirements
- [EMR Selection Guide](../technology/emr-selection-guide.md) - HIPAA-compliant technology
