## Workshop alternatives offline — November27 current status

The three RESI preview routes have been removed: sourcePR431/474a148; generated-onlyPR432/c392838; successfulPages46080516103 and exact API built revision. All nine tested old URL forms (slash/no slash/index.html) return404 without a program. Canonical workshop remains HTTP200 and byte-for-byte identical to selected compact release. Archived route wrappers/reusable designs remain outside page generation; do not restore public alternatives without Rachel’s new request.

The legacy separate Sites preview is owner-only and anonymous HTTP403. Manual browser settings were subsequently accessible through the ChatGPT Sites library, superseding the earlier UI-capability limitation. They expose permanent Delete site, no separate unpublish. Full source history (verified Git bundle at exact version38commitdb2b270) and version38built archive are saved locally in output/retired-workshop-sites-backup-nov27 in the isolated two-options checkout. Final deletion awaits Rachel’s action-time confirmation because the UI explicitly says permanent and deletes uploaded data. Current resi.org is unaffected.

## Workshop canonical layout — selected November 27

Rachel selected option 3: the integrated chronological program with uniform square portraits. Canonical and compact preview share compact layout/framing; the larger-portrait integrated alternative stays independently available. This supersedes earlier canonical speaker-gallery and larger-portrait selections. Preserve all current scientific content, stable anchors and square crops; panel/spotlight names stay below their photos in a single responsive row. Names share medium500 weight without forcing panel-style line breaks on standalone speakers. Conduct link has36px above/below on canonical and compact; footer remains last. Display credits only for clearly named human photographers or explicit image attribution requirements; the selected Simons Jacob photo meets the latter. Miranda’s selected People image is by Anna Lu. See the November27photo audit.

## Workshop signup removal: November 25

Adam requested removing the December 4 workshop interest-form links and their signup explanations from Home, Events and the workshop detail page. This supersedes earlier instructions to preserve that workshop's interest buttons and admission note. Retain Learn more and Code of conduct. The Program note now reads “Session times are subject to change.” The actual schedule times are unchanged. Other signup forms keep their existing behavior.

# RESI design and editorial guidance

## Workshop affiliation labels — Adam's November 19 correction

Use **Zico Kolter — CMU**, **Aleksander Mądry — OpenAI** **Yael Tauman Kalai — MIT, RESI** and **Dylan Hadfield-Menell — MIT, RESI** for this event. These are the explicitly selected public affiliation labels; do not expand them based on email domains, board memberships or other institutional connections. This supersedes the November 17 Zico label “CMU, OpenAI” and Yael's November 18 “MIT” label. Madry remains a panelist, not a talk speaker. Dylan Hadfield-Menell (MIT, RESI) is a confirmed talk speaker and is included in the shared roster as of November 19.

## Workshop speakers and talks — approved November 23

Adam approved publication of the reviewed talk-title layout. The standalone workshop section uses two equal-width columns above 520px and one column at 520px/below. Each entry pairs a compact 64px-wide portrait with the name and affiliation, followed by the talk title across the entry's width. Keep the existing speaker order, original portraits and approved framing. Titles come from the event Google Doc and use canonical optional `speakers[].talkTitle` data; a missing title displays “Title to be announced.” At Adam's follow-up request, omit the general “Talk titles are tentative” sentence. Search includes available titles, while the compact Home/Events cards remain unchanged. Spotlight names remain a separate text list without talk titles.

This supersedes the November 17 four/three/two-column portrait-only layout for the standalone workshop page. Jacob Tsimerman must not be restored as a talk speaker; his subsequently approved panelist listing remains separate.

At Adam's November 23 request, section order is Speakers and talks → Panels → RESI research spotlights → Hosted by. Preserve the existing section anchors and participant/moderator text.

## Events lineup columns — approved November 16

Hosts share the speakers’ two-to-one-column transition (240px minimum tracks with an 18px gap). Keep three host columns when all three 170px tracks and both gaps fit: the host-only override begins at 546px of card content width. Below that, inherit the shared speaker grid so the lists collapse together. Rachel approved publication; source PR250 and production PR251 are merged. Successful Pages43896543498 and ordinary live browser checks confirm the matching column transitions. See WORKLIST/CHANGELOG.

## Events title/date centering — approved November 16

The Events detail card centers the combined title/location block in the same grid row as the calendar date. Use `.detail-event .workshop-description { align-self: center; }`, retaining the existing leading, title/location gap, font sizes and action positions. This is about a 10px downward shift at the full 600px card width and adapts naturally when the title wraps. Home and past-card rules remain unchanged. Rachel approved publication; source PR245 / production PR246 are merged, Pages43894731802 succeeded and ordinary live1280/390px review passed. See CHANGELOG/WORKLIST for evidence.


Current conventions for resi.org, incorporating C.2 and subsequent approved changes. Implemented shared styles are the visual reference. Earlier draft guidance does not automatically override later decisions.

## Shared visual system

- November 12 approved intro/workshop spacing refinement: keep Home’s matched prose/card bottoms. Side-by-side prose uses a 20px first gap and 15px minimum bridge gap; phones use 16/12px. Featured card row gap 10px. Above 650px, featured speaker names may wrap naturally to use its full line width; narrower featured cards retain whole-name wrapping. This changes spacing only, preserving all content, type sizes, ordinary announcements and Events layout.

