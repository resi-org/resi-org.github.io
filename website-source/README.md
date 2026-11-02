# Production c.2 source snapshot — October 23, 2026

Build with Node 22.12+ (or a supported newer release): `npm ci`, `npm run check`, `npm run build`.

This is the approved c.2 source copied from Rachel's working draft, with production hosting changes only: static directory output, resi.org canonical URLs and sitemap, indexing enabled, GitHub hosting privacy copy, internal review page excluded, and old homepage team anchors preserved. All design styles and images are retained.

Publish `dist/` contents to the production repository root via a reviewed pull request. Preserve CNAME, .nojekyll, seminar-zoom/, reading-group/, assets/, site/ and test/. Do not publish this source directory to the website root. See the main branch README for restoration instructions.

The original Cloudflare draft remains separate. Future changes there must be copied into this source snapshot before rebuilding.

## Default display size, October 23, 2026

Rachel approved making the appearance previously seen at 90% browser zoom the site's normal design size. CSS pixel dimensions and responsive breakpoints are now 10% smaller across the site, including typography, columns, spacing and icons. Relative em units and viewport-relative values retain their ratios; browser zoom and the viewport scale stay at their ordinary defaults. This is the design for every visitor, with no per-browser or saved-user preference. The original source snapshot remains on codex/c2-source-2026-10-23.

## Corrected screenshot reference, October 25, 2026

Safari settings confirmed that the C.2 reference is viewed at 75% page zoom while resi.org is viewed at 100%. The previous 90% design was therefore 20% larger than the reference. Native CSS dimensions now match 75% of the original C.2 design (5/6 of the previous production dimensions). Browser zoom and viewport scale remain untouched. The desktop content column is 600px, homepage heading 39px, and body text 12.75px. Sticky page contents and 44px mobile contents controls are preserved.


## Upcoming events and homepage announcements — standing rule, November 2, 2026

Every publicly announced upcoming event must appear both on the Events page and in the homepage Announcements section. The homepage announcement must link to the matching event's stable anchor or detail page; Dates, title, location, status, and action destination must agree. Flag a missing counterpart, broken link, or conflicting information before publishing an event update; do not silently publish only one side.

The planned Events page will replace Seminars, with workshops and a separate seminar section. That migration is explicitly deferred. The December 4 opening workshop currently appears only on the homepage: its missing Events-page counterpart is a known gap to resolve during that migration, not a reason to mislabel it as a weekly seminar now. The existing seminar listing remains unchanged.

Maintain one shared event record when implementing the Events page, and add a publishing check that flags an upcoming event missing from either view. Promotion ends after the event; retain the event entry, stable link, and any later materials in the archive. Until shared data and the check exist, this is a manual publication checklist, not automated enforcement.
