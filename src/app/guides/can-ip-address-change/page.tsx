'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import Link from 'next/link';

export default function CanIPAddressChangePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div className="mb-8">
        <Link href="/guides" className="text-sm text-[var(--color-primary)]">
          ← Back to Guides
        </Link>
      </div>

      <h1 className="text-4xl lg:text-5xl font-bold text-[var(--color-foreground)] mb-8">
        Can Your IP Address Change?
      </h1>

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
              Yes, IP Addresses Change Regularly
            </h2>
          </CardHeader>
          <CardContent className="space-y-4 text-[var(--color-foreground-secondary)]">
            <p>
              For most home and mobile users, yes—your IP address can and does change. This is perfectly normal and expected behavior.
            </p>
            <p>
              If you have a dynamic IP address (which most consumers do), your IP address will change periodically. The frequency depends on your ISP and how your DHCP lease is configured.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
              When Do IP Addresses Change?
            </h2>
          </CardHeader>
          <CardContent className="space-y-4 text-[var(--color-foreground-secondary)]">
            <div>
              <p className="font-semibold text-[var(--color-foreground)] mb-2">DHCP Lease Expiration</p>
              <p>Most ISPs set DHCP leases to expire every 24-30 days. When your lease expires, your ISP may assign you a new IP address.</p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-foreground)] mb-2">Router Reset</p>
              <p>Restarting your router or modem often results in a new IP address assignment.</p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-foreground)] mb-2">Internet Disconnection</p>
              <p>If your connection drops and reconnects, you may get a different IP address.</p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-foreground)] mb-2">ISP Changes</p>
              <p>Switching ISPs will definitely result in a new IP address.</p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-foreground)] mb-2">Change of Location</p>
              <p>Using mobile devices on different networks (different WiFi networks, cellular networks, etc.) will assign different IPs.</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
              How to Keep Your IP Address
            </h2>
          </CardHeader>
          <CardContent className="space-y-4 text-[var(--color-foreground-secondary)]">
            <div>
              <p className="font-semibold text-[var(--color-foreground)] mb-2">Request a Static IP</p>
              <p>Contact your ISP and request a static (fixed) IP address. This usually costs extra ($5-15/month) but guarantees your address won't change.</p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-foreground)] mb-2">Business Internet Service</p>
              <p>Business-class internet plans typically include static IPs as standard.</p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-foreground)] mb-2">Keep Your Router On</p>
              <p>Leaving your router running continuously reduces the chance of DHCP lease expiration and IP changes.</p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-foreground)] mb-2">Dynamic DNS Services</p>
              <p>Services like No-IP or DynDNS can update your domain name whenever your IP changes, providing a workaround for dynamic IPs.</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
              Does IP Change Affect You?
            </h2>
          </CardHeader>
          <CardContent className="space-y-4 text-[var(--color-foreground-secondary)]">
            <p>
              For most users, IP address changes don't matter at all. Web browsing, email, and streaming work fine with dynamic IPs.
            </p>
            <p>
              However, IP changes may affect you if you:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Run a server or host a website</li>
              <li>Use port forwarding for gaming or remote access</li>
              <li>Rely on your IP for security/firewall rules</li>
              <li>Need consistent remote access to your network</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
