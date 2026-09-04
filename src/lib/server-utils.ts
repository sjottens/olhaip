/**
 * Server-side utility functions for IP detection
 */

import { headers } from 'next/headers';

/**
 * Extract client IP from Next.js request headers
 * Checks multiple header sources for compatibility with different deployments
 */
export async function getClientIP(): Promise<string | null> {
  const headersList = await headers();
  
  // Check various header sources in order of preference
  const ip =
    headersList.get('x-forwarded-for')?.split(',')[0].trim() ||
    headersList.get('x-real-ip') ||
    headersList.get('cf-connecting-ip') ||
    headersList.get('x-client-ip') ||
    headersList.get('x-forwarded') ||
    headersList.get('forwarded-for') ||
    headersList.get('forwarded') ||
    null;

  return ip;
}

/**
 * Extract all request headers for display
 */
export async function getRequestHeaders(): Promise<Record<string, string>> {
  const headersList = await headers();
  const result: Record<string, string> = {};
  
  headersList.forEach((value, key) => {
    result[key] = value;
  });
  
  return result;
}

/**
 * Format request headers for display
 */
export function formatHeaders(headers: Record<string, string>): Array<{ key: string; value: string; description?: string }> {
  const headerDescriptions: Record<string, string> = {
    'accept': 'Content types the browser accepts',
    'accept-encoding': 'Compression methods supported by the browser',
    'accept-language': 'Preferred languages',
    'cache-control': 'Caching directives',
    'connection': 'Type of connection',
    'content-type': 'Format of the request body',
    'cookie': 'Session and tracking cookies',
    'host': 'Domain name being accessed',
    'user-agent': 'Browser and OS information',
    'referer': 'Previous page URL',
    'origin': 'The origin of the request',
    'x-forwarded-for': 'Original client IP (when behind proxy)',
    'x-forwarded-proto': 'Original protocol (HTTP/HTTPS)',
    'x-requested-with': 'Indicates AJAX requests',
  };

  return Object.entries(headers)
    .map(([key, value]) => ({
      key,
      value,
      description: headerDescriptions[key.toLowerCase()],
    }))
    .sort((a, b) => a.key.localeCompare(b.key));
}

/**
 * Validate if string is a valid IP address
 */
export function isValidIP(ip: string): boolean {
  const ipv4Pattern = /^(\d{1,3}\.){3}\d{1,3}$/;
  const ipv6Pattern = /^[0-9a-f:]+$/i;
  
  if (ipv4Pattern.test(ip)) {
    const parts = ip.split('.');
    return parts.every(part => {
      const num = parseInt(part, 10);
      return num >= 0 && num <= 255;
    });
  }
  
  return ipv6Pattern.test(ip) && ip.includes(':');
}
