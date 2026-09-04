import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HTTP Headers Viewer | OlhaIP',
  description: 'View the HTTP request headers sent by your browser.',
  keywords: 'HTTP headers, request headers, user agent',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
