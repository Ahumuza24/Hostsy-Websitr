"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Corporate Housing", href: "/corporate-housing" },
  { label: "HR & Mobility", href: "/hr-mobility" },
  { label: "For Landlords", href: "/landlords" },
  { label: "Locations", href: "/locations" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#0B1F3E] rounded-sm flex items-center justify-center flex-shrink-0">
              <span className="text-[#C8A86C] font-black text-sm">H</span>
            </div>
            <span
              className={cn(
                "font-black text-xl tracking-widest uppercase transition-colors duration-300",
                scrolled ? "text-[#0B1F3E]" : "text-white"
              )}
            >
              HOSTSY
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded transition-colors duration-200",
                  pathname === link.href
                    ? scrolled
                      ? "text-[#0B1F3E] bg-gray-50"
                      : "text-[#C8A86C]"
                    : scrolled
                    ? "text-gray-600 hover:text-[#0B1F3E] hover:bg-gray-50"
                    : "text-white/85 hover:text-white hover:bg-white/10"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/contact">
              <Button
                variant="outline"
                size="sm"
                className={cn(
                  "font-medium transition-all duration-200",
                  scrolled
                    ? "border-[#0B1F3E] text-[#0B1F3E] hover:bg-[#0B1F3E] hover:text-white"
                    : "border-white/50 text-white bg-transparent hover:bg-white hover:text-[#0B1F3E]"
                )}
              >
                Contact
              </Button>
            </Link>
            <Link href="/contact#request">
              <Button
                size="sm"
                className="bg-[#C8A86C] hover:bg-[#b8965c] text-[#0B1F3E] font-bold px-5 shadow-sm"
              >
                Request Accommodation
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              className={cn(
                "lg:hidden p-2 rounded-md transition-colors",
                scrolled
                  ? "text-[#0B1F3E] hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              )}
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-[#0B1F3E] border-none p-0">
              <div className="flex flex-col h-full px-6 pt-6">
                <div className="flex items-center justify-between mb-8">
                  <span className="font-black text-xl tracking-widest uppercase text-white">
                    HOSTSY
                  </span>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="p-2 text-white/70 hover:text-white"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="flex flex-col gap-1 flex-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "px-4 py-3 text-base font-medium rounded-md transition-colors",
                        pathname === link.href
                          ? "text-[#C8A86C] bg-white/5"
                          : "text-white/80 hover:text-white hover:bg-white/5"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                <div className="flex flex-col gap-3 pt-6 border-t border-white/10 pb-8">
                  <Link href="/contact" onClick={() => setMobileOpen(false)}>
                    <Button
                      variant="outline"
                      className="w-full border-white/30 text-white hover:bg-white/10"
                    >
                      Contact
                    </Button>
                  </Link>
                  <Link href="/contact#request" onClick={() => setMobileOpen(false)}>
                    <Button className="w-full bg-[#C8A86C] hover:bg-[#b8965c] text-[#0B1F3E] font-bold">
                      Request Accommodation
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
