import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Event } from '@/data';

interface TimelineBottomProps {
  currentEvent: Event;
  onPrevious: () => void;
  onNext: () => void;
}

export default function TimelineBottom({ currentEvent, onPrevious, onNext }: TimelineBottomProps) {
  return (
    <div className="flex flex-row justify-between items-center w-full gap-4">
      {/* Bottom Text */}
      <div className="flex-1 max-w-2xl mx-auto text-left">
        {/* Subtitle */}
        <h3
          className="text-xl md:text-2xl font-bold text-white mb-2"
          style={{ fontFamily: 'Lato, sans-serif' }}
        >
          {currentEvent.subtitle}
        </h3>

        {/* Description */}
        <p
          className="text-sm md:text-base font-medium text-neutral-500"
          style={{ fontFamily: 'Lato, sans-serif' }}
        >
          {currentEvent.description}
        </p>
      </div>

      {/* Arrows */}
      <div className="flex flex-row items-center gap-6 mx-auto">
        {/* Arrow Left */}
        <button
          onClick={onPrevious}
          className="relative w-17.5 h-17.5 md:w-20 md:h-20 rounded-full bg-neutral-900/31 border border-white/10 hover:bg-neutral-800/50 transition-colors group shrink-0"
          aria-label="Previous event"
        >
          <ChevronLeft
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 text-white transition-transform"
            strokeWidth={3}
          />
        </button>

        {/* Arrow Right */}
        <button
          onClick={onNext}
          className="relative w-17.5 h-17.5 md:w-20 md:h-20 rounded-full bg-neutral-900/31 border border-white/10 hover:bg-neutral-800/50 transition-colors group shrink-0"
          aria-label="Next event"
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
