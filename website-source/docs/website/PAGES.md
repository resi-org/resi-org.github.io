## Workshop alternatives offline — November27 current status

The three RESI preview routes have been removed: sourcePR431/474a148; generated-onlyPR432/c392838; successfulPages46080516103 and exact API built revision. All nine tested old URL forms (slash/no slash/index.html) return404 without a program. Canonical workshop remains HTTP200 and byte-for-byte identical to selected compact release. Archived route wrappers/reusable designs remain outside page generation; do not restore public alternatives without Rachel’s new request.

The original separate Sites preview was permanently deleted after Rachel’s explicit action-time confirmation on November27. Browser UI reported Site deleted, and a fresh Sites inventory excludes the project. Its former host returns HTTP403 without workshop content; the three retired RESI routes return404. Current canonical workshop remains HTTP200 and byte-identical to production. Complete version38source history and built files remain in output/retired-workshop-sites-backup-nov27 in the isolated two-options checkout; newer alternatives remain in the non-routable archive and source history. No alternative is publicly served, and none may be republished without new authorization.

## Workshop option 3 — November 27 current selection

Canonical /workshops/safe-by-design-superintelligence/ now selects layout="compact", preview={false}, from WorkshopLayoutPreview.astro. Compact square crops in src/data/workshop-compact-portraits.ts now serve canonical and compact preview; People/Home and the larger integrated alternative remain independent. src/data/workshop-participant-portraits.ts also owns selected People-image credits keyed by asset, including Miranda/Anna Lu. Current Program content/anchors are shared and unchanged. Publication/live evidence: briefs/workshop-layout-options-2026-11-27.md.

## Workshop introduction — November16 approved release

Standalone workshop uses the combined subtitle (frontier labs, safety organizations, and academia),22px desktop/19.5px phones; small opening paragraph removed. Shared event data, metadata, Home/Events/Search stay unchanged. Publication/live verification recorded in CHANGELOG/WORKLIST.

# RESI page references

**Workshop detail page, November14 — published/live verified:** /workshops/safe-by-design-superintelligence/ reads the canonical workshop event record; src/data/workshop-portraits.ts and WorkshopPortrait.astro supply final static portraits. detailsHref connects Home/Events links and Search; sitemap includes the route. #program is retained under Panels. Credits, when present, use Base's before-footer slot. Existing /events#workshop remains. Source PR227 and production PR228 are merged; live900/390px navigation/layout verified. [Launch record](briefs/workshop-launch-2026-11-14.md).

November 11 Operations update (WORKLIST OP1), published and live verified through PR 163: People uses the shared Person component in an Operations-only two-column desktop grid, Emily left and Rachel right; phones retain stacked rows. Both role labels and approved no-name-repeat bios come from content/people. Rachel's approved photo is public/people/rachel-sipser.png with default shared portrait framing, unchanged pixels. Search inherits both profiles. That Operations release did not change Home; the subsequent November 11 team-photo rule below now includes Operations automatically. Rachel's final bio uses communications, community-building and organizational development, with “advancing new initiatives” and “rigorous research,” rather than naming individual channels.

Paths are relative to website-source/. The implementation holds current copy; this reference records purpose, sources and dependencies without duplicating each paragraph. Reconciled November 2, 2026.

