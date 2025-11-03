'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import type { Locale } from '@/lib/i18n';
import type { FAQItem } from '@/lib/faq';

interface FAQAccordionProps {
  id?: string;
  locale: Locale;
  title: string;
  description?: string;
  items: FAQItem[];
}

export function FAQAccordion({
  id,
  locale,
  title,
  description,
  items,
}: FAQAccordionProps) {
  return (
    <section id={id} className="py-16 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
          {title}
        </h1>
        {description && (
          <p className="text-base sm:text-lg text-center text-gray-600 max-w-2xl mx-auto mb-10">
            {description}
          </p>
        )}

        <Accordion type="single" collapsible className="space-y-4">
          {items.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="border-2 border-gray-200 rounded-lg px-6 hover:border-ua-blue/50 transition-colors bg-white shadow-sm"
            >
              <AccordionTrigger className="text-left text-base sm:text-lg font-semibold text-gray-900 hover:text-ua-blue transition-colors py-5 hover:no-underline">
                {faq.question[locale]}
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-700 leading-relaxed pb-5">
                {faq.answer[locale]}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
