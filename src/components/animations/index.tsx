'use client';

import * as React from 'react';
import { motion, type Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  stagger?: number;
  variant?: 'fade' | 'slide-up' | 'slide-left' | 'slide-right' | 'scale';
  once?: boolean;
  rootMargin?: string;
  className?: string;
}

const variants: Record<string, Variants> = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  },
  'slide-up': {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  },
  'slide-left': {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  },
  'slide-right': {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  },
};

export function ScrollReveal({
  children,
  delay = 0,
  stagger = 0,
  variant = 'slide-up',
  once = true,
  rootMargin = '0px 0px -100px 0px',
  className,
  ...props
}: ScrollRevealProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const childVariants = variants[variant] || variants['slide-up'];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: rootMargin }}
      className={cn(className)}
      {...props}
    >
      {React.Children.map(children, (child, index) =>
        React.isValidElement(child)
          ? React.cloneElement(child, {
              variants: childVariants,
              custom: index,
            })
          : child
      )}
    </motion.div>
  );
}

export const StaggerContainer = ({ children, delay = 0, stagger = 0.1, className, ...props }: ScrollRevealProps) => (
  <motion.div
    variants={{
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: stagger, delayChildren: delay } },
    }}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '0px 0px -100px 0px' }}
    className={cn(className)}
    {...props}
  >
    {React.Children.map(children, (child) =>
      React.isValidElement(child) ? React.cloneElement(child, {}) : child
    )}
  </motion.div>
);

export const StaggerItem = ({ children, variant = 'slide-up', className, ...props }: { 
  children: React.ReactNode; 
  variant?: keyof typeof variants;
  className?: string;
}) => {
  const childVariants = variants[variant] || variants['slide-up'];
  return (
    <motion.div variants={childVariants} className={cn(className)} {...props}>
      {children}
    </motion.div>
  );
};

// Hero-specific animations
export const heroVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export const counterVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

// Magnetic hover effect for buttons
export function useMagnetic(ref: React.RefObject<HTMLElement>, strength = 0.3) {
  React.useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      element.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    };

    const handleMouseLeave = () => {
      element.style.transform = 'translate(0, 0)';
      element.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [ref, strength]);
}

// Parallax effect
export function useParallax(speed = 0.5) {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX - window.innerWidth / 2) * speed;
      const y = (clientY - window.innerHeight / 2) * speed;
      element.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [speed]);

  return ref;
}