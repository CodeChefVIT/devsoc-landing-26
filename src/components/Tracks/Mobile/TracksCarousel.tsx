'use client';

import type { Track } from '@/data/tracks';
import TrackCarouselCard from './TrackCarouselCard';

export default function TracksCarousel({ tracks }: { tracks: Track[] }) {
  const trackItems = tracks.filter(track => track.type === 'track');

  return (
    <div className="w-full overflow-hidden py-8">
      <div className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-4">
        {trackItems.map(track => (
          <TrackCarouselCard key={track.id} track={track} />
        ))}
      </div>
    </div>
  );
}
