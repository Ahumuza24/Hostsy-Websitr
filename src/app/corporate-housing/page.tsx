import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2,
  ArrowRight,
  Wifi,
  Zap,
  Wrench,
  Shield,
  FileText,
  Home,
  Briefcase,
  Globe,
  Users,
  Building2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Corporate Housing — What It Is & Why It's Better Than Hotels",
  description:
    "Discover how corporate housing from Hostsy outperforms hotels for 30+ day stays. Fully furnished, fully managed apartments for executive relocations, project teams, and extended stays in Gauteng.",
};

const services = [
  {
    icon: Home,
    title: "Full Furnishing",
    description:
      "Every apartment is fully furnished — beds, sofas, dining set, kitchen appliances, and linen. Nothing to source or set up.",
  },
  {
    icon: Wifi,
    title: "Fibre Internet",
    description:
      "High-speed fibre connectivity included in all units. Your employee can work from day one.",
  },
  {
    icon: Zap,
    title: "Backup Power",
    description:
      "Available in most units. Battery backup or generator for uninterrupted work and comfort.",
  },
  {
    icon: Wrench,
    title: "Maintenance",
    description:
      "Dedicated maintenance team. Any issue is handled quickly — your employee does not deal with it.",
  },
  {
    icon: Shield,
    title: "Weekly Cleaning",
    description:
      "Professional cleaning service included weekly. The apartment stays hotel-standard throughout the stay.",
  },
  {
    icon: FileText,
    title: "Corporate Invoicing",
    description:
      "Monthly invoice to your company — no personal receipts, no Airbnb-style transactions.",
  },
  {
    icon: Users,
    title: "Account Management",
    description:
      "Single point of contact for your HR or procurement team. All queries resolved within business hours.",
  },
  {
    icon: Building2,
    title: "Extensions & Changes",
    description:
      "Extend stays, change units, add more employees — we handle all adjustments efficiently.",
  },
];

const scenarios = [
  {
    icon: Briefcase,
    title: "Executive Relocation",
    description:
      "A senior hire arrives from abroad before their permanent accommodation is confirmed. They need a furnished, fully serviced apartment in a safe executive neighbourhood — Waterkloof, Brooklyn, or Sandton — for 3–6 months while they settle in.",
    timeframe: "3–12 months typical",
  },
  {
    icon: Users,
    title: "Project Teams",
    description:
      "A construction, consulting, or infrastructure firm deploys a team of 6–15 people to Gauteng for a project. The team needs apartments near the project site, all serviced, and invoiced to the company monthly.",
    timeframe: "1–12 months typical",
  },
  {
    icon: Globe,
    title: "Diplomatic Placement",
    description:
      "A diplomatic mission needs housing for a newly arrived attaché before official diplomatic housing is ready. Requirements include security, proximity to the Union Buildings, and professional management.",
    timeframe: "1–6 months typical",
  },
  {
    icon: Home,
    title: "Expat Hire",
    description:
      "A company brings in a specialist from overseas. They need premium accommodation while they find their feet — near international schools, good transport links, and in a safe neighbourhood.",
    timeframe: "3–18 months typical",
  },
];

const comparison = [
  { feature: "Minimum stay", hotel: "1 night", hostsy: "30 days" },
  { feature: "Living space", hotel: "Studio room (30–40 m²)", hostsy: "Full apartment (50–120 m²)" },
  { feature: "Kitchen", hotel: "No / mini-kitchen", hostsy: "Full equipped kitchen" },
  { feature: "Laundry", hotel: "Paid laundry service", hostsy: "In-unit washing machine" },
  { feature: "Workspace", hotel: "Desk in room", hostsy: "Dedicated workspace" },
  { feature: "Cost per night (30d stay)", hotel: "R3,500–R5,000", hostsy: "R1,800–R2,500" },
  { feature: "Invoicing", hotel: "Daily hotel folio", hostsy: "Monthly corporate invoice" },
  { feature: "Flexibility", hotel: "Book per night", hostsy: "Monthly, extendable" },
  { feature: "Management", hotel: "Hotel front desk", hostsy: "Dedicated account manager" },
];

