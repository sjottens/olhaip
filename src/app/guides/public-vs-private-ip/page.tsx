'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import Link from 'next/link';

export default function PublicVsPrivateIPPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div className="mb-8">
        <Link href="/guides" className="text-sm text-[var(--color-primary)]">
          ← Back to Guides
        </Link>
      </div>

      <div className="mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-[var(--color-foreground)] mb-4">
          Public vs Private IP Addresses
        </h1>
      </div>

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
              Public IP Addresses
            </h2>
          </CardHeader>
          <CardContent className="space-y-4 text-[var(--color-foreground-secondary)]">
            <p>
              A public IP address is assigned by your ISP and is globally unique and routable on the internet. Websites and online services can see your public IP when you connect.
            </p>
            <p>
              Public IP addresses are necessary for devices to communicate over the internet. Your router has a public IP address, and within your network, other devices have private IPs.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
              Private IP Addresses
            </h2>
          </CardHeader>
          <CardContent className="space-y-4 text-[var(--color-foreground-secondary)]">
            <p>
              Private IP addresses are used within local networks and are not routable on the public internet. They're reserved by RFC 1918 for internal use only.
            </p>
            <p>
              Your router assigns private IPs to your devices (phones, computers, printers, etc.) so they can communicate with each other. These addresses are not unique across the internet.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
              Private IP Ranges
            </h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm text-[var(--color-foreground-secondary)]">
              <p>RFC 1918 reserves three IP ranges for private use:</p>
              <div className="mt-4 space-y-2 bg-[var(--color-background)] p-4 rounded-lg">
                <p className="font-mono">10.0.0.0 - 10.255.255.255</p>
                <p className="font-mono">172.16.0.0 - 172.31.255.255</p>
                <p className="font-mono">192.168.0.0 - 192.168.255.255</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
