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
      'inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 ease-spring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-surface disabled:pointer-events-none disabled:opacity-50';

    const variantStyles = {
      primary: 'bg-brand-teal text-brand-teal-ink hover:bg-brand-teal/90 hover:shadow-glow active:scale-[0.98]',
      secondary: 'border border-line-muted text-text hover:border-brand-teal hover:text-brand-teal hover:bg-surface-elevated active:scale-[0.98]',
      outline: 'border border-line-muted bg-transparent hover:bg-surface-elevated active:scale-[0.98]',
      ghost: 'bg-transparent hover:bg-surface-elevated active:scale-[0.98]',
      link: 'text-brand-teal underline-offset-4 hover:underline',
      destructive: 'bg-red-600 text-white hover:bg-red-600/90 active:scale-[0.98]',
    };

    const sizeStyles = {
      default: 'h-11 px-5 text-body-sm rounded-btn',
      sm: 'h-9 px-4 text-caption rounded-btn',
      lg: 'h-13 px-7 text-body rounded-btn',
      xl: 'h-14 px-8 text-body-lg rounded-btn',
      icon: 'h-11 w-11',
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