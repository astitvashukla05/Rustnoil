'use client';

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function ServicesPage() {
  return (
    <main className="bg-[#fdf8ee] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_380px] gap-12">
        {/* LEFT CONTENT */}
        <motion.section
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="space-y-10"
        >
          {/* Heading */}
          <div>
            <p className="text-xs tracking-widest text-amber-600 font-semibold">
              RUSTONIL SERVICES
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2">
              Advanced Rust Treatment & Industrial Protection
            </h1>
            <p className="text-slate-600 mt-4 leading-relaxed max-w-2xl">
              Rustonil offers professional rust removal, corrosion prevention
              and surface restoration solutions engineered for industrial-grade
              applications across heavy machinery, pipelines and fabricated
              metals.
            </p>
          </div>

          {/* Service Feature Box */}
          <motion.div
            variants={fadeUp}
            className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 rounded-3xl shadow-xl space-y-6"
          >
            <div>
              <h3 className="text-sm uppercase text-amber-400 tracking-widest font-semibold">
                Innovation in Chemistry
              </h3>
              <p className="text-sm text-slate-200 mt-2 leading-relaxed">
                Rustonil formulations convert unstable rust into a stable
                molecular layer that resists further corrosion, ensuring longer
                component life and reduction in maintenance costs.
              </p>
            </div>

            <div>
              <h3 className="text-sm uppercase text-amber-400 tracking-widest font-semibold">
                National Recognition – 2000
              </h3>
              <p className="text-sm text-slate-200 mt-2 leading-relaxed">
                Showcased at the India International Trade Fair (Pragati
                Maidan), Rustonil gained nationwide recognition for its
                revolutionary rust conversion performance.
              </p>
            </div>

            <div>
              <h3 className="text-sm uppercase text-amber-400 tracking-widest font-semibold">
                Growing Industrial Adoption
              </h3>
              <p className="text-sm text-slate-200 mt-2 leading-relaxed">
                Trusted by fabrication units and large-scale manufacturers,
                Rustonil leads the anti-corrosion industry with reliable
                formulations made in India.
              </p>
            </div>
          </motion.div>

          {/* CTA SECTION - FIXED BUTTONS */}
          <motion.section
            variants={fadeUp}
            className="mt-8 rounded-3xl bg-gradient-to-r from-amber-50 to-white border border-amber-200 px-6 py-6 sm:px-10 sm:py-8 shadow-md"
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              {/* Text */}
              <div className="max-w-xl">
                <p className="text-sm font-semibold text-slate-900 mb-1">
                  Need help with a specific rust problem?
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed width">
                  Share your component details, rust condition and expected
                  results. We recommend the right Rustonil solution with an
                  application plan.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex gap-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] rounded-2xl bg-slate-900 text-white shadow-lg transition-all duration-300 hover:bg-slate-800 hover:shadow-xl hover:-translate-y-[2px]"
                >
                  Contact
                </Link>

                <Link
                  href="/products"
                  className="inline-flex items-center justify-center px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em]  rounded-2xl border border-amber-500 text-amber-700 bg-white transition-all duration-300 hover:bg-amber-50 hover:shadow-md hover:-translate-y-[2px]"
                >
                  Explore products
                </Link>
              </div>
            </div>
          </motion.section>
        </motion.section>

        {/* RIGHT SIDEBAR */}
        <aside className="space-y-8">
          {/* Product List */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h4 className="text-sm font-semibold mb-4 tracking-widest text-slate-800">
              PRODUCT CATEGORIES
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>Industrial Rust Remover</li>
              <li>Surface Rust Remover</li>
              <li>Water Based Rust Remover</li>
              <li>Machine Engine Rust Remover</li>
              <li>Rust Preventors</li>
              <li>Derusting Chemicals</li>
            </ul>

            <Link
              href="/products"
              className="mt-5 inline-block text-xs font-semibold tracking-widest text-amber-600 hover:underline"
            >
              VIEW FULL PRODUCT RANGE →
            </Link>
          </div>

          {/* Contact Card */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h4 className="text-sm font-semibold mb-4 tracking-widest text-slate-800">
              CONTACT FOR SERVICES
            </h4>
            <p className="text-sm text-slate-700 font-medium">
              Trimurti (India)
            </p>
            <p className="text-xs text-slate-600 leading-relaxed mt-1">
              7-A, Sardar Patel Marg, Civil Lines
              <br />
              Prayagraj (Allahabad) – 211001
              <br />
              Uttar Pradesh, India
            </p>

            <div className="mt-4 text-xs">
              <p>Phone: +91-XXXXXXXXXX</p>
              <p>Email: info@rustonil.com</p>
            </div>

            <Link
              href="/contact"
              className="mt-5 block text-center px-5 py-2 text-xs font-semibold uppercase tracking-widest rounded-full bg-amber-500 text-white hover:bg-amber-600 transition"
            >
              Send Service Enquiry
            </Link>
          </div>
        </aside>
      </div>
    </main>
  );
}
