import Image from 'next/image';
import Link from 'next/link';

interface SpeakerCardProps {
  name: string;
  designation: string;
  imageSrc: string;
  linkedinUrl: string;
}

const SpeakerCard = ({
  name = 'Speaker Name',
  designation = 'Designation',
  imageSrc = '/icon.avif',
  linkedinUrl = '#',
}: SpeakerCardProps) => {
  return (
    <div className="w-full h-full flex justify-center">
      <div className="relative bg-[#0A0A0A] flex flex-col items-center justify-between w-full h-full border border-white/25 rounded-[20px] p-6 lg:p-8 gap-6 transition-all duration-300 hover:border-white/50 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]">
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 shrink-0">
          <div className="absolute inset-0 rounded-full bg-linear-to-tr from-white/20 to-transparent p-1">
            <div className="w-full h-full rounded-full overflow-hidden relative bg-[#0A0A0A]">
              <Image src={imageSrc} fill alt={name} className="object-cover" loading="lazy" />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center text-center gap-2 w-full grow">
          <h2 className="font-bold text-white font-lato text-xl sm:text-2xl leading-tight">
            {name}
          </h2>
          <p className="font-bold text-[#ADAAF7] font-lato text-sm sm:text-base leading-relaxed">
            {designation}
          </p>
        </div>

        <Link href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="mt-auto">
          <button className="relative flex items-center justify-center group transition-all duration-300 hover:scale-105 active:scale-95 w-32 h-10 bg-black/[0.001] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-[10px]">
            <div
              className="absolute inset-0 rounded-[10px] pointer-events-none p-px backdrop-blur-xs backdrop-saturate-[1.8] backdrop-brightness-[1.05]"
              style={{
                background:
                  'linear-gradient(-45deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.3) 100%)',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
              }}
            />

            <div className="absolute inset-0 flex items-center justify-center gap-2">
              <span className="font-bold text-white transition-all duration-300 bg-clip-text font-lato text-lg">
                LinkedIn
              </span>
              <div className="relative w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                <Image
                  src="/images/icons/arrow-up-right.svg"
                  alt="Arrow Right"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SpeakerCard;
