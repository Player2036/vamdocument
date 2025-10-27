'use client';

interface FooterProps {
  t: any;
}

export function Footer({ t }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-6">
          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
            {t.footer.copyright}
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a
              href="#privacy"
              className="text-gray-400 hover:text-white transition-colors underline underline-offset-4"
            >
              {t.footer.privacy}
            </a>
            <span className="text-gray-600">•</span>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-gray-400 hover:text-white transition-colors underline underline-offset-4"
            >
              {t.footer.contacts}
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
