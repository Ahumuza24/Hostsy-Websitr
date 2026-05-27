import type { Metadata } from 'next';
import { Kicker, Testimonial, CtaBand, PageHeroBlock } from '@/components/shared/primitives';
import { IconBadge } from '@/components/shared/Icons';

export const metadata: Metadata = {
  title: 'For HR & Mobility Teams — Relocation Without the Chaos | Hostsy',
  description: 'A standing portfolio of executive apartments, a single point of contact, and a procurement ready operator that fits inside your global mobility programme.',
};

const RECEPTION_IMG = 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80';
const MEETING_IMG = 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=2000&q=80';

const PAIN_POINTS = [
  { ic: 'coin', num: '01', pain: 'Hotels at corporate rates are still expensive at month two.', fix: 'Hostsy is typically 30 to 45 percent cheaper for stays beyond three weeks. The CFO notices on the first invoice.' },
  { ic: 'check', num: '02', pain: 'Airbnb gives inconsistent quality and consumer billing.', fix: 'Hostsy is operated. Every apartment is brought to a single specification. Every invoice is a VAT tax invoice in your format.' },
  { ic: 'user', num: '03', pain: 'Each booking creates a new ticket queue for HR.', fix: 'One account manager covers your entire programme. One inbox. One number. Your team stops being a switchboard.' },
  { ic: 'shield', num: '04', pain: 'Mobility policy says one thing, reality says another.', fix: 'We map our offer to your policy bands once. Every subsequent placement is automatically compliant. Auditors love it.' },
];

const BEFORE_LIST = [
  'Brief travel desk on profile, budget, timing.',
  'Receive seven hotel options, none right.',
  'Re brief, request short let options.',
  'Receive Airbnb screenshots from line manager.',
  'Vet listings, request invoicing terms.',
  'Decline because no VAT, no PO matching.',
  'Escalate to executive sponsor.',
  'Approve hotel because timing is now urgent.',
  'Field complaints from employee at week three.',
  'Field complaints from finance at month two.',
  'Repeat for next employee, with no shared learning.',
];

const AFTER_LIST = [
  { h: 'Forward the brief', b: 'One email to your account manager with role, profile, budget band and dates.' },
  { h: 'Approve the shortlist', b: 'Three matched options come back within 48 hours. Pick one. Hostsy handles everything else.' },
  { h: 'Receive the invoice', b: 'Monthly. VAT compliant. PO referenced. Reconciled inside your finance system.' },
];

const POLICY_BANDS = [
  ['Band 1 · Analyst, graduate', 'Hostsy Studio', 'R 32,000 to 38,000', 'Rosebank · Hatfield · Menlyn'],
  ['Band 2 · Manager, specialist', 'Hostsy Residence (1 bed)', 'R 42,000 to 52,000', 'Sandton · Brooklyn · Waterkloof'],
  ['Band 3 · Senior, director', 'Hostsy Residence (2 bed)', 'R 56,000 to 72,000', 'Melrose · Waterkloof · Sandton'],
  ['Band 4 · Executive, C suite', 'Hostsy Family', 'R 78,000 to 120,000', 'Waterkloof · Bryanston · Sandhurst'],
  ['Band D · Diplomatic', 'Hostsy Residence + concierge', 'Quoted per mission', 'Arcadia · Waterkloof · Brooklyn'],
];

const OPERATIONAL = ['Apartment sourcing and shortlist curation', 'Lease negotiation and contract management', 'Furnishing, internet, power, water setup', 'Pre arrival inspection and welcome pack', 'Airport collection and key handover', 'Local SIM provisioning and orientation', 'Weekly housekeeping coordination', 'Maintenance triage and dispatch', 'End of stay inspection and reset'];
const ADMINISTRATIVE = ['Monthly VAT invoicing in your format', 'Purchase order matching and validation', 'Master service agreement administration', 'Spend reporting by employee or cost centre', 'Quarterly business review with insights', 'Annual portfolio audit and benchmark', 'POPIA and data handling compliance', 'Insurance certificate maintenance', 'B-BBEE certification on file'];

