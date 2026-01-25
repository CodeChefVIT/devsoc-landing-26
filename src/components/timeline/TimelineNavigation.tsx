import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TimelineNavigationProps {
  scrollToIndex: (index: number) => void;
  activeIndex: number;
  eventsLength: number;
}

export function TimelineNavigation({
  scrollToIndex,
  activeIndex,
  eventsLength,
}: TimelineNavigationProps) {
  return (
    <div className="flex gap-4 z-30 pointer-events-auto md:col-start-10 lg:col-start-9 lg:col-span-2 justify-end">
      <button
        onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
        disabled={activeIndex === 0}
        className="w-12 h-12 rounded-full border border-white/20 bg-white/10 flex items-center justify-center hover:bg-white/20 hover:border-white/40 transition-all disabled:opacity-30 disabled:cursor-not-allowed group active:scale-95"
      >
        <ChevronLeft className="w-5 h-5 text-white bg-transparent" />
      </button>
      <button
        onClick={() => scrollToIndex(Math.min(eventsLength - 1, activeIndex + 1))}
        disabled={activeIndex === eventsLength - 1}
        className="w-12 h-12 rounded-full border border-white/20 bg-white/10 flex items-center justify-center hover:bg-white/20 hover:border-white/40 transition-all disabled:opacity-30 disabled:cursor-not-allowed group active:scale-95"
      >
        <ChevronRight className="w-5 h-5 text-white bg-transparent" />
      </button>
    </div>
  );
}
