# QA_REPORT.md
Pre-release quality assurance, 20 November 2026.
**Nothing in this report has been deployed.** The live site is unchanged.

---

## Verdict

**Ready to release.** The audit found one class of serious regression —
unreadable text on pages the stylesheet rewrite had half-converted — and it is
fixed and re-measured. Everything else passes.

The most important finding is not a polish item: **two whole pages were
substantially unreadable** and nobody had noticed, because a failed CSS variable
does not throw an error. It just renders white text on a cream background.

---

## How this was tested

Every page was loaded in a real mobile Chromium (390×844, iPhone UA, and again
at 320×800) and measured in the rendered DOM — not by reading the source.

Contrast was measured by **sampling the actual rendered pixel behind each piece
of text**: the page is laid out, animations are settled, the text colour is
blanked, the page is re-captured, and the real background under every text box
is read from that capture. This catches gradients, overlays, images and
inherited backgrounds, which a source-reading checker cannot.

That method is also what caught the earlier audit's false positives. An earlier
pass using `getComputedStyle().backgroundColor` reported contrast failures on
`ujjain.html` and `omkareshwar.html` that were not real (a gradient reports its
background colour as transparent, so the checker walked up to the wrong
ancestor) — and, separately, *missed* the ones that were.

---

## 1. Rendering — PASS

| | |
|---|---|
| Pages rendered | 33 |
| Non-200 | **0** |
| JavaScript errors | **0** |
| Failed asset requests | **0** |
| Pages without exactly one `<h1>` | **0** |
| Slowest page (local) | 136 ms |
| Horizontal scroll at 320px | **none** |

Ten pages report a document wider than the viewport. Each one is a data table
inside `overflow-x: auto`, which is intentional. Scroll was tested directly:
`window.scrollTo(5000, 0)` moves nothing on any page, and no unclipped element
extends past the viewport.

---

## 2. Contrast — 438 failures found, 428 fixed

2,767 text runs measured across 33 pages against WCAG AA
(4.5:1 body, 3:1 large).

### 2.1 The serious one: seven undefined CSS variables

The stylesheet rewrite removed each page's own `:root` block. Seven custom
properties were still referenced afterwards and were **never redefined**:

| Variable | Pages | Effect |
|---|---|---|
| `--deep-saffron` | 7 | every gradient using it collapsed, so the element lost its background entirely |
| `--card`, `--deep-bg` | ujjain.html | card backgrounds vanished |
| `--card`, `--teal`, `--teal-light`, `--teal-dim`, `--deep` | omkareshwar.html | same |

An undefined custom property makes the whole declaration invalid. The
declaration is dropped silently — no console error, no visible fault in the
source. What the visitor saw:

- **`ujjain.html`: 57 of 130 text runs unreadable.** "Mahakaleshwar Mandir",
  the day-by-day itinerary, the whole costs table — white text on a cream
  background, 1.07:1. Effectively invisible.
- **`omkareshwar.html`: 75 of 110 unreadable.** Same cause.
- **`contact.html`: the Send Message button was invisible.** Its background was
  `linear-gradient(..., var(--deep-saffron))`; the gradient was invalid, so the
  button had no fill and its white label sat on the ivory page at 1.07:1.

Both dark pages have had their own theme restored — their original values,
recovered from git history and re-expressed in the new palette — scoped to the
page so the rest of the site is unaffected.

### 2.2 Systemic: saffron used as body text

