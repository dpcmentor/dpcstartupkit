# Architecture

This document records the architectural decisions behind features that aren't obvious from reading the source. It's for future maintainers (including the author's future self) — not for end users of the published site.

Public docs live in [`docs/`](docs/) and render to https://dpcmentor.github.io/dpcstartupkit/. This file stays at the repo root and is intentionally **not** included in the MkDocs build.

---

## Interactive Checklists (Tier 1)

### Goal

Let readers tick off `- [ ]` task-list items on a checklist page and have that state persist across visits, with no login, no backend, and no build-step changes. Purely a client-side enhancement layered on top of MkDocs Material.

### Non-goals (explicitly out of scope for Tier 1)

- Cross-device sync
- Per-user identity, accounts, or login
- Mentor visibility into mentee progress
- Analytics on which items get checked / skipped
- Multi-user workspaces
- Any server-side state

If any of those become desired, they belong in the `dpc-mentor-platform` repo — **not** here — and will require a real backend (Tier 3+, see "Migration path" below).

### How it works (end-to-end)

1. **Opt-in via front-matter.** A page declares itself interactive by adding
   ```yaml
   ---
   interactive_checklist: true
   ---
   ```
   at the top. Pages without this flag are unaffected.

2. **Theme override injects a marker.** [`overrides/main.html`](overrides/main.html) extends MkDocs Material's `base.html`. When `page.meta.interactive_checklist` is truthy, it injects a hidden element:
   ```html
   <div class="dpckit-interactive-marker" hidden data-dpckit-enabled="true"></div>
   ```
   The `meta` markdown extension (enabled in `mkdocs.yml`) reads the YAML front-matter into `page.meta` during the build.

3. **JS activates on marker presence.** [`docs/assets/javascripts/checklists.js`](docs/assets/javascripts/checklists.js) runs on every page load. It early-returns unless it finds the marker element, so non-interactive pages pay essentially zero runtime cost.

4. **Per-item persistence via label hash.** For each `ul.task-list li.task-list-item` on an activated page:
   - Compute a 12-character key: `SHA-1(window.location.pathname + "::" + normalizedLabelText).slice(0, 12)`
   - Read checked state from `localStorage.getItem('dpckit-check-' + hash)`
   - Un-disable the checkbox (pymdownx.tasklist renders them as `disabled` by default)
   - Wire a `change` listener that writes `'1'` or `'0'` back to the same key
   - Toggle a `.dpckit-checked` class on the item for visual dimming / strikethrough

5. **Progress UI.** The JS injects a `<div class="dpckit-progress-wrap">` at the top of `.md-content__inner` containing:
   - A live "X of Y complete" counter
   - A thin progress bar that animates as items are ticked
   - A "Reset this page" button (with a `confirm()` guard) that clears state for *this page only*
   - A one-line privacy note: "Your progress is saved only in this browser — we don't see it."

6. **Instant-nav compatibility.** MkDocs Material uses RxJS-based instant navigation (client-side DOM swaps on link clicks). The script subscribes to the global `document$` observable so it re-runs on every client-side navigation, not just full page loads. A double-init guard prevents duplicate progress bars when `document$` fires twice on the same DOM.

### Key design decisions

These are locked in for Tier 1. If you want to change one, read the "alternatives considered" column first — there's usually a reason.

| Decision | Choice | Alternatives considered |
|---|---|---|
| **Scope — which pages?** | Opt-in via `interactive_checklist: true` front-matter | (A) Activate on every page that has `- [ ]` — rejected because it would accidentally activate on `CONTRIBUTING.md`'s example markdown and similar. (C) Only on files named `checklist-*.md` — rejected because several high-value checklists live inside broader guides (e.g. the 7-day bootstrap plan in `docs/index.md`). |
| **Persistence key** | Label hash: `SHA-1(pagePath + "::" + normalizedLabel).slice(0,12)` | (A) Positional index — rejected because inserting a new item above shifts every subsequent key. (C) Stable author-written slugs (`<!-- id:... -->`) — correct long-term answer, rejected for v1 because it adds author friction. Migration path documented below. |
| **Progress UI surface** | Baseline: persistent state + per-page progress bar + reset button | Export-to-JSON, cross-page "My Progress" dashboard, jump-to-next-unchecked — all deferred until usage data shows they're worth the complexity. |
| **Orphan key cleanup** | None — ignore it | `localStorage` is ~5 MB per origin. Dead keys from edited labels accumulate at ~bytes per event and will not meaningfully consume quota in any realistic timeframe. |
| **Theme customization** | `theme.custom_dir: overrides` with a minimal `main.html` extending `base.html` | Python hooks — rejected (Python complexity in a docs repo). HTML comment markers — rejected (`minify_html: true` plugin strips comments). Hidden `<div>` in every markdown file — rejected (author friction). |
| **Mobile hit targets** | Enlarged via CSS: ≥ 1.6rem (25.6 px) on coarse pointers, WCAG AAA-ish | Left at MkDocs Material default ≈16 px — rejected on mobile usability grounds. |
| **Privacy disclosure** | Inline one-line note on every interactive page | Separate privacy page — rejected, readers won't navigate there. |
| **Print/PDF support** | CSS `@media print` rules preserve checked state and hide the reset button | Ignore print entirely — rejected because physicians may want to bring an in-progress checklist to an attorney meeting. |
| **Deploy cadence** | Direct-to-main commits, each small and reversible | Feature branch with PR — rejected for initial Tier 1 rollout; future interactive features should still use branches. |

### File map

| Path | Purpose |
|---|---|
| [`docs/assets/javascripts/checklists.js`](docs/assets/javascripts/checklists.js) | Runtime logic (~170 lines vanilla JS, no build step, no dependencies) |
| [`docs/assets/stylesheets/checklists.css`](docs/assets/stylesheets/checklists.css) | Checkbox hit targets, progress UI styles, print-view rules |
| [`overrides/main.html`](overrides/main.html) | MkDocs Material theme override — emits the hidden marker when front-matter opts in |
| [`mkdocs.yml`](mkdocs.yml) | `theme.custom_dir: overrides`, `extra_css`, `extra_javascript`, `markdown_extensions: - meta` |
| [`docs/CONTRIBUTING.md`](docs/CONTRIBUTING.md) | Authoring instructions for content contributors |

### Dependencies added

**None.** No new Python packages in `requirements-docs.txt`. No build-time tools. No bundler. No transpilation. This is deliberate — the goal is for `mkdocs build --strict` to continue working identically and for the `.github/workflows/deploy-docs.yml` workflow to remain untouched.

### How to debug

**Tier 1 appears broken on a page that should be interactive:**
1. Confirm the page's front-matter has `interactive_checklist: true` as the very first YAML in the file.
2. View page source in the browser and search for `dpckit-interactive-marker`. If missing, the theme override isn't being applied — check `theme.custom_dir: overrides` in `mkdocs.yml`.
3. Open devtools console. `checklists.js` logs errors with the `[dpckit]` prefix on any failure.
4. In devtools Application → Local Storage, filter for `dpckit-check-` keys to see what's actually being stored.

**A particular item keeps losing its checked state:**
- Someone probably edited the item's label text, which changes the label hash. Expected behavior — the old key is orphaned and the new one starts fresh. Cost is one re-tick by the reader. See the "Orphan key cleanup" row above.

**Double progress bar appears after client-side navigation:**
- The double-init guard in `initInteractiveChecklists()` (`if (root.querySelector('.dpckit-progress-wrap')) return;`) failed somehow. Investigate whether `document$.subscribe` fired twice for the same DOM state.

**Checkboxes inside `docs/CONTRIBUTING.md`'s example fenced code blocks somehow became interactive:**
- They shouldn't — `pymdownx.tasklist` doesn't process `- [ ]` inside `<code>` / `<pre>` blocks. If you see this, something upstream changed; treat it as a bug.

### Testing checklist (manual)

When modifying any of the files in the "File map," re-verify:

- [ ] `mkdocs build --strict` passes locally and in CI
- [ ] On a checklist page: tick a box, full-refresh, box is still ticked
- [ ] Navigate away and back via the sidebar (instant nav): state still persists
- [ ] Progress bar updates live as items are ticked
- [ ] Reset button clears only this page's state (check localStorage for other pages' keys after clicking)
- [ ] A non-interactive page (e.g. a state guide or `CONTRIBUTING.md` itself) shows **no** progress bar and **no** privacy note
- [ ] On mobile (devtools responsive mode, touch pointer): checkbox hit target is ≥ 44×44 px
- [ ] Print preview (browser "Print…" dialog) shows checked state and hides the reset button
- [ ] No `[dpckit]` errors in the browser console on any page

