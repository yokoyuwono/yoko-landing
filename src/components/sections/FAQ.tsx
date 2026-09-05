'use client';

import * as React from 'react';
import { Reveal } from '@/components/sections/Reveal';

const faqs = [
  {
    q: 'Data apa saja yang perlu saya siapkan?',
    a: 'Cukup informasi dasar bisnis: produk/layanan, target pelanggan, dan tujuan utama — misal lebih banyak chat WhatsApp atau penjualan online. Sisanya (struktur, copy, visual) saya bantu susunkan.',
  },
  {
    q: 'Berapa lama satu proyek selesai?',
    a: 'Landing page standar selesai dalam 2–3 minggu (satu sprint). Proyek lebih besar seperti aplikasi penuh dipecah menjadi beberapa sprint agar tetap cepat dan terukur.',
  },
  {
    q: 'Apakah ada revisi?',
    a: 'Ya. Setiap sprint mencakup 2 ronde revisi wajar. Revisi mayor (ganti konsep total) di luar cakupan — akan kita diskusikan dan dihitung terpisah.',
  },
  {
    q: 'Bagaimana cara membayar?',
    a: 'Transfer bank (IDR) dalam 2 termin — 60% di muka, 40% saat desain diserahkan. Invoice resmi diterbitkan untuk perusahaan.',
  },
  {
    q: 'Bagaimana komunikasi selama proyek?',
    a: 'Via WhatsApp/Telegram untuk sync cepat, dan Notion/Google Docs untuk dokumentasi. Saya update progress harian saat sprint.',
  },
];

export function FAQ() {
  const [open, setOpen] = React.useState(0);
  return (
    <section id="faq" className="bg-paper pb-24 pt-2 md:pb-32" style={{ paddingTop: 64 }}>
      <div className="container-custom">
        <Reveal>
          <div className="ghost-head text-center">
            <div className="ghost text-ink">FAQ</div>
            <h2 className="front text-headline text-ink">Informasi lebih lanjut.</h2>
          </div>
        </Reveal>

        <div className="mx-auto mt-16 max-w-[860px] md:mt-20">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 40}>
                <div className="border-b border-ashen first:border-t">
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left md:py-6"
                  >
                    <span className="text-[17px] font-normal text-ink md:text-[19px]" style={{ fontWeight: 350, letterSpacing: '-0.3px' }}>
                      {f.q}
                    </span>
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ashen transition-colors"
                      style={{ background: isOpen ? 'var(--color-lime)' : 'transparent', borderColor: isOpen ? 'var(--color-lime)' : undefined }}
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-ink transition-transform duration-300" style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0)' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className="grid transition-[grid-template-rows] duration-300 ease-out"
                    style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-[700px] pb-6 text-[15px] leading-[1.6] text-mute" style={{ fontWeight: 350 }}>
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
