"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BedDouble, Building2, Check, Maximize2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type GalleryCategory = "All" | "Suites" | "Living" | "Work-ready" | "Locations";

type GalleryImage = {
  title: string;
  location: string;
  category: Exclude<GalleryCategory, "All">;
  src: string;
  alt: string;
  detail: string;
};

const categories: GalleryCategory[] = ["All", "Suites", "Living", "Work-ready", "Locations"];

const galleryImages: GalleryImage[] = [
  {
    title: "Executive Apartment Arrival",
    location: "Pretoria",
    category: "Living",
    src: "/hostsy-hero-apartment.jpg",
    alt: "Premium furnished Hostsy apartment living area",
    detail: "Soft lighting, calm finishes, and move-in ready comfort for senior placements.",
  },
  {
    title: "Private Rest Suite",
    location: "Waterkloof",
    category: "Suites",
    src: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1400&q=82",
    alt: "Warm executive bedroom suite",
    detail: "Hotel-grade sleep environment with residential privacy and weekly service readiness.",
  },
  {
    title: "Corporate Lounge Setting",
    location: "Sandton",
    category: "Living",
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=82",
    alt: "Modern furnished apartment lounge",
    detail: "Designed for decompression after long assignment days without feeling temporary.",
  },
  {
    title: "Focused Work Corner",
    location: "Brooklyn",
    category: "Work-ready",
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=82",
    alt: "Premium work-ready apartment desk",
    detail: "Reliable work zones for consultants, project teams, and relocation transitions.",
  },
  {
    title: "Dining and Hosting Flow",
    location: "Rosebank",
    category: "Living",
    src: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1400&q=82",
    alt: "Elegant apartment dining and living space",
    detail: "A proper residence for longer stays, not a room dressed up as one.",
  },
  {
    title: "Quiet Bedroom Palette",
    location: "Arcadia",
    category: "Suites",
    src: "https://images.unsplash.com/photo-1560185008-b033106af5c3?auto=format&fit=crop&w=1400&q=82",
    alt: "Neutral premium bedroom with layered textiles",
    detail: "Neutral tones, storage, and considered lighting for assignment-length comfort.",
  },
  {
    title: "Gauteng Business Base",
    location: "Johannesburg",
    category: "Locations",
    src: "https://images.unsplash.com/photo-1577948000111-9c970dfe3743?auto=format&fit=crop&w=1400&q=82",
    alt: "Gauteng city skyline",
    detail: "Positioned around Pretoria and Johannesburg's most important corporate corridors.",
  },
  {
    title: "Premium Kitchen Readiness",
    location: "Menlyn",
    category: "Work-ready",
    src: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1400&q=82",
    alt: "Modern serviced apartment kitchen",
    detail: "Fully furnished stays with the practical details already handled.",
  },
];

