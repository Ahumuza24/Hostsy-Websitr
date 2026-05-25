import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Target, Eye, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Hostsy — Corporate Housing Infrastructure for Gauteng",
  description:
    "Hostsy is a B2B corporate housing company managing furnished apartments for companies placing employees in Pretoria and Johannesburg. Built for operational certainty.",
};

const values = [
  {
    title: "Operational Certainty",
    description:
      "We remove uncertainty from the equation. Confirmed placements, on-spec properties, zero-surprise billing. Your HR team can book and move on.",
  },
  {
    title: "Consistent Quality",
    description:
      "Every property in our portfolio meets the same standard. Executives, project teams, and diplomatic staff all receive the same calibre of accommodation.",
  },
  {
    title: "Corporate Integrity",
    description:
      "We operate as a proper business partner — invoiced, accountable, and responsive. No consumer-market workarounds or informal arrangements.",
  },
  {
    title: "People First",
    description:
      "Relocation is hard. An employee arriving in a new city needs to feel settled, not stressed. We take housing off their plate so they can focus on the work.",
  },
];

export default function AboutPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative bg-[#0B1F3E] pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1560185127-6a7aa2f02bff?auto=format&fit=crop&w=1920&q=80"
            alt="Executive apartment interior"
            fill
            sizes="100vw"
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
            About Hostsy
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-5 max-w-3xl">
            Corporate Housing Infrastructure
            <span className="block text-[#C8A86C]">Built for Gauteng.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mb-8 font-light">
            Hostsy is a B2B corporate housing company. We manage a portfolio of premium furnished
            apartments for companies placing employees in Pretoria and Johannesburg.
          </p>
          <Link href="/contact#request">
            <Button className="bg-[#C8A86C] hover:bg-[#b8965c] text-[#0B1F3E] font-bold px-8">
              Work With Us
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#C8A86C] font-semibold text-sm uppercase tracking-widest mb-3">
                Who We Are
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-[#0B1F3E] leading-tight tracking-tight mb-5">
                A Housing Partner Built for Business
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed text-base">
                <p>
                  Hostsy was founded to solve a persistent gap in the Gauteng market: companies
                  needed a professional, B2B-grade housing partner for their mobile workforce — not
                  hotels that charge per night, not Airbnb with its inconsistency, not the
                  complexity of managing private leases.
                </p>
                <p>
                  We lease furnished apartments across Pretoria and Johannesburg&apos;s key
                  corporate and executive suburbs. We manage them to a high standard and place
                  vetted corporate tenants — executives, project teams, diplomatic staff — placed
                  by the companies that need them.
                </p>
                <p>
                  The result: companies get a single, accountable housing partner. Landlords get
                  guaranteed rent and zero vacancy. Employees arrive to a home that is ready.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=800&q=80"
                alt="Premium corporate apartment"
                width={600}
                height={450}
                className="rounded-xl object-cover w-full shadow-lg"
              />
              <div className="absolute -bottom-4 -left-4 bg-[#C8A86C] text-[#0B1F3E] p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-black">Gauteng</div>
                <div className="text-xs font-semibold uppercase tracking-wide">
                  Pretoria &amp; Johannesburg
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm">
              <Target className="w-8 h-8 text-[#C8A86C] mb-5" />
              <h3 className="text-xl font-black text-[#0B1F3E] mb-4">Our Mission</h3>
              <p className="text-gray-500 leading-relaxed">
                To be the most reliable corporate housing partner in Gauteng — making employee
                accommodation a solved problem for every company we work with.
              </p>
            </div>
            <div className="bg-[#0B1F3E] p-10 rounded-2xl shadow-sm">
              <Eye className="w-8 h-8 text-[#C8A86C] mb-5" />
              <h3 className="text-xl font-black text-white mb-4">Our Vision</h3>
              <p className="text-white/70 leading-relaxed">
                A Gauteng where every company — from a mining group to a diplomatic mission —
                has access to premium corporate housing that meets their standards, every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-[#C8A86C] font-semibold text-sm uppercase tracking-widest mb-3">
              How We Operate
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0B1F3E] leading-tight tracking-tight mb-5">
              Operating Principles
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              These are not aspirational values. They are operating principles that shape every
              placement, every property, and every interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-8 border border-gray-100 rounded-xl hover:border-[#C8A86C]/40 hover:shadow-sm transition-all"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#C8A86C] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-[#0B1F3E] text-lg mb-2">{value.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B Focus */}
      <section className="py-20 md:py-28 bg-[#0B1F3E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#C8A86C] font-semibold text-sm uppercase tracking-widest mb-3">
                Our Focus
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-white leading-tight tracking-tight mb-5">
                Built for B2B. Not for Tourists.
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Everything about Hostsy is designed for business use — the invoicing structure, the
                tenant profile, the management standards, the response times. We do not serve the
                leisure market.
              </p>
              <ul className="space-y-3">
                {[
                  "Monthly invoicing to your company, not individual receipts",
                  "Tenants are employed professionals, not tourists",
                  "Account manager who knows your requirements",
                  "Properties managed to a corporate standard",
                  "Urgent placements handled within 48 hours",
                  "Contract-grade master lease agreements with landlords",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#C8A86C] flex-shrink-0" />
                    <span className="text-white/70 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80"
                alt="Modern apartment kitchen"
                width={600}
                height={450}
                className="rounded-xl object-cover w-full shadow-lg opacity-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-10 md:p-14 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-[#0B1F3E] mb-4 tracking-tight">
              Ready to Work Together?
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed max-w-xl mx-auto mb-8">
              Whether you need accommodation for your employees or want to partner as a landlord,
              we want to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact#request">
                <Button className="bg-[#C8A86C] hover:bg-[#b8965c] text-[#0B1F3E] font-bold px-8">
                  Request Accommodation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-[#0B1F3E] text-[#0B1F3E] hover:bg-[#0B1F3E] hover:text-white px-8"
                >
                  Contact Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
