import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Can Someone Do With Your IP Address | OlhaIP',
  description: 'Understand what information can be revealed from an IP address and privacy implications.',
};

export default function WhatCanTheyDoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
