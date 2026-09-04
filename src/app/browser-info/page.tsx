'use client';

import { useEffect, useState } from 'react';
import { getBrowserInfo } from '@/lib/client-utils';
import { BrowserInfoDisplay } from '@/components/browser/BrowserInfoDisplay';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import type { BrowserInfo } from '@/lib/types';

export default function BrowserInfoPage() {
  const [browserInfo, setBrowserInfo] = useState<BrowserInfo | null>(null);

  useEffect(() => {
    setBrowserInfo(getBrowserInfo());
  }, []);

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-[var(--color-foreground)] mb-4">
          My Browser Information
        </h1>
        <p className="text-lg text-[var(--color-foreground-secondary)]">
          View technical details about your browser and system. This information is detected locally on your device.
        </p>
      </div>

      {/* Browser Information */}
      {browserInfo && (
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[var(--color-foreground)] mb-6">
            Your Browser
          </h2>
          <BrowserInfoDisplay info={browserInfo} />
        </div>
      )}

      {/* User Agent */}
      <Card className="mb-8">
        <CardHeader>
          <h3 className="font-semibold text-[var(--color-foreground)]">
            User Agent String
          </h3>
        </CardHeader>
        <CardContent>
          {browserInfo && (
            <code className="block bg-[var(--color-background)] p-4 rounded-lg border border-[var(--color-border)] text-xs font-mono text-[var(--color-foreground)] break-all">
              {browserInfo.userAgent}
            </code>
          )}
        </CardContent>
      </Card>

      {/* Information */}
      <Card>
        <CardHeader>
          <h3 className="font-semibold text-[var(--color-foreground)]">
            About This Information
          </h3>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-[var(--color-foreground-secondary)]">
          <div>
            <p className="font-medium text-[var(--color-foreground)] mb-1">Browser Name & Version</p>
            <p>
              The web browser you're using and its version number. This helps identify compatibility with web features.
            </p>
          </div>
          <div>
            <p className="font-medium text-[var(--color-foreground)] mb-1">Operating System</p>
            <p>
              The operating system running on your device, such as Windows, macOS, Linux, Android, or iOS.
            </p>
          </div>
          <div>
            <p className="font-medium text-[var(--color-foreground)] mb-1">Device Type</p>
            <p>
              Whether you're on a desktop, mobile phone, or tablet. Used for responsive web design optimization.
            </p>
          </div>
          <div>
            <p className="font-medium text-[var(--color-foreground)] mb-1">Screen Resolution</p>
            <p>
              Your current viewport dimensions, which affects how websites display and layout.
            </p>
          </div>
          <div>
            <p className="font-medium text-[var(--color-foreground)] mb-1">Timezone</p>
            <p>
              Your local timezone based on your operating system settings.
            </p>
          </div>
          <div>
            <p className="font-medium text-[var(--color-foreground)] mb-1">Language Preference</p>
            <p>
              The preferred language(s) set in your browser, which websites can use for localization.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
