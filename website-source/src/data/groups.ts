// Roster retained from Draft B. Descriptions condensed from the user-supplied
// RESI Candidate Working Groups document (October 1, 2026); internal meeting details omitted.
import { showVisitingResearchers } from './visibility';

export const groups = [
  {
    id: 'cryptographic-verification',
    name: 'Cryptographic verification',
    description:
      'Develops methods that enable AI systems to provide convincing evidence that their answers meet appropriate standards of correctness. Mathematical claims may admit independently checked proofs; other domains require task-appropriate standards of correctness.',
    lead: 'Shafi Goldwasser',
    leadHref: '/people#shafi-goldwasser',
    relatedPaperAnchors: ['models-that-prove-their-own-correctness'],
  },
  {
    id: 'modular-architectures',
    name: 'Modular architectures',
    description:
      'Studies how restricted modules, used alone or in structured interactions, can make AI systems safer by limiting what each component can do. Could a constrained component control spending while a more capable model proposes actions without direct access to payment credentials?',
    lead: 'Adam Tauman Kalai',
    leadHref: '/people#adam-tauman-kalai',
    relatedPaperAnchors: ['consensus-sampling-for-safer-generative-ai'],
  },
  {
    id: 'monitoring-and-control',
    name: 'Monitoring and control',
    description:
      'Investigates when monitoring can detect subversive behavior in AI models and agents, where it falls short, and what additional controls may be needed.',
    lead: 'Vinod Vaikuntanathan',
    leadHref: '/people#vinod-vaikuntanathan',
  },
  {
    id: 'ai-harnesses',
    name: 'AI harnesses',
    description:
      'Investigates how frontier AI can assist with definitions, conjectures, proofs, counterexamples, and experiments.',
    lead: 'Jonathan Shafer',
    leadHref: '/people#jonathan-shafer',
  },
  {
    id: 'game-theoretic-foundations',
    name: 'Game-theoretic foundations of AI safety',
    description:
      'Investigates multi-agent AI alignment through game-theoretic and economic tools, asking where those tools are appropriate and where new ones are needed.',
    lead: 'Yannai A. Gonczarowski',
    leadHref: '/people#yannai-a-gonczarowski',
    placement: 'wg-game-theoretic-foundations',
  },
  {
    id: 'legal-alignment',
    name: 'Legal alignment',
    description:
      'Explores how legal constructs such as separation of powers, corporate governance, and fiduciary duties can inform technical approaches to safe by design superintelligence. One proposed direction is a theoretical or empirical case study of a legal construct adapted to a technical alignment problem. The focus is on using legal ideas to improve alignment, rather than primarily on applying existing legal doctrine to AI.',
    lead: 'Noam Kolt',
    leadHref: '/people#noam-kolt',
    placement: 'wg-legal-alignment',
  },
  {
    id: 'formal-verification',
    name: 'Formal verification',
    description:
      "Adam Chlipala's announced agenda asks how formal verification could support powerful AI in software development while reducing security risks. It distinguishes general software infrastructure, AI-specific infrastructure, and recursively self-improving systems. The agenda addresses both technical questions and how to organize the work, including which directions are ready to pursue.",
    source:
      'https://www.lesswrong.com/posts/NDBbatEejiAtTAr3z/announcing-formal-verification-at-resi-the-institute-for',
    lead: 'Adam Chlipala',
    leadHref: showVisitingResearchers ? '/people#adam-chlipala' : 'https://adam.chlipala.net/',
  },
  {
    id: 'cryptography-and-cybersecurity',
    name: 'Cryptography and cybersecurity',
    description:
      'Uses mathematical foundations and modeling to study how to secure AI applications, protect against AI-generated attacks, and use AI to improve cyber defenses.',
    lead: 'Yaron Singer',
    leadHref: '/people#yaron-singer',
  },
  {
    id: 'ethics-and-superintelligence',
    name: 'Ethics and superintelligence',
    description:
      'Examines fairness, human control, and the distribution of resources in a world with superintelligent AI.',
    lead: 'Chlo\u00e9 Bakalar',
    leadHref: '/people#chloe-bakalar',
  },
  {
    id: 'data-attribution',
    name: 'Data attribution',
    description:
      'Studies how to attribute model behavior to subsets of training data with provable guarantees under concrete, realistic assumptions. Proposed directions include inference-time attribution, lower bounds, experimental tests of attribution schemes, and adaptive attribution queries.',
    placement: 'wg-data-attribution',
    lead: 'Sam Gunn',
    leadHref: '/people#sam-gunn',
  },
  {
    id: 'ai-safety-using-quantum-effects',
    name: 'AI safety using quantum effects',
    description:
      'Investigates whether quantum resources could support restrictions on access, reuse, or revocation of AI capabilities that classical software alone cannot provide.',
    lead: 'Greg Gluch',
    leadHref: '/people#greg-gluch',
  },
];
