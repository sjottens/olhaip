import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-surface)] border-t border-[var(--color-border)] mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              {/* OlhaIP Logo - Eye/Radar Icon */}
              <svg className="w-6 h-6 text-[var(--color-primary)]" viewBox="0 0 32 32" fill="currentColor">
                <circle cx="16" cy="16" r="12" opacity="0.2" />
                <circle cx="16" cy="16" r="8" opacity="0.3" />
                <circle cx="16" cy="16" r="4" fill="currentColor" />
                <circle cx="16" cy="10" r="2" fill="currentColor" opacity="0.6" />
                <circle cx="22" cy="16" r="2" fill="currentColor" opacity="0.6" />
                <circle cx="16" cy="22" r="2" fill="currentColor" opacity="0.6" />
                <circle cx="10" cy="16" r="2" fill="currentColor" opacity="0.6" />
              </svg>
              <span className="font-bold">OlhaIP</span>
            </div>
            <p className="text-sm text-[var(--color-foreground-secondary)]">
              See what the internet sees.
            </p>
          </div>

          {/* Tools */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Tools</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/ip-lookup"
                  className="text-[var(--color-foreground-secondary)] hover:text-[var(--color-primary)] transition-colors"
                >
                  IP Lookup
                </Link>
              </li>
              <li>
                <Link
                  href="/ipv4-checker"
                  className="text-[var(--color-foreground-secondary)] hover:text-[var(--color-primary)] transition-colors"
                >
                  IPv4 Checker
                </Link>
              </li>
              <li>
                <Link
                  href="/ipv6-checker"
                  className="text-[var(--color-foreground-secondary)] hover:text-[var(--color-primary)] transition-colors"
                >
                  IPv6 Checker
                </Link>
              </li>
              <li>
                <Link
                  href="/ip-validator"
                  className="text-[var(--color-foreground-secondary)] hover:text-[var(--color-primary)] transition-colors"
                >
                  IP Validator
                </Link>
              </li>
              <li>
                <Link
                  href="/browser-info"
                  className="text-[var(--color-foreground-secondary)] hover:text-[var(--color-primary)] transition-colors"
                >
                  Browser Info
                </Link>
              </li>
              <li>
                <Link
                  href="/http-headers"
                  className="text-[var(--color-foreground-secondary)] hover:text-[var(--color-primary)] transition-colors"
                >
                  HTTP Headers
                </Link>
              </li>
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Learn</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/guides/what-is-an-ip-address"
                  className="text-[var(--color-foreground-secondary)] hover:text-[var(--color-primary)] transition-colors"
                >
                  What is an IP Address?
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/ipv4-vs-ipv6"
                  className="text-[var(--color-foreground-secondary)] hover:text-[var(--color-primary)] transition-colors"
                >
                  IPv4 vs IPv6
                </Link>
              </li>
              <li>
                <Link
                  href="/guides"
                  className="text-[var(--color-foreground-secondary)] hover:text-[var(--color-primary)] transition-colors"
                >
                  All Guides
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-[var(--color-foreground-secondary)] hover:text-[var(--color-primary)] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-[var(--color-foreground-secondary)] hover:text-[var(--color-primary)] transition-colors"
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-[var(--color-foreground-secondary)] hover:text-[var(--color-primary)] transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[var(--color-border)] pt-8">
          <p className="text-sm text-[var(--color-foreground-secondary)]">
            © {currentYear} OlhaIP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
