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


## November 27 — workshop layout previews and Martha update published

Source [PR 403](https://github.com/resi-org/resi-org.github.io/pull/403) merged at `f2a936ade7c5e18b21b873b51e015a80d4882176`. Generated-only [PR 404](https://github.com/resi-org/resi-org.github.io/pull/404) merged at `7edfbeea3648951bf05f1b70e241d5e57f66ae4c`. Pages run `46034693144` succeeded; the Pages API reported that exact production revision built. Ordinary public responses and Martha’s optimized image match the reviewed build byte for byte.

Shareable, unlisted and noindex: [portrait roster](https://resi.org/previews/workshop-portraits/) and [integrated program](https://resi.org/previews/workshop-integrated-program/). The canonical workshop retains its layout; only Martha’s AAPSS photo and 5% lower framing changed. Both previews carry the same correction. Neither alternative is approved to replace the canonical layout.

Live browser verification: the roster has four columns at 1280/651px and two at 650/390/320px, with 12 speakers, no speaker-section talk titles, overflow or missing fragments. The integrated program was checked at 1280/320px: 26 sessions, 12 main portraits, all 29 images loaded, smaller participant groups in one row, no copy below portraits, duplicate IDs or missing fragments; the Panelists jump works. The canonical Martha image loads at 1280px with a 3.2px downward shift and at 390px with a 2.7px shift; no overflow and the smaller portrait groups remain in one row. Structural comparison preserves seven credits, Maps and conduct links, approved program content and current registration wording. No forms were submitted. These checks do not include a physical phone or spoken screen reader.

Evidence is in `output/resi-workshop-two-options-nov27/output/proof`, `content-release-checks.json` and `publication-files.json`. The two temporary servers owned by this task were stopped; the earlier 4515 preview, original dirty checkout and unrelated PR 150 were preserved. Rachel confirmed that W1–W4 are complete and asked to retire that tracking; this is follow-up design work. Next action: Rachel and Adam review the two alternatives before any canonical layout change.


## November 27 — integrated preview contents correction

Rachel requested accurate top contents links for the integrated-program preview. Its menu now lists only Program (#schedule) and Getting here (#directions), matching the two actual main sections; speakers, panelists and spotlights are integrated into Program. The portrait-roster menu and canonical workshop are unchanged. Astro check: 65 files, zero errors/warnings/hints; build passed. Generated comparison finds exactly one changed production file, the integrated preview HTML, and that file differs only in its contents navigation. Both contents jumps passed the local browser check. Source PR 406 merged at `d9f25554a5591dc5712fe371efe8a6398fb91756`; the single-file generated PR 407 merged at `8e244f0f48ee7f074a1a78f231e8f80c5f963433`. Pages run `46036599020` succeeded, and the Pages API reports that exact production revision built. The ordinary public HTML matches the reviewed build byte for byte. Both live links jump to their correctly labeled headings beneath the fixed header (Program top 168px, Getting here top 213px at 1280px). Screenshot: `output/proof/integrated-contents-live.png` in the isolated source checkout. The owned local server was stopped. The preview remains unlisted/noindex; canonical and roster pages are unchanged.
