export type EventTiming = 'upcoming' | 'past';

export type PastAnnouncement = {
  date: Date;
  label?: string;
  description?: string;
};

/** Date-only community events stay current through their last Cambridge day.
 * Static pages apply this policy when the site is built. */
export function eventTiming(event: { start: Date; end?: Date }, now = new Date()): EventTiming {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York', year: 'numeric', month: '2-digit', day: '2-digit',
  }).formatToParts(now);
  const part = (type: string) => parts.find((p) => p.type === type)!.value;
  const today = `${part('year')}-${part('month')}-${part('day')}`;
  const lastDay = (event.end || event.start).toISOString().slice(0, 10);
  return lastDay < today ? 'past' : 'upcoming';
}

/** Past event promotion is an explicit editorial decision, never a default. */
export function isHomepageAnnouncement(entry:
  | { category: 'News' }
  | { category: 'Events'; timing: EventTiming; pastAnnouncement?: PastAnnouncement },
): boolean {
  return entry.category === 'News' || entry.timing === 'upcoming' || !!entry.pastAnnouncement;
}
