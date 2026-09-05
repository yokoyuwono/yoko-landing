'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/animations';
import { useParallax } from '@/components/animations';

export function FinalCTA() {
  const parallaxRef = useParallax(0.25);

  return (
    <section
      id="kontak"
      className="relative py-22 md:py-28 lg:py-36 overflow-hidden"
      aria-labelledby="cta-title"
    >
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

      <motion.div
        ref={parallaxRef}
        className="absolute -bottom-56 left-1/2 -translate-x-1/2 w-[500px] h-[350px] pointer-events-none"
        style={{
          background: 'radial-gradient(closest-side, rgba(45, 212, 191, 0.15), transparent)',
        }}
        aria-hidden="true"
      />

      <div className="container-custom relative text-center">
        <ScrollReveal variant="fade">
          <span className="inline-block px-4 py-1.5 bg-brand-teal/10 text-brand-teal text-caption font-semibold rounded-full mb-6">
            Mulai Proyek Anda
          </span>
        </ScrollReveal>

        <ScrollReveal variant="slide-up" delay={0.1}>
          <h2 id="cta-title" className="text-display-lg font-semibold tracking-tight text-balance max-w-2xl mx-auto mb-6">
            Mari kita bicarakan <br /> proyek Anda.
          </h2>
        </ScrollReveal>

        <ScrollReveal variant="slide-up" delay={0.2}>
          <p className="text-body-lg text-text-muted max-w-xl mx-auto mb-10">
            Konsultasi 15 menit gratis — tanpa kewajiban. Ceritakan kebutuhan Anda, saya bantu arahkan solusinya.
          </p>
        </ScrollReveal>

        <ScrollReveal variant="slide-up" delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="xl" asChild className="group">
              <a href="mailto:hello@yoko.dev?subject=Konsultasi%2015%20Menit">
                Pesan Konsultasi Gratis
                <svg className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.4}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </Button>
            <Button variant="secondary" size="xl" asChild>
              <a href="mailto:hello@yoko.dev?subject=Proyek%20Baru">Kirim Email</a>
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fade" delay={0.5}>
          <p className="mt-8 text-body-sm text-text-dim">
            atau langsung ke <a href="mailto:hello@yoko.dev" className="text-brand-teal hover:underline font-medium">hello@yoko.dev</a>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}