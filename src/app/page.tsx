import { Fragment } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Kicker, CTA, LinkArr, Stat, Testimonial, LogosRow, CtaBand, ImageBreak } from '@/components/shared/primitives';
import { IconBadge } from '@/components/shared/Icons';
import FAQ from '@/components/shared/FAQ';
import CostChart from '@/components/dataviz/CostChart';
import PortfolioRadial from '@/components/dataviz/PortfolioRadial';

export const metadata: Metadata = {
  title: 'Corporate Housing for Relocations & Extended Stays in Gauteng',
  description: 'Premium furnished apartments across Pretoria and Johannesburg. Fully managed corporate housing for relocations, executive placements, project teams, and extended stays.',
};

const HERO_IMG = 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=2000&q=80';
const BALCONY_IMG = 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=2000&q=80';
const LIVING_IMG = 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=80';
const BEDROOM_IMG = 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=900&q=80';
const KITCHEN_IMG = 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80';
const WORKSPACE_IMG = 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&w=900&q=80';
const DINING_IMG = 'https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&w=900&q=80';
const BUILDING_IMG = 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80';
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

const WHY_CARDS = [
  { ic: 'target', letter: 'A', h: 'Operational certainty', p: 'Move in dates that hold. Service tickets that close. Invoices that match purchase orders. Built for the way procurement and mobility teams actually work.' },
  { ic: 'check', letter: 'B', h: 'Consistent quality', p: 'Every apartment is brought to the same Hostsy specification before handover. The unit your COO walks into matches the unit your engineer walks into.' },
  { ic: 'user', letter: 'C', h: 'A single point of contact', p: 'One account manager owns your placements end to end. Not a call centre. Not a different agent per booking. The same person who knows your policy and your people.' },
  { ic: 'clock', letter: 'D', h: 'Built for long stays', p: 'Fibre, backup power, workspaces, weekly cleaning and full kitchens designed for 30 nights and beyond. Not a hotel room that pretends.' },
  { ic: 'invoice', letter: 'E', h: 'Procurement ready', p: 'Tax invoices, VAT compliant, MSA / SLA in place, B-BBEE certified. We slot directly into your vendor onboarding without months of paperwork.' },
  { ic: 'compass', letter: 'F', h: 'Local intelligence', p: 'We know which streets in Brooklyn are quiet on a Tuesday, which buildings have lift redundancy, which neighbourhoods make sense for embassy proximity. You inherit that knowledge.' },
];

const PROCESS_STEPS = [
  { n: '01', h: 'Intake', ic: 'headset', p: 'Brief us on the employee, role, length of stay, neighbourhood needs and policy budget.' },
  { n: '02', h: 'Curation', ic: 'doc', p: 'We propose two to three matched apartments within 48 hours, with floor plans, photos and pricing.' },
  { n: '03', h: 'Contract', ic: 'invoice', p: 'Single corporate contract. Per stay or master service agreement. VAT invoice up front.' },
  { n: '04', h: 'Onboarding', ic: 'key', p: 'Pre arrival prep, welcome pack, fibre verification, key handover at the door or at the airport.' },
  { n: '05', h: 'In stay', ic: 'home', p: 'Weekly housekeeping, maintenance SLA, account manager check ins, monthly summary report.' },
];

const COMPARE_ROWS = [
  ['Nightly rate', 'R 2,950 / night', 'R 1,750 / night'],
  ['60 night total', 'R 177,000', 'R 105,000'],
  ['Space (sqm)', '28 sqm room', '65 sqm apartment'],
  ['Kitchen', 'Mini fridge', 'Full kitchen'],
  ['Workspace', 'Desk in corner', 'Dedicated study'],
  ['Laundry', 'Per item charge', 'In unit, included'],
  ['Backup power', 'Generator on tap', 'Inverter + UPS, always on'],
  ['Internet', 'Hotel WiFi', 'Fibre 200 Mbps, dedicated'],
  ['Invoicing', 'Daily folio chaos', 'One monthly tax invoice'],
  ['Per diem load', 'High, eating out', 'Low, self catering'],
];

