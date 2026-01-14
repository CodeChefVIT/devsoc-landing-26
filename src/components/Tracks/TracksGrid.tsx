'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import type { CSSProperties } from 'react';
import type { Track } from '@/data/tracks';

export default function TracksGrid({ tracks }: { tracks: Track[] }) {
  const [columns, setColumns] = useState(1);

  useEffect(() => {
    function updateColumns() {
      const w = window.innerWidth;
      if (w >= 1280) setColumns(4);
      else if (w >= 1024) setColumns(3);
      else if (w >= 640) setColumns(2);
      else setColumns(1);
    }

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  const rows = Math.max(1, Math.ceil(tracks.length / columns));
  const gridWidthVh = (80 * columns) / rows;
  const containerStyle = { width: `${gridWidthVh}vh`, maxWidth: '100%' } as const;

  const cssVars = {
    ['--columns']: String(columns),
    ['--rows']: String(rows),
    ['--gap']: '1px',
  } as unknown as CSSProperties & Record<string, string>;

  return (
    <div
      style={{
        ...containerStyle,
        ...cssVars,
      }}
      className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px auto-rows-fr relative z-10 h-[80vh] box-border border border-[#474747] rounded-lg overflow-hidden"
    >
      <Image
        src="/images/backgrounds/bg-tracks.avif"
        alt="Tracks background"
        fill
        className="object-cover -z-10"
        priority
      />
      {tracks.map(t => (
        <div
          key={t.id}
          className="h-full flex items-center justify-center overflow-hidden box-border bg-clip-border"
        >
          <div className="relative h-full aspect-square max-w-full box-border">
            <div className="absolute inset-0 flex items-center justify-center">
              {t.image ? (
                <div className="relative w-full h-full">
                  <Image
                    src={t.image}
                    alt={t.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 25vw, 12vw"
                    draggable="false"
                  />
                </div>
              ) : t.transparent ? (
                <div className="w-full h-full p-3 bg-transparent flex justify-center items-center" />
              ) : (
                <div className="w-full h-full p-3 bg-[#161616] flex justify-center items-center">
                  <span className="text-base">{t.title}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
      {/* CSS-only overlay (see src/styles/globals.css) */}
      <div aria-hidden className="tracks-grid__overlay" />
    </div>
  );
}
