import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IP Address Lookup – Look Up Any IP | OlhaIP',
  description: 'Lookup any IPv4 or IPv6 address instantly. Identify the type, version, and validity of any IP address with our fast tool.',
  keywords: 'IP lookup, IPv4 lookup, IPv6 lookup, IP address checker, look up IP',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
