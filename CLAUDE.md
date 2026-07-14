# Nalkheda.in — Claude Code Project Context

## Project Overview
Independent pilgrimage travel guide for **Maa Baglamukhi Temple, Nalkheda, Madhya Pradesh**.
Static HTML site on Netlify, auto-deployed from GitHub `main` branch.

**Live site:** https://nalkheda.in
**GitHub:** ashwinv49-bit/Nalkheda.in
**Netlify site ID:** ca3bed4f-1d5f-4703-944d-b541f8a6ab3a
**Owner:** Ashwin Verma — ashwinv49@gmail.com

---

## Key Credentials (never commit to public files)
- **WhatsApp:** +91 9754709571
- **UPI:** ashwinv49@ybl
- **GA4:** G-331NJD7HG3
- **Booking.com affiliate:** https://bitli.in/3k5fYiv
- **MakeMyTrip affiliate:** https://bitli.in/280AF5M

---

## Hard Rules — Never Break These

1. **NOT affiliated with the official temple trust.** The disclaimer "Not affiliated with Shaskiya Maa Baglamukhi Mandir Prabandh Samiti" must appear on every page footer.
2. **Hawan/puja booking = mabaglamukhi.com ONLY.** Never build a direct booking flow on nalkheda.in. WhatsApp enquiry only.
3. **Dharamshala bookings** go to mabaglamukhi.com — never show our WhatsApp number for dharamshala booking. The dharamshala is run by the temple trust, not us.
4. **Never hard-code specific hotel room prices** — they go stale. Use price ranges (Rs 500–1200).
5. **Affiliate links** must use `rel="noopener sponsored"`.
6. **No puja/hawan payment flow** — only WhatsApp enquiry links.

---

## Monetization

### Tier 1 — Digital Guide (₹99)
- PDF delivered via WhatsApp after payment
- Includes: Nalkheda Yatra PDF (45 pages, Hindi + English) + 52 Shaktipeethas bonus PDF
- Payment: UPI ashwinv49@ybl or WhatsApp order
- WA link: `https://wa.me/919754709571?text=Hi!%20I%20want%20to%20buy%20the%20Nalkheda%20Travel%20Guide%20PDF%20for%20%E2%82%B999.`

### Tier 2 — Full Yatra Package (₹1,999 starting)
- Hotel booking + local guide + hawan coordination + personalised itinerary + WhatsApp support + circuit extension
- WhatsApp only — no direct payment on site
- WA link: `https://wa.me/919754709571?text=Jai%20Maa%20Baglamukhi!%20I%20want%20the%20Full%20Yatra%20Package%20(hotel%20booking%20%2B%20guide%20%2B%20all%20arrangements)%20starting%20%E2%82%B91%2C999.%20Please%20share%20details.`

---

## Site Architecture

### Pages
| File | URL | Status |
|------|-----|--------|
| `index.html` | / | Indexed ✓ |
| `temple-timings.html` | /temple-timings | Indexed ✓ |
| `how-to-reach.html` | /how-to-reach | Indexed ✓ |
| `hotels.html` | /hotels | Indexed ✓ |
| `faq.html` | /faq | Indexed ✓ (as /faq clean URL) |
| `travel-guide.html` | /travel-guide | Not indexed (thin content) |
| `ujjain.html` | /ujjain | Not indexed (new, needs indexing request) |
| `omkareshwar.html` | /omkareshwar | Not indexed (new, needs indexing request) |
| `contact.html` | /contact | Not indexed |
| `privacy-policy.html` | /privacy-policy | Not indexed |
| `terms.html` | /terms | Not indexed |
| `disclaimer.html` | /disclaimer | Not indexed |

### Blog Posts (`/blog/`)
| File | Notes |
|------|-------|
| `nalkheda-to-omkareshwar.html` | Position 5.53 in GSC, 0 clicks — title recently fixed |
| `nalkheda-hotels-guide.html` | Getting 3 clicks, pos ~9.86 |
| `nalkheda-vs-datia-vs-kangra.html` | Indexed |
| `best-time-to-visit-nalkheda.html` | Not indexed |
| `indore-to-nalkheda.html` | Not indexed |
| `ujjain-to-nalkheda.html` | Not indexed |
| `navratri-nalkheda-2026.html` | Not indexed |
| `baglamukhi-jayanti-2026.html` | Not indexed |
| `nalkheda-yatra-checklist.html` | Not indexed |
| `baglamukhi-puja-benefits.html` | Not indexed |

### PDFs (in repo root — WARNING: publicly accessible)
- `nalkheda-dham-guide-english.pdf` — main paid product
- `nalkheda-dham-guide-hindi.pdf` — Hindi version
- `52-shaktipeethas-nalkheda.pdf` — bonus PDF bundled with ₹99 purchase
- `mp-circuit-complete-guide.pdf`
- `ujjain-complete-guide.pdf`
- `omkareshwar-complete-guide.pdf`

