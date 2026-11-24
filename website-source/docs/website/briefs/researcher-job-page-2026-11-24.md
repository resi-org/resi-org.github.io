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
