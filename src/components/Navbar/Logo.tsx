'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useNavigation } from '@/contexts';

export default function Logo() {
  const { setIsNavigating } = useNavigation();

  const handleClick = () => {
    if (typeof window === 'undefined') return;

    setIsNavigating(true);

    window.scrollTo({ top: 0, behavior: 'smooth' });

    let timeout: ReturnType<typeof setTimeout> | null = null;

    const onScroll = () => {
      if (window.scrollY === 0) {
        setIsNavigating(false);
        window.removeEventListener('scroll', onScroll);
        if (timeout) clearTimeout(timeout);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    timeout = setTimeout(() => {
      setIsNavigating(false);
      window.removeEventListener('scroll', onScroll);
    }, 1200);
  };

  return (
    <motion.div className="flex items-center">
      <button onClick={handleClick} className="focus:outline-none">
        <Image
          src="/icon.webp"
          alt="DevSoc Logo"
          width={33}
          height={32}
          className="w-6 h-6 md:w-8 md:h-8 lg:w-8.25 lg:h-8 object-contain"
          draggable="false"
          loading="lazy"
        />
      </button>
    </motion.div>
  );
}
