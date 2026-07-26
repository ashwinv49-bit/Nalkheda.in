/* wa-modal.js — WA Info Gate: collects pilgrim details before opening WhatsApp */
(function () {
  const WA_NUMBER = '919754709571';

  const SERVICES = [
    { id: 'hotel',   label: '🏨 Hotel Booking' },
    { id: 'hawan',   label: '🔥 Hawan Guide' },
    { id: 'cab',     label: '🚕 Cab Arrangement' },
    { id: 'guide',   label: '📖 Yatra Guide PDF' },
    { id: 'plan',    label: '🗺️ Full Trip Planning' },
  ];

  const HINT_MAP = {
    hotel:   ['hotel'],
    hawan:   ['hawan'],
    cab:     ['cab'],
    general: ['plan'],
    circuit: ['cab', 'plan'],
  };

  function pad(n) { return String(n).padStart(2, '0'); }

  function formatDate(val) {
    if (!val) return '';
    const [y, m, d] = val.split('-');
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    return `${parseInt(d)} ${months[parseInt(m) - 1]} ${y}`;
  }

  function buildMsg(date, persons, city, needs, extra) {
    const needLines = needs.map(id => {
      const s = SERVICES.find(x => x.id === id);
      return s ? `✓ ${s.label.replace(/^\S+\s/, '')}` : '';
    }).filter(Boolean).join('\n');

    let msg = `🙏 Jai Maa Baglamukhi!\n\nयात्रा की जानकारी:\n━━━━━━━━━━━━━━\n📅 तिथि: ${formatDate(date)}\n👥 यात्री: ${persons} लोग\n🏙️ शहर से: ${city}\n\nसहायता चाहिए:\n${needLines}`;
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
  transition: transform 0.25s ease;
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
  padding: 0.4rem 0.75rem;
  border: 1.5px solid rgba(107,15,26,0.3);
  border-radius: 20px; background: #fff;
  font-family: 'Mukta', sans-serif; font-size: 0.85rem;
  color: #2C1A00; cursor: pointer;
  transition: background 0.15s, border-color 0.15s, color 0.15s;
  user-select: none;
}
.wa-pill input { display: none; }
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
      <label class="wa-pill" data-id="${s.id}">
        <input type="checkbox" value="${s.id}"> ${s.label}
      </label>`).join('');

    const today = new Date().toISOString().split('T')[0];

    const div = document.createElement('div');
    div.id = 'wa-modal-overlay';
    div.innerHTML = `
<div id="wa-modal-box" role="dialog" aria-modal="true" aria-labelledby="wa-modal-title">
  <div id="wa-modal-header">
    <h3 id="wa-modal-title">📋 यात्रा जानकारी भरें</h3>
    <button id="wa-modal-close" aria-label="बंद करें">✕</button>
  </div>

  <div class="wa-field">
    <label for="wa-date">📅 यात्रा की तारीख *</label>
    <input type="date" id="wa-date" min="${today}" autocomplete="off">
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
    <label>✅ क्या सहायता चाहिए? (एक या अधिक चुनें) *</label>
    <div class="wa-pills">${pillsHTML}</div>
  </div>

  <div class="wa-field">
    <label for="wa-extra">📝 कुछ और बताना है? (वैकल्पिक)</label>
    <textarea id="wa-extra" rows="2" placeholder="जैसे: हवन बुकिंग, विशेष आवश्यकता..."></textarea>
  </div>

  <div id="wa-modal-error"></div>
  <button id="wa-modal-submit">WhatsApp पर भेजें 📲</button>
  <p class="wa-modal-note">आपकी जानकारी सुरक्षित है। हम 2–4 घंटे में जवाब देते हैं।</p>
</div>`;
    document.body.appendChild(div);

    // pill toggle
    div.querySelectorAll('.wa-pill').forEach(pill => {
      pill.addEventListener('click', function () {
        this.classList.toggle('checked');
        this.querySelector('input').checked = this.classList.contains('checked');
      });
    });

    // close on X
    document.getElementById('wa-modal-close').addEventListener('click', closeWaModal);

    // close on overlay click
    div.addEventListener('click', function (e) {
      if (e.target === div) closeWaModal();
    });

    // submit
    document.getElementById('wa-modal-submit').addEventListener('click', submitWaModal);
  }

  function closeWaModal() {
    const overlay = document.getElementById('wa-modal-overlay');
    if (overlay) overlay.classList.remove('open');
  }

  function submitWaModal() {
    const date = document.getElementById('wa-date').value.trim();
    const persons = parseInt(document.getElementById('wa-persons').value) || 0;
    const city = document.getElementById('wa-city').value.trim();
    const needs = [...document.querySelectorAll('.wa-pill.checked')].map(p => p.dataset.id);
    const extra = document.getElementById('wa-extra').value;
    const errEl = document.getElementById('wa-modal-error');

    if (!date || persons < 1 || !city || needs.length === 0) {
      errEl.textContent = '⚠️ कृपया सभी जरूरी जानकारी भरें और कम से कम एक सहायता चुनें।';
      errEl.classList.add('show');
      return;
    }
    errEl.classList.remove('show');

    const msg = buildMsg(date, persons, city, needs, extra);

    if (typeof logWaClick !== 'undefined') {
      try { logWaClick('WA Modal — ' + (window._waModalHint || 'general'), city + ' / ' + needs.join(',')); } catch(e) {}
    }

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
    const extraEl = document.getElementById('wa-extra');
    if (dateEl) dateEl.value = '';
    if (personsEl) personsEl.value = '1';
    if (cityEl) cityEl.value = '';
    if (extraEl) extraEl.value = '';
    document.getElementById('wa-modal-error').classList.remove('show');

    // pre-check boxes based on hint
    const precheck = HINT_MAP[hint] || HINT_MAP['general'];
    document.querySelectorAll('.wa-pill').forEach(pill => {
      const id = pill.dataset.id;
      const checked = precheck.includes(id);
      pill.classList.toggle('checked', checked);
      pill.querySelector('input').checked = checked;
    });

    document.getElementById('wa-modal-overlay').classList.add('open');

    // focus first input
    setTimeout(() => {
      const dateEl = document.getElementById('wa-date');
      if (dateEl) dateEl.focus();
    }, 50);
  };
})();
