import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

export function Footer() {
  const year = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Halaman',
      links: [
        { href: '#beranda', label: 'Beranda' },
        { href: '#karya', label: 'Karya' },
        { href: '#layanan', label: 'Layanan' },
        { href: '#harga', label: 'Harga' },
        { href: '#kontak', label: 'Kontak' },
      ],
    },
    {
      title: 'Layanan',
      links: [
        { href: '#layanan', label: 'Landing Page' },
        { href: '#layanan', label: 'Web Profil' },
        { href: '#layanan', label: 'Aplikasi Web' },
        { href: '#layanan', label: 'UI/UX Design' },
      ],
    },
    {
      title: 'Kontak',
      links: [
        { href: 'mailto:hello@yoko.dev', label: 'hello@yoko.dev' },
        { href: 'https://wa.me/6281234567890', label: 'WhatsApp' },
        { href: 'https://github.com/yokoyuwono', label: 'GitHub' },
      ],
    },
  ];

  return (
    <footer className="border-t border-line bg-surface-elevated py-12 md:py-16 lg:py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link href="/" className="text-display-lg font-semibold text-text">
              Yoko Dev
            </Link>
            <p className="mt-4 text-body-sm text-text-dim max-w-xs">
              Membangun website & aplikasi yang tidak hanya indah — tetapi terbukti mendatangkan leads dan penjualan.
            </p>
          </div>

          {footerLinks.map((col) => (
            <div key={col.title}>
              <h3 className="text-body font-semibold text-text mb-4">{col.title}</h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-body-sm text-text-dim hover:text-brand-teal transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-line pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-caption text-text-dim">
            &copy; {year} Yoko Dev. Seluruh hak dilindungi.
          </p>
          <div className="mt-4 md:mt-0 flex items-center gap-2">
            <span className="text-caption text-text-dim">Made in</span>
            <span>🇮🇩</span>
          </div>
        </div>
      </div>
    </footer>
  );
}