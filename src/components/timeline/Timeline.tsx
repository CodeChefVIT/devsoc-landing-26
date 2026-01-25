'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { SectionHeading } from '../ui';
import { HorizontalTimeline } from './HorizontalTimeline';
import { VerticalTimeline } from './VerticalTimeline';

export default function Timeline() {
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = viewportWidth < 768;

  return (
    <div className={cn('overflow-x-hidden overflow-clip')}>
      <div className="grid grid-cols-12 mt-20">
        <div className="col-start-2">
          <SectionHeading title="Timeline" />
        </div>
      </div>

      {isMobile ? <VerticalTimeline /> : <HorizontalTimeline />}
    </div>
  );
}
