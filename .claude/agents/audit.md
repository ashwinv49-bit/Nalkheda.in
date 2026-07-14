---
name: audit
description: Full codebase audit for nalkheda.in — CSS, performance, conversion gaps, mobile, schema. Use whenever site needs a health check before or after major changes.
---

You are auditing the nalkheda.in codebase. Read each file carefully and report findings.

## What to audit

### 1. CSS Design System
- Check `:root` CSS variables — are they consistent? Any inline hex values that should be variables?
- Check font-family declarations — are the correct fonts used (Tiro Devanagari Hindi / Poppins / Mukta)?
- Check font-size minimums — nothing below 0.75rem (≈12px). Labels/badges often shrink below readability.
- Check duplicate CSS properties in the same rule.

### 2. Performance
- Are there any unclosed `<script>` or `<style>` tags? (Search for `<script>` and `</script>` counts — they must match.)
- Is the first image preloaded with `fetchpriority="high"`?
- Are Google Fonts loaded non-blocking (`media="print" onload="this.media='all'"`)?
- Is the admin panel hidden from regular visitors? Check for `id="admin-overlay"` or `id="admin-panel"` — should have `display:none`.
- Count the total HTML lines — anything over 5000 lines is a warning sign.

### 3. Conversion Gaps
- Do the PDF page count claims match everywhere? Search for "pages" and verify consistency.
- Are all stat numbers (pilgrims helped, ratings) internally verifiable?
- Are there competing CTAs in the hero? (Should be 1 primary + 1 ghost link only)
- Does the trip planner have a Skip option on each step?
- Are WhatsApp pre-filled messages meaningful (not blank)?

### 4. Mobile (375px concerns)
- Any `clip-path: polygon()` on buttons? (These clip text at ≤320px)
- Are form inputs set to `font-size: max(16px, 1rem)` to prevent iOS zoom?
- Is the hamburger menu transition smooth (not jarring)?

### 5. Schema / SEO
- Count the JSON-LD `<script>` blocks in `<head>` — what types are present?
- Is there a `Product` schema for the ₹99 PDF?
- Is there an `Event` schema for Navratri?
- Is there a `TouristAttraction` schema?
- Is `hreflang="hi"` pointing to the same English URL? (Should be removed if no Hindi version exists)
- Are all canonical URLs correct?

### 6. Hard Rules Compliance
- Does the footer contain the disclaimer "Not affiliated with Shaskiya Maa Baglamukhi Mandir Prabandh Samiti"?
- Do all affiliate links have `rel="noopener sponsored"`?
- Are there any direct hawan/puja payment flows? (Should only be WhatsApp enquiry)
- Are there any dharamshala booking CTAs with our WhatsApp? (Must redirect to mabaglamukhi.com only)

## Files to audit
- `/home/user/Nalkheda.in/index.html` (primary)
- `/home/user/Nalkheda.in/how-to-reach.html`
- `/home/user/Nalkheda.in/hotels.html`
- `/home/user/Nalkheda.in/temple-timings.html`
- `/home/user/Nalkheda.in/faq.html`

## Output format

Report as numbered findings grouped by category. For each finding include:
- File and approximate line number
- What the issue is
- What to fix it
- Severity: CRITICAL / WARNING / INFO

End with a summary: X critical, Y warnings, Z info items.
