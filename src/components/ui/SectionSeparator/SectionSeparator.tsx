import Image from 'next/image';

export default function SectionSeparator({
  imgUrl,
  width,
  height,
  className,
}: {
  imgUrl: string;
  width: number;
  height: number;
  className?: string;
}) {
  return (
    <div className="w-screen h-auto flex justify-center md:justify-start">
      <Image
        src={imgUrl}
        alt=""
        width={width}
        height={height}
        className={`${className || ''}`}
        aria-hidden="true"
        loading="lazy"
        draggable="false"
      />
    </div>
  );
}
