'use client';

import type { Track } from '@/data/tracks';
import TrackCarouselCard from './TrackCarouselCard';

const mobileTrackImages = [
  '/images/tracks/track 1.png',
  '/images/tracks/track 2.png',
  '/images/tracks/track 3.png',
  '/images/tracks/track 4.png',
  '/images/tracks/track 5.png',
  '/images/tracks/track 6.png',
];

export default function TracksCarousel({ tracks }: { tracks: Track[] }) {
  // Filter out empty/transparent tracks for carousel
  const validTracks = tracks.filter(track => track.title && !track.transparent);

  return (
    <div className="w-full overflow-hidden py-8">
      <div className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-4">
        {validTracks.map((track, idx) => (
          <TrackCarouselCard
            key={track.id}
            track={{
              ...track,
              image: { mobile: mobileTrackImages[idx] },
            }}
          />
        ))}
      </div>
    </div>
  );
}
