import Image from 'next/image';
import HeroPanelCarousel from './HeroPanelCarousel';
import FundingSection from './FundingSection';
import HeaderNavigation from './HeaderNavigation';
import PeopleDirectors from './PeopleDirectors';

type Person = {
  name: string;
  affiliation?: string;
  bio: string;
  publications: string[];
  profileUrl?: string;
};

const primaryNavItems = [
  { label: 'What We Do', href: '#outputs' },
  { label: 'Why We Exist', href: '#mission' },
  { label: 'How We Do It', href: '#approach' },
  { label: 'Who We Are', href: '#people' },
  { label: 'How We Pay for It', href: '#funding' },
  { label: 'FAQ', href: '#faq' },
];

const founders: Person[] = [
  {
    name: 'Shafi Goldwasser',
    profileUrl: 'https://en.wikipedia.org/wiki/Shafi_Goldwasser',
    bio: 'Inventor of zero-knowledge proofs and other seminal strands of modern cryptography. Turing Award winner.',
    publications: [
      'S. Ball, G. Gluch, S. Goldwasser, F. Kreuter, O. Reingold, G. Rothblum, Computational Barriers to Filtering for AI Alignment. ICLR 2026.',
      'N. Amit, S. Goldwasser, O. Paradise, G. Rothblum. Models That Prove Their Own Correctness. ICML 2024.',
      'S. Goldwasser, M. Kim, V. Vaikuntanathan, and O. Zamir. Planting Undetectable Backdoors in Machine Learning Models. FOCS 2022.',
    ],
  },
  {
    name: 'Adam Tauman Kalai',
    profileUrl: 'https://en.wikipedia.org/wiki/Adam_Tauman_Kalai',
    bio: 'AI safety and ethics researcher coming from 2.5 years at OpenAI. Works in learning theory, game theory, and fairness, and bridges frontier-AI practice with theory. Majulook Prize winner.',
    publications: [
      'A. Kalai, O. Nachum, S. Vempala, and E. Zhang. Evaluating large language models for accuracy incentivizes hallucinations. Nature 2026.',
      'A. Kalai, Y. Tauman Kalai, and O. Zamir. Consensus Sampling for Safer Generative AI. IASEAI 2026.',
      'T. Eloundou, A. Beutel, D. Robinson, K. Gu-Lemberg, A. Brakman, P. Mishkin, M. Shah, J. Heidecke, L. Weng, and A. Kalai. First-Person Fairness in Chatbots. ICLR 2025.',
    ],
  },
  {
    name: 'Vinod Vaikuntanathan',
    profileUrl: 'https://en.wikipedia.org/wiki/Vinod_Vaikuntanathan',
    bio: 'MIT cryptographer and theoretical computer scientist with foundational contributions to lattice-based cryptography and fully homomorphic encryption. Gödel Prize winner.',
    publications: [
      'V. Vaikuntanathan and O. Zamir. Undetectable Conversations Between AI Agents via Pseudorandom Noise-Resilient Key Exchange. FOCS 2026.',
      'S. Goldwasser, J. Shafer, N. Vafa, and V. Vaikuntanathan. Oblivious Defense in ML Models: Backdoor Removal without Detection. STOC 2025.',
      'S. Goldwasser, M. Kim, V. Vaikuntanathan, and O. Zamir. Planting Undetectable Backdoors in Machine Learning Models. FOCS 2022.',
    ],
  },
];

const founderPortraits: Record<string, string> = {
  'Shafi Goldwasser': '/test/people/shafi-goldwasser.jpg',
  'Adam Tauman Kalai': '/test/people/adam-tauman-kalai.jpg',
  'Vinod Vaikuntanathan': '/test/people/vinod-vaikuntanathan.jpg',
};

const operationsLead: Person = {
  name: 'Emily Uyeda Kantrim',
  profileUrl: 'https://www.emilyuk.com/',
  affiliation: 'Chief Operating Officer',
  bio: 'Emily’s work spans nonprofit, government, research, and social innovation, with a focus on turning ambitious ideas into durable institutions, scalable systems, and measurable public impact.',
  publications: [],
};