- November 12 header support action: Support RESI is always bold (700) in desktop navigation, the mobile header button and mobile menu, while retaining its existing quiet filled treatment.

- November 12 Home intro actions: Research Program, Seminars and Workshops, Join our reading group, Support our work, in that order. Four compact buttons fill one desktop row with outer edges aligned to the introduction/workshop. Keep 11.25px text and 7.5px arrow gap; distribute remaining row space evenly. The approved site-wide 01b outlined-action style below supplies the appearance; Home keeps 6px horizontal padding to retain its one-row desktop layout. At 650px and below use two columns; at 380px and below stack. Reading group temporarily links to https://resi-ai-safety.github.io/reading-group/ until its Events section is approved.

- Cardo is the current heading serif; IBM Plex Sans is running text. Earlier Literata guidance predates this version. Fonts are self-hosted.
- Use shared paper, ink, accent and line tokens in light/dark themes and existing components. Avoid isolated colors, shadows and decorative accent bars. Rachel rejected the November 2 event preview's left bar and requested the established full outline.
- October 25 native dimensions are approved: regular desktop content width 600px, with intentional wider shared elements. Browser zoom remains 100%. Do not recover earlier draft sizes by changing browser settings.
- Preserve hierarchy among page titles, sections, cards, body and metadata. Important explanatory prose remains readable body text. Research questions have an intermediate stronger weight; headings remain stronger.
- Major section boundaries use shared dividers. Avoid duplicate boundaries. Bind heading and introduction with consistent spacing, with a clear gap before content. Research outputs' closing paragraph belongs outside its rows.
- Cards use restrained full outlines and shared padding. Avoid empty height merely to equalize text. Working-group plus controls sit near the Led by line; retain top text spacing when changing height. November 9 approved exception: twelve equal-width working-group cards use a shared two-line title slot, 16.5px type at 1.25 line height and unchanged padding/6px leader gap; no full-width featured card. Expansion pushes only later cards in its own column. Deliberate title breaks: Cryptographic / verification; Cryptography and / cybersecurity; ASI Ethics / and Fairness; AI safety using / quantum effects; AI and the / Human Experience. Shared plain names remain unchanged in People, Search and accessible names. November 9 row-pairing follow-up: swap only Data attribution and Cryptography and cybersecurity; retain the first three rows and prominent established leaders near the top. Closed desktop rows pair two-line titles in rows 1/5/6 and one-line titles in rows 2/3/4. Research-only display order must not reorder People or Search.
- Use SectionLinks.astro for section-ending links: regular weight, underline and arrow by default; explicit emphasis only where chosen. Homepage area links stack right-aligned. Homepage Announcements ends with separate See all news (/news) and See community events (/events) links.
- Inline links occupy text, without blank clickable row space. Full-card actions, buttons, navigation and portrait tiles retain intentional larger hit areas. Preserve visible keyboard focus and usable touch targets.
- Classify disclosures by the content they reveal: publication lists retain the small caret/triangle; explanatory details use a plus with card/non-card placement as defined below. Working-group tooltip text is lowercase details. Essential institutional meaning remains visible; provide accessible names and keyboard operation.
- November 6 navigation refinement: in the full desktop header menu, render the current page’s label bold (700), without an underline (Rachel’s follow-up correction). Home has no highlighted menu label. Preserve existing mobile-menu styling and current-page accessibility semantics.
- November 16 footer direction: preserve the full desktop composition wherever its actual contents fit. Use the compact arrangement only when needed for space, not simply because a viewport is classified as mobile/tablet. On narrower screens, reserve utility space within the footer so the controls cannot cover main content. Published and live verified November 16 under WORKLIST D17. Shared global.css reserves an in-footer stacked utility area below 915px; the complete links/copyright row stays intact while the footer shell is at least 311px wide. Below that measured fit limit, use the compact two-row layout with adjacent theme/top controls. Recheck the intrinsic row width if footer text, type or gaps change; do not move this transition to a broad phone/tablet breakpoint. Preserve the existing desktop gutter/fixed treatment and all utility semantics.
- Header, footer, contents menus and utility controls are shared. Later approved utility alignment follows the footer's right edge, superseding earlier content-column positioning trials. Preserve mobile in-flow controls.
- Review affected desktop/mobile layouts and light/dark interactions. Preserve reduced-motion behavior and stable focus/hover on the homepage portrait mosaic.

## Desktop navigation and section menus — approved November 23

When the full header fits, About, Research, People and Events expose their existing section links on pointer hover and keyboard focus. Use a compact horizontal row centered beneath the affiliated navigation word, regardless of its right edge. Preserve the established 9px uppercase, 500-weight, 0.13em-tracked type; the bar is 25px high with 14px horizontal padding and no On this page heading. Keep native page links, visible focus, ArrowDown entry, Escape dismissal and correct hidden/expanded semantics. News and Support remain ordinary links without invented section inventories.

