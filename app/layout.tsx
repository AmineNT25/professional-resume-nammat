import type { Metadata } from "next";
import { Space_Grotesk, Outfit } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: 'swap',
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Ahmed Amine Nammat | Full Stack Developer",
  description: "Portfolio of Ahmed Amine Nammat, a Web Development Trainee specializing in modern web applications.",
};

import InteractiveBackground from "./components/InteractiveBackground";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${outfit.variable} antialiased font-sans`}
      >
        <Providers>
          <InteractiveBackground />
          {children}
        </Providers>
      </body>
    </html>
  );
}
