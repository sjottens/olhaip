'use client';

import { useSyncExternalStore } from 'react';
import { getBrowserInfo } from './client-utils';
import type { BrowserInfo } from './types';

let cached: BrowserInfo | null = null;

const subscribe = () => () => {};

// getSnapshot must return a stable reference, so the result is computed once.
function getSnapshot(): BrowserInfo {
  cached ??= getBrowserInfo();
  return cached;
}

/**
 * Browser and system information, or null during server rendering and
 * hydration (so server and client markup match).
 */
export function useBrowserInfo(): BrowserInfo | null {
  return useSyncExternalStore(subscribe, getSnapshot, () => null);
}
