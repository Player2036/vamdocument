'use client';

import type { MouseEvent } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { ContactIcons } from '@/components/ContactIcons';

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
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <Link
              href="/"
              className="text-gray-400 hover:text-white transition-colors font-medium"
            >
              {t.footer?.navReplacement ?? t.nav?.replacement ?? 'Замена / восстановление прав'}
            </Link>
            <Link
              href="/poland"
              className="text-gray-400 hover:text-white transition-colors font-medium"
            >
              {t.footer?.navPoland ?? t.nav?.poland ?? 'Получение прав в Польше'}
            </Link>
            <Link
              href="/how-it-works"
              className="text-gray-400 hover:text-white transition-colors"
            >
              {t.nav?.howItWorks}
            </Link>
            <Link
              href="/faq"
              className="text-gray-400 hover:text-white transition-colors"
            >
              {t.nav?.faq}
            </Link>
            <Link
              href="/blog"
              className="text-gray-400 hover:text-white transition-colors"
            >
              {t.nav?.blog}
            </Link>
            <Link
              href="/reviews"
              className="text-gray-400 hover:text-white transition-colors"
            >
              {t.nav?.reviews}
            </Link>
            <Link
              href="/about"
              className="text-gray-400 hover:text-white transition-colors"
            >
              {t.pages?.about?.title}
            </Link>
            <Link
              href="/licenses"
              className="text-gray-400 hover:text-white transition-colors"
            >
              {t.pages?.licenses?.title}
            </Link>
            <a
              href="#contact"
              onClick={handleContactClick}
              className="text-gray-400 hover:text-white transition-colors"
            >
              {t.nav?.contact ?? t.footer?.contacts}
            </a>
          </div>

          {/* Contacts (WhatsApp, Telegram, Viber) + Social (TikTok, Instagram) — icons */}
          <ContactIcons />

          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
            {t.footer.copyright}
          </p>

          <div className="pt-6 border-t border-gray-800 w-full max-w-2xl">
            <p className="text-sm text-gray-500">vamdocument.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
