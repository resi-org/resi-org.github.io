import assert from 'node:assert/strict';
import test from 'node:test';
import { eventTiming, isHomepageAnnouncement, selectHomepageAnnouncements } from '../src/lib/event-announcement-policy.ts';

const news = (id, date, extra = {}) => ({ id, date: new Date(date), category: 'News', ...extra });
const globe = news('update-2026-09-16-boston-globe', '2026-09-16');
const launch = news('update-2026-09-16-launch', '2026-09-16');
const verification = news('update-2026-09-18-formal-verification', '2026-09-18');
const report = news('update-2026-11-02-provable-inference', '2026-11-02');
const workshop = {
  id: 'event-2026-12-04-inaugural-workshop', category: 'Events',
  date: new Date('2026-11-02'), start: new Date('2026-12-04'),
  timing: 'upcoming', eventType: 'community', audience: 'unspecified', homepage: 'auto',
};
const ids = (entries) => entries.map(({ id }) => id);

test('ordinary news defaults to eligibility; explicit exclusions and review holds stay off Home', () => {
  assert.equal(isHomepageAnnouncement(report), true);
  assert.equal(isHomepageAnnouncement({ ...report, homepage: 'auto' }), true);
  assert.equal(isHomepageAnnouncement({ ...report, homepage: 'exclude' }), false);
  assert.equal(isHomepageAnnouncement({ ...report, homepage: 'review', homepageReviewReason: 'Unconfirmed institutional involvement' }), false);
});

test('the acceptance sequence displaces Globe only from Home and preserves all archive records', () => {
  const entries = [globe, launch, verification, report, workshop];
  const before = [...entries];
  assert.deepEqual(ids(selectHomepageAnnouncements(entries)), [workshop.id, report.id, verification.id]);
  assert.deepEqual(entries, before);
  assert.ok(entries.filter(e => e.category === 'News').includes(globe));
});

test('upcoming event priority survives newer News publication dates and the total never exceeds three', () => {
  const latest = news('latest', '2026-11-04');
  assert.deepEqual(ids(selectHomepageAnnouncements([latest, globe, report, workshop])), [workshop.id, latest.id, report.id]);
  const events = [1, 2, 3, 4].map(i => ({ ...workshop, id: `event-${i}`, date: new Date(`2026-10-0${i}`) }));
  assert.deepEqual(ids(selectHomepageAnnouncements([latest, ...events])), ['event-4', 'event-3', 'event-2']);
});

test('both priority groups have deterministic tie ordering regardless of input order', () => {
  const entries = [report, { ...report, id: 'a-news' }, workshop, { ...workshop, id: 'a-event' }];
  const expected = ['a-event', workshop.id, 'a-news'];
  assert.deepEqual(ids(selectHomepageAnnouncements(entries)), expected);
  assert.deepEqual(ids(selectHomepageAnnouncements([...entries].reverse())), expected);
});

test('expired events yield their slot; approved retrospectives use normal recency without upcoming priority', () => {
  const expired = { ...workshop, timing: eventTiming(workshop, new Date('2026-12-05T05:00:00Z')) };
  const entries = [globe, verification, report, expired];
  assert.deepEqual(ids(selectHomepageAnnouncements(entries)), [report.id, verification.id, globe.id]);
  const retrospective = { ...expired, date: new Date('2026-09-17'), pastAnnouncement: { date: new Date('2026-09-17') } };
  assert.deepEqual(ids(selectHomepageAnnouncements([globe, verification, report, retrospective])), [report.id, verification.id, retrospective.id]);
});

test('exclusions preserve archive records; ordinary entries need no homepage-specific copy', () => {
  const excluded = { ...report, homepage: 'exclude' };
  const held = news('held', '2026-11-03', { homepage: 'review', homepageReviewReason: 'Confirm attribution' });
  const entries = [excluded, held, verification, globe, launch];
  assert.deepEqual(ids(selectHomepageAnnouncements(entries)), [verification.id, globe.id, launch.id]);
  assert.equal(entries.length, 5);
  assert.ok(!('homepageSummary' in verification));
});
