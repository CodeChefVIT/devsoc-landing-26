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
    <div className="relative h-[90vh]">
      <div className="relative">
        <Image
          src="/images/backgrounds/bg-sponsors-art.svg"
          fill
          className="hidden md:block object-contain -z-10 scale-125 translate-y-4"
          alt="Sponsors background art"
          draggable="false"
          loading="lazy"
        />
        <SectionHeading title="Sponsors" />

        <div className="space-y-14 sm:space-y-3 md:space-y-4 w-full">
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
        <div className="md:hidden absolute left-0 -bottom-100 w-[50vw] h-[110%] -z-10">
          <Image
            src="/images/backgrounds/bg-sponsors-art-phone.svg"
            fill
            className="object-contain object-left"
            alt="Sponsors background art phone"
            draggable="false"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
