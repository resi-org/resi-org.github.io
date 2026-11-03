# RESI website current work

Current queue for resi.org. Reconciled November 2, 2026 from Rachel's requests, the earlier November 2 priority list, production records, source files and current GitHub PRs. This is the active queue; earlier draft checklists are historical evidence.

Homepage introduction: live verified November 3 through source PR 80/publication PR 81; corrected comma and matching Home Search excerpt included. Other copy findings remain open.

## Status and priorities

Use Proposed, Decision needed, Drafting, Preview, Ready to publish, Published, and Live verified. Completed, Deferred and Superseded close or park an item. A preview is not live. Include affected pages, factual source and verification as an item progresses. Carry forward existing authorization within its actual scope.

Priority order: hiring/Join us; Anat's working group and scoped group updates; unresolved must-fixes; donor-case improvements; optional polish. If a fact blocks one item, record it and continue useful work on the next authorized priority.

## Active event work

| ID | Status | Work and next step |
| --- | --- | --- |
| E1 | Live verified November 2 | Rachel explicitly approved the reviewed outlined workshop card in Review RESI website project guide. Publication PR 71 merged at 20c5a45; Pages run 41514555482 succeeded. Live desktop/390px phone review confirmed the full outline, invitation, single date, Cambridge, Interest form destination and no horizontal overflow. Source PR 70 carries source and records into the continuing source branch. Events migration remains deferred. |
| E2 | Live verified November 2 | Placement: introduction → Announcements (workshop first, original other cards retained) → cryptography precedent → remaining sections. Published by PR 69, main 199a9eb. Do not requeue as unpublished. |
| E3 | Live verified November 3 | Rachel approved publication after replacing the page heading and subtitle with “Community events, seminars, and workshops on the foundations of AI safety.” Publication PR 72 merged at 14a20ea. /events, site-wide navigation/links/Search/sitemap, shared workshop card, seminar listings and legacy query/hash forwarding are included. Source PR 74 carries the Events changes through source PR 73 into the continuing source branch. Additional cross-links remain proposals in E6; the automatic missing-counterpart check remains deferred. |
| E5 | Published and live verified November 3 | Production latest-three News/Events feed and shared card published in PR 72 at 14a20ea. New optical alignment preview: preserve natural date spacing; center the date on the compact title/location text independently of button height. Trim font leading so the right-anchored button meets the visible title top. Use 22px desktop title, 20px/18px phone title, 12px location and 10px gap. Keep bold green metadata, full hairline, description, existing news cards and Events connections. Metadata now matches news separators/type/line height except bold green. Narrow screens only: 34px day with 1px margins, 13px title/location gap and location baseline aligned with the year baseline, with descenders below. Full-width sizes and text spacing retained. Desktop/mobile Home/Events reviewed; source PR 76/publication PR 75. Rachel approved publication after the full-width location baseline was aligned to the button bottom, with fluid narrowing and the approved phone layout retained. Publication PR 75 merged at eff55bc; Pages run 41681598151 succeeded. Live Home/Events desktop and 390px checks passed using release-tagged URLs while ordinary homepage cache propagates. Source PR 76 carries source/records. |
| E7 | Published and live verified November 3 | Keep event metadata on one line at its existing readable size: hide only Save the date below 315px of card content width. News metadata already fits through 320px unchanged. Shared Home/Events component. At the narrowest (≤380px) size, use the requested midpoint of date-spacing trials: day leading 1.04, margins 0.5px and DEC offset 1px, preserving the year/location baseline. Diagnostics/build and responsive checks passed. Publication PR 83 merged at 9275703; Pages run 41695253008 succeeded. Live Home/Events phone and desktop checks passed. Source PR 84 carries source/records. |
| E8 | Completed configuration November 3 | Approved shared treatments: upcoming alone uses the emphasized workshop card; past uses news styling with calendar/aligned header and no button; News is unchanged. Past Home promotion requires an explicit pastAnnouncement object, only on Rachel’s request. Date-based classification runs at build time. Policy tests, diagnostics/build and desktop/mobile/dark checks passed; current event markup and News output are unchanged. Source PR 85 (codex/announcement-treatment-policy-nov3) carries these rules for future builds; no new public event content added. |
| E9 | Configured and verified November 3; confirmation requested | Shared contribution routing for Adam/Rachel: community/public events eligible for Home; seminar/reading-group/working-group activity excluded by default even when public; explicit homepage overrides link to canonical entries. Ambiguous event type/audience requires clarification. Required eventType, auto/include/exclude policy, canonical promotion links and schema guards implemented. Twelve policy tests, eight build-routing/restoration checks and Astro diagnostics passed; fixtures removed. Current wording/style unchanged. Source PR 87 merged at 304d42c; default-branch entry-point PR 86 merged at 30f9572 (only AGENTS.md/README.md changed on main). No generated site content changed. See EVENT-ROUTING.md. |
| E6 | Recommendations recorded November 3 | New cross-links proposed after the site-wide review: (1) Home → Research community: See community events; (2) People → Join us: Explore upcoming events, near the participation/mail-list routes; (3) News: a short Looking for talks and workshops? link to Events. About already links in its opening paragraph and its policy card; Research already links beside working groups; Support already links under Why RESI. Those existing seminar-specific links now target /events#upcoming-seminars. Optional later: relocate the About card link closer to community/participation; avoid extra donor-page CTAs or a duplicate full footer menu. These new placements are proposals, not implemented. |
| E4 | Proposed | Further description, other-page notices and later program/venue updates. Only use confirmed audience, venue, hours, speakers and attendance facts. Preserve the existing interest form and access settings. |

