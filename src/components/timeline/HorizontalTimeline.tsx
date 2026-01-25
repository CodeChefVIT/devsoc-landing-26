'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useMotionValue,
  useAnimation,
} from 'framer-motion';
import { Events } from '@/data';
import { TimelineEventDetails } from './TimelineEventDetails';
import { TimelineNavigation } from './TimelineNavigation';
import { TimelineTrack } from './TimelineTrack';
import { TimelineCenter } from './TimelineCenter';
import { TimelineBackground } from './TimelineBackground';

export function HorizontalTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const dotControls = useAnimation();
  const ringControls = useAnimation();

  const calculateEventOffset = useCallback((index: number) => {
    const itemWidthVw = 49;
    const initialPaddingVw = 27.5;
    return initialPaddingVw + index * itemWidthVw + itemWidthVw / 2;
  }, []);

  const containerX = useMotionValue(`calc(50vw - ${calculateEventOffset(0)}vw)`);

  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  useEffect(() => {
    dotControls.start({
      scale: [1, 1.5, 1],
      transition: { duration: 0.3, ease: 'easeInOut' },
    });
    ringControls.start({
      scale: [1, 1.2, 1],
      opacity: [1, 0.5, 1],
      transition: { duration: 0.4, ease: 'easeInOut' },
    });
  }, [activeIndex, dotControls, ringControls]);

  useMotionValueEvent(scrollYProgress, 'change', latest => {
    const currentIndex = latest * (Events.length - 1);
    const floorIndex = Math.floor(currentIndex);
    const ceilIndex = Math.min(Math.ceil(currentIndex), Events.length - 1);
    const t = currentIndex - floorIndex;

    const floorOffset = calculateEventOffset(floorIndex);
    const ceilOffset = calculateEventOffset(ceilIndex);
    const interpolatedOffset = floorOffset + (ceilOffset - floorOffset) * t;

    containerX.set(`calc(50vw - ${interpolatedOffset}vw)`);
  });

  useMotionValueEvent(scrollYProgress, 'change', latest => {
    const newIndex = Math.min(
      Events.length - 1,
      Math.max(0, Math.round(latest * (Events.length - 1)))
    );
    setActiveIndex(newIndex);
  });

  const scrollToIndex = useCallback(
    (index: number) => {
      if (!containerRef.current) return;
      const { scrollHeight, clientHeight } = containerRef.current;
      const scrollPercentage = index / (Events.length - 1);
      const targetTop = scrollPercentage * (scrollHeight - clientHeight);
      containerRef.current.scrollTo({
        top: targetTop,
        behavior: 'smooth',
      });
    },
    [containerRef]
  );

  const activeEvent = Events[activeIndex];
  const isFirst = activeIndex === 0;
  const isLast = activeIndex === Events.length - 1;
  const isMiddle = !isFirst && !isLast;

  const TRACK_MARGIN_VW = 10;
  const TRACK_COLOR_CLASS = 'bg-white';

  const timelineLineStyle = {
    left: isFirst ? '50%' : `${TRACK_MARGIN_VW}vw`,
    width: isMiddle
      ? `calc(100vw - ${2 * TRACK_MARGIN_VW}vw)`
      : `calc(50vw - ${TRACK_MARGIN_VW}vw)`,
  };

  return (
    <div
      ref={containerRef}
      className="snap-start max-h-screen w-full overflow-y-auto overflow-x-hidden snap-y snap-proximity bg-transparent scrollbar-none"
    >
      <div className="relative w-full" style={{ height: `${Events.length * 100}vh` }}>
        <div className="sticky top-0 w-full overflow-hidden text-white font-lato selection:bg-purple-500/30">
          <div
            className="absolute top-1/2 h-px bg-white/20 z-9"
            style={{
              left: `${TRACK_MARGIN_VW}vw`,
              width: `calc(100vw - ${2 * TRACK_MARGIN_VW}vw)`,
            }}
          />

          <motion.div
            className={cn('absolute top-1/2 h-px z-10', TRACK_COLOR_CLASS)}
            animate={timelineLineStyle}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          />

          <TimelineBackground activeEvent={activeEvent} />

          <TimelineCenter dotControls={dotControls} ringControls={ringControls} />

          <TimelineEventDetails activeEvent={activeEvent}>
            <div className="lg:col-start-9 md:col-start-8 lg:col-span-2 justify-end flex gap-4 z-30 pointer-events-auto">
              <TimelineNavigation
                scrollToIndex={scrollToIndex}
                activeIndex={activeIndex}
                eventsLength={Events.length}
              />
            </div>
          </TimelineEventDetails>

          <TimelineTrack containerX={containerX} events={Events} activeIndex={activeIndex} />
        </div>

        {Events.map((_, index) => (
          <div
            key={index}
            className="absolute w-full h-screen snap-start snap-always pointer-events-none"
            style={{ top: `${index * 100}vh` }}
          />
        ))}
      </div>
    </div>
  );
}
