import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageShell } from '@/components/PageShell';
import { BlogPostPageContent } from '@/components/page-content/BlogPostPageContent';
import { getAllBlogSlugs, getBlogPostBySlug } from '@/lib/blog';

type PageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = getBlogPostBySlug(params.slug);
  if (!post) {
    return {
      title: 'Статья не найдена',
    };
  }

  return {
    title: post.title.ru,
    description: post.seoDescription.ru,
    openGraph: {
      title: post.title.ru,
      description: post.seoDescription.ru,
      type: 'article',
      url: `https://vamdocument.com/blog/${post.slug}`,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title.ru,
      description: post.seoDescription.ru,
    },
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <PageShell>
      <BlogPostPageContent post={post} />
    </PageShell>
  );
}
