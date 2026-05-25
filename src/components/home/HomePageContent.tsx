'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from 'framer-motion'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  ArrowRight,
  Award,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ChevronRight,
  FileText,
  Globe2,
  Headphones,
  Home,
  Hotel,
  KeyRound,
  MapPin,
  MessageCircle,
  Phone,
  Shield,
  Sparkles,
  Star,
  Users,
  Wifi,
  Wrench,
  Zap,
} from 'lucide-react'

const ease = [0.16, 1, 0.3, 1] as const
const viewport = { once: true, margin: '-90px' as const }

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease } },
}

const fadeUpSm = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.58, ease } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.08 } },
}

const stats = [
  { value: '100+', label: 'Corporate clients' },
  { value: '200+', label: 'Managed units' },
  { value: '4 hrs', label: 'Response promise' },
  { value: '40-60%', label: 'Hotel cost reduction' },
]

const useCases = [
  {
    id: 'relocation',
    label: 'Executive relocation',
    icon: BriefcaseBusiness,
    headline: 'A senior hire lands. Their apartment is already live.',
    copy:
      'Hostsy coordinates the handover, utilities, wifi, linen, cleaning, and account support before arrival.',
    details: ['Airport-to-key coordination', 'Executive suburbs', 'Monthly company invoice'],
    response: 'Options within 4 business hours',
  },
  {
    id: 'project',
    label: 'Project teams',
    icon: Users,
    headline: 'A whole team moves in without turning HR into operations.',
    copy:
      'Multiple apartments can be placed around the same business corridor with one account manager and one invoice.',
    details: ['Multi-unit placement', 'Team proximity planning', 'Extensions handled'],
    response: 'Group placement planning in 48 hours',
  },
  {
    id: 'diplomatic',
    label: 'Diplomatic & expat',
    icon: Globe2,
    headline: 'International arrivals get calm, compliant housing.',
    copy:
      'Premium apartments in secure, executive areas with the documentation and reliability expected by mobility teams.',
    details: ['Security-conscious locations', 'Procurement-friendly docs', 'Long-stay support'],
    response: 'Dedicated account manager assigned',
  },
]

const standards = [
  {
    icon: Home,
    title: 'Apartment, not a room',
    description:
      'Full kitchen, living area, laundry, workspace, and room to breathe for stays that run beyond a few nights.',
  },
  {
    icon: Shield,
    title: 'Consistent quality',
    description:
      'Managed units, standardised checks, and corporate-ready presentation across Pretoria and Johannesburg.',
  },
  {
    icon: Headphones,
    title: 'One accountable team',
    description:
      'Sourcing, move-in, maintenance, cleaning, billing, and extensions flow through a single Hostsy contact.',
  },
  {
    icon: FileText,
    title: 'Clean procurement',
    description:
      'Monthly corporate invoicing, documented inclusions, and fewer fragmented receipts for finance teams.',
  },
]

const process = [
  {
    step: '01',
    title: 'Requirement intake',
    description: 'Location, dates, headcount, budget band, company process, and arrival timeline.',
  },
  {
    step: '02',
    title: 'Curated shortlist',
    description: 'Matched apartments are selected for commute, security, quality, and stay duration.',
  },
  {
    step: '03',
    title: 'Arrival-ready setup',
    description: 'Keys, linen, wifi, utilities, cleaning, and check-in details are coordinated upfront.',
  },
  {
    step: '04',
    title: 'Managed stay',
    description: 'Maintenance, extensions, billing, and support are handled for the full placement.',
  },
]

const services = [
  { icon: Wifi, label: 'Fibre internet' },
  { icon: Zap, label: 'Backup power' },
  { icon: Wrench, label: 'Maintenance' },
  { icon: CheckCircle2, label: 'Weekly cleaning' },
  { icon: Shield, label: '24/7 security' },
  { icon: FileText, label: 'Corporate invoicing' },
]

