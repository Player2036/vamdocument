'use client';

import { BlogCard } from '@/components/BlogCard';
import { blogPosts } from '@/lib/blog';
import type { Locale } from '@/lib/i18n';

interface BlogListPageContentProps {
  locale?: Locale;
  t?: any;
}

export function BlogListPageContent({ locale, t }: BlogListPageContentProps) {
  if (!locale || !t) {
    return null;
  }

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t.pages?.blog?.title || 'Центр информации'}
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            {t.pages?.blog?.description ||
              'Публикуем инструкции, новости и советы, связанные с украинскими водительскими удостоверениями за границей.'}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
}
