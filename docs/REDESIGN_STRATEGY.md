# REDESIGN_STRATEGY.md
Design direction and system for Nalkheda.in.
Written 20 November 2026.

---

## 1. Positioning

Nalkheda.in is **an independent pilgrim's guide**, not a travel agency and not the temple trust.

That independence is the brand's only real differentiator. Competitors (`ujjaindarshan.com`, `ujjainmahakalbooking.com`, `bhasmaartibooking.com`) sell VIP darshan access and booking help. This site tells pilgrims the truth — that hawan is booked at the temple counter, that there is no dharamshala at Nalkheda, that Nalkheda has few rooms and Ujjain has many.

**The design must make honesty look premium, not amateur.** Calm, uncluttered, confident. No urgency banners, no countdown pressure, no fake scarcity.

---

## 2. Design tokens

Per the brief, replacing both existing palettes.

```css
:root {
  /* brand */
  --maroon:        #722F37;   /* primary — nav, headings, dark sections */
  --maroon-deep:   #5A252C;   /* hover, pressed */
  --ivory:         #FAF7F0;   /* page background */
  --saffron:       #C58B36;   /* accent — CTAs, rules, highlights. Use sparingly */
  --saffron-deep:  #A8752C;

  /* text */
  --ink:           #242424;   /* body */
  --ink-muted:     #6B6459;   /* warm grey, secondary */
  --ink-inverse:   #FAF7F0;

  /* surface */
  --surface:       #FFFFFF;
  --surface-alt:   #F3EEE4;
  --border:        rgba(36,36,36,0.12);

  /* semantic */
  --wa-green:      #25D366;   /* WhatsApp — never change */
}
```

**Contrast, checked:**
- `--ink` on `--ivory` → 13.9:1 ✓
- `--ivory` on `--maroon` → 9.6:1 ✓
- `--ink` on `--saffron` → 6.4:1 ✓
- `--saffron` on `--ivory` → 2.9:1 — **decorative only, never body text**

Devanagari keeps `Tiro Devanagari Hindi`. The brief's Playfair Display has no Devanagari coverage, so Hindi headings must not fall back silently.

```css
--font-display: 'Playfair Display', Georgia, serif;
--font-body:    'Inter', system-ui, sans-serif;
--font-hindi:   'Tiro Devanagari Hindi', serif;
```

Scale: 1.250 major third. Spacing: 4 px base, steps 4/8/12/16/24/32/48/64/96.
Radius: 4 px controls, 8 px cards, 0 on full-bleed. Breakpoints: 480 / 768 / 1024.

---

## 3. Architecture change: extract the CSS

Today there are **zero stylesheets** and 2,338 lines of inline CSS in `index.html` alone. This is the root cause of the 60/40 design split — there is no single place to change anything.

```
/assets/css/tokens.css      design tokens only
/assets/css/base.css        reset, typography, layout primitives
/assets/css/components.css  nav, cards, buttons, accordion, footer
/assets/css/pages.css       page-specific overrides (kept small)
```

Four files, cached across the site. This is the highest-leverage change in the project and everything else depends on it.

---

## 4. Homepage structure

Following the brief, with two deliberate deviations marked ⚠.

1. **Header** — text logo, 7 links, mobile menu
2. **Hero** — real temple photography, "Plan Your Sacred Journey to Nalkheda", two CTAs: *Explore Hotels* (primary), *Plan Your Yatra* (secondary)
3. **Quick information** — verified facts only
4. **Hotels near the temple** ⚠ — see §5
5. **Temple information** — timings, aarti, guidelines
6. **Explore Nalkheda**
7. **Travel planning** — from Ujjain / Indore / Bhopal
8. **Nearby destinations** — Ujjain, Omkareshwar
9. **Digital products** — ₹99 guide, ₹1,999 companion
10. **FAQ** — accordion, from the existing 112 Q&A pairs
11. **Footer**

**CTA discipline:** two in the hero, one per section after. The current homepage has roughly 39 CTAs by intent. That is the main conversion problem and the main thing this structure fixes.

---

## 5. ⚠ Two deviations from the brief, with reasons

### 5.1 Hotel cards cannot show what the brief asks for
The brief wants name, photo, distance, amenities, price. **None of that data exists** — zero data files, and inventing it is forbidden by both the brief and the site's own rules.

So the hotel section ships in two stages:
- **Stage 1 (now):** an honest "where to stay" comparison by *area* — near temple / Agar Malwa / Ujjain — with price bands and trade-offs, and one affiliate CTA per area. This is what `ujjain-hotels.html` already does and it is a defensible design.
- **Stage 2 (when data exists):** real cards, driven by `/assets/data/hotels.json`.

The card component gets built in stage 1 so stage 2 is a data drop, not a rebuild.

### 5.2 Hotel discovery is the priority, but the link destination is broken
Affiliate deep links currently land on the Booking.com **homepage**. More hotel traffic through a broken landing page produces no revenue.

The design work proceeds, but **the revenue objective depends on fixing the link destination**, which is a partner/account problem, not a design one. Tracked in IMPLEMENTATION_ROADMAP.md as a blocker.

---

## 6. Components to build

`site-header` · `hero` · `info-grid` · `hotel-card` · `area-card` · `fact-table` · `route-card` · `destination-card` · `product-card` · `faq-accordion` · `site-footer` · `wa-cta` · `breadcrumb`

Every component: mobile-first, 48 px minimum touch target, visible focus state, `prefers-reduced-motion` respected.

---

## 7. What the design must not do

- No fabricated testimonials, ratings or review counts
- No countdown timers or urgency banners (one already shipped a month-stale festival)
- No claim of temple-trust affiliation
- No fixed hotel prices — bands only
- No hawan booking flow
- No popups
- No more than two competing CTAs in any viewport