| Page | Purpose and source | Connections and open work |
| --- | --- | --- |
| Home `/` | Introduce RESI and safe by design; announce activity; show cryptography precedent, founders, key areas and support. src/pages/index.astro; components/HomePage.astro, WorkshopCallout.astro, ResearchAreaCards.astro, ResearchTeamMosaic.astro. | Shares people/framing, area data and announcements. The cryptography precedent ends with right-aligned Explore foundational work by RESI researchers → /research#evidence (12px gap above); Research community links Meet the team and Join us → /people#get-involved. Outlined event styling is published (PR 71). Three-item combined News/Events feed, category labels and aligned event layout are published through PR 72. Workshop counterpart is on Events. November 5 approved design places the featured workshop beside the introduction under a full-width H1, with four intro actions below (Research Program, Seminars and Workshops, Join our reading group, Support our work); normal workshop copy remains first in Announcements. Published mobile order puts event below H1; event-after-definition alternative remains preview-only (E13). |
| About `/about` | Explain interdisciplinary independence, approach, success and FAQ. src/pages/about.astro; facts/FAQ in src/data/institute.ts. | Intro actions: Meet the team → /people, Research Program → /research, Seminars and Workshops → /events, Support our work → /support. Preserve the success invitation. M1/M2/M3/M5/M6 editorial work remains. Visitor links follow visibility flag. |
| Research `/research` | Outputs, all areas, groups and foundational papers. src/pages/research.astro; src/data/research-agenda.json, groups.ts; content/selected-research.json and publication helpers/components. | Match Home areas, People leadership links, selected papers and Search. Intro actions: Meet the team → /people; Seminars and Workshops → /events; Join our reading group → current external reading-group site; Support our work → /support. Preserve #approach, #areas, #concentration, #evidence and individual IDs. Anat’s group and the balanced twelve-card layout were published/live verified November 9 (W1, PR 147); adversary wording remains open. |
| People `/people` | Founders, research team, operations, affiliations and participation. src/pages/people.astro; content/people/, affiliated.json, visitors.json; src/data/visibility.ts. | Intro actions: Research Program → /research; Seminars and Workshops → /events; Join our reading group → current external reading-group site; Support our work → /support. portraits.ts affects Home too. The Research team is alphabetical by last name (Adam, November 27); founders remain separate. Visitors hidden. Join us has Work at RESI, Visit, external research fellowships and AI Safety Reading Group. Published and live verified November 8 through PR 129; matching Search entries are live. November 8 PR 133 puts Reading Group before Fellowships when stacked at 570px or below, while desktop retains Fellowships left / Reading Group right. Preserve #get-involved, #culture, #work-at-resi, #research-fellowships, forms and mailing lists. Work has culture, an AI Safety Researcher link to `/jobs/ai-safety-researcher/` (November24 approved full-page release; earlier PR364 linked directly to AJO), then the preserved dated hiring outlook. The full role page links to AJO for applications; see H6 and briefs/researcher-job-page-2026-11-24.md for release status. Search includes both added cards. Intro revision remains pending. |
| News `/news` | Dated announcements/coverage with actual sources. src/pages/news.astro; content/updates/; src/lib/announcements.ts. | Home uses the same news records, merged with community event records from content/events/. News filters the combined source to News only. Home uses the shared three-slot selector with eligible upcoming events first; ordinary valid News defaults to inclusion, with explicit exclusion/review holds. Preserve title links, IDs, summaries and publisher attribution; quotation mode is explicit. See content/updates/_README.md. Workshop content comes from the same reusable event record on Home and Events. |
| Events `/events` | Published H1: “Seminars, workshops, and discussions on building the foundations of superintelligence safety”. Published page retains community event cards, RESI-MIT seminars and the Past seminars archive. src/pages/events.astro; content/events/; src/data/seminars.json; shared WorkshopCallout.astro. | Heading/metadata/Search published/live verified November 11 (source PR 175, publication PR 176, successful Pages run 43107091561). Andrew Lo remains archived (PR 173). Preserve all seminar IDs/bios/signup and legacy seminar redirects/Zoom endpoint. Introductory wording, extra category sections and visual refinement remain unpublished in /private/tmp/resi-master-events-nov11 at :4431 (E16), now using the approved H1. That preview’s reading-group copy/data are shared with People/Search there; no group/date/Home promotion released. Automatic counterpart audit remains deferred. November 16 reviewed alignment at :4450: scoped WorkshopCallout.astro detail-event title/location centering; published/live verified through source PR245, production PR246 and successful Pages run43894731802; live1280/390px alignment/links/leading/no overflow checked. Wider Events redesign remains unpublished. See WORKLIST. |
| Support `/support` | Giving, contact, urgency, people/compute and institutional case. src/pages/support.astro; contact/giving facts in institute.ts. | Cross-links to People/Research. Preserve current cards, heading and bold contact. Deck improvements are lower priority; regional claims need confirmation. |
| Search `/search` | Find people, areas, groups, papers and institutional content. src/pages/search.astro plus collections/data. | Some excerpts are manual: update them alongside copy. Hidden visitors stay excluded. Verify query behavior before reviving an older bug report. |
| Privacy, 404, redirects | Actual hosting/data handling, navigation and recovery. src/pages/privacy.astro, 404.astro; astro.config.mjs; public/robots.txt and sitemap.xml. | Check actual service use, canonical links, discovery and aliases when routes/services change. |
| Letterhead `/letterhead/` (unlisted) | Blank Word, PDF and LaTeX stationery downloads. `src/pages/letterhead.astro`; generic files and preview in `public/letterhead/`. | Adam requested direct-link access only on November 14. `Base.astro` supplies an optional `noindex` directive. Keep this page out of navigation, Search, sitemap and public inbound links. The blank templates contain no recommendation letter or personal signature. |
| Independent endpoints | Repository directories seminar-zoom/ and reading-group/ outside the Astro build. | Preserve them during publication. Zoom target is in root seminar-zoom/destination.json. Building Astro does not manage these endpoints. |

