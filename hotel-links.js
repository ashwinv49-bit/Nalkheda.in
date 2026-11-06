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

  /* OPTION 2 — ready-made links per city, from your affiliate dashboard.
     Anything set here wins over Option 1. MakeMyTrip needs this option:
     its listing URLs use internal city codes that cannot be guessed, so
     MMT buttons stay on the fallback until you paste real links here. */
  links: {
    nalkheda:    { booking: "", mmt: "" },
    agar:        { booking: "", mmt: "" },
    ujjain:      { booking: "", mmt: "" },
    indore:      { booking: "", mmt: "" },
    omkareshwar: { booking: "", mmt: "" }
  },

  /* The current generic links. Used whenever nothing above is filled in,
     so nothing breaks while the links are empty. */
  fallback: {
    booking: "https://bitli.in/3k5fYiv",
    mmt:     "https://bitli.in/280AF5M"
  }
};

(function () {
  var C = window.NALKHEDA_HOTELS || {};

  // What each city is called on Booking.com's search.
  var PLACE = {
    nalkheda:    "Nalkheda, Madhya Pradesh, India",
    agar:        "Agar Malwa, Madhya Pradesh, India",
    ujjain:      "Ujjain, Madhya Pradesh, India",
    indore:      "Indore, Madhya Pradesh, India",
    omkareshwar: "Omkareshwar, Madhya Pradesh, India"
  };

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

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", apply);
  } else {
    apply();
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
