# Adding events, seminars and groups

Repository-wide contribution rules, requested November 3, 2026. Apply these when Adam, Rachel or another authorized contributor says “add X event/seminar”; they do not need to repeat the homepage/design rules. The contributor/assistant classifies the request; the build enforces the recorded classification and placement policy.

## Placement defaults

| Request / confirmed type | Canonical destination | Home Announcements by default |
| --- | --- | --- |
| Upcoming community event, workshop or convening intended for community participation | `content/events/*.md` → Events, Community events | Eligible, using the approved emphasized upcoming-event card |
| Other upcoming event explicitly open to the public or intended for public promotion | `content/events/*.md` → Events, Community events | Eligible, using the same upcoming-event card |
| Seminar, including a public seminar | `src/data/seminars.json` → Events, RESI-MIT Seminars / Past seminars | No; requires an explicit homepage instruction |
| Reading group or its regular meetings | Existing reading-group information/participation route; People → Join us links to the AI Safety Reading Group | No; requires an explicit homepage instruction |
| Working group | `src/data/groups.ts` → Research, Working groups; meeting details in the relevant group context | No; requires an explicit homepage instruction |
| Generic event with unclear type/audience | Infer only from supplied facts; if still ambiguous, ask whether this is a community/public event or a seminar/group activity | Do not silently promote it |
| Past event of any type | Its normal archive or group context | Requires Rachel’s explicit retrospective announcement request |

Seminar/reading-group/working-group classification takes precedence over being public. “Publish this seminar on the website” means its normal listing, not Home. “Feature this seminar in homepage announcements” is an explicit override. “Keep this off Home” always wins. A public URL or permission to list information publicly does not by itself establish public community promotion. Do not invent a date/location, turn an ongoing group into a dated event, or expose private details. If a request conflicts about privacy/publicity, resolve the conflict before promotion.

New seminars retain the JSON structure, stable ID, HTML details and search text; move completed seminars from `upcoming` to `talks`. On archiving, show only title, speaker/affiliation and a short date in the closed row. Put original time and location in the final Event details block, after description/abstract and Biography; keep the shared plus/dots closed by default. `pastSeminarDisclosure` rejects incompatible archived markup at build time. Update Search text to match the reordered content. See the November 12 past-event rule in DESIGN-AND-EDITORIAL. Do not reclassify a seminar as a community event to obtain promotion. The reading group's external site is not maintained by this Astro repository: preserve its existing link and update the requested local participation content unless access/scope is provided. The independent `reading-group/` endpoint is a preserved redirect, not the reading-group schedule.

## Recorded settings and explicit exceptions

Every `content/events/` record requires `eventType`: `community`, `seminar`, `reading-group`, `working-group`, or `other`. The current workshop is explicitly `community`. `audience` defaults to `unspecified`; set `public` only from confirmed audience/promotion intent. `homepage` defaults to `auto` and accepts `include` or `exclude` for an explicit instruction.

The shared policy applies in this order:

1. `homepage: exclude` excludes the event.
2. Past events require Rachel’s explicit retrospective request and an approved `pastAnnouncement` with its actual retrospective publication date. `homepage: include` alone cannot keep an expired invitation on Home.
3. Upcoming `homepage: include` makes any event type eligible.
4. Under `auto`, seminars/reading groups/working groups are excluded even if `audience: public`.
5. Under `auto`, community events and other confirmed public events are eligible; `other` events with unspecified audience are not.

For an explicit homepage promotion of a dated seminar/group activity, first update its canonical entry. Then add a minimal promotion record in `content/events/` with its true `eventType`, `homepage: include`, confirmed title/date/location, actual `announced` date and `detailsHref` pointing to that exact entry (for example `/events#stable-seminar-id`). Include only approved optional copy/actions. To withdraw a previous promotion, use `homepage: exclude` or remove only its secondary promotion record, preserving the canonical entry. The schema rejects series/group records without an explicit promotion/withdrawal represented in the fields and a canonical link. Their promotion records are excluded from Community events and duplicate event Search entries; the canonical seminar/group remains searchable in its normal context. Check that the target exists and the facts match whenever editing either record. Do not create this secondary record for routine seminar/group additions. Undated group announcements need a normal editorial decision, not a fabricated calendar card.

Every ordinary community/public event uses one shared record for Home and Events. `announced` controls feed recency; `start`/`end` remain attendance dates. Home shows at most **three** eligible announcements total. Eligible upcoming events take priority, newest announcement first; newest eligible News and approved event retrospectives fill remaining places. Equal dates use stable ID ascending. Eligibility does not add a fourth slot; multiple eligible upcoming events can fill all three. A displaced event remains on Events. News defaults to inclusion with explicit exclusion/review options; see [News guidance](../../content/updates/_README.md). Preserve stable anchors.

## Fixed card treatments and verification

Eligible upcoming events use the approved outlined workshop treatment, shared calendar/title/location alignment and optional approved interest button. Past events retain the calendar/title header but use ordinary News card colors/type, no outline or button. Across every past event type, the location moves to the bottom of collapsed Event details using the shared plus/dots control; upcoming locations stay visible. News remains unchanged. See [the design rules](DESIGN-AND-EDITORIAL.md#announcement-card-treatments--approved-november-3).

Run `npm run test:announcements`, `npm run check` and `npm run build` for policy/content changes; review actual Home placement, canonical details link, Events/group listing, Search and the three-item limit. Review desktop/mobile if rendered content changes. Timing is evaluated at build time through the final Cambridge event day; rebuild and deploy after an event ends. This configuration does not schedule publishing or authorize publication beyond the conversation's scope.

These instructions travel in source version history, not chat-specific memory. Adam needs the current continuing source branch (`codex/default-size-90-source`) and a contributor/assistant that reads `AGENTS.md`. Direct edits or tools that ignore repository instructions cannot interpret natural-language requests automatically; the schema/policy still guard records built through this Astro source.
