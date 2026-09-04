import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Does a VPN Change Your IP Address | OlhaIP',
  description: 'Learn how VPNs change your IP address and why this matters for privacy.',
};

export default function DoesVPNChangeIPLayout({ children }: { children: React.ReactNode }) {
  return children;
}
