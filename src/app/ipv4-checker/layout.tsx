import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IPv4 Checker – Check Your IPv4 Address | OlhaIP',
  description: 'Validate IPv4 addresses and learn about IPv4 formatting. Check if an IP address is valid IPv4 (32-bit) or private RFC 1918 ranges.',
  keywords: 'IPv4, IPv4 checker, validate IPv4, IPv4 address format, private IP ranges',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
