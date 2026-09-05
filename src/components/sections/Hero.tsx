'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/animations';

const heroData = [
  { label: '25+', value: 'Years Experience' },
  { label: '350+', value: 'Clients Served' },
];

export function Hero() {
  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-3 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--color-line) 1px, transparent 1px),
            linear-gradient(to bottom, var(--color-line) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
        aria-hidden="true"
      />

      <div className="container-custom relative py-16 md:py-20 lg:py-24">
        <div>
          <ScrollReveal variant="fade" delay={0.1}>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-surface-elevated border border-line text-caption font-medium text-text-muted">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inset-0 h-1.5 w-1.5 rounded-full bg-brand-yellow animate-ping opacity-75" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-brand-yellow" />
              </span>
              Product designer & conversion specialist
            </span>
          </ScrollReveal>

          <StaggerContainer delay={0.2} stagger={0.1}>
            <motion.h1
              id="hero-title"
              className="text-display-xl font-black tracking-tighter text-balance mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              I boost the conversion<br />
              of your website or app.<br />
              <span className="text-brand-yellow">
                Grow sales.
              </span>
            </motion.h1>

            <motion.p
              className="mt-8 text-body-lg text-text-muted max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              I help startups and companies build landing pages, websites, and applications that are not only visually striking — but proven to drive leads and revenue.
            </motion.p>

            <motion.div
              className="mt-12 flex flex-col sm:flex-row items-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <Button asChild size="lg">
                <Link href="mailto:hello@yoko.dev?subject=Konsultasi">
                  Book a 15-min call
                  <motion.svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    initial={{ x: 0 }}
                    whileHover={{ x: 3 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
                  </motion.svg>
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="#karya">View Work</Link>
              </Button>
            </motion.div>

            <motion.div
              className="mt-16 flex flex-wrap gap-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {heroData.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-display-lg font-black text-brand-yellow tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-body-sm text-text-dim mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
