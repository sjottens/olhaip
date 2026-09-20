import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StructuredData } from "@/components/seo/StructuredData";
import { generateOrganizationSchema, generateWebSiteSchema } from "@/lib/schema";
import { buildMetadata, SITE_NAME, SITE_URL } from "@/lib/seo";

// The homepage is a client component and cannot export its own metadata, so
// its metadata lives here. Every other page defines its own canonical URL.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  ...buildMetadata({
    title: "What Is My IP Address? | OlhaIP",
    description:
      "Find your public IP address instantly. OlhaIP shows your IPv4, IPv6, connection details, and helpful network information in one simple view.",
    path: "/",
  }),
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fffdfa" },
    { media: "(prefers-color-scheme: dark)", color: "#14100c" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="flex flex-col min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]">
        <StructuredData schema={generateOrganizationSchema()} />
        <StructuredData schema={generateWebSiteSchema()} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
