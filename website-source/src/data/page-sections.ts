import { showVisitingResearchers } from './visibility';

export interface PageSection {
  label: string;
  href: string;
}

// One section inventory drives the desktop header and the in-page mobile menus.
export const pageSections: Record<string, PageSection[]> = {
  '/about': [
    { label: 'How we work', href: '#how-we-work' },
    { label: 'What success looks like', href: '#progress' },
    { label: 'FAQ', href: '#questions' },
  ],
  '/research': [
    { label: 'Research outputs', href: '#approach' },
    { label: 'Research areas', href: '#areas' },
    { label: 'Working groups', href: '#concentration' },
    { label: 'Foundational research', href: '#evidence' },
  ],
  '/people': [
    { label: 'Founders', href: '#founders' },
    { label: 'Team', href: '#research' },
    ...(showVisitingResearchers ? [{ label: 'Visitors', href: '#visitors' }] : []),
    { label: 'Join us', href: '#get-involved' },
    { label: 'Affiliated groups', href: '#affiliated' },
  ],
  '/events': [
    { label: 'Upcoming workshops & events', href: '#community-events' },
    { label: 'Upcoming seminars', href: '#upcoming-seminars' },
    { label: 'Past seminars', href: '#past-seminars' },
  ],
};
