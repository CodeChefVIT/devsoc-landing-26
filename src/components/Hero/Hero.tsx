'use client';

import { useEffect, useState } from 'react';
import { Alignment, Fit, Layout, useRive } from '@rive-app/react-canvas';

export default function HomeRive() {
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

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

  const { rive, RiveComponent } = useRive({
    src: '/rive/HeroV12.riv',
    artboard,
    stateMachines: ['State Machine 1'],
    autoplay: true,
    automaticallyHandleEvents: true,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
  });

  return (
    <section
      className={`relative w-full min-h-screen bg-black flex items-center justify-center ${
        screenSize === 'mobile' ? 'h-screen' : screenSize === 'tablet' ? 'h-[110vh]' : 'h-[125vh]'
      }`}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full max-w-full max-h-full">
          <RiveComponent key={artboard} className="w-full h-full" />
        </div>
      </div>
    </section>
  );
}
