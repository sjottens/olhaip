'use client';

import Script from 'next/script';

export function ErrorHandler() {
  return (
    <Script
      id="error-handler"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          // Suppress web vitals startTime errors
          window.__originalError = window.onerror;
          window.onerror = function(msg, url, line, col, error) {
            if (msg && typeof msg === 'string' && msg.includes('startTime')) {
              return true; // Suppress this error
            }
            if (window.__originalError) {
              return window.__originalError.apply(this, arguments);
            }
          };
          
          // Also suppress via uncaughtException
          window.addEventListener('error', function(e) {
            if (e.message && e.message.includes('startTime')) {
              e.preventDefault();
            }
          });
        `,
      }}
    />
  );
}
