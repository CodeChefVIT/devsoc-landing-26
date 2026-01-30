import Image from 'next/image';
import { SectionHeading } from '@/components/ui';

export default function About() {
  return (
    <div id="about" className="relative text-white">
      <Image
        src="/images/backgrounds/bg-about-art.svg"
        width={201}
        height={481}
        alt=""
        aria-hidden="true"
        className="block pointer-events-none absolute -top-16 lg:top-1/2 left-[75%] -translate-x-1/2 lg:-translate-y-1/2 z-0 w-[15vw]"
        draggable="false"
        loading="lazy"
      />

      <Image
        src="/images/backgrounds/bg-phone-art.svg"
        width={201}
        height={1497}
        alt=""
        aria-hidden="true"
        className="block lg:hidden pointer-events-none absolute top-[70%] left-[25%] -translate-x-1/2 -translate-y-1/2 z-0 w-[15vw]"
        draggable="false"
        loading="lazy"
      />

      <SectionHeading
        title="About"
        className="hidden lg:block absolute top-1/2 left-[76%] -translate-x-1/2 z-40"
      />

      <div className="mx-auto max-w-7xl px-6">
        <div className="block lg:hidden space-y-6 sm:space-y-10">
          <div className="flex justify-end">
            <SectionHeading title="About" />
          </div>

          <div className="space-y-4">
            <Image
              src="/images/about/about-1.avif"
              alt=""
              width={187}
              height={116}
              className="w-full max-w-40 sm:max-w-55 h-auto rounded-2xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] transition-transform duration-300 ease-out hover:scale-105"
              draggable="false"
              loading="lazy"
            />
            <p className="max-w-[20rem] sm:max-w-[24rem] font-lato text-base sm:text-lg leading-relaxed text-white">
              DEVSOC’26 ignites innovation in its seventh edition blending AI and the metaverse to
              solve real-world challenges.
            </p>
          </div>

          <div className="space-y-4 ml-auto text-right">
            <Image
              src="/images/about/about-2.avif"
              alt=""
              width={213}
              height={145}
              className="w-full max-w-50 sm:max-w-62.5 h-auto rounded-2xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] ml-auto transition-transform duration-300 ease-out hover:scale-105"
              draggable="false"
              loading="lazy"
            />
            <p className="max-w-[20rem] sm:max-w-[24rem] font-lato text-base sm:text-lg leading-relaxed text-white ml-auto">
              Bringing together diverse minds, we go beyond coding to build bold solutions that
              redefine what’s possible.
            </p>
          </div>

          <Image
            src="/images/about/about-3.avif"
            alt=""
            width={164}
            height={105}
            className="w-full max-w-35 sm:max-w-47.5 h-auto rounded-2xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] transition-transform duration-300 ease-out hover:scale-105"
            draggable="false"
            loading="lazy"
          />
        </div>

        <div className="hidden lg:grid lg:grid-cols-2 gap-16">
          <div className="relative h-140">
            <div className="absolute left-0 top-0 z-10">
              <div className="rounded-3xl shadow-[0px_2px_8px_rgba(0,0,0,0.25)] transition-transform duration-300 ease-out hover:scale-105">
                <Image
                  src="/images/about/about-1.avif"
                  alt=""
                  width={512}
                  height={318}
                  className="w-full max-w-75 h-auto object-cover"
                  draggable="false"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="absolute left-65 top-25 z-20 w-107.5">
              <div className="rounded-3xl shadow-[0px_4px_16px_rgba(0,0,0,0.35)] transition-transform duration-300 ease-out hover:scale-105">
                <Image
                  src="/images/about/about-2.avif"
                  alt=""
                  width={613}
                  height={425}
                  className="w-full h-auto object-cover"
                  draggable="false"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="absolute left-10 top-90 z-0">
              <div className="rounded-3xl shadow-[0px_2px_8px_rgba(0,0,0,0.25)] transition-transform duration-300 ease-out hover:scale-105">
                <Image
                  src="/images/about/about-3.avif"
                  alt=""
                  width={449}
                  height={286}
                  className="w-full max-w-70 h-auto object-cover"
                  draggable="false"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end text-right justify-end lg:pl-[22%] relative z-10 h-140">
            <div
              className="
                  w-160
                  text-right
                  font-lato
                  text-base
                  sm:text-lg
                  leading-relaxed
                  text-white
                "
            >
              <div className="text-right">
                DEVSOC’26 ignites innovation in its seventh edition blending AI and the metaverse to
                solve real-world challenges. Bringing together diverse minds, we go beyond coding to
                build bold solutions that redefine what’s possible.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
