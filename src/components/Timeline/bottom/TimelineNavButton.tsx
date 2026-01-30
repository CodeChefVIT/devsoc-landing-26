import { useRef, useState, useEffect, ReactNode } from 'react';

type Props = {
  onStep: () => void;
  ariaLabel?: string;
  children: ReactNode;
  disabled?: boolean;
};

export default function TimelineNavButton({
  onStep,
  ariaLabel,
  children,
  disabled = false,
}: Props) {
  const autoplayRef = useRef<number | null>(null);
  const holdTimeoutRef = useRef<number | null>(null);
  const [isHolding, setIsHolding] = useState(false);
  const [showHoldHint, setShowHoldHint] = useState(false);
  const isAutoplayingRef = useRef(false);

  const HINT_KEY = 'timelineHoldHint';
  type HintInfo = { lastShown: number; used: boolean };
  const [hintInfo, setHintInfo] = useState<HintInfo | null>(() => {
    try {
      if (typeof window === 'undefined') return null;
      const raw = window.localStorage.getItem(HINT_KEY);
      return raw ? (JSON.parse(raw) as HintInfo) : null;
    } catch {
      return null;
    }
  });

  const writeHintInfo = (used: boolean, ts = Date.now()) => {
    try {
      const info = { lastShown: ts, used };
      window.localStorage.setItem(HINT_KEY, JSON.stringify(info));
      setHintInfo(info);
      try {
        window.dispatchEvent(new CustomEvent('timelineHoldHintChanged', { detail: info }));
      } catch {}
    } catch {}
  };

  const shouldShowHintOnTap = () => {
    try {
      const info = hintInfo;
      const now = Date.now();
      if (!info) return true;
      const elapsed = now - info.lastShown;
      const MS_3H = 3 * 60 * 60 * 1000;
      const MS_6H = 6 * 60 * 60 * 1000;
      return info.used ? elapsed >= MS_6H : elapsed >= MS_3H;
    } catch {
      return true;
    }
  };

  const stopAutoplay = () => {
    isAutoplayingRef.current = false;
    if (autoplayRef.current) {
      window.clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };

  const startAutoplay = () => {
    // immediate step then repeat while holding
    onStep();
    stopAutoplay();
    isAutoplayingRef.current = true;
    autoplayRef.current = window.setInterval(() => {
      if (isAutoplayingRef.current) onStep();
    }, 160);
    // mark that the user used hold-based autoplay; suppress hint for 6 hours
    try {
      writeHintInfo(true);
    } catch {}
  };

  useEffect(() => {
    return () => {
      if (holdTimeoutRef.current) {
        window.clearTimeout(holdTimeoutRef.current);
        holdTimeoutRef.current = null;
      }
      stopAutoplay();
    };
  }, []);

  useEffect(() => {
    const handler = (e: Event) => {
      try {
        let info: HintInfo | null = null;
        if ((e as StorageEvent).key) {
          const se = e as StorageEvent;
          if (se.key !== HINT_KEY) return;
          info = se.newValue ? (JSON.parse(se.newValue) as HintInfo) : null;
        } else if ((e as CustomEvent).detail) {
          info = (e as CustomEvent).detail as HintInfo;
        }
        setHintInfo(info);
      } catch {}
    };

    window.addEventListener('storage', handler as EventListener);
    window.addEventListener('timelineHoldHintChanged', handler as EventListener);
    return () => {
      window.removeEventListener('storage', handler as EventListener);
      window.removeEventListener('timelineHoldHintChanged', handler as EventListener);
    };
  }, []);

  return (
    <button
      disabled={disabled}
      aria-disabled={disabled}
      onMouseDown={() => {
        if (disabled) return;
        setIsHolding(true);
        holdTimeoutRef.current = window.setTimeout(startAutoplay, 300);
      }}
      onMouseUp={() => {
        if (disabled) return;
        if (holdTimeoutRef.current) {
          window.clearTimeout(holdTimeoutRef.current);
          holdTimeoutRef.current = null;
          onStep();
          // show a one-time non-text hint after a simple tap to indicate holding
          if (shouldShowHintOnTap()) {
            writeHintInfo(false);
            setShowHoldHint(true);
            window.setTimeout(() => setShowHoldHint(false), 900);
          }
        } else {
          stopAutoplay();
        }
        setIsHolding(false);
      }}
      onMouseLeave={() => {
        if (holdTimeoutRef.current) {
          window.clearTimeout(holdTimeoutRef.current);
          holdTimeoutRef.current = null;
        }
        stopAutoplay();
        setIsHolding(false);
      }}
      onPointerUp={() => {
        if (disabled) return;
        // stop autoplay immediately on pointer release
        if (isAutoplayingRef.current) stopAutoplay();
        // don't clear holdTimeout here — let mouse/touch handlers detect quick taps
        setIsHolding(false);
      }}
      onPointerCancel={() => {
        if (disabled) return;
        if (isAutoplayingRef.current) stopAutoplay();
        setIsHolding(false);
      }}
      onTouchStart={() => {
        if (disabled) return;
        setIsHolding(true);
        holdTimeoutRef.current = window.setTimeout(startAutoplay, 300);
      }}
      onTouchEnd={() => {
        if (disabled) return;
        if (holdTimeoutRef.current) {
          window.clearTimeout(holdTimeoutRef.current);
          holdTimeoutRef.current = null;
          onStep();
          // show hint on touch as well
          if (shouldShowHintOnTap()) {
            writeHintInfo(false);
            setShowHoldHint(true);
            window.setTimeout(() => setShowHoldHint(false), 900);
          }
        } else {
          stopAutoplay();
        }
        setIsHolding(false);
      }}
      className={
        'relative w-17.5 h-17.5 md:w-20 md:h-20 rounded-full bg-neutral-900/31 border border-white/10 hover:bg-neutral-800/50 group shrink-0 ' +
        (disabled ? ' opacity-50 cursor-not-allowed hover:bg-neutral-900/31' : '')
      }
      style={{
        boxShadow:
          // active hold shadow
          isHolding && !disabled
            ? '0 0 0 15px rgba(255,255,255,0.2)'
            : // short hint pulse shown after first tap
              showHoldHint && !disabled
              ? '0 0 0 24px rgba(255,255,255,0.12)'
              : '0 0 0 0 rgba(255,255,255,0.2)',
        transition: 'box-shadow 240ms ease',
      }}
      aria-label={ariaLabel}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          if (!disabled) onStep();
        }
      }}
    >
      {children}
    </button>
  );
}
