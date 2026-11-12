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

// A malformed archive entry must fail the build rather than reintroduce an
// upcoming-style venue/time into the compact past-seminar summary.
export function pastSeminarDisclosure(html: string): string {
  const citation = html.match(/<div class="seminar-meta">([\s\S]*?)<details class="seminar-details"([^>]*)>/);
  const date = citation?.[1].match(/<p class="date"><time datetime="(\d{4}-\d{2}-\d{2})">([^<]+)<\/time><\/p>/);
  const shortDate = date && new Date(`${date[1]}T12:00:00Z`).toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC',
  });
  const logistics = html.match(/<div class="seminar-logistics">\s*<h4>Event details<\/h4>\s*<p class="date"><time datetime="([^"]+)">[^<]+<\/time><\/p>\s*<p class="location">[\s\S]*?<\/p>\s*<\/div>\s*<\/div>\s*<\/details>/);
  if (!citation || !date || date[2] !== shortDate
    || citation[1].replace(/<p class="speaker">[\s\S]*?<\/p>/, '').replace(date[0], '').trim()
    || /\bopen(?:\s|=|$)/.test(citation[2])
    || !logistics || !logistics[1].startsWith(`${date[1]}T`)
    || (html.match(/class="location"/g) || []).length !== 1) {
    throw new Error('Past seminars must be closed, with speaker and date-only metadata, then a final Event details block containing the original time and location. See EVENT-ROUTING.md.');
  }
  return seminarDisclosure(html);
}
