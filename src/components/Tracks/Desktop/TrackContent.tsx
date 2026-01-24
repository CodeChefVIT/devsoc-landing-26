'use client';

import Image from 'next/image';
import type { Track } from '@/data/tracks';

interface TrackContentProps {
  track: Track;
  isExpanded?: boolean;
}

export default function TrackContent({ track, isExpanded = false }: TrackContentProps) {
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

  if (track.type === 'track') {
    return (
      <div className="w-full h-full bg-[#161616] flex flex-col justify-center items-center p-4 gap-3">
        <span className={isExpanded ? 'text-xs font-semibold' : 'text-base'}>{track.title}</span>
        {isExpanded && track.description && (
          <p className="text-[8px] text-gray-400 text-center max-w-xs leading-relaxed">
            {track.description}
          </p>
        )}
      </div>
    );
  }

  return <div className="w-full h-full bg-[#161616]" />;
}
