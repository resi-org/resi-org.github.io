# RESI website change log

Record material source and public changes with their scope and evidence. Keep Proposed, Preview, Published and Live verified distinct. Baseline reconciled November 2, 2026; do not treat it as a fresh verification on future dates.

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
