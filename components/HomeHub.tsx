'use client';

import Link from 'next/link';
import { Check } from 'lucide-react';

interface HomeHubProps {
  t: any;
}

export function HomeHub({ t }: HomeHubProps) {
  const hub = t.hub;
  if (!hub) return null;

  const scrollToUkraine = () => {
    const element = document.getElementById('ukraine-service');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white to-white" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            {hub.title}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            {hub.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1: Ukrainian license replacement — blue gradient */}
          <div className="flex flex-col rounded-2xl shadow-lg overflow-hidden bg-gradient-to-b from-blue-600 to-blue-800 p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6">
              {hub.card1.title}
            </h2>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3 text-white">
                <Check size={20} className="flex-shrink-0 mt-0.5 text-white" />
                <span>{hub.card1.item1}</span>
              </li>
              <li className="flex items-start gap-3 text-white">
                <Check size={20} className="flex-shrink-0 mt-0.5 text-white" />
                <span>{hub.card1.item2}</span>
              </li>
            </ul>
            <div className="card-image-placeholder h-[220px] flex items-center justify-center bg-white/10 rounded-xl mb-6 overflow-hidden">
              <img
                src="/ukraine-license.png"
                alt="Ukrainian driver license replacement"
                className="max-h-full object-contain"
              />
            </div>
            <button
              onClick={scrollToUkraine}
              className="w-full py-4 px-6 rounded-xl font-semibold text-gray-900 bg-yellow-400 hover:bg-yellow-500 transition-colors"
            >
              {hub.card1.button}
            </button>
          </div>

          {/* Card 2: Poland license — yellow gradient */}
          <div className="flex flex-col rounded-2xl shadow-lg overflow-hidden bg-gradient-to-b from-yellow-300 to-yellow-500 p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-6">
              {hub.card2.title}
            </h2>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3 text-gray-900">
                <Check size={20} className="flex-shrink-0 mt-0.5 text-gray-900" />
                <span>{hub.card2.item1}</span>
              </li>
              <li className="flex items-start gap-3 text-gray-900">
                <Check size={20} className="flex-shrink-0 mt-0.5 text-gray-900" />
                <span>{hub.card2.item2}</span>
              </li>
            </ul>
            <div className="card-image-placeholder h-[220px] flex items-center justify-center bg-white/30 rounded-xl mb-6 overflow-hidden">
              <img
                src="/poland-license.png"
                alt="Driver license in Poland"
                className="max-h-full object-contain"
              />
            </div>
            <Link
              href="/poland"
              className="w-full py-4 px-6 rounded-xl font-semibold text-white bg-blue-700 hover:bg-blue-800 transition-colors text-center block"
            >
              {hub.card2.button}
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </section>
  );
}
