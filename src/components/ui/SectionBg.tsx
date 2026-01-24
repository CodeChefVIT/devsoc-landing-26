import Image from 'next/image';

export default function SectionBg({
  src,
  opacity = 'opacity-100',
  fullWidth = false,
}: {
  src: string;
  opacity?: string;
  fullWidth?: boolean;
}) {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
      <div
        className={`relative h-full ${
          fullWidth ? 'w-screen' : 'w-[140vw] md:w-[130vw] lg:w-[120vw]'
        }`}
      >
        <Image src={src} alt="" fill priority className={`object-fill scale-110 ${opacity}`} />
      </div>
    </div>
  );
}
