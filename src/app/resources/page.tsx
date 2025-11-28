'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 26 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const techDocs = [
  {
    title: 'Rustonil Technology Overview',
    description:
      'Summary of how Rustonil converts rust, protects metal and supports downstream painting and coating.',
    type: 'Technical Note',
  },
  {
    title: 'Recommended Application Parameters',
    description:
      'Guidelines for dilution, temperature and treatment time for common Rustonil products in workshops and plants.',
    type: 'Process Guide',
  },
  {
    title: 'Safety & Handling Guidelines',
    description:
      'Key safety notes, PPE recommendations and basic environmental guidelines while using Rustonil solutions.',
    type: 'Safety Sheet',
  },
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-[#FFF8EC] pt-20 pb-16">
      <section className="max-w-7xl mx-auto px-6 mt-8 grid gap-10 lg:grid-cols-[minmax(0,2.1fr)_minmax(0,1fr)]">
        {/* MAIN CONTENT */}
        <div className="space-y-8">
          {/* Header */}
          <motion.header
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="space-y-3"
          >
            <p className="inline-block text-xs uppercase tracking-[0.3em] text-amber-600 font-semibold">
              Our Technology & Resources
            </p>
            <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900">
              Lead-free, eco-conscious rust treatment technology.
            </h1>
            <p className="max-w-3xl text-sm sm:text-base text-slate-600 leading-relaxed">
              Rustonil products are built on a lead-free, eco-friendly chemistry
              platform designed to remove stubborn rust, convert it into a more
              stable layer and leave a surface that bonds strongly with
              subsequent primers and paints.
            </p>
          </motion.header>

          {/* Technology summary */}
          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-3xl bg-white/95 border border-slate-200/80 px-5 py-6 sm:px-8 sm:py-8 shadow-sm space-y-4"
          >
            <h2 className="text-lg font-semibold text-slate-900">
              How Rustonil technology works
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Traditional rust removers often strip corrosion aggressively and
              leave the metal bare and unprotected. Rustonil behaves
              differently: the chemistry is designed to react with existing
              rust, convert unstable iron oxides into a more stable form and
              build a tightly bound conversion layer on the surface.
            </p>

            <ul className="mt-2 space-y-3 text-sm text-slate-700">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-500" />
                <div>
                  <p className="font-semibold text-slate-900">
                    Lead-free, eco-friendly formulation
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    No lead compounds are used in Rustonil products, reducing
                    risk to people and waterways while still delivering strong
                    anti-corrosion performance.
                  </p>
                </div>
              </li>

              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-500" />
                <div>
                  <p className="font-semibold text-slate-900">
                    One-step rust removal and conversion
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    During treatment, heavy rust is loosened and removed while
                    remaining oxides are transformed into a compact, adherent
                    film that slows further attack.
                  </p>
                </div>
              </li>

              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-500" />
                <div>
                  <p className="font-semibold text-slate-900">
                    Smooth, paint-ready surface
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Treated parts often show a darker, uniform finish which
                    gives primers and top coats better anchoring compared with
                    untreated steel.
                  </p>
                </div>
              </li>
            </ul>
          </motion.section>

          {/* Performance & Testing */}
          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-3xl bg-white/95 border border-slate-200/80 px-5 py-6 sm:px-8 sm:py-8 shadow-sm space-y-4"
          >
            <h2 className="text-lg font-semibold text-slate-900">
              Performance &amp; lab testing
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              In comparative tests against conventional anti-corrosive systems,
              Rustonil-treated components have shown strong performance in salt
              spray and UV exposure conditions, making them suitable for
              demanding industrial environments.
            </p>

            <div className="grid gap-4 sm:grid-cols-3 text-sm text-slate-700">
              <div className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Salt spray
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-900">
                  High resistance
                </p>
                <p className="mt-1 text-[11px] text-slate-600 leading-relaxed">
                  Treated samples maintain coating integrity longer versus
                  untreated or lightly cleaned surfaces.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  UV &amp; weather
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-900">
                  Stable performance
                </p>
                <p className="mt-1 text-[11px] text-slate-600 leading-relaxed">
                  Protective layer and coatings show slower breakdown when
                  exposed to sunlight and outdoor conditions.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Process benefit
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-900">
                  Reduced rework
                </p>
                <p className="mt-1 text-[11px] text-slate-600 leading-relaxed">
                  Better surface preparation means fewer paint failures and less
                  need for repeat blasting or grinding.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Safety & Environment */}
          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="rounded-3xl bg-white/95 border border-slate-200/80 px-5 py-6 sm:px-8 sm:py-8 shadow-sm space-y-4"
          >
            <h2 className="text-lg font-semibold text-slate-900">
              Safety &amp; environmental considerations
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Rustonil technology is formulated to be effective while staying
              mindful of worker safety and the environment. Even with safer
              ingredients, normal chemical-handling practices must always be
              followed.
            </p>

            <div className="grid gap-3 sm:grid-cols-2 text-xs sm:text-sm text-slate-700">
              <div className="space-y-1.5">
                <p className="font-semibold text-slate-900">
                  Safer formulation choices
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Products avoid the use of lead and focus on ingredients that
                  are compatible with standard industrial wastewater treatment
                  practices when used correctly.
                </p>
              </div>
              <div className="space-y-1.5">
                <p className="font-semibold text-slate-900">
                  Operator protection
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Basic PPE such as gloves, goggles and adequate ventilation is
                  recommended whenever handling liquid chemicals and treated
                  components.
                </p>
              </div>
              <div className="space-y-1.5">
                <p className="font-semibold text-slate-900">
                  Bath monitoring &amp; disposal
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Used baths should be handled in line with local regulations.
                  Regular checks help maximise bath life and minimise waste.
                </p>
              </div>
              <div className="space-y-1.5">
                <p className="font-semibold text-slate-900">
                  Documentation &amp; training
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Site-specific procedures and internal training ensure Rustonil
                  is applied in a controlled, repeatable and safe manner.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Downloadable / resource cards */}
          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-3xl bg-white/95 border border-slate-200/80 px-5 py-6 sm:px-8 sm:py-8 shadow-sm"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between mb-4">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">
                  Technical resources
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed max-w-xl">
                  Use these documents as a starting point for process
                  discussions, internal approvals and safety reviews in your
                  organisation.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {techDocs.map((doc) => (
                <div
                  key={doc.title}
                  className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {doc.title}
                    </p>
                    <p className="mt-1 text-xs text-slate-600 leading-relaxed max-w-2xl">
                      {doc.description}
                    </p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-slate-500">
                      {doc.type}
                    </p>
                  </div>
                  <button className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-800 hover:border-amber-500 hover:text-amber-700 hover:shadow-sm transition">
                    Download sample
                  </button>
                </div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* SIDEBAR */}
        <motion.aside
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-8 lg:mt-0 lg:sticky lg:top-28 lg:h-fit rounded-3xl bg-slate-900 text-slate-50 px-6 py-7 space-y-4 shadow-xl shadow-slate-900/30"
        >
          {/* Product quick links */}
          <div className="rounded-2xl bg-white/95 border border-slate-200/80 px-5 py-5 shadow-sm">
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-900">
              Product families
            </h3>
            <div className="space-y-3 text-xs text-slate-700">
              <div>
                <p className="mb-1 font-semibold text-slate-900">
                  Rust Remover
                </p>
                <ul className="space-y-1">
                  <li>Rustonil FZ 105</li>
                  <li>Rustonil</li>
                  <li>Industrial Rust Remover</li>
                  <li>Surface Rust Remover</li>
                  <li>Water Based Rust Remover</li>
                  <li>Machine Engine Rust Remover</li>
                </ul>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <p className="mb-1 font-semibold text-slate-900">
                  Rust Preventor
                </p>
                <ul className="space-y-1">
                  <li>Metallic Pipe Rust Preventer</li>
                  <li>Rust Prevention Chemical</li>
                </ul>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <p className="mb-1 font-semibold text-slate-900">
                  Other Products
                </p>
                <ul className="space-y-1">
                  <li>Iron Pipes Antirust Chemical</li>
                  <li>Derusting Chemicals</li>
                </ul>
              </div>
            </div>

            <div className="mt-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-slate-800"
              >
                View full product range
              </Link>
            </div>
          </div>

          {/* Contact for technical info */}
          <div className="rounded-2xl bg-white/95 border border-slate-200/80 px-5 py-5 shadow-sm">
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-900">
              Technical enquiries
            </h3>
            <p className="text-xs text-slate-700">
              For detailed test reports or site-specific recommendations, reach
              out to our technical team.
            </p>
            <div className="mt-3 space-y-1 text-xs text-slate-700">
              <p className="font-semibold text-slate-900">Trimurti (India)</p>
              <p>
                7-A, Sardar Patel Marg,
                <br />
                Civil Lines, Prayagraj (Allahabad) – 211001
                <br />
                Uttar Pradesh, India
              </p>
              <p className="pt-1">
                Email: <span className="font-medium">info@rustonil.com</span>
              </p>
            </div>

            <div className="mt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-800 hover:border-amber-500 hover:text-amber-700"
              >
                Send technical enquiry
              </Link>
            </div>
          </div>
        </motion.aside>
      </section>
    </main>
  );
}
