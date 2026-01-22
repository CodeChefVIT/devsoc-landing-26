import Image from 'next/image';
import { SectionHeading } from '@/components/ui';

export default function About() {
  return (
    <section id="about" className="relative py-60 lg:py-60 text-white bg-transparent">
      <div className="mx-auto max-w-7xl px-6">
        <div className="block lg:hidden space-y-10">
          <div className="flex justify-end">
            <SectionHeading title="About" />
          </div>

          <div className="space-y-4">
            <Image
              src="/about/1.png"
              alt=""
              width={187}
              height={116}
              className="w-full max-w-[220px] h-auto rounded-2xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] transition-transform duration-300 ease-out hover:scale-105"
            />
            <p className="max-w-[24rem] font-lato text-base sm:text-lg leading-relaxed text-white">
              DEVSOC’26 ignites innovation in its seventh edition blending AI and the metaverse to
              solve real-world challenges.
            </p>
          </div>

          <div className="space-y-4 ml-auto text-right">
            <Image
              src="/about/2.png"
              alt=""
              width={213}
              height={145}
              className="w-full max-w-[250px] h-auto rounded-2xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] ml-auto transition-transform duration-300 ease-out hover:scale-105"
            />
            <p className="max-w-[24rem] font-lato text-base sm:text-lg leading-relaxed text-white ml-auto">
              Bringing together diverse minds, we go beyond coding to build bold solutions that
              redefine what’s possible.
            </p>
          </div>

          <Image
            src="/about/3.png"
            alt=""
            width={164}
            height={105}
            className="w-full max-w-[190px] h-auto rounded-2xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] transition-transform duration-300 ease-out hover:scale-105"
          />
        </div>

        <div className="hidden lg:grid lg:grid-cols-2 gap-16">
          <div className="relative h-[560px]">
            <div className="absolute left-0 top-0 z-10">
              <div className="overflow-hidden rounded-3xl shadow-[0px_2px_8px_rgba(0,0,0,0.25)] transition-transform duration-300 ease-out hover:scale-105">
                <Image
                  src="/about/1.png"
                  alt=""
                  width={512}
                  height={318}
                  className="w-full max-w-[300px] h-auto object-cover"
                  priority
                />
              </div>
            </div>

            <div className="absolute left-[260px] top-[100px] z-20 w-[430px]">
              <div className="overflow-hidden rounded-3xl shadow-[0px_4px_16px_rgba(0,0,0,0.35)] transition-transform duration-300 ease-out hover:scale-105">
                <Image
                  src="/about/2.png"
                  alt=""
                  width={613}
                  height={425}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="absolute left-10 top-[360px] z-0">
              <div className="overflow-hidden rounded-3xl shadow-[0px_2px_8px_rgba(0,0,0,0.25)] transition-transform duration-300 ease-out hover:scale-105">
                <Image
                  src="/about/3.png"
                  alt=""
                  width={449}
                  height={286}
                  className="w-full max-w-[280px] h-auto object-cover"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end text-right justify-center">
            <div className="translate-y-[120px]">
              <SectionHeading title="About" />
            </div>

            <div
              className="
                w-[880px]
                text-right
                font-lato
                text-base
                sm:text-lg
                leading-relaxed
                text-white
                translate-y-[140px]
              "
            >
              <div className="whitespace-nowrap">
                DEVSOC’26 ignites innovation in its seventh edition blending AI and the
              </div>
              <div className="whitespace-nowrap">
                metaverse to solve real-world challenges. Bringing together diverse minds, we go
              </div>
              <div className="whitespace-nowrap">
                beyond coding to build bold solutions that redefine what’s possible.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