November24 approved refinement: the open row's hairline outline rises around its affiliated navigation word as one connected tab. Preserve the shared paper fill and line color in both themes. Keep the row25px high and centered; raise it3.25px to meet the bottom of the desktop Support RESI button. Desktop Support uses5.25px vertical/10.5px horizontal padding, retaining its existing fill, type and emphasis. Its mobile counterpart stays unchanged. As soon as the full navigation collapses, restore the existing On this page menu after the page intro at every narrower width, including intermediate desktop/tablet widths. This supersedes only the November23 detached outline/desktop Support dimensions, not the approved contents or mobile design.

November25 approved hover tolerance: preserve the exact visible design while extending the open row's pointer area10px to either side and below. Do not extend it above the row into neighboring navigation labels. Keep250ms closing grace to allow pointer re-entry. Rachel’s final November25 selection uses no opening or switching delay: entering any menu word opens it immediately, including when another menu is already open. This supersedes the earlier150/50/45ms switching trials. Keyboard focus/ArrowDown remains immediate. Cancel stale closing timers on re-entry, opening another menu, dismissal and resize; Escape closes all open menus immediately. Preserve native links, visible focus, mobile layout and the after-intro contents fallback.

`src/data/page-sections.ts` is the single inventory used by Header and PageShortcuts. Preserve stable anchors, Research team under People and the shared hidden-visitor flag. Hide the in-intro contents only with full desktop navigation; retain the existing collapsed/mobile placement, appearance and interaction. Wide coarse/no-hover devices retain in-page contents as a touch fallback. This does not approve a new mobile contents design.

`src/components/Header.astro` measures the brand, actual navigation labels (including current-page bold), Search and gaps after font loading and resize. Keep full navigation until the About-to-identity gap would be smaller than the spacing between menu words. Do not restore an arbitrary early tablet breakpoint. `src/styles/navigation.css`, imported by Base, owns these shared rules. Recheck popup centers, fit boundaries, focus transfer and mobile contents whenever header text or section inventories change.

## Outlined action buttons — 01b approved site-wide, November 12

All outlined action buttons now use 01b: transparent fill; 1.25px full outline mixed from 80% accent / 20% paper; label weight 500; accent text; established 1.5px corners. Hover uses accent-hover for text/border and a 5% accent wash. Inherit the existing visible keyboard focus, type sizes, arrows, hit areas and responsive geometry. Home retains 6px horizontal padding so its four buttons fit between the existing outer edges. Use the shared theme tokens in light/dark; do not recreate separate page-specific border or weight values.

`src/styles/buttons.css`, imported once by Base.astro, is the canonical appearance source for `.button:not(.donate-button)`. It covers Home, About, Research, People, Support’s introductory onward actions and 404 actions. The old quiet/thin outline and secondary outline treatment are retired for this family; existing secondary classes are compatibility markup, not a different visual variant. New outlined actions must reuse `.button` and this rule.

Rachel explicitly clarified the scope: **preserve** header Support RESI, workshop Interest form, Donate online and lower-Home Learn more exactly in their existing treatments. The `.donate-button` exclusion is deliberate. Do not convert these filled/emphasized controls when maintaining the outlined family. Ordinary text/section links, icons, On this page/menu controls and plus/dots/publication expanders also retain their own patterns. This supersedes the earlier homepage-only hold for the outlined family, not those separate approved treatments.

## Shared content and imagery

November 12 Rachel bio refinement: use the approved two-sentence Generalist opening from content/people/rachel-sipser.md. This supersedes the November 11 “Works across” opening without changing her scope, title, portrait, framing or profile layout. Search uses the same canonical text.

November 11 Operations approval: Emily Uyeda Kantrim appears left and Rachel Sipser right in two desktop columns, retaining stacked person rows on phones. Keep the shared Person component, established type/photo sizes, role under each name, and no-name-repeat bios. Emily's role is Chief Operating Officer; Rachel's is Operations, Strategy & Special Projects. Rachel approved the final photo without further edits; its asset is rachel-sipser.png with default shared framing. Her final bio describes communications, community-building and organizational development, with “advancing new initiatives” and “rigorous research”; do not restore the earlier website/newsletter-specific draft. The original Operations-only release did not alter Home; Rachel’s subsequent November 11 mosaic rule below now includes Operations automatically.

Research areas share src/data/research-agenda.json. The homepage highlights four under Key research areas; the full Research page retains the larger collection. Preserve current scientific order unless Rachel revisits it.

**Homepage team-photo rule — approved November 11:** every published People profile with a photo is included automatically in Home’s rotating mini-photo grid, including Operations. Exclude founders because Home already features their larger portraits above the grid. Eligibility comes directly from the shared `people` collection (`group !== 'founders'` and a nonempty `photo`); no separate homepage roster or per-person opt-in. Adding a person or photo takes effect on the normal site rebuild/publication. Keep the existing research-first order, followed by other eligible profiles in their configured order; retain the 18 visible rotating slots, reduced-motion/print full roster, hover/focus stability and links to each People anchor. Profiles without photos are omitted until a photo is added. Do not expose the hidden visitor roster through this rule; visitors currently have a separate photo-free collection and remain hidden. If another profile section is added to People in future, connect its visible photo-bearing profiles to this same inclusion rule rather than creating a separate Home list.

People records live in content/people/. Shared src/lib/portraits.ts supplies People and the homepage mosaic. Inspect both sizes after a framing change. Current settings supersede earlier successive zoom requests. Preserve face pixels; existing background extensions are intentional assets. New AI editing requires a requested image edit and careful visual review.

