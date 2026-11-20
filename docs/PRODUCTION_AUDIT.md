# PRODUCTION_AUDIT.md
Post-redesign production audit. 20 November 2026.
Audited against the working tree and a real browser at 390 / 768 / 1024 px.

**Nothing in this round has been deployed.** Awaiting release approval.

---

## Headline

The redesign is structurally sound. 31/31 pages render correctly on the shared
design system, SEO integrity is intact, and there are no broken links.

Three real defects were found and fixed, all of them in content and conversion
rather than code:

| # | Defect | Severity |
|---|---|---|
| 1 | Nalkheda–Agar Malwa distance stated four different ways across the site | **high** — factual |
| 2 | 17 of 44 affiliate buttons below the 44px tap target | **high** — revenue |
| 3 | `ujjain.html` published named hotels with fixed prices, in visible text *and* schema | **high** — breaks Hard Rule 4 |

Plus a stale-urgency bug: `ujjain.html` still displayed *"Next Navratri … Book NOW
— slots fill fast!"* a month after the festival ended.

---

## 1. Content accuracy

### Fixed: the distance conflict
`Nalkheda ↔ Agar Malwa` appeared as **25, 28, 30 and 35 km**.

35 km is correct — confirmed by `blog/agar-malwa-to-nalkheda.html`, which is titled
as a verified route guide, and by `how-to-reach.html` and `hotels.html` (25
instances between them).

**Two of the wrong figures were mine.** I used 28 km when rebuilding the homepage
because CLAUDE.md says 28, and I trusted the project file over the site's own
verified content. Corrected, and CLAUDE.md is now the outlier, not the source.

All instances standardised to 35 km. Genuinely different city pairs were left
alone (Ujjain→Agar 70 km, Indore→Agar 125 km, Dewas→Agar 80 km) — those are
internally consistent with the 100 km and 156 km figures.

### Fixed: stale urgency on ujjain.html
An earlier fix hid the countdown timer but left the block around it, which still
read *"🎉 Next Navratri … Oct 11 – Oct 20, 2026 · Book hawan & hotels NOW"*. The
whole `#navratri` section now hides once the end date passes.

### Verified consistent, no action needed
Temple timings (6:00–21:30, four aarti times, hawan counter 7:00–23:00) are
identical everywhere. Ujjain 100 km, Indore 156 km, Bhopal 210 km all consistent.

### Marked for verification, not guessed
- Baglamukhi Jayanti 2027 (Vaishakh Shukla Ashtami) — date unknown
- Chaitra and Sharad Navratri 2027 — dates unknown
- "₹249 MP Circuit guide" — on the site, absent from CLAUDE.md. Still sold?
- "500+ Happy Pilgrims" and "10K+ pilgrims monthly" — no source. Flagged, not removed.

### Source of truth created
`docs/facts.json` now holds every cross-page fact, with the authoritative value,
a `_verified` date, and explicit `_NEEDS_VERIFICATION` entries. Kept in `docs/`
so it is not publicly served — it records the second WhatsApp number that was
deliberately **not** deployed, and the unverified-claim list.

---

## 2. Hotel revenue

**There is no verifiable hotel inventory**, so per the brief the site now uses a
clearly-labelled destination-based model rather than invented properties.

Only three named properties existed site-wide, all on `ujjain.html`, none
verified, and all carrying fixed prices:

- Hotel Shipra Residency, ₹1,500–₹3,000
- Hotel Malwa Residency, ₹800–₹1,500 — also below the ₹1,000 floor
- "Dharamshala near Temple", ₹600–₹1,200

These breached Hard Rule 4 in the visible page **and inside the FAQPage JSON-LD**,
where Google reads it. All three replaced with area cards — Mahakal Lok, Freeganj,
Ujjain Junction — each with a price band, a trade-off, and an affiliate CTA, plus a
line stating plainly that these are areas and not properties.

See HOTEL_INVENTORY.md.

---

## 3. Affiliate links

All 44 buttons tested at runtime, after `hotel-links.js` rewrites them.

| Check | Result |
|---|---|
| Unique URLs resolving | 3/3 → HTTP 301, publisher id `5269672` |
| Broken links | 0 |
| `rel="noopener sponsored"` | 44/44 |
| `target="_blank"` | 44/44 |
| GA4 `affiliate_click` firing | 13 pages |
| **Tap target ≥ 44px** | **44/44 — was 27/44** |

See AFFILIATE_LINK_AUDIT.md.

---

## 4. SEO

31 pages: 31 canonicals, one `<h1>` each, 0 duplicate titles, 0 duplicate
descriptions, 0 malformed JSON-LD, 0 broken internal links. No URLs changed.

---

## 5. QA

31/31 render correctly. 0 failed requests, 0 broken internal links, 0 images
missing `alt`, no page over 1.5s to load, CLS 0 on every page measured.

The 28 console errors are the sandbox proxy blocking Google Analytics, not site
defects. One 404 appeared in a single run and did not reproduce.

---

## Still outstanding, outside this round

- **Affiliate deep links.** EarnKaro discards `dl=`, so clicks land on the
  Booking.com home page. Proven with three dashboard-generated links including a
  path-based URL. Follow-up with EarnKaro drafted; Cuelinks application pending.
  **This is the single biggest constraint on hotel revenue and no design change fixes it.**
- `pay-config.js` is empty, so the ₹99 guide has no payment link.
- CLAUDE.md's 28 km figure should be corrected to 35 km by the owner.
