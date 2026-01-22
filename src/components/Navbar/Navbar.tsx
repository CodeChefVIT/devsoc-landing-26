'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { navigationItems } from '@/data/navigation';

function getTimeLeft(target: Date) {
  const now = new Date().getTime();
  const diff = target.getTime() - now;
  if (diff <= 0) return '00:00:00:00';
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return [days, hours, minutes, seconds].map(v => String(v).padStart(2, '0')).join(':');
}

const targetDate = new Date('2026-02-06T00:00:00');

export default function Navbar() {
  const [time, setTime] = useState(getTimeLeft(targetDate));
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <nav className="fixed top-5 md:top-10 left-1/2 z-50 -translate-x-1/2 w-full max-w-[1354.87px] px-4">
      {/* Main navbar with glass effect on border */}
      <div className="relative flex items-center h-14 rounded-[10px] bg-black/[0.01] backdrop-blur-[75px] border border-white/30">
        {/* Logo */}
        <div className="absolute left-4 md:left-[22px] flex items-center">
          <Link href={'/'}>
            <Image
              src="/icon.png"
              alt="DevSoc Logo"
              width={33}
              height={32}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Countdown Timer - positioned at left: 602.43px on desktop */}
        <div className="absolute left-1/2 -translate-x-1/2 xl:left-[44.5%] xl:translate-x-0 hidden md:flex flex-col justify-center items-center py-[7px] px-5 w-[150px] h-[38px] bg-black/[0.01] backdrop-blur-[80px] border border-white/10 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-[10px]">
          <span className="font-lato font-bold text-[20px] leading-6 text-white">{time}</span>
        </div>

        {/* Navigation - positioned at right with gap 25px */}
        <div className="absolute right-4 xl:right-[29.5px] hidden lg:flex items-center gap-[25px]">
          {navigationItems.map(item => (
            <Link
              key={item.label}
              href={item.href}
              className="font-lato font-bold text-[15px] leading-[18px] uppercase text-white hover:opacity-80 transition-opacity whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="absolute right-4 lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {!isOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-black/[0.01] backdrop-blur-[75px] border border-white/30 rounded-xl mt-2">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationItems.map(item => (
              <Link
                key={item.label}
                href={item.href}
                className="text-white uppercase block px-3 py-2 text-[15px] font-bold leading-[18px] hover:bg-white/10 border-b border-white/10"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-3 py-2 flex justify-center">
              <div className="flex items-center justify-center py-[7px] px-5 bg-black/[0.01] backdrop-blur-[80px] border border-white/10 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-[10px]">
                <span className="font-lato font-bold text-[20px] leading-6 text-white">{time}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
