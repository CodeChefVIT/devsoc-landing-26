'use client';

import { useMemo } from 'react';
import { Alignment, Fit, Layout, useRive } from '@rive-app/react-canvas';

type Props = {
  artboard: string;
  className?: string;
};

export default function RiveHero({ artboard, className }: Props) {
  const layout = useMemo(() => new Layout({ fit: Fit.Contain, alignment: Alignment.Center }), []);

  const { RiveComponent } = useRive({
    src: '/rive/Hero.riv',
    artboard,
    stateMachines: ['State Machine 1'],
    autoplay: true,
    isTouchScrollEnabled: true,
    automaticallyHandleEvents: true,
    layout,
  });

  return <RiveComponent className={className} />;
}
