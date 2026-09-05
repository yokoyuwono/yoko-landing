'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/animations';

export function FinalCTA() {
  return (
    <section
      id="cta"
      className="py-24 md:py-32 lg:py-40 bg-black"
      aria-labelledby="cta-title"
    >
      <div className="container-custom text-center">
        <ScrollReveal variant="fade">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-brand-yellow/10 text-brand-yellow text-caption font-medium mb-8">
              Let's work together
            </span>
            <h2 id="cta-title" className="text-display-xl font-black tracking-tight text-balance mb-6">
              Ready to boost your conversion?
            </h2>
            <p className="text-body-lg text-text-muted mb-10 max-w-xl mx-auto">
              Book a 15-minute discovery call. Let's discuss your project and see how I can help you achieve measurable results.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg">
                <Link href="mailto:hello@yoko.dev?subject=Konsultasi">
                  Book a call — it's free
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
                <Link href="mailto:hello@yoko.dev">
                  Or email directly
                </Link>
              </Button>
            </div>
            <p className="mt-8 text-body-sm text-text-dim">
              Or write to <a href="mailto:hello@yoko.dev" className="text-brand-yellow hover:underline font-medium">hello@yoko.dev</a>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
