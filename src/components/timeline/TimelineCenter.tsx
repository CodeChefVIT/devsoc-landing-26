import React from 'react';
import { motion, useAnimation } from 'framer-motion';

interface TimelineCenterProps {
  dotControls: ReturnType<typeof useAnimation>;
  ringControls: ReturnType<typeof useAnimation>;
}

export function TimelineCenter({ dotControls, ringControls }: TimelineCenterProps) {
  return (
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
  );
}
