'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navigationItems } from '@/data/navigation';
import Timer from './Timer';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div className="absolute right-3 md:right-4 lg:hidden" whileTap={{ scale: 0.95 }}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center justify-center p-1.5 md:p-2 rounded-lg text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200"
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <motion.div
            className="h-5 w-5 md:h-6 md:w-6 flex items-center justify-center"
            aria-hidden="true"
            animate={isOpen ? { rotate: 90 } : { rotate: 0 }}
            transition={{ duration: 0.2 }}
          >
            {!isOpen ? <Menu className="h-full w-full" /> : <X className="h-full w-full" />}
          </motion.div>
        </button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden absolute top-full left-0 right-0 rounded-lg md:rounded-xl mt-2 overflow-hidden bg-[rgba(10,10,20,0.06)] backdrop-blur-xl shadow-recess"
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
              <Timer isMobile />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
