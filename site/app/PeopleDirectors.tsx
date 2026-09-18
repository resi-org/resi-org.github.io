'use client';

import { type ReactNode, useEffect, useRef, useState } from 'react';

const directorNames = [
  'Shafi Goldwasser',
  'Adam Tauman Kalai',
  'Vinod Vaikuntanathan',
];

export default function PeopleDirectors({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const spacerRef = useRef<HTMLDivElement>(null);
  const compactRef = useRef(false);
  const thresholdRef = useRef(Number.POSITIVE_INFINITY);
  const frameRef = useRef<number | null>(null);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const spacer = spacerRef.current;
    const researchTeam = document.getElementById('research-team');
    const researchDisclosure = researchTeam?.closest<HTMLElement>('.people-disclosure');
    const peopleSection = container?.closest<HTMLElement>('.people-section');

    if (!container || !spacer || !researchDisclosure) return;

    // Keep the document footprint fixed while the visible sticky header shrinks.
    // Otherwise browser scroll anchoring can cross the collapse threshold again.
    let expandedHeight = container.getBoundingClientRect().height;
    const publishHeight = () => {
      const height = container.getBoundingClientRect().height;
      expandedHeight = Math.max(expandedHeight, height);
      spacer.style.height = `${Math.max(0, expandedHeight - height)}px`;
      peopleSection?.style.setProperty('--people-directors-height', `${height}px`);
    };

    const heightObserver = new ResizeObserver(publishHeight);
    heightObserver.observe(container);
    publishHeight();

    const disclosures = Array.from(
      peopleSection?.querySelectorAll<HTMLDetailsElement>('.people-disclosure') ?? [],
    );
    let advanceFrame: number | null = null;
    let navigationReleaseTimer: number | null = null;
    let suppressAdvanceForNavigation = false;
    let lastScrollY = window.scrollY;

    const hashTargetsOutsidePeople = (hash: string) => {
      if (!hash || hash === '#people') return false;

      let targetId: string;
      try {
        targetId = decodeURIComponent(hash.slice(1));
      } catch {
        return false;
      }
      const target = document.getElementById(targetId);

      return Boolean(target && peopleSection && !peopleSection.contains(target));
    };

    const scheduleNavigationRelease = (delay = 180) => {
      if (navigationReleaseTimer !== null) window.clearTimeout(navigationReleaseTimer);
      navigationReleaseTimer = window.setTimeout(() => {
        navigationReleaseTimer = null;
        suppressAdvanceForNavigation = false;
        lastScrollY = window.scrollY;
      }, delay);
    };

    const suppressForHashNavigation = (hash: string) => {
      if (!hashTargetsOutsidePeople(hash)) return;

      suppressAdvanceForNavigation = true;
      if (advanceFrame !== null) {
        window.cancelAnimationFrame(advanceFrame);
        advanceFrame = null;
      }
      lastScrollY = window.scrollY;
      scheduleNavigationRelease(1000);
    };

    const handleHashChange = () => {
      suppressForHashNavigation(window.location.hash);
    };

    const handleNavigationClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest<HTMLAnchorElement>('a[href]');
      if (!link || link.origin !== window.location.origin || link.pathname !== window.location.pathname) return;

      suppressForHashNavigation(link.hash);
    };

    const advanceDisclosure = () => {
      advanceFrame = null;
      if (suppressAdvanceForNavigation) return;

      const currentScrollY = window.scrollY;
      const previousScrollY = lastScrollY;
      const scrollDelta = currentScrollY - previousScrollY;
      const scrollingDown = scrollDelta > 0.5;
      lastScrollY = currentScrollY;

      if (!scrollingDown) return;

      const openIndex = disclosures.reduce(
        (lastOpenIndex, disclosure, index) => disclosure.open ? index : lastOpenIndex,
        -1,
      );
      const nextDisclosure = disclosures[openIndex + 1];
      const nextSummary = nextDisclosure?.querySelector<HTMLElement>(':scope > summary');

      if (!nextDisclosure || !nextSummary) return;

      const stickyTop = Number.parseFloat(getComputedStyle(container).top) || 0;
      const stackBottom = stickyTop + container.getBoundingClientRect().height;
      const nextSummaryBox = nextSummary.getBoundingClientRect();
      const activationLine = stackBottom + 2;
      const isAtActivationLine = (
        nextSummaryBox.top <= activationLine
        && nextSummaryBox.bottom >= stickyTop - 2
      );
      const crossedActivationLine = (
        scrollDelta <= window.innerHeight * 1.25
        && nextSummaryBox.top + scrollDelta > activationLine
        && nextSummaryBox.top <= activationLine
      );

      if (isAtActivationLine || crossedActivationLine) {
        nextDisclosure.open = true;
        // Native sticky positioning handles the handoff. Do not compete with
        // the user's wheel/touch momentum by starting another smooth scroll.
      }
    };

    const update = () => {
      // A small dead band prevents trackpad/subpixel jitter from reversing it.
      const nextCompact = compactRef.current
        ? window.scrollY >= thresholdRef.current - 32
        : window.scrollY >= thresholdRef.current;

      if (nextCompact !== compactRef.current) {
        compactRef.current = nextCompact;
        setCompact(nextCompact);
      }

      if (suppressAdvanceForNavigation) {
        lastScrollY = window.scrollY;
        scheduleNavigationRelease();
        return;
      }

      if (advanceFrame === null) {
        advanceFrame = window.requestAnimationFrame(advanceDisclosure);
      }
    };

    const measure = () => {
      if (!compactRef.current && container.getAnimations({ subtree: true }).length === 0) {
        expandedHeight = container.getBoundingClientRect().height;
        publishHeight();
      }
      const stickyTop = Number.parseFloat(getComputedStyle(container).top) || 0;
      const researchTop = researchDisclosure.getBoundingClientRect().top + window.scrollY;

      thresholdRef.current = researchTop - stickyTop - expandedHeight;
      update();
    };

    const scheduleMeasure = () => {
      if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
      frameRef.current = window.requestAnimationFrame(measure);
    };

    const firstFrame = window.requestAnimationFrame(() => {
      frameRef.current = window.requestAnimationFrame(measure);
    });

    const finishExpansion = (event: TransitionEvent) => {
      if (
        event.target !== container.querySelector('.founder-grid')
        || event.propertyName !== 'max-height'
        || compactRef.current
      ) return;
      expandedHeight = container.getBoundingClientRect().height;
      publishHeight();
      scheduleMeasure();
    };
    container.addEventListener('transitionend', finishExpansion);

    suppressForHashNavigation(window.location.hash);

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', scheduleMeasure);
    window.addEventListener('load', scheduleMeasure);
    window.addEventListener('hashchange', handleHashChange);
    document.addEventListener('click', handleNavigationClick, true);

    return () => {
      if (advanceFrame !== null) window.cancelAnimationFrame(advanceFrame);
      if (navigationReleaseTimer !== null) window.clearTimeout(navigationReleaseTimer);
      heightObserver.disconnect();
      container.removeEventListener('transitionend', finishExpansion);
      spacer.style.height = '0px';
      peopleSection?.style.removeProperty('--people-directors-height');
      window.cancelAnimationFrame(firstFrame);
      if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', scheduleMeasure);
      window.removeEventListener('load', scheduleMeasure);
      window.removeEventListener('hashchange', handleHashChange);
      document.removeEventListener('click', handleNavigationClick, true);
    };
  }, []);

  return (
    <>
    <div ref={containerRef} className={`people-directors${compact ? ' is-compact' : ''}`}>
      <div className="people-directors-inner">
        <div className="people-heading">
          <div className="people-heading-title">
            <p className="eyebrow">Who We Are</p>
            <h2 id="people-title">Scientific Directors</h2>
          </div>
          <div className="people-heading-swap">
            <p className="people-heading-intro">The institute’s founding scientific leadership.</p>
            <p className="people-heading-names" aria-hidden="true">
              {directorNames.map((name, index) => (
                <span key={name}>
                  {index > 0 && <i aria-hidden="true"> · </i>}
                  {name}
                </span>
              ))}
            </p>
          </div>
        </div>
        <div className="founder-grid" aria-label="Scientific Directors">
          {children}
        </div>
      </div>
    </div>
    <div ref={spacerRef} aria-hidden="true" style={{ height: 0, pointerEvents: 'none', overflowAnchor: 'none' }} />
    </>
  );
}
