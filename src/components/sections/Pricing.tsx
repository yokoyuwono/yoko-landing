'use client';

import * as React from 'react';
import { Reveal } from '@/components/sections/Reveal';

const plans = [
  {
    name: 'Audit Express',
    price: 'Mulai Rp 2,5 jt',
    per: '1–3 hari · async / 1 jam video call',
    desc: 'Audit cepat UI/UX & konversi produk Anda yang sudah berjalan, dengan rekomendasi prioritas.',
    features: [
      'Analisis UI, UX & copywriting',
      'Rekomendasi optimasi konversi',
      'Laporan + rekaman video',
      'Sesi tanya jawab 30 menit',
    ],
    cta: 'Pesan audit',
    highlight: false,
  },
  {
    name: 'Design Sprint',
    price: 'Mulai Rp 25 jt',
    per: '2 minggu · 20–30 layar',
    desc: 'Satu sprint cukup untuk landing page standar atau alur utama aplikasi mobile.',
    features: [
      'Dikerjakan langsung desainer senior',
      'Desain modern sesuai kebutuhan Anda',
      'Panduan konversi & copywriting',
      '2 ronde revisi wajar',
      'Coding landing page opsional',
    ],
    cta: 'Book sprint',
    highlight: true,
  },
  {
    name: 'Retainer',
    price: 'Mulai Rp 15 jt/bln',
    per: 'Kolaborasi bulanan',
    desc: 'Kemitraan desain berkelanjutan — kuota jam bulanan dengan prioritas antrean.',
    features: [
      '10 jam kerja desain per bulan',
      'Prioritas pengerjaan',
      'Dukungan tim engineering Anda',
      'Bisa pause kapan saja',
    ],
    cta: 'Mulai retainer',
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-paper py-28 md:py-48">
      <div className="container-custom">
        <Reveal>
          <div className="ghost-head text-center">
            <div className="ghost text-ink">Harga</div>
            <h2 className="front text-headline text-ink">Harga. Paket fleksibel.</h2>
          </div>
        </Reveal>

        <div className="mt-24 grid gap-8 md:mt-36 md:grid-cols-3 md:gap-8">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 90}>
              <div
                className={`flex h-full flex-col rounded-card border p-9 md:p-12 ${
                  p.highlight ? 'border-ink bg-ink text-white' : 'border-ashen bg-soft text-ink'
                }`}
              >
                {p.highlight && (
                  <span className="mb-8 inline-flex w-fit items-center rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-ink" style={{ background: 'var(--color-lime)' }}>
                    Paling populer
                  </span>
                )}
                <h3 className="text-3xl">{p.name}</h3>
                <p className={`mt-6 text-[28px] leading-none md:mt-7 md:text-[32px] ${p.highlight ? 'text-lime' : 'text-ink'}`} style={{ fontFamily: 'var(--font-display)', fontWeight: 300, letterSpacing: '-0.8px' }}>
                  {p.price}
                </p>
                <p className={`mt-3 text-[13px] ${p.highlight ? 'text-white/50' : 'text-mute'}`}>{p.per}</p>

                <p className={`mt-7 text-[16px] leading-relaxed ${p.highlight ? 'text-white/70' : 'text-mute'}`} style={{ fontWeight: 350 }}>
                  {p.desc}
                </p>

                <ul className="mt-8 flex-1 space-y-3 border-t pt-7" style={{ borderColor: p.highlight ? 'rgba(255,255,255,0.14)' : 'var(--color-ashen)' }}>
                  {p.features.map((f) => (
                    <li key={f} className={`flex items-start gap-2.5 text-[14px] ${p.highlight ? 'text-white/80' : 'text-ink-2'}`} style={{ fontWeight: 350 }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="mt-0.5 shrink-0" style={{ color: 'var(--color-lime)' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="mailto:hello@yoko.dev?subject=Paket"
                  className={`mt-10 inline-flex h-[56px] items-center justify-center gap-2 rounded-btn text-[15px] transition-transform duration-300 hover:scale-[1.02] ${
                    p.highlight ? 'text-ink' : 'text-paper'
                  }`}
                  style={{ background: p.highlight ? 'var(--color-lime)' : 'var(--color-ink)' }}
                >
                  {p.cta}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="arrow-anim">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-16 text-center text-[14px] text-mute">
            Ada pertanyaan soal paket?{' '}
            <a href="mailto:hello@yoko.dev" className="text-ink underline underline-offset-4 hover:text-lime" style={{ textUnderlineOffset: '3px' }}>
              hello@yoko.dev
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
