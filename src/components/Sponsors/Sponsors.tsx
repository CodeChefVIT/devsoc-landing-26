import Image from 'next/image';
import { SectionHeading } from '@/components/ui';
import { sponsors } from '@/data';
import SponsorCard from './SponsorCard';

export default function Sponsors() {
  const getAlignment = (index: number) => {
    if (index === 0) return 'left'; // Image centered on line 1
    if (index === 1) return 'right'; // Image centered on line 3
    return 'full-left'; // Left border on line 1
  };

  return (
    <div className="relative">
      <div className="relative">
        <Image
          src="/images/backgrounds/bg-sponsors-art.svg"
          fill
          className="hidden md:block object-contain -z-10 scale-90 -translate-y-10"
          alt="Sponsors background art"
        />
        <SectionHeading title="Sponsors" />

        <div className="space-y-2 sm:space-y-3 md:space-y-4 w-full">
          {sponsors.map((sponsor, index) => (
            <SponsorCard
              key={sponsor.name}
              alignment={getAlignment(index)}
              imageSrc={sponsor.logoUrl}
              title={sponsor.name}
              description={sponsor.description}
              websiteUrl={sponsor.websiteUrl}
            />
          ))}
        </div>
        <div className="md:hidden absolute left-0 bottom-0 w-[50vw] h-full -z-10">
          <Image
            src="/images/backgrounds/bg-sponsors-art-phone.svg"
            fill
            className="object-contain object-bottom"
            alt="Sponsors background art phone"
          />
        </div>
      </div>
    </div>
  );
}
