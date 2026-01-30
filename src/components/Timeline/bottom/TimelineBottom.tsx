import { ChevronLeft, ChevronRight } from 'lucide-react';
import TimelineNavButton from './TimelineNavButton';

import type { TimelineBottomProps } from '../types';

export default function TimelineBottom({
  currentEvent,
  onPrevious,
  onNext,
  hasPrevious = true,
  hasNext = true,
}: TimelineBottomProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4 px-4 sm:px-6 md:px-8 lg:px-12 py-4 md:py-6 md:mb-8">
      <div className="flex-1 w-full text-left px-0 md:px-4 min-h-24">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 font-lato">
          {currentEvent.subtitle}
        </h3>

        <p className="text-sm md:text-base font-medium text-neutral-500 font-lato">
          {currentEvent.description}
        </p>
      </div>

      <div className="flex flex-row items-center gap-6 mx-auto md:mx-0 mt-4 md:mt-0">
        <TimelineNavButton onStep={onPrevious} ariaLabel="Previous event" disabled={!hasPrevious}>
          <ChevronLeft
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 text-white transition-transform"
            strokeWidth={3}
          />
        </TimelineNavButton>

        <TimelineNavButton onStep={onNext} ariaLabel="Next event" disabled={!hasNext}>
          <ChevronRight
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 text-white transition-transform"
            strokeWidth={3}
          />
        </TimelineNavButton>
      </div>
    </div>
  );
}
