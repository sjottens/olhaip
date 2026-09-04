import { getRequestHeaders, formatHeaders } from '@/lib/server-utils';

export async function GET() {
  const headers = await getRequestHeaders();
  const formatted = formatHeaders(headers);
  return Response.json(formatted);
}
