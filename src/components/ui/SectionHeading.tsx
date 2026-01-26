import Link from 'next/link';

export default function SectionHeading({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  const link = title.toLowerCase().replace(/\s+/g, '-');

  return (
    <Link href={`#${link}`} className="block">
      <h2
        id={link}
        className={`
          font-the-sans-mono
          font-bold
          text-white
          text-center
          text-[32px]
          leading-tight

          sm:text-[40px]
          md:text-[56px]
          lg:text-[72px]

          tracking-tight
          scroll-mt-28

          mb-16
          ${className}
        `}
      >
        {title}
      </h2>
    </Link>
  );
}
