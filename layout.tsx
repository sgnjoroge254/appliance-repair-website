import type { Metadata } from "next";
import { Archivo, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { businessInfo } from "@/lib/services";

const archivo = Archivo({ subsets: ["latin"], variable: "--font-archivo", weight: ["600", "700", "800"] });
const plexSans = IBM_Plex_Sans({ subsets: ["latin"], variable: "--font-plex-sans", weight: ["400", "500"] });
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], variable: "--font-plex-mono", weight: ["400", "500"] });

export const metadata: Metadata = {
  title: `${businessInfo.name} | Appliance Repair`,
  description: businessInfo.tagline,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} ${plexSans.variable} ${plexMono.variable} font-body`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
