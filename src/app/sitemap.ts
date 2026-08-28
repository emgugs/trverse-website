import type { MetadataRoute } from "next";
import { audienceLandingsBySlug } from "@/data/audienceLandings";
import { caseStudies } from "@/data/caseStudies";
import { insights } from "@/data/insights";
import { getSolutionLandingSlugs } from "@/data/solutionLandings";
import { SITE_URL } from "@/lib/site";

const staticRoutes: MetadataRoute.Sitemap = [
  { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
  { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.8 },
  { url: `${SITE_URL}/solutions`, changeFrequency: "weekly", priority: 0.9 },
  { url: `${SITE_URL}/products`, changeFrequency: "monthly", priority: 0.8 },
  { url: `${SITE_URL}/partners`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${SITE_URL}/blog`, changeFrequency: "weekly", priority: 0.8 },
  { url: `${SITE_URL}/insights`, changeFrequency: "weekly", priority: 0.8 },
  { url: `${SITE_URL}/get-a-demo`, changeFrequency: "yearly", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const solutionRoutes: MetadataRoute.Sitemap = getSolutionLandingSlugs().map((slug) => ({
    url: `${SITE_URL}/solutions/${slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const audienceRoutes: MetadataRoute.Sitemap = Object.keys(audienceLandingsBySlug).map((slug) => ({
    url: `${SITE_URL}/who-we-serve/${slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const insightRoutes: MetadataRoute.Sitemap = insights.map((item) => ({
    url: `${SITE_URL}/insights/${item.slug}`,
    lastModified: item.datePublishedIso,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((item) => ({
    url: `${SITE_URL}/case-studies/${item.slug}`,
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...solutionRoutes, ...audienceRoutes, ...insightRoutes, ...caseStudyRoutes];
}