Founders precede researchers and operations. Adam's November 27 instruction makes the People page's Research team alphabetical by last name, superseding the earlier group-leader priority and Chloé/Sam and Miranda/Ran ordering exceptions. Founders remain in their separate section with their configured order. This page-level ordering does not change the homepage mosaic or Search order. The visitor roster remains hidden; replacement policy and Adam Chlipala's eventual placement remain open.

## Editorial conventions

- November 11: the `/about` page is named About in desktop/mobile navigation, browser/social titles and Search categories. Preserve its descriptive H1 and stable route/anchors.

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

November 3 Events request: reuse the exact shared homepage event card at the top of Events, with seminars beneath. Broader page layout and new cross-link placements await review. The approved Events H1, replaced November 11 at Rachel’s request, is “Seminars, workshops, and discussions on building the foundations of superintelligence safety” (no terminal period). There is no subtitle. Preserve seminar-specific names when they describe the actual series; the page/navigation name is Events.

## Shared changes

Find the common component/data first, review dependencies in PAGES, implement the scoped edit and inspect affected contexts. Record a newly approved convention here only when it changes future work, with a short reason/date. Keep proposals and rejected trials in WORKLIST rather than promoting them to rules.


## Shared explanatory disclosure control — size refined November 10

Explanatory content uses the shared 11px plus (1.1px stroke) when closed and four 3px dots forming the same 11px square while open. Rachel requested 1–2px less on each side on November 10: 14px → 11px removes 1.5px from every arm. Never use a minus. Clicking the dots collapses the content and restores the plus, including retained pointer/focus. Preserve the 370ms rotating morph, quieter token-derived accent and reduced-motion support.

**FAQ exception:** the mark sits immediately after the question and aligns optically with its final text line. Keep the final word and indicator together when wrapping. No hint and no animation/change on hover or focus alone: animate only on open/close activation. Retain full-question activation and native accessible question/state. Use continuous bars for the closed cross to avoid seams between rotated half-arms at fractional inline positions; preserve the shared configured footprint. Do not show chain-link permalink icons in FAQ rows; stable FAQ IDs remain valid for direct links (Rachel’s correction, November 8).

**Other explanatory controls:** retain the hover animation and lowercase details hint for fine pointers, including foundational-paper details. No-hover devices hide the hint. A closed control restores its plus after collapse while the pointer remains; a new pointer entry permits the hover preview again. Expanded controls remain dots after the pointer leaves. Card placement is unchanged at the lower-right corner, with natural 6px title/leader rhythm and one column at 600px. Non-card marks align to the bottom of the final associated text line: author line for papers, visible metadata/logistics for seminars. Opening the body must not shift the control below that text.

The shared configuration is `:root` in `src/styles/disclosures.css`: `--disclosure-mark-size: 11px`, `--disclosure-stroke-width: 1.1px`, `--disclosure-dot-size: 3px`. Derive arm lengths, FAQ continuous bars, dot offsets and non-card baseline positioning from these values; do not introduce independent per-page sizes. Dot centers sit ±4px from the mark center, giving the same 11px outer square. Keep 33px targets, the 24px internal animation frame and existing stroke/motion/hover behavior.

Use DisclosureControl.astro / lib/disclosure.ts / styles/disclosures.css and native details/summary; Base.astro manages resting hover after close. Preserve unique accessible names, 33px targets, visible focus, hidden decorative marks and hidden print duplicates. People’s publication lists retain their triangles; navigation is separate. All 41 active explanatory controls are included (12 groups, 16 papers, 6 FAQs, 7 seminars; twelve-group roster approved November 9); the unused ResearchAreas collapsed variant shares the indicator without changing active expanded areas.

## Mobile main headings — published November 8

Opening H1s only are 10% larger up to 600px, including Home’s separate display title. Keep H1 sizes above 600px, section headings, body copy and card titles unchanged; allow natural wrapping. Verify long Events/Home titles and the 600/601px boundary.

## Foundational-author typography — approved November 8

Use full given names, retaining verified published/preferred middle initials and surname spelling. For one to three authors, show everyone; for four or more, show the first three in published order followed by “et al.” Keep complete linked credits inside the explanatory details for truncated entries, and the complete canonical names in Search. Never move a RESI researcher ahead of coauthors to place them before the cutoff. This is Rachel’s approved RESI house style, not a universal citation requirement. Verify expanded names rather than guessing initials. See the [comparison](references/foundational-author-style-comparison-2026-11-08.md) and [name evidence](references/foundational-authors-2026-11-08.md). The earlier all-author trial is superseded by this compact presentation.

## RESI office event access wording — November 20

For every event or seminar at the RESI offices, including past events, display two lines: **RESI Offices, Akami Building** and **[Contact](mailto:rachel@resi.org) for access details**. “Contact” alone is linked to Rachel’s RESI email. Do not display the office street address, floor or postal code while building access arrangements are being decided. Preserve the supplied “Akami” spelling unless Rachel changes it. Keep Search text consistent. This venue-specific rule supersedes preserving the original office address when archiving; other venues retain their historical locations and the standard upcoming/past placement rules.

