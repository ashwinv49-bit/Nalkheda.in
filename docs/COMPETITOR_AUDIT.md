# COMPETITOR_AUDIT.md
Who takes the traffic, and why. 24 November 2026.

Live mobile SERPs for the five biggest queries (India, each read three times
and merged), set against the site's own Search Console data.

Mobile, because mobile is 96% of this site's traffic — 9,239 clicks of 9,908.

---

## The finding in one line

**nalkheda.in appeared in only ONE of the five SERPs.** On the other four it is
not in the mobile top 10 at all, and those four carry about 70,000 impressions a
quarter.

| Query | Impressions/qtr | GSC position | Found in live mobile SERP? |
|---|---|---|---|
| `nalkheda` | 35,871 | 11.0 | yes — rank 9 |
| `baglamukhi mata mandir nalkheda` | 21,192 | 9.6 | **no** |
| `नलखेड़ा बगलामुखी मंदिर` | 7,741 | 10.0 | **no** |
| `nalkheda baglamukhi` | 4,765 | 9.9 | **no** |
| `ujjain to nalkheda distance` | 17,169 | 3.0 | **no** |

The last row is the one to treat carefully. Search Console says position 3.0
with 431 clicks, so the page certainly ranks; a single read missing it is
read-to-read variance, not proof of a fall. The others match their GSC
positions of 9–11, which is page two on mobile.

---

## 1. An AI Overview sits on every one of the five queries

`ai_overview` was present in all three reads of all five SERPs. Google is
answering the question above the results — timings, distance, what the temple
is. This is the largest single diverter of this site's traffic and no amount of
on-page work removes it.

What it rewards: being the source the overview cites, and queries an overview
cannot finish answering — booking mechanics, this week's crowd, a specific
train, what to carry.

## 2. Three competitors hold the Local Pack. This site is not in it.

On every temple-name query, the same three appear in the map block **above the
organic results**:

| | |
|---|---|
| `maabaglamukhinalkheda.com` | "Open · Closes 9:30 PM · Priest Residence" |
| `baglamukhinalkheda.com` | "Maa Baglamukhi Seedhi Peeth Mandir" |
| `maabaglamukhidhamnalkheda.online` | "Open 24 hours" |

On a phone the local pack takes most of the first screen. Three competitors are
there with opening hours and a tap-to-call; nalkheda.in is below the fold.

This is the clearest fixable gap in the audit — and the hardest, because a
Google Business Profile needs a real verifiable presence at the place, and this
site is an independent guide, not the temple. It cannot and must not claim to be
the temple. Worth investigating as a travel service with a genuine address, not
as the shrine.

## 3. One query, 21,192 impressions, is entirely social video

`baglamukhi mata mandir nalkheda` returns Instagram reels and Facebook posts in
ranks 1–7. Not one website ranks on page one. Titles are things like
"बगलामुखी धाम नलखेड़ा##बगलामुखी #जय".

Google has decided this query wants video. A text page cannot win it. The only
route in is video — and the site's owner already runs @ektravelbuddy on
Instagram, which makes this the cheapest opening in the whole audit.

## 4. The official and government sites own the temple-name queries

For `नलखेड़ा बगलामुखी मंदिर`: hi.wikipedia.org (1), mabaglamukhi.com (2),
agarmalwa.nic.in (3), mabaglamukhi.org (4), hpkangra.nic.in (5).

Government and Wikipedia domains cannot be outranked on "what is this temple".
Competing on description is lost before it starts. The win is on what they do
not cover: how to get there, where to sleep, what a trip actually costs.

## 5. Hawan-service sites are taking the hawan intent

Three commercial operators rank on these queries, each with a phone number in
the snippet:

- `baglamukhinalkeda.in` — "Baglamukhi Havan (Hawan) in Nalkheda | Acharya Rajguru Ji" · +91 89591 82032
- `maabaglamukhihavan.com` — "authentic and transformative pooja ceremonies conducted by our experienced pandits"
- `bagalmukhitemple.com` — "Call Now: +91 7517513136"

