import type { Metadata } from 'next';
import { Kicker, CtaBand, PageHeroBlock, Spec } from '@/components/shared/primitives';
import { IconBadge } from '@/components/shared/Icons';
import FAQ from '@/components/shared/FAQ';
import Timeline from '@/components/dataviz/Timeline';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata('/corporate-housing');

const WORKSPACE_IMG = 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&w=2000&q=80';
const CITY_NIGHT = 'https://images.unsplash.com/photo-1542361345-89e58247f2d5?auto=format&fit=crop&w=2000&q=80';
const BEDROOM_IMG = 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=900&q=80';
const LIVING_IMG = 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=80';
const DINING_IMG = 'https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&w=900&q=80';

const USE_CASES = [
  { label: 'Executive relocation', title: 'A new country director, landing Monday.', body: 'A multinational appoints a regional MD into Sandton. They need a furnished three bedroom in Melrose, family ready, within walking distance of an international school. Hostsy handles the search, the lease, the welcome pack and the local SIM. The executive moves once.', tag: '12 to 24 months' },
  { label: 'Project team housing', title: 'Eighteen engineers, eight months, walking distance.', body: 'A construction or engineering firm wins a deployment in Pretoria. They need eighteen apartments in a 2 km radius, with workspace, fibre and predictable invoicing for the project P&L. We block book a building. One contract. One invoice.', tag: '6 to 18 months' },
  { label: 'Diplomatic placement', title: 'A diplomat, a discreet handover, embassy adjacency.', body: 'Diplomatic missions need housing near embassy row, with secure access, professional management and unimpeachable discretion. Hostsy maintains a dedicated portfolio in Arcadia and Waterkloof, with single point handover and named contacts.', tag: '24 to 48 months' },
  { label: 'Extended stay specialist', title: 'A surgeon on a six month locum.', body: 'Hospitals, mining houses and consulting firms bring specialist talent in for fixed term assignments. Hostsy provides the bridge between hotel and permanent housing, with monthly billing and no early termination penalty if the assignment shifts.', tag: '3 to 12 months' },
  { label: 'Bulk corporate stays', title: 'Sixty graduates, one rotation programme.', body: 'Banking and consulting graduate programmes rotate analysts through Johannesburg. Hostsy operates dedicated buildings configured for this exact use case, with shared lounges, gym access and a single account for the L&D team.', tag: '1 to 6 months' },
  { label: 'Expat hire onboarding', title: 'First 90 days, then transition.', body: 'Many companies use Hostsy for the first 90 days after an expat hire arrives, while the employee finds permanent housing. We carry the operational load during the most disorienting weeks of their new life.', tag: '1 to 4 months' },
];

const INCLUDED = [
  { ic: 'home', title: 'Furnishing', body: 'Designer specified furniture, lighting, soft furnishings, art and homewares. Every apartment looks and feels finished.' },
  { ic: 'broom', title: 'Cleaning', body: 'Weekly housekeeping, linen change and towel refresh. Deep clean on every changeover.' },
  { ic: 'wifi', title: 'Fibre internet', body: 'Dedicated 200 Mbps fibre line per unit. Mesh WiFi. Speed tested before every check in.' },
  { ic: 'bolt', title: 'Backup power', body: 'Inverter and UPS in every unit. Lights, internet, fridge and one workstation stay live through outages.' },
  { ic: 'droplet', title: 'Water backup', body: 'JoJo tank with pressure pump on every property. 24 hours of supply on hand.' },
  { ic: 'wrench', title: 'Maintenance', body: 'Four hour response SLA for any reported issue. On call technicians for plumbing, electrical and appliances.' },
  { ic: 'headset', title: '24 / 7 support', body: 'Named account manager during the day. A live duty line for evenings, weekends and holidays.' },
  { ic: 'invoice', title: 'Invoicing', body: 'Monthly VAT invoice in your format. PO matched. Statement available on demand.' },
  { ic: 'user', title: 'Account management', body: 'One person owns your relationship. Quarterly business review. Annual portfolio audit.' },
];

const GRADES = [
  { grade: 'Hostsy Studio', img: BEDROOM_IMG, sqm: '42 to 56 sqm', beds: '1 bed · 1 bath', price: 'from R 32,000 / mo', body: 'For single executives on assignment. Compact, beautifully appointed, work ready.' },
  { grade: 'Hostsy Residence', img: LIVING_IMG, sqm: '65 to 95 sqm', beds: '1 or 2 bed · 2 bath', price: 'from R 48,000 / mo', body: 'Our flagship grade. The unit your COO walks into. Separate living, dining and workspace.' },
  { grade: 'Hostsy Family', img: DINING_IMG, sqm: '110 to 180 sqm', beds: '3 bed · 2 to 3 bath', price: 'from R 78,000 / mo', body: 'For executives relocating with family. Near international schools. Garden or pool where available.' },
];

