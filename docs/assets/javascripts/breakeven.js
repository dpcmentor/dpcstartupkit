/**
 * Break-Even Calculator
 *
 * Mounts into `<div id="dpckit-breakeven">` when that element is on the page
 * (docs/pricing-membership/pricing-your-practice.md). Vanilla JS, no
 * dependencies. Does nothing on pages without the mount point.
 *
 * The math mirrors docs/templates/spreadsheets/template-break-even-analysis.xlsx
 * cell for cell, so the page and the spreadsheet never disagree:
 *
 *   B13  Total fixed monthly expenses   = SUM(B5:B12)            -> input "overhead"
 *   B19  Total variable cost / patient  = SUM(B16:B18)           -> input "variableCost"
 *   B22  Average monthly membership fee                          -> input "fee"
 *   B23  Contribution margin            = B22 - B19
 *   B26  Break-even patients            = ROUNDUP(B13 / B23, 0)
 *   B30  Monthly income needed          = B29 / 12               -> input "target" (monthly)
 *   B31  Patients needed                = ROUNDUP((B13 + B30) / B23, 0)
 *   B34  Monthly revenue at target      = B31 * B22
 *   B37  Net monthly income at target   = B34 - B13 - B31 * B19
 *        Annual revenue at target       = B34 * 12
 *
 * `computeBreakEven()` is a pure function with no DOM access. It is exported
 * for tests (`require()` under node) and exposed as
 * `window.dpckitBreakEven.compute` in the browser.
 *
 * Follows the mount pattern of checklists.js: re-runs on MkDocs Material's
 * `document$` observable so it survives instant navigation.
 */
