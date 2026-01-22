'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { navigationItems } from '@/data/navigation';

function getTimeLeft(target: Date) {
  const now = new Date().getTime();
  const diff = target.getTime() - now;
  if (diff <= 0) return '00:00:00:00';
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return [days, hours, minutes, seconds].map(v => String(v).padStart(2, '0')).join(':');
}

const targetDate = new Date('2026-02-06T00:00:00');

export default function Navbar() {
  const [time, setTime] = useState(getTimeLeft(targetDate));
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <motion.nav
      className="fixed top-4 md:top-8 lg:top-6 left-1/2 z-50 -translate-x-1/2 w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] lg:w-full max-w-360 px-3 md:px-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <motion.div
        className="relative flex items-center h-12 md:h-14 lg:h-16 rounded-lg md:rounded-xl backdrop-blur-[75px] backdrop-saturate-180 backdrop-brightness-110 border border-white/18 shadow-[0_8px_32px_0_rgba(0,0,0,0.37),inset_0_0_0_1px_rgba(255,255,255,0.18),0_0_50px_0_rgba(0,0,0,0.1)]"
        whileHover={{ scale: 1.002 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          className="absolute left-3 md:left-5 lg:left-6 flex items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <Link href={'/'}>
            <Image
              src="/icon.png"
              alt="DevSoc Logo"
              width={33}
              height={32}
              className="w-6 h-6 md:w-8 md:h-8 lg:w-8.25 lg:h-8 object-contain"
            />
          </Link>
        </motion.div>

        <motion.div
          className="absolute left-1/2 -translate-x-1/2 xl:left-[44.5%] xl:translate-x-0 hidden md:flex flex-col justify-center items-center py-1.5 md:py-2 px-4 md:px-5 min-w-35 md:min-w-37.5 h-9 md:h-9.5 rounded-lg md:rounded-xl backdrop-blur-[80px] backdrop-saturate-180 backdrop-brightness-115 border border-white/10 shadow-[0_4px_24px_0_rgba(0,0,0,0.25),inset_0_0_0_1px_rgba(255,255,255,0.15),0_0_50px_0_rgba(0,0,0,0.1)]"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.2 }}
        >
          <span className="font-lato font-bold text-base md:text-lg lg:text-xl leading-5 md:leading-6 text-white whitespace-nowrap tracking-wide">
            {time}
          </span>
        </motion.div>

        <div className="absolute right-3 md:right-5 lg:right-6 xl:right-[29.5px] hidden lg:flex items-center gap-4 lg:gap-5 xl:gap-6">
          {navigationItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <Link
                href={item.href}
                className="font-lato font-bold text-sm lg:text-[15px] leading-tight lg:leading-4.5 uppercase text-white hover:opacity-70 transition-all duration-200 whitespace-nowrap hover:scale-105 inline-block"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div className="absolute right-3 md:right-4 lg:hidden" whileTap={{ scale: 0.95 }}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center justify-center p-1.5 md:p-2 rounded-lg text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <motion.svg
              className="h-5 w-5 md:h-6 md:w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
              animate={isOpen ? { rotate: 90 } : { rotate: 0 }}
              transition={{ duration: 0.2 }}
            >
              {!isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              )}
            </motion.svg>
          </button>
        </motion.div>
      </motion.div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden absolute top-full left-0 right-0 rounded-lg md:rounded-xl mt-2 overflow-hidden backdrop-blur-[75px] backdrop-saturate-180 backdrop-brightness-110 border border-white/18 shadow-[0_8px_32px_0_rgba(0,0,0,0.37),inset_0_0_0_1px_rgba(255,255,255,0.18),0_0_50px_0_rgba(0,0,0,0.1)]"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.2 }}
                >
                  <Link
                    href={item.href}
                    className="text-white uppercase block px-3 py-2.5 text-sm md:text-[15px] font-bold leading-tight md:leading-4.5 hover:bg-white/10 border-b border-white/10 transition-all duration-200 rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                className="px-3 py-3 flex justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: navigationItems.length * 0.05, duration: 0.2 }}
              >
                <div className="flex items-center justify-center py-2 px-5 rounded-lg md:rounded-xl backdrop-blur-[80px] backdrop-saturate-180 backdrop-brightness-115 border border-white/10 shadow-[0_4px_24px_0_rgba(0,0,0,0.25),inset_0_0_0_1px_rgba(255,255,255,0.15),0_0_50px_0_rgba(0,0,0,0.1)]">
                  <span className="font-lato font-bold text-lg md:text-xl leading-5 md:leading-6 text-white tracking-wide">
                    {time}
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
