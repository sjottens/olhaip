import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ISP Lookup Tool | OlhaIP',
  description: 'Find the Internet Service Provider (ISP) and organization associated with an IP address.',
  keywords: 'ISP lookup, internet service provider, ASN, autonomous system',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
