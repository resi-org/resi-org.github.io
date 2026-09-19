# RESI website

The public website is [resi.org](https://resi.org/). The September 18 redesign is available at [resi.org/test/](https://resi.org/test/). GitHub Pages serves the repository root from the `main` branch. Keep `CNAME` set to `resi.org` and retain `.nojekyll` so the generated `_next` assets are served.

## Public homepage

The root `index.html` is the public homepage, restored exactly from commit `258a44d` (September 17, 2026), immediately before the September 18 publication. Edit this HTML directly for homepage changes; its portraits are in `assets/people/`.

## Editing and publishing the preview

The editable Next.js/React preview source is in `site/app/`; images are in `site/public/`. The files under `test/` are generated publishing files. The preview uses the `/test` base path, including its image and icon URLs.

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

The build statically exports the preview and replaces only the generated `test/` directory. It preserves the root homepage, domain, and legacy `assets/` files. Commit both the source changes and the generated files. GitHub Pages then publishes that commit.

No server, Cloudflare bindings, API keys, or Sites credentials are needed. Existing image assets under `assets/` remain available for compatibility with older links.

This version preserves the approved website design and content, including the corrected WHAT WE DO / WHY WE EXIST introductions, the three WHAT WE DO slides, and the five HOW WE DO IT slides.
