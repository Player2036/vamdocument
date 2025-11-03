import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';
import { ReviewsPageContent } from '@/components/page-content/ReviewsPageContent';

export const metadata: Metadata = {
  title: 'Отзывы клиентов vamdocument.com',
  description:
    'Реальные истории клиентов vamdocument.com о замене и восстановлении украинских водительских удостоверений за границей.',
  openGraph: {
    title: 'Отзывы клиентов vamdocument.com',
    description:
      'Отзывы украинцев, которые оформили водительское удостоверение за границей с нашей помощью.',
    type: 'website',
    url: 'https://vamdocument.com/reviews',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Отзывы клиентов vamdocument.com',
    description:
      'Истории клиентов о сотрудничестве при замене и восстановлении водительских удостоверений.',
  },
};

export default function ReviewsPage() {
  return (
    <PageShell>
      <ReviewsPageContent />
    </PageShell>
  );
}
