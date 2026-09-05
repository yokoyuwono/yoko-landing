-- =============================================
-- YOKO DEV - SUPABASE SCHEMA
-- Run this in Supabase SQL Editor
-- =============================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =============================================
-- PROJECTS TABLE (Portfolio)
-- =============================================
CREATE TABLE IF NOT EXISTS public.projects (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  subtitle TEXT,
  category TEXT,
  description TEXT,
  metrics JSONB DEFAULT '[]'::jsonb,
  image_url TEXT,
  gallery_urls TEXT[] DEFAULT '{}',
  tags TEXT[] DEFAULT '{}',
  featured BOOLEAN DEFAULT FALSE,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_projects_slug ON public.projects(slug);
CREATE INDEX IF NOT EXISTS idx_projects_featured ON public.projects(featured);
CREATE INDEX IF NOT EXISTS idx_projects_sort ON public.projects(sort_order);

-- =============================================
-- TESTIMONIALS TABLE
-- =============================================
CREATE TABLE IF NOT EXISTS public.testimonials (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT,
  company TEXT,
  quote TEXT NOT NULL,
  avatar_url TEXT,
  rating INT DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  featured BOOLEAN DEFAULT FALSE,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_testimonials_featured ON public.testimonials(featured);
CREATE INDEX IF NOT EXISTS idx_testimonials_sort ON public.testimonials(sort_order);

-- =============================================
-- CONTACT MESSAGES TABLE
-- =============================================
CREATE TABLE IF NOT EXISTS public.contact_messages (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied', 'archived')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_contact_status ON public.contact_messages(status);
CREATE INDEX IF NOT EXISTS idx_contact_created ON public.contact_messages(created_at DESC);

-- =============================================
-- ADMIN USERS TABLE (for protected admin area)
-- =============================================
CREATE TABLE IF NOT EXISTS public.admin_users (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  role TEXT DEFAULT 'admin' CHECK (role IN ('admin', 'editor')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_admin_user_id ON public.admin_users(user_id);

-- =============================================
-- ROW LEVEL SECURITY (RLS)
-- =============================================

-- Enable RLS on all tables
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- PUBLIC READ policies
CREATE POLICY "Public read projects" ON public.projects
  FOR SELECT USING (true);

CREATE POLICY "Public read testimonials" ON public.testimonials
  FOR SELECT USING (true);

-- Public can INSERT contact messages
CREATE POLICY "Public insert contact" ON public.contact_messages
  FOR INSERT WITH CHECK (true);

-- ADMIN policies (service role bypasses RLS, but we also allow authenticated admins)
CREATE POLICY "Admin full access projects" ON public.projects
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.admin_users
      WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Admin full access testimonials" ON public.testimonials
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.admin_users
      WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Admin read contact" ON public.contact_messages
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.admin_users
      WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Admin update contact" ON public.contact_messages
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM public.admin_users
      WHERE user_id = auth.uid()
    )
  );

-- =============================================
-- HELPER FUNCTIONS
-- =============================================

-- Auto-update updated_at
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

CREATE TRIGGER trigger_projects_updated_at
  BEFORE UPDATE ON public.projects
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER trigger_testimonials_updated_at
  BEFORE UPDATE ON public.testimonials
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER trigger_contact_updated_at
  BEFORE UPDATE ON public.contact_messages
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER trigger_admin_updated_at
  BEFORE UPDATE ON public.admin_users
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

-- =============================================
-- SEED DATA (Optional - run after creating admin user)
-- =============================================
-- INSERT INTO public.projects (slug, title, subtitle, category, description, metrics, tags, featured, sort_order) VALUES
-- ('beautybrand-id', 'BeautyBrand ID', 'Kampanye Merek Kecantikan', 'UI/UX + No-code', 'Merapikan alur pengguna, memperjelas proposisi nilai, dan mengoptimalkan CTA untuk mengubah pengunjung menjadi pembelian chat yang terukur.', '[{"label": "+32% Leads", "value": "+32%", "context": "dalam 14 hari setelah peluncuran"}]', '{"UI/UX", "No-code", "Konversi"}', true, 1),
-- ('indomanufacture', 'IndoManufacture', 'Rebrand Manufaktur B2B', 'Full-stack Dev', 'Mengubah citra industri lama menjadi kehadiran digital yang modern dan tepercaya — sesuai standar klien global dari Eropa.', '[{"label": "2x Prospek", "value": "2x", "context": "pertanyaan masuk dari pasar Eropa"}]', '{"Full-stack", "Rebrand", "B2B"}', true, 2),
-- ('arena-sport', 'Arena Sport', 'Sistem Pemesanan Tempat Olahraga', 'Arsitek Sistem', 'Mengganti obrolan WhatsApp yang kacau dengan sistem pemesanan digital: kalender real-time, pembayaran otomatis, dan dashboard admin.', '[{"label": "-80% Admin", "value": "-80%", "context": "pengurangan beban kerja"}]', '{"Sistem", "Otomatisasi", "Dashboard"}', true, 3);