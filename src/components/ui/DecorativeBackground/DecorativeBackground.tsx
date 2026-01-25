import Image from 'next/image';
import { ReactNode } from 'react';

type DecorativeBackgroundProps = {
  children: ReactNode;
};

export default function DecorativeBackground({ children }: DecorativeBackgroundProps) {
  return (
    <div className="relative w-full">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Mobile background */}
        <Image
          src="/images/backgrounds/bg-phone.svg"
          alt=""
          fill
          className="object-cover object-top md:hidden"
        />
        {/* Desktop background */}
        <Image
          src="/images/backgrounds/bg-desktop.svg"
          alt=""
          fill
          className="hidden object-cover object-top md:block"
        />
      </div>

      <div className="relative flex flex-col gap-150 py-50">{children}</div>
    </div>
  );
}
