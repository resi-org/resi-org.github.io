# Workshop compact mobile participant rows — November24, 2026

**Rachel approved publishing this reviewed layout on November24. Release preparation is underway; deployment/live verification pending.**

Preview: http://127.0.0.1:4514/workshops/safe-by-design-superintelligence/#program
Checkout: /Users/rachelsipser/Documents/GitHub/resi-website/output/resi-workshop-mobile-row-preview-nov24
Branch: codex/workshop-mobile-row-preview-nov24
Static preview server session41305 serves website-source/dist on4514 and remains available for Rachel’s review. Earlier4513 preview/live site are preserved.

## Requested behavior and implementation

Rachel asked the panels, spotlights and hosts to keep all portraits in one row on narrow/mobile screens, first reducing photo/name spacing, then photos, with smaller text only if necessary. Below636px, each panel/spotlight list uses a CSS grid with its actual participant count (five/four/five), flexible equal tracks, left alignment and a maximum84px item measure. Horizontal gaps ease down with the viewport; photo/name gaps reduce from9px toward3px. Square photos retain their54px/64px caps and shrink only when the available track needs it. Hosts keep three columns, with tighter mobile horizontal and photo/name gaps; their square photos are also constrained to available space. Desktop rules above635px are unchanged.

At320px the five-person photos are51.68px, four-person and host photos54px. Panel/spotlight horizontal gap6.4px; photo/name gap3.84px; host photo/name gap5.76px. At390px all small photos remain54px and names remain12px; their photo/name gap4.68px (hosts7.02px). No name-type reduction is needed at301px or above. At300px/below only, labels use10.5px and4px row gaps to contain the longest words;280px frames remain45.59px/five-person and54px/other groups. Normal phone affiliations retain11.25px. Longer names may gain a third line rather than being cut or colliding. Jacob’s two semantic affiliation spans can wrap naturally on phones; wide “MAISI, University” / “of Toronto” remains unchanged.

All photos/source pixels/framing, credits, roles, affiliations, order, talk layout, navigation, canonical metadata, interest URLs and People biography links are preserved. Existing24px panel block spacing remains. The older wider caption overhang for Jacob (88px text in84px item) is unchanged above635px and has no viewport overflow.

## Verification

Fresh Astro check60 files/zero diagnostics and build passed. Final CSS refinement rebuilt successfully; whitespace check passed. Actual widths280/300/320/350/390/480/550/635/636/760/1280px: all four groups have exactly one photo row, no viewport overflow. Below636px no caption overflows its own item. At normal phone sizes name fonts remain12px, above480px12.75px; only300px/below10.5px. Main roster12, biography links29 and photo credits7 unchanged; all29 images loaded at390px.320px/390px full-page crops visually reviewed through both panels, spotlights and hosts. Viewport reset; preview tab retained. No forms submitted, physical-device or spoken screen-reader session.

Fresh source/prod observed e7c0a35/dc55e3b. Open PR376 is unrelated connected-header documentation; PR150 remains the unrelated working-group trial. Current source header/hiring changes are included in this new checkout, without changing them. No pushes, PRs, merges or production changes for this mobile trial.

Proof in output/mobile-row-proof/: responsive.json,320-full.png,390-full.png and320-groups.png/390-groups.png. Full-page screenshots were used to avoid the clipped native phone captures seen earlier.


## Publication approval and release preparation

Rachel approved this preview for publication. Release source is codex/workshop-mobile-row-release-nov24 in /private/tmp/resi-workshop-layout-live-records-nov24, based on current5a983af, preserving the newer header release records. Generated publication is codex/publish-workshop-mobile-rows-nov24 in /private/tmp/resi-workshop-layout-publish-nov24 from currentmaindc55e3b. Fresh check60files/zero diagnostics and build passed; only workshop HTML and its CSS change. HTML audit confirms all differences are participant-count styles and the new CSS reference. Deployment/live verification pending. Earlier preview-only statements above describe the pre-approval stage and are superseded for the reviewed layout.
