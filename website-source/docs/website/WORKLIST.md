# RESI website current work

Current queue for resi.org. Reconciled November 2, 2026 from Rachel's requests, the earlier November 2 priority list, production records, source files and current GitHub PRs. This is the active queue; earlier draft checklists are historical evidence.

Homepage introduction: live verified November 3 through source PR 80/publication PR 81; corrected comma and matching Home Search excerpt included. Other copy findings remain open.

## Desktop current-page navigation — November 6

Published and live verified: Rachel requested bold current-page text in the full header menu, excluding Home. Follow-up correction: current-page labels have no underline (source PR 125/publication PR 126). One shared desktop-only CSS rule; all six main routes and Home checked at 1280px, longest label fits at 915px, and 390px mobile menu opens with unchanged weight and no overflow. Astro check/build passed. Scoped publication preserves current public HTML/content, including the careers rollback, by changing only shared stylesheet references and adding the verified stylesheet. Source PR 122 merged at 5c3c66e; publication PR 123 merged at c826b01. Pages run 42302275646 succeeded; ordinary live checks confirmed all six main labels and Home exclusion.

## Status and priorities

Use Proposed, Decision needed, Drafting, Preview, Ready to publish, Published, and Live verified. Completed, Deferred and Superseded close or park an item. A preview is not live. Include affected pages, factual source and verification as an item progresses. Carry forward existing authorization within its actual scope.

Priority order: hiring/Join us; Anat's working group and scoped group updates; unresolved must-fixes; donor-case improvements; optional polish. If a fact blocks one item, record it and continue useful work on the next authorized priority.

## Active event work

