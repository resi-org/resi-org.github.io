// Public institutional facts, checked against resi.org on 1 October 2026.
// Research ambitions are intentionally separate from a costed operating plan.
export const institute = {
  name: 'The Institute for Responsible Superintelligence',
  funding: 'mailto:funding@resi.org',
  contact: 'mailto:hello@resi.org',
  giving: 'https://www.every.org/resi',
  sponsor: { name: 'Edward Charles Foundation', url: 'https://edwardcharlesfoundation.org/' },
  supporters: ['Coefficient Giving', 'Schmidt Sciences', 'AISTOF'],
  announcements:
    'https://docs.google.com/forms/d/e/1FAIpQLScQF5-tTmDOiZJLnKHeYaF-w8CoRYQy36b5BBi5kACsXjoseQ/viewform',
  talks:
    'https://docs.google.com/forms/d/e/1FAIpQLSc6s3Vw8bT2lt6H1iCW8_XfXrQf3QJtVO0Du56JzmdT9VfJww/viewform',
  launch:
    'https://www.lesswrong.com/posts/BZHEczCfkD7ntC76t/launching-resi-the-institute-for-responsible',
  formalVerification:
    'https://www.lesswrong.com/posts/NDBbatEejiAtTAr3z/announcing-formal-verification-at-resi-the-institute-for',
};

// Research areas from Shafi’s review, with team-supplied descriptions.
// Keep the homepage, Research and search on this single source.
export { default as researchAgenda } from './research-agenda.json';
import agenda from './research-agenda.json';
export const areas = agenda.areas;

export const progress = [
  {
    title: 'Useful definitions',
  },
  {
    title: 'Mechanisms with guarantees',
  },
  {
    title: 'Possibility and impossibility results',
  },
  {
    title: 'Evidence about composition',
  },
  {
    title: 'Evaluated prototypes',
  },
  {
    title: 'Institutional insights',
  },
];

export const pathway = [
  { title: 'Research support', text: 'A sustained, independent research base' },
  { title: 'People and tools', text: 'Researchers, fellows, compute, and convening' },
  { title: 'Research outputs', text: 'Definitions, mechanisms, limits, and prototypes' },
  { title: 'Evaluation and adoption', text: 'Assessment by developers and institutions' },
  { title: 'Safer advanced AI', text: 'Contributions to more reliable systems and oversight' },
];

// Four supplied HTML answers, plus the two additional topics required by the brief using Draft B prose.
export const faq = [
  {
    id: 'superintelligence',
    question: 'What do you mean by superintelligence?',
    answer:
      'Superintelligence means systems that greatly exceed individual humans, and potentially expert teams, across a broad range of cognitive tasks.',
  },
  {
    id: 'proofs',
    question: 'Does a proof make an entire AI system safe?',
    answer:
      'No. A proof concerns a specified property in a specified model, under stated assumptions. Whether those assumptions describe a deployed system, and whether the property captures what people need, are separate questions.',
  },
  {
    id: 'testing',
    question: 'Does this replace testing or alignment research?',
    answer:
      'No. Formal analysis, empirical evaluation, and work on alignment address different parts of the problem. A useful design needs to be checked both against its specification and against the conditions in which it will operate.',
  },
  {
    id: 'independence',
    question: 'Why an independent institute?',
    answer:
      'RESI combines academic independence with sustained focus on the foundations of AI safety. It brings researchers together across fields, with an open, mission-first culture.',
  },
  {
    id: 'adoption',
    question: 'How can research shape AI systems and policy?',
    answer:
      'RESI designs with practical constraints in mind and tests promising constructions in real systems. We will share proofs of concept so that frontier AI developers can evaluate and adopt them. Success also means influencing policy and regulation in ways that support human flourishing.',
  },
  {
    id: 'other-disciplines',
    question: 'Do I need an AI safety background to participate?',
    answer:
      'We welcome inquiries from scientists whose tools could bear on these problems, whether or not they have worked on AI safety before. Email hello@resi.org.',
  },
];
