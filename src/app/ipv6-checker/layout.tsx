import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IPv6 Checker – Check Your IPv6 Address | OlhaIP',
  description: 'Validate IPv6 addresses and understand IPv6 formatting. Check if an IP address is valid IPv6 (128-bit) with examples and explanations.',
  keywords: 'IPv6, IPv6 checker, validate IPv6, IPv6 address format, next-generation IP',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
