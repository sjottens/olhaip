'use client';

import { useEffect, useState } from 'react';
import { getRequestHeaders } from '@/lib/server-utils';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

interface HeaderInfo {
  key: string;
  value: string;
  description?: string;
}

export default function HTTPHeadersPage() {
  const [headers, setHeaders] = useState<HeaderInfo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeaders = async () => {
      try {
        const response = await fetch('/api/headers');
        if (!response.ok) throw new Error('Failed to fetch headers');
        const data = await response.json();
        setHeaders(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchHeaders();
  }, []);

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Tools', href: '/ip-lookup' },
          { label: 'HTTP Headers', href: '/http-headers' },
        ]}
      />

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-[var(--color-foreground)] mb-4">
          HTTP Headers
        </h1>
        <p className="text-lg text-[var(--color-foreground-secondary)]">
          View the HTTP request headers sent by your browser. These headers contain metadata about your request.
        </p>
      </div>

      {/* Headers Display */}
      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold text-[var(--color-foreground)]">
            Your Request Headers
          </h2>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-8 text-[var(--color-foreground-secondary)]">
              Loading headers...
            </div>
          ) : headers.length > 0 ? (
            <div className="space-y-3">
              {headers.map((header) => (
                <div
                  key={header.key}
                  className="bg-[var(--color-background)] p-4 rounded-lg border border-[var(--color-border)]"
                >
                  <div className="flex items-start justify-between mb-2">
                    <code className="font-mono font-semibold text-[var(--color-foreground)]">
                      {header.key}
                    </code>
                  </div>
                  {header.description && (
                    <p className="text-xs text-[var(--color-foreground-secondary)] mb-2">
                      {header.description}
                    </p>
                  )}
                  <code className="block text-sm text-[var(--color-foreground-secondary)] font-mono break-all">
                    {header.value}
                  </code>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-[var(--color-foreground-secondary)]">
              No headers found
            </div>
          )}
        </CardContent>
      </Card>

      {/* Information */}
      <Card className="mt-8">
        <CardHeader>
          <h3 className="font-semibold text-[var(--color-foreground)]">
            Common HTTP Headers
          </h3>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-[var(--color-foreground-secondary)]">
          <div>
            <p className="font-medium text-[var(--color-foreground)] mb-1">User-Agent</p>
            <p>Information about the client making the request</p>
          </div>
          <div>
            <p className="font-medium text-[var(--color-foreground)] mb-1">Accept</p>
            <p>Content types the client can process</p>
          </div>
          <div>
            <p className="font-medium text-[var(--color-foreground)] mb-1">Accept-Language</p>
            <p>Preferred languages for the response</p>
          </div>
          <div>
            <p className="font-medium text-[var(--color-foreground)] mb-1">Accept-Encoding</p>
            <p>Compression methods the client can handle</p>
          </div>
          <div>
            <p className="font-medium text-[var(--color-foreground)] mb-1">Host</p>
            <p>The domain name of the server</p>
          </div>
          <div>
            <p className="font-medium text-[var(--color-foreground)] mb-1">Referer</p>
            <p>The URL of the page that linked to this page</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
