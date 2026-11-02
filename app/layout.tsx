import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/site";
import { createMetadata, localBusinessJsonLd } from "@/lib/seo";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-dm-sans",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin", "latin-ext"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  ...createMetadata({
    title: `${siteConfig.name} | Omietky — interiér, exteriér, dekoratívne`,
    description: siteConfig.description,
    path: "/",
  }),
  icons: {
    // Absolute URL so GitHub Pages basePath is included
    icon: `${siteConfig.url}/favicon.svg`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className={`${dmSans.variable} ${syne.variable}`}>
      <body className="font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:bg-cream focus:px-4 focus:py-2 focus:text-sm focus:text-ink"
        >
          Preskočiť na obsah
        </a>
        <JsonLd data={localBusinessJsonLd()} />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
