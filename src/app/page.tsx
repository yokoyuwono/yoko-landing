import { Hero } from '@/components/sections/Hero';
import { Testimonials } from '@/components/sections/Testimonials';
import { Services } from '@/components/sections/Services';
import { Work } from '@/components/sections/Work';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Pricing } from '@/components/sections/Pricing';
import { FAQ } from '@/components/sections/FAQ';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Testimonials />
      <Services />
      <Work />
      <FinalCTA />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </>
  );
}
