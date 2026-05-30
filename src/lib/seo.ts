import type { Metadata } from "next";

export const SITE_URL = "https://hostsy.co.za";
export const SITE_NAME = "Hostsy";
export const SITE_TITLE = "Hostsy Corporate Housing";
export const DEFAULT_OG_IMAGE = "/opengraph-image";
export const CONTACT_EMAIL = "admin@hostsy.co.za";
export const CONTACT_PHONE = "+27678182968";

export const seoKeywords = [
  "corporate housing Pretoria",
  "corporate housing Johannesburg",
  "executive accommodation Pretoria",
  "extended stay apartments Johannesburg",
  "furnished corporate apartments Gauteng",
  "relocation housing South Africa",
  "project team housing Gauteng",
  "diplomatic housing Pretoria",
];

export type SeoRoute = {
  path: string;
  title: string;
  description: string;
  keywords?: string[];
  priority: number;
  changeFrequency: "weekly" | "monthly";
};

export const seoRoutes = [
  {
    path: "/",
    title: "Corporate Housing for Relocations & Extended Stays in Gauteng",
    description:
      "Premium furnished apartments across Pretoria and Johannesburg, fully managed for executive relocations, project teams, diplomatic placements, and extended stays.",
    keywords: ["corporate housing Gauteng", "furnished apartments Pretoria", "extended stay Johannesburg"],
    priority: 1,
    changeFrequency: "weekly",
  },
  {
    path: "/about",
    title: "About Hostsy — An Operator, Not a Marketplace",
    description:
      "Hostsy is a South African corporate housing operator founded in Pretoria, managing furnished apartments under one brand, one specification, and one service standard.",
    keywords: ["about Hostsy", "corporate housing operator South Africa", "managed furnished apartments Gauteng"],
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/corporate-housing",
    title: "Corporate Housing — Apartments Engineered for Long Stays",
    description:
      "Fully furnished corporate apartments for stays from 30 nights to 36 months, managed end to end with monthly VAT billing, housekeeping, fibre, backup power, and support.",
    keywords: ["corporate housing", "long stay apartments Pretoria", "corporate apartments Johannesburg"],
    priority: 0.95,
    changeFrequency: "weekly",
  },
  {
    path: "/hr-mobility",
    title: "For HR & Mobility Teams — Relocation Without the Chaos",
    description:
      "A procurement-ready corporate housing partner for HR and mobility teams placing executives, expat hires, specialists, and project teams across Gauteng.",
    keywords: ["employee relocation housing", "global mobility South Africa", "HR relocation apartments"],
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    path: "/landlords",
    title: "For Landlords — Guaranteed Rent Partnership",
    description:
      "Master lease your premium apartment to Hostsy for fixed monthly rent, professional corporate guests, long-term occupancy, and operator-grade property care.",
    keywords: ["master lease Pretoria", "guaranteed rent Gauteng", "corporate tenant apartment lease"],
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/locations",
    title: "Locations — Pretoria & Johannesburg Corporate Housing",
    description:
      "Hostsy operates furnished corporate apartments across Waterkloof, Brooklyn, Arcadia, Menlyn, Hatfield, Sandton, Rosebank, and other Gauteng business nodes.",
    keywords: ["Pretoria corporate housing", "Johannesburg corporate housing", "Sandton furnished apartments"],
    priority: 0.85,
    changeFrequency: "weekly",
  },
  {
    path: "/gallery",
    title: "Gallery — Premium Corporate Apartments in Gauteng",
    description:
      "Browse Hostsy's furnished executive apartments, calm living spaces, work-ready suites, and Gauteng corporate housing locations.",
    keywords: ["corporate apartment gallery", "furnished apartment photos Gauteng", "executive suite Pretoria"],
    priority: 0.65,
    changeFrequency: "monthly",
  },
  {
    path: "/contact",
    title: "Contact Hostsy — Request Accommodation or Submit a Property",
    description:
      "Request corporate accommodation, submit a premium apartment, or contact Hostsy's Pretoria and Johannesburg team. Every inquiry receives a named response.",
    keywords: ["request corporate accommodation", "Hostsy contact", "submit apartment Hostsy"],
    priority: 0.9,
    changeFrequency: "monthly",
  },
] satisfies SeoRoute[];

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

