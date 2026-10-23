# selected-research.json

The papers shown on the Research page, with the one-line description of what
each does. Order in this file is the order on the page.

Each entry:

```
{
  "title":   "Paper title as published",
  "authors": "Initials and surnames, as on the paper, comma-separated",
  "venue":   "Venue and year, e.g. ICML 2026",
  "url":     "https://…  (the title links here)",
  "note":    "One or two sentences saying what the paper does.",
  "placement": "verification"
}
```

`placement` decides where the entry appears:

- `verification`, `control`, `limits`, `cryptography` — retained organizational tags for the 13 general papers, now shown together under Research collection. These tags are not the current research directions; those come from `src/data/research-agenda.json`.
- `wg-<group id>` — within that working group, and only that one. There is a placement per group, not one shared
  `working-groups` bucket: with a shared bucket a second group with papers
  would have shown the first group's as well. Adding a group means adding its
  placement to the enum in `src/content.config.ts`, which is deliberate — a
  typo then fails the build instead of silently showing nothing.

"AI-assisted research" carried a paper under the same device until
2026-09-20, when Rachel removed it; the section is prose alone now. Its
entry, *Generative Modeling for Mathematical Discovery*, is in the git
history and still appears in Andrew V. Sutherland's publications on People.

`anchor` is optional: it puts an id on the entry's row so prose elsewhere can
link to that exact paper. Every current entry has a stable anchor used by search and cross-references.

Citation style, settled 2026-09-19 with the foundational review
(`research/foundational-review/citation-audit.html`):

- Title, version and venue must match one record, and the link goes to that
  version — not to a preprint of a paper cited by its published title
  (Rachel, 2026-09-19). Where a preprint and a conference version differ,
  link the one the title belongs to and name the other: "Preprint, 2024
  (revised 2026) · Conference version: NeurIPS 2025".
- Spell the title as the record spells it, including "Modeling" vs
  "Modelling".
- An unverified proceedings line is written as a preprint: "Preprint, 2025".
- Authors are initials and surnames in the published order, separated by
  commas with no "and", and no author is moved ahead of their coauthors.

`featured` orders the six homepage examples. `highlight` preserves the short heading, topic/status tag, byline where supplied, and explanation from Shafi’s HTML. A supplementary `caveat` stays beside the claim. Full citation fields remain canonical and shared with Research and biography references. Do not replace verified publication metadata with an older preprint label.

Nothing here is generated. A paper appears on the site only if it is listed
in this file, and the description is the curator's, not the paper's abstract.
