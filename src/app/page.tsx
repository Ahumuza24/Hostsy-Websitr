import type { Metadata } from "next";
import HomePageContent from "@/components/home/HomePageContent";

export const metadata: Metadata = {
  title: "Corporate Housing for Relocations & Extended Stays in Gauteng",
  description:
    "Premium furnished apartments across Pretoria and Johannesburg. Fully managed corporate housing for relocations, executive placements, project teams, and extended stays.",
};

export default function HomePage() {
  return <HomePageContent />;
}
