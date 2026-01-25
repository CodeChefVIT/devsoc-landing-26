'use client';

import { useEffect, useState } from 'react';
import { Alignment, Fit, Layout, useRive, useStateMachineInput } from '@rive-app/react-canvas';
import { useRouter } from 'next/navigation';

export default function HomeRive() {
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');

    const update = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsMobile('matches' in e ? e.matches : mq.matches);
    };

    update(mq);
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const artboard = isMobile ? 'Mobile' : 'main';

  const { rive, RiveComponent } = useRive({
    src: '/rive/HeroV8.riv',
    artboard,
    stateMachines: ['State Machine 1'],
    autoplay: true,
    automaticallyHandleEvents: true,
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.TopCenter,
    }),
  });

  return (
    <section
      className={`relative w-screen overflow-hidden bg-black ${
        isMobile ? 'h-screen' : 'h-[125vh]'
      }`}
    >
      <div className="absolute inset-0 -translate-y-24 md:-translate-y-14">
        <RiveComponent
          key={artboard}
          className="absolute inset-0"
          // IMPORTANT: remove pointer-events-none so hover works
        />
      </div>
    </section>
  );
}
