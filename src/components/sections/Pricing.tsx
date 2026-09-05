'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/animations';

const plans = [
  {
    kind: 'Audit Sekali Jalan',
    title: 'Audit UX/UI',
    duration: 'Satu kali · 5–7 hari',
    price: 'Mulai Rp 3.500.000',
    features: [
      'Audit UX/UI menyeluruh',
      'Tinjauan copywriting',
      'Laporan analisis PDF',
      'Daftar perbaikan nyata & prioritas',
    ],
    cta: 'Pesan Audit',
    href: 'mailto:hello@yoko.dev?subject=Pesan%20Audit%20UX%2FUI',
    popular: false,
  },
  {
    kind: 'Sprint Desain',
    title: 'Landing Page',
    duration: 'Jalur cepat · 2 minggu',
    price: 'Mulai Rp 12.000.000',
    features: [
      'Strategi funnel & alur',
      'Desain UI profesional',
      'Tulisan landing page (copy)',
      'Serah terima developer',
    ],
    cta: 'Pesan Sprint',
    href: 'mailto:hello@yoko.dev?subject=Pesan%20Sprint%20Desain',
    popular: true,
  },
  {
    kind: 'Mitra Bulanan',
    title: 'Retainer',
    duration: 'Berkelanjutan · per bulan',
    price: 'Mulai Rp 8.000.000/bln',
    features: [
      'Iterasi & pengembangan terus-menerus',
      'Ide & uji pengujian A/B',
      'Pemeliharaan sistem',
      'Dukungan prioritas',
    ],
    cta: 'Ayo Ngobrol',
    href: 'mailto:hello@yoko.dev?subject=Diskusi%20Mitra%20Bulanan',
    popular: false,
  },
];

export function Pricing() {
  return (
    <section
      id="harga"
      className="py-22 md:py-28 lg:py-36 bg-surface"
      aria-labelledby="pricing-title"
    >
      <div className="container-custom">
        <ScrollReveal variant="fade">
          <div className="max-w-2xl mx-auto text-center mb-16 md:mb-20">
            <span className="inline-block px-4 py-1.5 bg-brand-teal/10 text-brand-teal text-caption font-semibold rounded-full mb-6">
              Harga
            </span>
            <h2 id="pricing-title" className="text-display-lg font-semibold tracking-tight text-balance">
              Pilihan paket yang jelas, <span className="text-brand-teal">tanpa biaya tersembunyi.</span>
            </h2>
            <p className="mt-6 text-body-lg text-text-muted max-w-xl mx-auto">
              Mulai dari audit cepat hingga pendampingan bulanan — pilih yang sesuai kebutuhan Anda.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer stagger={0.1}>
          <div className="grid lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {plans.map((plan, i) => (
              <StaggerItem key={plan.title} variant="slide-up">
                <Card
                  variant={plan.popular ? 'elevated' : 'outlined'}
                  hover
                  className={cn(
                    'relative p-7 md:p-8 flex flex-col h-full',
                    plan.popular && 'border-brand-teal/50 bg-surface-elevated2'
                  )}
                >
                  {plan.popular && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.4, type: 'spring', stiffness: 300 }}
                      className="absolute -top-3 left-1/2 -translate-x-1/2"
                    >
                      <span className="bg-brand-teal text-brand-teal-ink text-caption font-semibold rounded-full px-4 py-1.5 whitespace-nowrap">
                        Paling Diminati
                      </span>
                    </motion.div>
                  )}

                  <div className="mb-6">
                    <span className="inline-block px-3 py-1 bg-brand-teal/10 text-brand-teal text-caption font-semibold rounded-full mb-4">
                      {plan.kind}
                    </span>
                    <h3 className="text-display-md font-semibold tracking-tight mb-2">
                      {plan.title}
                    </h3>
                    <p className="text-body-sm text-text-muted">{plan.duration}</p>
                  </div>

                  <div className="mb-8">
                    <p className="font-display text-3xl md:text-4xl font-semibold text-text tracking-tight">
                      {plan.price}
                    </p>
                  </div>

                  <ul className="mb-8 flex flex-col gap-4 flex-1">
                    {plan.features.map((feature, fi) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + fi * 0.08, duration: 0.4 }}
                        className="flex items-start gap-3 text-body-sm text-text"
                      >
                        <svg
                          className="flex-shrink-0 mt-0.5 h-5 w-5 text-brand-teal"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <Button
                    variant={plan.popular ? 'primary' : 'secondary'}
                    size="lg"
                    fullWidth
                    asChild
                  >
                    <a href={plan.href}>{plan.cta}</a>
                  </Button>
                </Card>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        <div className="mt-12 text-center">
          <ScrollReveal variant="fade">
            <p className="text-body-sm text-text-muted">
              Butuh yang custom?{' '}
              <a href="mailto:hello@yoko.dev?subject=Paket%20Custom" className="text-brand-teal hover:underline font-medium">
                Diskusikan kebutuhan Anda
              </a>
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}