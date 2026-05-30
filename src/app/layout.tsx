import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import WhatsAppPill from "@/components/layout/WhatsAppPill";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { SITE_NAME, SITE_URL, createStructuredData, seoKeywords } from "@/lib/seo";

/* eslint-disable @next/next/no-page-custom-font */

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Hostsy | Corporate Housing for Relocations & Extended Stays in Gauteng",
    template: "%s | Hostsy Corporate Housing",
  },
  description:
    "Premium furnished corporate apartments across Pretoria and Johannesburg. Fully managed housing for company relocations, executive placements, project teams, and extended stays.",
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Corporate accommodation",
  keywords: seoKeywords,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Hostsy | Corporate Housing for Relocations & Extended Stays",
    description:
      "Premium furnished corporate apartments across Pretoria and Johannesburg.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Hostsy corporate housing in Gauteng",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hostsy | Corporate Housing for Relocations & Extended Stays",
    description:
      "Premium furnished corporate apartments across Pretoria and Johannesburg.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;1,6..72,300;1,6..72,400&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(createStructuredData()) }}
        />
        <ScrollReveal />
        <Nav />
        {children}
        <Footer />
        <WhatsAppPill />
      </body>
    </html>
  );
}
