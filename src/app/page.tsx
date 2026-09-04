'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
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
        setError(err instanceof Error ? err.message : 'Unable to detect IP address');
      } finally {
        setLoading(false);
      }
    };

    fetchIP();
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
      {/* Brand Statement */}
      <div className="text-center mb-8">
        <p className="text-sm font-medium text-[var(--color-primary)] mb-2 uppercase tracking-wide">
          See what the internet sees.
        </p>
      </div>

      {/* Main Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-6xl font-bold text-[var(--color-foreground)] mb-6">
          What Is My IP Address?
        </h1>
        <p className="text-lg text-[var(--color-foreground-secondary)] max-w-2xl mx-auto">
          Check your public IP address and discover useful information about your internet connection and network.
        </p>
      </div>

      {/* IP Display Card - Most Prominent */}
      <div className="bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-surface)]/80 rounded-2xl border border-[var(--color-border)] p-8 lg:p-16 mb-12 shadow-[var(--shadow-lg)]">
        {error && (
          <div className="text-center text-[var(--color-error)] mb-4 bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border border-red-200 dark:border-red-800">
            <p className="text-sm">{error}</p>
            <p className="text-xs text-[var(--color-foreground-secondary)] mt-2">
              Try refreshing the page or check your connection
            </p>
          </div>
        )}
        <IPDisplay ipv4={ipInfo?.ipv4} ipv6={ipInfo?.ipv6} loading={loading} />
      </div>

      {/* Trust & Privacy Section */}
      <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 rounded-xl p-6 lg:p-8 mb-12">
        <h2 className="text-lg font-semibold text-[var(--color-foreground)] mb-3">
          Your IP, Explained Simply
        </h2>
        <p className="text-[var(--color-foreground-secondary)] mb-4">
          OlhaIP helps you understand what websites and online services can see about your connection. Your IP address is visible to any website you visit and is used to route data to your device.
        </p>
        <Link
          href="/privacy"
          className="inline-flex items-center text-[var(--color-primary)] hover:text-[var(--color-primary)]/80 font-medium transition-colors"
        >
          Learn more about privacy →
        </Link>
      </div>

      {/* Information Cards */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-[var(--color-foreground)] mb-8">
          Understanding IP Addresses
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-[var(--color-surface)] rounded-lg border border-[var(--color-border)] p-6 hover:border-[var(--color-primary)]/50 transition-colors">
            <h3 className="font-semibold text-[var(--color-foreground)] mb-3">
              What is an IP address?
            </h3>
            <p className="text-sm text-[var(--color-foreground-secondary)] mb-4">
              An IP address is a unique numerical identifier assigned to devices connected to the internet or a network.
            </p>
            <Link
              href="/guides/what-is-an-ip-address"
              className="text-sm text-[var(--color-primary)] hover:underline font-medium"
            >
              Learn more →
            </Link>
          </div>

          <div className="bg-[var(--color-surface)] rounded-lg border border-[var(--color-border)] p-6 hover:border-[var(--color-primary)]/50 transition-colors">
            <h3 className="font-semibold text-[var(--color-foreground)] mb-3">
              Public vs Private IP
            </h3>
            <p className="text-sm text-[var(--color-foreground-secondary)] mb-4">
              Your public IP is visible to websites. Private IPs are used within local networks like your home.
            </p>
            <Link
              href="/guides/public-vs-private-ip"
              className="text-sm text-[var(--color-primary)] hover:underline font-medium"
            >
              Learn more →
            </Link>
          </div>

          <div className="bg-[var(--color-surface)] rounded-lg border border-[var(--color-border)] p-6 hover:border-[var(--color-primary)]/50 transition-colors">
            <h3 className="font-semibold text-[var(--color-foreground)] mb-3">
              Can it be changed?
            </h3>
            <p className="text-sm text-[var(--color-foreground-secondary)] mb-4">
              Most people have dynamic IPs that change periodically. Static IPs remain the same.
            </p>
            <Link
              href="/guides/static-vs-dynamic-ip"
              className="text-sm text-[var(--color-primary)] hover:underline font-medium"
            >
              Learn more →
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Links to Tools */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-[var(--color-foreground)] mb-8">
          Explore Our Tools
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            href="/ip-lookup"
            className="group bg-[var(--color-surface)] rounded-lg border border-[var(--color-border)] p-4 hover:border-[var(--color-primary)] transition-colors"
          >
            <div className="font-semibold text-[var(--color-foreground)] group-hover:text-[var(--color-primary)] transition-colors">
              IP Lookup
            </div>
            <p className="text-xs text-[var(--color-foreground-secondary)] mt-1">
              Look up any IP address
            </p>
          </Link>

          <Link
            href="/dns-lookup"
            className="group bg-[var(--color-surface)] rounded-lg border border-[var(--color-border)] p-4 hover:border-[var(--color-primary)] transition-colors"
          >
            <div className="font-semibold text-[var(--color-foreground)] group-hover:text-[var(--color-primary)] transition-colors">
              DNS Lookup
            </div>
            <p className="text-xs text-[var(--color-foreground-secondary)] mt-1">
              Check DNS records
            </p>
          </Link>

          <Link
            href="/browser-info"
            className="group bg-[var(--color-surface)] rounded-lg border border-[var(--color-border)] p-4 hover:border-[var(--color-primary)] transition-colors"
          >
            <div className="font-semibold text-[var(--color-foreground)] group-hover:text-[var(--color-primary)] transition-colors">
              Browser Info
            </div>
            <p className="text-xs text-[var(--color-foreground-secondary)] mt-1">
              See your browser details
            </p>
          </Link>

          <Link
            href="/http-headers"
            className="group bg-[var(--color-surface)] rounded-lg border border-[var(--color-border)] p-4 hover:border-[var(--color-primary)] transition-colors"
          >
            <div className="font-semibold text-[var(--color-foreground)] group-hover:text-[var(--color-primary)] transition-colors">
              HTTP Headers
            </div>
            <p className="text-xs text-[var(--color-foreground-secondary)] mt-1">
              View request headers
            </p>
          </Link>
        </div>
      </div>

      {/* Browser Information Section */}
      {browserInfo && (
        <div>
          <h2 className="text-2xl font-bold text-[var(--color-foreground)] mb-8">
            Your Browser Information
          </h2>
          <BrowserInfoDisplay info={browserInfo} />
        </div>
      )}
    </div>
  );
}
