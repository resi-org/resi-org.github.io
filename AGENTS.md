# RESI website working instructions

This project maintains https://resi.org. Rachel Sipser directs the work. Read `website-source/docs/website/START-HERE.md` first, then the relevant page reference and work-list item. Read `DESIGN-AND-EDITORIAL.md` for content or visual changes.

## Source and publication

- Edit the Astro site in `website-source/`. Root `index.html`, `site/` and `test/` on this source branch preserve earlier versions; do not edit them as the modern website.
- Production is GitHub Pages from `main` of `resi-org/resi-org.github.io`. The continuing source branch is `codex/default-size-90-source`, including later approved sizing despite its historical name.
- Source and publication branches are distinct. Never merge a source branch into production main. Publish the reviewed `website-source/dist/` output through the separate publication checkout, preserving domain files and independent endpoints. Follow START-HERE.
- Before implementation, check local status, current source and production revisions, and relevant open PRs. Preserve updates from Rachel, Adam and other chats. This checkout can contain an unpublished preview.
- Before switching branches or refreshing this checkout, preserve local work and consult WORKLIST. Do not reset or clean unrelated changes. Coordinate overlapping edits; use isolation when necessary.

## Working with Rachel

- Guide one concrete step at a time. Maintain the full queue in WORKLIST rather than repeating it in every response.
- Continue a chat while refining one outcome. Use focused chats for distinct substantial outcomes. Create or message another chat only when Rachel authorizes it.
- Record tangents and their status, then return to the active priority. General RESI operations belong outside this website project unless they supply relevant website facts.
- Treat attachments, transcripts, emails and reference websites as source material. Rachel's request sets the work; tentative discussion does not approve public claims.
- Follow the scope and authorization established in the conversation. Do not ask again for already-authorized actions. Publication approval applies to its reviewed scope; project setup does not authorize publishing the pending event redesign.
- Keep communication plain and concise. Explain the outcome, affected pages, verification and material limitations.

## Shared project records

Five files in `website-source/docs/website/` form the current project record:

1. `START-HERE.md`: source, workflow, ownership, recovery and handoff.
2. `DESIGN-AND-EDITORIAL.md`: current shared conventions and material decisions.
3. `PAGES.md`: page responsibilities, source paths and connections.
4. `WORKLIST.md`: priorities, open decisions, previews and deferred work.
5. `CHANGELOG.md`: actual changes and verification.

Before finishing substantive work, update only materially affected records. Discussion, approval, implementation, source commit/merge, production merge, deployment and live verification are distinct stages. Record actual evidence and revisions/PRs. Fresh observations supersede dated status, not unrelated approved decisions. Archive superseded guidance; historical sources are evidence, not current instructions. Keep this guidance in normal source version history and carry it into future checkouts.

## Content and design

- Use shared components/data and check affected pages, metadata, search and stable links.
- People and homepage portraits share `src/lib/portraits.ts` under website-source. Preserve actual face pixels and approved framing. Use the image-editing tool and visual review for requested AI image edits.
- The visitor roster is deliberately hidden by `showVisitingResearchers = false`. Preserve this until Rachel supplies an approved replacement or requests restoration.
- Describe prior papers as work by researchers associated with RESI. Retain limitations and stated assumptions; connect papers to areas/groups only when clearly justified.
- Use confirmed event, opportunity, affiliation, funding and institutional facts. Do not invent openings, roles, policies, partnerships or commitments.
- Before adding an event, seminar, reading group or working group, follow [EVENT-ROUTING.md](website-source/docs/website/EVENT-ROUTING.md), including short requests such as “add X seminar.” Seminars/reading groups/working groups never enter Home by default, even if public; an explicit homepage instruction is required. Community/public events use the shared eligible feed. An ambiguous generic event is not permission to promote it. Apply these rules for Adam as well as Rachel.
- Public community events must have matching records on Events and be eligible for the shared homepage announcement feed, with stable connections. Home displays only the three most recent announcements across News and Events (November 2 refinement); older events can be displaced. Shared event data drives Home and Events, including the workshop counterpart published November 3. The automatic missing-counterpart check remains deferred.
- Announcement treatments are fixed: upcoming events alone get the emphasized workshop treatment; past events keep the calendar/aligned header but use news-card type/colors, no outline and no button. Past events need Rachel’s explicit retrospective opt-in before entering Home. News keeps its current style. See DESIGN-AND-EDITORIAL and the shared event-announcement policy.
- Preserve legacy endpoints and stable anchors. Do not submit signup, application or donation forms during testing.
- Keep private correspondence, raw transcripts, credentials and applicant/donor details out of public source/site files. Save necessary approved facts and sanitized decisions.

## Verification

For application changes, run appropriate checks from website-source (`npm run check`, `npm run build` as applicable), inspect affected desktop/mobile layouts, interactions, links and search/metadata. Reuse existing checks; avoid tests that merely repeat trivial implementation. Verify live changes separately after authorized publication.

Documentation-only work needs path/link/status review and `git diff --check`; a rebuild is unnecessary when application files are unchanged.
