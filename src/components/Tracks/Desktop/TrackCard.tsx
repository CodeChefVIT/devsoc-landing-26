'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Track } from '@/data/tracks';
import TrackContent from './TrackContent';
import { getAnimationVariant, getExpandedAnimationProps } from './animations';

interface TrackCardProps {
  track: Track;
  index: number;
  expandedIndex: number | null;
  onCardClick: (index: number) => void;
  borderClasses: string;
}

export default function TrackCard({
  track,
  index,
  expandedIndex,
  onCardClick,
  borderClasses,
}: TrackCardProps) {
  const isExpanded = expandedIndex === index;
  const hasExpandedCard = expandedIndex !== null;
  const animationVariant = getAnimationVariant(expandedIndex, index);
  const isClickable = track.type === 'track';

  const [descriptionAction, setDescriptionAction] = useState<'show' | 'hide' | null>(null);
  const [awaitingDescription, setAwaitingDescription] = useState(false);
  const inFlightRef = useRef(false);

  useEffect(() => {
    const t = setTimeout(() => {
      setDescriptionAction(null);
      setAwaitingDescription(false);
      inFlightRef.current = false;
    }, 0);
    return () => clearTimeout(t);
  }, [expandedIndex]);

  const handleClick = () => {
    if (!isClickable) return;
    if (inFlightRef.current) return;

    if (!isExpanded) {
      inFlightRef.current = true;
      setDescriptionAction('show');
      setAwaitingDescription(true);
    } else {
      inFlightRef.current = true;
      setDescriptionAction('hide');
      setAwaitingDescription(true);
    }
  };

  const onDescriptionAnimationComplete = () => {
    if (!awaitingDescription) return;
    setAwaitingDescription(false);
    setDescriptionAction(null);

    onCardClick(index);

    setTimeout(() => {
      inFlightRef.current = false;
    }, 50);
  };

  return (
    <motion.div
      key={track.id}
      className={`flex-1 aspect-square relative ${isClickable ? 'cursor-pointer' : 'cursor-default'} ${!isExpanded ? borderClasses : ''} ${isExpanded ? 'z-50' : 'z-0'}`}
      onClick={handleClick}
      animate={
        isExpanded
          ? { scale: 1, x: 0, y: 0, opacity: 1 }
          : hasExpandedCard
            ? animationVariant
            : { scale: 1, x: 0, y: 0, opacity: 1 }
      }
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
        delay: !isExpanded && hasExpandedCard ? 0.2 : 0,
      }}
    >
      <AnimatePresence mode="wait">
        {isExpanded ? (
          <motion.div
            key="expanded"
            className="absolute inset-0 bg-[#161616] border-[0.5px] border-transparent rounded-2xl flex items-center justify-center"
            initial={{ scale: 1 }}
            animate={getExpandedAnimationProps(index)}
            exit={{ scale: 1, x: 0, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <TrackContent
              track={track}
              isExpanded={true}
              descriptionAction={descriptionAction}
              onDescriptionAnimationComplete={onDescriptionAnimationComplete}
            />
          </motion.div>
        ) : (
          <motion.div
            key="collapsed"
            className="w-full h-full"
            initial={false}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.15, ease: 'easeInOut' }}
          >
            <TrackContent
              track={track}
              isExpanded={false}
              descriptionAction={descriptionAction}
              onDescriptionAnimationComplete={onDescriptionAnimationComplete}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
