import { createServerClient } from '@supabase/ssr';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { contactSchema } from '@/lib/validations';
import { createServiceClient } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = contactSchema.safeParse(body);

    if (!validated.success) {
      return NextResponse.json(
        { error: 'Validasi gagal', details: validated.error.errors },
        { status: 400 }
      );
    }

    const supabase = await createServiceClient();

    const { error } = await supabase
      .from('contact_messages')
      .insert({
        name: validated.data.name,
        email: validated.data.email,
        subject: validated.data.subject,
        message: validated.data.message,
        status: 'new',
      });

    if (error) {
      console.error('Database error:', error);
      return NextResponse.json(
        { error: 'Gagal menyimpan pesan' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Pesan berhasil terkirim' },
      { status: 200 }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan' },
      { status: 500 }
    );
  }
}