'use client';

import { motion } from 'framer-motion';
import { navigationItems } from '@/data';
import { ScrollButton } from '@/components/ui';

export default function DesktopNav() {
  return (
    <div className="flex items-center gap-5 lg:gap-3 xl:gap-4">
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
          <ScrollButton
            href={item.href}
            className="relative font-lato font-bold text-sm lg:text-xs xl:text-sm leading-tight lg:leading-4.5 uppercase text-gray-200 hover:text-white whitespace-nowrap inline-block group transition-colors duration-200"
          >
            <motion.span
              className="relative z-10"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              {item.label}
            </motion.span>
          </ScrollButton>
        </motion.div>
      ))}
    </div>
  );
}
