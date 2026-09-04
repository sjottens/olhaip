import type { Metadata } from "next";
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Suppress startTime errors from Next.js web vitals without breaking other code
              
              // 1. Only suppress startTime in console.error
              const origError = console.error;
              console.error = function(...args) {
                const str = args.map(a => String(a)).join(' ');
                if (str.includes('startTime')) return; // Suppress
                return origError.apply(console, args); // Pass through others
              };
              
              // 2. Suppress startTime errors but DON'T override existing handlers
              const origOnerror = window.onerror;
              window.onerror = function(msg, url, line, col, err) {
                if (msg && String(msg).includes('startTime')) return true; // Suppress startTime
                // Call original handler if it exists
                if (origOnerror) {
                  return origOnerror.apply(window, arguments);
                }
                return false;
              };
              
              // 3. Only suppress unhandledrejection for startTime
              window.addEventListener('unhandledrejection', function(e) {
                if (e.reason && String(e.reason).includes('startTime')) {
                  e.preventDefault();
                }
              });
            `,
          }}
        />
      </head>
      <body className="flex flex-col min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
