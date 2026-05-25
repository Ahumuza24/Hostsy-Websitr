'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  Building2,
  Shield,
  Clock,
  Users,
  CheckCircle2,
  ArrowRight,
  Wifi,
  Zap,
  Wrench,
  Star,
  TrendingDown,
  Phone,
  Award,
  FileText,
} from 'lucide-react'

// ─── animation presets ────────────────────────────────────────────────────────
const ease = [0.16, 1, 0.3, 1] as const

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

const fadeUpSm = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}

const slideLeft = {
  hidden: { opacity: 0, x: -48 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease } },
}

const slideRight = {
  hidden: { opacity: 0, x: 48 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}

const heroStatsStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.9 } },
}

const vp = { once: true, margin: '-80px' as const }

// ─── page data ────────────────────────────────────────────────────────────────
const stats = [
  { value: '100+', label: 'Corporate Clients' },
  { value: '200+', label: 'Managed Units' },
  { value: '2', label: 'Major Cities' },
  { value: '30+', label: 'Days Min Stay' },
]

const whyChooseUs = [
  {
    icon: Building2,
    title: 'Fully Furnished & Move-In Ready',
    description:
      'Every apartment is professionally furnished and ready for immediate occupation — no setup delays for your relocating employees.',
  },
  {
    icon: Shield,
    title: 'Consistent Quality, Always',
    description:
      "Standardised apartment quality across all units. No Airbnb surprises. Your team gets the same premium experience every time.",
  },
  {
    icon: Clock,
    title: 'Single Point of Contact',
    description:
      'One account manager handles everything — sourcing, setup, maintenance, billing. Remove the operational burden from your HR team.',
  },
  {
    icon: FileText,
    title: 'Corporate-Grade Invoicing',
    description:
      'Clean, compliant invoices that work with your procurement and finance systems. No personal Airbnb receipts to reconcile.',
  },
  {
    icon: TrendingDown,
    title: 'Proven Cost Savings',
    description:
      'Extended stays in our apartments cost 40–60% less than equivalent hotel accommodation. Measurable savings for your company.',
  },
  {
    icon: Users,
    title: 'Built for Teams',
    description:
      'From single executives to project teams of 20+, we scale to your needs and can accommodate multiple employees simultaneously.',
  },
]

const howItWorks = [
  {
    step: '01',
    title: 'Submit Your Requirement',
    description: 'Tell us your location, dates, headcount, and specific needs. We respond within 4 business hours.',
  },
  {
    step: '02',
    title: 'We Curate Options',
    description: 'We select the best-matched apartments from our managed portfolio based on your corporate requirements.',
  },
  {
    step: '03',
    title: 'We Handle Everything',
    description: 'Keys, utilities, wifi, linen, cleaning — all arranged before your employee arrives. Zero admin for you.',
  },
  {
    step: '04',
    title: 'Ongoing Support',
    description: 'Dedicated account management for the full stay. Maintenance, issues, and extensions handled immediately.',
  },
]

const services = [
  { icon: Wifi, label: 'Fibre Internet' },
  { icon: Zap, label: 'Backup Power' },
  { icon: Wrench, label: 'Maintenance' },
  { icon: CheckCircle2, label: 'Weekly Cleaning' },
  { icon: Shield, label: '24/7 Security' },
  { icon: FileText, label: 'Corporate Invoicing' },
]

const locations = [
  {
    city: 'Pretoria',
    areas: ['Waterkloof', 'Brooklyn', 'Arcadia', 'Menlyn'],
    description: "South Africa's administrative capital. Home to diplomatic missions, government institutions, and major corporates.",
    image: 'https://images.unsplash.com/photo-1577948000111-9c970dfe3743?auto=format&fit=crop&w=800&q=80',
    href: '/locations#pretoria',
  },
  {
    city: 'Johannesburg',
    areas: ['Sandton', 'Rosebank', 'Illovo', 'Morningside'],
    description: "Africa's financial capital. The business hub for banking, mining, consulting, and multinational headquarters.",
    image: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?auto=format&fit=crop&w=800&q=80',
    href: '/locations#johannesburg',
  },
]