| ID | Status | Work and next step |
| --- | --- | --- |
| E14 | Published and live verified November 8 | Rachel explicitly requested publication after the placement preview. Announcements is restored after Founders/research community and before Key research areas. Exact section relocation only; preserve intro/featured workshop and card design/content/feed. Source PR 127; publication PR 131 merged at 34e02f5, Pages run 42485229857 succeeded. Astro diagnostics/build, exact-section/rest-of-Home comparison and ordinary live desktop/390px mobile checks passed: expected section order, three cards, intact actions, no overflow. Only index.html changed, preserving the recent Join us release and independent endpoints. Desktop/mobile proof saved in docs/event-announcements-2026-11-02/nov8-announcements-restored-live*.jpg in the original workspace. |
| E11 | Superseded placement; earlier release history retained | Initial top-only release: source PR 104/publication PR 105. Rachel then explicitly requested the workshop in BOTH positions. Source application `4d03166`, PR 109; publication PR 110 merged at `3386c21`, Pages run 42047395072 succeeded. Ordinary live desktop/320px checked: unchanged card at top AND first in Announcements, three feed entries retained, unique heading IDs, no horizontal overflow. This supersedes the earlier no-duplicate placement instruction. Other previews preserved. |
| E12 | Published and live verified November 5 | Rachel explicitly approved the reviewed c98f027 layout: full-width H1 above balanced 600px introduction/event columns, Save the date inside the card without Events, three actions below including See all events and seminars → /events. Ordinary Announcements workshop copy and three-slot feed retained. Source application a8245fe / PR 118; publication PR 119 at 6a42686, Pages run 42126278029 succeeded. Live 1280px equal prose/card bottoms, aligned buttons, and 320px heading → event → introduction order verified; no overflow. Only Home HTML and two new stylesheets published; People reorder, careers rollback, other pages/endpoints preserved. Release checkout `/private/tmp/resi-home-intro-event-release-nov5`, http://127.0.0.1:4410/. Mobile alternative is separate in E13.  Mobile spacing refined through source PR 120 / publication PR 121 (`2f9c948`), successful Pages run 42129287517; live 8px heading/label gap and standard body leading verified. |
| E13 | Current mobile placement confirmed November 5; alternate retained as preview | Rachel says mobile looks good as currently published: event directly below H1. The spacing correction is published in PR 121 (E12). Earlier after-definition option remains unpublished at http://127.0.0.1:4408/ on codex/home-mobile-after-definition-nov5. Historical comparison http://127.0.0.1:4412/ now points option 1 to the corrected 4413 release server. Do not publish the alternative without a new request. |
| E1 | Live verified November 2 | Rachel explicitly approved the reviewed outlined workshop card in Review RESI website project guide. Publication PR 71 merged at 20c5a45; Pages run 41514555482 succeeded. Live desktop/390px phone review confirmed the full outline, invitation, single date, Cambridge, Interest form destination and no horizontal overflow. Source PR 70 carries source and records into the continuing source branch. Events migration remains deferred. |
| E2 | Live verified November 2 | Placement: introduction → Announcements (workshop first, original other cards retained) → cryptography precedent → remaining sections. Published by PR 69, main 199a9eb. Do not requeue as unpublished. |
| E3 | Live verified November 3 | Rachel approved publication after replacing the page heading and subtitle with “Community events, seminars, and workshops on the foundations of AI safety.” Publication PR 72 merged at 14a20ea. /events, site-wide navigation/links/Search/sitemap, shared workshop card, seminar listings and legacy query/hash forwarding are included. Source PR 74 carries the Events changes through source PR 73 into the continuing source branch. Additional cross-links remain proposals in E6; the automatic missing-counterpart check remains deferred. |
| E5 | Published and live verified November 3 | Production latest-three News/Events feed and shared card published in PR 72 at 14a20ea. New optical alignment preview: preserve natural date spacing; center the date on the compact title/location text independently of button height. Trim font leading so the right-anchored button meets the visible title top. Use 22px desktop title, 20px/18px phone title, 12px location and 10px gap. Keep bold green metadata, full hairline, description, existing news cards and Events connections. Metadata now matches news separators/type/line height except bold green. Narrow screens only: 34px day with 1px margins, 13px title/location gap and location baseline aligned with the year baseline, with descenders below. Full-width sizes and text spacing retained. Desktop/mobile Home/Events reviewed; source PR 76/publication PR 75. Rachel approved publication after the full-width location baseline was aligned to the button bottom, with fluid narrowing and the approved phone layout retained. Publication PR 75 merged at eff55bc; Pages run 41681598151 succeeded. Live Home/Events desktop and 390px checks passed using release-tagged URLs while ordinary homepage cache propagates. Source PR 76 carries source/records. |
| E7 | Published and live verified November 3 | Keep event metadata on one line at its existing readable size: hide only Save the date below 315px of card content width. News metadata already fits through 320px unchanged. Shared Home/Events component. At the narrowest (≤380px) size, use the requested midpoint of date-spacing trials: day leading 1.04, margins 0.5px and DEC offset 1px, preserving the year/location baseline. Diagnostics/build and responsive checks passed. Publication PR 83 merged at 9275703; Pages run 41695253008 succeeded. Live Home/Events phone and desktop checks passed. Source PR 84 carries source/records. |
| E8 | Completed configuration November 3 | Approved shared treatments: upcoming alone uses the emphasized workshop card; past uses news styling with calendar/aligned header and no button; News is unchanged. Past Home promotion requires an explicit pastAnnouncement object, only on Rachel’s request. Date-based classification runs at build time. Policy tests, diagnostics/build and desktop/mobile/dark checks passed; current event markup and News output are unchanged. Source PR 85 (codex/announcement-treatment-policy-nov3) carries these rules for future builds; no new public event content added. |
| E9 | Configured and verified November 3; confirmation requested | Shared contribution routing for Adam/Rachel: community/public events eligible for Home; seminar/reading-group/working-group activity excluded by default even when public; explicit homepage overrides link to canonical entries. Ambiguous event type/audience requires clarification. Required eventType, auto/include/exclude policy, canonical promotion links and schema guards implemented. Twelve policy tests, eight build-routing/restoration checks and Astro diagnostics passed; fixtures removed. Current wording/style unchanged. Source PR 87 merged at 304d42c; default-branch entry-point PR 86 merged at 30f9572 (only AGENTS.md/README.md changed on main). No generated site content changed. See EVENT-ROUTING.md. |
| E10 | Incorporated and live verified November 4 | Shared Home selector auto-includes valid News, honors exclude/review holds, prioritizes eligible upcoming events, then selects newest News/approved retrospectives within three slots; stable IDs break date ties. Existing event eligibility preserved. Acceptance preview: December 4 workshop → November 2 Anthropic → September 18 LessWrong; Globe and all older News remain archived. Required source attribution is separate from quotation mode. Eighteen policy tests, Astro diagnostics/build passed; final integration/layout evidence in CHANGELOG. See News guidance; contributors inherit after updating to source PR 99, merged at `523de38`. Publication PR 100 merged at `a6b8c0f`; Pages run 41897008167 succeeded and ordinary live Home/News/Search verified. |
| E6 | Recommendations recorded November 3 | New cross-links proposed after the site-wide review: (1) Home → Research community: See community events; (2) People → Join us: Explore upcoming events, near the participation/mail-list routes; (3) News: a short Looking for talks and workshops? link to Events. About already links in its opening paragraph and its policy card; Research already links beside working groups; Support already links under Why RESI. Those existing seminar-specific links now target /events#upcoming-seminars. Optional later: relocate the About card link closer to community/participation; avoid extra donor-page CTAs or a duplicate full footer menu. These new placements are proposals, not implemented. |
| E4 | Proposed | Further description, other-page notices and later program/venue updates. Only use confirmed audience, venue, hours, speakers and attendance facts. Preserve the existing interest form and access settings. |

