import { buildMetadata, baseTitle, SITE_URL } from '@/lib/seo';
import { generateWebApplicationSchema } from '@/lib/schema';
import { StructuredData } from '@/components/seo/StructuredData';

const title = 'ISP Lookup Tool | OlhaIP';
const description =
  'Find the Internet Service Provider (ISP) and organization associated with an IP address using our free ISP lookup tool.';
const path = '/isp-lookup';

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
