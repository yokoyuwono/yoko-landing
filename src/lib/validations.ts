import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Nama minimal 2 karakter'),
  email: z.string().email('Email tidak valid'),
  subject: z.string().optional(),
  message: z.string().min(10, 'Pesan minimal 10 karakter'),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const projectSchema = z.object({
  slug: z.string().min(2, 'Slug minimal 2 karakter'),
  title: z.string().min(2, 'Judul minimal 2 karakter'),
  subtitle: z.string().optional(),
  category: z.string().optional(),
  description: z.string().optional(),
  metrics: z.array(z.any()).optional(),
  image_url: z.string().url('URL tidak valid').optional().nullable(),
  gallery_urls: z.array(z.string()).optional(),
  tags: z.array(z.string()).optional(),
  featured: z.boolean().default(false),
});

export type ProjectFormData = z.infer<typeof projectSchema>;

export const testimonialSchema = z.object({
  name: z.string().min(2, 'Nama minimal 2 karakter'),
  role: z.string().optional(),
  company: z.string().optional(),
  quote: z.string().min(10, 'Quote minimal 10 karakter'),
  avatar_url: z.string().url('URL tidak valid').optional().nullable(),
  rating: z.number().min(1).max(5).default(5),
  featured: z.boolean().default(false),
});

export type TestimonialFormData = z.infer<typeof testimonialSchema>;