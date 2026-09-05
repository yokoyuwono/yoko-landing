'use client';

import * as React from 'react';
import { Reveal } from '@/components/sections/Reveal';

const rows = [
  {
    label: 'Waktu & biaya rata-rata',
    them: '2–3 minggu · mulai Rp 25 juta',
    other: '3–6 bulan · Rp 300 juta+',
  },
  {
    label: 'Siapa yang mengerjakan',
    them: 'Langsung desainer senior',
    other: 'Sering di-outsource ke junior',
  },
  {
    label: 'Proses',
    them: 'Tanpa workshop berlarut — fokus hasil',
    other: 'Workshop & proses lawas yang mahal',
  },
  {
    label: 'Metrik utama',
    them: 'Konversi & revenue',
    other: 'Cantik di mockup, lemah di lapangan',
  },
];

const services = [
  { n: '01', title: 'Landing page konversi', desc: 'Struktur funnel, copywriting, dan CTA yang mengubah pengunjung menjadi leads — selesai dalam satu sprint.' },
  { n: '02', title: 'Redesign website & aplikasi', desc: 'Audit UX menyeluruh lalu eksekusi ulang desain yang meningkatkan retensi dan pendapatan.' },
  { n: '03', title: 'Design system & UI kit', desc: 'Fondasi visual yang konsisten dan scalable untuk produk Anda, siap dipakai tim engineering.' },
];

export function Services() {
  return (
    <section id="why" className="bg-ink py-28 md:py-48">
      <div className="container-custom">
        {/* Ghost headline */}
        <Reveal>
          <div className="ghost-head mx-auto text-center">
            <div className="ghost text-white">Layanan</div>
            <h2 className="front text-headline text-white">
              Saya menyelesaikan masalah yang{' '}
              <span className="text-white/90">agensi lain</span>{' '}
              <span className="text-lime">perjuangkan.</span>
            </h2>
          </div>
        </Reveal>

        {/* Comparison */}
        <Reveal delay={120}>
          <div className="mx-auto mt-24 max-w-[1040px] md:mt-36 overflow-hidden rounded-card border border-white/10 bg-white/[0.03]">
            <div className="grid grid-cols-[1.2fr_1fr_1fr] border-b border-white/10 text-[13px] uppercase tracking-[0.08em] md:grid-cols-[1.4fr_1fr_1fr]">
              <div className="px-6 py-5 text-white/50 md:px-10 md:py-6" />
              <div className="px-4 py-5 font-medium text-lime md:px-10 md:py-6">Bekerja dengan saya</div>
              <div className="px-4 py-5 text-white/50 md:px-10 md:py-6">Agensi umum</div>
            </div>
            {rows.map((r) => (
              <div
                key={r.label}
                className="grid grid-cols-[1.2fr_1fr_1fr] items-center border-b border-white/[0.07] last:border-0 md:grid-cols-[1.4fr_1fr_1fr]"
              >
                <div className="px-6 py-5 text-[14px] text-white/60 md:px-10 md:py-6 md:text-[16px]">{r.label}</div>
                <div className="px-4 py-5 text-[14px] text-white md:px-10 md:py-6 md:text-[16px]">{r.them}</div>
                <div className="px-4 py-5 text-[13px] text-white/40 md:px-10 md:py-6 md:text-[14px]">{r.other}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Service cards */}
        <div className="mt-24 grid gap-8 md:mt-36 md:grid-cols-3 md:gap-8">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={i * 90}>
              <div className="group h-full rounded-card border border-white/10 bg-white/[0.03] p-9 transition-colors duration-300 hover:border-lime/40 md:p-12">
                <p className="text-[13px] font-medium tracking-[0.2em] text-lime">{s.n}</p>
                <h3 className="text-3xl mt-6 text-white">{s.title}</h3>
                <p className="mt-4 text-[16px] font-light leading-relaxed text-[#8D8D8D]" style={{ fontWeight: 350 }}>
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
