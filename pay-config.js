/* pay-config.js — one place to switch selling from manual to automatic.
 *
 * HOW IT WORKS
 *   Leave a link empty  -> that button keeps its current WhatsApp behaviour.
 *   Paste a link in     -> that button becomes instant checkout, no manual step.
 *
 * Nothing else needs editing. Buttons read this file at load.
 *
 * SETUP (once, ~15 minutes)
 *   1. Create a Payment Link / Payment Page in Razorpay or Instamojo
 *      for each product below, at the price shown.
 *   2. Set its post-payment redirect to:  https://nalkheda.in/guide-download.html
 *   3. Paste the link URL here and deploy.
 *
 *   Razorpay  ~2% per sale, cheapest, needs the redirect above.
 *   Instamojo ~5% + Rs 3, dearer, but delivers the file itself so the
 *             download page cannot be shared around.
 */
window.NALKHEDA_PAY = {

  // ---- Products -----------------------------------------------------------
  links: {
    guide99:    "",   // Nalkheda Yatra Guide PDF        Rs 99
    navratri499:"",   // Navratri Yatra Pack             Rs 499
    circuit249: "",   // MP Circuit Guide                Rs 249
    planning1999:""   // Personal Yatra Planning         Rs 1,999  (keep empty:
                      //   this one SHOULD stay a conversation, not a checkout)
  },

  // ---- Fallback -----------------------------------------------------------
  // Used whenever a link above is empty. This is today's behaviour.
  whatsapp: "919754709571",

  // ---- Where buyers land after paying ------------------------------------
  thankYou: "/guide-download.html"
};

(function () {
  var cfg = window.NALKHEDA_PAY;

  /* Any element with data-buy="guide99" becomes a checkout button when a
     link exists, and otherwise keeps whatever href it already had. */
  function wire() {
    var els = document.querySelectorAll("[data-buy]");
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      var key = el.getAttribute("data-buy");
      var url = cfg.links[key];
      if (!url) continue;                     // no link set -> leave as-is

      el.setAttribute("href", url);
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
      el.removeAttribute("onclick");          // drop the WhatsApp handler
      el.setAttribute("data-buy-active", "1");

      // swap "Order on WhatsApp" style wording for checkout wording
      var alt = el.getAttribute("data-buy-label");
      if (alt) el.textContent = alt;
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", wire);
  } else {
    wire();
  }
})();
