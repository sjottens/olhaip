'use client';

import Link from 'next/link';
import { generateBreadcrumbSchema } from '@/lib/schema';
import { StructuredData } from '../seo/StructuredData';

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  if (!items.length) return null;

  const schema = generateBreadcrumbSchema(
    items.map((item) => ({
      name: item.label,
      url: `https://olhaip.com${item.href}`,
    }))
  );

  return (
    <>
      <StructuredData schema={schema} />
      <nav
        className="mb-8 text-sm"
        aria-label="Breadcrumb"
      >
        <ol className="flex flex-wrap items-center space-x-2">
          {items.map((item, index) => (
            <li key={`breadcrumb-${index}`} className="flex items-center space-x-2">
              {index > 0 && (
                <span className="text-[var(--color-foreground-secondary)]">/</span>
              )}
              {index === items.length - 1 ? (
                <span className="text-[var(--color-foreground)]" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-[var(--color-primary)] hover:underline transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
