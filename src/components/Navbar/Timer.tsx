'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Glass from '../ui/Glass/Glass';

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

interface TimerProps {
  className?: string;
  isMobile?: boolean;
}

export default function Timer({ className = '', isMobile = false }: TimerProps) {
  const [time, setTime] = useState(getTimeLeft(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  });

  if (isMobile) {
    return (
      <motion.div
        className={`px-3 py-3 flex justify-center ${className}`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        <Glass>
          <div className="flex items-center justify-center py-2 px-5">
            <span className="font-lato font-bold text-lg md:text-xl leading-5 md:leading-6 text-white tracking-wide">
              {time}
            </span>
          </div>
        </Glass>
      </motion.div>
    );
  }

  return (
    <motion.div
      className={`absolute left-1/2 -translate-x-1/2 xl:left-[44.5%] xl:translate-x-0 hidden md:flex ${className}`}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
    >
      <Glass>
        <div className="flex flex-col justify-center items-center py-1.5 md:py-2 px-4 md:px-5 min-w-35 md:min-w-37.5 h-9 md:h-9.5">
          <span className="font-lato font-bold text-base md:text-lg lg:text-xl leading-5 md:leading-6 text-white whitespace-nowrap tracking-wide">
            {time}
          </span>
        </div>
      </Glass>
    </motion.div>
  );
}
