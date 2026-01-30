'use client';

import { useEffect, useRef, useState } from 'react';
import { useNavigation } from '@/contexts/NavigationContext';
import { timeline } from '@/data';
import TimelineTop from './top/TimelineTop';
import TimelineMiddle from './middle/TimelineMiddle';
import TimelineBottom from './bottom/TimelineBottom';

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollLock = useRef(false);
  const scrollAccumulator = useRef(0);
  const [active, setActive] = useState(false);
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const { isNavigating } = useNavigation();

  const SCROLL_THRESHOLD = 100;
  const TOUCH_THRESHOLD = 50;

  const currentEvent = timeline[currentEventIndex];

  const next = () => setCurrentEventIndex(i => Math.min(i + 1, timeline.length - 1));
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
        setCurrentEventIndex(timeline.length - 1);
      } else if (e.key === 'Escape') {
        setActive(false);

        scrollLock.current = false;
        scrollAccumulator.current = 0;
      }
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active, currentEventIndex]);

  useEffect(() => {
    if (!active) return;

    const el = containerRef.current;
    if (!el) return;

    const VELOCITY_THRESHOLD = 0.5;
    const DISTANCE_THRESHOLD = SCROLL_THRESHOLD;

    let lastWheelTime = 0;
    let wheelAccum = 0;

    const onWheel = (e: WheelEvent) => {
      if (
        (currentEventIndex === 0 && e.deltaY < 0) ||
        (currentEventIndex === timeline.length - 1 && e.deltaY > 0)
      ) {
        setActive(false);

        scrollLock.current = false;
        wheelAccum = 0;
        return;
      }

      e.preventDefault();
      if (scrollLock.current) return;

      const now = typeof performance !== 'undefined' ? performance.now() : Date.now();
      const dt = Math.max(1, now - lastWheelTime);
      lastWheelTime = now;

      const dy = e.deltaY;

      const velocity = Math.abs(dy) / dt;

      wheelAccum += dy;

      if (Math.abs(wheelAccum) > DISTANCE_THRESHOLD || velocity > VELOCITY_THRESHOLD) {
        if (wheelAccum > 0) next();
        else prev();
        wheelAccum = 0;
        scrollLock.current = true;
        setTimeout(() => {
          scrollLock.current = false;
        }, 600);
      }
    };

    let startY = 0;
    let lastTouchY = 0;
    let touchStartTime = 0;
    let touchAccum = 0;
    let moved = false;
    let lockSet = false;
    let touchLockTimeout: ReturnType<typeof setTimeout> | null = null;

    const handleTouchStart = (ev: TouchEvent) => {
      if (!ev.touches || !ev.touches[0]) return;
      startY = ev.touches[0].clientY;
      lastTouchY = startY;
      touchStartTime = typeof performance !== 'undefined' ? performance.now() : Date.now();
      moved = false;
      touchAccum = 0;
    };

    const handleTouchMove = (ev: TouchEvent) => {
      if (!ev.touches || !ev.touches[0]) return;
      const y = ev.touches[0].clientY;
      const dy = y - lastTouchY;
      lastTouchY = y;
      touchAccum += dy;

      const dx = ev.touches[0].clientX - (ev.targetTouches?.[0]?.clientX || 0);
      if (Math.abs(touchAccum) > Math.abs(dx) && Math.abs(dy) > 5) {
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

      const now = typeof performance !== 'undefined' ? performance.now() : Date.now();
      const totalTime = Math.max(1, now - touchStartTime);
      const velocity = Math.abs(touchAccum) / totalTime;

      if (
        (currentEventIndex === 0 && touchAccum > 0) ||
        (currentEventIndex === timeline.length - 1 && touchAccum < 0)
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

      if (Math.abs(touchAccum) > TOUCH_THRESHOLD || velocity > VELOCITY_THRESHOLD) {
        if (touchAccum < 0) next();
        else prev();
      }

      if (touchLockTimeout) {
        clearTimeout(touchLockTimeout);
        touchLockTimeout = null;
      }
      lockSet = false;
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
    <section ref={containerRef} className="h-fit w-full overflow-hidden flex flex-col justify-end">
      <div className="w-full flex flex-col justify-center py-6">
        <TimelineTop currentEvent={currentEvent} />
        <TimelineMiddle
          currentEvent={currentEvent}
          currentEventIndex={currentEventIndex}
          events={timeline}
          onIndexChange={setCurrentEventIndex}
        />
        <TimelineBottom
          currentEvent={currentEvent}
          onPrevious={prev}
          onNext={next}
          hasPrevious={currentEventIndex > 0}
          hasNext={currentEventIndex < timeline.length - 1}
        />
      </div>
    </section>
  );
}
