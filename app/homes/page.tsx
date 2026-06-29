import type { Metadata } from "next";
import { HomesExplorer } from "../components/HomesExplorer";
import { JsonLd } from "../components/JsonLd";
import { absoluteUrl, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Brian Head Cabin Rentals and Mountain Homes",
  description:
    "Browse Cedar Mountain Stays cabins, condos, and mountain retreats near Brian Head, Duck Creek, Panguitch Lake, Cedar Breaks, Bryce Canyon, and Zion.",
  alternates: {
    canonical: absoluteUrl("/homes"),
  },
  openGraph: {
    title: "Brian Head Cabin Rentals and Mountain Homes",
    description:
      "Explore Southern Utah mountain homes with live photos, bedrooms, guest counts, amenities, and booking links.",
    url: absoluteUrl("/homes"),
  },
};

export default function HomesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Homes", path: "/homes" },
        ])}
      />
      <HomesExplorer />
    </>
  );
}
