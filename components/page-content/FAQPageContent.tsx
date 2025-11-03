'use client';

import { Fragment } from 'react';
import { FAQAccordion } from '@/components/FAQAccordion';
import { faqItems } from '@/lib/faq';
import type { Locale } from '@/lib/i18n';

interface FAQPageContentProps {
  locale?: Locale;
  t?: any;
}

export function FAQPageContent({ locale, t }: FAQPageContentProps) {
  if (!locale || !t) {
    return null;
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question[locale],
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer[locale],
      },
    })),
  };

  return (
    <Fragment>
      <FAQAccordion
        locale={locale}
        title={t.pages?.faq?.title || t.faq.title}
        description={t.pages?.faq?.description}
        items={faqItems}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Fragment>
  );
}
