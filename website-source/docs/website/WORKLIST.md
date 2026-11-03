# RESI website current work

Current queue for resi.org. Reconciled November 2, 2026 from Rachel's requests, the earlier November 2 priority list, production records, source files and current GitHub PRs. This is the active queue; earlier draft checklists are historical evidence.

## Status and priorities

Use Proposed, Decision needed, Drafting, Preview, Ready to publish, Published, and Live verified. Completed, Deferred and Superseded close or park an item. A preview is not live. Include affected pages, factual source and verification as an item progresses. Carry forward existing authorization within its actual scope.

Priority order: hiring/Join us; Anat's working group and scoped group updates; unresolved must-fixes; donor-case improvements; optional polish. If a fact blocks one item, record it and continue useful work on the next authorized priority.

## Active event work

| ID | Status | Work and next step |
| --- | --- | --- |
| E1 | Live verified November 2 | Rachel explicitly approved the reviewed outlined workshop card in Review RESI website project guide. Publication PR 71 merged at 20c5a45; Pages run 41514555482 succeeded. Live desktop/390px phone review confirmed the full outline, invitation, single date, Cambridge, Interest form destination and no horizontal overflow. Source PR 70 carries source and records into the continuing source branch. Events migration remains deferred. |
| E2 | Live verified November 2 | Placement: introduction → Announcements (workshop first, original other cards retained) → cryptography precedent → remaining sections. Published by PR 69, main 199a9eb. Do not requeue as unpublished. |
| E3 | Deferred | Replace Seminars with Events, adding the workshop and a separate seminar section. Keep stable URLs/anchors, archive past events, and render the event records now prepared under content/events/. Add a check for matching public event records and stable links between Events and the homepage feed; Home itself has only three recent slots. Current workshop has no Events counterpart. Do not invent one in News or misclassify it as a weekly seminar. |
| E5 | Preview | November 2 refinement: one three-item feed across News and community Events, newest announcement first; event record now drives workshop card. November 3: compared three event layouts; restored the year beneath Dec 4, with the title/location spread to match the full calendar height, title-row Interest form on desktop and aligned under the title before description on phones, a darker hairline and the same fill as news cards. Retain Rachel's supplied full-width description and Events/News category metadata and separate See all news / See community events links. Launching RESI remains on News, displaced from Home. Source/data prepared in source PR 73; publication PR 72. Events-page migration and cross-page audit stay deferred. Not yet published. |
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
