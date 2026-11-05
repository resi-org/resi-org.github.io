# RESI website editing and handoff guide

This project maintains https://resi.org. Continue work from current source and these shared records. Baseline: November 2, 2026; recheck remote/live state before later implementation.

## Current source

| Item | Location |
| --- | --- |
| Codex project | RESI Website - resi.org |
| Project ID | `00c48f57-79f5-43f6-8bbf-38fd6efc3edb` |
| Primary local folder | `/Users/rachelsipser/Documents/GitHub/resi-website/output/resi-production-source-repo` |
| Repository | https://github.com/resi-org/resi-org.github.io |
| Editable website | `website-source/` in this repository |
| Continuing source branch | `codex/default-size-90-source` |
| Hosting | GitHub Pages, generated files on main, domain resi.org |

Root index.html, site/ and test/ on this source branch preserve older versions. Edit the Astro source instead. The source branch's 90% name is historical; later October 25 sizing is already incorporated.

This folder is a linked Git worktree nested inside the older RESI workspace. It shares Git metadata with another checkout. Do not move it with Finder, delete its parent workspace, or replace its Git history. A future relocation needs a planned Git worktree move and updates to project paths and references. Relocation is deferred to preserve the active preview.

## Current preview and production

November 5 mobile spacing — **PUBLISHED**: Rachel confirmed the current event-below-heading mobile placement and requested tighter spacing. Source app e1fb4da / PR 120; publication PR 121 at `2f9c948f504e0ffa7bfefa13c4c39f88cc7c445e`, successful Pages run 42129287517. The intro card uses the standard 12px row rhythm and an 8px gap under Save the date on stacked layouts; body line height is unchanged and matches the standard event card. Live 390px verified. Active correction checkout: `/private/tmp/resi-home-mobile-spacing-nov5`, preview http://127.0.0.1:4413/. Other pages/previews remain preserved. See WORKLIST E12/E13 and CHANGELOG.

November 5 People careers correction — **PREVIEW ONLY**: Rachel explicitly requested reverting the careers-section publication. Live People/Search were restored through PR 114 / 7efabab, successful Pages run 42121616797; at rollback both HTML files exactly matched the pre-release version at 3386c21. The subsequent People-only section reorder is recorded below. The complete careers section, hiring update, spacing refinements and corrected CBAI wording remain at http://127.0.0.1:4393/people#get-involved. Do not publish this section again without Rachel’s explicit approval; standing simple-text authorization does not extend to this pending section. See WORKLIST H1/H4 and CHANGELOG.

November 5 homepage design — **PUBLISHED**: Rachel explicitly approved the reviewed balanced intro/event layout (c98f027). Source application a8245fe / PR 118; production PR 119 merged at `6a42686dd0cc220287d6c74db88bb8d0aec2122a`, successful Pages run 42126278029. Ordinary live Home checked at 1280px/320px: full-width heading above 600px columns, Save the date inside the featured box, matched prose/card bottoms, three actions below, normal workshop copy retained in Announcements. Current stacked order is heading → event → introduction → actions. Source/release checkout: `/private/tmp/resi-home-intro-event-release-nov5`, http://127.0.0.1:4410/. Rachel also requested two mobile previews: compare http://127.0.0.1:4412/. Option 1 is the current published order; option 2 places the event after the Safe by design definition and remains preview-only in `/private/tmp/resi-home-mobile-after-definition-nov5` on `codex/home-mobile-after-definition-nov5`, http://127.0.0.1:4408/. Do not publish option 2 without her selection. People reorder PR 117, careers rollback PR 114, independent endpoints and other previews preserved. See WORKLIST E12/E13.

Verified through GitHub on November 4:

