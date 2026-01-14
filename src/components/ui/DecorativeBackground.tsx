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
      </div>

      <div className="relative z-2 w-full">{children}</div>
    </div>
  );
}
