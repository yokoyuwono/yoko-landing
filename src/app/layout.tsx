import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/sections/Navigation';
import { Footer } from '@/components/sections/Footer';
import { Providers } from './providers';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Yoko Dev — High-converting websites & apps',
  description: 'I help startups and companies build landing pages, websites, and applications that are not only visually striking — but proven to drive leads and revenue.',
  keywords: ['landing page', 'web development', 'UI/UX', 'Next.js', 'Supabase', 'Jakarta', 'conversion'],
  authors: [{ name: 'Yoko Dev' }],
  openGraph: {
    title: 'Yoko Dev — High-converting websites & apps',
    description: 'Landing pages, websites, and applications designed for conversion and revenue growth.',
    url: 'https://yoko-landing.vercel.app',
    siteName: 'Yoko Dev',
    locale: 'id_ID',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-surface text-text`}
      >
        <Providers>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}