**Note:** PDFs are tracked in git and publicly accessible at nalkheda.in/filename.pdf. Delivery is manual via WhatsApp after payment. Consider moving to Google Drive private links for better security.

---

## CSS Design System

```css
:root {
  --saffron: #E8621A;
  --deep-saffron: #C4480E;
  --gold: #D4A017;
  --bright-gold: #F5C518;
  --dark: #1A0A00;
  --deep-maroon: #3D0C02;
  --cream: #FDF6E3;
  --pale-gold: #FFF3CC;
  --text: #2C1A00;
  --muted: #7A5C3A;
}
```

- **Dark sections** use: `linear-gradient(180deg, #0d0500 0%, #1a0a00 100%)`
- **Body font:** Crimson Pro (Google Fonts)
- **Display font:** Cinzel Decorative (Google Fonts)
- **Mobile-first** — 95.5% of traffic is mobile

---

## Netlify Configuration
- **Deploys from:** `main` branch on push
- **Clean URLs:** Netlify rewrites serve `/page` and `/page.html` both as 200
- **Canonical strategy:** All canonicals use `.html` extension (e.g. `https://nalkheda.in/faq.html`)
- No `netlify.toml` needed — auto-configured

---

## Search Console Insights (as of July 4, 2026)

### Performance
- Best day: Jun 30 — 8 clicks, 853 impressions
- Total indexed: 6 pages (out of ~28)
- Mobile: 95.5% of traffic
- Homepage position: 9.58 (near page 1)

### Top Keyword Opportunities
| Query | Impressions | Position | Fix |
|-------|-------------|----------|-----|
| "nal kheda" (2 words) | 403 | 12.14 | Added to meta description |
| "nalkheda direction" | 125 | 8.18 | Title + description updated |
| "nalkheda nearest railway station" | 172 | 10.2 | Description updated |
| "nalkheda mandir timing" | 82 | 10.2 | On temple-timings page |
| nalkheda-to-omkareshwar blog | 64 | 5.53 | Title shortened (was truncated) |

### Coverage Issues (July 4, 2026)
- **3 pages "Crawled - currently not indexed"** — likely travel-guide.html, contact.html, one blog post
- **3 pages "Alternate page with proper canonical"** — /faq, /hotels, /temple-timings (clean URLs indexed instead of .html)
- **22 total not indexed** — ujjain.html, omkareshwar.html, most blog posts need indexing requests

---

## Temple Facts (for content accuracy)
- **Address:** Maa Baglamukhi Mandir, Nalkheda, Agar Malwa, MP — 465445
- **GPS:** 23.8413 N, 76.2356 E
- **Darshan:** 6:00 AM – 9:30 PM daily
- **Morning aarti:** 6:00 AM | Evening aarti: 7:30 PM | Shayan aarti: 9:00 PM
- **Hawan booking counter:** 7:00 AM – 11:00 PM (in-person at temple)
- **Hawan online:** mabaglamukhi.com (official govt site)
- **Nearest city:** Agar Malwa (28 km)
- **Nearest airport:** Indore (156 km)
- **From Ujjain:** 100 km, ~2 hrs
- **From Indore:** 160 km, ~3–3.5 hrs
- **From Bhopal:** 210 km, ~4 hrs
- **Main festival:** Baglamukhi Jayanti — Vaishakh Shukla Ashtami
- **Navratri 2026 (Sharad):** October 11 – October 20 (Ghatasthapana Oct 11, Dussehra Oct 20)

---

## MP Pilgrimage Circuit
The site covers a 3-temple circuit:
1. **Nalkheda** — Maa Baglamukhi (homepage, main focus)
2. **Ujjain** — Mahakaleshwar Jyotirlinga (`ujjain.html`)
3. **Omkareshwar** — Omkareshwar Jyotirlinga (`omkareshwar.html`)

Nalkheda → Ujjain: 100 km | Ujjain → Omkareshwar: 135 km | Total circuit: ~235 km

---

## Git Rollback Guide

Every major change is committed to `main` or the feature branch. To roll back:
```bash
git log --oneline          # see all commits with short hash
git checkout <hash> -- index.html   # restore one file to a specific commit
git reset --hard <hash>    # roll back entire branch to a commit (destructive)
```
Feature branch: `claude/nalkheda-temple-rebuild-gRBib`
Main branch auto-deploys to Netlify on push.

---

## Available Skills (Claude Code slash commands)

- `/audit` — Full codebase health check (CSS, bugs, conversion gaps, mobile, schema, hard-rules compliance)
- `/seo` — SEO audit: meta tags, schema, GSC keyword gaps, canonicals, internal links
- Source: `.claude/agents/audit.md` and `.claude/agents/seo.md`

---

## Design System (Current — as of July 2026)

