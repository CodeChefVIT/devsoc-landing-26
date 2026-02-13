import { TimelineItem } from '@/data';

export type TimelineTopProps = {
  currentEvent: TimelineItem;
};

export type TimelineMiddleProps = {
  currentEvent: TimelineItem;
  currentEventIndex: number;
  events: TimelineItem[];
  onIndexChange?: (i: number) => void;
};

export type TimelineBottomProps = {
  currentEvent: TimelineItem;
  onPrevious: () => void;
  onNext: () => void;
  hasPrevious?: boolean;
  hasNext?: boolean;
};
