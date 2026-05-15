import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";
import dynamic from "next/dynamic";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const StarsCanvas = dynamic(() => import("@/components/StarBG"), {
  ssr: false,
  loading: () => <div className="fixed inset-0 z-20" />,
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Moshud Muktadir",
  "url": "https://your-portfolio-link.com",
  "jobTitle": "Web Developer",
  "description": "Professional Web Developer specializing in Next.js, React, and modern web technologies.",
  sameAs: [
    "https://github.com/your-username",
    "https://linkedin.com/in/your-username",
    "https://twitter.com/your-username"
  ],
  knowsAbout: ["Web Development", "Next.js", "React", "JavaScript", "Frontend Engineering"]
};

export const metadata: Metadata = {
  title: "Moshud Muktadir | Professional Web Developer & Next.js Expert",
  description: "Portfolio of Moshud Muktadir, a Web Developer specializing in building high-performance, scalable web applications using Next.js and React.",
  keywords: ["Moshud Muktadir", "Web Developer", "Next.js Developer", "React Developer", "Frontend Engineer", "Portfolio"],
  authors: [{ name: "Moshud Muktadir" }],
  creator: "Moshud Muktadir",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https:moshudmuktadir.pro.bd",
    title: "Moshud Muktadir | Web Developer Portfolio",
    description: "Explore the work and skills of Moshud Muktadir, a specialist in modern web development.",
    siteName: "Moshud Muktadir Portfolio",
  },
  linkdin: {
    card: "summary_large_image",
    title: "Moshud Muktadir | Web Developer",
    description: "Web Developer focused on Next.js and React.",
    creator: "moshud-muktadir",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
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
          <StarsCanvas/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}