const researchTeam: Person[] = [
  {
    name: 'Chloé Bakalar',
    profileUrl: 'https://citp.princeton.edu/people/chlo%C3%A9-bakalar',
    affiliation: 'Former AI Ethics Lead at OpenAI · Former Chief Ethicist at Meta',
    bio: 'Moral and political philosopher working on applied and normative AI ethics, including the development, evaluation and governance of advanced AI systems.',
    publications: [
      'R. Laukkonen, S. Krier, C. Bakalar, et al. Positive Alignment: Artificial Intelligence for Human Flourishing. arXiv 2026.',
      'C. Bakalar, R. Barreto, S. Bergman, et al. Fairness on the Ground: Applying Algorithmic Fairness Approaches to Production Systems. arXiv 2021.',
    ],
  },
  {
    name: 'Ran Canetti',
    profileUrl: 'https://www.bu.edu/cs/profiles/ran-canetti/',
    affiliation: 'Boston University',
    bio: 'Design, analysis, and composition of cryptographic protocols. Program obfuscation and applications.',
    publications: [
      'R. Canetti, S. Goldwasser, O. Zamir. Proofs of Ownership for Machine Learning Models. arXiv 2026.',
      'R. Canetti, C. Chamon, E. Mucciolo, A. Ruckenstein. Towards program obfuscation via local mixing. TCC 2024.',
    ],
  },
  {
    name: 'Miranda Christ',
    profileUrl: 'https://www.cs.columbia.edu/~mchrist/',
    affiliation: 'MIT postdoc · PhD from Columbia',
    bio: 'Works on practically motivated cryptography, ML, and watermarking for AI-generated content.',
    publications: [
      'M. Christ, N. Golowich, S. Gunn, A. Moitra, D. Wichs. Improved Pseudorandom Codes from Permuted Puzzles. STOC 2026.',
      'M. Christ, S. Gunn. Pseudorandom Error-Correcting Codes. CRYPTO 2024.',
    ],
  },
  {
    name: 'Greg Gluch',
    profileUrl: 'https://grzegorzgluch.github.io/',
    affiliation: 'UC Berkeley · Simons Institute for the Theory of Computing postdoc · PhD from EPFL',
    bio: 'Works on AI safety and alignment using tools from cryptography and computational complexity.',
    publications: [
      'G. Gluch, S. Goldwasser. A Cryptographic Perspective on Mitigation vs. Detection in Machine Learning. 2026.',
      'G. Gluch, B. Turan, S. G. Nagarajan, S. Pokutta. The Good, the Bad and the Ugly: Meta-Analysis of Watermarks, Transferable Attacks and Adversarial Defenses. NeurIPS 2025.',
    ],
  },
  {
    name: 'Yannai A. Gonczarowski',
    profileUrl: 'https://yannai.gonch.name/',
    affiliation: 'Harvard',
    bio: 'Economist and computer scientist working at the intersection of economic theory and theoretical computer science, including mechanism design and market design. ACM SIGecom Doctoral Dissertation Award winner.',
    publications: [
      'S. Fish, Y. A. Gonczarowski, R. I. Shorrer. Algorithmic Collusion by Large Language Models. EC 2026.',
      'Y. A. Gonczarowski, S. M. Weinberg. The Sample Complexity of Up-to-ε Multi-dimensional Revenue Maximization. FOCS 2018 / JACM 2021.',
    ],
  },
  {
    name: 'Sam Gunn',
    profileUrl: 'https://people.eecs.berkeley.edu/~gunn/',
    affiliation: 'PhD from UC Berkeley',
    bio: 'Works on cryptography and foundations of AI.',
    publications: [
      'S. Gunn. How to sketch a learning algorithm. 2026.',
      'S. Gunn, X. Zhao, D. Song. An Undetectable Watermark for Generative Image Models. ICLR 2025.',
    ],
  },
  {
    name: 'Tal Herman',
    profileUrl: 'https://talherman.github.io/',
    affiliation: 'MIT and UC Berkeley postdoc · PhD from the Weizmann Institute',
    bio: 'Works on complexity theory and cryptography.',
    publications: [
      'T. Herman, G. Rothblum. Doubly-Efficient Interactive Proofs for Distribution Properties. FOCS 2023.',
      'T. Herman, G. Rothblum. How to Verify Any (Reasonable) Distribution Property: Computationally Sound Argument Systems for Distributions. ICLR 2025.',
    ],
  },
  {
    name: 'Dylan Hadfield-Menell',
    profileUrl: 'https://people.csail.mit.edu/dhm/',
    affiliation: 'MIT',
    bio: 'Professor working on AI alignment. His research focuses on the theory and practice of AI alignment, as well as the evaluation and (societal) oversight of deployed AI systems.',
    publications: [
      'D. Hadfield-Menell, A. Dragan, P. Abbeel, and S. Russell. Cooperative Inverse Reinforcement Learning. NeurIPS 2016.',
      'S. Zhuang and D. Hadfield-Menell. Consequences of Misaligned AI. NeurIPS 2020.',
    ],
  },
  {
    name: 'Yael Tauman Kalai',
    profileUrl: 'https://en.wikipedia.org/wiki/Yael_Tauman_Kalai',
    affiliation: 'MIT',
    bio: 'Cryptographer and theoretical computer scientist working on verifiable delegation, interactive proofs, and cryptographic protocols. Winner of the ACM Prize in Computing.',
    publications: [
      'L. Chen, Y. Tauman Kalai, Z. Xi. How to Avoid Debate: Scalable AI Safety via Doubly-Efficient Interactive Proofs. ICML 2026.',
      'S. Goldwasser, Y. Tauman Kalai, G. Rothblum. Delegating Computation: Interactive Proofs for Muggles. STOC 2008.',
    ],
  },
  {
    name: 'Noam Kolt',
    profileUrl: 'https://www.noamkolt.com/',
    affiliation: 'Hebrew University',
    bio: 'Assistant Professor at the Faculty of Law and School of Computer Science and Engineering.',
    publications: [
      'N. Kolt. Superintelligence and Law. Harvard Journal of Law & Technology 2026.',
      'N. Kolt et al. Legal Alignment for Safe and Ethical AI. TMLR 2026.',
    ],
  },
  {
    name: 'Anat Perry',
    profileUrl: 'https://perrylab.huji.ac.il/',
    affiliation: 'Hebrew University · Berkman Klein Center Fellow at Harvard',
    bio: 'Associate professor working at the intersection of social cognitive psychology and neuroscience, with a focus on human–AI interaction and its implications for human flourishing.',
    publications: [
      'A. Perry. In defense of social friction. Science 2026.',
      'A. Perry. AI will never convey the essence of human empathy. Nature Human Behaviour 2023.',
    ],
  },
  {
    name: 'Daniela Rus',
    profileUrl: 'https://www.csail.mit.edu/person/daniela-rus',
    affiliation: 'MIT CSAIL',
    bio: 'Roboticist and director of CSAIL working on autonomous systems, intelligence, and safe control and planning for embodied AI. MacArthur Fellow.',
    publications: [
      'W. Xiao, D. Rus, et al. BarrierNet: Differentiable Control Barrier Functions for Learning of Safe Robot Control. IEEE Transactions on Robotics 2023.',
      'W. Xiao, J. Wang, C. Gan, R. Hasani, M. Lechner, and D. Rus. SafeDiffuser: Safe Planning with Diffusion Probabilistic Models. ICLR 2025.',
    ],
  },
  {
    name: 'Jonathan Shafer',
    profileUrl: 'https://shaferjo.com/',
    affiliation: 'MIT postdoc · incoming professor at the Weizmann Institute of Science · PhD from UC Berkeley',
    bio: 'Works on learning theory and its connections to cryptography.',
    publications: [
      'Z. Chase, S. Hanneke, S. Moran, and J. Shafer. Optimal Mistake Bounds for Transductive Online Learning. NeurIPS 2025 (Best Paper Runner-Up).',
      'S. Goldwasser, G. Rothblum, J. Shafer, and A. Yehudayoff. Interactive Proofs for Verifying Machine Learning. ITCS 2021.',
    ],
  },
  {
    name: 'Yaron Singer',
    profileUrl: 'https://www.linkedin.com/in/yaron-singer-76ab6317',
    affiliation: 'Frontier Security',
    bio: 'CEO and co-founder of Frontier Security, previously VP at Cisco, CEO and founder of AI Security startup Robust Intelligence (acquired by Cisco), and Harvard professor of Computer Science and Applied Mathematics, working on AI in cybersecurity, AI security, adversarial robustness, and robust optimization. Sloan Fellow.',
    publications: [
      'P. Kassianik, B. Nelson, and Y. Singer. Beyond Success Rate: Cost-Aware Evaluation of Offensive and Defensive Security Agents. CAMLIS 2026.',
      'A. Mehrotra, M. Zampetakis, P. Kassianik, B. Nelson, H. S. Anderson, Y. Singer, and A. Karbasi. Tree of Attacks: Jailbreaking Black-Box LLMs Automatically. NeurIPS 2024.',
    ],
  },
  {
    name: 'Andrew V. Sutherland',
    profileUrl: 'https://math.mit.edu/~drew/',
    affiliation: 'MIT',
    bio: 'Mathematician working in AI-assisted mathematical discovery, formal verification, large-scale mathematical databases, computational number theory, and arithmetic geometry.',
    publications: [
      'J. S. Ellenberg, C. S. Fraser-Taliente, T. R. Harvey, K. Srivastava, and A. V. Sutherland. Generative Modelling for Mathematical Discovery. Advances in Theoretical and Mathematical Physics 2025.',
      'W. Sawin and A. V. Sutherland. Murmurations for Elliptic Curves Ordered by Height. 2025.',
    ],
  },
  {
    name: 'Mirac Suzgun',
    profileUrl: 'https://sites.google.com/view/msuzgun',
    affiliation: 'Stanford',
    bio: 'PhD candidate in CS at Stanford with JD from Stanford Law working on LLM reasoning, safety, and factuality, with particular interests in understanding and mitigating hallucinations and evaluating AI systems deployed in high-stakes domains such as law and medicine.',
    publications: [
      'M. Suzgun, M. Yuksekgonul, F. Bianchi, D. Jurafsky, J. Zou. Dynamic Cheatsheet: Test-Time Learning with Adaptive Memory. EACL 2026.',
      'M. Suzgun, T. Gur, F. Bianchi, D. E. Ho, T. Icard, D. Jurafsky, J. Zou. Language Models Cannot Reliably Distinguish Belief from Knowledge and Fact. Nature Machine Intelligence 2025.',
    ],
  },
  {
    name: 'Neekon Vafa',
    profileUrl: 'https://neekonvafa.com/',
    affiliation: 'Harvard Society of Fellows · PhD from MIT',
    bio: 'Junior Fellow working on cryptography and its connections to statistics and trustworthy AI.',
    publications: [
      'A. Bogdanov, A. Rosen, N. Vafa. Statistically Undetectable Backdoors in Deep Neural Networks. ICML 2026.',
      'A. Bogdanov, A. Rosen, N. Vafa, and V. Vaikuntanathan. Adaptive Robustness of Hypergrid Johnson-Lindenstrauss. STOC 2026.',
    ],
  },
  {
    name: 'Rebecca Wexler',
    profileUrl: 'https://www.law.columbia.edu/faculty/rebecca-wexler',
    affiliation: 'Columbia',
    bio: 'Alfred W. Bressler Professor of Law working on evidence and criminal law, including interactions of technological and legal design for secrecy, authentication, and accountability.',
    publications: [
      'S. Barrington, E. Cooper, H. Farid, R. Wexler. AI-Generated Voice Evidence Poses Dangers in Court. Lawfare 2025.',
      'D. Bitan, R. Canetti, S. Goldwasser, R. Wexler. Using Zero-Knowledge to Reconcile Law Enforcement Secrecy and Fair Trial. ACM CSLaw 2022.',
    ],
  },
];

