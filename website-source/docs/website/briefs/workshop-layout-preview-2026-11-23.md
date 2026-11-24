# Workshop layout and participant portraits — November 23 preview

**Unpublished. Do not publish or merge this application preview without Rachel’s approval.**

- Local review URL: http://127.0.0.1:4513/workshops/safe-by-design-superintelligence/#speakers
- Isolated checkout: /Users/rachelsipser/Documents/GitHub/resi-website/output/resi-workshop-layout-preview-nov23
- Branch: codex/workshop-layout-preview-nov23
- Baseline source: cc4ef58; production observed00f07c1, including independent /inaug and seminar Zoom endpoints. Neither production nor the original dirty checkout’s application files were changed.
- Local static preview session33805 remains running for Rachel’s review. Rebuild website-source/dist after application edits; server serves dist on4513.

## Current revision6: full-column continuity and tighter participant rows — November24 (UNPUBLISHED)

Rachel requested the rest of the page match the720px opening/talk column, tighter left-aligned panelist photos, unchanged host photo spacing, Yael last after Tal, and Jacob last after Zico with “of” beginning the second affiliation line. She then requested spotlight spacing match the panelists.

All workshop sections, closing invitation and photography credits now share the720px maximum and matching left/right edges; at760px/below they share the600px/available-width cap. The shared site footer remains unchanged and last. Panel and spotlight lists use the same compact84px maximum item width and18px horizontal gap, left aligned even on incomplete rows; below320px-level available width the items shrink to fit three. Portrait dimensions/crops/type are unchanged. Host list retains its prior600px maximum and24px/18px responsive gaps, so host photo distances remain unchanged even as its section boundary aligns to the wider column. Canonical panel participant arrays swap Tal/Yael and Zico/Jacob; no participant or affiliation facts change. Jacob’s displayed affiliation breaks as “MAISI, University” / “of Toronto”.

Current source/prod refs re-fetched unchanged atcc4ef58/00f07c1; open PR150 remains unrelated. Fresh check59files/zero diagnostics and build passed; final CSS-only consolidation rebuilt successfully. Geometry at actual320/390/550/760/915/1280px confirms shared widths, no horizontal overflow, all29 images loaded, left panel alignment, unchanged host pitches, Jacob’s two lines. Final panel/spotlight equality at320/390/760/1280px confirms identical item widths/gaps/alignment. Desktop visual review confirms ordering and spacing. Mobile geometry passed; browser mobile captures were clipped and are not full visual proof. No forms submitted or physical device test. Viewport reset;4513 preview left at#program. No push, merge or publication.

Evidence: output/workshop-layout-proof/panel-spacing-nov24.json, spotlight-spacing-nov24.json and panel-spotlight-spacing-nov24-preview.png; panel-spotlight-spacing-nov24-detail.png is the review crop. All earlier preview changes remain unpublished.

## Earlier revision5: aligned opening and modestly narrower talks — November24 (UNPUBLISHED)

Rachel requested matching the opening section to the Speakers and talks width, then testing a further modest narrowing only if alignment stayed intact. Both sections now share720px maximum width and the same left/right edges (previous talks760px, opening600px). At760px/below they share the existing600px/available-width rule. All typography, image assets/crop variables, event facts, section order, panel/spotlight/host styles and biography links are preserved. Workshop utility offset follows the narrower column with the same clear gutter.

Kept the720px trial after visual and geometry review: two desktop entries remain aligned at their photo tops and bottoms; the longest text fits within the photo height. Text columns are195px. Longer wrapping makes desktop portrait frames about132×186px and the speaker section1436px high, compared with revision4’s132×165px and1308.5px. This is a modest extra vertical cost of the requested narrower reading width. Phone layout retains its existing widths and sizing.

Fresh Astro check59files/zero diagnostics and build passed. Actual observed CSS widths320/390/550/760/767/915/1280px: matching hero/speaker edges and widths, no horizontal overflow, no speaker text below its image, paired desktop rows aligned. Desktop longest titles and390px phone reviewed visually. Browser viewport override reset and4513 preview left open at#top. No forms submitted or physical-device testing. No publication, push or merge.

Proof: output/workshop-layout-proof/hero-alignment-nov24.json, hero-alignment-nov24-desktop.png, hero-alignment-nov24-long.png, hero-alignment-nov24-mobile.png and hero-alignment-nov24-preview.png; hero-alignment-nov24-detail.png is a review crop. This supersedes revision4 widths only and remains a local trial awaiting Rachel’s review.

