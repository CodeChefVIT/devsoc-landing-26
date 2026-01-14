import { SectionHeading } from '@/components/ui';
import { tracks } from '@/data';
import TracksGrid from './TracksGrid';

export default function Tracks() {
  return (
    <div>
      <SectionHeading title="Tracks" />
      <TracksGrid tracks={tracks} />
    </div>
  );
}
