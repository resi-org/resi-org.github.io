# Workshop layout and participant portraits — November 23 preview

**Unpublished. Do not publish or merge this application preview without Rachel’s approval.**

- Local review URL: http://127.0.0.1:4513/workshops/safe-by-design-superintelligence/#speakers
- Isolated checkout: /Users/rachelsipser/Documents/GitHub/resi-website/output/resi-workshop-layout-preview-nov23
- Branch: codex/workshop-layout-preview-nov23
- Baseline source: cc4ef58; production observed00f07c1, including independent /inaug and seminar Zoom endpoints. Neither production nor the original dirty checkout’s application files were changed.
- Local static preview session33805 remains running for Rachel’s review. Rebuild website-source/dist after application edits; server serves dist on4513.

## Current revision: prominent talk titles, November23

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
