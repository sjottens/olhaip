'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import Link from 'next/link';

export default function DoesVPNChangeIPPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div className="mb-8">
        <Link href="/guides" className="text-sm text-[var(--color-primary)]">
          ← Back to Guides
        </Link>
      </div>

      <h1 className="text-4xl lg:text-5xl font-bold text-[var(--color-foreground)] mb-8">
        Does a VPN Change Your IP Address?
      </h1>

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
              Yes, a VPN Changes Your Visible IP Address
            </h2>
          </CardHeader>
          <CardContent className="space-y-4 text-[var(--color-foreground-secondary)]">
            <p>
              Yes, when you connect to a VPN (Virtual Private Network), your IP address changes. More specifically, websites and online services see the VPN provider's IP address instead of your real IP address.
            </p>
            <p>
              Your real IP address is hidden from the services you visit, making it appear as though you're connecting from a different location.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
              How VPNs Work
            </h2>
          </CardHeader>
          <CardContent className="space-y-4 text-[var(--color-foreground-secondary)]">
            <div>
              <p className="font-semibold text-[var(--color-foreground)] mb-2">Without VPN</p>
              <p>Your computer → ISP → Website sees your real IP address</p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-foreground)] mb-2">With VPN</p>
              <p>Your computer → Encrypted tunnel to VPN → Website sees VPN's IP address</p>
            </div>
            <p>
              All your internet traffic is encrypted and routed through the VPN provider's servers. The VPN provider assigns you one of their IP addresses to use for all your connections.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
              Privacy Benefits of VPNs
            </h2>
          </CardHeader>
          <CardContent className="space-y-4 text-[var(--color-foreground-secondary)]">
            <div>
              <p className="font-semibold text-[var(--color-foreground)] mb-2">Hide Your Real IP</p>
              <p>Websites, advertisers, and ISPs cannot directly see your home IP address.</p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-foreground)] mb-2">Encrypt Your Traffic</p>
              <p>Your data is encrypted, making it harder for hackers on public WiFi to intercept your information.</p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-foreground)] mb-2">Appear to Be in Different Location</p>
              <p>Websites will see you as being in the VPN provider's location, which can be useful for accessing geo-restricted content.</p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-foreground)] mb-2">Prevent ISP Tracking</p>
              <p>Your ISP cannot see which websites you visit (though they can see you're using a VPN).</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
              What a VPN Doesn't Protect
            </h2>
          </CardHeader>
          <CardContent className="space-y-4 text-[var(--color-foreground-secondary)]">
            <ul className="list-disc list-inside space-y-1">
              <li>VPNs don't prevent you from being tracked by your browser/cookies</li>
              <li>Websites still know if you log into an account (they can link your sessions)</li>
              <li>A VPN doesn't protect you from malware or viruses</li>
              <li>A VPN provider can see your traffic (choose a trusted provider)</li>
              <li>VPNs don't make you completely anonymous online</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
              Choosing a VPN
            </h2>
          </CardHeader>
          <CardContent className="space-y-4 text-[var(--color-foreground-secondary)]">
            <p>
              If you're considering a VPN, look for:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>No-logs policy:</strong> They don't store your activity</li>
              <li><strong>Encryption:</strong> Strong encryption standards (AES-256)</li>
              <li><strong>Multiple servers:</strong> Options for different locations</li>
              <li><strong>Reputation:</strong> Independent audits and user reviews</li>
              <li><strong>Speed:</strong> Minimal slowdown to your connection</li>
              <li><strong>Killswitch:</strong> Cuts internet if VPN disconnects unexpectedly</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
              Common VPN Uses
            </h2>
          </CardHeader>
          <CardContent className="space-y-4 text-[var(--color-foreground-secondary)]">
            <div>
              <p className="font-semibold text-[var(--color-foreground)] mb-2">Public WiFi Security</p>
              <p>Protecting your data on unsecured public WiFi networks</p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-foreground)] mb-2">Privacy</p>
              <p>Preventing ISPs and websites from tracking your activity</p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-foreground)] mb-2">Geo-Spoofing</p>
              <p>Accessing content restricted to certain geographic regions</p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-foreground)] mb-2">Remote Work</p>
              <p>Securely accessing company networks from remote locations</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
