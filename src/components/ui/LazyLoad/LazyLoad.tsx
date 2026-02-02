'use client';

import { ReactNode, Suspense, useEffect, useRef, useState } from 'react';

type LazyLoadProps = {
  children: ReactNode;
  fallback?: ReactNode;
  threshold?: number;
};

export default function LazyLoad({
  children,
  fallback = <div className="min-h-screen" />,
  threshold = 0.1,
}: LazyLoadProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin: '50px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div ref={ref}>
      <Suspense fallback={fallback}>{isVisible ? children : fallback}</Suspense>
    </div>
  );
}
