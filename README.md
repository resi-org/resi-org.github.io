# RESI website — c.2 launch

The public website is https://resi.org/. GitHub Pages continues to publish the root of `main`; the domain, DNS, HTTPS, and hosting settings are unchanged.

## What changed on October 23, 2026

Published Rachel's c.2 design as static Astro output. Production uses directory-based page addresses, permits search indexing, identifies GitHub as the host on the privacy page, and excludes the internal design-review page. Fonts, portraits, styles, content and browser interactions come from c.2.

The seminar Zoom short URL and its destination JSON, reading-group page, older assets, and `/test/` preview are preserved. The Seminars page is now the c.2 version, retaining the existing talk anchors. Old `/mission`, `/announcements`, and `/home-announcements` addresses redirect to their replacements. The former homepage's team anchors forward to People.

## Restore the complete previous site

The exact pre-launch site is saved at tag `pre-c2-launch-2026-10-23` and branch `codex/pre-c2-backup-2026-10-23`, commit `1d3ad09984ee5797b555535da996a954e91c454b`.

In a **clean, fresh checkout** of this repository:

```sh
git switch main
git pull --ff-only
git switch -c restore-pre-c2
git restore --source=pre-c2-launch-2026-10-23 --staged --worktree -- .
git commit -m "Restore website from before c.2 launch"
git push -u origin restore-pre-c2
gh pr create --base main --head restore-pre-c2 --title "Restore pre-c.2 website" --body "Restore the exact saved pre-launch website."
```

Merge that pull request to republish the old site. No domain changes are needed. This creates a new commit and preserves the launch history. Wait for the GitHub Pages deployment to succeed, then check resi.org; cached pages may take several minutes to refresh. The full snapshot also restores the older seminar Zoom destination, so review any changes made after launch before restoring.

## Source and future updates

The production-ready source snapshot is in `website-source/` on branch `codex/default-size-90-source`. Use Node 22.12+ (or a supported newer release): `npm ci`, `npm run check`, then `npm run build`. Copy the resulting `dist/` contents into a clean publishing checkout, preserving `CNAME`, `.nojekyll`, `seminar-zoom/`, `reading-group/` and the retained legacy paths. Review and publish via a pull request to `main`. This source snapshot is separate from the continuing Cloudflare c.2 draft; carry over later approved draft changes deliberately.

## Seminar Zoom short URL

To change the seminar Zoom destination, edit `seminar-zoom/destination.json`. Keep its existing format and use the complete HTTPS invitation URL; `null` displays “Will be added soon”. The redirect checks the JSON with cache bypassing so future meetings do not require replacing the page shell.

## Launch checks

Astro diagnostics and build; internal page/asset/anchor validation; Chromium and WebKit at desktop and phone sizes; image loading, horizontal overflow, search, theme switching, disclosures, mobile navigation, old-address redirects, and comparison with the c.2 preview. Detailed launch evidence is retained in Rachel's local launch workspace.

## Smaller default design — October 23, 2026

The website now matches Rachel’s C.2 screenshot reference at normal 100% browser zoom. Safari settings verified on October 25 showed that the draft reference was displayed at 75%, not 90%; the native design dimensions have been corrected accordingly. Typography, column widths, spacing, icons, and responsive breakpoints were reduced in the CSS itself. No browser-specific zoom, local preference, or forced viewport scale is used. This applies to all pages of the c.2 website.

The previous c.2 sizing is preserved at tag `pre-smaller-default-2026-10-23`. The original pre-c.2 website remains preserved under its separate pre-launch tag.
