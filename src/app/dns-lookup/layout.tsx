import { buildMetadata, baseTitle, SITE_URL } from '@/lib/seo';
import { generateWebApplicationSchema } from '@/lib/schema';
import { StructuredData } from '@/components/seo/StructuredData';

const title = 'DNS Lookup Tool | OlhaIP';
const description =
  'Look up DNS records for any domain. View A, AAAA, MX, CNAME, TXT and NS records instantly with our free DNS lookup tool.';
const path = '/dns-lookup';

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
