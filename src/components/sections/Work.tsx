'use client';

import * as React from 'react';
import { Reveal } from '@/components/sections/Reveal';

const projects = [
  {
    idx: '01',
    tag: 'Fintech — landing page',
    title: 'Landing page konversi untuk platform pinjaman',
    metric: '+32%',
    metricLabel: 'kenaikan konversi dalam 14 hari',
    // deterministic CSS-art gradients, no external images
    art: { from: '#23232a', via: '#101014', glow: 'rgba(211,255,0,0.45)' },
  },
  {
    idx: '02',
    tag: 'E-commerce — redesign',
    title: 'Redesign website rental alat olahraga',
    metric: '2×',
    metricLabel: 'peningkatan engagement pengguna',
    art: { from: '#2a2823', via: '#14120f', glow: 'rgba(211,255,0,0.3)' },
  },
  {
    idx: '03',
    tag: 'B2B SaaS — web app',
    title: 'Aplikasi dashboard dengan design system utuh',
    metric: '−80%',
    metricLabel: 'waktu admin, pasca migrasi alur baru',
    art: { from: '#1e2530', via: '#0f1218', glow: 'rgba(255,255,255,0.18)' },
  },
];

function Art({ p }: { p: (typeof projects)[number] }) {
  return (
    <div
      className="relative aspect-[16/11] w-full overflow-hidden"
      style={{ background: `radial-gradient(circle at 78% 18%, ${p.art.from} 0%, ${p.art.via} 75%)` }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div
        className="pointer-events-none absolute -right-14 -top-14 h-48 w-48 rounded-full blur-[70px]"
        style={{ background: p.art.glow, opacity: 0.5 }}
      />
      {/* mock ui skeleton */}
      <div className="absolute inset-x-6 top-6 rounded-xl border border-white/10 bg-black/30 p-4 backdrop-blur-sm md:inset-x-8 md:top-8 md:p-5">
        <div className="flex items-center justify-between">
          <div className="h-2 w-16 rounded-full bg-white/25" />
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full" style={{ background: 'var(--color-lime)' }} />
          </div>
        </div>
        <div className="mt-5 space-y-2.5">
          <div className="h-2.5 w-3/4 rounded-full bg-white/20" />
          <div className="h-2.5 w-1/2 rounded-full bg-white/10" />
        </div>
        <div className="mt-5 grid grid-cols-3 gap-2.5">
          {[0, 1, 2].map((k) => (
            <div key={k} className="rounded-lg bg-white/[0.06] p-3">
              <div className="h-2 w-8 rounded-full bg-white/25" />
              <div className="mt-2 h-2.5 w-10 rounded-full bg-white/10" />
            </div>
          ))}
        </div>
      </div>
      <span className="absolute bottom-5 right-6 text-[54px] font-light leading-none text-white/90 md:text-[72px]" style={{ fontFamily: 'var(--font-display)', letterSpacing: '-3px' }}>
        {p.idx}
      </span>
    </div>
  );
}

export function Work() {
  return (
    <section id="projects" className="bg-soft py-24 md:py-32">
      <div className="container-custom">
        <Reveal>
          <div className="ghost-head text-center md:text-left">
            <div className="ghost text-ink left-0 md:left-0" style={{ transform: 'none', textAlign: 'left', left: 0 }}>
              Karya
            </div>
            <h2 className="front text-headline text-ink">Pekerjaan terpilih.</h2>
          </div>
        </Reveal>

        <div className="mt-16 space-y-14 md:mt-24 md:space-y-24">
          {projects.map((p, i) => (
            <Reveal key={p.idx} delay={60}>
              <div className={`grid items-center gap-8 md:grid-cols-2 md:gap-16 ${i % 2 ? '' : ''}`}>
                <div className={`${i % 2 ? 'md:order-2' : ''}`}>
                  <div className="overflow-hidden rounded-card border border-ashen/70 bg-paper p-2 shadow-[0_1px_2px_rgba(27,27,27,0.04)]" style={{ borderRadius: 24 }}>
                    <Art p={p} />
                  </div>
                </div>
                <div className={i % 2 ? 'md:order-1' : ''}>
                  <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-mute">{p.tag}</p>
                  <h3 className="text-3xl mt-4 text-ink md:text-4xl">{p.title}</h3>
                  <div className="mt-6 flex items-baseline gap-3 border-t border-ashen pt-6">
                    <span className="text-[34px] font-light text-ink md:text-[44px]" style={{ fontFamily: 'var(--font-display)', letterSpacing: '-1.6px' }}>
                      {p.metric}
                    </span>
                    <span className="text-[14px] text-mute">{p.metricLabel}</span>
                  </div>
                  <a href="#pricing" className="group mt-7 inline-flex items-center gap-2 text-[15px] font-medium text-ink">
                    Studi kasus
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="arrow-anim">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
