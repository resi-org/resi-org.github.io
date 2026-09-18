'use client';

import { useEffect, useState } from 'react';

const panels = [
  {
    className: 'foundations-card mission-outcomes-card',
    content: (
      <>
        <p className="mission-card-lead">RESI formulates new safe-by-design approaches for future frontier AI systems: breakthroughs comparable to foundational cryptographic primitives.</p>
        <p>Progress toward that goal includes rigorous definitions of safety objectives, maps of what is and is not achievable under explicit assumptions, new mechanisms with useful guarantees, results on how guarantees compose, and working demonstrations in real systems. Successes in the technical field also requires influencing policy, regulation, and enforcement in ways that prioritize human flourishing.</p>
      </>
    ),
  },
  {
    className: 'what-we-do-panel output-mechanisms-card',
    content: (
      <>
        <h2>Mechanisms and composition</h2>
        <p>We will develop mechanisms, protocols, and architectures that provide useful guarantees, and study whether those guarantees survive composition into larger systems involving models, tools, people, and institutions. As in modern cryptography, definitions and constructions develop together: a new protocol may reveal the right concept, and an impossibility result may show that a problem must be reformulated.</p>
      </>
    ),
  },
  {
    className: 'foundations-card faq-difference-card',
    content: (
      <>
        <h2>How is RESI different from other AI safety initiatives?</h2>
        <p>RESI focuses on the formal and design-oriented foundations of AI safety: precise safety objectives, explicit assumptions, mechanisms and architectures with analyzable guarantees, composition of those guarantees, and impossibility results. The goal is to develop approaches intended to remain meaningful as systems become superintelligent. This complements work on evaluation, interpretability, alignment training, control, and safeguards for existing models. RESI is also distinctive in who is building it: it is led by researchers with a track record of turning vague concepts into precise definitions and usable mechanisms, from cryptography and other fields, and it is organized by those researchers.</p>
      </>
    ),
  },
  {
    className: 'mission-card',
    content: (
      <>
        <h2>RESI is founded by researchers who have already turned seemingly murky concepts into precise definitions and usable mechanisms, in cryptography and other fields.</h2>
        <p>The goal is to do the same for AI safety: safe-by-design means safety properties are specified in advance and achieved by mechanisms whose guarantees can be analyzed before deployment, rather than testing for safety problems post implementation.</p>
        <p>Testing, benchmarking, and red-teaming are crucial for finding failures, but they cannot establish that important classes of problems are absent. Across many fields, researchers have followed a deeper pattern: transforming seemingly vague concepts into precise definitions, then inventing mechanisms that make those definitions useful for design. At RESI, we are shifting the field away from finding and patching failures after the fact and toward designing reliable safety properties into systems from the outset.</p>
      </>
    ),
  },
  {
    className: 'foundations-card',
    content: (
      <>
        <p className="mission-card-lead">There is a limited window in which the fundamental architecture and norms surrounding superintelligence are still being determined.</p>
        <p>With increasing speed and intensity, more capable AI systems are becoming embedded in science, medicine, finance, defense, and everyday life. The more deeply integrated these systems become, the harder it will be to retrofit effective safety mechanisms.</p>
        <p>The best time to develop the intellectual foundations for trustworthy AI and superintelligence is therefore not after we know exactly how powerful these systems will become. It is while they are being built.</p>
        <p>At RESI, we are creating an independent concentration of exceptional people working on the foundational ideas that will allow society to benefit from increasingly powerful AI without simply assuming that we will remain able to understand and control it.</p>
      </>
    ),
  },
  {
    className: 'precedent-card',
    content: (
      <>
        <h2>Cryptography is a good example.</h2>
        <p>Long ago, encryption schemes were ad hoc: constantly broken, red-teamed, and patched. Modern cryptography began when researchers formulated unexpected definitions of security and invented primitives (public-key encryption, digital signatures, and zero-knowledge proofs) that could satisfy them under explicit mathematical assumptions. Those inventions have withstood decades of attack and enormous increases in computing power. The same shift appears elsewhere. Early aviation relied on fly-fix-fly methods until phenomena such as turbulence could be modeled well enough to design against. Other enduring mechanisms, from auctions to contracts, can also achieve robustness by relying on incentives and laws we can understand.</p>
      </>
    ),
  },
  {
    className: 'bet-card',
    content: (
      <>
        <p className="mission-card-lead">RESI is a bet that this kind of shift is possible for superintelligence safety, and that it can happen by bringing together researchers who aim their efforts at responsible superintelligence, using frontier AI tools.</p>
        <p>RESI is founded by Turing Award winner and co-inventor of zero-knowledge proofs Shafi Goldwasser, renowned cryptographer Vinod Vaikuntanathan, and AI safety and ethics researcher Adam Tauman Kalai, who left OpenAI’s Safety Systems team to start the institute.</p>
        <p>Participating researchers will span computer science and other fields relevant to AI safety, including mathematics, economics and law, with an active visitor program. RESI is based in Cambridge, Massachusetts.</p>
      </>
    ),
  },
  {
    className: 'bet-card faq-speed-card',
    content: (
      <>
        <h2>Is this approach fast enough?</h2>
        <p>It has to be, and there is reason for optimism. Foundational fields can move quickly once the right people converge on the right questions, as happened repeatedly in modern cryptography, and RESI is built to concentrate that process and accelerate it with frontier AI tools. Nor does progress depend on one all-or-nothing breakthrough: definitions, impossibility results, and mechanisms can inform current systems along the way. Foundations take time to mature, but they are hardest to build once a crisis has arrived. The best time to begin was long ago; the second best is now.</p>
      </>
    ),
  },
  {
    className: 'mission-card faq-science-card',
    content: (
      <>
        <h2>How can science study something that doesn’t yet exist?</h2>
        <p>The principles and constraints that any system has to satisfy can be studied and built upon. Much of computer science and engineering falls within what Herbert Simon called the “sciences of the artificial,” which ask not only how existing systems behave, but what systems can be designed. Modern cryptography did not emerge merely from studying the ciphers of the time, but from analyzing what can and cannot be done.</p>
      </>
    ),
  },
  {
    className: 'bet-card adoption-card',
    content: (
      <>
        <p className="mission-card-lead">RESI develops solutions with practical constraints in mind and tests promising constructions in real systems.</p>
        <p>Adoption will depend on the utility of the designs, an open community that shares the hardest problems and latest solutions, and the incentives to solve safety challenges. Through its researchers, regular visitors, and speakers, RESI stays connected to frontier labs, allowing ideas to travel with the people who carry them.</p>
        <p>Frontier models already face release barriers because of safety concerns, and stronger capabilities will bring greater requirements for safety, reliability, and deployment. Approaches that provide greater assurance without sacrificing usefulness can reduce deployment risk and create clear incentives for adoption.</p>
      </>
    ),
  },
  {
    className: 'culture-card',
    content: (
      <>
        <p className="mission-card-lead">RESI aims to recreate the conditions which led to big ideas in the past, amplified by AI tools, with an open, mission-first culture that values sharing over being first to publish.</p>
        <p>Working groups will open new directions and revisit classical questions in light of superintelligence, while visitors will keep the institute connected to frontier labs and the scientific research community.</p>
      </>
    ),
  },
  {
    className: 'what-we-do-panel approach-ai-card',
    content: (
      <>
        <h2>AI-assisted from the start</h2>
        <p>Research at RESI is AI-assisted from the start. We will develop and continually improve harnesses that help theoretical alignment research using frontier agents throughout the research process, e.g., ideation, stress-testing definitions, writing and checking proofs, and turning theoretical ideas into experiments. These tools will let us explore new directions, iterate quickly, and tackle questions that might otherwise be out of reach.</p>
      </>
    ),
  },
  {
    className: 'what-we-do-panel approach-groups-card',
    content: (
      <>
        <h2>Many disciplines, shared questions</h2>
        <p>Superintelligence safety has many aspects, and no single discipline sees the whole picture. RESI’s working groups will open new directions and revisit many classical questions in light of superintelligence. Each working group will be organized by one or more leaders who will decide on its structure. The topics and working group leaders will be determined soon. Initial directions may include verification and delegation, modular architectures, incentives and strategic behavior, cryptographic mechanisms for AI safety, and legal mechanisms for superintelligence.</p>
      </>
    ),
  },
  {
    className: 'what-we-do-panel approach-perspective-card',
    content: (
      <>
        <h2>Mission first, openly shared</h2>
        <p>RESI’s culture is mission-first: open collaboration and early sharing of ideas. Our open-source approach is also compelled by and complemented by our sense of urgency for our proofs and results to achieve rapid implementation for the highest good. To protect junior researchers, we will actively support their credit and careers.</p>
      </>
    ),
  },
];

