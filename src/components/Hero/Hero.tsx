'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

const RiveHero = dynamic(() => import('./RiveHero'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-[#0a0a0a]" />,
});

export default function Hero() {
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  const [shouldLoad, setShouldLoad] = useState(false);
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

  // Only load the heavy rive bundle when the hero is in (or near) viewport.
  useEffect(() => {
    if (shouldLoad) return;
    const el = containerRef.current;
    if (!el) {
      const t = setTimeout(() => setShouldLoad(true), 1500);
      return () => clearTimeout(t);
    }

    const obs = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            obs.disconnect();
            break;
          }
        }
      },
      { rootMargin: '300px' }
    );

    obs.observe(el);
    const fallback = setTimeout(() => setShouldLoad(true), 5000);
    return () => {
      obs.disconnect();
      clearTimeout(fallback);
    };
  }, [shouldLoad]);

  const artboard = screenSize === 'mobile' ? 'Mobile' : 'main';

  return (
    <section className={`relative w-full bg-[#0a0a0a] flex items-center justify-center h-screen`}>
      <div ref={containerRef} className="w-full h-full flex items-center justify-center">
        {shouldLoad ? (
          <RiveHero key={artboard} artboard={artboard} className="w-full h-full pan-y" />
        ) : (
          <div className="w-full h-full bg-[#0a0a0a]" />
        )}
      </div>
    </section>
  );
}
