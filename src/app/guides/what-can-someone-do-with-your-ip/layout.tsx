import { buildMetadata, baseTitle, SITE_URL } from '@/lib/seo';
import { generateArticleSchema } from '@/lib/schema';
import { StructuredData } from '@/components/seo/StructuredData';

const title = 'What Can Someone Do With Your IP Address | OlhaIP';
const description =
  'Understand what information can be revealed from an IP address and what the real privacy implications are.';
const path = '/guides/what-can-someone-do-with-your-ip';

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
