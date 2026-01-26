'use client';

import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import type { Event } from '@/data';

interface TimelineMiddleProps {
  currentEvent: Event;
  currentEventIndex: number;
  events: Event[];
  onIndexChange?: (i: number) => void;
}

export default function TimelineMiddle({
  currentEvent,
  currentEventIndex,
  events,
  onIndexChange,
}: TimelineMiddleProps) {
  const swiperRef = useRef<SwiperType | null>(null);
  const calc = (w: number) => {
    if (w < 480) return Math.round(w * 0.8);
    if (w < 768) return Math.round(w * 0.6);
    if (w < 1024) return Math.round(w * 0.45);
    return Math.round(w * 0.4);
  };

  const [slideWidth, setSlideWidth] = useState(() =>
    typeof window !== 'undefined' ? calc(window.innerWidth) : 320
  );

  type SwiperExt = SwiperType & {
    __verticalTouchCleanup?: () => void;
    on?: (event: string, cb: () => void) => void;
    el?: HTMLElement | null;
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const onResize = () => setSlideWidth(calc(window.innerWidth));
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    if (swiperRef.current && typeof currentEventIndex === 'number') {
      // keep swiper in sync when parent index changes
      try {
        swiperRef.current.slideTo(currentEventIndex);
      } catch {
        // ignore if swiper not yet ready
      }
    }
  }, [currentEventIndex]);

  useEffect(() => {
    return () => {
      const s = swiperRef.current as SwiperExt | null;
      if (s && typeof s.__verticalTouchCleanup === 'function') {
        try {
          s.__verticalTouchCleanup();
        } catch {}
      }
    };
  }, []);

  return (
    <div className="relative w-full h-[35vh] overflow-hidden mb-8 shrink-0">
      {/* Large time background */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl sm:text-12xl md:text-[12vh] lg:text-[20vh] leading-none text-white/10 text-center whitespace-nowrap pointer-events-none font-the-sans-mono select-none">
        {currentEvent.time}
      </div>

      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full">
        <Swiper
          modules={[Mousewheel]}
          onSwiper={sw => {
            const s = sw as SwiperExt;
            swiperRef.current = s;
          }}
          onSlideChange={s => onIndexChange?.(s.activeIndex)}
          slidesPerView={'auto'}
          centeredSlides={true}
          spaceBetween={40}
          mousewheel={{ forceToAxis: true }}
          initialSlide={currentEventIndex}
        >
          {/* Horizontal baseline */}
          <div className="absolute left-0 top-1/2 h-px bg-white/30 w-full" />

          {events.map((event, index) => {
            const isCurrentEvent = index === currentEventIndex;
            const isPastEvent = index < currentEventIndex;

            return (
              <SwiperSlide key={event.id} style={{ width: `${slideWidth}px` }}>
                <div className="flex flex-col items-center gap-2 justify-center h-28 sm:h-40">
                  <div
                    className={`relative ${
                      isCurrentEvent ? 'w-14 h-14 sm:w-20 sm:h-20' : 'w-8 h-8 sm:w-10 sm:h-10'
                    }`}
                  >
                    {isCurrentEvent && (
                      <div className="absolute inset-0 rounded-full border border-white" />
                    )}

                    <div
                      className={`absolute rounded-full ${
                        isCurrentEvent
                          ? 'w-8 h-8 sm:w-10 sm:h-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
                          : 'w-full h-full'
                      } ${isPastEvent || isCurrentEvent ? 'bg-white shadow-lg shadow-white/50' : 'bg-white/30'}`}
                    />
                  </div>

                  {isCurrentEvent && (
                    <span className="text-white text-xs sm:text-sm font-mono absolute -bottom-8 sm:-bottom-10 whitespace-nowrap">
                      {event.time}
                    </span>
                  )}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