## Shared source map

| Concern | Files |
| --- | --- |
| Layout/metadata/common scripts | src/layouts/Base.astro; src/data/seo.ts holds RESI's organization identity and homepage description. Base supplies page-specific Open Graph/X cards and homepage-only ResearchOrganization JSON-LD. |
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

November 11 Home/People portrait dependency: HomePage.astro derives every non-founder profile with a photo from content/people (Research and Operations included), and ResearchTeamMosaic.astro rotates that full roster through 18 slots. New profiles/photos enter on the next normal build/publication with no homepage edit. Founders retain their separate larger treatment; hidden visitors stay hidden. portraits.ts remains the shared framing/asset source. See DESIGN-AND-EDITORIAL’s homepage team-photo rule.

November 12 past-event dependency: all seven seminar archives use validated compact date-only summaries, with original time and location last inside Event details. Chloé keeps About the conversation and uses Biography. Shared WorkshopCallout applies the same location-inside-details rule to every past community event and approved Home retrospective, while upcoming locations stay visible. See DESIGN-AND-EDITORIAL and EVENT-ROUTING.

November 12 workshop lineup dependency: content/events records may carry confirmed `speakers` and `hosts`. WorkshopCallout.astro renders the full list on Events (`lineup="full"`) and names only on Home's hero and Announcements cards (`lineup="names"`); search.astro indexes them. Changing the lineup means rebuilding and publishing Events, Home and Search together.

November 12 homepage-only 01b trial: HomePage.astro scopes the stronger outline/500-weight labels to its four hero-actions buttons, with 6px horizontal padding preserving the desktop row. Shared IntroActions/global button styles, header support, workshop interest and lower-Home Learn more remain unchanged. That homepage-only phase is superseded by the approved outlined-action standard below; the four explicitly preserved treatments remain separate.

November 12 outlined-action standard: Base.astro imports styles/buttons.css for all modern pages. Home, About, Research, People, Support intro actions and 404 share 01b via .button, with Donate online explicitly excluded. Header support, workshop Interest form and lower-Home Learn more remain unchanged; no markup/link change. HomePage owns only its compact 6px row geometry, not a separate appearance rule. See DESIGN-AND-EDITORIAL.

November16 workshop action order: shared WorkshopCallout renders Learn more before Interest form. Featured Home retains text/filled treatments in its bottom row; Events and ordinary Home announcement use an outlined Learn more above filled Interest form at the right, moving to a wrapping row on phones. Details routes and interest URLs remain canonical shared event fields.

November 19 Events heading refinement: the published seminar section label is Upcoming seminars, matching Past seminars. RESI/MIT hosting remains in the introduction; #upcoming-seminars and #seminars are preserved. See CHANGELOG for publication/live evidence.

November19 Events copy: community heading/contents label now Upcoming workshops and other community events; existing #community-events retained. Complete seminar Zoom/time notice is bold via canonical seminars.intro. Upcoming card styling remains a separate preview. See CHANGELOG/WORKLIST.

November19 approval supersedes the earlier seminar-box preview hold: every upcoming seminar automatically uses the reviewed pale-green outlined card, with24px title and introduction/Zoom notice/signup above it. Past seminars retain their compact archive. Community heading reads Upcoming workshops and community events; the On this page link uses Upcoming workshops & events. #community-events/#upcoming-seminars/#seminars unchanged. Canonical renderer/styles: src/pages/events.astro; convention: DESIGN-AND-EDITORIAL; contribution routing: EVENT-ROUTING. See CHANGELOG for publication/live stages.

November19 desktop header preview (D18; not merged/published): src/data/page-sections.ts supplies Header and the existing in-page PageShortcuts inventories for About/Research/People/Events. Header.astro and styles/navigation.css own horizontal hover/focus rows and measured full/collapsed navigation. Desktop in-page bars hide; collapsed/mobile appearance, interactions and section targets remain unchanged. Check both menu locations when adding/removing a section; hidden Visitors follows shared visibility. Source /private/tmp/resi-header-sections-nov19, preview :4454.


