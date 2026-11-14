/* hotel-links.js — points every hotel button at the right city.

   The problem this solves: all 42 affiliate buttons on the site pointed at the
   same two URLs. A button reading "Search Ujjain Hotels" and one reading
   "Search Nalkheda Hotels" sent the visitor to the identical page, so whoever
   clicked had to search again — and most don't.

   Each button is now tagged with data-hotel (the city) and data-ota (booking
   or mmt). This file turns those tags into real links.

   ─────────────────────────────────────────────────────────────────────────
   TO SWITCH DEEP LINKS ON, fill in ONE of these. Until you do, every button
   keeps using the generic links below, exactly as the site behaves today.
   ───────────────────────────────────────────────────────────────────────── */

window.NALKHEDA_HOTELS = {

  /* OPTION 1 — your Cuelinks CID (bitli.in is Cuelinks).
     Find it in your Cuelinks dashboard. With this set, Booking.com buttons
     become real city searches automatically.
     Verify one link in a private window before trusting the rest. */
  cuelinksCid: "",

  /* Tested 14 Nov 2026: a link built by hand in the same shape as a real
     one, but WITHOUT a shareid, is still attributed (the click registered
     in the EarnKaro dashboard) but the dl= deep link is DROPPED -- it
     lands on the Booking.com homepage. The shareid is what binds the
     destination. So links must be generated in the dashboard; constructing
     them earns the same as the generic link and loses the city, which is
     the whole point. Do not construct them.

     OPTION 2 — ready-made links per city, from your affiliate dashboard.
     Anything set here wins over Option 1. MakeMyTrip needs this option:
     its listing URLs use internal city codes that cannot be guessed, so
     MMT buttons stay on the fallback until you paste real links here. */
  links: {
    nalkheda:    { booking: "", mmt: "" },
    agar:        { booking: "", mmt: "" },
    ujjain:      { booking: "https://bitli.in/lYFh6JH", mmt: "" },
    indore:      { booking: "", mmt: "" },
    omkareshwar: { booking: "", mmt: "" }
  },

  /* OPTION 3 — the Cuelinks auto-convert script.
     If the Cuelinks JS snippet is installed on the page, it rewrites
     outbound merchant links to affiliate links at click time. When that
     script is detected, Booking.com buttons are pointed at the REAL city
     search URL and Cuelinks does the tracking.

     "auto" (the default) only does this when the script is actually found,
     so if the snippet is missing or fails to load, every button keeps the
     tracked generic link below and nothing is lost. Set to false to
     disable the behaviour entirely. */
  cuelinksJs: "auto",

  /* Your Cuelinks Publisher ID, from the Cuelinks dashboard under Account
     Settings. A short string such as "543CL529" — NOT the long number in a
     bitli.in redirect, which is a share id and will not work.

     Set it and this file loads Cuelinks itself; nothing else to paste. The
     Cuelinks script reads a global `pubID` (verified against
     cdn0.cuelinks.com/js/cuelinksv1.js: it uses `pub_id=`+pubID when that
     global exists) and converts outbound merchant links on click.

     Leave empty and nothing is loaded and nothing changes. */
  cuelinksPubId: "",

  /* The current generic links. Used whenever nothing above is filled in,
     so nothing breaks while the links are empty. */
  fallback: {
    booking: "https://bitli.in/3k5fYiv",
    mmt:     "https://bitli.in/280AF5M"
  }
};