const faceSheets = [
  { name: 'What We Do', start: 0, count: 3 },
  { name: 'Why We Exist', start: 3, count: 6 },
  { name: 'How We Do It', start: 9, count: 5 },
];

const panelHighlightColors = [
  'color-mix(in srgb, var(--lime) 15%, var(--paper))',
  'color-mix(in srgb, var(--lime) 15%, var(--paper))',
  'color-mix(in srgb, var(--lime) 15%, var(--paper))',
  'var(--soft-violet)',
  'color-mix(in srgb, var(--lime) 15%, var(--paper))',
  'color-mix(in srgb, var(--violet) 13%, var(--paper))',
  'color-mix(in srgb, var(--cyan) 11%, var(--paper))',
  'color-mix(in srgb, var(--cyan) 11%, var(--paper))',
  'var(--soft-violet)',
  'color-mix(in srgb, var(--cyan) 11%, var(--paper))',
  'color-mix(in srgb, var(--blue) 9%, var(--paper))',
  'color-mix(in srgb, var(--violet) 13%, var(--paper))',
  'color-mix(in srgb, var(--cyan) 11%, var(--paper))',
  'color-mix(in srgb, var(--lime) 15%, var(--paper))',
];

function getFaceSheet(panelIndex: number) {
  return faceSheets.findIndex(({ start, count }) => panelIndex >= start && panelIndex < start + count);
}

