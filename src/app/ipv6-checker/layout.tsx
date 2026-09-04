import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IPv6 Checker | OlhaIP',
  description: 'Learn about IPv6 addresses and understand the next-generation internet protocol.',
  keywords: 'IPv6, IPv6 checker, IPv6 address format, next generation IP',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
