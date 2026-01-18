'use client';

import Image from 'next/image';
import type { CSSProperties } from 'react';
import type { Track } from '@/data/tracks';

export default function TracksGrid({ tracks }: { tracks: Track[] }) {
  const columns = 4;
  const rows = 3;

  // keep a fixed 4x3 grid; render placeholders when there are fewer tracks
  const totalCells = columns * rows;
  const cells = Array.from({ length: totalCells }, (_, i) => tracks[i] ?? null);

  // scale the grid width by viewport height but never exceed viewport width
  const gridWidthVh = (80 * columns) / rows; // matches previous sizing intent
  const containerStyle = {
    // subtract the small-device horizontal margins (mx-4 -> 2rem total)
    width: `min(calc(100% - 2rem), ${gridWidthVh}vh)`,
    maxWidth: '100%',
    gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
    gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
  } as const;

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
      className="mx-4 sm:mx-auto grid gap-px auto-rows-fr relative z-10 aspect-square sm:h-[80vh] box-border border border-[#474747] rounded-3xl overflow-hidden"
    >
      <Image
        src="/images/backgrounds/bg-tracks.avif"
        alt="Tracks background"
        fill
        className="object-cover -z-10"
        priority
      />
      {cells.map((t, idx) => (
        <div
          key={idx}
          className="h-full flex items-center justify-center overflow-hidden box-border bg-clip-border"
        >
          <div className="relative h-full aspect-square max-w-full box-border">
            <div className="absolute inset-0 flex items-center justify-center">
              {t ? (
                t.image ? (
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
                )
              ) : (
                <div className="w-full h-full p-3 bg-[#161616] flex justify-center items-center" />
              )}
            </div>
          </div>
        </div>
      ))}
      <div aria-hidden className="tracks-grid__overlay" />
    </div>
  );
}
