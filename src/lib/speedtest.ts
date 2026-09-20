/**
 * Browser-side internet speed test.
 *
 * Runs entirely from the visitor's browser against Cloudflare's public
 * speed-test endpoints (CORS-enabled), so no test traffic passes through
 * our own server.
 */

const BASE_URL = 'https://speed.cloudflare.com';

const DOWNLOAD_CHUNK_BYTES = 25_000_000;
const UPLOAD_CHUNK_BYTES = 2_000_000;
const DOWNLOAD_STREAMS = 4;
const UPLOAD_STREAMS = 3;
const TEST_DURATION_MS = 8000;
const WARMUP_MS = 1000;
const MIN_WINDOW_MS = 500;
const LATENCY_SAMPLES = 10;
const PROGRESS_INTERVAL_MS = 150;
const LATENCY_TIMEOUT_MS = 5000;

export interface LatencyResult {
  latencyMs: number;
  jitterMs: number;
}

export type SpeedTestPhase = 'idle' | 'latency' | 'download' | 'upload' | 'done';

/** Live speed in megabits per second, reported while a phase is running. */
type SpeedCallback = (mbps: number) => void;

function toMbps(bytes: number, ms: number): number {
  if (ms <= 0) return 0;
  return (bytes * 8) / (ms / 1000) / 1_000_000;
}

function throwIfAborted(signal: AbortSignal) {
  if (signal.aborted) throw new DOMException('Aborted', 'AbortError');
}

export function isAbortError(error: unknown): boolean {
  return error instanceof DOMException && error.name === 'AbortError';
}

export async function measureLatency(signal: AbortSignal): Promise<LatencyResult> {
  const samples: number[] = [];

  for (let i = 0; i <= LATENCY_SAMPLES; i++) {
    throwIfAborted(signal);
    const start = performance.now();
    // Without a timeout, a blocked or stalled connection would hang here silently.
    const timeout = new AbortController();
    const timer = setTimeout(() => timeout.abort(), LATENCY_TIMEOUT_MS);
    const onAbort = () => timeout.abort();
    signal.addEventListener('abort', onAbort);
    try {
      const response = await fetch(`${BASE_URL}/__down?bytes=0&r=${Math.random()}`, {
        cache: 'no-store',
        signal: timeout.signal,
      });
      await response.arrayBuffer();
    } catch (error) {
      throwIfAborted(signal);
      throw error;
    } finally {
      clearTimeout(timer);
      signal.removeEventListener('abort', onAbort);
    }
    const elapsed = performance.now() - start;
    // The first request also pays for DNS, TCP and TLS setup, so skip it.
    if (i > 0) samples.push(elapsed);
  }

  const latencyMs = Math.min(...samples);
  const differences = samples.slice(1).map((sample, i) => Math.abs(sample - samples[i]));
  const jitterMs = differences.length
    ? differences.reduce((sum, value) => sum + value, 0) / differences.length
    : 0;

  return { latencyMs, jitterMs };
}

export async function measureDownload(
  signal: AbortSignal,
  onSpeed: SpeedCallback
): Promise<number> {
  const start = performance.now();
  let totalBytes = 0;
  let warmupEnd: number | null = null;
  let bytesAtWarmupEnd = 0;

  // Stop all streams once the time is up, without treating that as a failure.
  const stopper = new AbortController();
  const stopAll = () => stopper.abort();
  signal.addEventListener('abort', stopAll);
  const stopTimer = setTimeout(stopAll, TEST_DURATION_MS);

  const currentSpeed = () => {
    const now = performance.now();
    if (warmupEnd === null && now - start >= WARMUP_MS) {
      warmupEnd = now;
      bytesAtWarmupEnd = totalBytes;
    }
    return warmupEnd === null || now - warmupEnd < MIN_WINDOW_MS
      ? toMbps(totalBytes, now - start)
      : toMbps(totalBytes - bytesAtWarmupEnd, now - warmupEnd);
  };

  const progressTimer = setInterval(() => onSpeed(currentSpeed()), PROGRESS_INTERVAL_MS);

  const worker = async () => {
    while (!stopper.signal.aborted) {
      try {
        const response = await fetch(
          `${BASE_URL}/__down?bytes=${DOWNLOAD_CHUNK_BYTES}&r=${Math.random()}`,
          { cache: 'no-store', signal: stopper.signal }
        );
        if (!response.body) throw new Error('Streaming is not supported in this browser');
        const reader = response.body.getReader();
        for (;;) {
          const { done, value } = await reader.read();
          if (done) break;
          totalBytes += value.byteLength;
        }
      } catch (error) {
        if (stopper.signal.aborted) return;
        throw error;
      }
    }
  };

  try {
    await Promise.all(Array.from({ length: DOWNLOAD_STREAMS }, worker));
  } finally {
    clearTimeout(stopTimer);
    clearInterval(progressTimer);
    signal.removeEventListener('abort', stopAll);
  }

  throwIfAborted(signal);
  const result = currentSpeed();
  onSpeed(result);
  return result;
}

