'use client';

import { motion } from 'framer-motion';

const solutions = [
  {
    title: 'Anti-corrosion product specialists',
    description:
      'Trimurti (India) focuses on manufacturing rust removers, rust preventors, iron pipe antirust chemicals and derusting chemicals under the Rustonil brand.',
    points: [
      'Decades of experience in rust control',
      'Range of liquid and water-based products',
      'Trusted by industrial clients across India',
    ],
  },
  {
    title: 'Support for rust-affected industries',
    description:
      'Our formulations help plants, workshops and infrastructure sites recover components that would otherwise be scrapped due to heavy corrosion.',
    points: [
      'Industrial rust remover for tough deposits',
      'Surface rust remover for plates and profiles',
      'Machine engine rust remover for rotating equipment',
    ],
  },
  {
    title: 'Protection from factory to field',
    description:
      'Rustonil products are used from fabrication to storage and shipping, so parts stay rust-free until they reach their final installation.',
    points: [
      'Rust preventor and metallic pipe rust preventer',
      'Options for indoor and outdoor exposure',
      'Solutions for pipes, structures and machined parts',
    ],
  },
];

export function Solutions() {
  return (
    <motion.section
      className="py-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="page-container">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-amber-600">
              Why Rustonil
            </p>
            <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
              Complete rust removal and protection for industry
            </h2>
          </div>
          <p className="text-xs text-slate-500 max-w-md">
            From heavy equipment and fabrication shops to pipe yards and export
            packaging, Rustonil helps keep steel structures and components in a
            rust-free, ready-to-use condition.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {solutions.map((solution, index) => (
            <motion.article
              key={solution.title}
              className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <h3 className="text-sm font-semibold text-slate-900">
                {solution.title}
              </h3>
              <p className="mt-2 text-xs text-slate-600">
                {solution.description}
              </p>

              <ul className="mt-3 space-y-1 text-xs text-slate-500">
                {solution.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-amber-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
