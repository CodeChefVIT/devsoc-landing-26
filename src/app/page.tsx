import Link from 'next/link';
import { DecorativeBackground } from '@/components/ui';
import Sponsors from '@/components/Sponsors';
import Tracks from '@/components/Tracks';
import Faqs from '@/components/Faqs/FaqSection';
import Footer from '@/components/Footer/Footer';
import Timeline from '@/components/timeline/Timeline';
import About from '@/components/About';
import Hero from '@/components/hero/hero';

export default function Page() {
  return (
    <main className=" rounded-lg py-10 shadow">
      <Hero />
      {/* Keep hero outside of the decorative-background component */}
      <DecorativeBackground>
        <About />
        <Tracks />
        <Sponsors />
        <Timeline />
        <Faqs />
        <Footer />
      </DecorativeBackground>
    </main>
  );
}