const FAQ_ITEMS = [
  { q: 'What is the minimum length of stay?', a: 'Hostsy specialises in stays of 30 nights or longer. There is no upper limit. Our median placement runs just under seven months, and many assignments run multiple years for executive postings.' },
  { q: 'How quickly can a placement go live?', a: 'From a complete brief, we present curated apartment options within 48 hours and can usually have an employee in keys within 5 to 10 working days. Same-week placements are possible when inventory matches.' },
  { q: 'Do you invoice corporates directly?', a: 'Yes. Hostsy issues monthly VAT invoices that reference your purchase order. We support master service agreements and consolidated billing across employees, locations and stays.' },
  { q: 'Are your apartments serviced?', a: 'Weekly housekeeping is included in every stay. Midweek refresh, linen change and additional services are available on request and billed according to the agreed service level.' },
  { q: 'What happens during load shedding or water cuts?', a: 'Every Hostsy apartment includes backup power for essentials, routers and workstations, plus water backup where required. The goal is simple: employees should be able to keep working through local interruptions.' },
  { q: 'Do you handle airport collection and onboarding?', a: 'Yes. We can coordinate airport pickup, key handover at the apartment, fibre verification, a welcome pack and local arrival support so the employee lands into a working home.' },
  { q: 'Can you accommodate pets and families?', a: 'Many apartments are pet friendly, and we maintain larger family-ready units in areas such as Menlyn, Brooklyn, Lynnwood and Sandton, with proximity to schools and business districts where possible.' },
  { q: 'How does Hostsy compare with corporate hotels?', a: 'For stays beyond three weeks, corporate housing usually gives companies more space, a proper kitchen, predictable billing and materially lower total cost than a comparable four-star hotel programme.' },
];

