'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { RelatedTools } from '@/components/ui/RelatedTools';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

interface DNSRecord {
  type: string;
  value: string;
}

interface DNSResult {
  domain: string;
  records: DNSRecord[];
  error?: string;
}

export default function DNSLookupPage() {
  const [domainInput, setDomainInput] = useState('');
  const [result, setResult] = useState<DNSResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleLookup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSubmitted(true);

    // Simulate DNS lookup (in real implementation would call backend API)
    setResult({
      domain: domainInput,
      records: [],
      error:
        'Full DNS lookup requires backend integration with DNS libraries. This is a placeholder.',
    });

    setLoading(false);
  };

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Tools', href: '/ip-lookup' },
          { label: 'DNS Lookup', href: '/dns-lookup' },
        ]}
      />

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-[var(--color-foreground)] mb-4">
          DNS Lookup
        </h1>
        <p className="text-lg text-[var(--color-foreground-secondary)]">
          Look up DNS records for a domain. DNS (Domain Name System) translates domain names to IP addresses.
        </p>
      </div>

      {/* Lookup Form */}
      <Card className="mb-8">
        <CardHeader>
          <h2 className="text-xl font-semibold text-[var(--color-foreground)]">
            Lookup DNS Records
          </h2>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLookup} className="space-y-4">
            <div>
              <label htmlFor="domain-input" className="block text-sm font-medium text-[var(--color-foreground)] mb-2">
                Domain Name
              </label>
              <input
                id="domain-input"
                type="text"
                value={domainInput}
                onChange={(e) => setDomainInput(e.target.value)}
                placeholder="e.g., google.com"
                className="w-full px-4 py-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-foreground)] placeholder-[var(--color-foreground-tertiary)] focus-visible:outline-2 focus-visible:outline-[var(--color-primary)]"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              disabled={!domainInput.trim() || loading}
            >
              {loading ? 'Looking Up...' : 'Look Up DNS'}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Results */}
      {submitted && result && (
        <div className="mb-12">
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold text-[var(--color-foreground)]">
                DNS Records for {result.domain}
              </h3>
            </CardHeader>
            <CardContent>
              {result.error ? (
                <div className="text-sm text-[var(--color-foreground-secondary)]">
                  {result.error}
                </div>
              ) : result.records.length > 0 ? (
                <div className="space-y-3">
                  {result.records.map((record, index) => (
                    <div
                      key={index}
                      className="bg-[var(--color-background)] p-3 rounded-lg border border-[var(--color-border)]"
                    >
                      <p className="text-sm font-mono font-semibold text-[var(--color-foreground)]">
                        {record.type}: {record.value}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-[var(--color-foreground-secondary)]">
                  No records found
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      )}

      {/* Information */}
      <Card>
        <CardHeader>
          <h3 className="font-semibold text-[var(--color-foreground)]">
            Common DNS Record Types
          </h3>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-[var(--color-foreground-secondary)]">
          <div>
            <p className="font-medium text-[var(--color-foreground)] mb-1">A Record</p>
            <p>Maps a domain name to an IPv4 address</p>
          </div>
          <div>
            <p className="font-medium text-[var(--color-foreground)] mb-1">AAAA Record</p>
            <p>Maps a domain name to an IPv6 address</p>
          </div>
          <div>
            <p className="font-medium text-[var(--color-foreground)] mb-1">MX Record</p>
            <p>Mail exchange record directing mail to mail servers</p>
          </div>
          <div>
            <p className="font-medium text-[var(--color-foreground)] mb-1">CNAME Record</p>
            <p>Canonical name record creating alias for domain</p>
          </div>
          <div>
            <p className="font-medium text-[var(--color-foreground)] mb-1">TXT Record</p>
            <p>Text record for various DNS purposes</p>
          </div>
          <div>
            <p className="font-medium text-[var(--color-foreground)] mb-1">NS Record</p>
            <p>Nameserver record directing to authoritative DNS servers</p>
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
            href: '/ip-lookup',
            title: 'IP Lookup',
            description: 'Look up any IP address',
          },
          {
            href: '/reverse-dns',
            title: 'Reverse DNS',
            description: 'Reverse DNS lookup',
          },
          {
            href: '/http-headers',
            title: 'HTTP Headers',
            description: 'View request headers',
          },
          {
            href: '/guides/how-dns-works',
            title: 'How DNS Works',
            description: 'DNS fundamentals guide',
          },
          {
            href: '/guides/what-is-an-ip-address',
            title: 'What is an IP Address?',
            description: 'IP basics guide',
          },
        ]}
      />
    </div>
  );
}
