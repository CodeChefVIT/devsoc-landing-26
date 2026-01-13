'use client';

import React, { useRef, useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

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
    time: '10:30',
    title: 'Opening Ceremony',
    subtitle: 'Let the Hack begin',
    description: 'Keynote speakers, theme announcements, and the official start of the hackathon.',
    day: 'Day 1',
  },
  {
    id: '3',
    time: '12:00',
    title: 'Hacking Starts',
    subtitle: 'Build something amazing',
    description: 'Teams start working on their projects. Mentors are available for guidance.',
    day: 'Day 1',
  },
  {
    id: '4',
    time: '14:00',
    title: 'Lunch Break',
    subtitle: 'Refuel and recharge',
    description: 'Buffet lunch served in the cafeteria. Networking opportunities with sponsors.',
    day: 'Day 1',
  },
  {
    id: '5',
    time: '16:30',
    title: 'Workshop',
    subtitle: 'Intro to AI Models',
    description: 'Learn how to integrate LLMs into your project with our lead tech sponsors.',
    day: 'Day 1',
  },
  {
    id: '6',
    time: '20:00',
    title: 'Dinner',
    subtitle: 'Evening feast',
    description: 'Dinner is served. Keep the energy high for the night ahead.',
    day: 'Day 1',
  },
];

export default function Timeline() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isWheeling, setIsWheeling] = useState(false);
  const dragStartRef = useRef<{ x: number; scrollLeft: number } | null>(null);
  const wheelTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        setIsWheeling(true);

        if (wheelTimeoutRef.current) clearTimeout(wheelTimeoutRef.current);

        container.scrollLeft += e.deltaY;

        wheelTimeoutRef.current = setTimeout(() => {
          setIsWheeling(false);
        }, 150);
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
      if (wheelTimeoutRef.current) clearTimeout(wheelTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      // Don't update active index while dragging to avoid jitter
      if (isDragging) return;

      const center = container.scrollLeft + container.clientWidth / 2;
      const items = container.getElementsByClassName('timeline-item');
      let closestIndex = 0;
      let minDistance = Infinity;

      Array.from(items).forEach((item, index) => {
        const htmlItem = item as HTMLElement;
        const itemCenter = htmlItem.offsetLeft + htmlItem.clientWidth / 2;
        const distance = Math.abs(center - itemCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      if (closestIndex !== activeIndex) {
        setActiveIndex(closestIndex);
      }
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => container.removeEventListener('scroll', handleScroll);
  }, [activeIndex, isDragging]);

  const scrollToEvent = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const items = container.getElementsByClassName('timeline-item');
    if (items[index]) {
      const item = items[index] as HTMLElement;
      const scrollLeft = item.offsetLeft - container.clientWidth / 2 + item.clientWidth / 2;

      container.scrollTo({
        left: scrollLeft,
        behavior: 'smooth',
      });
    }
  };

  // Drag to Scroll Handlers
  const onMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    dragStartRef.current = {
      x: e.pageX,
      scrollLeft: scrollContainerRef.current.scrollLeft,
    };
  };

  const onMouseLeave = () => {
    setIsDragging(false);
    dragStartRef.current = null;
  };

  const onMouseUp = () => {
    setIsDragging(false);
    dragStartRef.current = null;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !dragStartRef.current || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = (x - dragStartRef.current.x) * 1.5; // Scroll-fast multiplier
    scrollContainerRef.current.scrollLeft = dragStartRef.current.scrollLeft - walk;
  };

  const activeEvent = EVENTS[activeIndex];

  return (
    <div className="relative w-full h-screen bg-[#050505] overflow-hidden text-white font-lato selection:bg-purple-500/30">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-[#050505] to-[#050505] opacity-60 pointer-events-none" />

      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/20 z-10" />

      {/* Text Content Top */}
      <div className="absolute top-0 left-0 w-full h-1/2 pointer-events-none z-20 flex flex-col justify-end pb-8 px-8 md:px-16">
        <div className="flex justify-between items-end w-full">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.h2
                key={`title-${activeEvent.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-5xl md:text-7xl font-bold tracking-tight mb-2"
              >
                <span className="bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent inline-block">
                  {activeEvent.title}
                </span>
              </motion.h2>
            </AnimatePresence>
          </div>

          <div className="text-right pb-2">
            <AnimatePresence mode="wait">
              <motion.span
                key={`day-${activeEvent.id}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="font-italianno text-5xl md:text-6xl text-white block"
              >
                {activeEvent.day}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Text Content Bottom */}
      <div className="absolute top-1/2 left-0 w-full h-1/2 pointer-events-none z-20 flex flex-col justify-start pt-8 px-8 md:px-16">
        <div className="flex justify-between items-start w-full">
          <div className="transition-opacity duration-500">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${activeEvent.id}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-xl md:text-2xl font-normal text-white mb-3">
                  {activeEvent.subtitle}
                </p>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-md">
                  {activeEvent.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex gap-4 z-30 pointer-events-auto">
            <button
              onClick={() => scrollToEvent(Math.max(0, activeIndex - 1))}
              disabled={activeIndex === 0}
              className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center hover:bg-white/10 hover:border-white/40 transition-all disabled:opacity-30 disabled:cursor-not-allowed group active:scale-95"
            >
              <ArrowLeft className="w-5 h-5 text-gray-300 group-hover:text-white" />
            </button>
            <button
              onClick={() => scrollToEvent(Math.min(EVENTS.length - 1, activeIndex + 1))}
              disabled={activeIndex === EVENTS.length - 1}
              className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center hover:bg-white/10 hover:border-white/40 transition-all disabled:opacity-30 disabled:cursor-not-allowed group active:scale-95"
            >
              <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable Container */}
      <div
        ref={scrollContainerRef}
        className={cn(
          'absolute inset-0 flex items-center overflow-x-auto overflow-y-hidden snap-x snap-mandatory hide-scrollbar z-10',
          isDragging ? 'cursor-grabbing snap-none' : 'cursor-grab',
          isWheeling && 'snap-none'
        )}
        style={{ scrollBehavior: isDragging ? 'auto' : 'smooth' }}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        <div className="shrink-0 w-[50vw]" />

        {EVENTS.map((event, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={event.id}
              onClick={() => {
                if (!isDragging) scrollToEvent(index);
              }}
              className={cn(
                'timeline-item shrink-0 w-[60vw] md:w-[45vw] h-full flex flex-col items-center justify-center relative snap-center group select-none'
              )}
            >
              {/* Background Time */}
              <motion.div
                className={cn(
                  'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-thin leading-none tracking-tighter select-none',
                  isActive ? 'text-white/10 font-black' : 'text-white/5 font-semibold'
                )}
                animate={{
                  scale: isActive ? 1 : 0.9,
                  filter: isActive ? 'blur(0px)' : 'blur(2px)',
                }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-[10rem] md:text-[18rem]">{event.time}</span>
              </motion.div>

              {/* Marker */}
              <motion.div
                className={cn('w-4 h-4 rounded-full border bg-white z-30 relative shadow-sm')}
                animate={{
                  scale: isActive ? 1.8 : 1,
                  borderColor: isActive ? 'transparent' : 'rgba(107, 114, 128, 1)', // gray-500
                  opacity: isActive ? 1 : 0.7,
                  boxShadow: isActive ? '0 0 15px rgba(255,255,255,0.6)' : 'none',
                }}
                transition={{ duration: 0.5 }}
              />
            </div>
          );
        })}
        <div className="shrink-0 w-[50vw]" />
      </div>
    </div>
  );
}
