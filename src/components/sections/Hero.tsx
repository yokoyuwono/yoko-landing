'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { ScrollReveal, StaggerContainer, StaggerItem, heroVariants, counterVariants, useParallax } from '@/components/animations';

const stats = [
  { label: '+32% Leads', value: '+32%', context: 'dalam 14 hari setelah peluncuran' },
  { label: '2× Prospek', value: '2×', context: 'pertanyaan masuk dari pasar Eropa' },
  { label: '−80% Admin', value: '−80%', context: 'pengurangan beban kerja' },
  { label: '3–5 Hari', value: '3–5', context: 'pengerjaan landing page' },
];

export function Hero() {
  const parallaxRef = useParallax(0.3);

  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--color-line) 1px, transparent 1px),
            linear-gradient(to bottom, var(--color-line) 1px, transparent 1px)
          `,
          backgroundSize: '56px 56px',
        }}
        aria-hidden="true"
      />

      {/* Parallax glow */}
      <motion.div
        ref={parallaxRef}
        className="absolute -top-56 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(closest-side, rgba(45, 212, 191, 0.18), transparent)',
        }}
        aria-hidden="true"
      />

      <div className="container-custom relative py-20 md:py-28 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <ScrollReveal variant="fade" delay={0.1}>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-surface-elevated border border-line rounded-full text-caption font-medium text-text-muted">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inset-0 h-1.5 w-1.5 rounded-full bg-brand-teal animate-ping opacity-75" />
                  <span className="relative h-1.5 w-1.5 rounded-full bg-brand-teal" />
                </span>
                Desainer produk & pengembang — <span className="font-semibold text-text">siap membantu</span>
              </span>
            </ScrollReveal>

            <StaggerContainer delay={0.2} stagger={0.12}>
              <motion.h1
                id="hero-title"
                className="text-display-xl text-text font-semibold tracking-tight text-balance"
                variants={heroVariants}
              >
                Website & aplikasi{' '}
                <span className="text-brand-teal relative">
                  konversi tinggi
                  <span className="absolute bottom-0 left-0 right-0 h-1.5 bg-brand-teal/30 -skew-y-3" aria-hidden="true" />
                </span>{' '}
                dirancang untuk bisnis Anda.
              </motion.h1>

              <motion.p
                className="mt-6 text-body-lg text-text-muted max-w-xl"
                variants={heroVariants}
              >
                Saya membantu startup hingga perusahaan membangun landing page, web profil, dan aplikasi yang tidak hanya indah — tetapi terbukti mendatangkan leads dan penjualan.
              </motion.p>

              <motion.div
                className="mt-8 flex flex-wrap items-center gap-4"
                variants={heroVariants}
              >
                <Button
                  asChild
                  size="lg"
                  className="group"
                >
                  <Link href="mailto:hello@yoko.dev?subject=Konsultasi%2015%20Menit">
                    Pesan Konsultasi 15 Menit
                    <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.4}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </Link>
                </Button>
                <Button variant="secondary" size="lg" asChild>
                  <Link href="#karya">Lihat Karya</Link>
                </Button>
              </motion.div>

              <motion.div
                className="mt-10 flex flex-wrap gap-6 hidden sm:flex"
                variants={heroVariants}
              >
                {[
                  { icon: '✓', text: 'Pengiriman 3–5 hari kerja' },
                  { icon: '✓', text: 'Metode teruji konversi' },
                  { icon: '✓', text: 'Dikerjakan langsung senior' },
                ].map((item, i) => (
                  <motion.div
                    key={item.text}
                    variants={heroVariants}
                    custom={i}
                    className="flex items-center gap-2 text-body-sm text-text-muted"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-teal/10 text-brand-teal text-xs font-bold">
                      {item.icon}
                    </span>
                    <span>{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </StaggerContainer>
          </div>

          {/* Visual - Browser mockup with stats */}
          <div className="relative">
            <ScrollReveal variant="slide-right" delay={0.3}>
              <div className="relative">
                {/* Floating stat card */}
                <motion.div
                  className="absolute -left-6 bottom-0 sm:-left-10 sm:bottom-4"
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="bg-surface-elevated2 border border-line/50 rounded-card p-4 sm:p-5 shadow-card-hover flex items-center gap-3 sm:gap-4">
                    <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-lg bg-brand-teal/15 text-brand-teal">
                      <svg className="h-6 w-6 sm:h-7 sm:w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.4}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-display-md font-semibold text-brand-teal tracking-tight">+32%</p>
                      <p className="text-caption text-text-muted">Leads dalam 14 hari</p>
                    </div>
                  </div>
                </motion.div>

                {/* Browser mockup */}
                <div className="bg-surface-elevated border border-line rounded-xl overflow-hidden shadow-[0_40px_90px_-30px_rgba(0,0,0,0.8)]">
                  <div className="flex items-center gap-2 border-b border-line bg-surface-elevated2 px-4 py-3">
                    <div className="flex gap-1.5">
                      <span className="h-3 w-3 rounded-full bg-red-500" />
                      <span className="h-3 w-3 rounded-full bg-yellow-500" />
                      <span className="h-3 w-3 rounded-full bg-green-500" />
                    </div>
                    <div className="flex-1 ml-3 bg-surface border border-line rounded px-3 py-1 text-caption text-text-dim">
                      yokodev.id / proyek-anda
                    </div>
                  </div>

                  <div className="p-6 sm:p-8">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 border border-line/50 rounded-full text-caption font-medium text-brand-teal bg-brand-teal/10 mb-5">
                      Landing Page — Hasil Nyata
                    </span>
                    <h3 className="text-display-md font-semibold tracking-tight mb-4">
                      Bisnis Anda layak tampil{' '}
                      <span className="text-brand-teal">sebaik kualitasnya.</span>
                    </h3>
                    <p className="text-body-sm text-text-muted mb-7 max-w-xs">
                      Desain yang menjawab kebutuhan pengunjung, alur yang jelas menuju pembelian, dan copy yang berbicara kepada calon pelanggan Anda.
                    </p>
                    <Button variant="primary" size="sm" className="mb-7">
                      Mulai Sekarang →
                    </Button>

                    <div className="grid grid-cols-3 gap-3">
                      {stats.slice(0, 3).map((stat, i) => (
                        <motion.div
                          key={stat.label}
                          className="bg-surface border border-line rounded-lg p-4"
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: '-50px' }}
                          initial={{ opacity: 0, y: 20 }}
                          transition={{ delay: i * 0.1, duration: 0.5 }}
                        >
                          <p className="text-display-md font-semibold text-brand-teal tracking-tight">{stat.value}</p>
                          <p className="text-caption text-text-dim uppercase tracking-wider">{stat.label}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Stats band */}
        <div className="mt-20 border-t border-b border-line py-8">
          <ScrollReveal variant="fade">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {stats.map((stat, i) => (
                <StaggerItem key={stat.label} variant="scale" className="text-center">
                  <div className="font-display text-display-lg font-semibold text-brand-teal tracking-tight animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                    {stat.value}
                  </div>
                  <p className="text-body-sm text-text-muted mt-1">{stat.label}</p>
                  <p className="text-caption text-text-dim mt-0.5">{stat.context}</p>
                </StaggerItem>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}