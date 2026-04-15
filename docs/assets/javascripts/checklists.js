/**
 * Interactive Checklists — Tier 1 (client-side only)
 *
 * Activates on pages whose front-matter contains `interactive_checklist: true`.
 * The MkDocs theme override at overrides/main.html emits a hidden marker element
 * on those pages; this script looks for the marker before doing anything.
 *
 * For each task-list item on an activated page:
 *   - computes a 12-char label hash: sha1(pagePath + "::" + normalizedLabel).slice(0,12)
 *   - reads/writes checked state under localStorage key 'dpckit-check-<hash>'
 *   - enables the (default-disabled) pymdownx.tasklist checkbox
 *   - injects a progress bar + reset button at the top of content
 *   - adds a one-line privacy note
 *
 * Persistence is per-browser, per-origin. Never synced, never transmitted.
 *
 * See ARCHITECTURE.md → "Interactive Checklists (Tier 1)" for rationale,
 * decisions locked in, and the migration path to Tier 2+ (server-backed).
 */
(function () {
  'use strict';

  var STORAGE_PREFIX = 'dpckit-check-';

  function sha1Hex(str) {
    var buf = new TextEncoder().encode(str);
    return crypto.subtle.digest('SHA-1', buf).then(function (digest) {
      return Array.from(new Uint8Array(digest))
        .map(function (b) { return b.toString(16).padStart(2, '0'); })
        .join('');
    });
  }

  function normalizeLabel(text) {
    return (text || '').replace(/\s+/g, ' ').trim();
  }

  function labelHash(pagePath, label) {
    return sha1Hex(pagePath + '::' + normalizeLabel(label)).then(function (hex) {
      return hex.slice(0, 12);
    });
  }

  function getContentRoot() {
    return document.querySelector('.md-content__inner') || document.querySelector('.md-content');
  }

  function isInteractiveChecklistPage(root) {
    if (!root) return false;
    return !!root.querySelector('.dpckit-interactive-marker[data-dpckit-enabled="true"]');
  }

  function getTaskListItems(root) {
    return Array.prototype.slice.call(root.querySelectorAll('ul.task-list li.task-list-item'));
  }

  function getItemCheckbox(item) {
    return item.querySelector('input[type="checkbox"].task-list-item-checkbox') ||
           item.querySelector('input[type="checkbox"]');
  }

  function getItemLabelText(item) {
    var clone = item.cloneNode(true);
    var input = clone.querySelector('input[type="checkbox"]');
    if (input) input.parentNode.removeChild(input);
    return clone.textContent || '';
  }

  function buildProgressUI(total) {
    var wrap = document.createElement('div');
    wrap.className = 'dpckit-progress-wrap';
    wrap.setAttribute('role', 'region');
    wrap.setAttribute('aria-label', 'Checklist progress');
    wrap.innerHTML =
      '<div class="dpckit-progress-header">' +
        '<span class="dpckit-progress-label">Your progress: <span class="dpckit-count">0</span> of ' + total + ' complete</span>' +
        '<button type="button" class="dpckit-reset">Reset this page</button>' +
      '</div>' +
      '<div class="dpckit-progress-bar" aria-hidden="true"><div class="dpckit-progress-fill" style="width:0%"></div></div>' +
      '<p class="dpckit-privacy-note">Your progress is saved only in this browser — we don\'t see it.</p>';
    return wrap;
  }

  function updateProgressUI(wrap, checkedCount, total) {
    var count = wrap.querySelector('.dpckit-count');
    var fill = wrap.querySelector('.dpckit-progress-fill');
    if (count) count.textContent = String(checkedCount);
    var pct = total > 0 ? (checkedCount / total) * 100 : 0;
    if (fill) fill.style.width = pct.toFixed(1) + '%';
  }

  function initInteractiveChecklists() {
    var root = getContentRoot();
    if (!isInteractiveChecklistPage(root)) return Promise.resolve();

    // Avoid double-init on instant-nav re-renders
    if (root.querySelector('.dpckit-progress-wrap')) return Promise.resolve();

    var items = getTaskListItems(root);
    if (items.length === 0) return Promise.resolve();

    var pagePath = window.location.pathname;
    var state = [];

    var hashPromises = items.map(function (item) {
      return labelHash(pagePath, getItemLabelText(item));
    });

    return Promise.all(hashPromises).then(function (hashes) {
      var progressWrap = buildProgressUI(items.length);

      for (var i = 0; i < items.length; i++) {
        (function (item, hash) {
          var cb = getItemCheckbox(item);
          if (!cb) return;
          var storageKey = STORAGE_PREFIX + hash;
          var stored = null;
          try { stored = localStorage.getItem(storageKey); } catch (e) {}
          cb.disabled = false;
          cb.removeAttribute('disabled');
          cb.checked = stored === '1';
          item.classList.toggle('dpckit-checked', cb.checked);

          state.push({ cb: cb, storageKey: storageKey, item: item });

          cb.addEventListener('change', function () {
            try { localStorage.setItem(storageKey, cb.checked ? '1' : '0'); } catch (e) {}
            item.classList.toggle('dpckit-checked', cb.checked);
            var n = state.filter(function (s) { return s.cb.checked; }).length;
            updateProgressUI(progressWrap, n, state.length);
          });
        })(items[i], hashes[i]);
      }

      root.insertBefore(progressWrap, root.firstChild);
      var initialCount = state.filter(function (s) { return s.cb.checked; }).length;
      updateProgressUI(progressWrap, initialCount, state.length);

      var resetBtn = progressWrap.querySelector('.dpckit-reset');
      if (resetBtn) {
        resetBtn.addEventListener('click', function () {
          if (!window.confirm('Reset all checkboxes on this page? Your progress on other pages is not affected.')) return;
          state.forEach(function (s) {
            try { localStorage.removeItem(s.storageKey); } catch (e) {}
            s.cb.checked = false;
            s.item.classList.remove('dpckit-checked');
          });
          updateProgressUI(progressWrap, 0, state.length);
        });
      }
    });
  }

  function safeInit() {
    try {
      initInteractiveChecklists().catch(function (err) {
        if (window.console) console.error('[dpckit] init failed', err);
      });
    } catch (err) {
      if (window.console) console.error('[dpckit] init threw', err);
    }
  }

  // MkDocs Material exposes a global `document$` RxJS observable that fires
  // on every client-side navigation (instant nav). Subscribe so we re-run
  // after the DOM swap.
  if (typeof window.document$ !== 'undefined' && window.document$ && typeof window.document$.subscribe === 'function') {
    window.document$.subscribe(function () { safeInit(); });
  } else if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', safeInit);
  } else {
    safeInit();
  }
})();
