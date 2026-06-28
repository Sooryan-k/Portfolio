import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/StickyHeader";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sooryan K | Full Stack Developer",
    template: "%s | Sooryan K",
  },
  description:
    "Full Stack Developer specializing in Next.js, React, and PostgreSQL — building scalable, end-to-end web applications.",
  keywords: [
    "Sooryan K",
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "PostgreSQL",
    "Supabase",
    "Portfolio",
  ],
  authors: [{ name: "Sooryan K" }],
  openGraph: {
    title: "Sooryan K | Full Stack Developer",
    description:
      "Full Stack Developer specializing in Next.js, React, and PostgreSQL — building scalable, end-to-end web applications.",
    type: "website",
    siteName: "Sooryan K",
  },
  twitter: {
    card: "summary",
    title: "Sooryan K | Full Stack Developer",
    description:
      "Full Stack Developer specializing in Next.js, React, and PostgreSQL.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeInit = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}document.documentElement.classList.add(t);}catch(e){document.documentElement.classList.add('dark');}})();`;

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="relative min-h-screen bg-base text-fg antialiased">
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <div className="bg-ambiance -z-10" aria-hidden />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
