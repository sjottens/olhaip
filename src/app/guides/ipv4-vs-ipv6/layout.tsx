import { buildMetadata, baseTitle, SITE_URL } from '@/lib/seo';
import { generateArticleSchema } from '@/lib/schema';
import { StructuredData } from '@/components/seo/StructuredData';

const title = 'IPv4 vs IPv6: What Is the Difference? | OlhaIP';
const description =
  'Compare IPv4 and IPv6: address format, address space, and the key differences between the two internet protocols.';
const path = '/guides/ipv4-vs-ipv6';

export const metadata = buildMetadata({ title, description, path, type: 'article' });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <StructuredData
        schema={generateArticleSchema(baseTitle(title), description, `${SITE_URL}${path}`)}
      />
      {children}
    </>
  );
}
