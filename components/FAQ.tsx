'use client';

import { FAQAccordion } from '@/components/FAQAccordion';
import { faqItems } from '@/lib/faq';
import type { Locale } from '@/lib/i18n';

interface FAQProps {
  t: any;
  locale?: Locale;
}

export function FAQ({ t, locale = 'ru' }: FAQProps) {
  return (
    <FAQAccordion
      id="faq"
      locale={locale}
      title={t.faq.title}
      description={t.pages?.faq?.description}
      items={faqItems}
    />
  );
}
