'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';

type NavItem = {
  label: string;
  href: string;
};

type NavigationHighlight = {
  href: string;
  color: string;
};

const defaultHighlights: Record<string, string> = {
  '#mission': 'var(--soft-violet)',
  '#outputs': 'color-mix(in srgb, var(--lime) 15%, var(--paper))',
  '#approach': 'color-mix(in srgb, var(--violet) 13%, var(--paper))',
  '#people': 'color-mix(in srgb, var(--violet) 13%, var(--paper))',
  '#funding': 'color-mix(in srgb, var(--cyan) 11%, var(--paper))',
  '#faq': 'color-mix(in srgb, var(--blue) 9%, var(--paper))',
};

function isNavigationHighlight(value: unknown): value is NavigationHighlight {
  if (!value || typeof value !== 'object') return false;
  const detail = value as Partial<NavigationHighlight>;
  return typeof detail.href === 'string' && typeof detail.color === 'string';
}

export default function HeaderNavigation({ items }: { items: NavItem[] }) {
  const carouselHighlight = useRef<NavigationHighlight>({
    href: '#outputs',
    color: defaultHighlights['#outputs'],
  });
  const frame = useRef<number | null>(null);
  const [highlight, setHighlight] = useState<NavigationHighlight>(carouselHighlight.current);

  useEffect(() => {
    const updateFromScroll = () => {
      const activationLine = 96;
      const hero = document.getElementById('mission');

      if (hero && hero.getBoundingClientRect().bottom > activationLine) {
        setHighlight(carouselHighlight.current);
        return;
      }

      const sectionIds = ['people', 'funding', 'faq'];
      let activeHref: string | null = null;

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= activationLine) activeHref = `#${id}`;
      });

      if (activeHref) {
        setHighlight({ href: activeHref, color: defaultHighlights[activeHref] });
      } else {
        setHighlight(carouselHighlight.current);
      }
    };

    const scheduleScrollUpdate = () => {
      if (frame.current !== null) return;
      frame.current = window.requestAnimationFrame(() => {
        frame.current = null;
        updateFromScroll();
      });
    };

    const handleCarouselHighlight = (event: Event) => {
      const detail = (event as CustomEvent<unknown>).detail;
      if (!isNavigationHighlight(detail)) return;
      carouselHighlight.current = detail;
      updateFromScroll();
    };

    const handleHashChange = () => {
      const href = window.location.hash;
      if (href === '#top' || href === '#outputs') {
        setHighlight(carouselHighlight.current);
      } else if (defaultHighlights[href]) {
        setHighlight({ href, color: defaultHighlights[href] });
      }
      scheduleScrollUpdate();
    };

    window.addEventListener('resi:navigation-highlight', handleCarouselHighlight);
    window.addEventListener('scroll', scheduleScrollUpdate, { passive: true });
    window.addEventListener('resize', scheduleScrollUpdate);
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    updateFromScroll();

    return () => {
      if (frame.current !== null) window.cancelAnimationFrame(frame.current);
      window.removeEventListener('resi:navigation-highlight', handleCarouselHighlight);
      window.removeEventListener('scroll', scheduleScrollUpdate);
      window.removeEventListener('resize', scheduleScrollUpdate);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderLink = (item: NavItem) => {
    const isActive = highlight.href === item.href;
    const style = isActive
      ? ({ '--nav-highlight-color': highlight.color } as CSSProperties)
      : undefined;

    return (
      <a
        className={isActive ? 'is-active' : undefined}
        href={item.href}
        key={item.label}
        style={style}
        aria-current={isActive ? 'location' : undefined}
      >
        {item.label}
      </a>
    );
  };

  return (
    <>
      <nav className="primary-nav" aria-label="Primary navigation">
        {items.map(renderLink)}
      </nav>
      <details className="mobile-menu">
        <summary aria-label="Open navigation">Menu</summary>
        <nav aria-label="Additional navigation">
          {items.map(renderLink)}
        </nav>
      </details>
    </>
  );
}
