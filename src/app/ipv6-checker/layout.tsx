import { buildMetadata, baseTitle, SITE_URL } from '@/lib/seo';
import { generateWebApplicationSchema } from '@/lib/schema';
import { StructuredData } from '@/components/seo/StructuredData';

const title = 'IPv6 Checker – Check Your IPv6 Address | OlhaIP';
const description =
  'Validate IPv6 addresses and understand IPv6 formatting. Check if an IP address is valid IPv6 (128-bit) with examples and explanations.';
const path = '/ipv6-checker';

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
