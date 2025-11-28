'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { cn } from '../lib/util';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/services', label: 'Services' },
  { href: '/resources', label: 'Resources' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [scrolled, setScrolled] = useState(!isHome); // non-home pages start as "scrolled" (solid)

  useEffect(() => {
    // If NOT home page: always solid navbar, no scroll listener
    if (!isHome) {
      setScrolled(true);
      return;
    }

    const handleScroll = () => {
      const heroThreshold = window.innerHeight * 0.65;
      setScrolled(window.scrollY > heroThreshold);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  const onHero = isHome && !scrolled;

  const linkBase = onHero
    ? 'text-slate-100/90 hover:text-white'
    : 'text-slate-700 hover:text-slate-900';

  const logoTitle = onHero ? 'text-white/70' : 'text-slate-900';
  const logoSubtitle = onHero ? 'text-slate-200/90' : 'text-slate-500';

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        onHero
          ? 'bg-transparent border-b border-transparent'
          : 'bg-white/70 backdrop-blur border-b border-slate-200 shadow-sm'
      )}
    >
      <nav className="page-container flex h-16 items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-sm transition-transform group-hover:scale-110">
            <span className="text-[11px] font-bold text-slate-900">RT</span>
          </div>
          <div className="leading-tight">
            <p
              className={cn(
                'text-sm font-semibold uppercase tracking-wide',
                logoTitle
              )}
            >
              Rustonil
            </p>
            <p className={cn('text-[11px]', logoSubtitle)}>
              By Trimurti (India)
            </p>
          </div>
        </Link>

        {/* Links */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn('group relative text-sm transition', linkBase)}
              >
                <span className={cn(active && 'font-semibold')}>
                  {link.label}
                </span>
                <span
                  className={cn(
                    'pointer-events-none absolute -bottom-1 left-0 h-[2px] w-0 bg-amber-400/90 transition-all duration-300',
                    active && 'w-full',
                    'group-hover:w-full'
                  )}
                />
              </Link>
            );
          })}
        </div>

        {/* CTA button */}
        <Link
          href="/products"
          className={cn(
            'rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition',
            onHero
              ? 'border border-white/80 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20'
              : 'bg-slate-900 text-white shadow-sm hover:bg-slate-800'
          )}
        >
          Explore Products
        </Link>
      </nav>
    </header>
  );
}
