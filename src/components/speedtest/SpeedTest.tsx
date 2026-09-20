'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import {
  describeConnection,
  formatSpeed,
  isAbortError,
  measureDownload,
  measureLatency,
  measureUpload,
  type SpeedTestPhase,
} from '@/lib/speedtest';

interface Results {
  latencyMs: number | null;
  jitterMs: number | null;
  downloadMbps: number | null;
  uploadMbps: number | null;
}

const EMPTY_RESULTS: Results = {
  latencyMs: null,
  jitterMs: null,
  downloadMbps: null,
  uploadMbps: null,
};

const PHASE_LABELS: Record<SpeedTestPhase, string> = {
  idle: 'Ready to test',
  latency: 'Measuring latency…',
  download: 'Testing download speed…',
  upload: 'Testing upload speed…',
  done: 'Test complete',
};

function StatCard({
  label,
  value,
  unit,
  active,
}: {
  label: string;
  value: string | null;
  unit: string;
  active: boolean;
}) {
  return (
    <div
      className={`rounded-lg border p-4 text-center transition-colors ${
        active
          ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/5'
          : 'border-[var(--color-border)] bg-[var(--color-background)]'
      }`}
    >
      <div className="text-xs font-medium uppercase tracking-wide text-[var(--color-foreground-tertiary)] mb-1">
        {label}
      </div>
      <div className="text-3xl font-bold tabular-nums text-[var(--color-foreground)]">
        {value ?? '—'}
      </div>
      <div className="text-xs text-[var(--color-foreground-secondary)]">{unit}</div>
    </div>
  );
}

export function SpeedTest() {
  const [phase, setPhase] = useState<SpeedTestPhase>('idle');
  const [results, setResults] = useState<Results>(EMPTY_RESULTS);
  const [liveMbps, setLiveMbps] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const controllerRef = useRef<AbortController | null>(null);

  useEffect(() => () => controllerRef.current?.abort(), []);

  const running = phase !== 'idle' && phase !== 'done';

  const start = useCallback(async () => {
    const controller = new AbortController();
    controllerRef.current = controller;
    const { signal } = controller;

    setError(null);
    setResults(EMPTY_RESULTS);
    setLiveMbps(null);

    try {
      setPhase('latency');
      const latency = await measureLatency(signal);
      setResults((prev) => ({
        ...prev,
        latencyMs: latency.latencyMs,
        jitterMs: latency.jitterMs,
      }));

      setPhase('download');
      const downloadMbps = await measureDownload(signal, setLiveMbps);
      setResults((prev) => ({ ...prev, downloadMbps }));

      setLiveMbps(null);
      setPhase('upload');
      const uploadMbps = await measureUpload(signal, setLiveMbps);
      setResults((prev) => ({ ...prev, uploadMbps }));

      setLiveMbps(null);
      setPhase('done');
    } catch (err) {
      setLiveMbps(null);
      setPhase('idle');
      if (!isAbortError(err)) {
        setError(
          'The speed test could not be completed. Check your connection, disable any ad blocker or VPN that may block speed.cloudflare.com, and try again.'
        );
      }
    }
  }, []);

  const cancel = useCallback(() => controllerRef.current?.abort(), []);

  const showLive = liveMbps !== null && (phase === 'download' || phase === 'upload');
  const bigNumber = showLive
    ? formatSpeed(liveMbps)
    : phase === 'done' && results.downloadMbps !== null
      ? formatSpeed(results.downloadMbps)
      : '0';
  const bigLabel =
    phase === 'upload' ? 'Mbps upload' : phase === 'done' ? 'Mbps download' : 'Mbps';

  const summary =
    phase === 'done' && results.downloadMbps !== null && results.latencyMs !== null
      ? describeConnection(results.downloadMbps, results.latencyMs)
      : null;

  return (
    <div className="space-y-8">
      <Card>
        <CardContent>
          <div className="flex flex-col items-center py-6">
            <div
              className="text-7xl lg:text-8xl font-bold tabular-nums text-[var(--color-primary)]"
              aria-hidden="true"
            >
              {bigNumber}
            </div>
            <div className="text-sm text-[var(--color-foreground-secondary)] mt-1 mb-6">
              {bigLabel}
            </div>

            <div className="h-1.5 w-full max-w-sm rounded-full bg-[var(--color-surface-alt)] mb-3 overflow-hidden">
              <div
                className={`h-full rounded-full bg-[var(--color-primary)] ${
                  running ? 'animate-pulse w-full' : phase === 'done' ? 'w-full' : 'w-0'
                }`}
              />
            </div>
            <p
              className="text-sm text-[var(--color-foreground-secondary)] mb-6"
              role="status"
              aria-live="polite"
            >
              {PHASE_LABELS[phase]}
              {phase === 'done' && results.downloadMbps !== null && results.uploadMbps !== null
                ? `: ${formatSpeed(results.downloadMbps)} Mbps down, ${formatSpeed(results.uploadMbps)} Mbps up`
                : ''}
            </p>

            {running ? (
              <Button variant="secondary" size="lg" onClick={cancel}>
                Cancel
              </Button>
            ) : (
              <Button size="lg" onClick={start}>
                {phase === 'done' ? 'Test again' : 'Start speed test'}
              </Button>
            )}

            {error && (
              <p
                role="alert"
                className="mt-6 max-w-lg text-center text-sm text-[var(--color-error)] bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border border-red-200 dark:border-red-800"
              >
                {error}
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          label="Download"
          value={results.downloadMbps !== null ? formatSpeed(results.downloadMbps) : null}
          unit="Mbps"
          active={phase === 'download'}
        />
        <StatCard
          label="Upload"
          value={results.uploadMbps !== null ? formatSpeed(results.uploadMbps) : null}
          unit="Mbps"
          active={phase === 'upload'}
        />
        <StatCard
          label="Latency"
          value={results.latencyMs !== null ? results.latencyMs.toFixed(0) : null}
          unit="ms"
          active={phase === 'latency'}
        />
        <StatCard
          label="Jitter"
          value={results.jitterMs !== null ? results.jitterMs.toFixed(1) : null}
          unit="ms"
          active={phase === 'latency'}
        />
      </div>

      {summary && (
        <Card>
          <CardHeader>
            <h2 className="font-semibold text-[var(--color-foreground)]">
              What can your connection handle?
            </h2>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              {summary.map((item) => (
                <li key={item.label} className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className={item.ok ? 'text-[var(--color-success)]' : 'text-[var(--color-error)]'}
                  >
                    {item.ok ? '✓' : '✕'}
                  </span>
                  <span className="text-[var(--color-foreground)]">{item.label}</span>
                  <span className="sr-only">{item.ok ? 'supported' : 'may struggle'}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
