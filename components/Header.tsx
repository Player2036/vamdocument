'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Locale } from '@/lib/i18n';
import { ContactIcons } from '@/components/ContactIcons';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

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
    const hasSection = pathname === '/' || pathname === '/poland';
    if (hasSection) {
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

  const navLinkClass = 'text-gray-700 hover:text-ua-blue hover:bg-gray-50';
  const triggerClass =
    'inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-ua-blue transition-colors rounded-md hover:bg-gray-50 outline-none focus:ring-2 focus:ring-ua-blue/20';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <div className="flex-shrink-0">
            <button
              onClick={handleHomeNavigation}
              className="text-xl sm:text-2xl font-bold text-ua-blue hover:opacity-80 transition-opacity whitespace-nowrap"
            >
              {t.brand}
            </button>
          </div>

          <nav className="hidden md:flex items-center flex-1 min-w-0 justify-center gap-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className={triggerClass}>
                  {t.nav.replacement}
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="min-w-[200px]">
                <DropdownMenuItem asChild>
                  <Link href="/" className="cursor-pointer">
                    {t.nav.replacement}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/how-it-works" className="cursor-pointer">
                    {t.nav.howItWorks}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <button
                    onClick={() => handleSectionNavigation('services')}
                    className="w-full cursor-pointer text-left"
                  >
                    {t.nav.services}
                  </button>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/faq" className="cursor-pointer">
                    {t.nav.faq}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/reviews" className="cursor-pointer">
                    {t.nav.reviews}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <button
                    onClick={() => handleSectionNavigation('contact')}
                    className="w-full cursor-pointer text-left"
                  >
                    {t.nav.contact}
                  </button>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/blog" className="cursor-pointer">
                    {t.nav.blog}
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className={triggerClass}>
                  {t.nav.poland}
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="min-w-[200px]">
                <DropdownMenuItem asChild>
                  <Link href="/poland" className="cursor-pointer">
                    {t.nav.poland}
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          <div className="hidden md:flex items-center ml-4 pl-4 border-l border-gray-300 flex-shrink-0">
            <ContactIcons variant="compact" className="[&>a]:w-8 [&>a]:h-8 [&>a]:flex [&>a]:items-center [&>a]:justify-center" />
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
          <nav className="px-4 py-4 space-y-1">
            <Collapsible className="group/collapse">
              <CollapsibleTrigger className="flex w-full items-center justify-between px-4 py-3 text-gray-700 hover:text-ua-blue hover:bg-gray-50 rounded-md transition-colors font-medium">
                {t.nav.replacement}
                <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]/collapse:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-4 space-y-1 pt-1">
                <Link
                  href="/how-it-works"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-2 rounded-md ${navLinkClass}`}
                >
                  {t.nav.howItWorks}
                </Link>
                <button
                  onClick={() => {
                    handleSectionNavigation('services');
                  }}
                  className={`block w-full text-left px-4 py-2 rounded-md ${navLinkClass}`}
                >
                  {t.nav.services}
                </button>
                <Link
                  href="/faq"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-2 rounded-md ${navLinkClass}`}
                >
                  {t.nav.faq}
                </Link>
                <Link
                  href="/reviews"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-2 rounded-md ${navLinkClass}`}
                >
                  {t.nav.reviews}
                </Link>
                <button
                  onClick={() => handleSectionNavigation('contact')}
                  className={`block w-full text-left px-4 py-2 rounded-md ${navLinkClass}`}
                >
                  {t.nav.contact}
                </button>
                <Link
                  href="/blog"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-2 rounded-md ${navLinkClass}`}
                >
                  {t.nav.blog}
                </Link>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible className="group/collapse">
              <CollapsibleTrigger className="flex w-full items-center justify-between px-4 py-3 text-gray-700 hover:text-ua-blue hover:bg-gray-50 rounded-md transition-colors font-medium">
                {t.nav.poland}
                <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]/collapse:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-4 space-y-1 pt-1">
                <Link
                  href="/poland"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-2 rounded-md ${navLinkClass}`}
                >
                  {t.nav.poland}
                </Link>
              </CollapsibleContent>
            </Collapsible>

            <div className="flex justify-center pt-4 border-t border-gray-200">
              <ContactIcons variant="compact" />
            </div>
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
