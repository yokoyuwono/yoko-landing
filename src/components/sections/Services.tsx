'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/animations';

const services = [
  {
    num: '01',
    title: 'Landing Page Konversi Tinggi',
    desc: 'Landing page yang dirancang dengan struktur funnel, copywriting yang menjual, dan CTA yang jelas — siap mengubah pengunjung menjadi leads.',
    tags: ['Funnel', 'Copywriting', 'CTA'],
    icon: '🎯',
  },
  {
    num: '02',
    title: 'Desain UI/UX Produk',
    desc: 'Desain aplikasi web & mobile dari wireframe hingga prototipe fidelitas tinggi — antarmuka yang disukai pengguna dan mudah digunakan.',
    tags: ['Wireframe', 'Prototipe', 'Design System'],
    icon: '🎨',
  },
  {
    num: '03',
    title: 'Web Profil & Company Profile',
    desc: 'Website profil bisnis modern yang membangun kepercayaan — kredibel di mata klien lokal maupun internasional.',
    tags: ['Responsif', 'SEO', 'Multi-bahasa'],
    icon: '🏢',
  },
  {
    num: '04',
    title: 'Pengembangan Front-end',
    desc: 'Mengubah desain menjadi kode yang sempurna pixel. Performa, aksesibilitas, dan SEO dibangun sejak hari pertama.',
    tags: ['TypeScript', 'Tailwind CSS', 'React'],
    icon: '⚡',
  },
  {
    num: '05',
    title: 'Audit UX & Strategi CRO',
    desc: 'Analisis mendalam untuk menemukan penghambat konversi, lalu strategi perbaikan yang terukur — bukan tebakan.',
    tags: ['Riset Pengguna', 'Analitik', 'A/B Testing'],
    icon: '🔍',
  },
  {
    num: '06',
    title: 'Sistem & Mini App',
    desc: 'Membangun sistem pemesanan, dashboard, dan aplikasi internal yang mengotomatiskan kerja manual bisnis Anda.',
    tags: ['Next.js', 'Supabase', 'Payment Gateway'],
    icon: '⚙️',
  },
];

export function Services() {
  return (
    <section
      id="layanan"
      className="py-22 md:py-28 lg:py-36 bg-surface"
      aria-labelledby="services-title"
    >
      <div className="container-custom">
        <ScrollReveal variant="fade">
          <div className="max-w-2xl mx-auto text-center mb-16 md:mb-20">
            <span className="inline-block px-4 py-1.5 bg-brand-teal/10 text-brand-teal text-caption font-semibold rounded-full mb-6">
              Layanan
            </span>
            <h2 id="services-title" className="text-display-lg font-semibold tracking-tight text-balance">
              Bukan sekadar menggambar layar yang cantik — saya membangun{' '}
              <span className="text-brand-teal">alat yang menghasilkan.</span>
            </h2>
            <p className="mt-6 text-body-lg text-text-muted max-w-xl mx-auto">
              Dari wireframe hingga kode siap produksi: desain sistem yang dapat diskalakan dan antarmuka yang disukai pengguna.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer stagger={0.1}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, i) => (
              <StaggerItem key={service.num} variant="slide-up" className="group">
                <Card variant="elevated" hover className="p-6 md:p-8 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl sm:text-3xl" aria-hidden="true">{service.icon}</span>
                    <span className="font-display text-body-sm font-medium text-brand-teal tracking-wider uppercase">
                      {service.num}
                    </span>
                  </div>
                  <h3 className="text-display-md font-semibold tracking-tight mb-3">
                    {service.title}
                  </h3>
                  <p className="text-body-sm text-text-muted mb-6 flex-1">
                    {service.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-caption font-medium text-text-muted border border-line-muted rounded-full bg-surface transition-all duration-200 group-hover:border-brand-teal group-hover:text-brand-teal"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full group-hover:border-brand-teal group-hover:text-brand-teal transition-colors">
                    Selengkapnya
                    <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Button>
                </Card>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        <div className="mt-12 text-center">
          <ScrollReveal variant="fade">
            <Button variant="secondary" size="lg" asChild>
              <a href="mailto:hello@yoko.dev?subject=Diskusi%20Layanan">Butuh layanan custom? Ayo ngobrol →</a>
            </Button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}