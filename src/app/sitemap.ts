import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.dreadlockatelier.com";

  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/dreads`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/preise`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/termin`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/galerie`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/kim`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/faq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/kontakt`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
  ];
}
