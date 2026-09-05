import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface py-12 md:py-16">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-caption text-text-dim">
            © {year} Yoko Dev. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-caption text-text-dim">
              Made in 🇮🇩
            </span>
            <div className="flex items-center gap-2 text-xs text-text-dim">
              <span className="w-2 h-2 bg-brand-yellow rounded-full" />
              Available for new projects
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-line pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex gap-8 text-caption text-text-dim">
            <Link href="#beranda" className="hover:text-brand-yellow transition-colors">Beranda</Link>
            <Link href="#karya" className="hover:text-brand-yellow transition-colors">Karya</Link>
            <Link href="#layanan" className="hover:text-brand-yellow transition-colors">Layanan</Link>
            <Link href="#harga" className="hover:text-brand-yellow transition-colors">Harga</Link>
            <Link href="#kontak" className="hover:text-brand-yellow transition-colors">Kontak</Link>
          </div>
          <a
            href="mailto:hello@yoko.dev"
            className="text-caption text-text-dim hover:text-brand-yellow transition-colors"
          >
            hello@yoko.dev
          </a>
        </div>
      </div>
    </footer>
  );
}
