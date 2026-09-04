'use client';

import Link from 'next/link';
import { useState } from 'react';

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span
          className={`block w-6 h-0.5 bg-[var(--color-foreground)] transition-all ${
            isOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-[var(--color-foreground)] transition-all ${
            isOpen ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-[var(--color-foreground)] transition-all ${
            isOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        />
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 top-16 bg-black/20 md:hidden"
            onClick={closeMenu}
            aria-hidden="true"
          />

          {/* Menu Items */}
          <nav className="absolute top-16 left-0 right-0 bg-[var(--color-background)] border-b border-[var(--color-border)] shadow-lg md:hidden">
            <div className="flex flex-col space-y-1 p-4">
              <Link
                href="/ip-lookup"
                className="px-4 py-3 text-sm text-[var(--color-foreground)] hover:bg-[var(--color-surface)] rounded-md transition-colors"
                onClick={closeMenu}
              >
                IP Lookup
              </Link>
              <Link
                href="/browser-info"
                className="px-4 py-3 text-sm text-[var(--color-foreground)] hover:bg-[var(--color-surface)] rounded-md transition-colors"
                onClick={closeMenu}
              >
                Browser Info
              </Link>
              <Link
                href="/guides"
                className="px-4 py-3 text-sm text-[var(--color-foreground)] hover:bg-[var(--color-surface)] rounded-md transition-colors"
                onClick={closeMenu}
              >
                Guides
              </Link>
              <Link
                href="/about"
                className="px-4 py-3 text-sm text-[var(--color-foreground)] hover:bg-[var(--color-surface)] rounded-md transition-colors"
                onClick={closeMenu}
              >
                About
              </Link>
            </div>
          </nav>
        </>
      )}
    </>
  );
}
