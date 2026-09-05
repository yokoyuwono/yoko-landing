'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ScrollReveal } from '@/components/animations';

const faqs = [
  {
    q: 'Berapa lama pengerjaan landing page?',
    a: 'Untuk landing page biasanya <strong>3–5 hari kerja</strong> setelah data lengkap. Untuk website company profile atau mini system sekitar <strong>2–3 minggu</strong>.',
  },
  {
    q: 'Bisa pakai domain & hosting sendiri?',
    a: 'Bisa banget. Saya akan bantu <strong>setup DNS dan instalasi</strong> di hosting pilihan Anda. Kalau belum punya, saya bisa berikan rekomendasi provider lokal terbaik.',
  },
  {
    q: 'Data apa saja yang perlu saya siapkan?',
    a: 'Cukup informasi dasar bisnis: <strong>produk/layanan, target pelanggan, dan tujuan utama</strong> (misal: lebih banyak chat WhatsApp atau penjualan online). Sisanya — struktur, copy, dan visual — saya bantu susunkan.',
  },
  {
    q: 'Bagaimana cara kerja sistem pembayaran / pemesanan?',
    a: 'Saya integrasikan <strong>gerbang pembayaran lokal</strong> seperti Midtrans/Xendit, lengkap dengan konfirmasi otomatis dan dashboard admin — cocok untuk sistem pemesanan, deposit, atau pendaftaran.',
  },
  {
    q: 'Apakah ada revisi?',
    a: 'Ya. Setiap paket termasuk revisi wajar (2–3 kali untuk paket audit/sprint, tak terbatas untuk retainer). Revisi mayor (ganti konsep total) di luar cakupan — akan didiskusikan dulu.',
  },
  {
    q: 'Bagaimana cara komunikasi selama proyek?',
    a: 'Via WhatsApp/Telegram untuk quick sync, dan Notion/Google Docs untuk dokumentasi. Saya update progress <strong>harian</strong> saat sprint, mingguan untuk retainer.',
  },
];

export function FAQ() {
  return (
    <section
      id="faq"
      className="py-22 md:py-28 lg:py-36 bg-surface"
      aria-labelledby="faq-title"
    >
      <div className="container-custom">
        <ScrollReveal variant="fade">
          <div className="max-w-2xl mx-auto text-center mb-16 md:mb-20">
            <span className="inline-block px-4 py-1.5 bg-brand-teal/10 text-brand-teal text-caption font-semibold rounded-full mb-6">
              FAQ
            </span>
            <h2 id="faq-title" className="text-display-lg font-semibold tracking-tight text-balance">
              Pertanyaan yang sering diajukan.
            </h2>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} variant="slide-up" delay={i * 0.05}>
              <details className="group border border-line rounded-card bg-surface-elevated overflow-hidden mb-4">
                <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-surface">
                  <span className="text-body font-medium text-text pr-8">
                    {faq.q}
                  </span>
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 45 }}
                    className="flex-shrink-0 h-5 w-5 text-brand-teal transition-transform duration-300"
                  >
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} className="h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
                    </svg>
                  </motion.div>
                </summary>
                <div className="px-6 pb-6 pt-0">
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-body text-text-muted leading-relaxed"
                  >
                    <div dangerouslySetInnerHTML={{ __html: faq.a }} />
                  </motion.div>
                </div>
              </details>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <ScrollReveal variant="fade">
            <p className="text-body-sm text-text-muted">
              Pertanyaan lain?{' '}
              <a href="mailto:hello@yoko.dev?subject=Pertanyaan" className="text-brand-teal hover:underline font-medium">
                Langsung tanya via email
              </a>
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}