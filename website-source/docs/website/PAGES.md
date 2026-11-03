# RESI page references

Paths are relative to website-source/. The implementation holds current copy; this reference records purpose, sources and dependencies without duplicating each paragraph. Reconciled November 2, 2026.

| Page | Purpose and source | Connections and open work |
| --- | --- | --- |
| Home `/` | Introduce RESI and safe by design; announce activity; show cryptography precedent, founders, key areas and support. src/pages/index.astro; components/HomePage.astro, WorkshopCallout.astro, ResearchAreaCards.astro, ResearchTeamMosaic.astro. | Shares people/framing, area data and announcements. Outlined event styling is published (PR 71). Three-item combined News/Events feed, category labels and aligned event layout are published through PR 72. Workshop counterpart is on Events. |
| Who we are `/about` | Explain interdisciplinary independence, approach, success and FAQ. src/pages/about.astro; facts/FAQ in src/data/institute.ts. | Connects Research, People, Support and Events. Preserve intro actions and success invitation. M1/M2/M3/M5/M6 editorial work remains. Visitor links follow visibility flag. |
| Research `/research` | Outputs, all areas, groups and foundational papers. src/pages/research.astro; src/data/research-agenda.json, groups.ts; content/selected-research.json and publication helpers/components. | Match Home areas, People leadership links, selected papers and Search. Preserve #approach, #areas, #concentration, #evidence and individual IDs. Anat's group and adversary wording remain open. |
| People `/people` | Founders, research team, operations, affiliations and participation. src/pages/people.astro; content/people/, affiliated.json, visitors.json; src/data/visibility.ts. | portraits.ts affects Home too. Group-leader order has explicit refinements. Visitors hidden. Preserve Visit, Reading Group and interest form. Hiring expansion and intro revision pending. |
| News `/news` | Dated announcements/coverage with actual sources. src/pages/news.astro; content/updates/; src/lib/announcements.ts. | Home uses the same news records, merged with community event records from content/events/. News filters the combined source to News only. Preserve title links, IDs, summaries and outlet attribution. Workshop content comes from the same reusable event record on Home and Events. |
| Events `/events` | Community event cards above RESI-MIT seminars and the past-talk archive. src/pages/events.astro; content/events/ and src/data/seminars.json; shared WorkshopCallout.astro. | Match Home event records and card styles; Search includes events and talks. src/pages/seminars.astro forwards old paths with query/hash intact. Seminar IDs, original bios, signup and seminar-zoom endpoint remain. Layout refinement and the automatic missing-counterpart audit are separate follow-ups. |
| Support `/support` | Giving, contact, urgency, people/compute and institutional case. src/pages/support.astro; contact/giving facts in institute.ts. | Cross-links to People/Research. Preserve current cards, heading and bold contact. Deck improvements are lower priority; regional claims need confirmation. |
| Search `/search` | Find people, areas, groups, papers and institutional content. src/pages/search.astro plus collections/data. | Some excerpts are manual: update them alongside copy. Hidden visitors stay excluded. Verify query behavior before reviving an older bug report. |
| Privacy, 404, redirects | Actual hosting/data handling, navigation and recovery. src/pages/privacy.astro, 404.astro; astro.config.mjs; public/robots.txt and sitemap.xml. | Check actual service use, canonical links, discovery and aliases when routes/services change. |
| Independent endpoints | Repository directories seminar-zoom/ and reading-group/ outside the Astro build. | Preserve them during publication. Zoom target is in root seminar-zoom/destination.json. Building Astro does not manage these endpoints. |

## Shared source map

| Concern | Files |
| --- | --- |
| Layout/metadata/common scripts | src/layouts/Base.astro |
| Header/footer | src/components/Header.astro, Footer.astro |
| Sections, contents and onward actions | Section.astro, PageShortcuts.astro, SectionLinks.astro, IntroActions.astro |
| Type/color/spacing/layout | src/styles/global.css, structure.css, scoped component styles |
| People/photos | content/people/, src/lib/portraits.ts, Person.astro, Founder.astro, ResearchTeamMosaic.astro |
| Institutional facts/contacts/FAQ | src/data/institute.ts |
| Areas/groups/papers | src/data/research-agenda.json, groups.ts, content/selected-research.json, src/lib/publications.ts, publication-display.ts |

## Sources and maintenance

Rachel is the editing contact. A change's factual source may be approved public copy, lead confirmation, an original paper, event announcement or reviewed document. Record that source with its work item instead of presuming one institutional approver for every page.

Review events/opportunities when facts change and after dates pass. Check people, affiliations, contacts, giving and forms during substantive updates and before handoff. A periodic site review is proposed in WORKLIST; no recurring automation is scheduled.

For an edit, check related content, navigation, Search, metadata, stable IDs, accessibility and phone layout. Update this reference when structure or source ownership changes; do not copy every small wording edit here.
