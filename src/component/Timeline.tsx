'use client';

import React, { useRef, useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

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

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
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
  }, [activeIndex]);

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

  const activeEvent = EVENTS[activeIndex];

  return (
    <div className="relative w-full h-screen bg-[#050505] overflow-hidden text-white font-lato selection:bg-purple-500/30">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-[#050505] to-[#050505] opacity-60 pointer-events-none" />

      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/20 z-10" />

      <div className="absolute top-0 left-0 w-full h-1/2 pointer-events-none z-20 flex flex-col justify-end pb-8 px-8 md:px-16">
        <div className="flex justify-between items-end w-full">
          <div className="overflow-hidden">
            <h2
              key={`title-${activeEvent.id}`}
              className="text-5xl md:text-7xl font-bold tracking-tight mb-2 animate-in slide-in-from-bottom-2 fade-in duration-500"
            >
              <span className="bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent inline-block">
                {activeEvent.title}
              </span>
            </h2>
          </div>

          <div className="text-right pb-2">
            <span
              key={`day-${activeEvent.id}`}
              className="font-italianno text-5xl md:text-6xl text-white block animate-in fade-in duration-700"
            >
              {activeEvent.day}
            </span>
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 left-0 w-full h-1/2 pointer-events-none z-20 flex flex-col justify-start pt-8 px-8 md:px-16">
        <div className="flex justify-between items-start w-full">
          <div className="transition-opacity duration-500">
            <p
              key={`sub-${activeEvent.id}`}
              className="text-xl md:text-2xl font-normal text-white mb-3 animate-in slide-in-from-top-2 fade-in duration-500"
            >
              {activeEvent.subtitle}
            </p>
            <p
              key={`desc-${activeEvent.id}`}
              className="text-sm md:text-base text-gray-400 leading-relaxed max-w-md animate-in slide-in-from-top-3 fade-in duration-700"
            >
              {activeEvent.description}
            </p>
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

      <div
        ref={scrollContainerRef}
        className="absolute inset-0 flex items-center overflow-x-auto overflow-y-hidden snap-x snap-mandatory hide-scrollbar z-10"
        style={{ scrollBehavior: 'smooth' }}
      >
        <div className="shrink-0 w-[50vw]" />

        {EVENTS.map((event, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={event.id}
              onClick={() => scrollToEvent(index)}
              className={cn(
                'timeline-item shrink-0 w-[60vw] md:w-[45vw] h-full flex flex-col items-center justify-center relative cursor-pointer snap-center group'
              )}
            >
              {/*Background Time */}
              <div
                className={cn(
                  'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] md:text-[18rem] font-thin leading-none tracking-tighter select-none transition-all duration-700 ease-out',
                  isActive
                    ? 'text-white/10 font-black blur-0 scale-100'
                    : 'text-white/5  font-semibold blur-[2px] scale-90'
                )}
              >
                {event.time}
              </div>

              {/* Marker*/}
              <div
                className={cn(
                  'w-4 h-4 rounded-full border bg-white z-30 transition-all duration-500 relative shadow-sm',
                  isActive
                    ? 'scale-[1.8] border-transparent shadow-[0_0_15px_rgba(255,255,255,0.6)]'
                    : 'scale-100 border-gray-500 opacity-70 group-hover:opacity-100'
                )}
              />
            </div>
          );
        })}
        <div className="shrink-0 w-[50vw]" />
      </div>
    </div>
  );
}
