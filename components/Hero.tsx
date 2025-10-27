'use client';

import { CreditCard, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  t: any;
}

export function Hero({ t }: HeroProps) {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white to-white" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              {t.hero.title}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              {t.hero.subtitle}
            </p>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-ua-blue hover:bg-ua-blue/90 text-white font-semibold px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              {t.hero.cta}
            </Button>
          </div>

          <div className="flex-shrink-0 relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-ua-blue/10 to-ua-yellow/10 rounded-full blur-3xl" />
            <div className="relative flex items-center justify-center h-full">
              <div className="relative">
                <div className="bg-white p-8 rounded-2xl shadow-2xl border-2 border-ua-blue/20 transform rotate-6 hover:rotate-3 transition-transform duration-300">
                  <CreditCard size={80} className="text-ua-blue" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white p-6 rounded-xl shadow-xl border-2 border-ua-yellow/40 transform -rotate-12 hover:-rotate-6 transition-transform duration-300">
                  <FileText size={48} className="text-ua-yellow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </section>
  );
}
