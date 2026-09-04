import { Metadata } from 'next';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Privacy Policy | OlhaIP',
  description: 'OlhaIP privacy policy - how we handle your data.',
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Privacy', href: '/privacy' },
        ]}
      />

      <h1 className="text-4xl lg:text-5xl font-bold text-[var(--color-foreground)] mb-8">
        Privacy Policy
      </h1>

      <div className="space-y-8 text-[var(--color-foreground-secondary)] text-sm leading-relaxed">
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
              What Information We Collect
            </h2>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="font-semibold text-[var(--color-foreground)] mb-2">
                IP Address
              </p>
              <p>
                Your public IP address is detected when you visit our homepage. This is displayed to you immediately and is not permanently stored.
              </p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-foreground)] mb-2">
                Browser Information
              </p>
              <p>
                Your browser type, operating system, and device type are detected and displayed on the browser information page. This information stays on your device and is not sent to our servers.
              </p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-foreground)] mb-2">
                HTTP Headers
              </p>
              <p>
                Request headers from your browser are processed and displayed. These are not logged for longer than the current session.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
              What We Don't Do
            </h2>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>We do not sell or share your data with third parties</li>
              <li>We do not permanently store your IP address</li>
              <li>We do not use tracking cookies or analytics that identify you</li>
              <li>We do not create user profiles or accounts (optional)</li>
              <li>We do not track your browsing history</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
              IP Geolocation Accuracy
            </h2>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              IP geolocation is approximate and should not be used to determine exact physical locations. It provides city or region-level accuracy at best.
            </p>
            <p>
              The location shown is based on where the ISP's network infrastructure is located, not necessarily where you are.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
              Third-Party Services
            </h2>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              We use necessary infrastructure and hosting services. When you use lookup tools that require external APIs (like DNS lookups), we may send your query to appropriate service providers to retrieve results.
            </p>
            <p>
              We do not provide your IP address or personal information to third-party services unless necessary for the specific tool you're using.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
              Changes to This Policy
            </h2>
          </CardHeader>
          <CardContent>
            <p>
              We may update this privacy policy occasionally. Changes will be posted on this page with an updated date.
            </p>
          </CardContent>
        </Card>

        <p className="text-xs text-[var(--color-foreground-tertiary)]">
          Last updated: January 2025
        </p>
      </div>
    </div>
  );
}