export default function HRMobilityPage() {
  return (
    <main>
      <PageHeroBlock
        index="03 / 07"
        label="For HR & mobility teams"
        title={<>Relocation, <em>without</em> the relocation chaos.</>}
        sub="A standing portfolio of executive apartments, a single point of contact, and a procurement ready operator that fits inside your global mobility programme. Built specifically for the teams who carry the operational weight of every move."
      />

      {/* Pain points */}
      <section className="section">
        <div className="wrap">
          <div className="editorial">
            <div className="editorial__label">
              <Kicker num="01" name="What we hear" />
              <div className="brass-rule" style={{ marginTop: 28 }}></div>
            </div>
            <div>
              <h2 className="h-1" style={{ margin: 0 }}>The same four pains, on every call.</h2>
              <p className="lede" style={{ marginTop: 28 }}>When HR leads describe the current state of relocation housing in Gauteng, the same patterns repeat. We built Hostsy to retire each of them.</p>
            </div>
          </div>
          <div className="grid-2" style={{ marginTop: 80, gap: 56 }}>
            {PAIN_POINTS.map(p => (
              <div key={p.num} style={{ borderTop: '1px solid var(--line)', paddingTop: 32 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 18 }}>
                  <IconBadge name={p.ic} tone="brass" size={48} />
                  <span className="label label--brass">{p.num} · Pain</span>
                </div>
                <h3 className="h-2" style={{ margin: '0 0 28px', fontSize: 'clamp(26px, 3vw, 38px)' }}>{p.pain}</h3>
                <span className="label label--brass">How Hostsy resolves it</span>
                <p style={{ marginTop: 14, fontFamily: 'var(--f-display)', fontSize: 20, lineHeight: 1.4, fontWeight: 300, color: 'var(--ink)' }}>{p.fix}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image break */}
      <section style={{ position: 'relative', height: 420, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${RECEPTION_IMG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(11,31,51,0.15), rgba(11,31,51,0.6))' }}></div>
        <div className="wrap" style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end', paddingBottom: 40, color: 'var(--ivory)' }}>
          <div>
            <p className="label" style={{ color: 'rgba(241,235,222,0.7)' }}>YOUR ACCOUNT MANAGER</p>
            <p className="h-3" style={{ margin: '10px 0 0', maxWidth: '32ch' }}>One named person, the same number, year after year. Not a queue. Not a chatbot.</p>
          </div>
        </div>
      </section>

      {/* Before vs After */}
      <section className="section on-ink">
        <div className="wrap">
          <Kicker num="02" name="What changes for your team" light />
          <h2 className="h-1" style={{ margin: '24px 0 64px', maxWidth: '22ch' }}>From a hundred tasks per placement, to <em>three</em>.</h2>
          <div className="grid-2" style={{ gap: 80, alignItems: 'center' }}>
            <div>
              <p className="label label--brass" style={{ marginBottom: 24 }}>Before Hostsy · The typical HR run book</p>
              <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12, color: 'rgba(241,235,222,0.66)', fontSize: 14.5, lineHeight: 1.55, fontFamily: 'var(--f-mono)' }}>
                {BEFORE_LIST.map((s, i) => (
                  <li key={i} style={{ display: 'grid', gridTemplateColumns: '32px 1fr', gap: 12, paddingBottom: 12, borderBottom: '1px solid rgba(241,235,222,0.12)' }}>
                    <span style={{ color: 'var(--brass)' }}>{String(i + 1).padStart(2, '0')}</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <p className="label label--brass" style={{ marginBottom: 24 }}>With Hostsy · The new HR run book</p>
              <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {AFTER_LIST.map((s, i) => (
                  <li key={i} style={{ padding: '28px 0', borderBottom: '1px solid rgba(241,235,222,0.18)' }}>
                    <div style={{ display: 'flex', gap: 20, alignItems: 'baseline' }}>
                      <span className="numeral" style={{ fontSize: 56, color: 'var(--brass)', minWidth: 56 }}>{String(i + 1).padStart(2, '0')}</span>
                      <div>
                        <h4 className="h-3" style={{ margin: 0, color: 'var(--ivory)' }}>{s.h}</h4>
                        <p style={{ margin: '10px 0 0', color: 'rgba(241,235,222,0.72)', maxWidth: '44ch' }}>{s.b}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Policy mapping */}
      <section className="section">
        <div className="wrap">
          <div className="editorial">
            <div className="editorial__label">
              <Kicker num="03" name="Policy mapping" />
              <div className="brass-rule" style={{ marginTop: 28 }}></div>
            </div>
            <div>
              <h2 className="h-1" style={{ margin: 0 }}>Your bands, our portfolio. <em>Mapped once.</em></h2>
              <p className="lede" style={{ marginTop: 28 }}>During onboarding we sit with your mobility lead and translate each policy band into a Hostsy apartment grade and neighbourhood. From that point forward, every placement defaults to compliant.</p>
            </div>
          </div>
          <div style={{ marginTop: 64, border: '1px solid var(--line)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr 1.2fr', padding: '20px 24px', borderBottom: '1px solid var(--line)', background: 'var(--ivory-2)' }}>
              {['Policy band', 'Hostsy grade', 'Indicative monthly', 'Typical neighbourhoods'].map(h => (
                <span key={h} className="label label--muted">{h}</span>
              ))}
            </div>
            {POLICY_BANDS.map((row, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr 1.2fr', padding: '24px', borderBottom: i < 4 ? '1px solid var(--line)' : 0, alignItems: 'baseline' }}>
                <span style={{ fontFamily: 'var(--f-display)', fontSize: 22, letterSpacing: '-0.01em' }}>{row[0]}</span>
                <span style={{ fontFamily: 'var(--f-sans)', fontSize: 14.5 }}>{row[1]}</span>
                <span style={{ fontFamily: 'var(--f-mono)', fontSize: 13, letterSpacing: '0.04em' }}>{row[2]}</span>
                <span style={{ color: 'var(--muted)', fontSize: 14 }}>{row[3]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you offload */}
      <section className="section on-sand">
        <div className="wrap">
          <Kicker num="04" name="What you offload" />
          <h2 className="h-1" style={{ margin: '24px 0 56px', maxWidth: '22ch' }}>Everything between brief and key handover.</h2>
          <div className="grid-2" style={{ gap: 56 }}>
            <div>
              <p className="label label--brass" style={{ marginBottom: 18 }}>Operational</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {OPERATIONAL.map(s => (
                  <li key={s} style={{ padding: '16px 0', borderTop: '1px solid var(--line)', display: 'grid', gridTemplateColumns: '20px 1fr', gap: 12, alignItems: 'baseline' }}>
                    <span style={{ color: 'var(--brass)' }}>●</span>
                    <span style={{ fontFamily: 'var(--f-display)', fontSize: 18 }}>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="label label--brass" style={{ marginBottom: 18 }}>Administrative</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {ADMINISTRATIVE.map(s => (
                  <li key={s} style={{ padding: '16px 0', borderTop: '1px solid var(--line)', display: 'grid', gridTemplateColumns: '20px 1fr', gap: 12, alignItems: 'baseline' }}>
                    <span style={{ color: 'var(--brass)' }}>●</span>
                    <span style={{ fontFamily: 'var(--f-display)', fontSize: 18 }}>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap-narrow">
          <Testimonial
            quote="Hostsy quietly became the part of our mobility programme that I never have to think about. That is the highest compliment I can pay an operator."
            name="Anika R."
            role="Global Mobility Lead"
            company="Saxon Capital"
          />
        </div>
      </section>

      <CtaBand
        kicker={{ num: '05', name: 'Schedule an intake' }}
        headline={<span>Bring us your relocation programme. We will <em>fit in</em>, not interrupt.</span>}
        sub="A 30 minute intake call is enough to scope a master service agreement, map your policy bands and quote a year of placements."
        primary={{ label: 'Book an intake call', to: '/contact' }}
        secondary={{ label: 'Download HR briefing pack', to: '/contact' }}
        bg={MEETING_IMG}
      />
    </main>
  );
}
