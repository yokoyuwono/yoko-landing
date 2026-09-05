'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import type { ComponentPropsWithoutRef, ElementType } from 'react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  loading?: boolean;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'xl';
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'default', fullWidth, asChild = false, loading, disabled, children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 ease-spring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:pointer-events-none disabled:opacity-50';

    const variantStyles = {
      primary: 'bg-ink text-white hover:bg-ink-2 hover:scale-[1.02] rounded-btn',
      secondary: 'bg-lime text-ink hover:bg-lime/85 hover:scale-[1.02] rounded-btn',
      outline: 'border border-ashen text-ink hover:border-ink rounded-btn',
      ghost: 'text-ink hover:text-lime',
      link: 'text-lime underline-offset-4 hover:underline',
    };

    const sizeStyles = {
      default: 'h-11 px-5 text-sm',
      sm: 'h-9 px-4 text-sm',
      lg: 'h-[60px] px-8 text-base',
      xl: 'h-[65px] px-10 text-lg',
    };

    const spinner = (
      <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" opacity="0.25" />
        <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    );

    const content = (
      <>
        {loading && spinner}
        {children}
      </>
    );

    const Comp = asChild ? 'span' : 'button';

    if (asChild) {
      const child = React.Children.only(children) as React.ReactElement<Record<string, unknown>>;
      const ChildComp = child.type as ElementType;
      const childProps = child.props as Record<string, unknown>;
      return React.cloneElement(child, {
        className: cn(
          baseStyles, variantStyles[variant], sizeStyles[size],
          fullWidth && 'w-full',
          typeof childProps.className === 'string' ? childProps.className : '',
          className
        ),
        ...props,
      } as ComponentPropsWithoutRef<typeof ChildComp>);
    }

    return (
      <Comp ref={ref} disabled={disabled || loading} aria-busy={loading} className={cn(baseStyles, variantStyles[variant], sizeStyles[size], fullWidth && 'w-full', className)} {...props}>
        {content}
      </Comp>
    );
  }
);

Button.displayName = 'Button';
