import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Static vs Dynamic IP Addresses | OlhaIP',
  description: 'Learn the difference between static and dynamic IP addresses, and when each is used.',
};

export default function StaticVsDynamicLayout({ children }: { children: React.ReactNode }) {
  return children;
}
