# CLAUDE.md

This file is project-specific context for Claude Code (and other AI coding
tools) working in this repository. It is not part of the published site —
it only lives in the repo to orient future sessions.

If you are a new Claude Code session opening this repo: **read this file
first**, then check open issues at
[`/issues`](https://github.com/dpcmentor/dpcstartupkit/issues).

---

## What this repo is

The **DPC Startup Kit** — a comprehensive educational resource for
physicians launching Direct Primary Care practices. Content-only,
no application code. Published as a static site via MkDocs Material
at [dpcmentor.github.io/dpcstartupkit](https://dpcmentor.github.io/dpcstartupkit/).

Built and maintained by experienced DPC physicians. Used as the
knowledge base for the **DPC Mentor Platform**
([dpcmentor.com](https://dpcmentor.com/)), which pairs aspiring
DPC physicians with experienced mentors.

---

## Repository structure

```
dpcstartupkit/
├── README.md                  # GitHub repo landing page — short intro + site link
├── CLAUDE.md                  # This file
├── NOTES.md                   # Free-form scratchpad (see "Tracking work" below)
├── REVIEW-STATUS.md           # Per-guide human review progress
├── CONTENT-ROADMAP.md         # Planned content, P1/P2/P3 priority
├── LICENSE                    # CC BY-NC 4.0
├── mkdocs.yml                 # MkDocs configuration (nav, theme, plugins)
├── requirements-docs.txt      # Python deps for mkdocs build
├── .gitignore                 # Ignores site/, .lycheecache, venvs
├── .github/workflows/         # CI: deploy, validate, link-check
└── docs/                      # ★ All published content lives here
    ├── index.md               # Site homepage
    ├── getting-started.md     # Quick-start guide
    ├── CONTRIBUTING.md        # Contributor guide (in-nav)
    ├── assets/                # Theme assets, logo, stylesheets
    ├── bootstrap/             # Bootstrap-first launch path
    ├── business-formation/    # Legal entities, registration, insurance
    ├── small-business-fundamentals/  # Accounting, cash flow, taxes
    ├── pricing-membership/    # Membership models, pricing, contracts
    ├── technology/            # EMR, telehealth, websites
    ├── marketing/             # Branding, outreach, patient education
    ├── compliance-legal/      # HIPAA, DPC laws, controlled substances
    ├── operations/            # Office space, equipment, workflows
    ├── mentoring/             # DPC Mentor Platform guides
    ├── resources/             # Organizations, labs, reading lists
    ├── states/                # All 50 state guides
    └── templates/             # Spreadsheet + document templates
```

**Key rule:** content for the published site lives under `docs/`. Files
at the repo root (`README.md`, `REVIEW-STATUS.md`, `CLAUDE.md`,
`NOTES.md`, `CONTENT-ROADMAP.md`) are meta-files and are **not**
rendered into the site.

---

## Build and test commands

**Always run these locally before pushing**, even for small content
changes. See "Lessons learned" below for why — every time we've skipped
local verification, we've paid for it.

### Install dependencies (once per environment)

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements-docs.txt
```

### Build the site

```bash
mkdocs build --strict
```

`--strict` fails on any warning (broken links, missing nav entries, bad
config). If this passes locally, the `validate-docs` CI check will
almost certainly pass too.

### Serve locally for live preview

```bash
mkdocs serve
# Visit http://127.0.0.1:8000/
```

### Check internal links (fast, offline)

```bash
lychee --offline --exclude localhost './**/*.md'
```

Expected output on a healthy tree: `0 Errors`. This mirrors the
PR-time `link-check` CI job.

### Check all links including external (slow, network required)

```bash
lychee --max-retries 2 --accept 200,202,204,206,401,403,407,429,500,503 --exclude localhost './**/*.md'
```

This mirrors the weekly scheduled CI run. Do not block merges on this —
state medical board sites regularly return 503/407 as anti-bot defenses.

---

## Content voice and conventions

The voice is deliberate. Match it.

### Bootstrap-first philosophy

We lead with "what's the minimum?" not "what's ideal?" A practice with
one patient is more real than a business plan with none. Most guides
should contrast a "traditional" path with a "bootstrap" path and let
the reader pick. Don't shame the comprehensive path — both are valid —
but default to minimum viable.

### Plain English, no hedging

- Short sentences. Concrete numbers where possible.
- Prefer tables over long prose for comparative content.
- No marketing language, no bullet-point pabulum.
- Physicians are smart. Don't talk down.

### Educational, not advice

**Every guide** must end with or prominently include a disclaimer that
the content is educational, not legal/tax/financial advice. The
specific boilerplate:

> **This is educational content, not legal or financial advice.**
> Regulations vary by state and change over time. Always consult a
> healthcare attorney for legal matters and an accountant for tax
> and financial matters. Verify current requirements with official
> sources.

For state-specific content, include a prominent disclaimer with the
actual statute URL and a note that legislation changes.

### Structure of a typical guide

1. Short intro — why this matters, who should read it
2. Core content — concepts, tables, examples, lists
3. Common mistakes or pitfalls
4. "Key takeaways" bullet list
5. "Next" or "Related guides" section with links to siblings
6. Disclaimer

### State guide structure (when touching `docs/states/*.md`)

Each state guide must include:
- DPC legislation status (friendly / moderate / challenging)
- Medication dispensing rules
- Medical board link (for physician licensing)
- Pharmacy board link (for dispensing rules)
- The standard disclaimer with statute URL(s)
- Any state-specific considerations (Medicaid restrictions, CPOM rules, etc.)

---

## Commit and PR conventions

### Commits

- **Subject line:** imperative mood, present tense, under ~72 characters
  ("Add", "Fix", "Update", "Move") — not "Added"/"Adding"
- **Body:** explain *why* the change exists, not just what changed. Wrap at 72.
- **Format:** blank line between subject and body. Blank line before any list.
- **Atomic:** one logical change per commit. Don't bundle unrelated edits.

Example:

```
Split link-check: offline on PR, full external on schedule

The first CI run on this PR revealed the original workflow design was
wrong. With a full external check on PR-time, the workflow found 60
pre-existing broken external links in existing state-guide content.

PR-time checks should only fail on issues the author could reasonably
fix. Pre-existing external link rot in unrelated content shouldn't
block every future PR.
```

### Pull requests

- **Small and focused.** One PR, one concern. Don't bundle content +
  infrastructure changes. If you find yourself writing "also" in the
  PR description, split it.
- **Description explains the why.** Someone reading in six months
  should understand the motivation without external context.
- **Include a test plan.** Even for content changes — what did you
  verify locally, what should a reviewer check.
- **Link to issues.** Use `Closes #N` for bug fixes so merging
  auto-closes the issue.
- **Default merge method:** merge commit (not squash). Preserves
  per-commit history on `main`, matches the existing repo pattern.

### Branch naming

- `feat/<thing>` — new content or features
- `fix/<thing>` — bug fixes
- `ci/<thing>` — CI / workflow changes
- `docs/<thing>` — meta-file changes (README, CLAUDE.md, etc.)
- `content/<section>/<topic>` — new or edited guide in a specific section

Avoid `claude/*` or other tool-prefixed names — they don't describe the
change and are hard to scan in a branch list.

---

## Tracking work

This is the system of record. Don't reinvent it.

| Tool | Purpose | Where |
|---|---|---|
| **GitHub Issues** | Bugs, features, link rot, anything actionable | [`/issues`](https://github.com/dpcmentor/dpcstartupkit/issues) |
| **`REVIEW-STATUS.md`** | Per-guide human review progress (134 docs, status per document) | Repo root |
| **`CONTENT-ROADMAP.md`** | Planned-but-unwritten content, P1/P2/P3 priority | Repo root |
| **`NOTES.md`** | Free-form scratchpad for half-formed ideas | Repo root |

**When something comes up during a session:**

- If it's actionable and well-defined → **open an issue** immediately, don't
  rely on memory. Use labels: `bug`, `documentation`, `build`, `link-rot`,
  `good first issue`, `automated`.
- If it's a half-formed idea you want to think about later → **add it to
  `NOTES.md`**. Promote to an issue when it becomes actionable.
- If it's about review status of a specific guide → **update `REVIEW-STATUS.md`**.
- If it's new content you want to write → **add it to `CONTENT-ROADMAP.md`**
  under the appropriate section with P1/P2/P3 priority.

**When starting a new session**, orient yourself by reading (in order):

1. This file (`CLAUDE.md`)
2. Open issues at `/issues`
3. `NOTES.md` for in-flight thoughts
4. Recent commits on `main` (`git log --oneline -20`)

---

## What not to touch without asking

Some changes have repo-wide implications and should be proposed
explicitly, not slipped in alongside content changes:

- **`mkdocs.yml`** — nav structure, theme, plugins. Touch only when
  needed for the PR and call it out in the description.
- **`.github/workflows/*`** — CI configuration. If adding a new check,
  test it locally first and make it a dedicated PR.
- **Section directory structure** — adding, renaming, or removing
  top-level sections in `docs/` is a big deal. Propose via issue first.
- **The bootstrap-first philosophy** — don't quietly shift the tone
  toward "here's what you need to buy." That's the opposite of the
  repo's voice.
- **Disclaimers** — don't remove or soften the "educational, not
  advice" language. Legal exposure.
- **State law claims** — don't add specific legal claims about any
  state without a linked statute or reputable source. If unsure,
  leave it to a subject-matter expert.

---

## Lessons learned from prior sessions

These are things that have actually gone wrong in this repo and that
a fresh session would benefit from knowing up front.

### 1. The site build was silently broken for six months

Before April 2026, `mkdocs.yml` had no `docs_dir` set, and there was
no `docs/` directory — content lived at the repo root. MkDocs defaults
`docs_dir` to `./docs`, so every `mkdocs build` call failed immediately
with `ERROR - Config value 'docs_dir': The path '/.../dpcstartupkit/docs'
isn't an existing directory`. The `deploy-docs` workflow only ran on
push to `main`, nobody watched the Actions tab, and nothing surfaced
the failure until a later PR added PR-time CI. Fixed in #7 by moving
all content into `docs/` — the conventional MkDocs layout. Don't
regress this by moving files back to the root.

**MkDocs 1.6+ explicitly blocks `docs_dir: .`**, so the "just set
docs_dir to the root" workaround doesn't work. Don't try.

### 2. Test CI workflows locally before pushing

When reintroducing the link-check workflow, I used `--exclude-mail` in
the lychee args — which isn't a valid lychee flag (the actual option
is `--include-mail`, defaulting to false). The workflow failed
immediately on the argument parse. Local lychee tests missed it
because I was running lychee with different args than the workflow.

**Lesson:** when testing a workflow locally, copy the *exact* arg
string from the YAML, not your remembered version of it.

### 3. Don't bundle infrastructure with content in one PR

An earlier attempt put new content + new CI workflows in the same PR.
When CI failed on pre-existing issues, the PR became unmergeable and
had to be split retroactively. Shipping them as separate focused PRs
(#4 content, #7 structure, #8 CI) was dramatically easier to review,
debug, and revert.

### 4. PR-time checks must only fail on things the PR author can fix

The original link-check workflow ran a full external URL check on
every PR. Because existing state guides had ~60 pre-existing broken
external URLs (404s, 503s, anti-bot 407s), **every new PR would have
been blocked** until someone did a 60-URL cleanup pass. The right
design is PR-time checks = fast/local/offline, scheduled checks =
full external with issue reporting instead of blocking.

### 5. "No news" is not "good news" in GitHub Actions

Workflows that only run on push to `main` can fail silently for
months if nobody visits the Actions tab. Always add PR-time checks
as a companion to deploy workflows so problems surface at review
time, not six months later.

---

## Quick reference

| Task | Command / Location |
|---|---|
| Build site locally | `mkdocs build --strict` |
| Serve locally | `mkdocs serve` |
| Check internal links | `lychee --offline --exclude localhost './**/*.md'` |
| Open an issue | [`/issues/new`](https://github.com/dpcmentor/dpcstartupkit/issues/new) |
| See what's in flight | [`/issues`](https://github.com/dpcmentor/dpcstartupkit/issues) |
| Scratchpad | `NOTES.md` |
| Review tracker | `REVIEW-STATUS.md` |
| Planned content | `CONTENT-ROADMAP.md` |

---

## Branding and CSS conventions

Added 2026-04-15 in Phase 2 branding pass.

**Palette.** Forest green `#2d6a4f` (primary) with gold `#f4a261` (accent).
Dark mode background `#1a1a2e`. Header `#1b4332`. These live as CSS
variables in `docs/stylesheets/extra.css` and are wired through the
MkDocs Material `primary: custom` / `accent: custom` palette hooks.

**Font.** Sora (Google Fonts) for body and headings, JetBrains Mono for
code. The Sora import is inside `extra.css` so a single file change
propagates the whole branding.

**Where custom styles live.**

- `docs/stylesheets/extra.css` — branding, color variables, header,
  nav, H1/H2/H3, admonitions, links, footer, tables, mobile.
- `docs/assets/stylesheets/custom.css` — earlier content styles,
  loaded after `extra.css`.
- `docs/assets/stylesheets/checklists.css` — interactive checklists.
- `overrides/main.html` — Jinja override that injects the
  `dpckit-interactive-marker` div when a page has
  `interactive_checklist: true` front-matter. Required by
  `docs/assets/javascripts/checklists.js`. **Do not delete** — it's
  why `custom_dir: overrides` points where it does.

**Rules.**

- Append to `extra.css`, don't rewrite it. Color variables and the
  Sora import must stay at the top so later rules can reference them.
- **Never inline styles in md files.** Use a utility class in
  `extra.css` instead — inline styles break dark mode and are
  invisible to search/replace.
- New color or font choices get added as CSS variables in `:root`
  so the dark-mode block can override them in one place.

---

*This file is maintained alongside the codebase. Update it when
conventions change — don't let it drift.*
