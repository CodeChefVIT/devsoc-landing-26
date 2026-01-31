'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import type { Track } from '@/data/tracks';

interface TrackContentProps {
  track: Track;
  isExpanded?: boolean;
  descriptionAction?: 'show' | 'hide' | null;
  onDescriptionAnimationComplete?: () => void;
}

export default function TrackContent({
  track,
  isExpanded = false,
  descriptionAction = null,
  onDescriptionAnimationComplete,
}: TrackContentProps) {
  useEffect(() => {
    if (!descriptionAction) return;
    const duration = 260;
    const t = setTimeout(() => {
      onDescriptionAnimationComplete?.();
    }, duration);
    return () => clearTimeout(t);
  }, [descriptionAction, onDescriptionAnimationComplete]);

  if (!track) {
    return <div className="w-full h-full bg-[#161616]" />;
  }

  if (track.type === 'spacer' || track.transparent) {
    return <div className="w-full h-full bg-transparent" />;
  }

  if (track.type === 'decoration' && track.image?.desktop) {
    return (
      <div className="relative w-full h-full">
        <Image
          src={track.image.desktop}
          alt="Track Decoration"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 25vw, 12vw"
          draggable="false"
          loading="lazy"
        />
      </div>
    );
  }
  if (track.type === 'track' && track.image?.desktop) {
    return (
      <div className="relative w-full h-full">
        <Image
          src={track.image.desktop}
          alt={track.title ?? 'Track'}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 25vw, 12vw"
          draggable="false"
          loading="lazy"
        />
      </div>
    );
  }

  if (track.type === 'track') {
    const shouldShowDescription = Boolean(
      track.description &&
      (isExpanded || descriptionAction === 'show' || descriptionAction === 'hide')
    );

    return (
      <div className="w-full h-full bg-[#161616] flex flex-col justify-center items-center p-2 gap-2">
        <span
          className={
            isExpanded ? 'text-[10px] font-semibold mt-2 text-center' : 'text-s text-center'
          }
        >
          {track.title}
        </span>

        <AnimatePresence mode="wait">
          {shouldShowDescription && (
            <motion.p
              key="desc"
              initial={
                descriptionAction === 'show'
                  ? { opacity: 0, y: 6 }
                  : isExpanded
                    ? false
                    : { opacity: 1, y: 0 }
              }
              animate={
                descriptionAction === 'show'
                  ? { opacity: 1, y: 0 }
                  : descriptionAction === 'hide'
                    ? { opacity: 0, y: 6 }
                    : { opacity: 1, y: 0 }
              }
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.26, ease: 'easeInOut' }}
              className={`text-gray-400 leading-tight whitespace-pre-line ${
                track.id === 1 && isExpanded
                  ? 'text-[6.5px] text-left max-w-[140px] p-0 m-0'
                  : 'text-[6.5px] text-left max-w-xs'
              }`}
            >
              {track.description}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return <div className="w-full h-full bg-[#161616]" />;
}
