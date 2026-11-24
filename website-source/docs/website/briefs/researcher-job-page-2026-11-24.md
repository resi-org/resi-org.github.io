# Researcher opportunity: live AJO link and separate page preview

Rachel requested November 24: publish a direct AJO link in People → Work at RESI in place of the details-coming placeholder, while developing a proper RESI job page as an unpublished preview. This does not authorize publishing the full job page or promoting it on Home.

## Canonical role source
Published AcademicJobsOnline job 33484: https://academicjobsonline.org/ajo/jobs/33484 . Title AI Safety Researcher; Cambridge, Massachusetts; ongoing, full-time, in person; postdoctoral research level and above, including equivalent industry/independent levels. Approved duties, qualifications and AI-assisted-research description are in the listing. Rolling review; cover letter, CV, research statement (approximately 1–2 pages describing prior contributions, proposed questions and RESI fit), publication list; two confidential reference letters required, optional third. Job inquiries jobs@resi.org. No salary, start-date, benefits or visa promises added.

## Live-link release scope
Replace People placeholder with “Current opportunities — AI Safety Researcher.” Role title links directly to AJO using shared external-link behavior. Update matching Work at RESI Search excerpt for the title and AJO route. Culture, November hiring outlook, card layout, other opportunities and all existing stable anchors retained. Only generated People/Search HTML may be published.

Source baseline e900df71b67cc2388787e600e785e9aafa20547d; production baseline 80702e08c866c85e1579e6e62de015058319084a. Unrelated PR150 and dirty original checkout preserved. Release checkout output/resi-ajo-link-nov24, branch codex/ajo-opportunity-link-nov24. Publication checkout output/resi-publish-ajo-link-nov24.

Validation before release: Astro check59 files, zero diagnostics; build passes; diff whitespace passes. Generated differences against current main are People/Search HTML only; extra raw workshop-image build artifacts are not part of the release. Browser1280/390px card review has no overflow; correct AJO href/new-tab isolation; keyboard focus visible2px; Search researcher query includes Work at RESI. No forms submitted.

## Full job-page preview
Will be isolated from this live release, reuse current Base/header/footer, fonts/theme/buttons and approved AJO wording. Direct AJO application action; no local intake or new employment promises. Preview-only noindex route, no Search/sitemap or live incoming link until review/publication approval. Local preview details and final release evidence recorded below when complete.


## Preview completed — November 24
Local review URL: http://127.0.0.1:4528/jobs/ai-safety-researcher/ . Isolated checkout `/Users/rachelsipser/Documents/GitHub/resi-website/output/resi-researcher-page-preview-nov24`, branch `codex/researcher-page-preview-nov24`. Route source `src/pages/jobs/ai-safety-researcher.astro`. Built static server session25195 serves dist on4528 and is retained for Rachel’s requested preview. No Sites registration, external hosting or audience change.

Single-column design uses shared Base/header/footer, Cardo headings, IBM Plex Sans and theme/outline-button tokens. New page body and application actions are16px for readability, with44px-high apply controls. Hero puts title, in-person Cambridge location, full-time/ongoing terms and postdoctoral minimum first. Apply directly on AJO appears at top and with complete materials at bottom. Approved description and qualifications are retained; presentation consolidates location/rolling-review facts and application guidance without new promises. No salary/visa/benefits or extra screening criteria.

Preview has noindex/nofollow, no Search/sitemap entry, no main-site incoming link and no local application form. People still goes directly to AJO, including in preview. Original AJO listing remains unchanged.

Validation: Astro check60 files/zero diagnostics; build/whitespace pass. Actual1280/390/320px browser review, no horizontal overflow, one H1, correct two AJO destinations/new-tab isolation, jobs contact, keyboard focus,44px actions. Light/dark application view checked and light restored; viewport override reset. Proof: `output/proof/desktop.png`, `phone-top.png`, `phone-application.png`, `responsive-checks.json` in isolated checkout. Physical-device and spoken-screen-reader testing not performed. No forms submitted.

Live-link source PR363 mergeda2fadcbf46e341c446cf0015551704c321c0c433; production PR364 merged0e09ccf5ce5f21eb70580f071a5a24f33f57fd52. Deployment/live verification is recorded separately after confirmation. Full job route has not been pushed/merged/published and awaits Rachel’s review.


