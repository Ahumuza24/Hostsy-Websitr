import type { Metadata } from 'next';
import { Kicker, LinkArr, PageHeroBlock } from '@/components/shared/primitives';
import ContactForms from '@/components/forms/ContactForms';

export const metadata: Metadata = {
  title: 'Contact Hostsy — Request Accommodation or Submit a Property',
  description: 'Tell us about your placement or property. Every inquiry receives a response from a named person, inside one working day.',
};

const DOWNLOADS = [
  { tag: 'PDF · 12 pages · 3.4 MB', title: 'Corporate housing pack', body: 'Pricing, inclusions, service levels, sample MSA and case studies. The pack for HR, mobility and procurement.' },
  { tag: 'PDF · 8 pages · 2.1 MB', title: 'Landlord master lease pack', body: 'Property criteria, offer template, sample lease and indicative rental ranges by neighbourhood.' },
  { tag: 'PDF · 16 pages · 5.6 MB', title: 'Hostsy operations dossier', body: 'Inside the operation. Quality audit, maintenance SLA, housekeeping cadence, backup power architecture.' },
];

export default function ContactPage() {
  return (
    <main>
      <PageHeroBlock
        index="07 / 07"
        label="Contact"
        title={<>Tell us about <em>the placement</em>.</>}
        sub="Whether you are an HR lead with a brief, a project director with a deployment or a landlord with an apartment, you are on the right page. Every inquiry receives a response from a named person, inside one working day."
      />

      <section style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="wrap">
          <div className="grid-3" style={{ borderTop: '1px solid var(--line)', paddingTop: 40, paddingBottom: 40 }}>
            <div>
              <span className="label label--brass">Pretoria HQ</span>
              <p style={{ fontFamily: 'var(--f-display)', fontSize: 22, lineHeight: 1.4, margin: '12px 0 18px' }}>
                140 Hilda Street<br />
                Brooklyn, Pretoria<br />
                Gauteng, 0181
              </p>
              <p style={{ color: 'var(--muted)', margin: 0, fontFamily: 'var(--f-mono)', fontSize: 12, letterSpacing: '0.06em' }}>Mon to Fri · 08h00 to 18h00</p>
            </div>
            <div>
              <span className="label label--brass">Johannesburg office</span>
              <p style={{ fontFamily: 'var(--f-display)', fontSize: 22, lineHeight: 1.4, margin: '12px 0 18px' }}>
                The Marc<br />
                129 Rivonia Road, Sandton<br />
                Gauteng, 2196
              </p>
              <p style={{ color: 'var(--muted)', margin: 0, fontFamily: 'var(--f-mono)', fontSize: 12, letterSpacing: '0.06em' }}>Mon to Fri · 08h00 to 18h00</p>
            </div>
            <div>
              <span className="label label--brass">Reach the team</span>
              <p style={{ fontFamily: 'var(--f-display)', fontSize: 22, lineHeight: 1.4, margin: '12px 0 18px' }}>
                <a href="mailto:admin@hostsy.co.za" style={{ color: 'inherit' }}>admin@hostsy.co.za</a><br />
                <a href="tel:+27678182968" style={{ color: 'inherit' }}>+27 67 818 2968</a><br />
                <a href="https://wa.me/27678182968" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>WhatsApp +27 67 818 2968</a>
              </p>
              <p style={{ color: 'var(--muted)', margin: 0, fontFamily: 'var(--f-mono)', fontSize: 12, letterSpacing: '0.06em' }}>24 hr duty line for active stays</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section contact-form on-sand">
        <div className="wrap">
          <Kicker num="01" name="Submit an inquiry" />
          <h2 className="h-1" style={{ margin: '24px 0 40px', maxWidth: '22ch' }}>What kind of inquiry are you sending?</h2>
          <ContactForms />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="editorial">
            <div className="editorial__label">
              <Kicker num="02" name="Brochures and packs" />
              <div className="brass-rule" style={{ marginTop: 28 }}></div>
            </div>
            <div>
              <h2 className="h-1" style={{ margin: 0 }}>Download the relevant pack.</h2>
              <p className="lede" style={{ marginTop: 28 }}>If you would rather circulate Hostsy internally first, the following PDFs cover the operational, financial and legal detail your team will ask for.</p>
            </div>
          </div>
          <div className="grid-3" style={{ marginTop: 64 }}>
            {DOWNLOADS.map(d => (
              <a key={d.title} href="#" style={{ border: '1px solid var(--line)', padding: 28, display: 'flex', flexDirection: 'column', gap: 18, justifyContent: 'space-between', minHeight: 280 }}>
                <div>
                  <span className="label label--muted">{d.tag}</span>
                  <h3 className="h-3" style={{ margin: '16px 0 14px' }}>{d.title}</h3>
                  <p style={{ color: 'var(--muted)', margin: 0, fontSize: 14.5, lineHeight: 1.55 }}>{d.body}</p>
                </div>
                <LinkArr to="#">Download PDF</LinkArr>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section on-ink">
        <div className="wrap-narrow" style={{ textAlign: 'center' }}>
          <Kicker num="03" name="A note from the team" light />
          <p className="quote" style={{ marginTop: 40 }}>
            Every inquiry we receive lands in front of a person, not a queue. That person owns your reply until it is answered, and your stay until the keys come back.
          </p>
          <p className="attrib" style={{ justifyContent: 'center', display: 'flex', gap: 10 }}>
            <b>Thandi M. Sithole</b> <span>· Chief Executive, Hostsy</span>
          </p>
        </div>
      </section>
    </main>
  );
}
