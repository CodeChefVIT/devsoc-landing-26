import Image from 'next/image';
import { ReactNode } from 'react';

type DecorativeBackgroundProps = {
  children: ReactNode;
};

export default function DecorativeBackground({ children }: DecorativeBackgroundProps) {
  return (
    <div className="relative w-full overflow-x-hidden">
      <div className="pointer-events-none absolute inset-0 z-1 overflow-hidden">
        <Image
          src="/images/background.svg"
          alt=""
          width={1920}
          height={3000}
          priority
          className="block h-auto w-full object-cover object-top"
        />
        <div
          className="absolute inset-x-0 top-0 h-12.5"
          style={{
            background:
              'linear-gradient(to bottom, rgba(10, 10, 10, 1) 0px, rgba(10, 10, 10, 1) 2px, transparent 50px)',
          }}
        />
      </div>

      <div className="relative z-2 w-full flex flex-col gap-60">{children}</div>
    </div>
  );
}
