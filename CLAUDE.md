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

## Build and Maintenance

This is a documentation repository. No build process is required. Content should be readable directly on GitHub or when cloned locally.

For PDF generation from Markdown, contributors may use tools like Pandoc, but source Markdown files should always be maintained as the primary format.
