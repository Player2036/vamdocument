'use client';

import { ClipboardList, FileCheck, Mail } from 'lucide-react';

interface StepsProps {
  t: any;
}

export function Steps({ t }: StepsProps) {
  const steps = [
    {
      number: 1,
      icon: ClipboardList,
      text: t.steps.step1,
    },
    {
      number: 2,
      icon: FileCheck,
      text: t.steps.step2,
    },
    {
      number: 3,
      icon: Mail,
      text: t.steps.step3,
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
          {t.steps.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-ua-blue to-ua-blue/80 rounded-full flex items-center justify-center shadow-lg">
                      <Icon size={40} className="text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-ua-yellow rounded-full flex items-center justify-center font-bold text-ua-blue shadow-md">
                      {step.number}
                    </div>
                  </div>

                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    {step.text}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5">
                    <div className="w-1/2 h-full bg-gradient-to-r from-ua-blue/30 to-transparent" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
