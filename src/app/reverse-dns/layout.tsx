import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reverse DNS Lookup | OlhaIP',
  description: 'Look up the hostname associated with an IP address.',
  keywords: 'reverse DNS, reverse DNS lookup, rDNS, hostname lookup',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
