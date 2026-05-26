import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, MessageCircle, ArrowRight } from "lucide-react";

const companyLinks = [
  { label: "Corporate Housing", href: "/corporate-housing" },
  { label: "For HR & Mobility Teams", href: "/hr-mobility" },
  { label: "For Landlords", href: "/landlords" },
  { label: "Locations", href: "/locations" },
  { label: "Gallery", href: "/gallery" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const locationLinks = [
  { label: "Pretoria CBD", href: "/locations#pretoria" },
  { label: "Waterkloof", href: "/locations#waterkloof" },
  { label: "Brooklyn", href: "/locations#brooklyn" },
  { label: "Arcadia", href: "/locations#arcadia" },
  { label: "Sandton", href: "/locations#sandton" },
  { label: "Rosebank", href: "/locations#rosebank" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#07182f] text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-36 right-10 h-72 w-72 rounded-full bg-[#C8A86C]/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#C8A86C]/40 to-transparent" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src="/hostsy-logo-gold.png"
                alt=""
                width={92}
                height={92}
                className="h-24 w-24 object-contain drop-shadow-[0_22px_38px_rgba(0,0,0,0.28)]"
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Corporate housing infrastructure for modern companies. Premium furnished apartments
              across Pretoria and Johannesburg, fully managed for corporate relocations and
              extended stays.
            </p>
            <a
              href="https://wa.me/27678182968"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-4 py-2.5 text-sm font-bold text-white shadow-[0_16px_34px_rgba(37,211,102,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1ebe5d]"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-[#C8A86C] text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Locations
            </h3>
            <ul className="space-y-3">
              {locationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-[#C8A86C] text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Get In Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C8A86C] mt-0.5 flex-shrink-0" />
                <span className="text-white/60 text-sm leading-relaxed">
                  Pretoria &amp; Johannesburg<br />
                  Gauteng, South Africa
                </span>
              </li>
              <li>
                <a
                  href="tel:+27678182968"
                  className="flex items-center gap-3 text-white/60 hover:text-[#C8A86C] text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#C8A86C] flex-shrink-0" />
                  +27 67 818 2968
                </a>
              </li>
              <li>
                <a
                  href="mailto:admin@hostsy.co.za"
                  className="flex items-center gap-3 text-white/60 hover:text-[#C8A86C] text-sm transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#C8A86C] flex-shrink-0" />
                  admin@hostsy.co.za
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Hostsy Hospitality. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="text-white/40 hover:text-white/70 text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/40 hover:text-white/70 text-xs transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