const APARTMENTS = [
  { img: LIVING_IMG, pill: 'Two bedroom · 84 sqm', title: 'The Brooklyn Residence', loc: 'Brooklyn · Pretoria', row: ['Fibre 200', 'Backup power', 'Concierge'] },
  { img: BEDROOM_IMG, pill: 'Studio executive · 52 sqm', title: 'Waterkloof Heights 04', loc: 'Waterkloof · Pretoria', row: ['Embassy belt', 'Garden', 'Pet friendly'] },
  { img: KITCHEN_IMG, pill: 'One bedroom · 68 sqm', title: 'Sandton Central 1102', loc: 'Sandton · Johannesburg', row: ['CBD adjacent', 'Gym', 'Workspace'] },
  { img: WORKSPACE_IMG, pill: 'Three bedroom · 110 sqm', title: 'Menlyn Family Suite', loc: 'Menlyn · Pretoria', row: ['Family ready', 'Schools', 'Pool'] },
  { img: DINING_IMG, pill: 'One bedroom · 62 sqm', title: 'Rosebank Park 0807', loc: 'Rosebank · Johannesburg', row: ['Gautrain', 'Restaurants', 'Co-work'] },
  { img: BALCONY_IMG, pill: 'Two bedroom · 92 sqm', title: 'The Arcadia Diplomatic', loc: 'Arcadia · Pretoria', row: ['Embassy row', 'Quiet', 'Secure'] },
];

const SPECS = [
  { ic: 'home', k: 'Furnishing', v: 'Full executive standard' },
  { ic: 'bed', k: 'Linen & towels', v: 'Hotel grade, weekly refresh' },
  { ic: 'wifi', k: 'Internet', v: 'Fibre 200 Mbps, dedicated' },
  { ic: 'bolt', k: 'Backup power', v: 'Inverter + UPS, 6 hr runtime' },
  { ic: 'droplet', k: 'Water backup', v: 'JoJo tank, 24 hr supply' },
  { ic: 'broom', k: 'Cleaning', v: 'Weekly housekeeping, included' },
  { ic: 'wrench', k: 'Maintenance', v: '4 hour response SLA' },
  { ic: 'briefcase', k: 'Workspace', v: 'Desk, chair, monitor on request' },
  { ic: 'gear', k: 'Kitchen', v: 'Fully equipped, cook ready' },
  { ic: 'shield', k: 'Security', v: '24 hr access control' },
  { ic: 'invoice', k: 'Invoicing', v: 'Monthly, VAT, PO matched' },
  { ic: 'headset', k: 'Support', v: 'One named account manager' },
];

