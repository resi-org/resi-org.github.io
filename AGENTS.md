# RESI repository entry point

This `main` branch contains generated GitHub Pages output for resi.org. Do not hand-edit generated HTML/CSS to add events, seminars, groups, news or other site content.

## Find the editable source first

The continuing editable source is `website-source/` on branch `codex/default-size-90-source` in this same repository. Read that branch's root `AGENTS.md`, then `website-source/docs/website/START-HERE.md` and `EVENT-ROUTING.md` before making content changes. Use a separate clean worktree when the current checkout has unrelated changes; never reset/clean or replace someone else's work. Do not merge the source branch into `main`.

## Defaults for short requests such as “add X event/seminar”

- Upcoming community events and other events confirmed open to the public or intended for public promotion belong on Events and are eligible for Home Announcements, using the approved emphasized upcoming-event card.
- Seminars, reading groups and working groups do **not** enter Home by default, even if public. Put seminars in the Events seminar section, reading groups in their participation/group context, and working groups on Research. An explicit homepage instruction overrides this exclusion for a dated activity; link the promoted card to its canonical entry.
- A request to put a seminar “on the website” is not an instruction to feature it on Home. If a generic event's type/audience cannot be inferred from supplied facts, clarify rather than silently promote it.
- Explicit “keep off Home” instructions win. Past events require Rachel's explicit retrospective request; use the quieter past-event style with calendar/aligned header and no outline/button. News keeps its approved current style.
- Home displays only the three newest eligible News/event announcements collectively. Inclusion eligibility does not pin an item or add a fourth slot.

Apply these shared rules for Adam as well as Rachel. The source schema and `src/lib/event-announcement-policy.ts` enforce the recorded classification/placement. Follow source documentation for fields, canonical destinations, tests and approved responsive card treatment. Do not invent missing facts or disclose private details.

Build/review the source, then publish generated output only within the authorization given in the current conversation. Preserve CNAME, .nojekyll, independent endpoints and legacy paths. Building or adding configuration does not itself authorize a public content change.
