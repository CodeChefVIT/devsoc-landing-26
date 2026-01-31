'use client';

import type { Track } from '@/data/tracks';
import Glass from '@/components/ui/Glass/Glass';

export default function TrackCarouselCard({ track }: { track: Track }) {
  if (!track) return null;

  return (
    <div className="shrink-0 w-52 overflow-hidden snap-center">
      <Glass className="h-full! rounded-3xl p-4 shadow-[0px_4px_12px_rgba(0,0,0,0.08)] flex flex-col justify-between overflow-hidden">
        <div className="flex flex-col h-full">
          <div className="flex-1 min-h-0 h-full flex flex-col gap-2.5">
            <h3 className="text-white text-md font-bold leading-tight mb-2 h-4">{track.title}</h3>
            {track.description && (
              <p className="text-white/80 text-xs leading-snug whitespace-pre-wrap overflow-hidden max-h-36">
                {track.description}
              </p>
            )}
            <p className="mt-4 text-white text-xs font-medium text-right">
              {track.isSponsorTrack ? 'Sponsor Track' : ''}
            </p>
          </div>
        </div>
      </Glass>
    </div>
  );
}