## Past-event archive layout — approved November 12

For every past event type, locations belong at the bottom of expanded details, never in the collapsed summary. Upcoming events retain their prominent logistics. Past seminars use one compact summary rhythm: title → speaker/affiliation → month/day/year date → shared plus/dots disclosure. Keep time, room and street address in the final Event details block after the description/abstract and Biography; preserve the original dates, times, venues, historical copy and stable anchors. Details start closed, use native accessible state and the shared explanatory control, and retain the existing text-bottom alignment.

Chloé’s fireside-chat description keeps the accurate heading About the conversation; its bio uses Biography like the other seminars. Do not rename a conversation Abstract solely for visual uniformity. Speaker links reflect the available verified People/external profile, not a requirement to invent one. Different historical rooms, talk lengths and affiliations are facts, not inconsistencies to erase.

`pastSeminarDisclosure` validates every archived seminar at build time: compact date-only citation, closed disclosure, and one location in the final Event details block. New/archived seminars must use that structure and keep canonical Search text synchronized. Past workshop/community cards retain the approved quiet calendar/news-style treatment, but their location is now disclosed last via the same plus/dots control on both Events and any explicitly approved Home retrospective. They remain off Home without retrospective approval; no expired action button. This location rule supersedes the earlier visible-location past-card rule only.

## Announcement card treatments — approved November 3

These are the shared defaults for every community event; do not create a separate workshop-only design. `WorkshopCallout.astro` is the historical component name and serves every event card on Home and Events.

| Kind | Visual treatment | Calendar/header | Action | Homepage eligibility |
| --- | --- | --- | --- | --- |
| Eligible upcoming event | Current approved workshop treatment: full hairline, bold accent metadata, larger title, shared fill and the approved responsive spacing | Current calendar/date/title/location alignment, with the action anchored at the visible title top | Show the approved interest action when provided | Priority within the three-slot feed |
| Past event | Standard news-card fill, no outline, regular muted metadata, news-sized linked heading and ordinary text colors | Keep the calendar/title header; put the location last inside collapsed Event details | Never show a promotional button, even if its old URL remains in the record | Only after Rachel explicitly requests a retrospective announcement |
| News | Preserve the current News card design | Existing source/date metadata, title and summary | Existing article/title link; no event-style treatment | Automatic eligibility unless excluded/held |

Only upcoming event cards receive the extra emphasis. Past-event promotion requires an explicit `pastAnnouncement` object on its shared content record; it includes a retrospective publication date and optional approved label/description. Do not insert one speculatively, change an event's real attendance date, or move a past event into News to obtain a homepage slot. Past events without this opt-in remain in the Events archive but do not enter Home. Eligible upcoming events take priority within the three slots; approved retrospectives compete with News by publication/announcement date.

`src/lib/event-announcement-policy.ts` classifies date-only records through the end of their last Cambridge (America/New_York) day, using end or start when end is absent. This is evaluated at build time; rebuild after an event finishes. Do not retain Save the date copy, a future invitation, or an interest button on a past card. A retrospective uses separately approved copy rather than recycling its invitation.

Keep metadata at its readable shared size. The current upcoming label omits only Save the date when its card becomes too narrow for one line. Preserve the approved full-width baseline/button alignment and narrow-date spacing. New styling must not change current News cards. Run `npm run test:announcements`, diagnostics/build and affected desktop/mobile checks when changing the policy.

**Confirmed lineup on upcoming event cards (Adam, November 12):** an event record may list confirmed `speakers` and `hosts`. Events shows the full list under the summary: a small accent label, names in ink with muted affiliations in a two-column grid that becomes one column on phones, then the hosts in the same style, separated from the summary by a hairline. Home (hero card and Announcements) shows the label and speaker names only, in place of the summary sentence, with no affiliations and no hosts, so both Home cards keep their approved height and row structure. Past cards show no lineup. Events without these fields are unchanged. See content/events/_README.md.

November 3 placement refinement: [EVENT-ROUTING.md](EVENT-ROUTING.md) defines defaults and explicit overrides for all contributors. Being upcoming alone never promotes a seminar/reading group/working group. The emphasized treatment applies when an upcoming event is intentionally included, not as a reason to include it.


Historical note: the November 3 mobile-only plus/dots exception was superseded by the November 8 site-wide no-minus rule and November 10 shared sizing above. Do not restore the earlier desktop minus or independent mobile sizing; see CHANGELOG for historical release evidence.

Disclosure accessibility verification (November 3): retain native details/summary semantics and a unique accessible summary name containing the group name plus details. The accessible name must survive hiding the visual mobile hint. Keep decorative plus/dot marks aria-hidden and print-only duplicate bodies aria-hidden/hidden on screen. Verify platform accessibility expanded/collapsed states, body exposure only while open, keyboard operation and focus order when reusing the pattern. Native semantics supply state; no redundant manual ARIA state was needed in the reviewed implementation.

## Disclosure categories — approved November 4; rollout current through November 10

Choose the cue by what is revealed, then choose placement by whether it is inside a card. Publication-list content takes precedence over the container.

