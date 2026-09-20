import { buildMetadata, baseTitle, SITE_URL } from '@/lib/seo';
import { generateWebApplicationSchema } from '@/lib/schema';
import { StructuredData } from '@/components/seo/StructuredData';

const title = 'IPv4 Checker – Check Your IPv4 Address | OlhaIP';
const description =
  'Validate IPv4 addresses and learn about IPv4 formatting. Check if an IP address is valid IPv4 (32-bit) or private RFC 1918 ranges.';
const path = '/ipv4-checker';

export const metadata = buildMetadata({ title, description, path });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <StructuredData
        schema={generateWebApplicationSchema(baseTitle(title), description, `${SITE_URL}${path}`)}
      />
      {children}
    </>
  );
}
