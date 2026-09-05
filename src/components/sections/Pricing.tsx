'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/animations';

const comparison = [
  {
    label: 'Time + money you have to invest on average',
    squareblack: '2-3 weeks, $10k/sprint',
    other: '3-6 months, $50-200k',
  },
  {
    label: 'Quality of design',
    squareblack: 'Senior designer only',
    other: 'Often outsourced to juniors',
  },
  {
    label: 'Process',
    squareblack: 'No workshop waste — just results',
    other: 'Outdated UX workshops & processes',
  },
];

export function Pricing() {
  return (
    <section
      id="harga"
      className="py-24 md:py-32 lg:py-40 bg-surface"
      aria-labelledby="pricing-title"
    >
      <div className="container-custom">
        <ScrollReveal variant="fade">
          <div className="max-w-3xl mb-16">
            <h2 id="pricing-title" className="text-display-lg font-black tracking-tight text-balance">
              Pricing. Simple, flexible plans.
            </h2>
            <p className="mt-6 text-body-lg text-text-muted max-w-xl">
              No hidden fees. No lengthy contracts. Just clean design that converts.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer delay={0.2} stagger={0.15}>
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Design Sprint */}
            <StaggerItem variant="slide-up">
              <Card variant="elevated" className="p-8 md:p-10 h-full">
                <div className="mb-6">
                  <span className="text-caption text-text-dim font-medium tracking-wider uppercase">
                    Design Sprint
                  </span>
                  <h3 className="text-display-md font-black text-text mt-2">
                    $10.000
                  </h3>
                  <p className="text-body-sm text-text-muted mt-4">
                    One sprint (2 weeks of work) is enough for a standard landing page or the main flow of a mobile app (20-30 screens).
                  </p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-body-sm text-text-dim">
                    <span className="text-brand-yellow">✓</span>
                    Senior designer only (Michal or Diana)
                  </li>
                  <li className="flex items-center gap-2 text-body-sm text-text-dim">
                    <span className="text-brand-yellow">✓</span>
                    Individually tailored, modern design
                  </li>
                  <li className="flex items-center gap-2 text-body-sm text-text-dim">
                    <span className="text-brand-yellow">✓</span>
                    Conversion & copywriting guidance included
                  </li>
                </ul>
                <Button asChild size="lg" className="w-full">
                  <Link href="mailto:hello@yoko.dev?subject=Design Sprint">
                    Book a sprint
                  </Link>
                </Button>
              </Card>
            </StaggerItem>

            {/* Express Audit */}
            <StaggerItem variant="slide-up">
              <Card variant="elevated" className="p-8 md:p-10 h-full">
                <div className="mb-6">
                  <span className="text-caption text-text-dim font-medium tracking-wider uppercase">
                    Express Audit
                  </span>
                  <h3 className="text-display-md font-black text-text mt-2">
                    From $500
                  </h3>
                  <p className="text-body-sm text-text-muted mt-4">
                    1-hour design audit of your existing product with direct insights and actionable recommendations.
                  </p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-body-sm text-text-dim">
                    <span className="text-brand-yellow">✓</span>
                    Performed by senior designer
                  </li>
                  <li className="flex items-center gap-2 text-body-sm text-text-dim">
                    <span className="text-brand-yellow">✓</span>
                    UI, UX & conversion analysis
                  </li>
                  <li className="flex items-center gap-2 text-body-sm text-text-dim">
                    <span className="text-brand-yellow">✓</span>
                    Video call or async review
                  </li>
                </ul>
                <Button asChild variant="secondary" size="lg" className="w-full">
                  <Link href="mailto:hello@yoko.dev?subject=Express Audit">
                    Book an audit
                  </Link>
                </Button>
              </Card>
            </StaggerItem>
          </div>
        </StaggerContainer>

        {/* Comparison table */}
        <ScrollReveal variant="fade" delay={0.5}>
          <div className="mt-24 border-t border-line pt-12">
            <h3 className="text-display-md font-black mb-8">Why choose us?</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-line">
                    <th className="text-left py-4 text-body-sm font-medium text-text-dim">Criteria</th>
                    <th className="text-center py-4 text-body-sm font-medium text-brand-yellow">Yoko Dev</th>
                    <th className="text-center py-4 text-body-sm font-medium text-text-dim">Other Agencies</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row) => (
                    <tr key={row.label} className="border-b border-line/30">
                      <td className="py-4 text-body-sm text-text-muted">{row.label}</td>
                      <td className="py-4 text-center text-body-sm text-brand-yellow font-medium">{row.squareblack}</td>
                      <td className="py-4 text-center text-body-sm text-text-dim">{row.other}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
