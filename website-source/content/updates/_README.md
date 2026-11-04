# News updates — one shared record

Add a verified item once in `content/updates/YYYY-MM-DD-slug.md`. Its truthful source publication/announcement date controls News order; do not redate historical material for Home placement. Preserve original headlines in `title` and original links in `url`. Check the archive for duplicates first. Keep private correspondence and unapproved claims out of these public records.

Required fields: `title`, `date`, `source` (publisher/platform), `url`, `summary`, and `category` (`From the institute`, `Press`, or `Research`). Research includes external research involving an associated RESI researcher; it does not imply institute ownership. Source attribution appears on Home and News and is searchable. `byline` is optional; preserve approved existing reporter attribution.

`summary` is RESI's factual description by default (`summaryFormat: plain`). Use `summaryFormat: quote` only for a verified verbatim excerpt: News adds quotation marks. Naming a source or supplying legacy `outlet` does not imply quotation. Preserve scientific assumptions, limitations and accurate institutional relationships. Name researchers when their role explains the item.

Optional `homepageTitle`/`homepageSummary` shorten the Home listing. Without them, the validated full `title`/`summary` are used. Missing optional Home wording never warrants a promotion hold. News retains its full title, summary and source link. On Home, Press links externally; other News links to its stable `/news#update-<file-slug>` entry. Internal categories are not displayed as public labels.

## Automatic Home connection — applies to every contributor

Ordinary valid News is automatically eligible (`homepage: auto`, the default). Adam, Emily and other contributors do not create a second homepage record or need to request routine placement. `homepage: exclude` explicitly keeps an item off Home while preserving it on News and Search. For a genuinely unresolved promotion decision, use `homepage: review` with a specific `homepageReviewReason`; record it in WORKLIST for Rachel's review in Master NEWS. Never hold a routine item merely to ask about placement.

Home selects at most **three entries total**:

1. Eligible upcoming event announcements first, newest announcement date first.
2. Fill remaining places with newest eligible News and explicitly approved event retrospectives, by publication/announcement date.
3. Equal dates use stable record ID ascending, independent of loader order.

Eligibility does not guarantee a visible slot. Displaced News remains on News and Search with its original date/link. Event eligibility is governed by [EVENT-ROUTING.md](../../docs/website/EVENT-ROUTING.md): series/groups require explicit promotion, and past events require Rachel's explicit retrospective opt-in. Upcoming status alone is insufficient.

For the November 2 Anthropic report, while December 4 is upcoming, acceptance order is workshop → Anthropic → September 18 LessWrong; Boston Globe remains on News. The shared selector lives in `src/lib/event-announcement-policy.ts`; Home must use it instead of a separate date-only feed.

## Verification and publication

Run `npm run test:announcements`, `npm run check`, and `npm run build`. Check actual Home selection, News archive and quotations, stable/source links, Search, metadata, and desktop/phone layouts. Do not infer Home visibility from eligibility. Schema validation rejects missing required facts and review holds without a reason.

This is a static site: timing is evaluated when built, through the final Cambridge event day. After expiry, a fresh build **and deployment** are required to change the delivered Home selection/treatment. No automatic rebuild is scheduled by this policy. Source commit/merge, reviewed publication, Pages deployment and live verification are separate stages. Contributors inherit these rules only after receiving the updated continuing source branch; adding a local record does not publish it.

The [November 4 reference research](../../docs/website/references/news-listings-2026-11-04/report.md) proposes 30–50 words/one or two sentences for News and 12–25 words/one sentence for Home as practical defaults, not strict limits or universal field standards. Rachel-approved item wording takes precedence.
