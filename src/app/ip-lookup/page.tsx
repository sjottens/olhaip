'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { isValidIPv4, isValidIPv6, getIPVersion } from '@/lib/client-utils';
import type { IPInfo } from '@/lib/types';

interface IPLookupResult {
  ip: string;
  version: 'ipv4' | 'ipv6' | 'invalid';
  info?: Partial<IPInfo>;
  error?: string;
}

export default function IPLookupPage() {
  const [ipInput, setIpInput] = useState('');
  const [result, setResult] = useState<IPLookupResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleLookup = async () => {
    setLoading(true);
    setSubmitted(true);

    const version = getIPVersion(ipInput);

    if (version === 'invalid') {
      setResult({
        ip: ipInput,
        version: 'invalid',
        error: 'Invalid IP address format',
      });
      setLoading(false);
      return;
    }

    // Simulate API lookup (in real implementation, would call backend API)
    // For now, just return the IP version detection
    setResult({
      ip: ipInput,
      version: version as 'ipv4' | 'ipv6',
      info: {
        [version === 'ipv4' ? 'ipv4' : 'ipv6']: ipInput,
      },
    });

    setLoading(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (ipInput.trim()) {
      handleLookup();
    }
  };

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-[var(--color-foreground)] mb-4">
          IP Address Lookup
        </h1>
        <p className="text-lg text-[var(--color-foreground-secondary)]">
          Enter an IP address to check its information. This tool can identify whether an IP is IPv4 or IPv6 and provides basic validation.
        </p>
      </div>

      {/* Lookup Form */}
      <Card className="mb-8">
        <CardHeader>
          <h2 className="text-xl font-semibold text-[var(--color-foreground)]">
            Look Up an IP Address
          </h2>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="ip-input" className="block text-sm font-medium text-[var(--color-foreground)] mb-2">
                IP Address
              </label>
              <input
                id="ip-input"
                type="text"
                value={ipInput}
                onChange={(e) => setIpInput(e.target.value)}
                placeholder="e.g., 8.8.8.8 or 2001:4860:4860::8888"
                className="w-full px-4 py-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-foreground)] placeholder-[var(--color-foreground-tertiary)] focus-visible:outline-2 focus-visible:outline-[var(--color-primary)]"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              disabled={!ipInput.trim() || loading}
            >
              {loading ? 'Checking...' : 'Look Up IP'}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Results */}
      {submitted && result && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold text-[var(--color-foreground)]">
                Lookup Result
              </h3>
            </CardHeader>
            <CardContent>
              {result.error ? (
                <div className="text-[var(--color-error)]">
                  <p className="font-semibold">{result.error}</p>
                  <p className="text-sm mt-2">
                    Please check your input and try again. Valid formats include:
                  </p>
                  <ul className="text-sm list-disc list-inside mt-2 space-y-1">
                    <li>IPv4: 192.168.1.1</li>
                    <li>IPv6: 2001:4860:4860::8888</li>
                  </ul>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="bg-[var(--color-background)] p-4 rounded-lg border border-[var(--color-border)]">
                    <p className="text-sm text-[var(--color-foreground-secondary)] mb-1">
                      IP Address
                    </p>
                    <p className="text-2xl font-mono font-bold text-[var(--color-foreground)]">
                      {result.ip}
                    </p>
                  </div>

                  <div className="bg-[var(--color-background)] p-4 rounded-lg border border-[var(--color-border)]">
                    <p className="text-sm text-[var(--color-foreground-secondary)] mb-1">
                      IP Version
                    </p>
                    <p className="text-lg font-semibold text-[var(--color-foreground)]">
                      {result.version === 'ipv4'
                        ? 'IPv4'
                        : result.version === 'ipv6'
                          ? 'IPv6'
                          : 'Invalid'}
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Information */}
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold text-[var(--color-foreground)]">
                About IP Lookup
              </h3>
            </CardHeader>
            <CardContent className="space-y-4 text-[var(--color-foreground-secondary)]">
              <p>
                IP lookup is a tool that retrieves information associated with a specific IP address. This includes details like geographical location, ISP information, and IP version.
              </p>
              <p>
                This basic tool validates whether an IP address is properly formatted as IPv4 or IPv6. More detailed information would require access to IP geolocation databases.
              </p>
            </CardContent>
          </Card>
        </div>
      )}

      {/* No Results State */}
      {!submitted && (
        <Card>
          <CardContent className="text-center py-12">
            <p className="text-[var(--color-foreground-secondary)]">
              Enter an IP address above to get started
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
