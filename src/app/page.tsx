import type { Metadata } from 'next';
import Link from 'next/link';
import { Kicker, CTA, LinkArr, Stat, Testimonial, LogosRow, CtaBand } from '@/components/shared/primitives';
import { IconBadge } from '@/components/shared/Icons';

export const metadata: Metadata = {
  title: 'Corporate Housing for Relocations & Extended Stays in Gauteng',
  description: 'Premium furnished apartments across Pretoria and Johannesburg. Fully managed corporate housing for relocations, executive placements, project teams, and extended stays.',
};

const HERO_IMG = 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=2000&q=80';
const LIVING_IMG = 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=80';
const BEDROOM_IMG = 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=900&q=80';
const KITCHEN_IMG = 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80';
const CITY_NIGHT = 'https://images.unsplash.com/photo-1542361345-89e58247f2d5?auto=format&fit=crop&w=2000&q=80';

const MARQUEE_ITEMS = [
  ['Pretoria HQ', 'Brooklyn / Waterkloof / Menlyn'],
  ['Johannesburg', 'Sandton / Rosebank / Melrose'],
  ['Diplomatic Quarter', 'Arcadia / Hatfield'],
  ['Mining & Resources', 'Project team housing'],
  ['Banking & Consulting', 'Executive placements'],
  ['Embassy Partners', 'Diplomatic relocations'],
  ['Pretoria HQ', 'Brooklyn / Waterkloof / Menlyn'],
  ['Johannesburg', 'Sandton / Rosebank / Melrose'],
  ['Diplomatic Quarter', 'Arcadia / Hatfield'],
  ['Mining & Resources', 'Project team housing'],
  ['Banking & Consulting', 'Executive placements'],
  ['Embassy Partners', 'Diplomatic relocations'],
];

const GATEWAYS = [
  {
    icon: 'home',
    label: 'Corporate housing',
    title: 'Apartments engineered for long stays.',
    copy: 'A fully furnished, professionally operated alternative to hotels for 30 nights, six months, or a multi-year posting.',
    href: '/corporate-housing',
  },
  {
    icon: 'briefcase',
    label: 'HR and mobility',
    title: 'A cleaner path for relocation teams.',
    copy: 'One accommodation partner for employee onboarding, monthly billing, policy alignment and reporting.',
    href: '/hr-mobility',
  },
  {
    icon: 'building',
    label: 'Landlords',
    title: 'Master lease partnership details.',
    copy: 'Hostsy leases quality apartments from owners and turns them into managed corporate residences.',
    href: '/landlords',
  },
];

const OPERATING_STEPS = [
  { n: '01', icon: 'headset', h: 'Brief', p: 'Share the role, dates, city, budget and employee needs.' },
  { n: '02', icon: 'doc', h: 'Match', p: 'Receive a short list of suitable apartments within 48 hours.' },
  { n: '03', icon: 'key', h: 'Settle', p: 'Hostsy handles contract, handover, housekeeping and support.' },
];

const APARTMENTS = [
  { img: LIVING_IMG, pill: 'Two bedroom · 84 sqm', title: 'The Brooklyn Residence', loc: 'Brooklyn · Pretoria', row: ['Fibre 200', 'Backup power', 'Concierge'] },
  { img: BEDROOM_IMG, pill: 'Studio executive · 52 sqm', title: 'Waterkloof Heights 04', loc: 'Waterkloof · Pretoria', row: ['Embassy belt', 'Garden', 'Pet friendly'] },
  { img: KITCHEN_IMG, pill: 'One bedroom · 68 sqm', title: 'Sandton Central 1102', loc: 'Sandton · Johannesburg', row: ['CBD adjacent', 'Gym', 'Workspace'] },
];