## Earlier revision4: narrower column and reduced portrait height — November24 (UNPUBLISHED)

Rachel requested stronger Speakers and talks, Panels and RESI research spotlights section headings, smaller talk/panel titles, a narrower speaker area, and reconsideration of the duplicated rules above Panels. She then clarified that revision3’s portraits were larger/taller than necessary: text may finish exactly at the photo bottom, without surplus height.

A literal size swap would have been invisible because the prior requested section headings and talk titles both measured21px. The trial therefore uses24px section headings and18px talk/panel titles; phones use21px/17.25px, and350px/below20px/16.5px. All three requested section labels share the same larger scale. Speaker names stay at the previously requested16px/15px. Serif/sans families, weights and tokens remain unchanged.

The desktop speaker section narrows840→760px. Photo columns reduce160→132px, with132×165px baseline frames and intrinsic equal grid rows driven by actual text. Portrait images are positioned inside their frames so intrinsic source dimensions no longer impose unnecessary height. Frames can grow when a longer text block needs it; phone132px and narrow-phone112px widths remain from revision3, with165px/140px baseline heights respectively. Original images/crop variables are unchanged. At1280px, Anat and Nickolai finish within about1.3/1.8px of their photo bottoms. At320px they finish flush/within0.5px. Wider single-column layouts retain a sensible portrait minimum even when their text wraps less. No text truncation or disclosure.

One boundary rule above Panels remains: the shared Panels section divider. Removed the redundant bottom rules only from the final speaker row (both entries on desktop, only final entry when stacked). Earlier row separators stay intact. Workshop-only fixed utility position moves to follow the narrower content with a clear gutter. All selected smaller photos, Tal/Jacob choices/credits,17 two-line captions,29 biography links, event facts, roles/order and other sections from revision3 are preserved.

Verification: fresh check59files/zero diagnostics and build pass; whitespace check passes. Observed320/390/550/760/768/915/1024/1280px: no horizontal overflow; all talk/name/affiliation blocks end within photo height. Main desktop section760px, main frames132×165px (last row165.5px because removing its border changes the track remainder by0.5px). Section headings24px versus18px titles; phone steps measured as above. Main section1308.5px high at1280px. Final speaker row has no bottom rule and Panels retains its single top rule; phone penultimate row still has its ordinary separator. Utility clearance19.5px on checked desktop widths. Full main portrait framing and long phone entries visually reviewed. No forms submitted, no physical-device/spoken screen-reader session. Viewport reset and preview left open at#speakers. No publication, push or merge.

Evidence: output/workshop-layout-proof/compact-nov24.json, compact-nov24-desktop.png, compact-nov24-long-desktop.png, compact-nov24-phone.png and compact-nov24-long-phone.png; compact-nov24-top-detail.png/compact-nov24-long-detail.png are review crops. Same4513 preview and isolated branch; this is a reversible design trial awaiting Rachel’s review, not a published standard.

## Earlier revision3: sizing, names and biography links — November24 (UNPUBLISHED)

Rachel requested larger speaker names, then larger main portraits to contain the longest talk/name/affiliation blocks;20% smaller panelist/spotlight/host squares; closer Tal framing; larger panel titles and Speakers and talks/Panels headings; consistently two-line small-portrait names; Jacob’s earlier image; and plain links from RESI team names/photos to their People biographies.

- Main speaker names:16px desktop/15px phone, same Plex Sans weight500. Main frames use a160px column,225px minimum height and equal intrinsic grid rows; actual common desktop frames are160×240px at1280px, growing to261.2px tall at768px to fit the longer copy. Phone frames132×200px at390px,112×206.25px at320px. Uniform frames at each width expand with the longest entry rather than leaving text below a shorter photo. All selected image bytes/main crop variables are unchanged.
- Smaller squares:64×64px desktop and54×54px phone, exactly80% of the prior80px/67.5px. Applies to both panels, five spotlights and three hosts. Panel rows remain left-aligned; spotlight arrangement unchanged.
- Panel titles and Speakers and talks/Panels section headings share the actual talk-title size/face:21px Cardo bold,18.75px on phones and18px at350px/below. Other section headings are unchanged.
- All17 panelist/spotlight/host name placements split into two lines before the final surname. Moderator captions retain their inline names and wording.
- Tal: selected IU source unchanged, CSS scale1.5/top origin. Jacob: earlier jacob-tsimerman.jpg from Simons Foundation via Commons restored with its attached credit/license. Remains a panelist only; twelve main speakers unchanged. Personal Toronto alternate is no longer selected. Seven credit lines remain above footer.
- WorkshopBioLink wraps team names/photos and inline moderator names with links derived from canonical People IDs; it inherits font/color and removes no existing visual treatment. There are29 links to12 valid existing People targets. No links are invented for external participants. Keyboard focus is visible without changing normal appearance. WorkshopNameLines supplies the consistent small-portrait name breaks.

