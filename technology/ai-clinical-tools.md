# AI Ambient Scribes and Clinical Tools

> **Quick Summary:** AI-powered documentation tools can dramatically reduce the time you spend on charting. This guide introduces commercial ambient scribe solutions and self-hosted AI options for DPC physicians who want to explore cutting-edge technology while maintaining patient data privacy.

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

- **Reducing charting time** — Some physicians report saving 1–2 hours per day
- **Improving note quality** — Consistent, comprehensive documentation
- **Enabling presence** — Focus on the patient, not the keyboard
- **Decreasing burnout** — Less after-hours documentation

> [!TIP]
> You don't have to choose between technology and the personal touch. AI tools handle the documentation while you maintain the human connection that drew you to DPC.

---

## Commercial Ambient Scribe Solutions

These services listen to your patient encounters (with consent) and generate clinical documentation automatically. Most integrate with common EMRs.

### Overview

| Service | Key Features | Pricing Model |
|---------|--------------|---------------|
| **Doximity GPT / Scribe** | Integrated with Doximity platform; familiar interface for many physicians | Subscription |
| **Freed.ai** | Focus on ease of use; minimal training required | Subscription |
| **Heidi.ai** | Clean interface; strong privacy focus | Subscription |
| **Mobius.MD** | Designed for primary care workflows | Subscription |
| **Empathia.ai** | Emphasis on clinical reasoning support | Subscription |

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

> [!NOTE]
> Pricing and features change frequently. Contact vendors directly for current information. This list is not exhaustive — new services launch regularly.

### Getting Started with Commercial Tools

1. **Request demos** — Most services offer free trials
2. **Review the BAA** — Ensure HIPAA compliance
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

> [!TIP]
> Don't let the technical aspects intimidate you. Modern self-hosted AI tools have become remarkably user-friendly. If you can install an app, you can likely run these tools.

### Key Tools to Know

#### Ollama

**What it is:** A simple way to run large language models (LLMs) locally on your computer.

**Why it matters:** Ollama lets you run AI models similar to ChatGPT entirely on your own machine. Nothing is sent to external servers.

**Hardware requirements:**
- Works on Mac, Windows, or Linux
- Minimum 8GB RAM (16GB+ recommended)
- Models range from small (works on most laptops) to large (needs powerful hardware)

**Getting started:**
1. Download from [ollama.ai](https://ollama.ai)
2. Install like any other application
3. Open terminal and run: `ollama run llama3`
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

**Notes:** Free for personal use; straightforward installation

#### OrbStack (Mac only)

**What it is:** A lightweight, fast alternative to Docker Desktop for Mac.

**Best for:** Mac users who want better performance

**Notes:** More resource-efficient than Docker Desktop; excellent user experience

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

1. **Install Ollama** — Download and install from ollama.ai
2. **Run a model** — Open your terminal and type: `ollama run llama3`
3. **Try it out** — Ask it to summarize a clinical scenario (no real patient data yet!)

That's it. You now have a local AI running on your machine.

### Adding a Nice Interface

To get a ChatGPT-like interface:

1. **Install Docker Desktop** (or OrbStack on Mac)
2. **Run Open WebUI** — One command in terminal:
   ```
   docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main
   ```
3. **Open your browser** — Go to http://localhost:3000
4. **Connect to Ollama** — Open WebUI will detect it automatically

### Building Your Skills

| Level | Focus | Time Investment |
|-------|-------|-----------------|
| **Beginner** | Install Ollama, try different models | 1–2 hours |
| **Intermediate** | Add Open WebUI, customize settings | Half day |
| **Advanced** | Set up Proxmox, run 24/7 services | Ongoing project |

> [!NOTE]
> You don't need to become a system administrator. Many physicians stop at the beginner or intermediate level and are perfectly happy. Go as far as interests you.

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

> [!CAUTION]
> Never use patient data to test new tools. Create fictional scenarios for learning and testing. Only use real patient data once your workflows and compliance measures are established.

---

## Making Your Choice

### Commercial Solutions Are Best If You:

- Want minimal setup and maintenance
- Prefer vendor support and updates
- Don't mind subscription costs
- Are comfortable with HIPAA-compliant cloud services

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

> [!NOTE]
> External links are provided for reference. Verify current information directly with these sources.

**Self-Hosted Tools:**
- [Ollama](https://ollama.ai) — Local AI model runner
- [Open WebUI](https://openwebui.com) — Web interface for local AI
- [Docker](https://docker.com) — Container platform
- [OrbStack](https://orbstack.dev) — Docker alternative for Mac
- [Proxmox VE](https://proxmox.com) — Virtualization platform

**Learning Resources:**
- Search for "Ollama tutorial" or "Open WebUI setup" for current guides
- DPC community forums often discuss technology implementations
- Reddit communities: r/selfhosted, r/LocalLLaMA

---

*Technology moves fast. This guide provides a starting point — explore, experiment, and find what works for your practice.*
