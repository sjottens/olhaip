import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DNS Lookup Tool | OlhaIP',
  description: 'Look up DNS records for any domain. View A, AAAA, MX, CNAME, and other DNS records.',
  keywords: 'DNS lookup, DNS records, A record, MX record, DNS resolver',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
