'use client';

import { events } from '@/data';
import { useEffect, useRef, useState } from 'react';
import TimelineTop from './top/TimelineTop';
import TimelineMiddle from './middle/TimelineMiddle';
import TimelineBottom from './bottom/TimelineBottom';

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollLock = useRef(false);
  const [active, setActive] = useState(false);
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  const currentEvent = events[currentEventIndex];

  const next = () => setCurrentEventIndex(i => Math.min(i + 1, events.length - 1));
  const prev = () => setCurrentEventIndex(i => Math.max(i - 1, 0));

  /* Center + activate */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          setActive(true);
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  /* HARD scroll hijack */
  useEffect(() => {
    if (!active) return;

    const onWheel = (e: WheelEvent) => {
      // allow escape at edges
      if (
        (currentEventIndex === 0 && e.deltaY < 0) ||
        (currentEventIndex === events.length - 1 && e.deltaY > 0)
      ) {
        setActive(false);
        return;
      }

      e.preventDefault();
      if (scrollLock.current) return;

      scrollLock.current = true;
      e.deltaY > 0 ? next() : prev();

      setTimeout(() => {
        scrollLock.current = false;
      }, 600);
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    return () => window.removeEventListener('wheel', onWheel);
  }, [active, currentEventIndex]);

  return (
    <section
      ref={containerRef}
      className="h-screen w-full overflow-hidden flex flex-col justify-center px-6 md:px-12"
    >
      <TimelineTop currentEvent={currentEvent} />
      <TimelineMiddle
        currentEvent={currentEvent}
        currentEventIndex={currentEventIndex}
        events={events}
      />
      <TimelineBottom currentEvent={currentEvent} onPrevious={prev} onNext={next} />
    </section>
  );
}
