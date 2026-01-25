'use client';

import type { Track } from '@/data/tracks';
import TrackCard from './TrackCard';

interface TrackRowProps {
  tracks: Track[];
  startIndex: number;
  expandedIndex: number | null;
  onCardClick: (index: number) => void;
  hasBottomBorder: boolean;
}

export default function TrackRow({
  tracks,
  startIndex,
  expandedIndex,
  onCardClick,
  hasBottomBorder,
}: TrackRowProps) {
  const COLUMNS = 4;

  return (
    <div className={`flex w-full h-1/3 ${hasBottomBorder ? '' : ''}`}>
      {tracks.map((track, localIdx) => {
        const globalIdx = startIndex + localIdx;
        const borderClasses = `${localIdx < COLUMNS - 1 ? 'border-r' : ''} ${
          hasBottomBorder ? 'border-b' : ''
        } border-[#505050]`;

        return (
          <TrackCard
            key={track.id}
            track={track}
            index={globalIdx}
            expandedIndex={expandedIndex}
            onCardClick={onCardClick}
            borderClasses={borderClasses}
          />
        );
      })}
    </div>
  );
}
