'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollButton } from '@/components/ui';
import { navigationItems } from '@/data/navigation';
import Discord from './Discord';
import Timer from './Timer';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = () => {
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden w-full">
      <div className="relative flex items-center justify-between h-12 md:h-14 px-3 md:px-4">
        <div className="w-8" />

        <Discord />
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center justify-center p-1.5 md:p-2 rounded-lg text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200"
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
          whileTap={{ scale: 0.95 }}
        >
          <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
          <motion.div
            className="h-5 w-5 md:h-6 md:w-6"
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? <X className="h-full w-full" /> : <Menu className="h-full w-full" />}
          </motion.div>
        </motion.button>
      </div>

      {/* Expanded Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-3 md:px-4 pb-4 space-y-2">
              {/* Navigation Links */}
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.2 }}
                >
                  <ScrollButton
                    href={item.href}
                    onClick={handleScroll}
                    className="text-white uppercase block px-4 py-3 text-sm md:text-base font-bold hover:bg-white/10 rounded-lg transition-all duration-200 w-full text-left"
                  >
                    {item.label}
                  </ScrollButton>
                </motion.div>
              ))}

              {/* Timer */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navigationItems.length * 0.05, duration: 0.2 }}
                className="pt-2"
              >
                <Timer isMobile />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
