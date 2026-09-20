import { buildMetadata, baseTitle, SITE_URL } from '@/lib/seo';
import { generateArticleSchema } from '@/lib/schema';
import { StructuredData } from '@/components/seo/StructuredData';

const title = 'Can Your IP Address Change | OlhaIP';
const description =
  'Learn when and why your IP address changes, and what you can do about it if you want to keep or change it.';
const path = '/guides/can-ip-address-change';

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
