---
name: seo
description: SEO health check and optimization for nalkheda.in — meta tags, schema, Search Console gaps, keyword targeting, internal linking. Use when preparing to push changes or after adding new content.
---

You are performing an SEO audit and optimization pass for nalkheda.in — a pilgrimage travel guide for Maa Baglamukhi Temple, Nalkheda, Madhya Pradesh.

## Site context (memorized)
- **Primary keyword:** nalkheda, nalkheda mandir, Maa Baglamukhi Nalkheda
- **Secondary keywords:** Nal Kheda (2-word variant), nalkheda direction, nalkheda nearest railway station
- **Top performing pages:** index.html (pos 9.58), faq.html, how-to-reach.html
- **Mobile:** 95.5% of traffic
- **GA4:** G-331NJD7HG3
- **Search Console verified:** yes (two meta tags in index.html)

## What to check

### 1. Title Tags
For each HTML file, check:
- Is the `<title>` under 60 characters? (Longer gets truncated in SERPs)
- Does it include the primary keyword naturally?
- Does it have a year ("2026") for freshness signals?

### 2. Meta Descriptions
- Under 155-160 characters?
- Includes primary keyword?
- Includes "Nal Kheda" 2-word variant in homepage meta?
- Has a CTA or benefit ("Complete pilgrim guide", "Darshan timings", etc.)?

### 3. Schema Markup (check `<head>` of each page)
Index.html should have ALL of:
- `TouristAttraction` (temple info)
- `FAQPage` (16 questions)
- `Product` (₹99 PDF guide)
- `Event` (Navratri 2026 — startDate 2026-09-25, endDate 2026-10-04)

Other pages should have:
- `WebPage` or `Article` schema

### 4. Canonical URLs
- All canonicals must use `.html` extension (e.g. `https://nalkheda.in/faq.html`)
- No duplicate canonicals within a page

### 5. Hreflang
- Should only have `hreflang="en-IN"` and `hreflang="x-default"` pointing to English URL
- `hreflang="hi"` should NOT exist if there's no Hindi version (causes signal mismatch)

### 6. Internal Linking
- Does the homepage link to all major sub-pages? (temple-timings, how-to-reach, hotels, faq, ujjain, omkareshwar)
- Do blog posts link back to the homepage or related pages?
- Are affiliate links using `rel="noopener sponsored"`?

### 7. Image SEO
- Do gallery images have descriptive `alt` text?
- Is the hero/OG image specified in `<meta property="og:image">`?
- Is the first image preloaded with `fetchpriority="high"`?

### 8. Blog Post Status (from CLAUDE.md)
These blog posts exist but are NOT indexed — flag for indexing request:
- `/blog/best-time-to-visit-nalkheda.html`
- `/blog/indore-to-nalkheda.html`
- `/blog/ujjain-to-nalkheda.html`
- `/blog/navratri-nalkheda-2026.html`
- `/blog/baglamukhi-jayanti-2026.html`
- `/blog/nalkheda-yatra-checklist.html`
- `/blog/baglamukhi-puja-benefits.html`

### 9. GSC Keyword Opportunities (from CLAUDE.md)
Check if these high-impression queries are addressed in content:
- "nal kheda" (2 words, 403 impressions, pos 12) — homepage meta desc
- "nalkheda direction" (125 impressions, pos 8.18) — how-to-reach title
- "nalkheda nearest railway station" (172 impressions, pos 10.2) — how-to-reach desc
- "nalkheda mandir timing" (82 impressions, pos 10.2) — temple-timings page

## Output format

Report by file, then by category. Flag each issue as:
- **FIX NOW:** Will hurt rankings or is factually wrong
- **IMPROVE:** Could improve rankings/CTR
- **MONITOR:** Watch but no action needed

End with a 5-point priority action list: what to fix first for highest SEO impact.
