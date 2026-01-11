import Image from 'next/image';
import Link from 'next/link';

type AlignmentType = 'left' | 'right' | 'full-left';

const SponsorCard = ({
  alignment = 'left' as AlignmentType,
  imageSrc = '/icon.avif',
  title = 'Sponsor Name',
  description = 'Sponsor Description',
  websiteUrl = '#',
}) => {
  const getLayoutStyle = () => {
    if (alignment === 'left') {
      return 'lg:pl-[calc(25%-150px)]';
    } else if (alignment === 'right') {
      return 'lg:pr-[calc(25%-150px)]';
    } else {
      return 'lg:pl-[25%]';
    }
  };

  const getFlexDirection = () => {
    return alignment === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row';
  };

  return (
    <div className="w-full">
      <div
        className={`flex flex-col ${getFlexDirection()} ${getLayoutStyle()} gap-10 lg:gap-14 items-center lg:items-start`}
      >
        <div className="w-full lg:w-[300px] shrink-0">
          <div className="relative bg-[#0A0A0A] flex flex-col items-center justify-between w-[300px] h-[250px] border border-white/25 rounded-[20px] p-0">
            <div className="flex items-center justify-center flex-1 w-full">
              <Image
                src={imageSrc}
                width={279}
                height={102}
                alt="Logo"
                className="object-contain max-w-[279.19px] max-h-[101.59px]"
                loading="lazy"
                draggable={false}
              />
            </div>

            <Link href={websiteUrl} target="_blank" rel="noopener noreferrer">
              <button className="relative flex items-center justify-center mb-7 group transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden w-[120px] h-10 bg-black/[0.001] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-[10px]">
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

                <div className="absolute inset-0 flex items-center justify-center gap-0 w-16 h-6 top-2 left-[calc(50%-32px)]">
                  <span className="font-bold text-white transition-all duration-300 group-hover:-translate-x-0.5 font-lato text-xl leading-6 w-[41px] h-6 absolute left-[calc(50%-41px/2-11.5px)] top-[calc(50%-24px/2)]">
                    Visit
                  </span>
                  <Image
                    src="/images/icons/arrow-up-right.svg"
                    alt="Arrow Right"
                    width={19}
                    height={16}
                    className="transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-px absolute w-[19px] h-4 left-[calc(50%-19px/2+22.5px)] top-1"
                  />
                </div>
              </button>
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-[337px] flex flex-col gap-4">
          <h2 className="font-bold text-white font-lato text-2xl leading-[29px]">{title}</h2>
          <p className="font-bold text-[#ADAAF7] font-lato text-base leading-[19px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SponsorCard;
