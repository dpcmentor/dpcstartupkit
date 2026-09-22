# Incident Response Plan

## Overview

Security incidents and breaches can happen to any practice. Having a plan before something happens ensures you respond appropriately, minimize harm, and meet legal requirements. This guide covers preparing for and responding to privacy and security incidents.

## Prerequisites

- Understanding of HIPAA basics (see [HIPAA Compliance Basics](hipaa-compliance-basics.md))
- Privacy practices established (see [Privacy Practices Guide](privacy-practices-guide.md))
- Contact information for key resources (attorney, IT support if applicable)

---

## Why You Need a Plan

### Legal Requirements

HIPAA requires:
- Investigation of potential breaches
- Breach notification when required
- Documentation of incidents and responses

### Practical Benefits

- Clear steps reduce panic during crisis
- Faster response minimizes harm
- Proper documentation protects you
- Demonstrates compliance effort

---

## Starting Lean: Incident Response by Stage

### Stage 1: Just Starting (0-25 Patients)

**Essential preparation:**
- Know what constitutes a breach
- Have basic response steps documented
- Know who to contact (attorney, HHS)
- Document any incidents

**Reality:** With simple operations, incident response can be simple. But you still need a plan.

---

### Stage 2: Growing (25-75 Patients)

**Add:**
- Written incident response policy
- Staff training (if applicable)
- Vendor incident procedures
- Regular security reviews

---

### Stage 3: Established (75+ Patients)

**Systematize:**
- Comprehensive incident response plan
- Regular testing/drills
- Incident tracking system
- Continuous improvement process

---

## Understanding Incidents and Breaches

### What Is a Security Incident?

Any attempted or successful:
- Unauthorized access to PHI
- Unauthorized use of PHI
- Unauthorized disclosure of PHI
- Compromise of security systems

### What Is a Breach?

A breach is an incident where:
- There is unauthorized acquisition, access, use, or disclosure of PHI
- That compromises the security or privacy of the PHI

### The Breach Presumption

**HIPAA presumes any improper access/disclosure is a breach** unless you can demonstrate low probability of PHI compromise through risk assessment.

### Not a Breach If:

1. **Unintentional, good faith access** by workforce member acting in scope
2. **Inadvertent disclosure** within organization to authorized person
3. **Recipient couldn't retain information** (e.g., wrong fax number but not received)

---

## Types of Incidents

### Common Incident Types in Small Practices

| Incident Type | Example |
|--------------|---------|
| **Lost/stolen device** | Laptop with patient data stolen |
| **Unauthorized access** | Staff accessing records without need |
| **Misdirected information** | Fax/email to wrong recipient |
| **Hacking/malware** | Ransomware, phishing attack |
| **Improper disposal** | Records in trash instead of shredded |
| **Verbal disclosure** | Discussing patient in public area |
| **Vendor breach** | Your EMR vendor reports breach |

### Risk Levels

**High risk:**
- Lost/stolen unencrypted device with PHI
- Ransomware attack
- Intentional unauthorized access/disclosure

**Moderate risk:**
- Email sent to wrong person
- Records accessed without authorization
- Improper disposal discovered

**Lower risk:**
- Failed phishing attempt (blocked)
- Brief, inadvertent exposure
- Quickly recovered misdirected information

---

## Incident Response Steps

### Step 1: Contain

**Immediate actions:**
- Stop ongoing unauthorized access
- Secure compromised systems
- Preserve evidence
- Don't delete or alter evidence

**Examples:**
- Change compromised passwords
- Disable compromised accounts
- Isolate infected computers
- Recover misdirected documents

### Step 2: Assess

**Investigate:**
- What happened?
- When did it happen?
- What PHI was involved?
- How many patients affected?
- Who was responsible?
- How was it discovered?

**Document everything.**

### Step 3: Analyze

**Risk Assessment:**

HIPAA requires evaluating these factors:
1. **Nature and extent of PHI involved**
   - What types of identifiers?
   - Financial information? Clinical information?

2. **Unauthorized person who accessed/received PHI**
   - Who was it?
   - Are they obligated to protect PHI?

