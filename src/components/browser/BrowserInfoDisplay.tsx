'use client';

import React from 'react';
import type { BrowserInfo } from '@/lib/types';

interface BrowserInfoDisplayProps {
  info: BrowserInfo;
}

export function BrowserInfoDisplay({ info }: BrowserInfoDisplayProps) {
  const items = [
    { label: 'Browser', value: info.browser ? `${info.browser}${info.browserVersion ? ` ${info.browserVersion}` : ''}` : 'Unknown' },
    { label: 'Operating System', value: info.os ? `${info.os}${info.osVersion ? ` ${info.osVersion}` : ''}` : 'Unknown' },
    { label: 'Device Type', value: info.deviceType ? info.deviceType.charAt(0).toUpperCase() + info.deviceType.slice(1) : 'Unknown' },
    { label: 'Screen Resolution', value: info.screenResolution || 'Unknown' },
    { label: 'Language', value: info.language || 'Unknown' },
    { label: 'Timezone', value: info.timezone || 'Unknown' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((item) => (
        <div key={item.label} className="bg-[var(--color-background)] p-4 rounded-lg border border-[var(--color-border)]">
          <p className="text-xs font-semibold text-[var(--color-foreground-secondary)] uppercase tracking-wide mb-1">
            {item.label}
          </p>
          <p className="text-lg font-semibold text-[var(--color-foreground)]">{item.value}</p>
        </div>
      ))}
    </div>
  );
}
