// Shared static markup also serves the imported seminar HTML. No content is injected.
export function disclosureControl(showHint = true): string {
  const hint = showHint ? '<span class="disclosure-control-label">details</span>' : '';
  return `<span class="disclosure-control" aria-hidden="true">${hint}<span class="disclosure-control-icon"><span class="disclosure-control-mark"><span></span><span></span><span></span><span></span></span></span></span>`;
}

export function seminarDisclosure(html: string): string {
  const summary = /(<summary\b[^>]*>)Details(<\/summary>)/g;
  if (!html.includes('class="seminar-details"') || !summary.test(html)) {
    throw new Error('Expected seminar details and labelled summary');
  }
  return html
    .replace(/(<div class="seminar-meta">)([\s\S]*?)(<details class="seminar-details")/, '$1<div class="seminar-citation">$2</div>$3')
    .replace('class="seminar-details"', 'class="seminar-details explanatory-disclosure"')
    .replace(summary, `$1${disclosureControl()}$2`);
}
