import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/sections/Navigation';
import { Footer } from '@/components/sections/Footer';
import { Providers } from './providers';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Yoko Dev — Desain web & aplikasi konversi tinggi',
  description:
    'Saya menaikkan konversi website & aplikasi Anda. Landing page, redesign, dan design system yang terbukti mendatangkan leads dan penjualan.',
  keywords: ['landing page', 'web development', 'UI/UX', 'Next.js', 'konversi', 'Jakarta'],
  authors: [{ name: 'Yoko Dev' }],
  openGraph: {
    title: 'Yoko Dev — Desain web & aplikasi konversi tinggi',
    description: 'Landing page, redesign, dan design system yang terbukti mendatangkan leads dan penjualan.',
    url: 'https://yoko-landing.vercel.app',
    siteName: 'Yoko Dev',
    locale: 'id_ID',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1B1B1B',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        <Providers>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
