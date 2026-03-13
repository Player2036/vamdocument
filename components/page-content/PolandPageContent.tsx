'use client';

import { Check, MessageCircle } from 'lucide-react';
import { ContactIcons } from '@/components/ContactIcons';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { FAQAccordion } from '@/components/FAQAccordion';
import { ContactForm } from '@/components/ContactForm';
import { Calendar, GraduationCap, FileCheck, Car } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { getTranslation } from '@/lib/i18n';
import type { FAQItem } from '@/lib/faq';
import { POLAND_PHONE } from '@/lib/constants';

interface PolandPageContentProps {
  locale?: Locale;
  t?: any;
}

export function PolandPageContent({ locale, t }: PolandPageContentProps) {
  if (!locale || !t) {
    return null;
  }

  const p = t.pages?.poland;
  if (!p) return null;

  const tRu = getTranslation('ru');
  const tUa = getTranslation('ua');
  const pRu = tRu.pages?.poland;
  const pUa = tUa.pages?.poland;

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const faqItems: FAQItem[] = [
    {
      id: 'poland-official',
      category: 'process',
      question: { ru: pRu?.faq?.q1 ?? '', ua: pUa?.faq?.q1 ?? '' },
      answer: { ru: pRu?.faq?.a1 ?? '', ua: pUa?.faq?.a1 ?? '' },
    },
    {
      id: 'poland-guarantee',
      category: 'process',
      question: { ru: pRu?.faq?.q2 ?? '', ua: pUa?.faq?.q2 ?? '' },
      answer: { ru: pRu?.faq?.a2 ?? '', ua: pUa?.faq?.a2 ?? '' },
    },
    {
      id: 'poland-eu-use',
      category: 'process',
      question: { ru: pRu?.faq?.q3 ?? '', ua: pUa?.faq?.q3 ?? '' },
      answer: { ru: pRu?.faq?.a3 ?? '', ua: pUa?.faq?.a3 ?? '' },
    },
    {
      id: 'poland-cost',
      category: 'documents',
      question: { ru: pRu?.faq?.q4 ?? '', ua: pUa?.faq?.q4 ?? '' },
      answer: { ru: pRu?.faq?.a4 ?? '', ua: pUa?.faq?.a4 ?? '' },
    },
    {
      id: 'poland-language',
      category: 'process',
      question: { ru: pRu?.faq?.q5 ?? '', ua: pUa?.faq?.q5 ?? '' },
      answer: { ru: pRu?.faq?.a5 ?? '', ua: pUa?.faq?.a5 ?? '' },
    },
  ];

  const steps = [
    { icon: MessageCircle, data: p.steps.step1 },
    { icon: Calendar, data: p.steps.step2 },
    { icon: GraduationCap, data: p.steps.step3 },
    { icon: FileCheck, data: p.steps.step4 },
    { icon: Car, data: p.steps.step5 },
  ];

  const includedBlocks = [
    p.included.block1,
    p.included.block2,
    p.included.block3,
    p.included.block4,
  ];

  return (
    <>
      {/* 1. Hero — short first screen */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white to-white" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            {t.polandHeroShort?.title ?? p.hero.headline}
          </h1>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8 text-lg sm:text-xl text-gray-600">
            <li className="flex items-center gap-2">
              <Check size={20} className="text-ua-blue flex-shrink-0" />
              {t.polandHeroShort?.subtitle1 ?? 'обучение'}
            </li>
            <li className="flex items-center gap-2">
              <Check size={20} className="text-ua-blue flex-shrink-0" />
              {t.polandHeroShort?.subtitle2 ?? 'экзамены'}
            </li>
            <li className="flex items-center gap-2">
              <Check size={20} className="text-ua-blue flex-shrink-0" />
              {t.polandHeroShort?.subtitle3 ?? 'сопровождение'}
            </li>
          </ul>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-ua-blue hover:bg-ua-blue/90 text-white font-semibold px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
          >
            {t.polandHeroShort?.cta ?? p.hero.cta}
          </Button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </section>

      {/* Secondary CTA block — WhatsApp / Telegram */}
      <section className="py-8 sm:py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={POLAND_PHONE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              {p.cta.whatsapp}
            </a>
            <a
              href={POLAND_PHONE.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-[#0088cc] hover:bg-[#0077b5] text-white font-semibold px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              {p.cta.telegram}
            </a>
          </div>
        </div>
      </section>

      {/* Internal linking: had Ukraine license */}
      <section className="py-12 sm:py-16 bg-amber-50/50 border-b border-amber-100">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
            {t.hadUkraine?.title ?? 'Если у вас уже были права Украины'}
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
            {t.hadUkraine?.text ?? 'Возможно, вам не нужно получать права заново. Посмотрите услугу замены или восстановления водительского удостоверения.'}
          </p>
          <Button asChild variant="outline" size="lg" className="border-2 border-ua-blue text-ua-blue hover:bg-ua-blue/5 font-semibold">
            <a href="/">{t.hadUkraine?.button ?? 'На главную'}</a>
          </Button>
        </div>
      </section>

      {/* 2. Who it's for */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            {p.who.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6">
            {p.who.intro}
          </p>
          <ul className="space-y-4 mb-10">
            {p.who.bullets.map((item: string, i: number) => (
              <li key={i} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-ua-blue rounded-full flex items-center justify-center mt-0.5">
                  <Check size={16} className="text-white" />
                </div>
                <span className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <Alert className="border-2 border-amber-400 bg-gradient-to-br from-amber-50 to-yellow-50 shadow-lg">
            <AlertTitle className="text-lg font-semibold text-gray-900">
              {p.who.importantLabel}
            </AlertTitle>
            <AlertDescription className="mt-2 text-base text-gray-700">
              {p.who.disclaimer}
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* 3. Why Poland (USP) */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            {p.usp.title}
          </h2>
          <div className="bg-white border-2 border-ua-blue/10 rounded-2xl p-8 sm:p-10 shadow-lg">
            <ul className="space-y-4">
              {p.usp.bullets.map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-ua-blue rounded-full flex items-center justify-center mt-0.5">
                    <Check size={16} className="text-white" />
                  </div>
                  <span className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. What's included */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            {p.included.title}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {includedBlocks.map((block: { title: string; items: string[] }, i: number) => (
              <Card
                key={i}
                className="border-2 border-gray-100 hover:border-ua-blue/40 bg-gray-50 transition-colors"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">
                    {block.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {block.items.map((item: string, j: number) => (
                      <li key={j} className="flex items-start gap-3">
                        <Check size={18} className="text-ua-blue mt-0.5 flex-shrink-0" />
                        <span className="text-base text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Step-by-step process */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            {p.steps.title}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card
                  key={index}
                  className="border-2 border-gray-100 hover:border-ua-blue/40 bg-white transition-all shadow-sm"
                >
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-ua-blue/10 text-ua-blue rounded-xl flex items-center justify-center">
                        <Icon size={24} />
                      </div>
                      <span className="w-8 h-8 bg-ua-yellow rounded-full flex items-center justify-center font-bold text-ua-blue text-sm">
                        {index + 1}
                      </span>
                    </div>
                    <CardTitle className="text-lg font-semibold text-gray-900">
                      {step.data.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base text-gray-600 leading-relaxed">
                      {step.data.desc}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Timeline */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-8">
            {p.timeline.title}
          </h2>
          <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-ua-blue/20 rounded-2xl p-8 sm:p-10 shadow-lg">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              {p.timeline.text}
            </p>
          </div>
        </div>
      </section>

      {/* 7. Legal block */}
      <section className="py-16 sm:py-20 bg-amber-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            {p.legal.title}
          </h2>
          <div className="space-y-8">
            <ul className="space-y-4">
              {p.legal.bullets.map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-ua-blue rounded-full flex items-center justify-center mt-0.5">
                    <Check size={16} className="text-white" />
                  </div>
                  <span className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <div className="border-t border-amber-200 pt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {p.legal.euBlock.title}
              </h3>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                {p.legal.euBlock.text}
              </p>
              <p className="text-base font-medium text-amber-800">
                {p.legal.disclaimer}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Trust section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            {p.trust.title}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {p.trust.bullets.map((item: string, i: number) => (
              <Card
                key={i}
                className="border-2 border-ua-blue/10 bg-white shadow-sm"
              >
                <CardContent className="p-6 flex items-start gap-4">
                  <Check size={24} className="text-ua-blue flex-shrink-0 mt-1" />
                  <span className="text-base text-gray-700 leading-relaxed">
                    {item}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Requirements */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            {p.requirements.title}
          </h2>
          <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-ua-blue/20 rounded-2xl p-8 sm:p-10 shadow-lg">
            <ul className="space-y-4 mb-6">
              {p.requirements.bullets.map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-ua-blue rounded-full flex items-center justify-center mt-0.5">
                    <Check size={16} className="text-white" />
                  </div>
                  <span className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-base text-gray-600 italic">{p.requirements.note}</p>
          </div>
        </div>
      </section>

      {/* 10. FAQ */}
      <FAQAccordion
        id="faq"
        locale={locale}
        title={p.faq.title}
        items={faqItems}
      />

      {/* 11. Final CTA block */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-ua-blue/5 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {p.cta.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
            {p.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-ua-blue hover:bg-ua-blue/90 text-white font-semibold px-8 py-6 text-lg rounded-lg shadow-lg"
            >
              {p.cta.primary}
            </Button>
            <Button
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="border-2 border-ua-blue text-ua-blue hover:bg-ua-blue/5 font-semibold px-8 py-6 text-lg rounded-lg"
            >
              {p.cta.secondary}
            </Button>
          </div>
          <p className="text-sm text-gray-500 mb-4">{p.cta.micro}</p>
          <p className="text-base sm:text-lg font-medium text-gray-700 mb-4">
            {p.cta.phoneLabel}{' '}
            <a
              href={`tel:${POLAND_PHONE.tel}`}
              className="text-ua-blue font-semibold hover:underline underline-offset-4"
            >
              {POLAND_PHONE.display}
            </a>
          </p>
          <div className="flex justify-center">
            <ContactIcons />
          </div>
        </div>
      </section>

      {/* Disclaimer block */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-600 leading-relaxed text-center">
            {p.disclaimerBlock.text}
          </p>
        </div>
      </section>

      {/* Contact form */}
      <ContactForm t={t} />
    </>
  );
}
