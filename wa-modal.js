/* wa-modal.js — WA Info Gate: collects pilgrim details before opening WhatsApp */
(function () {
  const WA_NUMBER = '919424875958';

  // Same Apps Script endpoint index.html posts to, so every enquiry — from any
  // page — lands in the one sheet. Declared here rather than relying on
  // index.html's logWaClick, which does not exist on the other 25 pages.
  const SHEET_URL = 'https://script.google.com/macros/s/AKfycbw6pMuFc-IWsfkZgqWHT7ab7LAr2mGGOn8oQjsYgvHBG6v6olKf8ecOiz9YVXCsEGdXvQ/exec';

  // no-cors + keepalive so the POST survives the tab losing focus when
  // WhatsApp opens a moment later. Failures are swallowed on purpose: a dead
  // logger must never block someone from reaching WhatsApp.
  function logEnquiry(payload) {
    try {
      fetch(SHEET_URL, {
        method: 'POST', mode: 'no-cors', keepalive: true,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).catch(function () {});
    } catch (e) {}
  }

  // Which CTA opened the modal. Captured from the clicked element so the
  // 54 existing call sites do not each need a label argument.
  var lastCta = '';
  document.addEventListener('click', function (e) {
    var el = e.target && e.target.closest ? e.target.closest('a,button') : null;
    if (!el) return;
    var oc = el.getAttribute('onclick') || '';
    if (oc.indexOf('openWaModal') === -1) return;
    lastCta = (el.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 60);
  }, true);

  // Accepts 9424875958, 94248 75958, +91 94248-75958, 09424875958.
  // Returns the bare 10 digits, or '' if it is not a plausible Indian mobile.
  function normalisePhone(raw) {
    const d = (raw || '').replace(/\D/g, '');
    const t = d.length > 10 ? d.slice(-10) : d;
    return /^[6-9]\d{9}$/.test(t) ? t : '';
  }

  const SERVICES = [
    { id: 'hotel',   label: '🏨 Hotel Booking' },
    { id: 'hawan',   label: '🔥 Hawan Guide' },
    { id: 'cab',     label: '🚕 Cab Arrangement' },
    { id: 'guide',   label: '📖 Yatra Guide PDF' },
    { id: 'plan',    label: '🗺️ Full Trip Planning' },
  ];

  // One entry per topic a CTA can open with. A hint missing here silently
  // falls back to 'general', which is how 'guide' would have pre-ticked the
  // wrong box after the CTAs were routed by topic.
  const HINT_MAP = {
    hotel:   ['hotel'],
    hawan:   ['hawan'],
    cab:     ['cab'],
    guide:   ['guide'],
    plan:    ['plan'],
    circuit: ['cab', 'plan'],
    general: ['plan'],
  };

  // Today in IST — the site's audience is entirely in India, and a UTC date
  // would let 00:00–05:30 IST visitors pick yesterday.
  function todayIST() {
    return new Date(Date.now() + 5.5 * 3600 * 1000).toISOString().split('T')[0];
  }

  function formatDate(val) {
    if (!val) return '';
    const [y, m, d] = val.split('-');
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    return `${parseInt(d)} ${months[parseInt(m) - 1]} ${y}`;
  }

  function buildMsg(name, date, persons, city, phone, needs, extra) {
    const needLines = needs.map(id => {
      const s = SERVICES.find(x => x.id === id);
      return s ? `✓ ${s.label.replace(/^\S+\s/, '')}` : '';
    }).filter(Boolean).join('\n');

    let msg = `🙏 Jai Maa Baglamukhi!\n\nयात्रा की जानकारी:\n━━━━━━━━━━━━━━\n🙋 नाम: ${name}\n📅 तिथि: ${formatDate(date)}\n👥 यात्री: ${persons} लोग\n🏙️ शहर से: ${city}\n📱 मोबाइल: ${phone}\n\nसहायता चाहिए:\n${needLines}`;
    if (extra && extra.trim()) msg += `\n\n${extra.trim()}`;
    msg += '\n\nकृपया मार्गदर्शन करें 🙏';
    return msg;
  }

  function injectStyles() {
    if (document.getElementById('wa-modal-css')) return;
    const style = document.createElement('style');
    style.id = 'wa-modal-css';
    style.textContent = `
#wa-modal-overlay {
  display: none;
  position: fixed; inset: 0; z-index: 99999;
  background: rgba(0,0,0,0.55);
  align-items: flex-end;
  justify-content: center;
}
@media(min-width:600px) {
  #wa-modal-overlay { align-items: center; }
}
#wa-modal-overlay.open { display: flex; }
#wa-modal-box {
  background: #FDF6E3;
  width: 100%; max-width: 480px;
  border-radius: 18px 18px 0 0;
  padding: 1.25rem 1.25rem 2rem;
  box-shadow: 0 -4px 32px rgba(0,0,0,0.22);
  transform: translateY(100%);
  transition: transform 0.25s ease, opacity 0.25s ease;
  max-height: 92vh; overflow-y: auto;
}
@media(min-width:600px) {
  #wa-modal-box { border-radius: 16px; transform: translateY(20px); opacity:0; max-height:90vh; }
}
#wa-modal-overlay.open #wa-modal-box {
  transform: translateY(0); opacity:1;
}
#wa-modal-header {
  display: flex; align-items: center; justify-content: space-between;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(107,15,26,0.15);
}
#wa-modal-header h3 {
  font-family: 'Poppins', sans-serif; font-weight: 700;
  font-size: 1.05rem; color: #6B0F1A; margin: 0;
}
#wa-modal-close {
  background: none; border: none; cursor: pointer;
  font-size: 1.4rem; color: #7A5C3A; line-height: 1;
  padding: 0.2rem 0.4rem; border-radius: 4px;
}
#wa-modal-close:hover { background: rgba(107,15,26,0.08); }
.wa-field { margin-bottom: 0.9rem; }
.wa-field label {
  display: block; font-family: 'Poppins', sans-serif;
  font-size: 0.8rem; font-weight: 600; color: #6B0F1A;
  margin-bottom: 0.35rem;
}
.wa-field input, .wa-field textarea {
  width: 100%; box-sizing: border-box;
  padding: 0.65rem 0.85rem;
  border: 1.5px solid rgba(107,15,26,0.22);
  border-radius: 8px; background: #fff;
  font-family: 'Mukta', sans-serif; font-size: max(16px, 1rem);
  color: #2C1A00;
  transition: border-color 0.15s;
}
.wa-field input:focus, .wa-field textarea:focus {
  outline: none; border-color: #6B0F1A;
}
.wa-field textarea { resize: none; }
.wa-pills { display: flex; flex-wrap: wrap; gap: 0.45rem; }
.wa-pill {
  display: inline-flex; align-items: center; gap: 0.3rem;
  padding: 0.5rem 0.85rem;
  border: 1.5px solid rgba(107,15,26,0.3);
  border-radius: 20px; background: #fff;
  font-family: 'Mukta', sans-serif; font-size: 0.85rem;
  color: #2C1A00; cursor: pointer; text-align: left;
  transition: background 0.15s, border-color 0.15s, color 0.15s;
  user-select: none;
}
.wa-pill:focus-visible { outline: 2px solid #6B0F1A; outline-offset: 2px; }
.wa-pill.checked {
  background: #6B0F1A; border-color: #6B0F1A; color: #fff;
}
#wa-modal-error {
  display: none; font-family: 'Mukta', sans-serif;
  font-size: 0.82rem; color: #c0392b;
  background: #fdecea; border-radius: 6px;
  padding: 0.5rem 0.75rem; margin-bottom: 0.75rem;
}
#wa-modal-error.show { display: block; }
#wa-modal-submit {
  width: 100%; padding: 0.85rem;
  background: #F4C430; border: none; border-radius: 8px;
  font-family: 'Poppins', sans-serif; font-size: 1rem; font-weight: 700;
  color: #2C1A00; cursor: pointer;
  transition: background 0.15s;
}
#wa-modal-submit:hover { background: #D4A017; }
.wa-modal-note {
  font-family: 'Mukta', sans-serif; font-size: 0.75rem;
  color: #7A5C3A; text-align: center; margin-top: 0.6rem;
}
`;
    document.head.appendChild(style);
  }

  function injectHTML() {
    if (document.getElementById('wa-modal-overlay')) return;

    const pillsHTML = SERVICES.map(s => `
      <button type="button" class="wa-pill" data-id="${s.id}" aria-pressed="false">${s.label}</button>`).join('');

    const div = document.createElement('div');
    div.id = 'wa-modal-overlay';
    div.innerHTML = `
<div id="wa-modal-box" role="dialog" aria-modal="true" aria-labelledby="wa-modal-title">
  <div id="wa-modal-header">
    <h3 id="wa-modal-title">📋 यात्रा जानकारी भरें</h3>
    <button id="wa-modal-close" aria-label="बंद करें">✕</button>
  </div>

  <div class="wa-field">
    <label for="wa-name">🙋 आपका नाम *</label>
    <input type="text" id="wa-name" placeholder="जैसे: अश्विन वर्मा" autocomplete="name">
  </div>

  <div class="wa-field">
    <label for="wa-date">📅 यात्रा की तारीख *</label>
    <input type="date" id="wa-date" min="${todayIST()}" autocomplete="off">
  </div>

  <div class="wa-field">
    <label for="wa-persons">👥 कितने लोग? *</label>
    <input type="number" id="wa-persons" min="1" max="99" value="1" autocomplete="off">
  </div>

  <div class="wa-field">
    <label for="wa-city">🏙️ किस शहर से आ रहे हैं? *</label>
    <input type="text" id="wa-city" placeholder="जैसे: Indore, Ujjain, Bhopal…" autocomplete="off">
  </div>

  <div class="wa-field">
    <label for="wa-phone">📱 आपका मोबाइल नंबर *</label>
    <input type="tel" id="wa-phone" inputmode="numeric" maxlength="15" placeholder="10 अंकों का नंबर" autocomplete="tel">
  </div>

  <div class="wa-field">
    <label>✅ क्या सहायता चाहिए? (एक या अधिक चुनें) *</label>
    <div class="wa-pills">${pillsHTML}</div>
  </div>

  <div class="wa-field">
    <label for="wa-extra">📝 कुछ और बताना है? (वैकल्पिक)</label>
    <textarea id="wa-extra" rows="2" placeholder="जैसे: हवन बुकिंग, विशेष आवश्यकता..."></textarea>
  </div>

  <div id="wa-modal-error"></div>
  <button id="wa-modal-submit">WhatsApp पर भेजें 📲</button>
  <p class="wa-modal-note">आपका नंबर केवल आपकी यात्रा पूछताछ का जवाब देने के लिए उपयोग होता है — हम न इसे बेचते हैं, न प्रचार भेजते हैं। हम 2–4 घंटे में जवाब देते हैं। <a href="/privacy-policy.html" target="_blank" rel="noopener" style="color:#6B0F1A;font-weight:600">गोपनीयता नीति</a></p>
</div>`;
    document.body.appendChild(div);

    // pill toggle
    div.querySelectorAll('.wa-pill').forEach(pill => {
      pill.addEventListener('click', function () {
        const on = this.classList.toggle('checked');
        this.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
    });

    // close on X
    document.getElementById('wa-modal-close').addEventListener('click', closeWaModal);

    // close on overlay click
    div.addEventListener('click', function (e) {
      if (e.target === div) closeWaModal();
    });

    // close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeWaModal();
    });

    // submit
    document.getElementById('wa-modal-submit').addEventListener('click', submitWaModal);
  }

  function closeWaModal() {
    const overlay = document.getElementById('wa-modal-overlay');
    if (overlay) overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  function submitWaModal() {
    const date = document.getElementById('wa-date').value.trim();
    const persons = parseInt(document.getElementById('wa-persons').value) || 0;
    const name = document.getElementById('wa-name').value.trim();
    const city = document.getElementById('wa-city').value.trim();
    const phoneRaw = document.getElementById('wa-phone').value;
    const phone = normalisePhone(phoneRaw);
    const needs = [...document.querySelectorAll('.wa-pill.checked')].map(p => p.dataset.id);
    const extra = document.getElementById('wa-extra').value;
    const errEl = document.getElementById('wa-modal-error');

    if (!name || name.length < 2) {
      errEl.textContent = '⚠️ कृपया अपना नाम लिखें।';
      errEl.classList.add('show');
      document.getElementById('wa-name').focus();
      return;
    }
    if (!date || persons < 1 || !city || needs.length === 0) {
      errEl.textContent = '⚠️ कृपया सभी जरूरी जानकारी भरें और कम से कम एक सहायता चुनें।';
      errEl.classList.add('show');
      return;
    }
    if (!phone) {
      errEl.textContent = '⚠️ कृपया 10 अंकों का सही मोबाइल नंबर डालें।';
      errEl.classList.add('show');
      document.getElementById('wa-phone').focus();
      return;
    }
    errEl.classList.remove('show');

    const msg = buildMsg(name, date, persons, city, phone, needs, extra);

    // The live sheet has a fixed set of columns:
    //   Submitted | Name | Phone | City | Travel Date | Group Size | Duration |
    //   Circuit | Stay | Transport | Hawan | Budget | Notes | Source
    // Anything sent under another key is silently dropped, so the CTA, the page
    // and the chosen services are folded into the two columns that do exist
    // rather than requiring the Apps Script to be edited first. The richer keys
    // are still sent underneath: the replacement Apps Script adds a column for
    // each, and the current one ignores them.
    const sourceFull = ['WA Modal — ' + (window._waModalHint || 'general'),
                        lastCta, location.pathname].filter(Boolean).join(' · ');
    const notesFull  = [needs.join(', '), extra.trim()].filter(Boolean).join(' | ');

    logEnquiry({
      source:    sourceFull,
      submitted: new Date().toLocaleString('en-IN'),
      name:      name,
      phone:     phone,
      city:      city,
      date:      date,
      group:     persons,
      notes:     notesFull,
      // ignored by the current Apps Script, used by the replacement
      cta:       lastCta,
      services:  needs.join(', '),
      message:   msg,
      page:      location.pathname,
      url:       location.href
    });

    window.open('https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(msg), '_blank');
    closeWaModal();
  }

  window.openWaModal = function (hint) {
    injectStyles();
    injectHTML();

    window._waModalHint = hint || 'general';

    // reset fields
    const dateEl = document.getElementById('wa-date');
    const personsEl = document.getElementById('wa-persons');
    const cityEl = document.getElementById('wa-city');
    const nameEl = document.getElementById('wa-name');
    const phoneEl = document.getElementById('wa-phone');
    const extraEl = document.getElementById('wa-extra');
    if (dateEl) dateEl.value = '';
    if (personsEl) personsEl.value = '1';
    if (cityEl) cityEl.value = '';
    if (nameEl && !nameEl.value) nameEl.value = '';
    if (phoneEl && !phoneEl.value) phoneEl.value = '';
    if (extraEl) extraEl.value = '';
    document.getElementById('wa-modal-error').classList.remove('show');

    // pre-check boxes based on hint
    const precheck = HINT_MAP[hint] || HINT_MAP['general'];
    document.querySelectorAll('.wa-pill').forEach(pill => {
      const checked = precheck.includes(pill.dataset.id);
      pill.classList.toggle('checked', checked);
      pill.setAttribute('aria-pressed', checked ? 'true' : 'false');
    });

    // refresh min date — the modal is injected once but may outlive midnight
    if (dateEl) dateEl.min = todayIST();

    document.getElementById('wa-modal-overlay').classList.add('open');
    document.body.style.overflow = 'hidden';

    // focus first input
    setTimeout(() => {
      const first = document.getElementById('wa-name');
      if (first) first.focus();
    }, 50);
  };
})();
