import { getClientIP } from '@/lib/server-utils';
import type { IPInfo } from '@/lib/types';

export async function GET() {
  const ip = await getClientIP();

  if (!ip) {
    return Response.json(
      { error: 'Unable to determine IP address' },
      { status: 400 }
    );
  }

  // Separate IPv4 and IPv6
  const isIPv6 = ip.includes(':');

  const result: Partial<IPInfo> = isIPv6
    ? { ipv6: ip }
    : { ipv4: ip };

  return Response.json(result);
}
