'use client';

import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const links = [
  { href: '#testimonials', label: 'Testimoni' },
  { href: '#why', label: 'Mengapa Saya' },
  { href: '#projects', label: 'Proyek' },
  { href: '#pricing', label: 'Harga' },
  { href: '#faq', label: 'FAQ' },
];

export function Navigation() {
  const [hidden, setHidden] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const lastY = React.useRef(0);

  React.useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y > lastY.current && y > 70) setHidden(true);
      else if (y < lastY.current) setHidden(false);
      lastY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 bg-paper transition-transform duration-300',
        hidden && !open && 'nav-hide'
      )}
      style={{ boxShadow: '0 1px 0 rgba(27,27,27,0.06)' }}
    >
      <div className="mx-auto flex h-[72px] w-full max-w-[1400px] items-center justify-between px-5 md:px-[25px]">
        <Link href="/" className="font-display text-[21px] tracking-tight text-ink" style={{ fontWeight: 500, letterSpacing: '-0.6px' }}>
          Yoko Dev
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navigasi utama">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
          ))}
          <a
            href="mailto:hello@yoko.dev?subject=Konsultasi%2015%20Menit"
            className="inline-flex items-center gap-2 rounded-btn bg-ink px-5 text-[15px] text-paper transition-transform duration-300 hover:scale-[1.03]"
            style={{ height: 44 }}
          >
            Book a call
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="arrow-anim">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </nav>

        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={open}
        >
          <span className={cn('h-[2px] w-5 bg-ink transition-transform', open && 'translate-y-[7px] rotate-45')} />
          <span className={cn('h-[2px] w-5 bg-ink transition-opacity', open && 'opacity-0')} />
          <span className={cn('h-[2px] w-5 bg-ink transition-transform', open && '-translate-y-[7px] -rotate-45')} />
        </button>
      </div>

      {open && (
        <nav className="border-t border-ashen/60 bg-paper px-5 pb-6 pt-2 md:hidden" aria-label="Navigasi mobile">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-ashen/40 py-3 text-[17px] text-ink"
            >
              {l.label}
            </a>
          ))}
          <a
            href="mailto:hello@yoko.dev?subject=Konsultasi%2015%20Menit"
            className="mt-5 inline-flex h-12 items-center justify-center rounded-btn bg-ink px-6 text-[15px] text-paper"
          >
            Book a call →
          </a>
        </nav>
      )}
    </header>
  );
}
