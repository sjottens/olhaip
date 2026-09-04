'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import Link from 'next/link';

export default function IPv4VsIPv6Page() {
  const comparison = [
    { aspect: 'Address Length', ipv4: '32 bits', ipv6: '128 bits' },
    { aspect: 'Total Addresses', ipv4: '~4.3 billion', ipv6: '~340 undecillion' },
    { aspect: 'Format', ipv4: '192.168.1.1', ipv6: '2001:db8::1' },
    { aspect: 'Header Size', ipv4: '20 bytes', ipv6: '40 bytes' },
    { aspect: 'Broadcast', ipv4: 'Yes', ipv6: 'No (uses multicast)' },
    { aspect: 'Security', ipv4: 'Optional IPsec', ipv6: 'Built-in IPsec' },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div className="mb-8">
        <Link href="/guides" className="text-sm text-[var(--color-primary)] hover:text-[var(--color-primary-dark)]">
          ← Back to Guides
        </Link>
      </div>

      <div className="mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-[var(--color-foreground)] mb-4">
          IPv4 vs IPv6: What's the Difference?
        </h1>
      </div>

      <div className="space-y-8 mb-12">
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
              Overview
            </h2>
          </CardHeader>
          <CardContent className="space-y-4 text-[var(--color-foreground-secondary)]">
            <p>
              IPv4 (Internet Protocol version 4) and IPv6 (Internet Protocol version 6) are two versions of the Internet Protocol. IPv6 was designed to replace IPv4 due to the exhaustion of available IPv4 addresses.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
              Comparison Table
            </h2>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--color-border)]">
                    <th className="text-left py-3 px-2 font-semibold text-[var(--color-foreground)]">
                      Aspect
                    </th>
                    <th className="text-left py-3 px-2 font-semibold text-[var(--color-foreground)]">
                      IPv4
                    </th>
                    <th className="text-left py-3 px-2 font-semibold text-[var(--color-foreground)]">
                      IPv6
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-[var(--color-border)] hover:bg-[var(--color-surface)]"
                    >
                      <td className="py-3 px-2 text-[var(--color-foreground)]">
                        {row.aspect}
                      </td>
                      <td className="py-3 px-2 text-[var(--color-foreground-secondary)]">
                        {row.ipv4}
                      </td>
                      <td className="py-3 px-2 text-[var(--color-foreground-secondary)]">
                        {row.ipv6}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
              Why IPv6 Matters
            </h2>
          </CardHeader>
          <CardContent className="space-y-4 text-[var(--color-foreground-secondary)]">
            <p>
              IPv4 has approximately 4.3 billion addresses. While this seemed like a lot in the 1980s, the rapid growth of the internet, IoT devices, and mobile phones has exhausted most available IPv4 addresses.
            </p>
            <p>
              IPv6 provides 340 undecillion addresses—more than enough for every device in the universe to have multiple addresses. This solves the address exhaustion problem.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <h3 className="font-semibold text-[var(--color-foreground)]">
            Related Articles
          </h3>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/guides/what-is-an-ip-address"
                className="text-[var(--color-primary)] hover:text-[var(--color-primary-dark)]"
              >
                → What Is an IP Address?
              </Link>
            </li>
            <li>
              <Link
                href="/guides/public-vs-private-ip"
                className="text-[var(--color-primary)] hover:text-[var(--color-primary-dark)]"
              >
                → Public vs Private IP Addresses
              </Link>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
