'use client';

import * as React from 'react';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      {children}
      <Toaster
        position="bottom-right"
        theme="dark"
        className="bg-surface-elevated2 border border-line text-text"
        toastOptions={{
          className: 'bg-surface-elevated2 border border-line text-text',
          descriptionClassName: 'text-text-muted',
          actionButtonStyle: { backgroundColor: '#2DD4BF', color: '#04110F' } as React.CSSProperties,
          cancelButtonStyle: { backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-line)' } as React.CSSProperties,
        }}
      />
    </ThemeProvider>
  );
}