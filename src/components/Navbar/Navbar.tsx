'use client';

import { motion } from 'framer-motion';
import Glass from '../ui/Glass/Glass';
import Logo from './Logo';
import Timer from './Timer';
import DesktopNav from './DesktopNav';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  return (
    <motion.nav
      className="fixed top-4 md:top-8 lg:top-6 left-1/2 z-50 -translate-x-1/2 w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] lg:w-full max-w-6xl px-3 md:px-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <Glass className="shadow-4xl">
        <div className="relative rounded-2xl md:rounded-xl shadow-recess bg-[rgba(10,10,20,0.06)] backdrop-blur-xl overflow-hidden">
          {/* Desktop Layout */}
          <div className="hidden lg:flex items-center h-12 px-2.5 relative">
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
