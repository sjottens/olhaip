import { buildMetadata, baseTitle, SITE_URL } from '@/lib/seo';
import { generateArticleSchema } from '@/lib/schema';
import { StructuredData } from '@/components/seo/StructuredData';

const title = 'How DNS Works | OlhaIP';
const description =
  'Understand how DNS (Domain Name System) works and how domain names are resolved to IP addresses.';
const path = '/guides/how-dns-works';

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
