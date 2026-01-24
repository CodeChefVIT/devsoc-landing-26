'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Logo() {
  return (
    <motion.div className="flex items-center">
      <Link href={'/'}>
        <Image
          src="/icon.png"
          alt="DevSoc Logo"
          width={33}
          height={32}
          className="w-6 h-6 md:w-8 md:h-8 lg:w-8.25 lg:h-8 object-contain"
        />
      </Link>
    </motion.div>
  );
}
