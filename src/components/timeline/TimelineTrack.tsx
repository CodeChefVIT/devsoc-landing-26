import React from 'react';
import { motion, MotionValue } from 'framer-motion';
import { cn } from '@/lib/utils';
import { TimelineEvent } from './data';

interface TimelineTrackProps {
  containerX: MotionValue<string>;
  events: TimelineEvent[];
  activeIndex: number;
}

export function TimelineTrack({ containerX, events, activeIndex }: TimelineTrackProps) {
  return (
    <div className="bg absolute inset-0 flex items-center z-10 pointer-events-none">
      <motion.div style={{ x: containerX }} className="flex items-center justify-center">
        <div className="shrink-0 w-[calc(50vw-20vw)] md:w-[calc(50vw-22.5vw)]" />

        {events.map((event, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={event.id}
              className={cn(
                'events shrink-0 w-[60vw] md:w-[45vw] flex flex-col items-center justify-center relative select-none'
              )}
            >
              {!isActive && (
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white/50 z-20"
                  animate={{
                    opacity: 0.5,
                  }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </div>
          );
        })}
        <div className="shrink-0 w-[50vw]" />
      </motion.div>
    </div>
  );
}
