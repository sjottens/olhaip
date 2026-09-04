import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "What Is My IP Address? | OlhaIP",
  description:
    "Find your public IP address instantly. OlhaIP shows your IPv4, IPv6, connection details, and helpful network information in one simple view.",
  keywords: "IP address, my IP, public IP, IPv4, IPv6, check IP, network information, what is my IP",
  openGraph: {
    title: "What Is My IP Address? | OlhaIP",
    description:
      "Find your public IP address instantly and understand your internet connection with OlhaIP.",
    type: "website",
    url: "https://olhaip.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "What Is My IP Address? | OlhaIP",
    description:
      "Find your public IP address and learn about your internet connection.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <Script src="/suppress-errors.js" strategy="beforeInteractive" />
      </head>
      <body className="flex flex-col min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
