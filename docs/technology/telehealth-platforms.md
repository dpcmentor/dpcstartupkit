# Telehealth Platforms

> **Quick Summary:** Telehealth is a natural fit for DPC—no billing complexity, just clinical appropriateness. Start with free HIPAA-compliant options like Doxy.me, consider EMR-integrated solutions as you grow, and always verify BAA availability before using any platform.

!!! note "About the figures on this page"
    Dollar amounts are estimates unless a source is linked next to them. Prices vary by state, vendor and year; treat them as orders of magnitude and confirm before you spend.

---

## Table of Contents

- [Why Telehealth Matters for DPC](#why-telehealth-matters-for-dpc)
- [Telehealth Platform Categories](#telehealth-platform-categories)
  - [EMR-Integrated Telehealth](#category-1-emr-integrated-telehealth)
  - [Standalone HIPAA-Compliant Platforms](#category-2-standalone-hipaa-compliant-platforms)
  - [Communication Platforms with Video](#category-3-communication-platforms-with-video)
- [Key Features to Evaluate](#key-features-to-evaluate)
- [Cost Considerations](#cost-considerations)
- [HIPAA and Compliance](#hipaa-and-compliance)
- [Implementation Best Practices](#implementation-best-practices)
- [When Telehealth Is Appropriate](#when-telehealth-is-appropriate)
- [Telehealth Consent](#telehealth-consent)
- [Troubleshooting Common Issues](#troubleshooting-common-issues)
- [Checklist](#checklist-telehealth-implementation)

---

## Overview

Telehealth has become an essential component of Direct Primary Care, expanding access and convenience for patients while improving practice efficiency. For DPC physicians, telehealth aligns naturally with the model—you are already being paid for access and care, not individual visit codes.

This guide helps you select and implement telehealth technology that enhances your practice.

## Prerequisites

- EMR selection in progress or completed (see [EMR Selection Guide](emr-selection-guide.md))
- Understanding of your patient demographics and technology comfort
- Awareness of your state's telehealth regulations

---

## Why Telehealth Matters for DPC

### Patient Benefits
- Convenience (no travel, no waiting room)
- Access from anywhere (work, home, travel)
- Reduced time off work
- Care during minor illness without exposure to others
- Regular check-ins without office visit burden

### Practice Benefits
- Schedule flexibility
- Expanded geographic reach (within licensing limits)
- Reduced no-shows
- Efficient follow-ups and chronic care management
- Competitive advantage over traditional practices

### DPC-Specific Advantage
- No billing complexity for video visits
- Include telehealth in membership naturally
- No concern about telehealth reimbursement policies
- Focus on clinical appropriateness, not coverage

---

## Telehealth Platform Categories

### Category 1: EMR-Integrated Telehealth

Video visits built into or tightly integrated with your EMR.

**Examples:**
- [Elation Health](https://www.elationhealth.com/) (built-in)
- [Doxy.me](https://doxy.me/) (integrates with many EMRs)
- [Spruce](https://www.sprucehealth.com/) (communication platform with video)
- [Zoom for Healthcare](https://www.zoom.com/en/industry/healthcare/) (EMR integrations available)

**Pros:**
- Single workflow for in-person and virtual visits
- Documentation in one place
- Scheduling integrated
- Patient portal access

**Cons:**
- Quality depends on EMR vendor
- May cost extra
- Limited customization

**Best for:** Practices wanting simplicity and unified workflow.

---

### Category 2: Standalone HIPAA-Compliant Platforms

Dedicated telehealth platforms used alongside your EMR.

**Examples:**
- [Doxy.me](https://doxy.me/)
- [Zoom for Healthcare](https://www.zoom.com/en/industry/healthcare/)
- [Google Meet](https://meet.google.com/) (with BAA via Google Workspace)
- [Microsoft Teams](https://www.microsoft.com/en-us/microsoft-teams/healthcare-solutions) (with BAA)
- [VSee](https://vsee.com/)
- [Updox](https://www.updox.com/)

**Pros:**
- Often free or low-cost options
- Dedicated video quality
- Platform flexibility
- Can switch without changing EMR

**Cons:**
- Separate system to manage
- Documentation in EMR is manual
- Patient may need separate login
- Scheduling may not integrate

**Best for:** Budget-conscious practices, those with EMRs lacking good built-in telehealth.

---

### Category 3: Communication Platforms with Video

Broader patient communication tools that include video capability.

**Examples:**
- [Spruce Health](https://www.sprucehealth.com/)
- [Klara](https://www.modmed.com/what-we-do/patient-engagement/) (a ModMed product; klara.com now redirects to ModMed's patient-engagement page)
- [OhMD](https://www.ohmd.com/)
- [Luma Health](https://www.lumahealth.io/)

**Pros:**
- Combines messaging, phone, and video
- Often better overall communication workflow
- Patient engagement features
- May include scheduling

**Cons:**
- Video may not be primary focus
- Additional monthly cost
- May overlap with EMR features

**Best for:** Practices prioritizing comprehensive patient communication.

---

## Key Features to Evaluate

### Essential Features

| Feature | Why It Matters |
|---------|----------------|
| **HIPAA compliance** | Legal requirement; BAA must be available |
| **No patient download required** | Reduces friction; browser-based is ideal |
| **Mobile friendly** | Patients often use phones |
| **Waiting room** | Know when patient is ready; prevents awkward joins |
| **Screen sharing** | Show lab results, images, educational materials |
| **Connection quality** | Reliable video and audio |

### Important Features

| Feature | Why It Matters |
|---------|----------------|
| **Recording capability** | Document visits if needed (with consent) |
| **Calendar integration** | Streamline scheduling |
| **Patient notifications** | Reminders before visit |
| **Multiple participants** | Family members, interpreters |
| **EMR integration** | Reduce duplicate work |
| **Bandwidth adaptation** | Works on poor connections |

### Nice-to-Have Features

| Feature | Why It Matters |
|---------|----------------|
| **Virtual background** | Professional appearance from any location |
| **Chat during video** | Send links, share information |
| **Patient intake forms** | Collect information before visit |
| **Custom branding** | Professional appearance with your logo |
| **Analytics** | Track telehealth utilization |

---

## Cost Considerations

### Free Options

**Doxy.me (Free tier):**
- Unlimited visits
- Basic features
- Browser-based
- Limitations on some features

**Google Meet (with Google Workspace):**
- If already paying for Google Workspace (Business or higher)
- BAA available
- Familiar interface for many patients

### Paid Options

| Platform | Typical Cost | Notes |
|----------|--------------|-------|
| Doxy.me paid tiers | Check [doxy.me/pricing](https://doxy.me/pricing) | Free tier's BAA covers a solo physician only; paid tiers add branding and multi-clinician BAA coverage |
| Zoom Pro | ~$14-17/user/month | Self-serve BAA available on accounts with up to 9 licenses; the enterprise healthcare tier is not required ([zoom.com/en/pricing](https://zoom.com/en/pricing), checked 2026-09-24; see [Telehealth Legal Considerations](../compliance-legal/telehealth-legal-considerations.md#platform-requirements)) |
| Spruce | $24-$49/month | Includes messaging ([sprucehealth.com/pricing](https://www.sprucehealth.com/pricing), checked 2026-09-24) |
| Platform add-on to EMR | $0-$100/month | Varies by vendor |

### True Cost Calculation

Consider:
- Monthly subscription
- Per-visit fees (if any)
- BAA fees (some charge)
- Integration costs
- Training time

!!! tip
    For most solo DPC practices, free or low-cost options like Doxy.me are sufficient. Save your budget for other startup needs.

---

## HIPAA and Compliance

### Requirements

**HIPAA compliance requires:**
- Business Associate Agreement (BAA) with vendor
- Encrypted transmission
- Access controls
- Audit capabilities

**Platforms with BAA available:**
- Doxy.me (free tier's BAA covers a solo physician only)
- Zoom Pro (self-serve BAA on accounts up to 9 licenses; enterprise tier not required)
- VSee (all paid plans; not the free VSee Messenger tier)
- Google Workspace (Business tier+)
- Microsoft 365 (Business tier+)
- Most healthcare-specific platforms

See [Telehealth Platform Requirements](../compliance-legal/telehealth-legal-considerations.md#platform-requirements) for the settled facts on these and for what "HIPAA-compliant" does and doesn't mean.

!!! warning
    **Platforms that are NOT HIPAA compliant:**
    - Consumer Zoom (free version)
    - FaceTime (no BAA available)
    - WhatsApp
    - Standard Google Meet (without Workspace BAA)

    Skype was retired on 2025-05-05 and is no longer an option at all, compliant or not.

---

### State Telehealth Regulations

**Research your state's requirements for:**
- Informed consent for telehealth
- Documentation requirements
- Prescribing via telehealth (especially controlled substances)
- Telehealth-originating site requirements
- Out-of-state patient restrictions

**Key considerations:**
- You must be licensed in the state where the patient is physically located at the time of the visit — see [Telehealth Legal Considerations](../compliance-legal/telehealth-legal-considerations.md#the-fundamental-rule) for the rule and the Interstate Medical Licensure Compact
- DEA telemedicine prescribing flexibilities for controlled substances run through 2026-12-31 — see [Telehealth Legal Considerations](../compliance-legal/telehealth-legal-considerations.md#controlled-substances) and [Controlled Substances Compliance](../compliance-legal/controlled-substances-compliance.md)
- Some states require specific telehealth consent
- Interstate telehealth compacts may expand options

**Resources:**
- State medical board website
- [Federation of State Medical Boards](https://www.fsmb.org/)
- [Center for Connected Health Policy](https://www.cchpca.org/)

---

## Implementation Best Practices

### Technical Setup

**Your setup needs:**
- Reliable high-speed internet (minimum 10 Mbps up/down)
- Quality webcam (built-in laptop is usually fine)
- Good microphone (headset or dedicated mic recommended)
- Adequate lighting (face the light source)
- Professional background (or virtual background)
- Backup plan (phone number for audio if video fails)

**Test your setup:**
- Video quality check
- Audio clarity test
- Lighting assessment
- Background review
- Connection speed test

---

### Workflow Integration

**Before visit:**
- Patient receives confirmation with video link
- Reminder sent (1 day and 1 hour before)
- Patient completes any pre-visit questionnaire
- Technical requirements communicated

**During visit:**
- Physician joins from professional setting
- Verify patient identity and location
- Confirm patient consent for telehealth
- Conduct visit
- Document appropriately

**After visit:**
- Summary provided to patient
- Prescriptions sent electronically
- Follow-up scheduled if needed
- Documentation completed

---

### Patient Communication

**Educate patients on:**
- How to access video visit
- Technical requirements (browser, device)
- What to have ready (medication list, vitals if possible)
- Privacy considerations (private location)
- What to do if technology fails

**Sample Patient Instructions:**

> **For Your Video Visit:**
> 1. Use the link sent to your email/text 5 minutes before your appointment
> 2. Use Chrome or Safari browser (no download needed)
> 3. Allow camera and microphone access when prompted
> 4. Find a private, well-lit location
> 5. Have your medication bottles nearby
> 6. If technology fails, we'll call you at [phone number]

---

## When Telehealth Is Appropriate

### Good Telehealth Use Cases

| Category | Examples |
|----------|----------|
| **Follow-ups** | Chronic disease check-ins, medication reviews, lab result discussions |
| **Acute minor illness** | URI symptoms, UTI symptoms, rashes (with photos), pink eye |
| **Mental health** | Anxiety/depression follow-ups, counseling |
| **Administrative** | Care planning, forms review, referral discussions |
| **Triage** | Determine if in-person visit needed |
| **Convenience** | Patients traveling, mobility limited, time constrained |

### When In-Person Is Better

| Situation | Why |
|-----------|-----|
| **Physical exam required** | Auscultation, palpation, detailed skin exam |
| **Procedures** | Anything hands-on |
| **New complex symptoms** | Need full evaluation |
| **Patient preference** | Some patients prefer in-person |
| **Technology barriers** | Patient cannot manage video |
| **Sensitive conversations** | Sometimes better in person |

### DPC Flexibility

Unlike fee-for-service, DPC allows you to choose the right modality without financial considerations:
- No pressure to do video for billing
- No pressure to bring in for billing
- Choose based solely on clinical appropriateness

---

## Telehealth Consent

See [Informed Consent for Telehealth](../compliance-legal/telehealth-legal-considerations.md#informed-consent-for-telehealth) for the full list of elements state boards expect; the summary below is a starting point, not the complete requirement.

### Recommended Elements

**Document patient acknowledgment of:**
- Understanding of telehealth vs. in-person care
- Technology requirements and limitations
- Privacy considerations
- Right to refuse telehealth
- Emergency protocols
- Recording policies (if applicable)

**Options:**
- Signed consent form (annual or per-visit)
- Verbal consent documented in chart
- Included in membership agreement

**Sample Language:**
> I understand that telehealth involves the use of electronic communication to enable physicians to share individual patient medical information for the purpose of improving patient care. I understand that telehealth is not appropriate for emergencies and that I should call 911 or go to the nearest emergency room if I experience a medical emergency.

---

## Measuring Success

### Metrics to Track

| Metric | Target |
|--------|--------|
| Telehealth utilization rate | 15-30% of visits (varies by practice) |
| Patient satisfaction | Survey feedback |
| Technical failure rate | <5% of visits |
| No-show rate (telehealth vs. in-person) | Should be lower for telehealth |
| Time efficiency | Visit duration comparison |

### Patient Feedback

Periodically ask:
- Was telehealth convenient?
- Any technical difficulties?
- Would you use it again?
- What could be improved?

---

## Troubleshooting Common Issues

### Technical Problems

| Issue | Solutions |
|-------|-----------|
| Poor video quality | Check internet speed; reduce video resolution; use wired connection |
| Audio issues | Use headphones; check microphone settings; move closer to mic |
| Patient cannot connect | Send new link; try different browser; switch to phone |
| Echo/feedback | One party should mute; use headphones |
| Connection drops | Have phone backup; reconnect or reschedule |

### Clinical Challenges

| Challenge | Approach |
|-----------|----------|
| Need physical exam | Schedule in-person follow-up; guide patient self-exam |
| Patient in unsafe location | Offer to reschedule; express concern; document |
| Patient distracted | Politely ask for attention; reschedule if needed |
| Difficulty visualizing | Request photos before visit; use good lighting |

---

## Checklist: Telehealth Implementation

### Selection
- [ ] Review EMR's built-in telehealth options
- [ ] Evaluate standalone platform options
- [ ] Compare costs and features
- [ ] Verify HIPAA compliance and BAA availability
- [ ] Test platforms with sample calls
- [ ] Make selection

### Setup
- [ ] Sign BAA with telehealth vendor
- [ ] Configure platform settings
- [ ] Set up scheduling workflow
- [ ] Create patient instructions
- [ ] Prepare consent documentation
- [ ] Test technical setup (camera, mic, lighting, connection)

### Implementation
- [ ] Train on platform use
- [ ] Create documentation templates
- [ ] Develop patient communication materials
- [ ] Integrate with scheduling system
- [ ] Establish backup protocols

### Launch
- [ ] Pilot with select patients
- [ ] Gather feedback
- [ ] Adjust workflow as needed
- [ ] Expand to full patient panel
- [ ] Monitor utilization and satisfaction

---

## Resources

- [Telehealth Legal Considerations](../compliance-legal/telehealth-legal-considerations.md) - Licensure, DEA prescribing rules and BAA requirements
- [Center for Connected Health Policy](https://www.cchpca.org/) - State telehealth laws
- [HHS Telehealth Resources](https://telehealth.hhs.gov/)
- [Federation of State Medical Boards](https://www.fsmb.org/) - Licensing information
- Your EMR vendor's telehealth documentation

*Read through and figures checked on 2026-09-23.*

!!! warning "Educational Content Only"
    **This is educational content, not legal or financial advice.**

    - Regulations vary by state and change over time
    - Always consult a healthcare attorney for legal matters
    - Always consult an accountant for tax and financial matters
    - Verify current requirements with official sources

---

## Next Steps

After implementing telehealth:
- [Practice Website Essentials](practice-website-essentials.md) - Online presence for patient acquisition
- [Patient Communication Tools](patient-communication-tools.md) - Comprehensive communication strategy
- [Daily Workflow Optimization](../operations/daily-workflow-optimization.md) - Integrate telehealth into workflow
