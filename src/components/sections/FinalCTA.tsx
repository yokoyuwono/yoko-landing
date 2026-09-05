'use client';

import * as React from 'react';
import { Reveal } from '@/components/sections/Reveal';

/** Recurring dark-radial CTA band (Squareblack's .enhance) — margin-top 48px rhythm. */
export function FinalCTA() {
  return (
    <section className="container-custom" style={{ marginTop: 48 }}>
      <Reveal>
        <div
          className="relative mx-auto flex w-full flex-col items-center overflow-hidden px-5 py-12 text-center md:px-8 md:py-16"
          style={{
            borderRadius: 'var(--radius-card)',
            paddingTop: 46,
            paddingBottom: 30,
            background: 'radial-gradient(circle at 50% 50%, #2a2a2e 0%, #101010 78%)',
          }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
              backgroundSize: '44px 44px',
            }}
          />
          <span className="badge relative">Klien kami</span>
          <h2
            className="text-headline relative mt-6 text-white"
            style={{ fontSize: 'clamp(30px, 4.6vw, 48px)', letterSpacing: '-1.4px', lineHeight: 1.06 }}
          >
            Dengan metode yang teruji, produk Anda bisa menutup lebih banyak klien, mendorong pembelian &amp; engagement.
          </h2>
          <div className="relative mt-8 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="mailto:hello@yoko.dev?subject=Konsultasi%2015%20Menit"
              className="inline-flex h-[58px] items-center justify-center gap-2 rounded-btn px-8 text-[16px] text-ink transition-transform duration-300 hover:scale-[1.03]"
              style={{ background: 'var(--color-lime)' }}
            >
              Book call dengan Yoko
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="arrow-anim">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <span className="text-[14px] text-[#8D8D8D]">atau tulis ke hello@yoko.dev</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
