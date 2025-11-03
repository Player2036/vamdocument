'use client';

import Link from 'next/link';
import type { BlogPost } from '@/lib/blog';
import type { Locale } from '@/lib/i18n';

interface BlogPostPageContentProps {
  locale?: Locale;
  t?: any;
  post: BlogPost;
}

export function BlogPostPageContent({ locale, t, post }: BlogPostPageContentProps) {
  if (!locale || !t) {
    return null;
  }

  const localeDate = locale === 'ua' ? 'uk-UA' : 'ru-RU';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title[locale],
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      '@type': 'Organization',
      name: 'vamdocument.com',
    },
    mainEntityOfPage: `https://vamdocument.com/blog/${post.slug}`,
    articleBody: post.content[locale].join('\n\n'),
  };

  return (
    <>
      <article className="py-16 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-ua-blue hover:underline underline-offset-4 mb-6"
          >
            ← {t.pages?.blogPost?.back || 'Вернуться назад'}
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {post.title[locale]}
          </h1>
          <div className="text-sm text-gray-500 mb-8 flex flex-wrap gap-3 items-center">
            <span>
              {new Date(post.publishedAt).toLocaleDateString(localeDate, {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            {post.updatedAt && (
              <span>
                {t.pages?.blogPost?.updated || 'Обновлено'}:{' '}
                {new Date(post.updatedAt).toLocaleDateString(localeDate, {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            )}
            <span>• {post.readingTimeMinutes} мин</span>
          </div>

          <div className="space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
            {post.content[locale].map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
