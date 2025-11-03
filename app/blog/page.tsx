import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';
import { BlogListPageContent } from '@/components/page-content/BlogListPageContent';

export const metadata: Metadata = {
  title: 'Центр информации vamdocument.com — статьи и инструкции',
  description:
    'Полезные материалы о замене и восстановлении украинского водительского удостоверения за границей: инструкции, советы, чек-листы.',
  openGraph: {
    title: 'Центр информации vamdocument.com',
    description:
      'Актуальные статьи о дистанционном оформлении украинских водительских удостоверений и сопутствующих документах.',
    type: 'website',
    url: 'https://vamdocument.com/blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Центр информации vamdocument.com',
    description:
      'Статьи и практические советы по замене украинских водительских прав для граждан за границей.',
  },
};

export default function BlogPage() {
  return (
    <PageShell>
      <BlogListPageContent />
    </PageShell>
  );
}
