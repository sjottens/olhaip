'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import Link from 'next/link';

export default function StaticVsDynamicPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div className="mb-8">
        <Link href="/guides" className="text-sm text-[var(--color-primary)]">
          ← Back to Guides
        </Link>
      </div>

      <h1 className="text-4xl lg:text-5xl font-bold text-[var(--color-foreground)] mb-8">
        Static vs Dynamic IP Addresses
      </h1>

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
              Static IP Addresses
            </h2>
          </CardHeader>
          <CardContent className="space-y-4 text-[var(--color-foreground-secondary)]">
            <p>
              A static IP address remains the same and doesn't change. Once assigned, your device keeps the same IP for as long as the assignment is active.
            </p>
            <p>
              Static IPs are typically used for:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Web servers and hosting (websites need consistent addresses)</li>
              <li>Email servers (for proper email delivery)</li>
              <li>Business networks requiring predictable addresses</li>
              <li>Remote access systems and VPNs</li>
              <li>Security cameras and network printers</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
              Dynamic IP Addresses
            </h2>
          </CardHeader>
          <CardContent className="space-y-4 text-[var(--color-foreground-secondary)]">
            <p>
              A dynamic IP address changes periodically. Your ISP's DHCP server automatically assigns and reassigns addresses to devices on the network.
            </p>
            <p>
              Dynamic IPs are used for:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Home internet connections (most common)</li>
              <li>Mobile devices and cellular networks</li>
              <li>WiFi connections</li>
              <li>Any consumer device without special requirements</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
              Key Differences
            </h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-[var(--color-foreground)] mb-2">Stability</p>
                <p className="text-[var(--color-foreground-secondary)]">
                  Static: Remains constant. Dynamic: Changes periodically (typically every 24-30 days).
                </p>
              </div>
              <div>
                <p className="font-semibold text-[var(--color-foreground)] mb-2">Cost</p>
                <p className="text-[var(--color-foreground-secondary)]">
                  Static: Usually costs extra. Dynamic: Included with standard internet service.
                </p>
              </div>
              <div>
                <p className="font-semibold text-[var(--color-foreground)] mb-2">Use Case</p>
                <p className="text-[var(--color-foreground-secondary)]">
                  Static: Business and servers. Dynamic: Home and mobile users.
                </p>
              </div>
              <div>
                <p className="font-semibold text-[var(--color-foreground)] mb-2">DNS Configuration</p>
                <p className="text-[var(--color-foreground-secondary)]">
                  Static: Required for proper DNS routing. Dynamic: Can use dynamic DNS services.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
