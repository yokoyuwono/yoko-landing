'use client';

import * as React from 'react';
import { Reveal } from '@/components/sections/Reveal';

const items = [
  {
    quote:
      'Hasil akhirnya luar biasa. Setelah peluncuran ulang, angka konversi di website kami melonjak dan tim selalu responsif setiap kami minta perubahan.',
    role: 'CEO — Startup E-commerce',
    tag: 'Redesign landing page',
  },
  {
    quote:
      'Pengalaman yang tidak bisa ditandingi. Kualitas desain dan wawasan konversinya tajam — semua dikerjakan tepat waktu, tanpa drama.',
    role: 'Head of Marketing — Fintech',
    tag: 'Sprint desain 2 minggu',
  },
  {
    quote:
      'Tim memahami bisnis kami, bukan sekadar menggambar. Hasilnya, pertanyaan masuk dari pasar internasional meningkat dua kali lipat.',
    role: 'Founder — SaaS B2B',
    tag: 'Website & aplikasi',
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-soft pb-24 pt-20 text-ink md:pb-32 md:pt-28">
      <div className="container-custom">
        <Reveal>
          <div className="ghost-head mx-auto text-center">
            <div className="ghost text-ink">Testimoni</div>
            <h2 className="front text-headline text-ink">Orang menyukai hasil kerja saya.</h2>
          </div>
        </Reveal>

        <div className="mt-20 grid gap-6 md:grid-cols-3 md:gap-8">
          {items.map((t, i) => (
            <Reveal key={t.role} delay={i * 90}>
              <div className="flex h-full flex-col rounded-card bg-paper p-8" style={{ boxShadow: '0 1px 2px rgba(27,27,27,0.06)' }}>
                <span className="mb-5 inline-flex w-fit items-center rounded-full bg-soft px-3 py-1 text-[12px] font-medium text-mute">
                  {t.tag}
                </span>
                <p className="text-[17px] font-light leading-[1.55] text-ink-2" style={{ fontWeight: 350 }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-7 border-t border-ashen/70 pt-5">
                  <p className="text-[15px] font-medium text-ink">{t.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
