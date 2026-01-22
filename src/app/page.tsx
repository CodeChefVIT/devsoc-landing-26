import { DecorativeBackground } from '@/components/ui';
import Sponsors from '@/components/Sponsors';
import Tracks from '@/components/Tracks';
import Faqs from '@/components/Faqs/FaqSection';
import Timeline from '@/components/timeline/Timeline';
import About from '@/components/About';
import Hero from '@/components/hero/hero';

export default function Page() {
  return (
    <main>
      <Hero />
      <DecorativeBackground>
        <About />
        <Tracks />
        <Sponsors />
        <Timeline />
        <Faqs />
      </DecorativeBackground>
    </main>
  );
}
