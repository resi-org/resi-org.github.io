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
