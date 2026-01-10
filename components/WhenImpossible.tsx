'use client';

import { AlertCircle, XCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface WhenImpossibleProps {
  t: any;
}

export function WhenImpossible({ t }: WhenImpossibleProps) {
  const limitations = [
    t.whenImpossible.alimony,
    t.whenImpossible.debtCollection,
  ];

  return (
    <section className="py-16 sm:py-20 bg-amber-50/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Alert className="border-2 border-amber-400 bg-gradient-to-br from-amber-50 to-yellow-50 shadow-lg">
          <AlertCircle className="h-5 w-5 text-amber-600" />
          <AlertTitle className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            {t.whenImpossible.title}
          </AlertTitle>
          <AlertDescription className="space-y-6 text-base sm:text-lg">
            <p className="text-gray-700 leading-relaxed">
              {t.whenImpossible.intro}
            </p>

            <ul className="space-y-3">
              {limitations.map((limitation, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center mt-0.5">
                    <XCircle size={16} className="text-white" />
                  </div>
                  <span className="text-gray-800 leading-relaxed flex-1">
                    {limitation}
                  </span>
                </li>
              ))}
            </ul>

            <p className="text-gray-700 leading-relaxed pt-4 border-t border-amber-200">
              {t.whenImpossible.outro}
            </p>
          </AlertDescription>
        </Alert>
      </div>
    </section>
  );
}