function createUploadPayload(): Blob {
  const buffer = new Uint8Array(UPLOAD_CHUNK_BYTES);
  // getRandomValues is limited to 64 KiB per call.
  for (let offset = 0; offset < buffer.length; offset += 65536) {
    crypto.getRandomValues(buffer.subarray(offset, offset + 65536));
  }
  // No content type keeps this a "simple" request, so no CORS preflight is needed.
  return new Blob([buffer]);
}

export async function measureUpload(
  signal: AbortSignal,
  onSpeed: SpeedCallback
): Promise<number> {
  const payload = createUploadPayload();
  const start = performance.now();
  const uploaded = new Array<number>(UPLOAD_STREAMS).fill(0);
  let finishedBytes = 0;
  let warmupEnd: number | null = null;
  let bytesAtWarmupEnd = 0;

  const stopper = new AbortController();
  const stopAll = () => stopper.abort();
  signal.addEventListener('abort', stopAll);
  const stopTimer = setTimeout(stopAll, TEST_DURATION_MS);

  const totalBytes = () => finishedBytes + uploaded.reduce((sum, value) => sum + value, 0);

  const currentSpeed = () => {
    const now = performance.now();
    if (warmupEnd === null && now - start >= WARMUP_MS) {
      warmupEnd = now;
      bytesAtWarmupEnd = totalBytes();
    }
    return warmupEnd === null || now - warmupEnd < MIN_WINDOW_MS
      ? toMbps(totalBytes(), now - start)
      : toMbps(totalBytes() - bytesAtWarmupEnd, now - warmupEnd);
  };

  const progressTimer = setInterval(() => onSpeed(currentSpeed()), PROGRESS_INTERVAL_MS);

  // fetch() cannot report upload progress, so XMLHttpRequest is used here.
  const sendChunk = (index: number) =>
    new Promise<void>((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const onStop = () => xhr.abort();
      stopper.signal.addEventListener('abort', onStop);
      const cleanup = () => stopper.signal.removeEventListener('abort', onStop);

      xhr.upload.onprogress = (event) => {
        uploaded[index] = event.loaded;
      };
      xhr.onload = () => {
        cleanup();
        finishedBytes += payload.size;
        uploaded[index] = 0;
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve();
        } else {
          reject(new Error(`Upload failed with status ${xhr.status}`));
        }
      };
      xhr.onerror = () => {
        cleanup();
        reject(new Error('Upload failed'));
      };
      xhr.onabort = () => {
        cleanup();
        resolve();
      };

      xhr.open('POST', `${BASE_URL}/__up?r=${Math.random()}`);
      xhr.send(payload);
    });

  const worker = async (index: number) => {
    while (!stopper.signal.aborted) {
      await sendChunk(index);
    }
  };

  try {
    await Promise.all(Array.from({ length: UPLOAD_STREAMS }, (_, i) => worker(i)));
  } finally {
    clearTimeout(stopTimer);
    clearInterval(progressTimer);
    signal.removeEventListener('abort', stopAll);
  }

  throwIfAborted(signal);
  const result = currentSpeed();
  onSpeed(result);
  return result;
}

export function formatSpeed(mbps: number): string {
  if (mbps >= 100) return mbps.toFixed(0);
  if (mbps >= 10) return mbps.toFixed(1);
  return mbps.toFixed(2);
}

/** A plain-language summary of what the measured connection is good for. */
export function describeConnection(downloadMbps: number, latencyMs: number) {
  const activities = [
    { label: 'Browsing & email', minMbps: 3 },
    { label: 'HD video streaming', minMbps: 8 },
    { label: '4K video streaming', minMbps: 25 },
    { label: 'Video calls', minMbps: 5, maxLatencyMs: 150 },
    { label: 'Online gaming', minMbps: 15, maxLatencyMs: 60 },
  ];

  return activities.map((activity) => ({
    label: activity.label,
    ok:
      downloadMbps >= activity.minMbps &&
      (activity.maxLatencyMs === undefined || latencyMs <= activity.maxLatencyMs),
  }));
}
