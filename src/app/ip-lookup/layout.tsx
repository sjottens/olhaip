import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IP Address Lookup Tool | OlhaIP',
  description:
    'Look up any IP address to check its type (IPv4 or IPv6) and validate its format.',
  keywords: 'IP lookup, IPv4, IPv6, IP address tool',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
