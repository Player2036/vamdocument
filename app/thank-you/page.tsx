import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';
import { ThankYouPageContent } from '@/components/page-content/ThankYouPageContent';

export const metadata: Metadata = {
  title: 'Спасибо — vamdocument.com',
  description: 'Ваша заявка отправлена и будет обработана в течение 24 часов.',
  openGraph: {
    title: 'Спасибо — vamdocument.com',
    description: 'Ваша заявка отправлена и будет обработана в течение 24 часов.',
    type: 'website',
    url: 'https://vamdocument.com/thank-you',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Спасибо — vamdocument.com',
    description: 'Ваша заявка отправлена и будет обработана в течение 24 часов.',
  },
};

export default function ThankYouPage() {
  return (
    <PageShell>
      <ThankYouPageContent />
    </PageShell>
  );
}
