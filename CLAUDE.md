# CLAUDE.md — Nalkheda.in Codebase Guide

## Project Overview

A static pilgrimage guide website for **Maa Baglamukhi Mandir, Nalkheda** (Agar Malwa, Madhya Pradesh, India). The site serves Hindu pilgrims planning a yatra (religious journey), provides local information, and monetizes through hotel affiliate links and a paid PDF guide.

**Live site**: https://mabanglamukhinalkhedadham.netlify.app  
**Deployment**: Netlify (auto-deploy on push to `main`)

---

## Repository Structure

```
Nalkheda.in/
├── index.html              # Entire website — 3,700+ line single-page app
├── privacy-policy.html     # Privacy policy (standalone page)
├── netlify.toml            # Netlify headers/redirect config
├── _headers                # Netlify cache-control rules (mirrors netlify.toml)
├── robots.txt              # SEO — allows all, references sitemap
├── sitemap.xml             # Single-URL sitemap for homepage
├── favicon.png             # Browser tab icon
├── google926715b5aa1cbc3a.html  # Google Search Console verification file
├── Images/
│   ├── maa-darshan.jpg / .webp  # Hero deity image (preloaded)
│   └── temple1.jpg – temple6.jpg  # Gallery photos
└── PDFs/
    ├── nalkheda-dham-guide-english.pdf
    ├── nalkheda-dham-guide-hindi.pdf
    └── 52-shaktipeethas-nalkheda.pdf
```

**There is no build system, no package.json, no Node.js.** All HTML, CSS, and JavaScript live inside `index.html`.

---

## Technology Stack

- **HTML5** — single file, all sections concatenated
- **CSS3** — embedded `<style>` block with CSS custom properties
- **Vanilla JavaScript** — embedded `<script>` block, no frameworks
- **Google Fonts** — Cinzel Decorative, Crimson Pro, Noto Serif Devanagari
- **Google Analytics** — ID `G-331NJD7HG3`
- **Netlify** — hosting and CDN, configured via `netlify.toml`

---

## Design System (CSS Variables)

```css
--saffron: #E8621A       /* Primary brand color, CTAs */
--deep-saffron: #C4480E  /* Hover states */
--gold: #D4A017          /* Accent, borders */
--bright-gold: #F5C518   /* Highlights, star ratings */
--dark: #1A0A00          /* Deepest background */
--deep-maroon: #3D0C02   /* Section backgrounds */
--cream: #FDF6E3         /* Light background */
--pale-gold: #FFF3CC     /* Card backgrounds */
--text: #2C1A00          /* Body text */
--muted: #7A5C3A         /* Secondary text */
--white: #FFFFFF
```

Typography hierarchy:
- **Cinzel Decorative** — hero/section headings (display font)
- **Crimson Pro** — body text (serif)
- **Noto Serif Devanagari** — Hindi/Sanskrit text (e.g., `माता बगलामुखी`)

---

## Page Sections (index.html)

Sections appear in this order, each with a `id` for anchor navigation:

| Section | ID | Description |
|---|---|---|
| Navigation | *(fixed top)* | Logo, nav links, "Download Guide" CTA |
| Hero | `#home` | Full-screen, animated gradient, stats cards |
| About Nalkheda | `#about` | Town stats, geography, connectivity info |
| Photo Gallery | `#gallery` | 7-image carousel with lightbox |
| Rituals & Puja | `#rituals` | 6 ritual cards with pricing in ₹ |
| How to Reach | `#reach` | Road/Rail/Air cards |
| Hotels | `#hotels` | Filterable cards with affiliate booking links |
| Business Directory | `#businesses` | Filterable local businesses, WhatsApp links |
| Yatra Planning Form | `#yatra` | Lead-capture form → WhatsApp redirect |
| PDF Download | `#pdf` | Payment modal (Razorpay + UPI) |
| Contact & Map | `#contact` | Phone, address, Google Maps CTA |
| Footer | — | Copyright, legal links |

---

## JavaScript Features

All JS is in a single `<script>` block at the bottom of `index.html`.

### Key Functions

| Function | Purpose |
|---|---|
| `filterBiz(category)` | Filters business directory cards by category string |
| `loadListingsEditor()` | Opens in-page editor to add/remove business listings |
| `addNewListing()` | Appends a new business card to the directory |
| `removeListing(btn)` | Removes a business card |
| `openPaymentModal()` | Shows the PDF download payment modal |
| `closePaymentModal()` | Hides the modal |
| `copyUpiId()` | Copies UPI ID to clipboard with visual feedback |
| `submitYatraForm(e)` | Validates form, saves to localStorage, redirects to WhatsApp |

### Integrations

