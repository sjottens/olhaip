'use client';

import { useEffect, useState } from 'react';
import { IPDisplay } from '@/components/ip/IPDisplay';
import { BrowserInfoDisplay } from '@/components/browser/BrowserInfoDisplay';
import { getBrowserInfo } from '@/lib/client-utils';
import type { BrowserInfo, IPInfo } from '@/lib/types';

export default function HomePage() {
  const [ipInfo, setIpInfo] = useState<Partial<IPInfo> | null>(null);
  const [browserInfo, setBrowserInfo] = useState<BrowserInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Get browser info immediately
    setBrowserInfo(getBrowserInfo());

    // Fetch IP info from server
    const fetchIP = async () => {
      try {
        const response = await fetch('/api/ip');
        if (!response.ok) throw new Error('Failed to fetch IP');
        const data = await response.json();
        setIpInfo(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchIP();
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl lg:text-5xl font-bold text-[var(--color-foreground)] mb-4">
          See what the internet sees.
        </h1>
        <p className="text-lg text-[var(--color-foreground-secondary)] max-w-2xl mx-auto">
          Check your public IP address and discover useful information about your internet connection, network and device.
        </p>
      </div>

      {/* IP Display Section */}
      <div className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-8 lg:p-12 mb-12 shadow-[var(--shadow-lg)]">
        {error && (
          <div className="text-center text-[var(--color-error)] mb-4">
            <p>{error}</p>
          </div>
        )}
        <IPDisplay ipv4={ipInfo?.ipv4} ipv6={ipInfo?.ipv6} loading={loading} />
      </div>

      {/* Information Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        <div className="bg-[var(--color-surface)] rounded-lg border border-[var(--color-border)] p-6">
          <h3 className="font-semibold text-[var(--color-foreground)] mb-3">
            What is an IP address?
          </h3>
          <p className="text-sm text-[var(--color-foreground-secondary)]">
            An IP address is a unique numerical identifier assigned to devices connected to the internet or a network. It's used to route data packets to the correct destination.
          </p>
        </div>

        <div className="bg-[var(--color-surface)] rounded-lg border border-[var(--color-border)] p-6">
          <h3 className="font-semibold text-[var(--color-foreground)] mb-3">
            Public vs Private IP
          </h3>
          <p className="text-sm text-[var(--color-foreground-secondary)]">
            Your public IP is visible to websites you visit. Private IPs are used within local networks. The IP shown above is your public IP address.
          </p>
        </div>

        <div className="bg-[var(--color-surface)] rounded-lg border border-[var(--color-border)] p-6">
          <h3 className="font-semibold text-[var(--color-foreground)] mb-3">
            Can it be changed?
          </h3>
          <p className="text-sm text-[var(--color-foreground-secondary)]">
            Yes. Most people have dynamic IPs that change periodically. Static IPs remain the same and are typically used for business purposes.
          </p>
        </div>
      </div>

      {/* Browser Information Section */}
      {browserInfo && (
        <div>
          <h2 className="text-2xl font-bold text-[var(--color-foreground)] mb-6">
            Your Browser Information
          </h2>
          <BrowserInfoDisplay info={browserInfo} />
        </div>
      )}
    </div>
  );
}
