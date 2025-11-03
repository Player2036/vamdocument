'use client';

import { ClipboardList, FileSearch, Send, Inbox } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Locale } from '@/lib/i18n';

interface HowItWorksProps {
  t: any;
  locale: Locale;
}

export function HowItWorks({ t, locale }: HowItWorksProps) {
  const pageCopy = t.pages?.howItWorks;
  const steps = [
    {
      icon: ClipboardList,
      title: t.steps.step1,
      description: pageCopy?.steps?.step1,
    },
    {
      icon: FileSearch,
      title: t.steps.step2,
      description: pageCopy?.steps?.step2,
    },
    {
      icon: Inbox,
      title: t.steps.step3,
      description: pageCopy?.steps?.step3,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {pageCopy?.title || (locale === 'ua' ? 'Як це працює' : 'Как это работает')}
          </h1>
          {pageCopy?.description && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              {pageCopy.description}
            </p>
          )}
        </div>

        {pageCopy?.intro && (
          <div className="grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto mb-14">
            {pageCopy.intro.map((text: string, index: number) => (
              <Card key={index} className="border-2 border-ua-blue/10 bg-white shadow-sm">
                <CardContent className="p-6 text-base text-gray-700 leading-relaxed">
                  {text}
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <div className="grid gap-6 sm:grid-cols-3 mb-14">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card
                key={step.title}
                className="border-2 border-gray-100 hover:border-ua-blue/40 bg-white transition-all shadow-sm hover:shadow-lg"
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-ua-blue/10 text-ua-blue rounded-xl flex items-center justify-center mb-4">
                    <Icon size={28} />
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {index + 1}. {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-base text-gray-600 leading-relaxed">
                  {step.description}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {pageCopy?.bullets && (
          <div className="bg-white border-2 border-ua-blue/15 rounded-2xl shadow-lg p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              {locale === 'ua' ? 'Що ви отримаєте' : 'Что вы получите'}
            </h2>
            <ul className="space-y-4">
              {pageCopy.bullets.map((item: string, index: number) => (
                <li key={index} className="flex items-start gap-4">
                  <Send className="w-5 h-5 text-ua-blue mt-1" />
                  <span className="text-base text-gray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            {pageCopy?.cta && (
              <p className="mt-8 text-base sm:text-lg text-gray-800 font-medium text-center">
                {pageCopy.cta}
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
