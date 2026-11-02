# Community events

Conferences, workshops and convenings RESI runs. Event facts and homepage promotion now share these records. The future Events page will consume the same collection; its Seminars-to-Events migration is deferred.

Add a Markdown file with confirmed facts:

```yaml
---
title: "Workshop title"
announced: 2026-11-02   # publication date; controls homepage recency
start: 2026-12-04       # attendance date; shown in the calendar
end: 2026-12-04         # optional
location: "Cambridge, MA"
announcementLabel: "Save the date · Community workshop" # optional
interestUrl: "https://example.org/form"                 # optional
interestLabel: "Interest form"                          # optional
anchor: "stable-event-name"                            # optional; preserves heading links
with: []                                               # optional cohosts
url: "https://example.org/event"                        # optional event site
---
```

Home merges these records with `content/updates/`, sorts newest announcement first, and displays exactly three items in total. It does not append an extra event card outside that limit. For legacy events without `announced`, the start date is the fallback sorting date. News filters to news records; community events are not duplicated there.

The December 4 workshop was first announced on the homepage November 2, 2026 (production commit bbb0372). Its approved facts and existing interest form are retained in `2026-12-04-inaugural-workshop.md`. Do not invent a description, speakers, venue or admission guarantees. Its future Events-page counterpart is still a known gap.

When the Events migration lands, render the same event record on Events, retain stable event links, and implement the missing-counterpart check. Eligible events can move off Home as newer news/events fill its three slots. Event status/expiry updates and archive promotion still need to be managed when dates pass; a static build does not schedule future changes.
