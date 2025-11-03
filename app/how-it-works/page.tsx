import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';
import { HowItWorksPageContent } from '@/components/page-content/HowItWorksPageContent';

export const metadata: Metadata = {
  title: 'Как работает сервис vamdocument.com — пошаговый процесс',
  description:
    'Узнайте, как проходит замена или восстановление украинского водительского удостоверения за границей: этапы, сроки и документы.',
  openGraph: {
    title: 'Как работает сервис vamdocument.com',
    description:
      'Пошаговое объяснение оформления украинского водительского удостоверения для граждан, проживающих за границей.',
    type: 'website',
    url: 'https://vamdocument.com/how-it-works',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Как работает vamdocument.com',
    description:
      'Главные этапы замены и восстановления украинского водительского удостоверения за границей.',
  },
};

export default function HowItWorksPage() {
  return (
    <PageShell>
      <HowItWorksPageContent />
    </PageShell>
  );
}
