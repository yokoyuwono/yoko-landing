'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { ContactForm } from '@/components/sections/ContactForm';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/animations';

const contactInfo = [
  { icon: '📧', label: 'Email', value: 'hello@yoko.dev', href: 'mailto:hello@yoko.dev' },
  { icon: '📱', label: 'WhatsApp', value: '+62 812-3456-7890', href: 'https://wa.me/6281234567890' },
  { icon: '📍', label: 'Lokasi', value: 'Jakarta, Indonesia', href: null },
];

export function Contact() {
  return (
    <section
      id="kontak"
      className="py-24 md:py-32 lg:py-40 bg-surface-elevated"
      aria-labelledby="contact-title"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Info */}
          <div>
            <ScrollReveal variant="fade" delay={0.1}>
              <span className="inline-block px-4 py-1.5 bg-brand-yellow/10 text-brand-yellow text-caption font-medium mb-6">
                Contact
              </span>
            </ScrollReveal>

            <StaggerContainer delay={0.2} stagger={0.12}>
              <motion.h2
                id="contact-title"
                className="text-display-xl font-black tracking-tight text-balance mb-8"
              >
                Let's talk about<br/>your project.
              </motion.h2>

              <motion.p
                className="text-body-lg text-text-muted mb-12 max-w-md"
              >
                Have a project in mind? Get in touch — I aim to respond within 2 hours.
              </motion.p>

              <motion.div className="space-y-4">
                {contactInfo.map((info, i) => (
                  <StaggerItem key={info.label} variant="slide-up">
                    <div className="flex items-center gap-4 p-4 bg-surface rounded border border-line transition-all duration-200 hover:border-brand-yellow/30">
                      <span className="flex h-10 w-10 items-center justify-center rounded bg-brand-yellow/10 text-brand-yellow text-lg">
                        {info.icon}
                      </span>
                      <div>
                        <p className="text-caption text-text-dim">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-body font-medium text-text hover:text-brand-yellow transition-colors"
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

          {/* Contact Form */}
          <div>
            <ScrollReveal variant="slide-left" delay={0.3}>
              <div className="bg-surface-elevated2 border border-line rounded p-8 md:p-10">
                <h3 className="text-display-md font-black text-text mb-8">
                  Send me a message
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
