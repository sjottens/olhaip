import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How DNS Works | OlhaIP',
  description: 'Understand how DNS (Domain Name System) works and how domain names are resolved to IP addresses.',
};

export default function HowDNSWorksLayout({ children }: { children: React.ReactNode }) {
  return children;
}
