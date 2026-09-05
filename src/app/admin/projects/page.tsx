'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabaseClient';
import { Button } from '@/components/ui/Button';
import { Input, Textarea } from '@/components/ui/Input';
import { toast } from 'sonner';

type Project = {
  id: string;
  slug: string;
  title: string;
  subtitle: string | null;
  category: string | null;
  description: string | null;
  metrics: unknown[] | null;
  image_url: string | null;
  gallery_urls: string[] | null;
  tags: string[] | null;
  featured: boolean | null;
  created_at: string | null;
};

export default function ProjectsAdmin() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);

  const supabase = createClient();

  const fetchProjects = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast.error('Gagal memuat proyek');
      console.error(error);
    } else {
      setProjects(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('Hapus proyek ini?')) return;
    const { error } = await supabase.from('projects').delete().eq('id', id);
    if (error) toast.error('Gagal menghapus');
    else {
      toast.success('Proyek dihapus');
      setProjects(projects.filter((p) => p.id !== id));
    }
  };

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setShowModal(true);
  };

  const handleCreate = () => {
    setEditingProject(null);
    setShowModal(true);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const payload = {
      slug: formData.get('slug') as string,
      title: formData.get('title') as string,
      subtitle: (formData.get('subtitle') as string) || null,
      category: (formData.get('category') as string) || null,
      description: (formData.get('description') as string) || null,
      image_url: (formData.get('image_url') as string) || null,
      tags: (formData.get('tags') as string)?.split(',').map((t) => t.trim()) || [],
      featured: formData.get('featured') === 'on',
    };

    if (editingProject) {
      const { error } = await (supabase as any)
        .from('projects')
        .update(payload)
        .eq('id', editingProject.id);
      if (error) toast.error('Gagal memperbarui');
      else toast.success('Proyek diperbarui');
    } else {
      const { error } = await (supabase as any)
        .from('projects')
        .insert(payload);
      if (error) toast.error('Gagal menambah');
      else toast.success('Proyek ditambahkan');
    }
    setShowModal(false);
    fetchProjects();
  };

  return (
    <div className="min-h-screen bg-surface-elevated py-12">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-display-md font-semibold text-text">Proyek</h1>
          <Button onClick={handleCreate}>+ Tambah Proyek</Button>
        </div>

        {loading ? (
          <p className="text-text-muted">Memuat...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-line">
                  <th className="text-left py-3 px-4 text-caption text-text-muted font-medium">Judul</th>
                  <th className="text-left py-3 px-4 text-caption text-text-muted font-medium">Slug</th>
                  <th className="text-left py-3 px-4 text-caption text-text-muted font-medium">Kategori</th>
                  <th className="text-left py-3 px-4 text-caption text-text-muted font-medium">Featured</th>
                  <th className="text-right py-3 px-4 text-caption text-text-muted font-medium">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <tr key={project.id} className="border-b border-line/50">
                    <td className="py-3 px-4 text-body text-text">{project.title}</td>
                    <td className="py-3 px-4 text-body-sm text-text-dim">{project.slug}</td>
                    <td className="py-3 px-4 text-body-sm text-text-dim">{project.category || '-'}</td>
                    <td className="py-3 px-4 text-body-sm">{project.featured ? '✓' : '-'}</td>
                    <td className="py-3 px-4 text-right space-x-2">
                      <Button size="sm" variant="ghost" onClick={() => handleEdit(project)}>Edit</Button>
                      <Button size="sm" variant="ghost" onClick={() => handleDelete(project.id)} className="text-red-400">Hapus</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {showModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-surface-elevated border border-line rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <h2 className="text-display-sm font-semibold text-text mb-4">
                {editingProject ? 'Edit Proyek' : 'Tambah Proyek'}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input name="slug" label="Slug" required defaultValue={editingProject?.slug} />
                <Input name="title" label="Judul" required defaultValue={editingProject?.title} />
                <Input name="subtitle" label="Subjudul" defaultValue={editingProject?.subtitle || ''} />
                <Input name="category" label="Kategori" defaultValue={editingProject?.category || ''} />
                <Textarea name="description" label="Deskripsi" rows={4} defaultValue={editingProject?.description || ''} />
                <Input name="image_url" label="URL Gambar" defaultValue={editingProject?.image_url || ''} />
                <Input name="tags" label="Tags (comma-separated)" defaultValue={editingProject?.tags?.join(', ') || ''} />
                <label className="flex items-center gap-2">
                  <input type="checkbox" name="featured" defaultChecked={!!editingProject?.featured} />
                  <span className="text-body-sm text-text-dim">Featured</span>
                </label>
                <div className="flex justify-end gap-2 pt-4">
                  <Button type="button" variant="secondary" onClick={() => setShowModal(false)}>
                    Batal
                  </Button>
                  <Button type="submit">
                    {editingProject ? 'Simpan' : 'Tambah'}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}