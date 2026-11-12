import { getCollection } from 'astro:content';
import {
  eventTiming, compareAnnouncementDates,
  type NewsPlacement, type EventPlacement, type EventTiming, type PastAnnouncement,
} from './event-announcement-policy';

// Shared records remain complete for News and Events. Home applies its separate
// eligibility, upcoming-event priority and three-slot selection policy.
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

export type NewsEntry = BaseEntry & NewsPlacement & {
  category: 'News';
  summaryFormat: 'plain' | 'quote';
  homepageReviewReason?: string;
};
export type EventEntry = BaseEntry & EventPlacement & {
  category: 'Events';
  start: Date;
  end?: Date;
  timing: EventTiming;
  pastAnnouncement?: PastAnnouncement;
  location: string;
  announcementLabel?: string;
  description?: string;
  interestUrl?: string;
  interestLabel?: string;
  anchor?: string;
  detailsHref?: string;
  /** Confirmed lineup. Rendered only where a card asks for it (Events). */
  speakers: { name: string; affiliation?: string }[];
  speakersLabel?: string;
  hosts: string[];
  hostsLabel?: string;
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

export async function getAnnouncements(now = new Date()): Promise<Entry[]> {
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
    source: u.data.source,
    summaryFormat: u.data.summaryFormat,
    homepage: u.data.homepage,
    homepageReviewReason: u.data.homepageReviewReason,
    outlet: u.data.outlet,
    byline: u.data.byline,
    body: (u.body || '')
      .trim()
      .split(/\n\s*\n/)
      .map((p) => p.replace(/\s+/g, ' ').trim())
      .filter(Boolean),
  }));
  const events: EventEntry[] = (await getCollection('events')).map((e) => {
    const timing = eventTiming(e.data, now);
    return {
      id: `event-${e.id}`,
      category: 'Events',
      date: timing === 'past' && e.data.pastAnnouncement
        ? e.data.pastAnnouncement.date : e.data.announced || e.data.start,
      start: e.data.start,
      end: e.data.end,
      timing,
      eventType: e.data.eventType,
      audience: e.data.audience,
      homepage: e.data.homepage,
      detailsHref: e.data.detailsHref,
      pastAnnouncement: e.data.pastAnnouncement,
      location: e.data.location,
      announcementLabel: e.data.announcementLabel,
      description: timing === 'upcoming' ? e.data.description : e.data.pastAnnouncement?.description,
      interestUrl: e.data.interestUrl,
      interestLabel: e.data.interestLabel,
      anchor: e.data.anchor,
      speakers: e.data.speakers,
      speakersLabel: e.data.speakersLabel,
      hosts: e.data.hosts,
      hostsLabel: e.data.hostsLabel,
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
    };
  });
  return [...updates, ...events].sort(compareAnnouncementDates);
}