- **Google Sheets** — Yatra form POSTs data to a Google Apps Script URL (if configured)
- **WhatsApp API** — Uses `https://wa.me/919754709571?text=...` with URL-encoded pre-filled messages
- **Razorpay** — Payment form embedded in the PDF download modal
- **UPI** — `ashwinv49@ybl`, copy-to-clipboard button
- **localStorage keys**: `SETTINGS_KEY`, `YATRA_KEY`

### Scroll & Animation

- **Scroll progress bar** — CSS width driven by JS scroll percentage
- **IntersectionObserver** — Adds `.visible` class to cards as they enter viewport
- **Gallery slider** — Arrow + dot navigation, touch swipe support; shows 3 slides on desktop, 1 on mobile
- **Lightbox** — Click any gallery image to enlarge with caption overlay

---

## Hardcoded Configuration Values

These values are embedded directly in `index.html`. Update them in-place if they change:

| Value | Location in file | Current value |
|---|---|---|
| WhatsApp number | `wa.me/` links | `919754709571` |
| Phone display | Contact section | `+91-9754709571` |
| UPI ID | Payment modal | `ashwinv49@ybl` |
| Google Analytics | `<head>` gtag script | `G-331NJD7HG3` |
| PDF price | Payment modal text | `₹99` |
| Sitemap URL | `sitemap.xml` | `https://mabanglamukhinalkhedadham.netlify.app/` |

---

## SEO & Structured Data

`index.html` `<head>` includes:
- **OpenGraph** tags for WhatsApp/Facebook link previews
- **Twitter Card** meta tags
- **hreflang** tags for multi-language support
- **Schema.org JSON-LD** — two schemas:
  - `TouristAttraction` — temple location, geo-coordinates
  - `FAQPage` — 5 common pilgrim questions/answers
- Multiple Google Search Console verification meta tags
- Image preloading for `maa-darshan.webp` (LCP optimization)
- DNS preconnect to `fonts.googleapis.com` and `fonts.gstatic.com`

---

## Deployment

**No build step required.** Edit files and push to `main`:

```bash
git add .
git commit -m "your message"
git push origin main
```

Netlify auto-deploys within ~1 minute of a push to `main`.

**Cache policy**: `netlify.toml` sets `Cache-Control: no-cache, no-store, must-revalidate` for all routes — changes appear immediately after deploy without cache invalidation issues.

**Development branch**: Feature work goes on `claude/...` branches and gets merged to `main`.

---

## Affiliate & Monetization Links

Hotel cards contain affiliate links. When adding or updating hotel cards:
- Booking.com links should use the affiliate partner URL pattern
- MakeMyTrip links are shortened via `bit.ly`
- Do not strip or modify existing affiliate tracking parameters

Business directory entries include WhatsApp deep-links. Format:
```
https://wa.me/91XXXXXXXXXX?text=...
```

---

## Content Conventions

### Language & Text
- Section headings and navigation: **English**
- Deity names and ritual descriptions include **Devanagari** transliterations wrapped in the Noto Serif Devanagari font class
- Prices always in **₹ (Indian Rupee)**
- Distances in **km**, temperatures in **°C**

### Image Files
- Place new images in `Images/`
- Provide both `.jpg` and `.webp` formats when possible (`.webp` for performance)
- Reference images with relative paths: `Images/filename.jpg`
- Add `loading="lazy"` on all gallery images; do NOT add it to the hero image

### PDF Files
- Place in `PDFs/`
- Current PDFs are linked from the payment modal and referenced in schema data

---

## Common Tasks

### Add a new business to the directory
Find the `<!-- Business Directory -->` section in `index.html`. Copy an existing `<div class="biz-card">` block, update the name, category, description, phone/WhatsApp link, and category `data-` attribute used by `filterBiz()`.

### Update hotel information
Find the `<!-- Hotels Section -->` section. Hotel cards use a consistent structure with star rating, amenities list, price range, and two booking CTA buttons.

### Add a new gallery image
1. Add the image file to `Images/`
2. In the `<!-- Gallery -->` section, add a new `<div class="slide">` with an `<img>` and `<p class="caption">` inside
3. The JS slider will automatically include it

### Update ritual pricing
Find `<!-- Rituals Section -->` and update the `₹` amount in the relevant ritual card. Pricing is displayed in both the card summary and the expanded detail.

### Change WhatsApp number
Search `index.html` for `919754709571` — replace all occurrences. Also update the display number `+91-9754709571` in the contact section.

---

## Do Not

- Do not introduce a build system, npm, or bundler — the site intentionally has no dependencies
- Do not split `index.html` into multiple files without a clear user request to do so
- Do not add `Cache-Control: max-age` headers — the no-cache policy is intentional
- Do not remove existing Google Search Console verification files or meta tags
- Do not modify affiliate link tracking parameters
- Do not commit `.env` files — there are none; all config is hardcoded or handled client-side
