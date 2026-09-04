'use client';

import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { RelatedTools } from '@/components/ui/RelatedTools';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export default function IPv6CheckerPage() {
  const exampleIPs = [
    { ip: '2001:4860:4860::8888', valid: true, note: 'Google Public DNS' },
    { ip: '::1', valid: true, note: 'Loopback address' },
    { ip: 'fe80::1', valid: true, note: 'Link-local address' },
    { ip: '::ffff:192.0.2.1', valid: true, note: 'IPv4-mapped IPv6' },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Tools', href: '/ip-lookup' },
          { label: 'IPv6 Checker', href: '/ipv6-checker' },
        ]}
      />

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-[var(--color-foreground)] mb-4">
          IPv6 Checker
        </h1>
        <p className="text-lg text-[var(--color-foreground-secondary)]">
          Understand IPv6 addresses and their format. IPv6 is the next generation internet protocol with 128-bit addresses.
        </p>
      </div>

      {/* Information Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <Card>
          <CardHeader>
            <h3 className="font-semibold text-[var(--color-foreground)]">
              IPv6 Format
            </h3>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-[var(--color-foreground-secondary)]">
            <p>
              IPv6 addresses are 128-bit addresses written as eight groups of hexadecimal digits:
            </p>
            <code className="bg-[var(--color-background)] px-3 py-2 rounded-md block font-mono text-[var(--color-foreground)] text-xs">
              2001:0db8:85a3:0000:0000:8a2e:0370:7334
            </code>
            <p>Consecutive zeros can be represented as :: (only once per address)</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="font-semibold text-[var(--color-foreground)]">
              Why IPv6?
            </h3>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-[var(--color-foreground-secondary)]">
            <div>
              <p className="font-medium text-[var(--color-foreground)]">Vastly More Addresses</p>
              <p>340 undecillion addresses vs IPv4's 4 billion</p>
            </div>
            <div>
              <p className="font-medium text-[var(--color-foreground)]">Built-in Security</p>
              <p>IPsec support included in the protocol</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Examples */}
      <Card className="mb-12">
        <CardHeader>
          <h3 className="font-semibold text-[var(--color-foreground)]">
            Example IPv6 Addresses
          </h3>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {exampleIPs.map((example) => (
              <div
                key={example.ip}
                className="flex items-center justify-between p-3 bg-[var(--color-background)] rounded-lg border border-[var(--color-border)]"
              >
                <div>
                  <code className="font-mono font-semibold text-[var(--color-foreground)] text-sm">
                    {example.ip}
                  </code>
                  <p className="text-sm text-[var(--color-foreground-secondary)] mt-1">
                    {example.note}
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-[var(--color-success)] text-white">
                  Valid
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Address Types */}
      <Card>
        <CardHeader>
          <h3 className="font-semibold text-[var(--color-foreground)]">
            IPv6 Address Types
          </h3>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-[var(--color-foreground-secondary)]">
          <div>
            <p className="font-medium text-[var(--color-foreground)]">Global Unicast</p>
            <p>Addresses that can be routed on the global internet (2000::/3)</p>
          </div>
          <div>
            <p className="font-medium text-[var(--color-foreground)]">Link-Local</p>
            <p>Only for communication on the local link (fe80::/10)</p>
          </div>
          <div>
            <p className="font-medium text-[var(--color-foreground)]">Loopback</p>
            <p>For testing purposes, equivalent to 127.0.0.1 in IPv4 (::1)</p>
          </div>
          <div>
            <p className="font-medium text-[var(--color-foreground)]">Multicast</p>
            <p>For one-to-many communication (ff00::/8)</p>
          </div>
        </CardContent>
      </Card>

      {/* Related Tools */}
      <RelatedTools
        tools={[
          {
            href: '/',
            title: 'What Is My IP?',
            description: 'Check your public IP address',
          },
          {
            href: '/ipv4-checker',
            title: 'IPv4 Checker',
            description: 'Check IPv4 addressing',
          },
          {
            href: '/ip-validator',
            title: 'IP Validator',
            description: 'Validate any IP address',
          },
          {
            href: '/ip-lookup',
            title: 'IP Lookup',
            description: 'Look up any IP address',
          },
          {
            href: '/guides/ipv4-vs-ipv6',
            title: 'IPv4 vs IPv6',
            description: 'Learn the differences',
          },
          {
            href: '/guides/what-is-an-ip-address',
            title: 'What is an IP Address?',
            description: 'IP fundamentals guide',
          },
        ]}
      />
    </div>
  );
}
