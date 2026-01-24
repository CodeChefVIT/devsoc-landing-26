'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { Track } from '@/data/tracks';
import TrackRow from './TrackRow';

const ROWS = 3;
const TRACKS_PER_ROW = 4;

export default function TracksGrid({ tracks }: { tracks: Track[] }) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const trackRows = Array.from({ length: ROWS }, (_, rowIdx) => ({
    startIndex: rowIdx * TRACKS_PER_ROW,
    tracks: tracks.slice(rowIdx * TRACKS_PER_ROW, (rowIdx + 1) * TRACKS_PER_ROW),
    hasBottomBorder: rowIdx < ROWS - 1,
  }));

  return (
    <div className="mx-4 sm:mx-auto max-w-[100vh] relative">
      <div className="relative w-full h-[75vh] border border-[#505050] rounded-3xl overflow-hidden">
        <Image
          src="/images/backgrounds/bg-tracks_grid.avif"
          alt="Tracks background"
          fill
          className="object-cover -z-10"
          priority
        />

        <div className="relative w-full h-full">
          {trackRows.map(row => (
            <TrackRow
              key={row.startIndex}
              tracks={row.tracks}
              startIndex={row.startIndex}
              expandedIndex={expandedIndex}
              onCardClick={handleClick}
              hasBottomBorder={row.hasBottomBorder}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
