import Image from 'next/image';
import { memo } from 'react';

function SectionBg({
  src,
  opacity = 'opacity-100',
  fullWidth = false,
  fixed = false,
  heightScreen = false,
}: {
  src: string;
  opacity?: string;
  fullWidth?: boolean;
  fixed?: boolean;
  heightScreen?: boolean;
}) {
  console.log('SectionBg render');

  return (
    <div
      className={`pointer-events-none ${fixed ? 'fixed' : 'absolute'} inset-0 flex items-center justify-center overflow-hidden`}
    >
      <div
        className={`relative ${heightScreen ? 'h-screen' : 'h-full'} ${
          fullWidth ? 'w-screen' : 'w-[200vw] sm:w-[160vw] md:w-[130vw] lg:w-[120vw]'
        }`}
      >
        <Image
          src={src}
          alt=""
          fill
          className={`object-cover sm:object-fill scale-110 ${opacity}`}
          draggable="false"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default memo(SectionBg);
