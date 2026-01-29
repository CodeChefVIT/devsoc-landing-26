'use client';

import { SectionHeading } from '@/components/ui';
import { tracks } from '@/data';
import { useLayoutEffect, useState } from 'react';
import DesktopTracks from './Desktop';
import MobileTracks from './Mobile';

export default function Tracks() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useLayoutEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="relative overflow-visible">
      <SectionHeading title="Tracks" />
      {isMobile !== null &&
        (isMobile ? <MobileTracks tracks={tracks} /> : <DesktopTracks tracks={tracks} />)}
    </div>
  );
}
