# Workshop layout options and Martha portrait — November 27, 2026

Rachel authorized two anyone-with-the-link RESI-hosted preview options, unlinked from the public site's navigation, Search and sitemap. She separately authorized replacing Martha Minow's portrait on the currently published workshop, and then requested that Martha sit lower in all three versions. No approval to replace the canonical workshop with either alternative.

Source baseline279876f736231011db090dc0297a44d501ca052f; main baselineeb56c9f12dc5b4a59b490e32467d2b38ce36818b. Only unrelatedPR150 open on final pre-publication check. Original dirty checkout and earlier4515preview/research notes preserved. Implementation: output/resi-workshop-two-options-nov27; local built server4531 and development4530.

## Option1 — portrait roster

/previews/workshop-portraits/ uses a pure identity roster: approved photo/name/affiliation; no talk titles in the speaker section. Four equal portrait columns above650px, two at/below650px including320px;12speakers yield4–4–4 at full width. Four-by-five frames restore shorter portraits, retaining the existing image pixels and crop variables. Talk titles remain in Program; existing panels/spotlights/hosts remain separate.

## Option2 — integrated program

/previews/workshop-integrated-program/ places all12main portraits in their chronological talk slots. Panels and five research spotlights carry their smaller photo groups, with moderator lines and unchanged affiliations/pending titles. Shafi, Adam and Vinod appear with54pxphotos in their opening/overview/closing contributions, identified as RESIco-founders; no separate repeated host gallery. All26session IDs/times/titles remain aligned with canonical data. Existing talk/panel/spotlight fragment targets remain available in the option.

Compared144×180 and168×210 desktop main portraits. Larger treatment initially6147px total height; tightening session padding20→16px and time gap10→8px retained168×210 portraits at5967px, versus5932px on current live page at1280px. Thus no tiny-thumbnail fallback was needed. Mobile112px or100px portraits stretch only when needed to keep long copy within their height; smaller participant groups stay one row. These are observed local dimensions, not promises about all devices/font settings.

Both routes are noindex,nofollow, absent from Home/Events/Search/sitemap, with shared current Header/Footer/credits and data. The preview-only component is deliberately isolated from the canonical page so experiments do not alter the live layout. Source data follows newer organizer changes: no interest form/admission paragraph; no restoration of earlier removed copy.

## Martha — canonical plus both options

Original selected source https://www.aapss.org/fellows/fellow/martha-l-minow/ ; full supplied540×540PNG https://www.aapss.org/wp-content/uploads/2024/02/martha-minow.png . Source page names no photographer; no photographer attribution invented. New source asset martha-minow-aapss.png. Shared participant entry adds5%downward CSS shift (3.2px at64px), with a few pixels of background fill matching sampled top-edge tones. Original photograph and face pixels unaltered. This applies to the published page and both options through the same selected-photo entry.

## Verification and pending publication

Astrocheck65files: zero errors/warnings/hints; build passes;18existing announcement tests pass. Actual browser320/390/650/651/768/1280px checks: roster4/2columns as specified,12main portraits,no speaker talk titles; integrated12main portraits,26sessions,no copy below photo,no duplicate IDs/no missing local fragments,no horizontal overflow; all three small-photo groups remain one row. Desktop/mobile visual inspection includes long Nickolai/Anat titles, portrait framing, panels/spotlights and Martha.

Generated structural comparison preserves26session IDs/times/titles,29portrait instances and7existing credits in each option. All referenced image assets exist. Canonical body differs only in Martha's image URL/framing; build reorganizes identical existing workshop CSS rules into inline shared portrait CSS plus a new page stylesheet (combined rules verified identical). All other existing public HTML,Home/Events/Search/sitemap/domain/independent endpoints preserved. Publication manifest has exactly6files:3HTML,2CSS,1optimizedMarthaimage; no raw source images or .assetsignore emitted.

Evidence: output/content-release-checks.json, publication-files.json, local responsive metrics/screenshots. W1twooptions previewcomplete/publichostingpending; W2directions/W3conductpreserved; W4localpassed/liveverificationpending. Next: separate source/generated PRs, deployment and actual live inspections. Neither alternative is approved as canonical.
