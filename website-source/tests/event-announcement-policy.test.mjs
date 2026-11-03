import assert from 'node:assert/strict';
import test from 'node:test';
import { eventTiming, isHomepageAnnouncement } from '../src/lib/event-announcement-policy.ts';

const workshop = { start: new Date('2026-12-04') };
const upcoming = {
  category: 'Events', timing: 'upcoming', eventType: 'community',
  audience: 'unspecified', homepage: 'auto',
};

test('future events retain the upcoming treatment', () => {
  assert.equal(eventTiming(workshop, new Date('2026-11-03T12:00:00Z')), 'upcoming');
});

test('a date-only event stays current until its Cambridge day finishes', () => {
  assert.equal(eventTiming(workshop, new Date('2026-12-05T04:59:59Z')), 'upcoming');
  assert.equal(eventTiming(workshop, new Date('2026-12-05T05:00:00Z')), 'past');
});

test('multi-day events use their last day', () => {
  const multiDay = { ...workshop, end: new Date('2026-12-06') };
  assert.equal(eventTiming(multiDay, new Date('2026-12-06T17:00:00Z')), 'upcoming');
  assert.equal(eventTiming(multiDay, new Date('2026-12-07T05:00:00Z')), 'past');
});

test('the date boundary also follows Cambridge daylight-saving time', () => {
  const summer = { start: new Date('2026-07-01') };
  assert.equal(eventTiming(summer, new Date('2026-07-02T03:59:59Z')), 'upcoming');
  assert.equal(eventTiming(summer, new Date('2026-07-02T04:00:00Z')), 'past');
});

test('past events stay out of the homepage without explicit approval', () => {
  assert.equal(isHomepageAnnouncement({ ...upcoming, timing: 'past' }), false);
});

test('an explicit retrospective announcement makes a past event eligible', () => {
  assert.equal(isHomepageAnnouncement({
    ...upcoming, timing: 'past', pastAnnouncement: { date: new Date('2026-12-08') },
  }), true);
});

test('upcoming events and news remain eligible for the latest-three feed', () => {
  assert.equal(isHomepageAnnouncement(upcoming), true);
  assert.equal(isHomepageAnnouncement({ category: 'News' }), true);
});

for (const eventType of ['seminar', 'reading-group', 'working-group']) {
  test(`${eventType} stays off Home even when public; explicit inclusion overrides`, () => {
    const event = { ...upcoming, eventType, audience: 'public' };
    assert.equal(isHomepageAnnouncement(event), false);
    assert.equal(isHomepageAnnouncement({ ...event, homepage: 'include' }), true);
    assert.equal(isHomepageAnnouncement({ ...event, homepage: 'include', timing: 'past' }), false);
    assert.equal(isHomepageAnnouncement({
      ...event, timing: 'past', pastAnnouncement: { date: new Date('2027-01-08') },
    }), true);
  });
}

test('other events require a public audience or an explicit homepage request', () => {
  const other = { ...upcoming, eventType: 'other' };
  assert.equal(isHomepageAnnouncement(other), false);
  assert.equal(isHomepageAnnouncement({ ...other, audience: 'public' }), true);
  assert.equal(isHomepageAnnouncement({ ...other, homepage: 'include' }), true);
});

test('explicit exclusion wins over community, public and retrospective defaults', () => {
  assert.equal(isHomepageAnnouncement({ ...upcoming, homepage: 'exclude' }), false);
  assert.equal(isHomepageAnnouncement({ ...upcoming, audience: 'public', homepage: 'exclude' }), false);
  assert.equal(isHomepageAnnouncement({
    ...upcoming, timing: 'past', homepage: 'exclude',
    pastAnnouncement: { date: new Date('2027-01-08') },
  }), false);
});
