'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const featuredProducts = [
  {
    name: 'Industrial Rust Remover',
    tag: 'Rust Remover',
    description:
      'High-strength liquid designed to remove hard corrosion from heavy machinery, structures and large fabricated components.',
    spec: 'For industrial use • Dark green liquid • Works in tough conditions',
  },
  {
    name: 'Machine Engine Rust Remover',
    tag: 'Rust Remover',
    description:
      'Special formulation for engines and rotating equipment, helping free rusted parts and clean internal metal surfaces.',
    spec: 'For engines & equipment • Proven on field machines',
  },
  {
    name: 'Metallic Pipe Rust Preventer',
    tag: 'Rust Preventor',
    description:
      'Protective oil that coats metallic pipes and sections to prevent rust during storage, transit and installation.',
    spec: 'Thin film protection • Suitable for long-distance shipping',
  },
  {
    name: 'Rust Prevention Chemical',
    tag: 'Anti-Corrosion Chemical',
    description:
      'Anti-corrosion additive used to keep treated surfaces rust-free for longer intervals in warehouses and yards.',
    spec: 'Long-term protection • Compatible with many substrates',
  },
];

export function FeaturedProducts() {
  return (
    <motion.section
      className="relative z-20 mt-10 pb-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="page-container">
        {/* White panel */}
        <div className="rounded-3xl bg-white border border-slate-200/80 shadow-soft px-6 py-8 md:px-10 md:py-10">
          <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-amber-600">
                Product Range
              </p>
              <h2 className="text-xl font-semibold text-slate-900 md:text-2xl">
                Rust removers, preventors & derusting solutions
              </h2>
            </div>
            <p className="text-xs text-slate-500 max-w-md">
              Trimurti (India) offers Rustonil rust removers, rust preventor
              oils and derusting chemicals that clean, restore and protect metal
              parts used in demanding industrial environments.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {featuredProducts.map((product, index) => (
              <motion.article
                key={product.name}
                className="rounded-2xl bg-[#FFF9F1] border border-slate-200/80 p-6 shadow-sm transition hover:shadow-md hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.12 * index }}
                viewport={{ once: true, amount: 0.4 }}
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-700">
                  {product.tag}
                </p>

                <h3 className="text-lg font-semibold mt-2 text-slate-900">
                  {product.name}
                </h3>

                <p className="text-sm text-slate-600 mt-1">
                  {product.description}
                </p>

                <div className="flex justify-between items-center mt-4 text-xs text-slate-500">
                  <span>{product.spec}</span>
                  <button className="text-amber-700 font-semibold cursor-pointer hover:text-amber-800">
                    Details →
                  </button>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-6 flex justify-end">
            <Link
              href="/products"
              className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700 hover:text-amber-800"
            >
              View full Rustonil catalogue →
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
