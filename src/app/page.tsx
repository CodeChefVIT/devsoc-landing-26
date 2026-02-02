'use client';

import Image from 'next/image';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Tracks from '@/components/Tracks';
import Speakers from '@/components/Speakers';
import Timeline from '@/components/Timeline';
import Sponsors from '@/components/Sponsors';
import Faqs from '@/components/FAQ';
import { DecorativeBackground, SectionBg, SectionSeparator, LazyLoad } from '@/components/ui';

export default function Page() {
  return (
    <main className="relative flex flex-col">
      {/* Hero loads immediately with high priority */}
      <Hero />

      <DecorativeBackground>
        {/* About section - lazy load */}
        <LazyLoad fallback={<div className="min-h-screen" />}>
          <section id="about" className="relative">
            <SectionBg src="/images/backgrounds/bg-about.svg" />
            <About />
          </section>
        </LazyLoad>

        <LazyLoad fallback={null}>
          <SectionSeparator
            imgUrl="/images/backgrounds/bg-about-sep-tracks.svg"
            width={375}
            height={96}
            className="w-1/4 mx-auto md:ml-[25%] md:w-[25%] md:h-auto md:mx-0 hidden md:block"
          />
        </LazyLoad>

        {/* Tracks section - lazy load */}
        <LazyLoad fallback={<div className="min-h-screen" />}>
          <section id="tracks" className="relative">
            <SectionBg src="/images/backgrounds/bg-tracks.svg" />
            <Tracks />
          </section>
        </LazyLoad>

        <LazyLoad fallback={null}>
          <SectionSeparator
            imgUrl="/images/backgrounds/bg-tracks-sep-speakers.svg"
            width={375}
            height={96}
            className="w-1/4 mx-auto md:ml-[50%] md:w-[25%] md:h-auto md:mx-0 md:block hidden"
          />
        </LazyLoad>

        {/* Speakers section - lazy load */}
        <LazyLoad fallback={<div className="min-h-screen" />}>
          <section id="speaker" className="relative">
            <SectionBg src="/images/backgrounds/bg-sponsors.svg" />
            <Speakers />
          </section>
        </LazyLoad>

        <LazyLoad fallback={null}>
          <SectionSeparator
            imgUrl="/images/backgrounds/bg-speakers-sep-timeline.svg"
            width={375}
            height={96}
            className="w-1/4 mx-auto md:ml-[25%] md:w-[25%] md:h-auto md:mx-0 hidden md:block"
          />
        </LazyLoad>

        <div className="relative block lg:hidden">
          <Image
            src="/images/backgrounds/bg-phone-art.svg"
            width={201}
            height={1497}
            alt=""
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-x-0
              top-[-20vh]
              mx-auto
              -z-10
              w-[15vw]
            "
          />
        </div>

        {/* Timeline section - lazy load */}
        <LazyLoad fallback={<div className="min-h-screen" />}>
          <section id="timeline" className="relative">
            <Timeline />
          </section>
        </LazyLoad>

        {/* Sponsors section - lazy load */}
        <LazyLoad fallback={<div className="min-h-screen" />}>
          <section id="sponsors" className="relative">
            <SectionBg src="/images/backgrounds/bg-sponsors.svg" />
            <Sponsors />
          </section>
        </LazyLoad>

        <LazyLoad fallback={null}>
          <SectionSeparator
            imgUrl="/images/backgrounds/bg-sponsors-sep-faq.svg"
            width={960}
            height={361}
            className="absolute left-[25%] w-[50%] h-auto md:block hidden"
          />
        </LazyLoad>

        {/* FAQ section - lazy load */}
        <LazyLoad fallback={<div className="min-h-screen" />}>
          <section id="faq" className="relative">
            <SectionBg src="/images/backgrounds/bg-faq.svg" opacity="opacity-90" fullWidth />
            <Faqs />
          </section>
        </LazyLoad>
      </DecorativeBackground>
    </main>
  );
}
