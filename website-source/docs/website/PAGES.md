# RESI page references

Paths are relative to website-source/. The implementation holds current copy; this reference records purpose, sources and dependencies without duplicating each paragraph. Reconciled November 2, 2026.

| Page | Purpose and source | Connections and open work |
| --- | --- | --- |
| Home `/` | Introduce RESI and safe by design; announce activity; show cryptography precedent, founders, key areas and support. src/pages/index.astro; components/HomePage.astro, WorkshopCallout.astro, ResearchAreaCards.astro, ResearchTeamMosaic.astro. | Shares people/framing, area data and announcements. Outlined event styling is published (PR 71). Three-item combined News/Events feed, category labels and aligned event layout are published through PR 72. Workshop counterpart is on Events. November 5 approved design places the featured workshop beside the introduction under a full-width H1, with three actions below; normal workshop copy remains first in Announcements. Published mobile order puts event below H1; event-after-definition alternative remains preview-only (E13). |
| Who we are `/about` | Explain interdisciplinary independence, approach, success and FAQ. src/pages/about.astro; facts/FAQ in src/data/institute.ts. | Connects Research, People, Support and Events. Preserve intro actions and success invitation. M1/M2/M3/M5/M6 editorial work remains. Visitor links follow visibility flag. |
| Research `/research` | Outputs, all areas, groups and foundational papers. src/pages/research.astro; src/data/research-agenda.json, groups.ts; content/selected-research.json and publication helpers/components. | Match Home areas, People leadership links, selected papers and Search. Preserve #approach, #areas, #concentration, #evidence and individual IDs. Anat's group and adversary wording remain open. |
| People `/people` | Founders, research team, operations, affiliations and participation. src/pages/people.astro; content/people/, affiliated.json, visitors.json; src/data/visibility.ts. | portraits.ts affects Home too. Group-leader order has explicit refinements. Visitors hidden. Join us has Work at RESI, Visit, external research fellowships and AI Safety Reading Group. Published and live verified November 8 through PR 129; matching Search entries are live. November 8 PR 133 puts Reading Group before Fellowships when stacked at 570px or below, while desktop retains Fellowships left / Reading Group right. Preserve #get-involved, #culture, #work-at-resi, #research-fellowships, forms and mailing lists. Work has culture, unlinked opportunities placeholder, then dated role-neutral hiring outlook; Jobs/application process is next. Search includes both added cards. Intro revision remains pending. |
| News `/news` | Dated announcements/coverage with actual sources. src/pages/news.astro; content/updates/; src/lib/announcements.ts. | Home uses the same news records, merged with community event records from content/events/. News filters the combined source to News only. Home uses the shared three-slot selector with eligible upcoming events first; ordinary valid News defaults to inclusion, with explicit exclusion/review holds. Preserve title links, IDs, summaries and publisher attribution; quotation mode is explicit. See content/updates/_README.md. Workshop content comes from the same reusable event record on Home and Events. |
| Events `/events` | Community event cards above RESI-MIT seminars and the past-talk archive. src/pages/events.astro; content/events/ and src/data/seminars.json; shared WorkshopCallout.astro. | Match Home event records and card styles; Search includes events and talks. src/pages/seminars.astro forwards old paths with query/hash intact. Seminar IDs, original bios, signup and seminar-zoom endpoint remain. Layout refinement and the automatic missing-counterpart audit are separate follow-ups. |
| Support `/support` | Giving, contact, urgency, people/compute and institutional case. src/pages/support.astro; contact/giving facts in institute.ts. | Cross-links to People/Research. Preserve current cards, heading and bold contact. Deck improvements are lower priority; regional claims need confirmation. |
| Search `/search` | Find people, areas, groups, papers and institutional content. src/pages/search.astro plus collections/data. | Some excerpts are manual: update them alongside copy. Hidden visitors stay excluded. Verify query behavior before reviving an older bug report. |
| Privacy, 404, redirects | Actual hosting/data handling, navigation and recovery. src/pages/privacy.astro, 404.astro; astro.config.mjs; public/robots.txt and sitemap.xml. | Check actual service use, canonical links, discovery and aliases when routes/services change. |
| Independent endpoints | Repository directories seminar-zoom/ and reading-group/ outside the Astro build. | Preserve them during publication. Zoom target is in root seminar-zoom/destination.json. Building Astro does not manage these endpoints. |

## Shared source map

| Concern | Files |
| --- | --- |
| Layout/metadata/common scripts | src/layouts/Base.astro |
| Explanatory controls and mobile H1s | Disclosure.astro / DisclosureControl.astro, lib/disclosure.ts, styles/disclosures.css; Base.astro hover lifecycle. FAQ click-only with no hint; papers retain hover. Host controls bottom alignment; structure.css / HomePage.astro scale opening H1s +10% up to 600px. Author-name redesign held separately. |
| Header/footer | src/components/Header.astro, Footer.astro |
| Sections, contents and onward actions | Section.astro, PageShortcuts.astro, SectionLinks.astro, IntroActions.astro |
| Announcement lifecycle and treatments | src/lib/event-announcement-policy.ts, src/lib/announcements.ts, WorkshopCallout.astro, content/events/; explicit pastAnnouncement opt-in for retrospective Home promotion |
| Type/color/spacing/layout | src/styles/global.css, structure.css, scoped component styles |
| People/photos | content/people/, src/lib/portraits.ts, Person.astro, Founder.astro, ResearchTeamMosaic.astro |
| Institutional facts/contacts/FAQ | src/data/institute.ts |
| Areas/groups/papers | src/data/research-agenda.json, groups.ts, content/selected-research.json, src/lib/publications.ts, publication-display.ts |

## Sources and maintenance

Rachel is the editing contact. A change's factual source may be approved public copy, lead confirmation, an original paper, event announcement or reviewed document. Record that source with its work item instead of presuming one institutional approver for every page.

Review events/opportunities when facts change and after dates pass. Check people, affiliations, contacts, giving and forms during substantive updates and before handoff. A periodic site review is proposed in WORKLIST; no recurring automation is scheduled.

For an edit, check related content, navigation, Search, metadata, stable IDs, accessibility and phone layout. Update this reference when structure or source ownership changes; do not copy every small wording edit here.

## Event contribution routing

Apply [EVENT-ROUTING.md](EVENT-ROUTING.md) to short event/seminar/group requests. Community/public events share Home/Events records; seminars stay in their seminar section by default, reading groups in their participation context, and working groups on Research. Explicit seminar/group Home promotions link to their canonical entry and do not appear a second time under Community events. `event-announcement-policy.ts` enforces homepage eligibility; `content.config.ts` requires classification.

November 5 People order: Join us (#get-involved) precedes Affiliated groups (#affiliated), including the On this page links. Preserve the separate preview-only careers content; the reorder release uses the restored live section.

November 8 Home placement published (E14, PR 131): Announcements returns after Founders/research community, before Key research areas, using its unchanged shared cards/feed and anchor. The intro/featured workshop stays in place. Live desktop/mobile verified.
