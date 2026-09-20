import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const alt = 'OlhaIP - See what the internet sees';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const logo = await readFile(join(process.cwd(), 'public', 'logo-mare26-camel.png'));
const logoSrc = `data:image/png;base64,${logo.toString('base64')}`;

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 64,
          background: '#faf6f0',
          color: '#2a2118',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={300} height={288} alt="" />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 120, fontWeight: 700, color: '#8b5e34', lineHeight: 1 }}>
            OlhaIP
          </div>
          <div style={{ fontSize: 44, marginTop: 24, color: '#5c4d3f' }}>
            See what the internet sees.
          </div>
          <div style={{ fontSize: 30, marginTop: 20, color: '#806f5e' }}>
            IP lookup · DNS · Speed test · Guides
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
