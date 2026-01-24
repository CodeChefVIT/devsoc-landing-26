import Image from 'next/image';
import { DecorativeBackground } from '@/components/ui';
import Sponsors from '@/components/Sponsors';
import Tracks from '@/components/Tracks';
import Faqs from '@/components/Faqs/FaqSection';
import Timeline from '@/components/timeline/Timeline';
import About from '@/components/About';
import Hero from '@/components/hero/hero';

export const dynamic = 'force-static';

function SectionBg({
  src,
  opacity = 'opacity-100',
  fullWidth = false,
}: {
  src: string;
  opacity?: string;
  fullWidth?: boolean;
}) {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
      <div
        className={`relative h-full ${
          fullWidth ? 'w-screen' : 'w-[140vw] md:w-[130vw] lg:w-[120vw]'
        }`}
      >
        <Image src={src} alt="" fill priority className={`object-fill scale-110 ${opacity}`} />
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <main className="relative flex flex-col gap-30">
      <Hero />

      <DecorativeBackground>
        {/* ABOUT */}
        <section id="about-section" className="relative overflow-hidden pb-32 md:pb-48 lg:pb-64">
          <SectionBg src="/images/backgrounds/bg-about.svg" />
          <div className="relative z-10">
            <About />
          </div>
        </section>

        {/* TRACKS */}
        <section
          id="tracks-section"
          className="relative -mt-32 overflow-hidden pb-32 md:-mt-48 md:pb-48 lg:-mt-64 lg:pb-64"
        >
          <SectionBg src="/images/backgrounds/bg-tracks.svg" />
          <div className="relative z-10">
            <Tracks />
          </div>
        </section>

        {/* TIMELINE */}
        <section className="relative -mt-32 overflow-hidden pb-32 md:-mt-48 md:pb-48 lg:-mt-64 lg:pb-64">
          <Timeline />
        </section>

        {/* SPONSORS */}
        <section
          id="sponsors-section"
          className="relative -mt-32 overflow-hidden pb-32 md:-mt-48 md:pb-48 lg:-mt-64 lg:pb-64"
        >
          <SectionBg src="/images/backgrounds/bg-sponsors.svg" />
          <div className="relative z-10">
            <Sponsors />
          </div>
        </section>

        {/* FAQ — FULL SCREEN WIDTH */}
        <section id="faqs-section" className="relative -mt-32 overflow-hidden md:-mt-48 lg:-mt-64">
          <SectionBg src="/images/backgrounds/bg-faq.svg" opacity="opacity-90" fullWidth />
          <div className="relative z-10">
            <Faqs />
          </div>
        </section>
      </DecorativeBackground>
    </main>
  );
}
