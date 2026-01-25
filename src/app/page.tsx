import { DecorativeBackground, SectionBg } from '@/components/ui';
import Sponsors from '@/components/Sponsors';
import Tracks from '@/components/Tracks';
import Faqs from '@/components/Faqs/FaqSection';
import Timeline from '@/components/timeline/Timeline';
import About from '@/components/About';
import Hero from '@/components/Hero/Hero';

export const dynamic = 'force-static';

export default function Page() {
  return (
    <main className="relative flex flex-col gap-30">
      <Hero />
      <DecorativeBackground>
        <section id="about-section" className="relative overflow-hidden pb-32 md:pb-48 lg:pb-64">
          <SectionBg src="/images/backgrounds/bg-about.svg" />
          <About />
        </section>

        <section
          id="tracks-section"
          className="relative -mt-32 overflow-visible pb-32 md:-mt-48 md:pb-48 lg:-mt-64 lg:pb-64"
        >
          <SectionBg src="/images/backgrounds/bg-tracks.svg" />
          <Tracks />
        </section>

        <section className="relative -mt-32 overflow-hidden pb-32 md:-mt-48 md:pb-48 lg:-mt-64 lg:pb-64">
          <Timeline />
        </section>

        <section
          id="sponsors-section"
          className="relative -mt-32 overflow-hidden pb-24 md:-mt-32 md:pb-32 lg:-mt-48 lg:pb-48"
        >
          <SectionBg src="/images/backgrounds/bg-sponsors.svg" />
          <Sponsors />
        </section>

        <section id="faqs-section" className="relative -mt-32 overflow-hidden md:-mt-48 lg:-mt-64">
          <SectionBg src="/images/backgrounds/bg-faq.svg" opacity="opacity-90" fullWidth />
          <Faqs />
        </section>
      </DecorativeBackground>
    </main>
  );
}
