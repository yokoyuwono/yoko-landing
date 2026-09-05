'use client';

import * as React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { createBrowserClient } from '@supabase/ssr';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

export default function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ redirectTo?: string }>;
}) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setLoading(true);

    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    const { data, error: err } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/admin/callback`,
      },
    });

    if (err) {
      setError(err.message);
      setLoading(false);
      return;
    }

    setMessage('Link magic link sudah dikirim ke email Anda. Silakan cek inbox.');
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-surface">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-10">
          <Link href="/" className="inline-flex items-center gap-2 font-display font-bold text-xl tracking-tight mb-8">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-teal text-brand-teal-ink text-base font-black">
              Y
            </span>
            <span>Yoko&nbsp;Dev</span>
          </Link>
          <h1 className="text-display-md font-semibold tracking-tight">Masuk Admin</h1>
          <p className="mt-2 text-text-muted text-body-sm">Masuk dengan magic link email</p>
        </div>

        <div className="bg-surface-elevated border border-line rounded-card p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@domain.com"
              required
              autoComplete="email"
              disabled={loading}
            />

            {error && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-caption text-center"
                role="alert"
              >
                {error}
              </motion.p>
            )}

            {message && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-emerald-500 text-caption text-center"
              >
                {message}
              </motion.p>
            )}

            <Button type="submit" fullWidth size="lg" loading={loading}>
              Kirim Magic Link
            </Button>
          </form>

          <p className="mt-6 text-center text-caption text-text-dim">
            Link magic link akan dikirim ke email Anda. Link berlaku selama 1 jam.
          </p>
        </div>

        <p className="mt-6 text-center text-caption text-text-dim">
          <Link href="/" className="text-brand-teal hover:underline">
            ← Kembali ke Beranda
          </Link>
        </p>
      </motion.div>
    </div>
  );
}