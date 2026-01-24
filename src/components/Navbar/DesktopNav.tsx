'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { navigationItems } from '@/data/navigation';

export default function DesktopNav() {
  return (
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
  );
}
