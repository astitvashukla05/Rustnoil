import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProductBySlug } from '../../../data/product';

type ProductPageProps = {
  // in latest Next, params in Server Components is a Promise
  params: Promise<{ slug: string }>;
};

export default async function ProductDetailPage({ params }: ProductPageProps) {
  // unwrap params Promise
  const { slug } = await params;

  const product = getProductBySlug(slug);

  if (!product) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-[#FFF8EC] pt-24 pb-20">
      <section className="max-w-6xl mx-auto px-6 lg:px-8 space-y-10">
        {/* breadcrumb */}
        <div className="flex items-center justify-between gap-4 text-xs text-slate-500">
          <div className="space-x-1">
            <Link href="/" className="hover:text-amber-600">
              Home
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-amber-600">
              Products
            </Link>
            <span>/</span>
            <span className="text-slate-700">{product.name}</span>
          </div>
          <Link
            href="/products"
            className="hidden sm:inline-flex items-center rounded-full border border-slate-300 px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-slate-700 hover:border-amber-500 hover:text-amber-700"
          >
            ← Back to all products
          </Link>
        </div>

        {/* main layout */}
        <section className="grid gap-10 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1.3fr)] items-start">
          {/* LEFT: product info */}
          <div className="space-y-7">
            <div className="space-y-3">
              <p className="text-[11px] font-medium text-amber-700/90">
                {product.category}
              </p>
              <h1 className="text-3xl sm:text-[2.2rem] leading-snug font-semibold text-slate-900">
                {product.name}
              </h1>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {product.techSummary}
              </p>
            </div>

            <div className="rounded-3xl bg-white border border-slate-200/80 px-5 py-6 sm:px-7 sm:py-7 shadow-sm space-y-4">
              <h2 className="text-sm font-semibold text-slate-900">
                Key features
              </h2>
              <ul className="space-y-2 text-sm text-slate-700">
                {product.features.map((f: string) => (
                  <li key={f} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-500" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {product.applications?.length > 0 && (
              <div className="rounded-3xl bg-white border border-slate-200/80 px-5 py-6 sm:px-7 sm:py-7 shadow-sm space-y-4">
                <h2 className="text-sm font-semibold text-slate-900">
                  Typical applications
                </h2>
                <ul className="space-y-1.5 text-sm text-slate-700">
                  {product.applications.map((a: string) => (
                    <li key={a}>• {a}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* RIGHT: process + CTA */}
          <div className="space-y-6">
            <div className="rounded-3xl bg-white border border-slate-200/80 px-5 py-6 sm:px-7 sm:py-7 shadow-sm space-y-4">
              <h2 className="text-sm font-semibold text-slate-900">
                Typical process outline
              </h2>
              <ol className="list-decimal list-inside space-y-1.5 text-sm text-slate-700">
                <li>Degrease and clean parts to remove oil and loose dirt.</li>
                <li>
                  Apply or immerse in{' '}
                  <span className="font-semibold">{product.name}</span> as
                  recommended.
                </li>
                <li>Allow to react, then rinse with clean water.</li>
                <li>Dry thoroughly and apply primer / protective coating.</li>
              </ol>
              <p className="pt-1 text-[11px] text-slate-500">
                Exact parameters should be finalised after trials on your own
                components.
              </p>
            </div>

            <div className="rounded-3xl bg-slate-900 text-slate-100 px-5 py-6 sm:px-7 sm:py-7 space-y-4 shadow-md">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
                Need help with this product?
              </h2>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Share photos, component details and production volume so we can
                confirm suitability of{' '}
                <span className="font-semibold">{product.name}</span> or suggest
                a better option from the Rustonil range.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/contact?product=${encodeURIComponent(product.name)}`}
                  className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-900 hover:bg-slate-100"
                >
                  Send enquiry
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center rounded-full border border-amber-400/70 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-200 hover:bg-amber-50/10"
                >
                  View other products
                </Link>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
