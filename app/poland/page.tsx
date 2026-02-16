import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';
import { PolandPageContent } from '@/components/page-content/PolandPageContent';

export const metadata: Metadata = {
  title: 'Водительские права ЕС в Польше — обучение и экзамены | vamdocument.com',
  description:
    'Официальное получение водительского удостоверения ЕС категории B в Польше: обучение онлайн на украинском, экзамены и полное сопровождение под ключ.',
  openGraph: {
    title: 'Водительские права ЕС в Польше — vamdocument.com',
    description:
      'Организуем обучение в автошколе, экзамены и получение водительских прав в Польше для украинцев в Европе.',
    type: 'website',
    url: 'https://vamdocument.com/poland',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Водительские права ЕС в Польше',
    description:
      'Официальное обучение и экзамены в Польше. Полное сопровождение под ключ.',
  },
};

export default function PolandPage() {
  return (
    <PageShell>
      <PolandPageContent />
    </PageShell>
  );
}
