'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { BlogPost } from '@/lib/blog';
import type { Locale } from '@/lib/i18n';

interface BlogCardProps {
  post: BlogPost;
  locale: Locale;
}

export function BlogCard({ post, locale }: BlogCardProps) {
  return (
    <Card className="group h-full border-2 border-gray-100 hover:border-ua-blue/40 transition-colors shadow-sm hover:shadow-lg">
      <CardHeader>
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="capitalize">
              {tag}
            </Badge>
          ))}
        </div>
        <CardTitle className="text-xl text-gray-900 group-hover:text-ua-blue transition-colors">
          {post.title[locale]}
        </CardTitle>
        <CardDescription className="text-sm text-gray-500">
          {new Date(post.publishedAt).toLocaleDateString(locale === 'ua' ? 'uk-UA' : 'ru-RU', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
          {post.updatedAt
            ? ` • ${new Date(post.updatedAt).toLocaleDateString(
                locale === 'ua' ? 'uk-UA' : 'ru-RU'
              )}`
            : null}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col h-full justify-between">
        <p className="text-base text-gray-700 leading-relaxed mb-6">
          {post.excerpt[locale]}
        </p>
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center text-ua-blue font-semibold hover:underline underline-offset-4"
        >
          <span>{locale === 'ua' ? 'Читати далі' : 'Читать далее'}</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  );
}
