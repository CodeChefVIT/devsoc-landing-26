'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { splineSansMono } from '@/app/fonts';
import './timeline.css';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
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
    time: '09:00',
    title: 'Gates Open',
    subtitle: 'Welcome to DevSoc',
    description: 'Registration begins at the main hall. Pick up your swag and meet your teammates.',
    day: 'Day 1',
  },
  {
    id: '2',
    time: '10:00',
    title: 'Opening Ceremony',
    subtitle: 'Kickoff & announcements',
    description:
      'Introduction to the event, rules, schedule overview, and opening remarks from the organizers.',
    day: 'Day 1',
  },
  {
    id: '3',
    time: '11:00',
    title: 'Hacking Begins',
    subtitle: 'Let the build start',
    description: 'Teams start working on their projects. Mentors and resources become available.',
    day: 'Day 1',
  },
  {
    id: '4',
    time: '15:30',
    title: 'Panel Discussion',
    subtitle: 'Insights from experts',
    description: 'Industry experts share experiences, advice, and answer participant questions.',
    day: 'Day 1',
  },
  {
    id: '5',
    time: '23:00',
    title: 'Jam Session',
    subtitle: 'Unwind and connect',
    description: 'A late-night informal session to relax, network, and recharge creativity.',
    day: 'Day 1',
  },

  // Day 2 — 04.02.2025
  {
    id: '6',
    time: '00:00',
    title: 'Review 1',
    subtitle: 'Progress check',
    description: 'Initial project review to assess progress and provide early feedback.',
    day: 'Day 2',
  },
  {
    id: '7',
    time: '09:00',
    title: 'Hack Time',
    subtitle: 'Deep focus mode',
    description:
      'Continued hacking with full access to mentors, resources, and collaboration spaces.',
    day: 'Day 2',
  },
  {
    id: '8',
    time: '22:00',
    title: 'Engagement Activity',
    subtitle: 'Break the routine',
    description: 'A fun interactive activity designed to refresh participants and boost morale.',
    day: 'Day 2',
  },

  // Day 3 — 05.02.2025
  {
    id: '9',
    time: '00:00',
    title: 'Review 2',
    subtitle: 'Final feedback round',
    description: 'Second review focused on polish, completion, and readiness for submission.',
    day: 'Day 3',
  },
  {
    id: '10',
    time: '05:30',
    title: 'Final Submission',
    subtitle: 'Code freeze',
    description:
      'Teams submit their final projects. No further changes are allowed after this point.',
    day: 'Day 3',
  },
  {
    id: '11',
    time: '09:00',
    title: 'Final Pitches',
    subtitle: 'Showcase your work',
    description:
      'Teams present their projects to judges, explaining ideas, implementation, and impact.',
    day: 'Day 3',
  },
  {
    id: '12',
    time: '11:00',
    title: 'Closing Ceremony',
    subtitle: 'Winners & wrap-up',
    description: 'Prize distribution, acknowledgements, and official conclusion of the event.',
    day: 'Day 3',
  },
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  const isMobile = viewportWidth < 768;
  const itemWidthVw = isMobile ? 60 : 45;
  const totalTranslateVw = -(EVENTS.length - 1) * itemWidthVw;

  const x = useTransform(smoothProgress, [0, 1], ['0vw', `${totalTranslateVw}vw`]);

  useMotionValueEvent(scrollYProgress, 'change', latest => {
    const newIndex = Math.min(
      EVENTS.length - 1,
      Math.max(0, Math.round(latest * (EVENTS.length - 1)))
    );
    setActiveIndex(newIndex);
  });

  const scrollToIndex = useCallback((index: number) => {
    if (!containerRef.current) return;
    const targetTop = index * containerRef.current.clientHeight;
    containerRef.current.scrollTo({
      top: targetTop,
      behavior: 'smooth',
    });
  }, []);

  const activeEvent = EVENTS[activeIndex];

  return (
    <div
      ref={containerRef}
      className="h-screen w-full overflow-y-auto overflow-x-hidden snap-y snap-mandatory bg-transparent scrollbar-none flex justify-center items-center"
    >
      <div className="relative w-full" style={{ height: `${EVENTS.length * 100}vh` }}>
        <div className="sticky top-0 h-screen w-full overflow-hidden text-white font-lato selection:bg-purple-500/30">
          {/* <div className="absolute inset-0 opacity-60 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.2)_0%,#050505_50%,#050505_100%)]" /> */}

          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/20 z-10" />

          <div className="w-full h-1/2 pointer-events-none z-20 flex flex-col justify-end pb-8 px-8 md:px-16 lg:px-0">
            {/* <div className="absolute inset-x-0 top-0 z-20 h-1/2 pointer-events-none">
              <div className="relative grid grid-cols-1 lg:grid-cols-8 h-full items-end pb-8 px-8 md:px-16 lg:px-0 w-full">
                <h1
                  className={cn(
                    'relative mt-24 text-4xl md:text-6xl lg:text-8xl font-bold',
                    'lg:col-start-2 lg:col-span-6',
                    splineSansMono.className
                  )}
                >
                  Timeline
                </h1>
              </div>
            </div> */}

            <div className="grid grid-cols-1 lg:grid-cols-12 items-center w-full mb-12 px-8 md:px-16 lg:px-0">
              <div className="overflow-hidden lg:col-start-3 lg:col-span-4">
                <AnimatePresence mode="wait">
                  <motion.h2
                    key={`title-${activeEvent.id}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-5xl md:text-7xl lg:text-6xl font-bold tracking-normal leading-normal mb-30"
                  >
                    <span className="bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent inline-block">
                      {activeEvent.title}
                    </span>
                  </motion.h2>
                </AnimatePresence>
              </div>

              <div className="text-right lg:col-start-10 lg:col-span-2 mr-40">
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

          <div className="  w-full h-1/2 pointer-events-none z-20 flex flex-col justify-start pt-64 px-8 md:px-16 lg:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-start w-full px-8 md:px-16 lg:px-0">
              <div className="lg:col-start-3 lg:col-span-3">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`subtitle-${activeEvent.id}`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.5 }}
                  >
                    <p className="text-xl md:text-2xl font-normal text-white mb-3">
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
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-md">
                      {activeEvent.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex gap-4 z-30 pointer-events-auto lg:col-start-9 lg:col-span-2 justify-end">
                <button
                  onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
                  disabled={activeIndex === 0}
                  className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center hover:bg-white/10 hover:border-white/40 transition-all disabled:opacity-30 disabled:cursor-not-allowed group active:scale-95"
                >
                  <ArrowLeft className="w-5 h-5 text-gray-300 group-hover:text-white" />
                </button>
                <button
                  onClick={() => scrollToIndex(Math.min(EVENTS.length - 1, activeIndex + 1))}
                  disabled={activeIndex === EVENTS.length - 1}
                  className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center hover:bg-white/10 hover:border-white/40 transition-all disabled:opacity-30 disabled:cursor-not-allowed group active:scale-95"
                >
                  <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-white" />
                </button>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 flex items-center z-10 pointer-events-none">
            <motion.div style={{ x }} className="flex items-center">
              <div className="shrink-0 w-[calc(50vw-30vw)] md:w-[calc(50vw-22.5vw)]" />

              {EVENTS.map((event, index) => {
                const isActive = index === activeIndex;
                return (
                  <div
                    key={event.id}
                    className={cn(
                      'shrink-0 w-[60vw] md:w-[45vw] flex flex-col items-center justify-center relative select-none'
                    )}
                  >
                    <motion.div
                      className={cn(
                        'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-thin leading-none tracking-tighter select-none',
                        isActive ? 'text-white/10 font-black' : 'text-white/5 font-semibold'
                      )}
                      animate={{
                        scale: isActive ? 1 : 0.5,
                        filter: isActive ? 'blur(0px)' : 'blur(2px)',
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <span className="text-[10rem] md:text-[22rem] lg:text-[32rem] tracking-wider">
                        {event.time}
                      </span>
                    </motion.div>

                    <motion.div
                      className="w-4 h-4 rounded-full border bg-white z-30 relative shadow-sm"
                      animate={{
                        scale: isActive ? 1.8 : 0.5,
                        borderColor: isActive ? 'transparent' : 'rgba(107, 114, 128, 1)',
                        opacity: isActive ? 1 : 0.7,
                        boxShadow: isActive ? '0 0 15px rgba(255,255,255,0.6)' : 'none',
                      }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                );
              })}
              <div className="shrink-0 w-[50vw]" />
            </motion.div>
          </div>
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
  );
}
