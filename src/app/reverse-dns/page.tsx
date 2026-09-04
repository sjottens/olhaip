'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { isValidIPv4, isValidIPv6 } from '@/lib/client-utils';

export default function ReverseDNSPage() {
  const [ipInput, setIpInput] = useState('');
  const [result, setResult] = useState<{ ip: string; hostname?: string; error?: string } | null>(null);
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

    // Simulate reverse DNS lookup
    setResult({
      ip: ipInput,
      error: 'Full reverse DNS lookup requires backend integration.',
    });

    setLoading(false);
  };

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-[var(--color-foreground)] mb-4">
          Reverse DNS Lookup
        </h1>
        <p className="text-lg text-[var(--color-foreground-secondary)]">
          Look up the hostname associated with an IP address. This is the opposite of a regular DNS lookup.
        </p>
      </div>

      {/* Lookup Form */}
      <Card className="mb-8">
        <CardHeader>
          <h2 className="text-xl font-semibold text-[var(--color-foreground)]">
            Reverse Lookup an IP
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
              {loading ? 'Looking Up...' : 'Reverse Lookup'}
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
                Result for {result.ip}
              </h3>
            </CardHeader>
            <CardContent>
              {result.error ? (
                <div className="text-sm text-[var(--color-foreground-secondary)]">
                  {result.error}
                </div>
              ) : result.hostname ? (
                <div className="bg-[var(--color-background)] p-4 rounded-lg border border-[var(--color-border)]">
                  <p className="text-sm text-[var(--color-foreground-secondary)] mb-1">
                    Hostname
                  </p>
                  <p className="text-lg font-mono font-semibold text-[var(--color-foreground)]">
                    {result.hostname}
                  </p>
                </div>
              ) : (
                <p className="text-sm text-[var(--color-foreground-secondary)]">
                  No hostname found for this IP
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
            About Reverse DNS
          </h3>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-[var(--color-foreground-secondary)]">
          <p>
            Reverse DNS (rDNS) lookup queries DNS servers to retrieve a hostname associated with an IP address.
          </p>
          <p>
            Not all IP addresses have a reverse DNS entry. The entry is created by whoever owns the IP address range and configures the reverse DNS zone.
          </p>
          <p>
            Email servers often use reverse DNS lookups for spam prevention. Legitimate mail servers typically have reverse DNS configured.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
