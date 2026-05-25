import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Hostsy — Request Corporate Accommodation",
  description:
    "Submit an accommodation request or get in touch with the Hostsy team. We respond to all corporate housing enquiries within 4 business hours.",
};

export default function ContactPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="bg-[#0B1F3E] pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge
            variant="outline"
            className="mb-6 border-[#C8A86C]/50 text-[#C8A86C] bg-[#C8A86C]/10 font-medium tracking-wide text-xs uppercase"
          >
            Get In Touch
          </Badge>
          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mb-5 max-w-2xl">
            Request Accommodation or
            <span className="block text-[#C8A86C]">Talk to Our Team</span>
          </h1>
          <p className="text-lg text-white/70 leading-relaxed max-w-xl font-light">
            Submit a requirement below or reach out directly. We respond to all enquiries within 4
            business hours.
          </p>
        </div>
      </section>

      {/* Contact info bar */}
      <section className="bg-[#C8A86C] py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-6 justify-center md:justify-start items-center">
            <a
              href="tel:+27000000000"
              className="flex items-center gap-2 text-[#0B1F3E] font-semibold text-sm hover:opacity-70 transition-opacity"
            >
              <Phone className="w-4 h-4" />
              +27 00 000 0000
            </a>
            <a
              href="mailto:info@hostsy.co.za"
              className="flex items-center gap-2 text-[#0B1F3E] font-semibold text-sm hover:opacity-70 transition-opacity"
            >
              <Mail className="w-4 h-4" />
              info@hostsy.co.za
            </a>
            <span className="flex items-center gap-2 text-[#0B1F3E] font-semibold text-sm">
              <Clock className="w-4 h-4" />
              Mon–Fri, 8am–6pm SAST
            </span>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Sidebar */}
            <div className="space-y-8">
              <div>
                <p className="text-[#C8A86C] font-semibold text-sm uppercase tracking-widest mb-3">
                  Contact Options
                </p>
                <h2 className="text-2xl font-black text-[#0B1F3E] leading-tight mb-3">
                  How to Reach Us
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Use the form for new accommodation requests. For urgent needs, call or WhatsApp
                  directly.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#0B1F3E]/5 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-[#C8A86C]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#0B1F3E] text-sm">Phone</div>
                    <a
                      href="tel:+27000000000"
                      className="text-gray-500 text-sm hover:text-[#C8A86C] transition-colors"
                    >
                      +27 00 000 0000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#0B1F3E]/5 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-[#C8A86C]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#0B1F3E] text-sm">Email</div>
                    <a
                      href="mailto:info@hostsy.co.za"
                      className="text-gray-500 text-sm hover:text-[#C8A86C] transition-colors"
                    >
                      info@hostsy.co.za
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#0B1F3E]/5 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-[#C8A86C]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#0B1F3E] text-sm">Operations</div>
                    <div className="text-gray-500 text-sm">
                      Pretoria &amp; Johannesburg, Gauteng
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-gray-50 border border-gray-100 rounded-xl p-6">
                <MessageCircle className="w-6 h-6 text-[#25D366] mb-3" />
                <h3 className="font-bold text-[#0B1F3E] mb-2">WhatsApp</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  For urgent placements or quick questions, message us on WhatsApp.
                </p>
                <a
                  href="https://wa.me/27000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-[#25D366] hover:bg-[#1da851] text-white font-bold">
                    <MessageCircle className="mr-2 w-4 h-4" />
                    WhatsApp Us
                  </Button>
                </a>
              </div>

              {/* Landlord link */}
              <div className="bg-[#0B1F3E] rounded-xl p-6">
                <h3 className="font-bold text-white mb-2 text-sm">Are you a landlord?</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  If you have a property you&apos;d like to partner on, use our dedicated landlord
                  submission form.
                </p>
                <Link href="/landlords#partner-form">
                  <Button
                    variant="outline"
                    className="w-full border-[#C8A86C]/50 text-[#C8A86C] hover:bg-[#C8A86C]/10 text-sm"
                  >
                    Submit a Property
                    <ArrowRight className="ml-2 w-3 h-3" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <p className="text-[#C8A86C] font-semibold text-sm uppercase tracking-widest mb-2">
                  Accommodation Request
                </p>
                <h2 className="text-2xl md:text-3xl font-black text-[#0B1F3E] leading-tight">
                  Submit a Requirement
                </h2>
              </div>

              <form
                id="request"
                className="space-y-5 bg-gray-50 border border-gray-100 rounded-2xl p-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="c-name"
                      className="block text-sm font-semibold text-[#0B1F3E] mb-1.5"
                    >
                      Full Name *
                    </label>
                    <Input id="c-name" placeholder="Your full name" required />
                  </div>
                  <div>
                    <label
                      htmlFor="c-company"
                      className="block text-sm font-semibold text-[#0B1F3E] mb-1.5"
                    >
                      Company Name *
                    </label>
                    <Input id="c-company" placeholder="Your company" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="c-email"
                      className="block text-sm font-semibold text-[#0B1F3E] mb-1.5"
                    >
                      Work Email *
                    </label>
                    <Input id="c-email" type="email" placeholder="you@company.com" required />
                  </div>
                  <div>
                    <label
                      htmlFor="c-phone"
                      className="block text-sm font-semibold text-[#0B1F3E] mb-1.5"
                    >
                      Phone Number *
                    </label>
                    <Input id="c-phone" type="tel" placeholder="+27 00 000 0000" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="c-location"
                      className="block text-sm font-semibold text-[#0B1F3E] mb-1.5"
                    >
                      Preferred Location *
                    </label>
                    <Input
                      id="c-location"
                      placeholder="e.g. Waterkloof, Pretoria"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="c-bedrooms"
                      className="block text-sm font-semibold text-[#0B1F3E] mb-1.5"
                    >
                      Bedrooms Required *
                    </label>
                    <Input
                      id="c-bedrooms"
                      type="number"
                      placeholder="e.g. 2"
                      min="1"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="c-checkin"
                      className="block text-sm font-semibold text-[#0B1F3E] mb-1.5"
                    >
                      Move-In Date *
                    </label>
                    <Input id="c-checkin" type="date" required />
                  </div>
                  <div>
                    <label
                      htmlFor="c-duration"
                      className="block text-sm font-semibold text-[#0B1F3E] mb-1.5"
                    >
                      Estimated Duration *
                    </label>
                    <Input id="c-duration" placeholder="e.g. 3 months" required />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="c-employees"
                    className="block text-sm font-semibold text-[#0B1F3E] mb-1.5"
                  >
                    Number of Employees / Units
                  </label>
                  <Input
                    id="c-employees"
                    placeholder="e.g. 1 executive, or 4-person team"
                  />
                </div>

                <div>
                  <label
                    htmlFor="c-notes"
                    className="block text-sm font-semibold text-[#0B1F3E] mb-1.5"
                  >
                    Additional Requirements
                  </label>
                  <Textarea
                    id="c-notes"
                    placeholder="Any specific requirements — location preferences, budget range, special needs, etc."
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#C8A86C] hover:bg-[#b8965c] text-[#0B1F3E] font-bold py-3"
                >
                  Submit Requirement
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>

                <p className="text-gray-400 text-xs text-center">
                  We respond within 4 business hours. All enquiries are treated confidentially.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Response time guarantee */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              {
                stat: "4 hrs",
                label: "Response time",
                sub: "For all new accommodation requests",
              },
              {
                stat: "48 hrs",
                label: "Placement confirmation",
                sub: "For most standard placements",
              },
              {
                stat: "Same day",
                label: "Urgent placements",
                sub: "When availability allows",
              },
            ].map((item) => (
              <div
                key={item.stat}
                className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm"
              >
                <div className="text-3xl font-black text-[#C8A86C] mb-1">{item.stat}</div>
                <div className="font-bold text-[#0B1F3E] text-lg mb-1">{item.label}</div>
                <div className="text-gray-500 text-sm">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