const locations = [
  {
    city: 'Pretoria',
    image:
      'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=1200&q=85',
    intro:
      'Diplomatic, government, and executive corridors with strong demand for secure long-stay housing.',
    areas: ['Waterkloof', 'Brooklyn', 'Arcadia', 'Menlyn'],
    proof: 'Best for embassies, public sector, mining, pharma, and senior executive moves.',
  },
  {
    city: 'Johannesburg',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85',
    intro:
      'Financial and corporate headquarters access for project teams, consultants, and multinational executives.',
    areas: ['Sandton', 'Rosebank', 'Illovo', 'Morningside'],
    proof: 'Best for banking, consulting, infrastructure, mining, and regional headquarters.',
  },
]

const testimonials = [
  {
    quote:
      'Hostsy removed the entire housing headache from our relocation process. Our employee was in a premium apartment the day they landed, invoiced to the company.',
    author: 'Head of HR',
    company: 'Major Mining Group, Johannesburg',
  },
  {
    quote:
      "We've placed three executives in Hostsy apartments. The quality is consistent, the billing is clean, and the response time is excellent.",
    author: 'Global Mobility Manager',
    company: 'Consulting Firm, Pretoria',
  },
  {
    quote:
      'Compared to hotels for project team stays, Hostsy has saved us over 50% while giving our people a proper home environment.',
    author: 'Operations Director',
    company: 'Infrastructure Company, Gauteng',
  },
]

const faqs = [
  {
    question: 'What is the minimum stay duration?',
    answer:
      'Our minimum stay is 30 days. We specialise in extended corporate stays from one month up to multi-year placements.',
  },
  {
    question: 'What is included in the monthly rate?',
    answer:
      'Apartments include furnishings, fibre internet, weekly cleaning, maintenance support, corporate invoicing, and utilities depending on the unit and agreement.',
  },
  {
    question: 'Can you accommodate multiple employees simultaneously?',
    answer:
      'Yes. Hostsy supports single executive placements, small teams, and larger project groups with multiple coordinated units.',
  },
  {
    question: 'How quickly can you place an employee?',
    answer:
      'For planned relocations, we typically confirm placement within 48 hours. Urgent placements can be same-day or next-day depending on availability.',
  },
  {
    question: 'How does billing work?',
    answer:
      'We invoice your company monthly with procurement-friendly documentation, removing personal receipts and fragmented hotel folios.',
  },
]

