import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';
import { TikTokPixel } from '@/components/TikTokPixel';

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
