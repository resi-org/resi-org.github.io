# Archived workshop review routes

Rachel requested removing every alternative workshop version from public hosting on November 27, after selecting the compact program for the canonical workshop. These three route wrappers are preserved as text outside src/pages so builds cannot generate public preview URLs. Do not restore public previews without a new explicit request.

Reusable roster/integrated/compact implementations remain in src/components/WorkshopLayoutPreview.astro; compact mode serves the canonical workshop. Square crops remain in src/data/workshop-compact-portraits.ts. Last complete source revision with all three routes:8fc0a29ca5283432126d45ec38ea3dabcc57a7fa; production:d8779dd488f14f438711a9a9afe1ce684d8adabd. Existing briefs, screenshots and version history preserve the earlier layouts and decisions.

For future local-only review, copy a wrapper to src/pages/previews with its original .astro filename and relative import. Remove it before publication unless Rachel explicitly authorizes hosting. No redirects or replacement public preview pages should be generated.
