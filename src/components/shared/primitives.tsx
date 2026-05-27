import Link from 'next/link';
import React from 'react';

export function Arrow({ size = 14 }: { size?: number }) {
  return (
    <svg className="arrow" width={size} height={size} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4">
      <line x1="1" y1="7" x2="12" y2="7" />
      <polyline points="7,2 12,7 7,12" />
    </svg>
  );
}

interface KickerProps {
  num: string;
  name: string;
  light?: boolean;
}

export function Kicker({ num, name, light }: KickerProps) {
  return (
    <div className={'kicker' + (light ? ' label--ivory-muted' : '')} style={light ? { color: 'rgba(241,235,222,0.66)' } : undefined}>
      <span className="dot"></span>
      <span className="num">{num}</span>
      <span className="name">/ {name}</span>
    </div>
  );
}

interface CTAProps {
  to: string;
  kind?: 'brass' | 'ink' | 'ghost' | 'ghost-ivory';
  size?: 'lg';
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export function CTA({ to, kind = 'brass', size, children, style }: CTAProps) {
  const cls = 'btn btn--' + kind + (size === 'lg' ? ' btn--lg' : '');
  return (
    <Link className={cls} href={to} style={style}>
      <span>{children}</span>
      <Arrow />
    </Link>
  );
}

interface LinkArrProps {
  to: string;
  children: React.ReactNode;
}

export function LinkArr({ to, children }: LinkArrProps) {
  return (
    <Link className="linkarr" href={to}>
      <span>{children}</span>
      <Arrow />
    </Link>
  );
}

interface StatProps {
  value: string | number;
  suffix?: string;
  label: string;
}

export function Stat({ value, suffix, label }: StatProps) {
  return (
    <div className="stat">
      <div className="n">
        <span>{value}</span>
        {suffix ? <sup>{suffix}</sup> : null}
      </div>
      <div className="k">{label}</div>
    </div>
  );
}

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export function Testimonial({ quote, name, role, company }: TestimonialProps) {
  return (
    <div>
      <p className="quote">{quote}</p>
      <div className="attrib">
        <b>{name}</b> &nbsp;·&nbsp; <span>{role}, {company}</span>
      </div>
    </div>
  );
}

interface LogosRowItem {
  name: string;
  kind: string;
}

export function LogosRow({ items }: { items: LogosRowItem[] }) {
  return (
    <div className="logos">
      {items.map((it, i) => (
        <div key={i} className="logo">
          <div>
            {it.name}
            <span className="tiny">{it.kind}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

interface CtaBandProps {
  kicker?: { num: string; name: string };
  headline: React.ReactNode;
  sub?: string;
  primary?: { label: string; to: string };
  secondary?: { label: string; to: string };
  bg?: string;
}

export function CtaBand({ kicker, headline, sub, primary, secondary, bg }: CtaBandProps) {
  const bgImg = bg || 'https://images.unsplash.com/photo-1542361345-89e58247f2d5?auto=format&fit=crop&w=2000&q=80';
  return (
    <section className="cta-band reveal">
      <div className="cta-band__bg" style={{ backgroundImage: `url(${bgImg})` }}></div>
      <div className="cta-band__veil"></div>
      <div className="cta-band__inner wrap-narrow" style={{ textAlign: 'center' }}>
        {kicker && (
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}>
            <Kicker num={kicker.num} name={kicker.name} />
          </div>
        )}
        <h2 className="h-1" style={{ margin: '0 auto', maxWidth: '20ch' }}>{headline}</h2>
        {sub && (
          <p className="lede" style={{ margin: '24px auto 0', color: 'rgba(241,235,222,0.78)' }}>{sub}</p>
        )}
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', marginTop: 40, flexWrap: 'wrap' }}>
          {primary && <CTA to={primary.to} kind="brass" size="lg">{primary.label}</CTA>}
          {secondary && <CTA to={secondary.to} kind="ghost-ivory" size="lg">{secondary.label}</CTA>}
        </div>
      </div>
    </section>
  );
}

interface SpecProps {
  k: string;
  v: string;
}

export function Spec({ k, v }: SpecProps) {
  return (
    <div className="row">
      <div className="k">{k}</div>
      <div className="v">{v}</div>
    </div>
  );
}

interface PageHeroBlockProps {
  index: string;
  label: string;
  title: React.ReactNode;
  sub: string;
}

export function PageHeroBlock({ index, label, title, sub }: PageHeroBlockProps) {
  const num = index.split('/')[0].trim();
  return (
    <section className="pagehero">
      <span className="index">{index}</span>
      <div className="wrap">
        <div style={{ marginBottom: 56 }}>
          <Kicker num={num} name={label} light />
        </div>
        <div className="pagehero__grid">
          <h1 className="h-hero" style={{ margin: 0 }}>{title}</h1>
          <p>{sub}</p>
        </div>
      </div>
    </section>
  );
}

interface ImageBreakProps {
  image: string;
  height?: number;
  caption?: string;
  overline?: string;
}

export function ImageBreak({ image, height = 420, caption, overline }: ImageBreakProps) {
  return (
    <section style={{ position: 'relative', height, overflow: 'hidden' }}>
      <div className="zoom-bg" style={{ position: 'absolute', inset: 0, backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(11,31,51,0.15), rgba(11,31,51,0.6))' }}></div>
      {caption && (
        <div className="wrap" style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end', paddingBottom: 40, color: 'var(--ivory)' }}>
          <div>
            {overline && <p className="label" style={{ color: 'rgba(241,235,222,0.7)' }}>{overline}</p>}
            <p className="h-3" style={{ margin: '10px 0 0', maxWidth: '32ch' }}>{caption}</p>
          </div>
        </div>
      )}
    </section>
  );
}
