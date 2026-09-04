'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import Link from 'next/link';

export default function HowDNSWorksPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div className="mb-8">
        <Link href="/guides" className="text-sm text-[var(--color-primary)]">
          ← Back to Guides
        </Link>
      </div>

      <h1 className="text-4xl lg:text-5xl font-bold text-[var(--color-foreground)] mb-8">
        How DNS Works
      </h1>

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
              What Is DNS?
            </h2>
          </CardHeader>
          <CardContent className="space-y-4 text-[var(--color-foreground-secondary)]">
            <p>
              DNS stands for Domain Name System. It's the system that translates human-friendly domain names (like example.com) into IP addresses (like 93.184.216.34) that computers use to communicate.
            </p>
            <p>
              Without DNS, you'd need to remember IP addresses for every website you want to visit, making the internet much less user-friendly.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
              The DNS Resolution Process
            </h2>
          </CardHeader>
          <CardContent className="space-y-4 text-[var(--color-foreground-secondary)]">
            <div>
              <p className="font-semibold text-[var(--color-foreground)] mb-2">1. User Query</p>
              <p>You type a domain name into your browser (e.g., www.example.com).</p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-foreground)] mb-2">2. Recursive Resolver</p>
              <p>Your ISP's recursive resolver receives your query. This resolver acts as a middleman, searching for the IP address on your behalf.</p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-foreground)] mb-2">3. Root Nameserver</p>
              <p>The resolver asks the root nameserver, which points it to the appropriate top-level domain (TLD) nameserver (e.g., .com, .org, .net).</p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-foreground)] mb-2">4. TLD Nameserver</p>
              <p>The TLD nameserver provides the address of the authoritative nameserver for that specific domain.</p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-foreground)] mb-2">5. Authoritative Nameserver</p>
              <p>The authoritative nameserver responds with the IP address associated with the domain name.</p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-foreground)] mb-2">6. Response</p>
              <p>The IP address is sent back to your browser, which then connects to the web server at that IP address.</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
              DNS Caching
            </h2>
          </CardHeader>
          <CardContent className="space-y-4 text-[var(--color-foreground-secondary)]">
            <p>
              To speed up future lookups, DNS results are cached at multiple levels:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Browser cache - Your browser stores recent lookups</li>
              <li>Operating system cache - Your computer stores DNS results</li>
              <li>ISP resolver cache - Your ISP caches results for all users</li>
              <li>Nameserver cache - Nameservers cache intermediate results</li>
            </ul>
            <p>
              This caching means that while your first visit to a domain requires a full DNS query, subsequent visits are much faster.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
              Common DNS Record Types
            </h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm text-[var(--color-foreground-secondary)]">
              <div>
                <p className="font-mono font-semibold text-[var(--color-foreground)]">A Record</p>
                <p>Maps a domain name to an IPv4 address</p>
              </div>
              <div>
                <p className="font-mono font-semibold text-[var(--color-foreground)]">AAAA Record</p>
                <p>Maps a domain name to an IPv6 address</p>
              </div>
              <div>
                <p className="font-mono font-semibold text-[var(--color-foreground)]">MX Record</p>
                <p>Directs email to the appropriate mail server</p>
              </div>
              <div>
                <p className="font-mono font-semibold text-[var(--color-foreground)]">CNAME Record</p>
                <p>Creates an alias for another domain name</p>
              </div>
              <div>
                <p className="font-mono font-semibold text-[var(--color-foreground)]">TXT Record</p>
                <p>Holds text information for various purposes (SPF, DKIM, etc.)</p>
              </div>
              <div>
                <p className="font-mono font-semibold text-[var(--color-foreground)]">NS Record</p>
                <p>Delegates DNS authority to a nameserver</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