const researchPortraits: Record<string, string> = {
  'Chloé Bakalar': '/test/people/chloe-bakalar.jpg',
  'Tal Herman': '/test/people/tal-herman.jpg',
  'Dylan Hadfield-Menell': '/test/people/dylan-hadfield-menell.jpg',
  'Ran Canetti': '/test/people/ran-canetti.jpg',
  'Miranda Christ': '/test/people/miranda-christ.jpg',
  'Greg Gluch': '/test/people/greg-gluch.jpg',
  'Yannai A. Gonczarowski': '/test/people/yannai-a-gonczarowski.jpg',
  'Sam Gunn': '/test/people/sam-gunn.jpg',
  'Yael Tauman Kalai': '/test/people/yael-tauman-kalai.jpg',
  'Noam Kolt': '/test/people/noam-kolt.jpg',
  'Anat Perry': '/test/people/anat-perry.jpg',
  'Daniela Rus': '/test/people/daniela-rus.jpg',
  'Jonathan Shafer': '/test/people/jonathan-shafer.jpg',
  'Yaron Singer': '/test/people/yaron-singer.jpg',
  'Andrew V. Sutherland': '/test/people/andrew-v-sutherland.jpg',
  'Mirac Suzgun': '/test/people/mirac-suzgun.jpg',
  'Neekon Vafa': '/test/people/neekon-vafa.jpg',
  'Rebecca Wexler': '/test/people/rebecca-wexler.jpg',
};

