'use client';

import { useEffect, useMemo } from 'react';
import { Alignment, Fit, Layout, useRive } from '@rive-app/react-canvas';

type Props = {
  artboard: string;
  className?: string;
  onLoad?: () => void;
};

export default function RiveHero({ artboard, className, onLoad }: Props) {
  const layout = useMemo(() => new Layout({ fit: Fit.Contain, alignment: Alignment.Center }), []);

  const { rive, RiveComponent } = useRive({
    src: '/rive/Hero.riv',
    artboard,
    stateMachines: ['State Machine 1'],
    autoplay: true,
    isTouchScrollEnabled: true,
    automaticallyHandleEvents: true,
    layout,
  });

  useEffect(() => {
    if (rive) {
      onLoad?.();
    }
  }, [rive, onLoad]);

  return <RiveComponent className={className} style={{ willChange: 'transform' }} />;
}
