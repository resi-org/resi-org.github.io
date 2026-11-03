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
- Native disclosures have plus/minus cues. Working-group tooltip text is lowercase details. Essential institutional meaning remains visible; provide accessible names and keyboard operation.
- Header, footer, contents menus and utility controls are shared. Later approved utility alignment follows the footer's right edge, superseding earlier content-column positioning trials. Preserve mobile in-flow controls.
- Review affected desktop/mobile layouts and light/dark interactions. Preserve reduced-motion behavior and stable focus/hover on the homepage portrait mosaic.

## Shared content and imagery

Research areas share src/data/research-agenda.json. The homepage highlights four under Key research areas; the full Research page retains the larger collection. Preserve current scientific order unless Rachel revisits it.

People records live in content/people/. Shared src/lib/portraits.ts supplies People and the homepage mosaic. Inspect both sizes after a framing change. Current settings supersede earlier successive zoom requests. Preserve face pixels; existing background extensions are intentional assets. New AI editing requires a requested image edit and careful visual review.

Founders precede researchers and operations. Research group leaders are prioritized. Later refinements place Chloé immediately before Sam and Miranda immediately before Ran. The visitor roster remains hidden; replacement policy and Adam Chlipala's eventual placement remain open.

## Editorial conventions

- Exact legal name: The Institute for Responsible Superintelligence. RESI is accepted shorthand.
- Cambridge, Massachusetts appears early in the homepage institutional introduction. Its repeated footer sentence was removed.
- Use precise plain copy and purposeful cross-links. Avoid repeating whole technical summaries/invitations across pages. Preserve scientific meaning and limitations.
- Safe by design is an aim supported by specified properties and assumptions. It does not establish a proof that an entire deployed system is safe. Retain empirical evaluation and independent checking.
- Foundational research is prior work by researchers associated with RESI. Use that phrase for related-paper metadata; verify authors, year and venue/status. Connect papers to groups/areas only when clearly justified. Do not present prior individual work as a new institute achievement.
- Homepage news metadata reads News · outlet · date; event metadata begins Events · followed by its approved announcement label. News-page source labels continue to identify the outlet, such as LessWrong or Boston Globe. Preserve original article titles and truthful attribution. Vague From the institute and Press labels were removed.
- Donation buttons use Support our work where applicable; retain intentional distinct actions such as header Support RESI and Donate online.
- Event dates, location, status and actions need confirmed facts. The December 4 workshop collects expressions of interest, not guaranteed places. Preserve approved wording pending a decision.
- Home shows only the three most recent announcements across News and community Events, sorted by announcement/publication date. Community event records in content/events drive their homepage cards and also drive Events; attendance dates remain separate from announcement dates. All public events must be eligible for the shared feed, but older items can be displaced by its three-item limit. Events supplies the workshop counterpart and retains a distinct RESI-MIT seminar section. The automatic missing-counterpart audit remains deferred; the Events publication includes the workshop counterpart. Archive past seminars with stable anchors and historical speaker bios.
- The AI Safety Reading Group participation route includes its interest form. Jobs/fellowships must describe actual opportunities; planning discussion does not establish an opening.
- Verify affiliations, supporters, regional claims, budgets, IP policy and hiring commitments. Pronoun conventions and several clarity edits remain open in WORKLIST.

November 3 Events request: reuse the exact shared homepage event card at the top of Events, with seminars beneath. Broader page layout and new cross-link placements await review. The approved Events H1 is “Community events, seminars, and workshops on the foundations of AI safety.” There is no subtitle. Preserve seminar-specific names when they describe the actual series; the page/navigation name is Events.

## Shared changes

Find the common component/data first, review dependencies in PAGES, implement the scoped edit and inspect affected contexts. Record a newly approved convention here only when it changes future work, with a short reason/date. Keep proposals and rejected trials in WORKLIST rather than promoting them to rules.


## Approved compact disclosure control — November 3

Rachel approved the working-group card control and authorized publication. Use a fine 14px plus/minus, 1.1px stroke, token-derived quieter accent color, and a 370ms rotating morph into four 3px dots whose outer bounds form the same 14px square. Preserve lowercase details, revealed on fine-pointer hover and keyboard focus at every viewport width; non-hover devices retain a visible hint. Expanded resting state is a minus. Reduced-motion preferences disable transitions.

On working-group cards, position the control as a card feature toward the lower-right corner, retain the compact 6px title/leader gap and natural text heights, and switch to one column at 600px before the current titles/leaders become cramped. Independently expanding desktop columns retain authored keyboard order. Do not restore synchronized tallest-title heights or the earlier narrow-width label exception.

The master design chat is RESI — Master website design (`01a1a1de-5ea7-7c53-b2ee-bc43d87896ae`). Keep broad design choices and consistency findings there and durable approvals here. Other card and inline disclosure contexts remain the next design task; publication of this approved control does not replace their existing labels or navigation semantics.
