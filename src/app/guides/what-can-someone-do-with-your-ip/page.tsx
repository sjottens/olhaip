'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import Link from 'next/link';

export default function WhatCanTheyDoPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div className="mb-8">
        <Link href="/guides" className="text-sm text-[var(--color-primary)]">
          ← Back to Guides
        </Link>
      </div>

      <h1 className="text-4xl lg:text-5xl font-bold text-[var(--color-foreground)] mb-8">
        What Can Someone Do With Your IP Address?
      </h1>

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
              What's Visible in an IP Address?
            </h2>
          </CardHeader>
          <CardContent className="space-y-4 text-[var(--color-foreground-secondary)]">
            <p>
              An IP address can reveal some general information about you and your location, but it's much less detailed than many people think.
            </p>
            <p>
              From an IP address, someone can typically determine:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>General location:</strong> City or region (accuracy varies, sometimes just state/country)</li>
              <li><strong>Internet Service Provider (ISP):</strong> Who provides your internet</li>
              <li><strong>That you exist:</strong> Proof that a device is connected to the internet</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
              What's NOT Visible in an IP Address
            </h2>
          </CardHeader>
          <CardContent className="space-y-4 text-[var(--color-foreground-secondary)]">
            <p>
              Despite common misconceptions, an IP address CANNOT reveal:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Your name, email, or personal identity</li>
              <li>Your exact physical address or home location</li>
              <li>Your phone number or social security number</li>
              <li>Your browsing history or online activities</li>
              <li>Your passwords or financial information</li>
              <li>Camera footage or surveillance data</li>
              <li>Files on your computer or device</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
              Legitimate Uses of IP Information
            </h2>
          </CardHeader>
          <CardContent className="space-y-4 text-[var(--color-foreground-secondary)]">
            <div>
              <p className="font-semibold text-[var(--color-foreground)] mb-2">Analytics</p>
              <p>Websites use IP addresses to understand where their traffic comes from geographically.</p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-foreground)] mb-2">Security & Fraud Prevention</p>
              <p>Banks and services may flag unusual IP addresses for security purposes.</p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-foreground)] mb-2">Content Localization</p>
              <p>Services deliver content in your language and serve ads relevant to your region.</p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-foreground)] mb-2">Service Availability</p>
              <p>Some content is restricted to certain countries based on IP location.</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
              Potential Misuse Concerns
            </h2>
          </CardHeader>
          <CardContent className="space-y-4 text-[var(--color-foreground-secondary)]">
            <div>
              <p className="font-semibold text-[var(--color-foreground)] mb-2">DDoS Attacks</p>
              <p>Someone could theoretically use your IP to send junk traffic, though modern networks have protections.</p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-foreground)] mb-2">Tracking Online Activity</p>
              <p>Combined with other data, IP addresses help track your online behavior across websites.</p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-foreground)] mb-2">Blocking/Banning</p>
              <p>Services might block your entire IP if one user misbehaves.</p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-foreground)] mb-2">General Harassment</p>
              <p>Someone might use your IP along with other information to target you.</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
              Protecting Your IP Address
            </h2>
          </CardHeader>
          <CardContent className="space-y-4 text-[var(--color-foreground-secondary)]">
            <div>
              <p className="font-semibold text-[var(--color-foreground)] mb-2">Use a VPN</p>
              <p>A Virtual Private Network masks your real IP address, showing the VPN provider's IP instead.</p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-foreground)] mb-2">Use Tor Browser</p>
              <p>Tor routes your traffic through multiple nodes, anonymizing your IP and location.</p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-foreground)] mb-2">HTTPS Connection</p>
              <p>Always use HTTPS websites—while it doesn't hide your IP, it encrypts your data in transit.</p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-foreground)] mb-2">Proxy Services</p>
              <p>Web proxies can hide your IP, though they're less secure than VPNs.</p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-foreground)] mb-2">Be Cautious Online</p>
              <p>Don't share personal information publicly, and be wary of phishing attempts.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