const FAQ_ITEMS = [
  { q: 'What is the minimum length of stay?', a: 'Hostsy specialises in stays of 30 nights or longer. There is no upper limit. Our median placement runs just under seven months and many run multiple years for executive postings.' },
  { q: 'How quickly can a placement go live?', a: 'From a complete brief, we present curated apartment options within 48 hours and can have an employee in keys within 5 to 10 working days. Same week placements are possible when inventory matches.' },
  { q: 'Do you invoice corporates directly?', a: 'Yes. We issue a monthly VAT invoice referencing your PO. We support master service agreements with consolidated billing across all employees, locations and stays.' },
  { q: 'Are your apartments serviced?', a: 'Weekly housekeeping is included in every stay. Mid week refresh, linen change and additional services are available on request, billed as agreed in the SLA.' },
  { q: 'What happens during load shedding or water cuts?', a: 'Every Hostsy apartment runs on backup power that covers the essentials and routers, plus a water backup tank. Employees can keep working through a stage 6 outage without disruption.' },
  { q: 'Do you handle airport collection and onboarding?', a: 'Yes. We coordinate airport pickup, key handover at the door, fibre verification, a welcome pack and a local SIM. Your employee walks in and starts working the same evening.' },
  { q: 'Can you accommodate pets and families?', a: 'Many of our apartments are pet friendly and we hold a dedicated portfolio of three bedroom family units in Menlyn, Brooklyn and Lynnwood near international schools.' },
  { q: 'How do you compare on price to corporate hotels?', a: 'For stays beyond 21 nights, Hostsy is typically 30 to 45 percent less expensive than a four star hotel in the same neighbourhood, with materially more space and a proper kitchen.' },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
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
              Hostsy delivers premium, fully managed apartments for companies moving people
              across Pretoria and Johannesburg, with every stay handled from first brief to final
              handover.
            </p>
          </div>
          <div className="rise-3">
            <div className="hero__ctas">
              <CTA to="/contact" kind="brass" size="lg">Request Accommodation</CTA>
              <CTA to="/landlords" kind="ghost-ivory" size="lg">Partner With Hostsy</CTA>
            </div>
          </div>
          <div className="rise-4 hero__metrics">
            <div className="hero__meta">
              <div className="item"><span className="k">Coverage</span><span className="v">Pretoria · Johannesburg</span></div>
              <div className="item"><span className="k">Minimum stay</span><span className="v">30 nights</span></div>
              <div className="item"><span className="k">Response SLA</span><span className="v">Under 4 hours</span></div>
              <div className="item"><span className="k">Units under management</span><span className="v">220+ apartments</span></div>
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

      {/* Client logos */}
      <section className="wrap reveal" style={{ paddingTop: 80, paddingBottom: 40 }}>
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

      {/* Why Hostsy */}
      <section className="section reveal">
        <div className="wrap">
          <div className="editorial">
            <div className="editorial__label">
              <Kicker num="03" name="Why companies choose Hostsy" />
              <div className="brass-rule" style={{ marginTop: 28 }}></div>
            </div>
            <div>
              <h2 className="h-1" style={{ margin: 0 }}>We treat housing as <em>infrastructure</em>, not as hospitality.</h2>
              <p className="lede" style={{ marginTop: 28 }}>Hostsy was built for the operational realities of corporate mobility. One contract, one invoice, one point of contact across every apartment, every city, every employee. No surprises for your team. No second-guessing for your CFO.</p>
            </div>
          </div>
          <div className="grid-3 reveal-stagger" style={{ marginTop: 80 }}>
            {WHY_CARDS.map(c => (
              <div key={c.letter} className="card">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                  <IconBadge name={c.ic} tone="brass" size={48} />
                  <span className="num">{c.letter}.</span>
                </div>
                <h3 className="h-3">{c.h}</h3>
                <p style={{ color: 'var(--muted)', fontSize: 15, margin: 0 }}>{c.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image break */}
      <div className="reveal-zoom">
        <ImageBreak image={BALCONY_IMG} height={460} overline="WATERKLOOF · PRETORIA" caption="The Hostsy Residence: 84 sqm, fibre, backup power, weekly housekeeping, two bedrooms with a north facing balcony." />
      </div>

      {/* How it works */}
      <section className="section on-ink reveal">
        <div className="wrap">
          <div className="editorial">
            <div className="editorial__label">
              <Kicker num="04" name="How it works" light />
              <div className="brass-rule" style={{ marginTop: 28 }}></div>
            </div>
            <div>
              <h2 className="h-1" style={{ margin: 0 }}>From intake to keys, in <em>days</em> not weeks.</h2>
              <p className="lede" style={{ marginTop: 28, color: 'rgba(241,235,222,0.78)' }}>A simple, five step path from inquiry to a settled employee. Each step is owned by a named person on our side.</p>
            </div>
          </div>
          <div className="process reveal-stagger" style={{ marginTop: 64, borderTopColor: 'rgba(241,235,222,0.18)' }}>
            {PROCESS_STEPS.map(s => (
              <div key={s.n} className="step" style={{ borderRightColor: 'rgba(241,235,222,0.18)', borderBottomColor: 'rgba(241,235,222,0.18)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span className="num">{s.n}</span>
                  <IconBadge name={s.ic} tone="ivory" size={42} />
                </div>
                <h4>{s.h}</h4>
                <p style={{ color: 'rgba(241,235,222,0.66)' }}>{s.p}</p>
              </div>
            ))}
          </div>
          <div className="operations-proof reveal" style={{ marginTop: 120, paddingTop: 40, borderTop: '1px solid rgba(241,235,222,0.18)', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 80, alignItems: 'center' }}>
            <div className="operations-proof__stats" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56 }}>
              <Stat value="220" suffix="+" label="Apartments under direct Hostsy management across Gauteng" />
              <Stat value="48" suffix="hr" label="Average turnaround from inquiry to curated apartment shortlist" />
              <Stat value="97" suffix="%" label="On time move in rate across the last twelve months of bookings" />
              <Stat value="6.8" suffix="mo" label="Median length of stay across our corporate book of business" />
            </div>
            <div>
              <Kicker num="·" name="Portfolio composition" light />
              <div style={{ marginTop: 18, display: 'flex', justifyContent: 'center' }}>
                <PortfolioRadial light />
              </div>
              <p style={{ marginTop: 14, fontFamily: 'var(--f-mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(241,235,222,0.5)', textAlign: 'center' }}>
                Eight neighbourhoods · two cities · single operator
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost vs hotels */}
      <section className="section reveal">
        <div className="wrap">
          <div className="editorial">
            <div className="editorial__label">
              <Kicker num="05" name="Cost vs hotels" />
              <div className="brass-rule" style={{ marginTop: 28 }}></div>
            </div>
            <div>
              <h2 className="h-1" style={{ margin: 0 }}>Roughly <em>40 percent</em> less than a four star hotel, with twice the apartment.</h2>
              <p className="lede" style={{ marginTop: 28 }}>For any stay beyond three weeks, corporate housing wins on price, comfort and predictability. The comparison below is for a typical 60 night placement of a single executive in Sandton.</p>
            </div>
          </div>
          <div className="cost-panel reveal" style={{ marginTop: 80, padding: '48px 48px 40px', background: 'var(--ivory-2)', border: '1px solid var(--line)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 16, marginBottom: 32 }}>
              <div>
                <span className="label label--brass">Cumulative cost · 60 nights, single executive, Sandton</span>
                <h3 className="h-2" style={{ margin: '10px 0 0', fontSize: 'clamp(26px, 2.6vw, 38px)' }}>The savings line widens with every month.</h3>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span className="numeral" style={{ fontSize: 64, color: 'var(--brass)', display: 'block', lineHeight: 1 }}>41<sup style={{ fontSize: '0.4em', color: 'var(--brass-deep)', position: 'relative', top: '-1.4em' }}>%</sup></span>
                <span className="label label--muted">Avg. saving at month 3</span>
              </div>
            </div>
            <CostChart />
          </div>
          <div style={{ marginTop: 56 }} className="compare reveal-stagger">
            <div className="col label head">&nbsp;</div>
            <div className="col head">Four star hotel</div>
            <div className="col hostsy head">
              <span style={{ width: 8, height: 8, borderRadius: 999, background: 'var(--brass)' }}></span>
              Hostsy apartment
            </div>
            {COMPARE_ROWS.map(([k, h, hs], i) => (
              <Fragment key={i}>
                <div className="col label">{k}</div>
                <div className="col"><span className="x">○</span> {h}</div>
                <div className="col hostsy"><span className="check">●</span> {hs}</div>
              </Fragment>
            ))}
          </div>
          <div style={{ marginTop: 40, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
            <p className="label label--muted" style={{ maxWidth: '60ch', textTransform: 'none', letterSpacing: '0.02em', fontFamily: 'var(--f-sans)', fontSize: 14 }}>
              Indicative pricing. Actual quotes vary by neighbourhood, apartment grade and length of stay. Discounts apply for stays beyond 90 nights and for master service agreements.
            </p>
            <LinkArr to="/contact">Request a tailored quote</LinkArr>
          </div>
        </div>
      </section>

      {/* Featured apartments */}
      <section className="section on-sand reveal">
        <div className="wrap">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20, marginBottom: 56 }}>
            <div>
              <Kicker num="06" name="Featured apartments" />
              <h2 className="h-1" style={{ margin: '24px 0 0', maxWidth: '20ch' }}>A curated portfolio across the addresses that matter.</h2>
            </div>
            <LinkArr to="/locations">View all 220 apartments</LinkArr>
          </div>
          <div className="grid-3 reveal-stagger">
            {APARTMENTS.map((c, i) => (
              <Link key={i} className="aptcard" href="/locations">
                <div className="aptcard__img" style={{ backgroundImage: `url(${c.img})` }}>
                  <span className="aptcard__pill">{c.pill}</span>
                </div>
                <div className="aptcard__meta">
                  <span className="aptcard__title">{c.title}</span>
                  <span className="aptcard__loc">{c.loc}</span>
                </div>
                <div className="aptcard__row">
                  {c.row.map((r, j) => <span key={j}>{r}</span>)}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What is included */}
      <section className="section reveal">
        <div className="wrap">
          <div className="editorial">
            <div className="editorial__label">
              <Kicker num="07" name="What is included" />
              <div className="brass-rule" style={{ marginTop: 28 }}></div>
            </div>
            <div>
              <h2 className="h-1" style={{ margin: 0 }}>Every apartment, the same <em>specification</em>.</h2>
              <p className="lede" style={{ marginTop: 28 }}>Hostsy apartments are not a marketplace. They are an operated portfolio. Each unit is brought to specification before it carries our name. That is how an HR lead in Frankfurt can confidently sign off on a placement in Pretoria, sight unseen.</p>
            </div>
          </div>
          <div className="grid-4 reveal-stagger" style={{ marginTop: 64, gap: 0, borderTop: '1px solid var(--line)' }}>
            {SPECS.map((s, i) => (
              <div key={s.k} style={{ padding: '28px 24px', borderRight: (i + 1) % 4 !== 0 ? '1px solid var(--line)' : 0, borderBottom: '1px solid var(--line)', display: 'flex', flexDirection: 'column', gap: 14 }}>
                <IconBadge name={s.ic} tone="line" size={42} />
                <div>
                  <span className="label label--muted">{s.k}</span>
                  <p style={{ margin: '6px 0 0', fontFamily: 'var(--f-display)', fontSize: 19, letterSpacing: '-0.005em', lineHeight: 1.25 }}>{s.v}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Landlord partnership */}
      <section className="section on-ink reveal">
        <div className="wrap">
          <div className="grid-2 landlord-grid" style={{ alignItems: 'center', gap: 80 }}>
            <div>
              <Kicker num="08" name="For landlords" light />
              <h2 className="h-1" style={{ margin: '24px 0 28px' }}>Guaranteed rent.<br />Professional tenants.<br /><em>Predictable income.</em></h2>
              <p className="lede" style={{ color: 'rgba(241,235,222,0.78)', marginBottom: 36 }}>If you own a quality apartment in Brooklyn, Waterkloof, Arcadia, Sandton or Rosebank, Hostsy will master lease it. You receive a fixed monthly rental. We carry the vacancy risk, the tenant risk, the maintenance burden and the marketing cost.</p>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <CTA to="/landlords" kind="brass">Become a partner landlord</CTA>
                <CTA to="/landlords" kind="ghost-ivory">View property criteria</CTA>
              </div>
            </div>
            <div className="landlord-visual" style={{ position: 'relative' }}>
              <div style={{ aspectRatio: '4/5', backgroundImage: `url(${BUILDING_IMG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <div className="landlord-offer" style={{ position: 'absolute', left: -32, bottom: 40, background: 'var(--ivory)', color: 'var(--ink)', padding: '24px 28px', maxWidth: 280, boxShadow: '0 20px 50px rgba(0,0,0,0.25)' }}>
                <span className="label label--brass">Indicative offer</span>
                <p className="h-3" style={{ margin: '10px 0 0' }}>Up to <em>R 38,000</em> guaranteed monthly on a two bedroom in Brooklyn, on a 36 month master lease.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section reveal">
        <div className="wrap">
          <div style={{ marginBottom: 56 }}>
            <Kicker num="09" name="From our partners" />
          </div>
          <div className="grid-2 reveal-stagger" style={{ gap: 80 }}>
            <Testimonial quote="Hostsy quietly absorbed the most painful part of our relocation programme. Three executives, three cities, one invoice, zero escalations." name="Anika R." role="Global Mobility Lead" company="Saxon Capital" />
            <Testimonial quote="We had a 14 person engineering team land in Pretoria for an 8 month deployment. Hostsy had all of them placed within 11 days of brief, all in walking distance." name="Mathys K." role="Operations Director" company="Vector Engineering" />
          </div>
          <hr className="hr" style={{ margin: '80px 0' }} />
          <div className="grid-2 reveal-stagger" style={{ gap: 80 }}>
            <Testimonial quote="The diplomatic placements we book through Hostsy feel like an extension of our mission. They understand discretion. They understand standards." name="J. van Rensburg" role="First Secretary" company="Embassy of the Netherlands" />
            <Testimonial quote="The cost saving against our previous hotel programme paid for two additional engineers on the project. The CFO asked us why we hadn't done this two years ago." name="Lerato M." role="Head of HR" company="Kruger Mining Group" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section on-sand reveal">
        <div className="wrap">
          <div className="editorial">
            <div className="editorial__label">
              <Kicker num="10" name="Frequently asked" />
              <div className="brass-rule" style={{ marginTop: 28 }}></div>
            </div>
            <div>
              <h2 className="h-1" style={{ margin: 0 }}>Questions <em>HR teams</em> ask us, before they sign.</h2>
            </div>
          </div>
          <div style={{ marginTop: 56 }}>
            <FAQ items={FAQ_ITEMS} />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CtaBand
        kicker={{ num: '11', name: 'Move people, not mountains' }}
        headline={<span>Tell us about the placement. We will have <em>options</em> in 48 hours.</span>}
        sub="Whether it is one executive for six months or a project team of forty for two years, Hostsy is built for the brief you are about to write."
        primary={{ label: 'Request Accommodation', to: '/contact' }}
        secondary={{ label: 'Download Corporate Brochure', to: '/contact' }}
        bg={CITY_NIGHT}
      />
    </main>
  );
}
