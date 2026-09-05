// Placeholder - generated from Supabase CLI
// Run: npx supabase gen types typescript --project-id <id> > src/types/supabase.ts

export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

interface ProjectRow {
  id: string;
  slug: string;
  title: string;
  subtitle: string | null;
  category: string | null;
  description: string | null;
  metrics: Json[] | null;
  image_url: string | null;
  gallery_urls: string[] | null;
  tags: string[] | null;
  featured: boolean | null;
  created_at: string | null;
  updated_at: string | null;
}

interface TestimonialRow {
  id: string;
  name: string;
  role: string | null;
  company: string | null;
  quote: string;
  avatar_url: string | null;
  rating: number | null;
  featured: boolean | null;
  created_at: string | null;
}

interface ContactMessageRow {
  id: string;
  name: string;
  email: string;
  subject: string | null;
  message: string;
  status: string | null;
  created_at: string | null;
}

interface AdminUserRow {
  id: string;
  user_id: string;
  created_at: string | null;
}

export type Database = {
  public: {
    Tables: {
      projects: {
        Row: ProjectRow;
        Insert: Partial<ProjectRow>;
        Update: Partial<ProjectRow>;
      };
      testimonials: {
        Row: TestimonialRow;
        Insert: Partial<TestimonialRow>;
        Update: Partial<TestimonialRow>;
      };
      contact_messages: {
        Row: ContactMessageRow;
        Insert: Partial<ContactMessageRow>;
        Update: Partial<ContactMessageRow>;
      };
      admin_users: {
        Row: AdminUserRow;
        Insert: Partial<AdminUserRow>;
        Update: Partial<AdminUserRow>;
      };
    };
  };
};