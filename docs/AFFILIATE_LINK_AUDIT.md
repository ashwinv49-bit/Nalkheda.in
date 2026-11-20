# AFFILIATE_LINK_AUDIT.md
Every affiliate button on the site, tested 20 November 2026.

## Method

All 33 pages were loaded in a real mobile Chromium (390×844, iPhone UA) and
every element carrying `data-hotel` / `data-ota` was resolved through
`hotel-links.js` exactly as it resolves for a visitor. The redirect chains were
then followed with `curl` and again in the browser.

## Inventory

**44 tagged buttons. 44/44 carry `rel="noopener sponsored"`. 44/44 open in a new
tab. 0 are broken.** Every page that has one fires the GA4 `affiliate_click`
event with city, OTA, page path and deep-link status.

| City | Booking.com | MakeMyTrip | Total |
|---|---|---|---|
| Nalkheda | 11 | 6 | **17** |
| Ujjain | 8 | 7 | **15** |
| Agar Malwa | 6 | 4 | **10** |
| Omkareshwar | 1 | 1 | **2** |
| | 26 | 18 | **44** |

## The finding that matters

**Only 9 of the 44 buttons carry a destination at all.**

| City · OTA | Buttons | Resolves to |
|---|---|---|
| ujjain · booking | 8 | `bitli.in/lYFh6JH` — real Ujjain deep link |
| omkareshwar · booking | 1 | `bitli.in/k09ruDo` — real Omkareshwar deep link |
| **everything else** | **35** | the generic fallback |

The generic fallback is `bitli.in/3k5fYiv`. Followed today it resolves to:

```
https://linkredirect.in/visitretailer/2732?id=5269672&shareid=3k5fYiv
```

**There is no `dl=` parameter on it.** No destination is encoded, so it cannot
land anywhere but the Booking.com home page — not because EarnKaro drops
anything, but because nothing was ever asked for. The same is true of the
MakeMyTrip fallback.

This reframes the problem. Until now the story was "EarnKaro discards the deep
link." That is still an open question. But it is not the only thing wrong, and
it is not the thing blocking 35 of the 44 buttons. Those buttons are pointing at
a link that was never built to go anywhere.

## What the deep-linked ones look like

```
https://bitli.in/lYFh6JH
  -> https://trackingv3.linkredirect.in/visitretailer/2732
       ?id=5269672
       &shareid=lYFh6JH
       &dl=https%3A%2F%2Fwww.booking.com%2Fsearchresults.html
            %3Fss%3DUjjain%252C%2BMadhya%2BPradesh%252C%2BIndia
```

The `dl=` is present, correctly double-encoded, and points at a valid Ujjain
search URL. The chain stops at the EarnKaro interstitial, which hands off in
JavaScript.

**This environment cannot see what happens next.** Its network policy
intercepts booking.com (a request returns `202` from the proxy, not a real
response), so the interstitial's hand-off never completes here and the browser
stays on `trackingv3.linkredirect.in`. **Nothing in this audit confirms or
refutes that EarnKaro drops `dl=`.** The evidence for that remains the owner's
own observation on a real phone, on two separate dashboard-generated links.

## Revenue, for context

From the EarnKaro dashboard: **₹384.20 across 3 bookings — ₹127.50 confirmed,
₹256.70 pending.** Exactly 4.0% commission.

Three bookings have completed *while every click was landing on a home page and
the visitor had to search again.* The funnel works. It is being taxed, not
blocked. That is the strongest argument for fixing the destination rather than
building more pages to feed into it.

## What to do, in order

**1. Generate six more links in the EarnKaro dashboard** (30 minutes, no
approval needed, no dependency on support):

| Needed for | Destination to paste into the dashboard |
|---|---|
| nalkheda · booking | `booking.com/searchresults.html?ss=Nalkheda, Madhya Pradesh, India` |
| nalkheda · mmt | MakeMyTrip Nalkheda / Agar Malwa hotel listing |
| agar · booking | `booking.com/searchresults.html?ss=Agar Malwa, Madhya Pradesh, India` |
| agar · mmt | MakeMyTrip Agar Malwa listing |
| ujjain · mmt | MakeMyTrip Ujjain listing |
| omkareshwar · mmt | MakeMyTrip Omkareshwar listing |

Paste each into the matching slot in `hotel-links.js`. Nothing else changes —
the resolver already reads them.

MakeMyTrip links **must** come from the dashboard: its listing URLs use internal
city codes that cannot be constructed.

**2. Send the EarnKaro support message** about `dl=` (drafted, in the scratchpad).
That question is still worth an answer, but it no longer blocks step 1.

**3. Reconsider the Nalkheda/Ujjain split.** 17 buttons point at Nalkheda, which
has almost no bookable inventory; 15 point at Ujjain, which has plenty and is
where the three bookings came from. The pages can keep their Nalkheda context
and still offer Ujjain as the practical place to book — that is honest advice,
not a redirect.

**4. Do not build more hotel pages until step 1 is done.** More traffic into a
home-page landing multiplies by close to zero.

## Fallback routes if EarnKaro says no

- **Cuelinks** — its mechanism carries the destination in `&url=`, so deep
  linking is intrinsic. `hotel-links.js` already supports it: set
  `cuelinksPubId` and the file loads the script and rewrites links itself. The
  publisher application has been pending since 16 November; a chaser is drafted.
- **CJ** — runs Booking.com's own programme now: `cj.com/en-gb/publisher/partners/booking.com`