Verification: latest Astro check59files,0errors/warnings/hints; build and whitespace review pass. Observed320/390/550/760/768/915/1024/1280px: no horizontal overflow, every talk/name/affiliation block fits within its portrait height, both panel titles and requested section headings match talk sizes, all17 names are exactly two lines, and all small squares match the requested64px/54px. Link computed fonts/colors match parents with no underline. Fixed utilities remain clear. All29 photos loaded. Static People-target audit finds29 links,12 unique targets,zero missing IDs. Keyboard Tab to Miranda’s name shows2px focus; Enter lands at her visible bio below the sticky header. Shafi’s portrait click reaches her correct visible bio. Moderator links retain inline font/color; no forced break. Phone dark theme and all main/participant/host portrait framing reviewed; light restored and viewport reset. No forms submitted; no physical-device or spoken screen-reader test.

Evidence: output/workshop-layout-proof/sizing-nov24.json, nov24-bio-targets.json, nov24-speakers-desktop.png, nov24-speakers-middle.png, nov24-panels-desktop.png, nov24-spotlights-hosts.png and nov24-panels-mobile.png; cropped nov24-speakers-detail.png/nov24-panels-detail.png for review. Same4513 URL, source/production baselinecc4ef58/00f07c1 verified current before edits; unrelated open PR150 preserved. No People/Home/event-data edits, no image synthesis, no source merge, push or production publication. Larger main portraits add vertical length by request. Keep the preview available for Rachel’s review; publication still requires approval.

## Earlier revision2: prominent talk titles, November23

Rachel requested another unpublished layout because the first preview made talk titles too quiet. This revision supersedes the four-column/12px-title treatment described in the earlier version record below. Current source/production references are unchanged (cc4ef58/00f07c1); open PR150 is an unrelated working-group preview.

The talks section alone widens to840px and uses two columns of horizontal portrait/text entries above760px. The hero, panels, spotlights, hosts, invitations and credits retain the600px reading width. Each exact talk title becomes the h3, using the existing Cardo serif at21px/1.25 bold; speaker name and affiliation form a smaller Plex Sans byline below. Portraits retain132×165px and all selected sources/framing. Fine rules and18px row spacing separate entries. No title shortening, hidden text, invented schedule or copy changes. Zico’s pending title stays quieter. Below761px the entries stack; phone portraits are112×140px (96×120px at350px/below), with18.75px/18px titles. All remain original4:5 photographs. Incomplete two-column rows remain centered. The wide section reserves a gutter for fixed page utilities; their workshop-only right offset prevents overlap, while the shared footer link arrangement stays unchanged.

Compared with version1’s desktop speaker-section measurement1147.3px, the current section is1332.7px (about16% taller). The tradeoff is substantially larger, fully visible talk titles with the same desktop portraits. Single-column mobile/tablet entries use more vertical space; no claim is made that this version is the shortest alternative. Current page height at1280px is3430px.

Fresh final Astro check57 files: zero errors/warnings/hints. Build and git diff whitespace checks pass. Actual CSS viewport widths320/390/550/760/768/915/975/1280px show no horizontal overflow, escaped text or clipped titles. Fixed utility clearance at915/975/1280px is9/10.5/19.5px. The 256px extra probe still exposes the pre-existing unbreakable hero-title overflow, while speaker text is contained; no unrelated hero redesign was made. Long mobile titles visually reviewed, dark phone typography reviewed, light restored, and keyboard Enter on section jumps verified. All29 page portraits loaded during this revision’s browser review; six selected-photo credit entries remain before the footer. Event record, portrait data/assets, People/Home and other application routes are unchanged by this second revision. No forms submitted. Viewport reset; no physical-device or spoken screen-reader test.

Proof: output/workshop-layout-proof/talks-v2-responsive.json, talks-v2-desktop.png, talks-v2-desktop-detail.png, talks-v2-mobile.png and talks-v2-mobile-long.png. Browser screenshot/zoom state was normalized during QA; the final JSON reports actual observed CSS widths. Earlier overwritten intermediate captures are not final proof.

