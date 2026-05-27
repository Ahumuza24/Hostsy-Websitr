'use client';

import { useState } from 'react';
import { Arrow } from '@/components/shared/primitives';

type Tab = 'corporate' | 'landlord' | 'general';
type FormState = Record<string, string>;
type Updater = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;

function CorporateForm({ form, upd }: { form: FormState; upd: Updater }) {
  return (
    <>
      <div className="form-row">
        <div className="field"><label>Your name</label><input type="text" required value={form.name || ''} onChange={upd('name')} placeholder="Anika Roussouw" /></div>
        <div className="field"><label>Company</label><input type="text" required value={form.company || ''} onChange={upd('company')} placeholder="Saxon Capital" /></div>
      </div>
      <div className="form-row">
        <div className="field"><label>Work email</label><input type="email" required value={form.email || ''} onChange={upd('email')} placeholder="anika@saxon.com" /></div>
        <div className="field"><label>Role</label>
          <select required value={form.role || ''} onChange={upd('role')}>
            <option value="">Choose a role</option>
            <option>HR director</option><option>Global mobility lead</option><option>Talent acquisition</option>
            <option>Operations / project director</option><option>Procurement</option><option>Executive assistant</option><option>Other</option>
          </select>
        </div>
      </div>
      <div className="form-row">
        <div className="field"><label>Type of placement</label>
          <select required value={form.kind || ''} onChange={upd('kind')}>
            <option value="">Choose a type</option>
            <option>Executive relocation</option><option>Project team housing</option><option>Diplomatic placement</option>
            <option>Extended stay specialist</option><option>Bulk corporate stays</option><option>Expat hire onboarding</option>
          </select>
        </div>
        <div className="field"><label>Number of apartments</label><input type="number" min="1" required value={form.count || ''} onChange={upd('count')} placeholder="3" /></div>
      </div>
      <div className="form-row">
        <div className="field"><label>Preferred location</label>
          <select value={form.loc || ''} onChange={upd('loc')}>
            <option value="">Any in Gauteng</option>
            <option>Waterkloof</option><option>Brooklyn</option><option>Arcadia</option><option>Lynnwood</option>
            <option>Menlyn</option><option>Hatfield</option><option>Sandton</option><option>Rosebank</option>
          </select>
        </div>
        <div className="field"><label>Length of stay</label>
          <select value={form.length || ''} onChange={upd('length')}>
            <option value="">Choose a length</option>
            <option>1 to 3 months</option><option>3 to 6 months</option><option>6 to 12 months</option>
            <option>12 to 24 months</option><option>24 months or longer</option>
          </select>
        </div>
      </div>
      <div className="field"><label>Tell us about the brief</label>
        <textarea value={form.notes || ''} onChange={upd('notes')} placeholder="Two senior executives relocating from Frankfurt for 18 months..." />
      </div>
    </>
  );
}

function LandlordForm({ form, upd }: { form: FormState; upd: Updater }) {
  return (
    <>
      <div className="form-row">
        <div className="field"><label>Your name</label><input type="text" required value={form.name || ''} onChange={upd('name')} placeholder="Pieter de Klerk" /></div>
        <div className="field"><label>Contact number</label><input type="tel" required value={form.phone || ''} onChange={upd('phone')} placeholder="+27 82 000 0000" /></div>
      </div>
      <div className="field"><label>Email</label><input type="email" required value={form.email || ''} onChange={upd('email')} /></div>
      <div className="form-row">
        <div className="field"><label>Property address</label><input type="text" required value={form.address || ''} onChange={upd('address')} placeholder="Unit 802, 140 Hilda St, Brooklyn" /></div>
        <div className="field"><label>Suburb</label>
          <select required value={form.suburb || ''} onChange={upd('suburb')}>
            <option value="">Choose a suburb</option>
            <option>Waterkloof</option><option>Brooklyn</option><option>Arcadia</option><option>Lynnwood</option>
            <option>Sandton</option><option>Rosebank</option><option>Other</option>
          </select>
        </div>
      </div>
      <div className="form-row">
        <div className="field"><label>Bedrooms</label>
          <select required value={form.bed || ''} onChange={upd('bed')}>
            <option value="">Choose</option><option>Studio</option><option>1 bed</option><option>2 bed</option><option>3 bed</option><option>4 bed+</option>
          </select>
        </div>
        <div className="field"><label>Approximate size (sqm)</label><input type="number" required value={form.sqm || ''} onChange={upd('sqm')} placeholder="84" /></div>
        <div className="field"><label>Monthly expectation</label><input type="text" value={form.expect || ''} onChange={upd('expect')} placeholder="R 38,000" /></div>
      </div>
      <div className="field"><label>Anything we should know about the property</label>
        <textarea value={form.notes || ''} onChange={upd('notes')} placeholder="Recently renovated, backup power, two parking bays..." />
      </div>
    </>
  );
}

