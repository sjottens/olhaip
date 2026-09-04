import Link from 'next/link';
import Image from 'next/image';
import { MobileMenu } from './MobileMenu';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[var(--color-background)] border-b border-[var(--color-border)] shadow-[var(--shadow-sm)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity" title="OlhaIP - See what the internet sees">
            {/* OlhaIP Logo Image */}
            <Image
              src="/OlhaIP-logo.png"
              alt="OlhaIP - IP Address Information Platform"
              width={40}
              height={40}
              priority
              className="h-10 w-auto"
            />
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/ip-lookup"
              className="text-sm text-[var(--color-foreground-secondary)] hover:text-[var(--color-primary)] transition-colors"
            >
              IP Lookup
            </Link>
            <Link
              href="/browser-info"
              className="text-sm text-[var(--color-foreground-secondary)] hover:text-[var(--color-primary)] transition-colors"
            >
              Browser Info
            </Link>
            <Link
              href="/guides"
              className="text-sm text-[var(--color-foreground-secondary)] hover:text-[var(--color-primary)] transition-colors"
            >
              Guides
            </Link>
            <Link
              href="/about"
              className="text-sm text-[var(--color-foreground-secondary)] hover:text-[var(--color-primary)] transition-colors"
            >
              About
            </Link>
          </nav>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
