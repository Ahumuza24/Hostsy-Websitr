'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/corporate-housing', label: 'Corporate Housing' },
  { href: '/hr-mobility', label: 'For HR & Mobility' },
  { href: '/landlords', label: 'For Landlords' },
  { href: '/locations', label: 'Locations' },
  { href: '/contact', label: 'Contact' },
];

function Arrow() {
  return (
    <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4">
      <line x1="1" y1="7" x2="12" y2="7" />
      <polyline points="7,2 12,7 7,12" />
    </svg>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileState, setMobileState] = useState({ open: false, path: '' });
  const pathname = usePathname();
  const mobile = mobileState.open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // All pages start with a dark hero, so nav always starts over ink
  const onInk = true;

  let cls = 'nav';
  if (scrolled) {
    cls += onInk ? ' nav--solid-ink nav--on-ink' : ' nav--solid';
  } else if (onInk) {
    cls += ' nav--on-ink';
  }

  const ghostStyle =
    onInk && !scrolled
      ? { borderColor: 'rgba(241,235,222,0.25)', color: 'var(--ivory)' }
      : undefined;

  return (
    <>
      <header className={cls}>
        <div className="nav__inner">
          <Link className="nav__brand" href="/">
            <Image
              src="/hostsy-logo-gold.png"
              alt="Hostsy"
              width={40}
              height={40}
              style={{ height: 40, width: 40, objectFit: 'contain' }}
              priority
            />
            <span className="tag">Corporate Housing</span>
          </Link>

          <nav className="nav__links" aria-label="Main navigation">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                className={'nav__link' + (pathname === l.href ? ' is-active' : '')}
                href={l.href}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="nav__cta">
            <Link className="btn btn--ghost" href="/contact" style={ghostStyle}>
              <span>Request Accommodation</span>
              <Arrow />
            </Link>
            <button
              className="nav__burger"
              aria-label="Open menu"
              onClick={() => setMobileState({ open: true, path: pathname })}
            >
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {mobile && (
        <div className="mobile-menu" role="dialog" aria-label="Navigation menu">
          <button
            className="close"
            onClick={() => setMobileState({ open: false, path: pathname })}
            aria-label="Close menu"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" stroke="currentColor" strokeWidth="1.4">
              <line x1="1" y1="1" x2="13" y2="13" />
              <line x1="13" y1="1" x2="1" y2="13" />
            </svg>
          </button>
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setMobileState({ open: false, path: pathname })}>
              {l.label}
            </Link>
          ))}
          <div style={{ marginTop: 32 }}>
            <Link className="btn btn--brass btn--lg" href="/contact">
              <span>Request Accommodation</span>
              <Arrow />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
