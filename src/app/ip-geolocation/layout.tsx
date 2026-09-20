import { buildMetadata, baseTitle, SITE_URL } from '@/lib/seo';
import { generateWebApplicationSchema } from '@/lib/schema';
import { StructuredData } from '@/components/seo/StructuredData';

const title = 'IP Geolocation – Find Location From IP Address | OlhaIP';
const description =
  'Find the approximate location of any IP address. Learn how IP geolocation works, how accurate it is, and what it means for your privacy.';
const path = '/ip-geolocation';

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
