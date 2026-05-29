import { getNewsPageMarkdownUrl, newsSource } from '@/lib/source';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/components/mdx';
import type { Metadata } from 'next';
import { createRelativeLink } from 'fumadocs-ui/mdx';

export default async function Page(props: PageProps<'/news/[slug]'>) {
  const params = await props.params;
  const page = newsSource.getPage([params.slug]);
  if (!page) notFound();

  const MDX = page.data.body;
  const data = page.data as { date?: string; author?: string };
  const formattedDate = data.date
    ? new Date(data.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : '';

  return (
    <div className="flex flex-col flex-1 max-w-3xl mx-auto w-full px-6 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-3">{page.data.title}</h1>
        {page.data.description && (
          <p className="text-lg text-muted-foreground mb-4">
            {page.data.description}
          </p>
        )}
        <div className="flex flex-row gap-4 text-sm text-muted-foreground">
          {formattedDate && <span>{formattedDate}</span>}
          {data.author && <span>{data.author}</span>}
        </div>
      </div>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <MDX
          components={getMDXComponents({
            a: createRelativeLink(newsSource, page),
          })}
        />
      </div>

      <div className="mt-12 pt-6 border-t">
        <a
          href="/news"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Back to all news
        </a>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return newsSource.generateParams().map(({ slug }) => ({
    slug: slug.join('/'),
  }));
}

export async function generateMetadata(props: PageProps<'/news/[slug]'>): Promise<Metadata> {
  const params = await props.params;
  const page = newsSource.getPage([params.slug]);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}