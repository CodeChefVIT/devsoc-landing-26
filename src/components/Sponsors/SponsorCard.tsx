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
      return 'md:pl-[calc(20%-120px)] lg:pl-[calc(25%-150px)]';
    } else if (alignment === 'right') {
      return 'md:pr-[calc(20%-120px)] lg:pr-[calc(25%-150px)]';
    } else {
      return 'md:pl-[20%] lg:pl-[25%]';
    }
  };

  const getFlexDirection = () => {
    return alignment === 'right' ? 'md:flex-row-reverse' : 'md:flex-row';
  };

  return (
    <div className="w-full">
      <div
        className={`flex flex-col ${getFlexDirection()} ${getLayoutStyle()} gap-6 md:gap-7 lg:gap-8 items-center md:items-start px-4 sm:px-6 md:px-0`}
      >
        <div className="w-full max-w-sm sm:max-w-md md:w-60 lg:w-75 shrink-0">
          <div className="relative bg-[#0A0A0A] flex flex-col items-center justify-between w-full md:w-60 lg:w-75 min-h-62.5 sm:min-h-70 md:h-55 lg:h-62.5 border border-white/25 rounded-[20px] py-6 sm:py-8 md:py-0">
            <div className="flex items-center justify-center flex-1 w-full px-4 sm:px-6 md:px-0">
              <Image
                src={imageSrc}
                width={279}
                height={102}
                alt="Logo"
                className="object-contain w-full max-w-50 sm:max-w-62.5 md:max-w-55 lg:max-w-[279.19px] h-auto max-h-20 sm:max-h-22.5 md:max-h-20 lg:max-h-[101.59px]"
                loading="lazy"
                draggable={false}
              />
            </div>

            <Link href={websiteUrl} target="_blank" rel="noopener noreferrer">
              <button className="relative flex items-center justify-center mb-0 md:mb-6 lg:mb-7 group transition-all duration-300 hover:scale-105 active:scale-95 w-28 sm:w-30 h-9 sm:h-10 bg-black/[0.001] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-[10px]">
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
                  <span className="font-bold text-white transition-all duration-300 group-hover:-translate-x-0.5 font-lato text-lg sm:text-xl leading-6 w-10.25 h-6 absolute left-[calc(50%-41px/2-11.5px)] top-[calc(50%-24px/2)]">
                    Visit
                  </span>
                  <Image
                    src="/images/icons/arrow-up-right.svg"
                    alt="Arrow Right"
                    width={19}
                    height={16}
                    className="transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-px absolute w-4.75 h-4 left-[calc(50%-19px/2+22.5px)] top-1"
                  />
                </div>
              </button>
            </Link>
          </div>
        </div>

        <div
          className={`w-full max-w-sm sm:max-w-md md:w-70 lg:w-84.25 flex flex-col gap-4 text-center ${alignment === 'right' ? 'md:text-right' : 'md:text-left'}`}
        >
          <h2 className="font-bold text-white font-lato text-xl sm:text-2xl leading-tight sm:leading-7.25">
            {title}
          </h2>
          <p className="font-bold text-[#ADAAF7] font-lato text-sm sm:text-base leading-relaxed sm:leading-4.75">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SponsorCard;
