import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

// Keep in sync with the routes under src/app. lastModified is deliberately
// omitted: a value that changes on every build would tell crawlers nothing.
const pages: { path: string; priority: number; changeFrequency: 'weekly' | 'monthly' | 'yearly' }[] = [
  { path: '', priority: 1.0, changeFrequency: 'weekly' },
  // Tools
  { path: '/ip-lookup', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/ipv4-checker', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/ipv6-checker', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/ip-validator', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/browser-info', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/speed-test', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/http-headers', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/dns-lookup', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/reverse-dns', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/ip-geolocation', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/isp-lookup', priority: 0.8, changeFrequency: 'monthly' },
  // Guides
  { path: '/guides', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/guides/what-is-an-ip-address', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/guides/ipv4-vs-ipv6', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/guides/public-vs-private-ip', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/guides/static-vs-dynamic-ip', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/guides/can-ip-address-change', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/guides/does-vpn-change-your-ip', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/guides/what-can-someone-do-with-your-ip', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/guides/how-dns-works', priority: 0.8, changeFrequency: 'monthly' },
  // Legal/Info
  { path: '/about', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/privacy', priority: 0.7, changeFrequency: 'yearly' },
  { path: '/terms', priority: 0.7, changeFrequency: 'yearly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency,
    priority,
  }));
}