**CSS Variables:**
```css
--pitambara: #F4C430       /* Primary CTA — Pitambara yellow (Baglamukhi sacred colour) */
--pitambara-deep: #D4A017  /* Hover state */
--maroon: #6B0F1A          /* Nav, dark section backgrounds */
--deep-maroon: #3D0C02     /* Deepest dark */
--gold: #CFB53B            /* Icon halos, accents — use sparingly */
--bright-gold: #F5C518     /* Countdown timer, festival dates */
--dark: #1A0A00            /* Body dark bg */
--cream: #FDF6E3           /* Light section bg */
--pale-gold: #FFF3CC       /* Card backgrounds */
--text: #2C1A00            /* Body text on light bg */
--text-light: #FFF8E7      /* Body text on dark bg */
--muted: #7A5C3A           /* Secondary text */
--saffron: #E8621A         /* Urgency accents only */
--wa-green: #25D366        /* WhatsApp — never change */
```

**Fonts:**
- `'Tiro Devanagari Hindi', serif` — sacred Devanagari headings
- `'Poppins', sans-serif` — English section titles, nav, labels
- `'Mukta', sans-serif` — all body text (Hindi + English), buttons, inputs

**WCAG rules:**
- Dark maroon `#2C1A00` on Pitambara yellow `#F4C430` = 9.1:1 ✅
- All form inputs: `font-size: max(16px, 1rem)` (prevents iOS Safari zoom)
- Section labels minimum 0.8rem
- Buttons: `border-radius: 6px` (no clip-path — was clipping text on small phones)

---

## What's Been Built (session history)

### Early sessions
- Linked ujjain.html and omkareshwar.html from homepage `#nearby` section
- Added `#circuit` section to homepage (dark maroon, immediately after hero)
- Added Navratri countdown strip (`#navratri-strip`)
- Added festival calendar strip (`#festivals`)
- Added pilgrim testimonials section (`#testimonials`)
- Added SVG pilgrimage route map in circuit section
- Added WhatsApp popover with 4 pre-filled message options
- Removed phone number from dharamshala booking (redirected to mabaglamukhi.com)
- Added ₹1,999 Full Yatra Package pricing tier to homepage + travel-guide.html
- Fixed canonical URLs on contact.html, terms.html, disclaimer.html, travel-guide.html
- Trimmed meta descriptions on ujjain.html and omkareshwar.html to <160 chars
- SEO fixes based on Search Console: FAQ title, how-to-reach title, blog post title
- Added "Nal Kheda" 2-word variant to homepage meta description
- Updated PDFs: disclaimer footer on every page, contacts page URL corrected

### Session — Google Sheets + Funnel rebuild (pre-redesign)
- Connected trip planner form → Google Sheets via Apps Script (DEFAULT_SHEET constant hardcoded)
- Rebuilt WhatsApp popover: only buyer-intent options reach WhatsApp; info-seekers deflected to website pages
- Replaced ₹1,999 fixed package with 3 enquiry-based trip cards (Nalkheda Only / +Ujjain / Full Circuit)
- Added "Trusted Yatra Partner" credibility section with 4 stat tiles
- Added quick enquiry strip above footer (name + phone + date → WhatsApp)
- Added buyer questions accordion: "Planning Yourself" vs "Want Us to Plan It" split
- Updated cab prices: Indore ₹6k–7k, Ujjain ₹3k–5k, Dewas ₹3.5k–4.5k
- netlify.toml redirects changed from 200 to 301

### Session — Complete Redesign (July 14, 2026) — branch: claude/nalkheda-temple-rebuild-gRBib
- **Palette:** Pitambara yellow (`#F4C430`) as primary; maroon (`#6B0F1A`) for dark sections
- **Fonts:** Poppins + Mukta + Tiro Devanagari Hindi (replaced Cinzel Decorative / Crimson Pro / Noto)
- **Hero:** Yellow-to-maroon gradient; single primary CTA with dark text on yellow (WCAG 9.1:1)
- **Buttons:** Removed `clip-path: polygon()` parallelogram (was clipping text on ≤320px phones)
- **iOS fix:** All form inputs `font-size: max(16px, 1rem)` — prevents Safari auto-zoom
- **Schema:** Added Product schema (₹99 PDF) + Event schema (Navratri 2026) to `<head>`
- **Content:** Fixed PDF page count "13 pages" → "45 pages"; replaced unverifiable "4.9★" with "500+ Happy Pilgrims"
- **Trip planner:** Added Skip→WhatsApp button on steps 1 and 2
- **Bug fixes:** Closed unclosed `<script>` tag (GA was inside JS block); removed duplicate `.ritual-item` transition; replaced hardcoded `#0d0500` with `var(--dark)`; removed broken `hreflang="hi"`
- **Skills:** Created `/audit` and `/seo` skills in `.claude/agents/`

---

## Pending / Future Work
- Request indexing in Search Console for ujjain.html, omkareshwar.html, blog posts
- Bulk up travel-guide.html content (currently "crawled not indexed" = thin)
- Remove PDFs from public git → move to Google Drive private links for delivery
- Consider AdSense on blog posts only (not conversion pages) once traffic hits 500/day
- Add more blog posts targeting zero-click keywords from Search Console
