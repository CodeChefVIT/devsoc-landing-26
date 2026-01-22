import Image from 'next/image';

export default function About() {
  return (
    <div id="about" className="relative py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="relative h-130 mt-20">
            <div className="absolute left-0 -top-28 -translate-x-10">
              <Image
                src="/about/1.png"
                alt=""
                width={401}
                height={168}
                className="rounded-xl object-cover"
                priority
              />
            </div>

            <div className="absolute left-30 top-18 translate-x-50 z-10">
              <Image
                src="/about/2.png"
                alt=""
                width={450}
                height={288}
                className="rounded-xl object-cover"
              />
            </div>

            <div className="absolute left-0 top-85 -translate-x-10">
              <Image
                src="/about/3.png"
                alt=""
                width={410}
                height={246}
                className="rounded-xl object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col items-end text-right justify-center">
            <h1
              className="
                font-spline-sans-mono
                text-[56px]
                md:text-[80px]
                lg:text-[96px]
                font-extrabold
                leading-none
                mb-6
                translate-y-38
                translate-x-18
              "
            >
              About
            </h1>

            <div
              className="
                max-w-220
                text-right
                text-2xl
                font-lato
                leading-relaxed
                space-y-2
                translate-y-55
                translate-x-18
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
    </div>
  );
}
