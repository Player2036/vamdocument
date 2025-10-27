'use client';

import { Check } from 'lucide-react';

interface RequiredDocsProps {
  t: any;
}

export function RequiredDocs({ t }: RequiredDocsProps) {
  const documents = [
    t.requiredDocs.passport,
    t.requiredDocs.foreignPassport,
    t.requiredDocs.inn,
    t.requiredDocs.oldLicense,
    t.requiredDocs.photo,
    t.requiredDocs.changeDoc,
  ];

  return (
    <section id="documents" className="py-16 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
          {t.requiredDocs.title}
        </h2>

        <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-ua-blue/20 rounded-2xl p-8 sm:p-10 shadow-lg">
          <ul className="space-y-4">
            {documents.map((doc, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-ua-blue rounded-full flex items-center justify-center mt-0.5">
                  <Check size={16} className="text-white" />
                </div>
                <span className="text-base sm:text-lg text-gray-700 leading-relaxed flex-1">
                  {doc}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
