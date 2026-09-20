import { buildMetadata, baseTitle, SITE_URL } from '@/lib/seo';
import { generateArticleSchema } from '@/lib/schema';
import { StructuredData } from '@/components/seo/StructuredData';

const title = 'Static vs Dynamic IP Addresses | OlhaIP';
const description =
  'Learn the difference between static and dynamic IP addresses, how each is assigned, and when each is used.';
const path = '/guides/static-vs-dynamic-ip';

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
