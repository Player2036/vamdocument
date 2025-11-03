import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';
import { FAQPageContent } from '@/components/page-content/FAQPageContent';

export const metadata: Metadata = {
  title: 'FAQ о замене и восстановлении украинских водительских удостоверений',
  description:
    'Ответы на частые вопросы по замене, восстановлению и исправлению украинских прав для граждан, проживающих за границей.',
  openGraph: {
    title: 'FAQ по услугам vamdocument.com',
    description:
      'Самые частые вопросы о замене и восстановлении украинских водительских удостоверений за границей.',
    type: 'website',
    url: 'https://vamdocument.com/faq',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ по vamdocument.com',
    description:
      'Ответы на популярные вопросы о дистанционной замене украинских водительских прав.',
  },
};

export default function FAQPage() {
  return (
    <PageShell>
      <FAQPageContent />
    </PageShell>
  );
}
