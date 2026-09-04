'use client';

import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { isValidIPv4 } from '@/lib/client-utils';

export default function IPv4CheckerPage() {
  const exampleIPs = [
    { ip: '192.168.1.1', valid: true, note: 'Private IPv4 (RFC 1918)' },
    { ip: '8.8.8.8', valid: true, note: 'Public IPv4 (Google DNS)' },
    { ip: '256.256.256.256', valid: false, note: 'Invalid - octets exceed 255' },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-[var(--color-foreground)] mb-4">
          IPv4 Checker
        </h1>
        <p className="text-lg text-[var(--color-foreground-secondary)]">
          Validate IPv4 addresses and learn about IPv4 addressing. An IPv4 address is a 32-bit address written in dotted-decimal notation.
        </p>
      </div>

      {/* Information Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <Card>
          <CardHeader>
            <h3 className="font-semibold text-[var(--color-foreground)]">
              IPv4 Format
            </h3>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-[var(--color-foreground-secondary)]">
            <p>
              IPv4 addresses consist of four numbers (octets) separated by periods:
            </p>
            <code className="bg-[var(--color-background)] px-3 py-2 rounded-md block font-mono text-[var(--color-foreground)]">
              192.168.1.1
            </code>
            <p>Each octet can range from 0 to 255.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="font-semibold text-[var(--color-foreground)]">
              Address Types
            </h3>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-[var(--color-foreground-secondary)]">
            <div>
              <p className="font-medium text-[var(--color-foreground)]">Public IPv4</p>
              <p>Routable on the internet</p>
            </div>
            <div>
              <p className="font-medium text-[var(--color-foreground)]">Private IPv4</p>
              <p>For internal networks (RFC 1918)</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Examples */}
      <Card className="mb-12">
        <CardHeader>
          <h3 className="font-semibold text-[var(--color-foreground)]">
            Example IPv4 Addresses
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
                  <code className="font-mono font-semibold text-[var(--color-foreground)]">
                    {example.ip}
                  </code>
                  <p className="text-sm text-[var(--color-foreground-secondary)] mt-1">
                    {example.note}
                  </p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    example.valid
                      ? 'bg-[var(--color-success)] text-white'
                      : 'bg-[var(--color-error)] text-white'
                  }`}
                >
                  {example.valid ? 'Valid' : 'Invalid'}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Private Ranges */}
      <Card>
        <CardHeader>
          <h3 className="font-semibold text-[var(--color-foreground)]">
            Private IPv4 Ranges (RFC 1918)
          </h3>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-[var(--color-foreground-secondary)]">
          <p>10.0.0.0 - 10.255.255.255</p>
          <p>172.16.0.0 - 172.31.255.255</p>
          <p>192.168.0.0 - 192.168.255.255</p>
          <p className="pt-4 text-[var(--color-foreground)]">
            These ranges are reserved for private networks and not routable on the public internet.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
