'use client';

import React, { useEffect } from 'react';
import { EVENTS } from './data';
import { motion, useAnimation } from 'framer-motion';
import { TimelineCenter } from './TimelineCenter';

export function VerticalTimeline() {
  const dotControls = useAnimation();
  const ringControls = useAnimation();

  const handleInView = () => {
    dotControls.start({
      scale: [1, 1.5, 1],
      transition: { duration: 0.3, ease: 'easeInOut' },
    });
    ringControls.start({
      scale: [1, 1.2, 1],
      opacity: [1, 0.5, 1],
      transition: { duration: 0.4, ease: 'easeInOut' },
    });
  };

  return (
    <div className="relative w-full pt-28 px-8 snap-y snap-mandatory scroll-smooth h-screen overflow-y-auto scrollbar-none">
      <div className="sticky top-1/2 z-10">
        <TimelineCenter dotControls={dotControls} ringControls={ringControls} />
      </div>
      <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/20" />
        {EVENTS.map((event, index) => (
          <div key={event.id} className="relative mb-16 h-screen snap-start">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-white shadow-lg" />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              onViewportEnter={handleInView}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full flex items-center"
            >
              {index % 2 === 0 ? (
                <>
                  <div className="w-1/2 pr-8">
                    <div className="p-4 rounded-lg bg-white/5">
                      <h3 className="text-xl font-bold">{event.title}</h3>
                      <p className="text-sm text-gray-400">{event.subtitle}</p>
                      <p className="text-sm mt-2">{event.description}</p>
                    </div>
                  </div>
                  <div className="w-1/2 pl-8 text-left">
                    <span className="text-[10rem] -my-5 text-wrap wrap-break-word font-black text-white/10 select-none font-lato">
                      {event.time.replace(':', ' ')}
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-1/2 pr-8 text-right">
                    <span className="text-[10rem] text-wrap wrap-break-word font-black text-white/10 select-none font-lato">
                      {event.time.replace(':', ' ')}
                    </span>
                  </div>
                  <div className="w-1/2 pl-8">
                    <div className="p-4 rounded-lg bg-white/5">
                      <h3 className="text-xl font-bold">{event.title}</h3>
                      <p className="text-sm text-gray-400">{event.subtitle}</p>
                      <p className="text-sm mt-2">{event.description}</p>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
