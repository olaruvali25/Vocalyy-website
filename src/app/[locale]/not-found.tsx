import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="section-padding min-h-[60vh] flex items-center justify-center">
      <div className="container-site max-w-lg text-center">
        <div className="font-mono text-[8rem] leading-none font-bold text-accent-primary mb-4 glow-text">
          404
        </div>
        <h1 className="font-satoshi text-2xl text-text-primary mb-4">
          Pagina nu a fost găsită
        </h1>
        <p className="text-text-secondary mb-8">
          Ne pare rău, pagina pe care o cauți nu există sau a fost mutată.
        </p>
        <Link
          href="/ro"
          className="inline-flex items-center gap-2 bg-accent-primary text-bg-primary px-6 py-3 rounded-lg font-medium hover:scale-[1.02] transition-transform"
        >
          ← Înapoi acasă
        </Link>
      </div>
    </main>
  );
}
