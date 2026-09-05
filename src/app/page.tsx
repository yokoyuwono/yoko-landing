import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { Work } from '@/components/sections/Work';
import { Testimonials } from '@/components/sections/Testimonials';
import { Pricing } from '@/components/sections/Pricing';
import { FAQ } from '@/components/sections/FAQ';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Contact } from '@/components/sections/Contact';
import { CountersBand } from '@/components/sections/Counter';

const stats = [
  { label: '+32% Leads', value: '+32%', context: 'dalam 14 hari setelah peluncuran' },
  { label: '2× Prospek', value: '2x', context: 'pertanyaan masuk dari pasar Eropa' },
  { label: '−80% Admin', value: '-80%', context: 'pengurangan beban kerja' },
  { label: '3–5 Hari', value: '3-5', context: 'pengerjaan landing page' },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <CountersBand stats={stats} />
      <Services />
      <Work />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Contact />
    </>
  );
}