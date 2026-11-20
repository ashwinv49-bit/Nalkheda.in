# SEO_MIGRATION_PLAN.md
How the redesign protects existing search equity.
Written 20 November 2026.

---

## Principle

**Do not change a URL that ranks.** Design can change freely behind a stable URL; a URL change spends real traffic for a cosmetic gain.

---

## 1. The one URL change I recommend rejecting

The brief proposes `/how-to-reach-nalkheda/`.
The current page is `/how-to-reach.html` — **1,761 clicks, 114,235 impressions**, the single best performing page on the site.

| | Keep `/how-to-reach.html` | Move to `/how-to-reach-nalkheda/` |
|---|---|---|
| Traffic risk | none | 10–30% loss typical, recovery 1–3 months, sometimes permanent |
| SEO gain | none | negligible — Google reads content, not slugs |
| Effort | zero | redirect + reindex + monitoring |

**Recommendation: keep the existing URL.** The same applies to `blog/ujjain-to-nalkheda.html` (1,189 clicks).

If you want the keyword in the URL, the honest answer is that it is not worth 1,761 clicks.

---

## 2. URL map — existing vs brief

| Brief wants | Already exists as | Action |
|---|---|---|
| `/` | `index.html` | keep |
| `/hotels/` | `hotels.html` | **keep** — indexed |
| `/temple-timings/` | `temple-timings.html` | **keep** — indexed |
| `/how-to-reach-nalkheda/` | `how-to-reach.html` | **keep existing** — see §1 |
| `/travel-guide/` | `travel-guide.html` | keep, needs content (thin) |
| `/blog/` | `blog/index.html` | keep |
| `/contact/` | `contact.html` | keep |
| `/privacy-policy/` | `privacy-policy.html` | keep |
| `/terms-and-conditions/` | `terms.html` | keep existing slug |
| `/hotels-near-baglamukhi-temple/` | — | **new** |
| `/hotels-in-nalkheda/` | — | **new, but see warning** |
| `/nalkheda-ujjain-trip/` | — | new |
| `/nalkheda-ujjain-omkareshwar/` | `mp-circuit.html` | keep existing, no duplicate |
| `/about/` | — | new |
| `/affiliate-disclosure/` | `disclaimer.html` covers it | extend, don't duplicate |

**Warning on `/hotels-in-nalkheda/`:** Nalkheda has almost no bookable inventory (owner's own finding — those clicks burn). A dedicated page will attract searches it cannot satisfy and may underperform as thin content. Recommend building `/hotels-near-baglamukhi-temple/` first and treating Nalkheda honestly inside it: "stay in Agar Malwa or Ujjain, here is why."

---

## 3. Canonical strategy — unchanged

All canonicals use the `.html` extension. `pretty_urls` is on, so `/page` and `/page.html` both return 200 and the `netlify.toml` 301 rules never fire. The `.html` canonicals are what consolidates them. **Every new page must carry a `.html` canonical.**

---

## 4. Redirects

Only where a URL genuinely changes. None are required by the recommended plan.

If any page is ever renamed:
1. 301 from old to new in `netlify.toml`
2. Update sitemap
3. Update every internal link
4. Update the canonical
5. Request reindexing

---

## 5. Schema to preserve and extend

Keep: Organization, WebSite, BreadcrumbList, FAQPage (112 Q&A), BlogPosting, TouristAttraction, Product.

Add where genuinely applicable: `TouristDestination` on destination pages, `Article` on blog posts that lack it.

**Do not add** `Review` or `aggregateRating` — there is no review-collection mechanism, and fabricated review markup risks a manual penalty.

---

## 6. Pre-launch checklist

- [ ] Every existing sitemap URL still resolves 200
- [ ] Canonicals unchanged on all indexed pages
- [ ] Schema still parses on every page
- [ ] Internal links updated, zero 404s
- [ ] `how-to-reach.html` and `blog/ujjain-to-nalkheda.html` untouched in URL terms
- [ ] Sitemap regenerated and submitted
- [ ] Spot-check indexed pages render correctly

---

## 7. Monitoring after launch

Watch weekly for 6 weeks: clicks and impressions for the two top pages, index coverage, Core Web Vitals.

A 10–20% dip in week one is normal while Google recrawls. A sustained drop beyond 3 weeks means something broke — check canonicals and internal links first.
