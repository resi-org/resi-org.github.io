# RESI design and editorial guidance

Current conventions for resi.org, incorporating C.2 and subsequent approved changes. Implemented shared styles are the visual reference. Earlier draft guidance does not automatically override later decisions.

## Shared visual system

- Cardo is the current heading serif; IBM Plex Sans is running text. Earlier Literata guidance predates this version. Fonts are self-hosted.
- Use shared paper, ink, accent and line tokens in light/dark themes and existing components. Avoid isolated colors, shadows and decorative accent bars. Rachel rejected the November 2 event preview's left bar and requested the established full outline.
- October 25 native dimensions are approved: regular desktop content width 600px, with intentional wider shared elements. Browser zoom remains 100%. Do not recover earlier draft sizes by changing browser settings.
- Preserve hierarchy among page titles, sections, cards, body and metadata. Important explanatory prose remains readable body text. Research questions have an intermediate stronger weight; headings remain stronger.
- Major section boundaries use shared dividers. Avoid duplicate boundaries. Bind heading and introduction with consistent spacing, with a clear gap before content. Research outputs' closing paragraph belongs outside its rows.
- Cards use restrained full outlines and shared padding. Avoid empty height merely to equalize text. Working-group plus controls sit near the Led by line; retain top text spacing when changing height. Featured-group expansion pushes following cards down.
- Use SectionLinks.astro for section-ending links: regular weight, underline and arrow by default; explicit emphasis only where chosen. Homepage area links stack right-aligned. Homepage Announcements ends with separate See all news (/news) and See community events (/events) links.
- Inline links occupy text, without blank clickable row space. Full-card actions, buttons, navigation and portrait tiles retain intentional larger hit areas. Preserve visible keyboard focus and usable touch targets.
- Classify disclosures by the content they reveal: publication lists retain the small caret/triangle; explanatory details use a plus with card/non-card placement as defined below. Working-group tooltip text is lowercase details. Essential institutional meaning remains visible; provide accessible names and keyboard operation.
- November 6 navigation refinement: in the full desktop header menu, render the current page’s label bold (700), without an underline (Rachel’s follow-up correction). Home has no highlighted menu label. Preserve existing mobile-menu styling and current-page accessibility semantics.
- Header, footer, contents menus and utility controls are shared. Later approved utility alignment follows the footer's right edge, superseding earlier content-column positioning trials. Preserve mobile in-flow controls.
- Review affected desktop/mobile layouts and light/dark interactions. Preserve reduced-motion behavior and stable focus/hover on the homepage portrait mosaic.

## Shared content and imagery

Research areas share src/data/research-agenda.json. The homepage highlights four under Key research areas; the full Research page retains the larger collection. Preserve current scientific order unless Rachel revisits it.

People records live in content/people/. Shared src/lib/portraits.ts supplies People and the homepage mosaic. Inspect both sizes after a framing change. Current settings supersede earlier successive zoom requests. Preserve face pixels; existing background extensions are intentional assets. New AI editing requires a requested image edit and careful visual review.

Founders precede researchers and operations. Research group leaders are prioritized. Later refinements place Chloé immediately before Sam and Miranda immediately before Ran. The visitor roster remains hidden; replacement policy and Adam Chlipala's eventual placement remain open.

## Editorial conventions

