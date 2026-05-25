import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle2,
  ArrowRight,
  Shield,
  TrendingUp,
  Home,
  Users,
  Clock,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "For Landlords — Guaranteed Rent & Zero Vacancy with Corporate Tenants",
  description:
    "Partner with Hostsy for guaranteed monthly rent, vetted corporate tenants, and full property management. We take a master lease on quality furnished apartments in Gauteng.",
};

const benefits = [
  {
    icon: TrendingUp,
    title: "Guaranteed Monthly Rent",
    description:
      "We pay you a fixed monthly amount regardless of occupancy. No late payments, no vacancies, no chasing tenants.",
  },
  {
    icon: Users,
    title: "Vetted Corporate Tenants",
    description:
      "Your apartment is occupied by employed professionals from reputable companies — executives, project teams, and diplomatic staff.",
  },
  {
    icon: Shield,
    title: "Full Property Management",
    description:
      "We handle maintenance, inspections, cleaning, and tenant management. Your property is managed to a high standard throughout.",
  },
  {
    icon: Home,
    title: "Long-Term Occupancy",
    description:
      "Corporate stays typically run 3–18 months. Our master lease agreements run 12–36 months, providing stable long-term occupancy.",
  },
  {
    icon: Clock,
    title: "Low Vacancy Risk",
    description:
      "Because we operate a managed portfolio, transitions between tenants are handled seamlessly. Vacancy gaps are minimised or eliminated.",
  },
  {
    icon: Wrench,
    title: "Property Care",
    description:
      "Corporate tenants treat apartments as a professional responsibility. Combined with our maintenance protocols, your property is well cared for.",
  },
];

const requirements = [
  "Fully furnished or unfurnished (we can furnish)",
  "1, 2, or 3 bedroom apartments preferred",
  "Modern finishes and condition",
  "Safe, secure building or complex",
  "Located in target areas",
  "Reliable water and power infrastructure",
];

const targetAreas = [
  {
    city: "Pretoria",
    suburbs: ["Waterkloof", "Brooklyn", "Arcadia", "Lynnwood", "Menlyn", "Hatfield"],
  },
  {
    city: "Johannesburg",
    suburbs: ["Sandton", "Rosebank", "Illovo", "Morningside", "Melrose"],
  },
];

const process = [
  {
    step: "01",
    title: "Submit Your Property",
    description:
      "Complete the form below. Tell us about your apartment — location, size, condition, and your requirements.",
  },
  {
    step: "02",
    title: "Property Assessment",
    description:
      "Our team reviews your submission and arranges a viewing. We assess the property against our quality and location criteria.",
  },
  {
    step: "03",
    title: "Offer & Agreement",
    description:
      "We present a guaranteed monthly rental offer. If accepted, we sign a master lease agreement — typically 12–36 months.",
  },
  {
    step: "04",
    title: "We Take Over",
    description:
      "We furnish if needed, prepare the apartment, and start placing corporate tenants. You receive your guaranteed rent monthly.",
  },
];

