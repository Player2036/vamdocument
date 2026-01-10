'use client';

import { CheckCircle2 } from 'lucide-react';

export function ThankYouPageContent() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 lg:p-16 text-center border-2 border-ua-blue/10">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-12 h-12 text-green-600" />
          </div>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Спасибо!
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
          Ваша заявка отправлена и будет обработана в течение 24 часов.
        </p>
      </div>
    </div>
  );
}
