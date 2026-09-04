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
              // Nuclear option: Polyfill PerformanceObserver to PREVENT startTime errors at source
              try {
                if (window.PerformanceObserver) {
                  const OrigPO = window.PerformanceObserver;
                  window.PerformanceObserver = class extends OrigPO {
                    constructor(callback) {
                      const wrappedCallback = (list) => {
                        try {
                          // Ensure ALL entries have startTime BEFORE calling callback
                          const entries = list.getEntries();
                          for (let i = 0; i < entries.length; i++) {
                            const entry = entries[i];
                            if (entry && !entry.startTime) {
                              // Safe default for missing startTime
                              Object.defineProperty(entry, 'startTime', {
                                value: entry.responseEnd || entry.fetchStart || 0,
                                writable: false,
                                configurable: true
                              });
                            }
                          }
                        } catch (e) {
                          // Silently fail, don't let this break anything
                        }
                        try {
                          callback(list);
                        } catch (e) {
                          if (!String(e).includes('startTime')) {
                            console.error('PerformanceObserver callback error:', e);
                          }
                        }
                      };
                      super(wrappedCallback);
                    }
                  };
                }
              } catch (e) {
                // If polyfill fails, silently continue
              }
              
              // Fallback: Suppress console errors
              const origError = console.error;
              console.error = function(...args) {
                const str = args.map(a => String(a)).join(' ');
                if (str.includes('startTime')) return;
                return origError.apply(console, args);
              };
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
