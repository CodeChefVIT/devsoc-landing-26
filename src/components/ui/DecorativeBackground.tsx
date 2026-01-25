import Image from 'next/image';
import { ReactNode } from 'react';

type DecorativeBackgroundProps = {
  children: ReactNode;
};

export default function DecorativeBackground({ children }: DecorativeBackgroundProps) {
  return (
    <div className="relative w-full overflow-x-hidden" style={{ aspectRatio: '1920 / 8923' }}>
      <div className="pointer-events-none absolute inset-0 z-1 overflow-hidden">
        <Image
          src="/images/backgrounds/bg-main.svg"
          alt=""
          width={1920}
          height={8923}
          loading="lazy"
          className="block h-full w-full object-cover object-top"
        />
        <div
          className="absolute inset-x-0 top-0 h-12.5"
          style={{
            background:
              'linear-gradient(to bottom, rgba(10, 10, 10, 1) 0px, rgba(10, 10, 10, 1) 2px, transparent 50px)',
          }}
        />
      </div>

      <div className="relative z-2 w-full h-full flex flex-col justify-around">{children}</div>
    </div>
  );
}
