'use client';

import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import type { TimelineMiddleProps } from '../types';

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
    return Math.round(w * 0.28);
  };

  const [slideWidth, setSlideWidth] = useState(() =>
    typeof window !== 'undefined' ? calc(window.innerWidth) : 320
  );
  const [spaceBetween, setSpaceBetween] = useState<number>(40);
  const [isPhone, setIsPhone] = useState<boolean>(
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );
  const [initialRingScale, setInitialRingScale] = useState<number>(() =>
    typeof window !== 'undefined'
      ? (window.innerWidth >= 640 ? 40 : 32) / (window.innerWidth >= 640 ? 80 : 56)
      : 32 / 56
  );
  const [slideOffset, setSlideOffset] = useState<number>(() =>
    typeof window !== 'undefined'
      ? Math.max(0, Math.round(window.innerWidth * 0.2 - calc(window.innerWidth) / 2))
      : 0
  );

  type SwiperExt = SwiperType & {
    __verticalTouchCleanup?: () => void;
    on?: (event: string, cb: () => void) => void;
    el?: HTMLElement | null;
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const onResize = () => {
      const w = window.innerWidth;
      const sw = calc(w);
      setSlideWidth(sw);
      const desktop = w >= 1024;
      const phone = w < 768;
      const sm = w >= 640;
      setIsPhone(phone);
      setInitialRingScale((sm ? 40 : 32) / (sm ? 80 : 56));
      if (desktop) {
        const desiredSpaceBetween = Math.round(w * 0.6 - sw);
        setSpaceBetween(Math.max(16, desiredSpaceBetween));
        const offset = Math.max(0, Math.round(w * 0.2 - sw / 2));
        setSlideOffset(offset);
      } else {
        setSpaceBetween(40);
        setSlideOffset(0);
      }
    };

    onResize();

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    if (swiperRef.current && typeof currentEventIndex === 'number') {
      try {
        swiperRef.current.slideTo(currentEventIndex);
      } catch {}
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
    <div className="relative w-full h-[28vh] mb-6 shrink-0">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl sm:text-12xl md:text-[12vh] lg:text-[40vh] leading-none text-white/10 text-center whitespace-nowrap pointer-events-none font-the-sans-mono select-none">
        {currentEvent.time}
      </div>

      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full overflow-hidden">
        <Swiper
          modules={[Mousewheel]}
          onSwiper={sw => {
            const s = sw as SwiperExt;
            swiperRef.current = s;
          }}
          onSlideChange={s => onIndexChange?.(s.activeIndex)}
          slidesPerView={'auto'}
          centeredSlides={isPhone}
          slidesOffsetBefore={slideOffset}
          slidesOffsetAfter={slideOffset}
          spaceBetween={spaceBetween}
          mousewheel={{ forceToAxis: true }}
          initialSlide={currentEventIndex}
        >
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
                    <div
                      className={`absolute inset-0 rounded-full border border-white pointer-events-none transform transition-transform ease-out ${
                        isCurrentEvent ? 'scale-100 opacity-100' : 'opacity-0'
                      }`}
                      style={{
                        transitionDuration: '650ms',
                        transitionDelay: '350ms',
                        transform: isCurrentEvent ? undefined : `scale(${initialRingScale})`,
                      }}
                    />

                    <button
                      type="button"
                      onClick={() => onIndexChange?.(index)}
                      aria-pressed={isCurrentEvent}
                      aria-label={`Go to ${event.title}`}
                      className={`absolute rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white transition-colors ${
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