export function getSeoRoute(path: string) {
  const route = seoRoutes.find((item) => item.path === path);

  if (!route) {
    throw new Error(`Missing SEO route for ${path}`);
  }

  return route;
}

export function createPageMetadata(path: string): Metadata {
  const route = getSeoRoute(path);
  const url = absoluteUrl(path);
  const keywords = [...seoKeywords, ...(route.keywords ?? [])];

  return {
    title: route.title,
    description: route.description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "en_ZA",
      url,
      siteName: SITE_NAME,
      title: `${route.title} | ${SITE_NAME}`,
      description: route.description,
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: "Hostsy corporate housing in Gauteng",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${route.title} | ${SITE_NAME}`,
      description: route.description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export function createStructuredData() {
  const organizationId = `${SITE_URL}/#organization`;
  const localBusinessId = `${SITE_URL}/#local-business`;
  const corporateHousingServiceId = `${SITE_URL}/corporate-housing#service`;
  const mobilityServiceId = `${SITE_URL}/hr-mobility#service`;
  const landlordServiceId = `${SITE_URL}/landlords#service`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: SITE_NAME,
        url: SITE_URL,
        logo: absoluteUrl("/hostsy-logo-gold.png"),
        image: absoluteUrl("/hostsy-hero-apartment.jpg"),
        email: CONTACT_EMAIL,
        telephone: CONTACT_PHONE,
        foundingDate: "2019",
        areaServed: [
          { "@type": "City", name: "Pretoria" },
          { "@type": "City", name: "Johannesburg" },
          { "@type": "AdministrativeArea", name: "Gauteng" },
        ],
        sameAs: ["https://wa.me/27678182968"],
      },
      {
        "@type": ["LocalBusiness", "LodgingBusiness"],
        "@id": localBusinessId,
        name: "Hostsy Corporate Housing",
        url: SITE_URL,
        image: absoluteUrl("/hostsy-hero-apartment.jpg"),
        logo: absoluteUrl("/hostsy-logo-gold.png"),
        email: CONTACT_EMAIL,
        telephone: CONTACT_PHONE,
        priceRange: "R32,000-R120,000 per month",
        address: {
          "@type": "PostalAddress",
          streetAddress: "140 Hilda Street, Brooklyn",
          addressLocality: "Pretoria",
          addressRegion: "Gauteng",
          postalCode: "0181",
          addressCountry: "ZA",
        },
        branchOf: { "@id": organizationId },
        areaServed: ["Pretoria", "Johannesburg", "Gauteng"],
        makesOffer: [
          { "@id": corporateHousingServiceId },
          { "@id": mobilityServiceId },
          { "@id": landlordServiceId },
        ],
      },
      {
        "@type": "Service",
        "@id": corporateHousingServiceId,
        name: "Corporate accommodation and extended stay housing",
        serviceType: "Corporate accommodation services",
        url: absoluteUrl("/corporate-housing"),
        provider: { "@id": organizationId },
        areaServed: ["Pretoria", "Johannesburg", "Gauteng"],
        audience: {
          "@type": "BusinessAudience",
          audienceType: "Companies relocating executives, specialists, diplomats, and project teams",
        },
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "ZAR",
          lowPrice: "32000",
          highPrice: "120000",
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "Service",
        "@id": mobilityServiceId,
        name: "Employee relocation housing for HR and mobility teams",
        serviceType: "Relocation accommodation management",
        url: absoluteUrl("/hr-mobility"),
        provider: { "@id": organizationId },
        areaServed: ["Pretoria", "Johannesburg", "Gauteng"],
      },
      {
        "@type": "Service",
        "@id": landlordServiceId,
        name: "Master lease partnerships for premium apartment owners",
        serviceType: "Corporate housing master lease partnership",
        url: absoluteUrl("/landlords"),
        provider: { "@id": organizationId },
        areaServed: ["Pretoria", "Johannesburg", "Gauteng"],
      },
    ],
  };
}
