'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/animations';

const projects = [
  {
    slug: 'beautybrand-id',
    title: 'BeautyBrand ID',
    subtitle: 'Kampanye Merek Kecantikan',
    category: 'UI/UX + No-code',
    description: 'Merapikan alur pengguna, memperjelas proposisi nilai, dan mengoptimalkan CTA untuk mengubah pengunjung menjadi pembelian chat yang terukur.',
    metrics: [
      { label: 'Leads', value: '+32%', context: 'dalam 14 hari setelah peluncuran' },
    ],
    image: 'https://picsum.photos/seed/beautybrand/600/400',
    tags: ['UI/UX', 'No-code', 'Konversi'],
    featured: true,
  },
  {
    slug: 'indomanufacture',
    title: 'IndoManufacture',
    subtitle: 'Rebrand Manufaktur B2B',
    category: 'Full-stack Dev',
    description: 'Mengubah citra industri lama menjadi kehadiran digital yang modern dan tepercaya — sesuai standar klien global dari Eropa.',
    metrics: [
      { label: 'Prospek', value: '2×', context: 'pertanyaan masuk dari pasar Eropa' },
    ],
    image: 'https://picsum.photos/seed/indomanufacture/600/400',
    tags: ['Full-stack', 'Rebrand', 'B2B'],
    featured: true,
  },
  {
    slug: 'arena-sport',
    title: 'Arena Sport',
    subtitle: 'Sistem Pemesanan Tempat Olahraga',
    category: 'Arsitek Sistem',
    description: 'Mengganti obrolan WhatsApp yang kacau dengan sistem pemesanan digital: kalender real-time, pembayaran otomatis, dan dashboard admin.',
    metrics: [
      { label: 'Beban Admin', value: '−80%', context: 'pengurangan beban kerja' },
    ],
    image: 'https://picsum.photos/seed/arenasport/600/400',
    tags: ['Sistem', 'Otomatisasi', 'Dashboard'],
    featured: true,
  },
];

export function Work() {
  return (
    <section
      id="karya"
      className="py-22 md:py-28 lg:py-36 bg-surface"
      aria-labelledby="work-title"
    >
      <div className="container-custom">
        <ScrollReveal variant="fade">
          <div className="max-w-2xl mx-auto text-center mb-16 md:mb-20">
            <span className="inline-block px-4 py-1.5 bg-brand-teal/10 text-brand-teal text-caption font-semibold rounded-full mb-6">
              Karya Terpilih
            </span>
            <h2 id="work-title" className="text-display-lg font-semibold tracking-tight text-balance">
              Desain bukan sekadar estetika. <span className="text-brand-teal">Inilah buktinya.</span>
            </h2>
          </div>
        </ScrollReveal>

        <StaggerContainer stagger={0.1}>
          <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, i) => (
              <StaggerItem key={project.slug} variant="slide-up">
                <Card variant="elevated" hover className="overflow-hidden flex flex-col">
                  <motion.div
                    className="relative h-48 md:h-56 overflow-hidden"
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-50px' }}
                    initial={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} — ${project.subtitle}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent" />
                    {project.featured && (
                      <span className="absolute top-4 left-4 px-3 py-1 bg-brand-teal text-brand-teal-ink text-caption font-semibold rounded-full">
                        Unggulan
                      </span>
                    )}
                  </motion.div>

                  <div className="p-6 md:p-7 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-caption text-text-dim mb-3">
                      <span className="font-medium text-text-muted">{project.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{new Date().getFullYear()}</span>
                    </div>

                    <h3 className="text-display-md font-semibold tracking-tight mb-2">
                      {project.title}
                    </h3>
                    <p className="text-body-sm text-text-muted mb-4 flex-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-caption font-medium text-text-muted border border-line-muted rounded-full bg-surface"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="border-t border-line pt-5">
                      {project.metrics.map((metric, mi) => (
                        <div key={mi} className="flex items-baseline justify-between mb-3 last:mb-0">
                          <span className="text-body-sm text-text-muted">{metric.label}</span>
                          <div className="text-right">
                            <p className="font-display text-lg font-semibold text-brand-teal tracking-tight">
                              {metric.value}
                            </p>
                            <p className="text-caption text-text-dim">{metric.context}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        <div className="mt-12 text-center">
          <ScrollReveal variant="fade">
            <Button variant="secondary" size="lg" asChild>
              <a href="mailto:hello@yoko.dev?subject=Lihat%20Portofolio%20Lengkap">Minta portofolio lengkap →</a>
            </Button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}