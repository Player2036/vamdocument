import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';
import { LicensesPageContent } from '@/components/page-content/LicensesPageContent';

export const metadata: Metadata = {
  title: 'Документы и лицензии vamdocument.com',
  description:
    'Реквизиты компании, регистрационные документы и доверенности, подтверждающие право на сопровождение замены водительских удостоверений.',
  openGraph: {
    title: 'Документы vamdocument.com',
    description:
      'Перечень регистрационных документов и бланков доверенностей, которые подтверждают легальность сервиса vamdocument.com.',
    type: 'website',
    url: 'https://vamdocument.com/licenses',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Документы vamdocument.com',
    description:
      'Основные лицензии и разрешения, подтверждающие работу сервиса vamdocument.com.',
  },
};

export default function LicensesPage() {
  return (
    <PageShell>
      <LicensesPageContent />
    </PageShell>
  );
}
