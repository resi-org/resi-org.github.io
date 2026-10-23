// Links that leave the site open in a new tab (Rachel, 2026-09-20). Spread
// the result onto an <a>: `{...external(href)}`.
//
// Only http(s) qualifies. `mailto:` deliberately does not — it hands off to a
// mail client, and a new tab for it leaves an empty window behind. Internal
// paths ("/research", "#areas") never do.
//
// `noopener` is the part that matters: without it the page opened this way
// can reach back at `window.opener`. `noreferrer` goes with it by convention.
export function external(href?: string) {
  return href && /^https?:\/\//i.test(href)
    ? { target: '_blank' as const, rel: 'noopener noreferrer' }
    : {};
}
