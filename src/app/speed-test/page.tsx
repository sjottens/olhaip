import { SpeedTest } from '@/components/speedtest/SpeedTest';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { RelatedTools } from '@/components/ui/RelatedTools';

export default function SpeedTestPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Tools', href: '/ip-lookup' },
          { label: 'Speed Test', href: '/speed-test' },
        ]}
      />

      <div className="mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-[var(--color-foreground)] mb-4">
          Internet Speed Test
        </h1>
        <p className="text-lg text-[var(--color-foreground-secondary)]">
          Check how fast your internet connection really is. The test measures your download speed,
          upload speed, latency and jitter in about 20 seconds.
        </p>
      </div>

      <SpeedTest />

      <Card className="mt-12">
        <CardHeader>
          <h2 className="font-semibold text-[var(--color-foreground)]">Understanding Your Results</h2>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-[var(--color-foreground-secondary)]">
          <div>
            <p className="font-medium text-[var(--color-foreground)] mb-1">Download speed</p>
            <p>
              How fast data travels from the internet to your device, in megabits per second (Mbps).
              It matters most for streaming, browsing and downloading files.
            </p>
          </div>
          <div>
            <p className="font-medium text-[var(--color-foreground)] mb-1">Upload speed</p>
            <p>
              How fast data travels from your device to the internet. It matters for video calls,
              sending large files and cloud backups.
            </p>
          </div>
          <div>
            <p className="font-medium text-[var(--color-foreground)] mb-1">Latency</p>
            <p>
              The time in milliseconds (ms) a small message needs to reach a server and come back.
              Lower is better, and it is especially important for gaming and video calls.
            </p>
          </div>
          <div>
            <p className="font-medium text-[var(--color-foreground)] mb-1">Jitter</p>
            <p>
              How much your latency varies from one moment to the next. High jitter causes choppy
              calls and lag spikes, even when your speed is high.
            </p>
          </div>
          <div>
            <p className="font-medium text-[var(--color-foreground)] mb-1">For the most accurate result</p>
            <p>
              Use a wired connection if you can, pause other downloads and streams, and close other
              tabs. The test runs from your browser against Cloudflare&apos;s nearest server, so
              results reflect the path between you and that server. The test runs at full speed for
              about 8 seconds in each direction, so on a fast connection it can use several hundred
              MB of data, which matters on a metered or mobile plan.
            </p>
          </div>
        </CardContent>
      </Card>

      <RelatedTools
        tools={[
          { href: '/', title: 'What Is My IP?', description: 'Check your public IP address' },
          { href: '/isp-lookup', title: 'ISP Lookup', description: 'Find your internet provider' },
          { href: '/dns-lookup', title: 'DNS Lookup', description: 'Look up DNS records' },
        ]}
      />
    </div>
  );
}
