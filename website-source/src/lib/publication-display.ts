// Display-only labels: retain complete source metadata in the content collection.
const conciseVenues: Record<string, string> = {
  'Nature · Published April 22, 2026': 'Nature · 2026',
  'Preprint, May 2024; revised December 2025 · Conference version: NeurIPS 2025': 'NeurIPS · 2025',
  'Preprint, 2024 (revised December 2025) · Conference version: NeurIPS 2025': 'NeurIPS · 2025',
  'Preprint, 2025 (revised 2026) · Presented at IASEAI 2026': 'Presented at IASEAI · 2026',
  'Preprint, July 2025 · ICLR 2026': 'ICLR · 2026',
  'STOC 2025 · Preprint, November 2024': 'STOC · 2025',
  'FOCS 2026, accepted · Preprint, April 2026': 'FOCS · 2026 · Accepted',
  'Preprint, 2026 · Harvard Journal of Law & Technology, forthcoming': 'Harvard Journal of Law & Technology · Forthcoming (preprint 2026)',
  'Preprint, April 2026; revised June 2026': 'Preprint · 2026',
  'FOCS 2018 / JACM 2021': 'JACM · 2021',
};
export function publicationVenue(venue: string) {
  return conciseVenues[venue] ?? venue
    .replace(/^arXiv (\d{4})$/, 'Preprint · $1')
    .replace(/,? (\d{4})(?=($| \())/, ' · $1');
}
