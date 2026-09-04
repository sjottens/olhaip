import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IP Address Validator | OlhaIP',
  description: 'Check if a string is a valid IP address (IPv4 or IPv6).',
  keywords: 'IP validator, validate IP, IPv4 validator, IPv6 validator',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
