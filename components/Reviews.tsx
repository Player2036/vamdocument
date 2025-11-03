'use client';

import { Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Locale } from '@/lib/i18n';
import { reviews } from '@/lib/reviews';

interface ReviewsProps {
  locale: Locale;
  title: string;
  description?: string;
}

export function Reviews({ locale, title, description }: ReviewsProps) {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h1>
          {description && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              {description}
            </p>
          )}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <Card
              key={review.id}
              className="h-full border-2 border-gray-100 hover:border-ua-blue/40 transition-all bg-white shadow-sm hover:shadow-lg"
            >
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">
                  {review.name}
                </CardTitle>
                <p className="text-sm text-gray-500">{review.country}</p>
                <div className="flex items-center gap-1 pt-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className={`h-4 w-4 ${
                        index < review.rating ? 'text-ua-yellow' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-base text-gray-700 leading-relaxed">
                  {review.text[locale]}
                </p>
                <p className="mt-4 text-xs uppercase tracking-wide text-gray-400">
                  {new Date(review.publishedAt).toLocaleDateString(
                    locale === 'ua' ? 'uk-UA' : 'ru-RU',
                    { year: 'numeric', month: 'long', day: 'numeric' }
                  )}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
