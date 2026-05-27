import { Fragment } from 'react';
import type { Metadata } from 'next';
import { Kicker, Stat, CtaBand, PageHeroBlock, Spec } from '@/components/shared/primitives';
import { IconBadge } from '@/components/shared/Icons';

export const metadata: Metadata = {
  title: 'For Landlords — Guaranteed Rent Partnership | Hostsy',
  description: 'Master lease your premium apartment to Hostsy. Fixed guaranteed monthly rent. No vacancy risk, no tenant risk, no maintenance burden. Professional corporate tenants only.',
};

const BUILDING_IMG = 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=2000&q=80';

const PROPOSITION_CARDS = [
  { ic: 'coin', num: 'A', title: 'Guaranteed rent', body: 'A fixed monthly rental, paid by EFT on the first business day. The number does not depend on whether the apartment is occupied that month.' },
  { ic: 'briefcase', num: 'B', title: 'Professional tenants', body: 'Only corporate, diplomatic and project team guests, vetted, contracted and accountable to their employer. Never private leisure traffic.' },
  { ic: 'shield', num: 'C', title: 'Property care', body: 'We hold the unit to a higher standard than most private tenants would. Monthly walk throughs. Quarterly deep clean. End of term make good.' },
  { ic: 'clock', num: 'D', title: 'Long term occupancy', body: 'Hostsy contracts run 24 to 36 months with renewal options. You replace tenant churn with a single institutional relationship.' },
  { ic: 'chart', num: 'E', title: 'Predictable income', body: 'Forecast your rental income three years out. Plan refinancing, retirement income or portfolio expansion against a known number.' },
  { ic: 'check', num: 'F', title: 'Zero operational load', body: 'No estate agent. No tenant calls. No leaking taps at 11pm. The first phone call you take is the one where we extend the contract.' },
];

const COMPARE_ROWS = [
  ['Counterparty', 'Individual tenant', 'Hostsy (corporate)'],
  ['Lease term', '12 months, often shorter', '24 to 36 months'],
  ['Monthly income', 'Variable, gap risk', 'Fixed, guaranteed'],
  ['Vacancy risk', 'Owner carries', 'Hostsy carries'],
  ['Tenant churn', 'Annual, with costs', 'Multi year contract'],
  ['Maintenance', 'Owner coordinates', 'Hostsy absorbs'],
  ['Property condition', 'Tenant grade', 'Operator grade'],
  ['Agent commission', '1 month per renewal', 'None'],
  ['Time spent monthly', '2 to 6 hours', 'Zero'],
];

const AREAS = [
  { area: 'Waterkloof', note: 'Embassy belt. Family executives.', offer: 'R 42k to R 78k' },
  { area: 'Brooklyn', note: 'Diplomatic + corporate adjacency.', offer: 'R 36k to R 62k' },
  { area: 'Arcadia', note: 'Heritage. Embassy infrastructure.', offer: 'R 28k to R 48k' },
  { area: 'Lynnwood', note: 'Family. International schools.', offer: 'R 32k to R 58k' },
  { area: 'Sandton', note: 'Banking. Consulting. Executive.', offer: 'R 44k to R 95k' },
  { area: 'Rosebank', note: 'Gautrain. Young professionals.', offer: 'R 32k to R 65k' },
];

const PROCESS_STEPS = [
  { n: '01', h: 'Submit', p: 'Send your property details, photographs and indicative expectation.' },
  { n: '02', h: 'Survey', p: 'We visit, walk the unit, walk the building, talk to the body corporate.' },
  { n: '03', h: 'Offer', p: 'You receive a written master lease offer with rental, term and conditions.' },
  { n: '04', h: 'Contract', p: 'Lease executed. We onboard the apartment to Hostsy specification.' },
  { n: '05', h: 'Income', p: 'First rental hits your account on the first business day of the next month.' },
];

