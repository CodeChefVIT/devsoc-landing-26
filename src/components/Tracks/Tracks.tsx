import { SectionHeading } from '@/components/ui';
import { tracks } from '@/data';
import TracksGrid from './TracksGrid';

export default function Tracks() {
  return (
    <div className="relative overflow-visible">
      <SectionHeading title="Tracks" />
      <TracksGrid tracks={tracks} />
    </div>
  );
}
