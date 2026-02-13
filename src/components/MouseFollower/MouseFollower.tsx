'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function MouseFollower() {
  const [isDesktop, setIsDesktop] = useState(false);
  const followerRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const visible = useRef(false);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkDesktop();
    window.addEventListener('resize', checkDesktop);

    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  useEffect(() => {
    const follower = followerRef.current;
    if (!follower) return;

    // hide native cursor while mounted (use CSS class with !important to override element-level cursors)
    document.documentElement.classList.add('hide-cursor-mousefollower');

    pos.current.x = window.innerWidth / 2;
    pos.current.y = window.innerHeight / 2;
    mouse.current.x = pos.current.x;
    mouse.current.y = pos.current.y;
    follower.style.left = `${pos.current.x}px`;
    follower.style.top = `${pos.current.y}px`;

    const dot = dotRef.current;
    if (dot) {
      dot.style.left = `${pos.current.x}px`;
      dot.style.top = `${pos.current.y}px`;
      dot.style.transform = 'translate(-50%,-50%)';
      dot.style.opacity = '1';
    }

    let rafId = 0;

    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      if (!visible.current) {
        visible.current = true;
        follower.style.opacity = '1';
      }

      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
        dotRef.current.style.transform = 'translate(-50%,-50%)';
      }
    };

    const ease = 0.09;
    const tick = () => {
      const dx = mouse.current.x - pos.current.x;
      const dy = mouse.current.y - pos.current.y;

      pos.current.x += dx * ease;
      pos.current.y += dy * ease;
      follower.style.left = `${pos.current.x}px`;
      follower.style.top = `${pos.current.y}px`;
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove);
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);

      document.documentElement.classList.remove('hide-cursor-mousefollower');
    };
  }, []);

  return (
    <>
      {isDesktop && (
        <div
          ref={dotRef}
          aria-hidden="true"
          className="pointer-events-none fixed z-10000 w-3 h-3 rounded-full border border-pink-500 bg-transparent shadow-[0_0_8px_rgba(236,72,153,0.9)] flex items-center justify-center"
          style={{ left: '50%', top: '50%', transform: 'translate(-50% ,-50%)' }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-white" />
        </div>
      )}

      <div
        ref={followerRef}
        aria-hidden="true"
        className="pointer-events-none fixed z-9999 w-16 h-16 opacity-0 transition-opacity duration-300 hidden md:block"
        style={{ left: '50%', top: '50%', transform: 'translate(-40%,-50%)' }}
      >
        <Image
          src="/mascot/mascot.avif"
          alt=""
          width={64}
          height={64}
          draggable={false}
          style={{ display: 'block', borderRadius: '9999px' }}
        />
      </div>
    </>
  );
}
