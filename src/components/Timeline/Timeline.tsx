'use client';

import { events } from '@/data';
import { useState } from 'react';
import TimelineTop from './top/TimelineTop';
import TimelineMiddle from './middle/TimelineMiddle';
import TimelineBottom from './bottom/TimelineBottom';

export default function Timeline() {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const currentEvent = events[currentEventIndex];

  const handlePrevious = () => {
    setCurrentEventIndex(prev => (prev > 0 ? prev - 1 : events.length - 1));
  };

  const handleNext = () => {
    setCurrentEventIndex(prev => (prev < events.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="flex flex-col justify-center items-start px-6 md:px-12 py-8 relative w-full max-h-[80vh] h-[80vh]">
      {/* Top */}
      <TimelineTop currentEvent={currentEvent} />

      {/* Middle - Progress & Time */}
      <TimelineMiddle
        currentEvent={currentEvent}
        currentEventIndex={currentEventIndex}
        events={events}
      />

      {/* Bottom */}
      <TimelineBottom currentEvent={currentEvent} onPrevious={handlePrevious} onNext={handleNext} />
    </div>
  );
}
