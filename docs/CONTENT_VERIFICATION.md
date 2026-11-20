# CONTENT_VERIFICATION.md
20 November 2026. Source of truth: `docs/facts.json`.

## Verified and consistent sitewide

| Fact | Value | Basis |
|---|---|---|
| Darshan | 06:00 – 21:30, all 365 days | identical on every page |
| Mangala / Bhog / Sandhya / Shayan aarti | 06:00 / 12:00 / 19:30 / 21:00 | identical |
| Hawan counter | 07:00 – 23:00 | identical |
| Hawan booking | temple counter or mabaglamukhi.com | identical |
| Hawan kunds | 75 | identical |
| Address | Chapiheda Road, Nalkheda, Agar Malwa, MP 465445 | identical |
| Ujjain → Nalkheda | 100 km, ~2 hrs | 37 instances, no conflict |
| Indore → Nalkheda | 156 km, ~3–3.5 hrs | 21 instances, no conflict |
| Bhopal → Nalkheda | 210 km, ~4 hrs | consistent |
| Bus stand → temple | 1.5 km, ₹20–40 auto | consistent |
| Guide PDF | 22 pages, 12 chapters, +7-page bonus | verified against files 6 Nov |

## Corrected this round

**Nalkheda ↔ Agar Malwa — was 25 / 28 / 30 / 35 km, now 35 km everywhere.**

| Page | Was | Now |
|---|---|---|
| `index.html` ×2 | 28 km | 35 km |
| `blog/baglamukhi-jayanti-2026.html` | 30 km | 35 km |
| `blog/nalkheda-hotels-guide.html` ×2 | 30 km | 35 km |
| `blog/navratri-nalkheda-2026.html` | 25 km | 35 km |
| `blog/nalkheda-yatra-checklist.html` | 25 km | 35 km |

The two `index.html` instances were introduced by me, from CLAUDE.md, against the
site's own verified route guide.

**Left unchanged — different city pairs, internally consistent:**
Ujjain→Agar 70 km · Indore→Agar 125 km · Dewas→Agar 80 km · Sonkatch→Agar 50 km ·
Ujjain→Omkareshwar 130 km · Indore→Ujjain 55 km · Indore→Omkareshwar 77 km

**Stale urgency removed:** `ujjain.html` now hides the whole Navratri block after
the end date, not just the timer.

**Unverified properties and prices removed:** see HOTEL_INVENTORY.md.

## NEEDS VERIFICATION — not guessed

| Item | Why it matters | Who |
|---|---|---|
| Baglamukhi Jayanti 2027 date | Vaishakh Shukla Ashtami moves yearly. `blog/baglamukhi-jayanti-2026.html` is now a past-dated article. | owner |
| Chaitra Navratri 2027 | referenced as "Mar–Apr 2027" without exact dates | owner |
| Sharad Navratri 2027 | no date on site | owner |
| ₹249 MP Circuit guide | sold on site, absent from CLAUDE.md | owner |
| "500+ Happy Pilgrims" | no source | owner |
| "10K+ pilgrims monthly" | no source | owner |
| Berchha 60 km / Shajapur 65 km | stated once each, unconfirmed | owner |

Soft counters were flagged rather than deleted — they may be defensible, but
nothing unverifiable should stay indefinitely. The fabricated testimonials and the
unverifiable "4.9★" were removed earlier for the same reason.

## Last-updated dates

Deliberately **not** bulk-refreshed. Only pages whose facts actually changed today
should carry a new date; stamping 31 pages as "updated today" because their CSS
moved would be untrue. Current dates range June–November 2026 and reflect genuine
last edits.
