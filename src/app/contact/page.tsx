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

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FFF9F0] pt-24 pb-24">
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-6 grid gap-12 lg:gap-16 lg:grid-cols-[minmax(0,1.9fr)_minmax(0,1.1fr)]">
        {/* LEFT – FORM SIDE */}
        <div className="space-y-10">
          {/* Header */}
          <motion.header
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            <p className="inline-block text-xs uppercase tracking-[0.25em] text-amber-600 font-semibold">
              Contact &amp; Enquiry
            </p>
            <h1 className="text-3xl sm:text-[2.2rem] leading-snug font-semibold text-slate-900">
              Tell us about your rust or corrosion challenge.
            </h1>
            <p className="max-w-3xl text-sm sm:text-base text-slate-600 leading-relaxed">
              Share a few details about your components, current rust condition
              and application. Our team will recommend a suitable Rustonil
              solution and next steps for your workshop or plant.
            </p>
          </motion.header>

          {/* FORM CARD */}
          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-[32px] bg-white/95 border border-slate-200/80 px-6 py-7 sm:px-10 sm:py-9 shadow-sm"
          >
            <form className="space-y-7">
              {/* Contact details */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                    Full name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50/80 px-3.5 py-2.5 text-sm text-slate-900 outline-none focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-100 transition"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                    Company / Organisation
                  </label>
                  <input
                    type="text"
                    placeholder="Workshop, plant, organisation"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50/80 px-3.5 py-2.5 text-sm text-slate-900 outline-none focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-100 transition"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50/80 px-3.5 py-2.5 text-sm text-slate-900 outline-none focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-100 transition"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                    Phone / Mobile
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 -"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50/80 px-3.5 py-2.5 text-sm text-slate-900 outline-none focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-100 transition"
                  />
                </div>
              </div>

              {/* Region / product interest */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                    Country / Region
                  </label>
                  <input
                    type="text"
                    placeholder="India, Middle East, etc."
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50/80 px-3.5 py-2.5 text-sm text-slate-900 outline-none focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-100 transition"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                    Product interest
                  </label>
                  <select
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50/80 px-3.5 py-2.5 text-sm text-slate-900 outline-none focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-100 transition"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a category
                    </option>
                    <option>Rust remover range</option>
                    <option>Rust preventor / protective oils</option>
                    <option>Derusting chemicals</option>
                    <option>Complete process design</option>
                    <option>General enquiry</option>
                  </select>
                </div>
              </div>

              {/* Application details */}
              <div className="space-y-2">
                <label className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                  Component / application details *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Example: engine blocks with heavy rust, machine frames stored outdoors, fabricated structures, etc. Mention metal type if known and current cleaning method."
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50/80 px-3.5 py-3 text-sm text-slate-900 outline-none focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-100 transition resize-none"
                />
              </div>

              {/* Small hint block */}
              <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50/60 px-4 py-3.5 text-xs text-slate-600 leading-relaxed">
                You can share photos of rusted components and more detailed
                drawings when you reply to our email, or attach them in your
                formal enquiry. Clear photos help us respond faster and more
                accurately.
              </div>

              {/* Preferred contact + urgency */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                    Preferred contact method
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs text-slate-700">
                    {['Email', 'Phone', 'WhatsApp', 'Either'].map((label) => (
                      <button
                        key={label}
                        type="button"
                        className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] hover:border-amber-500 hover:text-amber-700 transition"
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                    When do you need a response?
                  </p>
                  <select
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50/80 px-3.5 py-2.5 text-sm text-slate-900 outline-none focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-100 transition"
                    defaultValue="normal"
                  >
                    <option value="normal">Within 1–2 working days</option>
                    <option value="urgent">Urgent – within 24 hours</option>
                    <option value="planning">
                      Just planning / collecting info
                    </option>
                  </select>
                </div>
              </div>

              {/* Consent + submit */}
              <div className="space-y-4 pt-2">
                <label className="flex items-start gap-2 text-[11px] text-slate-600 leading-relaxed">
                  <input
                    type="checkbox"
                    className="mt-0.5 h-4 w-4 rounded border-slate-300 text-amber-500 focus:ring-amber-400"
                  />
                  <span>
                    I agree that the details shared here may be used by Trimurti
                    (India) to contact me about Rustonil products and related
                    technical support.
                  </span>
                </label>

                <div className="flex flex-wrap items-center gap-4">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-white shadow-lg transition hover:bg-slate-800 hover:-translate-y-[2px] hover:shadow-xl"
                  >
                    Submit enquiry
                  </button>
                  <p className="text-[11px] text-slate-500">
                    We usually respond within one working day for detailed
                    enquiries.
                  </p>
                </div>
              </div>
            </form>
          </motion.section>
        </div>

        {/* RIGHT – INFO SIDE */}
        <motion.aside
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-7 lg:space-y-8 lg:sticky lg:top-28 self-start"
        >
          {/* Office info */}
          <div className="rounded-3xl bg-white/95 border border-slate-200/80 px-6 py-6 shadow-sm space-y-4">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-900">
              Office &amp; address
            </h2>
            <div className="space-y-2 text-xs text-slate-700 leading-relaxed">
              <p className="text-sm font-semibold text-slate-900">
                Trimurti (India)
              </p>
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
              <p className="text-slate-500 pt-1">
                Mon – Sat, 9:30 AM – 6:30 PM IST
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div className="rounded-3xl bg-slate-50/90 border border-slate-200/80 px-6 py-6 shadow-sm space-y-4">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-900">
              Quick links
            </h2>
            <div className="space-y-3 text-xs text-slate-700">
              <Link
                href="/products"
                className="block rounded-2xl border border-slate-200 bg-white px-4 py-3 hover:border-amber-500 hover:text-amber-700 transition"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em]">
                  View Rustonil products
                </p>
                <p className="mt-1 text-[11px] text-slate-600">
                  Explore rust removers, preventors and derusting chemicals.
                </p>
              </Link>

              <Link
                href="/services"
                className="block rounded-2xl border border-slate-200 bg-white px-4 py-3 hover:border-amber-500 hover:text-amber-700 transition"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em]">
                  Industrial services
                </p>
                <p className="mt-1 text-[11px] text-slate-600">
                  Learn how we support plants and workshops on process design.
                </p>
              </Link>

              <Link
                href="/resources"
                className="block rounded-2xl border border-slate-200 bg-white px-4 py-3 hover:border-amber-500 hover:text-amber-700 transition"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em]">
                  Technology &amp; resources
                </p>
                <p className="mt-1 text-[11px] text-slate-600">
                  Read more about Rustonil chemistry, performance and safety.
                </p>
              </Link>
            </div>
          </div>

          {/* Helpful tips */}
          <div className="rounded-3xl bg-slate-900 text-slate-100 px-6 py-5 shadow-lg space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
              Helpful before you contact
            </h2>
            <ul className="text-[11px] space-y-2 text-slate-200/90 leading-relaxed">
              <li>
                • Mention the <span className="font-semibold">metal type</span>{' '}
                (mild steel, cast iron, etc.) and approximate size.
              </li>
              <li>
                • Specify if parts are{' '}
                <span className="font-semibold">painted after treatment</span>{' '}
                or only cleaned and stored.
              </li>
              <li>
                • A rough idea of{' '}
                <span className="font-semibold">quantity per day</span> helps us
                recommend the right process scale.
              </li>
            </ul>
          </div>
        </motion.aside>
      </section>
    </main>
  );
}
