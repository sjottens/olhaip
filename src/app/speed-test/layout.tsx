import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Internet Speed Test | OlhaIP',
  description:
    'Test your internet speed: measure download speed, upload speed, latency and jitter directly from your browser.',
  keywords: 'speed test, internet speed test, download speed, upload speed, ping, latency, jitter',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