- Exact legal name: The Institute for Responsible Superintelligence. RESI is accepted shorthand.
- Adam's November 9 SEO follow-up: use “AI safety” in the About introduction and matching Search excerpt. Do not expand it to “artificial intelligence (AI) safety” for keywords; the intended audience already knows the acronym.
- Cambridge, Massachusetts appears early in the homepage institutional introduction. Its repeated footer sentence was removed.
- Use precise plain copy and purposeful cross-links. Avoid repeating whole technical summaries/invitations across pages. Preserve scientific meaning and limitations.
- Safe by design is an aim supported by specified properties and assumptions. It does not establish a proof that an entire deployed system is safe. Retain empirical evaluation and independent checking.
- Foundational research is prior work by researchers associated with RESI. Use that phrase for related-paper metadata; verify authors, year and venue/status. Connect papers to groups/areas only when clearly justified. Do not present prior individual work as a new institute achievement.
- Homepage news metadata reads News · outlet · date; event metadata begins Events · followed by its approved announcement label. News-page source labels continue to identify the outlet, such as LessWrong or Boston Globe. Preserve original article titles and truthful attribution. Vague From the institute and Press labels were removed.
- Donation buttons use Support our work where applicable; retain intentional distinct actions such as header Support RESI and Donate online. November 3 approved exception: the lower homepage support action reads Learn more with an arrow, uses the filled Interest form button treatment, and sits beside its heading on desktop (stacked below up to 525px), linking to /support.
- Event dates, location, status and actions need confirmed facts. The December 4 workshop collects expressions of interest, not guaranteed places. Preserve approved wording pending a decision.
- Home shows at most three announcements total: eligible upcoming events first, then the newest eligible News and explicitly approved event retrospectives. Each group sorts by announcement/publication date descending with stable ID ascending for ties. Ordinary valid News defaults to inclusion; explicit exclusions and genuinely uncertain promotions held for Rachel’s review stay off Home. Community event records in content/events drive their homepage cards and also drive Events; attendance dates remain separate from announcement dates. Community/public events are eligible for the shared feed; seminars, reading groups and working groups require explicit homepage inclusion even when public. Older eligible items can be displaced by its three-item limit. See [event routing](EVENT-ROUTING.md). Events supplies the workshop counterpart and retains a distinct RESI-MIT seminar section. The automatic missing-counterpart audit remains deferred; the Events publication includes the workshop counterpart. Archive past seminars with stable anchors and historical speaker bios.
- The AI Safety Reading Group participation route includes its interest form. Jobs/fellowships must describe actual opportunities; planning discussion does not establish an opening.
- People → Join us (November 5 refinement, **published November 8 after explicit approval**): retain Work at RESI, Visit, Research fellowships across the AI safety network, and AI Safety Reading Group. Work order is unchanged culture (#culture), unlinked **Current opportunities — details coming.**, then one continuous paragraph: **Hiring update, Nov 2026:** We anticipate application review and hiring to take place over the coming year. Keep status role-neutral; the actual role will be listed above it. Do not imply active application acceptance/review while details are coming soon. Fellowship links are CBAI, MATS, Pivotal and SPAR with compact location/format notes; SPAR stays explicitly unpaid. Preserve the chosen heading/intro, existing Visit/Reading Group and mailing lists. Uniform paragraph gaps remain; headings use natural height, with no empty second line under Reading Group. Grid rows keep paired cards equal in height. On mobile (570px and below), stack Work → Visit → Reading Group → Fellowships, matching DOM/keyboard order. Desktop keeps fellowships left and Reading Group right.
- Verify affiliations, supporters, regional claims, budgets, IP policy and hiring commitments. Pronoun conventions and several clarity edits remain open in WORKLIST.

November 3 Events request: reuse the exact shared homepage event card at the top of Events, with seminars beneath. Broader page layout and new cross-link placements await review. The approved Events H1 is “Community events, seminars, and workshops on the foundations of AI safety” (terminal period removed November 5). There is no subtitle. Preserve seminar-specific names when they describe the actual series; the page/navigation name is Events.

## Shared changes

Find the common component/data first, review dependencies in PAGES, implement the scoped edit and inspect affected contexts. Record a newly approved convention here only when it changes future work, with a short reason/date. Keep proposals and rejected trials in WORKLIST rather than promoting them to rules.


## Shared explanatory disclosure control — published November 8

Explanatory content uses the shared 14px plus (1.1px stroke) when closed and four 3px dots forming the same 14px square while open. Never use a minus. Clicking the dots collapses the content and restores the plus, including retained pointer/focus. Preserve the 370ms rotating morph, quieter token-derived accent and reduced-motion support.

**FAQ exception:** the mark sits immediately after the question and aligns optically with its final text line. Keep the final word and indicator together when wrapping. No hint and no animation/change on hover or focus alone: animate only on open/close activation. Retain full-question activation and native accessible question/state. Use continuous bars for the closed cross to avoid seams between rotated half-arms at fractional inline positions; preserve the shared 14px footprint. Do not show chain-link permalink icons in FAQ rows; stable FAQ IDs remain valid for direct links (Rachel’s correction, November 8).

**Other explanatory controls:** retain the hover animation and lowercase details hint for fine pointers, including foundational-paper details. No-hover devices hide the hint. A closed control restores its plus after collapse while the pointer remains; a new pointer entry permits the hover preview again. Expanded controls remain dots after the pointer leaves. Card placement is unchanged at the lower-right corner, with natural 6px title/leader rhythm and one column at 600px. Non-card marks align to the bottom of the final associated text line: author line for papers, visible metadata/logistics for seminars. Opening the body must not shift the control below that text.

Use DisclosureControl.astro / lib/disclosure.ts / styles/disclosures.css and native details/summary; Base.astro manages resting hover after close. Preserve unique accessible names, 33px targets, visible focus, hidden decorative marks and hidden print duplicates. People’s publication lists retain their triangles; navigation is separate. All 40 active explanatory controls are included (11 groups, 16 papers, 6 FAQs, 7 seminars); the unused ResearchAreas collapsed variant shares the indicator without changing active expanded areas.

## Mobile main headings — published November 8

Opening H1s only are 10% larger up to 600px, including Home’s separate display title. Keep H1 sizes above 600px, section headings, body copy and card titles unchanged; allow natural wrapping. Verify long Events/Home titles and the 600/601px boundary.

## Foundational-author typography — approved November 8

Use full given names, retaining verified published/preferred middle initials and surname spelling. For one to three authors, show everyone; for four or more, show the first three in published order followed by “et al.” Keep complete linked credits inside the explanatory details for truncated entries, and the complete canonical names in Search. Never move a RESI researcher ahead of coauthors to place them before the cutoff. This is Rachel’s approved RESI house style, not a universal citation requirement. Verify expanded names rather than guessing initials. See the [comparison](references/foundational-author-style-comparison-2026-11-08.md) and [name evidence](references/foundational-authors-2026-11-08.md). The earlier all-author trial is superseded by this compact presentation.

## Announcement card treatments — approved November 3

These are the shared defaults for every community event; do not create a separate workshop-only design. `WorkshopCallout.astro` is the historical component name and serves every event card on Home and Events.

| Kind | Visual treatment | Calendar/header | Action | Homepage eligibility |
| --- | --- | --- | --- | --- |
| Eligible upcoming event | Current approved workshop treatment: full hairline, bold accent metadata, larger title, shared fill and the approved responsive spacing | Current calendar/date/title/location alignment, with the action anchored at the visible title top | Show the approved interest action when provided | Priority within the three-slot feed |
| Past event | Standard news-card fill, no outline, regular muted metadata, news-sized linked heading and ordinary text colors | Keep the calendar and shared aligned title/location header, centered naturally with quieter type | Never show a promotional button, even if its old URL remains in the record | Only after Rachel explicitly requests a retrospective announcement |
| News | Preserve the current News card design | Existing source/date metadata, title and summary | Existing article/title link; no event-style treatment | Automatic eligibility unless excluded/held |

Only upcoming event cards receive the extra emphasis. Past-event promotion requires an explicit `pastAnnouncement` object on its shared content record; it includes a retrospective publication date and optional approved label/description. Do not insert one speculatively, change an event's real attendance date, or move a past event into News to obtain a homepage slot. Past events without this opt-in remain in the Events archive but do not enter Home. Eligible upcoming events take priority within the three slots; approved retrospectives compete with News by publication/announcement date.

`src/lib/event-announcement-policy.ts` classifies date-only records through the end of their last Cambridge (America/New_York) day, using end or start when end is absent. This is evaluated at build time; rebuild after an event finishes. Do not retain Save the date copy, a future invitation, or an interest button on a past card. A retrospective uses separately approved copy rather than recycling its invitation.

Keep metadata at its readable shared size. The current upcoming label omits only Save the date when its card becomes too narrow for one line. Preserve the approved full-width baseline/button alignment and narrow-date spacing. New styling must not change current News cards. Run `npm run test:announcements`, diagnostics/build and affected desktop/mobile checks when changing the policy.

November 3 placement refinement: [EVENT-ROUTING.md](EVENT-ROUTING.md) defines defaults and explicit overrides for all contributors. Being upcoming alone never promotes a seminar/reading group/working group. The emphasized treatment applies when an upcoming event is intentionally included, not as a reason to include it.


November 3 mobile disclosure correction: on devices matching `(hover: none) and (pointer: coarse)`, hide the working-group details label completely; closed cards show the plus and open cards spin into the four-dot square, with no minus. Closing returns to the plus, including retained keyboard focus. Preserve accessible summary names and reduced-motion behavior. Fine-pointer/hover desktop behavior remains unchanged at every viewport width. This supersedes the earlier visible touch hint and mobile minus.


Disclosure accessibility verification (November 3): retain native details/summary semantics and a unique accessible summary name containing the group name plus details. The accessible name must survive hiding the visual mobile hint. Keep decorative plus/minus/dot marks aria-hidden and print-only duplicate bodies aria-hidden/hidden on screen. Verify platform accessibility expanded/collapsed states, body exposure only while open, keyboard operation and focus order when reusing the pattern. Native semantics supply state; no redundant manual ARIA state was needed in the reviewed implementation.

## Disclosure categories — approved November 4

Choose the cue by what is revealed, then choose placement by whether it is inside a card. Publication-list content takes precedence over the container.

| Revealed content and context | Shared cue | Current examples/status |
| --- | --- | --- |
| More explanatory details inside a card | Approved corner-aligned plus/dot control | Working groups; preserve the published desktop and touch behaviors |
| More explanatory details outside a card | Non-card plus variant; exact styling to review next | About FAQ answers and explanations/scope for individual foundational papers on Research |
| A list of selected work, publications, reports, papers or published research | Existing small caret/triangle beside the section label, even inside a card | People Selected publications, including the founder cards; preserve current style |

A disclosure about one paper’s meaning, findings, scope or limitations is explanatory detail, not a publication list. Rachel explicitly placed Research’s individual foundational-paper details in the non-card plus category. A working-group description can include related-paper links without becoming a publication-list expander. For genuinely mixed or unclear cases, flag the component and agree its category case by case; do not classify solely by the word research or the presence of a paper link.

People currently has no plus-based content controls inside its cards: the three founder cards and other publication expanders use Selected publications with a native triangle. Preserve those controls rather than replacing them with pluses. Events seminar abstracts/biographies are another explanatory non-card context to review later. On this page is navigation and keeps its own label/behavior; it is not a content disclosure.

This approves the taxonomy and supersedes the earlier broad proposal to convert People publication lists. It does not approve new non-card styling or a visual rollout yet. Preserve native keyboard/accessibility semantics, meaningful accessible names, hidden decorative marks and reduced-motion support across both cue families.

## News/Home contribution policy — November 4

Use one shared News record; no separate Home entry or routine placement question for Adam, Emily or others. Required publisher/source attribution is independent of explicit summary quotation mode; only verified quoted excerpts receive quotation marks. Original headlines/dates/links remain on News; optional shortened Home copy falls back to validated full copy. External research involving an associated researcher uses Research classification, without implying institute ownership. Explicit `homepage: exclude` preserves News/Search; `homepage: review` requires a reason and a WORKLIST issue for Rachel in Master NEWS. See [contribution guidance](../../content/updates/_README.md).

Current report copy approved by Rachel November 4: the Anthropic/FlashProve News record and shorter Home description are in `content/updates/2026-11-02-provable-inference.md`, preserving her exact wording including commas. The [reference findings](references/news-listings-2026-11-04/report.md) and [authorship wording evidence](references/news-listings-2026-11-04/authorship-wording.md) remain research observations/recommendations; later copy approval does not make every recommendation mandatory.

## Homepage workshop placement — November 5

Rachel approved publication of the reviewed balanced layout: the full-width institute heading sits above a 600px opening with introduction text left and a featured workshop card right. Save the date appears once inside that box above the workshop details, without Events. Natural paragraph/card spacing aligns the prose/card bottoms. Three actions occupy the full center width below both columns, including See all events and seminars → /events, wrapping when needed. This is a scoped Home feature treatment; the normal shared event card on Events and in Announcements retains its established labels, styling and action. The same selected workshop record appears in both intro and the ordinary three-entry Announcements feed, with distinct accessible heading IDs.

The reviewed layout keeps two columns down to 521px. Current published stacked order at 520px and below is institute heading → event → introduction → actions. Rachel requested a comparison against event-after-definition placement; that alternative is preview-only until she selects it. See WORKLIST E13. These approvals supersede the earlier top-only, outside-heading and left-column-heading trials; preserve their actual history in CHANGELOG.

November 5 mobile refinement: Rachel confirmed the current below-heading mobile placement. The featured intro card uses the ordinary 12px row rhythm at 520px and below, with an 8px Save the date/metadata gap; retain the site-standard body line height. Do not reintroduce the larger mobile-only gap or publish the earlier after-definition placement without a new request. Desktop balance and normal event-card treatments remain unchanged.

## Homepage Announcements position — November 8; published

Restore the original section position: after Founders/research community and before Key research areas. Introduction/featured workshop and cryptography precedent remain above it. This reverses the November 2 move directly under the introduction; it does not revert later approved card styling, feed selection/content, or the November 5 intro/workshop layout. Keep #announcements and its existing link destinations.

Publication confirmed November 8: original Announcements placement is live through PR 131 (34e02f5). Current card treatments, feed rules and the separate introductory workshop feature are unchanged.
