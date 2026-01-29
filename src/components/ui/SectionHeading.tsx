'use client';

import { useNavigation } from '@/contexts/NavigationContext';

export default function SectionHeading({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  const link = title.toLowerCase().replace(/\s+/g, '-');

  const { setIsNavigating } = useNavigation();

  const handleClick = () => {
    setIsNavigating(true);
    const element = document.querySelector(`#${link}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Reset navigating after scroll completes
      setTimeout(() => setIsNavigating(false), 1000);
    }
  };

  return (
    <h2
      id={link}
      onClick={handleClick}
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
        cursor-pointer
        ${className}
      `}
    >
      {title}
    </h2>
  );
}
