import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-20 bg-slate-950 text-slate-200">
      {/* Top grid */}
      <div className="page-container py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* BRAND COLUMN */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-400 text-xs font-bold text-slate-950">
                RT
              </div>
              <div>
                <p className="text-sm font-semibold tracking-wide text-white">
                  RUSTONIL
                </p>
                <p className="text-[11px] text-slate-400">
                  By Trimurti (India)
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-slate-300">
              Rustonil is the rust control range from Trimurti (India), offering
              industrial rust removers, rust preventor oils and derusting
              chemicals for machines, pipes and fabricated components.
            </p>

            <p className="text-[11px] text-slate-400">
              Trusted anti-corrosion solutions for workshops and industries
              across India.
            </p>
          </div>

          {/* PRODUCTS COLUMN */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-100">
              Products
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>Industrial Rust Remover</li>
              <li>Surface Rust Remover</li>
              <li>Machine Engine Rust Remover</li>
              <li>Metallic Pipe Rust Preventer</li>
              <li>Rust Prevention Chemical</li>
              <li>Derusting Chemicals</li>
            </ul>
          </div>

          {/* COMPANY COLUMN */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-100">
              Company
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/company-profile" className="hover:text-white">
                  Company Profile
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Industrial Services
                </Link>
              </li>
              <li>
                <Link href="/technology" className="hover:text-white">
                  Our Technology
                </Link>
              </li>
              <li>
                <Link href="/achievers" className="hover:text-white">
                  Achievers &amp; Clients
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact &amp; Enquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT COLUMN */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-100">
              Contact
            </h3>
            <div className="space-y-2 text-sm text-slate-300">
              <p className="font-semibold text-white">Trimurti (India)</p>
              <p className="text-slate-300">
                7-A, Sardar Patel Marg, <br />
                Civil Lines, Prayagraj – 211001 <br />
                Uttar Pradesh, India
              </p>

              <p>
                Phone:{' '}
                <span className="font-medium text-slate-100">
                  +91-XXXXXXXXXX
                </span>
              </p>
              <p>
                Email:{' '}
                <span className="font-medium text-slate-100">
                  info@rustonil.com
                </span>
              </p>

              <p className="text-[11px] text-slate-400">
                Mon – Sat, 9:30 AM – 6:30 PM IST
              </p>
              <p className="text-[11px] text-slate-400">
                For export or bulk enquiries, use our contact form.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800 bg-slate-950/95">
        <div className="page-container flex flex-col gap-3 py-4 text-[11px] text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Trimurti (India). All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/privacy" className="hover:text-slate-100">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-100">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