| Revealed content and context | Shared cue | Current examples/status |
| --- | --- | --- |
| More explanatory details inside a card | Shared 11px plus/dots with corner placement | Working groups; shared hover/touch behavior above |
| More explanatory details outside a card | The same 11px plus/dots with text-bottom alignment | FAQ inline and click-only/no hint; paper/seminar details keep hover and details hint |
| A list of selected work, publications, reports, papers or published research | Existing small caret/triangle beside the section label, even inside a card | People Selected publications, including the founder cards; preserve current style |

A disclosure about one paper’s meaning, findings, scope or limitations is explanatory detail, not a publication list. Rachel explicitly placed Research’s individual foundational-paper details in the non-card plus category. A working-group description can include related-paper links without becoming a publication-list expander. For genuinely mixed or unclear cases, flag the component and agree its category case by case; do not classify solely by the word research or the presence of a paper link.

People currently has no plus-based content controls inside its cards: the three founder cards and other publication expanders use Selected publications with a native triangle. Preserve those controls rather than replacing them with pluses. Events past-seminar abstracts/biographies use the shared explanatory non-card control. The November19 approved upcoming seminar boxes retain the reviewed metadata-aligned shared plus/dots control inside their cards; do not move it or replace its semantics merely because the container is now outlined. On this page is navigation and keeps its own label/behavior; it is not a content disclosure.

This approves the taxonomy and supersedes the earlier broad proposal to convert People publication lists. The non-card visual rollout was approved/published November 8 and its shared size refined November 10; use the current shared-control configuration above. Preserve native keyboard/accessibility semantics, meaningful accessible names, hidden decorative marks and reduced-motion support across both cue families.

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


## Workshop detail and Events actions — November14

Rachel approved the final standalone workshop: large canonical title, 22px desktop/19.5px phone sans-serif subtitle (November16 refinement), established Cardo16.5px bold panel titles and Plex Sans12.75px/1.65 descriptions, static approved portraits and repeated interest invitation. Footer remains last; any selected-photo credits sit just above it.

