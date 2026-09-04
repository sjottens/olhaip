import type { SchemaOrg } from '@/lib/schema';

interface StructuredDataProps {
  schema: SchemaOrg;
}

export function StructuredData({ schema }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
