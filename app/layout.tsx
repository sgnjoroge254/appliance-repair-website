import type { Metadata } from "next";
import { Archivo, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { businessInfo } from "@/lib/services";
import { siteUrl } from "@/lib/seo";

const archivo = Archivo({ subsets: ["latin"], variable: "--font-archivo", weight: ["600", "700", "800"] });
const plexSans = IBM_Plex_Sans({ subsets: ["latin"], variable: "--font-plex-sans", weight: ["400", "500"] });
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], variable: "--font-plex-mono", weight: ["400", "500"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${businessInfo.name} | Electronics Repair in Nairobi`,
    template: `%s | ${businessInfo.name}`,
  },
  description: "Atomic Vitality Tech Lab provides component-level electronics repair, diagnostics, PCB rework, and equipment recovery in Nairobi CBD.",
  keywords: [
    "electronics repair Nairobi",
    "component level repair Nairobi",
    "PCB repair Kenya",
    "electronics diagnostics Nairobi",
    "board repair Kenya",
    "micro soldering Nairobi",
  ],
  authors: [{ name: businessInfo.name }],
  creator: businessInfo.name,
  publisher: businessInfo.name,
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  alternates: { canonical: siteUrl },
  openGraph: {
    title: `${businessInfo.name} | Electronics Repair in Nairobi`,
    description: "Component-level electronics repair and diagnostics from Atomic Vitality Tech Lab in Nairobi CBD.",
    url: siteUrl,
    siteName: businessInfo.name,
    locale: "en_KE",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${archivo.variable} ${plexSans.variable} ${plexMono.variable} font-body`} suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: businessInfo.name,
              description: businessInfo.tagline,
              url: siteUrl,
              telephone: businessInfo.phone,
              email: businessInfo.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: "Kang'ari Building, Luthuli Avenue",
                addressLocality: "Nairobi",
                addressCountry: "KE",
              },
              openingHours: "Mo-Sa 08:00-19:00",
              areaServed: "Nairobi",
              priceRange: "$$",
            }),
          }}
        />
      </body>
    </html>
  );
}