They convert hawan intent directly. nalkheda.in deliberately does not, and that
rule should stand — but it means this traffic goes elsewhere, and that is a
choice with a cost, not an accident.

## 6. Google confuses Nalkheda with other places, and nobody has fixed it

On `ujjain to nalkheda distance`:

- rank 2 — `trypdeals.com` about **Ujjain to Nahan**, a different town
- rank 4 — `taxigator.net` about **Nanakheda Bus Stand**, 3.75 km from Ujjain Junction
- rank 1 — a **Reddit** thread, served in Urdu

Three of the top four results are wrong or irrelevant. A page that disambiguates
plainly — Nalkheda is not Nanakheda, not Nahan, 100 km, 2 hours — can take that
space. This is the easiest ranking gain in the audit.

## 7. The homepage is the weakest page on the site

| Page | Clicks (28d) | Impressions | CTR | Position |
|---|---|---|---|---|
| `/how-to-reach.html` | 873 | 58,420 | 1.5% | 6.0 |
| `/blog/ujjain-to-nalkheda.html` | 567 | 25,212 | 2.3% | 4.2 |
| `/blog/indore-to-nalkheda.html` | 292 | 22,672 | 1.3% | 4.5 |
| **`/`** | **88** | **14,740** | **0.6%** | **8.2** |

The route pages rank 4–6 and convert at over 2%. The homepage ranks 8.2 and
converts at 0.6% — and the homepage is what Google shows for `nalkheda`, the
35,871-impression query.

## 8. CTR is a function of position, and nothing else

| Position | Example | CTR |
|---|---|---|
| 4.4 | `ujjain to nalkheda bus` | **4.4%** |
| 4.6 | `इंदौर से नलखेड़ा कितने किलोमीटर है` | **3.8%** |
| 9.6 | `baglamukhi mata mandir nalkheda` | **0.17%** |
| 11.0 | `nalkheda` | **0.29%** |

A 25-fold difference between ranking 4 and ranking 11. Titles and descriptions
are not the problem; position is. Rewriting snippets on page-two rankings is
wasted effort.

## 9. The strength is routes, and it is being under-used

Every query this site wins is a route query: bus, train, distance, how to reach,
nearest station. Those pages rank 3–6 and carry 1,732 of the 2,091 clicks in the
last 28 days.

The temple-name cluster — ~86,000 impressions at 0.29% — is contested by
Wikipedia, two government domains and the official trust. The route cluster is
contested by Reddit, a taxi-fare aggregator and a page about the wrong town.

One of those is winnable.

## 10. Social and UGC outrank this site on its own topic

Facebook, Instagram, YouTube, Reddit and Tripadvisor all appear above
nalkheda.in on these queries. `m.facebook.com` is **rank 1 for `nalkheda`**,
with 717 followers and "39,799 were here".

Google is favouring places where people talk over pages that describe. The
answer is not more pages. It is presence where the conversation is, and reviews
— which this site has none of, by its own choice, having removed fabricated
testimonials rather than invent them.

---

## What to do, in order of return per hour spent

1. **Video for the 21,192-impression query.** @ektravelbuddy already exists. The
   SERP is asking for reels and nobody is serving a good one.
2. **A disambiguation page**: Nalkheda vs Nanakheda vs Nahan. The top four
   results are wrong; the query has 17,169 impressions.
3. **Investigate a Google Business Profile** as a travel service, honestly — not
   as the temple. Three competitors are in the pack; this site is not.
4. **Collect real reviews.** There is no review mechanism at all. Every
   competitor in the local pack has one.
5. **Leave the temple-name cluster alone** until the above are done. Wikipedia
   and two .nic.in domains are not a fair fight.

## What this audit could not check

- Competitor pages could not be fetched; the sandbox blocks those domains. All
  competitor findings come from SERP titles, descriptions and local-pack data.
- A single SERP read misses results that genuinely rank, which is why the
  `ujjain to nalkheda distance` absence is reported as variance rather than a
  fall.
- Backlinks were not measured. They remain the untested variable, and the most
  likely reason the temple-name rankings sit at 9–11.