## Live link release completed
Source PR363 merged at a2fadcbf46e341c446cf0015551704c321c0c433; generated publication PR364 merged at0e09ccf5ce5f21eb70580f071a5a24f33f57fd52. GitHub Pages45449918762 succeeded and Pages build API reports built at that exact revision. Ordinary live https://resi.org/people/#work-at-resi verified at1280/390px: correct AI Safety Researcher → AJO33484, preserved culture/hiring outlook and cards, new-tab isolation, visible2px keyboard focus, no horizontal overflow. Live Search query AI Safety Researcher returns Work at RESI and new excerpt. Exact publication diff contains only People/Search HTML. Other production pages, domain/independent endpoints and previews preserved.

Full job-page local commitd214ba6 remains unpushed/unmerged/unpublished. Proof lives in preview checkout output/proof, including live-people-1280.png, live-people-390.png and live-link-checks.json. Preview origin http://127.0.0.1:4528 is local to Rachel’s computer; not an externally shareable deployment. Pending decision: Rachel’s review of page copy/layout before any resi.org publication or People relink to the new route.


November24 wording refinement: Rachel requested an explicit nonacademic equivalent in the hero. Summary now reads “Postdoctoral level and above, or equivalent research experience in industry or independent research”; page description matches. Qualifications already include equivalent industry/independent research levels and remain unchanged. Local preview only; no AJO or live-site edit. Astro check60 files/zero diagnostics, build and whitespace passed. Browser review confirms the exact summary and natural wrapping without overflow at487px actual inner width; viewport override reset.

November24 grammar correction: Rachel requested “core researchers, academics, and practitioners” in both versions. Updated and submitted the published AJO job33484 description, retaining its posting date and NoEEO setting; ordinary listing reload confirms the corrected sentence. Applied the same correction to this local website preview and rebuilt; browser reload confirms it. Astro check60 files/zero diagnostics, build and whitespace pass. Website page remains unpublished. AJO proof: output/proof/ajo-and-correction.png; website screenshot refreshed at the established preview image path.

November24 application controls: Rachel approved “← Work at RESI” as the return-link label, “Apply” for both buttons and small text beneath each stating “Applications are submitted through AcademicJobsOnline (AJO).” Implemented in the local preview; both exact AJO destinations and rolling-review note retained. Arrow is decorative for accessibility. Shared button styling unchanged; explanatory text uses14px muted styling. Astro check60 files/zero diagnostics, build/whitespace and rendered labels/destinations/no-overflow checks pass. Screenshot refreshed. No AJO edit or website publication.

November24 superseding button wording: Rachel selected “Apply on AJO” for both buttons and removed the explanatory sentence beneath each. Removed the unused explanatory-text style. Return link, rolling-review note, application instructions and both AJO33484 targets retained. Astro check60 files/zero diagnostics, build/whitespace and browser exact-label/removal/destination/no-overflow checks pass; screenshot refreshed. Local preview only, still unpublished.


## Full-page publication approved — November24
Rachel approved publishing the reviewed page and linking it in Join us, superseding the earlier preview-only restriction. Final contact line uses14px muted text/link and28px top margin, matching the rolling-review note. Route is now indexable/canonical, with Search entry and sitemap; People → Work at RESI points internally to the role page. Two Apply on AJO links go to job33484. No Home promotion, new promises or forms. Fresh source738ea87/main0e09ccf, PR150 preserved. Release checkout `output/resi-researcher-launch-nov24`, publication `output/resi-publish-researcher-page-nov24`. Check60files/zero diagnostics/build/whitespace and local390px visual/contact-style/link review passed. Generated scope only People/Search/sitemap/new job HTML. Publication/live evidence follows.


## Launch completed — November24
Source PR366 merged at5ceaffa655c40de0714fa22fcb1c30e957464b20 (applicationc0e31ce). Generated production PR367 merged at75ed06c164bf7ce4844ddfc3b87d77d0222023a1 (applicationc6d6244). GitHub Pages45471265674 succeeded and Pages API confirms built at that production revision. Ordinary live People → Work at RESI link opens https://resi.org/jobs/ai-safety-researcher/. Live1280/390px no overflow, both exact Apply on AJO targets/new-tab isolation, corrected environment sentence, public canonical/no noindex, and contact14px/muted color matching review note with28px margin verified. Live Search query AI Safety Researcher shows the dedicated role result and Work at RESI; role link navigates correctly. Viewport reset; no forms submitted. Proof in output/resi-researcher-launch-nov24/output/proof and the established visualization folder. Only job HTML, People HTML, Search HTML and sitemap were published; all other assets/pages/domain/independent endpoints remain unchanged. The local4528 page remains a retained review copy; the continuing source and live public route are now canonical. No further AJO changes were needed for this website launch.
