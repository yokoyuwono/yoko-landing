'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/Card';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/animations';

const testimonials = [
  {
    id: 1,
    quote: "The final project result was just fantastic. Conversion rates have skyrocketed.",
    author: "Cory Miller",
    role: "Kit.com",
    flag: "🇺🇸",
  },
  {
    id: 2,
    quote: "Their experience is unmatched. We're impressed with the quality of designs and brilliant insights. The team always answered within hours.",
    author: "Chris Current",
    role: "CEO of Agent First",
    flag: "🇺🇸",
  },
  {
    id: 3,
    quote: "Squareblack became our key partner. We'll work with them forever.",
    author: "Chris Lawrence",
    role: "Swap.fm",
    flag: "🇺🇸",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonial"
      className="py-24 md:py-32 lg:py-40 bg-surface-elevated"
      aria-labelledby="testimonials-title"
    >
      <div className="container-custom">
        <ScrollReveal variant="fade">
          <div className="max-w-3xl mb-16">
            <h2 id="testimonials-title" className="text-display-lg font-black tracking-tight text-balance">
              What clients say.
            </h2>
          </div>
        </ScrollReveal>

        <StaggerContainer delay={0.2} stagger={0.15}>
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {testimonials.map((testimonial) => (
              <StaggerItem key={testimonial.id} variant="slide-up">
                <Card variant="default" className="p-8 md:p-10 h-full">
                  <p className="text-body-lg text-text mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <span className="text-3xl">{testimonial.flag}</span>
                    <div>
                      <span className="font-bold text-text block">{testimonial.author}</span>
                      <span className="text-body-sm text-text-dim">{testimonial.role}</span>
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
