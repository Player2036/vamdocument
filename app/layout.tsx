import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';
import { TikTokPixel } from '@/components/TikTokPixel';
import { FloatingContact } from '@/components/FloatingContact';

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'vamdocument.com',
  legalName: 'VamDocument',
  url: 'https://vamdocument.com',
  logo: 'https://vamdocument.com/og-image.jpg',
  sameAs: [
    'https://www.facebook.com/vamdocument',
    'https://www.instagram.com/vamdocument',
    'https://t.me/vamdocument',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: 'hello@vamdocument.com',
    areaServed: 'UA',
    availableLanguage: ['Russian', 'Ukrainian', 'English'],
  },
};

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'ВамДокумент — Замена и восстановление водительского удостоверения Украины за границей',
  description: 'Помогаем гражданам Украины заменить или восстановить водительское удостоверение без поездки в Украину. vamdocument.com',
  keywords: 'водительское удостоверение Украина, замена прав за границей, восстановление водительских прав, посвідчення водія',
  openGraph: {
    title: 'ВамДокумент — Замена и восстановление водительского удостоверения Украины за границей',
    description: 'Помогаем гражданам Украины заменить или восстановить водительское удостоверение без поездки в Украину. vamdocument.com',
    url: 'https://vamdocument.com',
    siteName: 'ВамДокумент',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ВамДокумент',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ВамДокумент — Замена и восстановление водительского удостоверения Украины за границей',
    description: 'Помогаем гражданам Украины заменить или восстановить водительское удостоверение без поездки в Украину.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        {children}
        <Toaster position="top-center" richColors />
        <TikTokPixel />
        <FloatingContact />
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}
(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');

fbq('init', '2718320231878222');
fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height={1}
            width={1}
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=2718320231878222&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
