import Image from 'next/image';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Tracks from '@/components/Tracks';
import Speakers from '@/components/Speakers';
import Timeline from '@/components/Timeline';
import Sponsors from '@/components/Sponsors';
import Faqs from '@/components/FAQ';
import { DecorativeBackground, SectionBg, SectionSeparator } from '@/components/ui';

export const dynamic = 'force-static';

export default function Page() {
  const src = '/images/backgrounds/bg-faq.svg';
  return (
    <main className="relative flex flex-col">
      <Hero />

      <DecorativeBackground>
        <section id="about" className="relative">
          {/* <SectionBg src="/images/backgrounds/bg-about.svg" /> */}
          <About />
        </section>

        <SectionSeparator
          imgUrl="/images/backgrounds/bg-about-sep-tracks.svg"
          width={375}
          height={96}
          className="w-1/4 mx-auto md:ml-[25%] md:w-[25%] md:h-auto md:mx-0 hidden md:block"
        />

        <section id="tracks" className="relative">
          <SectionBg src="/images/backgrounds/bg-tracks.svg" />
          <Tracks />
        </section>

        <SectionSeparator
          imgUrl="/images/backgrounds/bg-tracks-sep-speakers.svg"
          width={375}
          height={96}
          className="w-1/4 mx-auto md:ml-[50%] md:w-[25%] md:h-auto md:mx-0 md:block hidden"
        />

        <section id="speaker" className="relative">
          <SectionBg src="/images/backgrounds/bg-sponsors.svg" />
          <Speakers />
        </section>

        <SectionSeparator
          imgUrl="/images/backgrounds/bg-speakers-sep-timeline.svg"
          width={375}
          height={96}
          className="w-1/4 mx-auto md:ml-[25%] md:w-[25%] md:h-auto md:mx-0 hidden md:block"
        />

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
          className="absolute left-[25%] w-[50%] h-auto md:block hidden"
        />

        <section id="faq" className="relative">
          <div className="pointer-events-none fixed inset-0 -z-10">
            <div className="relative h-screen w-screen">
              <Image
                src={src}
                alt=""
                fill
                className="object-cover scale-110 opacity-90"
                draggable="false"
                loading="lazy"
              />
            </div>
          </div>
          <Faqs />
        </section>
      </DecorativeBackground>
    </main>
  );
}
