'use client';

import { Fragment } from 'react';
import { Reviews } from '@/components/Reviews';
import { ContactForm } from '@/components/ContactForm';
import type { Locale } from '@/lib/i18n';

interface ReviewsPageContentProps {
  locale?: Locale;
  t?: any;
}

export function ReviewsPageContent({ locale, t }: ReviewsPageContentProps) {
  if (!locale || !t) {
    return null;
  }

  return (
    <Fragment>
      <Reviews
        locale={locale}
        title={t.pages?.reviews?.title || 'Отзывы клиентов'}
        description={t.pages?.reviews?.description}
      />
      <div className="bg-white">
        <ContactForm t={t} />
      </div>
    </Fragment>
  );
}
