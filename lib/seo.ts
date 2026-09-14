import type { Metadata } from "next";
import { businessInfo } from "@/lib/services";

export const siteUrl = "https://appliance-repair-website-live.vercel.app";

export function createPageMetadata(title: string, description: string, keywords: string[]): Metadata {
  return {
    title,
    description,
    keywords,
    alternates: { canonical: siteUrl },
    openGraph: {
      title: `${title} | ${businessInfo.name}`,
      description,
      url: siteUrl,
      siteName: businessInfo.name,
      type: "website",
      locale: "en_KE",
    },
    twitter: {
      card: "summary",
      title: `${title} | ${businessInfo.name}`,
      description,
    },
  };
}