(function () {
  var C = window.NALKHEDA_HOTELS || {};

  // Load Cuelinks ourselves when a Publisher ID is configured, so the only
  // thing anyone has to paste is that one id. Injected async and only once.
  (function loadCuelinks() {
    if (!C.cuelinksPubId || C.cuelinksJs === false) return;
    if (document.getElementById("cuelinks-js")) return;
    try { window.pubID = C.cuelinksPubId; } catch (e) { return; }
    var s = document.createElement("script");
    s.id = "cuelinks-js";
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://cdn0.cuelinks.com/js/cuelinksv1.js";
    (document.head || document.documentElement).appendChild(s);
  })();

  // What each city is called on Booking.com's search.
  var PLACE = {
    nalkheda:    "Nalkheda, Madhya Pradesh, India",
    agar:        "Agar Malwa, Madhya Pradesh, India",
    ujjain:      "Ujjain, Madhya Pradesh, India",
    indore:      "Indore, Madhya Pradesh, India",
    omkareshwar: "Omkareshwar, Madhya Pradesh, India"
  };

  // Is the Cuelinks auto-convert snippet actually on this page AND loaded?
  // Checked at click-relevant moments rather than once, because the snippet
  // loads async and may land after this file has already run.
  function cuelinksLive() {
    if (C.cuelinksJs === false) return false;
    if (window.cuelinks || window._cuelinks || window.cuelinksc) return true;
    var sc = document.getElementsByTagName("script");
    for (var i = 0; i < sc.length; i++) {
      var src = sc[i].src || "";
      if (src.indexOf("cuelinks") !== -1) return true;
    }
    return false;
  }

  function plainSearch(dest) {
    return "https://www.booking.com/searchresults.html?ss=" +
           encodeURIComponent(PLACE[dest]);
  }

  function cuelinks(target) {
    return "https://linksredirect.com/?cid=" + encodeURIComponent(C.cuelinksCid) +
           "&source=linkkit&url=" + encodeURIComponent(target);
  }

  function resolve(dest, ota) {
    var set = (C.links || {})[dest] || {};
    if (set[ota]) return set[ota];                       // explicit link wins

    // Booking.com search URLs are a stable, documented format, so these can be
    // built. MakeMyTrip's are not — they need internal city codes — so MMT
    // falls through to the generic link rather than to a guessed URL.
    // With the auto-convert snippet live, hand Cuelinks a real city search
    // URL and let it do the tracking. Without it, fall through to the
    // tracked generic link rather than emit an untracked booking.com URL
    // that would earn nothing.
    if (ota === "booking" && PLACE[dest] && cuelinksLive()) {
      return plainSearch(dest);
    }

    if (C.cuelinksCid && ota === "booking" && PLACE[dest]) {
      return cuelinks("https://www.booking.com/searchresults.html?ss=" +
                      encodeURIComponent(PLACE[dest]));
    }
    return (C.fallback || {})[ota] || "";
  }

  function apply() {
    var n = 0;
    var links = document.querySelectorAll("a[data-hotel][data-ota]");
    for (var i = 0; i < links.length; i++) {
      var a = links[i];
      var href = resolve(a.getAttribute("data-hotel"), a.getAttribute("data-ota"));
      if (!href) continue;
      a.href = href;
      // These are required on every outbound affiliate link, and a rewrite
      // must never be the thing that drops them.
      a.setAttribute("rel", "noopener sponsored");
      a.setAttribute("target", "_blank");
      n++;
    }
    return n;
  }

  // The snippet is async, so re-apply for a few seconds after first paint.
  // Once it is detected the links are upgraded and the watch stops.
  function applyAndWatch() {
    apply();
    if (C.cuelinksJs === false || cuelinksLive()) return;
    var tries = 0;
    var t = setInterval(function () {
      tries++;
      if (cuelinksLive()) { apply(); clearInterval(t); }
      else if (tries > 20) { clearInterval(t); }     // ~5s, then give up
    }, 250);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyAndWatch);
  } else {
    applyAndWatch();
  }

  // Exposed so the browser console can check the wiring:
  //   NALKHEDA_HOTELS_DEBUG()  ->  one row per button
  window.NALKHEDA_HOTELS_DEBUG = function () {
    var out = [];
    var links = document.querySelectorAll("a[data-hotel][data-ota]");
    for (var i = 0; i < links.length; i++) {
      out.push({
        city: links[i].getAttribute("data-hotel"),
        ota:  links[i].getAttribute("data-ota"),
        href: links[i].href,
        text: (links[i].textContent || "").trim().slice(0, 30)
      });
    }
    return out;
  };
})();