November23: D18 desktop header menus approved for publication; DESIGN records the final centered 25px row and shared inventory. The earlier preview-only note is superseded for this reviewed scope. Collapsed/mobile layout remains unchanged. Publication/live evidence follows in CHANGELOG.

November23 D18 is now published/live verified: sourcePR350 / productionPR351 / Pages45222886639. About/Research/People/Events use the shared header/in-page inventory; final geometry/behavior and preserved mobile checks are in CHANGELOG. Earlier preview-only status is superseded.

November24 workshop preview dependency (unpublished4513 only): WorkshopBioLink.astro maps RESI team names/photos and moderator names to canonical /people#<person.id> targets derived from the People collection. Preserve valid People anchors when reviewing this preview;29 link placements reach12 IDs. WorkshopNameLines.astro formats only the17 panelist/spotlight/host captions. Published People/Home/event records remain unchanged. See the current workshop preview brief for review scope and checks.


November24 workshop layout approval: canonical detail page’s reviewed720px layout uses WorkshopBioLink.astro/WorkshopNameLines.astro and src/data/workshop-participant-portraits.ts for People biography links, two-line small captions and selected panel/spotlight images. Canonical event data still owns all roles/affiliations and the approved participant order. See briefs/workshop-layout-release-2026-11-24.md for source/publication/deployment status; People/Home themselves are unchanged.


November24 workshop layout is published/live verified: source PR354 /0a930c4, production PR355 /48e37e9, successful Pages45430831695. The canonical route retains stable anchors and Home/Events/Search links. Live320–1280px, desktop/mobile visual, biography-target and Search navigation checks passed. See the November24 release record; prior local-only status for the reviewed workshop design is superseded.


Preview-only November24 researcher route `/jobs/ai-safety-researcher/` is in isolated output/resi-researcher-page-preview-nov24, not continuing-source application files. Review http://127.0.0.1:4528/jobs/ai-safety-researcher/ . Noindex/no local form/no Search or sitemap/incoming live link. Full page awaits Rachel’s review; live Work at RESI links directly to AJO. See H6/brief.


November24 full job-page release approved: `src/pages/jobs/ai-safety-researcher.astro` owns `/jobs/ai-safety-researcher/`, reusing Base/Section and approved AJO copy. Public/indexable with canonical metadata, dedicated Search entry and sitemap URL; incoming link from People’s Work at RESI card. AJO job33484 remains the application destination; no local form. Supersedes the preview-only route hold above.

November27 design alignment is published/live verified: the job page inherits the same12.75px prose, metadata scale,01b button dimensions and list rhythm as ordinary interior pages, with its article centered at the shared600px width. Do not restore the earlier local16px body/button exception. Shared headings/mobile title enlargement, approved text, metadata, anchors and AJO links remain. Source PR436/production PR437; see H6 and the role-page brief for evidence. All future pages follow the explicit design-inheritance/comparison requirement in AGENTS and DESIGN-AND-EDITORIAL.

November24 header refinement published (D19): connected desktop label/row outline and smaller desktop Support. On this page stays directly after the intro whenever the full header collapses, including intermediate widths. Shared inventory/anchors and mobile layout are unchanged. SourcePR374 / publicationPR375 / successful Pages45489880591; see DESIGN/CHANGELOG.


November25 workshop program/arrival preview: isolated output/resi-workshop-program-preview-nov25 adds src/data/workshop-program.ts for public session times/references, optional spotlights.titles in canonical events schema/data, #schedule and #directions on the existing detail route. #program remains Panels and previous links remain valid. W3 conduct page/contact decision is tracked separately; approved contact hello@resi.org, wording pending Simons-informed review. This preview is not published. See briefs/workshop-program-arrival-conduct-2026-11-25.md.


