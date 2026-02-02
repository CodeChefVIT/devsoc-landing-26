'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const RiveHero = dynamic(() => import('./RiveHero'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-[#0a0a0a]" />,
});

export default function Hero() {
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  const [isRiveReady, setIsRiveReady] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateScreenSize = () => {
      if (window.matchMedia('(max-width: 640px)').matches) {
        setScreenSize('mobile');
      } else if (window.matchMedia('(max-width: 1024px)').matches) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  const artboard = screenSize === 'mobile' ? 'Mobile' : 'main';

  return (
    <section className={`relative w-full bg-[#0a0a0a] flex items-center justify-center h-screen`}>
      <div
        ref={containerRef}
        className="relative w-full h-full flex items-center justify-center overflow-hidden"
      >
        <div
          className={`absolute inset-0 transition-opacity duration-700 ease-out pointer-events-none bg-[#0a0a0a] ${
            isRiveReady ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <Image
            src={
              screenSize === 'mobile'
                ? '/images/hero/hero-placeholder-phone.avif'
                : '/images/hero/hero-placeholder.avif'
            }
            alt="Hero placeholder"
            fill
            className="object-contain object-center"
            decoding="async"
            priority
            sizes="100vw"
            draggable="false"
            preload
          />
        </div>

        <div
          className={`absolute inset-0 transition-opacity duration-700 ease-out ${isRiveReady ? 'opacity-100' : 'opacity-0'}`}
        >
          <RiveHero
            key={artboard}
            artboard={artboard}
            className="w-full h-full pan-y"
            onLoad={() => setIsRiveReady(true)}
          />
        </div>
      </div>
    </section>
  );
}