export default function HomePageContent() {
  const heroRef = useRef<HTMLElement>(null)
  const [activeUseCase, setActiveUseCase] = useState(useCases[0])
  const [activeLocation, setActiveLocation] = useState(locations[0])
  const pointerX = useMotionValue(50)
  const pointerY = useMotionValue(50)
  const spotlight = useMotionTemplate`radial-gradient(circle at ${pointerX}% ${pointerY}%, rgba(200,168,108,0.24), transparent 34%)`
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroImageY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const heroTextY = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])

  return (
    <div className="overflow-x-hidden bg-white">
      <section
        ref={heroRef}
        onMouseMove={(event) => {
          const rect = event.currentTarget.getBoundingClientRect()
          pointerX.set(((event.clientX - rect.left) / rect.width) * 100)
          pointerY.set(((event.clientY - rect.top) / rect.height) * 100)
        }}
        className="relative min-h-[96vh] overflow-hidden bg-[#07182f] text-white"
      >
        <motion.div style={{ y: heroImageY }} className="absolute -inset-x-12 -top-24 -bottom-10">
          <div className="h-full w-full animate-hero-image will-change-transform">
            <Image
              src="/hostsy-hero-apartment.jpg"
              alt="Premium furnished corporate apartment"
              fill
              sizes="100vw"
              className="object-cover opacity-65"
              priority
            />
          </div>
        </motion.div>
        <div className="absolute inset-0 bg-[linear-gradient(105deg,#07182f_0%,rgba(7,24,47,0.9)_38%,rgba(7,24,47,0.5)_70%,rgba(7,24,47,0.18)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_34%,transparent_0%,rgba(7,24,47,0.08)_34%,rgba(7,24,47,0.72)_100%)]" />
        <div className="absolute inset-0 hero-dot-grid opacity-[0.045]" />
        <motion.div style={{ background: spotlight }} className="absolute inset-0" />

        <div className="relative z-10 mx-auto grid min-h-[96vh] max-w-7xl grid-cols-1 items-center gap-12 px-4 pb-16 pt-32 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <motion.div style={{ y: heroTextY }} className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.58, ease }}
              className="mb-7 flex items-center gap-3 text-sm text-white/70"
            >
              <span className="h-px w-10 bg-[#C8A86C]" />
              <span>Corporate housing infrastructure across Gauteng</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.82, ease }}
              className="max-w-4xl text-4xl font-black leading-[1.02] tracking-tight text-white md:text-6xl lg:text-7xl"
            >
              Corporate stays that feel handled before anyone lands.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.68, ease }}
              className="mt-7 max-w-2xl text-lg leading-8 text-white/72 md:text-xl"
            >
              Hostsy gives HR, procurement, and mobility teams premium furnished apartments with
              one accountable operator behind every relocation, project team, and extended stay.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: 0.62, ease }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Link href="/contact#request">
                <Button
                  size="lg"
                  className="shine-sweep h-12 bg-[#C8A86C] px-8 text-base font-black text-[#07182f] shadow-[0_20px_45px_rgba(200,168,108,0.28)] hover:bg-[#d8bb82]"
                >
                  Request accommodation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/corporate-housing">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 border-white/35 bg-white/5 px-8 text-base text-white backdrop-blur hover:bg-white hover:text-[#07182f]"
                >
                  See how it works
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 44 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.32, duration: 0.86, ease }}
            className="glass-panel relative mx-auto w-full max-w-xl rounded-3xl p-5"
          >
            <div className="absolute -right-8 -top-8 hidden h-28 w-28 rounded-full border border-[#C8A86C]/30 lg:block" />
            <div className="relative overflow-hidden rounded-2xl bg-[#07182f]">
              <Image
                src="https://images.unsplash.com/photo-1560448075-bb485b067938?auto=format&fit=crop&w=1200&q=85"
                alt="Serviced apartment living room"
                width={760}
                height={520}
                className="h-[330px] w-full object-cover opacity-90"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07182f] via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="mb-4 flex items-center justify-between rounded-xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-xl">
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
                    Live placement desk
                  </span>
                  <span className="flex items-center gap-2 text-xs font-bold text-[#C8A86C]">
                    <span className="h-2 w-2 rounded-full bg-[#C8A86C]" />
                    Available
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {['Shortlist', 'Setup', 'Support'].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.72 + index * 0.1, duration: 0.48, ease }}
                      className="rounded-xl border border-white/15 bg-white/10 p-3 backdrop-blur-xl"
                    >
                      <div className="text-lg font-black text-white">0{index + 1}</div>
                      <div className="text-xs text-white/62">{item}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.07] p-4">
                  <div className="text-2xl font-black text-white">{stat.value}</div>
                  <div className="mt-1 text-xs leading-snug text-white/52">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/10 bg-[#07182f]/55 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 text-sm text-white/58 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
            <span>Built for 30+ day executive, expat, diplomatic, and project-team placements.</span>
            <span className="text-[#C8A86C]">Pretoria + Johannesburg</span>
          </div>
        </div>
      </section>

      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="relative bg-[#f7f4ed] py-6"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
          {[
            'Corporate invoicing',
            'Managed apartments',
            'Executive suburbs',
            'Single point of contact',
          ].map((item) => (
            <motion.div
              key={item}
              variants={fadeUpSm}
              className="flex items-center justify-center gap-2 rounded-xl border border-[#0B1F3E]/10 bg-white/60 px-3 py-3 text-center text-xs font-bold uppercase tracking-[0.14em] text-[#0B1F3E]"
            >
              <Sparkles className="h-3.5 w-3.5 text-[#C8A86C]" />
              {item}
            </motion.div>
          ))}
        </div>
      </motion.section>

      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="absolute inset-0 premium-grid opacity-60" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#C8A86C]">
              Why Hostsy
            </p>
            <h2 className="text-3xl font-black leading-tight tracking-tight text-[#0B1F3E] md:text-5xl">
              The premium difference is operational, not decorative.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Hostsy gives companies the calm of a hotel-standard arrival with the control,
              space, and accountability of a managed housing partner.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4"
          >
            {standards.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUpSm}
                whileHover={{ y: -10, transition: { duration: 0.22 } }}
                className="group rounded-2xl border border-[#0B1F3E]/10 bg-white p-7 shadow-[0_20px_60px_rgba(11,31,62,0.06)] transition-all duration-300 hover:border-[#C8A86C]/50 hover:shadow-[0_30px_80px_rgba(11,31,62,0.13)]"
              >
                <div className="mb-6 grid h-12 w-12 place-items-center rounded-xl bg-[#0B1F3E] text-[#C8A86C] transition-colors duration-300 group-hover:bg-[#C8A86C] group-hover:text-[#0B1F3E]">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-black text-[#0B1F3E]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-500">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#07182f] py-20 text-white md:py-28">
        <div className="absolute inset-0 premium-grid opacity-[0.08]" />
        <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-[#C8A86C]/14 blur-3xl" />
        <div className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-white/8 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid grid-cols-1 gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-end"
          >
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#C8A86C]">
                Interactive stay desk
              </p>
              <h2 className="max-w-2xl text-3xl font-black leading-tight tracking-tight md:text-5xl">
                Choose the mission. Hostsy shows the operating plan.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-white/62 lg:justify-self-end">
              Every placement runs through a clear operating plan, from the first brief to keys,
              support, extensions, and monthly billing.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3"
          >
            {useCases.map((useCase) => (
              <motion.button
                key={useCase.id}
                type="button"
                variants={fadeUpSm}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                onClick={() => setActiveUseCase(useCase)}
                className={`group relative overflow-hidden rounded-3xl border p-5 text-left transition-all duration-300 ${
                  activeUseCase.id === useCase.id
                    ? 'border-[#C8A86C] bg-[#C8A86C] text-[#07182f] shadow-[0_26px_70px_rgba(200,168,108,0.22)]'
                    : 'border-white/12 bg-white/[0.055] text-white hover:border-[#C8A86C]/55 hover:bg-white/[0.09]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`grid h-12 w-12 place-items-center rounded-2xl transition-colors ${
                      activeUseCase.id === useCase.id
                        ? 'bg-[#07182f] text-[#C8A86C]'
                        : 'bg-white/10 text-[#C8A86C]'
                    }`}
                  >
                    <useCase.icon className="h-6 w-6" />
                  </span>
                  <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
                <div className="mt-5 text-lg font-black">{useCase.label}</div>
                <div
                  className={`mt-2 text-sm leading-6 ${
                    activeUseCase.id === useCase.id ? 'text-[#07182f]/70' : 'text-white/52'
                  }`}
                >
                  {useCase.response}
                </div>
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            key={activeUseCase.id}
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="mt-8 overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.07] p-4 shadow-[0_36px_110px_rgba(0,0,0,0.24)] backdrop-blur-xl"
          >
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_0.95fr]">
              <div className="relative min-h-[440px] overflow-hidden rounded-[1.5rem] bg-[#0B1F3E]">
                <Image
                src="/hostsy-hero-apartment.jpg"
                alt="Premium apartment operating preview"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover opacity-85"
              />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07182f] via-[#07182f]/18 to-transparent" />
                <div className="absolute left-5 right-5 top-5 flex flex-wrap items-center justify-between gap-3">
                  <div className="rounded-2xl border border-white/15 bg-white/12 px-4 py-3 backdrop-blur-xl">
                    <div className="text-[0.68rem] font-black uppercase tracking-[0.22em] text-[#C8A86C]">
                      Placement live
                    </div>
                    <div className="mt-1 text-sm font-bold text-white">{activeUseCase.label}</div>
                  </div>
                  <div className="rounded-2xl bg-[#C8A86C] px-4 py-3 text-right text-[#07182f]">
                    <div className="text-xl font-black">4 hrs</div>
                    <div className="text-[0.68rem] font-black uppercase tracking-[0.12em]">first response</div>
                  </div>
                </div>
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="rounded-3xl border border-white/15 bg-[#07182f]/78 p-5 backdrop-blur-xl">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#C8A86C] text-[#07182f]">
                        <activeUseCase.icon className="h-5 w-5" />
                      </span>
                      <div>
                        <div className="text-xs font-black uppercase tracking-[0.2em] text-white/45">
                          Active brief
                        </div>
                        <h3 className="text-xl font-black leading-tight text-white">{activeUseCase.headline}</h3>
                      </div>
                    </div>
                    <p className="text-sm leading-7 text-white/64">{activeUseCase.copy}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.5rem] bg-white p-5 text-[#0B1F3E] md:p-6">
                <div className="flex items-center justify-between gap-4 border-b border-[#0B1F3E]/10 pb-5">
                  <div>
                    <div className="text-xs font-black uppercase tracking-[0.22em] text-[#C8A86C]">
                      Operating plan
                    </div>
                    <div className="mt-1 text-2xl font-black">From brief to keys</div>
                  </div>
                  <KeyRound className="h-6 w-6 text-[#C8A86C]" />
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[
                    { label: 'Shortlist', value: '48h' },
                    { label: 'Invoice', value: '1x' },
                    { label: 'Support', value: '24/7' },
                  ].map((metric) => (
                    <div key={metric.label} className="rounded-2xl bg-[#f7f4ed] p-4">
                      <div className="text-2xl font-black">{metric.value}</div>
                      <div className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-7 space-y-4">
                  {process.map((step, index) => (
                    <div key={step.step} className="grid grid-cols-[auto_1fr] gap-4">
                      <div className="flex flex-col items-center">
                        <div className="grid h-10 w-10 place-items-center rounded-full bg-[#0B1F3E] text-xs font-black text-[#C8A86C]">
                          {step.step}
                        </div>
                        {index < process.length - 1 && <div className="h-full min-h-8 w-px bg-[#0B1F3E]/12" />}
                      </div>
                      <div className="pb-3">
                        <h4 className="font-black">{step.title}</h4>
                        <p className="mt-1 text-sm leading-6 text-slate-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-3xl border border-[#C8A86C]/35 bg-[#C8A86C]/10 p-5">
                  <div className="grid gap-3 sm:grid-cols-3">
                    {activeUseCase.details.map((detail) => (
                      <div key={detail} className="flex items-start gap-2 text-sm font-bold leading-5">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#C8A86C]" />
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="relative">
            <div className="relative overflow-hidden rounded-3xl bg-[#0B1F3E] premium-shadow">
              <Image
                src="https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=1200&q=85"
                alt="Fully furnished Hostsy-style corporate apartment"
                width={900}
                height={680}
                className="h-[520px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07182f]/82 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/15 bg-white/12 p-5 text-white backdrop-blur-xl">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-[0.22em] text-[#C8A86C]">
                      Included standard
                    </div>
                    <div className="mt-1 text-xl font-black">Move-in ready from day one</div>
                  </div>
                  <div className="hidden rounded-xl bg-[#C8A86C] px-4 py-3 text-right text-[#07182f] sm:block">
                    <div className="text-2xl font-black">30+</div>
                    <div className="text-xs font-bold">day stays</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -right-4 -top-4 hidden rounded-2xl bg-white p-4 shadow-[0_24px_60px_rgba(11,31,62,0.16)] md:block">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#0B1F3E] text-[#C8A86C]">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-black text-[#0B1F3E]">Corporate ready</div>
                  <div className="text-xs text-slate-500">Invoicing + support</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#C8A86C]">
              Fully managed
            </p>
            <h2 className="text-3xl font-black leading-tight tracking-tight text-[#0B1F3E] md:text-5xl">
              The apartment is only half the product. The operating layer is the rest.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Every stay is supported by practical services that remove setup friction for the
              employee and remove coordination work from the company.
            </p>
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="mt-9 grid grid-cols-2 gap-4"
            >
              {services.map((service) => (
                <motion.div
                  key={service.label}
                  variants={fadeUpSm}
                  whileHover={{ x: 6, transition: { duration: 0.18 } }}
                  className="flex items-center gap-3 rounded-2xl border border-[#0B1F3E]/10 bg-[#f7f4ed] p-4"
                >
                  <service.icon className="h-5 w-5 shrink-0 text-[#C8A86C]" />
                  <span className="text-sm font-black text-[#0B1F3E]">{service.label}</span>
                </motion.div>
              ))}
            </motion.div>
            <Link href="/corporate-housing" className="mt-9 inline-flex">
              <Button className="h-11 bg-[#0B1F3E] px-7 text-white hover:bg-[#102a50]">
                View all services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#f7f4ed] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#C8A86C]">
                Key corridors
              </p>
              <h2 className="text-3xl font-black leading-tight tracking-tight text-[#0B1F3E] md:text-5xl">
                A portfolio built around where work actually happens.
              </h2>
            </div>
            <div className="flex gap-3">
              {locations.map((location) => (
                <button
                  key={location.city}
                  type="button"
                  onClick={() => setActiveLocation(location)}
                  className={`rounded-xl border px-5 py-3 text-sm font-black transition-all duration-300 ${
                    activeLocation.city === location.city
                      ? 'border-[#0B1F3E] bg-[#0B1F3E] text-white'
                      : 'border-[#0B1F3E]/12 bg-white text-[#0B1F3E] hover:border-[#C8A86C]'
                  }`}
                >
                  {location.city}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            key={activeLocation.city}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.48, ease }}
            className="mt-12 grid overflow-hidden rounded-3xl bg-white shadow-[0_30px_90px_rgba(11,31,62,0.1)] lg:grid-cols-[1.15fr_0.85fr]"
          >
            <div className="relative min-h-[360px]">
              <Image
                src={activeLocation.image}
                alt={`${activeLocation.city} corporate housing corridor`}
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07182f]/64 to-transparent" />
              <div className="absolute bottom-6 left-6 rounded-2xl border border-white/20 bg-white/14 px-5 py-4 text-white backdrop-blur-xl">
                <div className="flex items-center gap-2 text-sm font-bold">
                  <MapPin className="h-4 w-4 text-[#C8A86C]" />
                  {activeLocation.city}
                </div>
              </div>
            </div>
            <div className="p-8 md:p-10">
              <h3 className="text-3xl font-black text-[#0B1F3E]">{activeLocation.city}</h3>
              <p className="mt-4 text-base leading-8 text-slate-600">{activeLocation.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {activeLocation.areas.map((area) => (
                  <span key={area} className="rounded-xl border border-[#C8A86C]/35 bg-[#C8A86C]/10 px-4 py-2 text-sm font-bold text-[#0B1F3E]">
                    {area}
                  </span>
                ))}
              </div>
              <div className="mt-8 rounded-2xl bg-[#0B1F3E] p-6 text-white">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#C8A86C]">
                  Ideal demand profile
                </div>
                <p className="mt-3 text-sm leading-7 text-white/70">{activeLocation.proof}</p>
              </div>
              <Link href="/locations" className="mt-8 inline-flex">
                <Button variant="outline" className="border-[#0B1F3E] text-[#0B1F3E]">
                  Explore locations
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#07182f] py-20 text-white md:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#C8A86C]">
              Cost clarity
            </p>
            <h2 className="text-3xl font-black leading-tight tracking-tight md:text-5xl">
              Premium enough for executives. Rational enough for procurement.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/62">
              For 30+ day stays, the economics change. Companies get more space, fewer surcharges,
              and one clean monthly invoice.
            </p>
            <div className="mt-8 space-y-4">
              {[
                'Full apartment vs. single hotel room',
                'Stable monthly rate vs. dynamic daily pricing',
                'Kitchen, laundry, workspace, and cleaning included',
                'Monthly invoice instead of hotel folio sprawl',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-white/72">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#C8A86C]" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport} className="grid gap-5 sm:grid-cols-2">
            {[
              {
                label: 'Business hotel',
                icon: Hotel,
                price: 'R4,500',
                sub: 'per night avg',
                tone: 'muted',
                items: ['Single room', 'Paid laundry', 'Variable pricing', 'Hotel folio'],
              },
              {
                label: 'Hostsy corporate',
                icon: Building2,
                price: 'R2,100',
                sub: 'per night avg',
                tone: 'gold',
                items: ['Full apartment', 'In-unit laundry', 'Fixed monthly rate', 'Corporate invoice'],
              },
            ].map((option) => (
              <motion.div
                key={option.label}
                variants={fadeUpSm}
                whileHover={{ y: -8, transition: { duration: 0.22 } }}
                className={`rounded-3xl border p-6 ${
                  option.tone === 'gold'
                    ? 'border-[#C8A86C]/45 bg-[#C8A86C]/12'
                    : 'border-white/10 bg-white/[0.05]'
                }`}
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-white/45">{option.label}</span>
                  <option.icon className={option.tone === 'gold' ? 'h-5 w-5 text-[#C8A86C]' : 'h-5 w-5 text-white/32'} />
                </div>
                <div className={option.tone === 'gold' ? 'text-4xl font-black text-white' : 'text-4xl font-black text-white/55'}>
                  {option.price}
                </div>
                <div className="mt-1 text-xs text-white/42">{option.sub}</div>
                <div className="mt-8 space-y-3">
                  {option.items.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-white/65">
                      {option.tone === 'gold' ? (
                        <CheckCircle2 className="h-4 w-4 text-[#C8A86C]" />
                      ) : (
                        <span className="h-4 w-4 rounded-full border border-white/18" />
                      )}
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#C8A86C]">
              Client feedback
            </p>
            <h2 className="text-3xl font-black leading-tight tracking-tight text-[#0B1F3E] md:text-5xl">
              The point is not just a beautiful stay. It is a calmer operation.
            </h2>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport} className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.author}
                variants={fadeUpSm}
                whileHover={{ y: -8, transition: { duration: 0.22 } }}
                className="rounded-3xl border border-[#0B1F3E]/10 bg-[#f7f4ed] p-7"
              >
                <div className="mb-6 flex gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-[#C8A86C] text-[#C8A86C]" />
                  ))}
                </div>
                <blockquote className="text-sm leading-7 text-slate-700">&ldquo;{testimonial.quote}&rdquo;</blockquote>
                <div className="mt-7 border-t border-[#0B1F3E]/10 pt-5">
                  <div className="text-sm font-black text-[#0B1F3E]">{testimonial.author}</div>
                  <div className="mt-1 text-xs text-slate-500">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-[#f7f4ed] py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#C8A86C]">FAQ</p>
            <h2 className="text-3xl font-black leading-tight tracking-tight text-[#0B1F3E] md:text-5xl">
              Questions clients ask before the first placement.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Clear answers for HR, mobility, procurement, landlords, and executive stakeholders.
            </p>
            <Link href="/contact" className="mt-8 inline-flex">
              <Button className="bg-[#0B1F3E] text-white hover:bg-[#102a50]">
                <Phone className="mr-2 h-4 w-4" />
                Talk to our team
              </Button>
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
            <Accordion className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`item-${index}`} className="rounded-2xl border border-[#0B1F3E]/10 bg-white px-6 shadow-sm">
                  <AccordionTrigger className="py-5 text-left text-sm font-black text-[#0B1F3E] hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-sm leading-7 text-slate-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="relative overflow-hidden rounded-[2rem] bg-[#07182f] p-8 text-white shadow-[0_34px_100px_rgba(11,31,62,0.18)] md:p-14"
          >
            <div className="absolute inset-0 premium-grid opacity-[0.09]" />
            <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#C8A86C]/20 blur-3xl" />
            <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#C8A86C]">
                  Ready to brief us?
                </p>
                <h2 className="max-w-3xl text-3xl font-black leading-tight tracking-tight md:text-5xl">
                  Give us the placement requirement. We will bring back calm, curated options.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/62">
                  Share the dates, headcount, location, and company process. Hostsy will respond
                  within 4 business hours.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link href="/contact#request">
                  <Button className="h-12 w-full bg-[#C8A86C] px-8 text-[#07182f] hover:bg-[#d8bb82]">
                    Request accommodation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <a href="https://wa.me/27678182968" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="h-12 w-full border-white/30 bg-transparent px-8 text-white hover:bg-white hover:text-[#07182f]">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp Hostsy
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
