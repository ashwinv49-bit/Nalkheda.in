# IMPLEMENTATION_ROADMAP.md
Phased plan. Written 20 November 2026.

---

## Blockers that sit outside design

These decide whether the hotel-revenue objective can succeed at all. Design cannot fix them.

| # | Blocker | Owner | Status |
|---|---|---|---|
| B1 | Affiliate deep links land on the Booking.com homepage | owner + partner | **open** |
| B2 | Netlify token in public git history | owner | **open, urgent** |
| B3 | No hotel dataset exists | owner / research | open |
| B4 | `pay-config.js` empty — ₹99 has no payment link | owner | open |
| B5 | `CLAUDE.md` public since repo went public | owner decision | open |

**B1 is the one that matters commercially.** Options, in order of preference:
1. Netlify-style fix: ask EarnKaro support why `dl=` is dropped for Booking.com
2. Apply to CJ for Booking.com direct (`cj.com/en-gb/publisher/partners/booking.com`) — supports deep links and a search-box widget
3. Cuelinks (already coded for — one publisher ID activates it)
4. Accept homepage landing and compete on content instead

---

## Phase 1 — Audit ✅ complete

Delivered: `PROJECT_AUDIT.md`, `REDESIGN_STRATEGY.md`, `SEO_MIGRATION_PLAN.md`, this file.
No source files changed.

---

## Phase 2 — Design system extraction
**The foundation. Nothing else should start first.**

1. Create `/assets/css/tokens.css` with the brief's palette
2. Extract shared CSS from `index.html` into `base.css` and `components.css`
3. Add Playfair Display + Inter, keep Tiro Devanagari for Hindi
4. Convert **one** page (`hotels.html`) as the pilot
5. Verify: render at 390/768/1024, contrast, no layout shift, no CSS regressions

Exit criteria: one page fully on the new system, visually verified, zero console errors.

---

## Phase 3 — Homepage
1. Split `index.html` (226 KB, 13,435 words) — move temple detail, circuit and shop content to their own pages
2. Rebuild to the 11-section structure
3. Replace fabricated testimonials with an honest trust section
4. Reduce CTAs from ~39 by intent to one per section
5. Verify Core Web Vitals on a real render

---

## Phase 4 — Hotel directory and affiliate engine
1. Build `hotel-card` and `area-card` components
2. Create `/assets/data/hotels.json` schema (empty, documented)
3. Build `/hotels-near-baglamukhi-temple/`
4. Extend `hotel-links.js` for per-hotel links
5. Add remaining GA4 events: `hotel_card_view`, `hotel_click`, `affiliate_outbound`, `guide_purchase_click`, `whatsapp_enquiry`, `itinerary_view`
6. **Hold `/hotels-in-nalkheda/`** pending the inventory question in SEO_MIGRATION_PLAN §2

Depends on B1 for revenue, not for delivery.

---

## Phase 5 — Inner pages
Convert the remaining 20 legacy-design pages. Order by traffic: `how-to-reach.html`, `blog/ujjain-to-nalkheda.html`, `temple-timings.html`, `hotels.html`, `faq.html`, then the rest.
New pages: `/about/`, `/nalkheda-ujjain-trip/`.
Extend `disclaimer.html` to cover affiliate disclosure rather than adding a duplicate page.

---

## Phase 6 — Technical SEO
Canonicals on the 3 pages missing them; schema on the 4 missing it; `TouristDestination` on destination pages; `Article` on blog posts lacking it; breadcrumbs sitewide; regenerate sitemap; run the SEO_MIGRATION_PLAN pre-launch checklist.

---

## Phase 7 — Performance and mobile
Targets: LCP < 2.5 s, INP < 200 ms, CLS < 0.1.
Work: responsive `srcset`, lazy-load below fold, font-display swap and preconnect, trim unused CSS after extraction, re-measure at 390 px.

Current baseline for comparison: homepage 689 KB transfer, 120 KB images.

---

## Phase 8 — QA and deployment
Full crawl for 404s · schema validation · contrast audit · keyboard navigation · render at 320/390/768/1024 · verify all 31 sitemap URLs · confirm `CLAUDE.md`, `.claude/`, `.github/` stay unserved · deploy · monitor GSC weekly for 6 weeks.

---

## Reporting

After each phase: what was completed, files modified, missing content or assets, errors and unresolved issues, next step. No feature claimed as working unless tested on a real render.

---

## Sequencing note

Phase 2 is the gate. Starting Phase 3 or 4 before the CSS is extracted means building new components into the same 34-copy inline-CSS problem the redesign is meant to remove.