function GeneralForm({ form, upd }: { form: FormState; upd: Updater }) {
  return (
    <>
      <div className="form-row">
        <div className="field"><label>Your name</label><input type="text" required value={form.name || ''} onChange={upd('name')} /></div>
        <div className="field"><label>Email</label><input type="email" required value={form.email || ''} onChange={upd('email')} /></div>
      </div>
      <div className="field"><label>Subject</label><input type="text" required value={form.subject || ''} onChange={upd('subject')} placeholder="Press inquiry, partnership, etc." /></div>
      <div className="field"><label>Message</label><textarea value={form.message || ''} onChange={upd('message')} /></div>
    </>
  );
}

function SuccessPanel({ tab, onReset }: { tab: Tab; onReset: () => void }) {
  const label = tab === 'corporate' ? 'Your accommodation brief is in.' : tab === 'landlord' ? 'Your property submission is in.' : 'Your message is in.';
  return (
    <div style={{ background: 'var(--ink)', color: 'var(--ivory)', padding: 56, border: '1px solid var(--ink)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
        <span style={{ width: 40, height: 40, borderRadius: 999, background: 'var(--brass)', display: 'grid', placeItems: 'center' }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="var(--ivory)" strokeWidth="1.6"><polyline points="3,8 7,12 13,4" /></svg>
        </span>
      </div>
      <h3 className="h-1" style={{ margin: '0 0 18px', color: 'var(--ivory)', maxWidth: '20ch' }}>{label}</h3>
      <p className="lede" style={{ margin: 0, color: 'rgba(241,235,222,0.8)', maxWidth: '50ch' }}>
        A named account manager will respond inside one working day. If your brief is urgent, WhatsApp us on{' '}
        <a href="https://wa.me/27678182968" style={{ color: 'var(--brass)' }}>+27 67 818 2968</a>.
      </p>
      <div style={{ marginTop: 40, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
        <button className="btn btn--brass" onClick={onReset}><span>Submit another inquiry</span><Arrow /></button>
        <a className="btn btn--ghost-ivory" href="/"><span>Back to home</span><Arrow /></a>
      </div>
    </div>
  );
}

const TABS = [
  { id: 'corporate' as Tab, label: 'Corporate accommodation', sub: 'HR · mobility · project teams' },
  { id: 'landlord' as Tab, label: 'Landlord partnership', sub: 'Submit a property' },
  { id: 'general' as Tab, label: 'General inquiry', sub: 'Press · partnerships · other' },
];

export default function ContactForms() {
  const [tab, setTab] = useState<Tab>('corporate');
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormState>({});

  const upd: Updater = (k) => (e) => setForm(prev => ({ ...prev, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <div style={{ display: 'flex', gap: 0, borderBottom: '1px solid var(--line)', marginBottom: 48, flexWrap: 'wrap' }}>
        {TABS.map(t => (
          <button key={t.id} onClick={() => { setTab(t.id); setSubmitted(false); }} style={{ padding: '20px 28px', borderBottom: tab === t.id ? '2px solid var(--brass)' : '2px solid transparent', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: 4, marginBottom: -1, opacity: tab === t.id ? 1 : 0.6, transition: 'opacity .2s ease', background: 'none', cursor: 'pointer' }}>
            <span style={{ fontFamily: 'var(--f-display)', fontSize: 22, letterSpacing: '-0.01em' }}>{t.label}</span>
            <span className="label label--muted">{t.sub}</span>
          </button>
        ))}
      </div>
      {submitted ? (
        <SuccessPanel tab={tab} onReset={() => { setSubmitted(false); setForm({}); }} />
      ) : (
        <form onSubmit={submit} style={{ background: 'var(--ivory)', padding: 48, border: '1px solid var(--line)' }}>
          {tab === 'corporate' && <CorporateForm form={form} upd={upd} />}
          {tab === 'landlord' && <LandlordForm form={form} upd={upd} />}
          {tab === 'general' && <GeneralForm form={form} upd={upd} />}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 28, flexWrap: 'wrap', gap: 18 }}>
            <p className="label label--muted" style={{ maxWidth: '44ch', textTransform: 'none', letterSpacing: '0.01em', fontFamily: 'var(--f-sans)', fontSize: 13, lineHeight: 1.5 }}>
              Your inquiry is routed to a named account manager. Responses go out within one working day. We hold your data under POPIA.
            </p>
            <button type="submit" className="btn btn--brass btn--lg"><span>Submit inquiry</span><Arrow /></button>
          </div>
        </form>
      )}
    </>
  );
}
