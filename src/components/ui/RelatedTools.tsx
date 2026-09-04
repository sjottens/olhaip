import Link from 'next/link';

export interface RelatedTool {
  href: string;
  title: string;
  description?: string;
}

interface RelatedToolsProps {
  tools: RelatedTool[];
  title?: string;
}

export function RelatedTools({
  tools,
  title = 'Related Tools',
}: RelatedToolsProps) {
  if (!tools.length) return null;

  return (
    <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
      <h2 className="text-xl font-semibold text-[var(--color-foreground)] mb-6">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tools.map((tool, index) => (
          <Link
            key={`tool-${index}`}
            href={tool.href}
            className="group bg-[var(--color-surface)] rounded-lg border border-[var(--color-border)] p-4 hover:border-[var(--color-primary)] transition-colors"
          >
            <div className="font-semibold text-[var(--color-foreground)] group-hover:text-[var(--color-primary)] transition-colors">
              {tool.title}
            </div>
            {tool.description && (
              <p className="text-xs text-[var(--color-foreground-secondary)] mt-1">
                {tool.description}
              </p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
