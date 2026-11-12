# Community events

Conferences, workshops and convenings RESI runs. Event facts and homepage promotion now share these records. Events consumes the same collection and uses the same WorkshopCallout component as Home, above the existing seminar listings.

First follow [EVENT-ROUTING.md](../../docs/website/EVENT-ROUTING.md). Routine seminars/reading groups/working groups belong in their existing sections, not this collection. Only explicit Home promotions of those activities get a secondary record here, with a canonical details link.

Add a Markdown file with confirmed facts:

```yaml
---
title: "Workshop title"
eventType: community   # required: community / seminar / reading-group / working-group / other
audience: unspecified  # default; public only when confirmed
homepage: auto         # default; include/exclude only for an explicit instruction
description: "Approved short description of the event." # optional
announced: 2026-11-02   # publication date; controls homepage recency
start: 2026-12-04       # attendance date; shown in the calendar
end: 2026-12-04         # optional
location: "Cambridge, MA"
announcementLabel: "Save the date · Community workshop" # optional
interestUrl: "https://example.org/form"                 # optional
interestLabel: "Interest form"                          # optional
anchor: "stable-event-name"                            # optional; preserves heading links
with: []                                               # optional cohosts
speakersLabel: "Confirmed speakers"                    # optional; defaults to "Speakers"
speakers:                                              # optional; confirmed people only, in display order
  - name: "Full Name"
    affiliation: "Institution"                         # optional
hostsLabel: "Hosted by RESI co-founders"               # optional; defaults to "Hosted by"
hosts: ["Full Name"]                                   # optional; shown on Events only
url: "https://example.org/event"                        # optional event site
---
```

Home merges eligible records with `content/updates/` and displays at most three items total. Eligible upcoming events come first, newest announcement first; newest eligible News and approved retrospectives fill remaining slots. Equal dates use stable ID ascending. It does not append an extra event card outside that limit. For legacy events without `announced`, the start date is the fallback sorting date. News filters to news records; community events are not duplicated there.

The December 4 workshop was first announced on the homepage November 2, 2026 (production commit bbb0372). Its approved facts and existing interest form are retained in `2026-12-04-inaugural-workshop.md`. Do not invent a description, speakers, venue or admission guarantees. Its `speakers` list holds only people Adam confirmed as speakers on November 12, including Anat Perry, whom he added later that day; panelists and unconfirmed speakers stay off until he confirms them. Its Events counterpart is /events#workshop, published through PR 72 on November 3.

Keep Home and Events on this shared source and preserve stable anchors. The automatic missing-counterpart check remains deferred. Eligible upcoming events can move off Home when three newer eligible upcoming event announcements fill the slots; News never outranks them. Approved retrospectives compete with News by announcement/publication date. Event timing is classified at build time in America/New_York, through the last date (end or start). Rebuild and deploy after an event ends; a static build does not schedule future changes.


## Upcoming versus past announcements

Every eligible upcoming announcement uses the approved emphasized workshop card. Classification, public audience and explicit overrides determine eligibility; a seminar/group is never promoted just because it is upcoming or public. Once past, its Events card switches to the ordinary news-like treatment: same fill/type/colors, no outline or button, with the event calendar/title retained. The November 12 past-event design rule puts the location at the bottom of a closed Event details disclosure using the shared plus/dots, on Events and any approved Home retrospective. Upcoming event locations remain visible. News cards stay unchanged. The same shared policy/component governs Home and Events.

Past events are excluded from Home by default. Only when Rachel explicitly asks for a past-event announcement, add:

```yaml
pastAnnouncement:
  date: 2027-01-08  # actual approved retrospective publication date; controls recency
  label: "Past event" # optional; this is the default
  description: "Approved retrospective text." # optional; never reuse an invitation
```

This is a schema example, not a scheduled announcement. Do not add this object preemptively. It makes a past event eligible for the same three-item limit; it does not pin it or alter the attendance date. A retained interestUrl is historical data and never produces a button on a past card.


## Confirmed speakers and hosts

Added November 12 at Adam's request. `speakers` and `hosts` are optional. An event without them renders exactly as before. List only confirmed people, with the affiliation each person uses publicly, and keep the order you want displayed (the workshop uses last-name order).

The shared card shows them in two forms while the event is upcoming. Events shows the full list with affiliations and the hosts line below the summary. Home shows the speaker names alone in place of the summary, with no affiliations and no hosts, so the Home cards keep their height. Past cards show neither. Search indexes speaker and host names with the event entry.
