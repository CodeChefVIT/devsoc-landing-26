'use client';

import Image from 'next/image';
import type { Track } from '@/data/tracks';

export default function TrackContent({ track }: { track: Track }) {
  if (!track) {
    return <div className="w-full h-full bg-[#161616]" />;
  }

  if (track.transparent) {
    return <div className="w-full h-full bg-transparent" />;
  }

  if (track.image) {
    return (
      <div className="relative w-full h-full">
        <Image
          src={track.image}
          alt={track.title ?? 'Track Image'}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 25vw, 12vw"
          draggable="false"
        />
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[#161616] flex justify-center items-center p-3">
      <span className="text-base">{track.title}</span>
    </div>
  );
}
