import type { Metadata } from "next";
import "./globals.css";
import StickyHeader from "@/components/StickyHeader";


export const metadata: Metadata = {
  title: "Sooryan K | Full Stack Developer",
  description: "Full Stack Developer specializing in Next.js and PostgreSQL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative bg-black text-white">
        <div className="dot-bg -z-10" />
        <StickyHeader />
        {children}
      </body>
    </html>
  );
}
