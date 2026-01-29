'use client';

import { motion } from 'framer-motion';
import { Glass } from '@/components/ui';
import Logo from './Logo';
import Timer from './Timer';
import DesktopNav from './DesktopNav';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  return (
    <motion.nav
      className="fixed top-3 md:top-6 lg:top-3 inset-x-0 z-50 px-6 md:px-12 mx-auto max-w-6xl"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <Glass className="shadow-4xl">
        <div className="relative rounded-2xl md:rounded-xl shadow-recess bg-[rgba(10,10,20,0.06)] backdrop-blur-xl overflow-hidden">
          {/* Desktop Layout */}
          <div className="hidden lg:flex items-center h-10 px-2 relative">
            <Logo />
            <div className="absolute left-1/2 -translate-x-1/2">
              <Timer />
            </div>
            <div className="ml-auto">
              <DesktopNav />
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden">
            {/* Logo positioned absolutely on top */}
            <div className="absolute left-3 md:left-5 top-3 md:top-3.5 z-10">
              <Logo />
            </div>
            <MobileMenu />
          </div>
        </div>
      </Glass>
    </motion.nav>
  );
}
