import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const metadata: Metadata = {
  title:
    'Rustonil by Trimurti (India) – Rust Removers & Anti-Corrosion Solutions',
  description:
    'Rustonil, from Trimurti (India), manufactures industrial rust removers, rust preventors, derusting chemicals and anti-corrosion products for machines, pipes and fabricated components.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#FFF8EC] text-slate-900">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
