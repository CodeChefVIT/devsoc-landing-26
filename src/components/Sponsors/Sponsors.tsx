import { sponsors } from '@/data';
import { SectionHeading } from '@/components/ui';
import SponsorCard from './SponsorCard';

export default function Sponsors() {
  const getAlignment = (index: number) => {
    if (index === 0) return 'left'; // Image centered on line 1
    if (index === 1) return 'right'; // Image centered on line 3
    return 'full-left'; // Left border on line 1
  };

  return (
    <div className="relative py-16 sm:py-20 md:py-22 lg:py-24">
      <div className="relative">
        <SectionHeading title="Sponsors" />

        <div className="space-y-10 sm:space-y-12 md:space-y-14 lg:space-y-16 w-full">
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
      </div>
    </div>
  );
}
