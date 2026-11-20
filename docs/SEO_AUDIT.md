# SEO_AUDIT.md
Full sweep of all 34 HTML files, 20 November 2026.

## Headline

On-page SEO is in good shape and **was not damaged by the redesign**. Every
indexable page still has its title, description, canonical, Open Graph set and
structured data. The one regression the audit found was in internal linking,
and it is fixed.

## Hygiene

| Check | Result |
|---|---|
| Indexable pages | 31 |
| Missing `<title>` | 0 |
| Missing meta description | 0 (3 `noindex` pages excluded, correctly) |
| Missing canonical | 0 (same 3 excluded) |
| Missing Open Graph | 0 |
| **Duplicate titles** | **0** |
| **Duplicate descriptions** | **0** |
| Descriptions over 160 characters | **0** |
| Titles over 60 characters | 1 — `mp-circuit.html` at 61 |
| Pages without exactly one `<h1>` | **0** |
| **Broken internal links** | **0** of 841 |
| Malformed JSON-LD | **0** of 65 blocks |

The three excluded pages are `404.html`, `guide-download.html` and
`google926715b5aa1cbc3a.html` — an error page, a paid-delivery page and a Search
Console verification file. All are `noindex` and absent from the sitemap, which
is the correct treatment.

### A correction to an earlier count

An earlier pass reported three descriptions over 160 characters, including the
homepage at 209. That was a measurement error: the check counted **bytes**, and
Devanagari and the ₹ sign are multi-byte in UTF-8. Re-counted in characters,
the longest description on the site is 155. Nothing needed changing.

## The regression that was found, and fixed

**34 internal links pointed at homepage anchors that no longer existed.**

`index.html` was rebuilt from 226 KB to 32 KB and lost the `#about`, `#services`
and `#guide` section ids. Twenty-eight pages still linked to them:

| Dead link | Pages linking to it | Link text |
|---|---|---|
| `/#about` | 20 | "मंदिर" / "Temple" — the main nav item |
| `/#guide` | 7 | "Guide ₹99", "Download Guide" |
| `/#services` | 1 | "Guide ₹99" |

These did not 404. They loaded the homepage and dumped the visitor at the top,
which is worse: it looks like the link is broken, and it wasted the click. The
nav item labelled "Temple" on 20 pages — including `how-to-reach.html`, the
site's highest-traffic page — went nowhere in particular.

Fixed by giving the digital-guides section `id="guide"` and retargeting
`/#about` → `/#temple` (a section that exists and matches the link text) and
`/#services` → `/#guide`. Re-verified: **841 internal links, 0 broken, 0 missing
anchor targets.**

## Structured data

65 JSON-LD blocks, all valid:

| Type | Count |
|---|---|
| FAQPage | 16 (112 Q&A pairs) |
| BreadcrumbList | 27 |
| Organization | 16 |
| BlogPosting | 13 |
| TouristAttraction | 4 |
| Product | 3 |
| WebSite / WebPage / Blog | 3 |
| Place, ContactPage, AdministrativeArea | 3 |

**No `Review` and no `aggregateRating` anywhere** — verified again. The site has
no review-collection mechanism, so fabricating that markup would be a
manipulative-structured-data violation. The 18 `Person` nodes are all legitimate
author/seller entries.

The homepage FAQ is now **generated at runtime from its own FAQPage schema**, so
the visible answers and the structured data cannot drift apart. That is worth
keeping as a pattern.

## Pages that carry the site

| Page | Clicks | Impressions |
|---|---|---|
| `how-to-reach.html` | 1,761 | 114,235 |
| `blog/ujjain-to-nalkheda.html` | 1,189 | 90,289 |

Both kept their URL, title, description, canonical and schema through the
redesign. **No URL on the site changed.** The brief's proposed rename of
`/how-to-reach` to `/how-to-reach-nalkheda/` was not carried out, and should not
be: it risks 1,761 clicks for a cosmetic gain. The reasoning is in
SEO_MIGRATION_PLAN.md.

## What is actually left

None of the remaining opportunities are hygiene fixes. They need either the
owner's Search Console account or new content.

**Owner actions in Search Console:**
1. Request indexing for `ujjain.html` and `omkareshwar.html` — both were
   substantially rewritten this week (see QA_REPORT.md; they were partly
   unreadable before) and neither is indexed.
2. Request indexing for the seven blog posts that are crawled but not indexed.
3. Re-submit the sitemap so the November changes are picked up.

**Content:**
4. `travel-guide.html` is "crawled, currently not indexed" — thin. It needs real
   depth, not meta-tag changes.
5. The zero-click keywords in CLAUDE.md ("nalkheda direction", "nalkheda nearest
   railway station", "nalkheda mandir timing") already have pages. They are
   ranking 8–12. That is a content-quality and backlink problem now, not a
   tagging one.

**The weakest leg is backlinks.** The technical plumbing is better than most
sites this size; nothing links to it. MP tourism blogs, pilgrimage directories
and temple listing sites are where the next real ranking gain is.
