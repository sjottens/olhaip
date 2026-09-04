'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { getIPVersion } from '@/lib/client-utils';

export default function IPValidatorPage() {
  const [ipInput, setIpInput] = useState('');
  const [result, setResult] = useState<{ ip: string; version: string; valid: boolean } | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleValidate = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const version = getIPVersion(ipInput);
    const valid = version !== 'invalid';

    setResult({
      ip: ipInput,
      version:
        version === 'ipv4'
          ? 'IPv4'
          : version === 'ipv6'
            ? 'IPv6'
            : 'Invalid',
      valid,
    });
  };

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-[var(--color-foreground)] mb-4">
          IP Address Validator
        </h1>
        <p className="text-lg text-[var(--color-foreground-secondary)]">
          Validate whether a string is a valid IP address. This tool checks for correct format in both IPv4 and IPv6.
        </p>
      </div>

      {/* Validation Form */}
      <Card className="mb-8">
        <CardHeader>
          <h2 className="text-xl font-semibold text-[var(--color-foreground)]">
            Validate an IP Address
          </h2>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleValidate} className="space-y-4">
            <div>
              <label htmlFor="ip-input" className="block text-sm font-medium text-[var(--color-foreground)] mb-2">
                IP Address
              </label>
              <input
                id="ip-input"
                type="text"
                value={ipInput}
                onChange={(e) => setIpInput(e.target.value)}
                placeholder="Enter any IP address"
                className="w-full px-4 py-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-foreground)] placeholder-[var(--color-foreground-tertiary)] focus-visible:outline-2 focus-visible:outline-[var(--color-primary)]"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              disabled={!ipInput.trim()}
            >
              Validate IP
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
                Validation Result
              </h3>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-[var(--color-background)] p-4 rounded-lg border border-[var(--color-border)]">
                <p className="text-sm text-[var(--color-foreground-secondary)] mb-1">
                  Input
                </p>
                <p className="text-2xl font-mono font-bold text-[var(--color-foreground)]">
                  {result.ip}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[var(--color-background)] p-4 rounded-lg border border-[var(--color-border)]">
                  <p className="text-sm text-[var(--color-foreground-secondary)] mb-1">
                    Validation Status
                  </p>
                  <p
                    className={`text-lg font-semibold ${
                      result.valid
                        ? 'text-[var(--color-success)]'
                        : 'text-[var(--color-error)]'
                    }`}
                  >
                    {result.valid ? '✓ Valid' : '✗ Invalid'}
                  </p>
                </div>

                <div className="bg-[var(--color-background)] p-4 rounded-lg border border-[var(--color-border)]">
                  <p className="text-sm text-[var(--color-foreground-secondary)] mb-1">
                    IP Version
                  </p>
                  <p className="text-lg font-semibold text-[var(--color-foreground)]">
                    {result.version}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Information */}
      <Card>
        <CardHeader>
          <h3 className="font-semibold text-[var(--color-foreground)]">
            How IP Validation Works
          </h3>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-[var(--color-foreground-secondary)]">
          <div>
            <p className="font-medium text-[var(--color-foreground)] mb-1">IPv4 Validation</p>
            <p>
              Checks that the input contains four numbers separated by dots, with each number between 0-255.
            </p>
          </div>
          <div>
            <p className="font-medium text-[var(--color-foreground)] mb-1">IPv6 Validation</p>
            <p>
              Checks that the input contains valid hexadecimal digits and colons in the correct format.
            </p>
          </div>
          <div>
            <p className="font-medium text-[var(--color-foreground)] mb-1">Invalid Formats</p>
            <p>
              Invalid entries include malformed addresses, out-of-range numbers, or unrecognized formats.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
