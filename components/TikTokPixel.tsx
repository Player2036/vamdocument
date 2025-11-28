'use client';

// TikTok Pixel integration - client-side only
// Tracks page views on initial load and route changes

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

declare global {
  interface Window {
    ttq?: any;
    TiktokAnalyticsObject?: string;
  }
}

const PIXEL_ID = 'D4KQSURC77UCJ0N6KNRG';

export function TikTokPixel() {
  const pathname = usePathname();
  const isInitialMount = useRef(true);

  useEffect(() => {
    // Initialize TikTok Pixel script if not already loaded
    if (typeof window !== 'undefined' && !window.ttq) {
      (function (w: Window, d: Document, t: string) {
        w.TiktokAnalyticsObject = t;
        var ttq = (w as any)[t] = (w as any)[t] || [];
        ttq.methods = [
          'page',
          'track',
          'identify',
          'instances',
          'debug',
          'on',
          'off',
          'once',
          'ready',
          'alias',
          'group',
          'enableCookie',
          'disableCookie',
          'holdConsent',
          'revokeConsent',
          'grantConsent',
        ];
        ttq.setAndDefer = function (t: any, e: string) {
          t[e] = function () {
            t.push([e].concat(Array.prototype.slice.call(arguments, 0)));
          };
        };
        for (var i = 0; i < ttq.methods.length; i++) {
          ttq.setAndDefer(ttq, ttq.methods[i]);
        }
        ttq.instance = function (t: string) {
          var e = (ttq as any)._i[t] || [];
          for (var n = 0; n < ttq.methods.length; n++) {
            ttq.setAndDefer(e, ttq.methods[n]);
          }
          return e;
        };
        ttq.load = function (e: string, n?: any) {
          var r = 'https://analytics.tiktok.com/i18n/pixel/events.js';
          (ttq as any)._i = (ttq as any)._i || {};
          (ttq as any)._i[e] = [];
          (ttq as any)._i[e]._u = r;
          (ttq as any)._t = (ttq as any)._t || {};
          (ttq as any)._t[e] = +new Date();
          (ttq as any)._o = (ttq as any)._o || {};
          (ttq as any)._o[e] = n || {};
          var script = d.createElement('script');
          script.type = 'text/javascript';
          script.async = true;
          script.src = r + '?sdkid=' + e + '&lib=' + t;
          var firstScript = d.getElementsByTagName('script')[0];
          if (firstScript && firstScript.parentNode) {
            firstScript.parentNode.insertBefore(script, firstScript);
          }
        };

        ttq.load(PIXEL_ID);
        ttq.page();
      })(window, document, 'ttq');
    }
  }, []);

  // Track page views on route changes (skip initial mount)
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    if (typeof window !== 'undefined' && window.ttq) {
      window.ttq.page();
    }
  }, [pathname]);

  return null;
}

