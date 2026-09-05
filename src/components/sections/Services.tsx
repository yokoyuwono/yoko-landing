'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/animations';

const services = [
  {
    number: '01',
    title: 'Landing Pages',
    description: 'High-converting landing pages with proven funnel structure, copywriting, and clear CTAs.',
    href: '#',
  },
  {
    number: '02',
    title: 'Web Design',
    description: 'Websites that drive revenue through strategic UX, clean design, and optimized conversion paths.',
    href: '#',
  },
  {
    number: '03',
    title: 'App Design',
    description: 'Mobile apps and web applications designed for user retention and measurable business impact.',
    href: '#',
  },
];

export function Services() {
  return (
    <section
      id="layanan"
      className="py-32 md:py-40 lg:py-48 bg-surface-elevated"
      aria-labelledby="services-title"
    >
      <div className="container-custom">
        <ScrollReveal variant="fade">
          <div className="max-w-3xl">
            <h2 id="services-title" className="text-display-lg font-black tracking-tight text-balance">
              I help you build products<br />
              that <span className="text-brand-yellow">convert visitors into customers.</span>
            </h2>
            <p className="mt-8 text-body-lg text-text-muted max-w-xl">
              From strategy to execution — design that increases conversion rates, drives revenue, and builds long-term customer relationships.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer delay={0.3} stagger={0.12}>
          <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service) => (
              <StaggerItem key={service.title} variant="slide-up">
                <Card variant="elevated" className="p-8 md:p-10 h-full flex flex-col">
                  <span className="text-body-sm font-medium text-brand-yellow tracking-wider uppercase mb-4">
                    {service.number}
                  </span>
                  <h3 className="text-display-md font-bold tracking-tight text-text mb-4">
                    {service.title}
                  </h3>
                  <p className="text-body-sm text-text-muted mb-6 flex-1">
                    {service.description}
                  </p>
                  <Button variant="link" size="sm" asChild>
                    <a href={service.href}>
                      Learn more →
                    </a>
                  </Button>
                </Card>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
