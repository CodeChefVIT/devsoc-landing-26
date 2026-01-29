'use client';

import { events } from '@/data';
import { useEffect, useRef, useState } from 'react';
import TimelineTop from './top/TimelineTop';
import TimelineMiddle from './middle/TimelineMiddle';
import TimelineBottom from './bottom/TimelineBottom';
import { useNavigation } from '@/contexts/NavigationContext';

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollLock = useRef(false);
  const [active, setActive] = useState(false);
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const { isNavigating } = useNavigation();

  const currentEvent = events[currentEventIndex];

  const next = () => setCurrentEventIndex(i => Math.min(i + 1, events.length - 1));
  const prev = () => setCurrentEventIndex(i => Math.max(i - 1, 0));

  /* Center + activate */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let activateTimeout: ReturnType<typeof setTimeout> | null = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.6 && !isNavigating) {
          const prefersReduced =
            typeof window !== 'undefined' &&
            window.matchMedia('(prefers-reduced-motion: reduce)').matches;

          el.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'center' });
          setActive(true);

          try {
            el.focus();
          } catch {}

          scrollLock.current = true;
          activateTimeout = setTimeout(() => {
            scrollLock.current = false;
          }, 700);
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (activateTimeout) clearTimeout(activateTimeout);
    };
  }, [isNavigating]);

  /* Keyboard navigation while active */
  useEffect(() => {
    if (!active) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault();
        next();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        prev();
      } else if (e.key === 'Home') {
        e.preventDefault();
        setCurrentEventIndex(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        setCurrentEventIndex(events.length - 1);
      } else if (e.key === 'Escape') {
        setActive(false);

        scrollLock.current = false;
      }
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active, currentEventIndex]);

  useEffect(() => {
    if (!active) return;

    const el = containerRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (
        (currentEventIndex === 0 && e.deltaY < 0) ||
        (currentEventIndex === events.length - 1 && e.deltaY > 0)
      ) {
        setActive(false);

        scrollLock.current = false;
        return;
      }

      e.preventDefault();
      if (scrollLock.current) return;

      scrollLock.current = true;
      if (e.deltaY > 0) {
        next();
      } else {
        prev();
      }

      setTimeout(() => {
        scrollLock.current = false;
      }, 600);
    };

    let startY = 0;
    let startX = 0;
    let lastDy = 0;
    let moved = false;
    let lockSet = false;
    let touchLockTimeout: ReturnType<typeof setTimeout> | null = null;

    const handleTouchStart = (ev: TouchEvent) => {
      if (!ev.touches || !ev.touches[0]) return;
      startY = ev.touches[0].clientY;
      startX = ev.touches[0].clientX;
      moved = false;
      lastDy = 0;
    };

    const handleTouchMove = (ev: TouchEvent) => {
      if (!ev.touches || !ev.touches[0]) return;
      const dy = ev.touches[0].clientY - startY;
      const dx = ev.touches[0].clientX - startX;
      lastDy = dy;
      if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 10) {
        moved = true;
        if (!lockSet) {
          lockSet = true;
          scrollLock.current = true;
          touchLockTimeout = setTimeout(() => {
            scrollLock.current = false;
            lockSet = false;
          }, 600);
        }
        ev.preventDefault();
      }
    };

    const handleTouchEnd = () => {
      if (!moved) return;

      if (
        (currentEventIndex === 0 && lastDy > 0) ||
        (currentEventIndex === events.length - 1 && lastDy < 0)
      ) {
        setActive(false);
        if (touchLockTimeout) {
          clearTimeout(touchLockTimeout);
          touchLockTimeout = null;
        }
        scrollLock.current = false;
        lockSet = false;
        return;
      }
      if (lastDy < 0) next();
      else prev();
    };

    el.addEventListener('wheel', onWheel as EventListener, { passive: false });

    const isTouch =
      typeof window !== 'undefined' &&
      ('ontouchstart' in window || window.matchMedia('(pointer: coarse)').matches);
    if (isTouch) {
      el.addEventListener('touchstart', handleTouchStart, { passive: true });
      el.addEventListener('touchmove', handleTouchMove, { passive: false });
      el.addEventListener('touchend', handleTouchEnd, { passive: true });
    }

    return () => {
      el.removeEventListener('wheel', onWheel as EventListener);
      if (isTouch) {
        el.removeEventListener('touchstart', handleTouchStart as EventListener);
        el.removeEventListener('touchmove', handleTouchMove as EventListener);
        el.removeEventListener('touchend', handleTouchEnd as EventListener);
      }
      if (touchLockTimeout) {
        clearTimeout(touchLockTimeout);
        touchLockTimeout = null;
      }
    };
  }, [active, currentEventIndex]);

  return (
    <section
      ref={containerRef}
      className="h-screen w-full overflow-hidden flex flex-col justify-end"
    >
      <div className="h-[90vh] w-full flex flex-col justify-center">
        <TimelineTop currentEvent={currentEvent} />
        <TimelineMiddle
          currentEvent={currentEvent}
          currentEventIndex={currentEventIndex}
          events={events}
          onIndexChange={setCurrentEventIndex}
        />
        <TimelineBottom currentEvent={currentEvent} onPrevious={prev} onNext={next} />
      </div>
    </section>
  );
}
