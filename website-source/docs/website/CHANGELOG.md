# RESI website change log

Record material source and public changes with their scope and evidence. Keep Proposed, Preview, Published and Live verified distinct. Baseline reconciled November 2, 2026; do not treat it as a fresh verification on future dates.

## November 9, 2026: restore “AI safety”, published and live verified

Adam rejected the expanded acronym in About. Restored “AI safety” in its opening paragraph and matching Search excerpt, without adding the expanded phrase elsewhere. Recorded the audience-specific wording preference in DESIGN-AND-EDITORIAL. The homepage wording, SEO title, descriptions, organization data and share metadata from the preceding release remain unchanged.

Source [PR 144](https://github.com/resi-org/resi-org.github.io/pull/144), application bd21aec. Publication [PR 145](https://github.com/resi-org/resi-org.github.io/pull/145), application 0fe3aa2, merged at dc5999fd64c432ede283356fb8780d52029a57bc. [Pages run 42619123314](https://github.com/resi-org/resi-org.github.io/actions/runs/42619123314) succeeded. Astro check passed for 51 files with zero diagnostics; build and diff check passed. About/Search generated HTML differ from the prior release only by the exact phrase replacement; all 12 other generated HTML files match production. Verified the corrected paragraph and Search excerpt at ordinary live URLs. Screenshot: seo-release-2026-11-09/live-about-ai-safety.png in Adam's local release folder.

## November 9, 2026: minimal SEO refinements, published and live verified

Adam requested minimal SEO improvements and explicitly authorized publication. Pulled continuing source aa8d17f and production 1597909, with no open PRs. A clean baseline build matched all 14 production HTML routes exactly before editing.

Homepage title now includes RESI, the full institute name and AI Safety. Home/About descriptions are clearer. Shared Open Graph and X metadata use each page's title, description and canonical URL, plus the existing logo. Homepage-only ResearchOrganization JSON-LD records the public name, acronym, founders, Cambridge location and verified identity links (the existing LinkedIn/X profiles and the live Wikipedia article). No founding date or unverified institutional claims added.

Visible edits: add “AI safety” to the homepage's “independent nonprofit research institute”; expand About's “AI safety” to “artificial intelligence (AI) safety” once. Matching local Search excerpts are synchronized. Headings, layout, navigation, existing content, canonical URLs, robots/sitemap and independent endpoints are preserved. Larger content/URL changes and Search Console setup are outside this release.

Verification: Astro check passed for 51 files with zero diagnostics; production build and diff check passed. Compared all 14 generated HTML bodies with the baseline: only the two requested wording refinements and their Search excerpts differ. Validated matching descriptions/titles/social tags, unchanged canonicals and homepage-only parseable JSON-LD. Independent review found no blocking issues. Home/About desktop and 390px mobile visual checks passed, with no horizontal overflow, and local Search finds About for “artificial intelligence”.

Source [PR 141](https://github.com/resi-org/resi-org.github.io/pull/141), application 0fdeeb6, merged at c6a05776115443b2753ac5acef8f741d4ec858f0. Publication [PR 142](https://github.com/resi-org/resi-org.github.io/pull/142), application d56b2ff, merged at dd069cbc2f7ffb044fabc4da7ff1671357997952. [Pages run 42616333116](https://github.com/resi-org/resi-org.github.io/actions/runs/42616333116) succeeded. Only ten generated HTML files changed; every referenced CSS/JS asset remained byte-identical. Ordinary live Home/About verified the new copy, titles, descriptions, share tags and homepage organization data. Live Search finds the updated About excerpt for “artificial intelligence”. Screenshot retained in Adam's local seo-release-2026-11-09/live-homepage.png release folder. No claim of changed Google rankings or a newly generated knowledge panel.







## November 8 explanatory controls/mobile headings — published and live verified

Source [PR 135](https://github.com/resi-org/resi-org.github.io/pull/135), application 9291220, merged at ebea79238daaa3184202521d95c68fbd4a80e5cc. Generated publication [PR 136](https://github.com/resi-org/resi-org.github.io/pull/136), application f5e8543, merged at 1a5e9a0d387cb2d40ef71efc6d50e9dcf18c635b. [Pages run 42492297032](https://github.com/resi-org/resi-org.github.io/actions/runs/42492297032) succeeded. Scope exactly ten HTML files and three immutable CSS files; existing domain/endpoint/legacy files and recent Home/People changes preserved.

Ordinary live URLs verified: About has six inline click-only FAQ controls and no hint markup. Under an actually hovered pointer a closed mark stays 7×1.1px; clicking opens into 3px dots that remain after the pointer leaves. Research has 27 explanatory controls; foundational-paper closed hover produces 3px dots and details hint, with correct click open/close. All 16 rendered paper-author strings exactly equal the baseline source/publication values. Ten modern pages at 375/1280px all serve the new Base stylesheet, have no horizontal overflow and show expected mobile/desktop H1 sizes (Home 29.7/40px, other pages 28.05/33px). People retains all 21 publication-list triangles. Native FAQ Enter/Space names/state checks passed locally; earlier accessibility/touch/reduced-motion verification limits still apply (browser accessibility data/forced CSS rules, not spoken screen readers or physical-phone testing).

Author research is saved in [the comparison](references/foundational-author-style-comparison-2026-11-08.md): no single shared convention in the sampled primary pages. Recommended compact full-name treatment with a three-author cutoff is a proposal only. Existing public author lines and Search metadata were deliberately held. The full-name trial is not merged or published. Proof/audit files are in the master design visualization folder: published-faq-click-only-nov8.png and published-disclosures-audit-nov8.json.


## November 8 explanatory controls and mobile H1s — release prepared

Rachel authorized publishing the complete reviewed explanatory-control and mobile-heading work, added FAQ click-only animation and explicitly held author-name changes. Prepared clean source codex/disclosure-release-nov8 from continuing source 107b688 (production 41ca6d8, no open PRs at start). Copied the approved application changes from the isolated design preview; did not copy author data, researchers helper comment, collection README or the proposed full-name rule. Current author strings and Search text remain unchanged.

All 40 explanatory controls use the shared 14px/1.1px/370ms plus-to-four-dots treatment and native state. Expanded controls stay dots, collapse restores plus. FAQ moves the control after the question, aligns it with the final line, has no hint and excludes closed-state hover morphing; foundational papers keep hover animation/hint. Paper/seminar marks follow the final author/visible metadata line. Publication-list carets and navigation remain separate. Opening H1s scale exactly +10% up to 600px, including Home; other type and desktop sizes are unchanged.

Diagnostics: 0 errors/warnings/hints; build and diff check passed. Generated comparison against current production on all 14 HTML routes found equal visible content/order (excluding control labels), all 16 author strings exactly preserved. Publication output only updates 10 HTML files and adds three CSS files; domain and independent endpoints are untouched. Prior 90-case responsive/keyboard/accessibility/touch-rule/reduced-motion evidence is in the master design chat; Final release checks: all 40 controls open/close with no minus; FAQ under an actual hovered pointer stays 7×1.1px when closed, becomes 3px dots on click and stays dots after the pointer leaves. Foundational-paper closed hover shows 3px dots and details hint. Enter/Space and the native FAQ expanded state passed. Fifty release page/width checks across 320/375/600/601/1280px show no overflow or clipped 33px indicators. Source merge, publication/deployment and live verification are separate pending stages.


## November 8, 2026 — Reading Group before fellowships on mobile

Rachel requested the Reading Group before external fellowships when the Join us cards stack. DOM/keyboard sequence is Work → Visit → Reading Group → Fellowships; desktop grid explicitly retains Fellowships left / Reading Group right. No card copy or links changed.

Source application 401b441, [PR 132](https://github.com/resi-org/resi-org.github.io/pull/132) merged ee187225e5d8693752af1b90b820b83fa11c8e83. Publication d026b7a, [PR 133](https://github.com/resi-org/resi-org.github.io/pull/133) merged 41ca6d8aa8087f6ae03c843d169f0558ab4a798e. Pages run 42486937680 succeeded. Exactly People HTML changed; other pages, shared assets and endpoints were preserved.

Diagnostics/build/diff checks passed. Local and ordinary live 1280px desktop positions and 390px stacked order verified, with no horizontal overflow. Card content was compared unchanged and People outside Join us/styles matched preceding production after normalizing scoped attributes. Live mobile screenshot: `Join-us-mobile-order-live-Nov8.jpg` in this chat’s visualization artifacts.


## November 8, 2026 — Join us published and live verified

- Rachel explicitly requested publishing the reviewed Join us section. Source [PR 128](https://github.com/resi-org/resi-org.github.io/pull/128), application c625f77, merged at c976a1887246cb270bb10a9ab91a933c6f46d969. Publication [PR 129](https://github.com/resi-org/resi-org.github.io/pull/129), generated commit 819a926, merged at f2944a80a1f4f78264161135e92c4eff34d07177. [Pages run 42484929951](https://github.com/resi-org/resi-org.github.io/actions/runs/42484929951) completed successfully.
- Live People now includes Work at RESI with unchanged culture, unlinked “Current opportunities — details coming.”, and the inline **Hiring update, Nov 2026:** We anticipate application review and hiring to take place over the coming year. Visit, CBAI/MATS/Pivotal/SPAR, Reading Group and mailing lists retain their reviewed text/links. Reading Group heading uses natural height.
- Astro check/build and diff checks passed. Ordinary live People verified at 1280px (paired card heights 270.34375px and 261.875px) and 390px (one column, no overflow). Inline hiring label, all four fellowship destinations, preserved anchors and CBAI Search result verified. Screenshot: `Join-us-live-Nov8.jpg` in this chat’s visualization artifacts.
- Publication changes exactly People/Search HTML. People outside Join us/styles matches preceding production after scoped-attribute normalization; shared Base CSS is byte-identical. Existing People order, navigation, Home and independent endpoints are preserved. No Jobs page or application link added. November 5 preview-only restriction is superseded for this approved section; other previews remain separate.


## November 8, 2026 — Join us publication approved; release prepared

Rachel explicitly requested publication of the reviewed section. Prepared latest final wording and natural Reading Group heading spacing on source a9f35cd, preserving the later People order and desktop navigation. Diagnostics passed with zero errors/warnings/hints and build passed (existing empty partners-data notice). Generated People matches current production outside Join us/styles after normalizing scoped attributes; Search adds exactly the two corresponding entries. Existing Base asset is byte-identical. Publication diff contains only People/Search HTML. No Jobs or application link added. Source merge, deployment and live verification are pending at this stage.

## November 6 navigation underline correction — published and live verified

Rachel clarified that the current-page label should be bold without an underline. Added `text-decoration: none` to the same desktop current-page rule, retaining weight 700, Home exclusion, mobile styling and keyboard focus. Source PR 125; publication PR 126 at `fc6a5b17d156430bb384e7ae8f84b5095fa25e98`, Pages run 42306880896. Astro diagnostics returned zero errors/warnings/hints; build passed. Local checks across all six main routes show weight 700 and decoration none; Home has no current menu label. The generated stylesheet is identical to the previous version apart from this declaration; page HTML changes only its stylesheet URL. Public content and pending previews are preserved. Pages run 42306880896 succeeded. Live Research with release query `?release=fc6a5b1` confirmed the new stylesheet, weight 700 and decoration none; ordinary URL initially retained the preceding stylesheet in cache. Screenshot: original workspace `output/live-navigation-bold-only-nov6.jpg`.


## November 6 desktop current-page navigation — published and live verified

Rachel requested bold current-page labels whenever the full header navigation is visible, with Home excluded. Added one screen-only `.desktop-nav a[aria-current='page']` rule at weight 700. Existing current-page semantics, mobile menu, hover/focus treatments and links remain unchanged.

Source baseline bea4d1e; production baseline 2f9c948; no open PRs at start. Isolated source `/private/tmp/resi-desktop-nav-nov6` preserves the dirty shared checkout and pending careers/Home previews. Astro diagnostics: zero errors/warnings/hints; build passed. Browser checks confirmed exactly one bold label on About/Research/People/Events/News/Support and none on Home, all others weight 400; 915px longest-label header fits, and 390px mobile navigation opens with unchanged weight and no overflow. Publication stylesheet is byte-identical to the current Base CSS after removing the single new declaration. Existing production HTML changes only its Base CSS URL; no preview page contents, domain settings or independent endpoints are copied from the build. Source [PR 122](https://github.com/resi-org/resi-org.github.io/pull/122) merged at `5c3c66eff9145731c6aa3ca5974fd35fb877260b`; publication [PR 123](https://github.com/resi-org/resi-org.github.io/pull/123) merged at `c826b016d75909f5cf897ba8735bde121e216600`. Pages [run 42302275646](https://github.com/resi-org/resi-org.github.io/actions/runs/42302275646) succeeded. Ordinary live checks confirmed each of the six main pages has exactly its corresponding label at 700, all others at 400, with none bold on Home and no overflow. Screenshot: original workspace `output/live-desktop-current-navigation-nov6.jpg`. No forms submitted.


## November 5 mobile feature-card spacing correction — published and live verified

Rachel confirmed the current mobile placement and requested tighter spacing, especially above Inaugural community workshop, with standard site line spacing. At 520px and below, the intro card now uses the ordinary 12px card row rhythm and a 4px upward optical adjustment for the metadata row, yielding an 8px gap beneath Save the date instead of 18px. Body font size/line height, copy, links and heading → event → introduction order are unchanged. Desktop balance and ordinary Home/Events cards are unaffected.

Source application commit `e1fb4da38ab4589474d4e3f2c418ec175bbf2249` is in [PR 120](https://github.com/resi-org/resi-org.github.io/pull/120). Publication [PR 121](https://github.com/resi-org/resi-org.github.io/pull/121) merged at `2f9c948f504e0ffa7bfefa13c4c39f88cc7c445e`; Pages [run 42129287517](https://github.com/resi-org/resi-org.github.io/actions/runs/42129287517) succeeded. Git pushes failed with GitHub commit_refs_rules errors; the same reviewed changes were saved via GitHub’s standard Git-data API, then published through the normal separate source/publication pull requests. No force updates or direct main commit were used. Generated scope is Home’s event-CSS reference and one new stylesheet; every other production file is preserved.

Astro check: zero diagnostics; build and diff checks passed. Local 320/390/520px review showed an 8px heading/label gap with no overflow; 1280px retained equal prose/card bottoms. Ordinary live https://resi.org/ at 390px confirmed the 8px gap, unchanged below-heading placement, no overflow, and identical 21.0375px body leading in the featured and standard event cards. Screenshot: original workspace `output/home-workshop-nov5/live-mobile-spacing-fixed.jpg`. No forms submitted. Current mobile placement is confirmed; after-definition option remains an unpublished earlier trial. Comparison option 1 now points at the corrected release server, http://127.0.0.1:4413/.


## November 5 approved homepage intro/event design — published and live verified

Rachel explicitly requested publication of the reviewed balanced layout from preview `c98f027`, then asked for two mobile-order previews. Release source was isolated from current continuing source `4f4fba1`; only HomePage.astro and WorkshopCallout.astro were copied from the reviewed preview. Source application `a8245fe` is carried in [PR 118](https://github.com/resi-org/resi-org.github.io/pull/118). Generated publication [PR 119](https://github.com/resi-org/resi-org.github.io/pull/119) merged at `6a42686dd0cc220287d6c74db88bb8d0aec2122a` from current production `5176391`; Pages [run 42126278029](https://github.com/resi-org/resi-org.github.io/actions/runs/42126278029) succeeded.

Published scope is index.html plus its new Home and event CSS files. The shared Base stylesheet is identical; every other production file is preserved, including People reorder PR 117, careers rollback PR 114, Events/News/Search, domain files and independent endpoints. The ordinary Announcements card and full three-entry feed remain. Astro check returned zero diagnostics and build/diff checks passed. Local desktop/390px reviewed; ordinary live https://resi.org/ verified at 1280px and 320px: 600px opening, full-width H1, matched prose/card bottoms, three full-width-row actions with correct links, two workshop presentations, unique headings, no overflow and current stacked heading → event → intro order. No form submitted. Live screenshots: original workspace `output/home-workshop-nov5/live-reviewed-desktop.jpg` and `live-reviewed-mobile.jpg`.

Two requested mobile previews are available at http://127.0.0.1:4412/ with 320/390/480/520px selection and independently scrolling frames. Option 1 uses the published order (release server http://127.0.0.1:4410/). Option 2 puts the event after the Safe by design definition and before the As AI systems become more capable paragraph; it stays isolated and unpublished on `codex/home-mobile-after-definition-nov5`, http://127.0.0.1:4408/. It reuses the exact shared event and hides the inactive responsive counterpart, with distinct IDs; the visible mobile accessibility order matches the requested order. Option 2 passed diagnostics/build, 390px and 320px placement/no-overflow checks; comparison at 520px inspected. No alternative source or comparison page enters production. Side-by-side screenshot: original workspace `output/home-workshop-nov5/mobile-comparison.jpg`. Rachel’s choice remains open.


## November 5 — careers publication corrected; preview retained

Rachel clarified that publication of the whole careers-section change was not authorized; the simple-text standing instruction had been applied too broadly to the pending section. She explicitly requested restoration of the previous live People/Search pages. [Rollback PR 114](https://github.com/resi-org/resi-org.github.io/pull/114), generated commit aefd2e3, merged at `7efabab0df2406e82b1a7a9b29da4879bf7d38c0`; Pages [run 42121616797](https://github.com/resi-org/resi-org.github.io/actions/runs/42121616797) succeeded. Ordinary live HTML for People and Search was fetched and exactly matches revision 3386c21 byte for byte. Only those two files changed; other live pages, assets, domain/independent endpoints and concurrent previews are preserved.

The careers cards, exact hiring update and spacing refinements remain in source/local preview. Corrected the CBAI entry to **CBAI — Mentored AI safety research.** and synchronized its Search excerpt. No new public content was deployed with this correction. Shared Astro diagnostics/build passed; desktop/390px preview and no overflow checked. The complete careers section requires Rachel’s explicit publication approval before being released again. Prior release entries below are historical deployment evidence, not current authorization or live status.


## November 5 — Join us cards and hiring outlook — scoped release

Added the approved Work at RESI and research-fellowship cards beside unchanged Visit/Reading Group. Work order is culture (#culture), unlinked **Current opportunities — details coming soon.**, then **Hiring update · November 2026** and Rachel's exact wording: **We anticipate application review and hiring to unfold over the coming year.** Status is role-neutral; application details remain coming soon and Jobs is next. Shortened fellowship entries to CBAI — Cambridge, MA; MATS — AI alignment research; Pivotal — Funded, full-time; London; SPAR — Remote, part-time (unpaid). Kept the chosen heading/introduction and all four provider URLs. Removed the old local-students paragraph. Standardized local paragraph/list gaps and aligned lower-row heading space at desktop widths; phone headings retain natural height. Added matching Search entries with full program names.

Rechecked Resolution, ARC, Epoch and Forethought public hiring pages; follow-up notes distinguish hiring outlook from active review and expressions of interest. Saved the prior completed 44-organization research, evidence and sanitized planning records in source history. No raw correspondence or private access information added.

Verification: shared and isolated Astro diagnostics/build passed with zero diagnostic errors/warnings/hints (existing empty partner-data notice). Desktop 1280px, 571/570px breakpoint, 390px and 320px checks found no horizontal overflow; body text aligns within each desktop row. Reviewed light/dark, correct order/exact sentence, preserved #culture, zero Work links/buttons, four external program destinations and keyboard traversal. Release Search queries Pivotal and application review return the corresponding cards. Existing Visit/Reading Group text/form routes, mailing lists, portraits and hidden visitors preserved. Generated publication diff is only people/index.html and search/index.html; five protected domain/independent-endpoint files unchanged. Record links and git diff --check pass.

Release stage: source [PR 111](https://github.com/resi-org/resi-org.github.io/pull/111), application commit `4f9b78f`, merged at `a3a67a9554da4e2adff14742d7481ae1e7ec7110`. Publication [PR 112](https://github.com/resi-org/resi-org.github.io/pull/112), generated commit `616ca3b`, merged at `e230ca00b298e1c3a057fcae6f75e882e67ee9f2`. Pages [run 42120656509](https://github.com/resi-org/resi-org.github.io/actions/runs/42120656509) succeeded. Ordinary live https://resi.org/people/#get-involved verified at 1280/390/320px: exact sentence/order, shorter list, row alignment, no overflow, hidden visitors, retained culture anchor and no Work link/button. Live keyboard Tab moves from CBAI to MATS; Search queries application review and Pivotal return the appropriate entries. Desktop/phone captures saved in chat artifacts. Source and publication used separate isolated checkouts; shared dirty work and unrelated homepage/design previews preserved.


## November 5 workshop restored in both positions; center-width preview revised

Rachel explicitly requested keeping the unchanged workshop above the main heading AND restoring it as the first Announcements card. Source application commit `4d03166` is carried in [PR 109](https://github.com/resi-org/resi-org.github.io/pull/109). Publication [PR 110](https://github.com/resi-org/resi-org.github.io/pull/110) merged at `3386c21fe0b2cdb7f8f9057af76d2543d47e20f9`; Pages [run 42047395072](https://github.com/resi-org/resi-org.github.io/actions/runs/42047395072) succeeded. Ordinary live https://resi.org/ verified at desktop and 320px: two workshop cards, the full three selected Announcements entries, separate valid heading IDs, top card before H1 and no horizontal overflow. Published diff is index.html only; event wording/styling, all other pages, Events-heading correction, domain files and independent endpoints preserved. Source diagnostic/build checks passed with zero diagnostics; local release desktop/390px checks passed. This explicitly supersedes the earlier single-card placement.

Revised unpublished preview at http://127.0.0.1:4406/: retain the usual 600px central width, split approximately 310/270px with a 20px gap. Main heading uses three lines; complete opening section is about 659px tall at 1280px desktop. Featured box omits Events and the repeated Save the date; normal Announcements copy is retained with its original labels. Two columns fit through 521px; at 520px and below DOM and visual order is H1 → Save the date/event → intro/actions. Responsive card padding/calendar/title adapt without shrinking body text. Desktop, 521/520px boundary, 390/320px and dark-theme visual checks passed; title/card local overflow, unique IDs and event/interest destinations checked. Astro diagnostics/build and diff checks passed (existing empty partner-data notice); temporary cache configuration is excluded from source. No forms submitted. This replaces the first wide-opening/901px-breakpoint preview; branch `codex/home-save-date-columns-preview-nov5` remains separate and unpublished. Artifacts: `/Users/rachelsipser/Documents/GitHub/resi-website/output/home-workshop-nov5/preview-narrow-desktop.png` and `preview-narrow-phone.png`.


## November 5 homepage release and separate column preview — verified

Rachel explicitly authorized immediate publication of the unchanged December 4 workshop card above the institute heading. Source PR [104](https://github.com/resi-org/resi-org.github.io/pull/104) merged at `ce356776b8cef3484a717b6a798c599eb460e45a`; publication PR [105](https://github.com/resi-org/resi-org.github.io/pull/105) merged at `6812a32c526d0a92c4cfd22d73e77b782d4c73fd`. Pages run [42043181942](https://github.com/resi-org/resi-org.github.io/actions/runs/42043181942) succeeded. Ordinary live https://resi.org/ verified at desktop and 390px: one workshop above H1, unchanged description/date/location/title/interest link and card dimensions/style, the same two selected News cards below the introduction, no horizontal overflow. Only generated Home HTML and its scoped stylesheet were published; Events/News/Search, shared event data/style, domain/independent endpoints and legacy assets preserved. Astro diagnostics/build and diff checks passed. Later independent production PR 107 changes only the Events heading; it was observed and left intact.

Separate preview at http://127.0.0.1:4406/ on `codex/home-save-date-columns-preview-nov5` in `/private/tmp/resi-home-save-date-preview-nov5`: current complete introduction/actions left; Save the date heading and shared workshop card right. Removed only the duplicate Save the date metadata in this variant, kept approved event content, and moved the interest button into its own natural row for the narrower card. Top-aligned headings, 1008px maximum opening width, stacking below 901px; other section widths unchanged. Desktop/920px/390px/320px and dark-theme visual review passed; one Save the date label, H1/H2/H3 hierarchy, stable event/interest URLs and no overflow checked. Astro check returned zero diagnostics and build passed (existing empty partner-data notice). An isolated temporary Vite cache avoided shared dependency-cache contention; no dependency/configuration change is part of the preview. No form submitted. Preview is not merged or deployed. Screenshots: `/Users/rachelsipser/Documents/GitHub/resi-website/output/home-workshop-nov5/`. Shared dirty application checkout preserved.


## November 3 Events publication — live verified

Rachel approved the Events preview and explicitly requested publication with one H1: “Community events, seminars, and workshops on the foundations of AI safety.” Removed the former Events heading and subtitle. Preserved the latest shared-card refinements through source 67f93bd and linked title; proposed additional cross-links were not implemented.

Publication PR 72 merged at `14a20ea5128a38df0f20c59c4cb28ae4d4eb95c9`, from reviewed generated head `cc5fe19c3658e835c0d92bc1d4b34b2313b43a1e`. Source PR 74 merged at `ddaf39a59d80d4cbfd57aad9d30c77fdffe8eb31` into the shared source branch; PR 73 carries that source into the continuing source line separately from production. Astro diagnostics/build passed. New heading/no subtitle and no overflow checked at 390px/320px. Publication Events links/anchors validated; all five domain/independent-endpoint files retained identical hashes. Existing historical assets preserved. Pages run [41655422743](https://github.com/resi-org/resi-org.github.io/actions/runs/41655422743) succeeded. Live checks confirmed the exact H1 with no subtitle, Events navigation, three homepage announcements, workshop Search results, and an old seminar deep link redirecting to Events with its details open. Desktop 1200px and phone 390px have no horizontal overflow. Live screenshot saved in the chat artifacts.

## November 3 Events rename and cross-link review — preview

Rachel requested Seminars → Events everywhere and a holistic review of opportunities to link to Events. She specified the December 4 card at the top using the exact Announcements component, with seminars below and later layout refinements. Implemented /events, Events navigation/page metadata/sitemap/Search, existing cross-page destinations, workshop title links and shared workshop content. /seminars preserves queries and fragments when forwarding; seminar article IDs and historical biographies are unchanged. Workshop card styles/content are shared with Home. This branch incorporates the concurrent card revision 027e359 without changing the original checkout.

Source review: [draft PR 74](https://github.com/resi-org/resi-org.github.io/pull/74), branch codex/events-page-rename in the attached isolated worktree; application change 240eb04 plus shared-card integration 55af5e9. Depends on the pending source PR 73 announcement feed; publication PR 72 and production were not changed. This is a preview, not published. New link placements remain recommendations in WORKLIST E6.

Verification: Astro diagnostics and build passed; browser checks confirmed Events navigation on every main page, correct canonical, workshop Search results, no old seminar-destination links, all 37 generated Events links resolving to the page/valid anchors, and all seven seminar anchors retained. Phone 390px/320px and desktop showed no horizontal overflow. Mobile menu shows Events as the current page. Old /seminars/?from=old-link#anat-perry-2026-10-21 redirects with query/hash intact and opens the talk details. Final review includes the latest card revision at 1200px, 390px and 320px, light/dark inspection, and identical rendered card text/style on Home and Events. Existing empty partner-collection notice remains. Forms were not submitted.

## November 2 outlined workshop card publication

Rachel explicitly requested publication of the revised outlined card styling in Review RESI website project guide. Published the exact reviewed PR 71 head `157ff2625b7a3f5a12e1e9a8ea4783fcb90784b0`; production merge `20c5a453e1aa7d097d4c5827bee3c47d012ea3d3`. Only index.html and its new homepage stylesheet changed in publication. The invitation spans the card, the date appears once, Cambridge and Interest form remain, and the card uses the established full outline. Events migration remains deferred.

Verification this chat: source diagnostics passed with zero errors/warnings/hints; static build passed (existing empty events/partners collection notices). Rebuilt index.html and its stylesheet match the publication checkout byte for byte. Pages run 41514555482 completed successfully. Live browser review at 1200px and 390px confirmed the revised invitation, one workshop/date, Cambridge and the unchanged Interest form destination. Full border present with no box shadow; no horizontal overflow at either width. Desktop/phone screenshots inspected. Source PR 70 includes the application changes and current project records.

App organization: moved this chat into RESI Website - resi.org; tool returned the expected project ID. No folder relocation was needed.

## November 2 project setup

Status: local organizational setup complete. Project RESI Website - resi.org, ID 00c48f57-79f5-43f6-8bbf-38fd6efc3edb, points to the existing production-source worktree and is pinned. Added root agent guidance, current README entry points, this five-record management set, archived old READMEs, and portable public reference research. Consolidated the current queue, approved conventions, page sources and handoff workflow. Site application files, endpoints and deployment configuration are outside this setup's changes.

Verification: current GitHub main and open preview PRs checked during setup; nine active Markdown documents and 27 relative links checked with no missing targets. All 154 application/content/public-asset/endpoint/configuration files in the setup baseline retain identical hashes. Whitespace check passed. No rebuild is needed for these documentation-only edits. This setup does not publish the pending card design or change the visitor policy.

App organization: renamed the former Prioritize website updates chat to Website planning and priorities. Moving it and Update RESI event banners requires additional older-folder access, so both remain in their prior locations; WORKLIST retains retrieval IDs. New website chats start in the narrower dedicated project and read the saved project guidance. No chats were deleted or archived.

The original RESI workspace README and November 2 queue now point to this project's guide and active queue; their remaining contents are retained as history.

## November 2 event announcement

- Published and live-verified in the earlier event chat: intro → Announcements (workshop first, original other cards retained) → cryptography precedent. Source PR 68; [publication PR 69](https://github.com/resi-org/resi-org.github.io/pull/69), merge 199a9ebd8d3048ef7583e54c2ffb3ab614dd88c2. Earlier recorded Pages run 41492373049 succeeded.
- Preview only: unified workshop card, Save the date · Inaugural community workshop, date once, Cambridge/Interest form retained, established full outline replacing the rejected accent bar. Source [PR 70](https://github.com/resi-org/resi-org.github.io/pull/70), code 5b08ffc; publication [PR 71](https://github.com/resi-org/resi-org.github.io/pull/71), 157ff26. Both confirmed open at setup. Earlier chat recorded source diagnostics/build and desktop/phone/Safari review; these are prior verification results, not checks rerun by setup.
- Future Events page, shared event data/check and workshop counterpart remain deferred.

## October 27 visitor visibility

Current source visibility flag deliberately hides the visitor roster. October 27 source comment attributes the request to Adam; Rachel separately requested removal pending an updated version. Data remains for later reconciliation. Reference research and inclusion-policy discussion do not approve republication.

## October 23 to 25 production baseline

C.2 launched at resi.org on GitHub Pages October 23 via [PR 1](https://github.com/resi-org/resi-org.github.io/pull/1). Historical source snapshot: codex/c2-source-2026-10-23. The continuing source branch evolved to codex/default-size-90-source.

October 25 corrections established native display dimensions, shared menus/utility positioning, section links, current research/support copy, People ordering/framing and compact paper disclosures. Subsequent source files supersede older draft instructions. Detailed earlier revision/PR evidence remains in the original workspace output/RESI-LAUNCH-AND-ROLLBACK.txt; useful current decisions have been summarized in DESIGN-AND-EDITORIAL rather than reproducing every intermediate experiment.

## Future entry format

Date; request/outcome; affected pages/shared data; status; source revision/PR; preview checks actually run; publication revision and deployment status when applicable; live evidence; recovery pointer; unresolved follow-up. Include only information needed to continue or assess the change.


## November 2 — three-item announcement feed and event alignment (preview)

Request: refine workshop spacing/alignment, show only three recent items across News and Events, prefix category labels, and provide separate See all news / See community events links. Supersedes the old standalone workshop plus three-news layout and the old generic onward label.

Implementation: Home now takes three entries from one merged news/community-event collection, newest announcement/publication first. The workshop's reusable content/events record holds its November 2 announcement date, December 4 attendance date, location, approved label and interest form. News filters to News records; its generated output remains identical. Seminars and its generated output remain unchanged, with the future Events migration still deferred. The workshop's Events counterpart and cross-page audit remain open.

Visuals: full-width Events metadata; News · outlet · date for the two news cards; shared metadata size/weight/color; top-aligned calendar/title/action; smaller date and title, tighter row spacing and no internal date divider. Full outline, restrained event fill, Interest form and stable workshop-heading anchor retained. Original news-card shape, summaries and article links retained. Launching RESI is displaced from Home but remains on News.

Verification: Astro diagnostics (46 files, zero errors/warnings/hints), production build, three-card/category/order assertions, retained workshop anchor/date/form, 390px/320px no-overflow checks, desktop alignment measurements, dark/light UI checks (restored light), and byte comparisons showing News/Seminars unchanged. Only generated index.html and its scoped CSS differ from production baseline 20c5a45. Proof: original workspace docs/event-announcements-2026-11-02/three-item-feed-preview.jpg.

Status: preview on source branch codex/announcements-feed-alignment-nov2 (application commit 5cc27de), source PR 73. Generated publication branch codex/announcements-feed-alignment-publish-nov2 (bb706e3), publication PR 72. Not merged or published. This is distinct from the already-published PR 71 outlined card.


### November 2 — workshop description added to the feed preview

Rachel supplied the description directly: “Join us for a day of talks from RESI researchers and visiting scholars on what it means to build more safety into the foundations of increasingly capable AI and how we're approaching research on this topic.” Stored verbatim in the shared event record and rendered visibly, with no disclosure required.

Rebalanced the event card into a date/title/location header, full-width description, and Interest form beneath (right aligned desktop; aligned with paragraph left on phones). Header title/location centers against the full calendar block. The year remains while Rachel assesses the fuller layout; its removal was discussed, not decided. Existing label, outline, three-item feed, news cards, links and form destination retained.

Source diagnostics/build passed; desktop/phone content and layout checked. This extends source PR 73 and publication PR 72, still preview only.


## November 3 — event outline and alignment comparison (preview)

Rachel requested a darker hairline and actual comparison of several arrangements, with Interest form back above the description. Compared three built/rendered desktop variants: A, full calendar and title-row action; B, shorter calendar and top-aligned title/action; C, action in the top corner beside metadata. Chose B after review: the three-line calendar created uneven header heights, while the corner action enlarged the metadata row.

Final refinement keeps the full year quietly beside Cambridge, MA, leaving month/day in the calendar; the full date remains available in the time element. Title and action share the same measured top coordinate on desktop. At phone sizes the action aligns with the title's left edge and remains above the full-width description. Use the same 10% accent fill as news cards and a 0.75px full outline mixed from existing accent/paper tokens at 60% accent. No shadows, left bar or new badge style. News cards, approved description, single event date, form destination, three-item feed and closing links retained.

Validation: source diagnostics (46 files, zero findings), production builds, desktop geometry, 390px/320px no-overflow and action-order checks, dark/light visual checks restored to light. Comparison proofs: original workspace docs/event-announcements-2026-11-02/nov3-option-a.jpg, nov3-option-b.jpg, nov3-option-c.jpg; chosen preview nov3-final-preview.jpg. Only the existing event component changes application behavior; source PR 73/publication PR 72 remain the review route. Not published.


### November 3 — restore the year to the calendar (preview)

Rachel requested 2026 beneath Dec 4 rather than beside the location. Restored the calendar year and made the title/location column stretch to the calendar height, distributing space between the two text lines without fixed heights. The title and Interest form stay top aligned; Cambridge aligns with the bottom of the calendar on desktop. On narrow screens the title can wrap naturally and the action remains above the description.

Validation: production build passed; desktop measurements confirmed matching calendar/text top and bottom coordinates and title/action top coordinates. Visual desktop/390px review passed; no horizontal overflow at 390px or 320px. Proof: original workspace docs/event-announcements-2026-11-02/nov3-full-date-preview.jpg. Extends source PR 73/publication PR 72; preview only.


### November 3 — tighten the event title/location grouping (preview)

Rachel found the stretched title/location spacing awkward and requested the green event heading again. Replaced distributed spacing with a natural 8px gap, increased the title from 18px to 20px, and restored the event metadata to the shared accent color. Calendar/year and title-row action retained.

Validation: production build passed. Desktop title stays on one line with the action at the same top coordinate; phone title wraps naturally. Visual 390px review and 390px/320px overflow checks passed. Proof: original workspace docs/event-announcements-2026-11-02/nov3-title-spacing-preview.jpg. Source PR 73/publication PR 72 remain unmerged. Separately, Events migration PR 74 is open against the source preview branch; this refinement does not modify its files.


### November 3 — compact responsive event header (preview)

Rachel requested bold event metadata and removal of the empty area beneath the calendar on smaller screens. At 600px and below the title spans the right side, with Cambridge and Interest form sharing the next row. The calendar spans those two rows, placing its month at the title top and year at the action bottom; its day increases modestly to 40px. This follows Rachel's proposed action position beside the location and accommodates natural two-line titles on phones. The desktop title/action row remains unchanged. Event metadata is now bold (700) accent green.

Validation: Astro diagnostics passed with zero findings; production build passed. At 480px and 320px, measured calendar/title top and calendar/button bottom coordinates match exactly. Cambridge remains on one line at 320px and the button retains a 40px target. Desktop title/action alignment retained. Visual review at desktop, 480px, 390px and 320px; no overflow at measured widths. Proofs: original workspace docs/event-announcements-2026-11-02/nov3-responsive-390.jpg, nov3-responsive-320.jpg and nov3-responsive-desktop.jpg. Existing PRs 73/72 updated, not published; Events migration PR 74 remains separate.


### November 3 — keep Interest form anchored beside the title (preview)

Rachel rejected the location/action-row version. Restored the action to the far-right column at the title's top at every width, with natural title wrapping between intact words. Removed the stretched mobile calendar and lower action row. At smaller widths the button has slightly tighter padding/type; below 380px the title is 18px and the decorative arrow is omitted so the complete label and title remain side by side. Bold green metadata and the date/year remain.

Validation: Astro diagnostics passed with zero findings and production build passed. At 320, 360, 381, 390, 480, 600, 601 and 1280px, action/title top coordinates matched and no horizontal overflow occurred. Title words stay clear of the button, including a measured 7px gap at 320px. Desktop, 480px and 320px screenshots inspected; proofs in original workspace docs/event-announcements-2026-11-02/nov3-anchored-480.jpg, nov3-anchored-390.jpg and nov3-anchored-320.jpg. Existing PRs 73/72 updated; preview only.


### November 3 — optical header alignment, without changing date spacing (preview)

Rachel rejected matching line-box tops and prohibited spreading the date to force a match. Keep the calendar typography and natural 62.55px height unchanged. Center it on the compact title/location text group independently of the action height. Trim title/location font leading to visible cap/baseline edges, keep a 10px text gap, and use a slightly larger 22px desktop title with 12px location. Phone titles remain 20px/18px. The button starts at the title's visible cap edge and stays at the right; intact title words still wrap naturally. A font-leading offset supports browsers without text-box trimming.

The shared card affects Home and Events, preserving the Events publication and stable title link brought in from the other chat. Production remains 14a20ea (PR 72); this further refinement is a new unpublished preview.

Validation: Astro diagnostics passed (47 files, zero errors/warnings/hints); production build passed. Calendar height remained 62.55px across measured widths; date/text center coordinates agree within 0.004px and title/action top coordinates agree. Checked 320, 360, 381, 390, 480, 481, 600, 601 and 1280px with no overflow, plus the shared Events card on phone. Inspected actual desktop and phone screenshots, not just element boxes. Proofs: original workspace docs/event-announcements-2026-11-02/nov3-optical-desktop.jpg and nov3-optical-390.jpg. Generated publication diff contains only index.html and events/index.html.


### November 3 — matching metadata and small narrow-screen refinements (preview)

Rachel requested identical metadata formatting apart from event color/weight, plus tiny phone-only changes. Event metadata now uses announcement-meta and its same 7.5px separator gaps, 3px wrapping gap, 11.25px type and 1.65 line height; bold accent green is retained. Below 480px, increase the date number from 32px to 34px, add 1px above/below it, and increase the title/location gap from 10px to 13px. A 2px optical location offset aligns Cambridge's visible bottom with the year. Full-width date/type/text spacing remains unchanged.

Validation: an isolated committed-source snapshot plus only WorkshopCallout.astro passed Astro diagnostics (47 files, zero findings) and build, excluding concurrent Research/Disclosure/Home/Search drafts. Checked Home at 320, 390, 480, 481 and 1280px and Events at 390px; no overflow and title/action alignment retained. Metadata computed size/line height/gaps match news. Full-width date remains 32px with no margins and 10px title/location gap. Pixel analysis of the 390px screenshot found both location and year ending at the same row (180). Proof: original workspace docs/event-announcements-2026-11-02/nov3-small-refinements-390.jpg. Continues source PR 76/publication PR 75, still preview only; generated changes limited to Home and Events HTML.


### November 3 — align the location baseline, not its descender (preview)

Rachel clarified that Cambridge's baseline must align with 2026, with the g below it. Changed only the narrow-screen location offset from -2px to +1px. All other typography, spacing and layout remain unchanged. Isolated production build passed; 390px screenshot analysis confirms the capital MA and year share bottom row 180, while the location descender reaches row 183. No overflow at 320px. Proof: original workspace docs/event-announcements-2026-11-02/nov3-baseline-correction-390.jpg. Source PR 76/publication PR 75 remain unpublished.


## November 3 — approved working-group disclosure release prepared

Rachel approved the corner-aligned spinning plus-to-dots control and responsive fixes, then authorized publication with a slightly finer 1.1px stroke and slightly faster 370ms transition. The plus and four-dot square both occupy 14px. Details hover works at all fine-pointer viewport widths; keyboard focus and native disclosure behavior are retained. Natural 6px title/leader spacing replaces tallest-title synchronization; the two-column layout becomes one at 600px. Reduced-motion styling removes animation.

Isolated source begins at continuing source `dbb92d890caaf3e49e085e93ade4456965e28ea4`; publication begins at production `14a20ea5128a38df0f20c59c4cb28ae4d4eb95c9`. Only Disclosure.astro and research.astro application files are included, excluding concurrent homepage/Search copy and event-card drafts (PRs 75/76). Generated changes affect Research and add scoped shared-component markup/style to About and People without changing their visible text or disclosure variants. All generated HTML text was compared with production; domain files, legacy assets and independent endpoints are retained.

Validation: isolated npm run check passed (47 files, zero errors/warnings/hints); npm run build and git diff --check passed. The prior responsive review covered nine pages at twelve widths (108 states), plus final card checks at fourteen widths including 599/600/601/602px, compact spacing, no overflow, control/text clearance, actual narrow mouse hover and keyboard expansion without card collisions. The isolated publication was inspected at 320/600/601/1280px on Research/About/People: no overflow, 11 compact controls on Research, none on About/People, final 370ms timing and 1.1px CSS stroke. New source/publication PRs, deployment and live verification will be recorded after release.

A follow-up inventory identified Research-area cards, FAQ rows, paper metadata, People publication expanders and Events details as future standardization contexts. Navigation contents controls remain semantically distinct.


## November 3 — working-group disclosure controls published and live verified

Rachel approved publication after one final refinement: 1.1px stroke (from 1.25px) and 370ms transition (from 390ms). The 14px plus/matching four-dot square, corner placement, all-width mouse-hover details hint, native keyboard disclosure behavior, compact 6px spacing and 600px single-column transition are included.

Source [PR 77](https://github.com/resi-org/resi-org.github.io/pull/77), application commit `4ade9f56f069ee6a8578bed08dc8be02d1135451`, merged into continuing source at `fe575183b26e472c4337f3e0fafd8ff1911c384a`. Separate generated publication [PR 78](https://github.com/resi-org/resi-org.github.io/pull/78), commit `971dd854d1254ad30a8adaf0eb5cc10b788e00b8`, merged into main at `a791347a69114a65a7ad876c5ffe37aa5f7cfb2c`. Pages run `41680296354` succeeded. Source was not merged into production main.

Release built from isolated continuing source and current main, excluding event-card PRs 75/76 and concurrent HomePage/Search copy drafts. Generated files changed Research, About and People HTML plus one new Research CSS asset; About/People receive scoped supporting markup/style without changing text or their disclosure variants. All generated HTML visible text matched the prior production output. CNAME, .nojekyll, legacy assets and independent endpoints were retained. Existing unpublished publication checkout and active preview were preserved.

Verification: isolated Astro check (47 files, zero findings), build and diff checks passed. Isolated Research/About/People checked at 320/600/601/1280px with no overflow. After successful deployment, the actual live Research page rendered all 11 compact controls with 370ms timing and 1.1px CSS stroke; mouse open/close and details hover passed, including 320px. Live 320/600/601px checks confirmed no overflow, 6px title/leader gaps and the correct one-/two-column transition. Keyboard Enter/Space expansion worked at 601px. Live About/People retained their existing variants with no overflow. Proofs: this design chat's visualization directory, card-disclosure-live.png and card-disclosure-live-320.png. No form was submitted.

Standardization inventory: active expanders are 6 About FAQs, 16 Research paper details, 21 People selected-publication lists and 7 Events seminar details, besides the 11 now-published working-group controls. Research-area content currently renders fully expanded; homepage area cards are links. The alternate ResearchAreas disclosure code is unused and is not an active rollout target. Proposed next preview: About FAQ rows to establish the non-card variant, preserving FAQ permalinks; then paper/Events/People contexts. Same indicator/animation, with card-corner versus row-aligned placement. Existing visible titles/labels and navigation meanings stay intact. The broader rollout is not part of this publication.


### November 3 — final desktop baseline and publication approval

Rachel approved publishing the event-card refinements after aligning Cambridge's baseline with the Interest form button's bottom edge on the full-width card. The title/location gap now scales from 10px to 16.5px with the card's available width; phone overrides and year/location baseline alignment remain unchanged. Desktop computed baseline/button-bottom difference is 0.022px. Checks at 320, 390, 480, 481, 600, 610, 620, 640 and 1280px retain title/action top alignment and have no overflow. Source diagnostics/build passed in an isolated snapshot of current continuing source fe57518 plus this component, preserving the published disclosure changes and excluding unrelated working drafts. Desktop proof: original workspace docs/event-announcements-2026-11-02/nov3-final-desktop.jpg. Publication approval covers the shared Home/Events card and the preceding reviewed refinements in PRs 76/75. Deployment/live verification to follow.


## November 3 — approved homepage introduction publication

Rachel requested and approved publication of the homepage sentence: “RESI is an independent nonprofit research institute based in Cambridge, Massachusetts, where we are building the scientific foundations for making superintelligence safe by design.” Preserved bold safe by design, added the grammatically appropriate comma before where at her request, and synchronized the manual Home Search excerpt. This is scoped first-person wording, not a global pronoun rule.

Built from continuing source dbebb4f with only HomePage.astro/search.astro application edits. Astro check passed (47 files, zero findings); production build passed with the existing empty partners notice. Generated publication based on main a791347 changes only index.html and search/index.html. Other pages, event-card previews, current disclosure design, domain files and independent endpoints are preserved. Earlier local desktop/390px rendering was reviewed. Publication/deployment and fresh live verification will be recorded separately after completion.

Publication preparation also incorporated the approved homepage introduction/Search publication (PRs 80/81) that landed concurrently; those contents are preserved.


### November 3 — event-card release deployed and live verified

Rachel explicitly approved publication after the final full-width baseline adjustment. Publication PR 75 merged at eff55bc561b8801c440efdcf43053a037aae6bca (reviewed head f299444cb66dcf4cdbf1b8235aab97a4b0b0cc6a); Pages run 41681598151 succeeded. Only Home and Events HTML changed relative to main, preserving the concurrent introduction/Search and disclosure publications.

Live Home and Events checked on desktop and at 390px through release-tagged URLs to avoid cached prior HTML. Desktop location baseline/button bottom agree within 0.022px on both pages; title/action tops agree. Phone retains its approved 34px day, 13px gap and location/year baseline correction, with no overflow. Form and Events destinations retained. The ordinary homepage URL still returned a cached prior version during initial verification; the deliverable browser tab uses ?release=eff55bc. Live proofs: original workspace docs/event-announcements-2026-11-02/nov3-live-final-desktop.jpg and nov3-live-final-phone.jpg. Source PR 76 carries the final implementation and these records into continuing source.



## November 3 — homepage introduction live verified

Rachel explicitly requested publication. Source PR 80 merged at `216654d6c5ee2f276751104ddbc57f45e9a05181`; publication PR 81 merged at `43cf7d5c5a2ed927e909ba54500ad60958812ef0` from reviewed generated head `241a5daec615b4f9976992059fb80a1c73827a2e`. Pages run [41681348362](https://github.com/resi-org/resi-org.github.io/actions/runs/41681348362) succeeded. Published only index.html and search/index.html from current source dbebb4f, preserving the current disclosure release, pending event-card refinements, domain files and independent endpoints.

Live browser checks confirmed the exact sentence with “Cambridge, Massachusetts, where we are building,” bold safe by design, no horizontal overflow at desktop/390px, and a Cambridge Search query returning the synchronized Home excerpt. Earlier local desktop/390px visual review passed; Astro check (47 files, zero findings), build and git diff --check passed. Live desktop proof: /Users/rachelsipser/.codex/visualizations/2026/11/03/01a1a236-adf2-7eb2-8d6f-129e61eb1ad3/home-intro-live.png. Other editorial findings and global first/third-person usage remain open; this release is scoped to the approved introduction.


### November 3 — keep announcement metadata on one line (preview)

Rachel asked to prevent metadata wrapping, preferring to drop Save the date if shrinking would hurt readability. Keep the existing 11.25px metadata size. Event metadata is nowrap and uses the card's existing inline-size container to hide only Save the date below 315px of content width. It remains Events · Inaugural community workshop on the narrowest phones and restores the full wording once space permits. Current News labels already fit one line at 320px, so their type and markup are unchanged. No other card layout changes.

Validation: isolated Astro diagnostics (47 files, zero findings) and build passed. Home checked at 320, 360, 369, 370, 375, 390 and 1280px: all three metadata rows are exactly one line, with no horizontal overflow and unchanged font size. The full label returns at 370px viewport in the present layout. Shared component also serves Events. Proof: original workspace docs/event-announcements-2026-11-02/nov3-one-line-label-320.jpg. Preview only; previous event-card release remains live.


### November 3 — tighten the date at the narrowest breakpoint (preview)

Rachel requested removing the extra space around 4 so DEC meets the title's lowercase-height line. At 380px and below only, keep the day at 34px but set line-height to 1 and remove its 1px block margins. Move DEC down optically by 2px. All wider rules and the location/year baseline correction remain unchanged.

Validation: build passed. A 320px screenshot pixel check found DEC and the title's lowercase a both starting at row 123, with the capital MA and year both ending at row 175. Checked 320/360/380/381/390/1280px with no overflow; 381px and up retain prior date metrics. Proof: original workspace docs/event-announcements-2026-11-02/nov3-tight-date-320.jpg. The extra scoped rules now emit a separate WorkshopCallout stylesheet; preview/publication files include that asset. Extends the pending one-line-label preview; not published.


### November 3 — midpoint of narrowest date-spacing trials (preview)

Rachel requested splitting the difference. At ≤380px, use line-height 1.04, 0.5px day margins and a 1px DEC offset: exact midpoints between the original and tightest trial. Day size and every wider rule remain unchanged. Build passed; 320px visual/no-overflow review passed and 390px retains its previous metrics. Proof: original workspace docs/event-announcements-2026-11-02/nov3-midpoint-date-320.jpg. Updates pending PRs 84/83; not published.


### November 3 — compact metadata and midpoint spacing published

Rachel explicitly requested publication. Publication PR 83 merged at 927570308c5855fb4f669b31dc5f442cbdc7c5e5 from reviewed head 51d3e537ee7ba4919335f664c18762431898360d. Pages run 41695253008 succeeded. Home/Events HTML and the emitted shared card stylesheet match the reviewed build.

Live Home and Events at 320px show one-line metadata, Save the date hidden, 35.36px day line height, 0.5px margins and 1px month offset. At 390px the full label returns and wider date metrics are retained. Desktop location baseline/button edge difference remains 0.022px. No horizontal overflow; fonts loaded and the stylesheet renders correctly. Live proof: original workspace docs/event-announcements-2026-11-02/nov3-live-midpoint-320.jpg. Fresh release-tagged URLs used for verification and the delivered browser tab. Source PR 84 supplies implementation/records.


### November 3 — establish permanent announcement treatments

Rachel approved three reusable treatments: only upcoming events receive the emphasized workshop style; past events retain the calendar/aligned header but use ordinary news-card styling and no promotional button; News retains its current design. Added date-based event timing, a past visual variant, and an explicit pastAnnouncement content object for case-by-case Home eligibility and retrospective copy/date. Home filters eligibility before taking its three items. Events retains past records in its archive; past invitations/actions are suppressed. Shared rules are in the design guide, content instructions and AGENTS.

Validation: seven meaningful policy tests passed (including Cambridge winter/summer midnight boundaries, multi-day end and past opt-in); diagnostics passed with zero findings; production build passed. Local upcoming/past/news fixture checked at desktop/320px and in light/dark mode: past border/button absent, title and metadata match News, header naturally centered, no overflow. The fixture was removed before the final build. Current Home/Events event markup is byte-identical to production and the News page output is unchanged. Proof: original workspace docs/event-announcements-2026-11-02/nov3-announcement-treatments-desktop.jpg. This is a source configuration change for future builds; production remains the published 9275703 release, with no fabricated event content or current appearance changes.

Source [PR 85](https://github.com/resi-org/resi-org.github.io/pull/85) carries the approved configuration and instructions into the continuing source branch; it does not publish sample cards or change current live content.

## November 3 contributor event routing — configured, reviewed; confirmation requested

Rachel requested persistent defaults so Adam can issue short event/seminar requests without repeating placement/design instructions. Added EVENT-ROUTING.md and root/source guide links. The event schema now requires eventType; shared eligibility distinguishes community/public events from seminar/reading-group/working-group activities, with auto/include/exclude overrides. Series/group promotion records require explicit inclusion (or withdrawal/retrospective opt-in) and a canonical details link, and do not duplicate Community events or Search entries. The existing workshop is explicitly classified community. No card CSS, copy, current seminar/group records or News presentation changed. A short entry-point AGENTS.md on the generated default branch directs fresh contributors to the editable source and repeats the routing precedence.

Verification: twelve policy tests passed; eight temporary fixture/build checks covered routine seminar exclusion, public-event inclusion, explicit seminar promotion/canonical link/no duplication, withdrawal, accidental series insertion rejection, missing canonical link rejection, required classification, and complete fixture removal/output restoration. Astro diagnostics: zero errors/warnings/hints; build passed (existing empty partner-data notice). Current Home/Events HTML matches live after generated scope/stylesheet-hash normalization; News/Search are byte-identical. Component CSS matches its prior source exactly. Temporary fixtures were removed and original Home/Events/News/Search build output restored byte for byte. Configuration is source/repository guidance, not a new public event release; Rachel will confirm the summarized rules.

Routing handoff: [source PR 87](https://github.com/resi-org/resi-org.github.io/pull/87) merged at `304d42ccacaf1332ff53d17077a4f3f1bcd359e9`. [Default-branch instructions PR 86](https://github.com/resi-org/resi-org.github.io/pull/86) merged at `30f9572ce7f41dedc81bccd989a5db2e9628be97`; that main diff contains only AGENTS.md and README.md, preserving all generated site files. Adam can discover the source/rules from a fresh default-branch checkout. Rachel’s confirmation of the summarized configuration remains requested.


## November 3 — homepage support Learn more action, preview

Rachel supplied a marked screenshot requesting the lower homepage support action beside the heading, labeled Learn more with an arrow, using the Interest form button treatment. HomePage.astro now groups the heading and action in one desktop row, with a scoped token-based filled button matching Interest form color, padding, radius, typography and icon size. At up to 525px it stacks below the heading before the explanatory paragraph. Preserved /support, surrounding copy and fiscal-sponsor anchor. No other support/header actions changed.

Isolated branch codex/home-support-learn-more is based on current approved source 58441582ab240778b3d4a1d73f62af69cea1f7e5; production observed at 30f9572ce7f41dedc81bccd989a5db2e9628be97. Reused the clean attached Events worktree to preserve concurrent uncommitted work in the primary folder. Astro check passed (48 files, zero diagnostic errors/warnings/hints); build passed (existing empty partners notice); git diff --check passed. Browser inspected 320, 390, 525, 526, 600 and 1200px: one action, no heading/button overlap and no horizontal overflow. Button style matches Interest form in light/dark, keyboard focus outline is visible, and clicking opens Support. Screenshot saved in this chat's visualization artifacts. Preview only; no production merge or deployment.


### November 3 — publish the homepage Learn more action

Rachel explicitly requested publication of the reviewed button preview. Generated publication PR 90 merged at `6eae1135a761b757606482d7a81acdb7be517b65`, from head `457c4b1`. Source PR 89 remains separate from production. The lower homepage action now reads Learn more, sits beside the support heading on desktop, stacks below it up to 525px, and uses the Interest form button treatment. Destination remains /support. The build emits a shared workshop stylesheet reference on Events; Events content and existing workshop rules are unchanged, with only previously sourced inactive past-event selectors additionally emitted. All five domain/independent endpoint files retained identical hashes. Fresh static build passed; prior source diagnostics and six-width/style/focus/navigation checks apply to the unchanged reviewed source. Pages run [41706698475](https://github.com/resi-org/resi-org.github.io/actions/runs/41706698475) succeeded. Live browser checks at 1200px/390px confirmed desktop heading-row placement, mobile stacking, matching Interest form colors and no horizontal overflow. Clicking Learn more reached https://resi.org/support/ (Support us). Live screenshot saved in this chat’s visualization directory.


## November 3 — funding acknowledgment wording

Rachel explicitly requested and authorized publication of “RESI is supported by grants from Coefficient Giving, Schmidt Sciences, and AISTOF.” Added only “RESI is” to the homepage acknowledgment, preserving the shared supporter data and fiscal-sponsorship sentence. Built from source 4a7c731 against production 6eae113. Astro check passed (48 files, zero findings), build passed with the existing empty partners notice, and generated index.html was verified byte-identical to production after reversing this text replacement. No other generated page, domain file or endpoint changes. Deployment/live verification to be recorded after publication.


## November 3 — funding acknowledgment live verified

Published Rachel’s exact requested sentence: “RESI is supported by grants from Coefficient Giving, Schmidt Sciences, and AISTOF.” Source PR 91 merged at `19d44fa07b0d4ab6d987df6ac79d2c225fc1dcac`; publication PR 92 merged at `12d7c2e7e93eb8a5fee5c773803dcb4c02153bd4`. Pages run [41707718879](https://github.com/resi-org/resi-org.github.io/actions/runs/41707718879) succeeded. Generated publication changes only index.html and differs from prior production solely by the requested text replacement. Supporter names remain in shared data and the fiscal-sponsorship sentence is unchanged. Astro diagnostics/build passed; live browser confirmed the exact acknowledgment and no horizontal overflow at 1280px/390px. Other local previews were preserved.


## November 3 — mobile disclosure correction prepared

Rachel supplied a physical iPhone screenshot and requested hiding details completely on mobile, replacing the expanded minus with a spinning transition to four dots, while leaving non-mobile behavior unchanged. Added a no-hover/coarse-pointer media rule to Disclosure.astro only. It hides the visual label, maps open to the same four-dot square and restores the plus on close even with retained focus. Existing accessible summary names, 14px footprint, 370ms timing, desktop hover/minus and reduced-motion rule remain.

Isolated source begins at 6a00bb9b0549c3f16329a5667838c33c632a1fd9 and publication at 12d7c2e7e93eb8a5fee5c773803dcb4c02153bd4. Existing event-routing, homepage, funding and event-card work is preserved. Generated changes are limited to Research/About/People HTML containing the shared component’s scoped CSS; visible HTML text was compared and matches current production.

Verification: Astro diagnostics (48 files, zero errors/warnings/hints), build and diff checks passed. The in-app browser exposes viewport resizing but no touch emulation. To exercise the actual touch-only CSS declarations, a QA-only copy of generated output forced that media branch on and disabled fine-pointer hover; it is not included in the publication. At 375px, the label computed to display:none, closed arms were 7px × 1.1px, open pieces were four 3px circles with 180° rotation, and retained-focus closure restored the plus. A second QA-only fixture forced reduced motion and confirmed zero transition durations. Normal fine-pointer output at the same width retained hidden-until-hover label and the resting 14px minus. This validates the CSS branches and interactions, not a physical iOS Safari run. Proof: this chat’s disclosure-touch-open.png. No forms submitted. Publication and live verification will be recorded after release.


### November 3 — mobile disclosure correction published

Source [PR 94](https://github.com/resi-org/resi-org.github.io/pull/94), application commit `9424a1ff13d975fc16972339273bf6e93779d079`, merged at `e46ffdd4f36355ac11cdc9cdbc74c24e028f7138`. Separate publication [PR 95](https://github.com/resi-org/resi-org.github.io/pull/95), generated commit `a38ef11e762f7df380fc0ff413456d03bdfab193`, merged into main at `f687310ab6c934563f12cce6c47261a0d79dbe22`. Pages run `41709217143` succeeded. Existing funding/home/event releases and independent endpoints are preserved; no unrelated active drafts were included.

Live Research inspection confirmed all 11 compact controls and the delivered `(hover: none) and (pointer: coarse)` CSS branch containing label display:none and open four-dot styling. Live desktop still uses the 14px × 1.1px expanded minus and hidden-until-hover label, with no overflow. Before release, forced touch-style QA checked label hiding and accessible names at 320/375/430/600/768px, plus open dots, close-to-plus with retained focus and reduced-motion transitions. This is direct branch verification and live delivery verification; a physical iPhone was not controlled. Rachel’s phone needs a refresh to load the corrected page. Proof: disclosure-touch-open.png in the master design chat’s visualization directory. Standardization D5 remains separate.


## November 3 — live disclosure screen-reader compatibility audit

Rachel requested publication and screen-reader verification. Confirmed publication PR 95 is already live at production `f687310ab6c934563f12cce6c47261a0d79dbe22`, with successful Pages run `41709217143`. No application change or redundant deployment was needed.

Inspected the live page’s macOS accessibility tree. All 11 working-group summaries are uniquely named buttons with their full group name plus details, and expose native expanded/collapsed state. Exercised every card with Enter/Space: all 11 reported both states correctly; each authored description was present while open and absent while closed. Activated the first control through the platform accessibility Expand action, observed expanded state and its description exactly once. Tab entered the open body’s paper link; after Space closed it, focus remained at the summary and Tab skipped the hidden body to the next leader link. Decorative icons are aria-hidden; screen-hidden print duplicates are also aria-hidden.

At 375px, a QA-only fixture of the published output forced its touch CSS branch. The visual hint computed to display:none while all 11 buttons retained their accessible names/collapsed states. Accessibility Expand still reported expanded and exposed the first description exactly once. The in-app browser has no touch emulation, so this tests the actual touch CSS declarations and browser accessibility mapping, not physical iOS. It is not a VoiceOver, TalkBack or NVDA speech-session test, nor a whole-site accessibility certification.

Evidence saved in this chat’s visualization directory: disclosure-a11y-closed.txt, disclosure-a11y-open.txt, disclosure-a11y-all-cards.json, disclosure-a11y-touch-closed.txt and disclosure-a11y-touch-open.txt. No forms submitted. Documentation-only work: path/status review and git diff --check; no rebuild required.

## November 4 — distinguish explanatory disclosures from publication lists

Rachel approved three design categories: the existing plus/dot control for explanatory card details; a separately reviewed plus style for explanatory details outside cards; and the existing small caret/triangle for lists of selected work, publications, reports or papers, including when the list is inside a card. Explicitly retain People’s publication expanders. About FAQs and individual foundational-paper explanations are the next non-card plus discussion; genuinely mixed cases are decided individually.

Checked source/components and the live People page: 21 Selected publications expanders, including 3 founding-scientist cards, use native disclosure-closed markers; no plus controls inside those cards. Research paper details reveal explanations/scope of individual papers, which fits Rachel’s explicit non-card plus classification. Events abstracts/biographies remain an additional explanatory context for later review; On this page remains navigation. Updated DESIGN-AND-EDITORIAL and D5/D8, superseding the earlier proposal to convert People publication lists.

Source baseline read from GitHub: 59091a94ab376af629eb81ccddf0c5ed8a1b0d9f; production f687310ab6c934563f12cce6c47261a0d79dbe22; no open PRs at initial check. This is a documentation-only decision: no application edit, build, publication or change to existing live interactions. Reviewed paths/status and git diff --check.

## November 4 — approved Anthropic News entry and shared Home policy (local verification)

Rachel authorized adding the report using her exact supplied Home/News descriptions, including the opening commas. Added `2026-11-02-provable-inference.md` with the original Anthropic headline, November 2 publication date, verified source link and Miranda Christ co-authorship. Short Home title: Provable inference for language models. The report is classified Research; source attribution is independent of explicit plain/quote mode. Existing Globe quote/byline, LessWrong descriptions, stable anchors and dates are preserved. Duplicate check found three prior News records and no existing report.

Implemented the standing News/Home requirement in shared schema, selector and contributor guidance: ordinary valid News defaults to eligibility; explicit exclusion/review holds remain archived; review requires a reason; upcoming eligible events precede News; cap three; date descending/stable ID ascending ties. No separate Home records. Event routing, series opt-in and approved retrospective rules remain. Source fields migrated for all three prior records. Search indexes publisher attribution. AGENTS, page/editorial/event guidance and News contribution instructions now agree. The earlier research comparison/wording evidence is carried into source as a historical snapshot, with later status in WORKLIST.

Pre-implementation remote check: continuing source `74a9371513358861eeea569d016947bfa2ca4d01`, production `f687310ab6c934563f12cce6c47261a0d79dbe22`, no open PRs. Implementation isolated in `/private/tmp/resi-news-nov4`, branch `codex/news-provable-inference-nov4`, preserving the original dirty shared checkout and unrelated previews.

Verification: 18 announcement policy tests passed; Astro check (48 files) had 0 errors/warnings/hints; build succeeded. Six build-level fixture checks passed: exclusion and review stay on News/off Home; missing review reason and source are rejected; missing optional Home title/summary falls back to full validated copy; expired workshop leaves Home/remains on Events and next News fills the slot. Fixtures removed, original event/date/copy restored, final build passed. Actual browser Home order is December 4 workshop → November 2 Anthropic → September 18 LessWrong, total three; News retains all four entries. Desktop, 390px and 320px phone layouts reviewed, no horizontal overflow; light/dark treatments preserved. Home→News and Search→News anchor navigation passed; Anthropic and FlashProve queries found the report. Correct News title, canonical `https://resi.org/news/`, source link and unquoted report description verified; Globe remains quoted. Existing broader News metadata description was retained (editorial refinement remains separate). Local screenshots: `/private/tmp/resi-news-nov4-qa/`.

Static timing changes require rebuilding **and deploying** after the final Cambridge event day; no scheduled rebuild added. This entry records local implementation/checks only. Source incorporation, production publication and live verification must be recorded from their actual revisions separately.

## November 4 — source incorporation, publication and live verification

Rachel's later instruction to go ahead and add the report with her supplied descriptions authorized this reviewed addition, following the initial research-only phase. Source [PR 99](https://github.com/resi-org/resi-org.github.io/pull/99) merged at `523de386286251d263cdd9855a2dab354c290019` (implementation `33a8876370a651a8181c0ccb743baacbc6ff92ce`). This carries the schema, shared selection logic, content and contribution guidance into the continuing source branch. Other contributors inherit it only after receiving that updated source; the original dirty checkout was not switched/reset/refreshed.

Generated publication [PR 100](https://github.com/resi-org/resi-org.github.io/pull/100) merged into main at `a6b8c0f4d0e7de94e58cecc8da8ed00d777a35f9`, from publication commit `e85307b6cda2121200360146f1db7ccbb1e8fe1b`. Only `index.html`, `news/index.html`, `search/index.html` and the main-branch AGENTS entry guidance changed. Compared Home outside Announcements and prior News markup: unchanged. Domain files, independent seminar-zoom/reading-group/ask endpoints, legacy directories and existing cached-page assets were preserved. No source branch merged into main.

GitHub Pages [run 41897008167](https://github.com/resi-org/resi-org.github.io/actions/runs/41897008167) succeeded, including deploy, November 4 at 19:27 UTC. Ordinary public URLs (no cache-busting query) verified: Home shows workshop → Anthropic → September 18 LessWrong, exactly three; Home summary matches Rachel's exact copy and links to the new News anchor. News shows all four entries, exact approved report description without quotation marks, original headline/date, correct Anthropic URL; Globe quote/byline and original dates remain. Live Search for FlashProve returns the report and correct stable anchor. Desktop and 390px Home reviewed with no horizontal overflow. Local checks covered 320px, light/dark, publisher search, expiry/exclusion/review/fallback cases. Screenshot evidence: `/Users/rachelsipser/Documents/GitHub/resi-website/output/news-nov4/live-home.jpg`; other local QA in `/private/tmp/resi-news-nov4-qa/`. No forms submitted.

Local static preview server was temporary; use live URLs for review. Future date-driven expiry still requires a new source build and separate deployment after the final Cambridge event day; no automatic rebuild/deployment was configured.


## November 4 — revised workshop description and standing text-edit authorization

Rachel supplied the shorter December 4 description ending “increasingly capable AI.” and requested publication. Updated the shared event record for Home, Events and Search. Recorded her standing instruction in AGENTS.md and START-HERE: implement, check, publish and verify simple text edits she supplies/approves without a separate publication question; preserve unrelated previews and honor draft-only instructions.

Built from source a680589. Astro diagnostics passed (48 files, zero findings); build passed with the existing empty partners notice. Only index.html, events/index.html and search/index.html differ from production a6b8c0f, solely by the approved description replacement in visible text and Search attributes. Prior local desktop/390px preview checks passed. Deployment and live verification follow.


## November 4 — shortened workshop description live verified

Publication PR 103 merged at `12748f8b615825189b63ad7c4f72d37255195252`; Pages run [41909953431](https://github.com/resi-org/resi-org.github.io/actions/runs/41909953431) succeeded. Live Home and Events display Rachel’s exact shorter sentence, and Search returns the same description. Only those three generated pages changed, preserving the November 4 News release and other site content. Source PR 102 carries the shared description, validation evidence and Rachel’s standing simple-text publication instruction in AGENTS.md/START-HERE.

## November 5 workshop prominence — authorized placement release

Rachel requested immediate publication of the existing December 4 workshop card above the homepage institute heading, followed by a separate, unpublished two-column preview. Built from continuing source `75a37b1` and production `12748f8` in isolated worktrees, preserving the shared dirty checkout. Only Home placement and its scoped stylesheet change; shared event content/component, Events, Search, News, selection policy and the total three announcements remain unchanged.

Astro diagnostics: zero errors/warnings/hints; build and diff checks passed. Desktop and 390px phone visual checks passed; one workshop card, same 600px desktop width/content/style, correct event/interest links and no phone horizontal overflow. Generated diff is Home HTML plus its new scoped stylesheet; domain/independent endpoints and all other generated pages remain untouched. Publication/live verification pending.


## November 5 — remove Events heading period

Rachel requested removal of the terminal period from the Events H1 and publication. Changed only that punctuation in events.astro and recorded the updated heading convention. Astro diagnostics/build passed. Generated events/index.html matches production 6812a32 byte for byte after removing that one period; no other generated page, metadata, link, domain file or independent endpoint changes. Source base ce35677. Publication/live evidence follows.


## November 5 — Events heading punctuation live verified

Publication PR 107 merged at `04b15bc364b60139a795632adfeb56e6e34ffc97`; Pages run [42043869681](https://github.com/resi-org/resi-org.github.io/actions/runs/42043869681) succeeded. Live H1 is “Community events, seminars, and workshops on the foundations of AI safety” without a period. Desktop and 390px screenshots reviewed; phone has no horizontal overflow. The only generated change is removal of that period in events/index.html; metadata, links and other pages are unchanged. Source PR 106 carries the application change, updated heading convention and verification record.


## November 5 — People section reorder, publication prepared

Rachel requested Join us above Affiliated groups and explicit publication. Moved the complete section without rewriting it; updated shortcut order, the source ordering comment and metadata sequence. Applied the reorder both to current continuing-source preview and to the restored live baseline. The careers preview remains intact and is not authorized by this reorder.

Production baseline 7efabab0df2406e82b1a7a9b29da4879bf7d38c0 retains the reverted pre-careers People/Search. Publication build uses pre-careers Astro source fd03d22 with only this reorder, in /private/tmp/resi-people-order-live-build-nov5; output is copied only to people/index.html. Search, Home, endpoints and unrelated previews are excluded. Continuing-source branch codex/people-section-order-nov5, based on f43bc949, retains its pending careers content with the same new section order.

Verification: both source variants passed Astro diagnostics (48 files, zero errors/warnings/hints); live-baseline static build passed (existing empty partners notice). Every section’s HTML token content and all IDs match the live baseline after ignoring generated scope attributes; Join us precedes Affiliated groups. Preview browser at 1280/390/320px showed no overflow and no careers cards. On this page order matches. git diff --check passed. Publication/live evidence follows.


Publication: PR 117 merged at `51763910841431f6b8a07c38b33a53bedbba383a`, from reviewed head `885a7e5eeddb8047b641393dd141434e3f7bcea4`. The generated diff contains only people/index.html (three lines changed). No new assets, Search or other page/endpoint changes. The careers section remains preview-only. Source PR 116 carries the same order in source while preserving that separate preview. Pages run [42123997125](https://github.com/resi-org/resi-org.github.io/actions/runs/42123997125) succeeded. Ordinary live People checks at 1280px/390px confirmed Join us before Affiliated groups, matching contents order, no overflow and no expanded-careers cards. The Affiliated groups shortcut reached its existing #affiliated target. Screenshot: people-section-order-live.jpg in this chat’s visualization artifacts. Exact production-build source saved at 824cd17 on codex/build-people-order-live-nov5, based on fd03d22.

## November 8 homepage Announcements position — preview only

Rachel requested undoing the section relocation made at the start of this chat. Historical production before a5dbf95 confirms hero → cryptography precedent → Founders → Announcements → Key research areas → Support. Restored that order on current continuing source a9f35cd, preserving the later intro/featured workshop, feed selection, card styles/content, anchors and onward links. The change moves the exact section without changing any other application source. Dirty shared-checkout work was preserved; the same targeted relocation was applied there. Preview: http://127.0.0.1:8767/#announcements, isolated branch codex/restore-announcements-position-nov8. No publication requested/performed.

Verification: Astro diagnostics zero errors/warnings/hints; static build passed with the existing empty partner-data notice. Compared the relocated block byte for byte and verified that removing it leaves the rest of HomePage.astro identical to its baseline. Generated section order matches the historical position. Browser visual review could not proceed because the existing preview tab remained on an unsupported data-URL connection-error page; did not bypass that browser policy. Local preview server restarted.

## November 8 original Announcements position — published and live verified

Rachel explicitly requested publication of the prepared placement change. Merged the current shared source c976a18 into this branch, preserving the separately approved Join us release; resolved only overlapping handoff text by retaining both records. Publication [PR 131](https://github.com/resi-org/resi-org.github.io/pull/131), reviewed head ac340841e7a219d02e86ff2e4a5916381cea1010, merged at `34e02f5387445bfc0260a1b06dddca8767e4e2f8`. Only index.html changed; no new assets, other pages, domain settings or independent endpoints changed. [Pages run 42485229857](https://github.com/resi-org/resi-org.github.io/actions/runs/42485229857) succeeded. Source PR 127 carries the exact section relocation and these records.

Astro diagnostics zero errors/warnings/hints and build passed after incorporating current source. Confirmed the announcement block and the remainder of Home match production before release after normalizing generated scope/stylesheet references. Ordinary live https://resi.org/#announcements and release-tagged desktop (1280px) / mobile (390px) checks confirmed hero → argument → founders → announcements → research → support, exactly three announcement cards, intact workshop date/location/interest action and no horizontal overflow. Desktop context screenshot shows Research community immediately above Announcements; mobile screenshot shows Announcements ending before Key research areas. Evidence: original workspace docs/event-announcements-2026-11-02/nov8-announcements-restored-live.jpg and nov8-announcements-restored-live-mobile.jpg. Temporary viewport reset and ordinary live homepage left open.

## November 8 — FAQ rendering and compact full-name credits (published and live verified)

Rachel flagged uneven FAQ pluses and the stray chain icon, then approved full author names with the first three plus et al. for longer lists. FAQ closed crosses now use two continuous bars rather than four half-arm seams; the same 14px footprint, 370ms click-only spin/dots behavior, baseline placement and hidden decorative semantics remain. Removed the separate row permalink icons, preserving all FAQ IDs/direct links. Paper hover and card controls are unchanged. Canonical author data now contains verified full credits; all 16 displays follow the cutoff, with complete linked credits inside details for seven longer lists and complete Search metadata. Scientific descriptions, venues, ordering and other page content are unchanged. Name evidence and shared conventions updated.

Validation so far: Astro check (50 files, zero diagnostics), build, FAQ 320/375/600/601/900/1470px without overflow, all six 14px crosses, no chain icons, native keyboard question/expanded state. Paper layouts also pass 320/375/600/601/900/1470px with all 16 metadata/mark bottom alignments retained; the longest expanded credits fit at 375px. Actual FAQ pointer hover stays a plus; a reduced-motion media fixture confirms zero-duration bars/dots/rotation and correct open dots. Generated comparison across 14 HTML routes preserves unrelated text and all stable IDs. Source application 6123bac / PR 138 merged at 090cd6d96b7677f4d56da88e702ecf4f4b522fe8. Generated publication PR 139 merged at 1597909caa493867a611a8cd99b4595a6ab09fe1; Pages run 42496982035 succeeded. Ordinary live FAQ/Research checked at 375/1280px, correct plus/dot/cross activation and native expanded state, all 16 short bylines matching the preview, complete linked BarrierNet credits and Daniela Rus Search result verified. No spoken VoiceOver session or physical-phone test was run; accessibility evidence is native browser question/state exposure and keyboard behavior, with decorative icons hidden.


## November 9 — Anat’s working group and twelve-card layout (preview)

Rachel confirmed the title **AI and the Human Experience**, led by Anat Perry, and supplied a November 6 first-session transcript for drafting the expandable description. Read the full transcript. Drafted 53 words covering relationships, thinking, creativity and culture; empathy/sycophancy and social/moral development; perceptions of AI consciousness; polarization/common ground; and the question of which roles AI should play and how to study their consequences. This is a proposed group description, not a claim that the group has completed studies. Kept perceptions separate from actual consciousness, omitted speculative product claims and unconfirmed meeting/intake arrangements, and did not copy the private transcript into source. No paper/area mapping or Home announcement was invented.

Added the group and stable #ai-and-the-human-experience anchor through shared groups.ts. Research now has twelve cards, six per desktop column, with Game-theoretic foundations first at ordinary width and Anat’s card last. Search and Anat’s People leadership link inherit the same data; People’s existing leader-first ordering now treats her as a group lead. Existing portrait/order exceptions and hidden visitors remain.

Minimal layout change: retain 16.5px titles, existing padding/outlines, leader type, 6px gap and shared disclosure control. Reserve two title lines, using 1.25 line height instead of 1.4. Closed cards measure 96.25px high rather than 78.09px (+18.16px). Remove featured-card spanning from CSS/layout script; preserve independent column expansion, authored row-wise DOM/keyboard order and single-column layout through 600px. Expanded cards grow naturally with their own content.

Baseline: continuing source f89ff0f63bc065e4136d11cb6ef1d5049691c884; production dc5999fd64c432ede283356fb8780d52029a57bc; no open PRs at start. Used isolated /private/tmp/resi-anat-group-nov9 (codex/anat-human-experience-nov9), preserving shared dirty app files. Preview http://127.0.0.1:4423/research/#working. No production change.

Verification: Astro diagnostics passed (51 files, zero findings); production build passed with the existing empty partners notice. At 320, 390, 600, 601, 650, 768 and 1280px, all twelve closed card heights/title slots/leader offsets match; no title clipping or horizontal overflow. Mouse-open/close checked on all twelve details; Enter/Space checked including Anat’s group. Document-coordinate checks confirm opening the first left card shifts only following left cards while right-column positions remain unchanged. Inspected desktop grid, expanded phone card and light/dark readability; native focus and plus/four-dot behavior preserved. Verified People’s generated lead link and Search result navigation to the stable group heading. Generated Home contains no new group promotion. Not a physical-phone or spoken screen-reader test.

Proofs in /Users/rachelsipser/.codex/visualizations/2026/11/03/01a1a236-adf2-7eb2-8d6f-129e61eb1ad3/: anat-working-groups-desktop.png, anat-working-group-details.png, anat-working-group-mobile.png and anat-working-groups-dark.png. Copy/layout are proposed for Rachel’s review; no source merge or publication.


## November 9 — Anat group and title breaks approved; release preparation

Rachel approved the reviewed group description and twelve-card layout, then requested deliberate two-line headings for Cryptography and cybersecurity; Ethics and superintelligence; AI safety using quantum effects; and AI and the Human Experience. Added Research-only breaks after “and”, “and”, “using”, and “the” respectively; shared names and accessible text retain spaces. No additional copy change.

Final Astro diagnostics passed (51 files, zero findings), build passed with the existing empty partners notice. All twelve closed cards remain 96.25px at 320/601/1280px with aligned leaders, exactly four authored breaks and no horizontal overflow. Generated release is limited to Research, People and Search HTML plus one Research stylesheet; unrelated output and independent endpoints preserved. Source PR 146 is being finalized; publication/deployment/live verification will be recorded separately.


## November 9 — Anat working group published and live verified

Rachel explicitly approved publication of the drafted 53-word description, twelve-card layout and four deliberate two-line titles. Source PR 146 carries application 76f7ef2 and the shared records. Generated publication PR 147 merged at 21dc43fe8f5ab1fc8dda62676adf1121be60aff7; only Research, People and Search HTML plus _astro/research.BO7RT1IY.css changed. Source and publication remain separate; no domain files, independent endpoints or unrelated previews changed.

First Pages run 42674283373 was abandoned by its worker; its report showed failure while the Pages API still said building. Requested a Pages rebuild of the same unchanged production revision. Retry run 42674678007 completed successfully. Ordinary live Research then showed all twelve cards, the four requested breaks, identical 96.25px closed heights and 61.25px leader offsets at 1280px; six cards per column. At 390px all twelve closed heights still match with no horizontal overflow. Enter opened Anat’s details and exposed the approved description; Space closed it. Her leader link reached the People entry with the computed leadership line/link. Live Search query found the group with matching description and navigated to #ai-and-the-human-experience. All 18 existing announcement tests also passed locally; no new Home announcement was added. These are browser/keyboard checks, not a physical-phone or spoken screen-reader test.

Live proof: /Users/rachelsipser/.codex/visualizations/2026/11/03/01a1a236-adf2-7eb2-8d6f-129e61eb1ad3/anat-working-groups-live.png. Earlier preview status above is historical and superseded by this approval/publication.


## November 9 — working-group row pairing (implementation; publication authorized)

Rachel requested pairing two-line working-group titles in the same rows, minimal rearrangement, and prominent names near the top, with publication. Used one swap: Data attribution moves from row 5 right to row 4 right; Cryptography and cybersecurity moves from row 4 right to row 5 right. First three rows stay intact, including Shafi Goldwasser, Adam Tauman Kalai and Vinod Vaikuntanathan. With five previously two-line titles, movement alone could not pair all of them. Added a presentation-only Cryptographic / verification break to pair the first row without moving Shafi downward. Desktop rows 1/5/6 now have two-line pairs and rows 2/3/4 one-line pairs. This is a Research display order, not a new ranking of researchers.

Source isolated from continuing-source 993a7a8479e0c704d76548055c48f5e8db55e4ee at /private/tmp/resi-wg-rows-nov9; publication based on main 21dc43fe8f5ab1fc8dda62676adf1121be60aff7. No open PRs at start; shared dirty previews preserved. Shared groups data, People order, Search output, descriptions, links, anchors, sizing and independent expansion code unchanged. Generated comparison changes only research/index.html (excluding the unpublished build helper .assetsignore).

Validation: Astro check 51 files, zero findings; build passed with existing empty partners notice. Actual title-line counts match within all six rows at 601/1280px. All twelve closed cards remain 96.25px with 61.25px leader offsets on desktop. At 320px cards stack in row-wise DOM order, same heights, no horizontal overflow. Enter/Space opened/closed the moved cybersecurity card with its original description. Publication/deployment/live verification will be recorded separately.


## November 9 — working-group row pairing published and live verified

Source PR 148 carries application d3e3a8c and the display-order decision. Publication PR 149 merged at c815e6dc57f2067ea36bad6f9cfb2139affc48bc, changing only research/index.html. Pages run 42676240936 completed successfully. Ordinary live Research at 1280px confirms six paired rows (title line counts 2/2, 1/1, 1/1, 1/1, 2/2, 2/2), twelve 96.25px closed cards and 61.25px leader offsets. At 390px, row-wise mobile order is correct, all twelve heights match and there is no horizontal overflow. Enter/Space opened/closed moved Data attribution with its original description and paper link. The cybersecurity details had also passed the local keyboard check. Shared group data, People/Search, all card styling/assets and independent endpoints are unchanged. No physical-device or spoken-screen-reader test.

Live proof: /Users/rachelsipser/.codex/visualizations/2026/11/03/01a1a236-adf2-7eb2-8d6f-129e61eb1ad3/working-group-paired-rows-live.png.


## November 9 — 10% narrower working-group cards (preview only)

Rachel asked to try making the cards 10% less wide, so both card columns together sit narrower than the central text column. Implemented above the existing 600px single-column breakpoint: width calc(90% + 1.2px) accounts for the retained 12px inter-column gap, reducing each card by exactly 10% apart from subpixel rounding. At 1280px the 600px text column contains a centered 541.2px grid; cards are 264.6px instead of 294px. Typography, padding, 96.25px closed height, paired title rows, roster order and independent expansion remain. Phone cards retain their current full width.

A first check at 601px found Yannai’s and Vinod’s leader lines wrapping because of the old 78px reserved control space. Reduced only that desktop reservation to 60px; all twelve leaders again fit one line, with visible separation before the details controls. No font or content change.

Baseline continuing source 3849e2c7915d798814b887d3dcb100fbf295c565, production c815e6dc57f2067ea36bad6f9cfb2139affc48bc; no open PRs at start. Isolated source /private/tmp/resi-wg-narrow-preview-nov9, branch codex/working-group-narrow-preview-nov9, preview :4425/research/#working. Shared dirty app files and all other previews preserved. This is a trial, not publication or approval of a permanent design convention.

Validation: final Astro diagnostics (51 files, zero findings), build and git diff check passed; existing empty partners notice remains. At 601/1280px all twelve closed heights match and leader lines fit; at 390px grid stays full text width with no overflow and matching heights. At 601px Enter/Space opens/closes the first card with its original description/paper link. Desktop visual review confirms the centered inset and paired titles. Browser verification recovered in a fresh in-app tab after the older tab stopped responding. Proof: /Users/rachelsipser/.codex/visualizations/2026/11/03/01a1a236-adf2-7eb2-8d6f-129e61eb1ad3/working-groups-10-percent-narrower-preview.png. Not a physical-device or spoken-screen-reader test.
