# Production c.2 source snapshot — October 23, 2026

Build with Node 22.12+ (or a supported newer release): `npm ci`, `npm run check`, `npm run build`.

This is the approved c.2 source copied from Rachel's working draft, with production hosting changes only: static directory output, resi.org canonical URLs and sitemap, indexing enabled, GitHub hosting privacy copy, internal review page excluded, and old homepage team anchors preserved. All design styles and images are retained.

Publish `dist/` contents to the production repository root via a reviewed pull request. Preserve CNAME, .nojekyll, seminar-zoom/, reading-group/, assets/, site/ and test/. Do not publish this source directory to the website root. See the main branch README for restoration instructions.

The original Cloudflare draft remains separate. Future changes there must be copied into this source snapshot before rebuilding.
