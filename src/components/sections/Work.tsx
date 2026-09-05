'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/animations';

const projects = [
  {
    id: 1,
    title: 'Medidesk & Vetidesk',
    subtitle: 'Website redesign for healthcare platform',
    metrics: { value: '3×', label: 'Conversion rate increase' },
    image: 'https://picsum.photos/seed/medidesk/600/400',
    href: '#',
  },
  {
    id: 2,
    title: 'Decathlon Rent',
    subtitle: 'E-commerce redesign for sports equipment rental',
    metrics: { value: '2×', label: 'User engagement' },
    image: 'https://picsum.photos/seed/decathlon/600/400',
    href: '#',
  },
  {
    id: 3,
    title: 'FxPro Trading Platform',
    subtitle: 'Marketing page overhaul for financial services',
    metrics: { value: '+150%', label: 'Lead generation' },
    image: 'https://picsum.photos/seed/fxpro/600/400',
    href: '#',
  },
];

export function Work() {
  return (
    <section
      id="karya"
      className="py-24 md:py-32 lg:py-40 bg-surface"
      aria-labelledby="work-title"
    >
      <div className="container-custom">
        <ScrollReveal variant="fade">
          <div className="max-w-3xl mb-20">
            <h2 id="work-title" className="text-display-lg font-black tracking-tight text-balance">
              Selected work.
            </h2>
            <p className="mt-6 text-body-lg text-text-muted max-w-xl">
              Each project is designed with conversion as the primary metric — data-driven, tested, and optimized for results.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer delay={0.2} stagger={0.15}>
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {projects.map((project) => (
              <StaggerItem key={project.id} variant="slide-up">
                <Card variant="default" className="overflow-hidden group h-full">
                  <div className="aspect-[16/9] overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-caption text-text-dim">Case study</span>
                      <span className="text-body-sm font-medium text-brand-yellow">
                        {project.metrics.value}
                      </span>
                    </div>
                    <h3 className="text-display-md font-bold tracking-tight text-text mb-2">
                      {project.title}
                    </h3>
                    <p className="text-body-sm text-text-muted mb-6">
                      {project.subtitle}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-caption text-text-dim">{project.metrics.label}</span>
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={project.href}>
                          View case study →
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        <ScrollReveal variant="fade" delay={0.5}>
          <div className="mt-20 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="#kontak">
                View all projects
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