const testimonials = [
  {
    quote: "Hostsy removed the entire housing headache from our relocation process. Our employee was in a premium apartment the day they landed, invoiced to the company. That's exactly what we needed.",
    author: 'Head of HR',
    company: 'Major Mining Group, Johannesburg',
  },
  {
    quote: "We've placed three executives in Hostsy apartments over the past year. The quality has been consistent, the billing is clean, and the response time is excellent. It's become our standard.",
    author: 'Global Mobility Manager',
    company: 'Consulting Firm, Pretoria',
  },
  {
    quote: 'Compared to what we were spending on hotels for project team stays, Hostsy has saved us over 50% while giving our people a proper home environment. The productivity difference is noticeable.',
    author: 'Operations Director',
    company: 'Infrastructure Company, Gauteng',
  },
]

const faqs = [
  {
    question: 'What is the minimum stay duration?',
    answer: 'Our minimum stay is 30 days. We specialise in extended corporate stays — from one month up to multi-year placements.',
  },
  {
    question: 'What is included in the monthly rate?',
    answer: 'All apartments include: full furnishings, fibre internet, weekly cleaning, backup power (where available), maintenance support, and corporate invoicing. Utilities are typically included or billed at cost.',
  },
  {
    question: 'Can you accommodate multiple employees simultaneously?',
    answer: 'Yes. We work with companies placing single executives, small teams, and large project groups of 20+. We manage multiple units across our portfolio and can coordinate group placements.',
  },
  {
    question: 'How quickly can you place an employee?',
    answer: 'For planned relocations, we typically confirm placement within 48 hours. For urgent placements, we aim for same-day or next-day confirmation depending on availability.',
  },
  {
    question: 'Do you handle diplomatic and expat placements?',
    answer: 'Yes. We have experience placing diplomatic staff, expat hires, and international executives. We understand the specific requirements and provide the appropriate documentation and support.',
  },
  {
    question: 'How does billing work?',
    answer: 'We invoice directly to your company on a monthly basis. Our invoices are structured for corporate procurement — no personal receipts or Airbnb-style billing.',
  },
]

