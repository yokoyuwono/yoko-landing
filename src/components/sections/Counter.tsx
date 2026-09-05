'use client';

import * as React from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ScrollReveal } from '@/components/animations';

interface CounterProps {
  value: string | number;
  label: string;
  context?: string;
  className?: string;
}

export function Counter({ value, label, context, className }: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });
  const isString = typeof value === 'string' && isNaN(Number(value));

  const countRef = useRef<HTMLSpanElement>(null);
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 2 });

  useEffect(() => {
    if (isInView && countRef.current && !isString) {
      const numericValue = Number(value);
      mv.set(numericValue);
      const unsubscribe = spring.on('change', (latest) => {
        if (countRef.current) {
          countRef.current.textContent = Math.round(latest).toString();
        }
      });
      return () => unsubscribe();
    }
  }, [isInView, value, mv, spring, isString]);

  return (
    <motion.div
      ref={ref}
      className={cn('text-center', className)}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      {isString ? (
        <span className="font-display text-display-lg font-semibold text-brand-yellow tracking-tight block">
          {value}
        </span>
      ) : (
        <span ref={countRef} className="font-display text-display-lg font-semibold text-brand-yellow tracking-tight block">
          0
        </span>
      )}
      <p className="text-body-sm text-text-muted mt-2">{label}</p>
      {context && <p className="text-caption text-text-dim mt-1">{context}</p>}
    </motion.div>
  );
}

interface CountersBandProps {
  stats: Array<{ label: string; value: string | number; context?: string }>;
  className?: string;
}

export function CountersBand({ stats, className }: CountersBandProps) {
  return (
    <section
      className={cn('relative py-16 md:py-24 lg:py-28 border-t border-line border-b', className)}
    >
      <div className="container-custom">
        <ScrollReveal variant="fade">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, i) => (
              <Counter
                key={stat.label}
                value={stat.value}
                label={stat.label}
                context={stat.context}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}