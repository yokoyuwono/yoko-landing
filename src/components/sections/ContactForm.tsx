'use client';

import * as React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, type ContactFormData } from '@/lib/validations';
import { Button } from '@/components/ui/Button';
import { Textarea } from '@/components/ui/Input';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitSuccess(false);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || 'Gagal mengirim pesan');
      }

      toast.success('Pesan terkirim! Saya akan menghubungi Anda dalam 24 jam.');
      setSubmitSuccess(true);
      reset();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Terjadi kesalahan';
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto max-w-xl space-y-6"
      aria-label="Form kontak"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label
            htmlFor="name"
            className={cn(
              'block text-sm font-medium text-text-muted mb-2',
              errors.name && 'text-red-400'
            )}
          >
            Nama
          </label>
          <input
            id="name"
            type="text"
            placeholder="Nama lengkap Anda"
            className={cn(
              'w-full rounded-lg border bg-surface-elevated border-line px-4 py-3 text-body text-text placeholder:text-text-dim transition-colors focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/20',
              errors.name && 'border-red-400 focus:border-red-400 focus:ring-red-400/20'
            )}
            {...register('name')}
            aria-invalid={errors.name ? 'true' : 'false'}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-caption text-red-400">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="email"
            className={cn(
              'block text-sm font-medium text-text-muted mb-2',
              errors.email && 'text-red-400'
            )}
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="nama@email.com"
            className={cn(
              'w-full rounded-lg border bg-surface-elevated border-line px-4 py-3 text-body text-text placeholder:text-text-dim transition-colors focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/20',
              errors.email && 'border-red-400 focus:border-red-400 focus:ring-red-400/20'
            )}
            {...register('email')}
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-caption text-red-400">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="subject" className="block text-sm font-medium text-text-muted mb-2">
            Subjek
          </label>
          <input
            id="subject"
            type="text"
            placeholder="Apa yang bisa saya bantu?"
            className="w-full rounded-lg border bg-surface-elevated border-line px-4 py-3 text-body text-text placeholder:text-text-dim transition-colors focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/20"
            {...register('subject')}
          />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className={cn(
              'block text-sm font-medium text-text-muted mb-2',
              errors.message && 'text-red-400'
            )}
          >
            Pesan
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Ceritakan tentang proyek Anda..."
            className={cn(
              'w-full rounded-lg border bg-surface-elevated border-line px-4 py-3 text-body text-text placeholder:text-text-dim transition-colors focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/20 resize-y',
              errors.message && 'border-red-400 focus:border-red-400 focus:ring-red-400/20'
            )}
            {...register('message')}
            aria-invalid={errors.message ? 'true' : 'false'}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && (
            <p id="message-error" className="mt-1 text-caption text-red-400">
              {errors.message.message}
            </p>
          )}
        </div>
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        fullWidth
        loading={isSubmitting}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Mengirim...' : submitSuccess ? 'Terkirim! 🎉' : 'Kirim Pesan'}
      </Button>

      {submitSuccess && (
        <p className="text-center text-caption text-green-400 animate-fade-in">
          ✓ Pesan Anda telah terkirim. Saya akan menghubungi Anda segeri.
        </p>
      )}
    </form>
  );
}