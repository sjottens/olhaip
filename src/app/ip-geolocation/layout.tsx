import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IP Geolocation – Find Location From IP Address | OlhaIP',
  description: 'Determine the approximate geographical location of an IP address. Understand IP geolocation accuracy and privacy implications. City/region level precision.',
  keywords: 'IP geolocation, geolocation, IP location, find location, geoIP, IP address location',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
