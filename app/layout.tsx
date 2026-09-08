import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Appliance Repair Nairobi | Professional Home Appliance Repairs",
  description:
    "Professional appliance repair at your home in Nairobi and surrounding areas. Washing machines, refrigerators, cookers, ovens, dishwashers, microwaves and more.",
  metadataBase: new URL("https://example.com"),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
