'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { StructuredData } from '@/components/seo/StructuredData';
import { generateArticleSchema } from '@/lib/schema';
import Link from 'next/link';

export default function WhatIsAnIPAddressPage() {
  const articleSchema = generateArticleSchema(
    'What Is an IP Address?',
    'A comprehensive guide to understanding IP addresses, how they work, and their importance in internet communication.',
    'https://olhaip.com/guides/what-is-an-ip-address',
    'An IP address is a unique numerical identifier assigned to a device or network interface connected to an IP network. It\'s used to route data packets to the correct destination on a network or across the internet.'
  );
  const faqs = [
    {
      q: 'Does my IP address identify me?',
      a: 'Your IP address identifies your connection, not you personally. It can be used to approximate your location and identify your ISP, but cannot directly identify who you are.',
    },
    {
      q: 'Can I hide my IP address?',
      a: 'Yes. VPNs, proxies, and Tor network can hide your public IP address. You can also use your ISP to request a static IP that you control.',
    },
    {
      q: 'Is my IP address public?',
      a: 'Yes, your public IP address is visible to every website you visit. Websites need to know your IP to send data back to you.',
    },
    {
      q: 'How many IP addresses are there?',
      a: 'IPv4 has about 4.3 billion addresses. IPv6 has approximately 340 undecillion addresses (340 trillion trillion trillion).',
    },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <StructuredData schema={articleSchema} />
      {/* Breadcrumb */}
      <div className="mb-8">
        <Link href="/guides" className="text-sm text-[var(--color-primary)] hover:text-[var(--color-primary-dark)]">
          ← Back to Guides
        </Link>
      </div>

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-[var(--color-foreground)] mb-4">
          What Is an IP Address?
        </h1>
      </div>

      {/* Main Content */}
      <div className="space-y-8 mb-12">
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
              Definition
            </h2>
          </CardHeader>
          <CardContent className="space-y-4 text-[var(--color-foreground-secondary)]">
            <p>
              An IP address is a unique numerical identifier assigned to a device or network interface connected to an IP network. It's used to route data packets to the correct destination on a network or across the internet.
            </p>
            <p>
              IP stands for Internet Protocol. The protocol is the set of rules that defines how data is sent and received across networks.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
              How IP Addresses Work
            </h2>
          </CardHeader>
          <CardContent className="space-y-4 text-[var(--color-foreground-secondary)]">
            <p>
              When you send data across the internet, it's broken into small packets. Each packet includes a source IP address (where it's coming from) and a destination IP address (where it's going).
            </p>
            <p>
              Network routers read the destination IP address and forward each packet toward its destination. This process happens billions of times per second across the internet.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
              Public IP Addresses
            </h2>
          </CardHeader>
          <CardContent className="space-y-4 text-[var(--color-foreground-secondary)]">
            <p>
              Your public IP address is what websites and online services see when you connect to the internet. It's assigned by your Internet Service Provider (ISP).
            </p>
            <p>
              Websites use your public IP to know where to send the data you requested. Email services use it to verify communications. In general, any service accessible over the internet knows your public IP.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
              Private IP Addresses
            </h2>
          </CardHeader>
          <CardContent className="space-y-4 text-[var(--color-foreground-secondary)]">
            <p>
              Private IP addresses are used within local networks (like your home Wi-Fi) and aren't directly routable on the public internet.
            </p>
            <p>
              Common private IP ranges include 192.168.x.x, 10.x.x.x, and 172.16.x.x to 172.31.x.x. Your router assigns private IPs to your devices so they can communicate with each other.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* FAQs */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-[var(--color-foreground)] mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index}>
              <CardHeader>
                <h3 className="font-semibold text-[var(--color-foreground)]">
                  {faq.q}
                </h3>
              </CardHeader>
              <CardContent className="text-sm text-[var(--color-foreground-secondary)]">
                {faq.a}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Related Articles */}
      <Card>
        <CardHeader>
          <h3 className="font-semibold text-[var(--color-foreground)]">
            Related Articles
          </h3>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/guides/ipv4-vs-ipv6"
                className="text-[var(--color-primary)] hover:text-[var(--color-primary-dark)]"
              >
                → IPv4 vs IPv6: What's the Difference?
              </Link>
            </li>
            <li>
              <Link
                href="/guides/public-vs-private-ip"
                className="text-[var(--color-primary)] hover:text-[var(--color-primary-dark)]"
              >
                → Public vs Private IP Addresses
              </Link>
            </li>
            <li>
              <Link
                href="/guides/static-vs-dynamic-ip"
                className="text-[var(--color-primary)] hover:text-[var(--color-primary-dark)]"
              >
                → Static vs Dynamic IP Addresses
              </Link>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
