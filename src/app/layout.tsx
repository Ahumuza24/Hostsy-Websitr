import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

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
    <html lang="en" className={`${roboto.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
