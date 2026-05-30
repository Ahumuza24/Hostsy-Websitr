import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import WhatsAppPill from "@/components/layout/WhatsAppPill";
import ScrollReveal from "@/components/shared/ScrollReveal";

/* eslint-disable @next/next/no-page-custom-font */

export const metadata: Metadata = {
  title: {
    default: "Hostsy | Corporate Housing for Relocations & Extended Stays in Gauteng",
    template: "%s | Hostsy Corporate Housing",
  },
  description:
    "Premium furnished corporate apartments across Pretoria and Johannesburg. Fully managed housing for company relocations, executive placements, project teams, and extended stays.",
  keywords: [
    "corporate housing Pretoria",
    "executive accommodation Pretoria",
    "extended stay apartments Johannesburg",
    "diplomatic housing Pretoria",
    "furnished corporate apartments Gauteng",
    "relocation housing South Africa",
  ],
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://hostsy.co.za",
    siteName: "Hostsy",
    title: "Hostsy | Corporate Housing for Relocations & Extended Stays",
    description:
      "Premium furnished corporate apartments across Pretoria and Johannesburg.",
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
        <ScrollReveal />
        <Nav />
        {children}
        <Footer />
        <WhatsAppPill />
      </body>
    </html>
  );
}