November25 workshop preview only:4515 now uses Speakers (#speakers), Panelists (legacy #program), RESI research spotlights (#spotlights), Program (#schedule), hosts and Getting here. Speaker detail IDs remain stable. This is Rachel’s reviewed-in-progress name-first trial, not the live baseline; see WORKLIST and briefs/workshop-program-arrival-conduct-2026-11-25.md.


November25 preview-only workshop conduct page: /workshops/safe-by-design-superintelligence/code-of-conduct/ is owned by src/pages/workshops/safe-by-design-superintelligence/code-of-conduct.astro. Exact Rachel-approved December4policy; reporting mailto:hello@resi.org; workshop Getting here links it, and return link targets#directions. Search and sitemap carry the route. No global/footer/homepage policy promotion. W3 implementation complete in4515 preview; publication/live verification pending. See briefs/workshop-program-arrival-conduct-2026-11-25.md.


November25 conduct preview refinement: heading/title Code of conduct; body remains explicitly December4workshop-only at Rachel’s choice. Existing workshop-scoped route retained. Reporting contact is now conduct@resi.org (Rachel’s explicit request), including Search excerpt; general footer hello@resi.org remains. No mailbox/alias administration or publication performed.


November25 conduct preview now general to RESI workshops, seminars and community events, per Rachel’s superseding request. Canonical source src/pages/code-of-conduct.astro and URL /code-of-conduct/; earlier workshop-specific URL redirects via astro.config.mjs. Workshop Getting here, Search and sitemap use the new route. Reporting conduct@resi.org; ending link /events. No homepage/global-nav/footer policy link. Unpublished4515preview; details in workshop Program/arrival/conduct brief.


November25 workshop release now PUBLISHED AND LIVE VERIFIED: /workshops/safe-by-design-superintelligence/ includes620px reviewed layout,26entry Program and Getting here; /code-of-conduct/ is the general event policy with conduct@resi.org. Workshop→policy,policy→workshop#directions/Events,Search/sitemap and old-policy redirect are connected. SourcePR386/fd6211a,productionPR387/f450d3e,successfulPages45712583468. Preview-only holds for this scope superseded. Full verification in workshop Program/arrival/conduct brief.


November25 workshop refinement approval: current workshop-only crop overrides are split between workshop-portraits.ts (large talks) and workshop-participant-portraits.ts (square panelists). Yael’s square override inherits image/credit but supplies independent style. Policy link moves from #directions to below #join-us .interest-note; /code-of-conduct/ and its return links unchanged.620pxcolumn,3line full-width subtitle and grouped intro timing are approved; shared event data/Home/Events/People/Search remain unchanged. Publication/live stages in CHANGELOG.


November25 workshop refinements are PUBLISHED AND LIVE VERIFIED: sourcePR389/b9e3d2e,productionPR390/4c59ed2,successfulPages45717222391. The approved current framing/three-line intro/grouped timing/bold lower conduct-link rules above are live. Actual320–1280px and native links/redirect checked; see workshop brief/CHANGELOG for exact evidence.


November27 review routes: `/previews/workshop-portraits/` and `/previews/workshop-integrated-program/`, driven by `src/components/WorkshopLayoutPreview.astro`, are deliberately isolated layout alternatives for the December4workshop. Both use current event/program/portrait data and `Base noindex`, with no incoming navigation/Search/sitemap entries. They do not replace the canonical detail page. See briefs/workshop-layout-options-2026-11-27.md for publication status.


November27 compact workshop review option: `/previews/workshop-compact-program/` is owned by `src/pages/previews/workshop-compact-program.astro`, `WorkshopLayoutPreview.astro` compact mode and `WorkshopScheduledPerson.astro`. All participants use uniform square portraits; single-speaker/host entries keep names beside them, while panelists and spotlight researchers form one left-aligned row with names underneath. Gaps shrink with width; all squares share a responsive size governed by the five-person row. Shares canonical event/program data and approved portraits; noindex, no incoming site links and absent from Search/sitemap. Separate from the canonical page and the existing roster/integrated alternatives; see the workshop layout-options brief for current release evidence.


November27 canonical workshop adoption: `src/pages/workshops/safe-by-design-superintelligence.astro` renders `WorkshopLayoutPreview.astro` in integrated mode with `preview={false}`. Despite the component’s historical filename, it now serves canonical and review variants from one event/program/portrait source. Preview-only metadata is explicitly disabled for canonical, retained for all /previews routes. Canonical and integrated/compact variants omit individual spotlight titles. Legacy #speakers/#program/#hosts aliases preserve bookmarks after integration; #schedule and all timed entry/talk/panel/spotlight IDs remain stable. The compact alternative remains separate; publication evidence is in the layout-options brief.

November27 compact square framing: `src/data/workshop-compact-portraits.ts` owns compact-only overrides and the supplied wider Nickolai asset; exact People portrait/framing is used for Anat. Preserve independent larger/canonical crops and host references. See layout-options brief for publication evidence.

November 27 About navigation: shared page-sections.ts uses How we define success for the success-section link (desktop hover and collapsed/mobile contents). The section itself remains What success will look like at #progress. See CHANGELOG for publication evidence.
