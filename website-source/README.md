# Production c.2 source snapshot — October 23, 2026

Build with Node 22.12+ (or a supported newer release): `npm ci`, `npm run check`, `npm run build`.

This is the approved c.2 source copied from Rachel's working draft, with production hosting changes only: static directory output, resi.org canonical URLs and sitemap, indexing enabled, GitHub hosting privacy copy, internal review page excluded, and old homepage team anchors preserved. All design styles and images are retained.

Publish `dist/` contents to the production repository root via a reviewed pull request. Preserve CNAME, .nojekyll, seminar-zoom/, reading-group/, assets/, site/ and test/. Do not publish this source directory to the website root. See the main branch README for restoration instructions.

The original Cloudflare draft remains separate. Future changes there must be copied into this source snapshot before rebuilding.

## Default display size, October 23, 2026

Rachel approved making the appearance previously seen at 90% browser zoom the site's normal design size. CSS pixel dimensions and responsive breakpoints are now 10% smaller across the site, including typography, columns, spacing and icons. Relative em units and viewport-relative values retain their ratios; browser zoom and the viewport scale stay at their ordinary defaults. This is the design for every visitor, with no per-browser or saved-user preference. The original source snapshot remains on codex/c2-source-2026-10-23.
