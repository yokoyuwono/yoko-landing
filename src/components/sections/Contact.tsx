'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { ContactForm } from '@/components/sections/ContactForm';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/animations';

const contactInfo = [
  {
    icon: '📧',
    label: 'Email',
    value: 'hello@yoko.dev',
    href: 'mailto:hello@yoko.dev',
  },
  {
    icon: '📱',
    label: 'WhatsApp',
    value: '+62 812-3456-7890',
    href: 'https://wa.me/6281234567890',
  },
  {
    icon: '📍',
    label: 'Lokasi',
    value: 'Jakarta, Indonesia',
    href: null,
  },
];

export function Contact() {
  return (
    <section
      id="kontak"
      className="relative py-20 md:py-28 lg:py-36 bg-surface-elevated"
      aria-labelledby="contact-title"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <ScrollReveal variant="fade" delay={0.1}>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-teal/10 border border-brand-teal/30 rounded-full text-caption font-medium text-brand-teal">
                Hubungi Kami
              </span>
            </ScrollReveal>

            <StaggerContainer delay={0.2} stagger={0.12}>
              <motion.h2
                id="contact-title"
                className="text-display-xl text-text font-semibold tracking-tight mt-6 text-balance"
              >
                Siap memulai proyek Anda?
              </motion.h2>

              <motion.p
                className="mt-6 text-body-lg text-text-muted max-w-xl"
              >
                Kirimkan detail singkat tentang proyek Anda — waktu respon rata-rata kami: 2 jam kerja.
              </motion.p>

              <motion.div className="mt-8 space-y-4">
                {contactInfo.map((info, i) => (
                  <StaggerItem key={info.label} variant="slide-up">
                    <div className="flex items-center gap-4 p-4 bg-surface rounded-lg border border-line transition-all duration-300 hover:border-brand-teal/30 hover:bg-surface-elevated">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-teal/10 text-brand-teal text-lg">
                        {info.icon}
                      </span>
                      <div>
                        <p className="text-caption text-text-muted">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-body font-medium text-text hover:text-brand-teal transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-body font-medium text-text">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </motion.div>
            </StaggerContainer>
          </div>

          <div>
            <ScrollReveal variant="slide-left" delay={0.3}>
              <div className="bg-surface-elevated2 border border-line rounded-2xl p-6 md:p-8 shadow-card">
                <h3 className="text-display-md font-semibold text-text mb-6">
                  Kirim pesan
                </h3>
                <ContactForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}