### Migration path to Tier 2+

If/when you decide to move beyond client-side-only:

- **Tier 2** (client-side + export): Add an "Export my progress" button to the progress bar. Emits JSON `{ page: "...", items: [{label, checked, hash}], exported: "ISO8601" }` or a formatted plaintext checklist. No backend. ~30 lines added to `checklists.js`. No changes to other files.
- **Tier 3** (account-backed): Checklists move out of MkDocs and into an authenticated web app in `dpc-mentor-platform`. The markdown in `docs/` becomes the *canonical content source*; the platform reads the markdown as a build input and renders interactive checklist UI server-side, with per-user progress in a real database. The MkDocs site links out to the interactive version for logged-in users. **Do not duplicate the checklist content in two places** — pick one source of truth (the markdown) and have the platform consume it.
- **Tier 4** (shared workspace): Mentors can see mentee progress, comment on specific items, flag blockers. This is a full-fledged feature of the Mentor Platform, not of the Startup Kit. Belongs entirely in `dpc-mentor-platform`.

The label-hash keying in Tier 1 is **forward-compatible** with Tier 2 export (the hash is a stable identifier you can include in the export payload) but **not** forward-compatible with Tier 3, where you'll want real primary keys. Plan to migrate authors to stable slugs (`<!-- id:business-banking -->`) before you build Tier 3.

### Why this isn't over-engineered

The temptation on a feature like this is to reach for a framework, a component library, a state management solution. Don't. The total surface area is:

- ~170 lines of JS
- ~130 lines of CSS
- ~20 lines of Jinja template
- ~5 lines of `mkdocs.yml` changes

That's small enough that any future maintainer can read the whole thing in ten minutes. If a future change would require more lines than the existing implementation, question whether it belongs in Tier 1 or should be promoted to Tier 2+.
