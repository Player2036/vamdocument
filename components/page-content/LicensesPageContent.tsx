'use client';

import { Shield, FileText, Mail } from 'lucide-react';
import type { Locale } from '@/lib/i18n';

const documents = [
  {
    id: 'registration',
    icon: Shield,
    ruTitle: 'Выписка из реестра юридических лиц Украины',
    uaTitle: 'Виписка з реєстру юридичних осіб України',
    descriptionRu:
      'Подтверждает регистрацию компании и право предоставлять услуги посредничества.',
    descriptionUa:
      'Підтверджує реєстрацію компанії та право надання посередницьких послуг.',
    href: null,
  },
  {
    id: 'agreement',
    icon: FileText,
    ruTitle: 'Типовой договор с клиентом',
    uaTitle: 'Типовий договір з клієнтом',
    descriptionRu:
      'Регламентирует процесс сопровождения и ответственность сторон. Предоставляется для подписания.',
    descriptionUa:
      'Регламентує процес супроводу та відповідальність сторін. Надається для підписання.',
    href: null,
  },
  {
    id: 'power-of-attorney',
    icon: Mail,
    ruTitle: 'Бланк доверенности на подачу документов',
    uaTitle: 'Бланк довіреності на подання документів',
    descriptionRu:
      'Необходим для представления ваших интересов в сервисном центре МВД Украины.',
    descriptionUa:
      'Потрібен для представлення ваших інтересів у сервісному центрі МВС України.',
    href: null,
  },
];

interface LicensesPageContentProps {
  locale?: Locale;
  t?: any;
}

export function LicensesPageContent({ locale, t }: LicensesPageContentProps) {
  if (!locale || !t) {
    return null;
  }

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          {t.pages?.licenses?.title || 'Документы и лицензии'}
        </h1>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-10">
          {t.pages?.licenses?.description ||
            'Мы готовим документы по запросу клиента. Ниже — список основных файлов, доступных после заключения договора.'}
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {documents.map((doc) => {
            const Icon = doc.icon;
            return (
              <div
                key={doc.id}
                className="border-2 border-gray-100 rounded-2xl p-6 bg-gray-50 hover:border-ua-blue/40 transition-colors flex flex-col h-full"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-ua-blue/10 text-ua-blue flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    {locale === 'ua' ? doc.uaTitle : doc.ruTitle}
                  </h2>
                </div>
                <p className="text-base text-gray-700 leading-relaxed flex-1">
                  {locale === 'ua' ? doc.descriptionUa : doc.descriptionRu}
                </p>
                <div className="mt-6">
                  {doc.href ? (
                    <a
                      href={doc.href}
                      className="inline-flex items-center text-ua-blue font-semibold hover:underline underline-offset-4"
                      download
                    >
                      {locale === 'ua' ? 'Завантажити документ' : 'Скачать документ'}
                    </a>
                  ) : (
                    <p className="text-sm text-gray-500">
                      {locale === 'ua'
                        ? 'Документ доступний за запитом менеджеру.'
                        : 'Документ доступен по запросу менеджеру.'}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
