'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

const rustRemoverLinks = [
  'Rustonil FZ 105',
  'Rustonil',
  'Industrial Rust Remover',
  'Surface Rust Remover',
  'Water Based Rust Remover',
  'Machine Engine Rust Remover',
];

const rustPreventorLinks = [
  'Metallic Pipe Rust Preventer',
  'Rust Prevention Chemical',
];

const otherProductLinks = [
  'Iron Pipes Antirust Chemical',
  'Derusting Chemicals',
];

// Simple animation variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay },
  }),
};

const fadeRight = {
  hidden: { opacity: 0, x: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay },
  }),
};

const staggerMain = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export default function About() {
  return (
    <div className="min-h-screen bg-[#FFF8EC] pt-20 pb-16">
      <section className="page-container mt-8">
        {/* HEADER */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-10 flex flex-col gap-3"
        >
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-amber-600 font-semibold">
            Company Profile
          </span>
          <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900">
            Trimurti (India) &amp; the Rustonil range.
          </h1>
          <p className="max-w-3xl text-sm sm:text-base text-slate-600 leading-relaxed">
            Trimurti (India) has built a strong reputation in the Indian
            anti-corrosive industry with its Rustonil brand of rust removers,
            rust preventors and derusting chemicals. Based in Prayagraj
            (Allahabad), the company supports industries across India with
            solutions that protect metal from corrosion and extend equipment
            life.
          </p>
        </motion.div>

        {/* MAIN + SIDEBAR */}
        <div className="grid gap-8 lg:grid-cols-[minmax(0,2.1fr)_minmax(0,1fr)]">
          {/* MAIN COLUMN - with stagger */}
          <motion.div
            variants={staggerMain}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="space-y-8"
          >
            {/* Intro / Story */}
            <motion.section
              variants={fadeUp}
              className="rounded-3xl bg-white/95 border border-slate-200/80 px-5 py-6 sm:px-8 sm:py-8 shadow-sm"
            >
              <h2 className="text-lg font-semibold text-slate-900 mb-3">
                A trusted name in anti-corrosion since 1985
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                Trimurti India entered the anti-corrosive products space in 1985
                and has steadily grown by offering practical answers to
                real-world rust problems. Over the years, the company has built
                strong expertise in manufacturing rust removers, rust preventive
                products and anti-corrosive chemicals that are widely used in
                workshops, fabrication units and large industries.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Under the guidance of{' '}
                <span className="font-semibold">Mr. Sagar Mishra</span>,
                Trimurti (India) continues to focus on performance, reliability
                and customer satisfaction, which has helped the company become a
                recognised supplier in India and abroad.
              </p>
            </motion.section>

            {/* Infrastructure */}
            <motion.section
              variants={fadeUp}
              className="rounded-3xl bg-white/95 border border-slate-200/80 px-5 py-6 sm:px-8 sm:py-8 shadow-sm space-y-3"
            >
              <h3 className="text-base font-semibold text-slate-900">
                Infrastructure
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                The company operates from a well-equipped facility in Prayagraj
                (Allahabad), Uttar Pradesh. Modern machinery and updated
                production technologies are used to manufacture Rustonil
                products in a controlled and consistent manner.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                This infrastructure allows Trimurti (India) to develop
                water-based and solvent-based formulations that meet industrial
                requirements for reliability, safety and ease of use, while
                maintaining quality across every batch.
              </p>
            </motion.section>

            {/* Quality Assurance */}
            <motion.section
              variants={fadeUp}
              className="rounded-3xl bg-white/95 border border-slate-200/80 px-5 py-6 sm:px-8 sm:py-8 shadow-sm space-y-3"
            >
              <h3 className="text-base font-semibold text-slate-900">
                Quality assurance
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Decades of experience in the field have helped Trimurti (India)
                build strong in-house know-how around rust removal and
                protection. Rustonil products are designed to minimise
                surface-preparation time and reduce effort at the user&apos;s
                end, helping save time, labour and cost.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Many Rustonil formulations are water-based and low-waste, which
                supports cleaner working environments. At the same time they
                offer excellent resistance against corrosion and rust formation,
                and can be used on steel, aluminium and even concrete in
                suitable applications.
              </p>
            </motion.section>

            {/* R&D */}
            <motion.section
              variants={fadeUp}
              className="rounded-3xl bg-white/95 border border-slate-200/80 px-5 py-6 sm:px-8 sm:py-8 shadow-sm space-y-3"
            >
              <h3 className="text-base font-semibold text-slate-900">
                Research &amp; development
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Trimurti (India) views product development as an ongoing
                process. The team continuously works on improving existing
                formulations and exploring new solutions in response to customer
                feedback and changing industrial needs.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                This focus on research and development has made the company a
                dependable partner for organisations that require help with
                complex rust and corrosion challenges.
              </p>
            </motion.section>

            {/* Key facts */}
            <motion.section
              variants={fadeUp}
              className="rounded-3xl bg-white/95 border border-slate-200/80 px-5 py-6 sm:px-8 sm:py-8 shadow-sm"
            >
              <h3 className="text-base font-semibold text-slate-900 mb-4">
                Key facts
              </h3>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  {
                    label: 'Name of CEO',
                    value: 'Mr. Sagar Mishra',
                  },
                  {
                    label: 'Year of Establishment',
                    value: '1985',
                  },
                  {
                    label: 'Nature of Business',
                    value: 'Manufacturer & Exporter',
                  },
                ].map((fact) => (
                  <motion.div
                    key={fact.label}
                    whileHover={{
                      y: -3,
                      scale: 1.01,
                      boxShadow: '0 18px 35px rgba(15,23,42,0.16)',
                    }}
                    className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 transition"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                      {fact.label}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">
                      {fact.value}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </motion.div>

          {/* SIDEBAR */}
          <motion.aside
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.2}
            className="space-y-5 lg:sticky lg:top-24 self-start"
          >
            {/* Products quick links */}
            <motion.div
              whileHover={{ y: -2 }}
              className="rounded-2xl bg-white/95 border border-slate-200/80 px-5 py-5 shadow-sm"
            >
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-900">
                Products
              </h4>

              <div className="space-y-3 text-xs text-slate-700">
                <div>
                  <p className="mb-1 font-semibold text-slate-900">
                    Rust Remover
                  </p>
                  <ul className="space-y-1">
                    {rustRemoverLinks.map((item) => (
                      <li key={item} className="flex items-center gap-1.5">
                        <span className="h-[2px] w-3 rounded-full bg-slate-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <p className="mb-1 font-semibold text-slate-900">
                    Rust Preventor
                  </p>
                  <ul className="space-y-1">
                    {rustPreventorLinks.map((item) => (
                      <li key={item} className="flex items-center gap-1.5">
                        <span className="h-[2px] w-3 rounded-full bg-slate-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <p className="mb-1 font-semibold text-slate-900">
                    Other Products
                  </p>
                  <ul className="space-y-1">
                    {otherProductLinks.map((item) => (
                      <li key={item} className="flex items-center gap-1.5">
                        <span className="h-[2px] w-3 rounded-full bg-slate-400" />
                        <span>{item}</span>
                      </li>
                    ))}
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
            </motion.div>

            {/* Contact block */}
            <motion.div
              whileHover={{ y: -2 }}
              className="rounded-2xl bg-white/95 border border-slate-200/80 px-5 py-5 shadow-sm"
            >
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-900">
                Contact Us
              </h4>
              <div className="space-y-1 text-xs text-slate-700">
                <p className="font-semibold text-slate-900">Trimurti (India)</p>
                <p>
                  7-A, Sardar Patel Marg,
                  <br />
                  Civil Lines, Prayagraj (Allahabad) – 211001
                  <br />
                  Uttar Pradesh, India
                </p>
                <p className="pt-1">
                  Phone: <span className="font-medium">+91-XXXXXXXXXX</span>
                </p>
                <p>
                  Email: <span className="font-medium">info@rustonil.com</span>
                </p>
              </div>

              <div className="mt-4 flex flex-col gap-2 text-[11px]">
                <p className="text-slate-500">
                  Business hours: Mon – Sat, 9:30 AM – 6:30 PM IST
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-3 py-2 font-semibold uppercase tracking-[0.16em] text-[10px] text-slate-800 hover:border-amber-500 hover:text-amber-700"
                >
                  Send an enquiry
                </Link>
              </div>
            </motion.div>
          </motion.aside>
        </div>
      </section>
    </div>
  );
}
