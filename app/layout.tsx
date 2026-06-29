import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { JsonLd } from "./components/JsonLd";
import {
  absoluteUrl,
  organizationJsonLd,
  siteDescription,
  siteName,
  siteUrl,
  websiteJsonLd,
} from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Southern Utah Mountain Retreats`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  alternates: {
    canonical: absoluteUrl("/"),
  },
  keywords: [
    "Brian Head cabin rentals",
    "Southern Utah vacation rentals",
    "Duck Creek cabins",
    "Panguitch Lake cabins",
    "Brian Head vacation rentals",
    "Southern Utah mountain retreats",
    "Cedar Breaks lodging",
    "Bryce Canyon lodging",
    "Zion National Park lodging",
  ],
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: absoluteUrl("/"),
    siteName,
    title: `${siteName} | Southern Utah Mountain Retreats`,
    description: siteDescription,
    images: [
      {
        url: absoluteUrl("/icon.png"),
        width: 512,
        height: 512,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Southern Utah Mountain Retreats`,
    description: siteDescription,
    images: [absoluteUrl("/icon.png")],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        {children}
      </body>
    </html>
  );
}
