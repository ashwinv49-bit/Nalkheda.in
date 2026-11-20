# PROJECT_AUDIT.md
Nalkheda.in — audit of the existing site before redesign.
Audited 20 November 2026 against the live site and the repository.

---

## 1. What exists

| | |
|---|---|
| Pages | 34 HTML (20 root, 14 blog) |
| Stylesheets | **0** — every page carries its own inline `<style>` |
| JavaScript | 4 files: `hotel-links.js`, `wa-modal.js`, `wa-track.js`, `pay-config.js` |
| Images | 20 (9 jpg, 10 webp, 1 png) |
| Repo size | 3.2 MB |
| Hosting | Netlify, static, `pretty_urls` on |
| Analytics | GA4 `G-331NJD7HG3` on all pages |

---

## 2. What is already working — preserve this

- **Static architecture.** No CMS, no database, no server. Fast and hard to attack. Keep it.
- **Technical SEO plumbing is unusually good for a site this size:** sitemap (31 URLs), robots.txt, `llms.txt`, HTTPS + HSTS, canonicals on 31/34 pages.
- **Rich schema already deployed:** 16 Organization, 16 FAQPage (112 Q&A pairs), 27 BreadcrumbList, 13 BlogPosting, 4 TouristAttraction, 3 Product, 1 WebSite. This is a real asset.
- **No fabricated review schema.** Verified: zero `Review`, zero `aggregateRating`. The 18 `Person` nodes are all legitimate author/seller/founder entries.
- **Security headers** on every path (added 19 Nov): CSP, X-Frame-Options, Referrer-Policy, Permissions-Policy.
- **Affiliate tagging already abstracted.** 44 buttons carry `data-hotel` + `data-ota`, resolved centrally by `hotel-links.js`. The brief asks for a configurable affiliate architecture — it already exists and works.
- **GA4 outbound click tracking** (`affiliate_click`, added 18 Nov) with city, OTA, page and deep-link status.
- **Two genuinely high-traffic pages** (see §6).

---

## 3. What needs improvement

### 3.1 Design system is split roughly 60/40 — the "redesign" was never finished
**20 of 34 pages still use the OLD system** (Cinzel Decorative / Crimson Pro / Noto Serif Devanagari). Only 14 use the current one (Poppins / Mukta / Tiro Devanagari).

Old-system pages include **every blog post**, all legal pages, `ujjain.html` and `omkareshwar.html`.

Colour tokens tell the same story: the legacy saffron `#E8621A` appears on 33 pages; the "new" Pitambara `#F4C430` on only 13.

Neither palette matches the brief's target (`#722F37` / `#FAF7F0` / `#C58B36`).

### 3.2 No shared CSS — the biggest maintainability problem
Zero `.css` files. `index.html` alone holds **2,338 lines of inline CSS**; `digital-companion.html` 757. Any token change means editing 34 files. The brief's "reusable components and design tokens" cannot exist until this is fixed.

### 3.3 index.html is too large
226 KB, 13,435 words, ~30,000 px tall on mobile. It tries to be homepage, temple guide, hotel page, circuit page and shop at once.

### 3.4 Fabricated testimonials
Four named testimonials (Priya Sharma, Rajesh Tiwari, Sunita Verma, Avinash Kulkarni) appear only in `index.html`, match no real lead, and there is no review-collection mechanism anywhere. They are not in schema, which limits the damage, but they are untrue and sit on the page that carries the brand.

### 3.5 Pages missing basics — CORRECTED 20 Nov, not an issue
I first listed `404.html`, `google926715b5aa1cbc3a.html` and
`guide-download.html` as missing canonicals and schema. On checking, all three
are deliberately `noindex` and absent from the sitemap, which is the correct
treatment for an error page, a search-console verification file and a paid
delivery page. Nothing to fix.

Full SEO hygiene re-check, 20 Nov:

| Check | Result |
|---|---|
| Broken internal links | **0** |
| Duplicate titles | **0** |
| Duplicate descriptions | **0** |
| Descriptions over 160 chars | 0 |
| Pages missing a description | 3 — all `noindex`, correct |
| Titles over 60 chars | 3, but two are inflated by `&amp;` counting as 5 source characters and 1 rendered. Only `mp-circuit.html` is genuinely 61, which is borderline and not worth changing. |

The on-page SEO is in good shape. The remaining opportunities are not hygiene
fixes — they are indexing requests in Search Console (owner action) and thin
content on `travel-guide.html`.

---

## 4. What should be removed

| Item | Why |
|---|---|
| Fabricated testimonials | untrue; replace with real reviews or an honest trust section |
| Inline CSS duplication | replace with shared stylesheet + tokens |
| Legacy font/colour system on 20 pages | unify |
| `CLAUDE.md` from the public repo | repo went public 20 Nov; this file contains pricing, GSC data and strategy |

