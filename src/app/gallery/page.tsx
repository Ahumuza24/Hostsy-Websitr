import type { Metadata } from "next";
import GalleryExperience from "@/components/gallery/GalleryExperience";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata("/gallery");

export default function GalleryPage() {
  return <GalleryExperience />;
}
