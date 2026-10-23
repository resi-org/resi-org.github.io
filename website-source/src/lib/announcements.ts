import { getCollection } from 'astro:content';

// One dated list from both content collections: updates (news, publications,
// talks) and events (the convening ledger). Used by the News page (all of
// them) and the homepage (the three most recent). Newest first.
export type Entry = {
  id: string;
  date: Date;
  kind?: string;
  source?: string;
  title: string;
  homepageTitle?: string;
  homepageSummary?: string;
  summary?: string;
  url?: string;
  /** The markdown file's body, as plain paragraphs. Shown on News only. */
  body?: string[];
  /** Press coverage: the publication that ran the piece, and the reporter.
   *  When `outlet` is set, `title` is that publication's headline. */
  outlet?: string;
  byline?: string;
};

export const fmtDay = (d: Date) =>
  d.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  });

const fmtSpan = (a: Date, b?: Date) => {
  if (!b) return fmtDay(a);
  const sameMonth =
    a.getUTCFullYear() === b.getUTCFullYear() && a.getUTCMonth() === b.getUTCMonth();
  const start = a.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
    ...(sameMonth ? {} : { year: 'numeric' }),
  });
  return sameMonth
    ? `${start}–${b.getUTCDate()}, ${b.getUTCFullYear()}`
    : `${start} – ${fmtDay(b)}`;
};

export async function getAnnouncements(): Promise<Entry[]> {
  const updates: Entry[] = (await getCollection('updates')).map((u) => ({
    id: `update-${u.id}`,
    date: u.data.date,
    kind: u.data.category,
    title: u.data.title,
    homepageTitle: u.data.homepageTitle,
    homepageSummary: u.data.homepageSummary,
    summary: u.data.summary,
    url: u.data.url,
    source: u.data.outlet || (u.data.url?.startsWith('https://www.lesswrong.com/') ? 'LessWrong' : undefined),
    outlet: u.data.outlet,
    byline: u.data.byline,
    body: (u.body || '')
      .trim()
      .split(/\n\s*\n/)
      .map((p) => p.replace(/\s+/g, ' ').trim())
      .filter(Boolean),
  }));
  const events: Entry[] = (await getCollection('events')).map((e) => ({
    id: `event-${e.id}`,
    date: e.data.start,
    kind: 'From the institute',
    title: e.data.title,
    summary: [
      fmtSpan(e.data.start, e.data.end),
      e.data.location,
      e.data.with.length ? `with ${e.data.with.join(', ')}` : '',
    ]
      .filter(Boolean)
      .join(', '),
    url: e.data.url,
  }));
  return [...updates, ...events].sort((a, b) => b.date.valueOf() - a.date.valueOf());
}
