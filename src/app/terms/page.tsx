import { Metadata } from 'next';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Terms of Use | OlhaIP',
  description: 'OlhaIP terms of use and conditions.',
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <h1 className="text-4xl lg:text-5xl font-bold text-[var(--color-foreground)] mb-8">
        Terms of Use
      </h1>

      <div className="space-y-8 text-[var(--color-foreground-secondary)] text-sm leading-relaxed">
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
              Acceptance of Terms
            </h2>
          </CardHeader>
          <CardContent>
            <p>
              By accessing and using OlhaIP, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
              Use License
            </h2>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Permission is granted to temporarily access the materials (information and tools) on OlhaIP for personal, non-commercial use only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any tools or software</li>
              <li>Remove any copyright or other proprietary notations</li>
              <li>Transfer the materials to another person or 'mirror' the materials on any other server</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
              Disclaimer
            </h2>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              The materials on OlhaIP are provided 'as is'. OlhaIP makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
            <p>
              IP geolocation information is approximate and should not be used for exact location determination. We do not guarantee accuracy of any information provided by lookup tools.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
              Limitations
            </h2>
          </CardHeader>
          <CardContent>
            <p>
              In no event shall OlhaIP or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on OlhaIP.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
              Accuracy of Materials
            </h2>
          </CardHeader>
          <CardContent>
            <p>
              The materials appearing on OlhaIP could include technical, typographical, or photographic errors. OlhaIP does not warrant that any of the materials on our website are accurate, complete, or current.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">
              Modifications
            </h2>
          </CardHeader>
          <CardContent>
            <p>
              OlhaIP may revise these terms of use at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of use.
            </p>
          </CardContent>
        </Card>

        <p className="text-xs text-[var(--color-foreground-tertiary)]">
          Last updated: January 2025
        </p>
      </div>
    </div>
  );
}
