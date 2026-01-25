import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Event } from '@/data';

interface TimelineEventDetailsProps {
  activeEvent: Event;
  children: React.ReactNode;
}

export function TimelineEventDetails({ activeEvent, children }: TimelineEventDetailsProps) {
  return (
    <>
      <div className="UpperEventDetails w-full h-1/2 pointer-events-none z-20 flex flex-col justify-end pb-64 md:pb-32 px-8 md:px-16 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center w-full px-8 md:px-16 lg:px-0">
          <div className="overflow-hidden  lg:col-start-3 lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.h2
                key={`title-${activeEvent.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-normal leading-normal font-lato"
              >
                <span className="bg-radial-[at_50%_75%] from-[#E700B7] via-[#8C20CD] to-[#0C0A35] to-90% bg-clip-text text-transparent inline-block mb-24 md:mb-12">
                  {activeEvent.title}
                </span>
              </motion.h2>
            </AnimatePresence>
          </div>

          <div className="text-right md:col-span-2 md:col-start-2 lg:col-start-8 lg:col-span-3 xl:col-start-9 xl:col-span-3 2xl:col-start-10 2xl:col-span-2 md:mr-5 mr-40">
            <AnimatePresence mode="wait">
              <motion.span
                key={`day-${activeEvent.id}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="font-italianno text-5xl md:text-6xl lg:text-7xl text-white block mt-8 lg:mt-24"
              >
                {activeEvent.day}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="LowerHalfEventDetails w-full h-1/2 pointer-events-none z-20 flex flex-col justify-start pt-40 px-8 md:px-16 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-start w-full px-8 md:px-16 lg:px-0">
          <div className="lg:col-start-3 lg:col-span-3 md:col-start-2">
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
                <p className="text-sm md:text-sm text-gray-400 leading-relaxed max-w-md font-lato">
                  {activeEvent.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