export default function HeroPanelCarousel() {
  const [activePanel, setActivePanel] = useState(0);
  const panelCount = panels.length;
  const activeFaceSheet = getFaceSheet(activePanel);

  useEffect(() => {
    const syncFromHash = () => {
      if (window.location.hash === '#outputs' || window.location.hash === '#top') setActivePanel(faceSheets[0].start);
      if (window.location.hash === '#approach') setActivePanel(faceSheets[2].start);
      if (window.location.hash === '#mission') setActivePanel(faceSheets[1].start);
    };

    syncFromHash();
    window.addEventListener('hashchange', syncFromHash);
    return () => window.removeEventListener('hashchange', syncFromHash);
  }, []);

  useEffect(() => {
    const href = activeFaceSheet === 0 ? '#outputs' : activeFaceSheet === 1 ? '#mission' : '#approach';
    window.dispatchEvent(new CustomEvent('resi:navigation-highlight', {
      detail: { href, color: panelHighlightColors[activePanel] },
    }));
  }, [activeFaceSheet, activePanel]);

  const showPanel = (nextPanel: number) => {
    setActivePanel(nextPanel);
    const nextFaceSheet = getFaceSheet(nextPanel);
    const nextHash = nextFaceSheet === 0 ? '#outputs' : nextFaceSheet === 1 ? '#mission' : '#approach';
    window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}${nextHash}`);
  };

  return (
    <section className="home-hero continuous-face-sheet" id="mission" aria-label="RESI introduction and work">
      <span className="face-sheet-anchor" id="outputs" aria-hidden="true" />
      <span className="face-sheet-anchor" id="approach" aria-hidden="true" />
      <div className="home-hero-grid">
        <div className={`continuous-face-sheet-intro face-sheet-intro-${activeFaceSheet}`} aria-live="polite">
          {activeFaceSheet === 0 && (
            <>
              <h1 id="page-title">Institute for Responsible Superintelligence</h1>
              <p className="standfirst">RESI is an independent nonprofit research institute building the foundations needed to make superintelligence safe by design.</p>
            </>
          )}
          {activeFaceSheet === 1 && (
            <>
              <h2>Why we exist</h2>
              <p className="standfirst">Safety must be designed in rather than patched on afterward. This requires a mature theory of definitions, constructions, composition, and impossibility comparable to modern cryptography.</p>
            </>
          )}
          {activeFaceSheet === 2 && (
            <>
              <h2>How We Do It</h2>
              <p className="what-we-do-theory-copy">RESI conducts its research through focused working groups that bring together the disciplines needed for each question. These groups develop three types of outputs designed to keep AI safety relevant as intelligence increases.</p>
            </>
          )}
        </div>

        <div className="hero-panel-carousel" aria-label="RESI face-sheet panels">
          <div className="hero-panel-viewport" aria-live="polite">
            <div
              className="hero-panel-track"
              style={{
                width: `${panelCount * 100}%`,
                transform: `translateX(-${activePanel * (100 / panelCount)}%)`,
              }}
            >
              {panels.map((panel, index) => {
                const hasNextPanel = index < panelCount - 1;

                return (
                  <section
                    className={`hero-panel ${panel.className}`}
                    key={panel.className}
                    aria-hidden={activePanel !== index}
                    style={{ flex: `0 0 ${100 / panelCount}%` }}
                  >
                    <div className="mission-card-copy">{panel.content}</div>
                    <div className="panel-slide-controls">
                      {index > 0 ? (
                        <button
                          className="panel-slide-button panel-slide-button-back"
                          type="button"
                          onClick={() => showPanel(index - 1)}
                          tabIndex={activePanel === index ? 0 : -1}
                          aria-label="Return to the previous panel"
                        >
                          <span className="panel-slide-arrow" aria-hidden="true">←</span>
                        </button>
                      ) : <span aria-hidden="true" />}

                      <span aria-hidden="true" />

                      {hasNextPanel ? (
                        <button
                          className="panel-slide-button panel-slide-button-next"
                          type="button"
                          onClick={() => showPanel(index + 1)}
                          tabIndex={activePanel === index ? 0 : -1}
                          aria-label="Go to the next panel"
                        >
                          <span className="panel-slide-arrow" aria-hidden="true">→</span>
                        </button>
                      ) : <span aria-hidden="true" />}
                    </div>
                  </section>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