Confirmed workshop facts: Friday, December 4, 2026; Cambridge, MA; Safe-by-Design Superintelligence. Existing [interest form](https://forms.gle/bepnqhw2Q8eGK2bB8) collects interest and optional talk/poster information; it does not confirm a place. Publication records: [source PR 70](https://github.com/resi-org/resi-org.github.io/pull/70), [publication PR 71](https://github.com/resi-org/resi-org.github.io/pull/71), [live placement PR 69](https://github.com/resi-org/resi-org.github.io/pull/69).

## Hiring and participation

Sources: Rachel's November 2 request, supplied hiring discussion and Emily's additions, reconciled with current People. Proposals do not establish open positions.

| ID | Status | Work and dependencies |
| --- | --- | --- |
| H1 | Drafting needed | Jobs/Opportunities page and discoverable People → Join us path. Cover confirmed internship, contract, employment, visiting/sabbatical and fellowship routes clearly. Choose navigation when reviewing the actual draft. |
| H2 | Facts needed | Approved role titles, responsibilities, qualifications, location/type/duration, application route/materials and review timing. Confirm whether the internship has received its previously pending approval before listing it as open. No invented headcount, salary or deadline. |
| H3 | Decision needed | Recommendation-letter number, timing, confidentiality and collection method. The discussion leans toward letters and convenient automated requests; no platform or count is final. |
| H4 | Verification needed | Clarify the fellowship referred to as CBI and its possible CBAI connection; verify MATS and any actual RESI relationship before implying affiliation. Preserve visitor/sabbatical inquiries for academics at all career levels. Reconcile how Reading Group is described as an entry route with the pending institutional discussion. |

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
- D5 Next design preview: establish the non-card row variant on the 6 About FAQs, preserving independent permalink controls. Then standardize the 16 Research paper-detail controls, 7 Events seminar-detail controls and 21 People publication expanders. Reuse the approved indicator/animation with row-aligned placement and existing visible labels. Working-group cards retain corner placement. Research-area content is already fully expanded and homepage area cards are links; unused alternate disclosure code does not warrant adding a new interaction. On this page remains a navigation menu. No broader rollout was included in PR 78.
- Coordination: RESI — Master website design (`01a1a1de-5ea7-7c53-b2ee-bc43d87896ae`) holds broad visual decisions; consult focused chats and preserve overlapping work. The separate event-card PRs 75/76 remain pending and are not included in D4.


- D6 Mobile disclosure correction ready to publish November 3: Rachel’s physical-phone screenshot exposed the visible details hint and expanded minus. Touch/no-hover controls now hide the label and use plus ↔ four dots for closed/open state; fine-pointer behavior remains unchanged. Checked touch-only CSS states in a QA fixture, retained-focus closure, reduced-motion overrides and narrow-desktop regression; isolated diagnostics/build passed. Release uses current continuing source 6a00bb9 and production 12d7c2e, preserving other releases. Deployment/live CSS evidence will follow in CHANGELOG. D5 standardization remains the next separate design task.