export default function CorporateHousingPage() {
  return (
    <main>
      <PageHeroBlock
        index="03 / 07"
        label="Corporate housing"
        title={<>Apartments engineered for <em>long stays</em>.</>}
        sub="Corporate housing is the operational alternative to hotels for any stay beyond a few weeks. A fully furnished apartment, professionally managed end to end, contracted business to business, billed monthly. This is the category Hostsy is built around."
      />

      {/* The category */}
      <section className="section">
        <div className="wrap">
          <div className="editorial">
            <div className="editorial__label">
              <Kicker num="01" name="The category" />
              <div className="brass-rule" style={{ marginTop: 28 }}></div>
            </div>
            <div>
              <h2 className="h-1" style={{ margin: 0 }}>
                Not a hotel.<br />
                Not a short let.<br />
                Not a rental contract.
              </h2>
              <p className="lede" style={{ marginTop: 28 }}>
                Corporate housing sits between hospitality and residential leasing. The apartment behaves like a home. The contract behaves like procurement. Hostsy operates the unit on your behalf so neither the employee nor the company has to think about it.
              </p>
              <div className="grid-3" style={{ marginTop: 56, gap: 28 }}>
                {[
                  { h: 'Hotel', p: 'Right for 1 to 14 nights. Wrong on price and lifestyle beyond.' },
                  { h: 'Short let', p: 'Inconsistent quality, consumer billing, weak guarantees, no support.' },
                  { h: 'Corporate housing', p: 'Designed for 30 nights to 36 months. Operated. Invoiced. Guaranteed.' },
                ].map(c => (
                  <div key={c.h}>
                    <span className="label label--brass">{c.h}</span>
                    <p style={{ marginTop: 10, fontFamily: 'var(--f-display)', fontSize: 20, lineHeight: 1.32 }}>{c.p}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="section on-ink">
        <div className="wrap">
          <Kicker num="02" name="Who it serves" light />
          <h2 className="h-1" style={{ margin: '24px 0 64px', maxWidth: '20ch' }}>Five briefs we handle every week.</h2>
          <div className="grid-2" style={{ gap: 56 }}>
            {USE_CASES.map((s, i) => (
              <div key={i} style={{ borderTop: '1px solid rgba(241,235,222,0.18)', paddingTop: 28 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 18 }}>
                  <span className="label" style={{ color: 'var(--brass)' }}>{s.label}</span>
                  <span className="chip">{s.tag}</span>
                </div>
                <h3 className="h-3" style={{ margin: 0, color: 'var(--ivory)' }}>{s.title}</h3>
                <p style={{ color: 'rgba(241,235,222,0.78)', marginTop: 14, marginBottom: 0, fontSize: 15.5, lineHeight: 1.55 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Included */}
      <section className="section">
        <div className="wrap">
          <div className="editorial">
            <div className="editorial__label">
              <Kicker num="03" name="What is included" />
              <div className="brass-rule" style={{ marginTop: 28 }}></div>
            </div>
            <div>
              <h2 className="h-1" style={{ margin: 0 }}>Every line item, in one monthly invoice.</h2>
              <p className="lede" style={{ marginTop: 28 }}>A Hostsy apartment is an inclusive rate. No per night surcharges. No surprise extras. Cleaning, internet, power backup and maintenance are not add ons. They are the product.</p>
            </div>
          </div>
          <div className="grid-3" style={{ marginTop: 64, gap: 0, borderTop: '1px solid var(--line)' }}>
            {INCLUDED.map((s, i) => (
              <div key={i} style={{ padding: '32px 28px', borderRight: i % 3 !== 2 ? '1px solid var(--line)' : 0, borderBottom: '1px solid var(--line)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
                  <IconBadge name={s.ic} tone="brass" size={44} />
                  <span className="label label--brass">Included</span>
                </div>
                <h4 className="h-3" style={{ margin: '10px 0 12px' }}>{s.title}</h4>
                <p style={{ color: 'var(--muted)', margin: 0, fontSize: 14.5, lineHeight: 1.55 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image break */}
      <section style={{ position: 'relative', height: 440, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${WORKSPACE_IMG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(11,31,51,0.15), rgba(11,31,51,0.6))' }}></div>
        <div className="wrap" style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end', paddingBottom: 40, color: 'var(--ivory)' }}>
          <div>
            <p className="label" style={{ color: 'rgba(241,235,222,0.7)' }}>BROOKLYN · PRETORIA</p>
            <p className="h-3" style={{ margin: '10px 0 0', maxWidth: '32ch' }}>Workspaces engineered for an engineer&apos;s eight month deployment, not a tourist&apos;s weekend.</p>
          </div>
        </div>
      </section>

      {/* Apartment grades */}
      <section className="section on-sand">
        <div className="wrap">
          <Kicker num="04" name="Apartment grades" />
          <h2 className="h-1" style={{ margin: '24px 0 56px', maxWidth: '22ch' }}>Three operational grades. Same standard, different scale.</h2>
          <div className="grid-3">
            {GRADES.map((g, i) => (
              <div key={i} className="aptcard">
                <div className="aptcard__img" style={{ backgroundImage: `url(${g.img})`, height: 320 }}>
                  <span className="aptcard__pill">{g.grade}</span>
                </div>
                <div>
                  <div className="aptcard__meta" style={{ marginBottom: 8 }}>
                    <span className="aptcard__title">{g.grade}</span>
                  </div>
                  <p style={{ margin: '0 0 14px', color: 'var(--muted)', fontSize: 14.5, lineHeight: 1.55 }}>{g.body}</p>
                  <div className="aptcard__row">
                    <span>{g.beds}</span><span>{g.sqm}</span><span>{g.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operational architecture */}
      <section className="section on-ink">
        <div className="wrap">
          <div className="editorial">
            <div className="editorial__label">
              <Kicker num="05" name="Operational architecture" light />
              <div className="brass-rule" style={{ marginTop: 28 }}></div>
            </div>
            <div>
              <h2 className="h-1" style={{ margin: 0 }}>An operator, not a marketplace.</h2>
              <p className="lede" style={{ marginTop: 28, color: 'rgba(241,235,222,0.78)' }}>Hostsy directly leases or manages every apartment in our portfolio. We control the standard, the staff and the supply chain. This is what allows us to make hard promises and keep them.</p>
            </div>
          </div>
          <div style={{ marginTop: 80 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 16, marginBottom: 32 }}>
              <h3 className="h-2" style={{ margin: 0, fontSize: 'clamp(24px, 2.6vw, 34px)', maxWidth: '30ch' }}>A typical placement, day by day.</h3>
              <span className="label label--ivory-muted">From intake to ongoing stay · 7 working days</span>
            </div>
            <Timeline light />
          </div>
          <div className="specs" style={{ marginTop: 80 }}>
            <Spec k="Portfolio model" v="Master lease + direct manage" />
            <Spec k="Properties under management" v="220 apartments" />
            <Spec k="In-house operations team" v="34 staff across PTA + JHB" />
            <Spec k="Housekeeping cadence" v="Weekly per unit" />
            <Spec k="Maintenance response" v="4 hours, contractual" />
            <Spec k="Quality audit cadence" v="Monthly walk through" />
            <Spec k="Pre arrival checklist" v="78 line items" />
            <Spec k="Backup power coverage" v="100% of portfolio" />
            <Spec k="Insurance" v="Public liability R 50m" />
            <Spec k="Compliance" v="POPIA, B-BBEE, VAT" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section on-sand">
        <div className="wrap">
          <div className="editorial">
            <div className="editorial__label">
              <Kicker num="06" name="Frequently asked" />
              <div className="brass-rule" style={{ marginTop: 28 }}></div>
            </div>
            <div>
              <h2 className="h-1" style={{ margin: 0 }}>Questions corporate teams ask before they book.</h2>
              <p className="lede" style={{ marginTop: 28 }}>
                The practical answers procurement, HR, mobility and project leads usually need before
                moving people into Hostsy apartments.
              </p>
            </div>
          </div>
          <div style={{ marginTop: 56 }}>
            <FAQ items={FAQ_ITEMS} />
          </div>
        </div>
      </section>

      <CtaBand
        kicker={{ num: '07', name: 'Brief us' }}
        headline={<span>One placement or one hundred. The brief is the start.</span>}
        sub="Tell us who is moving, where they are going and for how long. We come back inside 48 hours."
        primary={{ label: 'Request Accommodation', to: '/contact' }}
        secondary={{ label: 'View Locations', to: '/locations' }}
        bg={CITY_NIGHT}
      />
    </main>
  );
}
