# RESI website

The public website is [resi.org](https://resi.org/). The September 18 redesign is available at [resi.org/test/](https://resi.org/test/). GitHub Pages serves the repository root from the `main` branch. Keep `CNAME` set to `resi.org` and retain `.nojekyll` so the generated `_next` assets are served.

## Public homepage

The root `index.html` is the public homepage, restored exactly from commit `258a44d` (September 17, 2026), immediately before the September 18 publication. Edit this HTML directly for homepage changes; its portraits are in `assets/people/`.

## Seminars and visitors

The seminar page is in `seminars/index.html`, linked from the homepage. Add confirmed upcoming talks above the archive. After a talk takes place, move its entry to the top of Past seminars and add it to the archive navigation, preserving earlier entries and stable links. Include the speaker and affiliation, date, time, title, abstract, biography, and confirmed location from the seminar announcement. Keep biographies as they appeared at the time of the talk. Also add visiting seminar speakers to the homepage’s Past Visitors list, without duplicating existing names. Add visitors only after their visits have taken place.

The initial archive covers the September 16, September 23, and October 7, 2026 seminars, using their RESI announcement emails. There was no seminar on September 30. The October 12 visitor update was checked against Emily’s October 11 email, the October 12–16 “This Week at RESI” update, and the visit correspondence.

## Seminar Zoom short URL

[resi.org/seminar-zoom](https://resi.org/seminar-zoom) forwards to the current seminar’s Zoom meeting. To update the destination, set `url` in `seminar-zoom/destination.json` to the complete HTTPS Zoom invitation URL, including any meeting passcode in its query string, and publish the change. Set it to `null` to display “Will be added soon”. This destination is public, so use a link intended for seminar attendees to share.

GitHub Pages currently serves HTML with `Cache-Control: max-age=600`. The short URL therefore keeps its destination in a separate JSON file. On each visit, history restoration, and return to a background tab, it fetches that file with `cache: "no-store"` and a unique query string to avoid reusing browser or CDN cache entries. The HTML shell can be cached without freezing the destination. Forwarding uses `location.replace`, not a permanent HTTP redirect to the meeting. JavaScript is required for forwarding; network or configuration errors show a retry button instead of using a stale destination.

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
