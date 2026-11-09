// Identity links refer to RESI itself, rather than articles about the institute.
export const organization = {
  '@context': 'https://schema.org',
  '@type': 'ResearchOrganization',
  '@id': 'https://resi.org/#organization',
  name: 'The Institute for Responsible Superintelligence',
  alternateName: 'RESI',
  url: 'https://resi.org/',
  logo: 'https://resi.org/mark-resi-human-circuit.png',
  description:
    'RESI (The Institute for Responsible Superintelligence) is a nonprofit AI safety research institute in Cambridge, Massachusetts, advancing safe-by-design superintelligence.',
  founder: [
    { '@type': 'Person', name: 'Shafi Goldwasser' },
    { '@type': 'Person', name: 'Adam Tauman Kalai' },
    { '@type': 'Person', name: 'Vinod Vaikuntanathan' },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Cambridge',
    addressRegion: 'MA',
    addressCountry: 'US',
  },
  sameAs: [
    'https://en.wikipedia.org/wiki/Institute_for_Responsible_Superintelligence',
    'https://www.linkedin.com/company/institute-resi',
    'https://x.com/RESI_org',
  ],
};