// ─── component ────────────────────────────────────────────────────────────────
export default function HomePageContent() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroImageY = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])

  return (
    <div className="overflow-x-hidden">

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center bg-[#0B1F3E] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {/* Parallax wrapper — moves image up as page scrolls */}
          <motion.div
            style={{ y: heroImageY }}
            className="absolute -inset-x-0 -top-[12%] bottom-0"
          >
            <div className="w-full h-full animate-ken-burns will-change-transform">
              <Image
                src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1920&q=80"
                alt="Premium corporate apartment interior"
                fill
                className="object-cover opacity-[0.35]"
                priority
              />
            </div>
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3E] via-[#0B1F3E]/88 to-[#0B1F3E]/50" />
          <div className="absolute inset-0 hero-dot-grid opacity-[0.035]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6, ease }}
              className="mb-6"
            >
              <Badge
                variant="outline"
                className="border-[#C8A86C]/50 text-[#C8A86C] bg-[#C8A86C]/10 font-medium tracking-wide text-xs uppercase"
              >
                Corporate Housing Provider · Gauteng
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.75, ease }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6"
            >
              Corporate Housing for
              <span className="block text-[#C8A86C]">Relocations, Project</span>
              Teams &amp; Extended Stays
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.65, ease }}
              className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl font-light"
            >
              Premium furnished apartments across Pretoria and Johannesburg, fully managed for
              companies relocating employees, executives, and project teams.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.66, duration: 0.6, ease }}
              className="flex flex-col sm:flex-row gap-4 mb-16"
            >
              <Link href="/contact#request">
                <Button
                  size="lg"
                  className="bg-[#C8A86C] hover:bg-[#b8965c] text-[#0B1F3E] font-bold px-8 text-base shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-transform"
                >
                  Request Accommodation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/landlords">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white bg-transparent hover:bg-white/10 px-8 text-base font-medium hover:scale-[1.02] active:scale-[0.98] transition-transform"
                >
                  Partner With Hostsy
                </Button>
              </Link>
            </motion.div>

            <motion.div
              variants={heroStatsStagger}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {stats.map((stat) => (
                <motion.div key={stat.label} variants={fadeUpSm}>
                  <div className="text-2xl md:text-3xl font-black text-white mb-1">{stat.value}</div>
                  <div className="text-white/50 text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-30">
          <div className="w-px h-12 bg-white animate-pulse" />
        </div>
      </section>

      {/* ── Tagline bar ──────────────────────────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={vp}
        transition={{ duration: 0.5 }}
        className="bg-[#C8A86C] py-4"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[#0B1F3E] font-bold text-sm md:text-base tracking-widest uppercase">
            Corporate Housing Infrastructure for Modern Companies
          </p>
        </div>
      </motion.section>

      {/* ── Why Companies Choose Hostsy ──────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-2xl mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            <p className="text-[#C8A86C] font-semibold text-sm uppercase tracking-widest mb-3">Why Hostsy</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0B1F3E] leading-tight tracking-tight mb-5">
              Why Companies Choose Hostsy
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              We&apos;re not a booking platform. We&apos;re a corporate housing operator — built
              specifically for the operational needs of HR, mobility, and procurement teams.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            {whyChooseUs.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUpSm}
                whileHover={{ y: -6, boxShadow: '0 24px 60px rgba(11,31,62,0.10)', transition: { duration: 0.22 } }}
                className="group p-8 border border-gray-100 rounded-xl hover:border-[#C8A86C]/40 cursor-default"
              >
                <div className="w-12 h-12 bg-[#0B1F3E]/5 rounded-lg flex items-center justify-center mb-5 group-hover:bg-[#C8A86C]/10 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-[#0B1F3E] group-hover:text-[#C8A86C] transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-[#0B1F3E] text-lg mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-2xl mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            <p className="text-[#C8A86C] font-semibold text-sm uppercase tracking-widest mb-3">Process</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0B1F3E] leading-tight tracking-tight mb-5">
              How It Works
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              From requirement to move-in in as little as 48 hours. We manage every step so your
              team can focus on the work that matters.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            {howItWorks.map((step, i) => (
              <motion.div
                key={step.step}
                variants={fadeUpSm}
                whileHover={{ y: -5, boxShadow: '0 16px 40px rgba(11,31,62,0.09)', transition: { duration: 0.2 } }}
                className="relative bg-white p-7 rounded-xl border border-gray-100 shadow-sm overflow-hidden"
              >
                {i < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-9 -right-3 w-6 h-px bg-[#C8A86C]/25 z-10" />
                )}
                <div className="text-4xl font-black text-[#C8A86C]/25 mb-4 leading-none">{step.step}</div>
                <h3 className="font-bold text-[#0B1F3E] text-lg mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Cost Savings ─────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#0B1F3E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={slideLeft} initial="hidden" whileInView="visible" viewport={vp}>
              <p className="text-[#C8A86C] font-semibold text-sm uppercase tracking-widest mb-3">
                Cost Efficiency
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-6">
                40–60% Less Than
                <span className="block text-[#C8A86C]">Hotel Accommodation</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                When employees stay for 30+ days, the economics of corporate housing are clear. You
                get more space, more comfort, and significantly lower cost per night.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Full apartment vs. single hotel room — same or lower cost',
                  'No food & beverage surcharges on corporate accounts',
                  'Stable monthly rate — no dynamic hotel pricing spikes',
                  'Employees are more productive in a home environment',
                  'One invoice per month vs. itemised hotel folios',
                ].map((point, i) => (
                  <motion.div
                    key={point}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={vp}
                    transition={{ delay: 0.2 + i * 0.07, duration: 0.5, ease }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#C8A86C] flex-shrink-0 mt-0.5" />
                    <span className="text-white/70 text-sm leading-relaxed">{point}</span>
                  </motion.div>
                ))}
              </div>

              <Link href="/corporate-housing">
                <Button className="bg-[#C8A86C] hover:bg-[#b8965c] text-[#0B1F3E] font-bold px-7 hover:scale-[1.02] active:scale-[0.98] transition-transform">
                  See Full Comparison
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              variants={slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-4">
                  Business Hotel
                </div>
                <div className="text-red-400 text-3xl font-black mb-1">R4,500</div>
                <div className="text-white/40 text-xs mb-6">per night avg (30 days)</div>
                <ul className="space-y-2.5">
                  {['Single room', 'Restaurant dining required', 'No laundry', 'No workspace', 'Variable daily rate'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-white/40 text-xs">
                      <span className="w-3.5 h-3.5 rounded-full border border-white/20 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#C8A86C]/10 border border-[#C8A86C]/30 rounded-xl p-6">
                <div className="text-[#C8A86C] text-xs font-semibold uppercase tracking-widest mb-4">
                  Hostsy Corporate
                </div>
                <div className="text-white text-3xl font-black mb-1">R2,100</div>
                <div className="text-white/40 text-xs mb-6">per night avg (30 days)</div>
                <ul className="space-y-2.5">
                  {['Full 1–2 bed apartment', 'Full kitchen included', 'In-unit laundry', 'Dedicated workspace', 'Fixed monthly rate'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-white/80 text-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A86C] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── What&apos;s Included ──────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              className="relative"
            >
              <Image
                src="https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=800&q=80"
                alt="Fully furnished corporate apartment"
                width={600}
                height={450}
                className="rounded-xl object-cover w-full shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-[#0B1F3E] text-white rounded-xl p-5 shadow-xl max-w-[180px]">
                <div className="text-2xl font-black text-[#C8A86C]">30+</div>
                <div className="text-white/70 text-xs leading-snug mt-1">
                  Days minimum. Most stays run 3–18 months.
                </div>
              </div>
            </motion.div>

            <motion.div variants={slideRight} initial="hidden" whileInView="visible" viewport={vp}>
              <p className="text-[#C8A86C] font-semibold text-sm uppercase tracking-widest mb-3">
                Fully Managed
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0B1F3E] leading-tight tracking-tight mb-5">
                Everything Handled.
                <span className="block">Zero Admin.</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                From day one, your employee steps into a fully operational home. Every service
                included in the monthly rate — no surprises, no extras.
              </p>

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
                className="grid grid-cols-2 gap-4 mb-8"
              >
                {services.map((service) => (
                  <motion.div
                    key={service.label}
                    variants={fadeUpSm}
                    whileHover={{ x: 4, transition: { duration: 0.18 } }}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-[#C8A86C]/5 transition-colors cursor-default"
                  >
                    <service.icon className="w-5 h-5 text-[#C8A86C] flex-shrink-0" />
                    <span className="text-[#0B1F3E] text-sm font-medium">{service.label}</span>
                  </motion.div>
                ))}
              </motion.div>

              <Link href="/corporate-housing">
                <Button className="bg-[#0B1F3E] hover:bg-[#0F2A52] text-white font-bold px-7 hover:scale-[1.02] active:scale-[0.98] transition-transform">
                  View All Services
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Featured Locations ───────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-2xl mb-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            <p className="text-[#C8A86C] font-semibold text-sm uppercase tracking-widest mb-3">
              Where We Operate
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0B1F3E] leading-tight tracking-tight">
              Gauteng&apos;s Key Business Corridors
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {locations.map((location) => (
              <motion.div key={location.city} variants={fadeUpSm}>
                <Link href={location.href} className="group block">
                  <div className="relative overflow-hidden rounded-2xl bg-[#0B1F3E] shadow-lg">
                    <Image
                      src={location.image}
                      alt={`${location.city} cityscape`}
                      width={700}
                      height={420}
                      className="w-full h-64 object-cover opacity-50 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end p-8">
                      <h3 className="text-3xl font-black text-white mb-2">{location.city}</h3>
                      <p className="text-white/70 text-sm leading-relaxed mb-4">{location.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {location.areas.map((area) => (
                          <span
                            key={area}
                            className="text-[#C8A86C] text-xs border border-[#C8A86C]/40 px-2.5 py-1 rounded-md group-hover:border-[#C8A86C]/70 group-hover:bg-[#C8A86C]/10 transition-colors"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.6, ease }}
          >
            <Link href="/locations">
              <Button
                variant="outline"
                className="border-[#0B1F3E] text-[#0B1F3E] hover:bg-[#0B1F3E] hover:text-white font-semibold px-8 transition-all duration-300"
              >
                View All Locations
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Landlord CTA ─────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#0B1F3E] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8A86C]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C8A86C]/5 rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <Award className="w-10 h-10 text-[#C8A86C] mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-5 tracking-tight">
            Own Quality Apartments in Gauteng?
          </h2>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Join our master lease programme. We guarantee your rent, manage the property, and fill
            it with vetted corporate tenants — long-term. Predictable income and professional
            management with zero vacancy risk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/landlords">
              <Button className="bg-[#C8A86C] hover:bg-[#b8965c] text-[#0B1F3E] font-bold px-8 hover:scale-[1.02] active:scale-[0.98] transition-transform">
                Learn About Partnership
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-white/30 text-white bg-transparent hover:bg-white/10 px-8">
                Contact Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-2xl mb-14"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            <p className="text-[#C8A86C] font-semibold text-sm uppercase tracking-widest mb-3">Client Feedback</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0B1F3E] leading-tight tracking-tight">
              What HR &amp; Mobility Teams Say
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={fadeUpSm}
                whileHover={{ y: -5, boxShadow: '0 20px 50px rgba(11,31,62,0.08)', transition: { duration: 0.22 } }}
                className="p-8 bg-gray-50 rounded-xl border border-gray-100"
              >
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[#C8A86C] text-[#C8A86C]" />
                  ))}
                </div>
                <blockquote className="text-gray-700 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div>
                  <div className="font-semibold text-[#0B1F3E] text-sm">{t.author}</div>
                  <div className="text-gray-400 text-xs mt-0.5">{t.company}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div variants={slideLeft} initial="hidden" whileInView="visible" viewport={vp}>
              <p className="text-[#C8A86C] font-semibold text-sm uppercase tracking-widest mb-3">FAQ</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0B1F3E] leading-tight tracking-tight mb-5">
                Common Questions
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Everything you need to know about corporate housing with Hostsy. If your question
                isn&apos;t here, reach out directly.
              </p>
              <Link href="/contact">
                <Button className="bg-[#0B1F3E] hover:bg-[#0F2A52] text-white font-bold px-7 hover:scale-[1.02] active:scale-[0.98] transition-transform">
                  <Phone className="mr-2 w-4 h-4" />
                  Talk to Our Team
                </Button>
              </Link>
            </motion.div>

            <motion.div variants={slideRight} initial="hidden" whileInView="visible" viewport={vp}>
              <Accordion className="space-y-3">
                {faqs.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="bg-white border border-gray-100 rounded-xl px-6 shadow-sm"
                  >
                    <AccordionTrigger className="text-[#0B1F3E] font-semibold text-sm py-5 text-left hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-500 text-sm leading-relaxed pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            className="bg-[#0B1F3E] rounded-2xl p-10 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#C8A86C]/5 rounded-full" />
              <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#C8A86C]/5 rounded-full" />
            </div>
            <div className="relative">
              <p className="text-[#C8A86C] font-semibold text-sm uppercase tracking-widest mb-4">
                Ready to Get Started?
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-5 tracking-tight max-w-2xl mx-auto leading-tight">
                Let&apos;s Handle Your Next Corporate Placement
              </h2>
              <p className="text-white/60 text-lg leading-relaxed max-w-xl mx-auto mb-10">
                Tell us your requirement. We&apos;ll have options for you within 4 business hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact#request">
                  <Button
                    size="lg"
                    className="bg-[#C8A86C] hover:bg-[#b8965c] text-[#0B1F3E] font-bold px-10 hover:scale-[1.02] active:scale-[0.98] transition-transform"
                  >
                    Request Accommodation
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white bg-transparent hover:bg-white/10 px-10"
                  >
                    Learn About Us
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
