'use client';

import type { MouseEvent } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

interface FooterProps {
  t: any;
}

export function Footer({ t }: FooterProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleContactClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (pathname === '/') {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      router.push('/#contact');
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-6">
          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
            {t.footer.copyright}
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <Link
              href="/how-it-works"
              className="hover:text-white transition-colors underline underline-offset-4"
            >
              {t.nav?.howItWorks || 'Как это работает'}
            </Link>
            <span className="text-gray-600">•</span>
            <Link
              href="/faq"
              className="hover:text-white transition-colors underline underline-offset-4"
            >
              {t.nav?.faq || 'Вопросы'}
            </Link>
            <span className="text-gray-600">•</span>
            <Link
              href="/blog"
              className="hover:text-white transition-colors underline underline-offset-4"
            >
              {t.nav?.blog || 'Центр информации'}
            </Link>
            <span className="text-gray-600">•</span>
            <Link
              href="/reviews"
              className="hover:text-white transition-colors underline underline-offset-4"
            >
              {t.nav?.reviews || 'Отзывы'}
            </Link>
            <span className="text-gray-600">•</span>
            <Link
              href="/about"
              className="hover:text-white transition-colors underline underline-offset-4"
            >
              {t.pages?.about?.title || 'О компании'}
            </Link>
            <span className="text-gray-600">•</span>
            <Link
              href="/licenses"
              className="hover:text-white transition-colors underline underline-offset-4"
            >
              {t.pages?.licenses?.title || 'Документы'}
            </Link>
            <span className="text-gray-600">•</span>
            <a
              href="#contact"
              onClick={handleContactClick}
              className="hover:text-white transition-colors underline underline-offset-4"
            >
              {t.nav?.contact || t.footer.contacts}
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://wa.me/359887366613"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 text-sm sm:text-base"
            >
              WhatsApp
            </a>
            <a
              href="https://www.tiktok.com/@sergey.bulgarian?_r=1&_t=ZN-92s7QzofsCU"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 text-sm sm:text-base"
            >
              TikTok
            </a>
          </div>

          <div className="pt-6 border-t border-gray-800 w-full max-w-2xl">
            <p className="text-sm text-gray-500">vamdocument.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
