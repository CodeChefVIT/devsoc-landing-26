'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';
import './timeline.css';
import { SectionHeading } from '../ui';
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useMotionValue,
  useAnimation,
} from 'framer-motion';
import { EVENTS } from './data';
import { TimelineEventDetails } from './TimelineEventDetails';
import { TimelineNavigation } from './TimelineNavigation';
import { TimelineTrack } from './TimelineTrack';
import { TimelineCenter } from './TimelineCenter';
import { TimelineBackground } from './TimelineBackground';
import { VerticalTimeline } from './VerticalTimeline';

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);
  const dotControls = useAnimation();
  const ringControls = useAnimation();

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = viewportWidth < 768;

  const { scrollYProgress } = useScroll({
    container: !isMobile ? containerRef : undefined,
  });

  const itemWidthVw = isMobile ? 60 : 49;
  const initialPaddingVw = isMobile ? 30 : 27.5;
  const calculateEventOffset = useCallback(
    (index: number) => {
      return initialPaddingVw + index * itemWidthVw + itemWidthVw / 2;
    },
    [initialPaddingVw, itemWidthVw]
  );

  const containerX = useMotionValue(`calc(50vw - ${calculateEventOffset(0)}vw)`);

  useEffect(() => {
    if (!isMobile) {
      dotControls.start({
        scale: [1, 1.5, 1],
        transition: { duration: 0.3, ease: 'easeInOut' },
      });
      ringControls.start({
        scale: [1, 1.2, 1],
        opacity: [1, 0.5, 1],
        transition: { duration: 0.4, ease: 'easeInOut' },
      });
    }
  }, [activeIndex, dotControls, ringControls, isMobile]);

  useMotionValueEvent(scrollYProgress, 'change', latest => {
    if (!isMobile) {
      const currentIndex = latest * (EVENTS.length - 1);
      const floorIndex = Math.floor(currentIndex);
      const ceilIndex = Math.min(Math.ceil(currentIndex), EVENTS.length - 1);
      const t = currentIndex - floorIndex;

      const floorOffset = calculateEventOffset(floorIndex);
      const ceilOffset = calculateEventOffset(ceilIndex);
      const interpolatedOffset = floorOffset + (ceilOffset - floorOffset) * t;

      containerX.set(`calc(50vw - ${interpolatedOffset}vw)`);
    }
  });

  useMotionValueEvent(scrollYProgress, 'change', latest => {
    if (!isMobile) {
      const newIndex = Math.min(
        EVENTS.length - 1,
        Math.max(0, Math.round(latest * (EVENTS.length - 1)))
      );
      setActiveIndex(newIndex);
    }
  });

  const scrollToIndex = useCallback(
    (index: number) => {
      if (!containerRef.current || isMobile) return;
      const { scrollHeight, clientHeight } = containerRef.current;
      const scrollPercentage = index / (EVENTS.length - 1);
      const targetTop = scrollPercentage * (scrollHeight - clientHeight);
      containerRef.current.scrollTo({
        top: targetTop,
        behavior: 'smooth',
      });
    },
    [containerRef, isMobile]
  );

  const activeEvent = !isMobile ? EVENTS[activeIndex] : undefined;
  const isFirst = activeIndex === 0;
  const isLast = activeIndex === EVENTS.length - 1;
  const isMiddle = !isFirst && !isLast;

  const TRACK_MARGIN_VW = isMobile ? 8 : 10;
  const TRACK_COLOR_CLASS = 'bg-white';

  const timelineLineStyle = {
    left: isFirst ? '50%' : `${TRACK_MARGIN_VW}vw`,
    width: isMiddle
      ? `calc(100vw - ${2 * TRACK_MARGIN_VW}vw)`
      : `calc(50vw - ${TRACK_MARGIN_VW}vw)`,
  };

  return (
    <div className={cn('overflow-x-hidden overflow-clip', !isMobile ? 'max-h-screen' : '')}>
      <div className="grid grid-cols-12 mt-20">
        <div className="col-start-2">
          <SectionHeading title="Timeline" />
        </div>
      </div>

      {isMobile ? (
        <VerticalTimeline />
      ) : (
        <div
          ref={containerRef}
          className="h-screen w-full overflow-y-auto overflow-x-hidden snap-y snap-proximity bg-transparent scrollbar-none"
        >
          <div className="relative w-full" style={{ height: `${EVENTS.length * 100}vh` }}>
            <div className="sticky top-0 w-full overflow-hidden text-white font-lato selection:bg-purple-500/30">
              {/* Background Line */}
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

              {activeEvent && <TimelineBackground activeEvent={activeEvent} />}

              <TimelineCenter dotControls={dotControls} ringControls={ringControls} />

              {activeEvent && (
                <TimelineEventDetails activeEvent={activeEvent}>
                  <div className="lg:col-start-9 lg:col-span-2 justify-end flex gap-4 z-30 pointer-events-auto">
                    <TimelineNavigation
                      scrollToIndex={scrollToIndex}
                      activeIndex={activeIndex}
                      eventsLength={EVENTS.length}
                    />
                  </div>
                </TimelineEventDetails>
              )}

              <TimelineTrack containerX={containerX} events={EVENTS} activeIndex={activeIndex} />
            </div>

            {EVENTS.map((_, index) => (
              <div
                key={index}
                className="absolute w-full h-screen snap-start pointer-events-none"
                style={{ top: `${index * 100}vh` }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