For upcoming full-lineup Events cards with an approved standalone detail page, omit the small announcement heading; the approved description already identifies the inaugural workshop (Rachel's November14 follow-up). Let the description span beneath the date and title on desktop, while keeping an outlined Learn more beneath the filled interest action in the right column. Mobile moves actions below the summary. The compact Home feature/announcement treatments retain their prior headings, names and visual layout, with Learn more pointing to the same detail page. Past-event policy is unchanged.

November16 workshop roster: nine speakers use three equal desktop columns (three rows), retaining three columns on wider phones above480px. At480px and below use two columns and center a final odd speaker at the normal card width. Preserve speaker order, portrait framing and shared page width.

November16 workshop facts: date/time/location/attendance share12.75px semibold ink text. Duration is Full day; exact start/end hours are unconfirmed (Rachel’s correction, November16). Put the duration before the date, separated by a middle dot. The November16 combined subtitle replaces the opening overview; retain24px desktop/21px phone space from facts to the opening invitation.

November16 workshop portrait refinement: Anat/Roy use40% horizontal object position to move their faces slightly right. Preserve existing zoom/vertical settings and shared People/Home framing. Photo assets stay untouched.

November16 combined introduction: use the approved longer subtitle ending frontier labs, safety organizations, and academia. Omit the separate opening paragraph. Subtitle alone is22px desktop/19.5px at480px/below; Join us retains24/21px. Existing left alignment, page title, shared event overview/metadata and all other sections remain.

## Workshop-card actions — November 16

Learn more precedes Interest form visually and in keyboard order. Home’s featured card keeps its existing text Learn more action on the left and filled Interest form on the right, wrapping in that order when necessary. Events keeps its outlined Learn more and filled Interest form, now stacked in that order. Home’s ordinary upcoming event announcement uses the same outlined/filled pair in the right-hand stacked column, with speaker names limited to the date/title columns to its left (November16 follow-up). On phones, ordinary announcement/Events actions follow their existing content in a wrapping row. Labels, destinations and existing action treatments are preserved; past-event cards still have no buttons. The announcement action column spans the title and speaker rows and aligns to their top (matching DEC, per November16 follow-up), keeping the title row at its natural height. Phone names retain full width. This supersedes the earlier ordinary-announcement Learn more text link below the names.

November16 workshop founders: synchronize one/two-line names using per-card inline-size containment and a10.1em surname-break threshold. Shafi / Goldwasser, Adam Tauman / Kalai, Vinod / Vaikuntanathan. Keep existing type, portrait sizes and three-column layout.

## Home feature width and prose rhythm — approved November17

Use1.035:1 intro columns with the existing20px gap throughout the side-by-side layout above520px. At full width the card left matches the reading-group action edge; as the shell narrows both columns shrink without reverting to the old proportions. Rachel clarified that readable paragraph spacing takes precedence over exact matching column bottoms. Prose keeps20px then15px gaps and aligns to its natural height, instead of expanding gaps to match the card. At520px/below retain the stacked layout and16/12px paragraph gaps. Keep text, type, card treatments and right edge unchanged. This supersedes the prior1.15:1 split and the matched-bottoms rule when it would stretch prose gaps.


## Upcoming seminar cards — approved November 19

All records in `src/data/seminars.json` → `upcoming` render automatically inside `.upcoming-seminar-cards` on Events; `src/pages/events.astro` owns the shared wrapper/styles. Apply this format to every new upcoming seminar, with no per-record opt-in or hand-styled HTML. Keep the series introduction, bold Zoom/time notice and seminar-announcement signup outside and above the cards. Preserve canonical article IDs, original seminar content, title/speaker/date/location and accessible abstract/biography control/default-open state.

Approved format: workshop-family pale fill mixing 10% accent with paper; a 0.75px outline mixing 60% accent with paper; 1.5px corners; 20px vertical/18px horizontal padding, reduced to 18px/14px at 525px and below. Card titles use 24px serif type with 1.25 leading and 9px below; leave 18px above the card list and 15px between multiple upcoming cards. Use shared paper/accent tokens so light/dark follow the site. Preserve the reviewed metadata-aligned 11px plus/dots, 33px minimum target, keyboard focus and disclosure behavior. This is the approved upcoming-seminar exception to the earlier unboxed seminar treatment, not a new global announcement/promotional rule.

Archiving a seminar into `talks` automatically removes the green box and uses the existing compact Past seminars treatment; retain archived logistics inside Event details. Seminars remain excluded from Home by default. The Events community heading is **Upcoming workshops and community events**; its shorter On this page label is **Upcoming workshops & events**, retaining #community-events. Publication evidence: CHANGELOG.


November20 workshop portrait refinement: Dylan’s supplied Katherine Taylor portrait uses CSS scale1.30 and origin35%0% (Rachel’s subsequent tiny zoom reduction) to align head size/centering with adjacent cards. Original image and shared People/Home framing remain unchanged. Yael’s visible credit retains Dana Quigley and CC BY-SA4.0 links without the parenthetical “cropped and resized”; asset provenance still records the crop. Both selected-photo credits remain above the footer.


November20 photo-credit audit: include confirmed exact-photo credits for Vincent Conitzer (Jared Lazarus / Duke Photography), Shafi Goldwasser (Ronen Goldman), and Vinod Vaikuntanathan (Lillie Paquette), alongside Dylan and Yael. Link clear professional/institutional source pages; do not infer a photographer from another photo of the same person. Host credits are matched to selected asset URLs. Rachel requested removing the separate visible CC BY-SA4.0 text from Yael’s credit; keep Dana Quigley linked to the Commons source with license/provenance recorded in the asset inventory. This supersedes the earlier visible-license-link treatment for Yael.


## Workshop talks and participant layout — approved November24

Rachel approved the reviewed workshop-specific redesign for publication. Use a720px maximum column throughout this page,600px/available width at760px/below. Talks use two horizontal portrait/text entries per desktop row and one below760px; exact18px Cardo talk headings lead16px speaker bylines, with24px main section labels and existing phone steps. Portrait columns132px (112px narrow phones) use minimum165px/140px heights and intrinsic equal rows to contain the longest text. Preserve the selected face pixels/crop variables, single Panels boundary and clear fixed-utility gutter.

Panel/spotlight/host squares are64px desktop/54px phone; panel/spotlight items have84px maximum width,18px horizontal gaps and left-aligned incomplete rows. Host list retains its reviewed600px maximum and24px/18px gaps. Small participant/host names use two lines. Panel block spacing is24px above and below before moderator text; spotlight list adds6px above. Tal precedes Yael; Zico precedes Jacob, with Jacob affiliation “MAISI, University” / “of Toronto”. Jacob remains a panelist only. RESI names/photos and inline moderators link to canonical People biographies with inherited type and visible focus. Credits remain tied to selected photos above the unchanged footer. This supersedes the earlier workshop-grid sizing instructions for this page only. See the November24 release record for publication/deployment evidence.


November24 workshop-layout publication confirmed: source PR354 /0a930c4 and generated production PR355 /48e37e9 are merged, Pages45430831695 succeeded, and ordinary live320–1280px plus full390px mobile visual/biography/Search checks passed. The approved workshop-specific rules above are now the live baseline; unrelated page standards remain unchanged.


## Work at RESI opportunity — November 24
Rachel approved replacing the People Work-card placeholder with a direct link labeled AI Safety Researcher to https://academicjobsonline.org/ajo/jobs/33484. This supersedes the earlier unlinked details-coming instruction for that line only; retain culture, dated hiring outlook, layout and other opportunities. The full RESI job-page design remains preview-only. Reuse approved AJO role wording, shared site fonts/themes/buttons, clear location/level/materials and Apply directly on AJO; no new employment commitments.


November24 superseding opportunity direction: Rachel approved publication of the full reviewed AI Safety Researcher page. People’s Work at RESI role link now goes to `/jobs/ai-safety-researcher/`; this page uses “← Work at RESI,” two “Apply on AJO” actions and the approved role/materials. Contact line uses the same14px muted color as the rolling-review note, with28px above it. This replaces the direct-to-AJO Work-card destination and preview-only hold for this page. Retain all other Work-card content/layout, actual AJO application target and shared design.


November24 Work-card refinement: label reads “Current opportunities:” with the AI Safety Researcher link on a separate line and8px above it. Keep the link’s clickable area limited to the title and target the RESI role page. Timing-notice wording remains under review.


November24 hiring-round notice approved: Rachel approved “Hiring update 2026: We expect positions in our current hiring round to begin in fall 2027.” This replaces the old over-the-coming-year notice in People → Join us → Work at RESI and matching Search excerpt. It describes the current hiring round; no individual-job or AJO start-date edit requested. Current opportunities colon/separate link/8px gap and internal job-page destination retained. Supersedes the pending wording decision and generic Anticipated start date recommendation for this card.


## Compact workshop mobile participant rows — approved November24

At635px/below, keep each panel, RESI spotlight group and hosts in a single portrait row. Participant counts drive flexible equal tracks; tighten horizontal and photo/name gaps, then let square photos shrink within their54px/64px caps. Hosts retain three columns with similarly tighter mobile gaps. Keep normal phone names12px; limit10.5px fallback labels to300px/below. Long names and Jacob’s affiliation can wrap naturally beneath their portraits rather than truncating. Preserve photo pixels/crops, People links, credits and24px panel block spacing. Above635px the existing desktop layout is unchanged. This supersedes the earlier wrapped mobile participant rows for this workshop only. Publication/live status is recorded in WORKLIST/CHANGELOG and the mobile-row brief.


## Workshop Program and general conduct policy — November25 published

The Dec4workshop now uses620px shared column,19px Cardo Bold name-first speaker headings and15.5px IBM Plex Sans talk titles (existing mobile steps retained). Section order is Speakers,Panelists,RESI research spotlights,Program,hosts/practical information. Portrait-side titles link plainly into exact timetable rows; only panels/spotlights link back from Program. Chronological Program heading uses local Eastern/subject-to-change note. This is workshop-specific hierarchy, not a sitewide font change. Preserve approved crops/credits and interest-not-admission wording.

/code-of-conduct/ is the general event policy for RESI workshops,seminars and community events with conduct@resi.org reporting; it has workshop/Events return links and is linked from workshop practical information. Old workshop policy route redirects. Policy wording/scope/reporting channel changes need organizer authorization; do not invent response/confidentiality/enforcement commitments. No global/header/footer/homepage policy placement was authorized. SourcePR386/productionPR387; live verified.


## Workshop refinements — November25 approved for publication

Rachel approved the complete current4515preview. This supersedes earlier preview-only holds and conflicting historical workshop rules for this reviewed scope. Column remains620px. Subtitle uses normal wrapping and −0.005em tracking only where full620px fits (viewport656px+), retaining22px/19.5px fonts; full-width description is3lines. Intro groups date/location/in-person on the first desktop row and9am–5pm/check-in-and-breakfast-from8:30am on the next, all12.75px/600. Remove redundant Full day and separate timing/program-pointer sentence on detail page only; shared event cards unchanged. Desktop speaker photo/copy gap12px, talk-title top margin18px; current speaker type unchanged.

Workshop-only approved portrait framing is canonical in workshop-portraits.ts and workshop-participant-portraits.ts. Yael’s main1.28scale crop and close1.35scale square crop are independent. Keep current approved Anat/Dylan/AdamGleave framing and small Nicola/Yael/Martha/Tal headroom. Shared People/Home framing and actual pixels/assets remain untouched. Nicola cannot be uniformly zoomed out further without a wider original or new background treatment.

Code of conduct link belongs beneath the lower interest/admission note, outside Getting here:12pxfont/700weight,24pxmargin above. Lower invitation uses12px top padding/36px bottom padding. Policy content/reporting address/general route and all credits/footer-last rule remain. Publication/live evidence follows in CHANGELOG/WORKLIST.


November25 workshop refinements are PUBLISHED AND LIVE VERIFIED: sourcePR389/b9e3d2e,productionPR390/4c59ed2,successfulPages45717222391. The approved current framing/three-line intro/grouped timing/bold lower conduct-link rules above are live. Actual320–1280px and native links/redirect checked; see workshop brief/CHANGELOG for exact evidence.


## Integrated workshop program — approved November 27

Rachel selected the current integrated program for canonical publication. Use the existing 620px column and chronological time-left rows throughout. Main talks use 112px-wide portraits (140px minimum height, longer text may extend), title-first 21px Cardo Bold, then 16px Plex Sans names and existing muted affiliations. Preserve the reviewed responsive title/portrait arrangement and smaller grouped panel/spotlight/host photos. Fold the existing people/session facts into the timetable rather than repeating the separate full speaker/talk gallery. Spotlight names/photos/moderator remain, but individual spotlight titles and pending/working labels are temporarily omitted. Keep selected portrait pixels, credits, content, times and canonical metadata intact; retain older section anchors as aliases. This supersedes the earlier separate Speakers/Panelists/Spotlights/Program section layout for this workshop only. The uniform 54px-square composition remains a separate unlisted preview and is not selected as the canonical design. See the layout-options brief for publication and live-verification status.


November27 uniform-square alternative: Rachel’s sketch calls for centered head-and-shoulders framing with visible hair/headroom, using Shafi/Adam/Vinod as references. Compact-only crop data keeps the taller approved main portraits independent. Nickolai may remain closer because his wider supplied photo has limited headroom. Anat uses exact People asset/framing. Use CSS cropping rather than face retouching; keep credits tied to their selected assets. This is an unlisted alternative, not a new sitewide portrait rule.
