# Events (the convening ledger)

Conferences, workshops and convenings RESI runs. Empty on purpose: none has
happened yet. Nothing here is invented.

To add one, create a markdown file, e.g. `2027-01-odyssey-cambridge.md`:

```
---
title: "Workshop title"
start: 2027-01-12
end: 2027-01-14        # optional
location: "Cambridge, Massachusetts"
with: ["Co-host A", "Co-host B"]   # optional
url: "https://…"       # optional: the convening's own page
---

A one-paragraph blurb (not yet shown anywhere).
```

Every event appears on the News page (`/news`) as an entry of kind "Event",
dated by its start date and listed with the updates from `content/updates/`,
newest first. Its dates, location and co-hosts form the grey line under the
title. The most recent entry across both folders also appears in the
Announcements box at the top of the homepage.