3. **Whether PHI was actually acquired or viewed**
   - Was it just exposed or actually accessed?

4. **Extent to which risk has been mitigated**
   - Was information retrieved?
   - Was recipient trustworthy?

**Determine:** Low probability of compromise, or breach requiring notification?

### Step 4: Notify (If Required)

**If breach confirmed:**
- Notify affected individuals
- Notify HHS
- Notify prominent media outlets serving the state or jurisdiction, if the breach involves more than 500 residents of that state or jurisdiction

**Timelines:**
- Individual notification: Without unreasonable delay, and no later than 60 calendar days after discovery ([45 CFR 164.404](https://www.ecfr.gov/current/title-45/section-164.404)). A breach is treated as discovered on the first day it is known, or by exercising reasonable diligence would have been known, to anyone in your workforce or any agent other than the person who committed it (164.404(a)(2)). The clock does not wait for your investigation to finish.
- HHS notification: Within 60 days (or annual log if fewer than 500)
- Media notification: Within 60 days, if more than 500 residents of a state or jurisdiction are affected ([45 CFR 164.406(a)](https://www.ecfr.gov/current/title-45/section-164.406))

### Step 5: Document

**Record:**
- Description of incident
- Date discovered
- Investigation conducted
- Risk assessment
- Determination (breach or not)
- Notifications made
- Corrective actions

### Step 6: Remediate

**Prevent recurrence:**
- Address root cause
- Update policies if needed
- Additional training
- Technology improvements
- Ongoing monitoring

---

## Breach Notification Requirements

### Notifying Individuals

**Content required** ([45 CFR 164.404(c)(1)](https://www.ecfr.gov/current/title-45/section-164.404)):
- Brief description of what happened
- Date of the breach and date of discovery (if known)
- Types of PHI involved
- Steps individuals should take to protect themselves
- What you're doing to investigate, mitigate harm and prevent recurrence
- Contact procedures for questions, which must include a toll-free telephone number, an email address, a website or a postal address

**Method:**
- Written notice by first-class mail
- Email if individual has agreed to electronic notice
- Substitute notice if contact information is insufficient or out of date (164.404(d)(2)): for fewer than 10 individuals, an alternative written notice, a telephone call or other means; for 10 or more, a conspicuous posting on your website home page for 90 days or notice in major print or broadcast media where the affected individuals likely reside, plus a toll-free number that stays active for at least 90 days

### Sample Individual Notification Letter

> [Date]
>
> [Patient Name]
> [Address]
>
> Dear [Patient Name]:
>
> We are writing to inform you of an incident that may have affected the security of some of your personal health information.
>
> **What Happened:**
> On [date of discovery], we discovered that [brief description of incident—e.g., "a laptop containing patient information was stolen from our office"] on or about [date of breach, if known].
>
> **What Information Was Involved:**
> The information that may have been affected includes [list types of information—e.g., "your name, date of birth, and medical record information"].
>
> **What We Are Doing:**
> [Describe steps taken—e.g., "We have reported the theft to law enforcement and are reviewing our security procedures to prevent future incidents."]
>
> **What You Can Do:**
> We recommend that you [specific recommendations—e.g., "review statements from your health insurer for any services you did not receive" or "consider placing a fraud alert on your credit file if financial information was involved"].
>
> **For More Information:**
> If you have questions, please contact [name] at [toll-free phone number] or [email address, website or postal address].
>
> We sincerely apologize for any concern or inconvenience this may cause.
>
> Sincerely,
> [Your Name]
> [Practice Name]

### Notifying HHS

**Breaches affecting 500+ individuals:**
- Notify HHS within 60 days
- Use HHS online breach portal

**Breaches affecting fewer than 500:**
- Log the breach
- Submit annual report to HHS
- Due within 60 days of calendar year end

**HHS Breach Portal:** [https://ocrportal.hhs.gov/ocr/breach/wizard_breach.jsf](https://ocrportal.hhs.gov/ocr/breach/wizard_breach.jsf) (instructions at [hhs.gov breach reporting](https://www.hhs.gov/hipaa/for-professionals/breach-notification/breach-reporting/index.html))

### State Law and Insurer

HIPAA is not the only notice obligation:

- **State breach-notification laws.** All 50 states and the District of Columbia have one. Some set deadlines shorter than HIPAA's 60 days (30 days in several states) and some require notice to the state attorney general. Not every state exempts HIPAA covered entities, so check your state's statute as well.
- **Law-enforcement delay.** If a law-enforcement official tells you that notice would impede a criminal investigation or damage national security, you may delay notification for the period stated in a written request, or for up to 30 days after an oral request that you document ([45 CFR 164.412](https://www.ecfr.gov/current/title-45/section-164.412)).
- **Burden of proof.** You must be able to demonstrate that all required notifications were made, or that the incident did not constitute a breach ([45 CFR 164.414(b)](https://www.ecfr.gov/current/title-45/section-164.414)). Keep the incident report, risk assessment and copies of every notice for 6 years ([45 CFR 164.530(j)](https://www.ecfr.gov/current/title-45/section-164.530)).
- **Cyber insurer.** If you carry cyber-liability coverage, notify the insurer as and when your policy requires. Read the policy's notice clause now, not during an incident.

---

## Common Incident Scenarios

### Scenario 1: Lost Laptop

**Situation:** Your laptop with patient records is stolen from your car.

**Response:**
1. **Contain:** Report to police; change passwords; remotely wipe if possible
2. **Assess:** What PHI was on device? How many patients? Was it encrypted?
3. **Analyze:** If the device was encrypted in a way that meets HHS guidance (NIST-validated encryption) and the key was not stored on or with the device, the PHI is not "unsecured" and this is not a reportable breach ([45 CFR 164.402](https://www.ecfr.gov/current/title-45/section-164.402)). If unencrypted, or the key was with the device—likely breach.
4. **Notify:** If breach, notify affected patients and HHS
5. **Document:** Record everything
6. **Remediate:** Encrypt all devices; don't leave in car

### Scenario 2: Misdirected Email

**Situation:** You accidentally email a patient's lab results to a different patient.

**Response:**
1. **Contain:** Contact recipient immediately; request deletion; confirm deletion
2. **Assess:** What was disclosed? One patient affected; recipient is also a patient
3. **Analyze:** Was PHI actually viewed? Is it likely recipient retained it?
4. **Notify:** Generally requires notification to affected patient; HHS (annual log if <500)
5. **Document:** Record incident and response
6. **Remediate:** Implement verification steps before sending

### Scenario 3: Ransomware Attack

**Situation:** You receive ransomware notice saying your files are encrypted.

**Response:**
1. **Contain:** Disconnect from network; do not pay the ransom; contact an IT professional and law enforcement
2. **Assess:** What systems affected? Was PHI accessed (not just encrypted)? Backups available?
3. **Analyze:** HHS treats ransomware encryption of ePHI as a presumed breach unless you can show a low probability of compromise ([HHS OCR Fact Sheet: Ransomware and HIPAA](https://www.hhs.gov/sites/default/files/RansomwareFactSheet.pdf))
4. **Notify:** Likely need to notify patients and HHS
5. **Document:** Record everything; involve law enforcement
6. **Remediate:** Restore from backup; improve security; enhance training

### Scenario 4: Employee Snooping

**Situation:** You discover staff member accessed records of patients they weren't treating.

**Response:**
1. **Contain:** Terminate access; potential employment action
2. **Assess:** What records? How many patients? What was done with information?
3. **Analyze:** Was PHI disclosed externally? Assess risk.
4. **Notify:** Depends on whether PHI was further disclosed and risk assessment
5. **Document:** Record investigation and actions
6. **Remediate:** Training; access controls; monitoring

### Scenario 5: Vendor Breach

**Situation:** Your EMR vendor notifies you of a data breach affecting your patients.

**Response:**
1. **Contain:** Vendor should be handling their containment
2. **Assess:** Get information from vendor: What data? Which patients? What's vendor doing?
3. **Analyze:** A business associate must notify you within 60 calendar days of discovering a breach ([45 CFR 164.410(b)](https://www.ecfr.gov/current/title-45/section-164.410)), and its discovery date starts your clock. Notifying patients, HHS and (if required) the media remains your obligation as the covered entity unless your BAA expressly delegates it to the vendor.
4. **Notify:** Notify patients yourself unless the BAA delegates it; coordinate with the vendor on content and timing
5. **Document:** Keep all vendor communications
6. **Remediate:** Evaluate vendor relationship; ensure they've addressed issue

---

## Documentation Template

### Incident Report Form

**Incident Information:**
- Date/time discovered: ____________
- Date/time occurred (if known): ____________
- How discovered: ____________
- Description of incident: ____________

**PHI Involved:**
- Types of information: ____________
- Number of individuals affected: ____________
- Were records encrypted? ____________

**Investigation:**
- Investigation conducted by: ____________
- Investigation date(s): ____________
- Findings: ____________

**Risk Assessment:**
- Nature and extent of PHI: ____________
- Unauthorized person who accessed: ____________
- Whether PHI actually acquired/viewed: ____________
- Risk mitigation: ____________
- **Determination:** [ ] Breach [ ] Not a breach

**Notifications (if breach):**
- Individuals notified: Date: ____________ Method: ____________
- HHS notified: Date: ____________
- Media notified (if more than 500 residents of a state or jurisdiction): Date: ____________

**Corrective Actions:**
- Actions taken: ____________
- Date completed: ____________
- Follow-up needed: ____________

**Signature:** ____________ Date: ____________

---

## Key Contacts

### Maintain List Of:

- **Attorney** (healthcare/HIPAA experience)
- **IT support** (for technical incidents)
- **Insurance** (cyber liability if you have it)
- **HHS OCR** (breach reporting)
- **Local law enforcement** (for theft/criminal matters)

### HHS Office for Civil Rights

- Breach portal: https://ocrportal.hhs.gov/ocr/breach/wizard_breach.jsf
- Breach reporting instructions: https://www.hhs.gov/hipaa/for-professionals/breach-notification/breach-reporting/index.html
- Phone: 1-800-368-1019; TDD: 1-800-537-7697

---

## Prevention

### Best Practices

**Technical:**
- Encrypt all devices with PHI
- Strong passwords and multi-factor authentication
- Regular software updates
- Antivirus/antimalware
- Secure backup

**Administrative:**
- Workforce training
- Access based on need
- Regular access reviews
- Clear policies

**Physical:**
- Secure devices
- Lock offices/storage
- Proper disposal
- Visitor management

---

## Checklist: Incident Response Preparedness

### Plan Development
- [ ] Written incident response plan
- [ ] Risk assessment procedure documented
- [ ] Notification procedures and templates
- [ ] Contact list maintained
- [ ] Documentation forms ready

### Prevention
- [ ] Encryption on all devices
- [ ] Strong passwords/authentication
- [ ] Regular security updates
- [ ] Workforce training completed
- [ ] Access controls in place

### Response Capability
- [ ] Know how to identify incidents
- [ ] Know who to contact
- [ ] Know breach notification requirements
- [ ] Documentation system ready
- [ ] Tested response procedures

---

## Resources

- [HIPAA Compliance Basics](hipaa-compliance-basics.md) - Foundation
- [Privacy Practices Guide](privacy-practices-guide.md) - Privacy framework
- [BAA Requirements](baa-requirements.md) - Vendor obligations
- [HHS Breach Notification Rule guidance](https://www.hhs.gov/hipaa/for-professionals/breach-notification/breach-reporting/index.html)
- [HHS OCR Breach Portal](https://ocrportal.hhs.gov/ocr/breach/wizard_breach.jsf)

*This guide is educational content, not legal advice.*

*Sources checked against primary law and agency guidance on 2026-09-22.*

---

## Next Steps

After establishing incident response plan:
- [Required Documentation](required-documentation.md) - Overall documentation
- Regular plan review and testing
