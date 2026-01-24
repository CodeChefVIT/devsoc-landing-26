'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { navigationItems } from '@/data/navigation';

export default function DesktopNav() {
  return (
    <div className="flex items-center gap-5 lg:gap-6 xl:gap-7">
      {navigationItems.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 15,
            delay: index * 0.08,
          }}
        >
          <Link
            href={item.href}
            className="relative font-lato font-bold text-sm lg:text-[15px] xl:text-base leading-tight lg:leading-4.5 uppercase text-white whitespace-nowrap inline-block group"
          >
            <motion.span
              className="relative z-10"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              {item.label}
            </motion.span>
            <motion.span
              className="absolute -inset-2 bg-white/10 rounded-lg -z-10 blur-sm opacity-0 group-hover:opacity-100"
              initial={false}
              transition={{ duration: 0.3 }}
            />
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
