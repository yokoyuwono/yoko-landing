import * as React from 'react';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-14 bg-ink pb-10 pt-[70px] text-center">
      <div className="container-custom">
        <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-[#8D8D8D]">
          Ada pertanyaan? Hubungi saya
        </p>
        <a
          href="mailto:hello@yoko.dev"
          className="mt-6 inline-block text-white transition-colors hover:text-lime"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(30px, 6.4vw, 72px)', letterSpacing: '-2.6px', lineHeight: 1.05 }}
        >
          hello@yoko.dev
        </a>

        <div className="mx-auto mt-10 flex max-w-[1100px] flex-col items-center justify-between gap-5 border-t border-white/12 pt-8 md:flex-row">
          <p className="text-[13px] text-white/40">© {year} Yoko Dev. Semua hak dilindungi.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-white/40">
            <a href="#testimonials" className="hover:text-white">Testimoni</a>
            <a href="#why" className="hover:text-white">Mengapa Saya</a>
            <a href="#projects" className="hover:text-white">Proyek</a>
            <a href="#pricing" className="hover:text-white">Harga</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </div>
          <p className="text-[13px] text-white/40">
            Made in <span className="text-white/60">🇮🇩</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
