import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Can Your IP Address Change | OlhaIP',
  description: 'Learn when and why your IP address changes, and what you can do about it.',
};

export default function CanIPChangeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
