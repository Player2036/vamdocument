'use client';

import type { Locale } from '@/lib/i18n';

const milestones = [
  {
    year: '2016',
    ru: 'Запустили сервис для помощи украинцам, проживающим за границей, в оформлении водительских удостоверений.',
    ua: 'Запустили сервіс для допомоги українцям за кордоном в оформленні посвідчень водія.',
  },
  {
    year: '2019',
    ru: 'Расширили направления: добавили услуги по судебным решениям и актам гражданского состояния.',
    ua: 'Розширили напрямки: додали послуги за судовими рішеннями та актами цивільного стану.',
  },
  {
    year: '2022',
    ru: 'Усиленная поддержка клиентов, которые вынужденно покинули Украину после начала полномасштабной войны.',
    ua: 'Посилили підтримку клієнтів, які вимушено виїхали з України після початку повномасштабної війни.',
  },
];

interface AboutPageContentProps {
  locale?: Locale;
  t?: any;
}

export function AboutPageContent({ locale, t }: AboutPageContentProps) {
  if (!locale || !t) {
    return null;
  }

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          {t.pages?.about?.title || 'О компании'}
        </h1>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-10">
          {t.pages?.about?.description}
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {milestones.map((item) => (
            <div
              key={item.year}
              className="border-2 border-gray-100 rounded-2xl p-6 bg-gray-50 hover:border-ua-blue/40 transition-colors"
            >
              <span className="text-ua-blue font-semibold text-sm uppercase tracking-wide">
                {item.year}
              </span>
              <p className="mt-3 text-base text-gray-700 leading-relaxed">
                {item[locale]}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-ua-blue/10 to-ua-yellow/10 border-2 border-ua-blue/20 rounded-2xl p-8 text-gray-800">
          <h2 className="text-2xl font-semibold mb-4">
            {locale === 'ua'
              ? 'Наші принципи роботи'
              : 'Наши принципы работы'}
          </h2>
          <ul className="space-y-3 text-base leading-relaxed">
            <li>
              {locale === 'ua'
                ? 'Прозоро повідомляємо про строки та вимоги до документів.'
                : 'Прозрачно сообщаем о сроках и требованиях к документам.'}
            </li>
            <li>
              {locale === 'ua'
                ? 'Перевіряємо комплект документів перед поданням, щоб уникнути відмови.'
                : 'Проверяем комплект документов перед подачей, чтобы избежать отказа.'}
            </li>
            <li>
              {locale === 'ua'
                ? 'Підтримуємо клієнта на всіх етапах, включно з доставкою готового посвідчення.'
                : 'Сопровождаем клиента на всех этапах, включая доставку готового удостоверения.'}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
