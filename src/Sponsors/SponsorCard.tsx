import Image from 'next/image';

const ImageTextCard = ({
  imageOnLeft = true,
  imageSrc = '/icon.avif',
  title = 'Sponsor Name',
  description = 'Sponsor Description',
}) => {
  return (
    <div className="w-full">
      <div
        className={`flex flex-col ${imageOnLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-14 items-center`}
      >
        {/* Image Card */}
        <div className="w-full lg:w-[300px] shrink-0">
          <div
            className="relative bg-[#0A0A0A] flex flex-col items-center justify-between"
            style={{
              width: '300px',
              height: '250px',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              borderRadius: '20px',
              padding: '0',
            }}
          >
            <div className="flex items-center justify-center flex-1 w-full">
              <Image
                src={imageSrc}
                width={279}
                height={102}
                alt="Logo"
                className="object-contain"
                style={{ maxWidth: '279.19px', maxHeight: '101.59px' }}
              />
            </div>

            <button
              className="flex items-center justify-center gap-2 mb-7 hover:bg-white/5 transition-colors"
              style={{
                width: '120px',
                height: '40px',
                background: 'rgba(0, 0, 0, 0.001)',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                borderRadius: '10px',
              }}
            >
              <span
                className="font-bold text-white"
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: '20px',
                  lineHeight: '24px',
                }}
              >
                Visit
              </span>
              <Image
                src="/images/icons/arrow-up-right.svg"
                alt="Arrow Right"
                width={19}
                height={16}
              />
            </button>
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-[337px] flex flex-col gap-4">
          <h2
            className="font-bold text-white"
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: '24px',
              lineHeight: '29px',
            }}
          >
            {title}
          </h2>
          <p
            className="font-bold text-[#ADAAF7]"
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: '16px',
              lineHeight: '19px',
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageTextCard;
