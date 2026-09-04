import { Metadata } from 'next';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'About OlhaIP',
  description: 'About OlhaIP - See what the internet sees. Check your IP address and understand your connection.',
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
        ]}
      />

      <h1 className="text-4xl lg:text-5xl font-bold text-[var(--color-foreground)] mb-8">
        About OlhaIP
      </h1>

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
              Our Mission
            </h2>
          </CardHeader>
          <CardContent className="space-y-4 text-[var(--color-foreground-secondary)]">
            <p>
              OlhaIP provides a simple, fast, and trustworthy platform for understanding your internet connection and IP address. We make internet technology accessible and understandable.
            </p>
            <p>
              We believe everyone should understand how the internet works, starting with their own public IP address.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
              What We Offer
            </h2>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-[var(--color-foreground-secondary)]">
              <li>Instant IP address detection (IPv4 and IPv6)</li>
              <li>IP address lookup and validation tools</li>
              <li>Browser and system information display</li>
              <li>DNS and reverse DNS lookup tools</li>
              <li>Educational guides about networking and IP addresses</li>
              <li>HTTP headers viewer for developers</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
              Privacy & Data
            </h2>
          </CardHeader>
          <CardContent className="space-y-4 text-[var(--color-foreground-secondary)]">
            <p>
              We take privacy seriously. Your IP address is detected when you visit, but we don't store it permanently or track your activity.
            </p>
            <p>
              Our tools are designed to work entirely on your device whenever possible. Data sent to our servers for tool functionality (like DNS lookups) is not logged for longer than necessary.
            </p>
            <p>
              See our <a href="/privacy" className="text-[var(--color-primary)]">Privacy Policy</a> for complete details.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
              Technology
            </h2>
          </CardHeader>
          <CardContent className="space-y-4 text-[var(--color-foreground-secondary)]">
            <p>
              OlhaIP is built with Next.js, React, and TypeScript. We prioritize performance, accessibility, and user experience.
            </p>
            <p>
              The site is optimized for fast loading and works great on mobile, tablet, and desktop devices.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
