import type { MetadataRoute } from "next";
import { getFeaturedProperties } from "@/lib/trackProperties";
import { absoluteUrl } from "@/lib/seo";

const routes = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/homes", priority: 0.95, changeFrequency: "daily" },
  { path: "/experiences", priority: 0.85, changeFrequency: "monthly" },
  { path: "/why-cedar-mountain", priority: 0.8, changeFrequency: "monthly" },
  { path: "/team", priority: 0.65, changeFrequency: "monthly" },
  { path: "/income-estimator", priority: 0.65, changeFrequency: "monthly" },
] as const;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();
  const properties = await getFeaturedProperties(80, 1).catch(() => []);

  return [
    ...routes.map((route) => ({
      url: absoluteUrl(route.path),
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...properties.map((property) => ({
      url: absoluteUrl(`/homes/${property.slug}`),
      lastModified,
      changeFrequency: "daily" as const,
      priority: 0.8,
    })),
  ];
}