export default function LandlordsPage() {
  return (
    <main>
      <PageHeroBlock
        index="05 / 07"
        label="For landlords"
        title={<>A <em>guaranteed</em> rent partnership for premium apartments.</>}
        sub="If you own a quality apartment in Brooklyn, Waterkloof, Arcadia, Lynnwood, Sandton or Rosebank, Hostsy will master lease it. You receive a fixed monthly rental for the term of the agreement. We carry every other line on the page."
      />

      {/* Stats */}
      <section className="section">
        <div className="wrap">
          <div className="stats">
            <Stat value="R 38k" label="Indicative guaranteed monthly on a Brooklyn two bedroom" />
            <Stat value="36" suffix="mo" label="Typical master lease term, with renewal option" />
            <Stat value="0" label="Vacancy risk carried by the property owner" />
            <Stat value="100" suffix="%" label="Maintenance, marketing and management absorbed by Hostsy" />
          </div>
        </div>
      </section>

      {/* Proposition */}
      <section className="section on-ink">
        <div className="wrap">
          <div className="editorial">
            <div className="editorial__label">
              <Kicker num="01" name="The proposition" light />
              <div className="brass-rule" style={{ marginTop: 28 }}></div>
            </div>
            <div>
              <h2 className="h-1" style={{ margin: 0 }}>Trade the highs and lows of private letting for a single number on the first of every month.</h2>
              <p className="lede" style={{ marginTop: 28, color: 'rgba(241,235,222,0.78)' }}>Private letting can yield well in good months. It can also sit empty for two. Hostsy is the alternative. A long term corporate counterparty who takes the keys, takes the risk and writes you the same cheque every month.</p>
            </div>
          </div>
          <div className="grid-3" style={{ marginTop: 72, gap: 0, borderTop: '1px solid rgba(241,235,222,0.18)' }}>
            {PROPOSITION_CARDS.map((s, i) => (
              <div key={s.num} style={{ padding: '36px 28px', borderRight: i % 3 !== 2 ? '1px solid rgba(241,235,222,0.18)' : 0, borderBottom: '1px solid rgba(241,235,222,0.18)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
                  <IconBadge name={s.ic} tone="ivory" size={48} />
                  <span style={{ fontFamily: 'var(--f-display)', fontSize: 36, fontWeight: 300, color: 'var(--brass)', letterSpacing: '-0.02em', lineHeight: 1 }}>{s.num}</span>
                </div>
                <h4 className="h-3" style={{ margin: '10px 0 12px', color: 'var(--ivory)' }}>{s.title}</h4>
                <p style={{ color: 'rgba(241,235,222,0.72)', margin: 0, fontSize: 14.5, lineHeight: 1.55 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="section on-sand">
        <div className="wrap">
          <Kicker num="03" name="Versus a private let" />
          <h2 className="h-1" style={{ margin: '24px 0 56px', maxWidth: '22ch' }}>What changes when you switch.</h2>
          <div className="compare">
            <div className="col label head">&nbsp;</div>
            <div className="col head">Private let</div>
            <div className="col hostsy head">
              <span style={{ width: 8, height: 8, borderRadius: 999, background: 'var(--brass)' }}></span>
              Hostsy master lease
            </div>
            {COMPARE_ROWS.map(([k, h, hs], i) => (
              <Fragment key={i}>
                <div className="col label">{k}</div>
                <div className="col"><span className="x">○</span> {h}</div>
                <div className="col hostsy"><span className="check">●</span> {hs}</div>
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Target areas */}
      <section className="section">
        <div className="wrap">
          <Kicker num="04" name="Where we are buying lease capacity" />
          <h2 className="h-1" style={{ margin: '24px 0 24px', maxWidth: '22ch' }}>Six neighbourhoods, actively expanding.</h2>
          <p className="lede" style={{ marginBottom: 56 }}>If your property sits inside one of the following postcodes and meets our specification, we can typically present an indicative master lease offer within 5 working days.</p>
          <div className="grid-3">
            {AREAS.map(a => (
              <div key={a.area} style={{ border: '1px solid var(--line)', padding: 28, background: 'var(--ivory)' }}>
                <span className="label label--brass">Active intake</span>
                <h3 className="h-2" style={{ margin: '14px 0 12px', fontSize: 'clamp(28px, 3vw, 40px)' }}>{a.area}</h3>
                <p style={{ color: 'var(--muted)', margin: '0 0 24px', fontSize: 14.5 }}>{a.note}</p>
                <div style={{ paddingTop: 18, borderTop: '1px solid var(--line)' }}>
                  <span className="label label--muted">Indicative monthly</span>
                  <p style={{ margin: '6px 0 0', fontFamily: 'var(--f-display)', fontSize: 22, letterSpacing: '-0.01em' }}>{a.offer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property criteria */}
      <section className="section">
        <div className="wrap">
          <div className="editorial">
            <div className="editorial__label">
              <Kicker num="05" name="Property criteria" />
              <div className="brass-rule" style={{ marginTop: 28 }}></div>
            </div>
            <div>
              <h2 className="h-1" style={{ margin: 0 }}>What we look for in a building.</h2>
              <p className="lede" style={{ marginTop: 28 }}>Hostsy operates a curated portfolio. We do not take every apartment that is offered. The buildings we partner with share a small set of characteristics that materially affect the experience of long stay corporate guests.</p>
            </div>
          </div>
          <div className="specs" style={{ marginTop: 64 }}>
            <Spec k="Building age" v="Less than 15 years preferred" />
            <Spec k="Apartment size" v="Minimum 42 sqm internal" />
            <Spec k="Layout" v="Separate living and bedroom" />
            <Spec k="Finishes" v="Move in condition or better" />
            <Spec k="Security" v="24 hr access control" />
            <Spec k="Backup power" v="Building generator preferred" />
            <Spec k="Parking" v="Minimum 1 bay per unit" />
            <Spec k="Fibre" v="Building fibre infrastructure" />
            <Spec k="Lift" v="Required above 3rd floor" />
            <Spec k="Body corporate" v="Well managed, no arrears" />
            <Spec k="Levies" v="Current and predictable" />
            <Spec k="Title" v="Sectional title, freehold or block" />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section on-ink">
        <div className="wrap">
          <Kicker num="06" name="Becoming a partner landlord" light />
          <h2 className="h-1" style={{ margin: '24px 0 64px', maxWidth: '22ch' }}>From inquiry to first rental, in <em>30 days</em>.</h2>
          <div className="process" style={{ borderTopColor: 'rgba(241,235,222,0.18)' }}>
            {PROCESS_STEPS.map(s => (
              <div key={s.n} className="step" style={{ borderRightColor: 'rgba(241,235,222,0.18)', borderBottomColor: 'rgba(241,235,222,0.18)' }}>
                <span className="num">{s.n}</span>
                <h4>{s.h}</h4>
                <p style={{ color: 'rgba(241,235,222,0.66)' }}>{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        kicker={{ num: '07', name: 'Submit your property' }}
        headline={<span>Send us the unit. We will <em>send back</em> an offer in five days.</span>}
        sub="If your property fits, we move quickly. If it doesn't, we will tell you exactly why and what to change."
        primary={{ label: 'Submit a property', to: '/contact' }}
        secondary={{ label: 'Download landlord pack', to: '/contact' }}
        bg={BUILDING_IMG}
      />
    </main>
  );
}