export default function GalleryExperience() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");
  const [featured, setFeatured] = useState(galleryImages[0]);

  const filteredImages = useMemo(() => {
    if (activeCategory === "All") {
      return galleryImages;
    }

    return galleryImages.filter((image) => image.category === activeCategory);
  }, [activeCategory]);

  const visibleFeatured = filteredImages.some((image) => image.title === featured.title)
    ? featured
    : filteredImages[0];

  const handleCategoryChange = (category: GalleryCategory) => {
    setActiveCategory(category);
    const nextFeatured =
      category === "All"
        ? galleryImages[0]
        : galleryImages.find((image) => image.category === category) ?? galleryImages[0];
    setFeatured(nextFeatured);
  };

  return (
    <main className="overflow-x-hidden bg-white">
      <section className="relative min-h-[78vh] overflow-hidden bg-[#07182f] pt-28 pb-16 text-white">
        <div className="absolute inset-0">
          <Image
            src="/hostsy-hero-apartment.jpg"
            alt="Premium furnished Hostsy apartment"
            fill
            sizes="100vw"
            className="animate-hero-image object-cover opacity-[0.38]"
            priority
          />
          <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(7,24,47,0.97)_0%,rgba(7,24,47,0.78)_48%,rgba(7,24,47,0.42)_100%)]" />
          <div className="hero-dot-grid absolute inset-0 opacity-[0.07]" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl items-end gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-white md:text-6xl lg:text-7xl">
              Hostsy Gallery
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-light leading-8 text-white/76 md:text-xl">
              A closer look at the calm, fully furnished residences Hostsy prepares for corporate
              relocations, executive assignments, and extended stays across Gauteng.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact#request">
                <Button className="h-12 bg-[#C8A86C] px-7 font-bold text-[#0B1F3E] shadow-[0_18px_42px_rgba(200,168,108,0.28)] hover:bg-[#d8bb82]">
                  Request a Curated Stay
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/locations">
                <Button
                  variant="outline"
                  className="h-12 border-white/45 bg-white/5 px-7 text-white hover:bg-white hover:text-[#0B1F3E]"
                >
                  View Locations
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 22 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
            className="glass-panel relative hidden overflow-hidden rounded-[2rem] p-3 lg:block"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.55rem]">
              <Image
                src={visibleFeatured.src}
                alt={visibleFeatured.alt}
                fill
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07182f]/78 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#C8A86C]">
                  {visibleFeatured.location}
                </p>
                <h2 className="mt-2 text-3xl font-black text-white">{visibleFeatured.title}</h2>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="premium-grid bg-[#f8f7f3] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <h2 className="text-3xl font-black tracking-tight text-[#0B1F3E] md:text-5xl">
                Residences with a service standard
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
                Browse the spaces, amenities, and location cues that make Hostsy stays feel
                considered from day one.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => handleCategoryChange(category)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-bold transition-all duration-300",
                    activeCategory === category
                      ? "border-[#0B1F3E] bg-[#0B1F3E] text-white shadow-[0_14px_30px_rgba(11,31,62,0.18)]"
                      : "border-[#0B1F3E]/12 bg-white text-[#0B1F3E] hover:border-[#C8A86C] hover:text-[#9b7539]"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.13fr_0.87fr]">
            <motion.div
              key={visibleFeatured.title}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="overflow-hidden rounded-[1.7rem] border border-[#0B1F3E]/10 bg-white shadow-[0_26px_70px_rgba(11,31,62,0.12)]"
            >
              <div className="relative aspect-[16/11] overflow-hidden">
                <Image
                  src={visibleFeatured.src}
                  alt={visibleFeatured.alt}
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#0B1F3E] backdrop-blur">
                  <Maximize2 className="h-3.5 w-3.5 text-[#C8A86C]" />
                  Featured
                </div>
              </div>
              <div className="grid gap-6 p-6 md:grid-cols-[1fr_auto] md:p-8">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.24em] text-[#C8A86C]">
                    {visibleFeatured.category} · {visibleFeatured.location}
                  </p>
                  <h3 className="mt-2 text-3xl font-black text-[#0B1F3E]">
                    {visibleFeatured.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 md:text-base">
                    {visibleFeatured.detail}
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-3 text-center md:w-60">
                  {[
                    { icon: BedDouble, label: "Rested" },
                    { icon: Building2, label: "Placed" },
                    { icon: Sparkles, label: "Managed" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-2xl bg-[#f8f7f3] p-3">
                      <item.icon className="mx-auto h-5 w-5 text-[#C8A86C]" />
                      <p className="mt-2 text-[11px] font-black uppercase tracking-[0.14em] text-[#0B1F3E]">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-2">
              {filteredImages.map((image, index) => (
                <motion.button
                  key={image.title}
                  type="button"
                  onClick={() => setFeatured(image)}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.04, ease: "easeOut" }}
                  className={cn(
                    "group relative overflow-hidden rounded-2xl border bg-white text-left shadow-[0_18px_45px_rgba(11,31,62,0.08)] transition-all duration-300 hover:-translate-y-1",
                    visibleFeatured.title === image.title
                      ? "border-[#C8A86C] ring-2 ring-[#C8A86C]/30"
                      : "border-[#0B1F3E]/10"
                  )}
                  aria-label={`View ${image.title}`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 1024px) 22vw, (min-width: 640px) 30vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.08]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07182f]/72 via-transparent to-transparent" />
                    {visibleFeatured.title === image.title ? (
                      <div className="absolute right-3 top-3 rounded-full bg-[#C8A86C] p-1.5 text-[#0B1F3E]">
                        <Check className="h-4 w-4" />
                      </div>
                    ) : null}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C8A86C]">
                      {image.location}
                    </p>
                    <p className="mt-1 text-sm font-black leading-tight text-white">
                      {image.title}
                    </p>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0B1F3E] py-16 text-white md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
          <div>
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">
              Build a stay around the assignment.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/68">
              Hostsy matches housing, location, service cadence, and reporting needs for each
              relocation or extended-stay brief.
            </p>
          </div>
          <Link href="/contact#request">
            <Button className="h-12 bg-[#C8A86C] px-7 font-bold text-[#0B1F3E] hover:bg-[#d8bb82]">
              Start a Request
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
