'use client';

import { Fragment } from 'react';
import { HowItWorks } from '@/components/HowItWorks';
import { ContactForm } from '@/components/ContactForm';
import type { Locale } from '@/lib/i18n';

interface HowItWorksPageContentProps {
  locale?: Locale;
  t?: any;
}

export function HowItWorksPageContent({ locale, t }: HowItWorksPageContentProps) {
  if (!locale || !t) {
    return null;
  }

  return (
    <Fragment>
      <HowItWorks t={t} locale={locale} />
      <div className="bg-white">
        <ContactForm t={t} />
      </div>
    </Fragment>
  );
}
