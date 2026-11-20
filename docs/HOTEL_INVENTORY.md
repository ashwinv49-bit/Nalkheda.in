# HOTEL_INVENTORY.md
20 November 2026.

## Verdict: inventory is insufficient for property-level listings

The brief asks for hotel cards with name, address, distance, facilities, images,
price source and last-verified date — and says that where inventory is
insufficient, use a clearly-labelled destination-based search instead.

**That is the case here.** A scan of all 31 pages found three named properties,
all on `ujjain.html`, none verified, none with an address, image, facility list or
verification date, and all carrying fixed prices:

| Property | Price shown | Problem |
|---|---|---|
| Hotel Shipra Residency | ₹1,500–₹3,000 | unverified; fixed price breaks Hard Rule 4 |
| Hotel Malwa Residency | ₹800–₹1,500 | unverified; also below the ₹1,000 floor |
| "Dharamshala near Temple" | ₹600–₹1,200 | unverified; below the floor |

They also appeared **inside the FAQPage JSON-LD**, where Google reads them — a
stale price in structured data is worse than one in prose.

All three have been replaced with area cards.

## What is published instead

Destination-based accommodation guidance, by area, with the trade-off stated:

| Area | Band | Positioning |
|---|---|---|
| Nalkheda, 1–2 km | ₹1,000–₹1,500 | closest; few rooms, simple |
| Agar Malwa, 35 km | ₹1,200–₹1,500 | proper hotels, AC |
| Ujjain, 100 km | ₹1,200–₹3,000 | most choice, Mahakaleshwar on the same trip |
| Ujjain · Mahakal Lok | ₹1,500–₹3,000 | only sensible choice with a Bhasma Aarti booking |
| Ujjain · Freeganj | ₹1,200–₹2,500 | choice and food |
| Ujjain · near Junction | ₹1,200–₹2,000 | late trains and early departures |

Each carries an affiliate CTA and an explicit line that these are areas, not
properties, and that rates move with the season.

## Why not just add real hotels

Two reasons, and only one is about effort.

1. **No data source.** There is no feed, no partner API and no verified list. The
   only honest way to add properties is to visit or phone them, record the facts
   and date them.
2. **Nalkheda has almost no bookable inventory.** The owner's own September
   finding: Nalkheda hotel clicks land on near-empty results and burn. 18 of 44
   affiliate buttons still point at Nalkheda — the largest share — at the city
   with the least to sell. Ujjain is where the rooms and the commission are.

## Data model, ready for when inventory exists

The card component is built and in `components.css` (`.hotel-card`,
`.hotel-card__media/name/dist/band/cta`). It deliberately has **no rating or
review slot**: there is no review source, and inventing one is not an option.

When real properties are verified, drop in `assets/data/hotels.json`:

```json
[{
  "id": "slug",
  "name": "",
  "city": "nalkheda | agar | ujjain | indore | omkareshwar",
  "address": "",
  "distanceFromTempleKm": 0,
  "facilities": ["ac", "hot_water", "parking", "restaurant", "wifi"],
  "image": "/assets/img/hotels/slug.webp",
  "priceBand": "Rs 1,000-1,500",
  "priceSource": "where this came from and when",
  "bookingPartner": "booking | mmt",
  "affiliateUrl": "",
  "lastVerified": "YYYY-MM-DD"
}]
```

`lastVerified` is mandatory. A property older than six months should be re-checked
or pulled — stale prices are how a guide loses trust.

Search, location and budget filters are intentionally **not** built yet. Filters
over six area cards are friction, not help. They become worth building at roughly
15–20 verified properties.

## The bigger constraint

None of this earns more until affiliate clicks land on the right page. EarnKaro
discards the `dl=` parameter, so every click reaches the Booking.com home page.
Three bookings have converted anyway (₹384.20 tracked, ₹127.50 confirmed), which
shows the funnel works and is being taxed rather than blocked.

**Fixing the landing page is worth more than any amount of hotel-card work.**
