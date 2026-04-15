# CLAUDE.md - Direct Primary Care Startup Kit

## Project Overview

This repository contains guides, templates, and reference documents for physicians starting a Direct Primary Care (DPC) practice. The content serves both physicians with no prior business experience and those transitioning from traditional practice models.

## Repository Structure

Content is organized by topic:

```
/
├── business-formation/      # LLC setup, contracts, legal structure
├── pricing-membership/      # Membership models, pricing strategies
├── technology/              # EMR selection, practice management software
├── marketing/               # Patient acquisition, branding, outreach
├── compliance-legal/        # Regulatory requirements, insurance, HIPAA
├── operations/              # Day-to-day practice management
├── templates/               # Reusable templates and checklists
│   ├── spreadsheets/        # Excel/CSV financial and tracking templates
│   └── documents/           # PDF and document templates
└── resources/               # External links, recommended reading
```

## Writing Guidelines

### Tone and Style

- Use formal, professional language
- Write for clarity and actionability
- Assume readers are intelligent but may lack business/administrative experience
- Define acronyms and industry terms on first use
- Avoid jargon when plain language suffices

### Document Structure

Each guide should follow this structure:

1. **Title** - Clear, descriptive heading
2. **Overview** - Brief summary of what the guide covers and why it matters
3. **Prerequisites** - What the reader should know or have completed first
4. **Content** - Main instructional content with clear headings
5. **Checklist** - Actionable summary checklist (when applicable)
6. **Resources** - Links to external resources, templates, or related guides

### Checklists

Format checklists using GitHub-flavored markdown:

```markdown
## Checklist: [Topic Name]

- [ ] First action item
- [ ] Second action item
- [ ] Third action item
```

#### Making a checklist page interactive

A page can opt into **interactive** checklists — where readers can tick boxes and have that state persist across visits — by adding a single front-matter flag at the very top of the file:

```markdown
---
interactive_checklist: true
---

# My Checklist

- [ ] First action item
- [ ] Second action item
```

When this flag is set:

- Every `- [ ]` task-list item on the page becomes a real, tickable checkbox
- A progress bar and a "Reset this page" button are automatically added at the top of the content
- Checked state is saved to the reader's browser (localStorage) — never transmitted, never seen by anyone else, including the maintainers
- The feature works on mobile with large touch targets and survives into the browser's print view

Guidelines for when to use it:

- **Do** use it on pages that are *actionable checklists* — bootstrap steps, business registration, equipment lists, patient onboarding workflows, pre-launch checklists
- **Don't** use it on general reference or informational pages — even ones that happen to contain a `- [ ]` list inside an example
- **Keep item labels short and action-oriented.** Editing an item's text later will reset any reader's saved state for that specific item (the label text is used to identify the checkbox). Small typo fixes are fine; large rewrites will appear as "unchecked" to returning readers
- `- [ ]` items inside fenced code blocks (like the example above) are **not** activated — MkDocs correctly skips them

See [`ARCHITECTURE.md`](../ARCHITECTURE.md) at the repo root for the implementation details, design decisions, and how to debug the feature.

### Templates

- Store spreadsheet templates in `/templates/spreadsheets/`
- Store PDF templates in `/templates/documents/`
- Include a README in each template folder explaining the purpose of each file
- Provide instructions for template usage within the relevant guide

## File Formats

| Format | Use Case |
|--------|----------|
| Markdown (.md) | Guides, instructional content, checklists |
| PDF (.pdf) | Printable documents, sample contracts, official forms |
| Spreadsheet (.xlsx, .csv) | Financial calculators, tracking sheets, comparison matrices |

## File Naming Conventions

- Use lowercase with hyphens: `business-entity-selection.md`
- Be descriptive: `membership-pricing-calculator.xlsx` not `calculator.xlsx`
- Prefix templates with their type: `template-patient-agreement.pdf`
- Prefix checklists with `checklist-`: `checklist-pre-launch.md`

## Content Guidelines

### For New Physicians (No Business Experience)

- Explain foundational concepts before diving into specifics
- Provide context for why each step matters
- Include estimated timeframes and costs where applicable
- Link to beginner-friendly external resources

### For Transitioning Physicians

- Acknowledge existing clinical expertise
- Focus on what differs from traditional practice
- Address common concerns about leaving employed positions
- Include comparison points with traditional practice models

## Topics to Cover

### Business Formation
- Legal entity selection (LLC, PLLC, S-Corp)
- State registration requirements
- Business banking and financial setup
- Professional liability and business insurance
- Employment agreements and contracts

