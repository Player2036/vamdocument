import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';
import { AboutPageContent } from '@/components/page-content/AboutPageContent';

export const metadata: Metadata = {
  title: 'О компании vamdocument.com',
  description:
    'Кто мы и как помогаем гражданам Украины дистанционно оформлять водительские удостоверения и другие документы.',
  openGraph: {
    title: 'О компании vamdocument.com',
    description:
      'История и подход сервиса vamdocument.com к замене и восстановлению украинских документов за границей.',
    type: 'website',
    url: 'https://vamdocument.com/about',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'О компании vamdocument.com',
    description:
      'Наш опыт и ключевые принципы работы с украинскими документами для клиентов за границей.',
  },
};

export default function AboutPage() {
  return (
    <PageShell>
      <AboutPageContent />
    </PageShell>
  );
}
