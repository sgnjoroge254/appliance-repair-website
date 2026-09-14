import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://appliance-repair-website-live.vercel.app";
  return ["", "/about", "/services", "/process", "/contact", "/book-repair", "/track-repair"].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));
}
