/**
 * Core IP and connection information types
 */

export interface IPInfo {
  ipv4?: string;
  ipv6?: string;
  country?: string;
  region?: string;
  city?: string;
  isp?: string;
  organization?: string;
  asn?: string;
  timezone?: string;
  latitude?: number;
  longitude?: number;
}

export interface BrowserInfo {
  userAgent: string;
  browser?: string;
  browserVersion?: string;
  os?: string;
  osVersion?: string;
  deviceType?: 'desktop' | 'mobile' | 'tablet';
  screenResolution?: string;
  language?: string;
  timezone?: string;
}

export interface DNSRecord {
  type: string;
  value: string;
  ttl?: number;
}

export interface DNSLookupResult {
  domain: string;
  records: DNSRecord[];
  error?: string;
}

export interface IPLookupResult {
  ip: string;
  info: IPInfo;
  error?: string;
}

export interface ReverseDNSResult {
  ip: string;
  hostname?: string;
  error?: string;
}
