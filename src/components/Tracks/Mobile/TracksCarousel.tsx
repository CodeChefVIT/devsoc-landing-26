'use client';

import { useRef, useCallback, useLayoutEffect } from 'react';
import type { Track } from '@/data/tracks';
import TrackCarouselCard from './TrackCarouselCard';

export default function TracksCarousel({ tracks }: { tracks: Track[] }) {
  const trackItems = tracks.filter(t => t.type === 'track');
  const duplicated = [...trackItems, ...trackItems];

  const scrollRef = useRef<HTMLDivElement>(null);
  const adjustingRef = useRef(false);
  const loopWidthRef = useRef(0);

  useLayoutEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const update = () => {
      loopWidthRef.current = el.scrollWidth / 2;

      if (Math.abs(el.scrollLeft) < 1) {
        el.scrollLeft = loopWidthRef.current;
      }
    };

    update();

    const ro = new ResizeObserver(update);
    ro.observe(el);

    return () => ro.disconnect();
  }, [tracks]);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el || adjustingRef.current) return;

    const loopWidth = loopWidthRef.current;
    const buffer = 20;
    const x = el.scrollLeft;

    if (x >= loopWidth + buffer) {
      adjustingRef.current = true;
      el.scrollLeft = x - loopWidth;
      requestAnimationFrame(() => (adjustingRef.current = false));
    } else if (x <= buffer) {
      adjustingRef.current = true;
      el.scrollLeft = x + loopWidth;
      requestAnimationFrame(() => (adjustingRef.current = false));
    }
  }, []);

  return (
    <div className="w-full overflow-hidden py-8">
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-4 overflow-x-auto scrollbar-hide px-4"
      >
        {duplicated.map((track, i) => (
          <TrackCarouselCard key={`${track.id}-${i}`} track={track} />
        ))}
      </div>
    </div>
  );
}
