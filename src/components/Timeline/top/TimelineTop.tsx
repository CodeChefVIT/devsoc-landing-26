import { SectionHeading } from '@/components/ui';
import type { Event } from '@/data';

interface TimelineTopProps {
  currentEvent: Event;
}

export default function TimelineTop({ currentEvent }: TimelineTopProps) {
  return (
    <div className="flex flex-col w-full gap-6">
      {/* Timeline Heading */}
      <div className="w-full text-left">
        <SectionHeading title="Timeline" className="text-left mb-0!" />
      </div>

      {/* Top Details */}
      <div className="flex flex-col w-full">
        {/* Title with gradient */}
        <div className="w-full text-4xl ml-12 md:text-5xl lg:text-6xl font-medium text-left leading-tight font-lato gradient-text-event">
          {currentEvent.title}
        </div>

        {/* Day indicator */}
        <div className="w-full text-3xl md:text-4xl lg:text-5xl text-right text-white leading-tight font-italianno">
          Day {currentEvent.day}
        </div>
      </div>
    </div>
  );
}
