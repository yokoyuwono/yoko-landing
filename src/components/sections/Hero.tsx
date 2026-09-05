'use client';

import * as React from 'react';
import { Reveal } from '@/components/sections/Reveal';

const features = [
  'Desain selesai dalam 2–3 minggu',
  'Metode peningkatan konversi teruji',
  'Dikerjakan langsung desainer senior',
];

export function Hero() {
  return (
    <section className="bg-ink pt-[170px] pb-24 md:pt-[210px] md:pb-36">
      <div className="hero-inner container-custom">
        <div className="flex flex-col items-center md:flex-row md:items-start md:gap-[90px]">
          {/* Left content */}
          <div className="flex w-full flex-col items-center text-center md:max-w-[600px] md:items-start md:text-left">
            <Reveal>
              <span className="badge">Desain produk & pengembangan — sejak 2019</span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="text-display mt-10 text-white md:mt-12">
                Saya menaikkan konversi{' '}
                <span className="text-white/90">website</span> &{' '}
                <span className="text-white/90">aplikasi</span> Anda.{' '}
                <span className="text-lime">Penjualan tumbuh.</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <a
                href="mailto:hello@yoko.dev?subject=Konsultasi%2015%20Menit"
                className="cta-btn mt-10 w-full max-w-[380px] md:mt-12 md:max-w-[410px]"
                style={{ height: 60 }}
              >
                <span className="relative ml-3 mr-4 shrink-0">
                  <span className="avatar-init">Y</span>
                  <span className="pulse-dot absolute -right-[3px] -top-[2px]" />
                </span>
                <span className="flex-1 truncate text-left text-[16px] leading-tight">
                  Book 15 menit call<br />dengan Yoko
                </span>
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-3 shrink-0 arrow-anim">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-12 hidden flex-col gap-4 md:mt-16 md:flex">
                {features.map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <span className="check-circle">
                      <svg viewBox="0 0 24 24" fill="none" stroke="#1B1B1B" strokeWidth="3.2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-[16px] text-[#D4D4D4]">{f}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right showcase */}
          <div className="mt-16 w-full max-w-[520px] md:mt-0 md:shrink-0">
            <Reveal delay={150}>
              <Showcase />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Showcase() {
  const slides = [
    { tag: 'Landing page — fintech', metric: '+32%', metricLabel: 'konversi', hue: 'rgba(211,255,0,0.5)' },
    { tag: 'Redesign aplikasi — healthtech', metric: '2×', metricLabel: 'prospek', hue: 'rgba(211,255,0,0.35)' },
  ];
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 4200);
    return () => clearInterval(t);
  }, [slides.length]);

  const s = slides[i];
  return (
    <div
      className="relative aspect-square w-full overflow-hidden"
      style={{
        borderRadius: 32,
        background: 'radial-gradient(circle at 70% 20%, #2c2c30 0%, #101010 70%)',
      }}
    >
      {/* grid lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />
      {/* lime glow */}
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full blur-[90px] transition-opacity duration-700"
        style={{ background: s.hue, opacity: 0.5 }}
      />

      {/* floating metric */}
      <div
        className="absolute left-6 top-6 flex items-center gap-3 bg-white/95 px-4 py-3"
        style={{ borderRadius: 14, boxShadow: '0 12px 30px -10px rgba(0,0,0,0.5)' }}
      >
        <span className="text-[26px] font-semibold tracking-tight text-ink" style={{ fontFamily: 'var(--font-display)', letterSpacing: '-1px' }}>
          {s.metric}
        </span>
        <span className="text-[12px] leading-tight text-mute">{s.metricLabel}<br />hanya 14 hari</span>
      </div>

      {/* typographic case tile */}
      <div className="absolute bottom-6 left-6 right-6">
        <div className="border border-white/10 bg-black/40 px-5 py-4 backdrop-blur" style={{ borderRadius: 16 }}>
          <p className="text-[11px] uppercase tracking-[0.14em] text-lime">{s.tag}</p>
          <p className="mt-1 text-[19px] text-white" style={{ fontFamily: 'var(--font-display)', fontWeight: 300, letterSpacing: '-0.4px' }}>
            Kasus nyata dari klien terakhir
          </p>
        </div>
      </div>

      {/* slide dots */}
      <div className="absolute right-6 top-6 flex gap-1.5">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className="h-1.5 transition-all"
            style={{
              width: idx === i ? 22 : 8,
              borderRadius: 99,
              background: idx === i ? '#D3FF00' : 'rgba(255,255,255,0.35)',
            }}
          />
        ))}
      </div>
    </div>
  );
}
