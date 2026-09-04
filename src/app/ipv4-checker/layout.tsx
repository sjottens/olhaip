import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IPv4 Checker | OlhaIP',
  description: 'Learn about IPv4 addresses and validate IPv4 address formats.',
  keywords: 'IPv4, IPv4 checker, IP address format, private IPv4',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
