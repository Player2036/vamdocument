'use client';

import { Children, isValidElement, cloneElement, ReactElement, ReactNode } from 'react';
import { useLocale } from '@/hooks/useLocale';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

interface PageShellClientProps {
  children: ReactNode;
}

export function PageShellClient({ children }: PageShellClientProps) {
  const { locale, changeLocale, t, isLoaded } = useLocale();

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-ua-blue border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-600">
            {locale === 'ua' ? 'Завантаження...' : 'Загрузка...'}
          </p>
        </div>
      </div>
    );
  }

  const content = Children.map(children, (child) => {
    if (!isValidElement(child)) {
      return child;
    }
    return cloneElement(child as ReactElement, {
      ...child.props,
      locale,
      t,
    });
  });

  return (
    <div className="min-h-screen bg-white">
      <Header locale={locale} onLocaleChange={changeLocale} t={t} />
      <main className="pt-20 sm:pt-24">{content}</main>
      <Footer t={t} />
    </div>
  );
}
