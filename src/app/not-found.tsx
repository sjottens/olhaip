import { Card, CardContent } from '@/components/ui/Card';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div className="text-center mb-12">
        <h1 className="text-6xl font-bold text-[var(--color-foreground)] mb-4">
          404
        </h1>
        <p className="text-2xl text-[var(--color-foreground-secondary)] mb-8">
          Page Not Found
        </p>
        <p className="text-lg text-[var(--color-foreground-secondary)] mb-8">
          The page you're looking for doesn't exist.
        </p>
      </div>

      <Card className="mb-8">
        <CardContent className="py-8">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-[var(--color-foreground)]">
              Here are some helpful links:
            </h2>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-[var(--color-primary)] hover:text-[var(--color-primary-dark)]">
                  ← Check Your IP Address
                </Link>
              </li>
              <li>
                <Link href="/ip-lookup" className="text-[var(--color-primary)] hover:text-[var(--color-primary-dark)]">
                  → IP Address Lookup
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-[var(--color-primary)] hover:text-[var(--color-primary-dark)]">
                  → Guides & Articles
                </Link>
              </li>
              <li>
                <Link href="/browser-info" className="text-[var(--color-primary)] hover:text-[var(--color-primary-dark)]">
                  → Browser Information
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[var(--color-primary)] hover:text-[var(--color-primary-dark)]">
                  → About OlhaIP
                </Link>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