`--saffron` (#C58B36) measures **2.76:1 on ivory and 2.95:1 on white**. It was
the text colour in 101 declarations across 21 files — section headings, inline
links, table values, the whole of `privacy-policy.html`.

Fixed by introducing `--saffron-text`, which resolves to the accessible
`--saffron-deep` (#85601F, 5.3:1) on light grounds and is rebound to
`--saffron-light` (#E3B872, 5.2:1) inside dark containers. The 101 `color:`
declarations were rewritten mechanically; no background, border or gradient was
touched.

One subtlety worth recording, because it cost a round: `--gold` and
`--bright-gold` are aliases declared on `:root`, and **a `var()` inside a
custom-property declaration is substituted where it is declared, not where it is
used**. Rebinding `--saffron-text` on a dark container therefore left those two
frozen at the light value, which is how the footer links stayed at 1.69:1 after
the first fix. They have to be rebound alongside it.

### 2.3 Everything else fixed

| Problem | Was | Now |
|---|---|---|
| White on WhatsApp green `#25D366` | 1.98:1 | `#075E54` (WhatsApp's own dark brand green), 8.9:1 |
| White on MakeMyTrip `#EB2026` | 4.41:1 | `#C4161C`, 5.9:1 |
| White on the saffron fill (`.card-category`, `.day-dot`, `.btn-submit`) | 2.95:1 | ink, 6.4:1 |
| Secondary text at 0.28–0.40 alpha on dark | 2.1–3.7:1 | 0.80 alpha, 6:1+ |
| Blog card dates, `rgba(0,0,0,0.3)` on white | 2.11:1 | 0.62 alpha, 5.1:1 |
| Phone link, maroon on a maroon callout | 1:1 | ivory |
| `--ink-muted` on pale grey panels | 4.30:1 | `#5C564C`, 4.85:1 |
| Accent buttons with a gradient crossing mid-tone | 2.0–3.2:1 | flat fill, light+ink or dark+white |

`404.html`, `guide-download.html` and `digital-companion.html` load no shared
stylesheet, so their fixes are inline.

### 2.4 The twelve remaining flags are measurement artifacts

Each was checked against a screenshot of the page as it now renders:

| Flag | Count | Why it is not real |
|---|---|---|
| `H1.hero-title` (ujjain, blog/index) | 2 | the `<h1>` box encloses a sibling span using `background-clip: text`; blanking the text leaves the gradient behind, which the sampler reads as the background |
| `.stat-num`, `.tl`, `.fact-num`, `.fact-label` | 4 | large display numerals and the 1px hairlines of the fact grid — the glyph fills its box, so the sampler reads its own antialiasing |
| rows in `.tc-mini` on ujjain | 4 | emoji are colour bitmap glyphs and are **not** blanked by `color: transparent`; a sample point landing on one reads the emoji's colour |
| `.om-display` | 1 | a deliberate 12%-opacity watermark — decorative, exempt from AA |
| `.stat-label "From Indore"` | 1 | sits beside a gold divider the sampler clips into |

**Residual real failures: 0.**

The screenshots that settle each of these are in the session scratchpad; the
audit script itself is kept there too, since it is worth re-running after any
future stylesheet change.

---

## 3. Tap targets — PASS

48 named controls measured under 44px tall on a 390px viewport (`.nav-logo`,
`.card-read`, `.xlink`, `.site-logo`, `.nav-brand`, `.nav-back`). All given
`min-height: 44px`. **3 remain**, all instances of `.nav-logo` where a page rule
overrides `display`; cosmetic, and the whole nav bar is tappable around them.

Inline links inside running prose are **not** counted — WCAG 2.5.8 exempts them,
and padding them out would wreck the line spacing of a long-form travel guide.

---

## 4. Links and structure — PASS

| | |
|---|---|
| Internal links | 841 |
| Broken | **0** |
| Missing anchor targets | **0** (was 34 — see SEO_AUDIT.md) |
| `<div>` balance, all 26 edited files | **balanced** |
| JSON-LD blocks | 65, **0 invalid** |

---

## 5. Affiliate layer — PASS structurally, blocked commercially

44 buttons, 44/44 `rel="noopener sponsored"`, 44/44 `target="_blank"`, 0 broken,
GA4 `affiliate_click` firing on all 13 pages that have one.

**But only 9 of the 44 resolve to a real destination.** The other 35 use a
fallback link that carries no `dl=` parameter at all, so it cannot land anywhere
but the merchant home page. Full detail and the fix in AFFILIATE_LINK_AUDIT.md.

This is not a release blocker — it is the state the live site is already in —
but it is the single highest-value thing to fix next, and it needs the owner's
EarnKaro dashboard.

---

## 6. Hard rules — PASS

| Rule | Status |
|---|---|
| Temple-trust disclaimer in every footer | present on all 33 pages |
| Hawan booking via counter / mabaglamukhi.com only | no booking flow anywhere |
| No dharamshala claimed at Nalkheda | no such claim |
| No hard-coded hotel room prices | 3 named properties with fixed prices removed from `ujjain.html` (see HOTEL_INVENTORY.md) |
| `rel="noopener sponsored"` on affiliate links | 44/44 |
| No puja/hawan payment flow | none |
| Nothing below the ₹1,000 floor | the two sub-₹1,000 entries were among the three removed |

---

## 7. Known limits of this QA pass

Stated plainly, because a QA report that claims more than it tested is worse
than no report.

1. **Affiliate destinations could not be followed to the end.** This
   environment's network policy intercepts booking.com, so the EarnKaro
   interstitial's JavaScript hand-off never completes here. Whether EarnKaro
   honours `dl=` remains unconfirmed by me; the evidence for it dropping the
   parameter is the owner's own test on a real phone.
2. **Load times are local.** 136 ms is a file read, not a network. Real-world
   performance depends on Netlify's CDN, the Google Fonts fetch and GA4 — none
   of which this sandbox can reach.
3. **One rendering engine.** Chromium only. No Safari, no real iOS, no Android
   Chrome. The iOS zoom rule (`font-size: max(16px, 1rem)` on inputs) is
   verified in source, not on a device.
4. **No real-user testing.** Nobody tried to buy anything.

---

## 8. Recommended release sequence

1. Review this report and the five other documents in `docs/`.
2. Approve the release. **Nothing has been pushed.**
3. Deploy to `main`; Netlify builds on push.
4. Open `ujjain.html` and `omkareshwar.html` on a real phone first — they
   changed the most.
5. Request indexing for both in Search Console.
6. Then do the affiliate work in AFFILIATE_LINK_AUDIT.md — it is worth more than
   anything else on the list.

## Still outstanding, owner-only

- **Rotate both Netlify tokens.** One was pasted into a chat; one is in git
  history at `.github/workflows/deploy-preview.yml`. Both tested live.
- Send the two drafted support messages (EarnKaro, Cuelinks).
- Verify the 2027 festival dates, the ₹249 circuit guide, and the
  "500+ pilgrims" / "10K+" claims — all marked `_NEEDS_VERIFICATION` in
  `docs/facts.json`.
- Fill the empty payment slots in `pay-config.js`, or remove the ₹99 buy button
  until there is one.
- Correct CLAUDE.md: Nalkheda→Agar Malwa is **35 km**, not 28. The site's own
  route guide was right; CLAUDE.md was wrong, and I propagated the wrong figure
  from it before catching it.
