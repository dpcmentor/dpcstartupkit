# Telehealth Legal Considerations for DPC

> **Quick Summary:** Telehealth expands your reach and convenience, but brings legal complexity. The rules changed dramatically during COVID and continue evolving. Know the basics before you click "Start Video."

---

!!! warning "Caution"
    Telehealth regulations vary dramatically by state and are actively changing. Most COVID-era flexibilities have expired; the DEA telemedicine prescribing flexibility runs through 2026-12-31. Verify current rules with your state medical board before practicing telehealth across state lines.

---

## The Basics

### What Counts as Telehealth?

**Generally includes:**
- Live video visits
- Audio-only phone visits (varies by state)
- Store-and-forward (asynchronous)
- Remote patient monitoring
- Text-based consultations

**Key question:** Where is the patient located when you provide care?

### The Fundamental Rule

**You need a license in the state where the patient is located at the time of the visit.**

Not where they live. Not where you are. Where they are *right now*.

**Example:** Your patient is on vacation in Florida. You're licensed in Ohio. If you do a telehealth visit while they're in Florida, you may be practicing medicine in Florida without a license.

---

## Licensing Requirements

### Interstate Medical Licensure Compact (IMLC)

**What it is:** An agreement among participating states for expedited licensure.

**As of March 2026, 44 states, the District of Columbia and Guam participate.** The non-member states are California, New York, Oregon, South Carolina and Virginia; Massachusetts has legislation pending; Hawaii and Vermont are members but cannot serve as a state of principal license. Check the current map at [imlcc.com](https://imlcc.com/).

**How it works** (per [imlcc.com](https://imlcc.com/)):
1. Hold a full, unrestricted license in a member state that can serve as your state of principal license (SPL). A state qualifies as your SPL if you reside there, conduct at least 25% of your practice there, are employed there, or use it as your tax residence.
2. Apply to the Compact for a Letter of Qualification. The fee is $700, paid once; the letter is valid for 365 days and typically takes 30-45 days.
3. Select the member states you want and pay each state's licensing fee.
4. Each selected state issues its own full license, with its own renewal cycle and fees.

**Cost:** $700 one-time Compact fee, plus each state's fee ($35-$895; most $300-$500).

### State-by-State Licensure

**Without the compact:**
- Full application in each state
- Months of waiting
- Significant fees
- Background checks each time

**Reality for most bootstrap DPC:** License in your home state only until volume justifies expansion.

### Exceptions and Special Cases

**Established patients traveling:**
- Some states have "continuity of care" exceptions
- Limited scope and duration
- Not a permanent solution

**Emergencies:**
- Most states allow emergency care without full licensure
- Narrow definition of "emergency"

**Consultations:**
- Consulting with another physician (not treating patient directly)
- Generally doesn't require local license
- Must be true consultation, not primary care

---

## HIPAA and Telehealth

### Platform Requirements

**Your telehealth platform must be HIPAA-compliant:**
- Business Associate Agreement (BAA) with vendor
- End-to-end encryption
- Access controls
- Audit logs

**Platforms that offer a BAA:**
- Doxy.me (the free tier's BAA covers a solo physician only)
- Zoom Pro (a self-serve BAA is available on accounts with up to 9 licenses, about $14-17 per user per month; the enterprise healthcare tier is not required)
- Google Meet (with a Google Workspace BAA; $7 per user per month at the entry tier)
- VSee
- Teladoc (enterprise)
- Most EMR-integrated solutions

**Not acceptable without a BAA:**
- Any Zoom account on which you have not accepted the BAA
- FaceTime
- WhatsApp
- SMS/text messaging

(Skype was retired on 2025-05-05 and is no longer an option.)

### Post-COVID Reality

**Most COVID flexibilities have ended; one has not:**
- HHS OCR's telehealth enforcement discretion, which tolerated FaceTime, Skype and similar consumer apps, expired on 2023-05-11, with a transition period that ended 2023-08-09 (88 FR 22380)
- Audio-only restrictions returning in some states
- DEA telemedicine prescribing flexibilities have not tightened; they were extended a fourth time, through 2026-12-31 (see [Controlled Substances](#controlled-substances) below)

**Check current HHS guidance** for any remaining flexibilities.

---

## Informed Consent for Telehealth

### What to Cover

**Your telehealth consent should include:**

1. **Nature of telehealth**
   - Not the same as in-person
   - Technical limitations
   - What can/cannot be assessed

2. **Privacy considerations**
   - How you protect information
   - Patient's responsibility for their environment
   - Recording policies

3. **Technical requirements**
   - Internet connection needed
   - Video preferred
   - Backup plan if technology fails

4. **Limitations**
   - May need in-person follow-up
   - Some conditions require examination
   - Emergencies require 911

5. **Patient rights**
   - Right to refuse telehealth
   - Right to request in-person
   - Complaint procedures

### Consent Best Practices

- Written consent recommended (not required everywhere); the [FSMB Telemedicine Policies: Board-by-Board Overview](https://www.fsmb.org/siteassets/advocacy/key-issues/telemedicine_policies_by_state.pdf) (September 2024) sets out the consent elements state boards expect
- Can be part of membership agreement
- Verbal consent acceptable with documentation
- Re-consent for significant changes

---

## Prescribing via Telehealth

### Controlled Substances

**The Ryan Haight Act** ([21 USC 829(e)](https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title21-section829&num=0&edition=prelim)):
- Generally requires at least one in-person medical evaluation before prescribing a controlled substance by means of the internet
- Contains a "practice of telemedicine" exception; the COVID-era version of that exception has been extended repeatedly rather than allowed to lapse

!!! warning "Subject to change"
    The DEA and HHS extended the COVID-era telemedicine prescribing flexibilities a fourth time, through 2026-12-31 (21 CFR 1307.41; [90 FR 2025-24123](https://www.federalregister.gov/documents/2025/12/31/2025-24123), effective 2026-01-01). Under the extension, a real-time, two-way audio-video visit satisfies the in-person requirement for Schedule II-V prescriptions; an audio-only visit suffices only for Schedule III-V medications approved for opioid use disorder. In every case the prescription must be for a legitimate medical purpose, you must be DEA-registered, and the state where the patient is located must permit it. A video visit does not "qualify as in-person"; it is a temporary exception to the in-person rule.

    Two permanent rules took effect on 2025-12-31: one for buprenorphine via telemedicine and one for Veterans Affairs practitioners. The DEA's special-registration proposed rule (January 2025) has not been finalized. Check dea.gov before 2027-01-01; the flexibility ends that day unless it is extended or replaced.

**Also:**
- State rules vary significantly and may be stricter than the federal rule
- Check current DEA guidance

**Safest approach:** In-person exam before controlled substances unless you've verified current exceptions apply.

### Non-Controlled Prescriptions

Generally permitted via telehealth if:
- Established patient relationship (or appropriate new patient eval)
- Adequate assessment via telehealth
- Appropriate for telehealth prescribing
- Documented appropriately

### State Variations

**Some states require:**
- Specific documentation for telehealth prescriptions
- Pharmacy notification of telehealth visit
- Limitations on certain medications

---

## Documentation Requirements

### Telehealth-Specific Documentation

**Document:**
1. Patient location at time of visit
2. Your location
3. Technology used
4. Who else was present (patient's side)
5. Any technical difficulties
6. Consent obtained
7. Assessment limitations (if any)

### Example Documentation

```
Telehealth visit conducted via [Platform] on [Date].
Patient located in [City, State] at time of visit.
Provider located in [City, State].
Video and audio quality adequate.
Patient alone in private setting.
Consent for telehealth previously obtained [Date].
Physical exam limited by telehealth modality; 
vital signs self-reported.
```

---

## Audio-Only (Phone) Visits

### State Variations

**Some states require video:**
- Phone visits may not count as "telehealth"
- May limit what can be done/billed

**Some states permit audio-only:**
- With documentation
- For established patients
- With limitations

### CMS/Medicare

Medicare pays for audio-only telehealth for certain visits through 2027-12-31 ([CMS Telehealth FAQ, updated 2026-02-26](https://www.cms.gov/files/document/telehealth-faq-updated-02-26-2026.pdf)). This is moot if you have opted out of Medicare, as most DPC physicians have; see the [Medicare Opt-Out Guide](medicare-opt-out-guide.md).

### Best Practice

- Use video when possible
- Document why audio-only if needed
- Know your state's rules
- Consider patient preferences vs. legal requirements

---

## Cross-Border Practice

### Patients Who Travel

**Options:**

1. **Don't provide telehealth while out of state**
   - Safest legally
   - Frustrating for patients

2. **Continuity of care exception (if available)**
   - Limited scope
   - Check specific state rules
   - Time-limited

3. **Get licensed in common destination states**
   - IMLC expedites this
   - Cost consideration

4. **Limit care to advice vs. treatment**
   - "Here's what you might discuss with a local doctor"
   - Gray area—document carefully

### Snowbirds and Part-Time Residents

**Common scenario:** Patient lives in your state but winters in Florida.

**Options:**
- Get Florida license
- Limit to in-person when they're in your state
- Hybrid approach (some states, not others)

### International Patients

**Generally:**
- U.S. license doesn't apply overseas
- Major liability concerns
- Country-specific rules
- Most conservative: Don't do it

---

## Platform Selection

### Bootstrap-Friendly Options

| Platform | Cost | HIPAA | Notes |
|----------|------|-------|-------|
| Doxy.me | Free tier | Yes (free-tier BAA covers a solo physician only) | Video only, easy setup |
| Google Meet | $7/user/mo | Yes (with Workspace BAA) | Need Workspace account |
| EMR-integrated | Varies | Usually | Check your EMR |
| Zoom Pro | ~$14-17/user/mo | Yes (self-serve BAA, up to 9 licenses) | Enterprise healthcare tier not required |

### What to Look For

- BAA available and signed
- Encryption (end-to-end preferred)
- Patient-friendly (no app required ideal)
- Documentation integration
- Technical support
- Reliability

### Red Flags

- No BAA offered
- Consumer-grade product
- Data stored overseas
- Unclear privacy policy

---

## Liability Considerations

### Malpractice Coverage

**Verify your policy covers:**
- Telehealth visits
- All states where you practice
- The specific telehealth modality (video, audio, text)

**Some policies require:**
- Notification of telehealth practice
- Endorsement for other states
- Higher premiums for multi-state

### Standard of Care

**Telehealth standard of care:**
- Emerging area
- Generally: same as in-person where possible
- Document limitations appropriately
- Refer for in-person when needed

### Common Liability Risks

1. **Missed diagnosis** due to exam limitations
2. **Failure to refer** for in-person when indicated
3. **Prescribing errors** without adequate assessment
4. **Technology failures** during critical situations
5. **Privacy breaches** through insecure platforms

---

## Compliance Checklist

### Before Launching Telehealth

- [ ] Verify state allows telehealth for your practice type
- [ ] Select HIPAA-compliant platform
- [ ] Sign BAA with platform vendor
- [ ] Update informed consent/membership agreement
- [ ] Confirm malpractice coverage
- [ ] Understand prescribing limitations
- [ ] Train on technology

### For Each Visit

- [ ] Confirm patient location (state)
- [ ] Verify you're licensed in that state
- [ ] Document location of patient and provider
- [ ] Appropriate for telehealth (or refer in-person)
- [ ] Consent verified
- [ ] Document any limitations

### Ongoing

- [ ] Monitor regulatory changes
- [ ] Update consent as rules change
- [ ] Review malpractice annually
- [ ] Consider additional state licenses as practice grows

---

## The Bootstrap Approach

**Start simple:**
1. License in your home state only
2. Telehealth for in-state patients only
3. Free or low-cost HIPAA platform (Doxy.me)
4. Clear consent in membership agreement
5. Grow into multi-state as volume justifies

**Costs:**
- Platform: $0-50/month
- Additional state licenses: $700 one-time IMLC fee plus $35-$895 per state (if needed)
- Malpractice endorsement: Varies

---

## Related Guides

- [HIPAA Compliance Basics](hipaa-compliance-basics.md)
- [Controlled Substances Compliance](controlled-substances-compliance.md)
- [State-Specific Guides](../states/) (check telehealth rules)
- [Technology for DPC](../technology/)

---

## Resources

- **Federation of State Medical Boards:** Telehealth policy by state
- **Center for Connected Health Policy:** State telehealth laws
- **IMLC:** [Interstate Medical Licensure Compact](https://imlcc.com/) (imlcc.com; the .org domain no longer belongs to the Compact)
- **DEA:** Telehealth prescribing guidance at dea.gov

*Sources checked against primary law and agency guidance on 2026-09-22.*

---

!!! note
    This guide is educational content, not legal advice. Telehealth regulations are a moving target. What was true during COVID may not be true now. When in doubt, practice conservatively and verify current rules with your state medical board.

---

*Telehealth is a powerful tool for DPC—it embodies the accessibility DPC promises. But cutting corners on compliance can jeopardize your license. Get the platform right, understand the rules, and document thoroughly.*
