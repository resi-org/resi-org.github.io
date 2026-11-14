# December 4 workshop launch — November 14, 2026

Rachel explicitly approved publishing the reviewed standalone workshop on resi.org and connecting all workshop Learn more links. This supersedes the separate preview-only hold for this page. The wider Master EVENTS preview and narrower working-group PR150 remain outside scope.

## Reviewed implementation

Canonical URL: https://resi.org/workshops/safe-by-design-superintelligence/. The page reproduces separate preview version38, retaining selected Boaz option1, Anat/Roy option2, approved portrait framing, panel copy, two interest invitations and attendance note. No alternative images or click-through controls. The source is migrated selectively into continuing source0064559, preserving later production9cd96e9 changes. Normal indexing, canonical/social URL, sitemap and event Search entry are enabled for production; the separate Sites preview remains unchanged.

One canonical event record feeds cards, detail page and Search. detailsHref supplies the new destination for the two existing Home workshop Learn more links, Events title/new Learn more action and the Search result. Existing /events#workshop and detail-page #speakers/#program/#hosts/#join-us remain stable. Existing interest form destinations are preserved.

Events card: small heading is Inaugural workshop; Events and Save the date are omitted there only. Rachel's exact new description aligns with the title on desktop. An outlined Learn more button sits below the filled Interest form button. Mobile puts both actions below the description, wrapping if necessary. Existing speaker/host lists remain, including the previously approved RESI and Hebrew University affiliation. Home's feature/announcement treatments remain unchanged apart from the shared destination.

Photo credits remain attached to each selected photo; no selected photo has a recorded photographer credit, so no empty credits section is rendered. Future credited images appear above Footer. Original face pixels/framing are preserved, including Adam's lossless PNG. [Asset provenance](../references/workshop-speaker-photos-2026-11-13/downloaded-assets.json) and [background provenance](../references/workshop-speaker-photos-2026-11-13/adam-gleave-background-extension.md).

## Verification and publication

Astro check55 files, zero diagnostics; all18 existing announcement-policy tests passed; production build passed. Local Events1280/900/600/390/320px: exact copy/kicker, summary/title left edge match, desktop action widths/stack, no horizontal overflow and all seven archived seminars preserved. Events Learn more followed successfully to the workshop. The detail page has normal production canonical metadata, no robots exclusion, eight selected portraits, two panels and two unchanged interest URLs. Both Home links target the canonical page; the three-item announcement feed remains. Search for Boaz Barak returns the workshop and follows to its detail page. Existing generated files differ from production only for Home, Events, Search and sitemap; all other generated files remain byte-identical. Home text outside workshop cards is unchanged. Original portrait files match the reviewed preview byte-for-byte. Actual publication revisions/live checks will be recorded after deployment. No forms submitted.


## Published and live verified

Source [PR227](https://github.com/resi-org/resi-org.github.io/pull/227): application1fe48701ad2420c5b121fca107263d4b8cb2f313, merged88502cfaf17003cad668c42301441065f3b9e406. Generated production [PR228](https://github.com/resi-org/resi-org.github.io/pull/228): applicationcfd011ba9c1ac5ae166034e2c5874fd48fae6653, merged4d90b476c1c8fd73518822860d9fc83d1e45338b. GitHub Pages run43652512678 succeeded. Ordinary live Home, Events and Search links followed to the canonical workshop; live900/390px checks confirmed exact card copy, desktop title/summary alignment and stacked actions, no overflow, eight loaded selected portraits, no photo-switching controls, two panel descriptions, two unchanged interest links, normal canonical/social URL, no noindex, and Footer last. Seven archived seminars, the three-entry Home feed, domain and independent endpoints are preserved. No forms submitted. Proof: output/workshop-launch-proof-nov14/live-events-card-desktop.png and live-checks.json. No physical-phone or spoken-screen-reader test.

Current production source remains the continuing source line. The separate preview is frozen at version38; do not use its older whole-site build for future production releases. The editable release checkout is /private/tmp/resi-workshop-launch-nov14, with documentation follow-up on codex/workshop-launch-live-records-nov14. Main-site URLs are now the review/share destination.
