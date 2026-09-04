import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IP Geolocation Tool | OlhaIP',
  description: 'Find the approximate geographical location of an IP address. IP geolocation provides city or region-level accuracy.',
  keywords: 'IP geolocation, IP location, geoIP, geolocation',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
