'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
export default function Navbar() {
  const targetDate = new Date('2026-02-06T00:00:00');
  const [time, setTime] = useState(getTimeLeft(targetDate));
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="fixed top-5 md:top-10 left-1/2 z-50 -translate-x-1/2">
      <div
        className="
          flex items-center justify-between
          md:w-350 w-[95vw] h-16
          rounded-xl
          sm:border border-white/30
          bg-white/1
          backdrop-blur-xl
          px-10
        "
      >
        <div className="flex h-20 w-20 items-center justify-center">
          <Link href={'/'}>
            <Image
              src="/icon.png"
              alt="DevSoc Logo"
              width={35}
              height={35}
              className="object-contain"
            />
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-12 text-sm tracking-wide text-white font-bold">
          <Link href="#hero" className="hover:text-white transition">
            Hero
          </Link>
          <Link href="#about" className="hover:text-white transition">
            About
          </Link>
          <Link href="#tracks" className="hover:text-white transition">
            Tracks
          </Link>
          <Link href="#sponsors" className="hover:text-white transition">
            Sponsors
          </Link>
          <Link href="#timeline" className="hover:text-white transition">
            Timeline
          </Link>
          <Link href="#faqs" className="hover:text-white transition">
            Faq
          </Link>
        </div>
        <div
          className="hidden md:block
            rounded-xl
            border border-white/15
            bg-white/
            px-3 py-1
            font-mono text-3xl text-white
            backdrop-blur-lg
          "
        >
          {time}
        </div>
        <div className="md:hidden">
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
      {isOpen && (
        <div className="md:hidden absolute top-full right-0  bg-white/1 backdrop-blur-xl border border-white/30 rounded-xl mt-2">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="#hero"
              className="text-white block px-3 py-2 text-base font-medium hover:bg-white/10 border-b border-white/10"
              onClick={() => setIsOpen(false)}
            >
              Hero
            </Link>
            <Link
              href="#about"
              className="text-white block px-3 py-2 text-base font-medium hover:bg-white/10 border-b border-white/10"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="#tracks"
              className="text-white block px-3 py-2 text-base font-medium hover:bg-white/10 border-b border-white/10"
              onClick={() => setIsOpen(false)}
            >
              Tracks
            </Link>
            <Link
              href="#sponsors"
              className="text-white block px-3 py-2 text-base font-medium hover:bg-white/10 border-b border-white/10"
              onClick={() => setIsOpen(false)}
            >
              Sponsors
            </Link>
            <Link
              href="#timeline"
              className="text-white block px-3 py-2 text-base font-medium hover:bg-white/10 border-b border-white/10"
              onClick={() => setIsOpen(false)}
            >
              Timeline
            </Link>
            <Link
              href="#faqs"
              className="text-white block px-3 py-2 text-base font-medium hover:bg-white/10"
              onClick={() => setIsOpen(false)}
            >
              Faq
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
