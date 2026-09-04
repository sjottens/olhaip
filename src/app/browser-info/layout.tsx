import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Browser Information | OlhaIP',
  description: 'Check your browser name, operating system, device type, screen resolution, and other system information.',
  keywords: 'browser info, user agent, operating system, device type',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
