'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import './timeline.css';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  useMotionValue,
  useAnimation,
} from 'framer-motion';

interface TimelineEvent {
  id: string;
  time: string;
  title: string;
  subtitle: string;
  description: string;
  day: string;
}

const EVENTS: TimelineEvent[] = [
  {
    id: '1',
    time: '19:30',
    title: 'Gates Open',
    subtitle: 'Let the Hack begin',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    day: 'Day 1',
  },
  {
    id: '2',
    time: '20:00',
    title: 'Opening Ceremony',
    subtitle: 'Kickoff & announcements',
    description:
      'Introduction to the event, rules, schedule overview, and opening remarks from the organizers.',
    day: 'Day 1',
  },
  {
    id: '3',
    time: '21:00',
    title: 'Hacking Begins',
    subtitle: 'Let the build start',
    description: 'Teams start working on their projects. Mentors and resources become available.',
    day: 'Day 1',
  },
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);
  const dotControls = useAnimation();
  const ringControls = useAnimation();

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

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  const isMobile = viewportWidth < 768;
  const itemWidthVw = isMobile ? 60 : 49;
  const initialPaddingVw = isMobile ? 30 : 27.5; // From 'calc(50vw-20vw)' and 'calc(50vw-22.5vw)'

  // Calculate the X position to center each event
  // For each event index, calculate the offset needed to center that event
  const calculateEventOffset = useCallback(
    (index: number) => {
      // Calculate the position of this event's center relative to the container start
      // Each event is itemWidthVw wide, and we have initialPaddingVw before the first event
      return initialPaddingVw + index * itemWidthVw + itemWidthVw / 2;
    },
    [initialPaddingVw, itemWidthVw]
  );

  // Create a motion value for the container X position
  const containerX = useMotionValue(`calc(50vw - ${calculateEventOffset(0)}vw)`);

  // Update container position smoothly based on scroll progress
  useMotionValueEvent(scrollYProgress, 'change', latest => {
    const currentIndex = latest * (EVENTS.length - 1);
    const floorIndex = Math.floor(currentIndex);
    const ceilIndex = Math.min(Math.ceil(currentIndex), EVENTS.length - 1);
    const t = currentIndex - floorIndex;

    // Interpolate between the two nearest event positions
    const floorOffset = calculateEventOffset(floorIndex);
    const ceilOffset = calculateEventOffset(ceilIndex);
    const interpolatedOffset = floorOffset + (ceilOffset - floorOffset) * t;

    // Move container so event center aligns with screen center (50vw)
    containerX.set(`calc(50vw - ${interpolatedOffset}vw)`);
  });

  useMotionValueEvent(scrollYProgress, 'change', latest => {
    const newIndex = Math.min(
      EVENTS.length - 1,
      Math.max(0, Math.round(latest * (EVENTS.length - 1)))
    );
    setActiveIndex(newIndex);
  });

  const scrollToIndex = useCallback(
    (index: number) => {
      if (!containerRef.current) return;
      const { scrollHeight, clientHeight } = containerRef.current;
      const scrollPercentage = index / (EVENTS.length - 1);
      const targetTop = scrollPercentage * (scrollHeight - clientHeight);
      containerRef.current.scrollTo({
        top: targetTop,
        behavior: 'smooth',
      });
    },
    [containerRef]
  );

  const activeEvent = EVENTS[activeIndex];
  const isFirst = activeIndex === 0;
  const isLast = activeIndex === EVENTS.length - 1;
  const isMiddle = !isFirst && !isLast;

  const TRACK_MARGIN_VW = isMobile ? 8 : 10;
  const TRACK_COLOR_CLASS = 'bg-white';

  // Timeline line animation based on state
  // Start: line extends only to the right (from center to right edge)
  // Middle: line extends both sides (full width)
  // End: line extends only to the left (from left edge to center)
  const timelineLineStyle = {
    left: isFirst ? '50%' : `${TRACK_MARGIN_VW}vw`,
    width: isMiddle
      ? `calc(100vw - ${2 * TRACK_MARGIN_VW}vw)`
      : `calc(50vw - ${TRACK_MARGIN_VW}vw)`,
  };

  return (
    <div
      ref={containerRef}
      className="h-screen w-full overflow-y-auto overflow-x-hidden snap-y snap-proximity bg-transparent scrollbar-none"
    >
      <div className="relative w-full" style={{ height: `${EVENTS.length * 100}vh` }}>
        <div className="sticky top-0 h-screen w-full overflow-hidden text-white font-lato selection:bg-purple-500/30">
          {/* Timeline Title - Top Left */}
          <div className="absolute top-8 left-8 md:top-12 md:left-16 z-30">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-spline-sans-mono">
              Timeline
            </h1>
          </div>

          {/* Timeline Track - Background Line */}
          <div
            className="absolute top-1/2 h-px bg-white/20 z-9"
            style={{
              left: `${TRACK_MARGIN_VW}vw`,
              width: `calc(100vw - ${2 * TRACK_MARGIN_VW}vw)`,
            }}
          />

          {/* Animated Timeline Line */}
          <motion.div
            className={cn('absolute top-1/2 h-px z-10', TRACK_COLOR_CLASS)}
            animate={timelineLineStyle}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          />

          {/* Large Background Time Numbers - Centered on Screen */}
          <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
            <AnimatePresence mode="wait">
              <motion.div
                key={`time-bg-${activeEvent.id}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="text-[20rem] md:text-[22rem] lg:text-[24rem] xl:text-[32rem] 2xl:text-[40rem] font-black text-white/10 select-none font-lato"
              >
                {activeEvent.time}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Timeline Dot - Always Centered (separate from scrolling events) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
            <motion.div
              className="w-4 h-4 rounded-full bg-white border-2 border-white shadow-lg"
              animate={dotControls}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border border-white/50"
              animate={ringControls}
            />
          </div>

          {/* Event Content - Top Section */}
          <div className="w-full h-1/2 pointer-events-none z-20 flex flex-col justify-end pb-8 px-8 md:px-16 lg:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center w-full mb-12 px-8 md:px-16 lg:px-0">
              <div className="overflow-hidden lg:col-start-3 lg:col-span-4">
                <AnimatePresence mode="wait">
                  <motion.h2
                    key={`title-${activeEvent.id}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-normal leading-normal mb-30 font-lato"
                  >
                    <span className="bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent inline-block">
                      {activeEvent.title}
                    </span>
                  </motion.h2>
                </AnimatePresence>
              </div>

              <div className="text-right md:col-span-2 md:col-start-9 lg:col-start-10 lg:col-span-4 xl:col-start-9 xl:col-span-3 2xl:col-start-10 2xl:col-span-2 mr-40">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`day-${activeEvent.id}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="font-italianno text-5xl md:text-6xl lg:text-7xl text-white block"
                  >
                    {activeEvent.day}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Event Content - Bottom Section */}
          <div className="w-full h-1/2 pointer-events-none z-20 flex flex-col justify-start pt-64 px-8 md:px-16 lg:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-start w-full px-8 md:px-16 lg:px-0">
              <div className="lg:col-start-3 lg:col-span-3">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`subtitle-${activeEvent.id}`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <p className="text-xl md:text-2xl font-bold text-white mb-3 font-lato">
                      {activeEvent.subtitle}
                    </p>
                  </motion.div>
                </AnimatePresence>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`description-${activeEvent.id}`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-md font-lato">
                      {activeEvent.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex gap-4 z-30 pointer-events-auto lg:col-start-9 lg:col-span-2 justify-end">
                <button
                  onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
                  disabled={activeIndex === 0}
                  className="w-12 h-12 rounded-full border border-white/20 bg-white/10 flex items-center justify-center hover:bg-white/20 hover:border-white/40 transition-all disabled:opacity-30 disabled:cursor-not-allowed group active:scale-95"
                >
                  <ArrowLeft className="w-5 h-5 text-white" />
                </button>
                <button
                  onClick={() => scrollToIndex(Math.min(EVENTS.length - 1, activeIndex + 1))}
                  disabled={activeIndex === EVENTS.length - 1}
                  className="w-12 h-12 rounded-full border border-white/20 bg-white/10 flex items-center justify-center hover:bg-white/20 hover:border-white/40 transition-all disabled:opacity-30 disabled:cursor-not-allowed group active:scale-95"
                >
                  <ArrowRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Events Container with Horizontal Scrolling */}
          <div className="bg absolute inset-0 flex items-center z-10 pointer-events-none">
            <motion.div style={{ x: containerX }} className="flex items-center justify-center">
              <div className="shrink-0 w-[calc(50vw-20vw)] md:w-[calc(50vw-22.5vw)]" />

              {EVENTS.map((event, index) => {
                const isActive = index === activeIndex;
                return (
                  <div
                    key={event.id}
                    className={cn(
                      'events shrink-0 w-[60vw] md:w-[45vw] flex flex-col items-center justify-center relative select-none'
                    )}
                  >
                    {/* Inactive event indicators - small dots */}
                    {!isActive && (
                      <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white/50 z-20"
                        animate={{
                          opacity: 0.5,
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    {/* Active event circle is hidden here - the fixed centered dot above represents it */}
                  </div>
                );
              })}
              <div className="shrink-0 w-[50vw]" />
            </motion.div>
          </div>
        </div>

        {/* Scroll Snap Points */}
        {EVENTS.map((_, index) => (
          <div
            key={index}
            className="absolute w-full h-screen snap-start pointer-events-none"
            style={{ top: `${index * 100}vh` }}
          />
        ))}
      </div>
    </div>
  );
}
