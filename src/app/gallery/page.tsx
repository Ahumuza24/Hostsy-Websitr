import type { Metadata } from "next";
import GalleryExperience from "@/components/gallery/GalleryExperience";

export const metadata: Metadata = {
  title: "Gallery — Premium Corporate Apartments in Gauteng",
  description:
    "Browse Hostsy's premium furnished apartments, executive suites, work-ready spaces, and Gauteng corporate housing locations.",
};

export default function GalleryPage() {
  return <GalleryExperience />;
}
