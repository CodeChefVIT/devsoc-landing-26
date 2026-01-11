import { sponsors } from '@/data';
import { SectionHeading } from '@/components/ui';
import SponsorCard from './SponsorCard';

export default function Sponsors() {
  return (
    <div className="relative py-24 bg-black">
      <div className="relative max-w-[1269px] mx-auto px-4">
        <SectionHeading title="Sponsors" />

        <div className="space-y-16">
          {sponsors.map((sponsor, index) => (
            <SponsorCard
              key={sponsor.name}
              imageOnLeft={index % 2 === 0}
              imageSrc={sponsor.logoUrl}
              title={sponsor.name}
              description={sponsor.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