export default function CorporateHousingPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative bg-[#0B1F3E] pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1920&q=80"
            alt="Premium furnished apartment"
            fill
            className="object-cover opacity-15"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3E] to-[#0B1F3E]/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge
            variant="outline"
            className="mb-6 border-[#C8A86C]/50 text-[#C8A86C] bg-[#C8A86C]/10 font-medium tracking-wide text-xs uppercase"
          >
            The Offering
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-5 max-w-3xl">
            Corporate Housing:
            <span className="block text-[#C8A86C]">What It Is &amp; Why It Works</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mb-8 font-light">
            A furnished, fully managed apartment on a monthly basis — built for companies placing
            employees, executives, and teams in a new city.
          </p>
          <Link href="/contact#request">
            <Button className="bg-[#C8A86C] hover:bg-[#b8965c] text-[#0B1F3E] font-bold px-8">
              Request Accommodation
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* What is corporate housing */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#C8A86C] font-semibold text-sm uppercase tracking-widest mb-3">
                Definition
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-[#0B1F3E] leading-tight tracking-tight mb-5">
                What Is Corporate Housing?
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed text-base">
                <p>
                  Corporate housing is a fully furnished apartment rented on a monthly basis to
                  companies for their employees. Unlike a hotel room, it offers the full space and
                  functionality of a home — kitchen, living area, dedicated workspace, laundry.
                </p>
                <p>
                  Unlike Airbnb or short-term rentals, corporate housing is professionally managed,
                  consistently maintained, and invoiced directly to your company. It is designed
                  specifically for operational use — not tourism.
                </p>
                <p>
                  It exists in the space between a hotel (too expensive and too small for long
                  stays) and a permanent lease (too inflexible, too much admin). For stays of 30
                  days or more, it is almost always the right solution.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80"
                alt="Corporate apartment bedroom"
                width={600}
                height={450}
                className="rounded-xl object-cover w-full shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-[#C8A86C] font-semibold text-sm uppercase tracking-widest mb-3">
              Use Cases
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0B1F3E] leading-tight tracking-tight mb-5">
              Who Uses Corporate Housing
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Corporate housing is the right solution for any company placing employees in Gauteng
              for 30 days or more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {scenarios.map((scenario) => (
              <div key={scenario.title} className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-[#0B1F3E]/5 rounded-lg flex items-center justify-center flex-shrink-0">
                    <scenario.icon className="w-5 h-5 text-[#C8A86C]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0B1F3E] text-lg">{scenario.title}</h3>
                    <span className="text-[#C8A86C] text-xs font-medium">{scenario.timeframe}</span>
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{scenario.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-[#C8A86C] font-semibold text-sm uppercase tracking-widest mb-3">
              What&apos;s Included
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0B1F3E] leading-tight tracking-tight mb-5">
              Every Service, Included
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              One monthly rate covers everything. No surprise extras, no separate bills, no admin
              for your HR team.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-6 border border-gray-100 rounded-xl hover:border-[#C8A86C]/40 hover:shadow-sm transition-all"
              >
                <service.icon className="w-7 h-7 text-[#C8A86C] mb-4" />
                <h3 className="font-bold text-[#0B1F3E] mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-20 md:py-28 bg-[#0B1F3E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-[#C8A86C] font-semibold text-sm uppercase tracking-widest mb-3">
              Why Not a Hotel
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-5">
              Corporate Housing vs. Hotels
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              For stays of 30+ days, the comparison is clear.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-white/50 text-xs font-semibold uppercase tracking-widest">
                    Feature
                  </th>
                  <th className="text-left py-4 px-4 text-white/50 text-xs font-semibold uppercase tracking-widest">
                    Business Hotel
                  </th>
                  <th className="text-left py-4 px-4 text-[#C8A86C] text-xs font-semibold uppercase tracking-widest">
                    Hostsy Corporate
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-white/[0.03]" : ""}>
                    <td className="py-4 px-4 text-white/70 text-sm font-medium">{row.feature}</td>
                    <td className="py-4 px-4 text-white/40 text-sm">{row.hotel}</td>
                    <td className="py-4 px-4 text-white text-sm font-medium">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A86C] flex-shrink-0" />
                        {row.hostsy}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-10 md:p-14 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-[#0B1F3E] mb-4 tracking-tight">
              Ready to Place Your Next Employee?
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed max-w-xl mx-auto mb-8">
              Tell us your location, timeframe, and requirements. We&apos;ll respond within 4
              business hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact#request">
                <Button className="bg-[#C8A86C] hover:bg-[#b8965c] text-[#0B1F3E] font-bold px-8">
                  Request Accommodation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/hr-mobility">
                <Button
                  variant="outline"
                  className="border-[#0B1F3E] text-[#0B1F3E] hover:bg-[#0B1F3E] hover:text-white px-8"
                >
                  HR &amp; Mobility Info
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
