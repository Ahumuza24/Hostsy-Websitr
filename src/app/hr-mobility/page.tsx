import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2,
  ArrowRight,
  AlertCircle,
  Clock,
  Users,
  FileText,
  Phone,
  Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title: "For HR & Mobility Teams — Streamlined Corporate Housing Management",
  description:
    "Hostsy removes the housing burden from HR and mobility teams. Single point of contact, ready-to-move-in apartments, standardised quality, and direct corporate billing.",
};

const painPoints = [
  {
    problem: "Hotel costs spiral after 2 weeks",
    solution:
      "Our corporate apartments cost 40–60% less than equivalent hotels for stays of 30+ days. Fixed monthly rate, predictable budget.",
  },
  {
    problem: "Airbnb is inconsistent and unreliable",
    solution:
      "No Airbnb surprises. Every Hostsy apartment meets the same quality standard. Your employee arrives to a professionally managed home.",
  },
  {
    problem: "HR teams spend hours coordinating housing",
    solution:
      "One call or email to us. We handle sourcing, setup, check-in, maintenance, billing, and any issues. Your team is removed from the loop.",
  },
  {
    problem: "Finance won't accept Airbnb receipts",
    solution:
      "We invoice your company directly, monthly, with compliant invoices. No personal receipts, no reimbursements, no credit card spend to reconcile.",
  },
  {
    problem: "Housing quality varies wildly",
    solution:
      "All Hostsy properties are inspected, furnished to a standard, and maintained continuously. Executive-grade quality, consistently.",
  },
  {
    problem: "Late notice relocations are a nightmare",
    solution:
      "We can confirm placement within 48 hours for most requests. Urgent placements handled same-day when availability allows.",
  },
];

const features = [
  {
    icon: Phone,
    title: "One Account Manager",
    description:
      "A dedicated person who knows your company's requirements, preferences, and standard. No explaining yourself every time.",
  },
  {
    icon: CheckCircle2,
    title: "Ready to Move In",
    description:
      "Every apartment is set up and inspected before your employee arrives. Keys, wifi password, welcome pack — all ready.",
  },
  {
    icon: Users,
    title: "Multi-Employee Coordination",
    description:
      "Placing 10 people across 3 cities simultaneously? We handle the full coordination and provide consolidated billing.",
  },
  {
    icon: FileText,
    title: "Clean Monthly Invoicing",
    description:
      "One invoice per property per month. Company name on the invoice. Compatible with your finance system.",
  },
  {
    icon: Shield,
    title: "Consistent Quality Standard",
    description:
      "Every property in our portfolio meets our quality checklist. Your employees get the same calibre of accommodation every time.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description:
      "Most requests confirmed within 48 hours. We maintain availability buffers for corporate clients to handle urgent needs.",
  },
];

const industries = [
  "Mining & Resources",
  "Banking & Finance",
  "Management Consulting",
  "Infrastructure & Construction",
  "Pharmaceutical & Life Sciences",
  "Technology",
  "Government & Public Sector",
  "Diplomatic Missions",
];

export default function HRMobilityPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative bg-[#0B1F3E] pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
            alt="Modern corporate office"
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
            For HR &amp; Mobility Teams
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-5 max-w-3xl">
            Remove Housing from
            <span className="block text-[#C8A86C]">Your Relocation Checklist</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mb-8 font-light">
            Hostsy is your single point of contact for all corporate housing needs. We source,
            manage, and maintain — you get a clean invoice and a happy employee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact#request">
              <Button className="bg-[#C8A86C] hover:bg-[#b8965c] text-[#0B1F3E] font-bold px-8">
                Submit a Requirement
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-white/35 bg-transparent px-8 text-white hover:bg-white hover:text-[#0B1F3E]"
              >
                Talk to Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-[#C8A86C] font-semibold text-sm uppercase tracking-widest mb-3">
              Your Problems. Our Solutions.
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0B1F3E] leading-tight tracking-tight mb-5">
              We Know the Pain Points
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              HR and mobility teams deal with the same housing headaches every time. Here is how
              Hostsy eliminates each one.
            </p>
          </div>

          <div className="space-y-4">
            {painPoints.map((item) => (
              <div
                key={item.problem}
                className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-gray-100 rounded-xl overflow-hidden"
              >
                <div className="p-6 bg-gray-50 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium text-sm">{item.problem}</span>
                </div>
                <div className="p-6 bg-white flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C8A86C] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm leading-relaxed">{item.solution}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-[#C8A86C] font-semibold text-sm uppercase tracking-widest mb-3">
              How We Work
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0B1F3E] leading-tight tracking-tight">
              Streamlined Housing Management
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white p-7 rounded-xl border border-gray-100 shadow-sm">
                <feature.icon className="w-7 h-7 text-[#C8A86C] mb-4" />
                <h3 className="font-bold text-[#0B1F3E] text-lg mb-3">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 md:py-28 bg-[#0B1F3E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#C8A86C] font-semibold text-sm uppercase tracking-widest mb-3">
                Industries Served
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-5">
                Built for Complex Corporate Environments
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                We work with companies across all major industries operating in Gauteng — from
                multinational mining groups to diplomatic missions.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {industries.map((industry) => (
                  <div key={industry} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C8A86C] flex-shrink-0" />
                    <span className="text-white/70 text-sm">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80"
                alt="Executive workspace"
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
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-10 md:p-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-[#0B1F3E] mb-4 tracking-tight">
                  Ready to Simplify Your Relocation Process?
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed">
                  Submit your first requirement and see how quickly we can have accommodation
                  confirmed for your employee.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <Link href="/contact#request">
                  <Button className="w-full bg-[#C8A86C] hover:bg-[#b8965c] text-[#0B1F3E] font-bold">
                    Submit a Requirement
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="w-full border-[#0B1F3E] text-[#0B1F3E] hover:bg-[#0B1F3E] hover:text-white"
                  >
                    Schedule a Call
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
