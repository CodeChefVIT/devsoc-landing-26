import { DecorativeBackground, SectionBg } from '@/components/ui';
import Sponsors from '@/components/Sponsors';
import Tracks from '@/components/Tracks';
import Faqs from '@/components/Faqs/FaqSection';
import Timeline from '@/components/Timeline';
import About from '@/components/About';
import Hero from '@/components/hero/hero';

export const dynamic = 'force-static';

export default function Page() {
  return (
    <main className="relative flex flex-col">
      <Hero />

      <DecorativeBackground>
        <section id="about" className="relative">
          <SectionBg src="/images/backgrounds/bg-about.svg" />
          <About />
        </section>

        <section id="tracks" className="relative">
          <SectionBg src="/images/backgrounds/bg-tracks.svg" />
          <Tracks />
        </section>

        <section id="timeline" className="relative">
          <Timeline />
        </section>

        <section id="sponsors" className="relative">
          <SectionBg src="/images/backgrounds/bg-sponsors.svg" />
          <Sponsors />
        </section>

        <section id="faq" className="relative">
          <SectionBg src="/images/backgrounds/bg-faq.svg" opacity="opacity-90" fullWidth />
          <Faqs />
        </section>
      </DecorativeBackground>
    </main>
  );
}
