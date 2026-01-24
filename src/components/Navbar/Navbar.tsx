'use client';

import { motion } from 'framer-motion';
import Glass from '../ui/Glass/Glass';
import Logo from './Logo';
import Timer from './Timer';
import DesktopNav from './DesktopNav';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  return (
    <Glass>
      <motion.nav
        className="fixed top-4 md:top-8 lg:top-6 left-1/2 z-50 -translate-x-1/2 w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] lg:w-full max-w-360 px-3 md:px-4 "
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <motion.div
          className="relative flex items-center h-12 md:h-14 lg:h-16 md:rounded-xl shadow-recess border border-white/18 bg-[rgba(10,10,20,0.06)] rounded-2xl p-8 shadow-recess backdrop-blur-xl"
          whileHover={{ scale: 1.002 }}
          transition={{ duration: 0.2 }}
        >
          <Logo />
          <Timer />
          <DesktopNav />
          <MobileMenu />
        </motion.div>
      </motion.nav>
    </Glass>
  );
}
