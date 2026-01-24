'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const { scrollY } = useScroll();

  const textY = useTransform(scrollY, [0, 400], [0, -30]);
  const statueY = useTransform(scrollY, [0, 400], [0, 60]);

  return (
    <section className="relative h-screen">
      <p className="absolute top-[11%] w-full text-center text-white z-10 font-italianno text-[clamp(2rem,5vw,4rem)]">
        Introducing
      </p>

      <motion.div
        className="absolute top-[22%] w-full text-center font-the-sans-mono"
        style={{ y: textY }}
      >
        <h1
          className="
            absolute w-full
            text-[clamp(3rem,15vw,11rem)]
            font-black tracking-[0.02em]
            text-transparent
            [-webkit-text-stroke:2px_rgba(255,255,255,1)]
            z-30
          "
        >
          DEVSOC’26
        </h1>

        <h1
          className="
            absolute w-full
            text-[clamp(3rem,15vw,11rem)]
            font-black tracking-[0.02em]
            text-white z-10
          "
        >
          DEVSOC’26
        </h1>
      </motion.div>

      <div
        className="
        absolute pointer-events-none
        w-[clamp(200px,60vw,1600px)]
        h-100
        border-2 border-white/40
        rounded-[50%]
        rotate-90 sm:-rotate-45 lg:rotate-[-25deg]
        left-1/2 bottom-1/6
        -translate-x-1/2
        mask-[linear-gradient(to_left,white_0%,white_60%,transparent_90%)]
        z-40
        "
      />

      <div
        className="
        absolute pointer-events-none
        w-[clamp(200px,60vw,1600px)]
        h-100
        border-2 border-white/40
        rounded-[50%]
        rotate-90 sm:-rotate-45 lg:rotate-[-25deg]
        left-1/2 bottom-1/6
        -translate-x-1/2
        mask-[linear-gradient(to_right,white_0%,white_0%,transparent_20%,transparent_100%)]
        z-5
        "
      />

      <motion.div
        className="
        absolute
        bottom-[15vh]
        left-1/2 -translate-x-1/2
        w-full max-w-225
        h-[55vh]
        min-h-87.5
        z-20
        "
        style={{ y: statueY }}
      >
        <Image
          src="/png/statueDavid.png"
          alt="David"
          fill
          priority
          className="object-contain object-bottom"
          draggable="false"
        />
      </motion.div>

      <motion.div
        className="
            absolute
            bottom-[14.5vh]
            left-1/2 -translate-x-1/2

            w-[calc(100%-4rem)] sm:w-full
            max-w-225
            h-[22vh]
            min-h-45

            rounded-[28px]
            overflow-hidden
            z-10
          "
        style={{ y: statueY }}
      >
        <Image src="/png/bg-gradient.png" alt="Gradient" fill className="object-fill" />
      </motion.div>

      <motion.button
        className="
        absolute
        bottom-[18vh]
        left-1/2 -translate-x-1/2
        h-10.5 px-7
        rounded-xl
        w-fit z-30
        text-white text-base
        bg-[rgba(81,81,81,0.25)]
        backdrop-blur-[6px]
        shadow-[0_0_2px_1px_rgba(0,0,0,0.2)]
        cursor-pointer
        "
        style={{ y: statueY }}
      >
        Register Now ↗
      </motion.button>
    </section>
  );
}
