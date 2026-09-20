import { buildMetadata } from '@/lib/seo';

const title = 'What Is an IP Address? | OlhaIP';
const description =
  'A comprehensive guide to understanding IP addresses, how they work, and their importance in internet communication.';
const path = '/guides/what-is-an-ip-address';

export const metadata = buildMetadata({ title, description, path, type: 'article' });

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
