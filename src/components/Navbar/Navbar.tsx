'use client';

import { motion } from 'framer-motion';
import { Glass } from '@/components/ui';
import DesktopNav from './DesktopNav';
import MobileMenu from './MobileMenu';
import Logo from './Logo';
import Discord from './Discord';
import Timer from './Timer';

export default function Navbar() {
  return (
    <motion.nav
      className="fixed top-3 md:top-6 lg:top-3 inset-x-0 z-100 px-6 md:px-12 mx-auto max-w-6xl"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <Glass className="shadow-4xl">
        <div className="relative rounded-2xl md:rounded-xl shadow-recess bg-[rgba(10,10,20,0.06)] backdrop-blur-xl overflow-hidden">
          <div className="hidden lg:flex items-center h-12 px-2 relative">
            <div className="flex flex-row items-center gap-6 mr-auto">
              <Logo />
              <Discord />
            </div>
            <div className="absolute left-1/2 -translate-x-1/2">
              <Timer />
            </div>
            <div className="ml-auto">
              <DesktopNav />
            </div>
          </div>

          <div className="lg:hidden">
            <div className="absolute left-3 md:left-5 top-3 md:top-3.5 z-100">
              <Logo />
            </div>
            <MobileMenu />
          </div>
        </div>
      </Glass>
    </motion.nav>
  );
}
