import { DecorativeBackground, SectionBg, SectionSeparator } from '@/components/ui';
import Sponsors from '@/components/Sponsors';
import Speaker from '@/components/Speaker';
import Tracks from '@/components/Tracks';
import Faqs from '@/components/Faqs/FaqSection';
import Timeline from '@/components/Timeline';
import About from '@/components/About';
import Hero from '@/components/Hero/Hero';
import Image from 'next/image';

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

        {/* <SectionSeparator
          imgUrl="/images/backgrounds/bg-about-sep-tracks.svg"
          width={375}
          height={96}
          className="w-1/4 mx-auto md:ml-[25%] md:w-[25%] md:h-auto md:mx-0"
        /> */}

        <section id="tracks" className="relative">
          <SectionBg src="/images/backgrounds/bg-tracks.svg" />
          <Tracks />
        </section>

        <section id="speaker" className="relative">
          <SectionBg src="/images/backgrounds/bg-sponsors.svg" />
          <Speaker />
        </section>

        {/* <SectionSeparator
          imgUrl="/images/backgrounds/bg-about-sep-tracks.svg"
          width={375}
          height={96}
          className="w-1/4 mx-auto md:ml-[25%] md:w-[25%] md:h-auto md:mx-0"
        /> */}

        {/* <SectionSeparator
          imgUrl="/images/backgrounds/bg-tracks-sep-timeline.svg"
          width={375}
          height={96}
          className="w-1/4 mx-auto md:ml-[50%] md:w-[25%] md:h-auto md:mx-0 md:block hidden"
        /> */}

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

        <section id="timeline" className="relative">
          <Timeline />
        </section>

        <section id="sponsors" className="relative">
          <SectionBg src="/images/backgrounds/bg-sponsors.svg" />
          <Sponsors />
        </section>

        <SectionSeparator
          imgUrl="/images/backgrounds/bg-sponsors-sep-faq.svg"
          width={960}
          height={361}
          className="absolute left-[25%] w-[50%] h-auto"
        />

        <section id="faq" className="relative">
          <SectionBg src="/images/backgrounds/bg-faq.svg" opacity="opacity-90" fullWidth />
          <Faqs />
        </section>
      </DecorativeBackground>
    </main>
  );
}
