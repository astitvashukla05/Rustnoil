'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative -mt-16 w-full overflow-hidden pt-16">
      {/* Background Video - dulled & cinematic */}
      <video
        className="absolute inset-0 h-full w-full object-cover brightness-75 saturate-75 contrast-90"
        src="/hero-rustnoil.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Strong cinematic overlay + soft fade at bottom */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/55" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#FFF8EC]" />

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-[82vh] items-start pt-24 pb-16">
        <div className="page-container">
          <motion.div
            className="max-w-2xl space-y-6"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className="inline-block text-xs tracking-[0.3em] uppercase text-amber-300 font-semibold">
              Industrial rust remover & anti-corrosion experts
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-white">
              Strip away rust. <br />
              Keep every surface{' '}
              <span className="text-amber-400">clean and protected.</span>
            </h1>

            <p className="text-slate-200 leading-relaxed">
              Rustonil, from Trimurti (India), helps industries remove heavy
              rust from machinery, fabricated parts and pipes, then keep them
              corrosion-free with proven rust preventor oils and derusting
              chemicals.
            </p>

            {/* Premium Transparent Buttons */}
            <div className="flex gap-4 pt-2">
              <Link
                href="/products"
                className="rounded-full border border-white/70 bg-white/10 px-6 py-3 text-sm tracking-wide font-medium text-white backdrop-blur-md transition hover:bg-white/20"
              >
                View Rustonil Range →
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-white/40 bg-transparent px-6 py-3 text-sm tracking-wide font-medium text-white transition hover:border-white/80"
              >
                Talk to a Specialist
              </Link>
            </div>

            {/* Stats */}
            <motion.div
              className="flex gap-10 pt-6 text-sm text-slate-200"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
            >
              <div>
                <p className="text-2xl font-semibold text-white">35+</p>
                <p>Years in rust control</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-white">50k+</p>
                <p>Components treated each year</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-white">30+</p>
                <p>Industries we serve</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
