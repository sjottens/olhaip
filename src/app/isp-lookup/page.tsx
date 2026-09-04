'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { isValidIPv4, isValidIPv6 } from '@/lib/client-utils';

export default function ISPLookupPage() {
  const [ipInput, setIpInput] = useState('');
  const [result, setResult] = useState<{ ip: string; error?: string } | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleLookup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSubmitted(true);

    const isValid = isValidIPv4(ipInput) || isValidIPv6(ipInput);

    if (!isValid) {
      setResult({
        ip: ipInput,
        error: 'Invalid IP address format',
      });
      setLoading(false);
      return;
    }

    // Simulate ISP lookup
    setResult({
      ip: ipInput,
      error:
        'Full ISP information requires backend integration with ISP databases.',
    });

    setLoading(false);
  };

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-[var(--color-foreground)] mb-4">
          ISP Lookup
        </h1>
        <p className="text-lg text-[var(--color-foreground-secondary)]">
          Identify the Internet Service Provider (ISP) and organization associated with an IP address.
        </p>
      </div>

      {/* Lookup Form */}
      <Card className="mb-8">
        <CardHeader>
          <h2 className="text-xl font-semibold text-[var(--color-foreground)]">
            Look Up ISP Information
          </h2>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLookup} className="space-y-4">
            <div>
              <label htmlFor="ip-input" className="block text-sm font-medium text-[var(--color-foreground)] mb-2">
                IP Address
              </label>
              <input
                id="ip-input"
                type="text"
                value={ipInput}
                onChange={(e) => setIpInput(e.target.value)}
                placeholder="e.g., 8.8.8.8"
                className="w-full px-4 py-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-foreground)] placeholder-[var(--color-foreground-tertiary)] focus-visible:outline-2 focus-visible:outline-[var(--color-primary)]"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              disabled={!ipInput.trim() || loading}
            >
              {loading ? 'Looking Up...' : 'Look Up ISP'}
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
                ISP for {result.ip}
              </h3>
            </CardHeader>
            <CardContent>
              {result.error ? (
                <div className="text-sm text-[var(--color-foreground-secondary)]">
                  {result.error}
                </div>
              ) : (
                <p className="text-sm text-[var(--color-foreground-secondary)]">
                  No ISP data available
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      )}

      {/* Information */}
      <Card className="mb-8">
        <CardHeader>
          <h3 className="font-semibold text-[var(--color-foreground)]">
            What is an ISP?
          </h3>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-[var(--color-foreground-secondary)]">
          <p>
            An Internet Service Provider (ISP) is an organization that provides services for accessing and using the internet. ISPs operate the networks that connect your device to the internet.
          </p>
          <p>
            Each ISP operates one or more networks and is assigned ranges of IP addresses by regional internet registries. ISP lookup tools identify which ISP owns or operates a particular IP address range.
          </p>
        </CardContent>
      </Card>

      {/* ISP Information Types */}
      <Card>
        <CardHeader>
          <h3 className="font-semibold text-[var(--color-foreground)]">
            ISP Information Available
          </h3>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-[var(--color-foreground-secondary)]">
          <div>
            <p className="font-medium text-[var(--color-foreground)] mb-1">Organization Name</p>
            <p>The registered name of the ISP or organization</p>
          </div>
          <div>
            <p className="font-medium text-[var(--color-foreground)] mb-1">Autonomous System Number (ASN)</p>
            <p>A unique number assigned to identify the network</p>
          </div>
          <div>
            <p className="font-medium text-[var(--color-foreground)] mb-1">Network Range</p>
            <p>The IP address range owned or operated by the organization</p>
          </div>
          <div>
            <p className="font-medium text-[var(--color-foreground)] mb-1">Type of Network</p>
            <p>Such as "ISP", "Business", "Hosting", etc.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
