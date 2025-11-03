'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Locale } from '@/lib/i18n';

interface HeaderProps {
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
  t: any;
}

export function Header({ locale, onLocaleChange, t }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleSectionNavigation = (id: string) => {
    if (pathname === '/') {
      scrollToSection(id);
    } else {
      router.push(`/#${id}`);
      setIsMenuOpen(false);
    }
  };

  const handleHomeNavigation = () => {
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      router.push('/');
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <button
              onClick={handleHomeNavigation}
              className="text-xl sm:text-2xl font-bold text-ua-blue hover:opacity-80 transition-opacity"
            >
              {t.brand}
            </button>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleSectionNavigation('services')}
              className="text-gray-700 hover:text-ua-blue transition-colors font-medium"
            >
              {t.nav.services}
            </button>
            <Link
              href="/how-it-works"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-ua-blue transition-colors font-medium"
            >
              {t.nav.howItWorks}
            </Link>
            <Link
              href="/faq"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-ua-blue transition-colors font-medium"
            >
              {t.nav.faq}
            </Link>
            <Link
              href="/blog"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-ua-blue transition-colors font-medium"
            >
              {t.nav.blog}
            </Link>
            <Link
              href="/reviews"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-ua-blue transition-colors font-medium"
            >
              {t.nav.reviews}
            </Link>
            <button
              onClick={() => handleSectionNavigation('contact')}
              className="text-gray-700 hover:text-ua-blue transition-colors font-medium"
            >
              {t.nav.contact}
            </button>

            <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-gray-300">
              <button
                onClick={() => onLocaleChange('ru')}
                className={`px-2 py-1 text-sm font-medium transition-colors ${
                  locale === 'ru'
                    ? 'text-ua-blue font-bold'
                    : 'text-gray-600 hover:text-ua-blue'
                }`}
              >
                RU
              </button>
              <span className="text-gray-400">|</span>
              <button
                onClick={() => onLocaleChange('ua')}
                className={`px-2 py-1 text-sm font-medium transition-colors ${
                  locale === 'ua'
                    ? 'text-ua-blue font-bold'
                    : 'text-gray-600 hover:text-ua-blue'
                }`}
              >
                UA
              </button>
            </div>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-ua-blue hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="px-4 py-4 space-y-3">
            <button
              onClick={() => handleSectionNavigation('services')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:text-ua-blue hover:bg-gray-50 rounded-md transition-colors font-medium"
            >
              {t.nav.services}
            </button>
            <Link
              href="/how-it-works"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:text-ua-blue hover:bg-gray-50 rounded-md transition-colors font-medium"
            >
              {t.nav.howItWorks}
            </Link>
            <Link
              href="/faq"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:text-ua-blue hover:bg-gray-50 rounded-md transition-colors font-medium"
            >
              {t.nav.faq}
            </Link>
            <Link
              href="/blog"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:text-ua-blue hover:bg-gray-50 rounded-md transition-colors font-medium"
            >
              {t.nav.blog}
            </Link>
            <Link
              href="/reviews"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:text-ua-blue hover:bg-gray-50 rounded-md transition-colors font-medium"
            >
              {t.nav.reviews}
            </Link>
            <button
              onClick={() => handleSectionNavigation('contact')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:text-ua-blue hover:bg-gray-50 rounded-md transition-colors font-medium"
            >
              {t.nav.contact}
            </button>

            <div className="flex items-center justify-center space-x-2 pt-3 border-t border-gray-200">
              <button
                onClick={() => onLocaleChange('ru')}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  locale === 'ru'
                    ? 'bg-ua-blue text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                RU
              </button>
              <span className="text-gray-400">|</span>
              <button
                onClick={() => onLocaleChange('ua')}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  locale === 'ua'
                    ? 'bg-ua-blue text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                UA
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
