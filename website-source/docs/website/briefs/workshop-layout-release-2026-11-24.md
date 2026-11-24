# Workshop layout publication — November24, 2026

Rachel explicitly requested “Lets publish this” after reviewing the final local4513 layout, including the balanced panel spacing. This approves the complete reviewed workshop redesign through0fb2a10, superseding the preview-only hold for that scope. Other active previews/PR150 remain excluded.

## Approved scope

The canonical workshop at /workshops/safe-by-design-superintelligence/ uses a720px maximum column throughout; at760px/below the column is600px/available width. Twelve talks use paired horizontal portrait/title/byline rows above760px and one entry per row below. Section headings24px/talk titles18px (phone/narrow steps retained); names16px/15px.132px portraits,112px on narrow phones, grow only as required by the longest text, preserving row alignment. Exact talk titles remain visible; Zico’s title remains pending. Final speaker separator removed so Panels has one boundary.

Nine panelists and five RESI spotlights have64px squares/54px phone squares,84px-max items,18px horizontal gap and left-aligned incomplete rows. Host photos use the same smaller square sizes but retain their reviewed600px-list spacing. Small-portrait names use two lines. Tal’s selected Indiana University photo is closer; Jacob’s earlier Simons image is restored, as a panelist only. Tal precedes Yael; Zico precedes Jacob. Jacob affiliation displays “MAISI, University” / “of Toronto”. Panel participant blocks have24px above/below before moderator lines; spotlight list gains6px above. All selected image sources/crops, seven photo credits, roles/facts/order outside the two approved participant swaps and footer-last rule are preserved.

Team names/photos and inline moderator names link to canonical People biographies, inheriting existing typography. The workshop source uses WorkshopPortrait, WorkshopBioLink and WorkshopNameLines plus selected participant-photo data. People/Home assets and content are unchanged. Panel order in the canonical event record also updates its connected Search text. This is a workshop-specific layout; other pages retain their approved shared width/design.

## Release preparation and checks

Fresh fetched continuing sourcecc4ef58a0639c709664d3f9ef4321f36b4745c59 and production00f07c136f99367b632774b19a05afc78ebe3598 are unchanged from preview review. Only unrelated working-group PR150 is open. Source preview branch codex/workshop-layout-preview-nov23 remains isolated from the dirty original checkout. Publication checkout /private/tmp/resi-workshop-layout-publish-nov24 is based on current main; source and publication branches remain distinct.

Final Astro check59 files/zero errors/warnings/hints, all18 announcement-policy tests and production build passed. Earlier responsive/keyboard/biography-target checks remain in the preview brief. Publication preparation additionally captured a full390px mobile page and visually reviewed both panels, wrap/order/affiliation, and spotlight start, resolving the earlier clipped-mobile-capture limitation. Latest320/390/1280px geometry confirms equal24px panel gaps/no overflow; broader320–1280px evidence is in the preview brief. No forms submitted or physical-device/spoken screen-reader session.

Generated existing files differ from current production only for the workshop and Search. Package contains those two HTML files, the workshop-only CSS and five selected optimized participant images (eight files total). All19 referenced Astro assets exist in the package or unchanged production. Home, Events, People, metadata/canonical conventions, CNAME, .nojekyll, /inaug and independent seminar/reading-group endpoints are preserved. No obsolete asset deletion or whole-directory replacement. Source/publication/deployment and live verification are complete as recorded below.

Proof in isolated checkout output/workshop-layout-proof/: release-package-nov24.json, release-mobile-full-nov24.png, release-mobile-panels-nov24.png and earlier responsive/interaction records.


## November24 — workshop redesign published and live verified

Rachel approved the complete reviewed layout through0fb2a10. Source PR354 merged at0a930c4fec22b151b8a140b678f6812e82c06aa0; generated production PR355 merged at48e37e959d8016b07314b8a9cb41bba36113006d. Pages45430831695 succeeded. This supersedes the pending/unpublished status of the November23–24 workshop preview revisions for the reviewed scope; unrelated previews/PR150 remain separate.

Ordinary live workshop loads safe-by-design-superintelligence.Cg6wpc2_.css. Actual320/390/760/915/1280px checks confirm one shared column, no horizontal overflow, all talk/byline text contained within photos, identical left-aligned panel/spotlight spacing, equal24px panel gaps,29 loaded images,29 biography links, seven selected-photo credit lines and Footer last. Desktop and full390px mobile captures visually reviewed. Keyboard activation of Miranda’s link reaches her correct visible People biography at66.9px below the sticky header; live Search for Cryptographic Resilience follows to the canonical workshop. Canonical metadata and both interest URLs preserved. No forms submitted; no physical-device or spoken screen-reader session. Viewport reset; published page left open.

Release changed exactly eight production files: workshop/Search HTML, one workshop-only CSS and five optimized images. All other production files—including Home/Events/People, CNAME, .nojekyll, /inaug and independent endpoints—are preserved. Source and generated publication branches remained distinct. Release proof and limitations: briefs/workshop-layout-release-2026-11-24.md and isolated output/workshop-layout-proof/live-*nov24*, release-package-nov24.json, release-static-audit-nov24.json. The original dirty checkout and local4513 server remain preserved; use the live canonical page for sharing.
