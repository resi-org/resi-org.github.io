# RESI website

The public website is [resi.org](https://resi.org/). GitHub Pages serves the repository root from the `main` branch. Keep `CNAME` set to `resi.org` and retain `.nojekyll` so the generated `_next` assets are served.

## Editing and publishing

The editable Next.js/React source is in `site/app/`; images are in `site/public/`. The root HTML, JavaScript, styles, and images are generated publishing files, not the editing source.

With Node.js 22.13 or newer and pnpm installed:

```sh
cd site
pnpm install --frozen-lockfile
pnpm build
cd ..
git add .
git commit -m "Update RESI website"
git push origin main
```

The build statically exports the site and copies it into the repository root without changing the domain or legacy `assets/` files. Commit both the source changes and the generated files. GitHub Pages then publishes that commit.

No server, Cloudflare bindings, API keys, or Sites credentials are needed. Existing image assets under `assets/` remain available for compatibility with older links.

This version preserves the approved website design and content, including the corrected WHAT WE DO / WHY WE EXIST introductions, the three WHAT WE DO slides, and the five HOW WE DO IT slides.
