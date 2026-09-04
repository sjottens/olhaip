import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "What Is My IP Address? | OlhaIP",
  description:
    "See what the internet sees. Check your public IP address, discover your connection details, location, ISP, and more with OlhaIP.",
  keywords: "IP address, public IP, IPv4, IPv6, my IP, check IP, network information",
  openGraph: {
    title: "What Is My IP Address? | OlhaIP",
    description:
      "See what the internet sees. Check your public IP address, discover your connection details, location, ISP, and more.",
    type: "website",
    url: "https://olhaip.com",
  },
  twitter: {
    card: "summary",
    title: "What Is My IP Address? | OlhaIP",
    description:
      "See what the internet sees. Check your public IP address and understand your internet connection.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="flex flex-col min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
