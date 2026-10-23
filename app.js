(function () {
  'use strict';

  var KEY = 'poe2route:v1';
  var ACTS = window.ROUTE;
  var $ = function (id) { return document.getElementById(id); };

  /* ── State ─────────────────────────────── */
  var state = { act: ACTS[0].id, opt: false, tips: false, hideDone: false, done: {}, fold: {} };
  try {
    var saved = JSON.parse(localStorage.getItem(KEY));
    if (saved) for (var k in state) if (k in saved) state[k] = saved[k];
  } catch (e) {}
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {}
  }

  /* ── Parse route ───────────────────────── */
  function hash(s) {
    var h = 5381;
    for (var i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0;
    return (h >>> 0).toString(36);
  }
  function esc(s) {
    return s.replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; });
  }
  // Reward category → color class. First match wins. Permanent rewards stay
  // green unless the third flag is set (resistances keep their element color).
  var KINDS = [
    [/Support Gem/, 'support'],
    [/Skill Gem/, 'skill'],
    [/Spirit Gem/, 'spirit'],
    [/Flask/i, 'flask'],
    [/Fire Res/, 'fire', true],
    [/Cold Res/, 'cold', true],
    [/Lightning Res/, 'lightning', true],
    [/\bRes\b/, 'res', true],
    [/Rune/, 'rune'],
    [/Ring|Amulet|Jewel/i, 'jewel'],
    [/Charm/, 'charm'],
    [/Rare|Unique|weapon/i, 'gear'],
    [/Orb\b|Whetstone|Essence|Currency|Gold/, 'currency']
  ];
  function chip(text, perm) {
    var kind = '';
    for (var i = 0; i < KINDS.length; i++) {
      if ((!perm || KINDS[i][2]) && KINDS[i][0].test(text)) { kind = KINDS[i][1]; break; }
    }
    var cls = 'chip' + (perm ? ' perm' : '') + (kind ? ' k-' + kind : '');
    // Mixed resistances get a gradient label, which needs its own element.
    return '<span class="' + cls + '">' + (kind === 'res' ? '<span class="grad">' + text + '</span>' : text) + '</span>';
  }
  function fmt(s) {
    return esc(s)
      .replace(/\[\[(.+?)\]\]/g, function (m, t) { return chip(t, true); })
      .replace(/\[(.+?)\]/g, function (m, t) { return chip(t, false); })
      .replace(/\*(.+?)\*/g, '<b>$1</b>');
  }

  // Turn the string lists into { steps: [{id, text, opt, notes}], notes } per zone.
  ACTS.forEach(function (act) {
    var seen = {};
    act.zones.forEach(function (z, zi) {
      z.key = act.id + ':' + zi;
      z.steps = [];
      z.notes = [];
      z.s.forEach(function (line) {
        var kind = line.slice(0, 2);
        if (kind === '> ' || kind === '! ') {
          var note = { warn: kind === '! ', text: line.slice(2) };
          (z.steps.length ? z.steps[z.steps.length - 1].notes : z.notes).push(note);
          return;
        }
        var opt = kind === '? ';
        var text = opt ? line.slice(2) : line;
        // Ignore case and punctuation so copy-edits don't reset saved ticks.
        var key = (z.n + '|' + text).toLowerCase().replace(/[^a-z0-9|]+/g, '');
        var base = act.id + '-' + hash(key);
        var id = base;
        seen[base] = (seen[base] || 0) + 1;
        if (seen[base] > 1) id = base + '-' + seen[base];
        z.steps.push({ id: id, text: text, opt: opt, notes: [] });
      });
    });
  });

  function visible(step) { return !step.opt || state.opt; }
  function counts(steps) {
    var total = 0, done = 0;
    steps.forEach(function (s) {
      if (s.opt && !state.opt) return;
      total++;
      if (state.done[s.id]) done++;
    });
    return { total: total, done: done };
  }
  function actSteps(act) {
    return act.zones.reduce(function (a, z) { return a.concat(z.steps); }, []);
  }
  function currentAct() {
    for (var i = 0; i < ACTS.length; i++) if (ACTS[i].id === state.act) return ACTS[i];
    return null;
  }
  // The first `count` visible, unfinished steps of an act.
  function upcoming(act, count) {
    var out = [];
    for (var i = 0; i < act.zones.length; i++) {
      var z = act.zones[i];
      for (var j = 0; j < z.steps.length; j++) {
        var s = z.steps[j];
        if (visible(s) && !state.done[s.id]) {
          out.push({ zone: z, step: s });
          if (out.length === count) return out;
        }
      }
    }
    return out;
  }
  function nextStep(act) { return upcoming(act, 1)[0] || null; }

  /* ── Render ────────────────────────────── */
  function notesHtml(notes) {
    return notes.map(function (n) {
      return '<div class="note' + (n.warn ? ' warn' : '') + '">' + fmt(n.text) + '</div>';
    }).join('');
  }

  function renderTabs() {
    var html = ACTS.map(function (a) {
      var c = counts(actSteps(a));
      var cls = 'tab' + (c.total && c.done === c.total ? ' done' : '');
      return '<button class="' + cls + '" role="tab" data-act="' + a.id + '" aria-selected="' + (a.id === state.act) + '" title="' + esc(a.name) + '">' + a.tab + '</button>';
    }).join('');
    html += '<button class="tab" role="tab" data-act="tips" aria-selected="' + (state.act === 'tips') + '">Tips</button>';
    $('tabs').innerHTML = html;
  }

  function renderAct(act) {
    var next = nextStep(act);
    var h = '<section class="act-head"><h1>' + esc(act.name) + '</h1>' +
      '<div class="act-meta">' + esc(act.span) + ' · Lvl ' + esc(act.lvl) + '</div>' +
      '<div class="perm-row">' + act.perm.map(function (p) { return chip(esc(p), true); }).join('') + '</div>' +
      '<div class="act-tips">' + notesHtml(act.tips.map(function (t) { return { text: t }; })) + '</div></section>';

    act.zones.forEach(function (z) {
      var c = counts(z.steps);
      if (!c.total && !state.opt) {
        // Zone holds only optional steps; hide it entirely.
        return;
      }
      var complete = c.total > 0 && c.done === c.total;
      var fold = state.fold[z.key];
      var collapsed = fold ? fold === 'closed' : complete;
      var badges = (z.town ? '<span class="badge">Town</span>' : '') + (z.wp ? '<span class="badge">WP</span>' : '');

      h += '<section class="zone' + (complete ? ' complete' : '') + (collapsed ? ' collapsed' : '') + '" data-zone="' + z.key + '">' +
        '<button class="zone-h" aria-expanded="' + !collapsed + '"><span class="zone-name">' + esc(z.n) + '</span>' + badges +
        (z.lv ? '<span class="zone-lv">' + esc(z.lv) + '</span>' : '') +
        '<span class="zone-count">' + c.done + '/' + c.total + '</span></button>' +
        '<ul class="steps">' +
        (z.notes.length ? '<li class="zone-tips">' + notesHtml(z.notes) + '</li>' : '');

      z.steps.forEach(function (s) {
        var cls = 'step' + (s.opt ? ' opt' : '') + (state.done[s.id] ? ' done' : '') + (next && next.step === s ? ' current' : '');
        h += '<li class="' + cls + '" data-id="' + s.id + '"><span class="box"></span><div class="body"><div class="txt">' +
          (s.opt ? '<span class="opt-tag">(Optional)</span>' : '') + fmt(s.text) + '</div>' + notesHtml(s.notes) + '</div></li>';
      });
      h += '</ul></section>';
    });

    if (state.hideDone && !next) h += '<p class="empty">All done here</p>';
    return h;
  }

  function renderTips() {
    return '<section class="act-head"><h1>Tips</h1><div class="act-meta">General run advice</div></section>' +
      window.TIPS.map(function (sec) {
        return '<section class="tips-sec"><h2>' + esc(sec.h) + '</h2><ul>' +
          sec.items.map(function (t) { return '<li>' + fmt(t) + '</li>'; }).join('') + '</ul></section>';
      }).join('');
  }

  function renderHeader(act) {
    var prog = $('prog'), nextEl = $('next');
    if (!act) { prog.hidden = true; nextEl.hidden = true; return; }
    var c = counts(actSteps(act));
    prog.hidden = false;
    prog.querySelector('.prog-n').textContent = c.done + '/' + c.total;
    prog.querySelector('.prog-bar i').style.width = (c.total ? c.done / c.total * 100 : 0) + '%';

    var up = upcoming(act, 2), n = up[0], then = up[1];
    // Everything before the next step is done, so "back" unticks the one right before it.
    var shown = actSteps(act).filter(visible);
    var at = n ? shown.indexOf(n.step) : shown.length;
    var prev = at > 0 ? shown[at - 1] : null;

    nextEl.hidden = !n && !prev;
    nextEl.querySelector('.next-zone').textContent = n ? n.zone.n : '';
    nextEl.querySelector('.next-text').innerHTML = n ? fmt(n.step.text) : 'Act complete';
    nextEl.dataset.id = n ? n.step.id : '';
    nextEl.dataset.prev = prev ? prev.id : '';
    $('next-btn').hidden = !n;
    $('back-btn').hidden = !prev;

    var thenEl = nextEl.querySelector('.next-then');
    thenEl.hidden = !then;
    if (then) {
      // Only name the zone when the step after this one moves to a new zone.
      thenEl.querySelector('.next-then-zone').textContent = then.zone === n.zone ? '' : then.zone.n + ' · ';
      thenEl.querySelector('.next-then-text').innerHTML = fmt(then.step.text);
    }
  }

  function render() {
    document.body.classList.toggle('show-opt', state.opt);
    document.body.classList.toggle('show-tips', state.tips);
    document.body.classList.toggle('hide-done', state.hideDone);
    $('t-opt').setAttribute('aria-pressed', state.opt);
    $('t-tips').setAttribute('aria-pressed', state.tips);
    $('t-done').setAttribute('aria-pressed', state.hideDone);

    var act = currentAct();
    renderTabs();
    renderHeader(act);
    $('main').innerHTML = act ? renderAct(act) : renderTips();
  }

  /* ── Events ────────────────────────────── */
  function toggleStep(id) {
    if (state.done[id]) delete state.done[id];
    else state.done[id] = 1;
    save();
    render();
  }

  $('tabs').addEventListener('click', function (e) {
    var b = e.target.closest('[data-act]');
    if (!b) return;
    state.act = b.dataset.act;
    save();
    render();
    window.scrollTo(0, 0);
  });

  $('main').addEventListener('click', function (e) {
    var head = e.target.closest('.zone-h');
    if (head) {
      var zone = head.parentNode;
      state.fold[zone.dataset.zone] = zone.classList.contains('collapsed') ? 'open' : 'closed';
      save();
      render();
      return;
    }
    var step = e.target.closest('.step');
    if (step) toggleStep(step.dataset.id);
  });

  $('next-btn').addEventListener('click', function () { toggleStep($('next').dataset.id); });
  $('back-btn').addEventListener('click', function () { toggleStep($('next').dataset.prev); });
  $('next').querySelector('.next-text').addEventListener('click', function () {
    var el = document.querySelector('.step[data-id="' + $('next').dataset.id + '"]');
    if (el) el.scrollIntoView({ block: 'center', behavior: 'smooth' });
  });

  function bindToggle(id, key) {
    $(id).addEventListener('click', function () { state[key] = !state[key]; save(); render(); });
  }
  bindToggle('t-opt', 'opt');
  bindToggle('t-tips', 'tips');
  bindToggle('t-done', 'hideDone');

  $('theme').addEventListener('click', function () {
    var root = document.documentElement;
    var dark = root.dataset.theme ? root.dataset.theme === 'dark' : !matchMedia('(prefers-color-scheme: light)').matches;
    root.dataset.theme = dark ? 'light' : 'dark';
    try { localStorage.setItem('poe2route:theme', root.dataset.theme); } catch (e) {}
  });

  function toast(msg) {
    var t = document.createElement('div');
    t.className = 'toast';
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(function () { t.remove(); }, 2200);
  }

  $('export').addEventListener('click', function () {
    var code = btoa(Object.keys(state.done).join(','));
    if (navigator.clipboard) navigator.clipboard.writeText(code).then(function () { toast('Progress copied'); }, function () { prompt('Copy this code:', code); });
    else prompt('Copy this code:', code);
  });

  $('import').addEventListener('click', function () {
    var code = prompt('Paste progress code:');
    if (!code) return;
    try {
      var ids = atob(code.trim()).split(',').filter(Boolean);
      state.done = {};
      ids.forEach(function (id) { state.done[id] = 1; });
      save();
      render();
      toast('Progress loaded');
    } catch (e) { toast('Invalid code'); }
  });

  $('reset').addEventListener('click', function () {
    var act = currentAct();
    if (!act || !confirm('Reset ' + act.name + '?')) return;
    actSteps(act).forEach(function (s) { delete state.done[s.id]; });
    act.zones.forEach(function (z) { delete state.fold[z.key]; });
    save();
    render();
  });

  render();
})();
