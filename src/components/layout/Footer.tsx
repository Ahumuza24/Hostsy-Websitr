import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const companyLinks = [
  { label: "Corporate Housing", href: "/corporate-housing" },
  { label: "For HR & Mobility Teams", href: "/hr-mobility" },
  { label: "For Landlords", href: "/landlords" },
  { label: "Locations", href: "/locations" },
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
    <footer className="bg-[#0B1F3E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-[#C8A86C] rounded-sm flex items-center justify-center flex-shrink-0">
                <span className="text-[#0B1F3E] font-black text-sm">H</span>
              </div>
              <span className="font-black text-xl tracking-widest uppercase text-white">
                HOSTSY
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Corporate housing infrastructure for modern companies. Premium furnished apartments
              across Pretoria and Johannesburg, fully managed for corporate relocations and
              extended stays.
            </p>
            <a
              href="https://wa.me/27000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white text-sm font-medium px-4 py-2.5 rounded-md transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
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
                  href="tel:+27000000000"
                  className="flex items-center gap-3 text-white/60 hover:text-[#C8A86C] text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#C8A86C] flex-shrink-0" />
                  +27 (0) 00 000 0000
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@hostsy.co.za"
                  className="flex items-center gap-3 text-white/60 hover:text-[#C8A86C] text-sm transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#C8A86C] flex-shrink-0" />
                  info@hostsy.co.za
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
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