(function () {
  'use strict';

  // Spreadsheet defaults (the template's yellow input cells).
  var DEFAULTS = {
    fee: 100,              // B22
    variableCost: 17,      // B19 = 5 + 10 + 2
    overhead: 2050,        // B13 = 1000 + 400 + 200 + 150 + 50 + 100 + 50 + 100
    target: 200000 / 12    // B30 = B29 / 12, B29 = 200000
  };

  /**
   * Excel ROUNDUP(x, 0) for x >= 0 is ceil. Snap to nine decimals first so a
   * float artefact like 226.00000000000003 does not round up to 227.
   */
  function roundUp(x) {
    return Math.ceil(Math.round(x * 1e9) / 1e9);
  }

  /** Coerce an input to a finite, non-negative number; anything else is 0. */
  function toAmount(v) {
    var n = typeof v === 'number' ? v : parseFloat(v);
    if (!isFinite(n) || n < 0) return 0;
    return n;
  }

  /**
   * Pure compute function.
   *
   * @param {{fee:number|string, variableCost:number|string, overhead:number|string, target:number|string}} inputs
   *   fee          monthly membership fee (B22)
   *   variableCost monthly variable cost per member (B19)
   *   overhead     fixed monthly overhead (B13)
   *   target       target monthly take-home (B30)
   * @returns {{ok:boolean, reason:string|null, margin:number,
   *   patientsToCoverOverhead:number|null, patientsToReachTarget:number|null,
   *   monthlyRevenueAtTarget:number|null, annualRevenueAtTarget:number|null,
   *   netMonthlyIncomeAtTarget:number|null}}
   *
   * `ok` is false when the contribution margin is not positive: with a $0 fee
   * (or a fee at or below the variable cost) no panel size ever breaks even,
   * and the spreadsheet itself shows #DIV/0! or a negative count. Callers
   * show a plain message instead of NaN or Infinity.
   */
  function computeBreakEven(inputs) {
    inputs = inputs || {};
    var fee = toAmount(inputs.fee);
    var variableCost = toAmount(inputs.variableCost);
    var overhead = toAmount(inputs.overhead);
    var target = toAmount(inputs.target);

    var margin = fee - variableCost;                       // B23

    if (fee <= 0 || margin <= 0) {
      return {
        ok: false,
        reason: fee <= 0 ? 'no-fee' : 'no-margin',
        margin: margin,
        patientsToCoverOverhead: null,
        patientsToReachTarget: null,
        monthlyRevenueAtTarget: null,
        annualRevenueAtTarget: null,
        netMonthlyIncomeAtTarget: null
      };
    }

    var coverOverhead = roundUp(overhead / margin);        // B26
    var reachTarget = roundUp((overhead + target) / margin); // B31
    var monthlyRevenue = reachTarget * fee;                // B34
    var net = monthlyRevenue - overhead - reachTarget * variableCost; // B37

    return {
      ok: true,
      reason: null,
      margin: margin,
      patientsToCoverOverhead: coverOverhead,
      patientsToReachTarget: reachTarget,
      monthlyRevenueAtTarget: monthlyRevenue,
      annualRevenueAtTarget: monthlyRevenue * 12,
      netMonthlyIncomeAtTarget: net
    };
  }

  // ---------------------------------------------------------------------
  // Everything below touches the DOM and only runs in a browser.
  // ---------------------------------------------------------------------

  var MOUNT_ID = 'dpckit-breakeven';

  var fmtWhole = null;
  var fmtCents = null;
  var fmtCount = null;

  function initFormatters() {
    if (fmtWhole) return;
    fmtWhole = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
    fmtCents = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 });
    fmtCount = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 });
  }

  function fieldHtml(key, label, hint, value, step) {
    var id = 'dpckit-be-' + key;
    return (
      '<div class="dpckit-be__field">' +
        '<label for="' + id + '">' + label + '</label>' +
        '<div class="dpckit-be__money">' +
          '<span class="dpckit-be__currency" aria-hidden="true">$</span>' +
          '<input id="' + id + '" name="' + key + '" type="number" inputmode="decimal" ' +
                 'min="0" step="' + step + '" value="' + value + '" autocomplete="off">' +
        '</div>' +
        '<small class="dpckit-be__hint">' + hint + '</small>' +
      '</div>'
    );
  }

  function inputValue(n) {
    // Two decimals for the one non-integer default (200000 / 12); plain otherwise.
    return Number.isInteger(n) ? String(n) : n.toFixed(2);
  }

  function buildMarkup() {
    return (
      '<form class="dpckit-be" novalidate aria-label="Break-even calculator">' +
        '<div class="dpckit-be__inputs">' +
          fieldHtml('fee', 'Monthly membership fee',
            'Average across your tiers. Spreadsheet cell B22.',
            inputValue(DEFAULTS.fee), '1') +
          fieldHtml('variableCost', 'Variable cost per member, per month',
            'Supplies, labs and other costs you incur for each member. Spreadsheet cell B19.',
            inputValue(DEFAULTS.variableCost), '1') +
          fieldHtml('overhead', 'Fixed monthly overhead',
            'Rent, malpractice, EMR, phone and the rest. Spreadsheet cell B13.',
            inputValue(DEFAULTS.overhead), '50') +
          fieldHtml('target', 'Target monthly take-home',
            'Desired annual income &divide; 12. The template’s $200,000 a year is $16,666.67 a month. Spreadsheet cell B30.',
            inputValue(DEFAULTS.target), '0.01') +
        '</div>' +
        '<div class="dpckit-be__results" role="status" aria-live="polite">' +
          '<div class="dpckit-be__result">' +
            '<span class="dpckit-be__value" data-out="cover">&ndash;</span>' +
            '<span class="dpckit-be__label">members to cover overhead</span>' +
          '</div>' +
          '<div class="dpckit-be__result">' +
            '<span class="dpckit-be__value" data-out="target">&ndash;</span>' +
            '<span class="dpckit-be__label">members to reach your target</span>' +
          '</div>' +
          '<div class="dpckit-be__result">' +
            '<span class="dpckit-be__value" data-out="annual">&ndash;</span>' +
            '<span class="dpckit-be__label">annual revenue at target</span>' +
          '</div>' +
          '<p class="dpckit-be__detail" data-out="detail"></p>' +
          '<p class="dpckit-be__message" data-out="message" hidden></p>' +
        '</div>' +
        '<div class="dpckit-be__footer">' +
          '<button type="button" class="dpckit-be__reset">Reset to template defaults</button>' +
        '</div>' +
      '</form>'
    );
  }

  function readInputs(form) {
    return {
      fee: form.elements.fee.value,
      variableCost: form.elements.variableCost.value,
      overhead: form.elements.overhead.value,
      target: form.elements.target.value
    };
  }

  function messageFor(result, inputs) {
    if (result.reason === 'no-fee') {
      return 'Enter a membership fee above $0 to see how many members you need.';
    }
    if (result.reason === 'no-margin') {
      return 'The membership fee has to be higher than the variable cost per member. ' +
             'At these numbers every new member loses money, so no panel size breaks even.';
    }
    if (toAmount(inputs.overhead) === 0) {
      return 'With no fixed overhead, your first member is already profitable; ' +
             'the target count is driven entirely by your take-home goal.';
    }
    return '';
  }

  function render(form) {
    initFormatters();
    var inputs = readInputs(form);
    var r = computeBreakEven(inputs);
    var out = function (key) { return form.querySelector('[data-out="' + key + '"]'); };
    var message = out('message');
    var detail = out('detail');
    var text = messageFor(r, inputs);

    if (!r.ok) {
      out('cover').textContent = '–';
      out('target').textContent = '–';
      out('annual').textContent = '–';
      detail.textContent = '';
      detail.hidden = true;
    } else {
      out('cover').textContent = fmtCount.format(r.patientsToCoverOverhead);
      out('target').textContent = fmtCount.format(r.patientsToReachTarget);
      out('annual').textContent = fmtWhole.format(r.annualRevenueAtTarget);
      detail.textContent =
        'Contribution margin ' + fmtCents.format(r.margin) + ' per member per month. ' +
        'At ' + fmtCount.format(r.patientsToReachTarget) + ' members: ' +
        fmtWhole.format(r.monthlyRevenueAtTarget) + ' monthly revenue, ' +
        fmtWhole.format(r.netMonthlyIncomeAtTarget) + ' net monthly income.';
      detail.hidden = false;
    }

    message.textContent = text;
    message.hidden = !text;
  }

  function setDefaults(form) {
    form.elements.fee.value = inputValue(DEFAULTS.fee);
    form.elements.variableCost.value = inputValue(DEFAULTS.variableCost);
    form.elements.overhead.value = inputValue(DEFAULTS.overhead);
    form.elements.target.value = inputValue(DEFAULTS.target);
  }

  function mountBreakEven() {
    var mount = document.getElementById(MOUNT_ID);
    if (!mount) return;
    if (mount.getAttribute('data-dpckit-mounted') === 'true') return;

    mount.innerHTML = buildMarkup();
    mount.setAttribute('data-dpckit-mounted', 'true');

    var form = mount.querySelector('form.dpckit-be');
    form.addEventListener('input', function () { render(form); });
    form.addEventListener('submit', function (e) { e.preventDefault(); render(form); });

    var reset = form.querySelector('.dpckit-be__reset');
    if (reset) {
      reset.addEventListener('click', function () {
        setDefaults(form);
        render(form);
      });
    }

    render(form);
  }

  function safeMount() {
    try {
      mountBreakEven();
    } catch (err) {
      if (window.console) console.error('[dpckit] break-even mount failed', err);
    }
  }

  function boot() {
    // MkDocs Material exposes `document$`, which fires on every instant-nav
    // page swap; subscribe so the calculator mounts after navigation too.
    if (typeof window.document$ !== 'undefined' && window.document$ && typeof window.document$.subscribe === 'function') {
      window.document$.subscribe(function () { safeMount(); });
    } else if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', safeMount);
    } else {
      safeMount();
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { computeBreakEven: computeBreakEven, DEFAULTS: DEFAULTS };
  }

  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    window.dpckitBreakEven = { compute: computeBreakEven, defaults: DEFAULTS };
    boot();
  }
})();