Confirmed workshop facts: Friday, December 4, 2026; Cambridge, MA; Safe-by-Design Superintelligence. Existing [interest form](https://forms.gle/bepnqhw2Q8eGK2bB8) collects interest and optional talk/poster information; it does not confirm a place. Publication records: [source PR 70](https://github.com/resi-org/resi-org.github.io/pull/70), [publication PR 71](https://github.com/resi-org/resi-org.github.io/pull/71), [live placement PR 69](https://github.com/resi-org/resi-org.github.io/pull/69).

## Hiring and participation

Sources: Rachel's November 2 request, supplied hiring discussion and Emily's additions, reconciled with current People. Proposals do not establish open positions.

| ID | Status | Work and dependencies |
| --- | --- | --- |
| H1 | Published and live verified November 8 | Rachel explicitly approved publishing the reviewed section. Source PR 128 / c976a188; publication PR 129 / f2944a80; Pages run 42484929951 succeeded. Live desktop/390px, inline hiring update, natural Reading Group heading spacing, four fellowship links and CBAI search verified. Only People/Search HTML changed; later People order, navigation and unrelated previews preserved. Jobs remains next; no Jobs/application link added. Mobile-order follow-up: source PR 132, production PR 133 / 41ca6d8a, successful Pages run 42486937680; live stacked Reading Group before Fellowships, desktop positions retained. |
| H2 | Role/process facts still needed | Research hiring is anticipated over the coming year; Rachel confirmed November 5 that application details are still coming soon. Public status is deliberately role-neutral because the actual role will be listed above it. No application endpoint, review cadence, deadline or start-date promise established. Complete duties, qualifications, location/terms, application materials and reference policy before the Jobs page. Internship approval was previously pending. |
| H3 | Platform clarified; process decision needed | AcademicJobsOnline full service provides hosted ads, applications/references and committee review; free eDelivery delivers dossiers including letters without hosted ads or an online review workspace. [Comparison](references/careers-fellowships-2026-11-03/follow-up.md#academicjobsonline-full-platform-versus-edelivery). No RESI plan/account, letter count/timing or authorized recipient selected; no account created or reference requests sent. |
| H4 | Published and live verified November 8 | Keep **Research fellowships across the AI safety network** and the chosen introduction. Compact linked entries: CBAI — Mentored AI safety research; MATS — AI alignment research; Pivotal — Funded, full-time; London; SPAR — Remote, part-time (unpaid). Four provider URLs retained; Search keeps full program names for discovery. No guaranteed RESI placement or Apply now claim. [Evidence](references/careers-fellowships-2026-11-03/follow-up.md). |

## Working groups and papers

| ID | Status | Work and dependencies |
| --- | --- | --- |
| W1 | Facts needed; high priority | Add Anat's group from its current confirmed title, description, status and appropriate participation route. Update Research, her People links and Search together. Current materials do not supply final group facts. |
| W2 | Proposed scoped updates | Clarify group participation and intake from individual leads' actual preferences. Do not assume all groups are open or use one attendance policy. Reassess the featured full-width card when the roster changes, if chosen. |
| R1 | Review pending | Full paper collection/shortlist and credible area/group mappings. Rachel will review the existing [paper-review spreadsheet](https://docs.google.com/spreadsheets/d/15-4qm94pZ6n3VLrvTtPRsqNYhosgSnVaMJrmuIHFjF4/edit). Inspect its current contents through the connected tools before treating it as approved. Prefer 2018 onward, with older exceptions only when exceptionally important; verify titles, authors, venue/status, claims and limitations. |

## Outstanding editorial must-fixes

Source: Landau's October 21 list as reconciled on November 2. Older suggestions do not override subsequent explicit approvals.

| ID | Status | Action |
| --- | --- | --- |
| M1 | Decision needed | Establish institutional first/third-person usage; avoid mechanical pronoun replacement. |
| M2 | Open | Draft a grammatical About headline centered on a community of experts instead of expertise. |
| M3 | Open | Reframe no single discipline sees the whole picture positively while preserving interdisciplinary meaning. |
| M5 | Partly implemented | About contents label changed to What success looks like; actual H2 still uses will. Reconcile heading and Search. |
| M6 | Open | Explain independence from commercial incentives accurately in the About FAQ, consistent with Support and collaboration with labs. |
| M7 | Scientific decision needed | Explain threat/adversary assumptions in accessible language while retaining the intended scientific meaning. |
| M9 | Verify | Research source already has the outputs/areas divider. Check the current visible boundary before adding anything. |
| M11 | Open | Improve the awkward People intro combining disciplines and visitor-program wording. |

Closed audit items: M4 present-tense collaborative introduction addressed; M8 closing outputs paragraph structurally separate; M10 older request to remove the areas introduction superseded by Rachel's later wording. Previously checked donation labels, intro paragraph order, source attributions and divider work remain completed. M9 is a visual verification, not another outstanding copy rewrite.

## Homepage support action

- Live verified November 3: Rachel requested moving the lower homepage Support RESI button to the right of its heading, relabeling it Learn more with the existing arrow, and matching the filled dark green Interest form button. Implemented in isolated branch `codex/home-support-learn-more`, in the attached `events-page-rename` worktree, based on approved source `5844158`. On screens up to 525px the action stacks immediately below the heading; /support destination and funding copy remain. Preview: http://127.0.0.1:4391/#support. Source check/build, six-width overflow/overlap checks, light/dark style comparison, keyboard focus and link navigation passed. Rachel approved publication in this chat. Publication PR 90 merged at 6eae113; Pages run 41706698475 succeeded; live desktop/phone placement, matching filled style, label and navigation to /support/ were verified. Source PR 89 carries the focused change. Shared-folder event-policy/disclosure/Home drafts remain untouched.

## Support improvements

Lower priority; based on Shafi's donor slides, not blanket approval of new public claims.

- S1 Proposed: explain how foundational work helps along the way through useful definitions, impossibility results and mechanisms; complement the current limited-window argument without repeating it.
- S2 Proposed: make people/compute impact concrete using selected existing work and clear research outputs, linking to foundational papers rather than duplicating technical summaries.
- S3 Confirmation needed where relevant: IP/open-science policy, regional donor claims, funder acknowledgments and any hiring/budget commitments. Preserve current people-first funding, independence and reliable-compute case. Prior work belongs to associated researchers; do not turn aspirations into institute achievements.

## Optional editorial and design work

| IDs | Deferred proposals |
| --- | --- |
| C1–C3, C5 | Heading capitalization, possible ampersands and group-title capitalization. No automatic global rewrite. |
| C4 | Reconsider bold safe-by-design styling or a dedicated explainer if selected. |
| C8 | Clearer About participation-FAQ invitation; naturally adjacent to hiring work. |
| C9 | Reconsider output-row separators only if deliberately revisiting the approved layout. |
| C11 | Useful People contact/LinkedIn actions with confirmed public details. |
| N1–N5 | Targeted future-tense review, homepage graphical separation/video, institutionally agreed human-flourishing explanation, wider Research H1. Preserve genuine prospective aims and approved copy. |
| N7 | Assess remaining full Research-area browsing. Home already highlights four, rather than eleven stacked cards. |
| N8–N9 | Featured first group hierarchy/balanced grid and Modular architectures example wording. Preserve scientific meaning. |
| N10–N12 | Optional paper-topic filters, consistent summary/scope labels, descriptions of actual affiliated-group relationships. Compact paper entries are already published. |
| N13 | Optional calendar/Luma listing for talks. No service/account setup is authorized by this queue alone. |

Closed optional items: C6 About policy-card layout, C7 intentional FAQ permalinks, C10 impossibility area intentionally unassigned to a group, N6 independent examination/testing wording, and N10's compact-publication presentation. Do not reopen settled portrait crops, native display size, launch/domain migration, or old navigation trials merely because old notes mention them.

## Cross-page maintenance and open policy

- O1 Open: synchronize manual Search excerpts after content edits; verify old query reports against current behavior.
- O2 Proposed: clarify announcement-only versus weekly-talk signup choices if confusing, preserving their distinct functions.
- O3/O4 Decision needed: Support technical/policy impact and Cambridge/Northeast Corridor donor claims. Use confirmed institutional wording.
- O5 Decision needed: visitor inclusion/description policy and replacement roster. Current flag stays false. Actual-purpose descriptions have close precedents; a prominence-only editorial selection rule remains RESI's choice. Refer to [research findings](references/README.md). Do not fabricate a purpose to justify listing someone.
- O6 Standing completion practice: targeted links/anchors/forms, desktop/mobile, keyboard, metadata/Search and live verification after publishing.
- P1 Proposed: schedule an appropriately scoped recurring content/link review only if requested; no automation exists.
- P2 Deferred: relocate the nested linked worktree into a cleaner standalone path with Git metadata and project paths preserved. Avoid disrupting the active preview.

## Project organization and chat continuity

November 2 setup: current entry instructions, five shared records, archived old READMEs and portable public research references are saved. The dedicated project is pinned. The two recent website chats remain outside it: the app requires extra access to their older folders to move them, and the new project currently keeps its narrower production-folder scope. No chats were archived or deleted. The priority chat was renamed Website planning and priorities.

Historical chat references, readable with the app's read-thread tool if their original discussions are needed:

- Website planning and priorities: `01a19d13-1160-77e0-8aeb-a10805cff7b6`.
- Update RESI event banners: `01a19d21-ccad-7770-9bb9-7ed7e97807c2`.
- Create RESI draft c.2: `01a11db4-8de4-7f53-ba22-c9c143c7bf2e`, retained in the original RESI project.

New work should start inside RESI Website - resi.org, with AGENTS.md and these records providing the starting context. A chat's old working directory does not automatically become the new project's primary directory.

Review RESI website project guide (`01a19dc8-d5f6-7cb3-8601-d88b55b5e0db`) was moved into RESI Website - resi.org on November 2; the app confirmed project membership. Its working folder was already correct.

The documents are local source-management records. Include them in ordinary source history; they are not generated public pages. Any future handoff must use the current project records rather than only a chat transcript.

## Parking lot

Add new tangents here with the originating request, affected pages, status and next useful action. Move them into the ordered queue when prioritized. Record newly completed work in CHANGELOG and close its item here.


## Master design — disclosure controls

- D4 Live verified November 3: Rachel approved the working-group card control and responsive fixes, then authorized the final 1.1px stroke/370ms timing and publication. Source PR 77 merged at fe57518; generated publication PR 78 merged at a791347; Pages run 41680296354 succeeded. Live pointer/keyboard, 320px hover, 320/600/601px spacing/breakpoint and related About/People checks passed. Same 14px plus/dot footprint, corner placement, natural 6px title/leader gap and reduced-motion rule retained. Other chats’ event-card and Home/Search drafts excluded.
- D5 Next design discussion, refined November 4: design the non-card plus variant for About FAQ answers and explanatory details/scope of individual foundational papers on Research. People’s selected-publication lists retain their existing small caret/triangle, including inside founder cards; the earlier proposal to convert them is superseded. Preserve the published working-group card control. Events seminar abstracts/biographies are another non-card context to review later. Navigation menus remain separate. No new non-card styling or rollout implemented.
- Coordination: RESI — Master website design (`01a1a1de-5ea7-7c53-b2ee-bc43d87896ae`) holds broad visual decisions; consult focused chats and preserve overlapping work. The separate event-card PRs 75/76 remain pending and are not included in D4.


- D6 Published November 3: mobile/touch working-group controls hide details entirely, show four dots while open and restore the plus on close, including retained focus. Fine-pointer desktop hover/minus is unchanged. Source PR 94 merged at e46ffdd; publication PR 95 merged at f687310; Pages run 41709217143 succeeded. Live delivery/desktop checks passed; forced touch-style fixtures covered 320/375/430/600/768px, accessible names, open/close and reduced motion. Physical iPhone not controlled; see CHANGELOG for scope. This supersedes D4’s original mobile hint/minus behavior. D5 standardization remains next.


- D7 Browser accessibility audit completed November 3 on live production f687310: all 11 working-group controls have unique names, expose expanded/collapsed button state, reveal body text only while open, and support Enter/Space. An accessibility-interface Expand action worked; open-body links enter the tab order and closed-body links are skipped. A forced touch-style fixture verified all 11 names/states survive display:none on the visual hint. Decorative icons and print duplicates are hidden from the accessibility tree. No application defect found, so no new publication was necessary; PR 95 remains live with successful Pages run 41709217143. This audit used macOS browser accessibility data and keyboard interaction, not a VoiceOver/TalkBack/NVDA session. Preserve that distinction in claims and later handoff.

- D8 Taxonomy approved November 4: explanatory details inside cards use the approved plus/dot control; explanatory details outside cards use a separate plus variant to design next; publication/work/report/paper lists keep the small caret beside their label regardless of container. Classify what opens, not its subject alone; mixed/unclear cases are decided individually. People live check confirmed 21 Selected publications expanders, including 3 founder cards, native disclosure-closed markers and no plus controls in those cards. See DESIGN-AND-EDITORIAL. Documentation decision only.

## Master NEWS

Chat: Master NEWS (`01a1a740-b51f-71f1-9ff4-2968aa71ce27`). Do not create/message other chats without Rachel's authorization. Refresh relevant shared records and accessible master-chat updates before overlapping edits.

| ID | Status | Work and next step |
| --- | --- | --- |
| NEWS1 | Published and live verified November 4 | Rachel supplied exact Home and News descriptions for Anthropic's November 2 report, including the opening commas. Record: `content/updates/2026-11-02-provable-inference.md`. Original source headline retained; shorter Home title “Provable inference for language models.” Miranda Christ's MIT/RESI co-authorship verified in source/report. Research classification; plain paraphrase, not a quotation or institute-owned result. E10 implemented alongside it. Live https://resi.org/news/#update-2026-11-02-provable-inference and https://resi.org/#announcements. Isolated `codex/news-provable-inference-nov4` in `/private/tmp/resi-news-nov4`, based on continuing source `74a9371`; shared dirty checkout left intact. Source PR 99 merged at `523de386286251d263cdd9855a2dab354c290019`; production PR 100 at `a6b8c0f4d0e7de94e58cecc8da8ed00d777a35f9`; Pages run 41897008167 succeeded. Ordinary live URLs, exact descriptions, Home order, archive and Search verified; desktop and 390px live checks passed. |
| NEWS2 | Research complete with access limits; recommendations retained | [Focused comparison](references/news-listings-2026-11-04/report.md) attempts all 37 companion sites and seven institute comparators, screens all 100 registry entries, and distinguishes four wider inclusions. Resolution five linked items; Lightcone organizational site plus five posts, mostly historical. Access limits are explicit. [Authorship follow-up](references/news-listings-2026-11-04/authorship-wording.md) supports co-authored/is a co-author constructions. Later item approval does not approve every broader editorial recommendation. |


## People section order — November 5

Rachel explicitly requested moving Join us above Affiliated groups and publishing the reorder. The section order, On this page links, source ordering comment and metadata sequence are updated in isolated codex/people-section-order-nov5. The expanded careers version remains preview-only. For publication, build the restored live People version from fd03d22 in /private/tmp/resi-people-order-live-build-nov5 with this same reorder, and publish only people/index.html onto current main 7efabab. Do not copy Search or the expanded careers section from continuing-source builds. Existing live sections, text, links and IDs are unchanged; all section token streams compare equal apart from their ordering. Diagnostics passed for both source variants; live-baseline build passed. Browser at 1280/390/320px confirmed order, shortcut order, no overflow and no careers-preview cards. Publication PR 117 merged at 5176391 from head 885a7e5; Pages run 42123997125 succeeded. Ordinary live desktop/390px checks confirmed the order, no overflow, no careers cards and working #affiliated navigation. The exact production-build source is 824cd17 on codex/build-people-order-live-nov5. Source PR 116 preserves the reorder in the continuing source line.
