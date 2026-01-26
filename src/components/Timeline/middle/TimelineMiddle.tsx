import type { Event } from '@/data';

interface TimelineMiddleProps {
  currentEvent: Event;
  currentEventIndex: number;
  events: Event[];
}

export default function TimelineMiddle({
  currentEvent,
  currentEventIndex,
  events,
}: TimelineMiddleProps) {
  const totalEvents = events.length;
  const eventSpacing = typeof window !== 'undefined' ? window.innerWidth * 0.4 : 400;
  const containerWidth = (totalEvents - 1) * eventSpacing;

  // Translate the progress line so current event is at 20% from left
  const translateX =
    -(currentEventIndex * eventSpacing) +
    (typeof window !== 'undefined' ? window.innerWidth * 0.2 : 80);

  return (
    <div className="relative w-full h-[35vh] overflow-x-auto mb-8 shrink-0">
      {/* Large time background */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vh] leading-none text-white/10 text-center whitespace-nowrap pointer-events-none font-the-sans-mono select-none">
        {currentEvent.time}
      </div>

      {/* Progress Container - scrolls horizontally */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 h-20 transition-transform duration-700"
        style={{
          width: `${containerWidth + 200}px`,
          transform: `translateX(${translateX}px)`,
        }}
      >
        {/* Horizontal Line - base line */}
        <div
          className="absolute left-0 top-1/2 h-px bg-white/30"
          style={{ width: `${containerWidth}px` }}
        />
        {/* Event circles */}
        <div className="absolute left-0 top-0 h-full">
          {events.map((event, index) => {
            const isCurrentEvent = index === currentEventIndex;
            const isPastEvent = index < currentEventIndex;

            return (
              <div
                key={event.id}
                className="absolute flex flex-col items-center gap-2"
                style={{
                  left: `${index * eventSpacing}px`,
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                {/* Circle */}
                <div className={`relative ${isCurrentEvent ? 'w-20 h-20' : 'w-10 h-10'}`}>
                  {/* Outer ring (only for current event) */}
                  {isCurrentEvent && (
                    <div className="absolute inset-0 rounded-full border border-white" />
                  )}

                  {/* Inner circle */}
                  <div
                    className={`absolute rounded-full ${
                      isCurrentEvent
                        ? 'w-10 h-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
                        : 'w-full h-full'
                    } ${
                      isPastEvent || isCurrentEvent
                        ? 'bg-white shadow-lg shadow-white/50'
                        : 'bg-white/30'
                    }`}
                  />
                </div>

                {/* Event time label - only show for current event */}
                {isCurrentEvent && (
                  <span className="text-white text-xs font-mono absolute -bottom-8 whitespace-nowrap">
                    {event.time}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
