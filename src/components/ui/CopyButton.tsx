'use client';

import React, { useState } from 'react';
import { copyToClipboard } from '@/lib/client-utils';
import { Button } from './Button';

interface CopyButtonProps {
  text: string;
  label?: string;
  className?: string;
}

export function CopyButton({
  text,
  label = 'Copy IP',
  className = '',
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const success = await copyToClipboard(text);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <Button
      onClick={handleCopy}
      variant={copied ? 'secondary' : 'primary'}
      size="lg"
      className={className}
      aria-label={`Copy ${text} to clipboard`}
    >
      {copied ? '✓ Copied!' : label}
    </Button>
  );
}
