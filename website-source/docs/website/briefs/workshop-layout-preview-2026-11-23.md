# Workshop layout and participant portraits — November 23 preview

**Unpublished. Do not publish or merge this application preview without Rachel’s approval.**

- Local review URL: http://127.0.0.1:4513/workshops/safe-by-design-superintelligence/#speakers
- Isolated checkout: /Users/rachelsipser/Documents/GitHub/resi-website/output/resi-workshop-layout-preview-nov23
- Branch: codex/workshop-layout-preview-nov23
- Baseline source: cc4ef58; production observed00f07c1, including independent /inaug and seminar Zoom endpoints. Neither production nor the original dirty checkout’s application files were changed.
- Local static preview session33805 remains running for Rachel’s review. Rebuild website-source/dist after application edits; server serves dist on4513.

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
