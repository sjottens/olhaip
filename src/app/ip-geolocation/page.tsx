'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';

export default function IPGeolocationPage() {
  const [ipInput, setIpInput] = useState('');
  const [result, setResult] = useState<{ ip: string; error?: string } | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleLookup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSubmitted(true);

    // Simulate geolocation lookup
    setResult({
      ip: ipInput,
      error:
        'Full IP geolocation requires backend integration with geolocation databases.',
    });

    setLoading(false);
  };

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-[var(--color-foreground)] mb-4">
          IP Geolocation
        </h1>
        <p className="text-lg text-[var(--color-foreground-secondary)]">
          Determine the approximate geographical location of an IP address.
        </p>
      </div>

      {/* Lookup Form */}
      <Card className="mb-8">
        <CardHeader>
          <h2 className="text-xl font-semibold text-[var(--color-foreground)]">
            Geolocate an IP
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
              {loading ? 'Geolocating...' : 'Geolocate IP'}
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
                Geolocation for {result.ip}
              </h3>
            </CardHeader>
            <CardContent>
              {result.error ? (
                <div className="text-sm text-[var(--color-foreground-secondary)]">
                  {result.error}
                </div>
              ) : (
                <p className="text-sm text-[var(--color-foreground-secondary)]">
                  No location data available
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      )}

      {/* Important Disclaimer */}
      <Card className="mb-8 border-[var(--color-warning)]">
        <CardHeader>
          <h3 className="font-semibold text-[var(--color-warning)]">
            ⚠️ Important Disclaimer
          </h3>
        </CardHeader>
        <CardContent className="text-sm text-[var(--color-foreground-secondary)] space-y-3">
          <p>
            IP geolocation provides an approximate location based on network information. It does NOT:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Identify a person's exact physical location</li>
            <li>Reveal home addresses or precise coordinates</li>
            <li>Provide privacy violation capabilities</li>
            <li>Replace official location tracking methods</li>
          </ul>
          <p>
            Geolocation accuracy varies from city-level to regional accuracy, depending on the data source. It's based on where the ISP's network infrastructure is located, not the user's actual location.
          </p>
        </CardContent>
      </Card>

      {/* Information */}
      <Card>
        <CardHeader>
          <h3 className="font-semibold text-[var(--color-foreground)]">
            How IP Geolocation Works
          </h3>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-[var(--color-foreground-secondary)]">
          <p>
            IP geolocation databases contain mappings between IP address ranges and geographical locations. These databases are built by:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-3">
            <li>ISP registration information</li>
            <li>Regional Internet Registry (RIR) allocations</li>
            <li>User-submitted location data</li>
            <li>Network performance measurements</li>
          </ul>
          <p className="mt-4">
            The accuracy varies depending on the method and data source. Large ISPs are usually accurately located, while smaller networks may have less precise data.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
