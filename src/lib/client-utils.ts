/**
 * Client-side IP and browser detection utilities
 * Note: Public IP detection requires server-side API or third-party service
 */

import type { BrowserInfo, IPInfo } from './types';

/**
 * Get browser and system information
 * Runs only on client-side
 */
export function getBrowserInfo(): BrowserInfo {
  if (typeof window === 'undefined') {
    return {
      userAgent: '',
    };
  }

  const userAgent = navigator.userAgent;
  const language = navigator.language || 'unknown';
  
  // Parse user agent for browser info
  let browser = 'Unknown';
  let browserVersion = '';
  let os = 'Unknown';
  let osVersion = '';
  let deviceType: 'desktop' | 'mobile' | 'tablet' = 'desktop';

  // Detect browser
  if (/Chrome/.test(userAgent) && !/Chromium/.test(userAgent)) {
    browser = 'Chrome';
    browserVersion = userAgent.match(/Chrome\/(\d+)/)?.[1] || '';
  } else if (/Safari/.test(userAgent) && !/Chrome/.test(userAgent)) {
    browser = 'Safari';
    browserVersion = userAgent.match(/Version\/(\d+)/)?.[1] || '';
  } else if (/Firefox/.test(userAgent)) {
    browser = 'Firefox';
    browserVersion = userAgent.match(/Firefox\/(\d+)/)?.[1] || '';
  } else if (/Edge/.test(userAgent)) {
    browser = 'Edge';
    browserVersion = userAgent.match(/Edge\/(\d+)/)?.[1] || '';
  } else if (/Trident/.test(userAgent)) {
    browser = 'Internet Explorer';
    browserVersion = userAgent.match(/rv:(\d+)/)?.[1] || '';
  }

  // Detect OS
  if (/Win/.test(userAgent)) {
    os = 'Windows';
    if (/Windows NT 10.0/.test(userAgent)) osVersion = '10/11';
    else if (/Windows NT 6.3/.test(userAgent)) osVersion = '8.1';
    else if (/Windows NT 6.2/.test(userAgent)) osVersion = '8';
  } else if (/Mac/.test(userAgent)) {
    os = 'macOS';
    osVersion = userAgent.match(/Mac OS X ([^\s;]*)/)?.[1]?.replace(/_/g, '.') || '';
  } else if (/Linux/.test(userAgent)) {
    os = 'Linux';
  } else if (/Android/.test(userAgent)) {
    os = 'Android';
    osVersion = userAgent.match(/Android ([^\s;]*)/)?.[1] || '';
  } else if (/iPhone|iPad|iPod/.test(userAgent)) {
    os = 'iOS';
    osVersion = userAgent.match(/OS ([^\s]*)/)?.[1]?.replace(/_/g, '.') || '';
  }

  // Detect device type
  if (/Mobile|Android|iPhone|iPod|BlackBerry|IEMobile/.test(userAgent)) {
    deviceType = 'mobile';
  } else if (/iPad|Android(?!.*Mobile)/.test(userAgent)) {
    deviceType = 'tablet';
  }

  // Get screen resolution
  const screenResolution = typeof window !== 'undefined'
    ? `${window.innerWidth}x${window.innerHeight}`
    : '';

  // Get timezone
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return {
    userAgent,
    browser,
    browserVersion: browserVersion || undefined,
    os,
    osVersion: osVersion || undefined,
    deviceType,
    screenResolution,
    language,
    timezone,
  };
}

/**
 * Validate IPv4 address
 */
export function isValidIPv4(ip: string): boolean {
  const ipv4Pattern = /^(\d{1,3}\.){3}\d{1,3}$/;
  if (!ipv4Pattern.test(ip)) return false;
  
  const parts = ip.split('.');
  return parts.every(part => {
    const num = parseInt(part, 10);
    return num >= 0 && num <= 255;
  });
}

/**
 * Validate IPv6 address
 */
export function isValidIPv6(ip: string): boolean {
  // Simplified IPv6 validation
  const ipv6Pattern = /^(([0-9a-fA-F]{0,4}:){2,7}[0-9a-fA-F]{0,4}|::1|::)$/;
  return ipv6Pattern.test(ip) || /^[0-9a-f:]+$/i.test(ip);
}

/**
 * Determine if IP is IPv4 or IPv6 or invalid
 */
export function getIPVersion(ip: string): 'ipv4' | 'ipv6' | 'invalid' {
  if (isValidIPv4(ip)) return 'ipv4';
  if (isValidIPv6(ip)) return 'ipv6';
  return 'invalid';
}

/**
 * Format IPv6 address for display
 */
export function formatIPv6(ip: string): string {
  return ip.toLowerCase();
}

/**
 * Get approximate timezone from browser
 */
export function getTimezone(): string {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

/**
 * Copy text to clipboard
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error('Failed to copy to clipboard:', err);
    return false;
  }
}
