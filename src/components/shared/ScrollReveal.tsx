'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const REVEAL_SELECTOR = [
  '.reveal',
  '.reveal-fade',
  '.reveal-left',
  '.reveal-right',
  '.reveal-scale',
  '.reveal-stagger',
  '.reveal-zoom',
  '.pagehero',
  'main > section:not(.hero)',
  'section.section',
  'section.wrap',
  '.cta-band',
  '.logos',
  '.compare',
  '.process',
  '.specs',
  '.dir',
  '.grid-2',
  '.grid-3',
  '.grid-4',
].join(', ');

const STAGGER_SELECTOR = [
  '.grid-2',
  '.grid-3',
  '.grid-4',
  '.logos',
  '.compare',
  '.process',
  '.specs',
  '.dir',
].join(', ');

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    let observer: IntersectionObserver | undefined;

    const timer = window.setTimeout(() => {
      const elements = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR));

      if (!elements.length) return;

      elements.forEach((element, index) => {
        if (
          element.matches(STAGGER_SELECTOR) &&
          !element.classList.contains('reveal-stagger')
        ) {
          element.classList.add('reveal-stagger');
          return;
        }

        if (
          element.classList.contains('reveal') ||
          element.classList.contains('reveal-fade') ||
          element.classList.contains('reveal-left') ||
          element.classList.contains('reveal-right') ||
          element.classList.contains('reveal-scale') ||
          element.classList.contains('reveal-stagger') ||
          element.classList.contains('reveal-zoom')
        ) {
          return;
        }

        const variant = ['reveal', 'reveal-scale'][index % 2];
        element.classList.add(variant);
      });

      const activeObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            entry.target.classList.add('is-in');
            activeObserver.unobserve(entry.target);
          });
        },
        { rootMargin: '0px 0px -12% 0px', threshold: 0.14 }
      );
      observer = activeObserver;

      elements.forEach((element) => activeObserver.observe(element));
    }, 0);

    return () => {
      window.clearTimeout(timer);
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
}
