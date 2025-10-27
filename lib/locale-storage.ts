import { Locale } from './i18n';

const LOCALE_KEY = 'vamdocument-locale';

export function getStoredLocale(): Locale | null {
  if (typeof window === 'undefined') return null;

  const stored = localStorage.getItem(LOCALE_KEY);
  if (stored === 'ru' || stored === 'ua') {
    return stored;
  }
  return null;
}

export function setStoredLocale(locale: Locale): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(LOCALE_KEY, locale);
}

export function detectBrowserLocale(): Locale {
  if (typeof window === 'undefined') return 'ru';

  const browserLang = navigator.language.toLowerCase();

  if (browserLang.startsWith('uk')) {
    return 'ua';
  }

  return 'ru';
}
