import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Public vs Private IP Addresses | OlhaIP',
  description: 'Understand the difference between public and private IP addresses and how they are used in networks.',
};

export default function PublicVsPrivateLayout({ children }: { children: React.ReactNode }) {
  return children;
}