Nothing else should be deleted. The admin panel, WhatsApp modal and affiliate layer all serve a purpose documented below.

---

## 5. What must be preserved

1. **`how-to-reach.html` and `blog/ujjain-to-nalkheda.html` URLs** — see §6.
2. **All 31 sitemap URLs and their canonicals.**
3. **The `data-hotel` / `data-ota` attribute contract** — `hotel-links.js` depends on it.
4. **`wa-modal.js` field names** (`wa-name`, `wa-phone`, `wa-city`, `wa-date`, `wa-persons`) — the Google Apps Script expects a fixed 14-column layout.
5. **The six hard rules in CLAUDE.md** — not affiliated with the temple trust; hawan booking via counter/mabaglamukhi.com only; no dharamshala at Nalkheda; price ranges not fixed prices; `rel="noopener sponsored"`; no puja payment flow.
6. **GA4 ID and the `affiliate_click` event schema.**

---

## 6. Pages with SEO value

| Page | Clicks | Impressions |
|---|---|---|
| `how-to-reach.html` | 1,761 | 114,235 |
| `blog/ujjain-to-nalkheda.html` | 1,189 | 90,289 |

These two carry the site. **The brief proposes renaming `/how-to-reach` to `/how-to-reach-nalkheda/`. That is the single largest SEO risk in the project** and is addressed in SEO_MIGRATION_PLAN.md.

Also indexed: `/`, `/temple-timings`, `/hotels`, `/faq`.
Not indexed (per CLAUDE.md): `ujjain.html`, `omkareshwar.html`, most blog posts, `travel-guide.html` (thin).

---

## 7. Revenue features — current state

### 7.1 Hotel affiliate (stated priority #1)

44 tagged buttons:

| City | Buttons | Bookable inventory? |
|---|---|---|
| Nalkheda | 18 | **almost none** |
| Ujjain | 15 | yes, strong |
| Agar Malwa | 9 | some |
| Omkareshwar | 2 | thin |

Partners: Booking.com 25, MakeMyTrip 19.

**Two findings that block the revenue objective, neither solvable by design:**

**(a) Deep links do not work.** EarnKaro discards the `dl=` parameter. Every affiliate click — including links generated correctly in the EarnKaro dashboard — lands on the Booking.com **homepage**, where the visitor must search again. Confirmed by the owner on two separate dashboard-generated links, and by a constructed one. Attribution still works (clicks register), but the landing page is wrong.

**(b) Nalkheda has no inventory.** The owner's own September finding: Nalkheda hotel clicks land on near-empty results and burn. Yet **18 of 44 buttons — the largest share — point at Nalkheda.**

Net effect: more hotel traffic multiplied by a broken landing page is still close to zero revenue. **Fixing the link destination is worth more than any amount of redesign.**

### 7.2 No hotel dataset exists
Zero data files. 8 `hotel-card` elements exist but carry no structured name/address/distance/amenity data. The brief asks for hotel cards with real names, images, distances and amenities — **that data does not exist and cannot be invented.** Sourcing plan in IMPLEMENTATION_ROADMAP.md.

### 7.3 Digital products
- Yatra Guide ₹99 — 22 pages, 12 chapters, Hindi + English, plus a 7-page Shakti Peethas bonus. Delivered manually over WhatsApp. `pay-config.js` slots are empty, so there is no payment link.
- Digital Companion ₹1,999 — owner reports it is not converting.
- MP Circuit guide ₹249 — present on site, not in CLAUDE.md.

### 7.4 WhatsApp enquiry
`wa-modal.js` on 26 pages collects name, phone, city, date, group size, then opens WhatsApp and logs to a Google Sheet. Live number: **97547 09571**.

---

## 8. Risks carried into the redesign

| Risk | Severity |
|---|---|
| Changing `how-to-reach` URL loses 1,761 clicks | **high** |
| Building hotel pages while deep links are broken | **high** — effort without revenue |
| Netlify token in public git history | **high** — repo went public 20 Nov |
| `CLAUDE.md` now public | medium |
| No hotel data to fill the brief's hotel cards | medium |
| Shallow clone (2 grafted points) — no history rewriting | medium |
| Apps Script endpoint public and unprotected | medium |

---

## 9. Honest summary

The site is in better technical shape than it looks. Schema, sitemap, canonicals, security headers and the affiliate abstraction layer are all present and working — most sites this size have none of it.

Two things genuinely hold it back, and only one is a design problem:

1. **The affiliate link destination is broken.** This is the revenue objective, and no redesign fixes it.
2. **There is no shared CSS and two design systems are in use.** This is the design problem, and it is worth fixing properly.

The redesign should proceed, but the hotel-revenue goal needs the link problem solved in parallel or it will not produce the result the brief is aiming at.