const plannedVisitors = [
  'Scott Aaronson · UT Austin',
  'Boaz Barak · OpenAI',
  'David Bau · Northeastern',
  'Yonatan Belinkov · Technion',
  'Avrim Blum · TTIC · Visited 2026',
  'Christian Borgs · Berkeley · Visited 2026',
  'Sebastien Bubeck · OpenAI',
  'Nicholas Carlini · Anthropic',
  'Jennifer Chayes · Berkeley',
  'Andrew Critch · Encultured',
  'Costis Daskalakis · MIT',
  'Geoffrey Irving · Resolution',
  'Sham Kakade · Harvard',
  'Ehud Kalai · Northwestern',
  'Tal Malkin · Columbia',
  'Moni Naor · Weizmann Institute',
  'Orr Paradise · EPFL',
  'Manish Raghavan · MIT',
  'Omer Reingold · Stanford',
  'Alon Rosen · Bocconi',
  'Jacob Steinhardt · Transluce, UC Berkeley',
  'Jacob Tsimerman · OpenAI',
  'Santosh Vempala · Georgia Tech',
  'Daniel Wichs · Northeastern',
  'Or Zamir · Tel Aviv University · Visited 2026',
];

const affiliatedGroups = [
  { name: 'Alignment Research Center (ARC)', url: 'https://www.alignment.org/' },
  { name: 'Resolution', url: 'https://resolution.org/' },
  { name: 'Cambridge Boston Alignment Initiative (CBAI)', url: 'https://www.cbai.ai/' },
  { name: 'Simons Institute for the Theory of Computing', url: 'https://simons.berkeley.edu/homepage' },
  { name: 'UT Austin Theory and AI Alignment Group', url: 'https://scottaaronson.blog/?p=8790' },
  { name: 'Algorithmic Alignment Group', url: 'https://algorithmicalignment.csail.mit.edu/' },
];

