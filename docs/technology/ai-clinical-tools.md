# AI Ambient Scribes and Clinical Tools

> **Quick Summary:** AI-powered documentation tools can reduce the time you spend on charting and the burden of after-hours notes. This guide introduces commercial ambient scribe solutions and self-hosted AI options for DPC physicians who want to explore cutting-edge technology while maintaining patient data privacy.

---

## Table of Contents

- [Why AI Documentation Tools Matter for DPC](#why-ai-documentation-tools-matter-for-dpc)
- [Commercial Ambient Scribe Solutions](#commercial-ambient-scribe-solutions)
- [Self-Hosted AI Options](#self-hosted-ai-options)
- [Getting Started with Self-Hosting](#getting-started-with-self-hosting)
- [Privacy and Compliance Considerations](#privacy-and-compliance-considerations)
- [Making Your Choice](#making-your-choice)

---

## Why AI Documentation Tools Matter for DPC

One of DPC's greatest benefits is the ability to spend more time with patients and less time on administrative burden. AI documentation tools can amplify this advantage by:

- **Reducing charting time** — The only randomised trial to date ([Lukac et al., NEJM AI 2025;2(12)](https://pubmed.ncbi.nlm.nih.gov/41497288/)) found a modest, measured effect: physicians using Nabla spent 9.5% less time in notes than controls (P=0.02), while the DAX group's 1.7% reduction was not statistically significant; well-being improved modestly. Reports of saving one to two hours a day are self-reported, not measured
- **Improving note quality** — Consistent, comprehensive documentation
- **Enabling presence** — Focus on the patient, not the keyboard
- **Decreasing burnout** — Less after-hours documentation

!!! tip
    You don't have to choose between technology and the personal touch. AI tools handle the documentation while you maintain the human connection that drew you to DPC.

---

## Commercial Ambient Scribe Solutions

These services listen to your patient encounters (with consent) and generate clinical documentation automatically. Most integrate with common EMRs.

### Overview

!!! note "About the figures on this page"
    Dollar amounts are estimates unless a source is linked next to them. Prices vary by state, vendor and year; treat them as orders of magnitude and confirm before you spend. Vendor pricing below was read from each vendor's pricing page on 2026-09-22; it changes without notice.

| Service | Key Features | Pricing Model |
|---------|--------------|---------------|
| **Doximity Scribe** | Integrated with Doximity platform; familiar interface for many physicians | [Free for verified US clinicians](https://www.doximity.com/clinicians/scribe) |
| **Freed** | Focus on ease of use; minimal training required | [$39–$119 per month](https://www.getfreed.ai/pricing); BAA offered on the Groups plan, so confirm a BAA is available on your tier |
| **Heidi** | Clean interface; strong privacy focus | [Free tier plus paid plans](https://www.heidihealth.com/pricing) |
| **Mobius MD** | Dictation plus ambient notes; multi-specialty | Subscription |
| **Empathia** | Scribe plus intake and administrative automation | Subscription |

### What to Evaluate

When considering a commercial solution, assess:

- [ ] **EMR Integration** — Does it work with your EMR?
- [ ] **Workflow Fit** — How does it integrate into your visit flow?
- [ ] **Learning Curve** — How long to become proficient?
- [ ] **Accuracy** — How often do you need to edit the output?
- [ ] **Cost** — What's the monthly/annual subscription?
- [ ] **BAA Availability** — Will they sign a Business Associate Agreement?
- [ ] **Data Handling** — Where is data processed and stored?
- [ ] **Patient Consent** — How do they recommend handling consent?

!!! note
    Pricing and features change frequently. Contact vendors directly for current information. This list is not exhaustive — new services launch regularly.

### Getting Started with Commercial Tools

1. **Request demos** — Most services offer free trials
2. **Review the BAA** — Confirm the vendor will sign a Business Associate Agreement and can document its safeguards. HIPAA has no certification programme, so a "HIPAA-compliant" badge on a website is the vendor's own assertion, not a credential
3. **Test with simulated encounters** — Practice before going live
4. **Develop consent language** — Inform patients about recording
5. **Start small** — Use with a few visits before full adoption

---

## Self-Hosted AI Options

For physicians who want maximum control over their data — or who simply enjoy technology — self-hosted AI tools offer an alternative to cloud-based services.

### What Does "Self-Hosted" Mean?

Self-hosted AI means running the AI software on your own hardware (a laptop, desktop, or server) rather than sending data to a third-party cloud service. Your data never leaves your control.

**Benefits:**

- Complete data privacy — nothing leaves your network
- No subscription fees (after initial setup)
- Customization potential
- Independence from vendor changes

**Trade-offs:**

- Requires technical setup (though it's getting easier)
- You manage updates and maintenance
- May require decent hardware for best performance
- No vendor support

!!! tip
    Don't let the technical aspects intimidate you. Modern self-hosted AI tools have become remarkably user-friendly. If you can install an app, you can likely run these tools.

### Key Tools to Know

#### Ollama

**What it is:** A simple way to run large language models (LLMs) locally on your computer.

**Why it matters:** Ollama lets you run AI models similar to ChatGPT entirely on your own machine. Nothing is sent to external servers.

**Hardware requirements:**
- Works on Mac, Windows, or Linux
- Minimum 8GB RAM (16GB+ recommended) as a rule of thumb; the vendor publishes no fixed requirement, and what you need depends on the model you run
- Models range from small (works on most laptops) to large (needs powerful hardware)

**Getting started:**
1. Download from [ollama.com](https://ollama.com/)
2. Install like any other application
3. Open terminal and run: `ollama run llama3.2` (model names change often; check the [model library](https://ollama.com/library) for the current recommended small model)
4. Start chatting with the AI locally

#### Open WebUI

**What it is:** A user-friendly web interface for interacting with local AI models.

**Why it matters:** Open WebUI provides a ChatGPT-like interface that connects to your local Ollama installation. You get a familiar chat experience without sending data to external servers.

**How it works with Ollama:**
- Ollama runs the AI models
- Open WebUI provides the interface
- Together they create a private AI assistant

### Running Tools: Docker Options

To run Open WebUI (and many other self-hosted applications), you'll use containerization software. Think of it as a standardized way to install and run applications.

#### Docker Desktop

**What it is:** The standard tool for running containerized applications.

**Best for:** Getting started, familiar platform

**Notes:** [Free for personal use and for businesses with fewer than 250 employees and under $10 million in annual revenue](https://docs.docker.com/subscription/desktop-license/); larger organisations need a paid subscription. Straightforward installation

#### OrbStack (Mac only)

**What it is:** A lightweight, fast alternative to Docker Desktop for Mac.

**Best for:** Mac users who want better performance

**Notes:** More resource-efficient than Docker Desktop; excellent user experience. Free for personal use; [commercial use is $8 per user per month](https://docs.orbstack.dev/faq), which includes use in a practice

### Advanced: Dedicated Server Options

For physicians who want to go further — perhaps running AI tools 24/7 or exploring more powerful models — dedicated server hardware offers more capability.

#### Proxmox VE

**What it is:** A free, open-source platform for running virtual machines and containers.

**Why consider it:**
- Run multiple services on one machine
- Separate your AI tools from your daily-use computer
- Professional-grade virtualization without the cost

**Best for:** Those comfortable with some system administration, or willing to learn.

#### VPS (Virtual Private Server)

**What it is:** A virtual server you rent from a hosting provider.

**Trade-offs:**
- Data does leave your physical control (though encrypted)
- Requires more technical knowledge
- Monthly hosting costs
- More powerful hardware available than most personal computers

---

## Getting Started with Self-Hosting

### The Simplest Path

If you want to try self-hosted AI with minimal friction:

1. **Install Ollama** — Download and install from [ollama.com](https://ollama.com/)
2. **Run a model** — Open your terminal and type: `ollama run llama3.2` (or whichever small model the Ollama library currently recommends)
3. **Try it out** — Ask it to summarize a clinical scenario (no real patient data yet!)

That's it. You now have a local AI running on your machine.

### Adding a Nice Interface

To get a ChatGPT-like interface:

1. **Install Docker Desktop** (or OrbStack on Mac)
2. **Run Open WebUI** — One command in terminal:
   ```
   docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -e WEBUI_SECRET_KEY=change-me-to-a-long-random-string -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main
   ```
   Replace the secret key with a long random string of your own; it signs login sessions. The current command is in the [Open WebUI quick start](https://docs.openwebui.com/getting-started/quick-start/).
3. **Open your browser** — Go to http://localhost:3000
4. **Connect to Ollama** — Open WebUI will detect it automatically

### Building Your Skills

| Level | Focus | Time Investment |
|-------|-------|-----------------|
| **Beginner** | Install Ollama, try different models | 1–2 hours |
| **Intermediate** | Add Open WebUI, customize settings | Half day |
| **Advanced** | Set up Proxmox, run 24/7 services | Ongoing project |

!!! note
    You don't need to become a system administrator. Many physicians stop at the beginner or intermediate level and are perfectly happy. Go as far as interests you.

---

## Privacy and Compliance Considerations

### Commercial Services

- **Require a signed BAA** — Non-negotiable for HIPAA compliance
- **Understand data flows** — Where is audio/text processed and stored?
- **Review data retention** — How long do they keep your data?
- **Check encryption** — Data should be encrypted in transit and at rest

### Self-Hosted Solutions

- **Keep PHI local** — The main advantage of self-hosting
- **Secure your network** — Basic home network security applies
- **Back up your data** — Local data needs local backups
- **Consider your threat model** — Physical security of your device matters

### Patient Consent

Regardless of the solution you choose:

- **Inform patients** — Let them know you're using AI documentation assistance
- **Document consent** — Include acknowledgment in your intake paperwork
- **Offer opt-out** — Some patients may prefer traditional documentation
- **Be transparent** — Explain what the technology does and doesn't do
- **Get recording consent under your state's wiretap law** — An ambient scribe records the visit; in all-party-consent states every person in the room must agree before you record

An ambient scribe is a documentation tool. It is not FDA-regulated clinical decision support unless it starts generating diagnostic or treatment recommendations, so check what the product actually does before you assume either way.

!!! warning "State AI-disclosure laws"
    A growing number of states require you to tell patients when AI is involved in their care. Check your state before you go live:

    - **California** ([Health and Safety Code 1339.75](https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1339.75.), AB 3030, effective 2025-01-01): patient clinical communications written by generative AI must carry a disclaimer unless a licensed clinician reads and reviews them. A scribe note the physician reviews and signs is exempt; an unreviewed AI-drafted portal message is not.
    - **Texas** ([Health and Safety Code 183.005](https://capitol.texas.gov/tlodocs/89R/billtext/html/SB01188F.htm), SB 1188, effective 2025-09-01): disclose when AI is used in diagnosis or treatment, and a physician must review AI-generated records. Separately, [Business and Commerce Code 552.051(f)](https://capitol.texas.gov/tlodocs/89R/billtext/html/HB00149F.htm) (TRAIGA, HB 149, effective 2026-01-01) requires disclosure to the patient no later than the first service.
    - **Utah** (Title 13, Chapter 77, SB 226 of 2025): disclose the use of generative AI when a patient asks, and proactively in regulated occupations, which include medicine.

    Other states are adding similar rules. Put the disclosure in your intake paperwork and your consent script so it happens by default.

!!! warning "Caution"
    Never use patient data to test new tools. Create fictional scenarios for learning and testing. Only use real patient data once your workflows and compliance measures are established.

---

## Making Your Choice

### Commercial Solutions Are Best If You:

- Want minimal setup and maintenance
- Prefer vendor support and updates
- Don't mind subscription costs
- Are comfortable with cloud vendors that sign a BAA and document their safeguards

### Self-Hosted Solutions Are Best If You:

- Want maximum data privacy
- Enjoy technology and tinkering
- Prefer one-time costs over subscriptions
- Want independence from vendor decisions

### You Can Also Mix Approaches

Many physicians use commercial tools for real-time ambient documentation and self-hosted AI for other tasks like:

- Drafting patient education materials
- Summarizing research articles
- Brainstorming clinical approaches
- Administrative writing

---

## Related Resources

- [EMR Selection Guide](emr-selection-guide.md) — Choosing your core clinical system
- [Telehealth Platforms](telehealth-platforms.md) — Video visit technology
- [Patient Communication Tools](patient-communication-tools.md) — Messaging and communication
- [HIPAA Compliance Basics](../compliance-legal/hipaa-compliance-basics.md) — Understanding your obligations
- [BAA Requirements](../compliance-legal/baa-requirements.md) — Business Associate Agreements

---

## External Resources

!!! note
    External links are provided for reference. Verify current information directly with these sources.

**Self-Hosted Tools:**
- [Ollama](https://ollama.com/) — Local AI model runner
- [Open WebUI](https://openwebui.com) — Web interface for local AI
- [Docker](https://docker.com) — Container platform
- [OrbStack](https://orbstack.dev) — Docker alternative for Mac
- [Proxmox VE](https://proxmox.com) — Virtualization platform

**Learning Resources:**
- Search for "Ollama tutorial" or "Open WebUI setup" for current guides
- DPC community forums often discuss technology implementations
- Reddit communities: r/selfhosted, r/LocalLLaMA

**Evidence and Law:**
- [Lukac et al., NEJM AI 2025;2(12)](https://pubmed.ncbi.nlm.nih.gov/41497288/) — Randomised trial of ambient AI scribes
- [45 CFR 164.502(e) and 164.504(e)](https://www.ecfr.gov/current/title-45/section-164.504) — Business associate requirements
- [BAA Requirements](../compliance-legal/baa-requirements.md) — The kit's BAA guide

!!! warning "Educational Content Only"
    **This is educational content, not legal or financial advice.**

    - Regulations vary by state and change over time
    - Always consult a healthcare attorney for legal matters
    - Always consult an accountant for tax and financial matters
    - Verify current requirements with official sources

*Sources checked against primary law and agency guidance on 2026-09-22.*

---

*Technology moves fast. This guide provides a starting point — explore, experiment, and find what works for your practice.*
