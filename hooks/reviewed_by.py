"""MkDocs hook: render a "Reviewed by" line at the top of pages marked Reviewed.

Source of truth is REVIEW-STATUS.md at the repository root. Rows look like:

    | [name.md](docs/path/name.md) | Reviewed | JF | 2026-09-22 | notes |

Only rows whose status is exactly "Reviewed" produce a line. Read-through,
In Review, Not Reviewed and Needs Update produce nothing. Reviewer initials
are expanded through reviewers.yml at the repository root when present;
unknown initials are shown as initials.

A row that cannot be parsed, or that points at a page that does not exist,
raises, so the strict build catches drift in the status file.
"""
import os
import re
import logging

log = logging.getLogger("mkdocs.hooks.reviewed_by")

ROW = re.compile(
    r"^\|\s*\[[^\]]+\]\(([^)]+)\)\s*\|\s*([^|]+?)\s*\|\s*([^|]*?)\s*\|\s*([^|]*?)\s*\|"
)
STATUSES = {"Not Reviewed", "In Review", "Read-through", "Reviewed", "Needs Update"}
DATE = re.compile(r"^\d{4}-\d{2}-\d{2}$")

_index = None


def _load(config):
    global _index
    root = os.path.dirname(os.path.abspath(config["config_file_path"]))
    status_path = os.path.join(root, "REVIEW-STATUS.md")
    reviewers = {}
    rpath = os.path.join(root, "reviewers.yml")
    if os.path.exists(rpath):
        import yaml
        with open(rpath, encoding="utf-8") as fh:
            reviewers = yaml.safe_load(fh) or {}
    index = {}
    with open(status_path, encoding="utf-8") as fh:
        for n, line in enumerate(fh, 1):
            if not line.startswith("| ["):
                continue
            m = ROW.match(line)
            if not m:
                raise ValueError(f"REVIEW-STATUS.md line {n}: row does not parse: {line.strip()[:80]}")
            path, status, who, date = m.groups()
            if not path.startswith("docs/"):
                continue  # root documents (README, ARCHITECTURE, ...) are not pages
            if status not in STATUSES:
                raise ValueError(f"REVIEW-STATUS.md line {n}: unknown status {status!r}")
            rel = path[len("docs/"):]
            if not os.path.exists(os.path.join(config["docs_dir"], rel)):
                raise ValueError(f"REVIEW-STATUS.md line {n}: page not found: {path}")
            if status == "Reviewed":
                if not DATE.match(date):
                    raise ValueError(f"REVIEW-STATUS.md line {n}: Reviewed row needs a YYYY-MM-DD date, got {date!r}")
                if not who:
                    raise ValueError(f"REVIEW-STATUS.md line {n}: Reviewed row needs a reviewer")
                index[rel] = (reviewers.get(who, who), date)
    _index = index
    log.info("reviewed_by: %d page(s) marked Reviewed", len(index))


def on_config(config):
    _load(config)
    return config


def on_page_markdown(markdown, page, config, files):
    hit = _index.get(page.file.src_uri)
    if not hit:
        return markdown
    who, date = hit
    line = (
        f'<div class="dpckit-reviewed-by" markdown>Reviewed by **{who}** · '
        f'last verified {date} · <a href="https://github.com/dpcmentor/dpcstartupkit/blob/main/REVIEW-STATUS.md">what this means</a></div>\n\n'
    )
    # insert after the H1 so the title stays first
    lines = markdown.split("\n")
    for i, l in enumerate(lines):
        if l.startswith("# "):
            lines.insert(i + 1, "\n" + line.rstrip("\n"))
            return "\n".join(lines)
    return line + markdown
