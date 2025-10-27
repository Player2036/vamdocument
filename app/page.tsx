'use client';

import { useLocale } from '@/hooks/useLocale';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Steps } from '@/components/Steps';
import { Services } from '@/components/Services';
import { RequiredDocs } from '@/components/RequiredDocs';
import { WhenImpossible } from '@/components/WhenImpossible';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';

export default function Home() {
  const { locale, changeLocale, t, isLoaded } = useLocale();

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-ua-blue border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Загрузка...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header locale={locale} onLocaleChange={changeLocale} t={t} />
      <main>
        <Hero t={t} />
        <Steps t={t} />
        <Services t={t} />
        <RequiredDocs t={t} />
        <WhenImpossible t={t} />
        <FAQ t={t} />
        <ContactForm t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
}
