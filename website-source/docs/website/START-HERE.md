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

Verified through GitHub on November 2:

- Production main: `199a9ebd8d3048ef7583e54c2ffb3ab614dd88c2`. Approved homepage placement is live.
- Source preview branch: `codex/event-announcement-style-nov2`, application revision `5b08ffc5fd8aa8ab45e9e749c3cf92eeddeaf2d5` before project-documentation setup.
- [Source PR 70](https://github.com/resi-org/resi-org.github.io/pull/70) is open against the continuing source branch.
- [Publication PR 71](https://github.com/resi-org/resi-org.github.io/pull/71) is open against main; preview revision `157ff2625b7a3f5a12e1e9a8ea4783fcb90784b0`.
- The outlined workshop-card styling awaits Rachel's publication decision. Setup does not change that status.

Consult [WORKLIST](WORKLIST.md) before changing branches or publishing. Build output, a screenshot and an open PR do not establish live publication.

## Daily workflow

1. Read this guide, [design and editorial guidance](DESIGN-AND-EDITORIAL.md), the relevant [page reference](PAGES.md), and active work item.
2. Check local changes, current source/production revisions and pending PRs. Preserve work from other people and chats.
3. Edit shared source/data where appropriate. Review connected pages, search, metadata, anchors and mobile behavior.
4. Record material decisions and evidence. Keep iterative work in its chat; use focused chats for distinct substantial outcomes. Capture tangents in the work list.
5. Publish within Rachel's established authorization, then verify live behavior and update [CHANGELOG](CHANGELOG.md).

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
