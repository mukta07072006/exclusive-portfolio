import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";
import StarsCanvas from "@/components/StarsCanvas";
import { siteConfig } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: siteConfig.name,
      alternateName: ["Moshud", "Muktadir"],
      url: siteConfig.url,
      image: `${siteConfig.url}${siteConfig.ogImage}`,
      email: `mailto:${siteConfig.email}`,
      jobTitle: "Web Developer",
      description:
        "Moshud Muktadir is a full-stack web developer based in Dhaka, Bangladesh, specializing in Next.js, React, TypeScript and Node.js.",
      nationality: { "@type": "Country", name: "Bangladesh" },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dhaka",
        addressCountry: "BD",
      },
      knowsAbout: siteConfig.knowsAbout,
      knowsLanguage: ["en", "bn"],
      sameAs: [siteConfig.github],
      hasOccupation: {
        "@type": "Occupation",
        name: "Web Developer",
        occupationLocation: { "@type": "City", name: "Dhaka" },
        skills:
          "Next.js, React, TypeScript, JavaScript, Node.js, Tailwind CSS, Three.js, SEO",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.shortTitle,
      description: siteConfig.description,
      inLanguage: "en",
      publisher: { "@id": `${siteConfig.url}/#person` },
      copyrightHolder: { "@id": `${siteConfig.url}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteConfig.url}/#webpage`,
      url: siteConfig.url,
      name: siteConfig.title,
      description: siteConfig.description,
      isPartOf: { "@id": `${siteConfig.url}/#website` },
      about: { "@id": `${siteConfig.url}/#person` },
      mainEntity: { "@id": `${siteConfig.url}/#person` },
      inLanguage: "en",
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "/",
    siteName: siteConfig.shortTitle,
    title: siteConfig.title,
    description: siteConfig.description,
    firstName: "Moshud",
    lastName: "Muktadir",
    username: "mukta07072006",
    images: [
      {
        url: `${siteConfig.url}${siteConfig.ogImage}`,
        width: 1536,
        height: 2048,
        alt: `${siteConfig.name} — Web Developer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}${siteConfig.ogImage}`],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "format-detection": "telephone=no",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#030014",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-[#030014]`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <StarsCanvas />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
