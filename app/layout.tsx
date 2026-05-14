import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";
import StarsCanvas from "@/components/StarBG";
import '@fontsource-variable/stack-sans-notch';




const inter = Inter({ subsets: ["latin"] });



const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Moshud Muktadir",
  "url": "https://your-portfolio-link.com",
  "jobTitle": "Web Developer",
  "description": "Professional Web Developer specializing in Next.js, React, and modern web technologies.",
  "sameAs": [
    "https://github.com/your-username",
    "https://linkedin.com/in/your-username",
    "https://twitter.com/your-username"
  ],
  "knowsAbout": ["Web Development", "Next.js", "React", "JavaScript", "Frontend Engineering"]
};

// Inside your component return:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
/>


export const metadata = {
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
        
      </head>
      <body className={`bg-[#030014]` }>
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
