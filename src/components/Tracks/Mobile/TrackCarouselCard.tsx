'use client';

import Image from 'next/image';
import type { Track } from '@/data/tracks';

export default function TrackCarouselCard({ track }: { track: Track }) {
  if (!track) {
    return null;
  }

  const backgroundImage = track.image?.mobile || track.image?.desktop;

  return (
    <div className="relative shrink-0 w-52 h-72 rounded-3xl overflow-hidden snap-center shadow-[0px_4px_12px_rgba(0,0,0,0.08)]">
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt={track.title ?? 'Track Image'}
          fill
          className="object-cover"
          sizes="200px"
          draggable="false"
        />
      )}

      <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/64" />

      <div className="absolute bottom-0 left-0 right-0 pb-4 flex items-end justify-center">
        <h3 className="text-white text-center leading-tight font-the-sans-mono text-sm font-medium">
          {track.title}
        </h3>
      </div>
    </div>
  );
}
