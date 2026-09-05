'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabaseClient';
import { Button } from '@/components/ui/Button';
import { Input, Textarea } from '@/components/ui/Input';
import { toast } from 'sonner';

type Testimonial = {
  id: string;
  name: string;
  role: string | null;
  company: string | null;
  quote: string;
  avatar_url: string | null;
  rating: number | null;
  featured: boolean | null;
  created_at: string | null;
};

export default function TestimonialsAdmin() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState<Testimonial | null>(null);

  const supabase = createClient();

  const fetchTestimonials = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('testimonials')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast.error('Gagal memuat testimonial');
      console.error(error);
    } else {
      setTestimonials(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('Hapus testimonial ini?')) return;
    const { error } = await supabase.from('testimonials').delete().eq('id', id);
    if (error) toast.error('Gagal menghapus');
    else {
      toast.success('Testimonial dihapus');
      setTestimonials(testimonials.filter((t) => t.id !== id));
    }
  };

  const handleEdit = (item: Testimonial) => {
    setEditing(item);
    setShowModal(true);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get('name') as string,
      role: (formData.get('role') as string) || null,
      company: (formData.get('company') as string) || null,
      quote: formData.get('quote') as string,
      avatar_url: (formData.get('avatar_url') as string) || null,
      rating: parseInt(formData.get('rating') as string) || 5,
      featured: formData.get('featured') === 'on',
    };

    if (editing) {
      const { error } = await (supabase as any)
        .from('testimonials')
        .update(payload)
        .eq('id', editing.id);
      if (error) toast.error('Gagal memperbarui');
      else toast.success('Testimonial diperbarui');
    } else {
      const { error } = await (supabase as any)
        .from('testimonials')
        .insert(payload);
      if (error) toast.error('Gagal menambah');
      else toast.success('Testimonial ditambahkan');
    }
    setShowModal(false);
    fetchTestimonials();
  };

  return (
    <div className="min-h-screen bg-surface-elevated py-12">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-display-md font-semibold text-text">Testimonial</h1>
          <Button onClick={() => { setEditing(null); setShowModal(true); }}>+ Tambah</Button>
        </div>

        {loading ? (
          <p className="text-text-muted">Memuat...</p>
        ) : (
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-line">
                <th className="text-left py-3 px-4 text-caption text-text-muted">Nama</th>
                <th className="text-left py-3 px-4 text-caption text-text-muted">Quote</th>
                <th className="text-left py-3 px-4 text-caption text-text-muted">Rating</th>
                <th className="text-left py-3 px-4 text-caption text-text-muted">Featured</th>
                <th className="text-right py-3 px-4 text-caption text-text-muted">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {testimonials.map((t) => (
                <tr key={t.id} className="border-b border-line/50">
                  <td className="py-3 px-4 text-body text-text">{t.name}</td>
                  <td className="py-3 px-4 text-body-sm text-text-dim">{t.quote?.slice(0, 60)}...</td>
                  <td className="py-3 px-4 text-body-sm text-text-dim">{t.rating}</td>
                  <td className="py-3 px-4">{t.featured ? '✓' : '-'}</td>
                  <td className="py-3 px-4 text-right space-x-2">
                    <Button size="sm" variant="ghost" onClick={() => handleEdit(t)}>Edit</Button>
                    <Button size="sm" variant="ghost" onClick={() => handleDelete(t.id)} className="text-red-400">Hapus</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {showModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-surface-elevated border border-line rounded-xl p-6 max-w-2xl w-full">
              <h2 className="text-display-sm font-semibold text-text mb-4">
                {editing ? 'Edit Testimonial' : 'Tambah Testimonial'}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input name="name" label="Nama" required defaultValue={editing?.name} />
                <Input name="role" label="Peran" defaultValue={editing?.role || ''} />
                <Input name="company" label="Perusahaan" defaultValue={editing?.company || ''} />
                <Textarea name="quote" label="Quote" rows={3} required defaultValue={editing?.quote} />
                <Input name="avatar_url" label="URL Avatar" defaultValue={editing?.avatar_url || ''} />
                <Input name="rating" label="Rating (1-5)" type="number" min={1} max={5} defaultValue={editing?.rating || 5} />
                <label className="flex items-center gap-2">
                  <input type="checkbox" name="featured" defaultChecked={!!editing?.featured} />
                  <span className="text-body-sm text-text-dim">Featured</span>
                </label>
                <div className="flex justify-end gap-2 pt-4">
                  <Button type="button" variant="secondary" onClick={() => setShowModal(false)}>Batal</Button>
                  <Button type="submit">{editing ? 'Simpan' : 'Tambah'}</Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}