export default function LandlordsPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative bg-[#0B1F3E] pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1920&q=80"
            alt="Modern apartment building"
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
            Landlord Partnership
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-5 max-w-3xl">
            Guaranteed Rent.
            <span className="block text-[#C8A86C]">Zero Vacancy. Zero Hassle.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mb-8 font-light">
            We take a master lease on your apartment and fill it with vetted corporate tenants.
            You receive a guaranteed monthly rental — whether occupied or not.
          </p>
          <Link href="#partner-form">
            <Button className="bg-[#C8A86C] hover:bg-[#b8965c] text-[#0B1F3E] font-bold px-8">
              Submit Your Property
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-[#C8A86C] font-semibold text-sm uppercase tracking-widest mb-3">
              Why Partner With Us
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0B1F3E] leading-tight tracking-tight mb-5">
              A Better Way to Rent Your Property
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              No more tenant screening, chasing payments, or dealing with maintenance calls. Hostsy
              manages everything — you get the rent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="group p-8 border border-gray-100 rounded-xl hover:border-[#C8A86C]/40 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#0B1F3E]/5 rounded-lg flex items-center justify-center mb-5 group-hover:bg-[#C8A86C]/10 transition-colors">
                  <benefit.icon className="w-6 h-6 text-[#0B1F3E] group-hover:text-[#C8A86C] transition-colors" />
                </div>
                <h3 className="font-bold text-[#0B1F3E] text-lg mb-3">{benefit.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-[#C8A86C] font-semibold text-sm uppercase tracking-widest mb-3">
              Partnership Process
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0B1F3E] leading-tight tracking-tight">
              How the Partnership Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step) => (
              <div key={step.step} className="bg-white p-7 rounded-xl border border-gray-100 shadow-sm">
                <div className="text-4xl font-black text-[#C8A86C]/30 mb-4 leading-none">
                  {step.step}
                </div>
                <h3 className="font-bold text-[#0B1F3E] text-lg mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements & Areas */}
      <section className="py-20 md:py-28 bg-[#0B1F3E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-[#C8A86C] font-semibold text-sm uppercase tracking-widest mb-3">
                What We&apos;re Looking For
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-white leading-tight tracking-tight mb-5">
                Property Requirements
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                We&apos;re selective about the properties we take on. Quality is our commitment to
                corporate clients.
              </p>
              <ul className="space-y-3">
                {requirements.map((req) => (
                  <li key={req} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C8A86C] flex-shrink-0" />
                    <span className="text-white/70 text-sm">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[#C8A86C] font-semibold text-sm uppercase tracking-widest mb-3">
                Where We Operate
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-white leading-tight tracking-tight mb-5">
                Target Areas
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                We actively seek properties in established corporate and executive suburbs in
                Pretoria and Johannesburg.
              </p>
              <div className="space-y-6">
                {targetAreas.map((area) => (
                  <div key={area.city}>
                    <h3 className="text-white font-bold mb-3">{area.city}</h3>
                    <div className="flex flex-wrap gap-2">
                      {area.suburbs.map((suburb) => (
                        <span
                          key={suburb}
                          className="text-[#C8A86C] text-xs border border-[#C8A86C]/40 px-3 py-1.5 rounded-md"
                        >
                          {suburb}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner form */}
      <section id="partner-form" className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#C8A86C] font-semibold text-sm uppercase tracking-widest mb-3">
              Get Started
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-[#0B1F3E] leading-tight tracking-tight mb-4">
              Submit Your Property
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Fill in the details below and our team will be in touch within 2 business days.
            </p>
          </div>

          <form className="space-y-5 bg-gray-50 border border-gray-100 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="p-name"
                  className="block text-sm font-semibold text-[#0B1F3E] mb-1.5"
                >
                  Full Name *
                </label>
                <Input id="p-name" placeholder="Your full name" required />
              </div>
              <div>
                <label
                  htmlFor="p-email"
                  className="block text-sm font-semibold text-[#0B1F3E] mb-1.5"
                >
                  Email Address *
                </label>
                <Input id="p-email" type="email" placeholder="you@email.com" required />
              </div>
            </div>

            <div>
              <label
                htmlFor="p-phone"
                className="block text-sm font-semibold text-[#0B1F3E] mb-1.5"
              >
                Phone Number *
              </label>
              <Input id="p-phone" type="tel" placeholder="+27 00 000 0000" required />
            </div>

            <div>
              <label
                htmlFor="p-address"
                className="block text-sm font-semibold text-[#0B1F3E] mb-1.5"
              >
                Property Address / Area *
              </label>
              <Input id="p-address" placeholder="e.g. Waterkloof, Pretoria" required />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="p-bedrooms"
                  className="block text-sm font-semibold text-[#0B1F3E] mb-1.5"
                >
                  Number of Bedrooms *
                </label>
                <Input id="p-bedrooms" placeholder="e.g. 2" type="number" min="1" required />
              </div>
              <div>
                <label
                  htmlFor="p-furnished"
                  className="block text-sm font-semibold text-[#0B1F3E] mb-1.5"
                >
                  Furnished Status *
                </label>
                <Input id="p-furnished" placeholder="Fully / Partly / Unfurnished" required />
              </div>
            </div>

            <div>
              <label
                htmlFor="p-asking"
                className="block text-sm font-semibold text-[#0B1F3E] mb-1.5"
              >
                Expected Monthly Rental (ZAR)
              </label>
              <Input id="p-asking" placeholder="e.g. R 18,000" />
            </div>

            <div>
              <label
                htmlFor="p-notes"
                className="block text-sm font-semibold text-[#0B1F3E] mb-1.5"
              >
                Additional Notes
              </label>
              <Textarea
                id="p-notes"
                placeholder="Tell us anything else about your property..."
                rows={4}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-[#C8A86C] hover:bg-[#b8965c] text-[#0B1F3E] font-bold py-3"
            >
              Submit Property Details
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>

            <p className="text-gray-400 text-xs text-center">
              We&apos;ll respond within 2 business days. All enquiries are treated confidentially.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