- Production main is `2f9c948f504e0ffa7bfefa13c4c39f88cc7c445e`, mobile feature-card spacing [PR 121](https://github.com/resi-org/resi-org.github.io/pull/121). Pages run 42129287517 succeeded; ordinary live mobile spacing verified. The approved Home layout, People reorder and careers rollback remain preserved.
- Events source: [PR 74](https://github.com/resi-org/resi-org.github.io/pull/74), branch `codex/events-page-rename` in `/Users/rachelsipser/.codex/worktrees/events-page-rename/resi-production-source-repo`, incorporates the latest shared-card source through `67f93bd`. PR 74 merged at `ddaf39a59d80d4cbfd57aad9d30c77fdffe8eb31`; it is carried through [source PR 73](https://github.com/resi-org/resi-org.github.io/pull/73) into `codex/default-size-90-source`, separately from production.
- Events now contains the shared December 4 workshop card above the existing seminar listings. Navigation, existing cross-page links, search and sitemap use /events; old seminar addresses preserve queries/fragments when forwarding. Further page refinements and proposed additional cross-links remain in WORKLIST E6. The automatic missing-counterpart check remains deferred.
- Optional local preview in the attached Events worktree: http://127.0.0.1:4391/events/.

Consult [WORKLIST](WORKLIST.md) before changing branches or publishing. Build output, a screenshot and an open PR do not establish live publication.

## Daily workflow

1. Read this guide, [design and editorial guidance](DESIGN-AND-EDITORIAL.md), the relevant [page reference](PAGES.md), and active work item.
2. Check local changes, current source/production revisions and pending PRs. Preserve work from other people and chats.
3. For News additions, use [shared News guidance](../../content/updates/_README.md): automatic Home eligibility with event priority and a three-slot cap; explicit exclusion/review policy. For event/seminar/group additions, apply [EVENT-ROUTING.md](EVENT-ROUTING.md) before selecting a content file or homepage placement. Edit shared source/data where appropriate. Review connected pages, search, metadata, anchors and mobile behavior.
4. Record material decisions and evidence. Keep iterative work in its chat; use focused chats for distinct substantial outcomes. Capture tangents in the work list.
5. Publish within Rachel's established authorization, then verify live behavior and update [CHANGELOG](CHANGELOG.md).

Standing authorization for simple text edits (Rachel, November 4): when she supplies or approves a simple wording change, implement, check, publish and verify it without a second publication question. Keep the release scoped to that text and necessary connected excerpts; preserve unrelated previews. Honor any explicit draft-only instruction.

Use one planning chat for priorities, supported by the shared queue. Permanent chats for every page are optional. New chats discover root AGENTS.md; durable guidance belongs in these files. Carry committed records into future checkouts. Avoid simultaneous edits to shared files without coordination. Older chats retain broader folder permissions and remain in their original locations; WORKLIST records their names and IDs. Start new website chats inside the dedicated project rather than requiring those older folder permissions.

## Preview and checks

Use Node 22.12 or a supported newer release. Run commands from website-source/. Dependencies already exist locally; `npm ci` establishes a fresh environment. `npm run dev -- --host 127.0.0.1` starts a local preview and reports its address. Use `npm run check` and `npm run build` for relevant application changes. `npm run preview -- --host 127.0.0.1` serves built dist/.

The existing launch-check.mjs is a broad Playwright check for Chromium/WebKit, desktop/mobile, images, metadata and core interactions. It requires a running server or explicit TEST_URL; inspect before running. Its optional COMPARE_DRAFT compares the historical Cloudflare draft and should stay off for current production checks. Prefer focused checks for small edits. Record actual results rather than historical launch results.

## Publishing and recovery

Build website-source/dist/. The existing publication checkout is the sibling resi-production-launch; it may hold a pending publication preview. Compare current source/production before copying reviewed generated output onto a publication branch based on current main. Preserve CNAME, .nojekyll, seminar-zoom/, reading-group/, legacy assets and stable links. Never overwrite independent endpoint changes with an old directory copy.

Review the generated diff and use the established PR workflow. Merge source changes into the continuing source branch and generated publication changes into main separately; never merge the source branch into main. Keep project records on the source line. Wait for GitHub Pages deployment, verify the affected live result and record its revision.

For a small regression, prepare a reviewed revert of the specific publication change from current production, preserving later unrelated work and reconciling source. Preserve current domain and endpoint settings.

The complete pre-C.2 site is retained at tag pre-c2-launch-2026-10-23, branch codex/pre-c2-backup-2026-10-23, and recorded commit `1d3ad09984ee5797b555535da996a954e91c454b`. That is a historical emergency restore, not the ordinary rollback for a current edit. Review later content/endpoints before using it. The launch record documents a past rehearsal; this setup does not repeat recovery or deploy a site.

## Ownership and handoff

Rachel directs edits/design. Adam and Emily supply institutional and operational input; scientific/researcher facts need appropriate source confirmation. Do not assume every contributor has publishing access. The public repository belongs to resi-org. During a transfer, verify GitHub membership, Pages permissions and the domain/DNS account owner. Keep credentials outside the repository.

A new maintainer needs current source history, these records, relevant account access and a working preview. Walk through a person/news/seminar update, review/publish/live verification, recovery and the open work list. Private transcripts and correspondence stay in their original private locations; transfer material according to its audience and access.

## Shared records and history

- [Design and editorial guidance](DESIGN-AND-EDITORIAL.md)
- [Page references](PAGES.md)
- [Current work](WORKLIST.md)
- [Change log](CHANGELOG.md)
- [Public references](references/README.md)
- [Archived root README](archive/legacy-root-readme-2026-11-02.md) and [source README](archive/source-readme-before-setup-2026-11-02.md)

Earlier extensive notes remain at `/Users/rachelsipser/Documents/GitHub/resi-website/docs/` and output/RESI-LAUNCH-AND-ROLLBACK.txt in that original workspace. They are historical evidence, not a second current queue. Current priorities and later preview status have been reconciled here. Retrieve original evidence when needed rather than making routine chats reread the archive.


November 3 disclosure follow-up: Rachel approved publication of the working-group plus-to-dots control and responsive spacing fixes. This release uses isolated source/publication branches, preserving other chats' active previews. Consult WORKLIST D4/D5 and CHANGELOG for release evidence and the subsequent cross-site standardization task. The site-wide design chat is RESI — Master website design (`01a1a1de-5ea7-7c53-b2ee-bc43d87896ae`).

November 3 disclosure release: source PR 77 merged at `fe575183b26e472c4337f3e0fafd8ff1911c384a`; publication PR 78 is live as recorded above. Other chats’ event-card previews remain separate. The homepage-copy release is recorded below. Next: WORKLIST D5, standardize the active row-based expanders through a reviewed preview.

Homepage editorial source PR 80 merged at `216654d6c5ee2f276751104ddbc57f45e9a05181`; publication PR 81 is live as recorded above.

November 4 News release: WORKLIST NEWS1/E10 tracks the approved Anthropic report and shared announcement-selection configuration in isolated branch `codex/news-provable-inference-nov4` at `/private/tmp/resi-news-nov4`, based on current continuing source `74a9371`. The original dirty checkout and unrelated previews remain untouched. Source PR 99 merged at `523de386286251d263cdd9855a2dab354c290019`; publication PR 100 merged at `a6b8c0f4d0e7de94e58cecc8da8ed00d777a35f9`, with deployment/live checks tracked in CHANGELOG. Research evidence is indexed in [references](references/news-listings-2026-11-04/report.md). Pages deployment succeeded and ordinary live URLs were verified. The original shared checkout is intentionally not reset/refreshed over unrelated dirty work; other contributors must receive the updated continuing source before inheriting these rules.
