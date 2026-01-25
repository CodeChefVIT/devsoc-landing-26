'use client';

import { useCallback } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Events } from '@/data';
import { TimelineCenter } from './TimelineCenter';
import { Event } from '@/data';

export function VerticalTimeline() {
  const dotControls = useAnimation();
  const ringControls = useAnimation();

  const handleInView = useCallback(() => {
    dotControls.start({
      scale: [1, 1.5, 1],
      transition: { duration: 0.3, ease: 'easeInOut' },
    });

    ringControls.start({
      scale: [1, 1.2, 1],
      opacity: [1, 0.5, 1],
      transition: { duration: 0.4, ease: 'easeInOut' },
    });
  }, [dotControls, ringControls]);

  return (
    <div className="relative w-full px-8 h-screen overflow-y-scroll scroll-smooth scrollbar-none">
      <div className="sticky top-1/2 z-10 -translate-y-1/2">
        <TimelineCenter dotControls={dotControls} ringControls={ringControls} />
      </div>

      <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/20" />

        {Events.map((event, index) => (
          <TimelineEvent key={event.id} event={event} index={index} onInView={handleInView} />
        ))}
      </div>
    </div>
  );
}

function TimelineEvent({
  event,
  index,
  onInView,
}: {
  event: Event;
  index: number;
  onInView: () => void;
}) {
  const isLeftAligned = index % 2 === 0;

  return (
    <section id={`event-${index}`} className="relative h-screen mb-16">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-white shadow-lg" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        onViewportEnter={onInView}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full flex items-center"
      >
        {isLeftAligned ? (
          <>
            <div className="w-1/2 pr-8">
              <EventCard event={event} />
            </div>
            <div className="w-1/2 pl-8 text-left">
              <TimeDisplay time={event.time} />
            </div>
          </>
        ) : (
          <>
            <div className="w-1/2 pr-8 text-right">
              <TimeDisplay time={event.time} />
            </div>
            <div className="w-1/2 pl-8">
              <EventCard event={event} />
            </div>
          </>
        )}
      </motion.div>
    </section>
  );
}

function EventCard({ event }: { event: Event }) {
  return (
    <div className="p-4 rounded-lg bg-white/5">
      <h3 className="text-lg font-bold">{event.title}</h3>
      <p className="text-xs tracking-tighter text-gray-300">{event.subtitle}</p>
      <p className="text-xs mt-2 tracking-tighter text-gray-400">{event.description}</p>
    </div>
  );
}

function TimeDisplay({ time }: { time: string }) {
  return (
    <span className="text-[8rem] font-black text-white/10 select-none font-lato">
      {time.replace(':', ' ')}
    </span>
  );
}
