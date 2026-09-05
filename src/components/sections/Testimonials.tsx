'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/Card';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/animations';
import { getInitials, getAvatarColor } from '@/lib/utils';

const testimonials = [
  {
    name: 'Sarah Wijaya',
    role: 'Marketing Manager',
    company: 'Brand Kecantikan',
    quote: '“Tingkat konversi di website kami meningkat signifikan. Tim sangat memahami kebutuhan bisnis, bukan hanya soal tampilan.”',
    rating: 5,
  },
  {
    name: 'Andi Pratama',
    role: 'Founder',
    company: 'Brand Kecantikan',
    quote: '“Prosesnya cepat, hasilnya rapi, dan yang terpenting — desainnya benar-benar membantu penjualan kami. Sangat direkomendasikan.”',
    rating: 5,
  },
  {
    name: 'Jessica Lim',
    role: 'Product Owner',
    company: 'SaaS Startup',
    quote: '“Komunikasi lancar, selalu responsif, dan paham konteks produk kami. Sistem yang dibangun berhasil memangkas kerja admin drastis.”',
    rating: 5,
  },
  {
    name: 'Budi Santoso',
    role: 'CEO',
    company: 'Manufaktur',
    quote: '“Website lama kami ketinggalan zaman. Setelah rebrand, kami dapat 2x lebih banyak pertanyaan dari klien Eropa. Investasi yang sangat worth it.”',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section
      id="testimoni"
      className="py-22 md:py-28 lg:py-36 bg-surface-elevated"
      aria-labelledby="testimonials-title"
    >
      <div className="container-custom">
        <ScrollReveal variant="fade">
          <div className="max-w-2xl mx-auto text-center mb-16 md:mb-20">
            <span className="inline-block px-4 py-1.5 bg-brand-teal/10 text-brand-teal text-caption font-semibold rounded-full mb-6">
              Testimoni
            </span>
            <h2 id="testimonials-title" className="text-display-lg font-semibold tracking-tight text-balance">
              Orang-orang senang dengan hasilnya.
            </h2>
          </div>
        </ScrollReveal>

        <StaggerContainer stagger={0.1}>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, i) => (
              <StaggerItem key={testimonial.name} variant="slide-up">
                <Card variant="elevated" hover className="p-6 md:p-7 h-full flex flex-col">
                  <div className="flex gap-1 mb-5" aria-label={`${testimonial.rating} dari 5 bintang`}>
                    {Array.from({ length: 5 }, (_, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ scale: 0, rotate: -90 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: idx * 0.08, duration: 0.3 }}
                        className="text-brand-teal"
                      >
                        ★
                      </motion.span>
                    ))}
                  </div>
                  <p className="text-body-sm text-text mb-6 flex-1 leading-relaxed">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center gap-4 pt-4 border-t border-line">
                    <div
                      className={cn(
                        'flex h-12 w-12 items-center justify-center rounded-full font-display font-semibold text-brand-teal-ink',
                        getAvatarColor(testimonial.name)
                      )}
                      aria-hidden="true"
                    >
                      {getInitials(testimonial.name)}
                    </div>
                    <div>
                      <p className="font-semibold text-text">{testimonial.name}</p>
                      <p className="text-caption text-text-muted">{testimonial.role}{testimonial.company && `, ${testimonial.company}`}</p>
                    </div>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}