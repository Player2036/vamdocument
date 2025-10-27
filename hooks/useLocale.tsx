'use client';

import { useState, useEffect } from 'react';
import { Locale, getTranslation } from '@/lib/i18n';
import { getStoredLocale, setStoredLocale, detectBrowserLocale } from '@/lib/locale-storage';

export function useLocale() {
  const [locale, setLocale] = useState<Locale>('ru');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const stored = getStoredLocale();
    const initialLocale = stored || detectBrowserLocale();
    setLocale(initialLocale);
    setIsLoaded(true);
  }, []);

  const changeLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    setStoredLocale(newLocale);
  };

  const t = getTranslation(locale);

  return {
    locale,
    changeLocale,
    t,
    isLoaded,
  };
}
