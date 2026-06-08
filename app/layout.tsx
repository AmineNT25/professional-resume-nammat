import type { Metadata } from "next";
import { Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hanken",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains",
  display: "swap",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ahmed Amine Nammat",
  givenName: "Ahmed Amine",
  familyName: "Nammat",
  url: "https://nammat.dev",
  image: "https://nammat.dev/opengraph-image",
  jobTitle: "Full Stack Developer",
  email: "mailto:ahmedaminenammat021105@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Agadir",
    addressCountry: "MA",
  },
  sameAs: [
    "https://github.com/AmineNT25/",
    "https://www.linkedin.com/in/ahmed-amine-nammat-473083280",
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Laravel",
    "Full Stack Development",
  ],
};

const description =
  "Ahmed Amine Nammat is a Full Stack Developer based in Agadir, Morocco, building sharp, precise web applications with React, Next.js, TypeScript, and Laravel.";

export const metadata: Metadata = {
  metadataBase: new URL("https://nammat.dev"),
  title: {
    default: "Ahmed Amine Nammat | Full Stack Developer",
    template: "%s | Ahmed Amine Nammat",
  },
  description,
  keywords: [
    "Ahmed Amine Nammat",
    "Nammat",
    "Full Stack Developer Morocco",
    "Full Stack Developer Agadir",
    "React Developer Morocco",
    "Next.js Developer",
  ],
  authors: [{ name: "Ahmed Amine Nammat", url: "https://nammat.dev" }],
  creator: "Ahmed Amine Nammat",
  publisher: "Ahmed Amine Nammat",
  alternates: {
    canonical: "https://nammat.dev",
  },
  openGraph: {
    type: "website",
    url: "https://nammat.dev",
    title: "Ahmed Amine Nammat | Full Stack Developer",
    description,
    siteName: "Ahmed Amine Nammat",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Ahmed Amine Nammat — Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Amine Nammat | Full Stack Developer",
    description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${hankenGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
