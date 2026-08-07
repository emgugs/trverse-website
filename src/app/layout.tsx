import type { Metadata } from "next";
import Script from "next/script";
import { Urbanist } from "next/font/google";
import JsonLd from "@/components/seo/JsonLd";
import { websiteJsonLd } from "@/lib/seo-jsonld";
import { DEFAULT_DESCRIPTION, DEFAULT_OG_IMAGE, absoluteUrl } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "TRVERSE | Mass Transit AFC, ITS & AI Platform",
    template: "%s — TRVERSE",
  },
  description: DEFAULT_DESCRIPTION,
  icons: {
    icon: "/favicon.webp",
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "TRVERSE",
    title: "TRVERSE | Mass Transit AFC, ITS & AI Platform",
    description: DEFAULT_DESCRIPTION,
    images: [{ url: absoluteUrl(DEFAULT_OG_IMAGE), alt: "TRVERSE" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TRVERSE | Mass Transit AFC, ITS & AI Platform",
    description: DEFAULT_DESCRIPTION,
    images: [absoluteUrl(DEFAULT_OG_IMAGE)],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${urbanist.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://objectstorage.me-dubai-1.oraclecloud.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body>
        <JsonLd data={websiteJsonLd()} />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6015NQ5BW5"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6015NQ5BW5');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
