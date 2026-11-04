export type NewsPlacement = { homepage?: 'auto' | 'exclude' | 'review' };

export type EventTiming = 'upcoming' | 'past';
export type EventType = 'community' | 'seminar' | 'reading-group' | 'working-group' | 'other';
export type EventPlacement = {
  eventType: EventType;
  audience: 'public' | 'unspecified';
  homepage: 'auto' | 'include' | 'exclude';
};

/** Series/group records belong in their canonical section, not Community events. */
export function isSeriesEvent(eventType: EventType): boolean {
  return ['seminar', 'reading-group', 'working-group'].includes(eventType);
}

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

/** Explicit exclusions win; series require opt-in even when open to the public.
 * A past event always needs a separately approved retrospective announcement. */
export function isHomepageAnnouncement(entry:
  | (NewsPlacement & { category: 'News' })
  | (EventPlacement & { category: 'Events'; timing: EventTiming; pastAnnouncement?: PastAnnouncement }),
): boolean {
  if (entry.category === 'News') return !entry.homepage || entry.homepage === 'auto';
  if (entry.homepage === 'exclude') return false;
  if (entry.timing === 'past') return !!entry.pastAnnouncement;
  if (entry.homepage === 'include') return true;
  if (isSeriesEvent(entry.eventType)) return false;
  return entry.eventType === 'community' || entry.audience === 'public';
}

type SelectableAnnouncement = Parameters<typeof isHomepageAnnouncement>[0] & {
  id: string;
  date: Date;
};

/** Stable date ordering also keeps News archive ties independent of loader order. */
export function compareAnnouncementDates(
  a: { id: string; date: Date }, b: { id: string; date: Date },
): number {
  return b.date.valueOf() - a.date.valueOf() || (a.id < b.id ? -1 : a.id > b.id ? 1 : 0);
}

/** Upcoming eligible events lead; newest news/approved retrospectives fill three slots.
 * Sorting a copy preserves the full shared records for News and Events archives. */
export function selectHomepageAnnouncements<T extends SelectableAnnouncement>(entries: T[]): T[] {
  const priority = (entry: T) => entry.category === 'Events' && entry.timing === 'upcoming' ? 0 : 1;
  return entries.filter(isHomepageAnnouncement)
    .sort((a, b) => priority(a) - priority(b) || compareAnnouncementDates(a, b))
    .slice(0, 3);
}
