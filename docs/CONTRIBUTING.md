# Contributing to the DPC Startup Kit

The DPC Startup Kit is a free, physician-written reference for starting and
running a Direct Primary Care practice. It is published under a
[Creative Commons BY-NC 4.0 license](https://creativecommons.org/licenses/by-nc/4.0/),
built in the open at
[github.com/dpcmentor/dpcstartupkit](https://github.com/dpcmentor/dpcstartupkit),
and maintained alongside the [DPC Mentor Platform](https://dpcmentor.com/).

Contributions of every size are welcome: a corrected fee, a dated citation, a
reviewed state guide, or a new chapter. This page explains how.

---

## Ways to contribute

| You want to... | Do this |
|---|---|
| Report an error or something out of date | [Open an issue](https://github.com/dpcmentor/dpcstartupkit/issues/new) with the page and what is wrong |
| Suggest a topic the kit does not cover | Check the [content roadmap](https://github.com/dpcmentor/dpcstartupkit/blob/main/CONTENT-ROADMAP.md), then open an issue |
| Review an existing guide for accuracy | See [Reviewing a guide](#reviewing-a-guide) below |
| Write or substantially revise content | See [Submitting changes](#submitting-changes) below |

You do not need to know Git. Small edits can be made entirely in the browser.

---

## Before you write

**This is educational content, not legal, tax or financial advice.** Every
guide that touches law, tax, licensing or regulation must keep that framing
and point readers to a qualified professional for their situation.

**Cite your sources.** For any legal, tax, regulatory or pricing claim, link
the primary source (statute, agency page, IRS or CMS guidance) and note the
date you checked it. Rules differ by state and change often. An undated claim
is the first thing a reviewer will ask about.

**Disclose affiliations.** The kit does not endorse a single EMR, website
vendor, consultant or membership organization, and it is not funded by any.
If you mention a product or company and have a financial relationship with
it, say so in your pull request so the maintainer can decide how to present
it. Mentioning several options with plain tradeoffs is fine. Steering readers
to one is not.

**Write for the reader who has never run a business.** Assume clinical
expertise and no administrative experience. Define acronyms on first use.
Say "physicians", not "providers". Give timeframes and cost ranges where you
can. Formal but plain.

---

## Submitting changes

There are two paths. Both end in a pull request, which the maintainer reviews
before anything is published.

### Path A: small edits in the browser

Good for typo fixes, updated numbers, a corrected link or a new paragraph.

1. Open the page on the site and click the **edit icon** (pencil) at the top
   of the page, or find the file under `docs/` in the repository and click
   the pencil there.
2. If you are not a collaborator, GitHub will offer to **fork** the
   repository for you. Accept.
3. Make your edit and click **Commit changes**. Write a one-line summary of
   what you changed and why.
4. GitHub will prompt you to **open a pull request**. Do that, and add any
   sources you relied on to the description.

### Path B: larger work on your own machine

Good for new guides, reorganizing a section, or anything you want to preview
before submitting.

1. Fork the repository and clone your fork.
2. Create a branch for the change.
3. Preview the site locally:

    ```bash
    pip install -r requirements-docs.txt
    mkdocs serve
    ```

    Then open <http://127.0.0.1:8000/> in a browser. Pages reload as you save.

4. Run the same check the pull request will run:

    ```bash
    mkdocs build --strict
    ```

5. Push your branch and open a pull request against `main`.

### What the automated checks do

Every pull request runs two checks. Both must pass before merge.

- **Strict build.** The site is built with MkDocs Material in strict mode.
  A broken internal link, a page missing from the navigation, or a
  malformed Markdown table fails the build. Use relative links between
  pages (`../technology/emr-selection-guide.md`, not a full URL) so the
  check can verify them.
- **Internal link check.** Every internal link on the site is followed.
  External links are checked on a weekly schedule rather than per pull
  request, so a dead outside link will not block you, but please fix any
  you notice.

If a check fails, the pull request page shows which one and why. Ask if the
message is not clear.

---

## Reviewing a guide

Every guide is meant to be checked by a practicing DPC physician or a
subject-matter expert before it is treated as reliable. Progress is tracked
in [REVIEW-STATUS.md](https://github.com/dpcmentor/dpcstartupkit/blob/main/REVIEW-STATUS.md).

### What "Reviewed" means

Marking a guide as reviewed asserts that you have:

- read the whole page, not just the part in your specialty;
- checked each legal, tax, regulatory and pricing claim against a primary
  source, and updated or removed anything you could not confirm;
- confirmed state-specific details are current for the date of your review;
- confirmed the educational-content disclaimer is present where the topic
  needs one;
- fixed anything unclear enough that a first-time reader would stumble.

If a page needs more work than you can give it, mark it **Needs Update** and
say what is wrong in the Notes column. That is a useful contribution.

### Steps

1. In `REVIEW-STATUS.md`, find a page marked **Not Reviewed** or
   **Needs Update**. Change its status to **In Review** and put your initials
   in the Reviewer column, so nobody duplicates your work. Commit that change
   (Path A above works for this).
2. Review the page and make your edits.
3. Return to `REVIEW-STATUS.md`. Set the status to **Reviewed**, the date in
   `YYYY-MM-DD` form, and a short note on what you changed.
4. Submit the page edits and the status change together in one pull request.

| Status | Meaning |
|---|---|
| Not Reviewed | No expert review yet |
| In Review | Someone has claimed it |
| Reviewed | Checked and approved as of the date shown |
| Needs Update | Known to be stale or incomplete |

---

## Credit

Contributors are credited. Reviewers and authors are recorded by name or
initials in `REVIEW-STATUS.md`, and reviewed pages will carry a visible
"reviewed by" line on the page itself. If you are contributing on behalf of
an organization and would like it named, say so in the pull request. If you
would rather not be named, say that instead and you will be listed as
"anonymous reviewer".

---

## License for contributions

By submitting a contribution you agree that:

- it is licensed under the same
  [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/) terms as
  the rest of the kit, with copyright held collectively as "DPC Startup Kit
  Contributors";
- you have the right to contribute it. Do not paste in text, forms or
  tables from copyrighted sources without permission. Summarize and cite
  instead.

The non-commercial license is deliberate. The kit is meant to stay free for
physicians, and contributions cannot change that.

---

## Authoring reference

### Where files go

All published content lives under `docs/`, organized by section:

```
docs/
├── bootstrap/                    # Lowest-cost launch path
├── getting-started.md
├── business-formation/           # Entity, registration, insurance, tax
├── small-business-fundamentals/  # Accounting, cash flow, financial statements
├── pricing-membership/           # Membership models, pricing, agreements
├── technology/                   # EMR, telehealth, communication tools
├── marketing/                    # Branding, outreach, employer partnerships
├── compliance-legal/             # HIPAA, opt-out, documentation, state rules
├── operations/                   # Space, staffing, workflow, inventory
├── mentoring/                    # Mentor and mentee onboarding
├── resources/                    # External links, reading
├── states/                       # One guide per state
└── templates/                    # Spreadsheets and document templates
```

A new page must also be added to the `nav` section of `mkdocs.yml`, or the
strict build will fail.

### Page structure

1. **Title**, a clear descriptive heading
2. **Overview**, what the page covers and why it matters
3. **Prerequisites**, what the reader should have done first
4. **Content**, with clear subheadings
5. **Checklist**, an actionable summary where it fits
6. **Resources**, sources, templates and related pages

### File naming

- Lowercase with hyphens: `choosing-legal-entity.md`
- Descriptive: `membership-pricing-calculator.xlsx`, not `calculator.xlsx`
- Templates start with `template-`, checklists with `checklist-`

### Checklists

Use task-list syntax:

```markdown
## Checklist: Business Registration

- [ ] Choose entity type
- [ ] Apply for EIN
```

A page whose main purpose is a working checklist can make it interactive, so
readers can tick items and have progress saved in their own browser. Add this
at the very top of the file:

```markdown
---
interactive_checklist: true
---
```

When set, every `- [ ]` item on the page becomes a real checkbox with a
progress bar and a reset button. Checked state stays in the reader's browser
and is never sent anywhere. Use it on action checklists, not on reference
pages that happen to contain a list. Keep item labels short, because the
label text identifies the checkbox and rewording an item resets it for
returning readers. Implementation details are in
[ARCHITECTURE.md](https://github.com/dpcmentor/dpcstartupkit/blob/main/ARCHITECTURE.md).

### Templates

- Spreadsheets go in `docs/templates/spreadsheets/`, documents in
  `docs/templates/documents/`. Each folder has a README listing its files.
- Test every formula before submitting a spreadsheet.
- Explain how to use a template in the guide that references it.

---

## Questions

Email [support@dpcmentor.com](mailto:support@dpcmentor.com) or open an issue.
If you are unsure whether something belongs in the kit, ask first. A short
issue saves a long rewrite.
