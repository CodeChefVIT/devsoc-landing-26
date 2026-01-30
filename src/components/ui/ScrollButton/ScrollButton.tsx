'use client';

import { useNavigation } from '@/contexts/NavigationContext';

interface ScrollButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function ScrollButton({ href, children, className, onClick }: ScrollButtonProps) {
  const { setIsNavigating } = useNavigation();

  const handleClick = () => {
    onClick?.();
    setIsNavigating(true);
    const element = document.querySelector(href);
    if (element) {
      // Delay scroll to allow mobile menu animation to complete
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
        // Reset navigating after scroll completes
        setTimeout(() => setIsNavigating(false), 1000);
      }, 350);
    }
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
