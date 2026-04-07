import { useTranslations } from 'next-intl';
import Link from 'next/link';

interface BlogPostPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { locale, slug } = await params;

  const title = slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <main className="section-padding">
      <div className="container-site max-w-3xl">
        <div className="mb-8">
          <Link
            href={`/${locale}/blog`}
            className="text-accent-primary text-sm hover:underline"
          >
            ← {locale === 'ro' ? 'Înapoi la blog' : 'Back to blog'}
          </Link>
        </div>

        <h1 className="font-satoshi text-3xl md:text-4xl mb-6">{title}</h1>

        <div className="glass-card p-8 text-center">
          <p className="text-text-secondary text-lg mb-4">
            {locale === 'ro'
              ? 'Acest articol este în pregătire. Revino curând!'
              : 'This article is being prepared. Come back soon!'}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="text-accent-primary hover:underline"
          >
            {locale === 'ro'
              ? 'Între timp, contactează-ne →'
              : 'In the meantime, contact us →'}
          </Link>
        </div>
      </div>
    </main>
  );
}
