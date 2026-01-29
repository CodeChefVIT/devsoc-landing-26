import { ChevronLeft, ChevronRight } from 'lucide-react';

import type { TimelineBottomProps } from '../types';

export default function TimelineBottom({ currentEvent, onPrevious, onNext }: TimelineBottomProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4 px-4 sm:px-6 md:px-8 lg:px-12 py-4 md:py-6 md:mb-8">
      <div className="flex-1 w-full text-left px-0 md:px-4 min-h-24">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 font-lato">
          {currentEvent.subtitle}
        </h3>

        <p
          className="text-sm md:text-base font-medium text-neutral-500"
          style={{ fontFamily: 'Lato, sans-serif' }}
        >
          {currentEvent.description}
        </p>
      </div>

      <div className="flex flex-row items-center gap-6 mx-auto md:mx-0 mt-4 md:mt-0">
        <button
          onClick={onPrevious}
          className="relative w-17.5 h-17.5 md:w-20 md:h-20 rounded-full bg-neutral-900/31 border border-white/10 hover:bg-neutral-800/50 transition-colors group shrink-0"
          aria-label="Previous event"
          onKeyDown={e => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onPrevious();
            }
          }}
        >
          <ChevronLeft
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 text-white transition-transform"
            strokeWidth={3}
          />
        </button>

        <button
          onClick={onNext}
          className="relative w-17.5 h-17.5 md:w-20 md:h-20 rounded-full bg-neutral-900/31 border border-white/10 hover:bg-neutral-800/50 transition-colors group shrink-0"
          aria-label="Next event"
          onKeyDown={e => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onNext();
            }
          }}
        >
          <ChevronRight
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 text-white transition-transform"
            strokeWidth={3}
          />
        </button>
      </div>
    </div>
  );
}
