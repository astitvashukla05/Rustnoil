'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { RUST_PRODUCTS } from '../../data/product'; // 👈 relative import

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#FFF8EC] pt-24 pb-20">
      <section className="max-w-7xl mx-auto px-6 lg:px-8 space-y-10">
        {/* Header */}
        <motion.header
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          <p className="inline-block text-xs font-semibold tracking-[0.22em] text-amber-600 uppercase">
            Rustonil product range
          </p>
          <h1 className="text-3xl sm:text-[2.2rem] leading-snug font-semibold text-slate-900">
            Rust removers, preventors &amp; derusting chemicals.
          </h1>
          <p className="max-w-3xl text-sm sm:text-base text-slate-600 leading-relaxed">
            Explore Trimurti (India)&apos;s Rustonil portfolio – products that
            clean rusted components, protect metal surfaces and support your
            complete rust-control process.
          </p>
        </motion.header>

        {/* Grid */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="grid gap-7 md:grid-cols-2 xl:grid-cols-3"
        >
          {RUST_PRODUCTS.map((product, index) => (
            <motion.article
              key={product.slug}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.04 }}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white/95 shadow-sm hover:-translate-y-1 hover:border-amber-300/80 hover:shadow-lg transition"
            >
              {/* Image */}
              <div className="relative h-40 w-full overflow-hidden bg-slate-200/40">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>

              {/* Text */}
              <div className="flex flex-1 flex-col px-5 py-5 sm:px-6 sm:py-6 space-y-2">
                <p className="text-[11px] font-medium text-amber-700/90">
                  {product.category}
                </p>
                <h2 className="text-base sm:text-lg font-semibold text-slate-900">
                  {product.name}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {product.shortDescription}
                </p>
              </div>

              {/* Button */}
              <div className="border-t border-slate-100 px-5 py-4 sm:px-6 flex justify-end">
                <Link
                  href={`/products/${product.slug}`}
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-[11px] font-semibold tracking-[0.16em] text-white shadow-sm hover:bg-slate-800 hover:shadow-md transition"
                >
                  View details
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.section>
      </section>
    </main>
  );
}
