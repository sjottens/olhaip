'use client';

import React from 'react';
import { CopyButton } from '@/components/ui/CopyButton';

interface IPDisplayProps {
  ipv4?: string;
  ipv6?: string;
  loading?: boolean;
}

export function IPDisplay({ ipv4, ipv6, loading = false }: IPDisplayProps) {
  if (loading) {
    return (
      <div className="text-center">
        <div className="animate-pulse">
          <div className="h-12 bg-[var(--color-surface)] rounded-lg w-48 mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="text-center space-y-8">
      {ipv4 && (
        <div>
          <p className="text-sm font-medium text-[var(--color-foreground-secondary)] mb-3">
            YOUR PUBLIC IP ADDRESS
          </p>
          <p className="text-5xl font-bold font-mono text-[var(--color-foreground)] mb-6 break-all">
            {ipv4}
          </p>
          <CopyButton text={ipv4} label="Copy IP" />
        </div>
      )}

      {ipv6 && (
        <div>
          <p className="text-sm font-medium text-[var(--color-foreground-secondary)] mb-3">
            IPV6 ADDRESS
          </p>
          <p className="text-3xl font-bold font-mono text-[var(--color-foreground)] mb-4 break-all">
            {ipv6}
          </p>
          <CopyButton text={ipv6} label="Copy IPv6" />
        </div>
      )}

      {!ipv4 && !ipv6 && (
        <div className="text-[var(--color-foreground-secondary)]">
          <p className="text-lg">Unable to detect IP address</p>
        </div>
      )}
    </div>
  );
}
