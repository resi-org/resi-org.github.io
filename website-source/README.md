# RESI website source

This Astro project builds the current design for https://resi.org. Hosting is GitHub Pages; the Cloudflare drafts are historical references.

Read [Start here](docs/website/START-HERE.md), [current work](docs/website/WORKLIST.md), and the repository's [working instructions](../AGENTS.md) before editing. Check the current branch: a preview can be ahead of the live site.

With Node 22.12 or a supported newer release:

```sh
npm ci
npm run dev -- --host 127.0.0.1
npm run check
npm run build
```

The dist/ directory is generated output. Building does not publish. Publication uses a separate branch and checkout as described in the guide. Do not merge this source branch into main.

Current approved design uses the October 25 native display dimensions; browser zoom remains 100%. Preserve shared CSS and responsive behavior rather than restoring dimensions from earlier drafts.

The [previous source README](docs/website/archive/source-readme-before-setup-2026-11-02.md) retains sizing history and the November 2 event rule. The current guide and work list reconcile their present status.
