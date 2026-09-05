import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { testimonialSchema } from '@/lib/validations';
import { createServiceClient } from '@/lib/supabase';

export async function GET(request: NextRequest) {
  try {
    const supabase = await createServiceClient();
    const { data, error } = await supabase
      .from('testimonials')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;

    return NextResponse.json(data);
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Gagal mengambil testimonial' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = testimonialSchema.safeParse(body);

    if (!validated.success) {
      return NextResponse.json(
        { error: 'Validasi gagal', details: validated.error.errors },
        { status: 400 }
      );
    }

    const supabase = await createServiceClient();

    const { data, error } = await supabase
      .from('testimonials')
      .insert({
        ...validated.data,
        featured: validated.data.featured ?? false,
        rating: validated.data.rating ?? 5,
      })
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json(data);
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Gagal menambah testimonial' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, ...rest } = body;

    if (!id) {
      return NextResponse.json({ error: 'ID diperlukan' }, { status: 400 });
    }

    const supabase = await createServiceClient();
    const { data, error } = await supabase
      .from('testimonials')
      .update(rest)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json(data);
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Gagal memperbarui testimonial' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'ID diperlukan' }, { status: 400 });
    }

    const supabase = await createServiceClient();
    const { error } = await supabase
      .from('testimonials')
      .delete()
      .eq('id', id);

    if (error) throw error;

    return NextResponse.json({ message: 'Testimonial berhasil dihapus' });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Gagal menghapus testimonial' },
      { status: 500 }
    );
  }
}