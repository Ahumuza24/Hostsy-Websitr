import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, ArrowRight, Building2, Users, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Locations — Corporate Housing in Pretoria & Johannesburg",
  description:
    "Hostsy manages corporate apartments across Pretoria and Johannesburg. Waterkloof, Brooklyn, Arcadia, Sandton, Rosebank, and more.",
};

const pretoraLocations = [
  {
    name: "Waterkloof",
    description:
      "Pretoria's most prestigious residential suburb. Home to embassies, ambassadorial residences, and senior executives. Security-conscious with easy access to Union Buildings and the CBD.",
    highlights: ["Diplomatic hub", "Top security estates", "Prestigious address", "Near Union Buildings"],
    image:
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Brooklyn",
    description:
      "Upmarket suburb popular with professionals and executives. Excellent restaurants, shops, and business services. Close to Pretoria CBD and major arterials.",
    highlights: ["Professional demographic", "Strong amenities", "Near CBD", "Safe environment"],
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6d5b8c48?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Arcadia",
    description:
      "Central Pretoria suburb with proximity to government departments, embassies, and the CBD. Practical for diplomatic placements and government-adjacent industries.",
    highlights: ["Government proximity", "Diplomatic area", "CBD access", "Central location"],
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Menlyn",
    description:
      "East Pretoria's commercial hub. Close to Menlyn Maine mixed-use development, ideal for corporate teams working in east Pretoria's growing business district.",
    highlights: ["Business district", "Modern developments", "Retail & dining", "Growth area"],
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
  },
];

const johanLocations = [
  {
    name: "Sandton",
    description:
      "Africa's richest square mile. Home to JSE, major bank headquarters, multinational offices, and premium residential towers. The first choice for corporate executives in Johannesburg.",
    highlights: ["Financial capital", "World-class amenities", "Corporate hub", "Premium apartments"],
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Rosebank",
    description:
      "Upmarket mixed-use suburb with strong corporate presence. Popular with consulting firms, media companies, and professional services. Excellent walkability and lifestyle amenities.",
    highlights: ["Mixed-use urban", "Consulting firms", "Great walkability", "Lifestyle amenities"],
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Illovo & Morningside",
    description:
      "Quiet, established residential suburbs close to Sandton. Preferred by senior executives who want a residential feel with easy access to the Sandton business district.",
    highlights: ["Residential feel", "Senior executive area", "Near Sandton", "Established suburb"],
    image:
      "https://images.unsplash.com/photo-1560185127-6a7aa2f02bff?auto=format&fit=crop&w=800&q=80",
  },
];

export default function LocationsPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative bg-[#0B1F3E] pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1577948000111-9c970dfe3743?auto=format&fit=crop&w=1920&q=80"
            alt="Gauteng skyline"
            fill
            sizes="100vw"
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3E] to-[#0B1F3E]/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge
            variant="outline"
            className="mb-6 border-[#C8A86C]/50 text-[#C8A86C] bg-[#C8A86C]/10 font-medium tracking-wide text-xs uppercase"
          >
            Where We Operate
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-5 max-w-3xl">
            Corporate Housing Across
            <span className="block text-[#C8A86C]">Gauteng&apos;s Key Corridors</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mb-8 font-light">
            Premium furnished apartments in Pretoria and Johannesburg&apos;s most important
            business and executive suburbs.
          </p>
          <Link href="/contact#request">
            <Button className="bg-[#C8A86C] hover:bg-[#b8965c] text-[#0B1F3E] font-bold px-8">
              Request Accommodation
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="bg-[#C8A86C] py-4">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[#0B1F3E] font-bold text-sm md:text-base tracking-widest uppercase">
            Pretoria · Johannesburg · Gauteng
          </p>
        </div>
      </section>

      {/* Pretoria */}
      <section id="pretoria" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-5 h-5 text-[#C8A86C]" />
              <p className="text-[#C8A86C] font-semibold text-sm uppercase tracking-widest">
                City One
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0B1F3E] leading-tight tracking-tight mb-5">
              Pretoria
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl">
              {[
                {
                  icon: Building2,
                  title: "Administrative Capital",
                  sub: "Government & public sector hub",
                },
                { icon: Globe, title: "Diplomatic Centre", sub: "150+ foreign missions" },
                { icon: Users, title: "Corporate Growth", sub: "Mining, banking, pharma HQs" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <item.icon className="w-5 h-5 text-[#C8A86C] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-[#0B1F3E] text-sm">{item.title}</div>
                    <div className="text-gray-500 text-xs">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pretoraLocations.map((loc) => (
              <div
                key={loc.name}
                className="border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow"
              >
                <Image
                  src={loc.image}
                  alt={`${loc.name} corporate apartment`}
                  width={600}
                  height={280}
                  className="w-full h-48 object-cover"
                />
                <div className="p-7">
                  <h3 className="text-xl font-black text-[#0B1F3E] mb-2">{loc.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{loc.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {loc.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-[#0B1F3E] bg-gray-50 text-xs px-2.5 py-1 rounded border border-gray-200"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Johannesburg */}
      <section id="johannesburg" className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-5 h-5 text-[#C8A86C]" />
              <p className="text-[#C8A86C] font-semibold text-sm uppercase tracking-widest">
                City Two
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0B1F3E] leading-tight tracking-tight mb-5">
              Johannesburg
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl">
              {[
                {
                  icon: Building2,
                  title: "Financial Capital",
                  sub: "JSE, major banks & multinationals",
                },
                { icon: Users, title: "Business Hub", sub: "Consulting, mining, tech HQs" },
                { icon: Globe, title: "International Access", sub: "OR Tambo 25 min from Sandton" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <item.icon className="w-5 h-5 text-[#C8A86C] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-[#0B1F3E] text-sm">{item.title}</div>
                    <div className="text-gray-500 text-xs">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {johanLocations.map((loc) => (
              <div
                key={loc.name}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow"
              >
                <Image
                  src={loc.image}
                  alt={`${loc.name} corporate apartment`}
                  width={600}
                  height={280}
                  className="w-full h-48 object-cover"
                />
                <div className="p-7">
                  <h3 className="text-xl font-black text-[#0B1F3E] mb-2">{loc.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{loc.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {loc.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-[#0B1F3E] bg-gray-50 text-xs px-2.5 py-1 rounded border border-gray-200"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0B1F3E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
            Need Accommodation in a Specific Area?
          </h2>
          <p className="text-white/60 text-lg leading-relaxed max-w-xl mx-auto mb-8">
            Tell us where your employee needs to be. We&apos;ll find the right apartment in the
            right location.
          </p>
          <Link href="/contact#request">
            <Button className="bg-[#C8A86C] hover:bg-[#b8965c] text-[#0B1F3E] font-bold px-8">
              Request Accommodation
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
