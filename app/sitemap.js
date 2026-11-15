import { siteConfig } from "../lib/site";

export default function sitemap() {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date("2026-11-15"),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
