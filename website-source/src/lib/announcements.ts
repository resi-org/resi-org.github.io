import { getCollection } from 'astro:content';

// Shared announcement records for Home and News. Home takes the three most
// recent across news and community events; News filters to its own category.
// Events sort by their announcement date, separately from their attendance date.
type BaseEntry = {
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

export type NewsEntry = BaseEntry & { category: 'News' };
export type EventEntry = BaseEntry & {
  category: 'Events';
  start: Date;
  end?: Date;
  location: string;
  announcementLabel?: string;
  description?: string;
  interestUrl?: string;
  interestLabel?: string;
  anchor?: string;
};
export type Entry = NewsEntry | EventEntry;

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
    category: 'News',
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
  const events: EventEntry[] = (await getCollection('events')).map((e) => ({
    id: `event-${e.id}`,
    category: 'Events',
    date: e.data.announced || e.data.start,
    start: e.data.start,
    end: e.data.end,
    location: e.data.location,
    announcementLabel: e.data.announcementLabel,
    description: e.data.description,
    interestUrl: e.data.interestUrl,
    interestLabel: e.data.interestLabel,
    anchor: e.data.anchor,
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
