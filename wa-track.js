/* wa-track.js — put a reference code on every WhatsApp hand-off.

   The problem this solves: of 132 WhatsApp links on the site, 67 log nothing
   at all. Someone taps "Buy the guide ₹99", lands in WhatsApp, and whether
   they ever sent the message is invisible — there is no row to compare
   against. Four months of the sheet shows 29 sticky-bar taps and no way to
   tell how many became conversations.

   Every hand-off now carries a short code, e.g.

       [Ref: NK-7F3A]

   appended to the pre-filled message, and the same code is written to the
   sheet at the moment of the tap. When a message arrives on WhatsApp you can
   read its code and find the exact row: which button, which page, what time.
   A tap with no matching message is a drop-off, and the ratio is the
   click-to-conversation rate nobody can currently measure.

   Nothing is gated and no friction is added — the purchase CTAs stay one tap,
   which is why they were left ungated in the first place.
*/
(function () {
  var SHEET_URL = 'https://script.google.com/macros/s/AKfycbw6pMuFc-IWsfkZgqWHT7ab7LAr2mGGOn8oQjsYgvHBG6v6olKf8ecOiz9YVXCsEGdXvQ/exec';

  // Crockford-style alphabet: no 0/O, no 1/I/L. A code read off a phone
  // screen and typed into a search box must not be ambiguous.
  var ALPHABET = '23456789ABCDEFGHJKMNPQRSTVWXYZ';

  function makeRef() {
    var out = '';
    for (var i = 0; i < 4; i++) {
      out += ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length));
    }
    return 'NK-' + out;
  }

  function post(payload) {
    try {
      fetch(SHEET_URL, {
        method: 'POST', mode: 'no-cors', keepalive: true,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).catch(function () {});
    } catch (e) {}
  }

  // Add the code to the message the user is about to send.
  function stampHref(href, ref) {
    try {
      var i = href.indexOf('?text=');
      if (i === -1) {
        // no pre-filled text — give it one rather than send them in blank
        return href + (href.indexOf('?') === -1 ? '?' : '&') +
               'text=' + encodeURIComponent('\n\n[Ref: ' + ref + ']').replace(/^%0A%0A/, '');
      }
      var base = href.slice(0, i + 6);
      var text = decodeURIComponent(href.slice(i + 6));
      if (text.indexOf('[Ref:') !== -1) return href;   // already stamped
      return base + encodeURIComponent(text + '\n\n[Ref: ' + ref + ']');
    } catch (e) { return href; }
  }

  // Exposed so wa-modal.js and index.html's own logger use the same code
  // for the tap that opened them, instead of inventing a second one.
  window.NK_REF = makeRef;
  window.__nkRef = '';

  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest ? e.target.closest('a[href*="wa.me/"]') : null;
    if (!a) return;

    var ref = makeRef();
    window.__nkRef = ref;
    a.href = stampHref(a.getAttribute('href') || a.href, ref);

    var oc = a.getAttribute('onclick') || '';
    // The modal logs on submit and index.html's CTAs log through logWaClick.
    // Logging here too would double-count them; they read window.__nkRef
    // instead so the row and the message carry the same code.
    if (oc.indexOf('openWaModal') !== -1 || oc.indexOf('logWaClick') !== -1) return;

    // Everything else logs nothing today. This is the 67.
    var label = (a.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 60);
    post({
      source:    '[' + ref + '] ' + (label || 'WhatsApp link') + ' · ' + location.pathname,
      submitted: new Date().toLocaleString('en-IN'),
      notes:     'direct WhatsApp tap — no form',
      ref:       ref,
      cta:       label,
      page:      location.pathname,
      url:       location.href
    });
  }, true);   // capture phase: runs before the element's own onclick
})();