Fresh primary references and layout inference are recorded in [Talk layout references](../references/workshop-talk-layout-2026-11-23.md). This is still local-only at4513; do not merge or publish without Rachel’s approval.

## Earlier version1 record (superseded layout, retained evidence)

## Adam’s current changes reviewed and preserved

Read the published page after ordinary reload, current canonical event record and changes since the November20 portrait audit. Adam added11 exact talk titles; Zico’s title is pending. Current12-speaker order/affiliations are unchanged. Both panels now have confirmed participants and moderators: Cryptographic Resilience in the AI World (5 panelists, moderated by Vinod) and Academia and AI Safety (whose responsibility is it anyway?) (4 panelists, moderated by Shafi). Jacob remains a panelist only. RESI spotlights: Miranda, Greg, Sam, Jonathan and Neekon, moderated by Adam Tauman Kalai. Schedule notice says9am–5pm, breakfast/check-in8:30am. Section order: Speakers and talks → Panels → RESI research spotlights → Hosted by. All canonical wording/roles/order and stable anchors are preserved.

## Rachel’s preview direction

Rachel requested a more elegant layout plus small square participant portraits, explicitly draft-only. She then clarified that she prefers the larger speaker portraits from before Adam’s layout change and wants to limit page length.

The preview restores the earlier4:5 speaker photo dimensions:132×165px at the full600px content width, four columns636px viewport/wider, three481–635px and two480px/below. Names/affiliations retain the established hierarchy; talk titles use quieter12px Plex Sans instead of competing bold serif blocks. Subgrid aligns names, affiliations and talk-title starts within each row without truncating titles. All11 titles and the pending placeholder remain visible; no new disclosure interaction. Incomplete portrait rows remain centered. New plain section jump links support navigation. The existing program notice keeps its exact wording but uses ordinary body emphasis.

Panelists and spotlight researchers use80px squares, matching the hosts;67.5px at480px/below. Compact five-across desktop rows and three-across smaller rows center incomplete groups. Photos are static. Existing selected speaker photos/crops and People/Home assets/framing are unchanged. The5 spotlights and Ran use current People sources. Yael/Zico reuse their approved workshop photos for consistency. Six external photos come from personal/faculty profiles or provisional Simons fallbacks. See panel-portrait-sources-2026-11-23.md and the asset manifest. Virginia Alonso’s Nicola credit is attached to its photo; all credits deduplicate and remain above the footer.

## Validation

- Astro check57 files: zero errors/warnings/hints. Build passed.
- Current live speaker section at1280px:1110.945px. Preview:1147.320px (about3.3% taller despite larger photos and all titles). Whole desktop page2862→3298px, reflecting added participant portraits. These are desktop measurements, not a phone-height claim.
- Built preview320/390/550/768/1280px: no horizontal overflow;12 speakers,11 titles plus1 pending,9 panelists and5 spotlights; original4:5 speaker ratio restored; all14 added square placements exactly match host dimensions at each width.
- All29 workshop portrait placements load. Phone panels and desktop speakers/spotlights visually reviewed. Dark-theme phone view and keyboard Enter on Panels jump pass; light theme restored.
- Six credit lines, with Yael only once, Nicola/Virginia included, and footer last. No forms submitted. No physical-device or spoken screen-reader session.
- Evidence: output/workshop-layout-proof/ contains responsive-checks.json, source captures/new-photo metadata, before/after screenshots, full desktop preview and phone/dark panels.

This preview does not approve publication, altered event facts, additional speakers, image synthesis, a People/Home redesign or unrelated Events/working-group previews. Keep current continuing-source design rules unchanged until Rachel chooses the workshop design.


## Selected Tal Rabin portrait — November23 follow-up (UNPUBLISHED)

Rachel supplied an Indiana University image-search result and selected its exact color portrait. Added tal-rabin-iu.jpg (768×768,89707bytes) and switched only Tal’s participant-photo selection to it; original source pixels unchanged, square CSS scale1.2/top origin. Replaces the provisional grayscale Simons selection. No named photographer appears on the IU source page or in the image’s EXIF/IPTC metadata, so no invented credit was added. Provenance/hash recorded in the portrait manifest. Canonical Amazon affiliation/role and all other images/layouts are unchanged.

Fresh check57files/zero diagnostics and build pass. Loaded selected image confirmed at80px desktop and67.5px phone, with centered incomplete panel row and no390px overflow. Desktop/mobile square framing visually reviewed; viewport reset and preview left open at#program. Screenshot: output/workshop-layout-proof/tal-rabin-iu-panel.png. No publication.
