'use client';

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
  const isClickable = track.title;

  return (
    <motion.div
      key={track.id}
      className={`flex-1 aspect-square relative ${isClickable ? 'cursor-pointer' : 'cursor-default'} ${borderClasses}`}
      onClick={() => isClickable && onCardClick(index)}
      animate={
        isExpanded
          ? { scale: 1, x: 0, y: 0, opacity: 1 }
          : hasExpandedCard
            ? animationVariant
            : { scale: 1, x: 0, y: 0, opacity: 1 }
      }
      transition={{
        duration: 0.5,
        ease: 'easeInOut',
        delay: !isExpanded && hasExpandedCard ? 0.2 : 0,
      }}
      style={{
        zIndex: isExpanded ? 50 : 1,
      }}
    >
      <AnimatePresence mode="wait">
        {isExpanded ? (
          <motion.div
            key="expanded"
            className="absolute inset-0 bg-[#161616] border border-[#505050] rounded-2xl flex items-center justify-center"
            initial={{ scale: 1 }}
            animate={getExpandedAnimationProps(index)}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <TrackContent track={track} />
          </motion.div>
        ) : (
          <motion.div
            key="collapsed"
            className="w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <TrackContent track={track} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