### Pricing and Membership
- Membership model structures
- Pricing strategy and market research
- Payment processing and billing systems
- Membership agreement templates

### Technology
- EMR/EHR selection criteria
- Practice management software
- Telehealth platforms
- Patient communication tools
- Website and online presence

### Marketing
- Brand development
- Patient acquisition strategies
- Community outreach
- Social media and online marketing
- Referral programs

### Compliance and Legal
- State medical board requirements
- HIPAA compliance for small practices
- Regulatory considerations by state
- Documentation requirements

### Operations
- Office space selection and setup
- Staffing considerations
- Daily workflow and scheduling
- Inventory and supply management
- Patient onboarding processes

## Contributing

When adding new content:

1. Place files in the appropriate topic directory
2. Follow the document structure and naming conventions
3. Update any relevant index or navigation files
4. Ensure all checklists are actionable and complete
5. Test any spreadsheet formulas before committing

---

## Document Review Process (Step-by-Step for GitHub Beginners)

All guides require human review before publication. Progress is tracked at [REVIEW-STATUS.md](https://github.com/dpcmentor/dpcstartupkit/blob/main/REVIEW-STATUS.md).

### Before You Start

You'll need:
- A GitHub account (free at [github.com](https://github.com))
- Access to this repository (request from the maintainer if needed)

### Step 1: Claim a Document to Review

1. Go to the repository: https://github.com/dpcmentor/dpcstartupkit
2. Click on **REVIEW-STATUS.md** to open it
3. Find a document marked "Not Reviewed" that you want to review
4. Click the **pencil icon** (top right of the file content) to edit
5. Change the status from `Not Reviewed` to `In Review`
6. Add your initials in the Reviewer column
7. Scroll down to **"Commit changes"**
8. In the commit message box, type: `Claiming [document name] for review`
9. Click **"Commit changes"**

### Step 2: Review the Document

1. Navigate to the document you claimed (click the link in REVIEW-STATUS.md)
2. Read through the entire document carefully
3. Check for:
   - **Accuracy** — Is the information correct?
   - **Completeness** — Is anything missing?
   - **Clarity** — Is it easy to understand?
   - **Broken links** — Do all links work?
   - **Formatting** — Does it display correctly?

### Step 3: Make Edits (If Needed)

1. While viewing the document, click the **pencil icon** to edit
2. Make your changes directly in the editor
3. Scroll down to **"Commit changes"**
4. In the commit message box, describe your changes briefly:
   - Example: `Fix typo in pricing section`
   - Example: `Update EMR vendor information`
   - Example: `Add missing HIPAA requirement`
5. Click **"Commit changes"**

> **Tip:** Make multiple small commits rather than one large one. This makes it easier to track what changed.

### Step 4: Mark the Document as Reviewed

1. Go back to **REVIEW-STATUS.md**
2. Click the **pencil icon** to edit
3. Find your document's row and update:
   - Change status from `In Review` to `Reviewed`
   - Add today's date (format: YYYY-MM-DD)
   - Add any notes about changes you made
4. Scroll down to **"Commit changes"**
5. In the commit message box, type: `Mark [document name] as reviewed`
6. Click **"Commit changes"**

### Example: Completed Review Entry

**Before:**
```
| [choosing-legal-entity.md](...) | Not Reviewed | | | |
```

**After:**
```
| [choosing-legal-entity.md](...) | Reviewed | JF | 2026-01-11 | Updated S-Corp tax info, added state fee disclaimer |
```

### Quick Reference: GitHub Edit Button Location

```
┌─────────────────────────────────────────────────────────┐
│  📄 choosing-legal-entity.md                            │
│                                                         │
│  [Raw] [Blame] [History]              [✏️ pencil icon]  │  ← Click this to edit
│                                                         │
│  # Choosing a Legal Entity                              │
│  ...                                                    │
└─────────────────────────────────────────────────────────┘
```

### If You Get Stuck

- **Can't find the edit button?** Make sure you're logged into GitHub
- **Getting an error when committing?** You may not have write access—contact the maintainer
- **Made a mistake?** Click "History" on the file to see previous versions, or ask for help

### Questions?

Contact the repository maintainer for assistance.

---

## Build and Maintenance

This is a documentation repository. No build process is required. Content should be readable directly on GitHub or when cloned locally.

For PDF generation from Markdown, contributors may use tools like Pandoc, but source Markdown files should always be maintained as the primary format.