const faqs = [
  {
    question: 'Why the RESI acronym?',
    answer: 'IRS was already taken, and RESI (for REsponsible SuperIntelligence) is also the beginning of RESIlience.',
  },
  {
    question: 'What does success mean for RESI?',
    answer: 'The ultimate success would be new safe-by-design approaches adopted in frontier AI systems: breakthroughs comparable to foundational cryptographic primitives. Progress toward that goal includes rigorous definitions of safety objectives, maps of what is and is not achievable under explicit assumptions, new mechanisms with useful guarantees, results on how guarantees compose, and working demonstrations in real systems. Success also means influencing policy and regulation in ways that support human flourishing.',
  },
  {
    question: 'How will RESI’s ideas become adopted?',
    answer: 'Through design, people, and incentives. RESI designs with practical constraints in mind and tests promising constructions in real systems. It is connected to frontier labs through the experience of its researchers and through regular visitors and speakers, allowing ideas to travel with the people who carry them. Meanwhile, frontier models already face release barriers due to safety considerations. As capabilities increase, developers will face stronger safety, reliability, and deployment requirements. Approaches that provide greater assurance while preserving usefulness can reduce deployment risk and offer incentives for adoption.',
  },
  {
    question: 'How is RESI different from other AI safety initiatives?',
    answer: 'RESI focuses on the formal and design-oriented foundations of AI safety: precise safety objectives, explicit assumptions, mechanisms and architectures with analyzable guarantees, composition of those guarantees, and impossibility results. The goal is to develop approaches intended to remain meaningful as systems become superintelligent. This complements work on evaluation, interpretability, alignment training, control, and safeguards for existing models. RESI is also distinctive in who is building it: it is led by researchers with a track record of turning vague concepts into precise definitions and usable mechanisms, from cryptography and other fields, and it is organized by those researchers.',
  },
  {
    question: 'How will RESI stay up to date with frontier research?',
    answer: 'RESI combines researchers with recent frontier-lab experience, regular engagement with researchers at leading labs, a continuing visitor and lecture program, and practical testing of promising ideas on current systems. Its research agenda will evolve as capabilities, architectures, and deployment practices change.',
  },
  {
    question: 'Is this approach fast enough?',
    answer: 'It has to be, and there is reason for optimism. Foundational fields can move quickly once the right people converge on the right questions, as happened repeatedly in modern cryptography, and RESI is built to concentrate that process and accelerate it with frontier AI tools. Nor does progress depend on one all-or-nothing breakthrough: definitions, impossibility results, and mechanisms can inform current systems along the way. Foundations take time to mature, but they are hardest to build once a crisis has arrived. The best time to begin was long ago; the second best is now.',
  },
  {
    question: 'What does superintelligence mean?',
    answer: 'Superintelligence means systems that greatly exceed individual humans, and potentially expert teams, across a broad range of cognitive tasks.',
  },
  {
    question: 'How does superintelligence differ from AGI?',
    answer: 'Artificial General Intelligence usually means matching humans across a broad range of tasks; superintelligence means substantially exceeding that level. Current AI is jagged, already superhuman in some domains and subhuman in others. RESI’s practical concern begins when systems exceed our ability to test and oversee them, because past that point safety must be designed in. In some domains, that point is already here.',
  },
  {
    question: 'How can science study something that doesn’t yet exist?',
    answer: 'The principles and constraints that any system has to satisfy can be studied and built upon. Much of computer science and engineering falls within what Herbert Simon called the “sciences of the artificial,” which ask not only how existing systems behave, but what systems can be designed. Modern cryptography did not emerge merely from studying the ciphers of the time, but from analyzing what can and cannot be done.',
  },
  {
    question: 'How can I get involved?',
    answer: (
      <>
        For other scientists and practitioners local to the Boston/Cambridge, sign up for notifications on our reading group, events, and seminars{' '}
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSc6s3Vw8bT2lt6H1iCW8_XfXrQf3QJtVO0Du56JzmdT9VfJww/viewform" target="_blank" rel="noreferrer">here</a>.
        {' '}RESI will host a small number of researchers and visitors from outside the area. We welcome inquiries from scientists whose tools could bear on these problems, whether or not they have worked on AI safety before. Email us with your ideas at hello@resi.org. If you are a local student, we consider interns from our partner organization,{' '}
        <a href="https://www.cbai.ai/" target="_blank" rel="noreferrer">Cambridge/Boston Alignment Initiative (CBAI)</a>.
      </>
    ),
  },
];

