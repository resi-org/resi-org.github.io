# RESI website change log

Record material source and public changes with their scope and evidence. Keep Proposed, Preview, Published and Live verified distinct. Baseline reconciled November 2, 2026; do not treat it as a fresh verification on future dates.

## November 3 Events publication — live verified

Rachel approved the Events preview and explicitly requested publication with one H1: “Community events, seminars, and workshops on the foundations of AI safety.” Removed the former Events heading and subtitle. Preserved the latest shared-card refinements through source 67f93bd and linked title; proposed additional cross-links were not implemented.

Publication PR 72 merged at `14a20ea5128a38df0f20c59c4cb28ae4d4eb95c9`, from reviewed generated head `cc5fe19c3658e835c0d92bc1d4b34b2313b43a1e`. Source PR 74 merged at `ddaf39a59d80d4cbfd57aad9d30c77fdffe8eb31` into the shared source branch; PR 73 carries that source into the continuing source line separately from production. Astro diagnostics/build passed. New heading/no subtitle and no overflow checked at 390px/320px. Publication Events links/anchors validated; all five domain/independent-endpoint files retained identical hashes. Existing historical assets preserved. Pages run [41655422743](https://github.com/resi-org/resi-org.github.io/actions/runs/41655422743) succeeded. Live checks confirmed the exact H1 with no subtitle, Events navigation, three homepage announcements, workshop Search results, and an old seminar deep link redirecting to Events with its details open. Desktop 1200px and phone 390px have no horizontal overflow. Live screenshot saved in the chat artifacts.

## November 3 Events rename and cross-link review — preview

Rachel requested Seminars → Events everywhere and a holistic review of opportunities to link to Events. She specified the December 4 card at the top using the exact Announcements component, with seminars below and later layout refinements. Implemented /events, Events navigation/page metadata/sitemap/Search, existing cross-page destinations, workshop title links and shared workshop content. /seminars preserves queries and fragments when forwarding; seminar article IDs and historical biographies are unchanged. Workshop card styles/content are shared with Home. This branch incorporates the concurrent card revision 027e359 without changing the original checkout.

Source review: [draft PR 74](https://github.com/resi-org/resi-org.github.io/pull/74), branch codex/events-page-rename in the attached isolated worktree; application change 240eb04 plus shared-card integration 55af5e9. Depends on the pending source PR 73 announcement feed; publication PR 72 and production were not changed. This is a preview, not published. New link placements remain recommendations in WORKLIST E6.

Verification: Astro diagnostics and build passed; browser checks confirmed Events navigation on every main page, correct canonical, workshop Search results, no old seminar-destination links, all 37 generated Events links resolving to the page/valid anchors, and all seven seminar anchors retained. Phone 390px/320px and desktop showed no horizontal overflow. Mobile menu shows Events as the current page. Old /seminars/?from=old-link#anat-perry-2026-10-21 redirects with query/hash intact and opens the talk details. Final review includes the latest card revision at 1200px, 390px and 320px, light/dark inspection, and identical rendered card text/style on Home and Events. Existing empty partner-collection notice remains. Forms were not submitted.

## November 2 outlined workshop card publication

Rachel explicitly requested publication of the revised outlined card styling in Review RESI website project guide. Published the exact reviewed PR 71 head `157ff2625b7a3f5a12e1e9a8ea4783fcb90784b0`; production merge `20c5a453e1aa7d097d4c5827bee3c47d012ea3d3`. Only index.html and its new homepage stylesheet changed in publication. The invitation spans the card, the date appears once, Cambridge and Interest form remain, and the card uses the established full outline. Events migration remains deferred.

Verification this chat: source diagnostics passed with zero errors/warnings/hints; static build passed (existing empty events/partners collection notices). Rebuilt index.html and its stylesheet match the publication checkout byte for byte. Pages run 41514555482 completed successfully. Live browser review at 1200px and 390px confirmed the revised invitation, one workshop/date, Cambridge and the unchanged Interest form destination. Full border present with no box shadow; no horizontal overflow at either width. Desktop/phone screenshots inspected. Source PR 70 includes the application changes and current project records.

App organization: moved this chat into RESI Website - resi.org; tool returned the expected project ID. No folder relocation was needed.

## November 2 project setup

Status: local organizational setup complete. Project RESI Website - resi.org, ID 00c48f57-79f5-43f6-8bbf-38fd6efc3edb, points to the existing production-source worktree and is pinned. Added root agent guidance, current README entry points, this five-record management set, archived old READMEs, and portable public reference research. Consolidated the current queue, approved conventions, page sources and handoff workflow. Site application files, endpoints and deployment configuration are outside this setup's changes.

Verification: current GitHub main and open preview PRs checked during setup; nine active Markdown documents and 27 relative links checked with no missing targets. All 154 application/content/public-asset/endpoint/configuration files in the setup baseline retain identical hashes. Whitespace check passed. No rebuild is needed for these documentation-only edits. This setup does not publish the pending card design or change the visitor policy.

App organization: renamed the former Prioritize website updates chat to Website planning and priorities. Moving it and Update RESI event banners requires additional older-folder access, so both remain in their prior locations; WORKLIST retains retrieval IDs. New website chats start in the narrower dedicated project and read the saved project guidance. No chats were deleted or archived.

The original RESI workspace README and November 2 queue now point to this project's guide and active queue; their remaining contents are retained as history.

## November 2 event announcement

- Published and live-verified in the earlier event chat: intro → Announcements (workshop first, original other cards retained) → cryptography precedent. Source PR 68; [publication PR 69](https://github.com/resi-org/resi-org.github.io/pull/69), merge 199a9ebd8d3048ef7583e54c2ffb3ab614dd88c2. Earlier recorded Pages run 41492373049 succeeded.
- Preview only: unified workshop card, Save the date · Inaugural community workshop, date once, Cambridge/Interest form retained, established full outline replacing the rejected accent bar. Source [PR 70](https://github.com/resi-org/resi-org.github.io/pull/70), code 5b08ffc; publication [PR 71](https://github.com/resi-org/resi-org.github.io/pull/71), 157ff26. Both confirmed open at setup. Earlier chat recorded source diagnostics/build and desktop/phone/Safari review; these are prior verification results, not checks rerun by setup.
- Future Events page, shared event data/check and workshop counterpart remain deferred.

## October 27 visitor visibility

Current source visibility flag deliberately hides the visitor roster. October 27 source comment attributes the request to Adam; Rachel separately requested removal pending an updated version. Data remains for later reconciliation. Reference research and inclusion-policy discussion do not approve republication.

## October 23 to 25 production baseline

C.2 launched at resi.org on GitHub Pages October 23 via [PR 1](https://github.com/resi-org/resi-org.github.io/pull/1). Historical source snapshot: codex/c2-source-2026-10-23. The continuing source branch evolved to codex/default-size-90-source.

October 25 corrections established native display dimensions, shared menus/utility positioning, section links, current research/support copy, People ordering/framing and compact paper disclosures. Subsequent source files supersede older draft instructions. Detailed earlier revision/PR evidence remains in the original workspace output/RESI-LAUNCH-AND-ROLLBACK.txt; useful current decisions have been summarized in DESIGN-AND-EDITORIAL rather than reproducing every intermediate experiment.

## Future entry format

Date; request/outcome; affected pages/shared data; status; source revision/PR; preview checks actually run; publication revision and deployment status when applicable; live evidence; recovery pointer; unresolved follow-up. Include only information needed to continue or assess the change.


## November 2 — three-item announcement feed and event alignment (preview)

Request: refine workshop spacing/alignment, show only three recent items across News and Events, prefix category labels, and provide separate See all news / See community events links. Supersedes the old standalone workshop plus three-news layout and the old generic onward label.

Implementation: Home now takes three entries from one merged news/community-event collection, newest announcement/publication first. The workshop's reusable content/events record holds its November 2 announcement date, December 4 attendance date, location, approved label and interest form. News filters to News records; its generated output remains identical. Seminars and its generated output remain unchanged, with the future Events migration still deferred. The workshop's Events counterpart and cross-page audit remain open.

Visuals: full-width Events metadata; News · outlet · date for the two news cards; shared metadata size/weight/color; top-aligned calendar/title/action; smaller date and title, tighter row spacing and no internal date divider. Full outline, restrained event fill, Interest form and stable workshop-heading anchor retained. Original news-card shape, summaries and article links retained. Launching RESI is displaced from Home but remains on News.

Verification: Astro diagnostics (46 files, zero errors/warnings/hints), production build, three-card/category/order assertions, retained workshop anchor/date/form, 390px/320px no-overflow checks, desktop alignment measurements, dark/light UI checks (restored light), and byte comparisons showing News/Seminars unchanged. Only generated index.html and its scoped CSS differ from production baseline 20c5a45. Proof: original workspace docs/event-announcements-2026-11-02/three-item-feed-preview.jpg.

Status: preview on source branch codex/announcements-feed-alignment-nov2 (application commit 5cc27de), source PR 73. Generated publication branch codex/announcements-feed-alignment-publish-nov2 (bb706e3), publication PR 72. Not merged or published. This is distinct from the already-published PR 71 outlined card.


### November 2 — workshop description added to the feed preview

Rachel supplied the description directly: “Join us for a day of talks from RESI researchers and visiting scholars on what it means to build more safety into the foundations of increasingly capable AI and how we're approaching research on this topic.” Stored verbatim in the shared event record and rendered visibly, with no disclosure required.

Rebalanced the event card into a date/title/location header, full-width description, and Interest form beneath (right aligned desktop; aligned with paragraph left on phones). Header title/location centers against the full calendar block. The year remains while Rachel assesses the fuller layout; its removal was discussed, not decided. Existing label, outline, three-item feed, news cards, links and form destination retained.

Source diagnostics/build passed; desktop/phone content and layout checked. This extends source PR 73 and publication PR 72, still preview only.


## November 3 — event outline and alignment comparison (preview)

Rachel requested a darker hairline and actual comparison of several arrangements, with Interest form back above the description. Compared three built/rendered desktop variants: A, full calendar and title-row action; B, shorter calendar and top-aligned title/action; C, action in the top corner beside metadata. Chose B after review: the three-line calendar created uneven header heights, while the corner action enlarged the metadata row.

Final refinement keeps the full year quietly beside Cambridge, MA, leaving month/day in the calendar; the full date remains available in the time element. Title and action share the same measured top coordinate on desktop. At phone sizes the action aligns with the title's left edge and remains above the full-width description. Use the same 10% accent fill as news cards and a 0.75px full outline mixed from existing accent/paper tokens at 60% accent. No shadows, left bar or new badge style. News cards, approved description, single event date, form destination, three-item feed and closing links retained.

Validation: source diagnostics (46 files, zero findings), production builds, desktop geometry, 390px/320px no-overflow and action-order checks, dark/light visual checks restored to light. Comparison proofs: original workspace docs/event-announcements-2026-11-02/nov3-option-a.jpg, nov3-option-b.jpg, nov3-option-c.jpg; chosen preview nov3-final-preview.jpg. Only the existing event component changes application behavior; source PR 73/publication PR 72 remain the review route. Not published.


### November 3 — restore the year to the calendar (preview)

Rachel requested 2026 beneath Dec 4 rather than beside the location. Restored the calendar year and made the title/location column stretch to the calendar height, distributing space between the two text lines without fixed heights. The title and Interest form stay top aligned; Cambridge aligns with the bottom of the calendar on desktop. On narrow screens the title can wrap naturally and the action remains above the description.

Validation: production build passed; desktop measurements confirmed matching calendar/text top and bottom coordinates and title/action top coordinates. Visual desktop/390px review passed; no horizontal overflow at 390px or 320px. Proof: original workspace docs/event-announcements-2026-11-02/nov3-full-date-preview.jpg. Extends source PR 73/publication PR 72; preview only.


### November 3 — tighten the event title/location grouping (preview)

Rachel found the stretched title/location spacing awkward and requested the green event heading again. Replaced distributed spacing with a natural 8px gap, increased the title from 18px to 20px, and restored the event metadata to the shared accent color. Calendar/year and title-row action retained.

Validation: production build passed. Desktop title stays on one line with the action at the same top coordinate; phone title wraps naturally. Visual 390px review and 390px/320px overflow checks passed. Proof: original workspace docs/event-announcements-2026-11-02/nov3-title-spacing-preview.jpg. Source PR 73/publication PR 72 remain unmerged. Separately, Events migration PR 74 is open against the source preview branch; this refinement does not modify its files.


### November 3 — compact responsive event header (preview)

Rachel requested bold event metadata and removal of the empty area beneath the calendar on smaller screens. At 600px and below the title spans the right side, with Cambridge and Interest form sharing the next row. The calendar spans those two rows, placing its month at the title top and year at the action bottom; its day increases modestly to 40px. This follows Rachel's proposed action position beside the location and accommodates natural two-line titles on phones. The desktop title/action row remains unchanged. Event metadata is now bold (700) accent green.

Validation: Astro diagnostics passed with zero findings; production build passed. At 480px and 320px, measured calendar/title top and calendar/button bottom coordinates match exactly. Cambridge remains on one line at 320px and the button retains a 40px target. Desktop title/action alignment retained. Visual review at desktop, 480px, 390px and 320px; no overflow at measured widths. Proofs: original workspace docs/event-announcements-2026-11-02/nov3-responsive-390.jpg, nov3-responsive-320.jpg and nov3-responsive-desktop.jpg. Existing PRs 73/72 updated, not published; Events migration PR 74 remains separate.


### November 3 — keep Interest form anchored beside the title (preview)

Rachel rejected the location/action-row version. Restored the action to the far-right column at the title's top at every width, with natural title wrapping between intact words. Removed the stretched mobile calendar and lower action row. At smaller widths the button has slightly tighter padding/type; below 380px the title is 18px and the decorative arrow is omitted so the complete label and title remain side by side. Bold green metadata and the date/year remain.

Validation: Astro diagnostics passed with zero findings and production build passed. At 320, 360, 381, 390, 480, 600, 601 and 1280px, action/title top coordinates matched and no horizontal overflow occurred. Title words stay clear of the button, including a measured 7px gap at 320px. Desktop, 480px and 320px screenshots inspected; proofs in original workspace docs/event-announcements-2026-11-02/nov3-anchored-480.jpg, nov3-anchored-390.jpg and nov3-anchored-320.jpg. Existing PRs 73/72 updated; preview only.


### November 3 — optical header alignment, without changing date spacing (preview)

Rachel rejected matching line-box tops and prohibited spreading the date to force a match. Keep the calendar typography and natural 62.55px height unchanged. Center it on the compact title/location text group independently of the action height. Trim title/location font leading to visible cap/baseline edges, keep a 10px text gap, and use a slightly larger 22px desktop title with 12px location. Phone titles remain 20px/18px. The button starts at the title's visible cap edge and stays at the right; intact title words still wrap naturally. A font-leading offset supports browsers without text-box trimming.

The shared card affects Home and Events, preserving the Events publication and stable title link brought in from the other chat. Production remains 14a20ea (PR 72); this further refinement is a new unpublished preview.

Validation: Astro diagnostics passed (47 files, zero errors/warnings/hints); production build passed. Calendar height remained 62.55px across measured widths; date/text center coordinates agree within 0.004px and title/action top coordinates agree. Checked 320, 360, 381, 390, 480, 481, 600, 601 and 1280px with no overflow, plus the shared Events card on phone. Inspected actual desktop and phone screenshots, not just element boxes. Proofs: original workspace docs/event-announcements-2026-11-02/nov3-optical-desktop.jpg and nov3-optical-390.jpg. Generated publication diff contains only index.html and events/index.html.


### November 3 — matching metadata and small narrow-screen refinements (preview)

Rachel requested identical metadata formatting apart from event color/weight, plus tiny phone-only changes. Event metadata now uses announcement-meta and its same 7.5px separator gaps, 3px wrapping gap, 11.25px type and 1.65 line height; bold accent green is retained. Below 480px, increase the date number from 32px to 34px, add 1px above/below it, and increase the title/location gap from 10px to 13px. A 2px optical location offset aligns Cambridge's visible bottom with the year. Full-width date/type/text spacing remains unchanged.

Validation: an isolated committed-source snapshot plus only WorkshopCallout.astro passed Astro diagnostics (47 files, zero findings) and build, excluding concurrent Research/Disclosure/Home/Search drafts. Checked Home at 320, 390, 480, 481 and 1280px and Events at 390px; no overflow and title/action alignment retained. Metadata computed size/line height/gaps match news. Full-width date remains 32px with no margins and 10px title/location gap. Pixel analysis of the 390px screenshot found both location and year ending at the same row (180). Proof: original workspace docs/event-announcements-2026-11-02/nov3-small-refinements-390.jpg. Continues source PR 76/publication PR 75, still preview only; generated changes limited to Home and Events HTML.


### November 3 — align the location baseline, not its descender (preview)

Rachel clarified that Cambridge's baseline must align with 2026, with the g below it. Changed only the narrow-screen location offset from -2px to +1px. All other typography, spacing and layout remain unchanged. Isolated production build passed; 390px screenshot analysis confirms the capital MA and year share bottom row 180, while the location descender reaches row 183. No overflow at 320px. Proof: original workspace docs/event-announcements-2026-11-02/nov3-baseline-correction-390.jpg. Source PR 76/publication PR 75 remain unpublished.


## November 3 — approved working-group disclosure release prepared

Rachel approved the corner-aligned spinning plus-to-dots control and responsive fixes, then authorized publication with a slightly finer 1.1px stroke and slightly faster 370ms transition. The plus and four-dot square both occupy 14px. Details hover works at all fine-pointer viewport widths; keyboard focus and native disclosure behavior are retained. Natural 6px title/leader spacing replaces tallest-title synchronization; the two-column layout becomes one at 600px. Reduced-motion styling removes animation.

Isolated source begins at continuing source `dbb92d890caaf3e49e085e93ade4456965e28ea4`; publication begins at production `14a20ea5128a38df0f20c59c4cb28ae4d4eb95c9`. Only Disclosure.astro and research.astro application files are included, excluding concurrent homepage/Search copy and event-card drafts (PRs 75/76). Generated changes affect Research and add scoped shared-component markup/style to About and People without changing their visible text or disclosure variants. All generated HTML text was compared with production; domain files, legacy assets and independent endpoints are retained.

Validation: isolated npm run check passed (47 files, zero errors/warnings/hints); npm run build and git diff --check passed. The prior responsive review covered nine pages at twelve widths (108 states), plus final card checks at fourteen widths including 599/600/601/602px, compact spacing, no overflow, control/text clearance, actual narrow mouse hover and keyboard expansion without card collisions. The isolated publication was inspected at 320/600/601/1280px on Research/About/People: no overflow, 11 compact controls on Research, none on About/People, final 370ms timing and 1.1px CSS stroke. New source/publication PRs, deployment and live verification will be recorded after release.

A follow-up inventory identified Research-area cards, FAQ rows, paper metadata, People publication expanders and Events details as future standardization contexts. Navigation contents controls remain semantically distinct.


## November 3 — working-group disclosure controls published and live verified

Rachel approved publication after one final refinement: 1.1px stroke (from 1.25px) and 370ms transition (from 390ms). The 14px plus/matching four-dot square, corner placement, all-width mouse-hover details hint, native keyboard disclosure behavior, compact 6px spacing and 600px single-column transition are included.

Source [PR 77](https://github.com/resi-org/resi-org.github.io/pull/77), application commit `4ade9f56f069ee6a8578bed08dc8be02d1135451`, merged into continuing source at `fe575183b26e472c4337f3e0fafd8ff1911c384a`. Separate generated publication [PR 78](https://github.com/resi-org/resi-org.github.io/pull/78), commit `971dd854d1254ad30a8adaf0eb5cc10b788e00b8`, merged into main at `a791347a69114a65a7ad876c5ffe37aa5f7cfb2c`. Pages run `41680296354` succeeded. Source was not merged into production main.

Release built from isolated continuing source and current main, excluding event-card PRs 75/76 and concurrent HomePage/Search copy drafts. Generated files changed Research, About and People HTML plus one new Research CSS asset; About/People receive scoped supporting markup/style without changing text or their disclosure variants. All generated HTML visible text matched the prior production output. CNAME, .nojekyll, legacy assets and independent endpoints were retained. Existing unpublished publication checkout and active preview were preserved.

Verification: isolated Astro check (47 files, zero findings), build and diff checks passed. Isolated Research/About/People checked at 320/600/601/1280px with no overflow. After successful deployment, the actual live Research page rendered all 11 compact controls with 370ms timing and 1.1px CSS stroke; mouse open/close and details hover passed, including 320px. Live 320/600/601px checks confirmed no overflow, 6px title/leader gaps and the correct one-/two-column transition. Keyboard Enter/Space expansion worked at 601px. Live About/People retained their existing variants with no overflow. Proofs: this design chat's visualization directory, card-disclosure-live.png and card-disclosure-live-320.png. No form was submitted.

Standardization inventory: active expanders are 6 About FAQs, 16 Research paper details, 21 People selected-publication lists and 7 Events seminar details, besides the 11 now-published working-group controls. Research-area content currently renders fully expanded; homepage area cards are links. The alternate ResearchAreas disclosure code is unused and is not an active rollout target. Proposed next preview: About FAQ rows to establish the non-card variant, preserving FAQ permalinks; then paper/Events/People contexts. Same indicator/animation, with card-corner versus row-aligned placement. Existing visible titles/labels and navigation meanings stay intact. The broader rollout is not part of this publication.


### November 3 — final desktop baseline and publication approval

Rachel approved publishing the event-card refinements after aligning Cambridge's baseline with the Interest form button's bottom edge on the full-width card. The title/location gap now scales from 10px to 16.5px with the card's available width; phone overrides and year/location baseline alignment remain unchanged. Desktop computed baseline/button-bottom difference is 0.022px. Checks at 320, 390, 480, 481, 600, 610, 620, 640 and 1280px retain title/action top alignment and have no overflow. Source diagnostics/build passed in an isolated snapshot of current continuing source fe57518 plus this component, preserving the published disclosure changes and excluding unrelated working drafts. Desktop proof: original workspace docs/event-announcements-2026-11-02/nov3-final-desktop.jpg. Publication approval covers the shared Home/Events card and the preceding reviewed refinements in PRs 76/75. Deployment/live verification to follow.


## November 3 — approved homepage introduction publication

Rachel requested and approved publication of the homepage sentence: “RESI is an independent nonprofit research institute based in Cambridge, Massachusetts, where we are building the scientific foundations for making superintelligence safe by design.” Preserved bold safe by design, added the grammatically appropriate comma before where at her request, and synchronized the manual Home Search excerpt. This is scoped first-person wording, not a global pronoun rule.

Built from continuing source dbebb4f with only HomePage.astro/search.astro application edits. Astro check passed (47 files, zero findings); production build passed with the existing empty partners notice. Generated publication based on main a791347 changes only index.html and search/index.html. Other pages, event-card previews, current disclosure design, domain files and independent endpoints are preserved. Earlier local desktop/390px rendering was reviewed. Publication/deployment and fresh live verification will be recorded separately after completion.

Publication preparation also incorporated the approved homepage introduction/Search publication (PRs 80/81) that landed concurrently; those contents are preserved.


### November 3 — event-card release deployed and live verified

Rachel explicitly approved publication after the final full-width baseline adjustment. Publication PR 75 merged at eff55bc561b8801c440efdcf43053a037aae6bca (reviewed head f299444cb66dcf4cdbf1b8235aab97a4b0b0cc6a); Pages run 41681598151 succeeded. Only Home and Events HTML changed relative to main, preserving the concurrent introduction/Search and disclosure publications.

Live Home and Events checked on desktop and at 390px through release-tagged URLs to avoid cached prior HTML. Desktop location baseline/button bottom agree within 0.022px on both pages; title/action tops agree. Phone retains its approved 34px day, 13px gap and location/year baseline correction, with no overflow. Form and Events destinations retained. The ordinary homepage URL still returned a cached prior version during initial verification; the deliverable browser tab uses ?release=eff55bc. Live proofs: original workspace docs/event-announcements-2026-11-02/nov3-live-final-desktop.jpg and nov3-live-final-phone.jpg. Source PR 76 carries the final implementation and these records into continuing source.



## November 3 — homepage introduction live verified

Rachel explicitly requested publication. Source PR 80 merged at `216654d6c5ee2f276751104ddbc57f45e9a05181`; publication PR 81 merged at `43cf7d5c5a2ed927e909ba54500ad60958812ef0` from reviewed generated head `241a5daec615b4f9976992059fb80a1c73827a2e`. Pages run [41681348362](https://github.com/resi-org/resi-org.github.io/actions/runs/41681348362) succeeded. Published only index.html and search/index.html from current source dbebb4f, preserving the current disclosure release, pending event-card refinements, domain files and independent endpoints.

Live browser checks confirmed the exact sentence with “Cambridge, Massachusetts, where we are building,” bold safe by design, no horizontal overflow at desktop/390px, and a Cambridge Search query returning the synchronized Home excerpt. Earlier local desktop/390px visual review passed; Astro check (47 files, zero findings), build and git diff --check passed. Live desktop proof: /Users/rachelsipser/.codex/visualizations/2026/11/03/01a1a236-adf2-7eb2-8d6f-129e61eb1ad3/home-intro-live.png. Other editorial findings and global first/third-person usage remain open; this release is scoped to the approved introduction.


### November 3 — keep announcement metadata on one line (preview)

Rachel asked to prevent metadata wrapping, preferring to drop Save the date if shrinking would hurt readability. Keep the existing 11.25px metadata size. Event metadata is nowrap and uses the card's existing inline-size container to hide only Save the date below 315px of content width. It remains Events · Inaugural community workshop on the narrowest phones and restores the full wording once space permits. Current News labels already fit one line at 320px, so their type and markup are unchanged. No other card layout changes.

Validation: isolated Astro diagnostics (47 files, zero findings) and build passed. Home checked at 320, 360, 369, 370, 375, 390 and 1280px: all three metadata rows are exactly one line, with no horizontal overflow and unchanged font size. The full label returns at 370px viewport in the present layout. Shared component also serves Events. Proof: original workspace docs/event-announcements-2026-11-02/nov3-one-line-label-320.jpg. Preview only; previous event-card release remains live.


### November 3 — tighten the date at the narrowest breakpoint (preview)

Rachel requested removing the extra space around 4 so DEC meets the title's lowercase-height line. At 380px and below only, keep the day at 34px but set line-height to 1 and remove its 1px block margins. Move DEC down optically by 2px. All wider rules and the location/year baseline correction remain unchanged.

Validation: build passed. A 320px screenshot pixel check found DEC and the title's lowercase a both starting at row 123, with the capital MA and year both ending at row 175. Checked 320/360/380/381/390/1280px with no overflow; 381px and up retain prior date metrics. Proof: original workspace docs/event-announcements-2026-11-02/nov3-tight-date-320.jpg. The extra scoped rules now emit a separate WorkshopCallout stylesheet; preview/publication files include that asset. Extends the pending one-line-label preview; not published.


### November 3 — midpoint of narrowest date-spacing trials (preview)

Rachel requested splitting the difference. At ≤380px, use line-height 1.04, 0.5px day margins and a 1px DEC offset: exact midpoints between the original and tightest trial. Day size and every wider rule remain unchanged. Build passed; 320px visual/no-overflow review passed and 390px retains its previous metrics. Proof: original workspace docs/event-announcements-2026-11-02/nov3-midpoint-date-320.jpg. Updates pending PRs 84/83; not published.


### November 3 — compact metadata and midpoint spacing published

Rachel explicitly requested publication. Publication PR 83 merged at 927570308c5855fb4f669b31dc5f442cbdc7c5e5 from reviewed head 51d3e537ee7ba4919335f664c18762431898360d. Pages run 41695253008 succeeded. Home/Events HTML and the emitted shared card stylesheet match the reviewed build.

Live Home and Events at 320px show one-line metadata, Save the date hidden, 35.36px day line height, 0.5px margins and 1px month offset. At 390px the full label returns and wider date metrics are retained. Desktop location baseline/button edge difference remains 0.022px. No horizontal overflow; fonts loaded and the stylesheet renders correctly. Live proof: original workspace docs/event-announcements-2026-11-02/nov3-live-midpoint-320.jpg. Fresh release-tagged URLs used for verification and the delivered browser tab. Source PR 84 supplies implementation/records.


### November 3 — establish permanent announcement treatments

Rachel approved three reusable treatments: only upcoming events receive the emphasized workshop style; past events retain the calendar/aligned header but use ordinary news-card styling and no promotional button; News retains its current design. Added date-based event timing, a past visual variant, and an explicit pastAnnouncement content object for case-by-case Home eligibility and retrospective copy/date. Home filters eligibility before taking its three items. Events retains past records in its archive; past invitations/actions are suppressed. Shared rules are in the design guide, content instructions and AGENTS.

Validation: seven meaningful policy tests passed (including Cambridge winter/summer midnight boundaries, multi-day end and past opt-in); diagnostics passed with zero findings; production build passed. Local upcoming/past/news fixture checked at desktop/320px and in light/dark mode: past border/button absent, title and metadata match News, header naturally centered, no overflow. The fixture was removed before the final build. Current Home/Events event markup is byte-identical to production and the News page output is unchanged. Proof: original workspace docs/event-announcements-2026-11-02/nov3-announcement-treatments-desktop.jpg. This is a source configuration change for future builds; production remains the published 9275703 release, with no fabricated event content or current appearance changes.

Source [PR 85](https://github.com/resi-org/resi-org.github.io/pull/85) carries the approved configuration and instructions into the continuing source branch; it does not publish sample cards or change current live content.

## November 3 contributor event routing — configured, reviewed; confirmation requested

Rachel requested persistent defaults so Adam can issue short event/seminar requests without repeating placement/design instructions. Added EVENT-ROUTING.md and root/source guide links. The event schema now requires eventType; shared eligibility distinguishes community/public events from seminar/reading-group/working-group activities, with auto/include/exclude overrides. Series/group promotion records require explicit inclusion (or withdrawal/retrospective opt-in) and a canonical details link, and do not duplicate Community events or Search entries. The existing workshop is explicitly classified community. No card CSS, copy, current seminar/group records or News presentation changed. A short entry-point AGENTS.md on the generated default branch directs fresh contributors to the editable source and repeats the routing precedence.

Verification: twelve policy tests passed; eight temporary fixture/build checks covered routine seminar exclusion, public-event inclusion, explicit seminar promotion/canonical link/no duplication, withdrawal, accidental series insertion rejection, missing canonical link rejection, required classification, and complete fixture removal/output restoration. Astro diagnostics: zero errors/warnings/hints; build passed (existing empty partner-data notice). Current Home/Events HTML matches live after generated scope/stylesheet-hash normalization; News/Search are byte-identical. Component CSS matches its prior source exactly. Temporary fixtures were removed and original Home/Events/News/Search build output restored byte for byte. Configuration is source/repository guidance, not a new public event release; Rachel will confirm the summarized rules.

Routing handoff: [source PR 87](https://github.com/resi-org/resi-org.github.io/pull/87) merged at `304d42ccacaf1332ff53d17077a4f3f1bcd359e9`. [Default-branch instructions PR 86](https://github.com/resi-org/resi-org.github.io/pull/86) merged at `30f9572ce7f41dedc81bccd989a5db2e9628be97`; that main diff contains only AGENTS.md and README.md, preserving all generated site files. Adam can discover the source/rules from a fresh default-branch checkout. Rachel’s confirmation of the summarized configuration remains requested.


## November 3 — homepage support Learn more action, preview

Rachel supplied a marked screenshot requesting the lower homepage support action beside the heading, labeled Learn more with an arrow, using the Interest form button treatment. HomePage.astro now groups the heading and action in one desktop row, with a scoped token-based filled button matching Interest form color, padding, radius, typography and icon size. At up to 525px it stacks below the heading before the explanatory paragraph. Preserved /support, surrounding copy and fiscal-sponsor anchor. No other support/header actions changed.

Isolated branch codex/home-support-learn-more is based on current approved source 58441582ab240778b3d4a1d73f62af69cea1f7e5; production observed at 30f9572ce7f41dedc81bccd989a5db2e9628be97. Reused the clean attached Events worktree to preserve concurrent uncommitted work in the primary folder. Astro check passed (48 files, zero diagnostic errors/warnings/hints); build passed (existing empty partners notice); git diff --check passed. Browser inspected 320, 390, 525, 526, 600 and 1200px: one action, no heading/button overlap and no horizontal overflow. Button style matches Interest form in light/dark, keyboard focus outline is visible, and clicking opens Support. Screenshot saved in this chat's visualization artifacts. Preview only; no production merge or deployment.
