import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata = {
  title: 'Guides & Articles | OlhaIP',
  description:
    'Learn about IP addresses, networking concepts, DNS, and internet technologies.',
  keywords: 'guides, articles, tutorials, IP address education',
};

const guides = [
  {
    slug: 'what-is-an-ip-address',
    title: 'What Is an IP Address?',
    description:
      'A comprehensive guide to understanding IP addresses, how they work, and their importance in internet communication.',
    keywords: 'IP address, what is IP, internet protocol',
  },
  {
    slug: 'ipv4-vs-ipv6',
    title: 'IPv4 vs IPv6: What\'s the Difference?',
    description:
      'Compare IPv4 and IPv6 addressing systems, their key differences, and why IPv6 is the future.',
    keywords: 'IPv4, IPv6, comparison, differences',
  },
  {
    slug: 'public-vs-private-ip',
    title: 'Public vs Private IP Addresses',
    description:
      'Understand the difference between public and private IP addresses and how they\'re used in networks.',
    keywords: 'public IP, private IP, RFC 1918',
  },
  {
    slug: 'static-vs-dynamic-ip',
    title: 'Static vs Dynamic IP Addresses',
    description:
      'Learn about static and dynamic IP addresses, their uses, and when each is appropriate.',
    keywords: 'static IP, dynamic IP, DHCP',
  },
  {
    slug: 'how-dns-works',
    title: 'How DNS Works',
    description:
      'A guide to the Domain Name System (DNS) and how domain names are translated to IP addresses.',
    keywords: 'DNS, domain name system, DNS resolver',
  },
  {
    slug: 'can-ip-address-change',
    title: 'Can Your IP Address Change?',
    description:
      'Understand when and why IP addresses change, and whether you can keep a static IP.',
    keywords: 'IP address change, dynamic IP, DHCP lease',
  },
  {
    slug: 'what-can-someone-do-with-your-ip',
    title: 'What Can Someone Do With Your IP Address?',
    description:
      'Learn what information can be obtained from an IP address and privacy considerations.',
    keywords: 'IP address privacy, IP address security, geolocation',
  },
  {
    slug: 'does-vpn-change-your-ip',
    title: 'Does a VPN Change Your IP Address?',
    description:
      'Understand how VPNs work and how they change your apparent IP address online.',
    keywords: 'VPN, IP address, privacy',
  },
];

export default function GuidesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Guides', href: '/guides' },
        ]}
      />

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-[var(--color-foreground)] mb-4">
          Guides & Articles
        </h1>
        <p className="text-lg text-[var(--color-foreground-secondary)]">
          Learn about IP addresses, networking, DNS, and internet technologies.
        </p>
      </div>

      {/* Guides Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {guides.map((guide) => (
          <Link key={guide.slug} href={`/guides/${guide.slug}`}>
            <Card className="h-full hover:shadow-[var(--shadow-lg)] transition-shadow cursor-pointer">
              <CardHeader>
                <h3 className="text-lg font-semibold text-[var(--color-foreground)]">
                  {guide.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[var(--color-foreground-secondary)]">
                  {guide.description}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