const DETAIL_LINKS = [
  { icon: 'invoice', h: 'Pricing and procurement', p: 'Cost logic, VAT invoicing, PO matching and master service agreements.', href: '/hr-mobility' },
  { icon: 'check', h: 'Apartment specification', p: 'Furniture, fibre, backup power, cleaning, maintenance and support standards.', href: '/corporate-housing' },
  { icon: 'map', h: 'Neighbourhood coverage', p: 'Pretoria and Johannesburg locations with business-ready apartment clusters.', href: '/locations' },
  { icon: 'door', h: 'See the portfolio', p: 'A visual tour of lounges, bedrooms, kitchens and work-ready spaces.', href: '/gallery' },
];

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="hero__media" style={{ backgroundImage: `url(${HERO_IMG})` }}></div>
        <div className="hero__veil"></div>
        <div className="hero__grain"></div>
        <div className="hero__inner wrap">
          <div className="rise-1">
            <h1 className="display hero__headline">
              <em>Corporate Housing</em><br />
              for Relocations,<br />
              Project Teams &amp;<br />
              Extended Stays
            </h1>
          </div>
          <div className="rise-2">
            <p className="hero__sub">
              Premium, fully managed apartments for companies moving people across Pretoria and
              Johannesburg, from first brief to final handover.
            </p>
          </div>
          <div className="rise-3">
            <div className="hero__ctas">
              <CTA to="/contact" kind="brass" size="lg">Request Accommodation</CTA>
              <CTA to="/corporate-housing" kind="ghost-ivory" size="lg">Explore The Model</CTA>
            </div>
          </div>
          <div className="rise-4 hero__metrics">
            <div className="hero__meta">
              <div className="item"><span className="k">Coverage</span><span className="v">Pretoria · Johannesburg</span></div>
              <div className="item"><span className="k">Minimum stay</span><span className="v">30 nights</span></div>
              <div className="item"><span className="k">Response SLA</span><span className="v">Under 4 hours</span></div>
              <div className="item"><span className="k">Portfolio</span><span className="v">220+ apartments</span></div>
            </div>
          </div>
        </div>
        <div className="hero__marquee">
          <div className="track">
            {MARQUEE_ITEMS.map(([k, v], i) => (
              <span key={i}><b>{k}</b>{v}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap reveal" style={{ paddingTop: 72, paddingBottom: 32 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 20, marginBottom: 28 }}>
          <Kicker num="02" name="Trusted by" />
          <p className="label label--muted">Corporates · Diplomatic missions · Project operators</p>
        </div>
        <LogosRow items={[
          { name: 'Kruger Mining', kind: 'Mining · 4 yrs' },
          { name: 'Saxon Capital', kind: 'Banking · 3 yrs' },
          { name: 'Northbridge', kind: 'Consulting' },
          { name: 'Embassy of NL', kind: 'Diplomatic' },
          { name: 'Vector Engineering', kind: 'Projects · 2 yrs' },
          { name: 'Halberd Pharma', kind: 'Pharma' },
        ]} />
      </section>

      <section className="section reveal">
        <div className="wrap">
          <div className="editorial">
            <div className="editorial__label">
              <Kicker num="03" name="Start here" />
              <div className="brass-rule" style={{ marginTop: 28 }}></div>
            </div>
            <div>
              <h2 className="h-1" style={{ margin: 0 }}>Find the right Hostsy solution for your stay.</h2>
              <p className="lede" style={{ marginTop: 24 }}>
                Whether you are placing one executive, relocating a project team, or leasing your
                apartment to corporate guests, Hostsy gives you a clear route from inquiry to move-in.
              </p>
            </div>
          </div>

          <div className="grid-3 reveal-stagger" style={{ marginTop: 64 }}>
            {GATEWAYS.map((item) => (
              <Link key={item.href} className="card" href={item.href}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
                  <IconBadge name={item.icon} tone="brass" size={48} />
                  <span className="label label--brass">{item.label}</span>
                </div>
                <h3 className="h-3" style={{ margin: 0 }}>{item.title}</h3>
                <p style={{ color: 'var(--muted)', fontSize: 15, margin: 0 }}>{item.copy}</p>
                <span className="linkarr" style={{ marginTop: 'auto' }}>
                  <span>Explore solution</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section on-ink reveal">
        <div className="wrap">
          <div className="editorial">
            <div className="editorial__label">
              <Kicker num="04" name="Operating model" light />
              <div className="brass-rule" style={{ marginTop: 28 }}></div>
            </div>
            <div>
              <h2 className="h-1" style={{ margin: 0 }}>From accommodation brief to move-in, handled end to end.</h2>
              <p className="lede" style={{ marginTop: 24, color: 'rgba(241,235,222,0.78)' }}>
                Hostsy coordinates the apartment match, contract, arrival, housekeeping and in-stay
                support so your employee can land in Gauteng with everything already working.
              </p>
            </div>
          </div>

          <div className="process process--compact reveal-stagger" style={{ marginTop: 56, borderTopColor: 'rgba(241,235,222,0.18)' }}>
            {OPERATING_STEPS.map((step) => (
              <div key={step.n} className="step" style={{ borderRightColor: 'rgba(241,235,222,0.18)', borderBottomColor: 'rgba(241,235,222,0.18)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span className="num">{step.n}</span>
                  <IconBadge name={step.icon} tone="ivory" size={42} />
                </div>
                <h4>{step.h}</h4>
                <p style={{ color: 'rgba(241,235,222,0.66)' }}>{step.p}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 40 }}>
            <LinkArr to="/corporate-housing">Read the full corporate housing process</LinkArr>
          </div>
        </div>
      </section>

      <section className="section reveal">
        <div className="wrap">
          <div className="grid-2" style={{ alignItems: 'center', gap: 72 }}>
            <div>
              <Kicker num="05" name="Operational proof" />
              <h2 className="h-1" style={{ margin: '24px 0 0' }}>Trusted by teams that cannot afford a messy move.</h2>
            </div>
            <Testimonial
              quote="Hostsy quietly absorbed the most painful part of our relocation programme. Three executives, three cities, one invoice, zero escalations."
              name="Anika R."
              role="Global Mobility Lead"
              company="Saxon Capital"
            />
          </div>

          <div className="stats reveal-stagger" style={{ marginTop: 64 }}>
            <Stat value="220" suffix="+" label="Apartments under direct Hostsy management across Gauteng" />
            <Stat value="48" suffix="hr" label="Average turnaround from inquiry to curated apartment shortlist" />
            <Stat value="97" suffix="%" label="On time move in rate across the last twelve months" />
            <Stat value="6.8" suffix="mo" label="Median length of stay across the corporate book" />
          </div>
        </div>
      </section>

      <section className="section on-sand reveal">
        <div className="wrap">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20, marginBottom: 48 }}>
            <div>
              <Kicker num="06" name="Portfolio snapshot" />
              <h2 className="h-1" style={{ margin: '24px 0 0', maxWidth: '18ch' }}>Apartment standards you can picture before arrival.</h2>
            </div>
            <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
              <LinkArr to="/locations">Browse locations</LinkArr>
              <LinkArr to="/gallery">View gallery</LinkArr>
            </div>
          </div>

          <div className="grid-3 reveal-stagger">
            {APARTMENTS.map((apartment) => (
              <Link key={apartment.title} className="aptcard" href="/locations">
                <div className="aptcard__img" style={{ backgroundImage: `url(${apartment.img})` }}>
                  <span className="aptcard__pill">{apartment.pill}</span>
                </div>
                <div className="aptcard__meta">
                  <span className="aptcard__title">{apartment.title}</span>
                  <span className="aptcard__loc">{apartment.loc}</span>
                </div>
                <div className="aptcard__row">
                  {apartment.row.map((item) => <span key={item}>{item}</span>)}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section reveal">
        <div className="wrap">
          <div className="editorial">
            <div className="editorial__label">
              <Kicker num="07" name="Need more detail?" />
              <div className="brass-rule" style={{ marginTop: 28 }}></div>
            </div>
            <div>
              <h2 className="h-1" style={{ margin: 0 }}>Everything your team needs to decide with confidence.</h2>
              <p className="lede" style={{ marginTop: 24 }}>
                Review pricing logic, included services, neighbourhood coverage and portfolio imagery
                in the pages built for each part of the decision.
              </p>
            </div>
          </div>

          <div className="grid-4 reveal-stagger" style={{ marginTop: 56 }}>
            {DETAIL_LINKS.map((item) => (
              <Link key={item.href + item.h} className="card" href={item.href}>
                <IconBadge name={item.icon} tone="line" size={44} />
                <h3 className="h-3" style={{ margin: 0, fontSize: 24 }}>{item.h}</h3>
                <p style={{ color: 'var(--muted)', fontSize: 14, margin: 0 }}>{item.p}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        kicker={{ num: '08', name: 'Move people, not mountains' }}
        headline={<span>Tell us about the placement. We will have <em>options</em> in 48 hours.</span>}
        sub="Whether it is one executive for six months or a project team of forty for two years, Hostsy is built for the brief you are about to write."
        primary={{ label: 'Request Accommodation', to: '/contact' }}
        secondary={{ label: 'Explore Corporate Housing', to: '/corporate-housing' }}
        bg={CITY_NIGHT}
      />
    </main>
  );
}
