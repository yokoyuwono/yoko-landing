'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outlined' | 'interactive';
  hover?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', hover = false, children, ...props }, ref) => {
    const baseStyles = 'rounded-[0px] transition-all duration-300';

    const variantStyles = {
      default: 'bg-surface border border-line',
      elevated: 'bg-surface-elevated border border-line',
      outlined: 'bg-transparent border border-line',
      interactive: 'bg-surface-elevated border border-line hover:border-brand-yellow hover:shadow-glow hover:-translate-y-1',
    };

    return (
      <div
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], hover && 'hover:shadow-glow', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';