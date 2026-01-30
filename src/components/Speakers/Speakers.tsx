import Image from 'next/image';
import { SectionHeading } from '@/components/ui';
import { speakers } from '@/data';
import SpeakerCard from './SpeakerCard';

export default function Speakers() {
  return (
    <div className="relative w-full py-12 md:py-16">
      <div className="relative container mx-auto px-4 sm:px-6">
        <SectionHeading title="Speakers" />

        <div className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-16 max-w-5xl mx-auto">
          {speakers.map((speaker, index) => (
            <SpeakerCard
              key={index}
              name={speaker.name}
              designation={speaker.designation}
              imageSrc={speaker.image}
              linkedinUrl={speaker.linkedin}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
