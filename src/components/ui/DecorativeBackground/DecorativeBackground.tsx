import { ReactNode } from 'react';

type DecorativeBackgroundProps = {
  children: ReactNode;
};

export default function DecorativeBackground({ children }: DecorativeBackgroundProps) {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              transparent calc(25vw - 0.5px),
              rgba(255,255,255,0.2) calc(25vw - 0.5px),
              rgba(255,255,255,0.2) calc(25vw + 0.5px),
              transparent calc(25vw + 0.5px)
            ),
            linear-gradient(
              to right,
              transparent calc(50vw - 0.5px),
              rgba(255,255,255,0.2) calc(50vw - 0.5px),
              rgba(255,255,255,0.2) calc(50vw + 0.5px),
              transparent calc(50vw + 0.5px)
            ),
            linear-gradient(
              to right,
              transparent calc(75vw - 0.5px),
              rgba(255,255,255,0.2) calc(75vw - 0.5px),
              rgba(255,255,255,0.2) calc(75vw + 0.5px),
              transparent calc(75vw + 0.5px)
            )
          `,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100vw 100%',
          backgroundPosition: 'left top',
          maskImage: 'linear-gradient(to bottom, transparent 0px, black 50px)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0px, black 50px)',
        }}
      />

      <div className="relative flex flex-col gap-10 md:gap-350 lg:gap-50 py-50">{children}</div>
    </div>
  );
}
