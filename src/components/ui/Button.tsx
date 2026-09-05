'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import type { ComponentPropsWithoutRef, ElementType } from 'react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  loading?: boolean;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'destructive';
  size?: 'default' | 'sm' | 'lg' | 'xl' | 'icon';
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'default',
      fullWidth,
      asChild = false,
      loading,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 ease-spring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-surface disabled:pointer-events-none disabled:opacity-50';

    const variantStyles = {
      primary: 'bg-brand-yellow text-black hover:bg-brand-yellow-hover hover:shadow-glow active:scale-[0.98]',
      secondary: 'border border-line-muted text-text hover:border-brand-yellow hover:text-brand-yellow hover:bg-surface-elevated',
      outline: 'border border-line-muted bg-transparent hover:border-brand-yellow hover:bg-surface-elevated',
      ghost: 'bg-transparent hover:bg-surface-elevated',
      link: 'text-brand-yellow underline-offset-4 hover:underline',
      destructive: 'bg-red-600 text-white hover:bg-red-600/90',
    };

    const sizeStyles = {
      default: 'h-12 px-6 text-body-sm',
      sm: 'h-10 px-4 text-caption',
      lg: 'h-14 px-8 text-body',
      xl: 'h-16 px-10 text-body-lg',
      icon: 'h-12 w-12',
    };

    const Comp = asChild ? 'span' : 'button';

    const content = (
      <>
        {loading && (
          <span className="animate-spin" role="status" aria-label="loading">
            ⏺
          </span>
        )}
        {children}
      </>
    );

    if (asChild) {
      const child = React.Children.only(children) as React.ReactElement<Record<string, unknown>>;
      const ChildComp = child.type as ElementType;
      const childProps = child.props as Record<string, unknown>;
      return React.cloneElement(child, {
        className: cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && 'w-full',
          typeof childProps.className === 'string' ? childProps.className : '',
          className
        ),
        ...props,
        ref,
      } as ComponentPropsWithoutRef<typeof ChildComp>);
    }

    return (
      <Comp
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && 'w-full',
          className
        )}
        ref={ref}
        disabled={disabled || loading}
        aria-busy={loading}
        {...props}
      >
        {content}
      </Comp>
    );
  }
);

Button.displayName = 'Button';