function ResiLogo({ plain = false }: { plain?: boolean }) {
  return (
    <span className={plain ? 'logo-crop logo-wordmark' : 'logo-crop'} aria-hidden="true">
      <Image
        className="logo-image"
        src={plain ? '/test/resi-wordmark.png' : '/test/resi-logo-cropped.png'}
        alt=""
        width={plain ? 460 : 1678}
        height={plain ? 175 : 1085}
        priority
      />
    </span>
  );
}

function PersonEntry({ person, featured = false, portraitSrc }: { person: Person; featured?: boolean; portraitSrc?: string }) {
  return (
    <article className={featured ? 'person-entry person-entry-featured' : 'person-entry'}>
      {portraitSrc && (
        <div className="person-portrait">
          <Image className="person-portrait-image" src={portraitSrc} alt={`${person.name} portrait`} width={320} height={320} />
        </div>
      )}
      <div className="person-copy">
        {person.affiliation && <p className="person-affiliation">{person.affiliation}</p>}
        <h3>
          {person.profileUrl ? (
            <a className="person-name-link" href={person.profileUrl} target="_blank" rel="noreferrer">
              {person.name}
            </a>
          ) : person.name}
        </h3>
        <p className="person-bio">{person.bio}</p>
        {person.publications.length > 0 && (
          <details className="publication-list">
            <summary>Selected publications</summary>
            <ul>
              {person.publications.map((publication) => <li key={publication}>{publication}</li>)}
            </ul>
          </details>
        )}
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <div className="site-shell" id="top">
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#top" aria-label="RESI home"><ResiLogo plain /></a>
          <HeaderNavigation items={primaryNavItems} />
        </div>
      </header>

      <main>
        <HeroPanelCarousel />

        <section className="people-section" id="people" aria-labelledby="people-title">
          <PeopleDirectors>
            {founders.map((person) => <PersonEntry person={person} featured portraitSrc={founderPortraits[person.name]} key={person.name} />)}
          </PeopleDirectors>

          <div className="people-accordion" aria-label="RESI teams and affiliations">
            <details className="people-disclosure people-disclosure-research" open>
              <summary id="research-team">
                <span className="people-disclosure-title">Research Team</span>
                <span className="people-disclosure-count">{researchTeam.length.toString().padStart(2, '0')}</span>
                <span className="people-disclosure-marker" aria-hidden="true" />
              </summary>
              <div className="people-disclosure-panel">
                <div className="research-grid">{researchTeam.map((person) => <PersonEntry person={person} featured portraitSrc={researchPortraits[person.name]} key={person.name} />)}</div>
              </div>
            </details>

            <details className="people-disclosure people-disclosure-visitors">
              <summary id="visiting-researchers">
                <span className="people-disclosure-title">Visiting Researchers</span>
                <span className="people-disclosure-count">{plannedVisitors.length.toString().padStart(2, '0')}</span>
                <span className="people-disclosure-marker" aria-hidden="true" />
              </summary>
              <div className="people-disclosure-panel">
                <ul className="visitor-list">{plannedVisitors.map((visitor) => <li key={visitor}>{visitor}</li>)}</ul>
              </div>
            </details>

            <details className="people-disclosure people-disclosure-operations">
              <summary id="operations-team">
                <span className="people-disclosure-title">Operations Team</span>
                <span className="people-disclosure-count">01</span>
                <span className="people-disclosure-marker" aria-hidden="true" />
              </summary>
              <div className="people-disclosure-panel">
                <div className="operations-card-wrap">
                  <PersonEntry person={operationsLead} featured portraitSrc="/test/people/emily-uyeda-kantrim.jpg" />
                </div>
              </div>
            </details>

            <details className="people-disclosure people-disclosure-affiliations">
              <summary id="affiliations">
                <span className="people-disclosure-title">Affiliated Groups</span>
                <span className="people-disclosure-count">{affiliatedGroups.length.toString().padStart(2, '0')}</span>
                <span className="people-disclosure-marker" aria-hidden="true" />
              </summary>
              <div className="people-disclosure-panel">
                <ul className="affiliation-list">
                  {affiliatedGroups.map((group) => (
                    <li key={group.name}>
                      <a href={group.url} target="_blank" rel="noopener noreferrer">
                        {group.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          </div>
        </section>

        <FundingSection />

        <section className="faq-section" id="faq" aria-labelledby="faq-title">
          <div className="faq-heading-bar">
            <div className="faq-heading-inner">
              <p className="eyebrow">Frequently Asked</p>
              <h2 id="faq-title">Questions about RESI</h2>
            </div>
          </div>
          <div className="faq-content">
            <div className="faq-list">
              {faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>
                    <span className="faq-question">{faq.question}</span>
                    <span className="faq-marker" aria-hidden="true" />
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="subscribe" id="subscribe">
          <div><p className="eyebrow">Keep in touch</p><h2>Follow the progression of field-building at RESI</h2></div>
          <a href="mailto:hello@resi.org">Subscribe to the RESI newsletter</a>
          <a href="mailto:hello@resi.org">Subscribe to the RESI newsletter + local seminars and events</a>
        </section>
      </main>

      <footer id="about">
        <a className="footer-brand" href="#top" aria-label="Back to the top"><ResiLogo /></a>
        <a href="mailto:hello@resi.org">hello@resi.org</a>
        <p>Institute for Responsible Superintelligence</p>
      </footer>
    </div>
  );
}
